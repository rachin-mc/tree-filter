const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },

  devServer: {
    contentBase: path.join(__dirname, 'src'), //content not from webpack is served from herre (index.html)
    publicPath: '/dist/', //webpack output is served from here
    port: 3000,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /.\js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            options: {
              url: false,
              modules: true
            }
          }
        ]
      },
    ]
  }
}
