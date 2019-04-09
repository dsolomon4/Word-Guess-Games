//getting started
//var start = alert("Select letters to guess the word. You will recieve 10 tries. Let's begin");



/////variables for game
var game = {
    scoreWin: 0, //wins for game
    scoreLose: 0, //loss for game
    guessesLeft: 10, //countdown of guesses doc count
    wordArray: ["usher", "aaliyah", "brandy", "monica"],
    wordSelected : ' ',
    wordSelectedArray : [],
    correctArray: [],
    incorrectArray: [],

}

document.getElementById("score-lose").innerText = game.scoreLose; //diplays losses
document.getElementById("guesses-left").innerText = game.guessesLeft; //diplays guess left in game
var gameRunning = false;



function startGame (){ //if game refershes, it should be a clean slate
   // tell game to reset
   gameRunning = false;
   
    // reset functions to zero 
    game.correctArray = [];
    game.incorrectArray = [];
    
    //guesses back at 10
    guessesLeft = 10;
    
    // random word is selected 
    game.wordSelected = game.wordArray[Math.floor(Math.random() * (game.wordArray.length))];
    console.log(game.wordSelected)

   game.wordSelected.push("_")

    displayGame()
};

startGame()

function displayGame(){
    document.getElementById("win-display").innerText = game.scoreWin;
    document.getElementById("display-word").innerText = ""; //displays current word and ("_")

};




function guessLetter (){
    // word needs to diplay to the html  
    // display the length of the word to the user using "_"
    // once letter is selected
        // the right letter will appear
        // the incorrect letter will appear in incorrectArray
    // number of guesses left should decrease by -1
    //if anserArray is equal to the length of the word, tell the user they won
    
};

function endGame (){
    //if guesses left <=0 
        // if word has not been solved
        //score lose will be +1
        // alert("YOU LOSE!!")
    //if word is solve
        // score win will be +1
        // game will restart
}


document.onkeyup = function (event) {


    var guess = event.key.toLowerCase();
    console.log(guess)

    if (guess === "h") {
      (game.guessesLeft--);
    } 
    
    if(game.guessesLeft === 0){
        alert ("GAME OVER!");
        game.scoreLose++;
       return game.scoreLose
    }
    console.log(game.guessesLeft)
    console.log(game.scoreLose)
  }