let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

const pcScore = document.querySelector('.pc');
const cpScore = document.querySelector('.cp');

pcScore.textContent = playerScore;
cpScore.textContent = computerScore;

const pcChoice = document.querySelector('.pc-choice');
const cpChoice = document.querySelector('.cp-choice');
const roundResult = document.querySelector('.round-result');



function computerPlay() { // Generates a random number between 1 and 3, and turns it into a corresponding rps choice

    rpsNumber = Math.floor(Math.random() * 3) + 1

    if (rpsNumber === 1) {
        return "rock";
    } else if (rpsNumber===2) {
        return "paper";
    } else {
        return "scissors";
    }

}

function rockPaperOrScissors (playerSelection) { // Takes players input, turns it all into lowercase, checks what it is and turns it into a corresponding number

    if (playerSelection.toLowerCase()==="rock"){
        return 1;
    } else if (playerSelection.toLowerCase()==="paper"){
        return 2;
    } else if (playerSelection.toLowerCase()==="scissors"){
        return 3;
    } else {
        return "Invalid selection.";
    }
}

function rockPaperOrScissorsEmoji (playerSelection) { // Takes players input, turns it all into lowercase, checks what it is and turns it into a corresponding number

    if (playerSelection.toLowerCase()==="rock"){
        return "&#" + 129704 + ";";
    } else if (playerSelection.toLowerCase()==="paper"){
        return "&#" + 128196 + ";";
    } else if (playerSelection.toLowerCase()==="scissors"){
        return "&#" + 9996 + ";";
    } else {
        return "Invalid selection.";
    }
}

function playRound(playerSelection) { // Takes both player and computer choice, substracts computer choice from players and if result is either 1 or -2 player wins, else computer wins

    if (playerScore>=5||computerScore>=5) {
        playerScore = 0;
        computerScore = 0;
        pcScore.textContent = playerScore;
        cpScore.textContent = computerScore;
        roundResult.textContent = "";
        rockButton.classList.remove('hide-buttons');
        paperButton.classList.remove('paper-font');
        paperButton.innerHTML = "&#" + 128196 + ";";
        scissorsButton.classList.remove('hide-buttons');
        pcChoice.classList.remove('player-choices-winner');
        cpChoice.classList.remove('player-choices-winner');
        return;
    }

    pcChoice.classList.remove('player-choices-winner');
    cpChoice.classList.remove('player-choices-winner');

    let computerSelection = computerPlay()

    let result = rockPaperOrScissors(playerSelection)-rockPaperOrScissors(computerSelection);

    if (result === 1 || result === -2) {
        playerScore++;
        pcScore.textContent = playerScore;
        pcChoice.innerHTML = rockPaperOrScissorsEmoji(playerSelection);
        cpChoice.innerHTML = rockPaperOrScissorsEmoji(computerSelection);
        pcChoice.classList.add('player-choices-winner');
        if (playerScore<5) {
            roundResult.textContent = "You've won! " + playerSelection.toLowerCase().charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1) + " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        } else {
            roundResult.textContent = "You've won!"
            rockButton.classList.add('hide-buttons');
            paperButton.classList.add('paper-font');
            paperButton.textContent = 'Play Again?';
            scissorsButton.classList.add('hide-buttons');
        }
    } else if (result === 0) {
        pcChoice.innerHTML = rockPaperOrScissorsEmoji(playerSelection);
        cpChoice.innerHTML = rockPaperOrScissorsEmoji(computerSelection);
        roundResult.textContent =  "It's a draw!";
    
    } else {
        computerScore++;
        cpScore.textContent = computerScore;
        pcChoice.innerHTML = rockPaperOrScissorsEmoji(playerSelection);
        cpChoice.innerHTML = rockPaperOrScissorsEmoji(computerSelection);
        cpChoice.classList.add('player-choices-winner');
        if (computerScore<5){
            roundResult.textContent =  "You've lost. "  + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection.toLowerCase().charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);
        } else {
            roundResult.textContent =  "You've lost."
            rockButton.classList.add('hide-buttons');
            paperButton.classList.add('paper-font');
            paperButton.textContent = 'Play Again?';
            scissorsButton.classList.add('hide-buttons');
        }
    }

}