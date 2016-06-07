/** 
 * @class Mover
 * @description update position of object being animated by Game.
 */

 export default class Mover {

 	constructor (gameObj, prefSpeed,  direction) {
 		this.newTop = 1, this.newLeft = 1, this.newBottom = 1, this.newRight = 1;
 		this.obj = gameObj;
 		this.speed = prefSpeed * this.timeStampRandom();
 		this.delay = this.timeStampRandom() * 300;
 		this.direction = direction;
 		this.counter = 0;
 		this.delayCounter = 0;
 		this.MAX = 30;
 		this.MAX_DELAY = 300;

 		console.log("TIMESTAMP RANDOM:" + this.timeStampRandom());
 		console.log("TIMESTAMP DELAY:" + this.delay)
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
 	 * @method slider
 	 * @description slew object horizontally
 	 * @param deg the degrees to rotate the object
 	 */
 	slider (deg) {
 		console.log('setting slider')
 		this.obj.keydown = function (e) {
    		console.log(e.keyCode);
    		switch(e.keyCode) {
    			case 37:  //left
    				this.obj.position.left -= 1;
    				break;
    			case 38:    //up
    				break;
    			case 39: //right
    				this.obj.position.right += 1;
    				break;
    			case 40:  //down
    			default:
    				break;
    		}

 		}
 	}

 	/** 
 	 * @method kicker 
 	 * Move object slightly up for duration of space bar down
 	 */
 	kicker () {

 	}

 	/** 
 	 * @method pingPong
 	 * @description move in a ping-pong style
 	 */
 	pingPong () {
 		
 	}

 	timeStampRandom () {
 		var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now(); //use high-precision timer if available
        }
		var num = 'xxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random()*10)%10 | 0;
            d = Math.floor(d/10);
            return (c=='x' ? r : (r&0x3|0x8)).toString(10);
        });
      return num / 10000;

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
 		this.counter++;
 		this.delayCounter++;
 		if (this.delayCounter < this.delay) {
 			//console.log('delayCounter:' + this.delayCounter + ' MAX:' + this.MAX_DELAY);
 			return;
 		}
 		switch (this.direction) {
 			case 'top':
 				this.obj.position.top -= (this.speed + (0.1 * this.getRandom(1, this.speed)));
 				this.obj.position.left += 10 * (this.getRandom(-this.speed, this.speed));
 				break;
 			case 'left':
 				this.obj.position.left -= (this.speed + (0.1 * this.getRandom(1, this.speed)));
 				this.obj.position.top +=  10 *(this.getRandom(-this.speed, this.speed));
 				break;
 			case 'bottom':
  				if (this.counter > this.MAX) {
  					this.MAX = parseInt(4, 30);
 					this.newLeft = (this.getRandom(-this.speed, this.speed));
 					this.counter = 0;
 				} else if (this.counter > this.MAX / 2) {
 					this.speed += this.timeStampRandom() / 50;
 				}
			 	this.obj.position.top += this.speed;
 				this.obj.position.left += this.newLeft;
 				break;
 			case 'right':
 				this.obj.position.left += (this.speed + (0.1 * this.getRandom(1, this.speed)));
 				this.obj.position.top += 10 * (this.getRandom(-this.speed, this.speed));
 				break;
 			default:
 				console.error('Mover.setPrefDirection: invalid direction:' + this.direction);
 				break;
 		}
		
    }


 }