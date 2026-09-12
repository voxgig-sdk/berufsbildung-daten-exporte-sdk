export interface Berufsbildung {
    record?: Record<string, any>;
}
export interface BerufsbildungLoadMatch {
    format: string;
    delimiter?: string;
    exclude?: string;
    lang?: string;
    refine?: string;
    select?: string;
    timezone?: string;
    where?: string;
}
export interface BerufsbildungListMatch {
    exclude?: string;
    lang?: string;
    limit?: number;
    offset?: number;
    order_by?: string;
    refine?: string;
    select?: string;
    timezone?: string;
    where?: string;
}
