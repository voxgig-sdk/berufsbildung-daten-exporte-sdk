# BerufsbildungDatenExporte SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "BerufsbildungDatenExporte",
            "slug": "berufsbildung-daten-exporte",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "now": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://data.tg.ch/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "berufsbildung": {},
            },
        },
        "entity": {
      "berufsbildung": {
        "fields": [
          {
            "name": "record",
            "title": "Record",
            "type": "`$OBJECT`",
          },
        ],
        "name": "berufsbildung",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/explore/v2.1/catalog/datasets/dek-abb-1/records",
                "segments": [
                  {
                    "lit": "explore",
                  },
                  {
                    "lit": "v2.1",
                  },
                  {
                    "lit": "catalog",
                  },
                  {
                    "lit": "datasets",
                  },
                  {
                    "lit": "dek-abb-1",
                  },
                  {
                    "lit": "records",
                  },
                ],
                "parts": [
                  "explore",
                  "v2.1",
                  "catalog",
                  "datasets",
                  "dek-abb-1",
                  "records",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.records`",
                },
                "args": {
                  "query": [
                    {
                      "name": "exclude",
                      "orig": "exclude",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "lang",
                      "orig": "lang",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "de",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 10,
                    },
                    {
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "order_by",
                      "orig": "order_by",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "refine",
                      "orig": "refine",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "select",
                      "orig": "select",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "timezone",
                      "orig": "timezone",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "UTC",
                    },
                    {
                      "name": "where",
                      "orig": "where",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/explore/v2.1/catalog/datasets/dek-abb-1/exports/{format}",
                "segments": [
                  {
                    "lit": "explore",
                  },
                  {
                    "lit": "v2.1",
                  },
                  {
                    "lit": "catalog",
                  },
                  {
                    "lit": "datasets",
                  },
                  {
                    "lit": "dek-abb-1",
                  },
                  {
                    "lit": "exports",
                  },
                  {
                    "var": "format",
                  },
                ],
                "parts": [
                  "explore",
                  "v2.1",
                  "catalog",
                  "datasets",
                  "dek-abb-1",
                  "exports",
                  "{format}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "delimiter",
                      "orig": "delimiter",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": ";",
                    },
                    {
                      "name": "exclude",
                      "orig": "exclude",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "lang",
                      "orig": "lang",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "de",
                    },
                    {
                      "name": "refine",
                      "orig": "refine",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "select",
                      "orig": "select",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "timezone",
                      "orig": "timezone",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "UTC",
                    },
                    {
                      "name": "where",
                      "orig": "where",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "format",
                  ],
                },
                "response": {
                  "alternatives": [
                    {
                      "binary": True,
                      "kind": "raw",
                      "media": "application/vnd.ms-excel",
                    },
                    {
                      "binary": True,
                      "kind": "raw",
                      "media": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                    },
                    {
                      "kind": "raw",
                      "media": "text/csv",
                    },
                  ],
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
