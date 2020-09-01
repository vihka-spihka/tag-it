const HTMLWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '..', 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  devtool: "eval-source-map",
  plugins: [
    new HTMLWebPackPlugin({
      template: path.join(__dirname, './src/index.html'),
    })
  ]
};
