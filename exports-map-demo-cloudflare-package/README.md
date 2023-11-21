# Demo Cloudflare and Package

## Setup

- Reference to package as dependency `package.json` (so it is installed on `npm install`)
- Import with package name `janpio-exports-map-example` in function

## Command
```
npx warngler build
```

## Result

- Build succeeds, and includes only content of `workerd.mjs` in bundle