var Block1,Block2,Block3,Block4,Block5,Block6,Block7,Block8,Block9,Block10,stand;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1000,800);

	engine = Engine.create();
	world = engine.world;
	
	Engine.run(engine);

	block1 = new Block(300,275,30,40);
	console.log(block1);
	block2 = new Block(330,275,30,40);
	block3 = new Block(360,275,30,40);
	block4 = new Block(390,275,30,40);
	block5 = new Block(420,275,30,40);
	block6 = new Block(450,275,30,40);
	block7 = new Block(480,275,30,40);
	//level two
	block8 = new Block(330,235,30,40);
	block9 = new Block(360,235,30,40);
	
	
	stand = new Stand(390,300,250,10);

}


function draw() {
  background(56,44,44);  

    
    block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();	
	block7.display();
	block8.display();
	block9.display();

	/*Block7.display();
	Block8.display();
	Block9.display();*/

	stand.display();
}
