/**
 * @Author: Alex Shelton <zoso>
 * @Date:   2019-08-18T18:38:18-05:00
 * @Email:  as305218@ohio.edu
 * @Filename: sketch.js
 * @Last modified by:   zoso
 * @Last modified time: 2019-08-18T20:51:43-05:00
 */

let angle = 180;
let rows = 6;


function setup(){
  createCanvas(300,300,WEBGL);
  createLoop({duration:6, gif:true}); //recording the sketch to a gif


}


function draw(){
  background(0);

  ortho(-300,300,-300,300,-300);
  pointLight(220,10,0,0,0,30); //(R,G,B,X,Y,Z)
  pointLight(0,220,150,-100,15,0); //(R,G,B,X,Y,Z)
  //pointLight(150,220,15,0,0,100); //(R,G,B,X,Y,Z)
  pointLight(0,220,15,0,-200,100); //(R,G,B,X,Y,Z)

  generateRows();



}


function generateRows(){
  translate(0,-50,0);
  for(let i = 0; i < 6; i++){
    row();
    translate(0,50,0);
  }
}

function row(){
  for (let x = -200; x < 200; x += 50){
    push();
    translate(x,0,0);
    rotateX(sin(angle * 0.02)*PI/4);
    //let yroto = tan(angle * 0.4);
    //constrain(yroto, -2,2);
    rotateY(sin(angle)*PI/2);
    rotateZ(cos((angle * 0.1)));
    //fill(113,220,12);
    noStroke();
    specularMaterial(0);
    box(50);
    pop();

  }
  angle += 0.004;

}
