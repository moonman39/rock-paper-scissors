console.log("Hello world");


function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    };
};

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    console.log(`Computer Guess is: ${computer}.  Your Guess is: ${player}.`)
    if (player === "paper" && computer === "rock") {
        return "You win! Paper beats Rock";
    } else if (player === "paper" && computer === "scissors") {
        return "You lose! Scissors beats Paper";
    } else if (player === "rock" && computer === "paper") {
        return "You lose! Paper beats rock";
    } else if (player === "rock" && computer === "scissors") {
        return "You win! Rock beats Scissors";
    } else if (player === "scissors" && computer === "paper") {
        return "You win! Scissors beats Paper";
    } else if (player === "scissors" && computer === "rock") {
        return "You lose! Rock beats scissors";
    } else {
        return "You tied!";
    }
};

const playerSelection = "ROCK";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));