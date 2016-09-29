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
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  eslint: {
    configFile: './.eslintrc',
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
