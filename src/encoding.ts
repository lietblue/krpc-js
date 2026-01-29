import { krpc } from './proto/krpc';
import * as protobuf from 'protobufjs/minimal';
import Long from 'long';

export class Encoder {
    static encode(value: any, type: krpc.schema.IType): Uint8Array {
        const writer = protobuf.Writer.create();

        switch (type.code) {
            case krpc.schema.Type.TypeCode.DOUBLE:
                writer.double(value);
                break;
            case krpc.schema.Type.TypeCode.FLOAT:
                writer.float(value);
                break;
            case krpc.schema.Type.TypeCode.SINT32:
                writer.sint32(value);
                break;
            case krpc.schema.Type.TypeCode.SINT64:
                writer.sint64(value);
                break;
            case krpc.schema.Type.TypeCode.UINT32:
                writer.uint32(value);
                break;
            case krpc.schema.Type.TypeCode.UINT64:
                writer.uint64(value);
                break;
            case krpc.schema.Type.TypeCode.BOOL:
                writer.bool(value);
                break;
            case krpc.schema.Type.TypeCode.STRING:
                writer.string(value);
                break;
            case krpc.schema.Type.TypeCode.BYTES:
                writer.bytes(value);
                break;
            case krpc.schema.Type.TypeCode.CLASS:
                let id: number | Long;
                if (value && typeof value === 'object' && value.id !== undefined) {
                    id = value.id;
                } else {
                    id = value;
                }
                writer.uint64(id);
                break;
            case krpc.schema.Type.TypeCode.ENUMERATION:
                writer.int32(value);
                break;
            case krpc.schema.Type.TypeCode.LIST:
            case krpc.schema.Type.TypeCode.SET:
                const listMsg = krpc.schema.List.create({
                    items: (value as any[]).map(v => this.encode(v, type.types![0]))
                });
                return krpc.schema.List.encode(listMsg).finish();
            case krpc.schema.Type.TypeCode.TUPLE:
                const tupleMsg = krpc.schema.Tuple.create({
                    items: (value as any[]).map((v, i) => this.encode(v, type.types![i]))
                });
                return krpc.schema.Tuple.encode(tupleMsg).finish();
            case krpc.schema.Type.TypeCode.DICTIONARY:
                const dictMsg = krpc.schema.Dictionary.create({
                    entries: Array.from((value as Map<any, any>).entries()).map(([k, v]) => ({
                        key: this.encode(k, type.types![0]),
                        value: this.encode(v, type.types![1])
                    }))
                });
                return krpc.schema.Dictionary.encode(dictMsg).finish();
            case krpc.schema.Type.TypeCode.PROCEDURE_CALL:
                return krpc.schema.ProcedureCall.encode(value).finish();
            default:
                 // Fallback or error
                 throw new Error(`Unsupported type for encoding: ${type.code}`);
        }

        return writer.finish();
    }
}
