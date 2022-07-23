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
        let playerSelectionAllCaps = playerSelection.toUpperCase();
        //create variables to store strings to reduce verbosity
        let win = false;
        let lose = false;
        let tie = false;
        
        //player chooses rock
        if( playerSelectionAllCaps === "ROCK" ) {
            if( computerSelection === "SCISSORS" ) {
                win = true;
            } else if( computerSelection === "PAPER" ) {
                lose = true;
            } else {
                tie = true;
            }
        //player chooses scissors
        } else if( playerSelectionAllCaps === "SCISSORS" ) {
            if( computerSelection === "PAPER" ) {
                win = true;
            } else if( computerSelection === "ROCK" ) {
                lose = true;
            } else {
                tie = true;
            }
        //player chooses paper
        } else {
            if( computerSelection === "ROCK" ) {
                win = true;
            } else if( computerSelection === "SCISSORS" ) {
                lose = true;
            } else {
                tie = true;
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
    //intitialize game
    function fullGame() {
       let gameScreen = document.querySelector(".game-screen");
        let startButton = document.querySelector("#start");
        let dialogue = document.createElement("p");
        dialogue.setAttribute("id", "dialogue");
        startButton.addEventListener("click", () => {
            intro( gameScreen, startButton, dialogue)
        });
    }
    //switch pages when user presses start
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
        addButtons( 1 , gameScreen, dialogue );
        
    }
    //create buttons and surrender functionality
    function addButtons (gameProgress , gameScreen, dialogue) {
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
        //exit game early
        surrenderButton.addEventListener("click", () => {
             if (gameProgress < 3) {
                 dialogue.textContent = "Coward. Begone with You!"
                 setTimeout(() => location.reload(), 1500);
             }
        })

        continueButton.addEventListener("click" , () => {
            if (gameProgress < 3) {
            rps(gameScreen , continueButton, surrenderButton, buttonContainer);    
           }
        })
    }
    //display rock paper and scissors for player selection
    function rps(gameScreen, continueButton, surrenderButton, buttonContainer) {
        let rpsContainer = document.createElement("div");
        let rock = document.createElement("img");
        rock.setAttribute("id" , "rock");
        rock.src = "./images/rock.png";
        rock.alt = "rock";
        let paper = document.createElement("img");
        paper.setAttribute("id" , "paper");
        paper.src = "./images/paper.png";
        paper.alt = "paper";
        let scissors = document.createElement("img");
        scissors.setAttribute("id" , "scissors");
        scissors.src = "./images/scissors.png";
        scissors.alt = "scissors";

        dialogue.textContent = "Choose Your Weapon";
        continueButton.remove();
        surrenderButton.textContent = "I SURRENDER";
        rpsContainer.appendChild(rock);
        rpsContainer.appendChild(paper);
        rpsContainer.appendChild(scissors);
        gameScreen.insertBefore(rpsContainer , buttonContainer);

        rock.addEventListener("click" , () => {
            playRound("ROCK") } )
        paper.addEventListener("click" , () => {
            playRound("PAPER")} )
        scissors.addEventListener("click" , () => {r
            playRound("SCISSORS")} )

    }

        
    
    fullGame();
    
    
    //BEGIN THE GAME!!!!!!!
    //game();