const results = document.querySelector('.results');

const playerWinsDisplay = document.createElement('h2');
const computerWinsDisplay = document.createElement('h2');
const narrator = document.createElement('h3');

results.appendChild(playerWinsDisplay);
results.appendChild(computerWinsDisplay);
results.appendChild(narrator);




// For get_Choice functions, 1 is rock, 2 is paper, 3 is scissors
let playerWins = 0;
playerWinsDisplay.textContent = `You: ${playerWins}`;
let computerWins = 0;
computerWinsDisplay.textContent = `Computer: ${computerWins}`;

function getComputerChoice() {
  let num = Math.floor(Math.random() * 100);
  let choice;

  switch (true) {
    case (num <= 33):
      choice = 1;
      break;
    case (num > 33 && num <= 66):
      choice = 2;
      break;
    case (num > 66):
      choice = 3;
      break;
  }
  return choice;
}

function getPlayerChoice() {

}

function playRound(playerSelection, computerSelection) {
   if (!playerSelection) {
    playerSelection = getPlayerChoice();
   }
  computerSelection = getComputerChoice();

  let englishComputerSelection,
      englishPlayerSelection;

  switch (true) {
    case playerSelection == 1:
      englishPlayerSelection = 'Rock';
      break;
    case playerSelection == 2:
      englishPlayerSelection = 'Paper';
      break;
    case playerSelection == 3:
      englishPlayerSelection = 'Scissors';
      break;
  }

  switch (true) {
    case computerSelection == 1:
      englishComputerSelection = 'Rock';
      break;
    case computerSelection == 2:
      englishComputerSelection = 'Paper';
      break;
    case computerSelection == 3:
      englishComputerSelection = 'Scissors';
      break;                      
  }

  if (playerSelection == computerSelection) {
    narrator.textContent = 'It\'s a tie. Go again.';
    playRound();
  } else if (playerSelection == 1 && computerSelection == 3) {
    narrator.textContent = (`You win! ${englishPlayerSelection} beats ${englishComputerSelection}.`);
    playerWins++;
    playerWinsDisplay.textContent = `You: ${playerWins}`;
    return `You win! ${englishPlayerSelection} beats ${englishComputerSelection}.`;
  } else if (computerSelection == 1 && playerSelection == 3) {
    narrator.textContent = (`You lose! ${englishComputerSelection} beats ${englishPlayerSelection}.`);    
    computerWins++;
    computerWinsDisplay.textContent = `Computer: ${computerWins}`;
    return `You lose! ${englishComputerSelection} beats ${englishPlayerSelection}.`;
  } else if (playerSelection > computerSelection) {
    narrator.textContent = (`You win! ${englishPlayerSelection} beats ${englishComputerSelection}.`);
    playerWins++;
    playerWinsDisplay.textContent = `You: ${playerWins}`;
    return `You win! ${englishPlayerSelection} beats ${englishComputerSelection}.`;
  } else if (computerSelection > playerSelection) {
    narrator.textContent = (`You lose! ${englishComputerSelection} beats ${englishPlayerSelection}.`);    
    computerWins++;
    computerWinsDisplay.textContent = `Computer: ${computerWins}`;
    return `You lose! ${englishComputerSelection} beats ${englishPlayerSelection}.`;
  }

}

function game() {
  playRound();
}

// CLI game() function code:

// function game() {
//   for (i = 1; i <= 5; i++) {
//     playRound();
//     console.log(playerWins, computerWins);
//     if (playerWins == 3) {
//       alert('🎊🎊🎊 You\'ve won the best of 5! Congratulations! 🎊🎊🎊')
//       break;
//     } else if (computerWins == 3) {
//       alert('The computer won this best of 5, but you can always try again.')
//       break;
//     }    
//   }
//   playerWins = 0;
//   computerWins = 0;
// }


// Button selection event listeners:

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.value === 'rock-button') {
      playRound(1);
    } else if (button.classList.value === 'paper-button') {
      playRound(2);
    } else if (button.classList.value === 'scissors-button') {
      playRound(3);
    }
  });
});