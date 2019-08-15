
//----------------------------------------------------------
//Make sure correct sketch.js file is included in index.html
//----------------------------------------------------------



// Alex Shelton
// Program uses harmonic moition and a sin wave to
// move the balls y location on screen
//



//Smaller Period = Faster



let amplitude = 160; //height
let theta = 0.0;
let theta2 = 0.0;



function setup(){
  createCanvas(800,800);

}

function draw(){
  background(122);
  translate(width/2, height/2); //translating grid to keep 0,0 centered
  fill(88);
  stroke(5);

  //changing objects y-Value due to harmonic motion sin
  let y = amplitude * sin(theta);
  let x = amplitude * sin(theta2);
  line(0,0,0,y);
  ellipse(x,y,40,40);

  theta += 0.05;
  theta2 += 0.01;



}
