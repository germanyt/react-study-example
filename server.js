/*eslint-disable no-console, no-var */

var fs = require('fs')
var path = require('path')
var express = require('express')
var rewrite = require('express-urlrewrite')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var WebpackConfig = require('./webpack.config')

var app = express()

var directory = path.join(__dirname, 'example');

app.use(webpackDevMiddleware(webpack(WebpackConfig), {
  publicPath: '/__build__/',
  stats: {
    colors: true
  }
}))


fs.readdirSync(directory).forEach(function (file) {
  if (fs.statSync(path.join(directory, file)).isDirectory())
    app.use(rewrite('/' + file + '/*', '/' + file + '/index.html'))
})
// app.use(rewrite('/', '/app/index.html'))

app.use(express.static(__dirname))

// app.get('/*', function (request, response){
//   response.sendFile(path.resolve(__dirname, 'app', 'index.html'))
// })

app.listen(9200, function () {
  console.log('Server listening on http://localhost:9200, Ctrl+C to stop')
})
