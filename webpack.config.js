const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');


module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : null,
  entry: path.resolve(__dirname, 'public/main.js'),
  output: {
    path: path.resolve(__dirname, 'public/dist/'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
        include: path.join(__dirname, 'public'),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader'],
        include: path.join(__dirname, 'public'),
      },
    ],
  },
  eslint: {
    configFile: './.eslintrc.js',
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
