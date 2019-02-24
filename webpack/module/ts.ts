export default {
  exclude: /node_modules/,
  test: /\.ts$/,
  use: [
    {
      loader: 'ts-loader'
    },
    {
      loader: 'webpack-import-glob'
    }
  ]
}
