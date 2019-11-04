const fs = require('fs');
let archive = JSON.parse(fs.readFileSync('../data/johnstons-archive.json'))
let output = []
console.log(archive[0])
archive.forEach(function (ele) {
    if (ele.height > 0 && ele.crater > 0) {
        output.push(ele)
    }
})

let targetedArea = [];
archive.forEach(function(ele) {
    let obj = {};
    obj.country = ele.country;
    obj.year = ele.year;
    obj.month = ele.month;
    obj.day = ele.day;
    obj.lat = ele.lat;
    obj.lng = ele.lon;
    obj.yield = ele.yield;
    targetedArea.push(obj)
})
console.log(targetedArea.length)
function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const craterA = a.crater;
    const craterB = b.crater;

    return craterA - craterB;
}
var increasingCrater =  output.sort(compare)
// for(var i = 0; i < increasingCrater.length; i++) {
//     console.log(increasingCrater[i].crater)
// }
// fs.writeFileSync('../data/height-crater.json', JSON.stringify(output))
// fs.writeFileSync('../data/increasingCrater.json', JSON.stringify(increasingCrater))

// fs.writeFileSync('../data/testingArea.json', JSON.stringify(targetedArea))