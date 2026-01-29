import { krpc } from './proto/krpc';
import { Client } from './client';

export class ServiceBuilder {
    constructor(private client: Client) {}

    async getServices(): Promise<krpc.schema.Services> {
        const call = krpc.schema.ProcedureCall.create({
            service: 'KRPC',
            procedure: 'GetServices',
        });

        const response = await this.client.sendRequest([call]);

        if (response.error) {
            throw new Error(`RPC Error: ${response.error.description}`);
        }

        const result = response.results[0];
        if (result.error) {
             throw new Error(`Procedure Error: ${result.error.description}`);
        }

        return krpc.schema.Services.decode(result.value || new Uint8Array(0));
    }

    buildApi(servicesMsg: krpc.schema.Services): any {
        const api: any = {};

        for (const service of servicesMsg.services) {
            const serviceName = this.camelCase(service.name || '');
            const serviceApi = this.buildService(service);
            api[serviceName] = serviceApi;

            this.client.registerService(service.name || '', serviceApi);
        }

        return api;
    }

    private buildService(service: krpc.schema.IService): any {
        const serviceObj: any = {};
        const classes: any = {};

        // Initialize classes
        if (service.classes) {
            for (const cls of service.classes) {
                if (cls.name) {
                    classes[cls.name] = {
                        methods: {},
                        properties: {},
                        staticMethods: {}
                    };
                }
            }
        }

        // Handle procedures
        if (service.procedures) {
            for (const procedure of service.procedures) {
                if (!procedure.name) continue;

                if (procedure.name.includes('_')) {
                    const parts = procedure.name.split('_');
                    const className = parts[0];
                    // Check if it is valid class
                    if (classes[className]) {
                        const memberName = parts.slice(1).join('_');
                        this.attachClassMember(classes[className], memberName, procedure, service.name || '');
                    }
                    continue;
                }

                const procName = this.camelCase(procedure.name);
                const invoke = (...args: any[]) => {
                    return this.invokeProcedure(service.name || '', procedure.name || '', args, procedure);
                };
                this.attachMetadata(invoke, service.name || '', procedure.name, procedure);
                serviceObj[procName] = invoke;
            }
        }

        serviceObj._classes = classes;
        return serviceObj;
    }

    private attachClassMember(classDef: any, memberName: string, procedure: krpc.schema.IProcedure, serviceName: string) {
        if (memberName.startsWith('get_')) {
            const propName = this.camelCase(memberName.substring(4));
            classDef.properties[propName] = classDef.properties[propName] || {};
            classDef.properties[propName].get = procedure;
        } else if (memberName.startsWith('set_')) {
            const propName = this.camelCase(memberName.substring(4));
            classDef.properties[propName] = classDef.properties[propName] || {};
            classDef.properties[propName].set = procedure;
        } else if (memberName.startsWith('static_')) {
            const methodName = this.camelCase(memberName.substring(7));
            classDef.staticMethods[methodName] = procedure;
        } else {
            const methodName = this.camelCase(memberName);
            classDef.methods[methodName] = procedure;
        }
    }

    private attachMetadata(fn: any, service: string, procedure: string, def: krpc.schema.IProcedure) {
        fn.service = service;
        fn.procedure = procedure;
        fn.procedureDef = def;
    }

    private async invokeProcedure(service: string, procedure: string, args: any[], procDef: krpc.schema.IProcedure) {
        return this.client.invoke(service, procedure, args, procDef.parameters || [], procDef.returnType!);
    }

    private camelCase(str: string): string {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }
}
