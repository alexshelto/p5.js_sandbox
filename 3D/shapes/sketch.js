/**
 * @Author: Alex Shelton <zoso>
 * @Date:   2019-08-18T17:24:48-05:00
 * @Email:  as305218@ohio.edu
 * @Filename: sketch.js
 * @Last modified by:   zoso
 * @Last modified time: 2019-08-18T17:37:30-05:00
 */

let angle = 0;

function setup(){
  createCanvas(600,600,WEBGL);

}

function draw(){
  background(175);

  
  rotateX(angle);
  rotateY(angle-0.02);


  rectMode(CENTER);
  box(40,40,100,4,4);

  angle += 0.01;
}
