import * as net from 'net';
import * as protobuf from 'protobufjs/minimal';
import { krpc } from '../src/proto/krpc';

export class MockServer {
    private rpcServer: net.Server;
    private streamServer: net.Server;
    private rpcSockets: net.Socket[] = [];
    private streamSockets: net.Socket[] = [];
    private streamInterval: NodeJS.Timeout | null = null;
    private streams: Map<number, any> = new Map();

    constructor(private rpcPort: number = 50000, private streamPort: number = 50001) {
        this.rpcServer = net.createServer((socket) => this.handleRpcConnection(socket));
        this.streamServer = net.createServer((socket) => this.handleStreamConnection(socket));
    }

    start() {
        return Promise.all([
            new Promise<void>(resolve => this.rpcServer.listen(this.rpcPort, resolve)),
            new Promise<void>(resolve => this.streamServer.listen(this.streamPort, resolve))
        ]);
    }

    stop() {
        if (this.streamInterval) clearInterval(this.streamInterval);
        this.rpcSockets.forEach(s => s.destroy());
        this.streamSockets.forEach(s => s.destroy());
        this.rpcServer.close();
        this.streamServer.close();
    }

    private handleRpcConnection(socket: net.Socket) {
        this.rpcSockets.push(socket);
        let buffer = Buffer.alloc(0);

        socket.on('data', (data) => {
            buffer = Buffer.concat([buffer, data as Buffer]);
            while (true) {
                if (buffer.length === 0) break;
                const reader = protobuf.Reader.create(buffer);
                let len: number;
                try {
                    len = reader.uint32();
                } catch (e) { break; }

                const varintLen = reader.pos;
                if (buffer.length < varintLen + len) break;

                const msgData = buffer.slice(varintLen, varintLen + len);
                buffer = buffer.slice(varintLen + len);

                this.handleRpcMessage(socket, msgData);
            }
        });
    }

    private handleStreamConnection(socket: net.Socket) {
        this.streamSockets.push(socket);
        let buffer = Buffer.alloc(0);

        socket.on('data', (data) => {
             buffer = Buffer.concat([buffer, data as Buffer]);
            while (true) {
                if (buffer.length === 0) break;
                const reader = protobuf.Reader.create(buffer);
                let len: number;
                try {
                    len = reader.uint32();
                } catch (e) { break; }

                const varintLen = reader.pos;
                if (buffer.length < varintLen + len) break;

                const msgData = buffer.slice(varintLen, varintLen + len);
                buffer = buffer.slice(varintLen + len);

                this.handleStreamMessage(socket, msgData);
            }
        });

        this.streamInterval = setInterval(() => {
            this.sendStreamUpdates(socket);
        }, 100);
    }

    private handleRpcMessage(socket: net.Socket, data: Uint8Array) {
        try {
            const connReq = krpc.schema.ConnectionRequest.decode(data);
            if (connReq.type === krpc.schema.ConnectionRequest.Type.RPC) {
                const res = krpc.schema.ConnectionResponse.create({
                    status: krpc.schema.ConnectionResponse.Status.OK,
                    clientIdentifier: Buffer.from('TEST_CLIENT_ID')
                });
                this.send(socket, krpc.schema.ConnectionResponse.encode(res).finish());
                return;
            }
        } catch (e) {}

        try {
            const req = krpc.schema.Request.decode(data);
            const results: krpc.schema.ProcedureResult[] = [];

            for (const call of req.calls) {
                results.push(this.handleCall(call));
            }

            const res = krpc.schema.Response.create({ results });
            this.send(socket, krpc.schema.Response.encode(res).finish());
        } catch (e) {
            console.error(e);
        }
    }

    private handleStreamMessage(socket: net.Socket, data: Uint8Array) {
        try {
            const connReq = krpc.schema.ConnectionRequest.decode(data);
             if (connReq.type === krpc.schema.ConnectionRequest.Type.STREAM) {
                const res = krpc.schema.ConnectionResponse.create({
                    status: krpc.schema.ConnectionResponse.Status.OK,
                });
                this.send(socket, krpc.schema.ConnectionResponse.encode(res).finish());
            }
        } catch(e) {}
    }

    private handleCall(call: krpc.schema.IProcedureCall): krpc.schema.ProcedureResult {
        if (call.procedure === 'GetServices') {
            const services = this.createMockServices();
            return krpc.schema.ProcedureResult.create({
                value: krpc.schema.Services.encode(services).finish()
            });
        }
        if (call.procedure === 'GetStatus') {
             const status = krpc.schema.Status.create({ version: '1.0.0' });
             return krpc.schema.ProcedureResult.create({
                 value: krpc.schema.Status.encode(status).finish()
             });
        }
        if (call.procedure === 'AddStream') {
            const stream = krpc.schema.Stream.create({ id: 1 });
            this.streams.set(1, { id: 1 });
            return krpc.schema.ProcedureResult.create({
                value: krpc.schema.Stream.encode(stream).finish()
            });
        }
        if (call.procedure === 'RemoveStream') {
             return krpc.schema.ProcedureResult.create({});
        }

        return krpc.schema.ProcedureResult.create({});
    }

    private sendStreamUpdates(socket: net.Socket) {
        if (this.streams.size === 0) return;

        const results: krpc.schema.StreamResult[] = [];
        for (const [id, stream] of this.streams) {
            const status = krpc.schema.Status.create({ version: '1.0.0-stream' });
             results.push(krpc.schema.StreamResult.create({
                 id,
                 result: krpc.schema.ProcedureResult.create({
                     value: krpc.schema.Status.encode(status).finish()
                 })
             }));
        }

        const update = krpc.schema.StreamUpdate.create({ results });
        this.send(socket, krpc.schema.StreamUpdate.encode(update).finish());
    }

    private send(socket: net.Socket, data: Uint8Array) {
        const writer = protobuf.Writer.create();
        writer.uint32(data.length);
        socket.write(writer.finish());
        socket.write(data);
    }

    private createMockServices(): krpc.schema.Services {
        return krpc.schema.Services.create({
            services: [
                {
                    name: 'KRPC',
                    procedures: [
                        { name: 'GetStatus', returnType: { code: krpc.schema.Type.TypeCode.STATUS } },
                        { name: 'GetServices', returnType: { code: krpc.schema.Type.TypeCode.SERVICES } },
                        { name: 'AddStream', parameters: [{ type: { code: krpc.schema.Type.TypeCode.PROCEDURE_CALL } }], returnType: { code: krpc.schema.Type.TypeCode.STREAM } },
                        { name: 'RemoveStream', parameters: [{ type: { code: krpc.schema.Type.TypeCode.UINT64 } }] }
                    ]
                }
            ]
        });
    }
}
