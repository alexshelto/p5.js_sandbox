
let xoff = 0.0;
let xincrement = 0.01;

function setup() {
  createCanvas(640,360);
  background(0);
  noStroke();
}

function draw() {
  fill(0, 10);
  rect(0,0,width,height);


  // Get a noise value based on xoff and scale it according to the window's width
  let n = noise(xoff);

  let x = map(n,0,1,0,width); //0&1 mapped to 0 and widht

  // With each cycle, increment xoff
  xoff += xincrement;

  // Draw the ellipse at the value produced by perlin noise
  fill(200);
  ellipse(x,height/2, 64, 64);

  print(n);
}
