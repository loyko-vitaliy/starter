import path from 'path'

import CleanWebpackPlugin from 'clean-webpack-plugin'

export default new CleanWebpackPlugin(['build'], {
  root: path.resolve(__dirname, '../../'),
  verbose: false
})
