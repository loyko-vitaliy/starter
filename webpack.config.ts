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
  devServer,
  devtool: devtool(mode),
  entry,
  module: module(mode),
  optimization,
  output: output(mode),
  plugins: plugins(mode),
  resolve,
  stats
})

export default config
