class Plate {
  constructor (x,w){ //plate at the bottom of canvas
    this.x = x;
    this.w = w;
    this.h = 10;
    this.y = height - this.h; 
  }
  
  catches(pie){
    if( pie.y + pie.r >= this.y && pie.x > this.x - this.w/2 && pie.x < this.x +this.w/2){ //check if pie's location at bottom of canvas AND where plate's location is AND in middle of the plate 
      //pie.y plus pie.r: make pie disappear when it touches plate
      return true; 
    } else {
      return false;
    }
  }
  
  show(){ //show 
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }
}
