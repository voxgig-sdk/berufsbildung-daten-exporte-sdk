// Typed models for the BerufsbildungDatenExporte SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Berufsbildung {
  record?: Record<string, any>
}

export interface BerufsbildungLoadMatch {
  format: string
  delimiter?: string
  exclude?: string
  lang?: string
  refine?: string
  select?: string
  timezone?: string
  where?: string
}

export interface BerufsbildungListMatch {
  exclude?: string
  lang?: string
  limit?: number
  offset?: number
  order_by?: string
  refine?: string
  select?: string
  timezone?: string
  where?: string
}

