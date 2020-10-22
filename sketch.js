var car, wall;
var speed, weight;

function setup() {
  createCanvas(1300,400);
  car = createSprite(200, 200, 50, 50);
  wall = createSprite(1100, 200, 60, height/2);
  wall.shapeColor = color(80, 80, 80)

  speed = random (55, 90);
  weight = random (400, 1500);

  car.velocityX = speed;
}

function draw() {
  background(0);  

  if (car.x - wall.x > (car.width + wall.width)/2){
car.velocityX = 0;
var Deformation = 0.5 * weight * speed * speed / 22509;

if (Deformation < 100){
  car.shapeColor = "green";
}

if (Deformation > 100 && Deformation < 180){
  car.shapeColor = "yellow";
}

if (Deformation > 180){
  car.shapeColor = "red";
}
  }

  drawSprites();
}