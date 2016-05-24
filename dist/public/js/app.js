(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Animal.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The critters that Trump tries to stop from getting the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Animal = function (_Character) {
  _inherits(Animal, _Character);

  function Animal(config) {
    _classCallCheck(this, Animal);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Animal).call(this, config));
  }

  return Animal;
}(_Character3.default);

exports.default = Animal;

},{"./Character.js":6,"./GamePiece.js":10}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Area2 = require('./Area.js');

var _Area3 = _interopRequireDefault(_Area2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AnimalArea.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The region animals move through to get to Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Area
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Cage = function (_Area) {
  _inherits(Cage, _Area);

  function Cage(config) {
    _classCallCheck(this, Cage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Cage).call(this, config));
  }

  return Cage;
}(_Area3.default);

exports.default = Cage;

},{"./Area.js":3,"./GamePiece.js":10}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Area.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A generic region of the game screen.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Area = function (_GamePiece) {
  _inherits(Area, _GamePiece);

  function Area(config) {
    _classCallCheck(this, Area);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Area).call(this, config));
  }

  return Area;
}(_GamePiece3.default);

exports.default = Area;

},{"./GamePiece.js":10}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Bear.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Tiger, who tries to get the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Bear = function (_Animal) {
  _inherits(Bear, _Animal);

  function Bear(config) {
    _classCallCheck(this, Bear);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Bear).call(this, config));
  }

  return Bear;
}(_Animal3.default);

exports.default = Bear;

},{"./Animal.js":1,"./Character.js":6,"./GamePiece.js":10}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Area2 = require('./Area.js');

var _Area3 = _interopRequireDefault(_Area2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The region where animals are caged.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Area
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Cage = function (_Area) {
  _inherits(Cage, _Area);

  function Cage(config) {
    _classCallCheck(this, Cage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Cage).call(this, config));
  }

  return Cage;
}(_Area3.default);

exports.default = Cage;

},{"./Area.js":3,"./GamePiece.js":10}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Character.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game-generated or user avatars
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Character = function (_GamePiece) {
  _inherits(Character, _GamePiece);

  function Character(config) {
    _classCallCheck(this, Character);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Character).call(this, config));
  }

  return Character;
}(_GamePiece3.default);

exports.default = Character;

},{"./GamePiece.js":10}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text2 = require('./Text.js');

var _Text3 = _interopRequireDefault(_Text2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * DynamicText.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Text that can be changed by user (e.g. input field), or 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * updated by the game itself.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var DynamicText = function (_Text) {
  _inherits(DynamicText, _Text);

  function DynamicText(config) {
    _classCallCheck(this, DynamicText);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DynamicText).call(this, config));
  }

  return DynamicText;
}(_Text3.default);

exports.default = DynamicText;

},{"./GamePiece.js":10,"./Info.js":15,"./Text.js":24}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * EndScreen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Ending screen for the game.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits Screen, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var EndScreen = function (_Screen) {
  _inherits(EndScreen, _Screen);

  function EndScreen(config) {
    _classCallCheck(this, EndScreen);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(EndScreen).call(this, config));
  }

  return EndScreen;
}(_Screen3.default);

exports.default = EndScreen;

},{"./GamePiece.js":10,"./Screen.js":21}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The entire Game object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Game = function (_GamePiece) {
  _inherits(Game, _GamePiece);

  function Game(config) {
    _classCallCheck(this, Game);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Game).call(this, config));
  }

  return Game;
}(_GamePiece3.default);

exports.default = Game;

},{"./GamePiece.js":10}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * GamePiece.js
 * Basic Game object
 *
 * To make this work, you must be running the Babel transpiler, 
 * and watching for changes in this file with browserify. Two 
 * Terminal windows need to be open:
 * 1. one window where you typed the command "grunt"
 * 2. one window where you typed the command "npm start"
 */

var GamePiece = function () {
    function GamePiece(config) {
        _classCallCheck(this, GamePiece);

        //TODO: use super();
        this.name = config.name;
        this.uuid = this.setId();
    }

    /** 
     * Generate a unique ID for every game object.
     * @link http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     */


    _createClass(GamePiece, [{
        key: 'setId',
        value: function setId() {
            var d = new Date().getTime();
            if (window.performance && typeof window.performance.now === "function") {
                d += performance.now(); //use high-precision timer if available
            }
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
            });
            return uuid;
        }

        /** 
         * Return the given name of this object.
         */

    }, {
        key: 'getName',
        value: function getName() {
            return this.name;
        }

        /** 
         * Return the unique id of this object.
         */

    }, {
        key: 'getId',
        value: function getId() {
            return this.uuid;
        }
    }]);

    return GamePiece;
}();

exports.default = GamePiece;

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * GameScreen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Main game screen object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Screen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var GameScreen = function (_Screen) {
  _inherits(GameScreen, _Screen);

  function GameScreen(config) {
    _classCallCheck(this, GameScreen);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(GameScreen).call(this, config));
  }

  return GameScreen;
}(_Screen3.default);

exports.default = GameScreen;

},{"./GamePiece.js":10,"./Screen.js":21}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Gorilla.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Gorilla, who tries to get the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Gorilla = function (_Animal) {
  _inherits(Gorilla, _Animal);

  function Gorilla(config) {
    _classCallCheck(this, Gorilla);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Gorilla).call(this, config));
  }

  return Gorilla;
}(_Animal3.default);

