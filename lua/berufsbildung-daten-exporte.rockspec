package = "voxgig-sdk-berufsbildung-daten-exporte"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/berufsbildung-daten-exporte-sdk.git"
}
description = {
  summary = "BerufsbildungDatenExporte SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["berufsbildung-daten-exporte_sdk"] = "berufsbildung-daten-exporte_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
