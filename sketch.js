
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,570,width,20);
	paper = new Paper(200,400,40); 
	dustbin1 = new Dustbin(1000,450,200,100);
    //dustbin2 = new Dustbin(1090,500,20,100);
    //dustbin3 = new Dustbin(1300,500,20,100);
 
	Engine.run(engine);



  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  paper.display();
  dustbin1.display();
  //dustbin2.display();
  //dustbin3.display(); 

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145})
	}
}



