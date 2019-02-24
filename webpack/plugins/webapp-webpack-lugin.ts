import path from 'path'
import WebappWebpackPlugin from 'webapp-webpack-plugin'

const favicon = path.resolve(__dirname, '../../src/favicon/favicon.png')

export default new WebappWebpackPlugin({
  favicons: {
    icons: {
      android: false,
      appleIcon: false,
      appleStartup: false,
      coast: false,
      favicons: true,
      firefox: false,
      opengraph: false,
      twitter: false,
      windows: false,
      yandex: false
    }
  },
  inject: true,
  logo: favicon,
  prefix: 'assets/favicon/'
})
