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
let remainingLetters = randomWord.length;

//holds player's guess
let guess;

// Hold Amoujt of guesses left
let guessesLeft = ["head", "left leg", "right leg", "left arm", "right arm", "body"];

//Shows guesses on dom
$(".container").html(`
<h1> Welcome to Trinity's Hangman Game</h1>
<h2 id="instruct">Guess the word below by using your keyboard</h2>
<p id="guessesLeft">You have 6 guesses left: ${guessesLeft.join(", ")}<p/>
<p id="guessFeedback"></p>
<p style="font-size: 72px" id="guessedArray">${guessedArray.join(" ")}</p>
`)


//Gets the guess from the user



let getGuess = (letter) => {
    if(remainingLetters > 0){
        //gets guess from keypress
        guess = letter;
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
                console.log(guessesLeft.length);
                
    
            } else {
                $("#instruct").html(`Good Job! the answer was:`);
                $("#guessesLeft").html(`You have ${guessesLeft.length} guesses left.`);
                $("#guessedArray").html(`${randomWord}`);
                
            }
            
        }

        //Update Guesses Left message

        //Update answerArray and remaining letters for each correct guess
        
        // console.log(remainingLetters);
    } else {
        $("#instruct").html(`Good Job! the answer was:`);
        $("#guessedArray").html(`${randomWord}`);
    }
    
};

//Takes keypressed as a guess
$(document).keyup(function (key){
    switch (key.keyCode){
        case 65:
            getGuess("a");
            break;
        case 66:
            getGuess("b");
            break;
        case 67:
            getGuess("c");
            break;
        case 68:
            getGuess("d");
            break;
        case 69:
            getGuess("e");
            break;
        case 70:
            getGuess("f");
            break;
        case 71:
            getGuess("g");
            break;
        case 72:
            getGuess("h");
            break;
        case 73:
            getGuess("i");
            break;
        case 74:
            getGuess("j");
            break;
        case 75:
            getGuess("k");            
            break;
        case 76:
            getGuess("l");            
            break;
        case 77:
            getGuess("m");            
            break;
        case 78:
            getGuess("n");            
            break;
        case 79:
            getGuess("o");            
            break;
        case 80:
            getGuess("p");            
            break;
        case 81:
            getGuess("q");            
            break;
        case 82:
            getGuess("r");            
            break;
        case 83:
            getGuess("s");            
            break;
        case 84:
            getGuess("t");            
            break;
        case 85:
            getGuess("u");            
            break;
        case 86:
            getGuess("v");            
            break;
        case 87:
            getGuess("w");            
            break;
        case 88:
            getGuess("x");            
            break;
        case 89:
            getGuess("y");            
            break;
        case 90:
            getGuess("z");            
            break;

    }
});



//Limit guesses
//Fix how player can guess the same letter multipl ties and the remaining letters will still decrese. 
//Tell player what to dowhen they finish
//allow player to select list
//allow player to add a word
//add styling
//add letter buttons for mobile
//add more messages for fun user interaction
