var data;
var xAxis = 700;
var yAxix = 100;

function preload(){
  loadJSON('data/cancer-rate.json', (imports) =>
    data = imports
  )
}

function setup(){
  createCanvas(1600, 800)

  print(data)
}


function draw() {
  colorMode(RGB)
  background(255,255,255);
  for(var i = 0; i < data.length; i ++) {
    var thisData = data[i];
    if(thisData.country = 'China') {
      // ellipse(Number(thisData.year) - 1990 + 150 + 50 * i, Number(thisData.rate) * 50, 10);
      text(thisData.year + 50 * i + 100, 200, thisData.year + 50 * i + 150, 200)
      console.log(thisData.country)
      // console.log(i)
    }
  }
  // ellipse(Number(data[0].year) - 1990 + 150, Number(data[0].rate) * 100, 10)

}