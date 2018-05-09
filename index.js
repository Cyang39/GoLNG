var express = require('express')
var app = express()

// serve static file:
app.use(express.static('public'))

// Router of root:
app.get('/', function (req, res) {
  res.redirect('/google_map_api.html')
})

// Start application:
app.listen(3000, function () {
  console.log('Application start on http://localhost:3000')
})