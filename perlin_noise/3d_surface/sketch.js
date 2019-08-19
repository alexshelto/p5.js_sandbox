/**
 * @Author: Alex Shelton
 * @Date:   2019-08-16T10:34:56-05:00
 * @Email:  as305218@ohio.edu
 * @Filename: sketch.js
 * @Last modified by:   zoso
 * @Last modified time: 2019-08-18T16:16:55-05:00
 */

var cols, rows;
var scl = 15;
var w = 1400; //width
var h = 2000; //height

var flying = 0;

var terrain = [];
let flightSpeed;






function setup() {



  createCanvas(600, 600,WEBGL); //WEBGL needed for x-Axis rotationvar p5canvas

  cols = floor(w / scl);
  rows = floor(h/ scl);




  //creating an empty 2d vector for each vertex of traingular strip
  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
  textFont('helvetica');
  textSize(20);
  fill(255);
  text("Travel speed", 400, 20);
  slider = createSlider(0,50,25);
  slider.position(width/2, 20);

  perlinSlid = createSlider(0,50,25);
  perlinSlid.position(width/2, 40);


}

function draw() {

  let perlinStep = perlinSlid.value()*0.005;

  flying -= (slider.value()*0.009); //subtracting to move terrain towards user
  var yoff = flying;//bringing y values closer makes terrain move to user
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -150, 150);
      xoff += perlinStep;
    }
    yoff += perlinStep;
  }


  background(0);
  translate(0, 50,-100);
  rotateX(PI/3);
  fill(128);
  translate(-w/2, -h/2);
  for (var y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
    }
    endShape();
  }


}
