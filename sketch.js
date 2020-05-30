var car, car2, car3, car4, wall;
var divider1, divider2, divder3;
var speed, speed2, speed3, speed4, width, width2, width3, width4;
var deformation, deformation2, deformation3, deformation4;

function setup() {
  createCanvas(1300,800);

  car = createSprite(50, 100, 30, 30);
  car2 = createSprite(50, 300, 30, 30);
  car3 = createSprite(50, 500, 30, 30);
  car4 = createSprite(50, 700, 30, 30);

  wall = createSprite(1250, 100, 20, 100);
  wall2 = createSprite(1250, 300, 20, 100);
  wall3 = createSprite(1250, 500, 20, 100);
  wall4 = createSprite(1250, 700, 20, 100);

  divider1 = createSprite(650, 190, 1300, 20);
  divider2 = createSprite(650, 390, 1300, 20);
  divider3 = createSprite(650, 590, 1300, 20);

  deformation = 0;

  speed = Math.round(random(55, 90));
  weight = Math.round(random(400, 1500));

  speed2 = Math.round(random(55, 90));
  weight2 = Math.round(random(400, 1500));

  speed3 = Math.round(random(55, 90));
  weight3 = Math.round(random(400, 1500));

  speed4 = Math.round(random(55, 90));
  weight4 = Math.round(random(400, 1500));
}

function draw() {
  background(0,0,0);  

  wall.shapeColor = 80, 80, 80;
  wall2.shapeColor = 80, 80, 80;
  wall3.shapeColor = 80, 80, 80;
  wall4.shapeColor = 80, 80, 80;

  divider1.shapeColor = "white";
  divider2.shapeColor = "white";
  divider3.shapeColor = "white";

  car.shapeColor = 255, 255, 255;
  car2.shapeColor = 255, 255, 255;
  car3.shapeColor = 255, 255, 255;
  car4.shapeColor = 255, 255, 255;

  car.velocityX = speed/2;

  if (car.isTouching(wall)){
    car.velocityX = 0;

    deformation = Math.round(0.5*weight*speed*speed/22500);

    textSize(30);
    text("Deformation = " + deformation, 50, 100);
    text("Speed = " + speed, 350, 100);
    text("weight = " + weight, 550, 100);

    if (deformation <= 101){
      car.shapeColor = "green";
    }else if (deformation <= 179){
      car.shapeColor = "yellow";
    }else if (deformation >= 180){
      car.shapeColor = "red";
    }

    car2.velocityX = speed2/2;
  }

  if (car2.isTouching(wall2)){
    car2.velocityX = 0;

    deformation2 = Math.round(0.5*weight2*speed2*speed2/22500);

    textSize(30);
    text("Deformation = " + deformation2, 50, 300);
    text("Speed = " + speed2, 350, 300);
    text("weight = " + weight2, 550, 300);

    if (deformation2 <= 101){
      car2.shapeColor = "green";
    }else if (deformation2 <= 179){
      car2.shapeColor = "yellow";
    }else if (deformation2 >= 180){
      car2.shapeColor = "red";
    }

    car3.velocityX = speed3/2;
  }

  if (car3.isTouching(wall3)){
    car3.velocityX = 0;

    deformation3 = Math.round(0.5*weight3*speed3*speed3/22500);

    textSize(30);
    text("Deformation = " + deformation3, 50, 500);
    text("Speed = " + speed3, 350, 500);
    text("weight = " + weight3, 550, 500);

    if (deformation3 <= 101){
      car3.shapeColor = "green";
    }else if (deformation3 <= 179){
      car3.shapeColor = "yellow";
    }else if (deformation3 >= 180){
      car3.shapeColor = "red";
    }
    
    car4.velocityX = speed4/2;
  }

  if (car4.isTouching(wall4)){
    car4.velocityX = 0;

    deformation4 = Math.round(0.5*weight4*speed4*speed4/22500);

    textSize(30);
    text("Deformation = " + deformation4, 50, 700);
    text("Speed = " + speed4, 350, 700);
    text("weight = " + weight4, 550, 700);

    if (deformation4 <= 101){
      car4.shapeColor = "green";
    }else if (deformation4 <= 179){
      car4.shapeColor = "yellow";
    }else if (deformation4 >= 180){
      car4.shapeColor = "red";
    }
  }

  drawSprites();
}