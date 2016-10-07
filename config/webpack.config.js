const path = require('path');
const webpack = require('webpack');

const appRoot = path.resolve(process.cwd(), 'app/assets/webpack');
const dstRoot = path.resolve(process.cwd(), 'public/assets/webpack');

const isProduction = process.env.NODE_ENV === 'production';

const productionPlugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
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
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.png$/,
        loader: 'file',
        query: {
          name: isProduction ? '[path][name]-[hash].[ext]' : '[path][name].[ext]'
        }
      }
    ]
  }
};
