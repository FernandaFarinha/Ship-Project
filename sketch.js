
function preload(){
seaImg = loadImage("sea.png")
ship = loadImage ("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);

  sea =createSprite(60,180,20,20);
  ship =createSprite (60,180,20,20);
  sea.addImage(seaImg)
  ship.addimage(ship);
}

function draw() {
  background("blue");
    drawSprites();

 if(sea.x <0){
  sea.x = sea.width/2;
 }
}
