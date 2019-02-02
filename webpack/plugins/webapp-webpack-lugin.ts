import path from 'path'
import WebappWebpackPlugin from 'webapp-webpack-plugin'

const favicon = path.resolve(__dirname, '../../src/favicon/favicon.png')

export default new WebappWebpackPlugin({
  favicons: {
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: true,
      coast: true,
      favicons: true,
      firefox: true,
      opengraph: true,
      twitter: true,
      windows: true,
      yandex: true
    }
  },
  inject: true,
  logo: favicon,
  prefix: 'assets/favicon/'
})
