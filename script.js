let playerWins = 0;
let computerWins = 0;

const results = document.querySelector('.results');

const playerWinsDisplay = document.createElement('h2');
const computerWinsDisplay = document.createElement('h2');
const narrator = document.createElement('h3');

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
}

// For get_Choice functions, 1 is rock, 2 is paper, 3 is scissors

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

function playRound(playerSelection, computerSelection) {

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
    narrator.textContent = 'Computer matched your move. Go again.';
    playRound();
  } else if (playerSelection == 1 && computerSelection == 3) {
    narrator.textContent = (`You win this round! ${englishPlayerSelection} beats ${englishComputerSelection}.`);
    playerWins++;
    playerWinsDisplay.textContent = `You: ${playerWins}`;
    if (playerWins >= 5) {
      narrator.textContent = '🎊🎊🎊 You won the game. Congratulations 🎊🎊🎊 ';
      results.appendChild(playAgain);
      return narrator.textContent = '🎊🎊🎊 You won the game. Congratulations 🎊🎊🎊 ';
    }
    return `You win this round! ${englishPlayerSelection} beats ${englishComputerSelection}.`;
  } else if (computerSelection == 1 && playerSelection == 3) {
    narrator.textContent = (`You lose this round! ${englishComputerSelection} beats ${englishPlayerSelection}.`);    
    computerWins++;
    computerWinsDisplay.textContent = `Computer: ${computerWins}`;
    if (computerWins >= 5) {
      narrator.textContent = ('🌧️🌧️🌧️ The computer beat you. Better luck next time. 🌧️🌧️🌧️');
      results.appendChild(playAgain);
      return ('🌧️🌧️🌧️ The computer beat you. Better luck next time. 🌧️🌧️🌧️');
    }
    return `You lose this round! ${englishComputerSelection} beats ${englishPlayerSelection}.`;
  } else if (playerSelection > computerSelection) {
    narrator.textContent = (`You win this round! ${englishPlayerSelection} beats ${englishComputerSelection}.`);
    playerWins++;
    playerWinsDisplay.textContent = `You: ${playerWins}`;
    if (playerWins >= 5) {
      narrator.textContent = '🎊🎊🎊 You won the game. Congratulations 🎊🎊🎊 ';
      results.appendChild(playAgain);
      return '🎊🎊🎊 You won the game. Congratulations 🎊🎊🎊 ';
    };
    return `You win this round! ${englishPlayerSelection} beats ${englishComputerSelection}.`;
  } else if (computerSelection > playerSelection) {
    narrator.textContent = (`You lose this round! ${englishComputerSelection} beats ${englishPlayerSelection}.`);    
    computerWins++;
    computerWinsDisplay.textContent = `Computer: ${computerWins}`;
    if (computerWins >= 5) {
      narrator.textContent = ('🌧️🌧️🌧️ The computer beat you. Better luck next time. 🌧️🌧️🌧️');
      results.appendChild(playAgain);
      return '🌧️🌧️🌧️ The computer beat you. Better luck next time 🌧️🌧️🌧️.';
    }
    return `You lose this round! ${englishComputerSelection} beats ${englishPlayerSelection}.`;
  } 
}



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

playAgain.addEventListener('click', () => {
  resetGame();
});