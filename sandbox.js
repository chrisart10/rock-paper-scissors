let playerCounter = 0;
let computerCounter = 0;
let scores = [];
let games = 0;

const buttons = document.querySelectorAll('button');
const displayResult = document.querySelector('div.result');
const displayGame = document.querySelector('div.game');
const imgs = document.querySelectorAll('img');

for (const button of buttons) {
    button.addEventListener('click', (event) => {
        const playerSelection = event.target.textContent;
        game(playerSelection);
    });
}

function game(playerSelection) {
    const computerSelection = computerPlay();
    imgs[0].src = `./src/${playerSelection.toLowerCase()}.png`;
    imgs[0].style = 'display:inline;';
    imgs[1].src = `./src/${computerSelection.toLowerCase()}.png`;
    imgs[1].style = 'display:inline;';
    const roundResult = playRound(playerSelection, computerSelection);
    let result = gameResult(roundResult);
    if (!result) {
        displayResult.textContent = '';
        displayGame.textContent = roundResult.message;
    }
    if (result) displayResult.innerHTML = result.winner;

}

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
    const options = ['Rock', 'Paper', 'Scissors'];
    return options[randomNumber];
}

function playRound(playerSelection, computerSelection) {

    if ((playerSelection == 'Rock') && (computerSelection == 'Scissors')) {
        return { 'message': 'You Win! Rock beats Scissors', 'winner': 1 };

    } else if ((playerSelection == 'Scissors') && (computerSelection == 'Rock')) {
        return { 'message': 'You Lose! Rock beats Scissors', 'winner': -1 };

    } else if ((playerSelection == 'Rock') && (computerSelection == 'Paper')) {
        return { 'message': 'You Lose! Paper beats Rock', 'winner': -1 };

    } else if ((playerSelection == 'Paper') && (computerSelection == 'Rock')) {
        return { 'message': 'You Win! Paper beats Rock', 'winner': 1 };

    } else if ((playerSelection == 'Paper') && (computerSelection == 'Scissors')) {
        return { 'message': 'You Lose! Scissors beats Paper', 'winner': -1 };

    } else if ((playerSelection == 'Scissors') && (computerSelection == 'Paper')) {
        return { 'message': 'You Win! Scissors beats Paper', 'winner': 1 };

    }
    return { 'message': 'It\'s a tie', 'winner': 0 };
}

function gameResult(roundResult) {
    // add roundResult message to scores variable and  return false because game no end yet.
    let winnerResult;
    let result;
    if (++games < 5) {
        if (roundResult.winner > 0) {
            playerCounter += 1;
        } else if (roundResult.winner < 0) {
            computerCounter += 1;
        }
        scores.push({ 'message': roundResult.message });
        return;
    }
    if (roundResult.winner > 0) {
        playerCounter += 1;
    } else if (roundResult.winner < 0) {
        computerCounter += 1;
    }

    scores.push({ 'message': roundResult.message });

    if (playerCounter > computerCounter) {
        winnerResult = 'You Win!';
    } else if (playerCounter < computerCounter) {
        winnerResult = 'You Loose!';
    } else if ((playerCounter == computerCounter)) {
        winnerResult = 'It\'s a tie';
    }

    result = { "score": scores, "playerScore": playerCounter, "computerScore": computerCounter, "winner": winnerResult };
    games = 0;
    playerCounter = 0;
    computerCounter = 0;
    scores = [];
    return result;
}

