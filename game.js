//create secretNumber
var secretNumber = 4;
//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
//check if guess is right
if(guess === secretNumber){
    alert("You guessed correctly!");
} else if(guess < 4){
    alert("You guessed too low, guess again!");
} else {
    alert("You guessed too high");
}
