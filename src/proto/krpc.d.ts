import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace krpc. */
export namespace krpc {

    /** Namespace schema. */
    namespace schema {

        /** Properties of a ConnectionRequest. */
        interface IConnectionRequest {

            /** ConnectionRequest type */
            type?: (krpc.schema.ConnectionRequest.Type|null);

            /** ConnectionRequest clientName */
            clientName?: (string|null);

            /** ConnectionRequest clientIdentifier */
            clientIdentifier?: (Uint8Array|null);
        }

        /** Represents a ConnectionRequest. */
        class ConnectionRequest implements IConnectionRequest {

            /**
             * Constructs a new ConnectionRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IConnectionRequest);

            /** ConnectionRequest type. */
            public type: krpc.schema.ConnectionRequest.Type;

            /** ConnectionRequest clientName. */
            public clientName: string;

            /** ConnectionRequest clientIdentifier. */
            public clientIdentifier: Uint8Array;

            /**
             * Creates a new ConnectionRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConnectionRequest instance
             */
            public static create(properties?: krpc.schema.IConnectionRequest): krpc.schema.ConnectionRequest;

            /**
             * Encodes the specified ConnectionRequest message. Does not implicitly {@link krpc.schema.ConnectionRequest.verify|verify} messages.
             * @param message ConnectionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConnectionRequest message, length delimited. Does not implicitly {@link krpc.schema.ConnectionRequest.verify|verify} messages.
             * @param message ConnectionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConnectionRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConnectionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.ConnectionRequest;

            /**
             * Decodes a ConnectionRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConnectionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.ConnectionRequest;

            /**
             * Verifies a ConnectionRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConnectionRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConnectionRequest
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.ConnectionRequest;

            /**
             * Creates a plain object from a ConnectionRequest message. Also converts values to other types if specified.
             * @param message ConnectionRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.ConnectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConnectionRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ConnectionRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ConnectionRequest {

            /** Type enum. */
            enum Type {
                RPC = 0,
                STREAM = 1
            }
        }

        /** Properties of a ConnectionResponse. */
        interface IConnectionResponse {

            /** ConnectionResponse status */
            status?: (krpc.schema.ConnectionResponse.Status|null);

            /** ConnectionResponse message */
            message?: (string|null);

            /** ConnectionResponse clientIdentifier */
            clientIdentifier?: (Uint8Array|null);
        }

        /** Represents a ConnectionResponse. */
        class ConnectionResponse implements IConnectionResponse {

            /**
             * Constructs a new ConnectionResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IConnectionResponse);

            /** ConnectionResponse status. */
            public status: krpc.schema.ConnectionResponse.Status;

            /** ConnectionResponse message. */
            public message: string;

            /** ConnectionResponse clientIdentifier. */
            public clientIdentifier: Uint8Array;

            /**
             * Creates a new ConnectionResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConnectionResponse instance
             */
            public static create(properties?: krpc.schema.IConnectionResponse): krpc.schema.ConnectionResponse;

            /**
             * Encodes the specified ConnectionResponse message. Does not implicitly {@link krpc.schema.ConnectionResponse.verify|verify} messages.
             * @param message ConnectionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IConnectionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConnectionResponse message, length delimited. Does not implicitly {@link krpc.schema.ConnectionResponse.verify|verify} messages.
             * @param message ConnectionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IConnectionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConnectionResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConnectionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.ConnectionResponse;

            /**
             * Decodes a ConnectionResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConnectionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.ConnectionResponse;

            /**
             * Verifies a ConnectionResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConnectionResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConnectionResponse
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.ConnectionResponse;

            /**
             * Creates a plain object from a ConnectionResponse message. Also converts values to other types if specified.
             * @param message ConnectionResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.ConnectionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConnectionResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ConnectionResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ConnectionResponse {

            /** Status enum. */
            enum Status {
                OK = 0,
                MALFORMED_MESSAGE = 1,
                TIMEOUT = 2,
                WRONG_TYPE = 3
            }
        }

        /** Properties of a Request. */
        interface IRequest {

            /** Request calls */
            calls?: (krpc.schema.IProcedureCall[]|null);
        }

        /** Represents a Request. */
        class Request implements IRequest {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IRequest);

            /** Request calls. */
            public calls: krpc.schema.IProcedureCall[];

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            public static create(properties?: krpc.schema.IRequest): krpc.schema.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link krpc.schema.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link krpc.schema.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.Request;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.Request;

            /**
             * Verifies a Request message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Request
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Request
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ProcedureCall. */
        interface IProcedureCall {

            /** ProcedureCall service */
            service?: (string|null);

            /** ProcedureCall procedure */
            procedure?: (string|null);

            /** ProcedureCall serviceId */
            serviceId?: (number|null);

            /** ProcedureCall procedureId */
            procedureId?: (number|null);

            /** ProcedureCall arguments */
            "arguments"?: (krpc.schema.IArgument[]|null);
        }

        /** Represents a ProcedureCall. */
        class ProcedureCall implements IProcedureCall {

            /**
             * Constructs a new ProcedureCall.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IProcedureCall);

            /** ProcedureCall service. */
            public service: string;

            /** ProcedureCall procedure. */
            public procedure: string;

            /** ProcedureCall serviceId. */
            public serviceId: number;

