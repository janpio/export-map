module.exports = {
  mode: 'development',
  target: 'node',
  output: {
    filename: 'index.js',
    path: __dirname + '/dist-node'
  },
  optimization: {
    usedExports: false,
  },
}

