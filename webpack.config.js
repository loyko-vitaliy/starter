const path = require('path')
const chokidar = require('chokidar')
const rules = require('./webpack/rules')
const plugins = require('./webpack/plugins')

module.exports = (env, { mode }) => ({
  entry: ['./src/ts/index.ts', './src/scss/index.scss'],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: `assets/js/app-[hash:8].${mode === 'production' ? 'min.js' : 'js'}`
  },

  devtool: mode === 'development' ? 'eval-source-map' : 'none',

  devServer: {
    port: 3000,
    overlay: true,
    stats: 'errors-only',
    open: 'Google Chrome',
    clientLogLevel: 'none',
    before(app, server) {
      chokidar.watch(['./src/pug/**/*.pug']).on('all', function() {
        server.sockWrite(server.sockets, 'content-changed')
      })
    }
  },

  stats: 'errors-only',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules', path.resolve(__dirname, 'src/img')]
  },

  module: {
    rules: rules(mode)
  },

  plugins: plugins(mode)
})
