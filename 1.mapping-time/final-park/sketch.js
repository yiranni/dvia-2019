let tree = [{ x1: 280, y1: 330, x2: 270, y2: 350, x3: 290, y3: 350 },
{ x1: 250, y1: 280, x2: 240, y2: 300, x3: 260, y3: 300 },
{ x1: 450, y1: 340, x2: 440, y2: 360, x3: 460, y3: 360 },
{ x1: 580, y1: 330, x2: 570, y2: 350, x3: 590, y3: 350 },
{ x1: 650, y1: 280, x2: 640, y2: 300, x3: 660, y3: 300 },
{ x1: 800, y1: 280, x2: 790, y2: 300, x3: 810, y3: 300 },

  // {x1: 200, y1: 320, x2: 190, y2: 340, x3: 210, y3: 340}
]


function setup() {
  // set the width & height of the sketch
  createCanvas(1200, 700);
}

function draw() {

  var now = clock();
  let maxAngle = 360;
  background(226, 241, 222)
  angleMode(DEGREES)
  push();
  noFill();
  stroke(218,227,215);
  strokeWeight(4)
  var y = -now.progress.week * 20;

  for (var j = 0; j < 10; j++) {
    beginShape();

    for (var i = 0; i < 200; i++) {

      vertex(i * 50, y + 30 + 80 * j);
      // vertex(i * 50, y + 30);
      if (y == -now.progress.week * 20) {
        y = now.progress.week * 20;
      } else {
        y = -now.progress.week * 20;
      }
    }


    endShape();

  }
  pop();
  push();
  noStroke();
  fill(255);

  let move = 200 + 800 * now.progress.day

  arc(move, 200, 100, 30, 180, 0);
  arc(move + 20, 200, 70, 50, 180, 0);

  arc(move + 200, 150, 70, 20, 180, 0);
  arc(move + 220, 150, 70, 30, 180, 0);

  arc(move + 400, 250, 70, 20, 180, 0);
  arc(move + 420, 250, 70, 30, 180, 0);
  pop();
  push();
  translate(600, 270)
  let secAngle = maxAngle * now.progress.min;
  stroke(219, 98, 102);
  strokeWeight(1);
  noFill()
  rotate(secAngle)
  // line(0, 0, 155, 0);
  beginShape();
  vertex(0, -25);
  vertex(114, 0);
  vertex(0, 25)
  endShape(CLOSE);
  let b = 18;
  for (var i = 0; i < 20; i++) {
    rotate(b);
    beginShape();
    vertex(0, -25);
    vertex(114, 0);
    vertex(0, 25)
    endShape(CLOSE);
  }

  pop();

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
  strokeWeight(2);
  noFill();
  ellipse(600, 270, 310, 310)
  pop();


  push();

  translate(600, 270)

  let mnAngle = maxAngle * now.progress.hour;

  stroke(219, 98, 102);
  strokeWeight(2);
  noFill();
  // rotate(yrAngle)
  rotate(mnAngle)
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
  fill(231, 219, 198);
  rect(845, 458, 12, 12, 4, 4, 0, 0)
  fill(252, 199, 88);
  rect(848, 388, 6, 70)
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


