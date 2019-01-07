module.exports = {
  test: /\.(woff|woff2|ttf)$/,
  use: [
    {
      loader: 'file-loader',
      options: { name: 'assets/fonts/[name].[ext]' }
    }
  ]
}
