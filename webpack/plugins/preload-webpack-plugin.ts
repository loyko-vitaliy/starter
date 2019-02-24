import PreloadWebpackPlugin from 'preload-webpack-plugin'

export default new PreloadWebpackPlugin({
  fileWhitelist: [/\.woff2$/, /\.js$/],
  include: 'allAssets',
  rel: 'preload'
})
