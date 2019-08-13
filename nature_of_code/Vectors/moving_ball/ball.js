
class Ball{
  constructor(){
    this.position = new createVector(100, 100);
    this.velocity = new createVector(2.5,-2);
    
  }

  move(){
    //changing speed,
    // x = x + xspeed;
    // y = y + yspeed;
    this.position.add(this.velocity);
  }


  bounce(){ //if ball hits the wall
    if ((this.position.x > width) || (this.position.x < 0)){
      //ball is out of bounds on x axis change the motion
      this.velocity.x = this.velocity.x *-1; //changing velocity on object changes path
    }
    if ((this.position.y > height) || (this.position.y < 0)){
      //ball is out of bounds on y-axis, change moiton
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


        text("Y-Position", 300, 30);
        text(this.position.y, 375, 30);

        text("Y-Velocity", 300, 45);
        text(this.velocity.y,375, 45);
        fill(0, 102, 153);
  }

  update(){
    stroke(0);
    fill(0);
    ellipse(this.position.x, this.position.y, 48, 48);

  }
}
