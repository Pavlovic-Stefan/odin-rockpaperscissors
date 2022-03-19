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

function playRound(playerSelection) { // Takes both player and computer choice, substracts computer choice from players and if result is either 1 or -2 player wins, else computer wins

    let computerSelection = computerPlay()

    let result = rockPaperOrScissors(playerSelection)-rockPaperOrScissors(computerSelection);

    if (result === 1 || result === -2) {
        return "You've won! " + playerSelection.toLowerCase().charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1) + " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    } else if (result === 0) {
        return "It's a draw!";
    } else {
        return "You've lost. "  + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection.toLowerCase().charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);
    }

}

function game() {
    for (let i = 0; i<5 ; i++) {
        console.log(playRound(prompt("Rock, Paper or Scissors?")));
    }
}

