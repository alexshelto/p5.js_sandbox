let mover;

function setup() {
  createCanvas(640, 360);
  mover = new Ball();
}

function draw() {
  background(51);

  mover.update();
  mover.display();
  mover.outputVectors();
}
