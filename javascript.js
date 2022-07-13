/*create a method to randomly return rock, paper, or scissors*/
function computerPlay() {
//Create an int variable to store a number between 1 and 3
let randomNumber = Math.floor( Math.random() * 3 ) + 1;
//Create a string variable to store "rock" "paper" or "scissors"
let computerChoice;
//if the number 1 was picked store "Rock" in computerChoice
if( randomNumber === 1 ) {
    computerChoice = "ROCK";
//if 2 was picked store "Paper" in computerChoice
} else if (randomNumber === 2 ) {
    computerChoice = "PAPER";
//if 3 was picked store "Scissors" in computerChoice
} else {
    computerChoice = "SCISSORS";
}
//return the selected string
return computerChoice;
}


console.log(computerPlay());