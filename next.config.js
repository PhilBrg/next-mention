const path = require('path')

module.exports = {
  webpack(config, options) {
    console.log(config)
   config.resolve.alias = {
      '@components': path.resolve(__dirname, 'src/components'),
      '@actions': path.resolve(__dirname, 'src/actions'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@config': path.resolve(__dirname, 'config/'),
    }
   return config
 }
}
