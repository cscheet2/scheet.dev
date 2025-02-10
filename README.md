# scheet.dev


#### wrangler.toml

Example layout for wrangler.toml file

```
name = "scheet-dev"
type = "javascript"

workers_dev = false

account_id = ""
zone_id = ""

compatibility_flags = [ "nodejs_compat" ]
compatibility_date = "2025-1-31"

assets = { directory = "build" }

routes = [
  "scheet.dev/*",
  "www.scheet.dev/*"
]
```