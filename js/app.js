///////////////////// CONSTANTS /////////////////////////////////////

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

///////////////////// APP STATE (VARIABLES) /////////////////////////

let board;
let turn;
let win;
let xWin = 0;
let oWin = 0;
let tieCount = 0;

///////////////////// CACHED ELEMENT REFERENCES /////////////////////

const squares = Array.from(document.querySelectorAll("#board div"));
const message = document.querySelector("h2");
const winCount = document.getElementById("winCount");

///////////////////// EVENT LISTENERS ///////////////////////////////

window.onload = init;

document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init;
document.getElementById("win-reset").onclick = reset;
document.getElementById("x-button").onclick = setTurn("X");
document.getElementById("o-button").onclick = setTurn("O");

///////////////////// FUNCTIONS /////////////////////////////////////

function init() {
  board = ["", "", "", "", "", "", "", "", ""];
  message.innerHTML = "Turn: X or O?"
  win = null;

    render();
}

function render() {
  board.forEach(function(mark, index) {
    squares[index].textContent = mark;
  });

  message.textContent =
    win === "T" ? "It's a tie!" : win ? `${win} wins!` : `Turn: ${turn}`;
  winCount.textContent = `X: ${xWin} | O: ${oWin} | Tie: ${tieCount}`
}

function takeTurn(e) {
  if (!win) {
    let index = squares.findIndex(function(square) {
      return square === e.target;
    });

    if (board[index] === "") {
      board[index] = turn;
      turn = turn === "X" ? "O" : "X";
      win = getWinner();

      updateWins(win)
      render();
    }
  }
}

function getWinner() {
  let winner = null;

  winningConditions.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]
    ) {
      winner = board[condition[0]];
    }
  });

  return winner ? winner : board.includes("") ? null : "T";
}

function updateWins(a) {
  if (a === "X") {
    xWin++
  } else if (a === "O") {
    oWin++
  } else if (a === "T") {
    tieCount++
  }
}

function reset() {
  xWin = 0;
  oWin = 0;
  tieCount = 0;
  winCount.textContent = "X: 0 | O: 0 | Tie: 0";
}

function setTurn(f) {
  turn = f
}
