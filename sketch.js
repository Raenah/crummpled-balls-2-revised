var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roof1 = new Roof(400,200,600,30);

	bob1 = new Bob(200,400,40);
	bob2 = new Bob(300,400,40);
	bob3 = new Bob(400,400,40);
	bob4 = new Bob(500,400,40);
	bob5 = new Bob(600,400,40);
	
	rope1 = new Rope(bob1.body, roof1.body, 0, 0);
	rope2 = new Rope(bob2.body, roof1.body, 0, 0);
	rope3 = new Rope(bob3.body, roof1.body, 0, 0);
	rope4 = new Rope(bob4.body, roof1.body, 0, 0);
	rope5 = new Rope(bob5.body, roof1.body, 0, 0);
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  
  drawSprites();
 
}

function keyPressed() { if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce( bobObject3.body, bobObject5.body.position,{x:80,y:-80}); } }



