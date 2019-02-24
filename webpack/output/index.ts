import path from 'path'

export default (mode: string) => ({
  filename: `assets/js/[name]-[hash:8].${mode === 'production' ? 'min.js' : 'js'}`,
  path: path.resolve(__dirname, '../../build')
})
