import chokidar from 'chokidar'

export default {
  clientLogLevel: 'none',
  open: 'Google Chrome',
  overlay: true,
  port: 3000,
  proxy: {
    '/api/**': {
      changeOrigin: true,
      logLevel: 'debug',
      pathRewrite: {
        '^/api': ''
      },
      secure: false,
      target: 'http://localhost'
    }
  },
  stats: 'errors-only',
  before(app: any, server: any) {
    chokidar
      .watch(['./src/pages/**/*.pug', './src/blocks/**/*.pug', './src/blocks/*/data.json'])
      .on('all', () => server.sockWrite(server.sockets, 'content-changed'))
  }
}
