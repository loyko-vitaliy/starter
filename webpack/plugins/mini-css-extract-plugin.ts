import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default new MiniCssExtractPlugin({
  filename: 'assets/css/[name]-[hash:8].min.css'
})
