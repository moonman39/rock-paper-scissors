// a function to generate a computer guess

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

// Create a playerSelection and computerSelection variable to generate paramaters for a subsequent function
const playerSelection = prompt("Do you choose rock, paper, or scissors?");
let computerSelection = computerPlay();

// A function that plays a round of rock, paper, scissors and declares the winner
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    };
};

console.log(game());