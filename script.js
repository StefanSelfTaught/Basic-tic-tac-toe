const msg = document.getElementById("msg");
const tds = document.querySelectorAll("td");
const title = document.querySelector("h1");
let symbol = "X";
let winner = null;

msg.innerHTML = `${symbol} get's to start.`;

tds.forEach(e => {
  e.addEventListener("click", nextMove);
});

function nextMove() {
  if (winner != null) {
    msg.innerHTML = `${symbol} already won!`;
  } else if (this.innerHTML == "") {
    this.innerHTML = symbol;
    switchSymbol();
  } else {
    msg.innerHTML = "Select another square!";
  }
}

function switchSymbol() {
  if (checkWinner(symbol)) {
    msg.innerHTML = `Congrats ${symbol}, you won!`;
    winner = symbol;
  } else if (symbol == "X") {
    symbol = "O";
    msg.innerHTML = `It's ${symbol}'s turn.`;
  } else if (symbol == "O") {
    symbol = "X";
    msg.innerHTML = `It's ${symbol}'s turn.`;
  }
}

function getSquare(number) {
  return document.getElementById(number).innerHTML;
}

function checkRow(a, b, c, move) {
  let result = false;
  if (getSquare(a) == move && getSquare(b) == move && getSquare(c) == move) {
    result = true;
  }
  return result;
}

function checkWinner(move) {
  let result2 = false;
  if (
    checkRow(0, 1, 2, move) ||
    checkRow(3, 4, 5, move) ||
    checkRow(6, 7, 8, move) ||
    checkRow(0, 3, 6, move) ||
    checkRow(1, 4, 7, move) ||
    checkRow(2, 5, 8, move) ||
    checkRow(2, 4, 6, move) ||
    checkRow(0, 4, 8, move)
  ) {
    result2 = true;
  }
  return result2;
}
