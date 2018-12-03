const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { getIfUtils, removeEmpty } = require('webpack-config-utils')

module.exports = (env, argv) => {
  const { ifProd, ifNotProd } = getIfUtils(env)

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist'
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
      ]
    },
    plugins: removeEmpty([
      ifNotProd(new webpack.HotModuleReplacementPlugin()),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': ifProd('"production"', '"development"')
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html')
      }),
      new Dotenv()
    ]),
    devServer: {
      publicPath: '/dist',
      contentBase: path.join(__dirname, 'dist'),
      hot: true,
      port: 3000,
      historyApiFallback: true
    }
  }
}
