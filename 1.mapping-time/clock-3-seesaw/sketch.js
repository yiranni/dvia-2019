
function setup() {
  // set the width & height of the sketch
  createCanvas(1200, 700);
}

function draw() {
  var now = clock();
  angleMode(DEGREES);
  background(45, 62, 196);

  push();
  noFill();
  stroke(12, 74, 203);
  strokeWeight(4)
  // for (var i = 0; i < 33; i++) {
  //   line(0, 35 + i * 20, 1200, 35 + i * 20)
  // }

  // translate(0,30);
  var y = -now.progress.day * 20;

  for (var j = 0; j < 10; j++) {
    beginShape();

    for (var i = 0; i < 200; i++) {

      vertex(i * 50, y + 30 + 80 * j);
      // vertex(i * 50, y + 30);
      if (y == -now.progress.day * 20) {
        y = now.progress.day * 20;
      } else {
        y = -now.progress.day * 20;
      }
    }


    endShape();

  }
  pop();

  push();
  noFill();
  stroke(254, 177, 16);
  strokeWeight(4);
  beginShape();
  vertex(600, 500);
  vertex(570, 540);
  vertex(630, 540);
  endShape(CLOSE);

  push();
  noFill();
  translate(600, 500)
  stroke(255);
  strokeWeight(6)

  let a = asin(40 / 200);
  let touched = false;
  if (now.sec % 2 == 1) {
    rotate(a * now.progress.sec);
  } else {
    rotate(-a * now.progress.sec);
  }

  line(-200, 0, 200, 0)

  pop();


  push();
  fill(254, 177, 16);
  noStroke();
  translate(600, 500)

  if (now.sec % 2 == 1) {
    rotate(a * now.progress.sec);
  } else {
    rotate(-a * now.progress.sec);
  }
  ellipse(-150, -20, 30, 30);
  ellipse(150, -20, 30, 30);
  pop();


  push();
  noStroke();
  fill(254, 177, 16);
  translate(600, 500);

  // ellipse(440, 514, 30, 30);
  // ellipse(760, 446, 30, 30)

  pop();



}


