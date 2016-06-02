/** 
 * Identity.js
 * Game Logos, LogoTypes, Brand Name
 */
 import GamePiece from './GamePiece.js';
 import Info from './Info.js';
 import Image from './Image.js';
 import StaticImage from './StaticImage.js';

export default class Identity extends StaticImage {

	constructor (config) {
		super(config);

		this.setSource(config.source);
		this.setAuthor(config.author);
		console.log('IN IDENTITY')
		this.loadImage(config.domId, config.path, this.isReady);

		//Hide any <h2> text equivalent of identity
		var textIdentity = document.querySelector('#' + config.domId + ' h2');
		textIdentity.style.display = 'none';
	}

}
