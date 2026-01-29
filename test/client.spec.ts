import { Client } from '../src/client';
import { MockServer } from './mock-server';

describe('kRPC Client', () => {
    let server: MockServer;
    let client: Client;
    const RPC_PORT = 50002;
    const STREAM_PORT = 50003;

    beforeAll(async () => {
        server = new MockServer(RPC_PORT, STREAM_PORT);
        await server.start();
    });

    afterAll(() => {
        server.stop();
    });

    beforeEach(() => {
        client = new Client('127.0.0.1', RPC_PORT, STREAM_PORT);
    });

    afterEach(() => {
        client.disconnect();
    });

    test('should connect and fetch services', async () => {
        await client.connect();
        expect(client.services).toBeDefined();
        expect(client.services.kRPC).toBeDefined();
        expect(client.services.kRPC.getStatus).toBeDefined();
    });

    test('should invoke RPC', async () => {
        await client.connect();
        const status = await client.services.kRPC.getStatus();
        expect(status).toBeDefined();
        expect(status.version).toBe('1.0.0');
    });

    test('should add stream and receive updates', async () => {
        await client.connect();
        const stream = await client.addStream(client.services.kRPC.getStatus);
        expect(stream).toBeDefined();
        expect(stream.id).toBe(1);

        const updatePromise = new Promise<any>(resolve => {
            stream.addCallback((val) => {
                if (val && val.version === '1.0.0-stream') {
                    resolve(val);
                }
            });
        });

        const val = await updatePromise;
        expect(val.version).toBe('1.0.0-stream');

        await stream.remove();
    });
});
