const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')

module.exports = {
  input: 'src/index.js',
  output: {
    format: 'es',
    file: 'dist-worker-rollup/index.js',
  },
  plugins: [
    commonjs(),
    nodeResolve({
      exportConditions: ['browser', 'worker'],
      browser: true,
    }),
  ],
}