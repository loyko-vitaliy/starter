import SvgStorePlugin from 'external-svg-sprite-loader'

export default {
  test: /\.svg$/,
  use: [
    {
      loader: SvgStorePlugin.loader,
      options: {
        iconName: 'icon-[name]',
        name: 'assets/svg/sprite.svg'
      }
    }
  ]
}
