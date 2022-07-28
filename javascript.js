//initialize scores
let computerScore = 0;
let userScore = 0;

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
        //create variables to store strings to reduce verbosity
        let win = false;
        let lose = false;
        
        //player chooses rock
        if( playerSelection === "ROCK" ) {
            if( computerSelection === "SCISSORS" ) {
                win = true;
            } else if( computerSelection === "PAPER" ) {
                lose = true;
            }
        //player chooses scissors
        } else if( playerSelection === "SCISSORS" ) {
            if( computerSelection === "PAPER" ) {
                win = true;
            } else if( computerSelection === "ROCK" ) {
                lose = true;
            }
        //player chooses paper
        } else {
            if( computerSelection === "ROCK" ) {
                win = true;
            } else if( computerSelection === "SCISSORS" ) {
                lose = true;
            }
        }
        return gameResult(win , lose , playerSelection, computerSelection);
    }
    /* function to loop request input from user and pass to playRound() 5x */
    function gameResult(win, lose, playerSelection, computerSelection) {
        
        //pass result string to dialogue
        let result = document.querySelector("#dialogue");
        //scores
        let userScoreDisplay = document.querySelector(".user-score");
        let computerScoreDisplay = document.querySelector(".computer-score");
        //allow quit
        //evaluate result
        if(win) {
            result.textContent = `BLASTED! ${playerSelection} beats ${computerSelection}. You win...`;
            userScore += 1;
            displayScore(true);
        } else if(lose) {
            result.textContent = `HA! ${computerSelection} beats ${playerSelection}. You Lose!`;
            computerScore += 1;
            displayScore(true);
        } else {
            result.textContent = `Hmmm... ${computerSelection} and ${playerSelection}. Draw. Try Again!`;
        }        
    } 
    
    function displayScore(isDisplayed) {
        if(!isDisplayed) {  
            const score = document.querySelector("#score-container");
            let userScoreDisplay = document.createElement("p");
            let computerScoreDisplay = document.createElement("p");
            userScoreDisplay.className = "user-score";
            computerScoreDisplay.className = "computer-score";
            score.appendChild(userScoreDisplay);
            score.appendChild(computerScoreDisplay);
            userScoreDisplay.textContent = `User Score: ${userScore}`;
            computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
        } else {
            let userScoreDisplay = document.querySelector(".user-score");
            let computerScoreDisplay = document.querySelector(".computer-score");
            userScoreDisplay.textContent = `User Score: ${userScore}`;
            computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
            displayWinner(userScore, computerScore);
            }
        }

    function displayWinner(userScore, computerScore) {
        if(userScore < 5 && computerScore < 5 ) {
            return;
        } else {
            let rpsContainer = document.querySelector(".rps-container");
            let surrenderButton = document.querySelector(".surrender");
            let dialogue = document.querySelector("#dialogue");
            dialogue.textContent = (userScore > computerScore ?
                "You have bested me, but the fiddle was a lie..." :
                "YOU FOOL! Your soul is forfeit!");
            dialogue.style.fontSize = "48px";
            rpsContainer.remove();
            surrenderButton.remove();
            setTimeout(() => location.reload(), 3000);
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
        addButtons(gameScreen, dialogue );
        
    }
    //create buttons and surrender functionality
    function addButtons (gameScreen, dialogue) {
        let buttonContainer = document.createElement("div");
        let continueButton = document.createElement("button");
        let surrenderButton = document.createElement("button");
        surrenderButton.className = "surrender";
        buttonContainer.className = "button-container";
        continueButton.setAttribute("type" , "button" );
        surrenderButton.setAttribute("type" , "button" );

        continueButton.textContent = "SOUNDS FUN"
        surrenderButton.textContent = "NOT TODAY, SATAN"
        gameScreen.appendChild(buttonContainer);
        buttonContainer.appendChild(continueButton);
        buttonContainer.appendChild(surrenderButton);

        //exit game early
        surrenderButton.addEventListener("click", () => {
                 dialogue.textContent = "Coward. Begone with You!"
                 dialogue.style.fontSize = "48px";
                 setTimeout(() => location.reload(), 1500);
                 continueButton.remove();
                 surrenderButton.remove();
        })

        continueButton.addEventListener("click" , () => {
            rps(gameScreen , continueButton, surrenderButton, buttonContainer);
            //display scores    
            displayScore(false)
            let scoreContainer = document.querySelector("#score-container");
            surrenderButton.remove();
            scoreContainer.appendChild(surrenderButton);
            surrenderButton.style.marginLeft = "-200px";
        })
    }
    //display rock paper and scissors for player selection
    function rps(gameScreen, continueButton, surrenderButton, buttonContainer) {
        //display game ui
        let rpsContainer = document.createElement("div");
        rpsContainer.className = "rps-container";
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
        surrenderButton.addEventListener("click" , () => {
            rock.remove();
            paper.remove();
            scissors.remove();

        })

        rpsContainer.appendChild(rock);
        rpsContainer.appendChild(paper);
        rpsContainer.appendChild(scissors);
        gameScreen.insertBefore(rpsContainer , buttonContainer);

        //add game functionality until user surrenders
        rock.addEventListener("click" , () => {
            playRound("ROCK") } )
        paper.addEventListener("click" , () => {
            playRound("PAPER")} )
        scissors.addEventListener("click" , () => {
            playRound("SCISSORS")} )

    }

        
    
    fullGame();
    
    
    //BEGIN THE GAME!!!!!!!
    //game();