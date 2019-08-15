class Mover {
  constructor(x, y, mass) {

    this.theta = 0.0;
    this.angle = 0;
    this.aAcceleration = 0.01;
    this.aVelocity = 0;
    this.mass = mass;
    this.radius = mass * 8;
    this.position = createVector(x, y);
    this.velocity = createVector(1, 0);
    this.acceleration = createVector(0, 0);
  }
  // Newton's 2nd law: F = M * A
  // or A = F / M
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
//Angluar motion snippit---------------------
    //this.aAcceleration = this.acceleration.x/10.0; //changes acceleration due to xvalue

    this.aVelocity += this.aAcceleration;
    this.aVelocity = constrain(this.aVelocity, -0.1, 0.1);
    this.angle += this.aVelocity;
//------------------------------------------
    // Velocity changes according to acceleration
    this.velocity.add(this.acceleration);
    // position changes by velocity
    this.position.add(this.velocity);
    // We must clear acceleration each frame
    this.acceleration.mult(0);
  }

  display() {
    this.theta += 0.02;
    stroke(0);
    fill(175, 200);

    rectMode(CENTER);
    push();//start new drawing state
    translate(this.position.x, this.position.y);
    rotate(this.angle);
    rect(0, 0, this.radius * 3, this.radius * 3);
    line(0, 0, (this.aAcceleration*sin(this.theta)*2003), 0);
    pop();//end new drawing state
  }
}
