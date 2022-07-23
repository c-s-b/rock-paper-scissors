/*The computer randomly chooses rock, paper or scissors*/
function computerPlay() {
    let randomNumber = Math.floor( Math.random() * 3 ) + 1;
    let computerChoice;
    switch ( randomNumber ) {
        case 1: 
            computerChoice = "ROCK";
            break;
        case 2:
            computerChoice = "PAPER";
            break;
        case 3:
            computerChoice = "SCISSORS";
            break;
    }
    return computerChoice;
    }
    
    /*User needs to choose an option, which then needs to be compared to the computerPlay() result*/
    function playRound( playerSelection, computerSelection = computerPlay() ) {
        let playerSelectionAllCaps = playerSelection.toUpperCase()
        //create variables to store strings to reduce verbosity
        const win = `${playerSelectionAllCaps} beats ${computerSelection}. You win!`;
        const lose = `${computerSelection} beats ${playerSelectionAllCaps}. You lose...`;
        const tie = `${playerSelectionAllCaps} vs ${computerSelection}. It's a tie.`;
        
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
    /* function to loop request input from user and pass to playRound() 5x */
    function game() {
        //create int variable userScore to store user score
        let userScore = 0;
        //create int variable computerScore to store computer score
        let computerScore = 0;
        //create string variable playerSelection to store user input
        let playerSelection;
        //create string variable roundResult to store return from playRound
        let roundResult;
       
        //create string finalScore so I dont have to type it twice
        let finalScore = `The final score is: \n` +
                         `You: ${userScore}\n` +
                         `The Computer: ${computerScore}`;
        
        //display winner
        if( userScore > computerScore ) {
            console.log(`${finalScore}\nYou Win!!!!`);
        } else if( userScore < computerScore ) {
            console.log(`${finalScore}\nYou Lose...`);
        } else {
            console.log(`${finalScore}\nHoly Cow! A tie! What are the odds!!`);
        }
    }

    function fullGame() {
       let gameScreen = document.querySelector(".game-screen");
        let startButton = document.querySelector("#start");
        let dialogue = document.createElement("p");
        dialogue.setAttribute("id", "dialogue");
        startButton.addEventListener("click", () => {
            intro( gameScreen, startButton, dialogue)
        });
    }

    function intro( gameScreen, startButton, dialogue) {
        let ready = document.querySelector(".ready");
        let devil = document.createElement("img");
        devil.setAttribute("id","devil");
        devil.src = "./images/devil.png";
        devil.alt = "devil";
        dialogue.textContent = "Would you like to play a game of Rock, Paper, Scissors? \n If you win, you'll get the Golden Fiddle!"
        ready.remove();
        startButton.remove();
        gameScreen.appendChild(devil);
        gameScreen.appendChild(dialogue);
        addButtons( 1 , gameScreen );
        
    }

    function addButtons ( gameProgress , gameScreen) {
        let buttonContainer = document.createElement("div");
        let continueButton = document.createElement("button")
        let surrenderButton = document.createElement("button");
        buttonContainer.className = "button-container";
        continueButton.setAttribute("type" , "button" );
        surrenderButton.setAttribute("type" , "button" );

        if(gameProgress = 1) {
            continueButton.textContent = "SOUNDS FUN"
            surrenderButton.textContent = "NOT TODAY, SATAN"
            gameScreen.appendChild(buttonContainer);
            buttonContainer.appendChild(continueButton);
            buttonContainer.appendChild(surrenderButton);
        }
    }
    
    fullGame();
    
    
    //BEGIN THE GAME!!!!!!!
    //game();