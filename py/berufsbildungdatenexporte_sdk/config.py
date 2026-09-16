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
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "exclude",
                      "orig": "exclude",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "de",
                      "kind": "query",
                      "name": "lang",
                      "orig": "lang",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "order_by",
                      "orig": "order_by",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "refine",
                      "orig": "refine",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "select",
                      "orig": "select",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "UTC",
                      "kind": "query",
                      "name": "timezone",
                      "orig": "timezone",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "where",
                      "orig": "where",
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "select": {
                  "exist": [
                    "exclude",
                    "lang",
                    "limit",
                    "offset",
                    "order_by",
                    "refine",
                    "select",
                    "timezone",
                    "where",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.records`",
                },
                "parts": [
                  "explore",
                  "v2.1",
                  "catalog",
                  "datasets",
                  "dek-abb-1",
                  "records",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "format",
                      "orig": "format",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": ";",
                      "kind": "query",
                      "name": "delimiter",
                      "orig": "delimiter",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "exclude",
                      "orig": "exclude",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "de",
                      "kind": "query",
                      "name": "lang",
                      "orig": "lang",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "refine",
                      "orig": "refine",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "select",
                      "orig": "select",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "UTC",
                      "kind": "query",
                      "name": "timezone",
                      "orig": "timezone",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "where",
                      "orig": "where",
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "select": {
                  "exist": [
                    "delimiter",
                    "exclude",
                    "format",
                    "lang",
                    "refine",
                    "select",
                    "timezone",
                    "where",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "explore",
                  "v2.1",
                  "catalog",
                  "datasets",
                  "dek-abb-1",
                  "exports",
                  "{format}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "export",
            ],
          ],
        },
      },
    },
    }
