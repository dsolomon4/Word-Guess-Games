//getting started
//var start = alert("Select letters to guess the word. You will recieve 10 tries. Let's begin");



/////variables for game
var game = {
    "scoreWin": 0, //wins for game
    "scoreLose": 0, //loss for game
    "countDown": 10, //countdown of guesses
    //"answerSpace": "_",
    "wordArray": ["usher", "aaliyah", "brandy", "lauren hill"],
    "wordSelected" : ' ',
    "wordSelectedArray" : [],
    "answerArray" : [],
    "incorrectArray" : [],
    "win": 'You win!',
    "lose": 'Game over!',
}

var gameRunning = false;

// connection to html
output = document.getElementById("output");
lives = document.getElementById("count-down");
guessInput = document.getElementById("guesses-made");
scoreDisplay = document.getElementById("score-display");

// messages on html
scoreDisplay.textContent = "You've won " + game.score + " many times"; 
lives.innerHTML = 'You have ' + game.countDown + ' lives remaining';
guessInput.innerHTML = "You've guessed " + game.answerArray + "already"




// game start

document.onkeyup = function(){

    // methods of the game
  
// objective of game
function gamePlay( ) {
    // if keyPressed not in the wordToGuess and not in the lettersGuessed the decrease number of guesses remaining
    if (this.wordArray.indexOf(game.userInput) < 0 && this.alphabet.indexOf(this.userInput) < 0) {
        this.countDown--;
        console.log(this.countDown)
    }
    // check to see if the letter was already guessed 
    if (this.alphabet.indexOf(this.userInput) == -1) {
        // not guessed yet so add to array
    this.alphabet.push(this.userInput);
    }
}

//word display 
function showWord(){
    // the words selected should display (answer"_" for each letter
    //once correct letter is guessed, reveal correct letter
    //if wrong letter is guessed, continue "_"
    
    var tempString = "<p>"; // display the paragraph from HTML
  for (var i = 0; i < this.word.length; i++) { // a for loop to show the vowels in the random word
      if (game.alphabet.includes(word[i].toLowerCase())) {
          tempString += word[i] + " "; //add randomWord to the temp string -- += means add to the string
      } else {
          tempString += "_ ";
 
       }
       
tempString += "</p>"; // end the paragraph
word.textContent = tempString; // change the content displayed on HTML
word.innerHTML = tempString // don't show the <p> or </p> around the word     
console.log (tempString)

output.innerHTML = word;
    }
}

function lettersGuessed(letter){
    // if the letter has been guessed
    //and it is not in the "word" 
    //reveal letter in the "answerArray"
    // after letter is revealed -1 from 
    var remainingLetters = word.length;
console.log(remainingLetters)
}

function gameOver(){
    //if guesses word is guessed before countDown is 0
    //alert(this.win)
    // add +1 to score
    // else word is not guessed and countdown reaches 0
    //alert (this.lose)
}

function newWord(){
    //if word has been guessed
    //restart game with new "word" from "wordArray"

}


// random word selection
var word = game.wordArray[Math.floor(Math.random() * game.wordArray.length)];





}






