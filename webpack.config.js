var fs = require('fs');
var path = require('path')
var webpack = require('webpack')

console.log(__dirname);

var directory = path.join(__dirname, 'example');

module.exports = {

  devtool: 'inline-source-map', // map 实际开发中，可使用NODE_ENV配置

  entry: fs.readdirSync(directory).reduce(function (entries, dir) {
    if (fs.statSync(path.join(directory, dir)).isDirectory())
      entries[dir] = path.join(directory, dir, 'app.js')

    return entries
  }, {}),

  output: {
    path: __dirname + '/__build__/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel', query: {
          presets: ['es2015','react']
        }
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file' },
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
    // alias: {
    //   'react-router': path.join(__dirname, '..', 'modules')
    // }
  },

  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('shared.js'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    })
  ]

}