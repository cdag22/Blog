const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const moduleList = ['@babel/polyfill', 'react-router-dom', 'react', 'react-dom', 'bootstrap', 'popper.js', 'jquery'];


module.exports = {
  mode: 'development',
  entry: {
    client: [
      '@babel/polyfill',
      path.join(__dirname, 'src', 'client', 'index.jsx'),
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'public'),
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run postcss actions
          options: {
            plugins: function () { // postcss plugins, can be exported to postcss.config.js
              return [
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
    ]
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
        }
      }
    }
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src', 'assets', 'template.html'),
    }),
  ]
};