/** 
 * GameScreen.js
 * Main game screen object
 * @inherits GamePiece, Screen
 */
 import GamePiece from './GamePiece.js';
 import Screen from './Screen.js';

 import Area from './Area.js';
 import AnimalArea from './AnimalArea.js';
 import PlayerArea from './PlayerArea.js';
 import Cage from './Cage.js';


 export default class GameScreen extends Screen {

 	constructor (config) {
 		super(config);

 		this.cages = [];
 		this.animalAreas = [];
 		this.playerAreas = [];

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
 		this.cages.push(new Cage({name: 'Lion cage', position: {top: 0, left: 0}}));
		this.cages.push(new Cage({name: 'Tiger cage', position: {top: 0, left: 100}}));
		this.cages.push(new Cage({name: 'Bear cage', position: {top: 0, left: 200}}));
		this.cages.push(new Cage({name: 'Gorilla cage', position: {top: 0, left: 300}}));
 	}

 	loadAnimalArea () {
 		// load Animal movement area
 		this.animalAreas.push(new AnimalArea({name: 'Zoo', position: {top: 100, left: 0}}));
 	}

 	loadPlayerArea () {
 		// load the Player
 		this.playerAreas.push(new PlayerArea({name: 'Player Area', position: {top: 500, left: 0}}));
 	}

 }

