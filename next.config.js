const path = require('path')

module.exports = {
  webpack(config, options) {
    console.log(config)
   config.resolve.alias = {
      '@components': path.resolve(__dirname, 'src/components'),
    }
   return config
 }
}
