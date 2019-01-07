const cleanWebpackPlugin = require('./clean-webpack-plugin')
const htmlWebpackPlugin = require('./html-webpack-plugin')
const miniCssExtractPlugin = require('./mini-css-extract-plugin')
const svgSpritemapPlugin = require('./svg-spritemap-plugin')
const preloadWebpackPlugin = require('./preload-webpack-plugin')
const optimizeCssAssetsWebpackPlugin = require('./optimize-css-assets-webpack-plugin')
const cssUrlRelativePlugin = require('./css-url-relative-plugin')
const webappWebpackPlugin = require('./webapp-webpack-lugin')

const plugins = [webappWebpackPlugin, ...htmlWebpackPlugin(), svgSpritemapPlugin]

module.exports = mode => {
  if (mode === 'production') {
    plugins.unshift(cleanWebpackPlugin)
    plugins.push(preloadWebpackPlugin, miniCssExtractPlugin, cssUrlRelativePlugin, optimizeCssAssetsWebpackPlugin)
  }

  return plugins
}
