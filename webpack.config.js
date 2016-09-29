const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');


module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : null,
  entry: path.join(__dirname, '/public/main.js'),
  output: {
    path: path.join(__dirname, '/public/dist/'),
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: path.join(__dirname, '/public/'),
      },
    ],
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
