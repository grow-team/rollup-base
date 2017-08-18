import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import rollupTypescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

let conf = {
  entry: 'src/main.ts',
  plugins: [
    rollupTypescript(),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**',
      exclude: [],
      extensions: [ '.js', '.ts' ],
      ignoreGlobal: false
    })
  ]
}

let _extend = function(obj,exObj) {
  for( let ex in exObj ){
    obj[ex] = exObj[ex];
  }
  return obj;
}
/**
 * default 的返回，可以使对象，也可以是数组，数组的话会依次打包
 */

export default [
  _extend({
     format: 'umd',
     dest: 'graph/out/bundle.js',
     moduleName: 'MyBundle'
  },conf),
  {
    entry: 'src/main.ts',
    dest: 'graph/out/bundle.min.js',
    format: 'umd',
    moduleName: 'MyBundle',
    plugins: [
        rollupTypescript(),
        nodeResolve(),
        commonjs({
        include: 'node_modules/**',
        exclude: [],
        extensions: [ '.js', '.ts' ],
        ignoreGlobal: false
        }),
        uglify()
    ]
  }
];

