# rock-paper-scissors

This is a program that will run a r-p-s game against the computer from the devtools console - it will later be updated with a GUI.

I hope to demonstrate and practice javascript knowledge and implementation
This program was first written as an algorithm and psuedocode

The core game includes functions:
-computerPlay() which selects a random entry of rock paper or scissors
-playRound() which compares a playerSelection string to the result of computerPlay() to return a win/lose/tie string
-game() which asks for user input and calls playRound() 5 times. Each round the function searches the playRound return for the words win or lose in order to count the score for the user. It then prints to console the final score and win/lose message

The comments are numerous to show the psuedocode/planning prior to writing the code
