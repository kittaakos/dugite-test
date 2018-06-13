const path = require('path')

module.exports = {
  entry: './src/static/index.js',
  target: 'electron-renderer',
  node: {
    child_process: 'empty',
    fs: 'empty'
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/assets/',
      filename: 'bundle.js'
  }
}
