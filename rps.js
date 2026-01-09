const choices = [];
choices.push("rock", "paper", "scissors");

let humanScore = 0;
let computerScore = 0;
let roundsCount = 0;
let winningScore = 0;

const startBtn = document.getElementById("startBtn");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

let nbRounds = document.getElementById("nbRounds");
let matchLenghtMsg = document.getElementById("matchLength");
let roundResultMsg = document.getElementById("roundResults");
let matchResultMsg = document.getElementById("matchResults");
let humanScoreMsg = document.getElementById("humanScore");
let computerScoreMsg = document.getElementById("computerScore");

startBtn.addEventListener("click", () => {
    verifyNumberOfRounds();
});

rockBtn.addEventListener("click", () => {
    playGame("rock");
});

scissorsBtn.addEventListener("click", () => {
    playGame("scissors");
});

paperBtn.addEventListener("click", () => {
    playGame("paper");
});

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("rock, paper or scissors").toLowerCase();
}

function judge(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 0;
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            return -1;
        } else {
            return 1;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            return -1
        } else {
            return 1;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            return -1;
        } else {
            return 1;
        }
    } else {
        console.log("invalid user input");
        return -999;
    }
}


function verifyNumberOfRounds() {

    if (nbRounds.value < 0) {
        alert("enter a valid number of rounds");
    } else {
        initializeGame(parseInt(nbRounds.value));
    }

}



function initializeGame(numberRounds) {
    humanScore = 0;
    computerScore = 0;
    if (numberRounds % 2 === 0) numberRounds += 1;
    roundsCount = numberRounds;
    console.log(`Game of ${numberRounds} rounds`);
    winningScore = Math.ceil(numberRounds / 2);
    matchLenghtMsg.innerText = `Game of ${numberRounds} rounds. First to ${winningScore} wins.`;
    humanScoreMsg.innerText = `Human: ${humanScore}`;
    computerScoreMsg.innerText = `Computer: ${computerScore}`;
    roundResultMsg.innerText = "";
    matchResultMsg.innerText = "";
}

function playGame(move) {
    if (humanScore < winningScore && computerScore < winningScore) {
        let msg = "";
        let humanChoice = move;
        let hcmsg = `Human choice: ${humanChoice}`;
        console.log(hcmsg);
        msg += hcmsg;
        let computerChoice = getComputerChoice();
        let ccmsg = `Computer choice: ${computerChoice}`;
        console.log(ccmsg);
        msg += (". " + ccmsg);
        let result = judge(humanChoice, computerChoice);
        let jmsg = "";
        if (result === 1) {
            jmsg += "Human wins this round";
            console.log(jmsg);
            humanScore++;
        } else if (result === -1) {
            jmsg += "Computer wins this round";
            console.log(jmsg);
            computerScore++;
        } else {
            jmsg += "No winner";
            console.log(jmsg);
        }
        msg += (". " + jmsg);
        roundResultMsg.innerText = msg;
        humanScoreMsg.innerText = `Human: ${humanScore}`;
        computerScoreMsg.innerText = `Computer: ${computerScore}`;
        console.log(`Human score: ${humanScore}. \nComputer score: ${computerScore}.`);
    }
    
    if(humanScore >= winningScore || computerScore >= winningScore){
        let winner = "";
        humanScore > computerScore ? winner += "Human" : winner += "Computer";
        let winmsg = `${winner} wins the game.`;
        matchResultMsg.innerText = winmsg;
        console.log(winmsg);
    }
    
}


//other exercises

function camelize(text) {
    let words = text.split("-");
    let result = words[0];
    for (let i = 1; i < words.length; i++) {
        let letters = words[i].split('');
        letters[0] = words[i][0].toUpperCase();
        let word = letters.join('');
        console.log(word);
        result += word;
    }
    return result;
}


function filterRange(arr, min, max) {
    return arr.filter((num) => num >= min && num <= max);
}


function filterRangeInPlace(arr, min, max) {
    const newArr = arr.filter((num) => num >= min && num <= max);
    arr.splice(0, arr.length, ...newArr);
}

function sortUp(arr) {
    return arr.sort((a, b) => a - b);
}

function sortDown(arr) {
    return arr.sort((a, b) => b - a);
}

function copySortedDown(arr) {
    const arrCopy = arr.map((num) => num);
    return arrCopy.sort((a, b) => b - a);
}
