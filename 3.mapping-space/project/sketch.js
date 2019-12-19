var map
let quakes;
let y;
let speed = 10;

var quakeArray = [];
var grouped;

let fontRegular;
let fontBold;
let fontMedium;
let fontLight;

let theta;

function preload() {
    // load the CSV data into our `quakes` variable and clip out the header row
    quakes = loadTable("data/all_day.csv", "csv", "header")
    fontRegular = loadFont('assets/fonts/Poppins/Poppins-Regular.ttf');
    fontBold = loadFont('assets/fonts/Poppins/Poppins-Bold.ttf');
    fontMedium = loadFont('assets/fonts/Poppins/Poppins-Medium.ttf');
    fontLight = loadFont('assets/fonts/Poppins/Poppins-Light.ttf');

}

function setup() {
    setupMap()
    addCircles()
    grouped = _.groupBy(quakes.rows, function (row) { return decode(row.getString('place')).city });
    for (var i = 0; i < quakes.getRowCount(); i++) {
        var quake = quakes.getRow(i)
        var place = quake.getString('place');

        var info = decode(place);

    }



}

function draw() {
    let cnv = createCanvas(1200, 2200);
    cnv.position(0, 0)
    background(11, 0, 84);

    push();
    noStroke();
    fill(255);
    textSize(32);
    textFont(fontMedium)
    text("SHAKING ON 11/21/2019", 600 - textWidth("SHANKING ON 11/21/2019")/2, 100)
    
    pop()

    push();
    noStroke();
    fill(255);
    textSize(16);
    textFont(fontRegular)
    text("This data visualization provides an overview of the earthquakes around the world on 11/21/2019 from two perspectives." , 200, 150, 800, 200)
    text("1. TOP 9 Cities with the most earthquakes nearby.", 200, 220)
    text("2. Map recording all earthquakes around the world.", 200, 250)
    pop()
    var xValue = 0;
    var yValue = 0;
    for (var city in grouped) {
        var rows = grouped[city];
        if (rows.length >= 5) {
            // print(city, rows.length, decode(rows[0].getString('place')).distance)
            // print(city, rows.length)
            push();
            noStroke();
            fill(132, 114, 255);
            ellipse(200 + xValue, 500 + yValue, 80)
            fill(56, 40, 164);

            ellipse(200 + xValue, 500 + yValue, 60)
            pop();




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
                let x = cos(radians(theta)) * thisDistance * 2;
                let y = sin(radians(theta)) * thisDistance * 2;
                // if(thisDistance < 80) {
                push();
                stroke(61, 106, 244, 127);
                strokeWeight(4);
                strokeCap(ROUND);
                line(200 + xValue + cos(radians(theta)) * 50, 500 + yValue + sin(radians(theta)) * 50, x + 200 + xValue + cos(radians(theta)) * 50, y + 500 + yValue + sin(radians(theta)) * 50);
                pop()

                push()
                noStroke()
                fill(251, 190, 0, 191)
                ellipse(x + 200 + xValue + cos(radians(theta)) * 50, y + 500 + yValue + sin(radians(theta)) * 50 + 0.3 * depth * sin(frameCount * 0.1), magnitude * 10)
                pop()
                // print(theta, x, y)
                // }
            }

            push();
            noStroke()
            fill(227, 0, 80);
            textSize(16);
            textFont(fontMedium)
            text(city, 200 + xValue - textWidth(city) / 2, 580 + yValue)
            pop();
            xValue += 400;
            if (xValue >= 900) {
                xValue = 0;
                yValue += 300
            }

        }
    }

}

function setupMap() {
    map = L.map('quake-map', { worldCopyJump: true, scrollWheelZoom: false }).setView([40.2931671,-124.7111664], 5)

    // load a set of map tiles – choose from the different providers demoed here:
    // https://leaflet-extras.github.io/leaflet-providers/preview/
    L.tileLayer('https://api.tiles.mapbox.com/styles/v1/yiranni/ck425qnia0fgz1coauctys6m1/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        // id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoieWlyYW5uaSIsImEiOiJjam5qeDduODgxMnpvM3BxeGJ6ZWJzeXZuIn0.awojN2_tD6evAt5M1MBmqw',
    }).addTo(map);

}

function addCircles(){
    // calculate minimum and maximum values for magnitude and depth
    var magnitudeMin = 0.0;
    var magnitudeMax = columnMax(quakes, "mag");
    console.log('magnitude range:', [magnitudeMin, magnitudeMax])

    // var depthMin = 0.0;
    // var depthMax = columnMax(quakes, "depth");
    // console.log('depth range:', [depthMin, depthMax])

    // // step through the rows of the table and add a dot for each event
    for (var i=0; i<quakes.getRowCount(); i++){
        var row = quakes.getRow(i)

        // skip over any rows where the magnitude data is missing
        if (row.get('mag')==''){
            continue
        }

        // create a new dot
        var circle = L.circle([row.getNum('latitude'), row.getNum('longitude')], {
            color: 'none',      // the dot stroke color
            fillColor: '#fbbe00', // the dot fill color
            fillOpacity: 0.75,  // use some transparency so we can see overlaps
            radius: row.getNum('mag') * 20000
        })

        // place the new dot on the map
        circle.addTo(map);
    }
}

function columnMax(tableObject, columnName){
    // get the array of strings in the specified column
    var colStrings = tableObject.getColumn(columnName);

    // convert to a list of numbers by running each element through the `float` function
    var colValues = _.map(colStrings, float);

    // find the largest value in the column
    return _.max(colValues);
}

// get the minimum value within a column
function columnMin(tableObject, columnName){
    // get the array of strings in the specified column
    var colStrings = tableObject.getColumn(columnName);

    // convert to a list of numbers by running each element through the `float` function
    var colValues = _.map(colStrings, float);

    // find the largest value in the column
    return _.min(colValues);
}





// }


function distanceFrom(srcLat, srcLng, dstLat, dstLng) {
    return L.latLng(srcLat, srcLng).distanceTo(L.latLng(dstLat, dstLng)) / 1000 // in km
}


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


