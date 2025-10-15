const GRID_SIZE = 40;
let snakeX = [200];
let snakeY = [200];

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
        moveSnake();
    // check if game is over if snake collides with border
    if (
      snakeX[0] < 0 || snakeX[0] >= width || snakeY[0] < 0 || snakeY[0] >= height
    ) {
      isGameOver = true;
      // change background to red when game over
      background(255, 0, 0);
    }
    // check if snake collides with food
    if(
        foodX >= snakeX[0] && foodX <= snakeX[0] + GRID_SIZE &&
        foodY >= snakeY[0] && foodY <= snakeY[0] + GRID_SIZE
    ){
        isSnakeOverFood();
    }
  }
  // call snake to be drawn
  drawSnake();
  // create food
  fill(255);
  ellipse(foodX + GRID_SIZE / 2, foodY + GRID_SIZE / 2, GRID_SIZE);
}
// move snake with wasd
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


// randomise food position on the canvas
function placeFood() {
  foodX = floor(random(width / GRID_SIZE)) * GRID_SIZE;
  foodY = floor(random(height / GRID_SIZE)) * GRID_SIZE;
}


// reset the food position when food is touched
function isSnakeOverFood(){
    placeFood();
    addSegment();
}

// create snake function
function drawSnake() {
  for (let i = 0; i < snakeX.length; i++) {
    if (i === 0) {
        let col = 0;
        fill(col);
  } 
    else {
        fill(col + 10);
        
  }
  // draw the segment
}
  for (let i = 0; i < snakeX.length; i++) {
    rect(snakeX[i], snakeY[i], GRID_SIZE, GRID_SIZE);
  }
}
// moving the snake
function moveSnake() {
    // if the snake eats a food, the array is updated
    for (let i = snakeX.length - 1; i > 0; i--) {
        snakeX[i] = snakeX[i - 1];
        snakeY[i] = snakeY[i - 1];
    }
    // movement
    snakeX[0] += xSpeed;
    snakeY[0] += ySpeed;
}


function addSegment(){
    snakeX.push(snakeX[snakeX.length - 1] - GRID_SIZE * xSpeed);
    snakeY.push(snakeY[snakeY.length - 1] - GRID_SIZE * ySpeed);
}
