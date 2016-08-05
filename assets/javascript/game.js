// Javascript to control the actions of the hangman game

var wordsArray = ["Hangman", "Divergent", "Insurgent", "Allegiant", "Aladdin", "Terminator"];

var word;
var tries;
var placeholder;
var input;
var wordLength;
var wordSubstring;
var inputArray = [];
var numWins;

var numGuessRemain = document.getElementById("numGuessRemain");
var guessedLetters = document.getElementById('guessedLetters');
var message = document.getElementById('message');
  
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
    //document.getElementById("gamestatus").innerHTML = "Game running";

    numGuessRemain.innerHTML = tries;
    wins.innerHTML = numWins;
  }
  
  function getRandom(min,max){
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function guessLetter()
  {

    var correct = 0;
    
    for (var i = 0; i < word.length; i++)
    {
      if (input == word.substring(i, i + 1))
      {
         
        correct++;
        placeholder = placeholder.substring(0, i) + input + placeholder.substring(i + 1, placeholder.length + 1);
        document.getElementById("placeholder").innerHTML = placeholder;
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
newGame();


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



