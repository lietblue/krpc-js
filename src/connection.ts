import * as net from 'net';
import { EventEmitter } from 'events';
import * as protobuf from 'protobufjs/minimal';

export class Connection extends EventEmitter {
    private socket: net.Socket;
    private host: string;
    private port: number;
    private buffer: Buffer;

    constructor(host: string = '127.0.0.1', port: number = 50000) {
        super();
        this.host = host;
        this.port = port;
        this.socket = new net.Socket();
        this.buffer = Buffer.alloc(0);
    }

    async connect(): Promise<void> {
        return new Promise((resolve, reject) => {
            const onError = (err: Error) => {
                this.socket.removeListener('connect', onConnect);
                reject(err);
            };

            const onConnect = () => {
                this.socket.removeListener('error', onError);
                resolve();
            };

            this.socket.once('error', onError);
            this.socket.once('connect', onConnect);

            this.socket.connect(this.port, this.host);

            this.socket.on('data', (data) => {
                this.handleData(data as Buffer);
            });

            this.socket.on('close', () => {
                this.emit('close');
            });

            // Re-bind error listener for post-connection errors
            this.socket.on('error', (err) => {
                this.emit('error', err);
            });
        });
    }

    disconnect() {
        this.socket.end();
        this.socket.destroy();
    }

    receiveOnce(): Promise<Buffer> {
        return new Promise((resolve) => {
            this.once('message', (data) => {
                resolve(data);
            });
        });
    }

    send(message: Uint8Array) {
        const len = message.length;
        const writer = protobuf.Writer.create();
        writer.uint32(len);
        const lenBuffer = writer.finish();
        this.socket.write(lenBuffer);
        this.socket.write(message);
    }

    private handleData(data: Buffer) {
        this.buffer = Buffer.concat([this.buffer, data]);

        while (true) {
            if (this.buffer.length === 0) break;

            // Read varint length
            const reader = protobuf.Reader.create(this.buffer);
            let len: number;
            try {
                len = reader.uint32();
            } catch (e) {
                // Not enough data for varint
                break;
            }

            const varintLen = reader.pos; // Number of bytes used for varint

            if (this.buffer.length < varintLen + len) {
                // Not enough data for message
                break;
            }

            // Extract message
            const message = this.buffer.slice(varintLen, varintLen + len);
            this.buffer = this.buffer.slice(varintLen + len);

            this.emit('message', message);
        }
    }
}
