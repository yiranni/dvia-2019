var data;
let t = 0;
var canvasWidth = 1500;
var canvasHeight = 1000;

function preload() {
  loadJSON('data/height-crater.json', (imports) =>
    data = imports
  )
}

function setup() {
  createCanvas(canvasWidth, canvasHeight)

  // print(data)
}

function draw() {
  colorMode(RGB)
  background(255,255,255);
  strokeWeight(2)
  for (i = 0; i < data.length; i++) {
    var thisTest = data[i]
    var thisYield = Number(thisTest.yield);
    if(thisYield>=500) {
      thisYield = 100;
    }else if(thisYield<500 && thisYield >= 100 ) {
      thisYield = 50;
    }else if(thisYield < 100 && thisYield >= 50) {
      thisYield = 25;
    } else {
      thisYield = 10;
    }
    if (thisTest.purpose === 'WE') {
      stroke(121, 111, 102)
      fill(121, 111, 102, 191)
      ellipse((Number(thisTest.crater))/1.8 + 150, Number(canvasHeight - thisTest.height) / 1.5, thisYield, thisYield);
    } else if(thisTest.purpose === 'WR') {
      stroke(189, 87, 78)
      fill(189, 87, 78, 191)
      ellipse((Number(thisTest.crater))/1.8 + 150, Number(canvasHeight - thisTest.height)/1.5,  thisYield, thisYield);
    } else if(thisTest.purpose === 'PR') {
      stroke(194, 172, 120)
      fill(194, 172, 120, 191)
      ellipse((Number(thisTest.crater))/1.8 + 150, Number(canvasHeight - thisTest.height)/1.5,  thisYield, thisYield)
    } 
  }
  stroke(140, 139, 138);
  // strokeWeight(1)
  line(80, 750, 1400, 750)
  line(100, 100, 100, 770)

}