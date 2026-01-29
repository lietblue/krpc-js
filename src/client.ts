import { Connection } from './connection';
import { krpc } from './proto/krpc';
import { EventEmitter } from 'events';
import * as protobuf from 'protobufjs/minimal';
import { Encoder } from './encoding';
import { Decoder } from './decoding';
import { ServiceBuilder } from './services';
import { Stream } from './stream';
import Long from 'long';

export class Client extends EventEmitter {
    private rpcConnection: Connection;
    private streamConnection: Connection;
    private clientId: Uint8Array | null = null;
    private pendingRequests: Array<{ resolve: (res: krpc.schema.Response) => void, reject: (err: any) => void }> = [];
    private streams: Map<number, Stream> = new Map();
    private decoder: Decoder;
    public services: any;
    private serviceMap: Map<string, any> = new Map();

    constructor(
        private host: string = '127.0.0.1',
        private rpcPort: number = 50000,
        private streamPort: number = 50001,
        private name: string = 'NodeJS Client'
    ) {
        super();
        this.rpcConnection = new Connection(host, rpcPort);
        this.streamConnection = new Connection(host, streamPort);
        this.decoder = new Decoder(this.createProxy.bind(this));
    }

    async connect() {
        await this.rpcConnection.connect();

        const req = krpc.schema.ConnectionRequest.create({
            type: krpc.schema.ConnectionRequest.Type.RPC,
            clientName: this.name
        });
        this.rpcConnection.send(krpc.schema.ConnectionRequest.encode(req).finish());

        const rpcResData = await this.rpcConnection.receiveOnce();
        const rpcRes = krpc.schema.ConnectionResponse.decode(rpcResData);

        if (rpcRes.status !== krpc.schema.ConnectionResponse.Status.OK) {
            throw new Error(`RPC Connection failed: ${rpcRes.message}`);
        }
        this.clientId = rpcRes.clientIdentifier;

        await this.streamConnection.connect();

        const streamReq = krpc.schema.ConnectionRequest.create({
            type: krpc.schema.ConnectionRequest.Type.STREAM,
            clientIdentifier: this.clientId
        });
        this.streamConnection.send(krpc.schema.ConnectionRequest.encode(streamReq).finish());

        const streamResData = await this.streamConnection.receiveOnce();
        const streamRes = krpc.schema.ConnectionResponse.decode(streamResData);

        if (streamRes.status !== krpc.schema.ConnectionResponse.Status.OK) {
             throw new Error(`Stream Connection failed: ${streamRes.message}`);
        }

        this.rpcConnection.on('message', (data) => this.onRpcMessage(data));
        this.streamConnection.on('message', (data) => this.onStreamMessage(data));

        // Load Services
        const serviceBuilder = new ServiceBuilder(this);
        const servicesMsg = await serviceBuilder.getServices();
        this.services = serviceBuilder.buildApi(servicesMsg);

        this.emit('open');
    }

    async sendRequest(calls: krpc.schema.IProcedureCall[]): Promise<krpc.schema.Response> {
        const req = krpc.schema.Request.create({ calls });
        const bytes = krpc.schema.Request.encode(req).finish();

        return new Promise<krpc.schema.Response>((resolve, reject) => {
            this.pendingRequests.push({ resolve, reject });
            this.rpcConnection.send(bytes);
        });
    }

    async invoke(service: string, procedure: string, args: any[], paramDefs: krpc.schema.IParameter[], returnType: krpc.schema.IType): Promise<any> {
        const callArgs = args.map((arg, i) => {
            return {
                position: i,
                value: Encoder.encode(arg, paramDefs[i].type!)
            };
        });

        const call = krpc.schema.ProcedureCall.create({
            service,
            procedure,
            arguments: callArgs
        });

        const response = await this.sendRequest([call]);

        if (response.error) {
            throw new Error(`${response.error.service}.${response.error.name}: ${response.error.description}\n${response.error.stackTrace}`);
        }

        const result = response.results[0];
        if (result.error) {
            throw new Error(`${result.error.service}.${result.error.name}: ${result.error.description}\n${result.error.stackTrace}`);
        }

        return this.decoder.decode(result.value || new Uint8Array(0), returnType);
    }

