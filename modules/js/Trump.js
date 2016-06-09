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

 		this.mover.initPingPong(0, this);

 	}

 	// >>>>>>>>>>>ADDED IN WEEK 11
 	update () {
 		this.mover.pingPong();
 	}
 	// END ADDED IN WEEK 11<<<<<<<<<<<<<<

 }