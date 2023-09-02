const elements = ["Rock", "Paper", "Scissors"];
let scorePlayer = 0;
let scoreComputer = 0;

function getComputerChoice() {
    let computerChoice = elements[Math.floor(Math.random() * elements.length)];
     return computerChoice;
}

function getPlayerChoice() {
    let playerSelection = prompt("Make a choice (Rock, paper or scissors).");
    firstLetter = (playerSelection.charAt(0)).toUpperCase();
    remainingLetters = playerSelection.slice(1);
    return playerChoice = firstLetter + remainingLetters;
}

function defineWinner(playerChoice, computerChoice) {
    if (playerChoice === "Rock" && computerChoice === "Paper" ||
        playerChoice === "Paper" && computerChoice === "Scissors" ||
        playerChoice === "Scissors" && computerChoice === "Rock") {
        return winner = "computer";
    }
    else if (playerChoice === "Rock" && computerChoice === "Scissors" ||
            playerChoice === "Paper" && computerChoice === "Rock" ||
            playerChoice === "Scissors" && computerChoice === "Paper") {
        return winner = "player";
    }
}

function playRound() {
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    winner = defineWinner(playerChoice, computerChoice);
    if (winner === "player") {
        console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
        scorePlayer += 1;
    }
    else if (winner === "computer") {
        console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
        scoreComputer += 1;
    }
    else {
        console.log(`It's a draw! ${playerChoice} and ${computerChoice} are the same.`);
    }
    console.log(`Score Player: ${scorePlayer}`)
    console.log(`Score Computer: ${scoreComputer}`)
}

function showResultMessage () {
    if (scoreComputer < scorePlayer) {
        console.log("You won!! Congratulations!");
    }
    else if (scoreComputer > scorePlayer) {
        console.log("You lost!! What a pity!");
    }
    else if (scoreComputer === scorePlayer) {
        console.log("It's a draw!");
    }
}

for (i = 0; i < 5; i++) {
    playRound()
}

showResultMessage()