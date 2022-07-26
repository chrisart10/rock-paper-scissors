function computerPlay(){
    // return Rock, Paper or Scissor
    number = Math.floor(Math.random() * 3);
    options = ['Rock','Paper','Scissors'];
    return options[number];
}
function playRound(playerSelection,computerSelection){
    // code here
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    if( (playerSelection == 'Rock') && (computerSelection=='Scissors') ){
        return {'message':'You Win! Rock beats Scissors','winner':1};
    } else if( (playerSelection == 'Scissor') && (computerSelection=='Rock') ){
        return {'message':'You Lose! Rock beats Scissors','winner':-1};
    } else if( (playerSelection == 'Rock') && (computerSelection=='Paper') ){
        return{'message':'You Lose! Paper beats Rock','winner':-1};
    } else if( (playerSelection == 'Paper') && (computerSelection=='Rock') ){
        return {'message':'You Win! Paper beats Rock','winner':1};
    } else if((playerSelection == 'Paper') && (computerSelection=='Scissors') ){
        return {'message':'You Lose! Scissors beats Paper','winner':-1};
    } else if( (playerSelection == 'Scissors') && (computerSelection=='Paper') ){
        return {'message':'You Win! Scissors beats Paper','winner':1};
    } else if (playerSelection == computerSelection){
        return {'message':'It\'s a tie','winner':0};
    }
}
function game(){
    let playerCounter =0;
    let computerCounter = 0;
    let score = [];
    let message = null;
    let winner = null;
    let winnerResult = null;
    for (let i = 0; i < 5; i++) {
        // your code here!
        let playerSelection = prompt('Insert one of following options: Rock, Paper or Scissors');
        let computerSelection = computerPlay();
        message = playRound(playerSelection, computerSelection);
        score.push(message.message);
        if(message.winner >0){
            playerCounter+=1;
        }else if(message.winner <0){
            computerCounter+=1;
        }
     }
     if (playerCounter > computerCounter){
        winnerResult = 'You Win!';
     } else if (playerCounter < computerCounter){
        winnerResult = 'You Loose!';
     } else if((playerCounter == computerCounter)){
        winnerResult = 'It\'s a tie';
     }
     result = {"score":score,"playerScore":playerCounter,"computerScore":computerCounter,"winner":winnerResult};
     return result
}
console.log(game());