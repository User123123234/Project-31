const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint = Matter.Constraint;
var engine;
var world;
var ground, ball;
var b1, b2,b3,b4,b4,b5,b6,b7,b8,b9;
var platform, bl1,bl2,bl3,bl4;
var sling, ball;
var score = 0;
gameState = "onSling"

function setup() {
  engine=Engine.create()
  world=engine.world
 createCanvas(800,400);
  ground= new Ground(400,390,800,10 )
b1 = new Block(500,350,50,50)
b2 = new Block(550,350,50,50)
b3 = new Block(600,350,50,50)
b4 = new Block(550,300,50,50)
b5 = new Block(450,350,50,50)
b6 = new Block(650,350,50,50)
b7 = new Block(500,300,50,50)
b8 = new Block(600,300,50,50)
b9 = new Block(550,250,50,50)

platform = new Ground(700,200,245,10)

bg1 = new Block(700,175,50,50)
bg2 = new Block(650,175,50,50)
bg3 = new Block(750,175,50,50)
bg4 = new Block(700,125,50,50)

ball= new Ball(400,300,20)
sling = new Sling(ball.body,{x:200, y:100})

}

function draw() {
  background(250,250,250);  
Engine.update(engine)

textSize(35)
fill("black ")
text("Score:  " + score, 300, 50)

platform.display()
ground.display()

b1.display()
b2.display()
b3.display()
b4.display()
b5.display()
b6.display()
b7.display()
b8.display()
b9.display()

bg1.display()
bg2.display()
bg3.display()
bg4.display()

ball.display()
sling.display()

  drawSprites();
}

function mouseDragged(){
  if (gameState!=="launched"){
      gameState="onSling";
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  sling.fly();
  gameState = "launched";
}

function keyPressed(){
if(keyCode === 32){
 sling.attach(ball.body);
 gameState="onsling"
Matter.Body.setAngle(ball.body,0)
Matter.Body.setPosition(ball.body,{x:200, y:100})

}
}