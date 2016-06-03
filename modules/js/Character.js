/** 
 * Character.js
 * Game-generated or user avatars. Characters are rendered in Canvas, but have their 
 * position computed and updated outside canvas.
 * @inherits GamePiece
 */
 import GamePiece from './GamePiece.js';

 import Info from './Info.js';
 import Image from './Image.js';
 import StaticImage from './StaticImage.js';

 export default class Character extends GamePiece {

 	constructor (config) {
 		super (config);

 		// store a reference to the game object
 		this.game = config.game;

 		this.image = new StaticImage(
 			{
 				name: config.name + '-image',
 				path: config.path
 			}
 		);

 		this.image.load(config.path);
 	}

 }