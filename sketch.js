var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var Zone1;
var Zone2;
var Zone3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	boxPosition=width/2-100
	boxY=610;
	
	Zone1=createSprite(boxPosition+100,boxY+40,200,20)
	Zone1.shapeColor=color("red")


	Zone2=createSprite(boxPosition+210,boxY-70,20,200)
	Zone2.shapeColor=color("red")

	Zone3=createSprite(boxPosition-10,boxY-70,20,200)
	Zone3.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	 Zen1 = Bodies.rectangle(boxPosition+20,620,200,20,{isStatic:true} );
	 World.add(world,Zen1)


	 Zen2 = Bodies.rectangle(boxPosition-20,720,200,20,{isStatic:true} );
	 World.add(world,Zen2)

	 Zen3 = Bodies.rectangle(boxPosition-20,720,200,20,{isStatic:true} );
	 World.add(world,Zen3)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
    
  }
}



