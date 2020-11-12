const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;
var box1, ground; 

function setup(){
  createCanvas(500,500);

  myEngine = Engine.create();
  myWorld = myEngine.world;
 
  
  

    box1 = new Box();
  
 
}

function draw(){
background("blue");
Engine.update(myEngine);

box1.display();
} 