let humanScore = 0;
let computerScore = 0;
const runTimes = 5

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

function getHumanChoice() {
    console.log("We are playing Rock Paper Scissors")
    let value = prompt("Please enter either ROCK, PAPER or SCISSORS: ");
    let result = value.toUpperCase()
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

console.log("Hello!");
for (let i = 0; i < runTimes; i++) {
    const humanChoice = getHumanChoice();
    console.log("You Choose " + humanChoice);
    const computerChoice = getComputerChoice();
    console.log("Computer Chooses " + computerChoice);
    const result = playRound(humanChoice, computerChoice);
    console.log(result);
    console.log("Score: you " + humanScore + " computer " + computerScore);
}
