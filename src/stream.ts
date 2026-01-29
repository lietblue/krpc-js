import { Client } from './client';
import { krpc } from './proto/krpc';
import { Decoder } from './decoding';
import Long from 'long';

export class Stream {
    public value: any;
    private listeners: ((value: any) => void)[] = [];

    constructor(
        public id: number | Long,
        private client: Client,
        private returnType: krpc.schema.IType,
        private decoder: Decoder
    ) {}

    update(result: krpc.schema.ProcedureResult) {
        if (result.error) {
            console.error(`Stream ${this.id} error:`, result.error);
            return;
        }
        this.value = this.decoder.decode(result.value, this.returnType);
        for (const listener of this.listeners) {
            listener(this.value);
        }
    }

    addCallback(cb: (value: any) => void) {
        this.listeners.push(cb);
    }

    removeCallback(cb: (value: any) => void) {
        this.listeners = this.listeners.filter(l => l !== cb);
    }

    async remove() {
        await this.client.removeStream(this.id);
    }
}
