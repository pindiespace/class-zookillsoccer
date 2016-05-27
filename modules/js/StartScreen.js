/** 
 * StartScreen.js
 * Opening screen for game.
 * @inherits GamePiece, Screen
 */
import GamePiece from './GamePiece.js';
import Screen from './Screen.js';

export default class StartScreen extends Screen {

	constructor (config) {
		super(config);

		// Load StartScreen sub-objects
		this.loadIdentity();
		this.loadInstructions();

		// Make the start button open the main game screen
		this.bindStart();
	}

	loadIdentity () {

	}

	loadInstructions () {

	}

	bindStart () {
		console.log("in bindStart, this.game:" + this.game)
		// we use bind() to link the function below to StartScreen (otherwise, it thinks it is inside window)
		document.querySelector('#start-screen-play-button').addEventListener('click', 
			function (e) {
				//alert("in handler, game:" + this.game)
				e.preventDefault();
				this.game.startGame();

			}.bind(this));
	}
}