// Select all the necessary elements
const boxes = document.querySelectorAll(".box");
const resetButton = document.getElementById("reset");

// Variables to keep track of game state
let currentPlayer = "X";
let gameActive = true;
let gameState = Array(9).fill("");

// Winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columns
  [0, 4, 8],
  [2, 4, 6], // Diagonals
];

// Function to handle box clicks
function handleBoxClick(event) {
  const box = event.target;
  const boxIndex = Array.from(boxes).indexOf(box);

  if (gameState[boxIndex] !== "" || !gameActive) {
    return;
  }

  gameState[boxIndex] = currentPlayer;
  box.textContent = currentPlayer;

  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Function to check for a winner or a draw
function checkWinner() {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]){
      alert(`${gameState[a]} wins!`);
      gameActive = false;
      return;
    }
  }

  if (!gameState.includes("")) {
    alert("It's a draw!");
    gameActive = false;
  }
}

// Function to reset the game
function resetGame() {
  gameState.fill("");
  currentPlayer = "X";
  gameActive = true;
  boxes.forEach((box) => (box.textContent = ""));
}

// Add event listeners to boxes and reset button
boxes.forEach((box) => box.addEventListener("click", handleBoxClick));
resetButton.addEventListener("click", resetGame);
