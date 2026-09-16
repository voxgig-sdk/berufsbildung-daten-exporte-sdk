-- BerufsbildungDatenExporte SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "BerufsbildungDatenExporte",
      slug = "berufsbildung-daten-exporte",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
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
                ["segments"] = {
                  {
                    ["lit"] = "explore",
                  },
                  {
                    ["lit"] = "v2.1",
                  },
                  {
                    ["lit"] = "catalog",
                  },
                  {
                    ["lit"] = "datasets",
                  },
                  {
                    ["lit"] = "dek-abb-1",
                  },
                  {
                    ["lit"] = "records",
                  },
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
                ["parts"] = {
                  "explore",
                  "v2.1",
                  "catalog",
                  "datasets",
                  "dek-abb-1",
                  "records",
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
                ["segments"] = {
                  {
                    ["lit"] = "explore",
                  },
                  {
                    ["lit"] = "v2.1",
                  },
                  {
                    ["lit"] = "catalog",
                  },
                  {
                    ["lit"] = "datasets",
                  },
                  {
                    ["lit"] = "dek-abb-1",
                  },
                  {
                    ["lit"] = "exports",
                  },
                  {
                    ["var"] = "format",
                  },
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
                ["parts"] = {
                  "explore",
                  "v2.1",
                  "catalog",
                  "datasets",
                  "dek-abb-1",
                  "exports",
                  "{format}",
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
