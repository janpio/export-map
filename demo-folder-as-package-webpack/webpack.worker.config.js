module.exports = {
  mode: 'development',
  target: 'webworker',
  output: {
    filename: 'index.js',
    path: __dirname + '/dist'
  },
  optimization: {
    usedExports: false,
  },
}

