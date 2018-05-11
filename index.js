const colors   = require('colors')
const express  = require('express')
const dbm      = require('./dbm')
const view     = require('./view')

const app = express()

// serve static file:
app.use(express.static('public'))

// Routers:
app.get('/', function (req, res) {
  // res.send(dbm.getAllGeo())
  res.redirect('/google_map_api.html')
})

// Detail pages:
app.param('supplier', function (req, res, next, sp) {
  req.supplier = dbm.getDetail(sp)
  next()
})
app.get('/:supplier', function (req, res) {
  res.send(view.detailView(req.supplier))
})

// Start application:
app.listen(3000, function () {
  console.log('Application start on ' + 'http://localhost:3000'.yellow)
})
