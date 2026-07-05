# frozen_string_literal: true

# Typed models for the BerufsbildungDatenExporte SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Berufsbildung entity data model.
#
# @!attribute [rw] record
#   @return [Hash, nil]
Berufsbildung = Struct.new(
  :record,
  keyword_init: true
)

# Request payload for Berufsbildung#load.
#
# @!attribute [rw] format
#   @return [String]
BerufsbildungLoadMatch = Struct.new(
  :format,
  keyword_init: true
)

# Request payload for Berufsbildung#list.
#
# @!attribute [rw] record
#   @return [Hash, nil]
BerufsbildungListMatch = Struct.new(
  :record,
  keyword_init: true
)

