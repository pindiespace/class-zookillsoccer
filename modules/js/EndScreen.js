/** 
 * EndScreen.js
 * Ending screen for the game.
 * @inherits Screen, GamePiece
 */
 import GamePiece from './GamePiece.js';
 import Screen from './Screen.js';
 import Identity from './Identity.js';
 
 export default class EndScreen extends Screen {

 	constructor (config) {
 		super(config);

 		// load the background image
 		this.loadBackground('img/screens/end-screen.png');

 		// Load EndScreen sub-objects
 		this.loadInputScore();
 		this.loadHighScores();

 		// Bind "play again" and "instructions" buttons.
 		this.bindReplay();
 		this.bindInstructions();
 	}

 	loadIdentity (won) {

 		if (this.identity) {
 			this.identity.clear('end-screen-identity');
 		}

 		if (won) {
			this.identity = new Identity(
				{
					name: 'identity', 
					domId: 'end-screen-identity',
					path: 'img/identity/won.png', 
					author: 'pete markiewicz', 
					source: 'plyojump'
				}
			);
 		} else {
			this.identity = new Identity(
				{
					name: 'identity', 
					domId: 'end-screen-identity',
					path: 'img/identity/lost.png', 
					author: 'pete markiewicz', 
					source: 'plyojump'
				}
			);
 		}

 	}
 
 	//TODO: use a StaticText object, and add to EndScreen
 	showScore (won) {
 		this.loadIdentity(won);
 		/*
 		if (won) {
 			alert ("you won")
 		} else {
 			alert ("you lost")
 		}
 		*/
 	}

 	loadInputScore () {

 	}

 	loadHighScores () {

 	}

 	bindReplay () {
		console.log("in bindStart, this.game:" + this.game)
		// we use bind() to link the function below to StartScreen (otherwise, it thinks it is inside window)
		document.querySelector('#end-screen-play-button').addEventListener('click', 
			function (e) {
				//alert("in handler, game:" + this.game)
				e.preventDefault();
				this.game.startGame();

			}.bind(this));
	}

	bindInstructions () {
		console.log("in bindStart, this.game:" + this.game)
		// we use bind() to link the function below to StartScreen (otherwise, it thinks it is inside window)
		document.querySelector('#end-screen-instructions-button').addEventListener('click', 
			function (e) {
				//alert("in handler, game:" + this.game)
				e.preventDefault();
				this.game.loadGame();

			}.bind(this));
	}
 }