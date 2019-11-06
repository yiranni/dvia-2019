var cancerdata;
var nucleardata;
var xAxis = 700;
var yAxix = 100;
var Chinax = 100;
var Chinay = 500;
var usax = 450;
var usay = 500;
var russiax = 800;
var russiay = 500;
var francex = 1150;
var francey = 500;
let fontRegular;
let fontBold;
let fontItalic;

function preload() {
  loadJSON('data/cancer-rate.json', (imports) =>
    cancerdata = imports
  );
  loadJSON('data/targetedCountry.json', (imports) =>
    nucleardata = imports
  );
  fontRegular = loadFont('assets/Arvo-Regular.ttf');
  fontItalic = loadFont('assets/Arvo-Italic.ttf');
  fontBold = loadFont('assets/Arvo-Bold.ttf');
}

function setup() {
  createCanvas(1600, 800)
}


function draw() {
  colorMode(RGB)
  textFont(fontRegular)
  background(249, 248, 243);

  fill(28, 28, 28);
  push()
  textFont(fontBold);
  textSize(30)
  text("Does Nuclear Testings Lead to Cancer?", 100, 80)
  pop()
  // timeline
  line(100, 400, 1520, 400)

  // year and vertical lines under
  push()
  textSize(14)
  textFont(fontItalic)
  for (var i = 0; i < 7; i++) {
    text(i + 1990, 88 + 200 * i, 370)

  }
  for (var i = 1; i < 7; i++) {
    line(100 + 200 * i, 396, 100 + 200 * i, 400)
  }
  pop()

  text("USA", 1300, 80);
  push()
  stroke(83, 126, 197)
  fill(83, 126, 197, 191)
  ellipse(1400, 75, 10)
  pop()
  text("China", 1300, 110);
  push()
  stroke(247, 98, 98)
  fill(247, 98, 98, 191)
  ellipse(1400, 105, 10)
  pop()
  text("UK", 1300, 140);
  push()
  stroke(0, 121, 68)
  fill(0, 121, 68, 191)
  ellipse(1400, 135, 10)
  pop()
  text("France", 1300, 170);
  push()
  stroke(153, 144, 115)
  fill(153, 144, 115, 191)
  ellipse(1400, 165, 10)
  pop()
  text("Russia", 1300, 200);
  push()
  stroke(247, 170, 0)
  fill(247, 170, 0, 191)
  ellipse(1400, 195, 10)
  pop()
 
  for (var i = 0; i < nucleardata.length; i++) {
    var thisTest = nucleardata[i];
    var thisCountry = thisTest.country;
    var thisDate = Number(thisTest.year) + Number(thisTest.month) / 12 + Number(thisTest.day) / 365

    if (thisCountry == "usa") {
      push()
      stroke(83, 126, 197)
      fill(83, 126, 197, 191)
      ellipse((thisDate - 1990) * 200 + 100, 400, 10)

      pop()
    } else if (thisCountry == "prc") {
      push()
      stroke(247, 98, 98)
      fill(247, 98, 98, 191)
      ellipse((thisDate - 1990) * 200 + 100, 400, 10)
      pop()
    } else if (thisCountry == "uk") {
      push()
      stroke(0, 121, 68)
      fill(0, 121, 68, 191)
      ellipse((thisDate - 1990) * 200 + 100, 400, 10)
      pop()
    } else if (thisCountry == "fr") {
      push()
      stroke(153, 144, 115)
      fill(153, 144, 115, 191)
      ellipse((thisDate - 1990) * 200 + 100, 400, 10)
      pop()
    } else {
      push()
      stroke(247, 170, 0)
      fill(247, 170, 0, 191)
      ellipse((thisDate - 1990) * 200 + 100, 400, 10)
      pop()
    }

  }
  // divide cancer into groups based on country 
  var chinarates = [];
  var usarates = [];
  var russiarates = [];
  var francerates = []
  for (var i = 0; i < cancerdata.length; i++) {
    let thisData = cancerdata[i];
    if (thisData.country == "China") {
      chinarates.push(thisData)
    } else if (thisData.country == "United States") {
      usarates.push(thisData)
    } else if (thisData.country == "Russia") {
      russiarates.push(thisData)
    } else if (thisData.country == "France") {
      francerates.push(thisData)
    }
  }


  push()
  textSize(14);
  textFont(fontItalic)
  text("China", Chinax, Chinay)
  // y axis for china
  line(Chinax + 20, Chinay + 20, Chinax + 20, Chinay + 220)
  // x axis for china, range between 2 years = 40
  line(Chinax + 20, Chinay + 220, Chinax + 300, Chinay + 220)
  // line graph for cancer rate in China
  for (var i = 0; i < 6; i++) {
    line(Chinax + 40 * i + 20, 720 - chinarates[i].rate * 40, Chinax + 40 * (i + 1) + 20, 720 - chinarates[i + 1].rate * 40);
  }
  // dots on line
  // (120, chinarates[0].rate*40)
  for (var i = 0; i < 7; i++) {
    ellipse(Chinax + 40 * i + 20, 720 - chinarates[i].rate * 40, 6)
  }

  text("USA", usax, usay)
  // y axis for china
  line(usax + 20, usay + 20, usax + 20, usay + 220);
  // x axis for china, range between 2 years = 40
  line(usax + 20, usay + 220, usax + 300, usay + 220);
  for (var i = 0; i < 6; i++) {
    line(usax + 40 * i + 20, 720 - usarates[i].rate * 40, usax + 40 * (i + 1) + 20, 720 - usarates[i + 1].rate * 40)
  }
  for (var i = 0; i < 7; i++) {
    ellipse(usax + 40 * i + 20, 720 - usarates[i].rate * 40, 6)
  }

  text("Russia", russiax, russiay)
  // y axis for china
  line(russiax + 20, russiay + 20, russiax + 20, russiay + 220);
  // x axis for china, range between 2 years = 40
  line(russiax + 20, russiay + 220, russiax + 300, russiay + 220);
  for (var i = 0; i < 6; i++) {
    line(russiax + 40 * i + 20, 720 - russiarates[i].rate * 40, russiax + 40 * (i + 1) + 20, 720 - russiarates[i + 1].rate * 40)
  }
  for (var i = 0; i < 7; i++) {
    ellipse(russiax + 40 * i + 20, 720 - russiarates[i].rate * 40, 6)
  }

  text("France", francex, francey)
  // y axis for china
  line(francex + 20, francey + 20, francex + 20, francey + 220);
  // x axis for china, range between 2 years = 40
  line(francex + 20, francey + 220, francex + 300, francey + 220);
  for (var i = 0; i < 6; i++) {
    line(francex + 40 * i + 20, 720 - francerates[i].rate * 40, francex + 40 * (i + 1) + 20, 720 - francerates[i + 1].rate * 40)
  }
  for (var i = 0; i < 7; i++) {
    ellipse(francex + 40 * i + 20, 720 - francerates[i].rate * 40, 6)
  }
  pop()
  push()
  noFill()
  for (var i = 0; i < nucleardata.length; i++) {
    var thisTest = nucleardata[i];
    var thisCountry = thisTest.targetCountry;
    var thisDate = Number(thisTest.year) + Number(thisTest.month) / 12 + Number(thisTest.day) / 365
    if (thisDate < 1991) {
      if (thisCountry == "USA") {
        push()
        stroke(83, 126, 197)
        line((thisDate - 1990) * 200 + 100, 400, usax + 20, 720 - usarates[0].rate * 40)
        // curve((thisDate - 1990) * 200 + 100, 340, (thisDate - 1990) * 200 + 100, 420, usax + 20, 680 - usarates[0].rate * 40, usax + 20, 720 - usarates[0].rate * 40)
        pop()
      }
    }
    if (thisDate >= 1991 && thisDate < 1992) {
      if (thisCountry == "USA") {
        push()
        stroke(83, 126, 197)
        line((thisDate - 1990) * 200 + 100, 400, usax + 20 + 40, 720 - usarates[1].rate * 40)
        // curve((thisDate - 1990) * 200 + 100, 340, (thisDate - 1990) * 200 + 100, 420, usax + 20 + 40, 680 - usarates[1].rate * 40, usax + 20 + 40, 720 - usarates[1].rate * 40)
        pop()
      }
    }
    if (thisDate >= 1992 && thisDate < 1993) {
      if (thisCountry == "USA") {
        push()
        stroke(83, 126, 197)
        line((thisDate - 1990) * 200 + 100, 400, usax + 20 + 40 * 2, 720 - usarates[2].rate * 40)
        pop()
      }
    }
    if (thisDate >= 1993 && thisDate < 1994) {
      if (thisCountry == "USA") {
        push()
        stroke(83, 126, 197)
        line((thisDate - 1990) * 200 + 100, 400, usax + 20 + 40 * 3, 720 - usarates[3].rate * 40)
        pop()
      }
    }
    if (thisDate >= 1994 && thisDate < 1995) {
      if (thisCountry == "USA") {
        push()
        stroke(83, 126, 197)
        line((thisDate - 1990) * 200 + 100, 400, usax + 20 + 40 * 4, 720 - usarates[4].rate * 40)
        pop()
      }
    }
    if (thisDate >= 1995 && thisDate < 1996) {
      if (thisCountry == "USA") {
        push()
        stroke(83, 126, 197)
        line((thisDate - 1990) * 200 + 100, 400, usax + 20 + 40 * 5, 720 - usarates[5].rate * 40)
        pop()
      }
    }
    if (thisDate > 1996) {
      if (thisCountry == "USA") {
        push()
        stroke(83, 126, 197)
        line((thisDate - 1990) * 200 + 100, 400, usax + 20 + 40 * 6, 720 - usarates[6].rate * 40)
        pop()
      }
    }
  }
  
  for (var i = 0; i < nucleardata.length; i++) {
    var thisTest = nucleardata[i];
    var thisCountry = thisTest.targetCountry;
    var thisDate = Number(thisTest.year) + Number(thisTest.month) / 12 + Number(thisTest.day) / 365
    if (thisDate < 1991) {
      if (thisCountry == "China" || thisCountry == "PRC") {
        push()
        stroke(247, 98, 98)
        line((thisDate - 1990) * 200 + 100, 400, Chinax + 20, 720 - chinarates[0].rate * 40)
        pop()
      }
    }
    if (thisDate >= 1991 && thisDate < 1992) {
      if (thisCountry == "China" || thisCountry == "PRC") {
        push()
        stroke(247, 98, 98)
        line((thisDate - 1990) * 200 + 100, 400, Chinax + 20 + 40, 720 - chinarates[1].rate * 40)
        pop()
      }
    }
    if (thisDate >= 1992 && thisDate < 1993) {
      if (thisCountry == "China" || thisCountry == "PRC") {
        push()
        stroke(247, 98, 98)
        line((thisDate - 1990) * 200 + 100, 400, Chinax + 20 + 40 * 2, 720 - chinarates[2].rate * 40)
        pop()
      }
    }
    if (thisDate >= 1993 && thisDate < 1994) {
      if (thisCountry == "China" || thisCountry == "PRC") {
        push()
        stroke(247, 98, 98)
        line((thisDate - 1990) * 200 + 100, 400, Chinax + 20 + 40 * 3, 720 - chinarates[3].rate * 40)
        pop()
      }
    }
    if (thisDate >= 1994 && thisDate < 1995) {
      if (thisCountry == "China" || thisCountry == "PRC") {
        push()
        stroke(247, 98, 98)
        line((thisDate - 1990) * 200 + 100, 400, Chinax + 20 + 40 * 4, 720 - chinarates[4].rate * 40)
        pop()
      }
    }
    if (thisDate >= 1995 && thisDate < 1996) {
      if (thisCountry == "China" || thisCountry == "PRC") {
        push()
        stroke(247, 98, 98)
        line((thisDate - 1990) * 200 + 100, 400, Chinax + 20 + 40 * 5, 720 - chinarates[5].rate * 40)
        pop()
      }
    }
    if (thisDate > 1996) {
      if (thisCountry == "China" || thisCountry == "PRC") {
        push()
        stroke(247, 98, 98)
        line((thisDate - 1990) * 200 + 100, 400, Chinax + 20 + 40 * 6, 720 - chinarates[6].rate * 40)
        pop()
      }
    }

  }
  for (var i = 0; i < nucleardata.length; i++) {
    push()
    var thisTest = nucleardata[i];
    var thisCountry = thisTest.targetCountry;
    var thisDate = Number(thisTest.year) + Number(thisTest.month) / 12 + Number(thisTest.day) / 365
    if (thisDate < 1991) {
      if (thisCountry == "France") {
        push()
        stroke(153, 144, 115)
        line((thisDate - 1990) * 200 + 100, 400, francex + 20, 720 - francerates[0].rate * 40)
        pop()
      }
    }
    if (thisDate >= 1991 && thisDate < 1992) {
      if (thisCountry == "France") {
        push()
        stroke(153, 144, 115)
        line((thisDate - 1990) * 200 + 100, 400, francex + 20 + 40, 720 - francerates[1].rate * 40)
        pop()
      }
    }
    if (thisDate >= 1992 && thisDate < 1993) {
      if (thisCountry == "France") {
        push()
        stroke(153, 144, 115)
        line((thisDate - 1990) * 200 + 100, 400, francex + 20 + 40 * 2, 720 - francerates[2].rate * 40)
        pop()
      }
    }
    if (thisDate >= 1993 && thisDate < 1994) {
      if (thisCountry == "France") {
        push()
        stroke(153, 144, 115)
        line((thisDate - 1990) * 200 + 100, 400, francex + 20 + 40 * 3, 720 - francerates[3].rate * 40)
        pop()
      }
    }
    if (thisDate >= 1994 && thisDate < 1995) {
      if (thisCountry == "France") {
        push()
        stroke(153, 144, 115)
        line((thisDate - 1990) * 200 + 100, 400, francex + 20 + 40 * 4, 720 - francerates[4].rate * 40)
        pop()
      }
    }
    if (thisDate >= 1995 && thisDate < 1996) {
      if (thisCountry == "France") {
        push()
        stroke(153, 144, 115)
        line((thisDate - 1990) * 200 + 100, 400, francex + 20 + 40 * 5, 720 - francerates[5].rate * 40)
        pop()
      }
    }
    if (thisDate > 1996) {
      if (thisCountry == "France") {
        push()
        stroke(153, 144, 115)
        line((thisDate - 1990) * 200 + 100, 400, francex + 20 + 40 * 6, 720 - francerates[6].rate * 40)
        pop()
      }
    }
  }
  for (var i = 0; i < nucleardata.length; i++) {
    var thisTest = nucleardata[i];
    var thisCountry = thisTest.targetCountry;
    var thisDate = Number(thisTest.year) + Number(thisTest.month) / 12 + Number(thisTest.day) / 365
    if (thisDate < 1991) {
      if (thisCountry == "Russia") {
        push()
        stroke(247, 170, 0)
        line((thisDate - 1990) * 200 + 100, 400, russiax + 20, 720 - russiarates[0].rate * 40)
        pop()
      }
    }
    if (thisDate >= 1991 && thisDate < 1992) {
      if (thisCountry == "Russia") {
        push()
        stroke(247, 170, 0)
        line((thisDate - 1990) * 200 + 100, 400, russiax + 20 + 40, 720 - russiarates[1].rate * 40)
        pop()
      }
    }
    if (thisDate >= 1992 && thisDate < 1993) {
      if (thisCountry == "Russia") {
        push()
        stroke(247, 170, 0)
        line((thisDate - 1990) * 200 + 100, 400, russiax + 20 + 40 * 2, 720 - russiarates[2].rate * 40)
        pop()
      }
    }
    if (thisDate >= 1993 && thisDate < 1994) {
      if (thisCountry == "Russia") {
        push()
        stroke(247, 170, 0)
        line((thisDate - 1990) * 200 + 100, 400, russiax + 20 + 40 * 3, 720 - russiarates[3].rate * 40)
        pop()
      }
    }
    if (thisDate >= 1994 && thisDate < 1995) {
      if (thisCountry == "Russia") {
        push()
        stroke(247, 170, 0)
        line((thisDate - 1990) * 200 + 100, 400, russiax + 20 + 40 * 4, 720 - russiarates[4].rate * 40)
        pop()
      }
    }
    if (thisDate >= 1995 && thisDate < 1996) {
      if (thisCountry == "Russia") {
        push()
        stroke(247, 170, 0)
        line((thisDate - 1990) * 200 + 100, 400, russiax + 20 + 40 * 5, 720 - russiarates[5].rate * 40)
        pop()
      }
    }
    if (thisDate > 1996) {
      if (thisCountry == "Russia") {
        push()
        stroke(247, 170, 0)
        line((thisDate - 1990) * 200 + 100, 400, russiax + 20 + 40 * 6, 720 - russiarates[6].rate * 40)
        pop()
      }
    }
  }
  pop()
 

}