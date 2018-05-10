
module.exports.detailView = function(obj) {
 // handle prefix:
 const url_split = obj.url.split('http://')
 obj.url = url_split[url_split.length - 1]

 // sample template:
 return  `<div style='min-height: 80vh;background-color: lightgray;'>` +
  `<h1>${obj.name}</h1>` +
  `<p>(${obj.lat}, ${obj.lon})</p>` +
  `<p>${obj.description}</p>` +
  `<a href='http://${obj.url}' target="_blank">site</a><br />` +
  `<img src="${obj.image}" />` +
  `<p>Category: ${obj.category}</p>` +
  `</div>`
}


