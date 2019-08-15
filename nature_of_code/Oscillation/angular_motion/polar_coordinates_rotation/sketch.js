

//set up for polar coordinates => (r, theta)
let radius = 120;
let theta = 0;

//anglur motion:
let aAcceleration = 0.001;
let aVelocity = 0.0;


function setup(){
  createCanvas(600,600);

}

function draw(){
  background(122);
  text("Move mouse left/right to adjust angular acceleration", 0,10);

  aAcceleration = map(mouseX,0,width,-0.001,0.001);

  translate(width/2,height/2);
  xPos = radius*cos(theta);
  yPos = radius*sin(theta);

  line(0,0,xPos,yPos);
  ellipse(xPos,yPos,10,10);

  theta += aVelocity;
  aVelocity += aAcceleration;


}
