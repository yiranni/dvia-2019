var a = 0;
var speed = 10;
var colors1 = ['#FBFBA0', '#FF5E5E', '#FE9448', '#aad6ec'];
var colors2 = ['#cbda7a', '#e55454', '#d06c07', '#8161ce'];
var colors3 = ['#6bc195','#cc4b4b', '#903503', '#151269'];
var colors4 = ['#e8f7ec','#f9e7e7', '#fffee3', '#f0fdff']
var gradient1 = chroma.scale(colors1).mode('lab')
function colorForProgress1(pct) {
  return gradient1(pct).hex();
}


var gradient2 = chroma.scale(colors2).mode('lab')
function colorForProgress2(pct) {
  return gradient2(pct).hex();
}

var gradient3 = chroma.scale(colors3).mode('lab')
function colorForProgress3(pct) {
  return gradient3(pct).hex();
}

var gradient4 = chroma.scale(colors4).mode('lab')
function colorForProgress4(pct) {
  return gradient4(pct).hex();
}

let tree = [{ x1: 280, y1: 330, x2: 270, y2: 350, x3: 290, y3: 350 },
            { x1: 250, y1: 280, x2: 240, y2: 300, x3: 260, y3: 300 },
            { x1: 450, y1: 340, x2: 440, y2: 360, x3: 460, y3: 360 },
            { x1: 580, y1: 330, x2: 570, y2: 350, x3: 590, y3: 350 },
            { x1: 650, y1: 280, x2: 640, y2: 300, x3: 660, y3: 300 },
            { x1: 800, y1: 280, x2: 790, y2: 300, x3: 810, y3: 300 },

  // {x1: 200, y1: 320, x2: 190, y2: 340, x3: 210, y3: 340}
]

let discrete = false;


function setup() {
  // set the width & height of the sketch
  createCanvas(1200, 700);
}

function draw() {

  var now = clock();
  var color1 = colorForProgress1(now.progress.season);
  var color2 = colorForProgress2(now.progress.season);
  var color3 = colorForProgress3(now.progress.season);
  var color4 = colorForProgress4(now.progress.season);

  background(color4)


  push();
  noStroke()
  for (var j = 0; j < tree.length; j++) {
    if (j % 2 == 1) {
      fill(color3);
    } else {
      fill(color2)
    }
    var thisTree = tree[j];
    var x1 = thisTree.x1;
    var x2 = thisTree.x2;
    var x3 = thisTree.x3;
    var y1 = thisTree.y1;
    var y2 = thisTree.y2;
    var y3 = thisTree.y3;

    let increasex = 3;
    let increasey = 12;
    let increaseh = 22;
    for (var i = 0; i < 7; i++) {
      beginShape();
      vertex(x1, y1 + increasey * i);
      vertex(x2 - increasex * i, y2 + increaseh * i);
      vertex(x3 + increasex * i, y3 + increaseh * i);
      endShape(CLOSE)
    }

  }


  push();
  noStroke();
  // fill(254, 148, 72);
  // colorForProgress(now.progress.hour)
  fill(color1)
  arc(300, 500, 300, 150, PI, 0);
  // fill(197, 53, 68);
  fill(color2)
  arc(500, 500, 350, 180, PI, 0);
  // fill(229, 80, 71);
  fill(color3)
  arc(800, 500, 500, 220, PI, 0);
  pop();

  push();
  noStroke();
  fill(255, 196, 147);
  rect(color4)
  pop();


  push();
  noStroke();
  fill(255);
  if(discrete) {
    var move = map(now.hour, 1, 12, 0, 1200)
  }else {
    move = 1200 * now.progress.day
  }
  arc(move, 300, 100, 30, PI, 0);
  arc(move + 20, 300, 70, 50, PI, 0);

  arc(move + 200, 250, 70, 20, PI, 0);
  arc(move + 220, 250, 70, 30, PI, 0);

  arc(move  + 400, 350, 70, 20, PI, 0);
  arc(move +  420, 350, 70, 30, PI, 0);
  pop();








}


