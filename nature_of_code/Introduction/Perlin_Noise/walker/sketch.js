
let noise_start = 0.0;
let walker;





function setup(){
  createCanvas(640,360);
  walker = new Walker();
  background(127);
}

function draw(){
  walker.step();
  walker.render();
}

class Walker{
  constructor(){
    this.x = width/2;
    this.y = height/2;
  }

  step(){
    let n = noise(noise_start);
    let x = map(n,0,1,0,4);

    if(int(x)==0){this.x ++;}
    else if (int(x) == 1){this.x --;}
    else if (int(x) == 2){this.y ++;}
    else{
      this.y--;
    }
    
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);

    //update the x value of the noise curve:
    noise_start += 0.02;
  }

  render(){
    stroke(0);
    point(this.x,this.y);
  }

}
