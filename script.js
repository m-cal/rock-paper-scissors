function getComputerChoice(){
  let num = Math.floor(Math.random() * 100);
  console.log(num);
  let choice = num <= 33 ? 'Rock' : 
  num > 33 && num < 66 ? 'Paper' :
  'Scissors';
  return choice;
}

function playRound(playerSelection, computerSelection) {
  // plays a single round
  // returns a string that declares the winner of the round like so:
  // 'You Lose! Paper beats Rock'
  // make playerSelection case-insensitive (rock, ROCK, RoCk should all work)
}

function game() {

}

console.log(getComputerChoice());