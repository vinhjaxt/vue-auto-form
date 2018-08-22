import resolve from 'rollup-plugin-node-resolve'
import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue2'
import cssnano from 'cssnano'
import fmg from 'postcss-font-magician'
import importcss from 'postcss-import'
import postcss from 'rollup-plugin-postcss'
import replace from 'rollup-plugin-replace'
import json from 'rollup-plugin-json'
import autoprefixer from 'autoprefixer'

const path = require('path')
const version = require(path.resolve('./package.json')).version

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH
export default {
  input: `src/index.js`,
  output: {
    exports: 'named',
    banner: `/**
  * vue2-auto-form v${version}
  * (c) ${(new Date()).getFullYear()} vinhjaxt
  * @license MIT
  */
   `,
    file: `dist/vue2-auto-form.js`,
    format: 'umd',
    module: 'VueAutoForm',
    sourcemap: false,
    name: 'VueAutoForm'
  },
  plugins: [
    json(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      '__VERSION__': version
    }),
    vue({
      compileTemplate: true,
      css: false,
      template: {
        styleToImports: true,
        isProduction: production,
        compilerOptions: { preserveWhitespace: false }
      }
    }),
    postcss({
      modules: false,
      plugins: [fmg(), importcss(), autoprefixer(), cssnano()]
    }),
    babel({
      presets: [
        'stage-3',
        [
          'env',
          {
            modules: false
          }
        ]
      ],
      exclude: 'node_modules/**',
      // plugins: [
      //   'external-helpers'
      // ],
      runtimeHelpers: true
    }),
    commonjs(),
    resolve({
      browser: true,
      jsnext: true,
      preferBuiltins: false,
      extensions: ['.js', '.json', '.vue']
    }),
    buble(),
    production && uglify({
      output: {
        comments (node, comment) {
          let text = comment.value
          let type = comment.type
          if (type === 'comment2') {
            // multiline comment
            return /@preserve|@license/i.test(text)
          }
        }
      }
    }) // minify, but only in production
  ]
}
