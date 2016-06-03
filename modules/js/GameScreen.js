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

 		// load the background image
 		this.loadBackground('img/screens/game-screen.png');

 		// load sub-objects
 		this.cages   = this.loadCages();
 		this.animalArea = this.loadAnimalArea();
 		this.playerArea = this.loadPlayerArea();

 	}

 	loadCages (container, imgPath) {
 		// load 4 Cages
 		var path = 'img/areas/cage.png';
 		this.cages.push(
 			new Cage(
 				{
 					name: 'lion-cage', 
 					position: {top: 0, left: 70}, 
 					size: {width: 100, height:100}, 
 					container: this.dom, 
 					path: path
 				}
 			)
 		);
		this.cages.push(
			new Cage(
				{
					name: 'tiger-cage', 
					position: {top: 0, left: 310}, 
					size: {width: 100, height:100}, 
					container: this.dom, 
					path: path
				}
			)
		);
		this.cages.push(
			new Cage(
				{
					name: 'bear-cage', 
					position: {top: 0, left: 550}, 
					size: {width: 100, height:100},
					container: this.dom, 
					path: path
				}
			)
		);
		this.cages.push(
			new Cage(
				{
					name: 'gorilla-cage', 
					position: {top: 0, left: 790}, 
					size: {width: 100, height:100},
					container: this.dom, 
					path: path
				}
			)
		);
 	}

 	loadAnimalArea () {
 		// load Animal movement area
 		this.animalAreas.push(
 			new AnimalArea(
 				{
 					name: 'Zoo', 
 					position: {top: 104, left: 0}, 
 					size: {width: 982, height: 422},
 					container: this.dom, 
 					path: null
 				}
 			)
 		);
 	}

 	loadPlayerArea () {
 		// load the Player
 		this.playerAreas.push(
 			new PlayerArea(
 				{
 					name: 'Player Area', 
 					position: {top: 528, left: 0}, 
 					size: {width: 982, height: 100},
 					container: this.dom, 
 					path: null
 				}
 			)
 		);
 	}

 }

