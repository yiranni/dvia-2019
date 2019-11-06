"use strict";
const fs = require('fs');
const async = require("async");
const request = require("request");
const apiKey = "4b7edbda81aa4adea5a6bdb9eb342cea";
const baseURL = "https://api.opencagedata.com/geocode/v1/json?q=";
// source data
let testData = JSON.parse(fs.readFileSync('../data/testingArea.json'))

// test data for less api requests

// gets country name
const requestCountry = (fullURL) => {
	return new Promise((resolve, reject) => {
		request(fullURL, async (err, resp, body) => {
			if (err) {
				console.log("error getting request from server:", err);
			}

            // i dont fucking know whats the diff between try-catch and resolve-reject
			try {
				const result = await JSON.parse(body);
				resolve(result.results[0].components.country);
			} catch (e) {
				reject(e);
			}
		});
	})
};

const run = async () => {
    // use `Promise.all` to await `requestCountry` (and everything inside)
	await Promise.all(
        testData.map(async (ele) => {
            let thisTest = ele;
            let lat = ele.lat;
            let lng = ele.lng;
            const fullURL = `${baseURL}${lat}+${lng}&key=${apiKey}`;
            await requestCountry(fullURL).then((res) => {
                thisTest.targetCountry = res;
            });
        })
    );
    // this is somehow awaited
    return testData;
};

// top level async
// wrap everything you need to run in `main` and mark it with `async`
const main = async() => {
    // i dont even fucking know why i had to wrap this into an async func then return the value from promise
	const result = await run().then((res) => { return res }); 
    // use this `result` as variable
    
    console.log(results)
	fs.writeFileSync('../data/targetedCountry.json', JSON.stringify(result))
};

// run the top level async method
main();
