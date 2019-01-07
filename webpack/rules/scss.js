const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const globImporter = require('node-sass-glob-importer')

module.exports = mode => ({
  test: /\.scss$/,
  use: [
    mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        importer: globImporter()
      }
    }
  ]
})
