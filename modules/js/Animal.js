/** 
 * Animal.js
 * The critters that Trump tries to stop from getting the Player.
 * @inherits GamePiece, Character
 */
 import GamePiece from './GamePiece.js';
 import Character from './Character.js';

 import Info from './Info.js';
 import Image from './Image.js';
 import StaticImage from './StaticImage.js';

 export default class Animal extends Character {

 	constructor (config) {
 		super (config);

 		this.image = new StaticImage({name: 'Animal Image', path: config.path, callback: this.ready});
 	}

 	// Function runs once StaticImage finishes loading the image
 	ready () {
 		console.log('Animal ready!');
 	}
 }