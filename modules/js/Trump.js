/** 
 * Trump.js
 * The ball-like Character you kick into Animals
 * @inherits GamePiece, Character
 */
 import GamePiece from './GamePiece.js';
 import Character from './Character.js';

 // >>>>>>>>>>>ADDED IN WEEK 11
 import Mover from './Mover.js';
 import Collider from './Collider.js';
 // END ADDED WEEK 11<<<<<<<<<<<<<
 
 export default class Trump extends Character {

 	constructor (config) {
 		super (config);

 		// >>>>>>>>>>>ADDED IN WEEK 11
 		this.mover = new Mover(this, 0.2, 'top');
 		this.collider = new Collider();
 		// END ADDED IN WEEK 11<<<<<<<<<<<<<<
 	}

 	// >>>>>>>>>>>ADDED IN WEEK 11
 	update () {
 		this.mover.pingPong();
 	}
 	// END ADDED IN WEEK 11<<<<<<<<<<<<<<

 }