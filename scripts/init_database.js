// ****************************************
// **  This script will convert          **
// **  database format                   **
// **  from csv to json                  **
// ****************************************
var colors     = require('colors');
const csv      = require('ya-csv')
const low      = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const fs       = require('fs')

// database file location.
const db_pos = './database/db.json'

// Check if the database is exists.
if(fs.existsSync(db_pos)) {
  console.log('You already have a database!'.green)
  process.exit(0)
}

const adapter = new FileSync(db_pos)
const db = low(adapter)

// if database is empty, add init it.
db.defaults({ supplier:[], count: 0 }).write()

// read data from csv, and put it in database.
csv.createCsvFileReader('./database/data.csv', {
  'separator': ',',
  'quote': '"',
  'escape': '"',
  'comment': '#'
}).addListener('data', data => {

  const obj = {
    name: data[0],
    lat: data[1],
    lon: data[2],
    description: data[3],
    url: data[4],
    image: data[5],
    category: data[6]
  }

  db.get('supplier').push(obj).write()

  db.update('count', n => n + 1).write()
})