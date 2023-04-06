function getComputerChoice() {
	let options = ['Rock', 'Paper', 'Scissors'];
	return computerChoice = options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection.toLowerCase() === 'rock') {
		if (computerSelection === 'Paper') {
			return 'You lose! Paper beats Rock';
		} else if (computerSelection === 'Scissors') {
			return 'You win! Rock beats scissors';
		} else {
			return 'It\'s a tie!';
		}
	} else if (playerSelection.toLowerCase() === 'scissors') {
		if (computerSelection === 'Rock') {
			return 'You lose! Rock beats scissors';
		} else if (computerSelection === 'Paper') {
			return 'You win! Scissors beats paper';
		} else {
			return 'It\'s a tie!';
		}
	} else if (playerSelection.toLowerCase() === 'paper') {
		if (computerSelection === 'Rock') {
			return 'You win! Paper beats rock';
		} else if (computerSelection === 'Scissors') {
			return 'You lose! Scissors beats paper';
		} else {
			return 'It\'s a tie!';
		}
	} else {
		return 'Please enter a rock, paper, or scissors';
	}
}
