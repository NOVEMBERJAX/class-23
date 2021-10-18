const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
//Declare variables for box2,box3 & box4
var box1,box2,box3,box4;

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,height,400,20)
    box1 = new Box(200,300,50,50);
    //Create box2 object using Box class
    box2 = new Box(100,200,20,20)
    //Create box3 object using Box class
     box3 = new Box(50,100,30,10)
    box4 = new Box(70,300,40,20)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    
}