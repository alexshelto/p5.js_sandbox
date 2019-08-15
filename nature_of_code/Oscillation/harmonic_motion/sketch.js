//----------------------------------------------------------
//Make sure correct sketch.js file is included in index.html
//----------------------------------------------------------




// Alex Shelton
// Program uses harmonic moition and a sin wave to
// move the balls y location on screen
//



//Smaller Period = Faster



let amplitude = 160; //height
let period = 200; //how many frames till full motion achieved




function setup(){
  createCanvas(800,800);

}

function draw(){
  background(122);
  translate(width/2, height/2); //translating grid to keep 0,0 centered
  fill(88);
  stroke(5);

  //changing objects y-Value due to harmonic motion sin
  let y = amplitude * sin((frameCount/period)*TWO_PI);

  line(0,0,0,y);
  ellipse(0,y,40,40);




}
