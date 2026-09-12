import { BerufsbildungEntity } from './entity/BerufsbildungEntity';
export type * from './BerufsbildungDatenExporteTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { BerufsbildungDatenExporteEntityBase } from './BerufsbildungDatenExporteEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class BerufsbildungDatenExporteSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Berufsbildung(entopts?: Record<string, any>): BerufsbildungEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): BerufsbildungDatenExporteSDK;
    tester(testopts?: any, sdkopts?: any): BerufsbildungDatenExporteSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof BerufsbildungDatenExporteSDK;
export { stdutil, config, BaseFeature, BerufsbildungDatenExporteEntityBase, BerufsbildungDatenExporteSDK, SDK, };
