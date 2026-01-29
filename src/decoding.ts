import { krpc } from './proto/krpc';
import * as protobuf from 'protobufjs/minimal';
import Long from 'long';

export type ClassFactory = (id: Long | number, service: string, name: string) => any;

export class Decoder {
    constructor(private classFactory: ClassFactory) {}

    decode(buffer: Uint8Array, type: krpc.schema.IType): any {
        const reader = protobuf.Reader.create(buffer);

        switch (type.code) {
            case krpc.schema.Type.TypeCode.DOUBLE:
                return reader.double();
            case krpc.schema.Type.TypeCode.FLOAT:
                return reader.float();
            case krpc.schema.Type.TypeCode.SINT32:
                return reader.sint32();
            case krpc.schema.Type.TypeCode.SINT64:
                return reader.sint64();
            case krpc.schema.Type.TypeCode.UINT32:
                return reader.uint32();
            case krpc.schema.Type.TypeCode.UINT64:
                return reader.uint64();
            case krpc.schema.Type.TypeCode.BOOL:
                return reader.bool();
            case krpc.schema.Type.TypeCode.STRING:
                return reader.string();
            case krpc.schema.Type.TypeCode.BYTES:
                return reader.bytes();
            case krpc.schema.Type.TypeCode.CLASS:
                const id = reader.uint64();
                return this.classFactory(id as any, type.service!, type.name!);
            case krpc.schema.Type.TypeCode.ENUMERATION:
                return reader.int32();
            case krpc.schema.Type.TypeCode.LIST:
            case krpc.schema.Type.TypeCode.SET:
                const listMsg = krpc.schema.List.decode(buffer);
                return listMsg.items.map(item => this.decode(item, type.types![0]));
            case krpc.schema.Type.TypeCode.TUPLE:
                const tupleMsg = krpc.schema.Tuple.decode(buffer);
                return tupleMsg.items.map((item, i) => this.decode(item, type.types![i]));
            case krpc.schema.Type.TypeCode.DICTIONARY:
                const dictMsg = krpc.schema.Dictionary.decode(buffer);
                const map = new Map();
                for (const entry of dictMsg.entries) {
                    const key = this.decode(entry.key || new Uint8Array(0), type.types![0]);
                    const value = this.decode(entry.value || new Uint8Array(0), type.types![1]);
                    map.set(key, value);
                }
                return map;
            case krpc.schema.Type.TypeCode.STREAM:
                return krpc.schema.Stream.decode(buffer);
            case krpc.schema.Type.TypeCode.STATUS:
                return krpc.schema.Status.decode(buffer);
            case krpc.schema.Type.TypeCode.SERVICES:
                return krpc.schema.Services.decode(buffer);
            default:
                 // If NONE or unknown, return null or undefined?
                 // NONE type usually doesn't have value bytes?
                 // If code is NONE, usually we don't decode.
                 return null;
        }
    }
}
