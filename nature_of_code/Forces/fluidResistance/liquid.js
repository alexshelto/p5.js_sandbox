

class Liquid{
  constructor(c){
    this.x = 0;
    this.y = height/2;
    this.w = width;
    this.h = height/2;
    this.coefficient = c;
  }

  //if body is in liquid:
  contains(body){
    let l = body.position;
    return l.x > this.x && l.x < this.x + this.w &&
      l.y > this.y && l.y < this.y + this.h;
  }

  calcDrag(body){
    // Magnitude is coefficient * speed squared
    let speed = body.velocity.magSq();
    let dragMagnitude = this.c * speed;

    //direction is inverse of velocity
    let dragForce = body.velocity.copy();
    dragForce.mult(-1);

    //scale:
    dragForce.normalize();
    dragForce.mult(dragMagnitude);

    return dragForce;

  }

  display(){
    noStroke();
    fill(0,0,255);
    rect(this.x,this.y,this.w,this.h);
  }


}
