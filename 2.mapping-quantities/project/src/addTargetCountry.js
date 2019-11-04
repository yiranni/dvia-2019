"use strict";
const fs = require('fs');
let archive = JSON.parse(fs.readFileSync('../data/testingArea.json'))
let testData = [
    {
        "country": "ussr",
        "year": "1949",
        "month": "8",
        "day": "29",
        "lat": "50.44",
        "lng": "77.82",
        "yield": "22"
    },
    {
        "country": "ussr",
        "year": "1950",
        "month": "",
        "day": "",
        "lat": "50",
        "lng": "78",
        "yield": "0"
    },
    {
        "country": "ussr",
        "year": "1951",
        "month": "9",
        "day": "24",
        "lat": "50",
        "lng": "78",
        "yield": "38.3"
    }]



const async = require("async");
const request = require("request");
const apiKey = "4b7edbda81aa4adea5a6bdb9eb342cea";
const baseURL = "https://api.opencagedata.com/geocode/v1/json?q=";

let output = [];
async.eachSeries(testData, function (ele, callback) {
    var thisTest = ele;
    var lat = ele.lat;
    var lng = ele.lng
    // console.log(thisTest)
    const fullURL = `${baseURL}${lat}+${lng}&key=${apiKey}`;
    // console.log(fullURL);
    request(fullURL, async (err, resp, body) => {
        if (err) {
            console.log("error getting request from server:", err);
        }

        try {
            // json parse doesnt parse inner objects,
            // may need to find other packages
            const result = await JSON.parse(body);
            let targetCountry = result.results[0].components.country;
            thisTest.targetCountry = targetCountry;
        } catch (e) {
            console.log("cannot parse JSON:", e)
        }
    });
    setTimeout(callback, 3000)
    output.push(thisTest)
}); 
    


// testData.forEach(function (ele) {
//     getResult(ele, ele.lat, ele.lng);
// })

console.log(output)