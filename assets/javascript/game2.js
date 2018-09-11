

var  guessMadeDisplay = document.getElementById("guess-made");
var countDownDisplay = document.getElementById("count-down");
var scoreDisplay = document.getElementById("score");
//create guess
// give JavaScript a function to execute when onkeyup event fires
document.onkeyup = function (event) {
    var word = document.getElementById("words"); //used for displaying the main word for the game
        console.log("You pressed:" + event.key)
        console.log ("Array Length:" + wordArray.length)

      
        var tempString = "<p>"; // display the paragraph from HTML
        for (var i = 0; i < randomWord.length; i++) { // a for loop to show the vowels in the random word
            if (this.alphabet.includes(randomWord[i].toLowerCase())) {
                tempString += randomWord[i] + " "; //add randomWord to the temp string -- += means add to the string
            } else {
                tempString += "_ ";
            }
    
    }
    // output the stuff
  
    tempString += "</p>"; // end the paragraph
    console.log(tempString)

  // Select a random word -- return gets a value back from the function -- assigned outside the generator
    wordGenerator = function () {
    var wordIndex = Math.floor(Math.random() * wordArray.length);
    return wordArray[wordIndex];


  }


  1.
2. Take the player’s guess.
3. Quit the game if the player wants to.
4. Check that the player’s guess is a valid letter.
5. Keep track of letters the player has guessed.
6. Show the player their progress.
7. Finish when the player has guessed the word.