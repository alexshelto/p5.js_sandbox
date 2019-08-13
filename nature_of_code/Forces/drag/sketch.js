let b;


function setup() {
  createCanvas(640, 360);
  b = new Ball();
}

function draw() {
  background(51);

  let gravity = createVector(0,0.3);
  gravity.mult(b.mass)//scaling gravity to each objects mass, creating same acceleration
  b.applyForce(gravity);
  //let wind = createVector(0.2,0);
  //b.applyForce(wind);


if (mouseIsPressed){
    //applying drag
    let drag = b.velocity.copy();
    drag.normalize();
    let coef_d = -0.3;
    let speed = b.velocity.magSq(); //speed squared

    drag.mult(coef_d*speed);
    b.applyForce(drag);

  }

  b.update();
  b.checkEdges();
  b.display();
}
