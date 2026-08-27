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
#
# @!attribute [rw] delimiter
#   @return [String, nil]
#
# @!attribute [rw] exclude
#   @return [String, nil]
#
# @!attribute [rw] lang
#   @return [String, nil]
#
# @!attribute [rw] refine
#   @return [String, nil]
#
# @!attribute [rw] select
#   @return [String, nil]
#
# @!attribute [rw] timezone
#   @return [String, nil]
#
# @!attribute [rw] where
#   @return [String, nil]
BerufsbildungLoadMatch = Struct.new(
  :format,
  :delimiter,
  :exclude,
  :lang,
  :refine,
  :select,
  :timezone,
  :where,
  keyword_init: true
)

# Request payload for Berufsbildung#list.
#
# @!attribute [rw] exclude
#   @return [String, nil]
#
# @!attribute [rw] lang
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] refine
#   @return [String, nil]
#
# @!attribute [rw] select
#   @return [String, nil]
#
# @!attribute [rw] timezone
#   @return [String, nil]
#
# @!attribute [rw] where
#   @return [String, nil]
BerufsbildungListMatch = Struct.new(
  :exclude,
  :lang,
  :limit,
  :offset,
  :order_by,
  :refine,
  :select,
  :timezone,
  :where,
  keyword_init: true
)

