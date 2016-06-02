/** 
 * StartScreen.js
 * Opening screen for game.
 * @inherits GamePiece, Screen
 */
import GamePiece from './GamePiece.js';
import Screen from './Screen.js';

 import Info from './Info.js';
 import Text from './Text.js';
 import StaticText from './StaticText.js';

 import Image from './Image.js';
 import StaticImage from './Image.js';
 import Identity from './Identity.js';
 import Background from './Background.js';

export default class StartScreen extends Screen {

	constructor (config) {
		super(config);

		// Load StartScreen sub-objects
		this.loadBackground(
			{
				name: 'background',
				domId: 'start-screen',
				path: 'img/screens/start-screen.png',
				author: '',
				source: '',
				callback: this.ready
			} 
		);

		this.loadIdentity();
		//this.loadInstructions();

		// Make the start button open the main game screen
		this.bindStart();
	}

	loadIdentity () {
		this.identity = new Identity(
			{
				name: 'identity', 
				domId: 'start-screen-identity',
				path: 'img/identity/logo.png', 
				author: 'pete markiewicz', 
				source: 'plyojump', 
				callback: this.ready
			}
		);

		// set position of Identity
		this.identity.setPosition (
			{
				top: 0,
				left: 0
			}
		);

	}

	loadInstructions () {

		this.instructions = new StaticText(
			{
				name: 'game instructions',
				text: 'play to win. That is all Trump cares about, and so should you'
			}
		);

		this.instructions.setPosition(
			{
				top: 0,
				left: 0,
			}
		);

		document.getElementById('instructions')
	}

	bindStart () {
		console.log("in bindStart, this.game:" + this.game)
		// we use bind() to link the function below to StartScreen (otherwise, it thinks it is inside window)
		document.querySelector('#start-screen-play-button').addEventListener('click', 
			function (e) {
				//alert("in handler, game:" + this.game)
				e.preventDefault();
				this.game.startGame();

			}.bind(this));
	}
}