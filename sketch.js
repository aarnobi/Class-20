var fixedRect,movingRect;

function setup() {
  createCanvas(1200,500);
  fixedRect = createSprite(400, 100, 80, 50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,500,80,50);
  movingRect.shapeColor = "green";
  fixedRect.velocityY = 5;
  movingRect.velocityY = -5;
}

function draw() {
  background(0);  
//algorithm for is touching
  // movingRect.x = mouseX;
  // movingRect.y = mouseY;

  // if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
  //   fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
  //   movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
  //   fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
  //   fixedRect.shapeColor = "red";
  //   movingRect.shapeColor = "red";
  // }else{
  //   fixedRect.shapeColor = "green";
  //   movingRect.shapeColor = "green";
  // }
  //algorithm for bounceOff
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
       fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 ){
         movingRect.velocityX = movingRect.velocityX*(-1);
         fixedRect.velocityX = fixedRect.velocityX*(-1);

       }
  if( movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
       fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
         movingRect.velocityY = movingRect.velocityY*(-1);
         fixedRect.velocityY = fixedRect.velocityY*(-1);
       }     
  drawSprites();
}