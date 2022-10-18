function getComputerChoice() {
  let num = Math.floor(Math.random() * 100);
  console.log(num);
  let choice = num <= 33 ? 'rock' : 
  num > 33 && num < 66 ? 'paper' :
  'scissors';
  return choice;
}

function getPlayerChoice() {
  prompt('What will it be? Rock, paper, or scissors?');
}

function playRound(playerSelection, computerSelection) {
  playerSelection = getPlayerChoice().toLowerCase();
  computerSelection = getComputerChoice();
  // plays a single round
  // returns a string that declares the winner of the round like so:
  // 'You Lose! Paper beats Rock'
  // make playerSelection case-insensitive (rock, ROCK, RoCk should all work)
}

function game() {

}

console.log(getComputerChoice());