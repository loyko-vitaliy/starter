const PreloadWebpackPlugin = require('preload-webpack-plugin')

module.exports = new PreloadWebpackPlugin({
  rel: 'preload',
  include: 'initial'
})
