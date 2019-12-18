// the data loaded from a USGS-provided CSV file
let quakes;
let y;
let speed = 10;

var quakeArray = [];
var grouped;

// var m;
function decode(place) {
    // print(place)
    if (!place) {
        return { city: "" }
    }
    var m = place.match(/(\d+)km ([NSEW]+) of (.*)/);
    if (!m) {
        return { city: "" }
    }
    // print(m)
    var distance = parseInt(m[1]);
    var compass = m[2];
    var city = m[3];
    return { distance, compass, city }
}





function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    quakes = loadTable("data/all_day.csv", "csv", "header");

}

function setup() {
    let magLegend = chroma.scale(['#fafa6e', '#2A4858']).mode('lch').classes(10);
    // angleMode(DEGREES)

    // var quakeArray =[];
    // decide how big a city needs to be for us to add it to the map

    grouped = _.groupBy(quakes.rows, function (row) { return decode(row.getString('place')).city });
    for (var i = 0; i < quakes.getRowCount(); i++) {
        var quake = quakes.getRow(i)
        var place = quake.getString('place');

        var info = decode(place);

    }

}

function draw() {
    createCanvas(2900, 2200);
    background(11, 0, 84);
    var xValue = 0;
    var yValue = 0;
    var cityValue = 0;
    for (var city in grouped) {
        var rows = grouped[city];
        if (rows.length >= 5) {
            // print(city, rows.length, decode(rows[0].getString('place')).distance)
            // print(city, rows.length)
            push();
            noStroke();
            fill(132, 114, 255);
            ellipse(200 + xValue, 300 + yValue, 80)
            fill(56, 40, 164);

            ellipse(200 + xValue, 300 + yValue, 60)
            pop();

            push();
            noStroke();
            fill(255);
            text(city, 200 + xValue - textWidth(city) / 2, 300 + yValue)
            pop();




            let theta;
            for (var i = 0; i < rows.length; i++) {
                // print(rows[i].getString('mag'))
                var thisDistance = decode(rows[i].getString('place')).distance;
                // print(thisDistance, xValue, yValue)
                var thisCompass = decode(rows[i].getString('place')).compass;
                var magnitude = rows[i].getString('mag');
                var depth = rows[i].getString('depth');
                if (thisCompass === "E") {
                    theta = 0;
                } else if (thisCompass === "SE") {
                    theta = 45;
                } else if (thisCompass === "S") {
                    theta = 90;
                } else if (thisCompass === "SW") {
                    theta = 135;
                } else if (thisCompass === "W") {
                    theta = 180;
                } else if (thisCompass === "NW") {
                    theta = 225
                } else if (thisCompass === "N") {
                    theta = 270;
                } else if (thisCompass === "NE") {
                    theta = 315
                } else if (thisCompass === "ESE") {
                    theta = 22.5
                } else if (thisCompass === "SSE") {
                    theta = 67.5
                } else if (thisCompass === "SSW") {
                    theta = 112.5
                } else if (thisCompass === "WSW") {
                    theta = 157.5
                } else if (thisCompass === "WNW") {
                    theta = 202.5
                } else if (thisCompass === "NNW") {
                    theta = 247.5
                } else if (thisCompass === "NNE") {
                    theta = 292.5
                } else {
                    theta = 337.5
                }
                // let theta = 22.5 * i;
                let x = cos(radians(theta)) * thisDistance * 3;
                let y = sin(radians(theta)) * thisDistance * 3;
                // if(thisDistance < 80) {
                push();
                stroke(227, 46, 1);
                strokeWeight(4);
                strokeCap(ROUND);
                line(200 + xValue + cos(radians(theta)) * 50, 300 + yValue + sin(radians(theta)) * 50, x + 200 + xValue + cos(radians(theta)) * 50, y + 300 + yValue + sin(radians(theta)) * 50);
                pop()

                push()
                noStroke()
                fill(251,190,0)
                ellipse(x + 200 + xValue + cos(radians(theta)) * 50, y + 300 + yValue + sin(radians(theta)) * 50 + 0.3 * depth * sin(frameCount * 0.1), magnitude * 10)
                pop()
                // print(theta, x, y)
                // }
            }
            xValue += 500;
            if (xValue >= 1200) {
                xValue = 0;
                yValue += 500
            }

        }

    }



}


// function draw() {
//     let cur = moment(table.getRow(0).get('time')).hour();
//     createCanvas(2900, 1800);
//     background(0)

//     var magScale = chroma.scale(['#fafa6e', '#2A4858']).mode('lch').domain([0, 10]);

//     push();
//     print(hour)
//     for (var i = 0; i < table.getRowCount(); i++) {
//         var row = table.getRow(i)
//         var hr =  moment(table.getRow(i).get('time')).hour();
//         // print(day)
//             y = 100 
//             y += 0.1 * row.getNum('depth') * sin(frameCount * 0.2)
//             fill(magScale(row.getNum('mag')).hex())
//             noStroke()
//             // rect(200 + 50 * (i % 20), y, 40, 40)
//             rect(200 + 50 * i, y, 40, 40)
//         // } 

//     }
//     pop();

// }






function distanceFrom(srcLat, srcLng, dstLat, dstLng) {
    return L.latLng(srcLat, srcLng).distanceTo(L.latLng(dstLat, dstLng)) / 1000 // in km
}

