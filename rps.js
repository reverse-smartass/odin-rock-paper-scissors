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

//other exercises

function camelize(text){
    let words = text.split("-");
    let result = words[0];
    for(let i = 1; i < words.length; i++){
      let letters = words[i].split('');
      letters[0] = words[i][0].toUpperCase();
      let word = letters.join('');
      console.log(word);
      result += word;
    }
    return result;
  }


function filterRange(arr, min, max){
    return arr.filter((num) => num >= min && num <=max );
  }


function filterRangeInPlace(arr, min, max){
    const newArr = arr.filter((num) => num >= min && num <=max );
    arr.splice(0, arr.length, ...newArr);
  }

function sortUp(arr){
    return arr.sort((a,b) => a - b);
}

function sortDown(arr){
    return arr.sort((a,b) => b - a);
}

function copySortedDown(arr){
    const arrCopy = arr.map((num) => num);
    return arrCopy.sort((a,b) => b - a);
}
