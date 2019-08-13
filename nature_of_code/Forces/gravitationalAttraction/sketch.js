
let a;
let m;

function setup(){
  createCanvas(600,600);

  //creating attractor:
  a = new Attractor(6);
  m = new Mover(4.5);

}

function draw(){
  background(100);

  let force = a.attract(m);
  m.applyForce(force);
  m.update();

  a.display();
  m.display();

  console.log(m.velocity);
  console.log(m.acceleration)


}

function mousePressed(){
  m.onMouse();
}
