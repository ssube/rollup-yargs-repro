import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default [{
  input: 'src/index.ts',
  output: {
    dir: 'out/',
    exports: 'named',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    alias({
      entries: {
        'yargs': './node_modules/yargs/index.cjs'
      },
    }),
    commonjs(),
    resolve({
      preferBuiltins: true,
    }),
    typescript(),
  ],
}];
