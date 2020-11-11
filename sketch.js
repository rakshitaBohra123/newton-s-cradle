const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var ball,ball2,ball3,ball4,ball5;
var rope,rope2,rope3,rope4,rope5

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
 ground=new Ground(150,200,1200,20)

 ball=new Bob(900,450,80,80)
 ball2=new Bob(980,450,80,80)
 ball3=new Bob(1060,450,80,80)
 ball4=new Bob(1240,450,80,80)
 ball5=new Bob(1340,450,80,80)

 rope=new Rope(ball.body,{x:900,y:200})
 rope2=new Rope(ball2.body,{x:980,y:200})
 rope3=new Rope(ball3.body,{x:1060,y:200})
 rope4=new Rope(ball4.body,{x:1240,y:200})
 rope5=new Rope(ball5.body,{x:1320,y:200})
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    

    ball.display();
    rope.display();

    ball2.display();
    rope2.display();

    ball3.display();
    rope3.display();

    ball4.display();
    rope4.display();

    ball5.display();
    rope5.display();

   
    

    ball.fly();
    ball2.fly();
    ball3.fly();
    ball4.fly();
    ball5.fly();



}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    Matter.Body.setPosition(ball2.body, {x: mouseX , y: mouseY});
    Matter.Body.setPosition(ball3.body, {x: mouseX , y: mouseY});
    Matter.Body.setPosition(ball4.body, {x: mouseX , y: mouseY});
    Matter.Body.setPosition(ball5.body, {x: mouseX , y: mouseY});
}


