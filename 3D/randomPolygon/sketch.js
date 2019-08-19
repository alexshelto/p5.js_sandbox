/**
 * @Author: Alex Shelton <zoso>
 * @Date:   2019-08-18T20:57:04-05:00
 * @Email:  as305218@ohio.edu
 * @Filename: sketch.js
 * @Last modified by:   zoso
 * @Last modified time: 2019-08-18T22:33:08-05:00
 */

 let angle = 0;
 let w = 24; //width of box
 let ma;
 let maxD;

 function setup() {
   createCanvas(200, 200, WEBGL);
   ma = atan(cos(QUARTER_PI));
   maxD = dist(0, 0, 200, 200);
   //createLoop({duration:2.1, gif:true}); //recording the sketch to a gif
 }

 function draw() {
   background(0);
   ortho(-400, 400, 400, -400, -1000, 1000);

   rotateY(PI);
   rotateX(PI/9);



   for (let z = 0; z < height; z += w) {
     for (let x = 0; x < width; x += w) {
       push();
       let d = dist(x, z, width / 2, height / 2);
       let offset = map(d, 0, maxD, -PI, PI);
       let a = angle + offset;
       let h = floor(map(sin(a), -1, 1, 100, 300));
       translate(x - width / 2, 0, z - height / 2);
       normalMaterial();
       //box(w, h, w*2);
       torus(h,w);
       //rect(x - width / 2 + w / 2, 0, w - 2, h);
       pop();
     }
   }

   angle -= 0.1;
 }
