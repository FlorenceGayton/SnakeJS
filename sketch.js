const GRID_SIZE = 20;
let headX = 200;
let headY = 200;

let xSpeed = GRID_SIZE;
let ySpeed = 0;

let foodX;
let foodY;

let isGameOver = false;


function setup() {
  createCanvas(600, 600);
  placeFood();
  frameRate(3);
}

function draw() {
    background(0);
    if (!isGameOver) {
        headX += xSpeed;
        headY += ySpeed;

    if (
      headX < 0 || headX >= width ||
      headY < 0 || headY >= height
    ) {
      isGameOver = true;
      background(255, 0, 0)
    }
    if(
        foodX >= headX && foodY <= headY
    ){
        isSnakeOverFood();
    }
  }

  fill(32, 194, 14);
  rect(headX, headY, GRID_SIZE, GRID_SIZE);

  fill(255);
  ellipse(foodX + GRID_SIZE / 2, foodY + GRID_SIZE / 2, GRID_SIZE);
}

function keyPressed() {
  if (keyCode === UP_ARROW || key === 'w') {
    xSpeed = 0;
    ySpeed = -GRID_SIZE;
  } else if (keyCode === DOWN_ARROW || key === 's') {
    xSpeed = 0;
    ySpeed = GRID_SIZE;
  } else if (keyCode === LEFT_ARROW || key === 'a') {
    xSpeed = -GRID_SIZE;
    ySpeed = 0;
  } else if (keyCode === RIGHT_ARROW || key === 'd') {
    xSpeed = GRID_SIZE;
    ySpeed = 0;
  }
}

function placeFood() {
  foodX = floor(random(width / GRID_SIZE)) * GRID_SIZE;
  foodY = floor(random(height / GRID_SIZE)) * GRID_SIZE;
}


function isSnakeOverFood(){
    placeFood();
}
