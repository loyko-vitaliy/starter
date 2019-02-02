import path from 'path'

export default {
  extensions: ['.ts', '.tsx', '.js'],
  modules: ['node_modules', path.resolve(__dirname, 'src/img')]
}
