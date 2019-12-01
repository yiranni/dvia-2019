var a = 0;
var speed = 10;
var colors = ['darkred','orange','green','steelblue','darkslategrey']


var gradient = chroma.scale(colors).mode('lab')
function colorForProgress(pct){
  return gradient(pct).hex()
}

function setup() {
  // set the width & height of the sketch
  createCanvas(1200, 700);
}

function draw() {

  var now = clock();
  var color = colorForProgress(now.progress.hour)
  background(color);


  noStroke()
  fill(0)
  rect(480, 100, 240, 20)
  rect(480, 480, 240, 20)
  stroke(255)
  line(520, 110, 680, 110)
  line(520, 490, 680, 490)

  push();
  noStroke();
  fill(230, 227, 218);
  beginShape();
  vertex(500, 120);
  vertex(500, 240);
  vertex(580, 300);
  vertex(620, 300);
  vertex(700, 240);
  vertex(700, 120);
  endShape(CLOSE);
  beginShape();
  vertex(500, 480);
  vertex(500, 360);
  vertex(580, 300);
  vertex(620, 300);
  vertex(700, 360);
  vertex(700, 480);
  endShape(CLOSE)
  pop();


  push();
  fill(color);
  noStroke();
  for (var i = 0; i < now.sec; i++) { 
    ellipse(500 + 9 + 2 + 20 * (i % 10), 470 - 20 * Math.floor(i/10), 16, 16);
  }
  pop();
  // line(20, 50, 620, 50);
  // line(20, 150, 620, 150);
  // line(20, 250, 620, 250);
  // for(var i = 0; i <= 30; i++) {
  //   line(20+20*i, 44, 20+20*i, 50);
  // }




  // for(var i = 0; i <= 30; i++) {
  //   line(20+20*i, 144, 20+20*i, 150);
  // }

  // for(var i = 0; i <= 24; i++) {
  //   line(20+25*i, 244, 20+25*i, 250);
  // }
  // pop();

  // fill(255,20,147);
  // ellipse(20 + 10 * now.sec, 50, 14, 14);

  // fill(101,46,199);
  // ellipse(20 + 10 * now.min, 150, 14, 14);

  // fill(0,194,186);
  // ellipse(20 + 25 * now.hour, 250, 14, 14);
}


