const path = require('path');
const NodeExternals = require('webpack-node-externals');
const Merge = require('webpack-merge');


const commonConfig = require('./webpack.config.js');

const serverConfig = {
  mode: 'development',
  target: 'node',
  entry: {
    server: path.join(__dirname, 'src', 'server', 'index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'build'),
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },
  externals: [ NodeExternals() ],
};

module.exports = Merge(commonConfig, serverConfig);