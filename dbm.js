const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database/db.json')
const db = low(adapter)

module.exports.getAllGeo = function() {
    return db.get('supplier').map(function(item) {
        return {name: item.name, lat: item.lat, lon: item.lon}
    }).value()
}