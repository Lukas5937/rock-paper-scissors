const elements = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
    let computerChoice = elements[Math.floor(Math.random() * elements.length)];
     return computerChoice
}

console.log(getComputerChoice())