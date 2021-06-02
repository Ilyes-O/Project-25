
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj,groundObject	
var world;
var paper;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650)
	paper = new Paper(200,450,70);

	
  
}


function draw() {
  background(230);
  Engine.update(engine);
  groundObject.display();
  dustbinObj.display();
  paper.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:140,y: -145});
	}
}

