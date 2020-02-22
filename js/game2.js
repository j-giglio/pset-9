///////////////////// CONSTANTS /////////////////////////////////////

const winningConditions = [

];

///////////////////// APP STATE (VARIABLES) /////////////////////////

let column1 = ["", "", "", "", "", ""];
let column2 = ["", "", "", "", "", ""];
let column3 = ["", "", "", "", "", ""];
let column4 = ["", "", "", "", "", ""];
let column5 = ["", "", "", "", "", ""];
let column6 = ["", "", "", "", "", ""];
let column7 = ["", "", "", "", "", ""];
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

///////////////////// EVENT LISTENERS ///////////////////////////////

window.onload = init;

document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init;
document.getElementById("win-reset").onclick = reset;
redButton.onclick = setTurn;
yellowButton.onclick = setTurn;

///////////////////// FUNCTIONS /////////////////////////////////////

function init() {
  for (let b of squares) {
    b.textContent = null;
  }
  turn = null;
  board = ["", "", "", "", "", "", "", "", ""]; /*this one is the actual board*/
  message.textContent = null;
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

function lastNullElement(z){
  for (let i = z.length; i < z.length; i--){
    if (!z[i]) {
      return i;
    }
  }
}
