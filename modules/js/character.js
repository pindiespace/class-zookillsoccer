/** 
 * Character.js
 * the Character object
 * the Area object, inherits basic GamePiece
 */

 /** 
  * @class Character
  * @extends GamePiece
  * @description generic character
  */
 import GamePiece from './GamePiece.js';

class Character extends GamePiece {

 	constructor (config) {
 		super(config)
 	}

 }

/** 
 * @class Player
 * @extends Character
 * @description a Player object
 */
 class Player extends Character {

 	constructor (config) {
 		super(config)
 	}
 }

export {Character, Player};
