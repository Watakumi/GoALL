const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  entry: {
    main: './src/index.js',
  },
  output: {
    path: outputPath,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: outputPath,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [require.resolve('react-refresh/babel')],
          },
        },
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
});
