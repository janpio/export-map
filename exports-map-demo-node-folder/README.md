# Demo Node and Folder

## Setup

- No dependency on package in `package.json`
- Direct import from relative folder `../../exports-map-example` in function

## Command
```
npx esbuild src/index.js --bundle --platform=node --target=node18 --outfile=dist/index.js --format=cjs
```

## Result

- Build fails as import can not be resolved:
```
X [ERROR] Could not resolve "../../exports-map-example"

    src/index.js:1:33:
      1 │ import { randomCharacters } from "../../exports-map-example";
        ╵                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~

1 error
node:child_process:899
    throw err;
    ^

Error: Command failed: C:\Users\Jan\Documents\throwaway\export-map\exports-map-demo-node-folder\node_modules\@esbuild\win32-x64\esbuild.exe src/index.js --bundle --platform=node --target=node18 --outfile=dist/index.js --format=cjs
    at checkExecSyncError (node:child_process:861:11)
    at Object.execFileSync (node:child_process:896:15)
    at Object.<anonymous> (C:\Users\Jan\Documents\throwaway\export-map\exports-map-demo-node-folder\node_modules\esbuild\bin\esbuild:220:28)
    at Module._compile (node:internal/modules/cjs/loader:1198:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1252:10)
    at Module.load (node:internal/modules/cjs/loader:1076:32)
    at Function.Module._load (node:internal/modules/cjs/loader:911:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:22:47 {
  status: 1,
  signal: null,
  output: [ null, null, null ],
  pid: 5696,
  stdout: null,
  stderr: null
}
``````