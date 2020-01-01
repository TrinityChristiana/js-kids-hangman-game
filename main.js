//Pick random word
const words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
]

//Chooses random word
let randomWord = words[Math.floor(Math.random() * words.length)];

//Creates array to keep track of guessed words
let createGuessArray = (word) => {
    let array = [];
    for(let i = 0; i < word.length; i++){
        array.push(" _ ");
    }
    return array;
}
let guessedArray = createGuessArray(randomWord);

//Keeps track of remaining letters user has to guess
let remainingLetters = randomWord.length - 1;

//holds player's guess
let guess;

// Hold Amoujt of guesses left
let guessesLeft = ["head", "left leg", "right leg", "left arm", "right arm", "body"];

//Shows guesses on dom
$(".container").html(`
<h1> Welcome to Trinity's Hangman Game</h1>
<h2 id="instruct">Guess the word below by using your keyboard</h2>
<p id="guessesLeft">You have 6 guesses left: ${guessesLeft.join(", ")}<p/>
<p id="userFeedback"></p>

<p style="font-size: 72px" id="guessedArray">${guessedArray.join(" ")}</p>
<p style="font-size: 72px" id="guessedLetters"></p>
`)

//Gets the guess from the user
let lettersGuessed = [];

//Main Game Code
let getGuess = (guess) => {
    if(remainingLetters > 0){
        //gets guess from keypress
        if (lettersGuessed.includes(guess)){
            $("#userFeedback").html('You aready guess this letter');
        } else {
            $("#userFeedback").html('');
            lettersGuessed.push(guess);
            let holdRemaining = remainingLetters;
            //Shows the guessed array
            for (var j = 0; j < randomWord.length++; j++){
                if (randomWord[j] === guess){
                    guessedArray[j] = guess;
                    remainingLetters--;
                }
            }
            $("#guessedArray").html(`${guessedArray.join(" ")}`);
            if (holdRemaining == remainingLetters){
                guessesLeft.shift();
                if (guessesLeft.length > 0){
                    $("#guessesLeft").html(`You have ${guessesLeft.length} guesses left: ${guessesLeft.join(", ")}`);
                } else {
                    $("#instruct").html(`Good Job! the answer was:`);
                    $("#guessesLeft").html(`Refresh to play again!`);
                    $("#guessedArray").html(`${randomWord}`);
                    remainingLetters = 0;
                }
            }
        }    
        $('#guessedLetters').html(`${lettersGuessed.join(", ")}`)
    } else {
        $("#instruct").html(`Good Job! the answer was:`);
        $("#guessesLeft").html(`Refresh to play again!`);
        $("#guessedArray").html(`${randomWord}`);
    }
};

$(document).keypress(function(event){
    let letter = String.fromCharCode(event.which)
    if (/[a-z]/i.test(letter)) {
        getGuess(letter);
    }
     
});

//allow player to select list
//allow player to add a word
//add styling
//add letter buttons for mobile
//add more messages for fun user interaction
