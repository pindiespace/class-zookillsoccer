/** 
 * @class Mover
 * @description update position of object being animated by Game.
 */

 export default class Mover {

 	constructor (gameObj) {
 		//this.newTop = 1, this.newLeft = 1, this.newBottom = 1, this.newRight = 1;
 		this.obj = gameObj;

        // Character has reference to Game
        this.game = gameObj.game;

        // Movement types
        this.type = 0;
        this.SLEW = 1;
        this.RANDOM = 2;
        this.PINGPOING = 3;

 	}

    /** 
     * @method truncate
     * @description truncate (not round) number to fixed number of decimals
     * @param Number num floating-point number
     * @param Integer decimals the number of decimals points to round to
     * @returns Number the truncated number
     */
    truncator (num, decimals) {    
        var numPower = Math.pow(10, decimals); // "numPowerConverter" might be better
        return ~~(num * numPower)/numPower;
    }

 	/** 
 	 * @method initSlider
 	 * @description slew object horizontally with keypresses
 	 * @param deg the degrees to rotate the Player. 
     * NOTE: we also grab the 'Trump' object.
 	 */
 	initSlew () {
        console.log('initing slew motion');
        this.type = this.SLEW;

        this.speed = 0;
        this.ticker = 0;
        this.lastDir = 1;

        // add bottom, right to make a Rect for the PlayerArea
        this.bounds = this.game.screens['game-screen'].playerAreas[0].position;
        this.bounds.width = this.game.screens['game-screen'].playerAreas[0].size.width;
        this.bounds.height = this.game.screens['game-screen'].playerAreas[0].size.height;
        this.bounds.bottom = this.bounds.top + this.bounds.height;
        this.bounds.right = this.bounds.left + this.bounds.width;

        this.image = this.obj.image;

        // toggle the position of the Player when kicking
        this.unKick = this.obj.position.top;
        this.inKick = this.obj.position.top - 6;

        // NOTE: Trump is added to Player in Collider

        // listen for user events
        document.addEventListener('keydown', 
            event => this.slew(event), false);

        document.addEventListener('keyup',
            event => this.unkick(event), false);
 	}

    /** 
     * @method initRandom
     * @description init random motions along a path. Used for 
     * Animal characters moving through the AnimalArea.
     */
    initRandom (prefSpeed, direction) {
        console.log('init random motion');
        this.type = this.RANDOM;

        this.speed = prefSpeed * this.timeStampRandom();
        this.delay = this.timeStampRandom() * 300;
        this.direction = direction;
        this.counter = 0;
        this.delayCounter = 0;
        this.MAX = 30;
        this.MAX_DELAY = 300;

        // add bottom, right to make a Rect for the AnimalArea
        this.bounds = this.game.screens['game-screen'].animalAreas[0].position;
        this.bounds.width = this.game.screens['game-screen'].animalAreas[0].size.width;
        this.bounds.height = this.game.screens['game-screen'].animalAreas[0].size.height;
        this.bounds.bottom = this.bounds.top + this.bounds.height;
        this.bounds.right = this.bounds.left + this.bounds.width;

        // get bottom and right from Character from its Image
        this.image = this.obj.image;
    }

    /** 
     * @method initPingPong
     * @description have a Trump init.
     * NOTE: collision potential added separately
     */
    initPingPong (prefSpeed, trump) {
        console.log('init pingpong motion');
        this.type = this.PINGPONG;

        //Animal area
        // add bottom, right to make a Rect for the AnimalArea
        this.bounds = this.game.screens['game-screen'].animalAreas[0].position;
        this.bounds.width = this.game.screens['game-screen'].animalAreas[0].size.width;
        this.bounds.height = this.game.screens['game-screen'].animalAreas[0].size.height;
        this.bounds.bottom = this.bounds.top + this.bounds.height;
        this.bounds.right = this.bounds.left + this.bounds.width;

        this.obj.startTop = this.obj.position.top;

        // get bottom and right from Character from its Image
        this.image = this.obj.image;

        this.obj.speed = 0;
        this.obj.dx = 0;
        this.obj.dy = 0;

        // NOTE: Animals and Players are added to Trump in Collider

    }

 	/** 
 	 * @method slew 
 	 * Move object slightly up for duration of space bar down
     * Callback for keydown addEventListener
     * @param Event e the keydown event
     */
 	slew (e) {
        switch (e.keyCode) {
            case 32:
            case 38:
                this.kick(e);
                e.preventDefault(); //prevent scroll
                break;
            case 37:
                this.speed++;
                this.ticker = 0;
                this.obj.position.left -= this.speed;
                this.lastDir = -1;
                e.preventDefault(); //prevent scroll
                break;
            case 39:
                this.speed++;
                this.ticker = 0;
                this.obj.position.left += this.speed;
                this.lastDir = 1;
                e.preventDefault(); //prevent scroll
                break;
            default:
                break;
        }
 	}

    /** 
     * @method updateSlew
     * @description provide simple easing motion, also, bounce 
     * off walls.
     */
    updateSlew () {
        this.ticker++;
        if (this.speed > 0) {
            if (this.ticker > 10) {
                this.speed /= 2;
                if (this.speed < 1) {
                    this.speed = 0;
                }
            }
        }
        this.obj.position.left += (this.lastDir * this.speed);

        //check bounds
        if (this.bounds) {
            if (this.image.data) {
                var w = this.image.data.width;
                if (this.obj.position.left < this.bounds.left) {
                    this.lastDir = 1;
                    this.obj.position.left = this.bounds.left + (this.speed * 1.5);
                } else if (this.obj.position.left > this.bounds.right - w) {
                    this.lastDir = -1;
                    this.obj.position.left = this.bounds.right - w - (this.speed * 1.5);
                }
            }
        }
    }

    /** 
     * @method kick
     * @description if foot is near Trump, kick him into the Animal
     */
    kick (e) {
        //console.log('::::THIS TRUMP:::::' + this.obj.trump)
        this.obj.position.top = this.inKick;


        // see if we're close enough to kick in the y axis
        var trumpYDist = this.obj.position.top - this.obj.trump.image.data.width - this.obj.trump.position.top;
        //console.log('trumpYDist:' + trumpYDist)

        // If Player is close in Y, and inside X range, kick the Trump into AnimalArea
        if (trumpYDist < 10) {

        // start the Trump moving, speed
        this.obj.trump.speed = 40;

        // TODO: ADD EDGE CASE WHERE TRUMP IN BOTTOM-LEFT, BOUNCE TO RIGHT

            // compute dx and dy for Trump
            var dist = (this.obj.position.left - this.obj.trump.position.left) / 50;
            if (Math.abs(dist) < 1.0) {
                var dx = dist;
                if(dx > 0 && dx < 0.7) {
                   this.obj.trump.dx = dx;
                    this.obj.trump.dy = 1.0 - dx;
                } else if (dx < 0 && dx > -0.7) {
                   this.obj.trump.dx = dx;
                    this.obj.trump.dy = 1.0 + dx;

                } else if (dx == 0) {
                    // slight randomization of dx
                    var d = performance.now();
                    (d = parseInt(d) - d);
                    d = this.truncator(d, 2) / 10;
                    this.obj.trump.dx = d;
                    this.obj.trump.dy = 1.0 + dx;

                } else {
                    this.obj.trump.dx = 0;
                    this.obj.trump.dy = 0;
                }
            }
        }
    } // end of function

    /** 
     * @method unkick
     * @description set position of Player back to original
     */
    unkick (e) {
        switch (e.keyCode) {
            case 32:
            case 38:
                this.obj.position.top = this.unKick;
                break;
        }
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
 	 * @method updateRandomWalk
 	 * @description generate random walk, with one preferred direction, 
 	 * used by Animals.
     * this.direction is the overall path the Animal is following to one of the 
     * four walls of the AnimalArea. If it is 'return' it has collided with a Trump
     * and is returning to its cage.
 	 */
 	updateRandomWalk () {
 		this.counter++;
 		this.delayCounter++;
 		if (this.delayCounter < this.delay) {
 			//console.log('delayCounter:' + this.delayCounter + ' MAX:' + this.MAX_DELAY);
 			return;
 		}

        // compute dx and dy from random walk. store initial position
        var oldLeft = this.obj.position.left;
        var oldTop = this.obj.position.top;

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
 					this.speed += this.timeStampRandom() / 120;
 				}
			 	this.obj.position.top += this.speed;
 				this.obj.position.left += this.newLeft;
 				break;
 			case 'right':
 				this.obj.position.left += (this.speed + (0.1 * this.getRandom(1, this.speed)));
 				this.obj.position.top += 10 * (this.getRandom(-this.speed, this.speed));
 				break;
 			case 'return':
                // TODO: return Animal to its cage
                break;
            case 'caged':
                // TODO: when caged, reset until it is uncaged again
                break;
            default:
 				console.error('Mover.setPrefDirection: invalid direction:' + this.direction);
 				break;
 		}

        var xdist = oldLeft - this.obj.position.left;
        var ydist = oldTop - this.obj.position.top;
        var sum = xdist + ydist;
        this.obj.dx = xdist / sum;
        this.obj.dy = ydist / sum;

    }

    /**
     * @method boxCollision
     * detect intersection of two rectangles, and 
     * rebound according to angle of collision
     * @link https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
     * @link http://gamedevelopment.tutsplus.com/tutorials/when-worlds-collide-simulating-circle-circle-collisions--gamedev-769
     */
     calculateNewVelocities(firstBall, secondBall) {

        //reverse dx and dy between objects
        //var newVelX2 = -firstBall.dx;
        //var newVelY2 = -firstBall.dy;
 
        //var newVelX1 = -secondBall.dx;
        //var newVelY1 = -secondBall.dy;

        console.log('firstBall.dx:' + firstBall.dx + ' secondBall.dx:' + secondBall.dx);

        //firstBall.dx = newVelX1;
        //firstBall.dy = newVelY1;

        //secondBall.dx = newVelX2;
        //secondBall.dy = newVelY2;

        //firstBall.position.left += newVelX1;
        //firstBall.position.top += newVelY1;

        //secondBall.position.left += newVelX2;
        //secondBall.position.top += newVelY2;
    }

    /** 
     * @method pingPong
     * @description move in a ping-pong style. This is specific to the game.
     * 1. collision starts the character moving
     * 2. they bounce on all walls EXCEPT the one they were closest to when collide with
     * 3. when they intersect that wall, they stop
     */
    pingPong () {
        //console.log('dx:' + this.obj.dx + ' dy:' + this.obj.dy);
        this.obj.position.left -= this.obj.speed * this.obj.dx;
        this.obj.position.top -= this.obj.speed * this.obj.dy;

        //check bounds (AnimalArea)
        if (this.bounds) {
            if (this.obj.image.data) {

                var w = this.obj.image.data.width;
                var h = this.obj.image.data.height;

                // run this only if we are moving down the screen
                if (this.obj.dy < 0) {
                    if (this.obj.position.top > (this.obj.startTop - (this.obj.dy * this.obj.speed))) {
                        //this.obj.dy = -this.obj.dy;
                        this.obj.position.top = this.obj.startTop;
                        this.obj.dx = 0;
                        this.obj.dy = 0;
                    }
                    var dist = this.bounds.bottom - h - this.obj.position.top;
                    var spd = -this.obj.dy * this.obj.speed * 4;
                   ////////console.log('dist:' + dist + ' spd:' + spd)
                
                    // decelerate before stopping at bottom of AnimalArea
                    if (dist < spd && spd > 2) {
                        this.obj.speed /= 2;
                    }
                } //end of dy negative (going down)

                // bounce on the other 3 walls
                if (this.obj.position.left < this.bounds.left) {
                    this.obj.dx = -this.obj.dx;
                }
                if (this.obj.position.top < this.bounds.top) {
                    this.obj.dy = -this.obj.dy;
                }
                if (this.obj.position.left > this.bounds.right - w) {
                    this.obj.dx = -this.obj.dx;
                }

                // If we encounder an animal, bounce, AND 'kick' the animal back into its cage
                if (this.obj.animals) {
                    for (var i = 0, len = this.obj.animals.length; i < len; i++) {
                        var animal = this.obj.animals[i];
                        var aw = animal.image.data.width;
                        var ah = animal.image.data.height;

                        if (this.obj.position.left < animal.position.left + aw &&
                            this.obj.position.left + w > animal.position.left &&
                            this.obj.position.top < animal.position.top + ah &&
                            this.obj.position.top + h > animal.position.top) {                           
                                this.calculateNewVelocities(this.obj, animal);
                            }
                    }
                }

            }
        }
        //Let bounce 1 time off of bottom, but stop the second time

    }

    wasKicked () {

    }

    updatePingPong () {

    }

 } // end of class
