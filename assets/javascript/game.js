// Javascript to control the actions of the hangman game

var wordsArray = ["Alf", "Hangman", "Divergent", "Insurgent", "Allegiant", "Aladdin", "Terminator"];
var word;
var goesLeft;
var placeholder;
var input;
var wordLength;
var currentWord;
var guessedLetter;
var tries;
var inputArray = [];

  function newGame(){
     placeholder = "";
     goesLeft = 10;
     word = wordsArray[getRandom(0,wordsArray.length)];
     wordLength = word.length;
     console.log(word);
     
     var myPicElement = document.getElementById("hangimage").src = "http://fetlar.kingston.ac.uk/pp/hangman10.jpg";

     for (var count = 0; count < word.length; count++)
     {
          placeholder = placeholder + " _";
     }

     document.getElementById("placeholder").innerHTML = placeholder;
     // document.getElementById("gamestatus").innerHTML = "Game running";
  }
  
  function getRandom(min,max){
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function guessLetter()
  {
     var correct = 0;

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
    var url = document.getElementById("hangimage").src = "http://fetlar.kingston.ac.uk/pp/hangman" + goesLeft + ".jpg";

    if (placeholder == word)
    {
      document.getElementById("hangimage").src = "http://fetlar.kingston.ac.uk/pp/hangman_win.jpg";
      alert("You guessed the word correctly. You win!");
    }

    if (goesLeft == 0)
    {
      alert("You lose");
      newGame();
    }
  }

  function nmbrGuesses() {
  	tries = "12";

  }

  function usedLetters() {
  	var status = document.getElementById('status');
	for (var i=0; i <= 12; i++) {
		status.innerHTML =  inputArray[i] + " "; 
	}
	
  }


// Calling Functions
document.onkeyup = function(event) {

	var input = String.fromCharCode(event.keyCode).toLowerCase();
	usedLetters();
	newGame();

	
}


	



