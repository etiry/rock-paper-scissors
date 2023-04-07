// randomly select one of rock/paper/scissors for computer with equal probability
function getComputerChoice() {
	let options = ['Rock', 'Paper', 'Scissors'];
	return computerChoice = options[Math.floor(Math.random() * options.length)];
}

// compare player selection with computer selection
function playRound(playerSelection, computerSelection) {
	if (playerSelection.toLowerCase() === 'rock') {
		if (computerSelection === 'Paper') {
			console.log('You lose! Paper beats Rock');
			return 'loss';
		} else if (computerSelection === 'Scissors') {
			console.log('You win! Rock beats scissors');
			return 'win';
		} else {
			console.log('It\'s a tie!');
		}
	} else if (playerSelection.toLowerCase() === 'scissors') {
		if (computerSelection === 'Rock') {
			console.log('You lose! Rock beats scissors');
			return 'loss';
		} else if (computerSelection === 'Paper') {
			console.log('You win! Scissors beats paper');
			return 'win'
		} else {
			console.log('It\'s a tie!');
		}
	} else if (playerSelection.toLowerCase() === 'paper') {
		if (computerSelection === 'Rock') {
			console.log('You win! Paper beats rock');
			return 'win'
		} else if (computerSelection === 'Scissors') {
			console.log('You lose! Scissors beats paper');
			return 'loss'
		} else {
			console.log('It\'s a tie!');
		}
	} else {
		return 'Please enter a rock, paper, or scissors';
	}
}

// play 5 rounds and output final score
function game() {

	let playerScore = 0;
	let computerScore = 0;

	for (let i = 0; i < 5; i++) {
		let playerChoice = prompt("Choose rock, paper, or scissors and enter your choice here");

		roundResult = playRound(playerChoice, getComputerChoice());

		if (roundResult === 'loss') {
			computerScore += 1;
		} else if (roundResult === 'win') {
			playerScore += 1;
			}
	}


	if (playerScore > computerScore) {
		return `You win the game! ${playerScore} rounds vs. ${computerScore} rounds`;
	} else if (computerScore > playerScore) {
		return `You lose the game! ${playerScore} rounds vs. ${computerScore} rounds`;
	} else {
		return `It's a tie! ${playerScore} rounds vs. ${computerScore} rounds`;
	}
}
