/** 
 * Game.js
 * The entire Game object
 * @inherits GamePiece
 */
import GamePiece from './GamePiece.js';

//Screen inheritance
import Screen from './Screen.js';
import StartScreen from './StartScreen.js';
import GameScreen from './GameScreen.js';
import EndScreen from './EndScreen.js';

//Info inheritance
import Info from './Info.js';
import Text from './Text.js';
import StaticText from './StaticText.js';
import Identity from './Identity.js';
import Instructions from './Instructions.js';
import DynamicText from './DynamicText.js';
import Score from './Score.js';

//Character inheritance
import Character from './Character.js';
import Trump from './Trump.js';
import Player from './Player.js';
import Animal from './Animal.js';
import Lion from './Lion.js';
import Tiger from './Tiger.js';
import Bear from './Bear.js';
import Gorilla from './Gorilla.js';
import Health from './Health.js';

//Area inheritance.
import Area from './Area.js';
import Cage from './Cage.js';
import AnimalArea from './AnimalArea.js';
import PlayerArea from './PlayerArea.js';

export default class Game extends GamePiece {

	constructor (config) {

		super(config);

		//game copyright
		this.warning = "This game belongs to us, and nobody else.";

		//game reverts to StartScreen if unplayed
		this.TIMEOUT = 5;

		// define Id link to DOM
		this.START_SCREEN_ID = "start-screen";
		this.GAME_SCREEN_ID = "game-screen";
		this.END_SCREEN_ID = "end-screen";

		// model storage, screens
		this.screens = [];

		// model storage, dynamic characters
		this.displayCharacters = [];

		// initialize game, load start screen
		this.init();

	} //end of constructor

	init () {

		// Grab the HTML screen elements and encapsulate in a Screen class
		this.screens[this.START_SCREEN_ID] = new StartScreen({name: "Start Screen", id: this.START_SCREEN_ID, game: this});
		this.screens[this.GAME_SCREEN_ID] = new GameScreen({name: "Game Screen", id: this.GAME_SCREEN_ID, game: this});
		this.screens[this.END_SCREEN_ID] = new EndScreen({name: "End Screen", id: this.END_SCREEN_ID, game: this});

		// make the start screen visible
		this.loadGame();
	}

	loadGame () {
		console.log("loading splash screen");
		this.screens[this.END_SCREEN_ID].hideScreen()
		this.screens[this.START_SCREEN_ID].showScreen();
	}

	startGame () {

		// initialize elapsed time
		this.startTime = new Date();

		// show GameScreen, hide others
		console.log("starting game");
		this.screens[this.START_SCREEN_ID].hideScreen();
		this.screens[this.END_SCREEN_ID].hideScreen();
		this.screens[this.GAME_SCREEN_ID].showScreen();
		this.gameLoop();
	}

	endGame () {

		console.log("ending game");

		// reset timer
		this.startTime = 0;

		// turn off animation
		cancelAnimationFrame(this.globalId);
		this.globalId = null;

		// go to end screen
		this.screens[this.GAME_SCREEN_ID].hideScreen();
		this.screens[this.END_SCREEN_ID].showScreen();
	}

	elapsed () {

		// record time we have been in gameLoop
		this.endTime = new Date();

		// time difference in ms

		var timeDiff = (this.endTime - this.startTime) / 1000;

		// get seconds (Original had 'round' which incorrectly counts 0:28, 0:29, 1:30 ... 1:59, 1:0)
		return Math.round(timeDiff % 60);		
	}

	checkIfComplete () {

		// game logic to see if the game should reset
		console.log("ELAPSED:" + this.elapsed());

		if (this.elapsed() > this.TIMEOUT) {
			// if idle too long, reset game to start
			return true;
		}

		return false;
	}

	update () {

		for (var i = 0, len = this.displayCharacters; i < len; i++) {

			var character = this.displayCharacters[i];

			switch (character.getClass()) {
				case 'Player':
				case 'Trump':
				case 'Lion':
				case 'Tiger':
				case 'Bear':
				case 'Gorilla':
				default:
					break;
			}

			character.update();
		}
	}

	draw () {

		for (var i = 0, len = this.displayCharacters; i < len; i++) {

			var character = this.displayCharacters[i];

			displayCharacters[i].draw();
		}
	}

	gameLoop () {
		
		if (this.checkIfComplete()) {
			this.endGame();
			return;
		}

		this.update();
		this.draw();
		
		//console.log("looping...")
		this.globalId = requestAnimationFrame(this.gameLoop.bind(this));
	}

}