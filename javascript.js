// This is a rock, paper, scissors game against a computer

// Querying the DOM
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const results = document.querySelector(".result-content");
const game = document.querySelector(".game");
const newGame = document.querySelector(".new-game");

// Work on updating the score
let computerScore = 0;
let userScore = 0;
const user = document.querySelector(".user");
const computer = document.querySelector(".computer");
user.textContent = userScore;
computer.textContent = computerScore;

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

// A single round function that updates the HTML with the round results
const singleRound = (playerSelection, computerSelection) => {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();
  if (player === "rock" && computer === "paper") {
    results.textContent = `You chose rock.  The computer chose paper.  You lost!`;
    computerScore++;
  } else if (player === "rock" && computer === "scissors") {
    results.textContent = `You chose rock.  The computer chose scissors.  You won!`;
    userScore++;
  } else if (player === "paper" && computer === "scissors") {
    results.textContent = `You chose paper.  The computer chose scissors.  You lost!`;
    computerScore++;
  } else if (player === "paper" && computer === "rock") {
    results.textContent = `You chose paper.  The computer chose rock.  You won!`;
    userScore++;
  } else if (player === "scissors" && computer === "rock") {
    results.textContent = `You chose scissors.  The computer chose rock.  You lost!`;
    computerScore++;
  } else if (player === "scissors" && computer === "paper") {
    results.textContent = `You chose scissors.  The computer chose paper.  You won!`;
    userScore++;
  } else {
    results.textContent = `You both chose ${computer}.  You tied!`;
  }

  //   work on a function that tracks the first to 5 and starts the game over
  if (userScore === 3) {
    game.classList.add("hidden");
    newGame.classList.remove("hidden");
    results.textContent = `You won! Select "New Game" to play again.`;
  } else if (computerScore === 3) {
    game.classList.add("hidden");
    newGame.classList.remove("hidden");
    results.textContent = `You lost! Select "New Game" to play again.`;
  }
};

// Rock Button Event Listener
rock.addEventListener("click", () => {
  let playerSelection = "rock";
  let computerSelection = computerPlay();
  singleRound(playerSelection, computerSelection);
  user.textContent = userScore;
  computer.textContent = computerScore;
});

// Paper Button Event Listener
paper.addEventListener("click", () => {
  if (userScore === 3 || computerScore === 3) {
    user.textContent = 0;
    computer.textContent = 0;
  }
  let playerSelection = "scissors";
  let computerSelection = computerPlay();
  singleRound(playerSelection, computerSelection);
  user.textContent = userScore;
  computer.textContent = computerScore;
});

// Scissors Button Event Listener
scissors.addEventListener("click", () => {
  let playerSelection = "scissors";
  let computerSelection = computerPlay();
  singleRound(playerSelection, computerSelection);
  user.textContent = userScore;
  computer.textContent = computerScore;
});

// New Game Button Event Listener
newGame.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  user.textContent = userScore;
  computer.textContent = computerScore;
  game.classList.remove("hidden");
  newGame.classList.add("hidden");
  results.textContent = ``;
});

// const game = () => {
//   for (let i = 0; i < 100; i++) {
//     // get a value for playerSelection and verify they put in a value
//     let playerSelection = prompt("Do you choose rock, paper, or scissors?");
//     while (!playerSelection) {
//       playerSelection = prompt("Do you choose rock, paper, or scissors?");
//     }

//     // get a value for computerSelection by calling computerPlay()
//     let computerSelection = computerPlay();

//     // play a single round of rock, paper, scissors using the above values
//     console.log(singleRound(playerSelection, computerSelection));

//     // track the first player to 3 wins, or a tie
//     if (userScore === 3) {
//       console.log(
//         `You won! You had ${userScore} points while the computer had ${computerScore} points.`
//       );
//       break;
//     } else if (computerScore === 3) {
//       console.log(
//         `You lost! The computer had ${computerScore} points while you had ${userScore} points.`
//       );
//       break;
//     } else if (i === 20) {
//       console.log(
//         `Ok game over! The audience is bored of the ties.  The score is tied at ${userScore} points.`
//       );
//     }
//   }
// };

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
