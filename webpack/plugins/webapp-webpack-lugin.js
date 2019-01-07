const path = require('path')
const WebappWebpackPlugin = require('webapp-webpack-plugin')

const favicon = path.resolve(__dirname, '../../src/favicon/favicon.png')

module.exports = new WebappWebpackPlugin({
  logo: favicon,
  prefix: 'assets/favicon/',
  inject: true,
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
      yandex: false,
      windows: false
    }
  }
})