            /** ProcedureCall procedureId. */
            public procedureId: number;

            /** ProcedureCall arguments. */
            public arguments: krpc.schema.IArgument[];

            /**
             * Creates a new ProcedureCall instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcedureCall instance
             */
            public static create(properties?: krpc.schema.IProcedureCall): krpc.schema.ProcedureCall;

            /**
             * Encodes the specified ProcedureCall message. Does not implicitly {@link krpc.schema.ProcedureCall.verify|verify} messages.
             * @param message ProcedureCall message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IProcedureCall, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcedureCall message, length delimited. Does not implicitly {@link krpc.schema.ProcedureCall.verify|verify} messages.
             * @param message ProcedureCall message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IProcedureCall, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcedureCall message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcedureCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.ProcedureCall;

            /**
             * Decodes a ProcedureCall message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcedureCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.ProcedureCall;

            /**
             * Verifies a ProcedureCall message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProcedureCall message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProcedureCall
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.ProcedureCall;

            /**
             * Creates a plain object from a ProcedureCall message. Also converts values to other types if specified.
             * @param message ProcedureCall
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.ProcedureCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProcedureCall to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ProcedureCall
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Argument. */
        interface IArgument {

            /** Argument position */
            position?: (number|null);

            /** Argument value */
            value?: (Uint8Array|null);
        }

        /** Represents an Argument. */
        class Argument implements IArgument {

            /**
             * Constructs a new Argument.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IArgument);

            /** Argument position. */
            public position: number;

            /** Argument value. */
            public value: Uint8Array;

            /**
             * Creates a new Argument instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Argument instance
             */
            public static create(properties?: krpc.schema.IArgument): krpc.schema.Argument;

            /**
             * Encodes the specified Argument message. Does not implicitly {@link krpc.schema.Argument.verify|verify} messages.
             * @param message Argument message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IArgument, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Argument message, length delimited. Does not implicitly {@link krpc.schema.Argument.verify|verify} messages.
             * @param message Argument message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IArgument, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Argument message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Argument
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.Argument;

            /**
             * Decodes an Argument message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Argument
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.Argument;

            /**
             * Verifies an Argument message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Argument message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Argument
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.Argument;

            /**
             * Creates a plain object from an Argument message. Also converts values to other types if specified.
             * @param message Argument
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.Argument, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Argument to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Argument
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Response. */
        interface IResponse {

            /** Response error */
            error?: (krpc.schema.IError|null);

            /** Response results */
            results?: (krpc.schema.IProcedureResult[]|null);
        }

        /** Represents a Response. */
        class Response implements IResponse {

            /**
             * Constructs a new Response.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IResponse);

            /** Response error. */
            public error?: (krpc.schema.IError|null);

            /** Response results. */
            public results: krpc.schema.IProcedureResult[];

            /**
             * Creates a new Response instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Response instance
             */
            public static create(properties?: krpc.schema.IResponse): krpc.schema.Response;

            /**
             * Encodes the specified Response message. Does not implicitly {@link krpc.schema.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link krpc.schema.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.Response;

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.Response;

            /**
             * Verifies a Response message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Response message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Response
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.Response;

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @param message Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Response to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Response
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ProcedureResult. */
        interface IProcedureResult {

            /** ProcedureResult error */
            error?: (krpc.schema.IError|null);

            /** ProcedureResult value */
            value?: (Uint8Array|null);
        }

        /** Represents a ProcedureResult. */
        class ProcedureResult implements IProcedureResult {

            /**
             * Constructs a new ProcedureResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IProcedureResult);

            /** ProcedureResult error. */
            public error?: (krpc.schema.IError|null);

            /** ProcedureResult value. */
            public value: Uint8Array;

            /**
             * Creates a new ProcedureResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcedureResult instance
             */
            public static create(properties?: krpc.schema.IProcedureResult): krpc.schema.ProcedureResult;

            /**
             * Encodes the specified ProcedureResult message. Does not implicitly {@link krpc.schema.ProcedureResult.verify|verify} messages.
             * @param message ProcedureResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IProcedureResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcedureResult message, length delimited. Does not implicitly {@link krpc.schema.ProcedureResult.verify|verify} messages.
             * @param message ProcedureResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IProcedureResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcedureResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcedureResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.ProcedureResult;

            /**
             * Decodes a ProcedureResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcedureResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.ProcedureResult;

            /**
             * Verifies a ProcedureResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProcedureResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProcedureResult
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.ProcedureResult;

            /**
             * Creates a plain object from a ProcedureResult message. Also converts values to other types if specified.
             * @param message ProcedureResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.ProcedureResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProcedureResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ProcedureResult
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Error. */
        interface IError {

            /** Error service */
            service?: (string|null);

            /** Error name */
            name?: (string|null);

            /** Error description */
            description?: (string|null);

            /** Error stackTrace */
            stackTrace?: (string|null);
        }

        /** Represents an Error. */
        class Error implements IError {

            /**
             * Constructs a new Error.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IError);

            /** Error service. */
            public service: string;

            /** Error name. */
            public name: string;

            /** Error description. */
            public description: string;

            /** Error stackTrace. */
            public stackTrace: string;

            /**
             * Creates a new Error instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Error instance
             */
            public static create(properties?: krpc.schema.IError): krpc.schema.Error;

