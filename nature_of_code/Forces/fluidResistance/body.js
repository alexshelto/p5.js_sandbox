

class Body{
  constructor(){
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.position = createVector(random(0,width), 30);
    this.mass = random(.8,4);
    this.radius = (this.mass * 8);
  }

  applyForce(f){
    let force = p5.Vector.div(f,this.mass)
    this.acceleration.add(force);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.position.x, this.position.y, this.radius, this.radius);
  }

  update(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    //wiping acceleration for next frame
    this.acceleration.mult(0);
  }

  checkEdges(){
    if (this.position.y > height - this.radius){
      this.velocity.y *= -0.01;
      this.position.y = height-this.radius;
    }
  }

}
