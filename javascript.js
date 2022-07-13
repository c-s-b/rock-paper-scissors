/*create a method to randomly return rock, paper, or scissors*/
function computerPlay() {
//Create an int variable to store a number between 1 and 3
let randomNumber = Math.floor( Math.random() * 3 ) + 1;
//Create a string variable to store "rock" "paper" or "scissors"
let computerChoice;
/*store "ROCK "PAPER" or "SCISSORS" in computerChoice based on result of randomNumber*/
if( randomNumber === 1 ) {
    computerChoice = "ROCK";
} else if (randomNumber === 2 ) {
    computerChoice = "PAPER";
} else {
    computerChoice = "SCISSORS";
}
//return the selected string
return computerChoice;
}

/* function to compare player choice and computer choice and output string which declares the winner. computerSelection passes computerPlay function*/
function playRound( playerSelection, computerSelection = computerPlay() ) {
    //create variable to make user input case insensitive
    let playerSelectionAllCaps = playerSelection.toUpperCase()
    //create variables to store strings to reduce verbosity
    const win = `${playerSelectionAllCaps} beats ${computerSelection}. You Win!`;
    const lose = `${computerSelection} beats ${playerSelectionAllCaps}. You Lose...`;
    const tie = `${playerSelectionAllCaps} vs ${computerSelection}. It's a tie.`;
    /*compare possible player choices with each possible computer choice
    and return result of round*/

    //TEST
    console.log(playerSelectionAllCaps);
    console.log(computerSelection);
    //player chooses rock
    if( playerSelectionAllCaps === "ROCK" ) {
        if( computerSelection === "SCISSORS" ) {
            return win;
        } else if( computerSelection === "PAPER" ) {
            return lose;
        } else {
            return tie;
        }
    //player chooses scissors
    } else if( playerSelectionAllCaps === "SCISSORS" ) {
        if( computerSelection === "PAPER" ) {
            return win;
        } else if( computerSelection === "ROCK" ) {
            return lose;
        } else {
            return tie;
        }
    //player chooses paper
    } else {
        if( computerSelection === "ROCK" ) {
            return win;
        } else if( computerSelection === "SCISSORS" ) {
            return lose;
        } else {
            return tie;
        }
    }
}
console.log(playRound("scissors"));