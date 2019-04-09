//getting started
//var start = alert("Select letters to guess the word. You will recieve 10 tries. Let's begin");



/////variables for game
var    scoreWin = 0; //wins for game
var    scoreLose= 0;//loss for game
var    guessesLeft= 10; //countdown of guesses doc count
var    wordArray =["usher", "aaliyah", "brandy", "monica"];
var    wordSelected = ' ';
var    wordSelectedArray = [];
var    correctArray= [];
var    incorrectArray= [];


document.getElementById("answer-array").innerText = "Here are the letters you have guessed: " + incorrectArray.join(' ');
document.getElementById("win-display").innerText =  "You have " + scoreWin + " wins!";
document.getElementById("score-lose").innerText = "You have " + scoreLose + " loses!"; //diplays losses
document.getElementById("guesses-left").innerText = "You have " + guessesLeft + " guesses remaining!"; //diplays guess left in game

var gameRunning = false;



function startGame (){ //if game refershes, it should be a clean slate
   // tell game to reset
   gameRunning = false;
   
   
    // reset functions to zero 
    correctArray = [];
    incorrectArray = [];
    
    //guesses back at 10
    guessesLeft = 10;
    
    // random word is selected 
    wordSelected = wordArray[Math.floor(Math.random() * (wordArray.length))];
   

    for (var i=0; i < wordSelected.length; i++){
        wordSelectedArray.push("_")
    };

    console.log(wordSelectedArray)

  document.getElementById("display-word").innerText = wordSelectedArray.join(' ');
    console.log(wordSelected);
    
};

startGame()

function endGame (){

    

    // var wordSelectedArray = [];
    // wordSelectedArray =  wordSelectedArray.split();
    console.log(wordSelectedArray);

    if (guessesLeft === 0){
       
        // if word has not been solved
        // score lose will be +1
        scoreLose ++
     alert("Game Over!")


    }else if (wordSelected === wordSelectedArray){
        scoreWin ++
        alert("hello")
    //if word is solve
        // score win will be +1
        // game will restart
        // startGame();
    }
    document.getElementById("score-lose").innerText = "You have " + scoreLose + " loses"; //diplays losses

}

document.onkeyup = function (event) {


    var guess = event.key.toLowerCase();
    console.log(guess)

    

    if(wordSelected.includes(guess)){
        wordSelectedArray.forEach((letter, index )=> {
            if(wordSelected[index] === guess) {
                wordSelectedArray[index] = guess
                guessesLeft --
            }
        })

        document.getElementById("display-word").innerText = wordSelectedArray.join(' ');
    }else {
        incorrectArray.push(guess)
        document.getElementById("answer-array").innerText = "Here are the letters you have guessed: " + incorrectArray.join(' ');

        guessesLeft--
        
    }
    document.getElementById("guesses-left").innerText = "You have " + guessesLeft + " guesses remaining!"; //diplays guess left in game
    console.log(guessesLeft)
    endGame();
  }