
let b;

function setup(){
  createCanvas(400,300);
  b = new Ball();
}

function draw(){
  background('rgba(0,255,0, 0.25)');
  b.move();
  b.bounce();
  b.update();
  b.outputVectors();
}
