/** 
 * @class Collider
 * @description detect collisions between specific objects in the 
 * game framework. It is NOT a general-purpose collision detector.
 */

 export default class Collider {

 	constructor (characterArray) {
 		this.characterArray = characterArray;
 		this.animalArray = []; //filled up in setUpCollisions
 		this.setUpCollisions();
 	}

 	setUpCollisions () {
 		for (var i = 0, len = this.characterArray.length; i < len; i++) {
 			switch (this.characterArray[i].constructor.name) {
 				case 'Lion':
 				case 'Tier':
 				case 'Bear':
 				case 'Gorilla':
 					this.animalArray.push(this.characterArray[i]);
 					break;
 				case 'Trump':
 					this.trump = this.characterArray[i];
 					break;
 				case 'Player':
 					this.player = this.characterArray[i];
 					break;
 				default:
 					break;
 			}
 		}

 		//cross-connect the impactors
 		this.trump.player = this.player;
 		this.trump.animals = this.animalArray;
 		this.player.trump = this.trump;

 	}
 }