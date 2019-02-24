import path from 'path'
import WebpackWatchedGlobEntries from 'webpack-watched-glob-entries-plugin'

export default WebpackWatchedGlobEntries.getEntries([
  path.resolve(__dirname, '../../src/blocks/*/index.ts'),
  path.resolve(__dirname, '../../src/scss/index.scss')
])
