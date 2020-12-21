
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree;
var boy, player;
var ground;
var stone;



function preload()
{
	player = loadImage("sprites/pluckingmangoes/boy.png");
}

function setup() {
	createCanvas(1400, 590);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(910, 140);

	boy = createSprite(190, 520, 10, 10);
	boy.scale = 0.1
	boy.addImage("ladka", player);

	ground = new Ground(width/2, 580, width, 20);

	stone = new Stone(400, 400, 40);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  tree.display();
  ground.display();
  stone.display();
  drawSprites();
 
}



