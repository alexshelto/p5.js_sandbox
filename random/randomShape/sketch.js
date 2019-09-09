/**
 * @Author: Alex Shelton <zoso>
 * @Date:   2019-08-18T22:36:24-05:00
 * @Email:  as305218@ohio.edu
 * @Filename: sketch.js
 * @Last modified by:   zoso
 * @Last modified time: 2019-08-19T01:26:48-05:00
 */


let xpos = 0.00;
let noiseStep = 0.9;




let points = [];
let numSides = 3;
let pointDimension = 3;
let numShapes = 12;
let angle = 127;
let max_len = 400;
let origin = 0;
 function setup(){
   createCanvas(600,600,WEBGL);


//Creating and Initializing 2d array for points
   for(let i = 0; i < numSides; i++){
     points[i]=[];
     for(let j = 0; j < pointDimension; j++){
       points[i][j] = 0;
     }
   }
   for(let i = 0; i < numSides; i++){
     for(let j = 0; j < pointDimension;j++){
       let point = noise(xpos);
       xpos += noiseStep;
       points[i][j] = point*150;
       console.log(points[i][j]);
     }

   }

 }

 function draw(){
   translate(width/2,height/2,150);
   frameRate(60);
   background(122);

   fill(122,200,0);
   strokeWeight(1);
   let a = 127;

   for(let i = 0; i < numShapes; i++){
     //for 3 sided:
     //triangle(0, 0, points[1][0], points[1][1], points[2][0], points[2][1]);
     box(point[i][0]);
     // for 4 sided:
     //rect(0, 0, points[1][0], points[1][1], points[2][0], points[2][1], points[3][0],points[3][1]);
     rotateY(a);
     a += angle;
   }
   rotateX(a);


 }
