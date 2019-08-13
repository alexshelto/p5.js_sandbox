class Ball{
  constructor(){
    this.position = createVector(width/2,height/2);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.topspeed = 5;
  }

  update() {
    // Compute a vector that points from position to mouse
    var mouse = createVector(mouseX,mouseY);
    this.acceleration = p5.Vector.sub(mouse,this.position);
    // Set magnitude of acceleration
    this.acceleration.setMag(0.5);

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.position.x, this.position.y, 48, 48);
  }

  outputVectors(){
        textFont('Helvetica');
        textSize(10);

        text("X-Position", 0, 30);
        text(this.position.x, 75, 30);

        text("X-Velocity", 0, 45);
        text(this.velocity.x,75, 45);

        text("X-Acceleration",0,60);
        text(this.acceleration.x,75,60);


        text("Y-Position", 300, 30);
        text(this.position.y, 375, 30);

        text("Y-Velocity", 300, 45);
        text(this.velocity.y,375, 45);

        text("Y-Acceleration",300,60);
        text(this.acceleration.y,375,60);


        fill(0, 102, 153);
  }
}
