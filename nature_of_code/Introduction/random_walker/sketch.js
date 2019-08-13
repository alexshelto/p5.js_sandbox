let walker;
let walker0;

function setup() {
  createCanvas(640,360);
  walker = new Walker();
  walker0 = new Walker();
  background(127);
}

function draw() {
  walker.step();
  walker.render();
  walker0.step();
  walker0.render();
}

class Walker {
  constructor(){
    this.x = width/2;
    this.y = height/2;
  }

  render() {
    stroke(0);
    point(this.x,this.y);
  }

  step() {
    var choice = floor(random(4));
    if (choice === 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else {
      this.y--;
    }
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  }
}
