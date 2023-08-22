const choices = ["rock", "paper", "scissors"];

function computerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function play(playerChoice) {
    const compChoice = computerChoice();
    const result = determineWinner(playerChoice, compChoice);
    document.getElementById("result").innerText = `You chose ${playerChoice}, computer chose ${compChoice}. ${result}`;
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

document.getElementById("rock").addEventListener("click", () => play("rock"));
document.getElementById("paper").addEventListener("click", () => play("paper"));
document.getElementById("scissors").addEventListener("click", () => play("scissors"));
