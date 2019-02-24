import CopyWebpackPlugin from 'copy-webpack-plugin'

export default new CopyWebpackPlugin([
  { from: 'api/**/*', to: './' },
  { from: '.htaccess', to: './'}
])
