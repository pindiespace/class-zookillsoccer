/** 
 * Player.js
 * User-controlled Character
 * @inherits GamePiece, Character
 */
 import GamePiece from './GamePiece.js';
 import Character from './Character.js';

 // >>>>>>>>>>>ADDED IN WEEK 11
 import Mover from './Mover.js';
 import Collider from './Collider.js';
 // END ADDED WEEK 11<<<<<<<<<<<<<

 export default class Player extends Character {

 	constructor (config) {
 		super (config);

 		// >>>>>>>>>>>ADDED IN WEEK 11
 		this.mover.initSlew();
  		// END ADDED IN WEEK 11<<<<<<<<<<<<<<		
 	}

  	// >>>>>>>>>>>ADDED IN WEEK 11
 	update () {
 		this.mover.updateSlew();
 	}
 	// END ADDED IN WEEK 11<<<<<<<<<<<<<<


 }