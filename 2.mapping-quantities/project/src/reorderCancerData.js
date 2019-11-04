const fs = require('fs');
let archive = JSON.parse(fs.readFileSync('../data/cancer-rate.json'))

let output = [];
archive.forEach(function(item) {
    var existing = output.filter(function(v, i) {
      return v.country == item.coutry;
    });
    if (existing.length) {
      var existingIndex = output.indexOf(existing[0]);
      output[existingIndex].year = output[existingIndex].value.concat(item.year);
    } else {
      if (typeof item.country == 'string')
        item.year = [item.year];
      output.push(item);
    }
  });

  console.log(output[0])