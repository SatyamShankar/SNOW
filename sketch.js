const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



var snow,bgImg
var engine,world

function preload(){

bgImg = loadImage("snow2.jpg")


}


function setup() {
  createCanvas(800,400);
  // createSprite(400, 200, 50, 50);


engine = Engine.create()
world = engine.world
Engine.run(engine)

snow = new Snow();

}

function draw() {
  background(bgImg);  

snow.display()

  drawSprites();





}