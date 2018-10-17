const path = require('path')

module.exports = {
  webpack(config, options) {
   config.resolve.alias = {
      '@components': path.resolve(__dirname, 'src/components'),
      '@actions': path.resolve(__dirname, 'src/actions'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@api': path.resolve(__dirname, 'api/'),
      '@static': path.resolve(__dirname, 'static/'),
    }
   return config
 }
}
