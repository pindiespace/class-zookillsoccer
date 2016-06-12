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
 		//Trump gets PingPong motion
 		this.mover.initPingPong(0);
 	// END ADDED IN WEEK 11<<<<<<<<<<<<<<

 	}

 	// >>>>>>>>>>>ADDED IN WEEK 11
 	update () {
 		this.mover.updatePingPong();
 	}
 	// END ADDED IN WEEK 11<<<<<<<<<<<<<<

 }