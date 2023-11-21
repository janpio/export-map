# Demo Node and Package

## Setup

- Reference to folder as dependency `package.json`
- Import with package name `janpio-exports-map-example` in function

## Command
```
npx esbuild src/index.js --bundle --platform=node --target=node18 --outfile=dist/index.js --format=cjs
```

## Result

- Build succeeds, and includes only content of `node.mjs` in bundle