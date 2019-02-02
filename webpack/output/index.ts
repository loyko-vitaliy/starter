import path from 'path'

export default (mode: string) => ({
  filename: `assets/js/app-[hash:8].${mode === 'production' ? 'min.js' : 'js'}`,
  path: path.resolve(__dirname, '../../build')
})
