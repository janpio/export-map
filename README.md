# Challenges unifying Prisma Client imports via conditional exports

Folders:
- `/package` - Simple isomorphic package with one entrypoint for node, and one for workerd
- `/demo-package` - Demo project showing how importing this package from Npm works perfectly
- `/demo-folder-as-package` - Demo project showing how importing the package from a folder via `package.json` also works perfectly (to represent monorepo setups)
- `/demo-folder` - Demo project showing how importing directly via the path does _not_ work