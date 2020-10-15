
var movingRect, fixedRect;



function setup() {
  createCanvas(800,400);
  movingRect= createSprite(300,200,50,50);
  fixedRect=createSprite(500,200,50,50);

}
function draw() {
  background(255,255,255);

  movingRect.x=mouseX;
  movingRect.y=mouseY;


 if(fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
  &&movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2){
  
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
 }
else 
{
  movingRect.shapeColor="black";
  fixedRect.shapeColor="black";
}


  console.log(movingRect.x)
  console.log(fixedRect.x);
  drawSprites();
}