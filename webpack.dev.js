const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: outputPath,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: outputPath,
  },
});
