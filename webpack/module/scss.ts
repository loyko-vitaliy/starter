import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import globImporter from 'node-sass-glob-importer'

export default (mode: string) => ({
  test: /\.scss$/,
  use: [
    mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          ctx: {
            mode
          }
        }
      }
    },
    {
      loader: 'sass-loader',
      options: {
        importer: globImporter(),
        sourceMap: true
      }
    }
  ]
})
