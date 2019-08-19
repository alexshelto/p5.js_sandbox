/**
 * @Author: Alex Shelton <zoso>
 * @Date:   2019-08-18T17:24:48-05:00
 * @Email:  as305218@ohio.edu
 * @Filename: sketch.js
 * @Last modified by:   zoso
 * @Last modified time: 2019-08-18T18:00:47-05:00
 */
//
// Colors / Materials
// ----------------------------------------------------------
// fill -> basic material
// ambient material -> reflects light only specific color
// specular material -> reflects all light
// =========================================================
// =========================================================
// Ligting
// ----------------------------------------------------------
// Ambient Light -> general wash of light from every direction
// Point light -> user a position and a color
// directional light -> light coming from a vector infinatly far away







let angle = 0;

function setup(){
  createCanvas(600,600,WEBGL);

}

function draw(){
  background(175);


  rotateX(angle);
  rotateY(angle-0.02);
  rotateZ(angle * 1.2);

  //fill(200,0,255); //fill is basic material fill and material overide

  //normalMaterial(); //assigns every vertex a color , x = red, y = green, z = blue

  //ambientLight(255); //shines in every direction // lights evenly
  //ambientMaterial(255,0,0); //ambient material reflects light. have to add light. can only reflect the same color


  // pointLight(0,220,150,-100,15,30); //(R,G,B,X,Y,Z)
  // pointLight(255,0,0,100,0,0);

  //specular material
  specularMaterial(0); //shiny

  directionalLight(255,150,0,0,0,3); //(R,G,B, x,y,z) imagine line drawn thats where lights from

  //sphere(100);
  torus(40,10);

  angle += 0.01;

}
