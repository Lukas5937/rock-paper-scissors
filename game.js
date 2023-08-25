const elements = ["Rock", "Paper", "Scissors"];
let scorePlayer = 0;
let scoreComputer = 0;

function getComputerChoice() {
    let computerChoice = elements[Math.floor(Math.random() * elements.length)];
     return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
        return false;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
            playerSelection === "Paper" && computerSelection === "Rock" ||
            playerSelection === "Scissors" && computerSelection === "Paper") {
        return true;
    }
}

let computerSelection = getComputerChoice()

/* console.log(playRound("Paper", computerSelection)) */

function playGame() {
    playerSelection = prompt("Make a choice (Rock, paper or scissors).");
    firstLetter = (playerSelection.charAt(0)).toUpperCase();
    remainingLetters = playerSelection.slice(1);
    playerSelection = firstLetter + remainingLetters;
    firstRound = playRound(playerSelection, computerSelection);
    if (firstRound === true) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        scorePlayer += 1;
    }
    else if (firstRound === false) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        scoreComputer += 1;
    }
    else {
        console.log(`It's a draw! ${playerSelection} and ${computerSelection} are the same.`);
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

playGame()
computerSelection = getComputerChoice()
playGame()
computerSelection = getComputerChoice()
playGame()
computerSelection = getComputerChoice()
playGame()
computerSelection = getComputerChoice()
playGame()
computerSelection = getComputerChoice()

showResultMessage()