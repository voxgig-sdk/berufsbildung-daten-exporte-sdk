"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'BerufsbildungDatenExporte',
        slug: "berufsbildung-daten-exporte",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
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
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "now": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://data.tg.ch/api",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            berufsbildung: {},
        }
    };
    entity = {
        "berufsbildung": {
            "fields": [
                {
                    "name": "record",
                    "title": "Record",
                    "type": "`$OBJECT`"
                }
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
                                    "lit": "explore"
                                },
                                {
                                    "lit": "v2.1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "datasets"
                                },
                                {
                                    "lit": "dek-abb-1"
                                },
                                {
                                    "lit": "records"
                                }
                            ],
                            "parts": [
                                "explore",
                                "v2.1",
                                "catalog",
                                "datasets",
                                "dek-abb-1",
                                "records"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.records`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "exclude",
                                        "orig": "exclude",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "lang",
                                        "orig": "lang",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "de"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 10
                                    },
                                    {
                                        "name": "offset",
                                        "orig": "offset",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 0
                                    },
                                    {
                                        "name": "order_by",
                                        "orig": "order_by",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "refine",
                                        "orig": "refine",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "select",
                                        "orig": "select",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "timezone",
                                        "orig": "timezone",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "UTC"
                                    },
                                    {
                                        "name": "where",
                                        "orig": "where",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
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
                                    "lit": "explore"
                                },
                                {
                                    "lit": "v2.1"
                                },
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "datasets"
                                },
                                {
                                    "lit": "dek-abb-1"
                                },
                                {
                                    "lit": "exports"
                                },
                                {
                                    "var": "format"
                                }
                            ],
                            "parts": [
                                "explore",
                                "v2.1",
                                "catalog",
                                "datasets",
                                "dek-abb-1",
                                "exports",
                                "{format}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "delimiter",
                                        "orig": "delimiter",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": ";"
                                    },
                                    {
                                        "name": "exclude",
                                        "orig": "exclude",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "lang",
                                        "orig": "lang",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "de"
                                    },
                                    {
                                        "name": "refine",
                                        "orig": "refine",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "select",
                                        "orig": "select",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "timezone",
                                        "orig": "timezone",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "UTC"
                                    },
                                    {
                                        "name": "where",
                                        "orig": "where",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "format"
                                ]
                            },
                            "response": {
                                "alternatives": [
                                    {
                                        "binary": true,
                                        "kind": "raw",
                                        "media": "application/vnd.ms-excel"
                                    },
                                    {
                                        "binary": true,
                                        "kind": "raw",
                                        "media": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                    },
                                    {
                                        "kind": "raw",
                                        "media": "text/csv"
                                    }
                                ],
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map