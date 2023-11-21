# Demo Node and Folder

## Setup

- No dependency on package in `package.json`
- Direct import from relative folder `../../exports-map-example` in function

## Command
```
npx esbuild src/index.js --bundle --platform=node --target=node18 --outfile=dist/index.js --format=cjs
```

## Result

- 