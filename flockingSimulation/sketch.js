 /**
  * @Author: Alex Shelton <zoso>
  * @Date:   2019-08-20T21:54:43-05:00
  * @Email:  as305218@ohio.edu
  * @Filename: body.js
 * @Last modified by:   zoso
 * @Last modified time: 2019-08-21T00:27:57-05:00
  */

 //
 // Boids Flocking Model
 // .-------------------------------------------------------------------------------------
 // The three steering behaviors
 // --------------------------------------------------------------------------------------
 // 1.) Separation: steer to aviod crowding
 // .-------------------------------------------------------------------------------------
 // 2.) Alignment: steer towards the average heading of local flockmates <vel vector>
 // .-------------------------------------------------------------------------------------
 // 3.) Choesion: steer to move toward the average position of local flockmates
 // --------------------------------------------------------------------------------------

 let flock = [];//holds all of the individual boids



 function setup(){

   createCanvas(600,600);
   for(let i = 0; i < 100; i++){
     flock.push(new Boid());
     console.log(i);
   }

 }

 function draw(){
   background(51);



   for(let boid of flock){
     boid.edges();
     boid.flock(flock);
     boid.update();
     boid.display();
   }



 }
