const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  assetPrefix: !debug ? '/simon-instance.github.io/' : '',
}