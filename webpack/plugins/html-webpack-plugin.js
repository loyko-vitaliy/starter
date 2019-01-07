const fs = require('fs')
const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')

const TEMPLATES_FOLDER = '../../src/pug'

module.exports = () => {
  const templatesDir = fs.readdirSync(path.resolve(__dirname, TEMPLATES_FOLDER))
  const templates = templatesDir.filter(template => {
    const pattern = /\.pug$/
    return pattern.test(template)
  })

  return templates.map(template => {
    const [name, extension] = template.split('.')

    return new HTMLWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(
        __dirname,
        `${TEMPLATES_FOLDER}/${name}.${extension}`
      )
    })
  })
}