            /**
             * Encodes the specified Error message. Does not implicitly {@link krpc.schema.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link krpc.schema.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.Error;

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.Error;

            /**
             * Verifies an Error message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Error
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.Error;

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @param message Error
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Error to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Error
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StreamUpdate. */
        interface IStreamUpdate {

            /** StreamUpdate results */
            results?: (krpc.schema.IStreamResult[]|null);
        }

        /** Represents a StreamUpdate. */
        class StreamUpdate implements IStreamUpdate {

            /**
             * Constructs a new StreamUpdate.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IStreamUpdate);

            /** StreamUpdate results. */
            public results: krpc.schema.IStreamResult[];

            /**
             * Creates a new StreamUpdate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StreamUpdate instance
             */
            public static create(properties?: krpc.schema.IStreamUpdate): krpc.schema.StreamUpdate;

            /**
             * Encodes the specified StreamUpdate message. Does not implicitly {@link krpc.schema.StreamUpdate.verify|verify} messages.
             * @param message StreamUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IStreamUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StreamUpdate message, length delimited. Does not implicitly {@link krpc.schema.StreamUpdate.verify|verify} messages.
             * @param message StreamUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IStreamUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StreamUpdate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StreamUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.StreamUpdate;

            /**
             * Decodes a StreamUpdate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StreamUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.StreamUpdate;

            /**
             * Verifies a StreamUpdate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StreamUpdate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StreamUpdate
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.StreamUpdate;

            /**
             * Creates a plain object from a StreamUpdate message. Also converts values to other types if specified.
             * @param message StreamUpdate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.StreamUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StreamUpdate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StreamUpdate
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StreamResult. */
        interface IStreamResult {

            /** StreamResult id */
            id?: (number|Long|null);

            /** StreamResult result */
            result?: (krpc.schema.IProcedureResult|null);
        }

        /** Represents a StreamResult. */
        class StreamResult implements IStreamResult {

            /**
             * Constructs a new StreamResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IStreamResult);

            /** StreamResult id. */
            public id: (number|Long);

            /** StreamResult result. */
            public result?: (krpc.schema.IProcedureResult|null);

            /**
             * Creates a new StreamResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StreamResult instance
             */
            public static create(properties?: krpc.schema.IStreamResult): krpc.schema.StreamResult;

            /**
             * Encodes the specified StreamResult message. Does not implicitly {@link krpc.schema.StreamResult.verify|verify} messages.
             * @param message StreamResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IStreamResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StreamResult message, length delimited. Does not implicitly {@link krpc.schema.StreamResult.verify|verify} messages.
             * @param message StreamResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IStreamResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StreamResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StreamResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.StreamResult;

            /**
             * Decodes a StreamResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StreamResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.StreamResult;

            /**
             * Verifies a StreamResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StreamResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StreamResult
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.StreamResult;

            /**
             * Creates a plain object from a StreamResult message. Also converts values to other types if specified.
             * @param message StreamResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.StreamResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StreamResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StreamResult
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Services. */
        interface IServices {

            /** Services services */
            services?: (krpc.schema.IService[]|null);
        }

        /** Represents a Services. */
        class Services implements IServices {

            /**
             * Constructs a new Services.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IServices);

            /** Services services. */
            public services: krpc.schema.IService[];

            /**
             * Creates a new Services instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Services instance
             */
            public static create(properties?: krpc.schema.IServices): krpc.schema.Services;

            /**
             * Encodes the specified Services message. Does not implicitly {@link krpc.schema.Services.verify|verify} messages.
             * @param message Services message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IServices, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Services message, length delimited. Does not implicitly {@link krpc.schema.Services.verify|verify} messages.
             * @param message Services message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IServices, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Services message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Services
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.Services;

            /**
             * Decodes a Services message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Services
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.Services;

            /**
             * Verifies a Services message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Services message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Services
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.Services;

            /**
             * Creates a plain object from a Services message. Also converts values to other types if specified.
             * @param message Services
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.Services, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Services to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Services
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Service. */
        interface IService {

            /** Service name */
            name?: (string|null);

            /** Service procedures */
            procedures?: (krpc.schema.IProcedure[]|null);

            /** Service classes */
            classes?: (krpc.schema.IClass[]|null);

            /** Service enumerations */
            enumerations?: (krpc.schema.IEnumeration[]|null);

            /** Service exceptions */
            exceptions?: (krpc.schema.IException[]|null);

            /** Service documentation */
            documentation?: (string|null);
        }

        /** Represents a Service. */
        class Service implements IService {

            /**
             * Constructs a new Service.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IService);

            /** Service name. */
            public name: string;

            /** Service procedures. */
            public procedures: krpc.schema.IProcedure[];

            /** Service classes. */
            public classes: krpc.schema.IClass[];

            /** Service enumerations. */
            public enumerations: krpc.schema.IEnumeration[];

            /** Service exceptions. */
            public exceptions: krpc.schema.IException[];

            /** Service documentation. */
            public documentation: string;

            /**
             * Creates a new Service instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Service instance
             */
            public static create(properties?: krpc.schema.IService): krpc.schema.Service;

