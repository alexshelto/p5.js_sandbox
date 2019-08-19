/**
 * @Author: Alex Shelton <zoso>
 * @Date:   2019-08-18T17:24:48-05:00
 * @Email:  as305218@ohio.edu
 * @Filename: sketch.js
 * @Last modified by:   zoso
 * @Last modified time: 2019-08-18T18:22:53-05:00
 */

//Camera Functions:
// -> camera()
// -> perspective()
// -> ortho()

//camera properties:
//Location (x,y,z)
//Pointing (x,y,z)
// Vector pointing up (x,y,z)






let angle = 0;

function setup(){
  createCanvas(600,600,WEBGL);

}

function draw(){
  background(175);


  ortho(-200,200,-200,200-300,300); //camera function objects appear same size : (xmin,xmax,ymix,ymax,zs)

  // rotateX(angle);
  // rotateY(angle-0.02);
  // rotateZ(angle * 1.2);

  //fill(200,0,255); //fill is basic material fill and material overide

  //normalMaterial(); //assigns every vertex a color , x = red, y = green, z = blue

  //ambientLight(255); //shines in every direction // lights evenly
  //ambientMaterial(255,0,0); //ambient material reflects light. have to add light. can only reflect the same color


  // pointLight(0,220,150,-100,15,30); //(R,G,B,X,Y,Z)


  //specular material
  specularMaterial(0); //shiny

  directionalLight(255,150,0,0,0,3); //(R,G,B, x,y,z) imagine line drawn thats where lights from
  pointLight(255,0,0,100,0,0);
  for (let x = -200; x < 200; x += 50){
    push();
    translate(x,0,x-40);
    rotateX(sin(angle));
    rotateY(angle * 0.3);
    rotateZ(angle * 1.1);

    noStroke();
    specularMaterial(0);
    box(50);
    pop();

  }



  angle += 0.01;

}
