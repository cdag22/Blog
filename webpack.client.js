const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const Merge = require('webpack-merge');

const moduleList = ['@babel/polyfill', 'react-router-dom', 'react', 'react-dom', 'react-redux', 'redux', 'redux-thunk', 'serialize-javascript'];

const commonConfig = require('./webpack.config.js');

const clientConfig = {
  mode: 'development',
  entry: {
    client: path.join(__dirname, 'src', 'client', 'index.jsx'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'public'),
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
    ],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: new RegExp(
            `[\\/]node_modules[\\/](${moduleList.join("|")})[\\/]`
          ),
          chunks: 'initial',
          name: 'vendors',
          enforce: true
        },
      },
    },
  }
};

module.exports = Merge(commonConfig, clientConfig);