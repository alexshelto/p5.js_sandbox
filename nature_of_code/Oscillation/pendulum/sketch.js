/*
 * @Author: Alex Shelton
 * @Date:   2019-08-14T21:17:31-05:00
 * @Email:  as305218@ohio.edu
 * @Filename: sketch.js
 * @Last modified by:   Alex Shelton
 * @Last modified time: 2019-08-16T00:43:30-05:00
 */

// Angular Acceleration = (g / R) * sine(theta)

// Given a pendulum with an angle theta (0 being the pendulum at rest) and a radius r
// we can use sine to calculate the angular component of the gravitational force.

// Gravity Force = Mass * Gravitational Constant;
// Pendulum Force = Gravity Force * sine(theta)

// Note this is an ideal world scenario with no tension in the
// pendulum arm, a more realistic formula might be:
// Angular Acceleration = (g / R) * sine(theta)

let mPrompt;
let rPrompt;

let p;

function setup(){
  createCanvas(700,650);


  mPrompt = createElement('h2', 'Mass');
  mPrompt.position(490, 0);
  mass_input = createInput();
  mass_input.position(550,15);

  rPrompt = createElement('h2', 'Arm Length');
  rPrompt.position(420, 20);

  ropeRadius_input = createInput();
  ropeRadius_input.position(550, 40);

  let mass = mass_input.value();
  let radius = ropeRadius_input.value();

  p = new Pendulum(width/2 ,0 ,mass_input.value(), ropeRadius_input.value());
}

function draw(){
  background(121);



  p.update();
  p.display();

}

// function promptUser(){
//   //creating user prompt
//   mPrompt = createElement('h2', 'Mass');
//   mPrompt.position(490, 0);
//   mass_input = createInput();
//   mass_input.position(550,15);
//
//   rPrompt = createElement('h2', 'Arm Length');
//   rPrompt.position(420, 20);
//
//   ropeRadius_input = createInput();
//   ropeRadius_input.position(550, 40);
// }

function createPendulum(m,r){
  p = new Pendulum(width/2 ,0 ,m, r);
}
