var fixedRect, movingRect;



function setup() {
  createCanvas(800, 800);
  fixedRect = createSprite(400, 100, 80, 50);
  movingRect = createSprite(400, 800, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  fixedRect.velocityY = 5
  movingRect.velocityY = -5
}



function draw() {
  background("black");

bounceOff(fixedRect,movingRect);
  drawSprites();
}