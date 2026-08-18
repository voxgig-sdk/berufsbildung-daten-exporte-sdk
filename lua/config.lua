-- BerufsbildungDatenExporte SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "BerufsbildungDatenExporte",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://data.tg.ch/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["berufsbildung"] = {},
      },
    },
    entity = {
      ["berufsbildung"] = {
        ["fields"] = {
          {
            ["name"] = "record",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "berufsbildung",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "exclude",
                      ["orig"] = "exclude",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "de",
                      ["kind"] = "query",
                      ["name"] = "lang",
                      ["orig"] = "lang",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "order_by",
                      ["orig"] = "order_by",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "refine",
                      ["orig"] = "refine",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "select",
                      ["orig"] = "select",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "UTC",
                      ["kind"] = "query",
                      ["name"] = "timezone",
                      ["orig"] = "timezone",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "where",
                      ["orig"] = "where",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/explore/v2.1/catalog/datasets/dek-abb-1/records",
                ["parts"] = {
                  "explore",
                  "v2.1",
                  "catalog",
                  "datasets",
                  "dek-abb-1",
                  "records",
                },
                ["select"] = {
                  ["exist"] = {
                    "exclude",
                    "lang",
                    "limit",
                    "offset",
                    "order_by",
                    "refine",
                    "select",
                    "timezone",
                    "where",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.records`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = ";",
                      ["kind"] = "query",
                      ["name"] = "delimiter",
                      ["orig"] = "delimiter",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "exclude",
                      ["orig"] = "exclude",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "de",
                      ["kind"] = "query",
                      ["name"] = "lang",
                      ["orig"] = "lang",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "refine",
                      ["orig"] = "refine",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "select",
                      ["orig"] = "select",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "UTC",
                      ["kind"] = "query",
                      ["name"] = "timezone",
                      ["orig"] = "timezone",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "where",
                      ["orig"] = "where",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/explore/v2.1/catalog/datasets/dek-abb-1/exports/{format}",
                ["parts"] = {
                  "explore",
                  "v2.1",
                  "catalog",
                  "datasets",
                  "dek-abb-1",
                  "exports",
                  "{format}",
                },
                ["select"] = {
                  ["exist"] = {
                    "delimiter",
                    "exclude",
                    "format",
                    "lang",
                    "refine",
                    "select",
                    "timezone",
                    "where",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "export",
            },
          },
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
