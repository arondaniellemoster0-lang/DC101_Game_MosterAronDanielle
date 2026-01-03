let playerScore = 0;
let computerScore = 0;

// Main game function
function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("playerChoice").textContent =
    "Player: " + capitalize(playerChoice);

  document.getElementById("computerChoice").textContent =
    "Computer: " + capitalize(computerChoice);

  const result = getResult(playerChoice, computerChoice);
  document.getElementById("result").textContent = result;

  updateScore(result);
}

// Determine winner
function getResult(player, computer) {
  if (player === computer) {
    return "It's a Draw!";
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

// Update score
function updateScore(result) {
  if (result === "You Win!") {
    playerScore++;
  } else if (result === "You Lose!") {
    computerScore++;
  }

  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}

// Capitalize first letter
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
