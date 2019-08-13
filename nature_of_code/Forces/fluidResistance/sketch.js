
let balls = [];
let liquid;


function setup(){
  createCanvas(600,600);

  liquid = new Liquid(0.1); //number is drag coeff

  //creating objects to simulate:
  for(let i = 0; i < 8; i++){
    balls[i] = new Body();
  }

}

function draw(){
  background(255);

  liquid.display();

  for (let i = 0; i < balls.length; i++){

    //checking if balls in water
    if(liquid.contains(balls[i])){
      //calculate drag force
      dragForce = liquid.calcDrag(balls[i]);
      balls[i].applyForce(dragForce);
    }

    //gravity scaled by mass:
    let gravity = createVector(0,0.1*balls[i].mass); //force applied is .1*m in y direction
    balls[i].applyForce(gravity);

    //update and display:
    balls[i].update();
    balls[i].display();
    balls[i].checkEdges();

  }

  if (mouseIsPressed){
    reset();
  }


}

function reset(){
  for( let i = 0; i < 10; i++){
    balls[i] = new Body();
  }
}
