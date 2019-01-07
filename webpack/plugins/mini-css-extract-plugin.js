const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = new MiniCssExtractPlugin({
  filename: 'assets/css/app-[contenthash:8].min.css'
})
