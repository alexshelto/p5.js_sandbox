

class Ball{
  constructor(){
    this.position = createVector(width/2,height/2);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.topspeed = 5;
  }

  applyForce(f){
    this.acceleration.add(f);

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
    ellipse(this.position.x, this.position.y, 48, 48);
  }

  bounce(){ //if ball hits the wall
    if ((this.position.x > width)){
      //ball is out of bounds on x axis change the motion
      this.velocity.x = this.velocity.x *-1; //changing velocity on object changes path
    }
    else if (this.position.x < 0){
      this.velocity.x = this.velocity.x * -1
    }
    if ((this.position.y > height)){
      //ball is out of bounds on y-axis, change moiton
      this.velocity.y = this.velocity.y * -1;
    }
    else if (this.position.y < 0){
      this.velocity.y = this.velocity.y * -1;
    }
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
