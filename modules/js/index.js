/** 
 * Create the game. Import the primary classes, and 'composit' 
 * the overall Game object out of instances of the classes.
 */
import GamePiece from './GamePiece.js';
import Area from './Area.js';
import {Character, Player} from './Character.js';
import Info from './Info.js';
import Screen from './Screen.js';

/** 
 * Set up the game.
 */
var config = { 
    name:'Forest Trump or Donald Gump rulz'
}

// Make some test game objects
var game = new GamePiece(config);
console.log(game.getName());

var area = new Area(config);
console.log(area.getName());

var character = new Character(config);
var player = new Player(config);
