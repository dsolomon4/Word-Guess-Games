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
    wordSelected = game.wordArray[Math.floor(Math.random() * (game.wordArray.length))];
    console.log(wordSelected)

    // the word being guessed should show "_"
    for (var i = 0; i < game.wordArray[i].length; i++){
        wordSelected.push("_")
    }
    displayGame()
};

function displayGame(){
    document.getElementById("win-display").innerText = game.scoreWin;
    document.getElementById("display-word").innerText = ""; //displays current word and ("_")
    for (var i = 0; i < wordSelectedArray.length; i++)

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

