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

		this.screenNames = {
			START_SCREEN : 0,
			GAME_SCREEN : 1,
			END_SCREEN : 2
		}

		//State object

		this.screens = [];
		this.displayCharacters = [];
		this.displayInfo = [];

		this.init();

	} //end of constructor

	init () {
		this.screens[this.screenNames.START_SCREEN] = new StartScreen({name: "Start Screen"});
		this.screens[this.screenNames.GAME_SCREEN] = new GameScreen({name: "Game Screen"});
		this.screens[this.screenNames.END_SCREEN] = new EndScreen({name: "End Screen"});
		this.state = this.screenNames.START_SCREEN;
	}

	changeScreen () {

	}

	update () {

	}

	draw () {

	}

	gameLoop () {

	}

	addUserInput () {

	}

	addToModel () {

	}

	addToView () {

	}

}