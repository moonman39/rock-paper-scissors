// This is a rock, paper, scissors game against a computer

// This is a function to generate a computer guess
const computerPlay = () => {
  let computerGuess = Math.floor(Math.random() * 3);
  if (computerGuess === 0) {
    return "rock";
  } else if (computerGuess === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

let playerSelection = "ROCK";
let computerSelection = computerPlay();

const singleRound = (playerSelection, computerSelection) => {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();
  if (player === "rock" && computer === "paper") {
    return `You lose! Paper beats rock.`;
  } else if (player === "rock" && computer === "scissors") {
    return `You win! Rock beats scissors.`;
  } else if (player === "paper" && computer === "scissors") {
    return `You lose! Scissors beats paper.`;
  } else if (player === "paper" && computer === "rock") {
    return `You win! Paper beats rock.`;
  } else if (player === "scissors" && computer === "rock") {
    return `You lose! Rock beats scissors.`;
  } else if (player === "scissors" && computer === "paper") {
    return `You win! Scissors beats paper.`;
  } else {
    return `You tied! You both had ${player}`;
  }
};

console.log(singleRound(playerSelection, computerSelection));

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
