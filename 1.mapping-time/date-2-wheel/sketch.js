
var discrete = false;

function setup() {
  // set the width & height of the sketch
  createCanvas(1200, 700);
}

function draw() {

  var now = clock();
  background(226, 241, 222)
  angleMode(DEGREES)


  push();
  noStroke();
  // two triangles
  // left
  fill(254, 238, 150);
  beginShape();
  vertex(600, 270);
  vertex(496, 476);
  vertex(526, 476);
  endShape(CLOSE);

  // right
  beginShape();
  fill(191, 179, 129);
  vertex(600, 270);
  vertex(704, 488);
  vertex(674, 488);
  endShape(CLOSE);
  // vertex(670, 488);



  // bt rects
  fill(219, 98, 102);
  rect(430, 488, 340, 12, 6)
  fill(254, 154, 162);
  rect(460, 476, 280, 12, 6)
  // greens
  fill(158, 202, 101);
  rect(200, 500, 800, 30, 10, 10, 0, 0);
  fill(136, 159, 108);
  rect(200, 530, 800, 30, 0, 0, 10, 10)

  // circles
  // yellows
  fill(254, 238, 150);
  arc(600, 270, 80, 80, 90, 270);
  fill(191, 179, 129);
  arc(600, 270, 80, 80, 270, 90);
  // reds
  fill(219, 98, 102);
  arc(600, 270, 50, 50, 270, 90);
  fill(254, 154, 162);
  arc(600, 270, 50, 50, 90, 270);
  pop();

  push();

  stroke(219, 98, 102);
  strokeWeight(20);
  strokeCap(SQUARE)
  noFill();
  arc(600, 270, 250, 250, 270, 90);
  stroke(254, 154, 162);
  strokeWeight(20);
  strokeCap(SQUARE)
  noFill();
  arc(600, 270, 250, 250, 90, 270);
  pop();

  push();
  stroke(219, 98, 102);
  strokeWeight(1);
  noFill();
  ellipse(600, 270, 310, 310)
  pop();


  push();

  translate(600, 270)
  let maxAngle = 360;
  let yrAngle = maxAngle * now.progress.year;

  stroke(219, 98, 102);
  strokeWeight(1);
  noFill();
  // rotate(yrAngle)
  rotate(yrAngle)
  line(0, 0, 155, 0)
  let a = 36;
  for (var i = 0; i < 10; i++) {
    rotate(a)
    line(0, 0, 155, 0)
  }
  pop();


  push();
  noStroke()
  fill(139, 97, 106);
  rect(840, 492, 22, 8, 4);
  fill(177, 148, 154);
  rect(845, 470, 12, 22)
  fill(231,219,198);
  rect(845, 458, 12, 12, 4, 4, 0, 0)
  fill(252,199,88);
  rect(848, 388, 6 ,70)
  fill(139, 97, 106);
  rect(845, 382, 12, 6, 2)
  pop();

  push();
  colorMode(HSL);
  noStroke()
  let colorGradient = map(now.hours, 1, 24, 90, 30)
  fill(50.8, 98.1, colorGradient);
  ellipse(851, 374, 20, 20)
  pop();





}


