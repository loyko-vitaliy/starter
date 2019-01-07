module.exports = {
  test: /\.(png|jpg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: { name: 'assets/img/[name].[ext]' }
    }
  ]
}
