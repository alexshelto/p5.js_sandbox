/*
 * @Author: Alex Shelton
 * @Date:   2019-08-14T21:17:31-05:00
 * @Email:  as305218@ohio.edu
 * @Filename: sketch.js
 * @Last modified by:   Alex Shelton
 * @Last modified time: 2019-08-15T01:58:47-05:00
 */

let p;

function setup(){
  createCanvas(640,420);

  p = new Pendulum(width/2,0,140);
}

function draw(){
  background(121);

  p.display();

}
