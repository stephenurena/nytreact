// webpack.config.js
const webpack = require('webpack');
const path = require('path');

var APP_DIR = path.resolve(__dirname, 'src/app');
var BUILD_DIR = path.resolve(__dirname, 'src/public');

var config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'src'),
      loader: ['babel-loader'],
      query: {
        cacheDirectory: 'babel_cache',
        presets: ['react', 'es2015']
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ]
}

module.exports = config;