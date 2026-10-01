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
            "lang": "v1",
            "limit": "v1",
            "offset": "v1",
            "order_by": "v1",
            "refine": "v1",
            "select": "v1",
            "timezone": "v1",
            "where": "v1"
        },
        "headers": [],
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
        "auth": null,
        "status": 200,
        "sample": {
            "total_count": 1,
            "records": [
                {
                    "record": {
                        "fields": {
                            "abschluesse_qualifikationsverfahren": 1,
                            "anzahl_lehrvertraege_total": 1,
                            "attestausweise": 1,
                            "ausbildungsfeld": "x",
                            "durchgefuehrte_qualifikationsverfahren": 1,
                            "faehigkeitsausweise": 1,
                            "jahr": 1,
                            "neu_registrierte_lehrvertraege": 1,
                            "repetenten": 1
                        },
                        "id": "x",
                        "timestamp": "2026-01-01T00:00:00Z"
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
            "delimiter": "v1",
            "exclude": "v1",
            "lang": "v1",
            "refine": "v1",
            "select": "v1",
            "timezone": "v1",
            "where": "v1"
        },
        "headers": [],
        "query": [
            "select",
            "where",
            "refine",
            "exclude",
            "lang",
            "delimiter",
            "timezone"
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