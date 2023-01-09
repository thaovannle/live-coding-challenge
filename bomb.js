class Bomb {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 28;
    this.yspeed = 0;
  }
  
  thebomb(){
    push();
    stroke(255);
    strokeWeight(1);
    fill(30);
    circle(this.x, this.y , this.r *2);
    
    fill(255);
    textSize(15);
    textAlign(CENTER, CENTER);
    text("bomb", this.x, this.y);
    pop();
  }
  
  update(){
    
    this.y = this.y + this.yspeed;
    this.yspeed = this.yspeed +0.1;
  }
}
