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
     * @method randomizer
     * @description randomize a number
     */
    randomizer () {
        var d = performance.now();
        (d = parseInt(d) - d);
        d = this.truncator(d, 2) / 10;
        return d;
    }

    /** 
     * @method getCenter
     */
    getCenter (x, y, width, height) {
        return {
            x: x + (width/2),
            y: y + (height/2)
        }
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
                    this.speed /= 1.2;
                    this.obj.position.left = this.bounds.left + (this.speed * 1.5);
                } else if (this.obj.position.left > this.bounds.right - w) {
                    this.lastDir = -1;
                    this.speed /= 1.2;
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

            // if too close to left wall, pre-assign a value
            if (this.obj.trump.position.left < (this.bounds.left + 20)) {
                console.log(">>Trump: left bound correction")
                this.obj.trump.dx = -0.2;
                this.obj.trump.dy = 0.8;
                return;
            }

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

                } else if (dx < 0.003) {
                    var d = this.randomizer();
                    d = d - this.randomizer();

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

    /** 
     * @method timeStampRandom
     * @description randomize in a 10-fold range using window.performance
     */
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
        this.oldLeft = this.obj.position.left;
        this.oldTop = this.obj.position.top;

 		switch (this.direction) {
 			case 'top':
 				this.obj.position.top -= (this.speed + (0.1 * this.getRandom(1, this.speed)));
 				this.obj.position.left += 10 * (this.getRandom(-this.speed, this.speed));
                if(isNaN(this.obj.position.left)) {
                    //TODO: FIGURE OUT WHAT IS BEING COMPUTED AS NAN FOR THIS!!!!!
                    //TODO: ADD ANIMAL REBOUNT TO HOME CAGE
                    //TODO: ADD ANIMAL STAYS IN CAGE
                    //TODO: ANIMALS "roll" AROUND STATIONARY TRUMP
                }
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

        // Compute dx and dy for Animals
        var xdist = this.oldLeft - this.obj.position.left;
        var ydist = this.oldTop - this.obj.position.top;
        var sum = xdist + ydist;
        if (sum > 0.0001) {
            this.obj.dx = xdist / sum;
            this.obj.dy = ydist / sum;  
        } else {
            this.obj.dx = 0;
            this.obj.dy = 0;
        }

        // save our new position
        this.oldLeft = this.obj.position.left;
        this.oldTop = this.obj.position.top;

        //console.log(' dx:' + this.obj.dx + ' dy:' + this.obj.dy + ' sum:' + sum)
    }

    calculateCollision (trump, animal) {
        var w = this.obj.image.data.width;
        var h = this.obj.image.data.height;
        var aw = animal.image.data.width;
        var ah = animal.image.data.height;

        if (this.obj.position.left < animal.position.left + aw &&
            this.obj.position.left + w > animal.position.left &&
            this.obj.position.top < animal.position.top + ah &&
            this.obj.position.top + h > animal.position.top) { 
                
                //get Trump centeral point
                var tXCenter = this.obj.position.left + w/2;
                var tYCenter = this.obj.position.top  + h/2;

                //get Animal central point
                var aXCenter = animal.position.left + aw/2;
                var aYCenter = animal.position.top + ah/2;

                //compute x and y vector between centers
                var cXDiff = tXCenter - aXCenter;
                var cYDiff = tYCenter = aYCenter;

                // Trump doesn't react if not moving (even if animal does)
                if (trump.speed != 0 && trump.dx != 0 && trump.dy != 0) {

                // move object so it isn't colliding anymore
                if (cXDiff >= 0) {
                    trump.position.x += (cXDiff + 1);
                } else {
                    trump.position.x -= (cXDiff + 1);
                }

                if (cYDiff >= 0) {
                    trump.position.y += (cYDiff + 1);
                } else {
                    trump.position.y -= (cYDiff + 1);
                }

                // normalize new vectors
                trump.dx = -cXDiff / cYDiff;
                trump.dy = -cYDiff / cXDiff;

                // rounding error
                var ddif = Math.abs(trump.dx + trump.dy);
                if (ddif > 1.0) {
                    if (trump.dx >= 0) {
                        trump.dy -= ddif;
                    } else {
                        trump.dy += ddif;
                    }
                }
                } //end of Trump is moving
                //console.log('dx::::::' + trump.dx + ' dy::::::' + trump.dy)

            return true;                          
        }
        return false;
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
                        
                        if (this.calculateCollision(this.obj, animal)) {
                            //set the Animal's state to return home
                        }
                        /*
                        if (this.obj.position.left < animal.position.left + aw &&
                            this.obj.position.left + w > animal.position.left &&
                            this.obj.position.top < animal.position.top + ah &&
                            this.obj.position.top + h > animal.position.top) {                           
                                this.calculateNewVelocities(this.obj, animal);
                            }
                        */
                    }
                }

            }
        }

        //break out of horizontal move
        if (this.obj.dy < 0.001 && this.obj.dx > 0.001) {
            var d = this.randomizer();
            this.obj.dy += d - this.randomizer();
        }

    }

 } // end of class
