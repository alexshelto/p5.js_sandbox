

class Attractor{
  constructor(mass){
    this.mass = mass;
    this.location = createVector(width/2,height/2);
    this.g = 0.3;

    this.dragOffset = createVector(0.0,0.0);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(0);
    ellipse(this.location.x, this.location.y, this.mass*10, this.mass*10);
  }

  attract(mover){
    if(mover === this){return;}
    let force = p5.Vector.sub(this.location,mover.location);
    let distanceSq = force.magSq();
    distanceSq = constrain(distanceSq,5,25);

    //force.normalize();

    let strength = (this.g * this.mass * mover.mass) / distanceSq;
    force.setMag(strength);

    return(force);
  }



}
