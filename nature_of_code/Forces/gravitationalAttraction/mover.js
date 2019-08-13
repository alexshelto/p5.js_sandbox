

class Mover{
  constructor(mass){
    this.mass = mass;
    this.location = createVector(random(0,width),random(0,height));
    this.velocity = createVector(3,0);
    this.acceleration = createVector(0,0);

  }
  update(){
    this.velocity.add(this.acceleration);

    this.location.add(this.velocity);

    this.acceleration.mult(0);
  }

  applyForce(f){
    //a = f/m
    let force = p5.Vector.div(f,this.mass);
    this.acceleration.add(force);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(0,35,250);
    ellipse(this.location.x, this.location.y, this.mass*10, this.mass*10);
  }

  onMouse() {
    // Compute a vector that points from position to mouse
    var mouse = createVector(mouseX,mouseY);
    this.acceleration = p5.Vector.sub(mouse,this.position);
    // Set magnitude of acceleration
    this.acceleration.setMag(0.5);

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.location.add(this.velocity);
  }



}
