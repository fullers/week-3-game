# Hangman (Movie Edition)

This is a Hangman game designed in HTML, JavaScript, and Bootstrap.  I created an array of movie titles which the user may use the keyboard to try and guess the word.  Like the traditional Hangman game, if the letter is guessed correctly then it will appear.  If the letter is not correct an array of chosen letters is traked and images are displayed showing the stick figure being hung.  The user will have 10 tries to guess the word correctly.

You may go to [https://fullers-week-3-game.herokuapp.com](https://fullers-week-3-game.herokuapp.com) to view a demo of the application.


## Technologies used

* HTML
* CSS
* Bootstrap
* JavaScript
* [Heroku](https://heroku.com) 


## Files and Folder Structure

* **index.php** - Used to point heroku to your starting file.
* **composer.json** - Used for heroku deployment.
* **index.html** - File used as the main page of the application.
* **assets** - Folder to store CSS and Images
	* **css** - Sub folder to store css files.
		* reset.css - File used or called before the style.css, it allows the page to be reset or cleaned of any existing CSS.
		* style.css - File used to create the CSS needed for the application.
	* **images** - Sub folder to store image files.
		* hangman[x].png - Multiple files used to simulate drawing of the stick figure and scafold.
	* **javascript** - Sub folder to house javascript files.
		* bootstrap.min.js - minimized file for Bootstrap.
		* game.js - File used to store javascript for the game dynamics.

## Getting Started

* Use git clone to copy this git hub.
* Open the command line and navigate to the folder when you cloned the files.
* Open the index.html in a browser.


![Alt Text](assets/images/scrnshot-hangman.png?raw=true "Hangman")


## Authors

* **Shaun** - *HTML, CSS, and JavaScript*

## License
   
   None 