const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var go = [];
var stop = [];

function setup() {
  createCanvas(600,800);
  
  engine = Engine.create();
  world = engine.world;

  plat = new ground();
  wall1 = new divide(0,550,5,400);
  wall2 = new divide(100,550,5,100);
  wall3 = new divide(200,550,5,100);
  wall4 = new divide(150,600,100,5);
  wall5 = new divide(300,550,5,400);
  wall6 = new divide(400,550,5,400);
  wall7 = new divide(500,550,5,400);
  wall8 = new divide(600,550,5,400);
  wall9 = new divide(580,550,40,5);

  
  for(var i = 50;i < 550;i = i+40){
    stop.push(new plink(i,100));
  }
  for(var f = 110;f < 190;f = 20){
    stop.push(new plink(300,f));
  }
  for(var  j = 80;j < 520;j = j+40){
    stop.push(new plink(j,200));
  }
  for(var l = 20;l < 580;l = l+40){
    stop.push(new plink(l,300));
  }

  Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background("black");  

  plat.display();

  wall1.show();
  wall2.show();
  wall3.show();
  wall4.show();
  wall5.show();
  wall6.show();
  wall7.show();
  wall8.show();
  wall9.show();

  if(frameCount % 40 === 0){
    go.push(new fall(random(270,330),0));
  }
  for(var j = 0;j < go.length;j++){
    go[j].make();
  }
  
  for(var i = 0;i < stop.length;i++){
    stop[i].sell();
  }

  console.log(stop);
}