            /**
             * Encodes the specified Service message. Does not implicitly {@link krpc.schema.Service.verify|verify} messages.
             * @param message Service message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IService, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Service message, length delimited. Does not implicitly {@link krpc.schema.Service.verify|verify} messages.
             * @param message Service message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IService, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Service message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Service
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.Service;

            /**
             * Decodes a Service message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Service
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.Service;

            /**
             * Verifies a Service message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Service message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Service
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.Service;

            /**
             * Creates a plain object from a Service message. Also converts values to other types if specified.
             * @param message Service
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.Service, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Service to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Service
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Procedure. */
        interface IProcedure {

            /** Procedure name */
            name?: (string|null);

            /** Procedure parameters */
            parameters?: (krpc.schema.IParameter[]|null);

            /** Procedure returnType */
            returnType?: (krpc.schema.IType|null);

            /** Procedure returnIsNullable */
            returnIsNullable?: (boolean|null);

            /** Procedure gameScenes */
            gameScenes?: (krpc.schema.Procedure.GameScene[]|null);

            /** Procedure documentation */
            documentation?: (string|null);
        }

        /** Represents a Procedure. */
        class Procedure implements IProcedure {

            /**
             * Constructs a new Procedure.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IProcedure);

            /** Procedure name. */
            public name: string;

            /** Procedure parameters. */
            public parameters: krpc.schema.IParameter[];

            /** Procedure returnType. */
            public returnType?: (krpc.schema.IType|null);

            /** Procedure returnIsNullable. */
            public returnIsNullable: boolean;

            /** Procedure gameScenes. */
            public gameScenes: krpc.schema.Procedure.GameScene[];

            /** Procedure documentation. */
            public documentation: string;

            /**
             * Creates a new Procedure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Procedure instance
             */
            public static create(properties?: krpc.schema.IProcedure): krpc.schema.Procedure;

            /**
             * Encodes the specified Procedure message. Does not implicitly {@link krpc.schema.Procedure.verify|verify} messages.
             * @param message Procedure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IProcedure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Procedure message, length delimited. Does not implicitly {@link krpc.schema.Procedure.verify|verify} messages.
             * @param message Procedure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IProcedure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Procedure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Procedure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.Procedure;

            /**
             * Decodes a Procedure message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Procedure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.Procedure;

            /**
             * Verifies a Procedure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Procedure message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Procedure
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.Procedure;

            /**
             * Creates a plain object from a Procedure message. Also converts values to other types if specified.
             * @param message Procedure
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.Procedure, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Procedure to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Procedure
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Procedure {

            /** GameScene enum. */
            enum GameScene {
                SPACE_CENTER = 0,
                FLIGHT = 1,
                TRACKING_STATION = 2,
                EDITOR_VAB = 3,
                EDITOR_SPH = 4,
                MISSION_BUILDER = 5
            }
        }

        /** Properties of a Parameter. */
        interface IParameter {

            /** Parameter name */
            name?: (string|null);

            /** Parameter type */
            type?: (krpc.schema.IType|null);

            /** Parameter defaultValue */
            defaultValue?: (Uint8Array|null);

            /** Parameter nullable */
            nullable?: (boolean|null);
        }

        /** Represents a Parameter. */
        class Parameter implements IParameter {

            /**
             * Constructs a new Parameter.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IParameter);

            /** Parameter name. */
            public name: string;

            /** Parameter type. */
            public type?: (krpc.schema.IType|null);

            /** Parameter defaultValue. */
            public defaultValue: Uint8Array;

            /** Parameter nullable. */
            public nullable: boolean;

            /**
             * Creates a new Parameter instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Parameter instance
             */
            public static create(properties?: krpc.schema.IParameter): krpc.schema.Parameter;

            /**
             * Encodes the specified Parameter message. Does not implicitly {@link krpc.schema.Parameter.verify|verify} messages.
             * @param message Parameter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Parameter message, length delimited. Does not implicitly {@link krpc.schema.Parameter.verify|verify} messages.
             * @param message Parameter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Parameter message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Parameter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.Parameter;

            /**
             * Decodes a Parameter message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Parameter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.Parameter;

            /**
             * Verifies a Parameter message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Parameter message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Parameter
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.Parameter;

            /**
             * Creates a plain object from a Parameter message. Also converts values to other types if specified.
             * @param message Parameter
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.Parameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Parameter to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Parameter
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Class. */
        interface IClass {

            /** Class name */
            name?: (string|null);

            /** Class documentation */
            documentation?: (string|null);
        }

        /** Represents a Class. */
        class Class implements IClass {

            /**
             * Constructs a new Class.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IClass);

            /** Class name. */
            public name: string;

            /** Class documentation. */
            public documentation: string;

            /**
             * Creates a new Class instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Class instance
             */
            public static create(properties?: krpc.schema.IClass): krpc.schema.Class;

            /**
             * Encodes the specified Class message. Does not implicitly {@link krpc.schema.Class.verify|verify} messages.
             * @param message Class message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IClass, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Class message, length delimited. Does not implicitly {@link krpc.schema.Class.verify|verify} messages.
             * @param message Class message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IClass, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Class message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Class
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.Class;

            /**
             * Decodes a Class message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Class
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.Class;

            /**
             * Verifies a Class message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Class message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Class
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.Class;

            /**
             * Creates a plain object from a Class message. Also converts values to other types if specified.
             * @param message Class
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.Class, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Class to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Class
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Enumeration. */
        interface IEnumeration {

