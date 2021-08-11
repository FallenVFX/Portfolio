let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}


function compareGuesses(currentHumanGuess, computerGuess, target) {
    let humanAccuracy = Math.abs(currentHumanGuess - target);
    let compAccuracy = Math.abs(computerGuess - target);
    if (humanAccuracy <= compAccuracy) {
        return true;
    } else {
        return false;
    }
}

function updateScore(str) {
    if (str === "human") {
        humanScore++;
    } else if (str === "computer") {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}