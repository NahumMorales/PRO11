var sea
var ship


function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}
   
  




function setup(){
createCanvas(400,400);
sea=createSprite(1,200,400,5);

sea.addImage (seaImg);
sea.scale=0.3;
ship=createSprite(100,299,100,100);
ship.addAnimation("barco",shipImg1)
ship.scale=0.2

}

function draw() {
  background("green");
  drawSprites();
  if(sea.x<0){
    sea.x=sea.width/2;}
   
   }
