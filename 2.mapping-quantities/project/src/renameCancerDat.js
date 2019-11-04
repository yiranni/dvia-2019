const fs = require('fs');
let archive = JSON.parse(fs.readFileSync('../data/cancer-rate.json'))

for(var i = 0; i < archive.length; i++) {
    archive[i]["country"] = archive[i]["Entity"];
    archive[i]["code"] = archive[i]["Code"];
    archive[i]["year"] = archive[i]["Year"];
    archive[i]["rate"]=archive[i]["Prevalence-Neoplasms-Sex:Both-Age:Age-standardized(Percent)(%)"];
    delete archive[i]["Entity"];
    delete archive[i]["Code"];
    delete archive[i]["Year"];
    delete archive[i]["Prevalence-Neoplasms-Sex:Both-Age:Age-standardized(Percent)(%)"];
}

fs.writeFileSync('../data/cancer-rate.json', JSON.stringify(archive))