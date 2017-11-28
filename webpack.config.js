const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
    './src/components/app.js',
    './src/stylus/styles.styl'
    ]
  },
  output: {
    filename: './_build/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", "stylus-loader"]
        })
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        },
      }
    ]
  },
  plugins: [
    //uglify js
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    }),
    // env plugin
    // new webpack.DefinePlugin({
    //   'process.env': { NODE_ENV: JSON.stringify(nodeEnv)}
    // }),
    //browser-sync
    new ExtractTextPlugin('./src/css/styles.css'),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    // new StaticSiteGeneratorPlugin('main', data.routes, data),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      files: ['./*.html', './public/*.html', './src/css/styles.css'],
      server: { baseDir: ['./']}
    })
    ],
    watch: true
  }
