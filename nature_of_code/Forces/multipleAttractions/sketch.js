
let movers = [];

let G = 1;

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 10; i++) {
    movers[i] = new Mover(random(width), random(height), random(.4, 4));
  }
}

function draw() {
  background(51);

  for (let i = 0; i < movers.length; i++) {
    for (let j = 0; j < movers.length; j++) {
      if (i !== j) {
        let force = movers[j].attract(movers[i]);
        movers[i].applyForce(force);
      }
    }

    movers[i].update();
    movers[i].checkEdges();
    movers[i].display();
  }
}
