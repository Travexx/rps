

let humanScore = 0;
let computerScore = 0;

const buttonContainer = document.querySelector("#buttonContainer");


const rockButton = document.createElement("button");
rockButton.classList.add("rpsButton");
rockButton.id = "rock";
rockButton.textContent = "rock";

const paperButton = document.createElement("button");
paperButton.classList.add("rpsButton");
paperButton.id = "paper";
paperButton.textContent = "paper";

const scissorsButton = document.createElement("button");
scissorsButton.classList.add("rpsButton");
scissorsButton.id = "scissors";
scissorsButton.textContent = "scissors";

buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorsButton);


const buttons = document.querySelectorAll("button");

const scoreCard = document.createElement("div");
scoreCard.id = "scoreCard";
scoreCard.style.marginTop = "10px";

buttonContainer.after(scoreCard);

function getComputerChoice(){
    let rand = Math.random();
    if(rand <.33 ) {
        return "rock";
    } else if (rand < .66){
        return "paper";
    } else {
        return "scissors";
    }
}



buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanSelection = button.id;
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Human: ", humanScore, "- Computer:", computerScore);
        if(humanScore === 5 || computerScore === 5) {
            if(humanScore === 5){
                scoreCard.textContent= "Player Wins the Game!";
            } else {
                scoreCard.textContent= "Computer Wins the Game!";
            }
        }
    })
})

function playGame(score){
    while(score < 5){
        const humanSelection = getHumanChoice;
        const computerSelection = getComputerChoice();
    }
}

/*function getHumanChoice(){
    let humanInput = window.prompt("rock, paper, or scissors?");
    return humanInput.toLowerCase();
}*/



function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        console.log("It's a Tie!");
    } else if (
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log("Player Wins!")
        humanScore++;
    } else {
        console.log("Computer Wins!");
        computerScore++;
    }
}



/* function playGame(rounds){
    for (let i = 0; i < rounds; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}



let rounds = 5;
playGame(rounds); */


console.log("Human Score:", humanScore);
console.log("Computer Score:", computerScore);