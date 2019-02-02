export default {
  test: /\.(png|jpg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: { name: 'assets/img/[folder]/[name].[ext]' }
    },
    {
      loader: 'image-webpack-loader',
      options: {
        gifsicle: {
          interlaced: false
        },
        mozjpeg: {
          progressive: true,
          quality: 60
        },
        pngquant: {
          quality: 60,
          speed: 4
        }
      }
    }
  ]
}
