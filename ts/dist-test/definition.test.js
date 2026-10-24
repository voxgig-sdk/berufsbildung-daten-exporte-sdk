"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "berufsbildung",
        "accessor": "Berufsbildung",
        "op": "list",
        "method": "GET",
        "path": "/explore/v2.1/catalog/datasets/dek-abb-1/records",
        "args": [],
        "select": {
            "exclude": "v1",
            "lang": "de",
            "limit": 10,
            "offset": 0,
            "order_by": "v1",
            "refine": "v1",
            "select": "v1",
            "timezone": "UTC",
            "where": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "select",
            "where",
            "limit",
            "offset",
            "order_by",
            "refine",
            "exclude",
            "lang",
            "timezone"
        ],
        "queryArgs": [
            {
                "name": "exclude",
                "wire": "exclude"
            },
            {
                "name": "lang",
                "wire": "lang"
            },
            {
                "name": "limit",
                "wire": "limit"
            },
            {
                "name": "offset",
                "wire": "offset"
            },
            {
                "name": "order_by",
                "wire": "order_by"
            },
            {
                "name": "refine",
                "wire": "refine"
            },
            {
                "name": "select",
                "wire": "select"
            },
            {
                "name": "timezone",
                "wire": "timezone"
            },
            {
                "name": "where",
                "wire": "where"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "total_count": 1,
            "records": [
                {
                    "record": {
                        "id": "x",
                        "timestamp": "2026-01-01T00:00:00Z",
                        "fields": {
                            "jahr": 1,
                            "ausbildungsfeld": "x",
                            "anzahl_lehrvertraege_total": 1,
                            "neu_registrierte_lehrvertraege": 1,
                            "abschluesse_qualifikationsverfahren": 1,
                            "repetenten": 1,
                            "durchgefuehrte_qualifikationsverfahren": 1,
                            "faehigkeitsausweise": 1,
                            "attestausweise": 1
                        }
                    }
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "berufsbildung",
        "accessor": "Berufsbildung",
        "op": "load",
        "method": "GET",
        "path": "/explore/v2.1/catalog/datasets/dek-abb-1/exports/{format}",
        "args": [
            {
                "name": "format",
                "wire": "format",
                "value": "p1"
            }
        ],
        "select": {
            "delimiter": ";",
            "exclude": "v1",
            "lang": "de",
            "refine": "v1",
            "select": "v1",
            "timezone": "UTC",
            "where": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "text/csv",
            "application/json",
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        ],
        "query": [
            "select",
            "where",
            "refine",
            "exclude",
            "lang",
            "delimiter",
            "timezone"
        ],
        "queryArgs": [
            {
                "name": "delimiter",
                "wire": "delimiter"
            },
            {
                "name": "exclude",
                "wire": "exclude"
            },
            {
                "name": "lang",
                "wire": "lang"
            },
            {
                "name": "refine",
                "wire": "refine"
            },
            {
                "name": "select",
                "wire": "select"
            },
            {
                "name": "timezone",
                "wire": "timezone"
            },
            {
                "name": "where",
                "wire": "where"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {},
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map