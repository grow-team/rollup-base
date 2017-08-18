let fs = require( 'fs' );
let commonjs = require( 'rollup-plugin-commonjs' );
let resolve = require( 'rollup-plugin-node-resolve' );
let rollupTypescript = require( 'rollup-plugin-typescript' );

let rollup = require( 'rollup' );
let cache;

/**
 * 调用rollup方法
 * 
 * rollup方法返回Promise对象
 * promise的resolve值是bundle
 * 
 * 
 */
rollup.rollup({
  entry: './src/main.ts',
  plugins : [
    rollupTypescript(),
    resolve(),
    commonjs({
      include: 'node_modules/**',
      exclude: [],
      extensions: [ '.js', '.ts' ],
      ignoreGlobal: false
    })
  ],
  cache: cache
}).then( function ( bundle ) {
  cache = bundle;

  bundle.write({
    format: 'cjs',
    dest: './apidemo/_bundle.js'
  });

  return bundle.generate({
    format: 'cjs'
  });
  
}).then( function ( result ) {

  fs.writeFileSync( 'apidemo/bundle.js', result.code );

}).catch(console.error); 