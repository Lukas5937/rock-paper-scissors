const elements = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let computerChoice = elements[Math.floor(Math.random() * elements.length)];
     return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
            playerSelection === "Paper" && computerSelection === "Rock" ||
            playerSelection === "Scissors" && computerSelection === "Paper") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `It's a draw! ${playerSelection} and ${computerSelection} are the same.`
    }

}

const computerSelection = getComputerChoice()

console.log(playRound("Paper", computerSelection))