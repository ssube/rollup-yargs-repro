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
    commonjs(),
    resolve({
      mainFields: ['browser', 'main'],
      preferBuiltins: true,
    }),
    typescript(),
  ],
}];
