/*
 * @Author: Alex Shelton
 * @Date:   2019-08-14T21:22:33-05:00
 * @Email:  as305218@ohio.edu
 * @Filename: pendulum.js
 * @Last modified by:   Alex Shelton
 * @Last modified time: 2019-08-15T01:56:25-05:00
 */


// Pendulum Class File
// Class is responsible for the location and force calculations on the pendulum


class Pendulum{
  constructor(xPos, yPos, radius, mass){
    this.position = createVector();
    this.origin = (xPos,yPos);
    this.radius = radius;
    this.mass = mass;

    this.radius = mass * 10;
    this.angularAccel = 0.00; //weights angular acceleration
    this.aVelocity = 0.00;

  }

  display(){
    fill(0);

    let x = this.origin.x + this.radius * sin(PI/4);
    let y = this.origin.y + this.radius * cos(PI/4);

    line(this.origin.x,this.origin.y,x,y);
  }


}
