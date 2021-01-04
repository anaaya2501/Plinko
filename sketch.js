const Engine = Matter.Engine;
const World = Matter.World;
const  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var ground;

function setup() {

  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height-10, width, 10)
  //division
  
  for(var k = 0; k<= width; k=k+80){
    divisions.push(new Division(k, height-divisionHeight/2, 10,divisionHeight));
  }
  //PLINKOS
  
  for(var j = 75; j<= width-10; j=j+50){
    plinkos.push(new Plinko(j, 75));
  }


  for(var j = 50; j<= width-10; j=j+50){
    plinkos.push(new Plinko(j, 175));
  }
  
  
  for(var j = 75; j<= width-10; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  
  for(var j = 50; j<= width-10; j=j+50){
    plinkos.push(new Plinko(j, 375));
  }

//d1= new Division(10,height-divisionHeight/2, 10,divisionHeight); 
}

function draw() {
  background(0);  
  Engine.update(engine);
 ground.display();
// d1.display();
 //division
 
 for(var k = 0; k< divisions.length; k=k+1){
  divisions[k].display();
}
//PLINKOS
for(var k = 0; k< plinkos.length; k=k+1){
  plinkos[k].display();
}

//particle
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-30,width/2-30), 0));
}
for(var k = 0; k< particles.length; k=k+1){
  particles[k].display();
}
  drawSprites();
}