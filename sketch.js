const GRID_SIZE = 20;
let headX = 200;
let headY = 200;

let xSpeed = GRID_SIZE;
let ySpeed = 0;

let foodX;
let foodY;

let isGameOver = false;

// create canvas and set framerate
function setup() {
  createCanvas(600, 600);
  placeFood();
  frameRate(3);
}

function draw() {
    background(0);
    // make snake move if game isn't over
    if (!isGameOver) {
        headX += xSpeed;
        headY += ySpeed;
    // check if game is over if snake collides with border
    if (
      headX < 0 || headX >= width || headY < 0 || headY >= height
    ) {
      isGameOver = true;
      // change background to red when game over
      background(255, 0, 0);
    }
    // check if snake collides with food
    if(
        foodX >= headX && foodX <= headX + GRID_SIZE &&
        foodY >= headY && foodY <= headY + GRID_SIZE
    ){
        isSnakeOverFood();
    }
  }
  // create snake
  fill(32, 194, 14);
  rect(headX, headY, GRID_SIZE, GRID_SIZE);
  // create food
  fill(255);
  ellipse(foodX + GRID_SIZE / 2, foodY + GRID_SIZE / 2, GRID_SIZE);
}
// move snake
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
