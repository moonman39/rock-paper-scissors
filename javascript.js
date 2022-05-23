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
let playerScore = 0;
let computerScore = 0;

// A function that plays a round of rock, paper, scissors and declares the winner
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    console.log(`Computer Guess is: ${computer}.  Your Guess is: ${player}.`)
    if (player === "paper" && computer === "rock") {
        playerScore++
        return "You win! Paper beats Rock";
    } else if (player === "paper" && computer === "scissors") {
        computerScore++
        return "You lose! Scissors beats Paper";
    } else if (player === "rock" && computer === "paper") {
        computerScore++
        return "You lose! Paper beats rock";
    } else if (player === "rock" && computer === "scissors") {
        playerScore++
        return "You win! Rock beats Scissors";
    } else if (player === "scissors" && computer === "paper") {
        playerScore++
        return "You win! Scissors beats Paper";
    } else if (player === "scissors" && computer === "rock") {
        computerScore++
        return "You lose! Rock beats scissors";
    } else {
        return "You tied!";
    }
};

function game() {
    for (let i = 0; i < 100; i++) {
            let computerSelection = computerPlay();
            let playerSelection = prompt("Do you choose rock, paper, or scissors?");
            console.log(playRound(playerSelection, computerSelection));
            if (playerScore === 3 || computerScore === 3) {
                break;
            }
        };
    if (playerScore > computerScore) {
        console.log(`You won! You had ${playerScore} points to the computer's ${computerScore} points.`);
    } else if (computerScore > playerScore) {
        console.log(`You lost! You had ${playerScore} points to the computer's ${computerScore} points.`);
    } else if (computerScore === playerScore) {
        console.log(`You tied! You and the computer both had ${playerScore} points.`);
    };
};

console.log(game());