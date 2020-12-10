const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine,world;
var object;
var ball;

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world  = engine.world;

  var object_options={
    isStatic: true
  }
  

  object = Bodies.rectangle(300,590,300,30,object_options);
  World.add(world,object);

  var ball_options={
    restitution:1.2
  }

  ball = Bodies.circle(300,150,40,ball_options);
  World.add(world,ball);

  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);
  
}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,600,30);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
  
}