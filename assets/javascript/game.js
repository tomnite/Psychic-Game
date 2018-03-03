var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Declared variables for tracking players wins, losses, & guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];


//First letter selected
window.onload = function() {
	var compGuess = letters[Math.floor(Math.random() * letters.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}


//Game - listens for onkeyup event (player guess)
document.onkeyup = function(event) {
	var userGuess = event.key;
	lettersGuessed.push(userGuess);
	console.log(computerGuess[0]);

//If the user's guess is correct, add one to the wins counter and start another round
if ((userGuess === computerGuess[0]) && (guessesLeft > 0)) {
	wins++;
	guessesLeft = 9;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = letters[Math.floor(Math.random() * letters.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}

//If the user's guess is wrong, subtract 1 from guesses left (unless guessesLeft is zero)
else if ((userGuess !== computerGuess[0]) && (guessesLeft > 0)) {
	guessesLeft = guessesLeft-1;
}

//If the guessesLeft is zero, add 1 to the losses and start another round
else {
	losses++;
	guessesLeft = 9;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = letters[Math.floor(Math.random() * letters.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}

//Replace the text in the div with game id
var html = "<h2>Can you guess what letter I'm thinking of ???</h2>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>You have " + guessesLeft + " guesses left.</p>" +
          "<p>Your guesses so far: " + lettersGuessed + " </p>";
 
document.querySelector("#game").innerHTML = html;

}
