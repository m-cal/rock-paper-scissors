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

function getPlayerChoice() {
  let text = prompt('What will it be? Rock, paper, or scissors?').toLowerCase();

  while (text !== 'rock' && text !== 'paper' && text !== 'scissors') {
    alert('Please enter rock, paper, or scissors.');
    text = prompt('What will it be? Rock, paper, or scissors?');
  }

  switch (text) {
    case 'rock':
      choice = 1;
      break;
    case 'paper':
      choice = 2;
      break;
    case 'scissors':
      choice = 3;
      break;
  }

  return choice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = getPlayerChoice();
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
    alert('The computer matched your move! Go again.');
    playRound();
  } else if (playerSelection == 1 && computerSelection == 3) {
    alert(`You win! ${englishPlayerSelection} beats ${englishComputerSelection}.`);
  } else if (computerSelection == 1 && playerSelection == 3) {
    alert(`You lose! ${englishComputerSelection} beats ${englishPlayerSelection}.`);    
  } else if (playerSelection > computerSelection) {
    alert(`You win! ${englishPlayerSelection} beats ${englishComputerSelection}.`);
  } else if (computerSelection > playerSelection) {
    alert(`You lose! ${englishComputerSelection} beats ${englishPlayerSelection}.`);    
  }
}

function game() {

}

/* 

  - Translate choice to numerical value (1R 2P 3S)
  - If one choice is rock and one choice is scissors, do special logic
  - Else, compare the two numbers, determine which one is higher
  - declare higher number as winner
  - return higher number as winner

 */