            /** Enumeration name */
            name?: (string|null);

            /** Enumeration values */
            values?: (krpc.schema.IEnumerationValue[]|null);

            /** Enumeration documentation */
            documentation?: (string|null);
        }

        /** Represents an Enumeration. */
        class Enumeration implements IEnumeration {

            /**
             * Constructs a new Enumeration.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IEnumeration);

            /** Enumeration name. */
            public name: string;

            /** Enumeration values. */
            public values: krpc.schema.IEnumerationValue[];

            /** Enumeration documentation. */
            public documentation: string;

            /**
             * Creates a new Enumeration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Enumeration instance
             */
            public static create(properties?: krpc.schema.IEnumeration): krpc.schema.Enumeration;

            /**
             * Encodes the specified Enumeration message. Does not implicitly {@link krpc.schema.Enumeration.verify|verify} messages.
             * @param message Enumeration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IEnumeration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Enumeration message, length delimited. Does not implicitly {@link krpc.schema.Enumeration.verify|verify} messages.
             * @param message Enumeration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IEnumeration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Enumeration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Enumeration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.Enumeration;

            /**
             * Decodes an Enumeration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Enumeration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.Enumeration;

            /**
             * Verifies an Enumeration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Enumeration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Enumeration
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.Enumeration;

            /**
             * Creates a plain object from an Enumeration message. Also converts values to other types if specified.
             * @param message Enumeration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.Enumeration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Enumeration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Enumeration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumerationValue. */
        interface IEnumerationValue {

            /** EnumerationValue name */
            name?: (string|null);

            /** EnumerationValue value */
            value?: (number|null);

            /** EnumerationValue documentation */
            documentation?: (string|null);
        }

        /** Represents an EnumerationValue. */
        class EnumerationValue implements IEnumerationValue {

            /**
             * Constructs a new EnumerationValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IEnumerationValue);

            /** EnumerationValue name. */
            public name: string;

            /** EnumerationValue value. */
            public value: number;

            /** EnumerationValue documentation. */
            public documentation: string;

            /**
             * Creates a new EnumerationValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumerationValue instance
             */
            public static create(properties?: krpc.schema.IEnumerationValue): krpc.schema.EnumerationValue;

            /**
             * Encodes the specified EnumerationValue message. Does not implicitly {@link krpc.schema.EnumerationValue.verify|verify} messages.
             * @param message EnumerationValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IEnumerationValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumerationValue message, length delimited. Does not implicitly {@link krpc.schema.EnumerationValue.verify|verify} messages.
             * @param message EnumerationValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IEnumerationValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumerationValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumerationValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.EnumerationValue;

            /**
             * Decodes an EnumerationValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumerationValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.EnumerationValue;

            /**
             * Verifies an EnumerationValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumerationValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumerationValue
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.EnumerationValue;

            /**
             * Creates a plain object from an EnumerationValue message. Also converts values to other types if specified.
             * @param message EnumerationValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.EnumerationValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumerationValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumerationValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Exception. */
        interface IException {

            /** Exception name */
            name?: (string|null);

            /** Exception documentation */
            documentation?: (string|null);
        }

        /** Represents an Exception. */
        class Exception implements IException {

            /**
             * Constructs a new Exception.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IException);

            /** Exception name. */
            public name: string;

            /** Exception documentation. */
            public documentation: string;

            /**
             * Creates a new Exception instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Exception instance
             */
            public static create(properties?: krpc.schema.IException): krpc.schema.Exception;

            /**
             * Encodes the specified Exception message. Does not implicitly {@link krpc.schema.Exception.verify|verify} messages.
             * @param message Exception message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IException, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Exception message, length delimited. Does not implicitly {@link krpc.schema.Exception.verify|verify} messages.
             * @param message Exception message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IException, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Exception message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Exception
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.Exception;

            /**
             * Decodes an Exception message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Exception
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.Exception;

            /**
             * Verifies an Exception message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Exception message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Exception
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.Exception;

            /**
             * Creates a plain object from an Exception message. Also converts values to other types if specified.
             * @param message Exception
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.Exception, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Exception to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Exception
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Type. */
        interface IType {

            /** Type code */
            code?: (krpc.schema.Type.TypeCode|null);

            /** Type service */
            service?: (string|null);

            /** Type name */
            name?: (string|null);

            /** Type types */
            types?: (krpc.schema.IType[]|null);
        }

        /** Represents a Type. */
        class Type implements IType {

            /**
             * Constructs a new Type.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IType);

            /** Type code. */
            public code: krpc.schema.Type.TypeCode;

            /** Type service. */
            public service: string;

            /** Type name. */
            public name: string;

            /** Type types. */
            public types: krpc.schema.IType[];

            /**
             * Creates a new Type instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Type instance
             */
            public static create(properties?: krpc.schema.IType): krpc.schema.Type;

