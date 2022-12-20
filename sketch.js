let pies=[];
let plate; 

let pi;
let piShow = ' ';

let digitsDiv;
let digits= "3.";
let piCounter = 0;

let gameover = false;

function preload(){
  pi = loadStrings('one-million.txt');
}


function setup() { 
  
  pi = pi.join(''); //join the arrays of pi numbers together
  
  createCanvas(800, 400);
  
  plate = new Plate(width/2, 50);
  
  digitsDiv = createDiv(digits); //showing digits at bottom of screen
  
  digitsDiv.style('font-size', '64pt');
  
  piShow = pi.substring(0,2); //showing 2 digits on the screen so user knows what to get next
  
 
  
  
} 

function draw() {
  //background of game
  background(19, 74, 122);
  
  fill(255, 255, 153);
  noStroke();
  circle(55,60, 80);
  
  if(gameover){ 
    
    fill(255);
    textAlign(CENTER, CENTER);
    text("game over. L", width/2, height/2);
    return;
  }
  
  
  fill(255);
  textSize(48);
  text(piShow, width-64, 50);
  fill(0,255,0);
  text(piShow.charAt(0), width-64, 50);
  
  
  if(random(1) < 0.05){ //add pie randomly, 1/10 time through draw, add new pie to game
    //where i can up level this: inc rand range, speed
    pies.push(new Pie(random(width),random( -100, -20))); //pie falling at random location, y value: starting above canvas, like raining
  }

  
  for(let pie of pies){ // for every pie in array
    pie.show(); //call show function from pie to draw pie
    pie.update();//pie falling func
  
  }
  
  for( let i = pies.length-1; i>=0; i--){ //taking elements out so making array backward
    
    if(plate.catches(pies[i]))  { //call catches(pies) in plate func, everytime catches pie, pie disappear, no matter wrong/right
      
      
      //catch pie, check value, score
      let digit = pies[i].digit;

      let correctDigit = pi.charAt(piCounter); //check the correct digit equals the pie digits
      
     
      if(correctDigit == digit) {
        
        digits += digit; //everytime catches a pie, add to digit
        piCounter++; //move on to next digit
        piShow = pi.substring(piCounter,piCounter+2);
        console.log('the number catches');
        console.log(digit);
        
        
      } else {
        console.log(digit);
        gameover= true;
      }
      
      digitsDiv.html(digits); //log number to screen
      pies.splice(i,1); 
      
    } else if(pies[i].y > height + pies[i].r ){ //wants pie to disappear either caught/off from screen
      //plus r of pie: disappear when whole thing is off the screen, for smoother animation?
      //splice, need index to remove element
       pies.splice(i,1);
     
    }
    
  }
  
  
  plate.x = mouseX; //moving the plate with mouse 
  plate.show(); 
  
  
  //the plate 
  //rectMode(CENTER);
 // rect (mouseX, height-10, 100, 10); //change to arc for basket shape
  
}