var sea
var ship


function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

sea.addImage (seaImg);
sea.scale=0.2;

if(sea.x<0){
  sea.x=sea.width/2;}
  drawSprites();
}
createSprites()


function setup(){
createCanvas(400,400);
sea=createSprite(1,300,400,5);
ship=createSprite(100,299,100,100);
}
createSprites()

function draw() {
  background("green");

}
