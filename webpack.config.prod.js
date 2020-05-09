const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      inject: true,
      template: './src/index.html',
      filename: './index.html',
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
        minifyURLs: true,
      },
    }),
    new WorkboxPlugin.GenerateSW({
      swDest: path.resolve('dist', 'sw.js'),
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
});
