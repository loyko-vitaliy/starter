export default {
  test: /\.(png|jpg|gif|webp)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'assets/img/[1]/[name].[ext]',
        regExp: /blocks\/([a-z0-9-_]+)\//
      }
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
        },
        webp: {
          quality: 75
        }
      }
    }
  ]
}
