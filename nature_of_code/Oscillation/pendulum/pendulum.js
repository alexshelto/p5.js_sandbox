/*
 * @Author: Alex Shelton
 * @Date:   2019-08-14T21:22:33-05:00
 * @Email:  as305218@ohio.edu
 * @Filename: pendulum.js
 * @Last modified by:   Alex Shelton
 * @Last modified time: 2019-08-16T00:11:17-05:00
 */


// Pendulum Class File
// Class is responsible for the location and force calculations on the pendulum

// Calculate acceleration (see: http://www.myphysicslab.com/pendulum1.html)



class Pendulum{
  constructor(xPos, yPos, mass, radius){
    this.position = createVector();
    this.origin = createVector(xPos,yPos);
    this.mass = mass;
    this.radius = 80;

    this.ropeRadius = radius;
    this.angularAccel = 0.00; //weights angular acceleration
    this.aVelocity = 0.00;
    this.angle = PI/4;;

  }

  update(){

    let gravity = 0.4; //constant for gravity

    this.angularAccel = ((-gravity / this.ropeRadius)*sin(this.angle));
    this.aVelocity += this.angularAccel;

    //might have to limit aVelocity

    this.angle += this.aVelocity;

  }

  display(){
    fill(0);
    stroke(4);
    stroke(255);

    this.position.set(this.ropeRadius * sin(this.angle), this.ropeRadius * cos(this.angle), 0); // Polar to cartesian conversion
    this.position.add(this.origin); //position is relative to the pendulum's origin


    line(this.origin.x,this.origin.y,this.position.x,this.position.y);
    ellipse(this.position.x,this.position.y, this.radius);


    fill(255);
    textFont("helvetica");
    textSize(24);
    text(this.mass, this.position.x, this.position.y);
  }


}
