# Demo: Folder as Package

## Setup

- Reference to folder as dependency in `package.json`
- Import with package name `janpio-exports-map-example` in function

## Commands
```
npm run build-node-esbuild
npm run build-cloudflare
npm run build-node-webpack
npm run build-worker-webpack
npm run build-node-rollup
npm run build-worker-rollup
```

## Result

- Build succeeds, and includes only content of `workerd.mjs` ✅ in bundle for `*-worker-*` and `*-cloudflare` builds

- Build succeeds, and includes only content of `node.js` ✅ in bundle for `*-node-*` builds
