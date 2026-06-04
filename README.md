# BerufsbildungDatenExporte SDK

Export vocational training data from Canton Thurgau, covering apprenticeship contracts and qualification completions since 2017

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Berufsbildung Daten Exporte

This SDK wraps the **Berufsbildung Daten Exporte** dataset published on the [Open Data Kanton Thurgau](https://data.tg.ch/) portal, the Swiss canton of Thurgau's open government data platform. The dataset tracks vocational education statistics from 2017 onward, including apprenticeship contracts, newly registered contracts, and qualification procedure completions broken down by training field.

What you can read from the API:

- Counts of active apprenticeship contracts (`Lehrverträge`) by year
- Newly registered apprenticeship contracts (`neu registrierte Lehrverträge`)
- Completed qualification procedures (`Abschlüsse der Qualifikationsverfahren`)
- Breakdowns by training field (`Ausbildungsfelder`)

The portal is built on the Opendatasoft platform, so records are queried via standard catalogue endpoints under `https://data.tg.ch/api` with JSON responses. CORS is enabled and no authentication is required for read access.

## Try it

**TypeScript**
```bash
npm install berufsbildung-daten-exporte
```

**Python**
```bash
pip install berufsbildung-daten-exporte-sdk
```

**PHP**
```bash
composer require voxgig/berufsbildung-daten-exporte-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/berufsbildung-daten-exporte-sdk/go
```

**Ruby**
```bash
gem install berufsbildung-daten-exporte-sdk
```

**Lua**
```bash
luarocks install berufsbildung-daten-exporte-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { BerufsbildungDatenExporteSDK } from 'berufsbildung-daten-exporte'

const client = new BerufsbildungDatenExporteSDK({})

// List all berufsbildungs
const berufsbildungs = await client.Berufsbildung().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o berufsbildung-daten-exporte-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "berufsbildung-daten-exporte": {
      "command": "/abs/path/to/berufsbildung-daten-exporte-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Berufsbildung** | Vocational training records from Canton Thurgau covering apprenticeship contracts, new registrations, and qualification completions per year and training field, exposed via the Opendatasoft dataset `berufsbildung-daten-exporte`. | `/explore/v2.1/catalog/datasets/dek-abb-1/records` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from berufsbildungdatenexporte_sdk import BerufsbildungDatenExporteSDK

client = BerufsbildungDatenExporteSDK({})

# List all berufsbildungs
berufsbildungs, err = client.Berufsbildung(None).list(None, None)

# Load a specific berufsbildung
berufsbildung, err = client.Berufsbildung(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'berufsbildungdatenexporte_sdk.php';

$client = new BerufsbildungDatenExporteSDK([]);

// List all berufsbildungs
[$berufsbildungs, $err] = $client->Berufsbildung(null)->list(null, null);

// Load a specific berufsbildung
[$berufsbildung, $err] = $client->Berufsbildung(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/berufsbildung-daten-exporte-sdk/go"

client := sdk.NewBerufsbildungDatenExporteSDK(map[string]any{})

// List all berufsbildungs
berufsbildungs, err := client.Berufsbildung(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "BerufsbildungDatenExporte_sdk"

client = BerufsbildungDatenExporteSDK.new({})

# List all berufsbildungs
berufsbildungs, err = client.Berufsbildung(nil).list(nil, nil)

# Load a specific berufsbildung
berufsbildung, err = client.Berufsbildung(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("berufsbildung-daten-exporte_sdk")

local client = sdk.new({})

-- List all berufsbildungs
local berufsbildungs, err = client:Berufsbildung(nil):list(nil, nil)

-- Load a specific berufsbildung
local berufsbildung, err = client:Berufsbildung(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = BerufsbildungDatenExporteSDK.test()
const result = await client.Berufsbildung().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = BerufsbildungDatenExporteSDK.test(None, None)
result, err = client.Berufsbildung(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = BerufsbildungDatenExporteSDK::test(null, null);
[$result, $err] = $client->Berufsbildung(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Berufsbildung(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = BerufsbildungDatenExporteSDK.test(nil, nil)
result, err = client.Berufsbildung(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Berufsbildung(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Berufsbildung Daten Exporte

- Upstream: [https://data.tg.ch/](https://data.tg.ch/)
- API docs: [https://data.tg.ch/api](https://data.tg.ch/api)

---

Generated from the Berufsbildung Daten Exporte OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
