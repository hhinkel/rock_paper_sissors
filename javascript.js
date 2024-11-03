let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let max = 3;
    let choice = Math.floor(Math.random() * max);
    switch (choice){
        case 0:
            return "ROCK"
        case 1:
            return "PAPER"
        case 2:
            return "SCISSORS"
    }
}

function getHumanChoice(result) {
    if ((result === "ROCK") || (result === "PAPER") || (result === "SCISSORS")) {
        return result
    } else {
        return "ERROR"
    }
}

function playRound(human, computer) {
    if (human === "ERROR") {
        return "Invalid entry try again"
    } else if (human === computer) {
        return "Tie, no winner, no points";
    } else if ((human === "ROCK") && (computer === "SCISSORS")) {
        humanScore++;
        return "You win, " + human + " beats " + computer + ".";
    } else if ((human === "SCISSORS") && (computer === "PAPER")) {
        humanScore++;
        return "You win, " + human + " beats " + computer + ".";
    } else if ((human === "PAPER") && (computer === "ROCK")) {
        humanScore++;
        return "You win, " + human + " beats " + computer + ".";
    } else {
        computerScore++;
        return "You lose, " + computer + " beats " + human + ".";
    }
}

function determineResults(target) {
    humanChoice = target.textContent;
    const humanResult  = document.createElement('div');
    humanResult.textContent = "You Choose " + humanChoice;
    resultDiv.appendChild(humanResult);

    computerChoice = getComputerChoice();
    const computerResult  = document.createElement('div');
    computerResult.textContent = "Computer Chooses " + computerChoice;
    resultDiv.appendChild(computerResult);

    const result = playRound(humanChoice, computerChoice);
    const resultText  = document.createElement('div');
    resultText.textContent = result;
    resultDiv.appendChild(resultText);

    const score = document.createElement('div');
    score.textContent = "Score: you " + humanScore + " computer " + computerScore;
    resultDiv.appendChild(score);

    if (humanScore === 5 || computerScore === 5) declareWinner(); 

    results.appendChild(resultDiv)
}

function declareWinner() {
    const winner = document.createElement('div');

    if (humanScore === 5) {
        winner.textContent = "Congratulations! You have won! " + humanScore + " to " + computerScore;
    } else {
        winner.textContent = "Sorry, you have lost. " + humanScore + " to " + computerScore;
    }

    resultDiv.appendChild(winner);
    resetGame();
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;

}

const body = document.querySelector('body');

const resultDiv = document.createElement('div')
const results = document.getElementById("results")

let buttons = document.querySelector('#buttons')

buttons.addEventListener('click', (event) => {
    let target = event.target;

    determineResults(target);
});
