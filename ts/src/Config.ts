
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://data.tg.ch/api',

    auth: {
      prefix: 'Bearer',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      berufsbildung: {
      },

    }
  }


  entity = {
    "berufsbildung": {
      "fields": [
        {
          "name": "record",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 0
        }
      ],
      "name": "berufsbildung",
      "op": {
        "list": {
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "exclude",
                    "orig": "exclude",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": "de",
                    "kind": "query",
                    "name": "lang",
                    "orig": "lang",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "order_by",
                    "orig": "order_by",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "refine",
                    "orig": "refine",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "select",
                    "orig": "select",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": "UTC",
                    "kind": "query",
                    "name": "timezone",
                    "orig": "timezone",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "where",
                    "orig": "where",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/explore/v2.1/catalog/datasets/dek-abb-1/records",
              "parts": [
                "explore",
                "v2.1",
                "catalog",
                "datasets",
                "dek-abb-1",
                "records"
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
                  "where"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
        },
        "load": {
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "format",
                    "orig": "format",
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ],
                "query": [
                  {
                    "example": ";",
                    "kind": "query",
                    "name": "delimiter",
                    "orig": "delimiter",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "exclude",
                    "orig": "exclude",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": "de",
                    "kind": "query",
                    "name": "lang",
                    "orig": "lang",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "refine",
                    "orig": "refine",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "select",
                    "orig": "select",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": "UTC",
                    "kind": "query",
                    "name": "timezone",
                    "orig": "timezone",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "where",
                    "orig": "where",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/explore/v2.1/catalog/datasets/dek-abb-1/exports/{format}",
              "parts": [
                "explore",
                "v2.1",
                "catalog",
                "datasets",
                "dek-abb-1",
                "exports",
                "{format}"
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
                  "where"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": [
          [
            "export"
          ]
        ]
      }
    }
  }
}


const config = new Config()

export {
  config
}

