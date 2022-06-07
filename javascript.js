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

let computerScore = 0;
let userScore = 0;

const singleRound = (playerSelection, computerSelection) => {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();
  if (player === "rock" && computer === "paper") {
    computerScore++;
    return `You lose! Paper beats rock.  You score: ${userScore} | Computer score: ${computerScore}`;
  } else if (player === "rock" && computer === "scissors") {
    userScore++;
    return `You win! Rock beats scissors.  You score: ${userScore} | Computer score: ${computerScore}`;
  } else if (player === "paper" && computer === "scissors") {
    computerScore++;
    return `You lose! Scissors beats paper.  You score: ${userScore} | Computer score: ${computerScore}`;
  } else if (player === "paper" && computer === "rock") {
    userScore++;
    return `You win! Paper beats rock.  You score: ${userScore} | Computer score: ${computerScore}`;
  } else if (player === "scissors" && computer === "rock") {
    computerScore++;
    return `You lose! Rock beats scissors.  You score: ${userScore} | Computer score: ${computerScore}`;
  } else if (player === "scissors" && computer === "paper") {
    userScore++;
    return `You win! Scissors beats paper.  You score: ${userScore} | Computer score: ${computerScore}`;
  } else {
    return `You tied! You both had ${player}.  You score: ${userScore} | Computer score: ${computerScore}`;
  }
};

const game = () => {
  for (let i = 0; i < 100; i++) {
    // get a value for playerSelection and verify they put in a value
    let playerSelection = prompt("Do you choose rock, paper, or scissors?");
    while (!playerSelection) {
      playerSelection = prompt("Do you choose rock, paper, or scissors?");
    }

    // get a value for computerSelection by calling computerPlay()
    let computerSelection = computerPlay();

    // play a single round of rock, paper, scissors using the above values
    console.log(singleRound(playerSelection, computerSelection));

    // track the first player to 3 wins, or a tie
    if (userScore === 3) {
      console.log(
        `You won! You had ${userScore} points while the computer had ${computerScore} points.`
      );
      break;
    } else if (computerScore === 3) {
      console.log(
        `You lost! The computer had ${computerScore} points while you had ${userScore} points.`
      );
      break;
    }
  }
};

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
