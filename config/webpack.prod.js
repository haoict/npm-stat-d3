const { resolve } = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const commonConfig = require('./webpack.base');

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new LodashModuleReplacementPlugin({
      collections: true,
      paths: true
    }),
    new UglifyJsPlugin({
      parallel: true,
      extractComments: true
    }),
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      template: resolve(__dirname, '..', 'src', 'client', 'index.html'),
      // favicon: resolve(__dirname, '..', 'src', 'client', 'static', 'favicon.png'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ]
});