exports.default = Gorilla;

},{"./Animal.js":1,"./Character.js":6,"./GamePiece.js":10}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Health.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The critters that Trump tries to stop from getting the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Health = function (_Character) {
  _inherits(Health, _Character);

  function Health(config) {
    _classCallCheck(this, Health);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Health).call(this, config));
  }

  return Health;
}(_Character3.default);

exports.default = Health;

},{"./Character.js":6,"./GamePiece.js":10}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText2 = require('./StaticText.js');

var _StaticText3 = _interopRequireDefault(_StaticText2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Identity.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game Logos, LogoTypes, Brand Name
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Identity = function (_StaticText) {
  _inherits(Identity, _StaticText);

  function Identity(config) {
    _classCallCheck(this, Identity);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Identity).call(this, config));
  }

  return Identity;
}(_StaticText3.default);

exports.default = Identity;

},{"./GamePiece.js":10,"./Info.js":15,"./StaticText.js":23,"./Text.js":24}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Info.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Generic informaiton object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Info = function (_GamePiece) {
  _inherits(Info, _GamePiece);

  function Info(config) {
    _classCallCheck(this, Info);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Info).call(this, config));
  }

  return Info;
}(_GamePiece3.default);

exports.default = Info;

},{"./GamePiece.js":10}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText2 = require('./StaticText.js');

var _StaticText3 = _interopRequireDefault(_StaticText2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Instructions.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Text which tells the Player how to play the game.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Instructions = function (_StaticText) {
  _inherits(Instructions, _StaticText);

  function Instructions(config) {
    _classCallCheck(this, Instructions);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Instructions).call(this, config));
  }

  return Instructions;
}(_StaticText3.default);

exports.default = Instructions;

},{"./GamePiece.js":10,"./Info.js":15,"./StaticText.js":23,"./Text.js":24}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Lion.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Lion, who tries to get the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Lion = function (_Animal) {
  _inherits(Lion, _Animal);

  function Lion(config) {
    _classCallCheck(this, Lion);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Lion).call(this, config));
  }

  return Lion;
}(_Animal3.default);

exports.default = Lion;

},{"./Animal.js":1,"./Character.js":6,"./GamePiece.js":10}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Player.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * User-controlled Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Player = function (_Character) {
  _inherits(Player, _Character);

  function Player(config) {
    _classCallCheck(this, Player);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this, config));
  }

  return Player;
}(_Character3.default);

exports.default = Player;

},{"./Character.js":6,"./GamePiece.js":10}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Area2 = require('./Area.js');

var _Area3 = _interopRequireDefault(_Area2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * PlayerArea.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The region where the Player can move.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Area
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var PlayerArea = function (_Area) {
  _inherits(PlayerArea, _Area);

  function PlayerArea(config) {
    _classCallCheck(this, PlayerArea);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PlayerArea).call(this, config));
  }

  return PlayerArea;
}(_Area3.default);

exports.default = PlayerArea;

},{"./Area.js":3,"./GamePiece.js":10}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _DynamicText2 = require('./DynamicText.js');

var _DynamicText3 = _interopRequireDefault(_DynamicText2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Score.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Display user score
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits DynamicText, Text, Info, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Score = function (_DynamicText) {
  _inherits(Score, _DynamicText);

  function Score(config) {
    _classCallCheck(this, Score);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Score).call(this, config));
  }

  return Score;
}(_DynamicText3.default);

exports.default = Score;

},{"./DynamicText.js":7,"./GamePiece.js":10,"./Info.js":15,"./Text.js":24}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Screen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Generic Screen object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Screen = function (_GamePiece) {
  _inherits(Screen, _GamePiece);

  function Screen(config) {
    _classCallCheck(this, Screen);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Screen).call(this, config)); //init 'parent' GamePiece
  }

  return Screen;
}(_GamePiece3.default);

exports.default = Screen;
;

},{"./GamePiece.js":10}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * StartScreen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Opening screen for game.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Screen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var StartScreen = function (_Screen) {
  _inherits(StartScreen, _Screen);

  function StartScreen(config) {
    _classCallCheck(this, StartScreen);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(StartScreen).call(this, config));
  }

  return StartScreen;
}(_Screen3.default);

exports.default = StartScreen;

},{"./GamePiece.js":10,"./Screen.js":21}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text2 = require('./Text.js');

var _Text3 = _interopRequireDefault(_Text2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * StaticText.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Text that cannot be changed after loaded by the game
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var StaticText = function (_Text) {
  _inherits(StaticText, _Text);

  function StaticText(config) {
    _classCallCheck(this, StaticText);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(StaticText).call(this, config));
  }

  return StaticText;
}(_Text3.default);

exports.default = StaticText;

},{"./GamePiece.js":10,"./Info.js":15,"./Text.js":24}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info2 = require('./Info.js');

var _Info3 = _interopRequireDefault(_Info2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Text.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Creates a text-type Info object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits Info, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Text = function (_Info) {
  _inherits(Text, _Info);

  function Text(config) {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Text).call(this, config));
  }

  return Text;
}(_Info3.default);

exports.default = Text;

},{"./GamePiece.js":10,"./Info.js":15}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Tiger.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Tiger, who tries to get the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Tiger = function (_Animal) {
  _inherits(Tiger, _Animal);

  function Tiger(config) {
    _classCallCheck(this, Tiger);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tiger).call(this, config));
  }

  return Tiger;
}(_Animal3.default);

