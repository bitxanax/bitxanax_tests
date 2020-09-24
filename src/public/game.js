

let clouds,bird,face,gameOver,div,btn,title = null,hasLost = false,balancer;
var r,g,b;
var music;
var score;
var score_text;
var count=0;
function preload(){
  music = loadSound('audio/believer.mp3');
  gameOver_sound = loadSound('audio/game_over.mp3');
}
function setup() {
  cursor(CROSS);
  createCanvas(displayWidth, displayHeight);
  r = random(195,255);
  g = random(0,230);
  b = random(140,255);
    
  getAudioContext().suspend();
  title = createP('Game Over.');
  clouds = new Group();
  face = loadImage('img/eyes.png'); 
  bird = createSprite(width-6,height/2,10,10);

  //Game over title 
  title.position(width/6,height/5);
  
  title.style('font-size', '200px'); 
  //title.style('font-family', 'bold'); 
  title.style('color', 'white'); 
  title.hide();
  
  //Play Again Button
  btn = createButton('Play again.');
  btn.style('background-image', 'linear-gradient(to right bottom, #FF8066, #FF6F91, #FF9671, #FFC75F, #F9F871)');
  btn.style('border', '4px solid #F9F871'); 
  btn.style('border-radius', '12px'); 
  btn.style('font-size', '45px'); 
  btn.style('width', '400px');
  btn.style('height', '70px');
  btn.mousePressed(newGame);
  btn.center();
  btn.hide();
  
  //score text
    
  score_text = createP('Your Score:');
  score_text.style('width', '300px');
  score_text.style('height', '70px');
  score_text.style('font-size', '30px');
  score_text.style('color', 'white');
  score_text.style('display', 'inline-block');
  score_text.position(10,5);

  //music
  
  music.play();
  


  //Sprites
  for (var i = 0; i < 10; i++) {
    var c = createSprite(
      random(4,7), random(height)+6,
      random(80, 160), random(80, 150));
    c.shapeColor = color(random(0, 250),random(0, 250),random(0, 250));
    clouds.add(c);
  }

  bird.draw = function() {
    fill(237, 205, 0);
    push();
    rotate(radians(this.getDirection()));
    ellipse(0, 0, 100+this.getSpeed(), 100-this.getSpeed());
    pop();
    image(face, this.deltaX*2, this.deltaY*2,90,90);
  };

  bird.maxSpeed = 30;

}
    

function draw() {
 
  if (hasLost == false){
   
    background(r, g, b);
    let t = millis(4);
    
    if(t>=1500){
      //score
      
     
  

      for (var i = 0; i < clouds.length; i++) {
        count+=1/200;
        
        cloudGenerator(i);
        showScore(parseInt(count));
        if (clouds[i].position.x > width) {
          clouds[i].position.x = 0;
        }
         
        if(bird.overlap(clouds)){
          die();
        }
       
    
        if(hasLost == true ){
          fill(128 + sin(frameCount*0.1) * 128);
           
          title.show(); 
          btn.show();
        }
      }
  
    }
      
    bird.velocity.x = (mouseX-bird.position.x)/2;
    bird.velocity.y = (mouseY-bird.position.y)/2;
  
    drawSprites();

    
  }
  
 
 
}

function die() {
  updateSprites(false);
  //gameOver = true;
  hasLost = true;
  music.stop();
  score_text.position(width/2-width/15, height-300);
  gameOver_sound.play();
}

function newGame() {
  //gameOver = false;
  getAudioContext().suspend();
  r = random(195,255);
  g = random(0,230);
  b = random(140,255);
  
    btn.hide();
    title.hide();
    bird.position.x=width/2+40;
    bird.position.y=height/2;
    updateSprites(true);
    hasLost = false;
     
    
      for(var i = 0; i<clouds.length;i++){
        clouds[i].position.x = 0;
        clouds[i].position.y = height/2;
        cloudGenerator(i);
      }

    //music flip
    gameOver_sound.stop();
    music.play();
    score_text.position(10,5);
  
  }



function cloudGenerator(cloud_counter){
  clouds[cloud_counter].position.x += clouds[cloud_counter].width * 0.08;
  clouds[cloud_counter].position.y += cloud_counter * random(1,4);
  clouds[cloud_counter].position.y -= cloud_counter * random(2,3);
  clouds[cloud_counter].position.y += cloud_counter * random(2,3);
  clouds[cloud_counter].position.y -= cloud_counter * random(1,4);
}


function mousePressed() {
   userStartAudio();
}

function showScore(score){
  score_text.html("Your Score: "+ score);
}