            /**
             * Encodes the specified Type message. Does not implicitly {@link krpc.schema.Type.verify|verify} messages.
             * @param message Type message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Type message, length delimited. Does not implicitly {@link krpc.schema.Type.verify|verify} messages.
             * @param message Type message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Type message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Type
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.Type;

            /**
             * Decodes a Type message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Type
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.Type;

            /**
             * Verifies a Type message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Type message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Type
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.Type;

            /**
             * Creates a plain object from a Type message. Also converts values to other types if specified.
             * @param message Type
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.Type, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Type to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Type
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Type {

            /** TypeCode enum. */
            enum TypeCode {
                NONE = 0,
                DOUBLE = 1,
                FLOAT = 2,
                SINT32 = 3,
                SINT64 = 4,
                UINT32 = 5,
                UINT64 = 6,
                BOOL = 7,
                STRING = 8,
                BYTES = 9,
                CLASS = 100,
                ENUMERATION = 101,
                EVENT = 200,
                PROCEDURE_CALL = 201,
                STREAM = 202,
                STATUS = 203,
                SERVICES = 204,
                TUPLE = 300,
                LIST = 301,
                SET = 302,
                DICTIONARY = 303
            }
        }

        /** Properties of a Tuple. */
        interface ITuple {

            /** Tuple items */
            items?: (Uint8Array[]|null);
        }

        /** Represents a Tuple. */
        class Tuple implements ITuple {

            /**
             * Constructs a new Tuple.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.ITuple);

            /** Tuple items. */
            public items: Uint8Array[];

            /**
             * Creates a new Tuple instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Tuple instance
             */
            public static create(properties?: krpc.schema.ITuple): krpc.schema.Tuple;

            /**
             * Encodes the specified Tuple message. Does not implicitly {@link krpc.schema.Tuple.verify|verify} messages.
             * @param message Tuple message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.ITuple, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Tuple message, length delimited. Does not implicitly {@link krpc.schema.Tuple.verify|verify} messages.
             * @param message Tuple message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.ITuple, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Tuple message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Tuple
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.Tuple;

            /**
             * Decodes a Tuple message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Tuple
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.Tuple;

            /**
             * Verifies a Tuple message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Tuple message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Tuple
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.Tuple;

            /**
             * Creates a plain object from a Tuple message. Also converts values to other types if specified.
             * @param message Tuple
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.Tuple, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Tuple to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Tuple
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a List. */
        interface IList {

            /** List items */
            items?: (Uint8Array[]|null);
        }

        /** Represents a List. */
        class List implements IList {

            /**
             * Constructs a new List.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IList);

            /** List items. */
            public items: Uint8Array[];

            /**
             * Creates a new List instance using the specified properties.
             * @param [properties] Properties to set
             * @returns List instance
             */
            public static create(properties?: krpc.schema.IList): krpc.schema.List;

            /**
             * Encodes the specified List message. Does not implicitly {@link krpc.schema.List.verify|verify} messages.
             * @param message List message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified List message, length delimited. Does not implicitly {@link krpc.schema.List.verify|verify} messages.
             * @param message List message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a List message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns List
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.List;

            /**
             * Decodes a List message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns List
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.List;

            /**
             * Verifies a List message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a List message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns List
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.List;

            /**
             * Creates a plain object from a List message. Also converts values to other types if specified.
             * @param message List
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.List, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this List to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for List
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Set. */
        interface ISet {

            /** Set items */
            items?: (Uint8Array[]|null);
        }

        /** Represents a Set. */
        class Set implements ISet {

            /**
             * Constructs a new Set.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.ISet);

            /** Set items. */
            public items: Uint8Array[];

            /**
             * Creates a new Set instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Set instance
             */
            public static create(properties?: krpc.schema.ISet): krpc.schema.Set;

            /**
             * Encodes the specified Set message. Does not implicitly {@link krpc.schema.Set.verify|verify} messages.
             * @param message Set message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.ISet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Set message, length delimited. Does not implicitly {@link krpc.schema.Set.verify|verify} messages.
             * @param message Set message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.ISet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Set message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Set
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.Set;

            /**
             * Decodes a Set message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Set
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.Set;

            /**
             * Verifies a Set message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Set message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Set
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.Set;

            /**
             * Creates a plain object from a Set message. Also converts values to other types if specified.
             * @param message Set
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.Set, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Set to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Set
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Dictionary. */
        interface IDictionary {

            /** Dictionary entries */
            entries?: (krpc.schema.IDictionaryEntry[]|null);
        }

        /** Represents a Dictionary. */
        class Dictionary implements IDictionary {

            /**
             * Constructs a new Dictionary.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IDictionary);

            /** Dictionary entries. */
            public entries: krpc.schema.IDictionaryEntry[];

            /**
             * Creates a new Dictionary instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Dictionary instance
             */
            public static create(properties?: krpc.schema.IDictionary): krpc.schema.Dictionary;

            /**
             * Encodes the specified Dictionary message. Does not implicitly {@link krpc.schema.Dictionary.verify|verify} messages.
             * @param message Dictionary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IDictionary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Dictionary message, length delimited. Does not implicitly {@link krpc.schema.Dictionary.verify|verify} messages.
             * @param message Dictionary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IDictionary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Dictionary message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Dictionary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.Dictionary;

            /**
             * Decodes a Dictionary message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Dictionary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.Dictionary;

            /**
             * Verifies a Dictionary message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Dictionary message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Dictionary
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.Dictionary;

            /**
             * Creates a plain object from a Dictionary message. Also converts values to other types if specified.
             * @param message Dictionary
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.Dictionary, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Dictionary to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Dictionary
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DictionaryEntry. */
        interface IDictionaryEntry {

