const elements = ["Rock", "Paper", "Scissors"];
const buttons = document.querySelectorAll("button");
const messageBox = document.querySelector(".message-box");
const scorePlayerMsg = document.querySelector(".score-player-msg");
const scoreComputerMsg = document.querySelector(".score-computer-msg");


let scorePlayer = 0;
let scoreComputer = 0;
let roundNumber = 0;

function getComputerChoice() {
    let computerChoice = elements[Math.floor(Math.random() * elements.length)];
     return computerChoice;
}

/* function getPlayerChoice() {
    let playerSelection = button;
    firstLetter = (playerSelection.charAt(0)).toUpperCase();
    remainingLetters = playerSelection.slice(1);
    return playerChoice = firstLetter + remainingLetters;
} */

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
    computerChoice = getComputerChoice();
    winner = defineWinner(playerChoice, computerChoice);
    if (winner === "player") {
        messageBox.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
        scorePlayer += 1;
    }
    else if (winner === "computer") {
        messageBox.textContent =`You Lose! ${computerChoice} beats ${playerChoice}`;
        scoreComputer += 1;
    }
    else {
        messageBox.textContent = `It's a draw! ${playerChoice} and ${computerChoice} are the same.`;
    }
    scorePlayerMsg.textContent = `Score Player: ${scorePlayer}`;
    scoreComputerMsg.textContent = `Score Computer: ${scoreComputer}`;
    roundNumber += 1;
    if (roundNumber >= 5) {
        showResultMessage();
    };
}

function showResultMessage () {
    if (scoreComputer < scorePlayer) {
        messageBox.textContent = "You won!! Congratulations!";
    }
    else if (scoreComputer > scorePlayer) {
        messageBox.textContent = "You lost!! What a pity!";
    }
    else if (scoreComputer === scorePlayer) {
        messageBox.textContent = "It's a draw!";
    }
}

buttons.forEach((button) => button.addEventListener("click", () => {
    playerChoice = button.textContent;
    playRound()
    }));

/* Alternatively you can also use this function which uses "e"
 buttons.forEach((button) => button.addEventListener("click", function (e) {
    console.log(e.target.innerText)})); */


