const fs = require('fs');
let testData = JSON.parse(fs.readFileSync('../data/testingArea.json'))
// all test after 1990
let output = [];
for(var i = 0; i < testData.length; i++) {
    if(Number(testData[i].year) >= 1990) {
        output.push(testData[i])
    }
}
fs.writeFileSync('../data/recentTest.json', JSON.stringify(output))