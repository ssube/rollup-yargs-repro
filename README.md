# Rollup/Yargs Error Repro Repo

This demonstrates an error when bundling Yargs using RollupJS' node-resolve plugin.

To build and demonstrate the error:

```shell
> make
./node_modules/.bin/rollup -c

src/index.ts → out/...
(!) Circular dependency
node_modules/yargs/build/lib/yargs-factory.js -> node_modules/yargs/build/lib/command.js -> node_modules/yargs/build/lib/yargs-factory.js
[!] Error: 'usage' is not exported by node_modules/yargs/index.mjs, imported by src/index.ts
https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module
src/index.ts (1:9)
1: import { usage } from 'yargs';
            ^
2: 
3: export function main() {
Error: 'usage' is not exported by node_modules/yargs/index.mjs, imported by src/index.ts
    at error (/home/ssube/code/ssube/rollup-yargs-repro/node_modules/rollup/dist/shared/rollup.js:5305:30)
    at Module.error (/home/ssube/code/ssube/rollup-yargs-repro/node_modules/rollup/dist/shared/rollup.js:9750:16)
    at Module.traceVariable (/home/ssube/code/ssube/rollup-yargs-repro/node_modules/rollup/dist/shared/rollup.js:10138:29)
    at ModuleScope.findVariable (/home/ssube/code/ssube/rollup-yargs-repro/node_modules/rollup/dist/shared/rollup.js:8899:39)
    at FunctionScope.findVariable (/home/ssube/code/ssube/rollup-yargs-repro/node_modules/rollup/dist/shared/rollup.js:2647:38)
    at ChildScope.findVariable (/home/ssube/code/ssube/rollup-yargs-repro/node_modules/rollup/dist/shared/rollup.js:2647:38)
    at Identifier.bind (/home/ssube/code/ssube/rollup-yargs-repro/node_modules/rollup/dist/shared/rollup.js:4035:40)
    at CallExpression.bind (/home/ssube/code/ssube/rollup-yargs-repro/node_modules/rollup/dist/shared/rollup.js:2734:23)
    at CallExpression.bind (/home/ssube/code/ssube/rollup-yargs-repro/node_modules/rollup/dist/shared/rollup.js:6761:15)
    at ExpressionStatement.bind (/home/ssube/code/ssube/rollup-yargs-repro/node_modules/rollup/dist/shared/rollup.js:2734:23)

Makefile:4: recipe for target 'build' failed
make: *** [build] Error 1
```
