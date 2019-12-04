let csvToJson = require('convert-csv-to-json');
let archiveInput = "../data/johnstons-archive.csv"
let archiveOutput = '../data/johnstons-archive.json'

let cancerrateInput = "../data/highlightIds.csv"
let cancerrateOutput = "../data/highlightIds.json"

// csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(archiveInput, archiveOutput)
csvToJson.generateJsonFileFromCsv(cancerrateInput, cancerrateOutput)