/** 
 * Create the game. Import the primary classes, and 'composit' 
 * the overall Game object out of instances of the classes.
 */
import GamePiece from './GamePiece.js';
import Screen from './Screen.js';

//Screen inheritance
import StartScreen from './StartScreen.js';
import GameScreen from './GameScreen.js';
import EndScreen from './EndScreen.js';

//Info inheritance
import Info from './Info.js';
import Text from './Text.js';
import StaticText from './StaticText.js';
import Identity from './Identity.js';
import Instructions from './Instructions.js';
import DynamicText from './DynamicText.js';
import Score from './Score.js';

//Character inheritance
import Character from './Character.js';
import Trump from './Trump.js';
import Player from './Player.js';
import Animal from './Animal.js';
import Lion from './Lion.js';
import Tiger from './Tiger.js';
import Bear from './Bear.js';
import Gorilla from './Gorilla.js';
import Health from './Health.js';

//Area inheritance.
import Area from './Area.js';
import Cage from './Cage.js';
import AnimalArea from './AnimalArea.js';
import PlayerArea from './PlayerArea.js';

/** 
 * Set up the game.
 */

/** 
 * TESTBED - Test all our objects
 */
var config = {name:'Forest Trump or Donald Gump rulz'};

// Make some test game objects
var game = new GamePiece(config);
console.log(game.getName());

//test Screen
var configScreen1 = {name: 'Opening Screen'};

var myScreen = new Screen(configScreen1);
console.log(myScreen.getName());

var myStartScreen = new StartScreen({name: "Start Screen"});
console.log(myStartScreen.getName());

var myGameScreen = new GameScreen({name: "Game Screen"});
console.log(myGameScreen.getName());

var myEndScreen = new EndScreen({name: "End Screen"});
console.log(myGameScreen.getName());

var myInfo = new Info({name: "Generic Information"});
console.log(myInfo.getName());

var myText = new Text({name: "Generic Text Object"});
console.log(myText.getName());

var myStaticText = new StaticText({name: "Generic Static Text Object"});
console.log(myStaticText.getName());

var myIdentity = new Identity({name: "Generic Identity Object"});
console.log(myIdentity.getName());

var myInstructions = new Instructions({name: "Generic Instructions Object"});
console.log(myInstructions.getName());

var myDynamicText = new DynamicText({name: "Generic Dynamic Text Object"});
console.log(myDynamicText.getName());



//test Gorilla
var myGorilla = new Gorilla({ name: "Spunky"});
console.log(myGorilla.getName());
















