

class Ball{
  constructor(){
    this.mass = random(1,4.3);
    this.position = createVector(random(width), random(0,20));
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.topspeed = 7;
  }

  applyForce(f){//Newtons 2nd law
    //a = f/m . create a vector of the quotient
    let force = p5.Vector.div(f,this.mass); //creating a new vector A = f/m
    this.acceleration.add(force); //accumulate the new vector

  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    //clear acceleration to calculate a new one next frame
    this.acceleration.mult(0);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.position.x, this.position.y, this.mass*20, this.mass*20);
  }

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }
    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;
    }
  }


}
