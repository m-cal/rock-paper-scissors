let playerWins = 0;
let computerWins = 0;

const results = document.querySelector('.results');

const playerWinsDisplay = document.createElement('p');
const computerWinsDisplay = document.createElement('p');
const narrator = document.createElement('p');
const buttonsDiv = document.querySelector('.buttons-div');

const playAgain = document.createElement('button');
playAgain.textContent = 'Play again?';
playAgain.className = 'play-again-button';


results.appendChild(playerWinsDisplay);
results.appendChild(computerWinsDisplay);
results.appendChild(narrator);

playerWinsDisplay.textContent = `You: ${playerWins}`;
computerWinsDisplay.textContent = `Computer: ${computerWins}`;
narrator.textContent = 'First to 5 wins. Make your move.';

function resetGame() {
  playerWins = 0;
  computerWins = 0;
  playerWinsDisplay.textContent = `You: ${playerWins}`;
  computerWinsDisplay.textContent = `Computer: ${computerWins}`;
  narrator.textContent = 'First to 5 wins. Make your move.';
  playAgain.remove();
  buttonsDiv.removeAttribute('hidden');
}

// For get_Choice functions, 1 is rock, 2 is paper, 3 is scissors

function getComputerChoice() {
  let num = Math.floor(Math.random() * 100);
  switch (true) {
    case (num <= 33):
      return 1;
    case (num > 33 && num <= 66):
      return 2;
    case (num >= 66 && num <=99):
      return 3;
    default:
      return getComputerChoice();
  }
}

function getEnglishChoice(selection) {
  switch (selection) {
    case 1:
      return '🪨';
    case 2:
      return '📃';
    case 3:
      return '✂️';
  }
}

function playRound(playerSelection, computerSelection) {

  computerSelection = getComputerChoice();

  let englishComputerSelection,
      englishPlayerSelection;
      
  englishPlayerSelection = getEnglishChoice(playerSelection);
  englishComputerSelection = getEnglishChoice(computerSelection);

  if (playerSelection == computerSelection) {
    narrator.textContent = '🪢 Tie round! Go again.';
    playRound();
  } else if (playerSelection == 1 && computerSelection == 3) {
    return winnerPrint(englishComputerSelection, englishPlayerSelection);
  } else if (computerSelection == 1 && playerSelection == 3) {
    return loserPrint(englishComputerSelection, englishPlayerSelection);
  } else if (playerSelection > computerSelection) {
    return winnerPrint(englishComputerSelection, englishPlayerSelection);
  } else if (computerSelection > playerSelection) {
    return loserPrint(englishComputerSelection, englishPlayerSelection);
  } 
}

function winnerPrint(englishComputerSelection, englishPlayerSelection) { 
  narrator.textContent = (`You win this round! ${englishPlayerSelection} beats ${englishComputerSelection}.`);
  playerWins++;
  playerWinsDisplay.textContent = `You: ${playerWins}`;
  if (playerWins >= 5) {
    narrator.textContent = '🎊🎊🎊 You won the game. Congratulations! 🎊🎊🎊 ';
    results.appendChild(playAgain);
    buttonsDiv.setAttribute('hidden', true);
    return '🎊🎊🎊 You won the game. Congratulations! 🎊🎊🎊 ';
  };
  return `You win this round! ${englishPlayerSelection} beats ${englishComputerSelection}.`;
}

function loserPrint(englishComputerSelection, englishPlayerSelection) {
  narrator.textContent = (`You lose this round! ${englishComputerSelection} beats ${englishPlayerSelection}.`);    
  computerWins++;
  computerWinsDisplay.textContent = `Computer: ${computerWins}`;
  if (computerWins >= 5) {
    narrator.textContent = ('☔☔☔ The computer beat you. Better luck next time. ☔☔☔');
    results.appendChild(playAgain);
    buttonsDiv.setAttribute('hidden', true);
    return ('☔☔☔ The computer beat you. Better luck next time. ☔☔☔');
  }
  return `You lose this round! ${englishComputerSelection} beats ${englishPlayerSelection}.`;  
}


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

playAgain.addEventListener('click', () => {
  resetGame();
});