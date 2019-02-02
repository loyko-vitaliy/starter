import SVGSpritemapPlugin from 'svg-spritemap-webpack-plugin'

export default new SVGSpritemapPlugin('./src/**/*.svg', {
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
