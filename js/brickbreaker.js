///////////////////// CACHED ELEMENT REFERENCES /////////////////////

const message = document.querySelector("h2");
const canvas = document.querySelector("canvas"));
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
    y: canvas.height - 30
  }
  gameStarted = true;
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
}

function victory() {
  gameStarted = false;
}
