import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import rollupTypescript from 'rollup-plugin-typescript';

export default {
  entry: 'src/main.ts',
  plugins: [
    rollupTypescript(),
    nodeResolve({
        jsnext: true,
        main: true
    }),
    commonjs({
      include: 'node_modules/**',
      exclude: [  ],
      extensions: [ '.js', '.ts' ],
      ignoreGlobal: false,
      sourceMap: false,
      namedExports: { './module.js': ['foo', 'bar' ] }
    })
      
  ],
  format: 'cjs',
  dest: 'out/bundle.js'
};