//Global Variables
var monkeyimg,bananaimg,ground,stoneimg,jungleimg
var score=0



function preload(){
  monkeyimg=
  loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
bananaimg=loadImage("Banana.png")
stoneimg=loadImage("stone.png")
jungleimg=loadImage("jungle.jpg")
  
}


function setup() {
  createCanvas(600,300);
  scene=createSprite(300,150,600,300)
  scene.addAnimation("back",jungleimg)
  
  monkey=createSprite(50,250,10,10)
  monkey.addAnimation("running",monkeyimg)
  monkey.scale=0.1
  
  
  ground=createSprite(600,270,600,10)
  
  ground.velocityX=-2
  
  
  
  obstacleGroup=new Group()
  bananaGroup=new Group()
}


function draw(){
 background(255);
  ground.visible=false
  monkey.collide(ground)
  spawnbananas()
  spawnstones()
  if(ground.x>0){
    ground.x=ground.width/2
  }
  if(keyDown("space")){
  monkey.velocityY=-5
  }
  monkey.velocityY=monkey.velocityY+0.2
  if(monkey.isTouching(bananaGroup)){
     bananaGroup.destroyEach()
     score=score+1
}
  if(monkey.isTouching(obstacleGroup)){
    score=score-2
    obstacleGroup.destroyEach()
  }

    
  drawSprites()
  text("SURVIVAL TIME:"+score,450,80)
}
  
function spawnbananas(){
  if(frameCount%60===0){
    var banana=createSprite(600,150,10,10)
    banana.y=Math.round(random(135,190))
    banana.addImage(bananaimg)
    banana.velocityX=-3
    banana.scale=0.04
    bananaGroup.add(banana)
  }
}
function spawnstones(){
if(frameCount%80===0){
  var stone=createSprite(600,150,10,10)
  stone.y=Math.round(random(135,190))
  stone.addImage(stoneimg)
  stone.velocityX=-3
  stone.scale=0.1
  obstacleGroup.add(stone)
 
}
}