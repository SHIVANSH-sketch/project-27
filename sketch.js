
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	bobDiameter=40;

	startbobPositionX=width/2;
	startbobPositionY=height/4+500;
	bobObject1=new bob(startbobPositionX-bobDiameter*2,startbobPositionY,bobDiameter);
	bobObject2=new bob(startbobPositionX-bobDiameter,startbobPositionY,bobDiameter);
	bobObject3=new bob(startbobPositionX,startbobPositionY,bobDiameter);
	bobObject4=new bob(startbobPositionX+bobDiameter,startbobPositionY,bobDiameter);
	bobObject5=new bob(startbobPositionX+bobDiameter*2,startbobPositionY,bobDiameter);


	//create a Ground

var render = Render.create({
	element: document.body,
	engine: engine,
	options:{
		width:1200,
		height:700,
		wireframes:false
	}
})

	roofObject = new roof(width/2,height/4,width/7,20);

	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)
	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new rope(bobObject3.body,roofObject.body,0,0)
	rope4=new rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)
	
	/*constraint1={
		bodyA:bobObject1.body,
		bodyB:roofObject.body,
		pointB: {x:-bobDiameter*2, y:0}
	}
	/*constraint2={
		bodyA:bobObject2.body,
		bodyB:roofObject.body,
		pointB: {x:-bobDiameter, y:0}
	}
	/*constraint3={
		bodyA:bobObject3.body,
		bodyB:roofObject.body,
		pointB: {x:0, y:0}
	}
	/*constraint4={
		bodyA:bobObject4.body,
		bodyB:roofObject.body,
		pointB: {x:bobDiameter, y:0}
	}
	/*constraint5={
		bodyA:bobObject5.body,
		bodyB:roofObject.body,
		pointB: {x:bobDiameter*2, y:0}
	}

	var pendulum1=constraint.create(constraint1);
	var pendulum2=constraint.create(constraint2);
	var pendulum3=constraint.create(constraint3);
	var pendulum4=constraint.create(constraint4);
	var pendulum5=constraint.create(constraint5);

	World.add(world,pendulum1);
	World.add(world,pendulum2);
	World.add(world,pendulum3);
	World.add(world,pendulum4);
	World.add(world,pendulum5);
	*/

    Engine.run(engine);
	//Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}

function drawline(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;

	roofBodyX=roofBodyPosition.x+roofBodyoffset.x
    roofBodyY=roofBodyPosition.y+roofBodyOffset.y
    line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}
