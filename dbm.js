const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database/db.json')
const db = low(adapter)

module.exports.getAllGeo = function() {
    return db.get('supplier').map(function(item) {
        // changed the field name lon => lng, to suit the google api
        return {name: item.name, lat: parseFloat(item.lat), lng: parseFloat(item.lon)}
    }).value()
}

module.exports.getDetail = function(name) {
  return db.get('supplier')
	   .find({ name: name })
	   .value()
}
