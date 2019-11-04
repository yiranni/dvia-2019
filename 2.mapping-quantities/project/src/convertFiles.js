let csvToJson = require('convert-csv-to-json');
let archiveInput = "../data/johnstons-archive.csv"
let archiveOutput = '../data/johnstons-archive.json'

let cancerrateInput = "../data/share-of-population-with-cancer.csv"
let cancerrateOutput = "../data/share-of-population-with-cancer.json"

// csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(archiveInput, archiveOutput)
csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(cancerrateInput, cancerrateOutput)