// randomly select one of rock/paper/scissors for computer with equal probability
function getComputerChoice() {
	let options = ['Rock', 'Paper', 'Scissors'];
	return computerChoice = options[Math.floor(Math.random() * options.length)];
}

const container = document.querySelector('#container')
const result = document.createElement('p');
const runningScore = document.createElement('p');


// compare player selection with computer selection
function playRound(e) {

	let computerSelection = getComputerChoice();
	let roundResult = '';

	if (e.srcElement.id === 'rock') {
		if (computerSelection === 'Paper') {
			result.textContent = 'You lose! Paper beats Rock';
			container.appendChild(result);
			roundResult = 'loss';
		} else if (computerSelection === 'Scissors') {
			result.textContent = 'You win! Rock beats scissors';
			container.appendChild(result);
			roundResult = 'win';
		} else {
			result.textContent = 'It\'s a tie!';
			container.appendChild(result);
		}
	} else if (e.srcElement.id === 'scissors') {
		if (computerSelection === 'Rock') {
			result.textContent = 'You lose! Rock beats scissors';
			container.appendChild(result);
			roundResult = 'loss';
		} else if (computerSelection === 'Paper') {
			result.textContent = 'You win! Scissors beats paper';
			container.appendChild(result);
			roundResult = 'win';
		} else {
			result.textContent = 'It\'s a tie!';
			container.appendChild(result);
		}
	} else if (e.srcElement.id === 'paper') {
		if (computerSelection === 'Rock') {
			result.textContent = 'You win! Paper beats rock';
			container.appendChild(result);
			roundResult = 'win';
		} else if (computerSelection === 'Scissors') {
			result.textContent = 'You lose! Scissors beats paper';
			container.appendChild(result);
			roundResult = 'loss';
		} else {
			result.textContent = 'It\'s a tie!';
			container.appendChild(result);
		}
	}

	runningScore.textContent = calculateScore(roundResult);
	container.appendChild(runningScore);
}

let playerScore = 0;
let computerScore = 0;

// play until someone accrues 5 points and output final score
function calculateScore(roundResult) {

	while (playerScore <= 4 && computerScore <= 4) {

		if (roundResult === 'loss') {
			computerScore += 1;
		} else if (roundResult === 'win') {
			playerScore += 1;
		}

		return `Your score: ${playerScore}\nComputer score: ${computerScore}`;
	}

	buttons.forEach(button => button.removeEventListener('click', playRound));

	if (playerScore > computerScore) {
		return `You win the game! ${playerScore} rounds vs. ${computerScore} rounds`;
	} else {
		return `You lose the game! ${playerScore} rounds vs. ${computerScore} rounds`;
	} 

}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));
