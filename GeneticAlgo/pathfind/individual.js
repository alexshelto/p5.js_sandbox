/**
 * @Author: Alex Shelton <zoso>
 * @Date:   2019-09-03T18:28:36-04:00
 * @Email:  as305218@ohio.edu
 * @Filename: individual.js
 * @Last modified by:   zoso
 * @Last modified time: 2019-09-03T18:49:40-04:00
 */


class Individual{
  constructor(x,y){
    //this.chromosomes =

    this.position = createVector(x,y);
    this.velocity = createVector();
    this.acceleration = createVector();

  }

  //checkbody makes sure the individual is not on an obstacal
  // checkBody(){
  //
  // }

  update(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.acceleration.mult(0); //setting acceleration back to 0
  }

  render(){
    stroke(0);
    fill(255);
    ellipse(this.position.x, this.position.y, 20);
  }

}
