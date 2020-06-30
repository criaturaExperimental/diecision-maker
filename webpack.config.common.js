const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/index.js',
  },
  resolve: {
    alias: {
      adapters: path.resolve(__dirname, './src/adapters/'),
      components: path.resolve(__dirname, './src/components/'),
      helpers: path.resolve(__dirname, './src/helpers/'),
      repositories: path.resolve(__dirname, './src/repositories/'),
      styles: path.resolve(__dirname, './src/styles/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
