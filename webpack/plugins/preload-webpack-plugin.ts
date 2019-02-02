import PreloadWebpackPlugin from 'preload-webpack-plugin'

export default new PreloadWebpackPlugin({
  include: 'initial',
  rel: 'preload'
})
