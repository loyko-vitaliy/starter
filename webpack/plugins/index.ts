import asyncStylesheetWebpackPlugin from './async-stylesheet-webpack-plugin'
import cleanWebpackPlugin from './clean-webpack-plugin'
import cssUrlRelativePlugin from './css-url-relative-plugin'
import htmlWebpackPlugin from './html-webpack-plugin'
import miniCssExtractPlugin from './mini-css-extract-plugin'
import preloadWebpackPlugin from './preload-webpack-plugin'
import scriptExtHtmlWebpackPlugin from './script-ext-html-webpack-plugin'
import svgStorePlugin from './svg-store-plugin'
import webappWebpackPlugin from './webapp-webpack-lugin'
import webpackBar from './webpack-bar'
import bundleAnalyzerPlugin from './webpack-bundle-analyzer'
import copyWebpackPlugin from './webpack-copy-plugin'
import webpackWatchedGlobEntries from './webpack-watched-glob-entries-plugin'

const plugins: any = [
  webpackBar,
  webappWebpackPlugin,
  ...htmlWebpackPlugin(),
  copyWebpackPlugin,
  scriptExtHtmlWebpackPlugin,
  svgStorePlugin
]

export default (mode: string) => {
  if (mode === 'production') {
    plugins.unshift(cleanWebpackPlugin)
    plugins.push(miniCssExtractPlugin, cssUrlRelativePlugin, asyncStylesheetWebpackPlugin, preloadWebpackPlugin)
  }
  if (mode === 'development') {
    plugins.push(webpackWatchedGlobEntries)
  }

  return plugins
}
