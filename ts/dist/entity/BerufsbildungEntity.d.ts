import { BerufsbildungDatenExporteEntityBase } from '../BerufsbildungDatenExporteEntityBase';
import type { BerufsbildungDatenExporteSDK } from '../BerufsbildungDatenExporteSDK';
import type { Control } from '../types';
import type { Berufsbildung, BerufsbildungLoadMatch, BerufsbildungListMatch } from '../BerufsbildungDatenExporteTypes';
declare class BerufsbildungEntity extends BerufsbildungDatenExporteEntityBase<Berufsbildung> {
    constructor(client: BerufsbildungDatenExporteSDK, entopts: any);
    make(this: BerufsbildungEntity): BerufsbildungEntity;
    load(this: any, reqmatch?: BerufsbildungLoadMatch, ctrl?: Control): Promise<BerufsbildungEntity>;
    list(this: any, reqmatch?: BerufsbildungListMatch, ctrl?: Control): Promise<BerufsbildungEntity[]>;
}
export { BerufsbildungEntity };
