var dustbin,dustbingreenIMG,paper,paperIMG
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 dustbingreenIMG=loadImage("image/dustbingreen.png")
 
}

function setup() {
	createCanvas(1200, 700);
     

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,680,1200,20)


	log1 = new Log(width/2, height-45, 250, 20);
	log2 = new Log(width/2.5,height-110,20,150);
	log3 = new Log(width/1.65, height-110, 20, 150);
	
	paper= new Paper(width/9,height-100,50)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
 
  ground.display();
  log1.display();
  log2.display();
  log3.display();
  image(dustbingreenIMG,width/2,height-120,300,200)
  paper.display();
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	  
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-190})
	 }
   }


