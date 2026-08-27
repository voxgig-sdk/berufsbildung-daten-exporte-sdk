-- Typed models for the BerufsbildungDatenExporte SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Berufsbildung
---@field record? table

---@class BerufsbildungLoadMatch
---@field format string
---@field delimiter? string
---@field exclude? string
---@field lang? string
---@field refine? string
---@field select? string
---@field timezone? string
---@field where? string

---@class BerufsbildungListMatch
---@field exclude? string
---@field lang? string
---@field limit? number
---@field offset? number
---@field order_by? string
---@field refine? string
---@field select? string
---@field timezone? string
---@field where? string

local M = {}

return M