            /** DictionaryEntry key */
            key?: (Uint8Array|null);

            /** DictionaryEntry value */
            value?: (Uint8Array|null);
        }

        /** Represents a DictionaryEntry. */
        class DictionaryEntry implements IDictionaryEntry {

            /**
             * Constructs a new DictionaryEntry.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IDictionaryEntry);

            /** DictionaryEntry key. */
            public key: Uint8Array;

            /** DictionaryEntry value. */
            public value: Uint8Array;

            /**
             * Creates a new DictionaryEntry instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DictionaryEntry instance
             */
            public static create(properties?: krpc.schema.IDictionaryEntry): krpc.schema.DictionaryEntry;

            /**
             * Encodes the specified DictionaryEntry message. Does not implicitly {@link krpc.schema.DictionaryEntry.verify|verify} messages.
             * @param message DictionaryEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IDictionaryEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DictionaryEntry message, length delimited. Does not implicitly {@link krpc.schema.DictionaryEntry.verify|verify} messages.
             * @param message DictionaryEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IDictionaryEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DictionaryEntry message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DictionaryEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.DictionaryEntry;

            /**
             * Decodes a DictionaryEntry message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DictionaryEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.DictionaryEntry;

            /**
             * Verifies a DictionaryEntry message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DictionaryEntry message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DictionaryEntry
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.DictionaryEntry;

            /**
             * Creates a plain object from a DictionaryEntry message. Also converts values to other types if specified.
             * @param message DictionaryEntry
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.DictionaryEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DictionaryEntry to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DictionaryEntry
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Stream. */
        interface IStream {

            /** Stream id */
            id?: (number|Long|null);
        }

        /** Represents a Stream. */
        class Stream implements IStream {

            /**
             * Constructs a new Stream.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IStream);

            /** Stream id. */
            public id: (number|Long);

            /**
             * Creates a new Stream instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Stream instance
             */
            public static create(properties?: krpc.schema.IStream): krpc.schema.Stream;

            /**
             * Encodes the specified Stream message. Does not implicitly {@link krpc.schema.Stream.verify|verify} messages.
             * @param message Stream message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IStream, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Stream message, length delimited. Does not implicitly {@link krpc.schema.Stream.verify|verify} messages.
             * @param message Stream message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IStream, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Stream message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Stream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.Stream;

            /**
             * Decodes a Stream message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Stream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.Stream;

            /**
             * Verifies a Stream message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Stream message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Stream
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.Stream;

            /**
             * Creates a plain object from a Stream message. Also converts values to other types if specified.
             * @param message Stream
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.Stream, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Stream to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Stream
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Event. */
        interface IEvent {

            /** Event stream */
            stream?: (krpc.schema.IStream|null);
        }

        /** Represents an Event. */
        class Event implements IEvent {

            /**
             * Constructs a new Event.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IEvent);

            /** Event stream. */
            public stream?: (krpc.schema.IStream|null);

            /**
             * Creates a new Event instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Event instance
             */
            public static create(properties?: krpc.schema.IEvent): krpc.schema.Event;

            /**
             * Encodes the specified Event message. Does not implicitly {@link krpc.schema.Event.verify|verify} messages.
             * @param message Event message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Event message, length delimited. Does not implicitly {@link krpc.schema.Event.verify|verify} messages.
             * @param message Event message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Event message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Event
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.Event;

            /**
             * Decodes an Event message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Event
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.Event;

            /**
             * Verifies an Event message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Event message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Event
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.Event;

            /**
             * Creates a plain object from an Event message. Also converts values to other types if specified.
             * @param message Event
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Event to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Event
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Status. */
        interface IStatus {

            /** Status version */
            version?: (string|null);

            /** Status bytesRead */
            bytesRead?: (number|Long|null);

            /** Status bytesWritten */
            bytesWritten?: (number|Long|null);

            /** Status bytesReadRate */
            bytesReadRate?: (number|null);

            /** Status bytesWrittenRate */
            bytesWrittenRate?: (number|null);

            /** Status rpcsExecuted */
            rpcsExecuted?: (number|Long|null);

            /** Status rpcRate */
            rpcRate?: (number|null);

            /** Status oneRpcPerUpdate */
            oneRpcPerUpdate?: (boolean|null);

            /** Status maxTimePerUpdate */
            maxTimePerUpdate?: (number|null);

            /** Status adaptiveRateControl */
            adaptiveRateControl?: (boolean|null);

            /** Status blockingRecv */
            blockingRecv?: (boolean|null);

            /** Status recvTimeout */
            recvTimeout?: (number|null);

            /** Status timePerRpcUpdate */
            timePerRpcUpdate?: (number|null);

            /** Status pollTimePerRpcUpdate */
            pollTimePerRpcUpdate?: (number|null);

            /** Status execTimePerRpcUpdate */
            execTimePerRpcUpdate?: (number|null);

            /** Status streamRpcs */
            streamRpcs?: (number|null);

            /** Status streamRpcsExecuted */
            streamRpcsExecuted?: (number|Long|null);

            /** Status streamRpcRate */
            streamRpcRate?: (number|null);

            /** Status timePerStreamUpdate */
            timePerStreamUpdate?: (number|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IStatus);

            /** Status version. */
            public version: string;

