let b;

function setup() {
  createCanvas(640, 360);
  b = new Ball();
}

function draw() {
  background(51);


  gravity = createVector(0,0.3);
  b.applyForce(gravity);

  wind = createVector(0.2,0);
  b.applyForce(wind)

  b.update();
  b.bounce();
  b.display();
  b.outputVectors();
}
