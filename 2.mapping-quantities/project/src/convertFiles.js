let csvToJson = require('convert-csv-to-json');
let archiveInput = "../data/johnstons-archive.csv"
let archiveOutput = '../data/johnstons-archive.json'

let cancerrateInput = "../data/shotRate.csv"
let cancerrateOutput = "../data/shotRate.json"

// csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(archiveInput, archiveOutput)
csvToJson.generateJsonFileFromCsv(cancerrateInput, cancerrateOutput)