///////////////////// CONSTANTS /////////////////////////////////////

const winningConditions = [

];

///////////////////// APP STATE (VARIABLES) /////////////////////////

let columns = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

let redWin = 0;
let yellowWin = 0;
let tieCount = 0;

///////////////////// CACHED ELEMENT REFERENCES /////////////////////

const message = document.querySelector("h2");
const board = document.getElementById("connectfour-board")
const messagePartOne = document.getElementById("messagePartOne");
const redButton = document.getElementById("red-button");
const messagePartTwo = document.getElementById("messagePartTwo");
const yellowButton = document.getElementById("yellow-button");
const messagePartThree = document.getElementById("messagePartThree");
const canvas = document.getElementById('connectfour-board');
const ctx = canvas.getContext("2d");

///////////////////// EVENT LISTENERS ///////////////////////////////

window.onload = /*init;*/ render;
//
// document.getElementById("board").onclick = takeTurn;
// document.getElementById("reset-button").onclick = init;
// document.getElementById("win-reset").onclick = reset;
// redButton.onclick = setTurn;
// yellowButton.onclick = setTurn;

///////////////////// FUNCTIONS /////////////////////////////////////

// function init() {
//   message.appendChild(messagePartOne);
//   message.appendChild(redButton);
//   message.appendChild(messagePartTwo);
//   message.appendChild(yellowButton);
//   message.appendChild(messagePartThree); /*this whole setup is so janky but it works*/
//   win = null;
//
//   if (turn) {
//     render();
//   }
// }

function render() {
  let xCoord = 80;
  let yCoord = 80;

  columns.forEach((column) => { /*x direction*/
    yCoord = 80;
    column.forEach((circle) => { /*y direction*/
      ctx.fillStyle = (!circle) ? "white" : circle;
      ctx.beginPath();
      ctx.arc(xCoord, yCoord, 43, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
      yCoord += 106;
      console.log(xCoord + ", " + yCoord)
    });
    xCoord += 106;
  });
}

// function updateWins(a) {
//   // if (a === "X") {
//   //   xWin++
//   // } else if (a === "O") {
//   //   oWin++
//   // } else if (a === "T") {
//   //   tieCount++
//   // }
// }
//
// function reset() {
//   redWin = 0;
//   yellowWin = 0;
//   tieCount = 0;
//   winCount.textContent = "Red: 0 | Yellow: 0 | Tie: 0";
// }
//
// function setTurn(f) {
//   turn = f.target.id.startsWith
//   message.textContent = `Turn: ${turn}`;
// }
