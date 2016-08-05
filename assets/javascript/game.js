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
var guessedLetters = document.getElementById('guessedLetters');
var message = document.getElementById('message');
  
// Functions

  // newGame will start the game
  function newGame()
  {

    placeholder = "_";
    tries = 10;
    numWins = 0;
    
    word = wordsArray[getRandom(0,wordsArray.length)];
    wordLength = word.length;
   
    console.log(word);
    
    var myPicElement = document.getElementById("hangimage").src = "assets/images/hangman10.png";
    
  for (var count = 0; count < wordLength; count++)
    {
      placeholder = placeholder + " _ ";
    }

    document.getElementById("placeholder").innerHTML = placeholder;
    
    numGuessRemain.innerHTML = tries;
    wins.innerHTML = numWins;
  }
  
  // getRandom chooses an random word from the Movie Title (wordsArray)
  function getRandom(min,max){
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  // Controls when the images will display based on the number of tries, when the person inputs from the keyboard 
  function guessLetter()
  {

    var correct = 0;
    
    // For loop to create the place holder and insert letters based on input
    for (var i = 0; i < word.length; i++)
    {
      if (input == word.substring(i, i + 1))
      {
         
        correct++;
        placeholder = placeholder.substring(0, i) + input + placeholder.substring(i + 1, placeholder.length + 1);
        document.getElementById("placeholder").innerHTML = placeholder;
        console.log(placeholder);
      }
    }

    if (correct == 0)
    {
      tries--;
      numGuessRemain.innerHTML = tries;
    }
    var url = document.getElementById("hangimage").src = "assets/images/hangman" + tries + ".png";

    if (placeholder == word)
    {
      document.getElementById("hangimage").src = "assets/images/hangman_win.png";
      numWins++
      message.innerHTML = "You guessed the word correctly. You win!";
    }

    if (tries === 0)
    {
      document.getElementById("hangimage").src = "assets/images/hangman_lost.png"
      message.innerHTML ="Sorry, You lost!";
      newGame();
    }
  }

// Call Function
newGame();

// On Keyup function that captures the input and stores it into a varialbe
// so it can be used to dsiplay in the HTML div with id tag guessedLetters
document.onkeyup = function(event) {


 input = String.fromCharCode(event.keyCode).toLowerCase();
 
  inputArray.push(input); 
   

     for (var i=0; i < inputArray.length; i++) {

      guessedLetters.innerHTML = inputArray;
      guessLetter();
 }
  console.log("---------")
  console.log(tries)
  
}



