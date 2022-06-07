// This is a rock, paper, scissors game against a computer

// a function to generate a computer guess
function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "Rock";
  } else if (computerChoice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Create a playerSelection and computerSelection variable to generate paramaters for a subsequent function
let playerScore = 0;
let computerScore = 0;

// A function that plays a round of rock, paper, scissors and declares the winner
function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();
  console.log(`Computer Guess is: ${computer}.  Your Guess is: ${player}.`);
  if (player === "paper" && computer === "rock") {
    playerScore++;
    return "You win! Paper beats Rock";
  } else if (player === "paper" && computer === "scissors") {
    computerScore++;
    return `You lose! Scissors beats Paper.`;
  } else if (player === "rock" && computer === "paper") {
    computerScore++;
    return "You lose! Paper beats rock";
  } else if (player === "rock" && computer === "scissors") {
    playerScore++;
    return "You win! Rock beats Scissors";
  } else if (player === "scissors" && computer === "paper") {
    playerScore++;
    return "You win! Scissors beats Paper";
  } else if (player === "scissors" && computer === "rock") {
    computerScore++;
    return "You lose! Rock beats scissors";
  } else {
    return "You tied!";
  }
}

function game() {
  alert("Rock, Paper, Scissors! First to 5 points wins.");
  for (let i = 0; i < 100; i++) {
    let computerSelection = computerPlay();
    let playerSelection = prompt("Do you choose rock, paper, or scissors?");
    console.log(playRound(playerSelection, computerSelection));
    if (playerScore === 5) {
      console.log(
        `You won! You had ${playerScore} points to the computer's ${computerScore} points.`
      );
      break;
    } else if (computerScore === 5) {
      console.log(
        `You lost! You had ${playerScore} points to the computer's ${computerScore} points.`
      );
      break;
    }
  }
}

console.log(game());

//This is a magic eight ball game

/* 
function askEightBall () {
    let randomAnswer = Math.floor(Math.random() * 8);
    let response;
    switch (randomAnswer) {
        case 0:
            response = 'It is not likely.';
            break;
        case 1:
            response = 'It is certain.';
            break;
        case 2:
            response = 'It is probable';
            break;
        case 3:
            response = 'It is uncertain';
            break;
        case 4:
            response = 'I can\'t see at the moment.';
            break;
        case 5:
            response = 'It will happen.';
            break;
        case 6: 
            response = 'Please ask again.';
            break;
        case 7:
            response = 'I don\'t know.';
            break;
    };
    return response;
};

function shakeBall () {
    let user = prompt('What is your name?');
    let question = prompt('What would you like to ask the magic eight ball?');
    let answer = askEightBall();
    console.log(`${user} asked the following: ${question}.  The magic eight ball is thinking...  thinking....  ${answer}`);
}

shakeBall();
*/

// Write a function that converts hours into seconds

/* Create a function that takes a number as an argument. Add up all the numbers 
from 1 to the number you passed to the function. 

For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10. */
