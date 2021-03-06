// Javascript to control the actions of the hangman game

// Set array for Movie Titles
var wordsArray = ["Hangman", "Divergent", "Insurgent", "Allegiant", "Aladdin", "Terminator"];

// Set additional variables
var word;
var tries;
var placeholder;
var input;
var wordLength;
var wordSubstring;
var inputArray = [];
var numWins;

// Set Elements used to display in HTML
var numGuessRemain = document.getElementById("numGuessRemain");
var guessedLetters = document.getElementById("guessedLetters");
var message = document.getElementById("message"); 

// Functions

  // newGame will start the game
  function newGame()
  {

    placeholder = "";
    tries = 10;
    numWins = 0;    
    word = wordsArray[getRandom(0,wordsArray.length)];
    wordLength = word.length;
   
    console.log(word);
    
    var myPicElement = document.getElementById("hangimage").src = "assets/images/hangman10.png";
     message.innerHTML ="";

    document.getElementById("guessedLetters").innerHTML = "";
   
    
    for (var count = 0; count < wordLength; count++)
    {
      placeholder = placeholder + "_";
    }

    document.getElementById("placeholder").innerHTML = placeholder;
    
    numGuessRemain.innerHTML = tries;
    wins.innerHTML = numWins;

  }
  
  // getRandom chooses an random word from the Movie Title (wordsArray)
  function getRandom(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  // Controls when the images will display based on the number of tries, when the person inputs from the keyboard 
  function guessLetter() {

    var correct = 0;
    
    // For loop to create the place holder and insert letters based on input
    
    // Greg's code to input letters and create place holders.
    word = word.toLowerCase();
    var index = word.indexOf(input);
    if (index === -1){
      // guess is incorrect
      correct = false;
    } else { 
      correct = true;
      for (var i = 0; i < word.length; i++) {
        //console.log(word[i], input, word[i] === input);
        if (word[i] === input){
          placeholder = placeholder.substring(0, i) + input + placeholder.substring(i + 1, placeholder.length + 1);
          //console.log(placeholder);
         } 
      }
    }

    //console.log(index, placeholder, word);
    document.getElementById('placeholder').innerHTML = placeholder;
    
    //My previous code to create the place holder an input the number, this did not work well.
    // for (var i = 0; i < word.length; i++)
    // {
    //   if (input == word.substring(i, i + 1)) // word.indexOf(input) !== -1
    //   {         
    //     correct++;
    //     placeholder = placeholder.substring(0, i) + input + placeholder.substring(i + 1, placeholder.length + 1);
    //     document.getElementById("placeholder").innerHTML = placeholder;
    //     console.log(word.substring(0, i)); 
    //   }
    // }

    if (!correct)
    {
      tries--;
      numGuessRemain.innerHTML = tries;
      document.getElementById("hangimage").src = "assets/images/hangman" + tries + ".png";
    }
    

    if (placeholder == word)
    {
      document.getElementById("hangimage").src = "assets/images/hangman_win.png";
      numWins++;
      message.innerHTML = "<h3>You guessed the word correctly. You win!</h3><br><button class='btn btn-success' onclick='newGame()'>Play Again!</button>";
    }

    if (tries <= 0)
    {
      document.getElementById("hangimage").src = "assets/images/hangman_lost.png"
      message.innerHTML ="<h3>Sorry, You lost!</h3><br><h3>Current Word: "+word+"<br><br><button class='btn btn-success' onclick='newGame()'>Play Again!</button>";

      document.onkeydown = function(event) {
        event.preventDefault();
      }
    } 
    //newGame();
    //console.log("Correct: " + correct);
  }

// Call Function
newGame();

// On Keyup function that captures the input and stores it into a varialbe
// so it can be used to dsiplay in the HTML div with id tag guessedLetters

  
document.onkeydown = function(event) {
  var keyCode = event.keyCode;

  /* 
    48-57 - (0-9)Numbers
    65-90 - (A-Z)
    97-122 - (a-z)
    8 - (backspace)
    32 - (space)
    */
 
 // Restrict all input except for Alpha and Numeric inputs
 if ( !( (keyCode > 48 && keyCode < 57) || (keyCode > 64 && keyCode < 90) )) {
    event.preventDefault();
    return false;
 }
 
 input = String.fromCharCode(event.keyCode).toLowerCase();
 
  inputArray.push(input);   

     for (var i=0; i < inputArray.length; i++) {
      guessedLetters.innerHTML = inputArray;
 }

 guessLetter();
  //console.log("---------");
  //console.log("Tries: " + tries);
  console.log(input, event.keyCode);
  
}