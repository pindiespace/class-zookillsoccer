/** 
 * Screen.js
 * Generic Screen object
 * @inherits GamePiece.js
 */
 import GamePiece from './GamePiece.js';

 export default class Screen extends GamePiece {

 	constructor (config) {
 		super(config); //init 'parent' GamePiece

 		// save a reference to our parent Game object
 		this.game = config.game;

 		// Screens are defined in HTML, so save a reference to our DOM id
 		this.screenId = config.id;

 		// grab the HTML element corresponding to our screen
 		this.loadScreen(config.id);

 		// insert the copyright info from the main Game object
 		this.addWarning();
 	}

 	loadScreen () {
 		console.log("loading:" + this.screenId);
 		this.dom = document.getElementById(this.screenId);
 	}

 	showScreen () {
 		console.log("showing:" + this.screenId);
 		this.dom.style.display = "block";
 	}

 	hideScreen () {
 		console.log("hiding:" + this.screenId);
 		this.dom.style.display = "none";
 	}

 	showHeader () {
 		this.dom.querySelector('.header').style.display = "block";
 	}

 	hideHeader () {
		this.dom.querySelector('.header').style.display = "none";

 	}

 	showFooter () {
		this.dom.querySelector('.footer').style.display = "block";

 	}

 	hideFooter () {
		this.dom.querySelector('.footer').style.display = "none";

 	}

 	addWarning () {
 		this.dom.querySelector('.footer').innerHTML = this.game.warning;
 	}

 };