

function setup() {
  // set the width & height of the sketch
  createCanvas(1200, 700);
  angleMode(DEGREES)
}

function draw() {

  var now = clock();
  let maxDrop = 65;
  let maxRaise = 180;

  translate(0, 60)
  background(45, 62, 196);

  push();
  fill(254, 177, 16);
  noStroke();
  let drop = maxDrop * now.progress.day;
  let raise = maxRaise * now.progress.year;
  ellipse(600, 80 + drop, 16)
  rect(580, 480 - raise , 40, raise)
  pop();

  push();
  stroke(254, 177, 16);
  strokeWeight(2)
  noFill();
  for(var i = 0; i < now.season; i++) {
    // translate(455 + 20 * i, 470);
    // rotate(45)
    line(455 + 20 * i, 470, 465 + 20 * i, 470);
  }
  pop();

  
  push();
  noFill();
  stroke(108,119,213);
  strokeWeight(6);
  rect(425, 250, 350, 250, 20);
  arc(600, 250, 50, 50, 180,0)
  line(600, 225, 600, 150);
  beginShape();
  vertex(600, 150);
  vertex(575, 125);
  vertex(625, 125)
  endShape(CLOSE);
  rect(580, 300, 40, 180)
  pop();

  push();
  noFill();
  stroke(108,119,213);
  strokeWeight(2);
  for(var i = 0; i < 4; i++) {
    ellipse(460 + 20 * i, 470, 10)
  }
  for(var i = 1; i < 12; i ++) {
    line( 580, 480 - 15 * i, 596, 480 - 15 * i)
  }
  pop();
 

}


