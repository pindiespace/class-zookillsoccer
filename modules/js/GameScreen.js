/** 
 * GameScreen.js
 * Main game screen object
 * @inherits GamePiece, Screen
 */
 import GamePiece from './GamePiece.js';
 import Screen from './Screen.js';

 export default class GameScreen extends Screen {

 	constructor (config) {
 		super(config);


 		//GameScreen should hide its local header and footer
 		this.hideHeader();
 		this.hideFooter();

 		// Load sub-objects
 		this.cages   = this.loadCages();
 		this.animalArea = this.loadAnimalArea();
 		this.playerArea = this.loadPlayerArea();

 	}

 	loadCages () {
 		// load 4 Cages
 	}

 	loadAnimalArea () {
 		// load Animal movement area
 	}

 	loadPlayerArea () {
 		// load the Player
 	}

 }