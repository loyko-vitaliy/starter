const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')

module.exports = new SVGSpritemapPlugin('./src/**/*.svg', {
  output: {
    filename: 'assets/svg/sprite.svg'
  },
  sprite: {
    prefix: 'icon-'
  },
  styles: {
    filename: 'src/scss/common/svgsprite.scss'
  }
})
