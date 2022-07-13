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

/* function to compare player choice and computer choice and output winner. computerSelection passes computerPlay function*/
function playRound( playerSelection, computerSelection = computerPlay() ) {
    //create variable to make user input case insensitive
    let playerSelectionAllCaps = playerSelection.toUpperCase()
    //create variables to store strings to reduce verbosity
    const win = `${playerSelectionAllCaps} beats ${computerSelection}. You win!`;
    const lose = `${computerSelection} beats ${playerSelectionAllCaps}. You lose...`;
    const tie = `${playerSelectionAllCaps} vs ${computerSelection}. It's a tie.`;
    /*compare possible player choices with each possible computer choice
    and return result of round*/

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

function game() {
    //create int variable userScore to store user score
    let userScore = 0;
    //create int variable computerScore to store computer score
    let computerScore = 0;
    //create string variable playerSelection to store user input
    let playerSelection;
    //create string variable roundResult to store return from playRound
    let roundResult;
    //loop to play game 5 times
    for( let i = 0; i < 5; i++ ) {
        //prompt for user input and store in playerSelection
        playerSelection = prompt( "Please enter rock, paper, or scissors: " );
        //pass user input to playRound()
        //store return in roundResult
        roundResult = playRound( playerSelection );
        //search roundResult for win lose tie
        //if win add 1 to userScore
        if ( roundResult.includes( "win" ) ) {
            userScore += 1;
        //if lose add 1 to computerScore
        } else if( roundResult.includes( "lose" ) ) {
            computerScore += 1;
        }
        //print playRound result
        console.log( roundResult );
    }//end loop
    //create string finalScore so I dont have to type it twice
    let finalScore = `The final score is: \n` +
                     `You: ${userScore}\n` +
                     `The Computer: ${computerScore}`;
    //compare score
    if( userScore > computerScore ) {
    //if userScore win print score and win message
        console.log(`${finalScore}\nYou Win!!!!`);
    //if comptureScore win print score and lose message 
    } else if( userScore < computerScore ) {
        console.log(`${finalScore}\nYou Lose...`);
    //if by some miracle its a tie
    } else {
        console.log(`${finalScore}\nHoly Cow! FIVE TIES IN A ROW!`);
    }
}

//BEGIN THE GAME!!!!!!!
game();