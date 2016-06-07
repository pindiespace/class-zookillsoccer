/** 
 * @class Mover
 * @description update position of object being animated by Game.
 */

 export default class Mover {

 	constructor (gameObj, prefSpeed,  delta) {
 		this.obj = gameObj;

 		this.speed = prefSpeed;

 	}

 	/** 
 	 * @method setOrigin
 	 * @description set the starting position of the object
 	 * @param Integer x the x coordinate of the object
 	 * @param Integer y the y coordinate of the object
 	 */
 	setOrigin (x, y) {
 		this.obj.position.left = x;
 		this.obj.position.top = y;
 	}

 	/** 
 	 * @method kicker
 	 * @description rotate an object's drawing
 	 * @param deg the degrees to rotate the object
 	 */
 	kicker (deg) {

 	}

 	/** 
 	 * @method pingPong
 	 * @description move in a ping-pong style
 	 */
 	pingPong () {
 		
 	}

 	/**
	 * Returns a random number between min (inclusive) and max (exclusive)
	 * @link 
	 */
	getRandom(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}


 	/** 
 	 * @method randomWalk
 	 * @description generate random walk, with one preferred direction, 
 	 * used by Animals
 	 */
 	randomWalk () {
 		switch (this.delta) {
 			case 'top':
 				this.obj.position.top -= (this.speed + (0.1 * this.getRandom(1, this.speed)));
 				this.obj.position.left += (this.getRandom(1, this.speed) - this.getRandom(1, this.speed));
 				break;
 			case 'left':
 				this.obj.position.left -= (this.speed + (0.1 * this.getRandom(1, this.speed)));
 				this.obj.position.top += (this.getRandom(1, this.speed) - this.getRandom(1, this.speed));
 				break;
 			case 'bottom':
 				this.obj.position.top += (this.speed + (0.1 * this.getRandom(1, this.speed)));
 				this.obj.position.left += (this.getRandom(1, this.speed) - this.getRandom(1, this.speed));
 				break;
 			case 'right':
 				this.obj.position.left += (this.speed + (0.1 * this.getRandom(1, this.speed)));
 				this.obj.position.top += (this.getRandom(1, this.speed) - this.getRandom(1, this.speed));
 				break;
 			default:
 				console.error('Mover.setPrefDirection: invalid direction:' + this.direction);
 				break;
 		}
		
    }


 }