const path = require('path')

module.exports = {
  entry: './src/static/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/assets/',
      filename: 'bundle.js'
  }
}
