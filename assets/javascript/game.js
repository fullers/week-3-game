// Javascript to control the actions of the hangman game

var wordsArray = ["Alf", "Hangman", "Divergent", "Insurgent", "Allegiant", "Aladdin", "Terminator"];
//var wordsArray = ["monitor", "program", "application", "keyboard", "javascript", "gaming", "network"];
var word;
var goesLeft;
var placeholder;
var input;
var wordLength;
var wordSubstring;
var currentWord;
var inputArray = [];
var numWins;

var numGuessRemain = document.getElementById("numGuessRemain");

  function newGame()
  {

    placeholder = "";
    goesLeft = 10;
    numWins = 0;
    word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    currentWord = 0;
    word = wordsArray[currentWord];
    wordLength = word.length;
    wordSubstring = currentWord.substring;
    console.log(word);
    //var myElement = document.getElementById("button").innerHTML = "Click to guess";
    var myPicElement = document.getElementById("hangimage").src = "http://fetlar.kingston.ac.uk/pp/hangman10.jpg";

    for (var count = 0; count < word.length; count++)
    {
      placeholder = placeholder + " _";
    }

    document.getElementById("placeholder").innerHTML = placeholder;
    //document.getElementById("gamestatus").innerHTML = "Game running";

    numGuessRemain.innerHTML = goesLeft;
    wins.innerHTML = numWins;
  }

  function guessLetter()
  {
    var correct = 0;

    // var inputBox = document.getElementById("guessinput");
    // input = inputBox.value;


    for (var count = 0; count < wordLength; count++)
    {
      if (input == word.substring(count, count + 1))
      {
         
        correct++;
        placeholder = placeholder.substring(0, count) + input + placeholder.substring(count + 1, placeholder.length + 1);
        document.getElementById("placeholder").innerHTML = placeholder;
      }
    }

    if (correct == 0)
    {
      goesLeft--;
    }
    var url = document.getElementById("hangimage").src = "assets/images/hangman" + goesLeft + ".png";

    if (placeholder == word)
    {
      document.getElementById("hangimage").src = "http://fetlar.kingston.ac.uk/pp/hangman_win.jpg";
      numWins++
      alert("You guessed the word correctly. You win!");
    }

    if (goesLeft == 0)
    {
      alert("You lose");
      newGame();
    }
  }
//newGame();
//document.getElementById("button").onclick = guessLetter;

document.onkeyup = function(event) {

  
 input = String.fromCharCode(event.keyCode).toLowerCase();
 var status = document.getElementById('status');
    
  
     for (var i=0; i < inputArray.length; i++) {
        inputArray.push(input);

   status.innerHTML = input + " "; 
 }
  guessLetter();
  newGame();
}



