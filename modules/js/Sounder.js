/** 
 * @class Sounder
 * @description provide sounds that other objects can play.
 * Adapted from
 * @http://blog.sklambert.com/html5-canvas-game-html5-audio-and-finishing-touches/
 * Audio converters
 * @link http://media.io/
 * @link https://sourceforge.net/projects/audacity/
 * @link http://www.mediahuman.com/audio-converter/
 * @link http://www.html5audioconverter.com/
 * Audio Samples
 * @link http://www.grsites.com/archive/sounds/category/25/?offset=20
 * @link https://www.freesound.org
 */
export default class Sounder {

	constructor () {

		// Create an array of loaded sounds
		this.path = 'audio/';
		this.sounds = [];
		this.checkAudio();
	}

	checkAudio () {
		var elem = document.createElement('audio');
		var bool = false;

		try {
			if (bool = !!elem.canPlayType) {
				bool = new Boolean(bool);
				bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
				bool.mp3 = elem.canPlayType('audio/mpeg;').replace(/^no$/,'');
				bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/,'');
				bool.m4a = (elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;')).replace(/^no$/,'');
			}
		} catch (e) {}
			// list supported audio types
			//elem = null; 
			this.type = bool;

			for (var i in this.type) {
				console.log(i + ' support:' + this.type[i]);
			}
	}

	setSound (e, name, volume) {
		if (!volume) {
			volume = 0.5;
		}
		this.sounds[name] = e.target;
		this.sounds[name].volume = volume;
	}

	soundError (e, name) {
		console.error('Audio ' + name + ' faied to load');
		this.sounds[name] = null;
	}

	addSound (name, volume) {
		if (!name) {
			console.error('tried to load audio file without a name and/or path, aborting');
			return;
		}
		// try creating the sound
		var snd;
		// get the extension and remaining path
		for (var i in this.type) {
			console.log('this.type[' + i + ']=' + this.type[i]);
			if (this.type[i] != "") { //returned dataType for elem.canPlayType(...)
				console.log("TRYING TO LOAD:" + this.path + name + '.' + i)
				snd = new Audio('audio/' + name + '.' + i);
				snd.addEventListener('loadeddata', 
					event => this.setSound(event, name, volume), false);

				snd.addEventListener('error', 
					event => this.soundError(event, name), false);

				snd.load();
				break;
			}
		}
		if (!snd) {
			console.error('sound file for:' + name + ' not found in audio');
		}

		//snd.addEventListener('ended', function() {
		//	this.sounds[name] = snd;
		//}, false);


	}

	playSound (name) {
		if (this.sounds[name]) {
			this.sounds[name].play();
		} else {
			console.error('no sound file with name:' + name + ' in audio folder');
		}
	}

	fileExists(url) {
		var xhr = new XMLHttpRequest();
		xhr.open('HEAD', url, false);
		xhr.send();
		if (xhr.status == '404') {
			return false;
		} else {
			return true;
		}
	}

} // end of class