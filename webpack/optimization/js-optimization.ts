import TerserPlugin from 'terser-webpack-plugin'

export default new TerserPlugin({
  cache: true,
  parallel: true,
  terserOptions: {
    output: {
      comments: false
    }
  }
})
