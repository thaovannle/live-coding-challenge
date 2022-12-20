class Pie {
  
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 28;
    this.yspeed = 0;
    this.digit = floor(random(10));
    this.angle = random(TWO_PI); //rotate the pie so itd look nice
    //not in show() bc it rotates the canvas, not just pie shape
  }
  
  show(){ //function that draws
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    stroke(255);
    strokeWeight(1);
    fill(177, 176, 180, 200);
    circle(0, 0, this.r *2); //circle at 0,0-rotation, translation, mid of pie
    
   
    let a = TWO_PI/9 //angle
    let d = this.r*2; //diameter

    
    for( let i = 0; i<this.digit;i++){ //draw shape on the pie
      //make slices of pie according to number of its digit
      fill(random(256),random(256),random(256));
      stroke(255);
      strokeWeight(4);
      arc(0, 0, d, d, i*a, (i+1)*a, PIE); //start from i times a, to 
    }
    pop();

  
    //textSize(32);
    //textAlign(CENTER, CENTER);
    //text(this.digit, this.x, this.y);
  
  }
  
  update(){ // to make pie fall from sky (top-down)
    
    this.y = this.y + this.yspeed;
    this.yspeed = this.yspeed +0.04;
  }
}
