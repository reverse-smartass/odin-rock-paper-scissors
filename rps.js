const choices = [];
choices.push("rock", "paper", "scissors");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice(){
    return prompt("rock, paper or scissors").toLowerCase();
}

function judge(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return 0;
    }else if(humanChoice === "rock"){
        if(computerChoice === "paper"){
            return -1;
        }else{
            return 1;
        }
    }else if(humanChoice === "paper"){
        if(computerChoice === "scissors"){
            return -1
        }else{
            return 1;
        }
    }else if(humanChoice === "scissors"){
        if(computerChoice === "rock"){
            return -1;
        }else{
            return 1;
        }
    }else{
        console.log("invalid user input");
        return -999;
    }
}

function playGame(numberRounds){
    humanScore = 0;
    computerScore = 0;
    if(numberRounds % 2 === 0) numberRounds+=1;
    console.log(`Game of ${numberRounds} rounds`);
    let winningScore = Math.ceil(numberRounds/2);
    while (humanScore < winningScore && computerScore < winningScore){
        let humanChoice = getHumanChoice();
        console.log(`Human choice: ${humanChoice}`);
        let computerChoice = getComputerChoice();
        console.log(`Computer choice: ${computerChoice}`);
        let result = judge(humanChoice, computerChoice);
        if(result === 1){
            console.log("Human wins this round");
            humanScore++;
        }else if(result === -1){
            console.log("Computer wins this round");
            computerScore++;
        }else{
            console.log("No winner");
        }
        console.log(`Human score: ${humanScore}. \nComputer score: ${computerScore}.`);
    }
    let winner = "";
    humanScore > computerScore ? winner += "Human" : winner += "Computer" ;
    console.log(`${winner} wins the game.`);
}