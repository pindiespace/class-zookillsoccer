/** 
 * @class Scorer
 * @description create an object which cant detect the end of the game, and 
 * route over to the ending screen. May load a Score text object to display game 
 * scores onscreen.
 * @param Array characterArray the array of Characters who might be involved 
 * in determining score. 
 */
 export default class Scorer {

 	constructor (game) {

 		this.game = game;

 		// Save list of moving characters (Player, Animals, Trumps)
 		this.characterArray = this.game.displayCharacters;
 		window.characterArray = this.characterArray;

 		// Save the bounds of PlayerArea (Animal enters = out of game, escaped)
 		this.outY = this.game.screens['game-screen'].playerAreas[0].position.top;
 	}

	/** 
	 * @method gameOver
	 * @description Check the score, return true if game is over. 
	 * Determined by state of Animals. At game end, they are all either
	 * 1. Back in their cages
	 * 2. Into or beyond the PlayerArea
	 */
	gameOver () {
		var animalsDone = 0, animalsReturned = 0, totAnimals = 0;

		for (var i = 0, len = this.characterArray.length; i < len; i++) {
			var character = this.characterArray[i]
			if (character.direction) {
				totAnimals++;
				//test for returned to cage
				switch (character.direction) {
					case 'return':
					case 'caged':
						animalsDone++;
						animalsReturned++;
						break;
					default:
						break;
				}
				//test for out of AnimalArea (evaded the Player's Trump)
				if(character.position.top > this.outY) {
					animalsDone++;
				}
			}
		}

		if (animalsDone == animalsReturned) {
			this.won = true;
		} else {
			this.won = false;
		}

		if (totAnimals == animalsDone) {
			return true;
		}

		return false;
	}

 }