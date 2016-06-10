/** 
 * Animal.js
 * The critters that Trump tries to stop from getting the Player.
 * @inherits GamePiece, Character
 */
 import GamePiece from './GamePiece.js';
 import Character from './Character.js';

 import Info from './Info.js';
 import Image from './Image.js';
 import StaticImage from './StaticImage.js';

 // >>>>>>>>>>>ADDED IN WEEK 11
 import Mover from './Mover.js';
 import Collider from './Collider.js';
 // END ADDED WEEK 11<<<<<<<<<<<<<

 export default class Animal extends Character {

 	constructor (config) {
 		super (config);

 		// >>>>>>>>>>>ADDED IN WEEK 11
 		// Animals get RANDOM MOTION
 		this.mover.initRandom(0.02, 'bottom');
 		// END ADDED IN WEEK 11<<<<<<<<<<<<<<

 	}

 	// >>>>>>>>>>>ADDED IN WEEK 11
 	update () {
 		this.mover.updateRandomWalk();
 	}
 	// END ADDED IN WEEK 11<<<<<<<<<<<<<<

 }