// import { arch } from "os";
// import * as myLib from '/lib/clock.js';

function setup() {
    // set the width & height of the sketch
    createCanvas(400, 400)
    angleMode(DEGREES);
  }
  
  function draw() {
    var now = clock();
    translate(200, 200);
    rotate(-90);
    let color = map(now.hour, 0, 12, 0, 255)
    background(color);
    if (now.pm == true) {
      // background(68, 68, 68);
      strokeWeight(14);
      strokeCap(PROJECT);
  
      stroke(255, 221, 103);
      noFill();
      let scAngle = map(now.sec, 0, 60, 0, 360);
      arc(0, 0, 240, 240, 0, scAngle);
  
      stroke(207, 138, 92)
      let mnAngle = map(now.min, 0, 60, 0, 360);
      arc(0, 0, 180, 180, 0, mnAngle);
  
      stroke(255, 69, 92)
      let hrAngle = map(now.hour % 12, 0, 12, 0, 360);
      arc(0, 0, 120, 120, 0, hrAngle);
    } else {
      // background(248, 247, 242);
      strokeWeight(14);
      strokeCap(PROJECT);
  
      stroke(215,216,84);
      noFill();
      let scAngle = map(now.sec, 0, 60, 0, 360);
      arc(0, 0, 240, 240, 0, scAngle);
  
      stroke(61,189,134);
      let mnAngle = map(now.min, 0, 60, 0, 360);
      arc(0, 0, 180, 180, 0, mnAngle);
  
      stroke(75,95,87);
      let hrAngle = map(now.hour % 12, 0, 12, 0, 360);
      arc(0, 0, 120, 120, 0, hrAngle);
    }
  
  
  }
  
  
  