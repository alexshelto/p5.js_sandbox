/**
 * @Author: Alex Shelton <zoso>
 * @Date:   2019-09-03T18:22:11-04:00
 * @Email:  as305218@ohio.edu
 * @Filename: sketch.js
 * @Last modified by:   zoso
 * @Last modified time: 2019-09-03T18:48:44-04:00
 */

let population = [];


 //individuals of dna will be grouped into arrays
 //
 //
 //
 //
 //
 //


function setup(){
  createCanvas(600,600);

  for(let i = 0; i < 50; i++){
    population[i] = new Individual(0,0);
  }

}

function draw(){
  background(121);
  translate(width/2,height/2);


  fill(255);
  for(let i = 0; i < population.size;i++){
    population[i].render();
  }
}
