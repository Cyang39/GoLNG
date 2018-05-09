const colors   = require('colors')
const express  = require('express')
const dbm      = require('./dbm')

const app = express()

// serve static file:
app.use(express.static('public'))

// Routers:
app.get('/', function (req, res) {
  res.send(dbm.getAllGeo())
})

// Start application:
app.listen(3000, function () {
  console.log('Application start on ' + 'http://localhost:3000'.yellow)
})