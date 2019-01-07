const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = new CleanWebpackPlugin(['build'], {
  root: path.resolve(__dirname, '../../'),
  verbose: false
})