    async addStream(procedure: any, ...args: any[]): Promise<Stream> {
        let serviceName: string;
        let procedureName: string;
        let procDef: krpc.schema.Procedure;
        let allArgs: any[];

        if (procedure instanceof Promise && (procedure as any).procedureDef) {
            // Property getter stream
            serviceName = (procedure as any).service;
            procedureName = (procedure as any).procedure;
            procDef = (procedure as any).procedureDef;
            allArgs = (procedure as any).args || [];
        } else if (typeof procedure === 'function' && (procedure as any).procedureDef) {
            // Function/Method stream
            serviceName = (procedure as any).service;
            procedureName = (procedure as any).procedure;
            procDef = (procedure as any).procedureDef;
            const implicitArgs = (procedure as any).implicitArgs || [];
            allArgs = [...implicitArgs, ...args];
        } else {
             throw new Error("Invalid procedure for stream. Must be a function from client.services or a property promise");
        }

        const callArgs = allArgs.map((arg, i) => {
            return {
                position: i,
                value: Encoder.encode(arg, procDef.parameters[i].type!)
            };
        });

        const call = krpc.schema.ProcedureCall.create({
            service: serviceName,
            procedure: procedureName,
            arguments: callArgs
        });

        const callBytes = krpc.schema.ProcedureCall.encode(call).finish();

        const addStreamCall = krpc.schema.ProcedureCall.create({
            service: 'KRPC',
            procedure: 'AddStream',
            arguments: [{
                position: 0,
                value: callBytes
            }]
        });

        // AddStream has 2 arguments: call, start (bool, default true)
        // We leave start as default.

        const response = await this.sendRequest([addStreamCall]);

         if (response.error) {
            throw new Error(`${response.error.service}.${response.error.name}: ${response.error.description}`);
        }
        const result = response.results[0];
        if (result.error) {
            throw new Error(`${result.error.service}.${result.error.name}: ${result.error.description}`);
        }

        // Decode Stream message
        // AddStream returns a Stream message
        const streamMsg = krpc.schema.Stream.decode(result.value || new Uint8Array(0));
        const id = Long.fromValue(streamMsg.id).toNumber(); // Assuming id fits in number, usually does for standard usage. Long.toNumber() might be safe.

        if (!procDef.returnType) throw new Error("Return type missing in procedure definition");
        const stream = new Stream(id, this, procDef.returnType, this.decoder);
        this.streams.set(id, stream);
        return stream;
    }

    async removeStream(id: number | Long) {
        const numId = typeof id === 'number' ? id : (id as Long).toNumber();
        this.streams.delete(numId);

        const call = krpc.schema.ProcedureCall.create({
            service: 'KRPC',
            procedure: 'RemoveStream',
            arguments: [{
                position: 0,
                value: Encoder.encode(id, krpc.schema.Type.create({ code: krpc.schema.Type.TypeCode.UINT64 }))
            }]
        });

        await this.sendRequest([call]);
    }

    registerService(name: string, api: any) {
        this.serviceMap.set(name, api);
    }

    private createProxy(id: Long | number, serviceName: string, className: string): any {
        const service = this.serviceMap.get(serviceName);
        if (!service || !service._classes || !service._classes[className]) {
            return { id };
        }

        const classDef = service._classes[className];
        const client = this;

        return new Proxy({ id: typeof id === 'number' ? id : (id as Long).toNumber() }, {
            get: (target, prop) => {
                if (prop === 'id') return target.id;
                if (typeof prop !== 'string') return undefined;

                if (classDef.methods[prop]) {
                    const proc = classDef.methods[prop];
                    const invoke = (...args: any[]) => {
                        return client.invoke(serviceName, proc.name, [target.id, ...args], proc.parameters, proc.returnType);
                    };
                    (invoke as any).service = serviceName;
                    (invoke as any).procedure = proc.name;
                    (invoke as any).procedureDef = proc;
                    (invoke as any).implicitArgs = [target.id];
                    return invoke;
                }

                if (classDef.properties[prop] && classDef.properties[prop].get) {
                    const proc = classDef.properties[prop].get;
                    const promise = client.invoke(serviceName, proc.name, [target.id], proc.parameters, proc.returnType);
                    (promise as any).service = serviceName;
                    (promise as any).procedure = proc.name;
                    (promise as any).procedureDef = proc;
                    (promise as any).args = [target.id];
                    return promise;
                }

                return undefined;
            },
            set: (target, prop, value) => {
                 if (classDef.properties[prop as string] && classDef.properties[prop as string].set) {
                    const proc = classDef.properties[prop as string].set;
                    client.invoke(serviceName, proc.name, [target.id, value], proc.parameters, proc.returnType)
                        .catch(err => console.error(`Error setting ${String(prop)}:`, err));
                    return true;
                 }
                 return false;
            }
        });
    }

    private onRpcMessage(data: Uint8Array) {
        try {
            const response = krpc.schema.Response.decode(data);
            const pending = this.pendingRequests.shift();
            if (pending) {
                pending.resolve(response);
            } else {
                console.warn('Received unsolicited RPC response');
            }
        } catch (err) {
            console.error('Error decoding RPC message:', err);
            const pending = this.pendingRequests.shift();
            if (pending) pending.reject(err);
        }
    }

    private onStreamMessage(data: Uint8Array) {
        try {
            const update = krpc.schema.StreamUpdate.decode(data);
            for (const result of update.results) {
                if (!result.id) continue;
                const id = Long.fromValue(result.id).toNumber();
                const stream = this.streams.get(id);
                if (stream && result.result) {
                    stream.update(result.result as krpc.schema.ProcedureResult);
                }
            }
            this.emit('streamUpdate', update);
        } catch (err) {
            console.error('Error decoding Stream message:', err);
        }
    }

    disconnect() {
        this.rpcConnection.disconnect();
        this.streamConnection.disconnect();
        this.emit('close');
    }
}
