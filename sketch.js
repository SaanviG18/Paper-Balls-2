const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, ground, groundOp;
var ball, rect1, rect2, rect3;
function preload(){
dustbin =loadImage("dustbingreen.png")
}

function setup() {
  createCanvas(800, 400);
 
	engine = Engine.create();
	world = engine.world;
  ground1 = new Ground(400,395,800,15)
  ball = new Paper(200,100,50)
  rect1 = new trashie(600,350,10,100)
  rect2 = new trashie(670,385,150,10)
  rect3 = new trashie(750,350,10,100);

//	Engine.run(engine);
  
}


function draw() {
  background("white");
  
  Engine.update(engine)
  
  rectMode(CENTER);
 
    ball.display();
    rect1.display();
    rect2.display();
    rect3.display();
    ground1.display();
    image(dustbin,580,250,200,150)

}

function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(ball.body,ball.body.position,{x:35,y:-100});
  }
}


function displayGr(){
			
  var groundPos = ground.position;		

  push()
  translate(groundPos.x, groundPos.y);
  //rectMode(CENTER)
  strokeWeight(4);
  fill("green")
  rect(0,0,800,20);
  pop()
  
}
