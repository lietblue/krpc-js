import { MockServer } from '../test/mock-server';
import { Client } from '../src/client';

async function main() {
    const server = new MockServer();
    await server.start();
    console.log('Mock server started on ports 50000/50001');

    const client = new Client(); // Defaults to 127.0.0.1:50000/50001

    try {
        console.log('Connecting to kRPC server...');
        await client.connect();
        console.log('Connected!');

        const status = await client.services.kRPC.getStatus();
        console.log(`kRPC Version: ${status.version}`);

        const stream = await client.addStream(client.services.kRPC.getStatus);
        stream.addCallback((s: any) => {
            console.log(`Stream update: Version=${s.version}`);
        });

        await new Promise(resolve => setTimeout(resolve, 2000));
        await stream.remove();
    } catch (err) {
        console.error(err);
    } finally {
        client.disconnect();
        server.stop();
    }
}

main();