exports.default = Tiger;

},{"./Animal.js":1,"./Character.js":6,"./GamePiece.js":10}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Trump.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The ball-like Character you kick into Animals
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Trump = function (_Character) {
  _inherits(Trump, _Character);

  function Trump(config) {
    _classCallCheck(this, Trump);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Trump).call(this, config));
  }

  return Trump;
}(_Character3.default);

exports.default = Trump;

},{"./Character.js":6,"./GamePiece.js":10}],27:[function(require,module,exports){
'use strict';

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Game = require('./Game.js');

var _Game2 = _interopRequireDefault(_Game);

var _Screen = require('./Screen.js');

var _Screen2 = _interopRequireDefault(_Screen);

var _StartScreen = require('./StartScreen.js');

var _StartScreen2 = _interopRequireDefault(_StartScreen);

var _GameScreen = require('./GameScreen.js');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

var _EndScreen = require('./EndScreen.js');

var _EndScreen2 = _interopRequireDefault(_EndScreen);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText = require('./StaticText.js');

var _StaticText2 = _interopRequireDefault(_StaticText);

var _Identity = require('./Identity.js');

var _Identity2 = _interopRequireDefault(_Identity);

var _Instructions = require('./Instructions.js');

var _Instructions2 = _interopRequireDefault(_Instructions);

var _DynamicText = require('./DynamicText.js');

var _DynamicText2 = _interopRequireDefault(_DynamicText);

var _Score = require('./Score.js');

var _Score2 = _interopRequireDefault(_Score);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Trump = require('./Trump.js');

var _Trump2 = _interopRequireDefault(_Trump);

var _Player = require('./Player.js');

var _Player2 = _interopRequireDefault(_Player);

var _Animal = require('./Animal.js');

var _Animal2 = _interopRequireDefault(_Animal);

var _Lion = require('./Lion.js');

var _Lion2 = _interopRequireDefault(_Lion);

var _Tiger = require('./Tiger.js');

var _Tiger2 = _interopRequireDefault(_Tiger);

var _Bear = require('./Bear.js');

var _Bear2 = _interopRequireDefault(_Bear);

var _Gorilla = require('./Gorilla.js');

var _Gorilla2 = _interopRequireDefault(_Gorilla);

var _Health = require('./Health.js');

var _Health2 = _interopRequireDefault(_Health);

var _Area = require('./Area.js');

var _Area2 = _interopRequireDefault(_Area);

var _Cage = require('./Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

var _AnimalArea = require('./AnimalArea.js');

var _AnimalArea2 = _interopRequireDefault(_AnimalArea);

var _PlayerArea = require('./PlayerArea.js');

var _PlayerArea2 = _interopRequireDefault(_PlayerArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** 
 * Set up the game.
 */

/** 
 * TESTBED - Test all our objects
 */


//Area inheritance.


//Info inheritance


//Screen inheritance
/** 
 * Create the game. Import the primary classes, and 'composite' 
 * the overall Game object out of instances of the classes.
 */
var config = { name: 'Forest Trump or Donald Gump rulz' };

// Make some test game objects


//Character inheritance


//The entire game
var game = new _GamePiece2.default(config);
console.log(game.getName());

//test Game Object
var myGame = new _Game2.default({ name: "ZooKillSoccer" });
console.log(myGame.getName());

//other objects
var myScreen = new _Screen2.default({ name: "Opening Screen" });
console.log(myScreen.getName());

var myStartScreen = new _StartScreen2.default({ name: "Start Screen" });
console.log(myStartScreen.getName());

var myGameScreen = new _GameScreen2.default({ name: "Game Screen" });
console.log(myGameScreen.getName());

var myEndScreen = new _EndScreen2.default({ name: "End Screen" });
console.log(myEndScreen.getName());

var myInfo = new _Info2.default({ name: "Generic Information" });
console.log(myInfo.getName());

var myText = new _Text2.default({ name: "Generic Text Object" });
console.log(myText.getName());

var myStaticText = new _StaticText2.default({ name: "Generic Static Text Object" });
console.log(myStaticText.getName());

var myIdentity = new _Identity2.default({ name: "Generic Identity Object" });
console.log(myIdentity.getName());

var myInstructions = new _Instructions2.default({ name: "Generic Instructions Object" });
console.log(myInstructions.getName());

var myDynamicText = new _DynamicText2.default({ name: "Generic Dynamic Text Object" });
console.log(myDynamicText.getName());

var myScore = new _Score2.default({ name: "scores..." });
console.log(myScore.getName());

var myCharacter = new _Character2.default({ name: "Generic Character" });
console.log(myCharacter.getName());

var myTrump = new _Trump2.default({ name: "Donald Trump" });
console.log(myTrump.getName());

var myPlayer = new _Player2.default({ name: "End User" });
console.log(myPlayer.getName());

var myAnimal = new _Animal2.default({ name: "Generic Animal" });
console.log(myAnimal.getName());

var myLion = new _Lion2.default({ name: "Cowardly the Lion" });
console.log(myLion.getName());

var myTiger = new _Tiger2.default({ name: "Chomper the Tiger" });
console.log(myTiger.getName());

var myBear = new _Bear2.default({ name: "Mauler the Bear" });
console.log(myBear.getName());

var myGorilla = new _Gorilla2.default({ name: "Spunky the Gorilla" });
console.log(myGorilla.getName());

var myHealth = new _Health2.default({ name: "One Health Kit" });
console.log(myHealth.getName());

//Area inheritance.
var myArea = new _Area2.default({ name: "Generic Area" });
console.log(myArea.getName());

var myCage = new _Cage2.default({ name: "Generic Area" });
console.log(myCage.getName());

var myAnimalArea = new _AnimalArea2.default({ name: "AnimalArea" });
console.log(myAnimalArea.getName());

var myPlayerArea = new _PlayerArea2.default({ name: "PlayerArea" });
console.log(myPlayerArea.getName());

},{"./Animal.js":1,"./AnimalArea.js":2,"./Area.js":3,"./Bear.js":4,"./Cage.js":5,"./Character.js":6,"./DynamicText.js":7,"./EndScreen.js":8,"./Game.js":9,"./GamePiece.js":10,"./GameScreen.js":11,"./Gorilla.js":12,"./Health.js":13,"./Identity.js":14,"./Info.js":15,"./Instructions.js":16,"./Lion.js":17,"./Player.js":18,"./PlayerArea.js":19,"./Score.js":20,"./Screen.js":21,"./StartScreen.js":22,"./StaticText.js":23,"./Text.js":24,"./Tiger.js":25,"./Trump.js":26}]},{},[27])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQW5pbWFsQXJlYS5qcyIsIm1vZHVsZXMvanMvQXJlYS5qcyIsIm1vZHVsZXMvanMvQmVhci5qcyIsIm1vZHVsZXMvanMvQ2FnZS5qcyIsIm1vZHVsZXMvanMvQ2hhcmFjdGVyLmpzIiwibW9kdWxlcy9qcy9EeW5hbWljVGV4dC5qcyIsIm1vZHVsZXMvanMvRW5kU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9HYW1lLmpzIiwibW9kdWxlcy9qcy9HYW1lUGllY2UuanMiLCJtb2R1bGVzL2pzL0dhbWVTY3JlZW4uanMiLCJtb2R1bGVzL2pzL0dvcmlsbGEuanMiLCJtb2R1bGVzL2pzL0hlYWx0aC5qcyIsIm1vZHVsZXMvanMvSWRlbnRpdHkuanMiLCJtb2R1bGVzL2pzL0luZm8uanMiLCJtb2R1bGVzL2pzL0luc3RydWN0aW9ucy5qcyIsIm1vZHVsZXMvanMvTGlvbi5qcyIsIm1vZHVsZXMvanMvUGxheWVyLmpzIiwibW9kdWxlcy9qcy9QbGF5ZXJBcmVhLmpzIiwibW9kdWxlcy9qcy9TY29yZS5qcyIsIm1vZHVsZXMvanMvU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9TdGFydFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvU3RhdGljVGV4dC5qcyIsIm1vZHVsZXMvanMvVGV4dC5qcyIsIm1vZHVsZXMvanMvVGlnZXIuanMiLCJtb2R1bGVzL2pzL1RydW1wLmpzIiwibW9kdWxlcy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0tDOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLE07OztBQUVwQixrQkFBYSxNQUFiLEVBQXFCO0FBQUE7O0FBQUEscUZBQ2IsTUFEYTtBQUVwQjs7Ozs7a0JBSm1CLE07Ozs7Ozs7OztBQ0hyQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQixJOzs7QUFF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VixFQUFaOztBQUVBLElBQUksV0FBVyxxQkFBVyxFQUFDLE1BQU0sZ0JBQVAsRUFBWCxDQUFmO0FBQ0EsUUFBUSxHQUFSLENBQVksU0FBUyxPQUFULEVBQVo7OztBQUdBLElBQUksU0FBUyxtQkFBUyxFQUFDLE1BQU0sY0FBUCxFQUFULENBQWI7QUFDQSxRQUFRLEdBQVIsQ0FBWSxPQUFPLE9BQVAsRUFBWjs7QUFFQSxJQUFJLFNBQVMsbUJBQVMsRUFBQyxNQUFNLGNBQVAsRUFBVCxDQUFiO0FBQ0EsUUFBUSxHQUFSLENBQVksT0FBTyxPQUFQLEVBQVo7O0FBRUEsSUFBSSxlQUFlLHlCQUFlLEVBQUMsTUFBTSxZQUFQLEVBQWYsQ0FBbkI7QUFDQSxRQUFRLEdBQVIsQ0FBWSxhQUFhLE9BQWIsRUFBWjs7QUFFQSxJQUFJLGVBQWUseUJBQWUsRUFBQyxNQUFNLFlBQVAsRUFBZixDQUFuQjtBQUNBLFFBQVEsR0FBUixDQUFZLGFBQWEsT0FBYixFQUFaIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKiBcbiAqIEFuaW1hbC5qc1xuICogVGhlIGNyaXR0ZXJzIHRoYXQgVHJ1bXAgdHJpZXMgdG8gc3RvcCBmcm9tIGdldHRpbmcgdGhlIFBsYXllci5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYWwgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuIFx0fVxuIH0iLCIvKiogXG4gKiBBbmltYWxBcmVhLmpzXG4gKiBUaGUgcmVnaW9uIGFuaW1hbHMgbW92ZSB0aHJvdWdoIHRvIGdldCB0byBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBBcmVhXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FnZSBleHRlbmRzIEFyZWEge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG4gXHR9XG5cbiB9IiwiLyoqIFxuICogQXJlYS5qc1xuICogQSBnZW5lcmljIHJlZ2lvbiBvZiB0aGUgZ2FtZSBzY3JlZW4uXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyZWEgZXh0ZW5kcyBHYW1lUGllY2Uge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG4gXHR9XG5cbiB9IiwiLyoqIFxuICogQmVhci5qc1xuICogQSBUaWdlciwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlYXIgZXh0ZW5kcyBBbmltYWwge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuIFx0fVxuIH0iLCIvKiogXG4gKiBDYWdlLmpzXG4gKiBUaGUgcmVnaW9uIHdoZXJlIGFuaW1hbHMgYXJlIGNhZ2VkLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQXJlYVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhZ2UgZXh0ZW5kcyBBcmVhIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuIFx0fVxuXG4gfSIsIi8qKiBcbiAqIENoYXJhY3Rlci5qc1xuICogR2FtZS1nZW5lcmF0ZWQgb3IgdXNlciBhdmF0YXJzXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlciBleHRlbmRzIEdhbWVQaWVjZSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG4gXHR9XG4gfSIsIi8qKiBcbiAqIER5bmFtaWNUZXh0LmpzXG4gKiBUZXh0IHRoYXQgY2FuIGJlIGNoYW5nZWQgYnkgdXNlciAoZS5nLiBpbnB1dCBmaWVsZCksIG9yIFxuICogdXBkYXRlZCBieSB0aGUgZ2FtZSBpdHNlbGYuXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNUZXh0IGV4dGVuZHMgVGV4dCB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cdH1cbn1cbiIsIi8qKiBcbiAqIEVuZFNjcmVlbi5qc1xuICogRW5kaW5nIHNjcmVlbiBmb3IgdGhlIGdhbWUuXG4gKiBAaW5oZXJpdHMgU2NyZWVuLCBHYW1lUGllY2VcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuIFxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZFNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTtcbiBcdH1cbiB9IiwiLyoqIFxuICogR2FtZS5qc1xuICogVGhlIGVudGlyZSBHYW1lIG9iamVjdFxuICogQGluaGVyaXRzIEdhbWVQaWVjZVxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIEdhbWVQaWVjZSB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cdH1cbn0iLCIvKiogXG4gKiBHYW1lUGllY2UuanNcbiAqIEJhc2ljIEdhbWUgb2JqZWN0XG4gKlxuICogVG8gbWFrZSB0aGlzIHdvcmssIHlvdSBtdXN0IGJlIHJ1bm5pbmcgdGhlIEJhYmVsIHRyYW5zcGlsZXIsIFxuICogYW5kIHdhdGNoaW5nIGZvciBjaGFuZ2VzIGluIHRoaXMgZmlsZSB3aXRoIGJyb3dzZXJpZnkuIFR3byBcbiAqIFRlcm1pbmFsIHdpbmRvd3MgbmVlZCB0byBiZSBvcGVuOlxuICogMS4gb25lIHdpbmRvdyB3aGVyZSB5b3UgdHlwZWQgdGhlIGNvbW1hbmQgXCJncnVudFwiXG4gKiAyLiBvbmUgd2luZG93IHdoZXJlIHlvdSB0eXBlZCB0aGUgY29tbWFuZCBcIm5wbSBzdGFydFwiXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQaWVjZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgXHQvL1RPRE86IHVzZSBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZTtcbiAgICAgICAgdGhpcy51dWlkID0gdGhpcy5zZXRJZCgpO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBHZW5lcmF0ZSBhIHVuaXF1ZSBJRCBmb3IgZXZlcnkgZ2FtZSBvYmplY3QuXG4gICAgICogQGxpbmsgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDUwMzQvY3JlYXRlLWd1aWQtdXVpZC1pbi1qYXZhc2NyaXB0XG4gICAgICovXG4gICAgc2V0SWQgKCkge1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxuICAgICAgICB9XG4gICAgICAgIHZhciB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgdmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkqMTYpJTE2IHwgMDtcbiAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQvMTYpO1xuICAgICAgICAgICAgcmV0dXJuIChjPT0neCcgPyByIDogKHImMHgzfDB4OCkpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1dWlkO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBSZXR1cm4gdGhlIGdpdmVuIG5hbWUgb2YgdGhpcyBvYmplY3QuXG4gICAgICovXG4gICAgZ2V0TmFtZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIFJldHVybiB0aGUgdW5pcXVlIGlkIG9mIHRoaXMgb2JqZWN0LlxuICAgICAqL1xuICAgIGdldElkICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXVpZDtcbiAgICB9XG59XG5cblxuIiwiLyoqIFxuICogR2FtZVNjcmVlbi5qc1xuICogTWFpbiBnYW1lIHNjcmVlbiBvYmplY3RcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIFNjcmVlblxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuIFx0fVxuXG4gfSIsIi8qKiBcbiAqIEdvcmlsbGEuanNcbiAqIEEgR29yaWxsYSwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvcmlsbGEgZXh0ZW5kcyBBbmltYWwge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuIFx0fVxuIH0iLCIvKiogXG4gKiBIZWFsdGguanNcbiAqIFRoZSBjcml0dGVycyB0aGF0IFRydW1wIHRyaWVzIHRvIHN0b3AgZnJvbSBnZXR0aW5nIHRoZSBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhbHRoIGV4dGVuZHMgQ2hhcmFjdGVyIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcbiBcdH1cblxuIH0iLCIvKiogXG4gKiBJZGVudGl0eS5qc1xuICogR2FtZSBMb2dvcywgTG9nb1R5cGVzLCBCcmFuZCBOYW1lXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG4gaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRlbnRpdHkgZXh0ZW5kcyBTdGF0aWNUZXh0IHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0fVxufVxuIiwiLyoqIFxuICogSW5mby5qc1xuICogR2VuZXJpYyBpbmZvcm1haXRvbiBvYmplY3RcbiAqIEBpbmhlcml0cyBHYW1lUGllY2VcbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm8gZXh0ZW5kcyBHYW1lUGllY2Uge1xuXG5cdGNvbnN0cnVjdG9yKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cdH1cbn0iLCIvKiogXG4gKiBJbnN0cnVjdGlvbnMuanNcbiAqIFRleHQgd2hpY2ggdGVsbHMgdGhlIFBsYXllciBob3cgdG8gcGxheSB0aGUgZ2FtZS5cbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbiBpbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVjdGlvbnMgZXh0ZW5kcyBTdGF0aWNUZXh0IHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0fVxufVxuIiwiLyoqIFxuICogTGlvbi5qc1xuICogQSBMaW9uLCB3aG8gdHJpZXMgdG8gZ2V0IHRoZSBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuIGltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlvbiBleHRlbmRzIEFuaW1hbCB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG4gXHR9XG4gfSIsIi8qKiBcbiAqIFBsYXllci5qc1xuICogVXNlci1jb250cm9sbGVkIENoYXJhY3RlclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIENoYXJhY3RlciB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG4gXHR9XG4gfSIsIi8qKiBcbiAqIFBsYXllckFyZWEuanNcbiAqIFRoZSByZWdpb24gd2hlcmUgdGhlIFBsYXllciBjYW4gbW92ZS5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEFyZWFcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJBcmVhIGV4dGVuZHMgQXJlYSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTtcbiBcdH1cblxuIH0iLCIvKiogXG4gKiBTY29yZS5qc1xuICogRGlzcGxheSB1c2VyIHNjb3JlXG4gKiBAaW5oZXJpdHMgRHluYW1pY1RleHQsIFRleHQsIEluZm8sIEdhbWVQaWVjZVxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4vRHluYW1pY1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSBleHRlbmRzIER5bmFtaWNUZXh0IHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0fVxufSIsIi8qKiBcbiAqIFNjcmVlbi5qc1xuICogR2VuZXJpYyBTY3JlZW4gb2JqZWN0XG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLmpzXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlbiBleHRlbmRzIEdhbWVQaWVjZSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTsgLy9pbml0ICdwYXJlbnQnIEdhbWVQaWVjZVxuIFx0fVxuXG4gfTsiLCIvKiogXG4gKiBTdGFydFNjcmVlbi5qc1xuICogT3BlbmluZyBzY3JlZW4gZm9yIGdhbWUuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBTY3JlZW5cbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXHR9XG59IiwiLyoqIFxuICogU3RhdGljVGV4dC5qc1xuICogVGV4dCB0aGF0IGNhbm5vdCBiZSBjaGFuZ2VkIGFmdGVyIGxvYWRlZCBieSB0aGUgZ2FtZVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aWNUZXh0IGV4dGVuZHMgVGV4dCB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cdH1cbn1cbiIsIi8qKiBcbiAqIFRleHQuanNcbiAqIENyZWF0ZXMgYSB0ZXh0LXR5cGUgSW5mbyBvYmplY3RcbiAqIEBpbmhlcml0cyBJbmZvLCBHYW1lUGllY2VcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgSW5mbyB7XG5cbiBcdGNvbnN0cnVjdG9yKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuIFx0fVxuXG4gfSIsIi8qKiBcbiAqIFRpZ2VyLmpzXG4gKiBBIFRpZ2VyLCB3aG8gdHJpZXMgdG8gZ2V0IHRoZSBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuIGltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlnZXIgZXh0ZW5kcyBBbmltYWwge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuIFx0fVxuIH0iLCIvKiogXG4gKiBUcnVtcC5qc1xuICogVGhlIGJhbGwtbGlrZSBDaGFyYWN0ZXIgeW91IGtpY2sgaW50byBBbmltYWxzXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJ1bXAgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuIFx0fVxuIH0iLCIvKiogXG4gKiBDcmVhdGUgdGhlIGdhbWUuIEltcG9ydCB0aGUgcHJpbWFyeSBjbGFzc2VzLCBhbmQgJ2NvbXBvc2l0ZScgXG4gKiB0aGUgb3ZlcmFsbCBHYW1lIG9iamVjdCBvdXQgb2YgaW5zdGFuY2VzIG9mIHRoZSBjbGFzc2VzLlxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuLy9UaGUgZW50aXJlIGdhbWVcbmltcG9ydCBHYW1lIGZyb20gJy4vR2FtZS5qcyc7XG5cbi8vU2NyZWVuIGluaGVyaXRhbmNlXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcbmltcG9ydCBTdGFydFNjcmVlbiBmcm9tICcuL1N0YXJ0U2NyZWVuLmpzJztcbmltcG9ydCBHYW1lU2NyZWVuIGZyb20gJy4vR2FtZVNjcmVlbi5qcyc7XG5pbXBvcnQgRW5kU2NyZWVuIGZyb20gJy4vRW5kU2NyZWVuLmpzJztcblxuLy9JbmZvIGluaGVyaXRhbmNlXG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9JZGVudGl0eS5qcyc7XG5pbXBvcnQgSW5zdHJ1Y3Rpb25zIGZyb20gJy4vSW5zdHJ1Y3Rpb25zLmpzJztcbmltcG9ydCBEeW5hbWljVGV4dCBmcm9tICcuL0R5bmFtaWNUZXh0LmpzJztcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlLmpzJztcblxuLy9DaGFyYWN0ZXIgaW5oZXJpdGFuY2VcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuaW1wb3J0IFRydW1wIGZyb20gJy4vVHJ1bXAuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcyc7XG5pbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcbmltcG9ydCBMaW9uIGZyb20gJy4vTGlvbi5qcyc7XG5pbXBvcnQgVGlnZXIgZnJvbSAnLi9UaWdlci5qcyc7XG5pbXBvcnQgQmVhciBmcm9tICcuL0JlYXIuanMnO1xuaW1wb3J0IEdvcmlsbGEgZnJvbSAnLi9Hb3JpbGxhLmpzJztcbmltcG9ydCBIZWFsdGggZnJvbSAnLi9IZWFsdGguanMnO1xuXG4vL0FyZWEgaW5oZXJpdGFuY2UuXG5pbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuaW1wb3J0IENhZ2UgZnJvbSAnLi9DYWdlLmpzJztcbmltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4vQW5pbWFsQXJlYS5qcyc7XG5pbXBvcnQgUGxheWVyQXJlYSBmcm9tICcuL1BsYXllckFyZWEuanMnO1xuXG4vKiogXG4gKiBTZXQgdXAgdGhlIGdhbWUuXG4gKi9cblxuLyoqIFxuICogVEVTVEJFRCAtIFRlc3QgYWxsIG91ciBvYmplY3RzXG4gKi9cbnZhciBjb25maWcgPSB7bmFtZTonRm9yZXN0IFRydW1wIG9yIERvbmFsZCBHdW1wIHJ1bHonfTtcblxuLy8gTWFrZSBzb21lIHRlc3QgZ2FtZSBvYmplY3RzXG52YXIgZ2FtZSA9IG5ldyBHYW1lUGllY2UoY29uZmlnKTtcbmNvbnNvbGUubG9nKGdhbWUuZ2V0TmFtZSgpKTtcblxuLy90ZXN0IEdhbWUgT2JqZWN0XG52YXIgbXlHYW1lID0gbmV3IEdhbWUoe25hbWU6IFwiWm9vS2lsbFNvY2NlclwifSk7XG5jb25zb2xlLmxvZyhteUdhbWUuZ2V0TmFtZSgpKTtcblxuLy9vdGhlciBvYmplY3RzXG52YXIgbXlTY3JlZW4gPSBuZXcgU2NyZWVuKHtuYW1lOiBcIk9wZW5pbmcgU2NyZWVuXCJ9KTtcbmNvbnNvbGUubG9nKG15U2NyZWVuLmdldE5hbWUoKSk7XG5cbnZhciBteVN0YXJ0U2NyZWVuID0gbmV3IFN0YXJ0U2NyZWVuKHtuYW1lOiBcIlN0YXJ0IFNjcmVlblwifSk7XG5jb25zb2xlLmxvZyhteVN0YXJ0U2NyZWVuLmdldE5hbWUoKSk7XG5cbnZhciBteUdhbWVTY3JlZW4gPSBuZXcgR2FtZVNjcmVlbih7bmFtZTogXCJHYW1lIFNjcmVlblwifSk7XG5jb25zb2xlLmxvZyhteUdhbWVTY3JlZW4uZ2V0TmFtZSgpKTtcblxudmFyIG15RW5kU2NyZWVuID0gbmV3IEVuZFNjcmVlbih7bmFtZTogXCJFbmQgU2NyZWVuXCJ9KTtcbmNvbnNvbGUubG9nKG15RW5kU2NyZWVuLmdldE5hbWUoKSk7XG5cbnZhciBteUluZm8gPSBuZXcgSW5mbyh7bmFtZTogXCJHZW5lcmljIEluZm9ybWF0aW9uXCJ9KTtcbmNvbnNvbGUubG9nKG15SW5mby5nZXROYW1lKCkpO1xuXG52YXIgbXlUZXh0ID0gbmV3IFRleHQoe25hbWU6IFwiR2VuZXJpYyBUZXh0IE9iamVjdFwifSk7XG5jb25zb2xlLmxvZyhteVRleHQuZ2V0TmFtZSgpKTtcblxudmFyIG15U3RhdGljVGV4dCA9IG5ldyBTdGF0aWNUZXh0KHtuYW1lOiBcIkdlbmVyaWMgU3RhdGljIFRleHQgT2JqZWN0XCJ9KTtcbmNvbnNvbGUubG9nKG15U3RhdGljVGV4dC5nZXROYW1lKCkpO1xuXG52YXIgbXlJZGVudGl0eSA9IG5ldyBJZGVudGl0eSh7bmFtZTogXCJHZW5lcmljIElkZW50aXR5IE9iamVjdFwifSk7XG5jb25zb2xlLmxvZyhteUlkZW50aXR5LmdldE5hbWUoKSk7XG5cbnZhciBteUluc3RydWN0aW9ucyA9IG5ldyBJbnN0cnVjdGlvbnMoe25hbWU6IFwiR2VuZXJpYyBJbnN0cnVjdGlvbnMgT2JqZWN0XCJ9KTtcbmNvbnNvbGUubG9nKG15SW5zdHJ1Y3Rpb25zLmdldE5hbWUoKSk7XG5cbnZhciBteUR5bmFtaWNUZXh0ID0gbmV3IER5bmFtaWNUZXh0KHtuYW1lOiBcIkdlbmVyaWMgRHluYW1pYyBUZXh0IE9iamVjdFwifSk7XG5jb25zb2xlLmxvZyhteUR5bmFtaWNUZXh0LmdldE5hbWUoKSk7XG5cbnZhciBteVNjb3JlID0gbmV3IFNjb3JlKHtuYW1lOiBcInNjb3Jlcy4uLlwifSk7XG5jb25zb2xlLmxvZyhteVNjb3JlLmdldE5hbWUoKSk7XG5cbnZhciBteUNoYXJhY3RlciA9IG5ldyBDaGFyYWN0ZXIoe25hbWU6IFwiR2VuZXJpYyBDaGFyYWN0ZXJcIn0pO1xuY29uc29sZS5sb2cobXlDaGFyYWN0ZXIuZ2V0TmFtZSgpKTtcblxudmFyIG15VHJ1bXAgPSBuZXcgVHJ1bXAoe25hbWU6IFwiRG9uYWxkIFRydW1wXCJ9KTtcbmNvbnNvbGUubG9nKG15VHJ1bXAuZ2V0TmFtZSgpKTtcblxudmFyIG15UGxheWVyID0gbmV3IFBsYXllcih7bmFtZTogXCJFbmQgVXNlclwifSk7XG5jb25zb2xlLmxvZyhteVBsYXllci5nZXROYW1lKCkpO1xuXG52YXIgbXlBbmltYWwgPSBuZXcgQW5pbWFsKHtuYW1lOiBcIkdlbmVyaWMgQW5pbWFsXCJ9KTtcbmNvbnNvbGUubG9nKG15QW5pbWFsLmdldE5hbWUoKSk7XG5cbnZhciBteUxpb24gPSBuZXcgTGlvbih7bmFtZTogXCJDb3dhcmRseSB0aGUgTGlvblwifSk7XG5jb25zb2xlLmxvZyhteUxpb24uZ2V0TmFtZSgpKTtcblxudmFyIG15VGlnZXIgPSBuZXcgVGlnZXIoe25hbWU6IFwiQ2hvbXBlciB0aGUgVGlnZXJcIn0pO1xuY29uc29sZS5sb2cobXlUaWdlci5nZXROYW1lKCkpO1xuXG52YXIgbXlCZWFyID0gbmV3IEJlYXIoe25hbWU6IFwiTWF1bGVyIHRoZSBCZWFyXCJ9KTtcbmNvbnNvbGUubG9nKG15QmVhci5nZXROYW1lKCkpO1xuXG52YXIgbXlHb3JpbGxhID0gbmV3IEdvcmlsbGEoeyBuYW1lOiBcIlNwdW5reSB0aGUgR29yaWxsYVwifSk7XG5jb25zb2xlLmxvZyhteUdvcmlsbGEuZ2V0TmFtZSgpKTtcblxudmFyIG15SGVhbHRoID0gbmV3IEhlYWx0aCh7bmFtZTogXCJPbmUgSGVhbHRoIEtpdFwifSk7XG5jb25zb2xlLmxvZyhteUhlYWx0aC5nZXROYW1lKCkpO1xuXG4vL0FyZWEgaW5oZXJpdGFuY2UuXG52YXIgbXlBcmVhID0gbmV3IEFyZWEoe25hbWU6IFwiR2VuZXJpYyBBcmVhXCJ9KTtcbmNvbnNvbGUubG9nKG15QXJlYS5nZXROYW1lKCkpO1xuXG52YXIgbXlDYWdlID0gbmV3IENhZ2Uoe25hbWU6IFwiR2VuZXJpYyBBcmVhXCJ9KTtcbmNvbnNvbGUubG9nKG15Q2FnZS5nZXROYW1lKCkpO1xuXG52YXIgbXlBbmltYWxBcmVhID0gbmV3IEFuaW1hbEFyZWEoe25hbWU6IFwiQW5pbWFsQXJlYVwifSk7XG5jb25zb2xlLmxvZyhteUFuaW1hbEFyZWEuZ2V0TmFtZSgpKTtcblxudmFyIG15UGxheWVyQXJlYSA9IG5ldyBQbGF5ZXJBcmVhKHtuYW1lOiBcIlBsYXllckFyZWFcIn0pO1xuY29uc29sZS5sb2cobXlQbGF5ZXJBcmVhLmdldE5hbWUoKSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl19
