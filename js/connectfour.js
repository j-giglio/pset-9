///////////////////// CONSTANTS /////////////////////////////////////

const winningConditions = [

];

///////////////////// APP STATE (VARIABLES) /////////////////////////

let columns = {
  column1: [null, null, null, null, null, null],
  column2: [null, null, null, null, null, null],
  column3: [null, null, null, null, null, null],
  column4: [null, null, null, null, null, null],
  column5: [null, null, null, null, null, null],
  column6: [null, null, null, null, null, null],
  column7: [null, null, null, null, null, null]
}

let xWin = 0;
let oWin = 0;
let tieCount = 0;

///////////////////// CACHED ELEMENT REFERENCES /////////////////////

const message = document.querySelector("h2");
const board = document.getElementById("connectfour-board")
const messagePartOne = document.getElementById("messagePartOne");
const redButton = document.getElementById("red-button");
const messagePartTwo = document.getElementById("messagePartTwo");
const yellowButton = document.getElementById("yellow-button");
const messagePartThree = document.getElementById("messagePartThree");
const canvas = document.getElementById('student-canvas-5');
const ctx = canvas.getContext("2d");

///////////////////// EVENT LISTENERS ///////////////////////////////

window.onload = init;

document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init;
document.getElementById("win-reset").onclick = reset;
redButton.onclick = setTurn;
yellowButton.onclick = setTurn;

///////////////////// FUNCTIONS /////////////////////////////////////

function init() {

  message.appendChild(messagePartOne);
  message.appendChild(xButton);
  message.appendChild(messagePartTwo);
  message.appendChild(oButton);
  message.appendChild(messagePartThree); /*this whole setup is so janky but it works*/
  win = null;

  if (turn) {
    render();
  }
}

function render() {
  for (column in columns) {
    column.forEach((circle) => {
      ctx.beginPath();
      ctx.arc(, , , 0, 2 * Math.PI);
      ctx.stroke();
      ctx.closePath();
    });
  }

}

function updateWins(a) {
  // if (a === "X") {
  //   xWin++
  // } else if (a === "O") {
  //   oWin++
  // } else if (a === "T") {
  //   tieCount++
  // }
}

function reset() {
  redWin = 0;
  yellowWin = 0;
  tieCount = 0;
  winCount.textContent = "Red: 0 | Yellow: 0 | Tie: 0";
}

function setTurn(f) {
  turn = f.target.id.startsWith
  message.textContent = `Turn: ${turn}`;
}
