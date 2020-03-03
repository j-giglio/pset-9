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

let boxes = [

];

///////////////////// EVENT LISTENERS ///////////////////////////////

document.getElementById("board-clickable").onclick = init;
document.addEventListener("keydown", movePaddle);

///////////////////// FUNCTIONS /////////////////////////////////////

function init() {
  ball = {
    radius: 10,
    x: canvas.width / 2,
    y: canvas.height - 30,
    deltaX: 2,
    deltaY: -2,
  }

  gameStarted = true;
  setInterval(drawBall, 10);
}

function drawBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
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

  if (ball.y === 10) {
    updateDeltaY();
  }

  if (ball.x === canvas.width - 10 || ball.x === 10) {
    updateDeltaX();
  }
}

function updateDeltaX() {
  ball.deltaX += -2 * ball.deltaX;
}

function updateDeltaY() {
  ball.deltaY += -2 * ball.deltaY;
}

function movePaddle() {
  if (gameStarted) {
    if (event.keyCode == 37) {
      let timer = setInterval(() => paddle.x -= paddle.movement, 4);
        setTimeout(() => { clearInterval(timer); }, 100);
    }
      else if (event.keyCode == 39) {
        let timer2 = setInterval(() => paddle.x += paddle.movement, 4);
          setTimeout(() => { clearInterval(timer2); }, 100);
    }
  }
}

function gameOver() {
  gameStarted = false;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function victory() {
  gameStarted = false;
}
