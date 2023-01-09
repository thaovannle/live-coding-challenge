class Cloud {
  constructor(x,y){
    this.x = x; 
    this.y = y;
    this.xspeed = 0;
  }
  
  drawcloud(){
    
      fill(250, 180);
      stroke(21, 87, 255, 20);
      
      push(); //cloud
      circle(this.x-30, this.y+90, 30); //1
      circle(this.x, this.y+80, 50); //2
      circle(this.x+40, this.y+60, 70);//3
      circle(this.x+40, this.y+110, 60);//4 
      circle(this.x+80, this.y+80, 57); //5
      circle(this.x+110, this.y+80, 40); //6
      circle(this.x+130, this.y+80, 20); //7
      pop();
      
  }
  update(){
    this.x = this.x + this.xspeed;
    this.xspeed= this.xspeed+ 0.002;
    
    if(this.x>width+200){
      this.x =0;
    }
  }
}
