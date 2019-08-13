let b = [];


function setup() {
  createCanvas(640, 360);
  for(var i = 0; i < 5; i++){
    b[i] = new Ball();
  }
}

function draw() {
  background(51);

  for(let x = 0; x < b.length; x++){
    let gravity = createVector(0,0.3);

    gravity.mult(b[x].mass)//scaling gravity to each objects mass, creating same acceleration
    

    b[x].applyForce(gravity);

    if(mouseIsPressed){
      let wind = createVector(0.2,0);
      for(let i = 0; i < b.length; i++){
        b[i].applyForce(wind);
      }
    }

    b[x].update();
    b[x].checkEdges();
    b[x].display();
  }
}
