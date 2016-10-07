const path = require('path');
const webpack = require('webpack');

const appRoot = path.resolve(process.cwd(), 'app/assets/webpack');
const dstRoot = path.resolve(process.cwd(), 'public/assets/webpack');

const isProduction = process.env.NODE_ENV === 'production';

const productionPlugins = [
  new webpack.optimize.UglifyJsPlugin()
];

module.exports = {
  context: appRoot,
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  plugins: isProduction ? productionPlugins : [],
  entry: {
    index: './index.js'
  },
  output: {
    path: dstRoot,
    publicPath: '/assets/webpack/',
    filename: isProduction ? '[name]-[chunkhash].js' : '[name].js',
    library: '[name]'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.png$/,
        loader: 'file',
        query: {
          name: isProduction ? '[name]-[hash].[ext]' : '[name].[ext]'
        }
      }
    ]
  }
};