            /** Status bytesRead. */
            public bytesRead: (number|Long);

            /** Status bytesWritten. */
            public bytesWritten: (number|Long);

            /** Status bytesReadRate. */
            public bytesReadRate: number;

            /** Status bytesWrittenRate. */
            public bytesWrittenRate: number;

            /** Status rpcsExecuted. */
            public rpcsExecuted: (number|Long);

            /** Status rpcRate. */
            public rpcRate: number;

            /** Status oneRpcPerUpdate. */
            public oneRpcPerUpdate: boolean;

            /** Status maxTimePerUpdate. */
            public maxTimePerUpdate: number;

            /** Status adaptiveRateControl. */
            public adaptiveRateControl: boolean;

            /** Status blockingRecv. */
            public blockingRecv: boolean;

            /** Status recvTimeout. */
            public recvTimeout: number;

            /** Status timePerRpcUpdate. */
            public timePerRpcUpdate: number;

            /** Status pollTimePerRpcUpdate. */
            public pollTimePerRpcUpdate: number;

            /** Status execTimePerRpcUpdate. */
            public execTimePerRpcUpdate: number;

            /** Status streamRpcs. */
            public streamRpcs: number;

            /** Status streamRpcsExecuted. */
            public streamRpcsExecuted: (number|Long);

            /** Status streamRpcRate. */
            public streamRpcRate: number;

            /** Status timePerStreamUpdate. */
            public timePerStreamUpdate: number;

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: krpc.schema.IStatus): krpc.schema.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link krpc.schema.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link krpc.schema.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Status
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MultiplexedRequest. */
        interface IMultiplexedRequest {

            /** MultiplexedRequest connectionRequest */
            connectionRequest?: (krpc.schema.IConnectionRequest|null);

            /** MultiplexedRequest request */
            request?: (krpc.schema.IRequest|null);
        }

        /** Represents a MultiplexedRequest. */
        class MultiplexedRequest implements IMultiplexedRequest {

            /**
             * Constructs a new MultiplexedRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IMultiplexedRequest);

            /** MultiplexedRequest connectionRequest. */
            public connectionRequest?: (krpc.schema.IConnectionRequest|null);

            /** MultiplexedRequest request. */
            public request?: (krpc.schema.IRequest|null);

            /**
             * Creates a new MultiplexedRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MultiplexedRequest instance
             */
            public static create(properties?: krpc.schema.IMultiplexedRequest): krpc.schema.MultiplexedRequest;

            /**
             * Encodes the specified MultiplexedRequest message. Does not implicitly {@link krpc.schema.MultiplexedRequest.verify|verify} messages.
             * @param message MultiplexedRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IMultiplexedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MultiplexedRequest message, length delimited. Does not implicitly {@link krpc.schema.MultiplexedRequest.verify|verify} messages.
             * @param message MultiplexedRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IMultiplexedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MultiplexedRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MultiplexedRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.MultiplexedRequest;

            /**
             * Decodes a MultiplexedRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MultiplexedRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.MultiplexedRequest;

            /**
             * Verifies a MultiplexedRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MultiplexedRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MultiplexedRequest
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.MultiplexedRequest;

            /**
             * Creates a plain object from a MultiplexedRequest message. Also converts values to other types if specified.
             * @param message MultiplexedRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.MultiplexedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MultiplexedRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MultiplexedRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MultiplexedResponse. */
        interface IMultiplexedResponse {

            /** MultiplexedResponse response */
            response?: (krpc.schema.IResponse|null);

            /** MultiplexedResponse streamUpdate */
            streamUpdate?: (krpc.schema.IStreamUpdate|null);
        }

        /** Represents a MultiplexedResponse. */
        class MultiplexedResponse implements IMultiplexedResponse {

            /**
             * Constructs a new MultiplexedResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: krpc.schema.IMultiplexedResponse);

            /** MultiplexedResponse response. */
            public response?: (krpc.schema.IResponse|null);

            /** MultiplexedResponse streamUpdate. */
            public streamUpdate?: (krpc.schema.IStreamUpdate|null);

            /**
             * Creates a new MultiplexedResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MultiplexedResponse instance
             */
            public static create(properties?: krpc.schema.IMultiplexedResponse): krpc.schema.MultiplexedResponse;

            /**
             * Encodes the specified MultiplexedResponse message. Does not implicitly {@link krpc.schema.MultiplexedResponse.verify|verify} messages.
             * @param message MultiplexedResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: krpc.schema.IMultiplexedResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MultiplexedResponse message, length delimited. Does not implicitly {@link krpc.schema.MultiplexedResponse.verify|verify} messages.
             * @param message MultiplexedResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: krpc.schema.IMultiplexedResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MultiplexedResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MultiplexedResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): krpc.schema.MultiplexedResponse;

            /**
             * Decodes a MultiplexedResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MultiplexedResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): krpc.schema.MultiplexedResponse;

            /**
             * Verifies a MultiplexedResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MultiplexedResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MultiplexedResponse
             */
            public static fromObject(object: { [k: string]: any }): krpc.schema.MultiplexedResponse;

            /**
             * Creates a plain object from a MultiplexedResponse message. Also converts values to other types if specified.
             * @param message MultiplexedResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: krpc.schema.MultiplexedResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MultiplexedResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MultiplexedResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
