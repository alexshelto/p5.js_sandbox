
let angle = 0.0;

let aVelocity = 0.0;
let aAcceleration = 0.01;


function setup(){
  createCanvas(600,600);

}


function draw(){
  background(220);

  //calculating acceleration
  aAcceleration = map(mouseX,0,width,-0.001,0.001); //mapping acceleration to mouse location
  angle += aVelocity; //(velocity changes position) OR angle
  aVelocity += aAcceleration;//accelration vector added to velocity, 1d vector 



//outputting data:-------------------
  textFont('Helvetica');
  textSize(12);
  text("Angular Acceleration",0,20);
  text(aAcceleration, 150,20);
  text("Angle -position-",0,40);
  text(angle,150,40);
//----------------------------------


  rectMode(CENTER);
  stroke(0);
  fill(125);

  translate(width/2,height/2);
  rotate(angle);
  rect(0,0,64,32);

}
