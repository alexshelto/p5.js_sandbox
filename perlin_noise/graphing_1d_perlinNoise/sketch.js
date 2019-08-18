/**
 * @Author: Alex Shelton
 * @Date:   2019-08-16T00:51:27-05:00
 * @Email:  as305218@ohio.edu
 * @Filename: sketch.js
 * @Last modified by:   Alex Shelton
 * @Last modified time: 2019-08-16T10:33:53-05:00
 */


let dx;
let xStart = 0.0;


function setup(){
  createCanvas(640,600);

  slider = createSlider(0,100, 0);
  slider.position(width/2,height-20);


}

function draw(){
  background(90);
  stroke(255);
  noFill();
  let dx = slider.value()*0.002;

  beginShape();
  let xOff = xStart;
  for(let x = 0; x < width; x++){
    let y_value = noise(xOff)*height; //perlin noise


    vertex(x,y_value);
    xOff += dx; //increment from slider value
  }
  endShape();
  xStart += dx;




  textSize(20);
  text("x-step: ", 340, height-40);
  text(dx,420, height - 40);

}
