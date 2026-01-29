import { Client } from '../src/client';

async function main() {
    const client = new Client();

    try {
        console.log('Connecting to kRPC server...');
        await client.connect();
        console.log('Connected!');

        console.log('Fetching status...');
        const status = await client.services.kRPC.getStatus();
        console.log(`kRPC Version: ${status.version}`);
        console.log(`Bytes Read: ${status.bytesRead}`);
        console.log(`Bytes Written: ${status.bytesWritten}`);

        console.log('Creating stream for generic telemetry...');
        // Example: Stream of UT (Universal Time) - usually in SpaceCenter service
        // Since we are mocking/assuming, let's just stream getStatus again as a demo

        const stream = await client.addStream(client.services.kRPC.getStatus);

        console.log('Stream created. Listening for updates (5 seconds)...');
        stream.addCallback((s: any) => {
            console.log(`Stream update: Version=${s.version}, RPCs Executed=${s.rpcsExecuted}`);
        });

        await new Promise(resolve => setTimeout(resolve, 5000));

        console.log('Removing stream...');
        await stream.remove();

    } catch (err) {
        console.error('Error:', err);
    } finally {
        client.disconnect();
        console.log('Disconnected.');
    }
}

if (require.main === module) {
    main();
}
