var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()

console.log(path.join(__dirname, 'public'))
app.use(serveStatic(path.join(__dirname, 'public')))
app.listen(3000)