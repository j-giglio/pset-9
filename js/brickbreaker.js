///////////////////// CACHED ELEMENT REFERENCES /////////////////////

const message = document.querySelector("h2");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const winCount = document.getElementById("winCount")

///////////////////// APP STATE (VARIABLES) /////////////////////////

let gameStarted = false;

let ball = {
  radius: 10,
  x: canvas.width / 2,
  y: canvas.height - 30,
}

let paddleX = (canvas.width / 2) - 40

let boxes;

///////////////////// EVENT LISTENERS ///////////////////////////////

document.getElementById("board-clickable").onclick = init;
document.addEventListener("keydown", movePaddle);

///////////////////// FUNCTIONS /////////////////////////////////////

function init() {
  boxes = [
    [true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true]
  ];

  ball = {
    radius: 10,
    x: canvas.width / 2,
    y: canvas.height - 30,
    deltaX: 2,
    deltaY: -2,
  }
  console.log(ball.deltaX + ",   " + ball.deltaY)
  gameStarted = true;
  setInterval(draw, 10);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBoxes();
  drawBall();
  drawPaddle();

}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
  ctx.fillStyle = "#952000";
  ctx.fill();
  ctx.closePath();
  ball.x += ball.deltaX;
  ball.y += ball.deltaY;

  if (ball.y === canvas.height - 10) {
    gameOver();
  }

  if (ball.y === 10 || (ball.x >= paddleX - 15 && ball.x <= paddleX + 95 && ball.y === canvas.height - 20)) {
    ball.deltaY = -ball.deltaY;
  }

  if (ball.x === canvas.width - 10 || ball.x === 10) {
    ball.deltaX = -ball.deltaX;
  }
}

function drawPaddle() {
  if (gameStarted) {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - 10, 80, 10);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
}

function movePaddle() {
  if (gameStarted) {
    if (event.keyCode == 37 && paddleX !== 0) {
      paddleX -= 15;
      // let timer = setInterval(() => paddleX--, 4);
      // setTimeout(() => { clearInterval(timer); }, 100);
    } else if (event.keyCode == 39 && paddleX !== canvas.width - 80) {
      paddleX += 15;
      // let timer2 = setInterval(() => paddleX++, 4);
      // setTimeout(() => { clearInterval(timer2); }, 100);
    }
    drawPaddle();
  }
}

function drawBoxes() {
  let boxCounterY = 0;
  let spaceCounterY = 1;
  boxes.forEach((row) => {
    let boxCounterX = 0;
    let spaceCounterX = 22
    row.forEach((box) => {
      if(box) {
        ctx.beginPath();
        ctx.rect((spaceCounterX) + (75 *boxCounterX), (10 * spaceCounterY) + (45 *boxCounterY), 75, 45);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
        boxCounterX++;
        spaceCounterX += 10;
      }
    });
    boxCounterY++;
    spaceCounterY++;
  });
}

function sideCollision() {
  
}

function gameOver() {

  ball.deltaX = 0;
  ball.deltaY = 0;
  gameStarted = false;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function victory() {
  gameStarted = false;
}
