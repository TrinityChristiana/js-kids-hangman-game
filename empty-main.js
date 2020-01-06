const mainWords = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];

const animals = [
    "alligator",
    "bear",
    "camel",
    "deer",
    "eagle",
    "fish",
    "giraffe",
    "hamster",
    "kangaroo",
    "lion",
    "monkey",
    "octopus",
    "panda",
    "rabbit",
    "scorpion",
    "tiger",
    "wolf",
    "zebra"
]

const hard = [
    "awkward",
    "bagpipes",
    "croquet",
    "dwarves",
    "fervid",
    "gazebo",
    "haiku",
    "ivory",
    "kayak",
    "memento",
    "numbskull",
    "ostracize",
    "pajama",
    "quad",
    "rhythmic",
    "sphinx",
    "toady",
    "waxy",
    "yacht",
    "zealous"
];

let changeWords = (wordArrays) => {
    words = wordArrays;
    runGameCode();
    console.log(randomWord);

};

let words = mainWords;
let randomWord;

let runGameCode = () => {
    //Chooses random word
    randomWord = words[Math.floor(Math.random() * words.length)];

    //Creates array to keep track of guessed words
    let createGuessArray = (word) => {
        let array = [];
        for(let i = 0; i < word.length; i++){
            array.push(" _ ");
        }
        return array;
    };

    let guessedArray = createGuessArray(randomWord);

    //Keeps track of remaining letters user has to guess
    let remainingLetters = randomWord.length - 1;

    //holds player's guess
    let guess;

    // Hold Amoujt of guesses left
    let guessesLeft = ["head", "left leg", "right leg", "left arm", "right arm", "body"];

    //Shows guesses on dom
    $(".container").html(`
    <nav> 
        <ul>
            <li style="font-size: 20px;">Word Collection</li>
            <li onclick="changeWords(mainWords)">Main Words</li>
            <li onclick="changeWords(animals)">Animals</li>
            <li ><a onclick="changeWords(hard)">Difficult Words</a></li>
        </ul>
    <nav>
    <h1> Welcome to Trinity's Hangman Game</h1>
    <h2 id="instruct">Guess the word below by using your keyboard</h2>
    <p id="guessesLeft">You have 6 guesses left: ${guessesLeft.join(", ")}<p/>
    <p id="userFeedback"></p>

    <p style="font-size: 72px" id="guessedArray">${guessedArray.join(" ")}</p>
    <p style="font-size: 72px" id="guessedLetters"></p>
    `);

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
                for (var j = 0; j < randomWord.length; j++){
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
                        $("#instruct").html(`Sorry, the answer was:`);
                        $("#guessesLeft").html(`Refresh to play again!`);
                        $("#guessedArray").html(`${randomWord}`);
                        remainingLetters = 0;

                    }
                }
            }    
            $('#guessedLetters').html(`${lettersGuessed.join(", ")}`);
            console.log(remainingLetters);
        } else{
            $("#instruct").html(`Good Job! You guessed the answer:`);
            $("#guessesLeft").html(`Refresh to play again!`);
            $("#guessedArray").html(`${randomWord}`);
        }
    };

    $(document).keypress(function(event){
        let letter = String.fromCharCode(event.which);
        if (/[a-z]/i.test(letter)) {
            getGuess(letter);
        } 
    });
};

runGameCode();

//allow player to select list
//allow player to add a word
//add styling
//add letter buttons for mobile