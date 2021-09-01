const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;

function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;
blower=new Blower(300,200,200,150)
 blowermouth=new BlowerMouth(200, 280,400,20)
 ball=new Ball(300,100,100,100)

button=createButton ("click to blow")
button.position(200,320)
button.class("blowButton")
button.mousePressed( blow)
}

function draw() {
  background(59);
  Engine.update(engine);
blower.show()

   blowermouth.show()
   ball.show()
}
 function  blow(){
Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05})
 }
 
