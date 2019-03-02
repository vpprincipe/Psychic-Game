var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]
var randomLetter;
var wins = 0;
var loses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var computerGuessed = [];

//Picks a random letter//
var pickRandomLetter = function() {
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
}


var resetGame = function(won) {
    if(won){
        wins++
    }else{
        loses++
    }
    document.getElementById("wins").innerText = wins 
    document.getElementById("loses").innerText = loses
    guessesLeft = 10;
    lettersGuessed = [];
    pickRandomLetter()
    document.getElementById("guessesLeft").innerText = guessesLeft;
    document.getElementById("lettersGuessed").innerText="Letter's Already Guessed: "

}

//compares player choice w/ random letter picked
var compareLetter = function(letter) {
    if(randomLetter === letter) {
        resetGame(true);
    } else {
        if (lettersGuessed.indexOf(letter)===-1) {
        guessesLeft--;
        lettersGuessed.push(letter);
        document.getElementById("lettersGuessed").innerText+=(" "+letter)
        if (guessesLeft === -1) {
            alert("You Loose, nerd!");
            resetGame();
        } else {
            document.getElementById("guessesLeft").innerText = guessesLeft;
        }
     }

    }
}

//player choice recognition
var playerGuess = function(event) {
        var letters = /^[a-z]+$/;
    if(event.key.match(letters)) {
       
        compareLetter(event.key)

    }
         
}

pickRandomLetter()

document.addEventListener("keyup", playerGuess)

document.getElementById("lettersGuessed").innerText += lettersGuessed;
document.getElementById("guessesLeft").innerText = guessesLeft;
document.getElementById("wins").innerText = wins 
document.getElementById("loses").innerText = loses
