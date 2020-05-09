const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      inject: true,
      template: './src/index.html',
      filename: './index.html',
      favicon: './src/assets/favicon.ico',
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
    new WebpackPwaManifest({
      name: 'Diecision Maker',
      short_name: 'DiecisionMaker',
      description: 'Let the die decide',
      background_color: '#000',
      theme_color: '#000',
      'theme-color': '#000',
      crossorigin: 'use-credentials',
      fingerprints: false,
      inject: true,
      icons: [
        {
          src: path.resolve('src/assets/logo192.png'),
          sizes: '192x192',
        },
        {
          src: path.resolve('src/assets/logo512.png'),
          sizes: '512x512',
        },
      ],
    }),
  ],
});
