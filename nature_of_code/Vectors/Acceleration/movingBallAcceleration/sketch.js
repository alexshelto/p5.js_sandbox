let b; //declaring an instance of b before it is called

function setup(){
  createCanvas(400,300);
  b = new Ball();
}

function draw(){
  background(12,255,1);
  b.move();
  b.bounce();
  b.update();
  b.outputVectors();

}
