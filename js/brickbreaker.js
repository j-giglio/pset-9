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
  [{x1: 17, x2: 92, y1: 22, y2: 67, exists: true}, {x1: 103, x2: 178, y1: 22, y2: 67, exists: true}, {x1: 189, x2: 265, y1: 22, y2: 67, exists: true}, {x1: 276, x2: 351, y1: 22, y2: 67, exists: true}, {x1: 362, x2: 437, y1: 22, y2: 67, exists: true}, {x1: 448, x2: 523, y1: 22, y2: 67, exists: true}, {x1: 534, x2: 609, y1: 22, y2: 67, exists: true}, {x1: 620, x2: 696, y1: 22, y2: 67, exists: true}, {x1: 707, x2: 782, y1: 22, y2: 67, exists: true}],
    [{x1: 17, x2: 92, y1: 77, y2: 113, exists: true}, {x1: 103, x2: 178, y1: 77, y2: 113, exists: true}, {x1: 189, x2: 265, y1: 77, y2: 113, exists: true}, {x1: 276, x2: 351, y1: 77, y2: 113, exists: true}, {x1: 362, x2: 437, y1: 77, y2: 113, exists: true}, {x1: 448, x2: 523, y1: 77, y2: 113, exists: true}, {x1: 534, x2: 609, y1: 77, y2: 113, exists: true}, {x1: 620, x2: 696, y1: 77, y2: 113, exists: true}, {x1: 707, x2: 782, y1: 77, y2: 113, exists: true}],
    [{x1: 17, x2: 92, y1: 133, y2: 150, exists: true}, {x1: 103, x2: 178, y1: 133, y2: 150, exists: true}, {x1: 189, x2: 265, y1: 133, y2: 150, exists: true}, {x1: 276, x2: 351, y1: 133, y2: 150, exists: true}, {x1: 362, x2: 437, y1: 133, y2: 150, exists: true}, {x1: 448, x2: 523, y1: 133, y2: 150, exists: true}, {x1: 534, x2: 609, y1: 133, y2: 150, exists: true}, {x1: 620, x2: 696, y1: 133, y2: 150, exists: true}, {x1: 707, x2: 782, y1: 133, y2: 150, exists: true}]
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
  // draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBoxes();
  drawBall();
  drawPaddle();
  collision();
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
    updateY();
  }

  if (ball.x === canvas.width - 10 || ball.x === 10) {
    updateX();
  }
}

function updateX() {
  ball.deltaX = -ball.deltaX;
}

function updateY() {
  ball.deltaY = -ball.deltaY;
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
    } else if (event.keyCode == 39 && paddleX !== canvas.width - 80) {
      paddleX += 15;
    }
  }
}

function drawBoxes() {
  boxes.forEach((row) => {
    row.forEach((box) => {
      if (box.exists) {
        ctx.beginPath();
        ctx.rect(box.x1, box.y1, 75, 45);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    });
  });
}

function collision() {
  boxes.forEach((row) => {
    row.forEach((box) => {
      if (box.exists) {
        box.exists = !(ball.x >= box.x1 - 10 && ball.x <= box.x2 + 10 && ball.y >= box.y1 - 10 && ball.y <= box.y2 + 10)
        if (!box.exists) {
          if (ball.y < box.y2 - 10 || ball.y > box.y1 + 10) {
            updateY();
          } else {
            updateX();
          }
        }
      }
    });
  });
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
