let correct = false;
let userSelection = "";
while(!correct){
    userSelection = prompt("Please enter rock, paper or scissors...:");
    userSelection = userSelection.toUpperCase();
    if (userSelection == "ROCK" || userSelection == "PAPER" || userSelection == "SCISSORS"){
        correct = true;
    }
}
let randomNumber = Math.random();
let computerSelection = "";
if(randomNumber<0.35){
    computerSelection = "PAPER";
}else if(randomNumber<0.68){
    computerSelection = "SCISSORS";
}else {
    computerSelection = "ROCK";
}

console.log("User choice is: "+ userSelection)
console.log("Computer choice is: "+ computerSelection)

const userWin= "User Wins";
const computerWins = "Computer Wins";
const tie = "It's a tie!";

let win = "";
if (userSelection == "PAPER" && computerSelection == "PAPER"){
    win = tie;
}else if(userSelection == "PAPER" && computerSelection == "ROCK"){
    win = userWin;
}else if(userSelection == "PAPER" && computerSelection == "SCISSORS"){
    win = computerWins;
}else if (userSelection == "ROCK" && computerSelection == "PAPER"){
    win = computerWins;
}else if(userSelection == "ROCK" && computerSelection == "ROCK"){
    win = tie;
}else if(userSelection == "ROCK" && computerSelection == "SCISSORS"){
    win = userWin;
}else if (userSelection == "SCISSORS" && computerSelection == "PAPER"){
    win = userWin;
}else if(userSelection == "SCISSORS" && computerSelection == "ROCK"){
    win = computerWins;
}else if(userSelection == "SCISSORS" && computerSelection == "SCISSORS"){
    win = tie;
}

console.log(win)