import cleanWebpackPlugin from './clean-webpack-plugin'
import cssUrlRelativePlugin from './css-url-relative-plugin'
import htmlWebpackPlugin from './html-webpack-plugin'
import miniCssExtractPlugin from './mini-css-extract-plugin'
import preloadWebpackPlugin from './preload-webpack-plugin'
import svgSpritemapPlugin from './svg-spritemap-plugin'
import webappWebpackPlugin from './webapp-webpack-lugin'
import bundleAnalyzerPlugin from './webpack-bundle-analyzer'
import copyWebpackPlugin from './webpack-copy-plugin'

const plugins = [webappWebpackPlugin, ...htmlWebpackPlugin(), svgSpritemapPlugin, copyWebpackPlugin]

export default (mode: string) => {
  if (mode === 'production') {
    plugins.unshift(cleanWebpackPlugin)
    plugins.push(preloadWebpackPlugin, miniCssExtractPlugin, cssUrlRelativePlugin)
  }

  return plugins
}
