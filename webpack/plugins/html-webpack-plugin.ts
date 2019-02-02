import fs from 'fs'
import path from 'path'

import HTMLWebpackPlugin from 'html-webpack-plugin'

const TEMPLATES_FOLDER = '../../src/pug'

export default () => {
  const templatesDir = fs.readdirSync(path.resolve(__dirname, TEMPLATES_FOLDER))
  const templates = templatesDir.filter((template) => {
    const pattern = /\.pug$/
    return pattern.test(template)
  })

  return templates.map((template) => {
    const [name, extension] = template.split('.')

    return new HTMLWebpackPlugin({
      filename: `${name}.html`,
      inject: 'body',
      template: path.resolve(__dirname, `${TEMPLATES_FOLDER}/${name}.${extension}`)
    })
  })
}
