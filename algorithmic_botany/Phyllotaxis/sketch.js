/**
 * @Author: Alex Shelton
 * @Date:   2019-08-17T21:29:22-05:00
 * @Email:  as305218@ohio.edu
 * @Filename: sketch.js
 * @Last modified by:   Alex Shelton
 * @Last modified time: 2019-08-17T21:57:20-05:00
 */

// theta = n ∗ 137.5◦,  r = c√n,
//
// Where 'n' is the numbering of seeds outward
// theta is the angle between a reference direction and position vector
// of the nth term
//
// r is the distance between the center and the center of nth term

//uses polar coordinates need to plot those into cartesian
//x = radius*cos(theta);
//y = radius*sin(theta);

var n = 0;
var c = 4;


function setup(){
  createCanvas(400,400);
  background(0);
  angleMode(DEGREES); //changes angle mode to degrees
  colorMode(HSB);

}

function draw(){
  translate(width/2,height/2); //for polar to cartesian

  let a = n*137.5;
  let r = c*sqrt(n);
  let x = r*cos(a);
  let y = r*sin(a);
  n++;

  fill(n%256,255,255);
  noStroke();
  ellipse(x,y,4);


}
