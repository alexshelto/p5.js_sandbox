/**
 * @Author: Alex Shelton <zoso>
 * @Date:   2019-08-19T01:44:32-05:00
 * @Email:  as305218@ohio.edu
 * @Filename: sketch.js
 * @Last modified by:   zoso
 * @Last modified time: 2019-08-19T03:11:53-05:00
 */

// Cardioid Visualization
//
// A cardioid takes a circle and splits it into 10 points 0-9
// each number is multiplied to each number modularly and n -> infinity
// a line connects each point to the multiplied number
//
// angle from each point is 2pi/npoints
//
let factor = 66.5;
let r;
let total = 200;


function setup() {
  createCanvas(200, 200);
  r = height / 2 - 16;
  //createLoop({duration:6, gif:true}); //recording the sketch to a gif
}


function draw() {
  background(0);
  factor += 0.035;
  translate(width / 2, height / 2);
  stroke(255);
  //strokeWeight(2);
  noFill();
  ellipse(0, 0, r*2);

  strokeWeight(2);
  for (let i = 0; i < total; i++) {
    const a = calcPoints(i, total); //x1,y1
    const b = calcPoints(i * factor, total);//x2,y2
    line(a.x, a.y, b.x, b.y);
  }
}

function calcPoints(index, total) {
  const angle = map(index % total,0,total,0,TWO_PI);
  const v = p5.Vector.fromAngle(angle + PI);
  val.mult(r);
  return val;
}
