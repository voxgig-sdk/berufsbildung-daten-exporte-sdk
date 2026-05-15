package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "BerufsbildungDatenExporte",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://data.tg.ch/api",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"berufsbildung": map[string]any{},
			},
		},
		"entity": map[string]any{
			"berufsbildung": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "record",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 0,
					},
				},
				"name": "berufsbildung",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "exclude",
											"orig": "exclude",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "de",
											"kind": "query",
											"name": "lang",
											"orig": "lang",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "refine",
											"orig": "refine",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "select",
											"orig": "select",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "UTC",
											"kind": "query",
											"name": "timezone",
											"orig": "timezone",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "where",
											"orig": "where",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/explore/v2.1/catalog/datasets/dek-abb-1/records",
								"parts": []any{
									"explore",
									"v2.1",
									"catalog",
									"datasets",
									"dek-abb-1",
									"records",
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "format",
											"orig": "format",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
									"query": []any{
										map[string]any{
											"example": ";",
											"kind": "query",
											"name": "delimiter",
											"orig": "delimiter",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "exclude",
											"orig": "exclude",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "de",
											"kind": "query",
											"name": "lang",
											"orig": "lang",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "refine",
											"orig": "refine",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "select",
											"orig": "select",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "UTC",
											"kind": "query",
											"name": "timezone",
											"orig": "timezone",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "where",
											"orig": "where",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/explore/v2.1/catalog/datasets/dek-abb-1/exports/{format}",
								"parts": []any{
									"explore",
									"v2.1",
									"catalog",
									"datasets",
									"dek-abb-1",
									"exports",
									"{format}",
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"export",
						},
					},
				},
			},
		},
	}
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
