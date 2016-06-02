/** 
 * StaticImage.js
 * Image-style Information that cannot be changed once the game is loaded
 */
 import GamePiece from './GamePiece.js';
 import Info from './Info.js';

export default class Image extends Info {

	constructor (config) {
		super(config);
		this.ready = false; //over-ride GamePiece and info with deferrals
		this.image = null;
	}

	loadImage (domId, path, callback) {
		console.log('entering loadimage')
		var img = document.createElement('img');
		img.src = path;
		var that = this; // JS-specific kludge to retain scope
		img.onload = function () {
			console.log('image loaded')
			that.setReady(true);
			document.getElementById(domId).appendChild(img);
			if(callback) {
				callback();
			}
		}
	}

	loadBackgroundImage (domId, path) {
		document.getElementById(domId).style.backgroundImage='url(' + path + ')';
	}

}
