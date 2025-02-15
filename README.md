# scheet.dev

Personal home/blog page for Raegan/Cameron Scheet to display her personal projects and such.

The website is still in development, however I like open source code so I have made the repo public so maybe someone could learn off of my work.

## Build Information

Commands to build the webpage are
-  `npm run start` for local testing
-  `npm run deploy:worker`: for website deployment

### wrangler.toml

The conf file, `wrangler.toml`, has been included in the projects `.gitignore` file to protect my cloudflare account and zone ID, however below is the format of the file.

Example layout for the `wrangler.toml` file

```toml
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