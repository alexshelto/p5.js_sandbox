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
    //applying friction:
    let friction = b.velocity.copy();
    friction.normalize();
   //make coefficient negative so you dont need to mult by -1
    let coeff_f = -0.01;
    friction.mult(coeff_f);

    b.applyForce(friction);
  }

  b.update();
  b.checkEdges();
  b.display();
}
