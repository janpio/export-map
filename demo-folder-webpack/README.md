# Demo: Folder

## Setup

- No dependency on package in `package.json`
- Direct import from relative folder `../../package` in function

## Commands
```
npm run build-node
npm run build-worker
```

## Result

- Build fails as import can not be resolved, webpack falls back to looking for `browser`:
```
ERROR in ./src/index.js 1:0-49
Module not found: Error: Can't resolve '../../package' in '/home/millsp/Throwaway/export-map/demo-folder-webpack/src'
resolve '../../package' in '/home/millsp/Throwaway/export-map/demo-folder-webpack/src'
  using description file: /home/millsp/Throwaway/export-map/demo-folder-webpack/package.json (relative path: ./src)
    Field 'browser' doesn't contain a valid alias configuration
    using description file: /home/millsp/Throwaway/package.json (relative path: ./export-map/package)
      no extension
        Field 'browser' doesn't contain a valid alias configuration
        /home/millsp/Throwaway/export-map/package is not a file
```
