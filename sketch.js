var fixed;
var moving;
var gameObject1,gameObject2,gameObject3,gameObject4;



function setup() {
  createCanvas(1200,400);
  fixed = createSprite(200, 200, 50, 50);
  moving = createSprite(400,200,50,50);
  moving.shapeColor = "green";
  fixed.shapeColor = "green";
 
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "yellow";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "yellow";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "purple";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "blue";
   
  gameObject3.velocityY = 2
  gameObject1.velocityY = -2

}



function draw() {
  background(0);  

 gameObject1.x = mouseX;
 gameObject1.y = mouseY;

 if (isTouching(gameObject1,gameObject2)){
  gameObject1.shapeColor = "red";
  gameObject2.shapeColor = "red";
 }
 else {
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
 }

 bounceOff(gameObject1,gameObject3)

  drawSprites();
}

