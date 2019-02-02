import devServer from './webpack/dev-server'
import devtool from './webpack/devtool'
import entry from './webpack/entry'
import IWebpackConfig from './webpack/interfaces/IWebpackConfig'
import module from './webpack/module'
import optimization from './webpack/optimization'
import output from './webpack/output'
import plugins from './webpack/plugins'
import resolve from './webpack/resolve'
import stats from './webpack/stats'

const config: IWebpackConfig = (_, { mode }) => ({
  entry,
  output: output(mode),
  devtool: devtool(mode),
  optimization,
  devServer,
  stats,
  resolve,
  module: module(mode),
  plugins: plugins(mode)
})

export default config
