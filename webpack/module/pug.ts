import pugIncludeGlob from 'pug-include-glob'

export default {
  test: /\.pug$/,
  use: [
    {
      loader: 'pug-loader',
      options: {
        plugins: [pugIncludeGlob()]
      }
    }
  ]
}
