import OptimizeCssAssetsWebpackPlugin from 'optimize-css-assets-webpack-plugin'

export default new OptimizeCssAssetsWebpackPlugin({
  cssProcessorPluginOptions: {
    preset: ['default', { discardComments: { removeAll: true } }]
  }
})
