# Demo Cloudflare and Folder

## Setup

- No dependency on package in `package.json`
- Direct import from relative folder `../../exports-map-example` in function

## Command
```
npx warngler build
```

## Result

- Build fails as import can not be resolved:
```
X [ERROR] Could not resolve "../../exports-map-example"

    src/index.js:1:33:
      1 │ import { randomCharacters } from "../../exports-map-example";
        ╵                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~
```