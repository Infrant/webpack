const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { resolve } = require('path');

module.exports = {
  entry: resolve(__dirname, 'src', 'main.js'),
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: resolve(__dirname, 'index.html') }),
    new MiniCssExtractPlugin({ filename: 'main.css' }),
    // new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|mp3)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
    ],
  },
  // devtool: 'source-map',
};
