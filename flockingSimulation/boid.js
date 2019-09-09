/**
 * @Author: Alex Shelton <zoso>
 * @Date:   2019-08-20T21:54:43-05:00
 * @Email:  as305218@ohio.edu
 * @Filename: body.js
 * @Last modified by:   zoso
 * @Last modified time: 2019-09-03T18:19:39-04:00
 */

//Boid class: Each moving object in the flock is a boid

//
// Boids Flocking Model
// .-------------------------------------------------------------------------------------
// The three steering behaviors
// --------------------------------------------------------------------------------------
// 1.) Separation: steer to aviod crowding
// .-------------------------------------------------------------------------------------
// 2.) Alignment: steer towards the average heading of local flockmates <vel vector>
// .-------------------------------------------------------------------------------------
// 3.) Cohesion: steer to move toward the average position of local flockmates
// --------------------------------------------------------------------------------------



class Boid{
  constructor(){
    this.position = createVector(random(width), random(height)); //position is assigned to a random x and y value
    this.velocity = p5.Vector.random2D(); //velocity is assigned a random vector to begin
    this.velocity.setMag(random(2,4));//gives the boids more randomness to each individuals speed
    this.maxForce = 1;
    this.maxSpeed = 2;
    this.acceleration = createVector();
    this.perceptionRadius = 150; //turn into a vector?
  }

//cohesion: steer to move towards average position of local boidmate
cohesion(boids) {
  let perceptionRadius = 100;
  let steering = createVector();
  let total = 0;
  for (let other of boids) {
    let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
    if (other != this && d < perceptionRadius) {
      steering.add(other.position);
      total++;
    }
  }
  if (total > 0) {
    steering.div(total);
    steering.sub(this.position);
    steering.setMag(this.maxSpeed);
    steering.sub(this.velocity);
    steering.limit(this.maxForce);
  }
  return steering;
}

// cohesion(boids){
//   let steering = createVector(); //returrn value
//   let total = 0;
//
//   for(let other of boids){
//     let distance = dist(this.position.x, this.position.y, other.position.x, other.position.y);
//
//     if(this != other && distance < this.perceptionRadius){
//       steering.add(other.position);
//       total++;
//     }
//   }
//   if(total > 0){
//     steering.div(total);
//     steering.sub(this.position); //steering is desired - current
//     steering.setMag(this.maxSpeed);
//     steering.sub(this.velocity);
//     steering.limit(this.maxForce); //nerfing
//   }
//   return steering;
// }


  //allignment:
  //Function recieves an array of boids
  //steers towards the AVERAGE heading of local flockmates
  //average = sum / total -> if they are within perception view
  //Steering force =(desired Vel - Current vel)
  align(boids) {
    let perceptionRadius = 50;
    let steering = createVector();
    let total = 0;
    for (let other of boids) {
      let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
      if (other != this && d < perceptionRadius) {
        steering.add(other.velocity);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  // allignment(boids){
  //
  //   let total = 0; //value for the total number of velocities added
  //   let average = createVector() ;
  //
  //   for(let other of boids){ //looping through every boid in flock
  //     let distance = dist(this.position.x,this.position.y,other.position.x,other.position.y);
  //     //Self check and distance test
  //     if(other != this && distance < this.perceptionRadius){
  //       average.add(other.velocity);
  //       total++; //iterating for average
  //     }
  //   }
  //   //divide by 0 check
  //   if(total > 0){
  //     average.div(total); // the steering value: desired vel.
  //     average.setMag(this.maxSpeed);
  //     average.sub(this.velocity);
  //     average.limit(this.maxForce);
  //   }
  //   return average; // the new steering value is being returned to be applied in | function: Gather
  // }

  flock(boids){

    let steering = this.align(boids);
    let cohesion = this.cohesion(boids);
    // F = MA , M = 1
    this.acceleration.add(this.steering);
    this.acceleration.add(this.cohesion);
  }

  edges(){
    if(this.position.x > width){this.position.x = 0;}
    else if(this.position.x < 0){this.position.x = width;}
    if(this.position.y > height){this.position.y = 0;}
    else if(this.position.y < 0){this.position.y = height;}
  }



  update(){
    //velocity adds to position vector to update location
    //accelration adds to velocity vector to update velocity
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.acceleration.set(0,0); //wipe acceleration for next calculation
  }

  display(){
    strokeWeight(8);
    stroke(255);
    point(this.position.x, this.position.y);
  }
}
