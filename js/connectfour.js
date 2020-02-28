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

let turn;
let win;
let redWin = 0;
let yellowWin = 0;
let tieCount = 0;

///////////////////// CACHED ELEMENT REFERENCES /////////////////////

const message = document.querySelector("h2");
const board = document.getElementById("connectfour-board")
const messagePartOne = document.getElementById("messagePartOne");
const redButton = document.getElementById("button-red");
const messagePartTwo = document.getElementById("messagePartTwo");
const yellowButton = document.getElementById("button-yellow");
const messagePartThree = document.getElementById("messagePartThree");
const canvas = document.getElementById('connectfour-board');
const ctx = canvas.getContext("2d");
const winCount = document.getElementById("winCount")

///////////////////// EVENT LISTENERS ///////////////////////////////

window.onload = init;
document.getElementById("reset-button").onclick = init;
document.getElementById("win-reset").onclick = reset;
document.getElementById("button1").onclick = takeTurn;
document.getElementById("button2").onclick = takeTurn;
document.getElementById("button3").onclick = takeTurn;
document.getElementById("button4").onclick = takeTurn;
document.getElementById("button5").onclick = takeTurn;
document.getElementById("button6").onclick = takeTurn;
document.getElementById("button7").onclick = takeTurn;
// redButton.onclick = setTurn;
// yellowButton.onclick = setTurn;

///////////////////// FUNCTIONS /////////////////////////////////////

function init() {
  message.appendChild(messagePartOne);
  message.appendChild(redButton);
  message.appendChild(messagePartTwo);
  message.appendChild(yellowButton);
  message.appendChild(messagePartThree); /*this whole setup is so janky but it works*/
  win = null;

  render();

}

function render() {
  let xCoord = 80;
  let yCoord;

  columns.forEach((column) => { /*x direction*/
    yCoord = 68;
    column.forEach((circle) => { /*y direction*/
      ctx.fillStyle = (!circle) ? "white" : circle;
      ctx.beginPath();
      ctx.arc(xCoord, yCoord, 43, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
      yCoord += 106;
    });
    xCoord += 106;
  });
}

function takeTurn(e) {
  console.log("yeet")
  console.log(e);

  // if(turn) {
  //   if (!win) {
  //
  //
  //     updateWins(win)
  //     render();
  //
  //   }
  // }
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

function reset() {
  redWin = 0;
  yellowWin = 0;
  tieCount = 0;
  winCount.textContent = "Red: 0 | Yellow: 0 | Tie: 0";
}

function setTurn(f) {
  turn = f.target.id.substring(7);
  message.textContent = `Turn: ${turn}`;
}
