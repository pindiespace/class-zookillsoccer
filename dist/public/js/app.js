(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage = require('./StaticImage.js');

var _StaticImage2 = _interopRequireDefault(_StaticImage);

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

},{"./Character.js":7,"./GamePiece.js":11,"./Image.js":16,"./Info.js":17,"./StaticImage.js":25}],2:[function(require,module,exports){
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

},{"./Area.js":3,"./GamePiece.js":11}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage = require('./StaticImage.js');

var _StaticImage2 = _interopRequireDefault(_StaticImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Area.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A generic region of the game screen. Used to add visual objects, and 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * create bounds for collision detection.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Info, Image, StaticImage
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Area = function (_GamePiece) {
  _inherits(Area, _GamePiece);

  function Area(config) {
    _classCallCheck(this, Area);

    // create a <div>, add to DOM, with optional image

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Area).call(this, config));

    _this.addToDOM(config.name, config.container, config.path);

    // position with absolute coordinated
    _this.setDOMPosition(config.position); //inherited from GamePiece
    _this.setDOMSize(config.size);
    return _this;
  }

  // create DOM element, Load a background image, and insert into container


  _createClass(Area, [{
    key: 'addToDOM',
    value: function addToDOM(name, container, imgPath) {
      this.dom = document.createElement('div');
      this.dom.id = name + '-area';

      // position absolutely
      this.dom.style.position = 'absolute';

      // Don't allow padding or margins or borders for Areas
      this.dom.style.margin = '0px';
      this.dom.style.padding = '0px';

      // add to the DOM
      container.insertBefore(this.dom, container.childNodes[0]);

      // if we have an image, insert in element background
      if (imgPath) {

        this.image = new _StaticImage2.default({
          name: this.dom.id + '-image'
        });

        this.image.loadBackgroundImage(this.dom, imgPath);
      }
    }

    // bounds detector for supplied Character

  }]);

  return Area;
}(_GamePiece3.default);

exports.default = Area;

},{"./GamePiece.js":11,"./Image.js":16,"./Info.js":17,"./StaticImage.js":25}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage2 = require('./StaticImage.js');

var _StaticImage3 = _interopRequireDefault(_StaticImage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Background.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game Logos, LogoTypes, Brand Name
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Background = function (_StaticImage) {
  _inherits(Background, _StaticImage);

  function Background(config) {
    _classCallCheck(this, Background);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Background).call(this, config));

    _this.setSource(config.source);
    _this.setAuthor(config.author);
    _this.loadBackgroundImage(config.domId, config.path);
    return _this;
  }

  return Background;
}(_StaticImage3.default);

exports.default = Background;

},{"./GamePiece.js":11,"./Image.js":16,"./Info.js":17,"./StaticImage.js":25}],5:[function(require,module,exports){
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

},{"./Animal.js":1,"./Character.js":7,"./GamePiece.js":11}],6:[function(require,module,exports){
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

},{"./Area.js":3,"./GamePiece.js":11}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage = require('./StaticImage.js');

var _StaticImage2 = _interopRequireDefault(_StaticImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Character.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game-generated or user avatars. Characters are rendered in Canvas, but have their 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * position computed and updated outside canvas.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Character = function (_GamePiece) {
  _inherits(Character, _GamePiece);

  function Character(config) {
    _classCallCheck(this, Character);

    // Set position and size from configuration

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Character).call(this, config));

    _this.position = config.position;
    _this.size = config.size;

    // store a reference to the game object
    _this.game = config.game;

    _this.image = new _StaticImage2.default({
      name: config.name + '-image',
      path: config.path
    });

    // Images don't automatically load when they're not attached to the DOM,
    // or a CSS background image
    _this.image.load(config.path, function () {
      console.log('loaded:' + config.name);
    });
    return _this;
  }

  // override default draw with our own


  _createClass(Character, [{
    key: 'draw',
    value: function draw(context) {
      if (this.image) {
        var img = this.image.data;
        console.log('drawing');
        if (img) {
          // draw image into HTML5 canvas
          context.drawImage(img, this.position.left, this.position.top);
        }
      }
    }
  }]);

  return Character;
}(_GamePiece3.default);

exports.default = Character;

},{"./GamePiece.js":11,"./Image.js":16,"./Info.js":17,"./StaticImage.js":25}],8:[function(require,module,exports){
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

},{"./GamePiece.js":11,"./Info.js":17,"./Text.js":27}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

    // load the background image

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EndScreen).call(this, config));

    _this.loadBackground('img/screens/end-screen.png');

    // Load EndScreen sub-objects
    _this.loadInputScore();
    _this.loadHighScores();

    // Bind "play again" and "instructions" buttons.
    _this.bindReplay();
    _this.bindInstructions();
    return _this;
  }

  _createClass(EndScreen, [{
    key: 'loadInputScore',
    value: function loadInputScore() {}
  }, {
    key: 'loadHighScores',
    value: function loadHighScores() {}
  }, {
    key: 'bindReplay',
    value: function bindReplay() {
      console.log("in bindStart, this.game:" + this.game);
      // we use bind() to link the function below to StartScreen (otherwise, it thinks it is inside window)
      document.querySelector('#end-screen-play-button').addEventListener('click', function (e) {
        //alert("in handler, game:" + this.game)
        e.preventDefault();
        this.game.startGame();
      }.bind(this));
    }
  }, {
    key: 'bindInstructions',
    value: function bindInstructions() {
      console.log("in bindStart, this.game:" + this.game);
      // we use bind() to link the function below to StartScreen (otherwise, it thinks it is inside window)
      document.querySelector('#end-screen-instructions-button').addEventListener('click', function (e) {
        //alert("in handler, game:" + this.game)
        e.preventDefault();
        this.game.loadGame();
      }.bind(this));
    }
  }]);

  return EndScreen;
}(_Screen3.default);

exports.default = EndScreen;

},{"./GamePiece.js":11,"./Screen.js":23}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

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

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The entire Game object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


//Screen inheritance


//Info inheritance


//Character inheritance


//Area inheritance.


var Game = function (_GamePiece) {
	_inherits(Game, _GamePiece);

	function Game(config) {
		_classCallCheck(this, Game);

		//game copyright

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Game).call(this, config));

		_this.warning = 'This game belongs to us, and nobody else.';

		//game reverts to StartScreen if unplayed
		_this.TIMEOUT = 5555;

		// define Id link to DOM
		_this.START_SCREEN_ID = 'start-screen';
		_this.GAME_SCREEN_ID = 'game-screen';
		_this.END_SCREEN_ID = 'end-screen';

		// model storage, screens
		_this.screens = [];

		// model storage, dynamic characters
		_this.displayCharacters = [];

		// initialize game, load start screen
		_this.init();

		return _this;
	} //end of constructor

	_createClass(Game, [{
		key: 'init',
		value: function init() {

			// Grab the HTML screen elements and encapsulate in a Screen class
			this.screens[this.START_SCREEN_ID] = new _StartScreen2.default({ name: 'Start Screen', id: this.START_SCREEN_ID, game: this });
			this.screens[this.GAME_SCREEN_ID] = new _GameScreen2.default({ name: 'Game Screen', id: this.GAME_SCREEN_ID, game: this });
			this.screens[this.END_SCREEN_ID] = new _EndScreen2.default({ name: 'End Screen', id: this.END_SCREEN_ID, game: this });

			// load the canvas
			this.loadCanvas();

			// make the start screen visible
			this.loadGame();
		}

		// get a reference to the HTML5 canvas context

	}, {
		key: 'loadCanvas',
		value: function loadCanvas() {
			this.canvas = document.querySelector('#game-screen-arena canvas');
			this.context = this.canvas.getContext("2d");
		}

		/** 
   * Load Characters
   * dynamic Characters (e.g. those that animate) are loaded by Game. 
   * Other static visual objects are loaded by Screen classes.
   */

	}, {
		key: 'loadPlayers',
		value: function loadPlayers() {
			this.displayCharacters.push(new _Player2.default({
				name: 'Player', position: { top: 510, left: 200 },
				path: 'img/players/player.png',
				game: this
			}));
		}
	}, {
		key: 'loadAnimals',
		value: function loadAnimals() {
			this.displayCharacters.push(new _Lion2.default({
				name: 'Lion',
				position: { top: 15, left: 94 },
				path: 'img/animals/lion.png',
				game: this
			}));
			this.displayCharacters.push(new _Tiger2.default({
				name: 'Tiger',
				position: { top: 15, left: 333 },
				path: 'img/animals/tiger.png',
				game: this
			}));
			this.displayCharacters.push(new _Bear2.default({
				name: 'Bear', position: { top: 15, left: 570 },
				path: 'img/animals/bear.png',
				game: this
			}));
			this.displayCharacters.push(new _Gorilla2.default({
				name: 'Gorilla', position: { top: 15, left: 812 },
				path: 'img/animals/gorilla.png',
				game: this
			}));
		}
	}, {
		key: 'loadTrumps',
		value: function loadTrumps() {
			this.displayCharacters.push(new _Trump2.default({
				name: 'Trump', position: { top: 450, left: 200 },
				path: 'img/trumps/trump.png',
				game: this
			}));
		}
	}, {
		key: 'loadGame',
		value: function loadGame() {

			//load Info assets

			console.log('loading splash screen');
			this.screens[this.END_SCREEN_ID].hideScreen();
			this.screens[this.START_SCREEN_ID].showScreen();
		}
	}, {
		key: 'startGame',
		value: function startGame() {

			//load Characters
			this.loadAnimals();
			this.loadPlayers();
			this.loadTrumps();

			//make GameScreen visible

			// initialize elapsed time
			this.startTime = new Date();

			// show GameScreen, hide others
			console.log('starting game');
			this.screens[this.START_SCREEN_ID].hideScreen();
			this.screens[this.END_SCREEN_ID].hideScreen();
			this.screens[this.GAME_SCREEN_ID].showScreen();
			this.gameLoop();
		}
	}, {
		key: 'endGame',
		value: function endGame() {

			console.log('ending game');

			// reset timer
			this.startTime = 0;

			// turn off animation
			cancelAnimationFrame(this.globalId);
			this.globalId = null;

			// go to end screen
			this.screens[this.GAME_SCREEN_ID].hideScreen();
			this.screens[this.END_SCREEN_ID].showScreen();
		}
	}, {
		key: 'elapsed',
		value: function elapsed() {

			// record time we have been in gameLoop
			this.endTime = new Date();

			// time difference in ms

			var timeDiff = (this.endTime - this.startTime) / 1000;

			// get seconds (Original had 'round' which incorrectly counts 0:28, 0:29, 1:30 ... 1:59, 1:0)
			return Math.round(timeDiff % 60);
		}
	}, {
		key: 'checkIfComplete',
		value: function checkIfComplete() {

			// game logic to see if the game should reset
			/////////////console.log('ELAPSED:' + this.elapsed());

			if (this.elapsed() > this.TIMEOUT) {
				// if idle too long, reset game to start
				return true;
			}

			return false;
		}
	}, {
		key: 'update',
		value: function update() {

			for (var i = 0, len = this.displayCharacters.length; i < len; i++) {

				var character = this.displayCharacters[i];

				switch (character.getClass()) {
					case 'Player':
					case 'Trump':
					case 'Lion':
					case 'Tiger':
					case 'Bear':
					case 'Gorilla':
					default:
						break;
				}

				character.update();
			}
		}
	}, {
		key: 'draw',
		value: function draw() {

			for (var i = 0, len = this.displayCharacters.length; i < len; i++) {
				this.displayCharacters[i].draw(this.context);
			}
		}
	}, {
		key: 'gameLoop',
		value: function gameLoop() {

			if (this.checkIfComplete()) {
				this.endGame();
				return;
			}
			this.update();
			this.draw();

			//console.log('looping...')
			this.globalId = requestAnimationFrame(this.gameLoop.bind(this));
		}
	}]);

	return Game;
}(_GamePiece3.default);

exports.default = Game;

},{"./Animal.js":1,"./AnimalArea.js":2,"./Area.js":3,"./Bear.js":5,"./Cage.js":6,"./Character.js":7,"./DynamicText.js":8,"./EndScreen.js":9,"./GamePiece.js":11,"./GameScreen.js":12,"./Gorilla.js":13,"./Health.js":14,"./Identity.js":15,"./Image.js":16,"./Info.js":17,"./Instructions.js":18,"./Lion.js":19,"./Player.js":20,"./PlayerArea.js":21,"./Score.js":22,"./Screen.js":23,"./StartScreen.js":24,"./StaticText.js":26,"./Text.js":27,"./Tiger.js":28,"./Trump.js":29}],11:[function(require,module,exports){
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
        this.ready = true; // change to false for deferred loads
    }

    /** 
     * Set a position for the object, also the position of the 
     * DOM representation of the object
     */


    _createClass(GamePiece, [{
        key: 'setDOMPosition',
        value: function setDOMPosition(position) {
            this.position = position;
            if (this.dom) {
                this.dom.style.top = position.top + 'px';
                this.dom.style.left = position.left + 'px';
            }
        }

        /** 
         * Set the object size, also its DOM size
         */

    }, {
        key: 'setDOMSize',
        value: function setDOMSize(size) {
            this.size = size;
            if (this.dom) {
                this.dom.style.width = size.width + 'px';
                this.dom.style.height = size.height + 'px';
            }
        }

        /** 
         * Generate a unique ID for every game object.
         * @link http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
         */

    }, {
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
         * Return the given name of this object
         */

    }, {
        key: 'getName',
        value: function getName() {
            return this.name;
        }

        /** 
         * return the class of the object
         */

    }, {
        key: 'getClass',
        value: function getClass() {
            return this.constructor.name;
        }

        /** 
         * Return the unique id of this object.
         */

    }, {
        key: 'getId',
        value: function getId() {
            return this.uuid;
        }

        /** 
         * Get the enclosing box outside the object for external collisions
         */

    }, {
        key: 'getCollisionRect',
        value: function getCollisionRect() {}

        /** 
         * Get the internal box when this object acts as a container for another
         */

    }, {
        key: 'getBoundsRect',
        value: function getBoundsRect() {}

        /** 
         * Generic 'ready' function (e.g. for delayed asset loads)
         */

    }, {
        key: 'setReady',
        value: function setReady(val) {
            this.ready = val;
        }

        /** 
         * Generic update (override)
         */

    }, {
        key: 'update',
        value: function update() {}

        /** 
         * generic draw (override)
         */

    }, {
        key: 'draw',
        value: function draw() {}
    }]);

    return GamePiece;
}();

exports.default = GamePiece;

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

var _Area = require('./Area.js');

var _Area2 = _interopRequireDefault(_Area);

var _AnimalArea = require('./AnimalArea.js');

var _AnimalArea2 = _interopRequireDefault(_AnimalArea);

var _PlayerArea = require('./PlayerArea.js');

var _PlayerArea2 = _interopRequireDefault(_PlayerArea);

var _Cage = require('./Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GameScreen).call(this, config));

    _this.cages = [];
    _this.animalAreas = [];
    _this.playerAreas = [];

    //GameScreen should hide its local header and footer
    _this.hideHeader();
    _this.hideFooter();

    // load the background image
    _this.loadBackground('img/screens/game-screen.png');

    // get the section that has the canvas for overlay
    var arena = document.getElementById('game-screen-arena');

    // load sub-objects into the Arena
    _this.cages = _this.loadCages(arena, 'img/areas/cage.png');
    _this.animalArea = _this.loadAnimalArea();
    _this.playerArea = _this.loadPlayerArea();

    return _this;
  }

  _createClass(GameScreen, [{
    key: 'loadCages',
    value: function loadCages(container, imgPath) {
      // load 4 Cages
      this.cages.push(new _Cage2.default({
        name: 'lion-cage',
        position: { top: 0, left: 70 },
        size: { width: 100, height: 100 },
        container: container,
        path: imgPath
      }));
      this.cages.push(new _Cage2.default({
        name: 'tiger-cage',
        position: { top: 0, left: 310 },
        size: { width: 100, height: 100 },
        container: container,
        path: imgPath
      }));
      this.cages.push(new _Cage2.default({
        name: 'bear-cage',
        position: { top: 0, left: 550 },
        size: { width: 100, height: 100 },
        container: container,
        path: imgPath
      }));
      this.cages.push(new _Cage2.default({
        name: 'gorilla-cage',
        position: { top: 0, left: 790 },
        size: { width: 100, height: 100 },
        container: container,
        path: imgPath
      }));
    }
  }, {
    key: 'loadAnimalArea',
    value: function loadAnimalArea() {
      // load Animal movement area
      this.animalAreas.push(new _AnimalArea2.default({
        name: 'Zoo',
        position: { top: 104, left: 6 },
        size: { width: 970, height: 410 },
        container: this.dom,
        path: null
      }));
    }
  }, {
    key: 'loadPlayerArea',
    value: function loadPlayerArea() {
      // load the Player
      this.playerAreas.push(new _PlayerArea2.default({
        name: 'Player Area',
        position: { top: 514, left: 6 },
        size: { width: 970, height: 100 },
        container: this.dom,
        path: null
      }));
    }
  }]);

  return GameScreen;
}(_Screen3.default);

exports.default = GameScreen;

},{"./AnimalArea.js":2,"./Area.js":3,"./Cage.js":6,"./GamePiece.js":11,"./PlayerArea.js":21,"./Screen.js":23}],13:[function(require,module,exports){
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

},{"./Animal.js":1,"./Character.js":7,"./GamePiece.js":11}],14:[function(require,module,exports){
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

},{"./Character.js":7,"./GamePiece.js":11}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage2 = require('./StaticImage.js');

var _StaticImage3 = _interopRequireDefault(_StaticImage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Identity.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game Logos, LogoTypes, Brand Name
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Identity = function (_StaticImage) {
	_inherits(Identity, _StaticImage);

	function Identity(config) {
		_classCallCheck(this, Identity);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Identity).call(this, config));

		_this.setSource(config.source);
		_this.setAuthor(config.author);
		_this.loadImageToDOM(config.domId, config.path);

		//Hide any <h2> text equivalent of identity in this CSS box
		var textIdentity = document.querySelector('#' + config.domId + ' h2');
		textIdentity.style.display = 'none';
		return _this;
	}

	return Identity;
}(_StaticImage3.default);

exports.default = Identity;

},{"./GamePiece.js":11,"./Image.js":16,"./Info.js":17,"./StaticImage.js":25}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info2 = require('./Info.js');

var _Info3 = _interopRequireDefault(_Info2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * StaticImage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Image-style Information that cannot be changed once the game is loaded
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Image = function (_Info) {
	_inherits(Image, _Info);

	// save scope
	// TODO: refactor with arrow function

	function Image(config) {
		_classCallCheck(this, Image);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Image).call(this, config));

		_this.ready = false; //over-ride GamePiece and info with deferrals
		_this.image = null;
		_this.path = config.path;
		_this.author = config.author;
		_this.source = config.source;
		return _this;
	}

	// load an image


	_createClass(Image, [{
		key: 'load',
		value: function load(path, callback) {
			var that = this;
			that.setReady(false);
			console.log('entering load inImage');
			var img = document.createElement('img');
			img.src = path;
			img.onload = function () {
				console.log(that.name + ' image loaded from:' + path + ' w:' + img.width + ' h:' + img.height);
				that.setReady(true);
				that.data = img;

				if (callback) {
					callback();
				}
			};
			img.onerror = function (e) {
				console.log('error loading img from:' + path);
			};
		}

		// load image, append to existing DOM element
		// NOTE: this is over-written in Character.js, which loads images into Canvas

	}, {
		key: 'loadImageToDOM',
		value: function loadImageToDOM(domId, path, callback) {
			var that = this;
			this.load(path, function () {
				console.log('foreground image ' + path + ' loaded');
				document.getElementById(domId).appendChild(that.data);
				if (callback) {
					callback();
				}
			});
		}

		// load image as a CSS background image into existing DOM element.
		// NOTE: no local reference to image in this case

	}, {
		key: 'loadBackgroundImage',
		value: function loadBackgroundImage(container, path, callback) {
			console.log('loading background image:' + path);
			container.style.backgroundImage = 'url(' + path + ')';
			this.setReady(true);
			if (callback) {
				callback();
			}
		}

		// Draw the image to a supplied canvas context

	}, {
		key: 'drawToCanvas',
		value: function drawToCanvas(context, position, size) {
			context.drawImage(img, position.top, position.left, size.width, size.height);
		}

		// Draw to the DOM. Assume the Image was already attached to the DOM

	}, {
		key: 'drawToDOM',
		value: function drawToDOM(position, size) {
			this.image.style.top = position.top;
			this.image.style.left = position.left;
			this.image.style.width = size.width;
			this.image.style.height = size.height;
		}
	}]);

	return Image;
}(_Info3.default);

exports.default = Image;

},{"./GamePiece.js":11,"./Info.js":17}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

	_createClass(Info, [{
		key: 'setAuthor',
		value: function setAuthor(author) {
			this.author = author;
		}
	}, {
		key: 'setSource',
		value: function setSource(source) {
			this.source = source;
		}
	}]);

	return Info;
}(_GamePiece3.default);

exports.default = Info;

},{"./GamePiece.js":11}],18:[function(require,module,exports){
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

},{"./GamePiece.js":11,"./Info.js":17,"./StaticText.js":26,"./Text.js":27}],19:[function(require,module,exports){
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

},{"./Animal.js":1,"./Character.js":7,"./GamePiece.js":11}],20:[function(require,module,exports){
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

},{"./Character.js":7,"./GamePiece.js":11}],21:[function(require,module,exports){
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

},{"./Area.js":3,"./GamePiece.js":11}],22:[function(require,module,exports){
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

},{"./DynamicText.js":8,"./GamePiece.js":11,"./Info.js":17,"./Text.js":27}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage = require('./StaticImage.js');

var _StaticImage2 = _interopRequireDefault(_StaticImage);

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

    //init 'parent' GamePiece

    // save a reference to our parent Game object

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Screen).call(this, config));

    _this.game = config.game;

    // Screens are defined in HTML, so save a reference to our DOM id
    _this.domId = config.id;

    // save a reference to the DOM element we're connected to
    _this.dom = document.getElementById(_this.domId);

    // insert the copyright info from the main Game object
    _this.addWarning();
    return _this;
  }

  // load a background image into the Screen


  _createClass(Screen, [{
    key: 'loadBackground',
    value: function loadBackground(path, callback) {
      console.log("loading:" + this.domId);
      this.backgroundImage = new _Image2.default({
        name: this.name + '-image',
        domId: this.id + '-image',
        path: path,
        callback: callback
      });
      this.backgroundImage.loadBackgroundImage(this.dom, path, callback);
    }

    // show and hide regions of the Screen

  }, {
    key: 'showScreen',
    value: function showScreen() {
      console.log("showing:" + this.domId);
      this.dom.style.display = "block";
    }
  }, {
    key: 'hideScreen',
    value: function hideScreen() {
      console.log("hiding:" + this.domId);
      this.dom.style.display = "none";
    }
  }, {
    key: 'showHeader',
    value: function showHeader() {
      this.dom.querySelector('.header').style.display = "block";
    }
  }, {
    key: 'hideHeader',
    value: function hideHeader() {
      this.dom.querySelector('.header').style.display = "none";
    }
  }, {
    key: 'showFooter',
    value: function showFooter() {
      this.dom.querySelector('.footer').style.display = "block";
    }
  }, {
    key: 'hideFooter',
    value: function hideFooter() {
      this.dom.querySelector('.footer').style.display = "none";
    }
  }, {
    key: 'addWarning',
    value: function addWarning() {
      this.dom.querySelector('.footer').innerHTML = this.game.warning;
    }
  }]);

  return Screen;
}(_GamePiece3.default);

exports.default = Screen;
;

},{"./GamePiece.js":11,"./Image.js":16,"./StaticImage.js":25}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText = require('./StaticText.js');

var _StaticText2 = _interopRequireDefault(_StaticText);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _Identity = require('./Identity.js');

var _Identity2 = _interopRequireDefault(_Identity);

var _Background = require('./Background.js');

var _Background2 = _interopRequireDefault(_Background);

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

		// this.dom defined in Screen

		// Load StartScreen sub-objects

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StartScreen).call(this, config));

		_this.loadBackground('img/screens/start-screen.png');

		// load identity image
		_this.loadIdentity();

		// load instructions
		_this.loadInstructions();

		// Make the start button open the main game screen
		_this.bindStart();
		return _this;
	}

	_createClass(StartScreen, [{
		key: 'loadIdentity',
		value: function loadIdentity() {
			this.identity = new _Identity2.default({
				name: 'identity',
				domId: 'start-screen-identity',
				path: 'img/identity/logo.png',
				author: 'pete markiewicz',
				source: 'plyojump'
			});

			// set position of Identity
			this.identity.setDOMPosition({
				top: 0,
				left: 0
			});
		}
	}, {
		key: 'loadInstructions',
		value: function loadInstructions() {

			this.instructions = new _StaticText2.default({
				name: 'game instructions',
				domId: 'instructions',
				text: 'Play to win. That is all Trump cares about, and so should you.'
			});

			this.instructions.setDOMPosition({
				top: 0,
				left: 0
			});
		}
	}, {
		key: 'bindStart',
		value: function bindStart() {
			console.log("in bindStart, this.game:" + this.game);
			// we use bind() to link the function below to StartScreen (otherwise, it thinks it is inside window)
			document.querySelector('#start-screen-play-button').addEventListener('click', function (e) {
				//alert("in handler, game:" + this.game)
				e.preventDefault();
				this.game.startGame();
			}.bind(this));
		}
	}]);

	return StartScreen;
}(_Screen3.default);

exports.default = StartScreen;

},{"./Background.js":4,"./GamePiece.js":11,"./Identity.js":15,"./Image.js":16,"./Info.js":17,"./Screen.js":23,"./StaticText.js":26,"./Text.js":27}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image2 = require('./Image.js');

var _Image3 = _interopRequireDefault(_Image2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * StaticImage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Image-style Information that cannot be changed once the game is loaded
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var StaticImage = function (_Image) {
  _inherits(StaticImage, _Image);

  function StaticImage(config) {
    _classCallCheck(this, StaticImage);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StaticImage).call(this, config));

    _this.static = true;
    return _this;
  }

  return StaticImage;
}(_Image3.default);

exports.default = StaticImage;

},{"./GamePiece.js":11,"./Image.js":16,"./Info.js":17}],26:[function(require,module,exports){
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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StaticText).call(this, config));

    _this.static = true;

    return _this;
  }

  return StaticText;
}(_Text3.default);

exports.default = StaticText;

},{"./GamePiece.js":11,"./Info.js":17,"./Text.js":27}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

    // set the text

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Text).call(this, config));

    _this.setText(config.text);

    // set the DOMId
    _this.addToDOM(config.domId);
    return _this;
  }

  _createClass(Text, [{
    key: 'setText',
    value: function setText(txt) {
      this.text = txt;
    }
  }, {
    key: 'addToDOM',
    value: function addToDOM(domId) {

      this.dom = document.createElement('div');
      this.dom.id = name + '-Text';
      this.dom.innerHTML = this.text;

      // container
      var container = document.getElementById(domId);

      // add to the DOM
      container.insertBefore(this.dom, container.childNodes[0]);
    }
  }]);

  return Text;
}(_Info3.default);

exports.default = Text;

},{"./GamePiece.js":11,"./Info.js":17}],28:[function(require,module,exports){
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

},{"./Animal.js":1,"./Character.js":7,"./GamePiece.js":11}],29:[function(require,module,exports){
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

},{"./Character.js":7,"./GamePiece.js":11}],30:[function(require,module,exports){
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

var _Tests = require('../../tests/Tests.js');

var _Tests2 = _interopRequireDefault(_Tests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** 
 * Set up tests.
 */


//Character inheritance


//The entire game
var myTests = new _Tests2.default();

/**
 * Set up the Game
 */


//Test file (very simple testrunner)


//Area inheritance.


//Info inheritance


//Screen inheritance
/** 
 * Create the game. Import the primary classes, and 'composite' 
 * the overall Game object out of instances of the classes.
 */
var myGame = new _Game2.default({ name: "ZooKillSoccer" });

/** 
 * EXPORT TO WEB CONSOLE
 * To make something visible in Web console for debuggint, attach to window object
 * NOTE: Professional code uses specialized testing modules like Mocha, Karma, and 
 * similar testing libraries.
 */

// we can run this test manually with tests.run();
window.tests = myTests;

// make the game object visible so we can inspect it.
window.game = myGame;

console.log('ZOOKILLSOCCER Game initialized. Access game via "game". Use Tests.run() to test.');

},{"../../tests/Tests.js":31,"./Animal.js":1,"./AnimalArea.js":2,"./Area.js":3,"./Bear.js":5,"./Cage.js":6,"./Character.js":7,"./DynamicText.js":8,"./EndScreen.js":9,"./Game.js":10,"./GamePiece.js":11,"./GameScreen.js":12,"./Gorilla.js":13,"./Health.js":14,"./Identity.js":15,"./Info.js":17,"./Instructions.js":18,"./Lion.js":19,"./Player.js":20,"./PlayerArea.js":21,"./Score.js":22,"./Screen.js":23,"./StartScreen.js":24,"./StaticText.js":26,"./Text.js":27,"./Tiger.js":28,"./Trump.js":29}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

//The entire game


//Screen inheritance


//Info inheritance


//Character inheritance


//Area inheritance.


var _GamePiece = require('../modules/js/GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Game = require('../modules/js/Game.js');

var _Game2 = _interopRequireDefault(_Game);

var _Screen = require('../modules/js/Screen.js');

var _Screen2 = _interopRequireDefault(_Screen);

var _StartScreen = require('../modules/js/StartScreen.js');

var _StartScreen2 = _interopRequireDefault(_StartScreen);

var _GameScreen = require('../modules/js/GameScreen.js');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

var _EndScreen = require('../modules/js/EndScreen.js');

var _EndScreen2 = _interopRequireDefault(_EndScreen);

var _Info = require('../modules/js/Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('../modules/js/Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText = require('../modules/js/StaticText.js');

var _StaticText2 = _interopRequireDefault(_StaticText);

var _Identity = require('../modules/js/Identity.js');

var _Identity2 = _interopRequireDefault(_Identity);

var _Instructions = require('../modules/js/Instructions.js');

var _Instructions2 = _interopRequireDefault(_Instructions);

var _DynamicText = require('../modules/js/DynamicText.js');

var _DynamicText2 = _interopRequireDefault(_DynamicText);

var _Score = require('../modules/js/Score.js');

var _Score2 = _interopRequireDefault(_Score);

var _Character = require('../modules/js/Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Trump = require('../modules/js/Trump.js');

var _Trump2 = _interopRequireDefault(_Trump);

var _Player = require('../modules/js/Player.js');

var _Player2 = _interopRequireDefault(_Player);

var _Animal = require('../modules/js/Animal.js');

var _Animal2 = _interopRequireDefault(_Animal);

var _Lion = require('../modules/js/Lion.js');

var _Lion2 = _interopRequireDefault(_Lion);

var _Tiger = require('../modules/js/Tiger.js');

var _Tiger2 = _interopRequireDefault(_Tiger);

var _Bear = require('../modules/js/Bear.js');

var _Bear2 = _interopRequireDefault(_Bear);

var _Gorilla = require('../modules/js/Gorilla.js');

var _Gorilla2 = _interopRequireDefault(_Gorilla);

var _Health = require('../modules/js/Health.js');

var _Health2 = _interopRequireDefault(_Health);

var _Area = require('../modules/js/Area.js');

var _Area2 = _interopRequireDefault(_Area);

var _Cage = require('../modules/js/Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

var _AnimalArea = require('../modules/js/AnimalArea.js');

var _AnimalArea2 = _interopRequireDefault(_AnimalArea);

var _PlayerArea = require('../modules/js/PlayerArea.js');

var _PlayerArea2 = _interopRequireDefault(_PlayerArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * TESTBED - Test all our objects. This is a very basic testing system. 
 * NOTE: Professional code uses testing libraries like Karma and Mocha.
 */

var Tests = function () {
		function Tests() {
				_classCallCheck(this, Tests);
		}

		// Because we make these objects with 'var' they are scoped to the run() function.


		_createClass(Tests, [{
				key: 'run',
				value: function run() {

						var config = { name: 'Forest Trump or Donald Gump rulz' };

						// Make some test game objects
						var game = new _Game2.default(config);
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
				}
		}]);

		return Tests;
}();

exports.default = Tests;

},{"../modules/js/Animal.js":1,"../modules/js/AnimalArea.js":2,"../modules/js/Area.js":3,"../modules/js/Bear.js":5,"../modules/js/Cage.js":6,"../modules/js/Character.js":7,"../modules/js/DynamicText.js":8,"../modules/js/EndScreen.js":9,"../modules/js/Game.js":10,"../modules/js/GamePiece.js":11,"../modules/js/GameScreen.js":12,"../modules/js/Gorilla.js":13,"../modules/js/Health.js":14,"../modules/js/Identity.js":15,"../modules/js/Info.js":17,"../modules/js/Instructions.js":18,"../modules/js/Lion.js":19,"../modules/js/Player.js":20,"../modules/js/PlayerArea.js":21,"../modules/js/Score.js":22,"../modules/js/Screen.js":23,"../modules/js/StartScreen.js":24,"../modules/js/StaticText.js":26,"../modules/js/Text.js":27,"../modules/js/Tiger.js":28,"../modules/js/Trump.js":29}]},{},[30])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzXFxqc1xcQW5pbWFsLmpzIiwibW9kdWxlc1xcanNcXEFuaW1hbEFyZWEuanMiLCJtb2R1bGVzXFxqc1xcQXJlYS5qcyIsIm1vZHVsZXNcXGpzXFxCYWNrZ3JvdW5kLmpzIiwibW9kdWxlc1xcanNcXEJlYXIuanMiLCJtb2R1bGVzXFxqc1xcQ2FnZS5qcyIsIm1vZHVsZXNcXGpzXFxDaGFyYWN0ZXIuanMiLCJtb2R1bGVzXFxqc1xcRHluYW1pY1RleHQuanMiLCJtb2R1bGVzXFxqc1xcRW5kU2NyZWVuLmpzIiwibW9kdWxlc1xcanNcXEdhbWUuanMiLCJtb2R1bGVzXFxqc1xcR2FtZVBpZWNlLmpzIiwibW9kdWxlc1xcanNcXEdhbWVTY3JlZW4uanMiLCJtb2R1bGVzXFxqc1xcR29yaWxsYS5qcyIsIm1vZHVsZXNcXGpzXFxIZWFsdGguanMiLCJtb2R1bGVzXFxqc1xcSWRlbnRpdHkuanMiLCJtb2R1bGVzXFxqc1xcSW1hZ2UuanMiLCJtb2R1bGVzXFxqc1xcSW5mby5qcyIsIm1vZHVsZXNcXGpzXFxJbnN0cnVjdGlvbnMuanMiLCJtb2R1bGVzXFxqc1xcTGlvbi5qcyIsIm1vZHVsZXNcXGpzXFxQbGF5ZXIuanMiLCJtb2R1bGVzXFxqc1xcUGxheWVyQXJlYS5qcyIsIm1vZHVsZXNcXGpzXFxTY29yZS5qcyIsIm1vZHVsZXNcXGpzXFxTY3JlZW4uanMiLCJtb2R1bGVzXFxqc1xcU3RhcnRTY3JlZW4uanMiLCJtb2R1bGVzXFxqc1xcU3RhdGljSW1hZ2UuanMiLCJtb2R1bGVzXFxqc1xcU3RhdGljVGV4dC5qcyIsIm1vZHVsZXNcXGpzXFxUZXh0LmpzIiwibW9kdWxlc1xcanNcXFRpZ2VyLmpzIiwibW9kdWxlc1xcanNcXFRydW1wLmpzIiwibW9kdWxlc1xcanNcXGluZGV4LmpzIiwidGVzdHNcXFRlc3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7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QUFNLGNBQVAsRUFBVCxDQUFiO0FBQ0EsY0FBUSxHQUFSLENBQVksT0FBTyxPQUFQLEVBQVo7O0FBRUEsVUFBSSxlQUFlLHlCQUFlLEVBQUMsTUFBTSxZQUFQLEVBQWYsQ0FBbkI7QUFDQSxjQUFRLEdBQVIsQ0FBWSxhQUFhLE9BQWIsRUFBWjs7QUFFQSxVQUFJLGVBQWUseUJBQWUsRUFBQyxNQUFNLFlBQVAsRUFBZixDQUFuQjtBQUNBLGNBQVEsR0FBUixDQUFZLGFBQWEsT0FBYixFQUFaO0FBQ0E7Ozs7OztrQkEzRm1CLEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqIFxyXG4gKiBBbmltYWwuanNcclxuICogVGhlIGNyaXR0ZXJzIHRoYXQgVHJ1bXAgdHJpZXMgdG8gc3RvcCBmcm9tIGdldHRpbmcgdGhlIFBsYXllci5cclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcclxuXHJcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xyXG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hbCBleHRlbmRzIENoYXJhY3RlciB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XHJcbiBcdH1cclxuXHJcbiB9IiwiLyoqIFxyXG4gKiBBbmltYWxBcmVhLmpzXHJcbiAqIFRoZSByZWdpb24gYW5pbWFscyBtb3ZlIHRocm91Z2ggdG8gZ2V0IHRvIFBsYXllci5cclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQXJlYVxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBDYWdlIGV4dGVuZHMgQXJlYSB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIoY29uZmlnKTtcclxuIFx0fVxyXG5cclxuIH0iLCIvKiogXHJcbiAqIEFyZWEuanNcclxuICogQSBnZW5lcmljIHJlZ2lvbiBvZiB0aGUgZ2FtZSBzY3JlZW4uIFVzZWQgdG8gYWRkIHZpc3VhbCBvYmplY3RzLCBhbmQgXHJcbiAqIGNyZWF0ZSBib3VuZHMgZm9yIGNvbGxpc2lvbiBkZXRlY3Rpb24uXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEluZm8sIEltYWdlLCBTdGF0aWNJbWFnZVxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG5cclxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XHJcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJlYSBleHRlbmRzIEdhbWVQaWVjZSB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIoY29uZmlnKTtcclxuXHJcbiBcdFx0Ly8gY3JlYXRlIGEgPGRpdj4sIGFkZCB0byBET00sIHdpdGggb3B0aW9uYWwgaW1hZ2VcclxuIFx0XHR0aGlzLmFkZFRvRE9NKGNvbmZpZy5uYW1lLCBjb25maWcuY29udGFpbmVyLCBjb25maWcucGF0aCk7XHJcblxyXG4gXHRcdC8vIHBvc2l0aW9uIHdpdGggYWJzb2x1dGUgY29vcmRpbmF0ZWRcclxuIFx0XHR0aGlzLnNldERPTVBvc2l0aW9uKGNvbmZpZy5wb3NpdGlvbik7IC8vaW5oZXJpdGVkIGZyb20gR2FtZVBpZWNlXHJcbiBcdFx0dGhpcy5zZXRET01TaXplKGNvbmZpZy5zaXplKTtcclxuIFx0fVxyXG5cclxuIFx0Ly8gY3JlYXRlIERPTSBlbGVtZW50LCBMb2FkIGEgYmFja2dyb3VuZCBpbWFnZSwgYW5kIGluc2VydCBpbnRvIGNvbnRhaW5lclxyXG4gXHRhZGRUb0RPTSAobmFtZSwgY29udGFpbmVyLCBpbWdQYXRoKSB7XHJcbiBcdFx0dGhpcy5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuIFx0XHR0aGlzLmRvbS5pZCA9IG5hbWUgKyAnLWFyZWEnO1xyXG5cclxuIFx0XHQvLyBwb3NpdGlvbiBhYnNvbHV0ZWx5XHJcbiBcdFx0dGhpcy5kb20uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cclxuIFx0XHQvLyBEb24ndCBhbGxvdyBwYWRkaW5nIG9yIG1hcmdpbnMgb3IgYm9yZGVycyBmb3IgQXJlYXNcclxuIFx0XHR0aGlzLmRvbS5zdHlsZS5tYXJnaW4gPSAnMHB4JztcclxuIFx0XHR0aGlzLmRvbS5zdHlsZS5wYWRkaW5nID0gJzBweCc7XHJcblxyXG4gXHRcdC8vIGFkZCB0byB0aGUgRE9NXHJcbiBcdFx0Y29udGFpbmVyLmluc2VydEJlZm9yZSh0aGlzLmRvbSwgY29udGFpbmVyLmNoaWxkTm9kZXNbMF0pO1xyXG5cclxuIFx0XHQvLyBpZiB3ZSBoYXZlIGFuIGltYWdlLCBpbnNlcnQgaW4gZWxlbWVudCBiYWNrZ3JvdW5kXHJcbiBcdFx0aWYgKGltZ1BhdGgpIHtcclxuXHJcbiBcdFx0XHR0aGlzLmltYWdlID0gbmV3IFN0YXRpY0ltYWdlKFxyXG4gXHRcdFx0XHR7XHJcbiBcdFx0XHRcdFx0bmFtZTogdGhpcy5kb20uaWQgKyAnLWltYWdlJ1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHQpO1xyXG5cclxuIFx0XHRcdHRoaXMuaW1hZ2UubG9hZEJhY2tncm91bmRJbWFnZSAodGhpcy5kb20sIGltZ1BhdGgpO1xyXG4gXHRcdH1cclxuXHJcbiBcdH1cclxuXHJcbiBcdC8vIGJvdW5kcyBkZXRlY3RvciBmb3Igc3VwcGxpZWQgQ2hhcmFjdGVyXHJcblxyXG5cclxuIH0iLCIvKiogXHJcbiAqIEJhY2tncm91bmQuanNcclxuICogR2FtZSBMb2dvcywgTG9nb1R5cGVzLCBCcmFuZCBOYW1lXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xyXG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja2dyb3VuZCBleHRlbmRzIFN0YXRpY0ltYWdlIHtcclxuXHJcblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG5cdFx0c3VwZXIoY29uZmlnKTtcclxuXHJcblx0XHR0aGlzLnNldFNvdXJjZShjb25maWcuc291cmNlKTtcclxuXHRcdHRoaXMuc2V0QXV0aG9yKGNvbmZpZy5hdXRob3IpO1xyXG5cdFx0dGhpcy5sb2FkQmFja2dyb3VuZEltYWdlKGNvbmZpZy5kb21JZCwgY29uZmlnLnBhdGgpO1xyXG5cdH1cclxuXHJcbn1cclxuIiwiLyoqIFxyXG4gKiBCZWFyLmpzXHJcbiAqIEEgVGlnZXIsIHdobyB0cmllcyB0byBnZXQgdGhlIFBsYXllci5cclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcclxuIGltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlYXIgZXh0ZW5kcyBBbmltYWwge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyIChjb25maWcpO1xyXG4gXHR9XHJcblxyXG5cclxuIH0iLCIvKiogXHJcbiAqIENhZ2UuanNcclxuICogVGhlIHJlZ2lvbiB3aGVyZSBhbmltYWxzIGFyZSBjYWdlZC5cclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQXJlYVxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBDYWdlIGV4dGVuZHMgQXJlYSB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcblxyXG4gXHRcdHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gXHR9XHJcblxyXG4gfSIsIi8qKiBcclxuICogQ2hhcmFjdGVyLmpzXHJcbiAqIEdhbWUtZ2VuZXJhdGVkIG9yIHVzZXIgYXZhdGFycy4gQ2hhcmFjdGVycyBhcmUgcmVuZGVyZWQgaW4gQ2FudmFzLCBidXQgaGF2ZSB0aGVpciBcclxuICogcG9zaXRpb24gY29tcHV0ZWQgYW5kIHVwZGF0ZWQgb3V0c2lkZSBjYW52YXMuXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2VcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuXHJcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xyXG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlciBleHRlbmRzIEdhbWVQaWVjZSB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XHJcblxyXG4gXHRcdC8vIFNldCBwb3NpdGlvbiBhbmQgc2l6ZSBmcm9tIGNvbmZpZ3VyYXRpb25cclxuIFx0XHR0aGlzLnBvc2l0aW9uID0gY29uZmlnLnBvc2l0aW9uO1xyXG4gXHRcdHRoaXMuc2l6ZSA9IGNvbmZpZy5zaXplO1xyXG5cclxuIFx0XHQvLyBzdG9yZSBhIHJlZmVyZW5jZSB0byB0aGUgZ2FtZSBvYmplY3RcclxuIFx0XHR0aGlzLmdhbWUgPSBjb25maWcuZ2FtZTtcclxuXHJcbiBcdFx0dGhpcy5pbWFnZSA9IG5ldyBTdGF0aWNJbWFnZShcclxuIFx0XHRcdHtcclxuIFx0XHRcdFx0bmFtZTogY29uZmlnLm5hbWUgKyAnLWltYWdlJyxcclxuIFx0XHRcdFx0cGF0aDogY29uZmlnLnBhdGhcclxuIFx0XHRcdH1cclxuIFx0XHQpO1xyXG5cclxuIFx0XHQvLyBJbWFnZXMgZG9uJ3QgYXV0b21hdGljYWxseSBsb2FkIHdoZW4gdGhleSdyZSBub3QgYXR0YWNoZWQgdG8gdGhlIERPTSwgXHJcbiBcdFx0Ly8gb3IgYSBDU1MgYmFja2dyb3VuZCBpbWFnZVxyXG4gXHRcdHRoaXMuaW1hZ2UubG9hZChjb25maWcucGF0aCwgZnVuY3Rpb24gKCkge2NvbnNvbGUubG9nKCdsb2FkZWQ6JyArIGNvbmZpZy5uYW1lKTt9KTtcclxuIFx0fVxyXG5cclxuIFx0Ly8gb3ZlcnJpZGUgZGVmYXVsdCBkcmF3IHdpdGggb3VyIG93blxyXG4gXHRkcmF3IChjb250ZXh0KSB7XHJcblx0XHRpZiAodGhpcy5pbWFnZSkge1xyXG5cdFx0XHR2YXIgaW1nID0gdGhpcy5pbWFnZS5kYXRhO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZHJhd2luZycpXHJcblx0XHRcdGlmIChpbWcpIHtcclxuXHRcdFx0XHQvLyBkcmF3IGltYWdlIGludG8gSFRNTDUgY2FudmFzXHJcbiBcdFx0IFx0XHRjb250ZXh0LmRyYXdJbWFnZShpbWcsIHRoaXMucG9zaXRpb24ubGVmdCwgdGhpcy5wb3NpdGlvbi50b3ApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcbiBcdH1cclxuIH0iLCIvKiogXHJcbiAqIER5bmFtaWNUZXh0LmpzXHJcbiAqIFRleHQgdGhhdCBjYW4gYmUgY2hhbmdlZCBieSB1c2VyIChlLmcuIGlucHV0IGZpZWxkKSwgb3IgXHJcbiAqIHVwZGF0ZWQgYnkgdGhlIGdhbWUgaXRzZWxmLlxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuIGltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljVGV4dCBleHRlbmRzIFRleHQge1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcblx0XHRzdXBlcihjb25maWcpO1xyXG5cdH1cclxufVxyXG4iLCIvKiogXHJcbiAqIEVuZFNjcmVlbi5qc1xyXG4gKiBFbmRpbmcgc2NyZWVuIGZvciB0aGUgZ2FtZS5cclxuICogQGluaGVyaXRzIFNjcmVlbiwgR2FtZVBpZWNlXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcclxuIFxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlcihjb25maWcpO1xyXG5cclxuIFx0XHQvLyBsb2FkIHRoZSBiYWNrZ3JvdW5kIGltYWdlXHJcbiBcdFx0dGhpcy5sb2FkQmFja2dyb3VuZCgnaW1nL3NjcmVlbnMvZW5kLXNjcmVlbi5wbmcnKTtcclxuXHJcbiBcdFx0Ly8gTG9hZCBFbmRTY3JlZW4gc3ViLW9iamVjdHNcclxuIFx0XHR0aGlzLmxvYWRJbnB1dFNjb3JlKCk7XHJcbiBcdFx0dGhpcy5sb2FkSGlnaFNjb3JlcygpO1xyXG5cclxuIFx0XHQvLyBCaW5kIFwicGxheSBhZ2FpblwiIGFuZCBcImluc3RydWN0aW9uc1wiIGJ1dHRvbnMuXHJcbiBcdFx0dGhpcy5iaW5kUmVwbGF5KCk7XHJcbiBcdFx0dGhpcy5iaW5kSW5zdHJ1Y3Rpb25zKCk7XHJcbiBcdH1cclxuXHJcbiBcdGxvYWRJbnB1dFNjb3JlICgpIHtcclxuXHJcbiBcdH1cclxuXHJcbiBcdGxvYWRIaWdoU2NvcmVzICgpIHtcclxuXHJcbiBcdH1cclxuXHJcbiBcdGJpbmRSZXBsYXkgKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpbiBiaW5kU3RhcnQsIHRoaXMuZ2FtZTpcIiArIHRoaXMuZ2FtZSlcclxuXHRcdC8vIHdlIHVzZSBiaW5kKCkgdG8gbGluayB0aGUgZnVuY3Rpb24gYmVsb3cgdG8gU3RhcnRTY3JlZW4gKG90aGVyd2lzZSwgaXQgdGhpbmtzIGl0IGlzIGluc2lkZSB3aW5kb3cpXHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kLXNjcmVlbi1wbGF5LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXHJcblx0XHRcdGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0Ly9hbGVydChcImluIGhhbmRsZXIsIGdhbWU6XCIgKyB0aGlzLmdhbWUpXHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdHRoaXMuZ2FtZS5zdGFydEdhbWUoKTtcclxuXHJcblx0XHRcdH0uYmluZCh0aGlzKSk7XHJcblx0fVxyXG5cclxuXHRiaW5kSW5zdHJ1Y3Rpb25zICgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiaW4gYmluZFN0YXJ0LCB0aGlzLmdhbWU6XCIgKyB0aGlzLmdhbWUpXHJcblx0XHQvLyB3ZSB1c2UgYmluZCgpIHRvIGxpbmsgdGhlIGZ1bmN0aW9uIGJlbG93IHRvIFN0YXJ0U2NyZWVuIChvdGhlcndpc2UsIGl0IHRoaW5rcyBpdCBpcyBpbnNpZGUgd2luZG93KVxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZC1zY3JlZW4taW5zdHJ1Y3Rpb25zLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXHJcblx0XHRcdGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0Ly9hbGVydChcImluIGhhbmRsZXIsIGdhbWU6XCIgKyB0aGlzLmdhbWUpXHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdHRoaXMuZ2FtZS5sb2FkR2FtZSgpO1xyXG5cclxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcclxuXHR9XHJcbiB9IiwiLyoqIFxyXG4gKiBHYW1lLmpzXHJcbiAqIFRoZSBlbnRpcmUgR2FtZSBvYmplY3RcclxuICogQGluaGVyaXRzIEdhbWVQaWVjZVxyXG4gKi9cclxuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcblxyXG4vL1NjcmVlbiBpbmhlcml0YW5jZVxyXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcclxuaW1wb3J0IFN0YXJ0U2NyZWVuIGZyb20gJy4vU3RhcnRTY3JlZW4uanMnO1xyXG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuL0dhbWVTY3JlZW4uanMnO1xyXG5pbXBvcnQgRW5kU2NyZWVuIGZyb20gJy4vRW5kU2NyZWVuLmpzJztcclxuXHJcbi8vSW5mbyBpbmhlcml0YW5jZVxyXG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xyXG5pbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XHJcbmltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcclxuaW1wb3J0IElkZW50aXR5IGZyb20gJy4vSWRlbnRpdHkuanMnO1xyXG5pbXBvcnQgSW5zdHJ1Y3Rpb25zIGZyb20gJy4vSW5zdHJ1Y3Rpb25zLmpzJztcclxuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4vRHluYW1pY1RleHQuanMnO1xyXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZS5qcyc7XHJcblxyXG4vL0NoYXJhY3RlciBpbmhlcml0YW5jZVxyXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcclxuaW1wb3J0IFRydW1wIGZyb20gJy4vVHJ1bXAuanMnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcclxuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XHJcbmltcG9ydCBMaW9uIGZyb20gJy4vTGlvbi5qcyc7XHJcbmltcG9ydCBUaWdlciBmcm9tICcuL1RpZ2VyLmpzJztcclxuaW1wb3J0IEJlYXIgZnJvbSAnLi9CZWFyLmpzJztcclxuaW1wb3J0IEdvcmlsbGEgZnJvbSAnLi9Hb3JpbGxhLmpzJztcclxuaW1wb3J0IEhlYWx0aCBmcm9tICcuL0hlYWx0aC5qcyc7XHJcblxyXG4vL0FyZWEgaW5oZXJpdGFuY2UuXHJcbmltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XHJcbmltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XHJcbmltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4vQW5pbWFsQXJlYS5qcyc7XHJcbmltcG9ydCBQbGF5ZXJBcmVhIGZyb20gJy4vUGxheWVyQXJlYS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgR2FtZVBpZWNlIHtcclxuXHJcblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG5cclxuXHRcdHN1cGVyKGNvbmZpZyk7XHJcblxyXG5cdFx0Ly9nYW1lIGNvcHlyaWdodFxyXG5cdFx0dGhpcy53YXJuaW5nID0gJ1RoaXMgZ2FtZSBiZWxvbmdzIHRvIHVzLCBhbmQgbm9ib2R5IGVsc2UuJztcclxuXHJcblx0XHQvL2dhbWUgcmV2ZXJ0cyB0byBTdGFydFNjcmVlbiBpZiB1bnBsYXllZFxyXG5cdFx0dGhpcy5USU1FT1VUID0gNTU1NTtcclxuXHJcblx0XHQvLyBkZWZpbmUgSWQgbGluayB0byBET01cclxuXHRcdHRoaXMuU1RBUlRfU0NSRUVOX0lEID0gJ3N0YXJ0LXNjcmVlbic7XHJcblx0XHR0aGlzLkdBTUVfU0NSRUVOX0lEID0gJ2dhbWUtc2NyZWVuJztcclxuXHRcdHRoaXMuRU5EX1NDUkVFTl9JRCA9ICdlbmQtc2NyZWVuJztcclxuXHJcblx0XHQvLyBtb2RlbCBzdG9yYWdlLCBzY3JlZW5zXHJcblx0XHR0aGlzLnNjcmVlbnMgPSBbXTtcclxuXHJcblx0XHQvLyBtb2RlbCBzdG9yYWdlLCBkeW5hbWljIGNoYXJhY3RlcnNcclxuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMgPSBbXTtcclxuXHJcblx0XHQvLyBpbml0aWFsaXplIGdhbWUsIGxvYWQgc3RhcnQgc2NyZWVuXHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHJcblx0fSAvL2VuZCBvZiBjb25zdHJ1Y3RvclxyXG5cclxuXHRpbml0ICgpIHtcclxuXHJcblx0XHQvLyBHcmFiIHRoZSBIVE1MIHNjcmVlbiBlbGVtZW50cyBhbmQgZW5jYXBzdWxhdGUgaW4gYSBTY3JlZW4gY2xhc3NcclxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLlNUQVJUX1NDUkVFTl9JRF0gPSBuZXcgU3RhcnRTY3JlZW4oe25hbWU6ICdTdGFydCBTY3JlZW4nLCBpZDogdGhpcy5TVEFSVF9TQ1JFRU5fSUQsIGdhbWU6IHRoaXN9KTtcclxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkdBTUVfU0NSRUVOX0lEXSA9IG5ldyBHYW1lU2NyZWVuKHtuYW1lOiAnR2FtZSBTY3JlZW4nLCBpZDogdGhpcy5HQU1FX1NDUkVFTl9JRCwgZ2FtZTogdGhpc30pO1xyXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuRU5EX1NDUkVFTl9JRF0gPSBuZXcgRW5kU2NyZWVuKHtuYW1lOiAnRW5kIFNjcmVlbicsIGlkOiB0aGlzLkVORF9TQ1JFRU5fSUQsIGdhbWU6IHRoaXN9KTtcclxuXHJcblx0XHQvLyBsb2FkIHRoZSBjYW52YXNcclxuXHRcdHRoaXMubG9hZENhbnZhcygpO1xyXG5cclxuXHRcdC8vIG1ha2UgdGhlIHN0YXJ0IHNjcmVlbiB2aXNpYmxlXHJcblx0XHR0aGlzLmxvYWRHYW1lKCk7XHJcblx0fVxyXG5cclxuXHQvLyBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIEhUTUw1IGNhbnZhcyBjb250ZXh0XHJcblx0bG9hZENhbnZhcyAoKSB7XHJcblx0XHR0aGlzLmNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lLXNjcmVlbi1hcmVuYSBjYW52YXMnKTtcclxuXHRcdHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHR9XHJcblxyXG5cdC8qKiBcclxuXHQgKiBMb2FkIENoYXJhY3RlcnNcclxuXHQgKiBkeW5hbWljIENoYXJhY3RlcnMgKGUuZy4gdGhvc2UgdGhhdCBhbmltYXRlKSBhcmUgbG9hZGVkIGJ5IEdhbWUuIFxyXG5cdCAqIE90aGVyIHN0YXRpYyB2aXN1YWwgb2JqZWN0cyBhcmUgbG9hZGVkIGJ5IFNjcmVlbiBjbGFzc2VzLlxyXG5cdCAqL1xyXG5cdGxvYWRQbGF5ZXJzICgpIHtcclxuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcclxuXHRcdFx0bmV3IFBsYXllcihcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiAnUGxheWVyJywgcG9zaXRpb246IHt0b3A6IDUxMCwgbGVmdDogMjAwfSxcclxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvcGxheWVycy9wbGF5ZXIucG5nJyxcclxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRsb2FkQW5pbWFscyAoKSB7XHJcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLnB1c2goXHJcblx0XHRcdG5ldyBMaW9uKFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6ICdMaW9uJywgXHJcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMTUsIGxlZnQ6IDk0fSxcclxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvYW5pbWFscy9saW9uLnBuZycsXHJcblx0XHRcdFx0XHRnYW1lOiB0aGlzXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxyXG5cdFx0XHRuZXcgVGlnZXIoXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogJ1RpZ2VyJywgXHJcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMTUsIGxlZnQ6IDMzM30sXHJcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvdGlnZXIucG5nJyxcclxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdCk7XHJcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLnB1c2goXHJcblx0XHRcdG5ldyBCZWFyKFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6ICdCZWFyJywgcG9zaXRpb246IHt0b3A6IDE1LCBsZWZ0OiA1NzB9LFxyXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy9hbmltYWxzL2JlYXIucG5nJyxcclxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdCk7XHJcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLnB1c2goXHJcblx0XHRcdG5ldyBHb3JpbGxhKFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6ICdHb3JpbGxhJywgcG9zaXRpb246IHt0b3A6IDE1LCBsZWZ0OiA4MTJ9LFxyXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy9hbmltYWxzL2dvcmlsbGEucG5nJyxcclxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdCk7XHJcblxyXG5cdH1cclxuXHJcblx0bG9hZFRydW1wcyAoKSB7XHJcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLnB1c2goXHJcblx0XHRcdG5ldyBUcnVtcChcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiAnVHJ1bXAnLCBwb3NpdGlvbjoge3RvcDogNDUwLCBsZWZ0OiAyMDB9LFxyXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy90cnVtcHMvdHJ1bXAucG5nJyxcclxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdCk7XHJcblxyXG5cdH1cclxuXHJcblx0bG9hZEdhbWUgKCkge1xyXG5cclxuXHRcdC8vbG9hZCBJbmZvIGFzc2V0c1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKCdsb2FkaW5nIHNwbGFzaCBzY3JlZW4nKTtcclxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkVORF9TQ1JFRU5fSURdLmhpZGVTY3JlZW4oKVxyXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuU1RBUlRfU0NSRUVOX0lEXS5zaG93U2NyZWVuKCk7XHJcblx0fVxyXG5cclxuXHRzdGFydEdhbWUgKCkge1xyXG5cclxuXHRcdC8vbG9hZCBDaGFyYWN0ZXJzXHJcblx0XHR0aGlzLmxvYWRBbmltYWxzKCk7XHJcblx0XHR0aGlzLmxvYWRQbGF5ZXJzKCk7XHJcblx0XHR0aGlzLmxvYWRUcnVtcHMoKTtcclxuXHJcblx0XHQvL21ha2UgR2FtZVNjcmVlbiB2aXNpYmxlXHJcblxyXG5cdFx0Ly8gaW5pdGlhbGl6ZSBlbGFwc2VkIHRpbWVcclxuXHRcdHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcclxuXHJcblx0XHQvLyBzaG93IEdhbWVTY3JlZW4sIGhpZGUgb3RoZXJzXHJcblx0XHRjb25zb2xlLmxvZygnc3RhcnRpbmcgZ2FtZScpO1xyXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuU1RBUlRfU0NSRUVOX0lEXS5oaWRlU2NyZWVuKCk7XHJcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5FTkRfU0NSRUVOX0lEXS5oaWRlU2NyZWVuKCk7XHJcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5HQU1FX1NDUkVFTl9JRF0uc2hvd1NjcmVlbigpO1xyXG5cdFx0dGhpcy5nYW1lTG9vcCgpO1xyXG5cdH1cclxuXHJcblx0ZW5kR2FtZSAoKSB7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coJ2VuZGluZyBnYW1lJyk7XHJcblxyXG5cdFx0Ly8gcmVzZXQgdGltZXJcclxuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcclxuXHJcblx0XHQvLyB0dXJuIG9mZiBhbmltYXRpb25cclxuXHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2xvYmFsSWQpO1xyXG5cdFx0dGhpcy5nbG9iYWxJZCA9IG51bGw7XHJcblxyXG5cdFx0Ly8gZ28gdG8gZW5kIHNjcmVlblxyXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuR0FNRV9TQ1JFRU5fSURdLmhpZGVTY3JlZW4oKTtcclxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkVORF9TQ1JFRU5fSURdLnNob3dTY3JlZW4oKTtcclxuXHR9XHJcblxyXG5cdGVsYXBzZWQgKCkge1xyXG5cclxuXHRcdC8vIHJlY29yZCB0aW1lIHdlIGhhdmUgYmVlbiBpbiBnYW1lTG9vcFxyXG5cdFx0dGhpcy5lbmRUaW1lID0gbmV3IERhdGUoKTtcclxuXHJcblx0XHQvLyB0aW1lIGRpZmZlcmVuY2UgaW4gbXNcclxuXHJcblx0XHR2YXIgdGltZURpZmYgPSAodGhpcy5lbmRUaW1lIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMDtcclxuXHJcblx0XHQvLyBnZXQgc2Vjb25kcyAoT3JpZ2luYWwgaGFkICdyb3VuZCcgd2hpY2ggaW5jb3JyZWN0bHkgY291bnRzIDA6MjgsIDA6MjksIDE6MzAgLi4uIDE6NTksIDE6MClcclxuXHRcdHJldHVybiBNYXRoLnJvdW5kKHRpbWVEaWZmICUgNjApO1xyXG5cdH1cclxuXHJcblx0Y2hlY2tJZkNvbXBsZXRlICgpIHtcclxuXHJcblx0XHQvLyBnYW1lIGxvZ2ljIHRvIHNlZSBpZiB0aGUgZ2FtZSBzaG91bGQgcmVzZXRcclxuXHRcdC8vLy8vLy8vLy8vLy9jb25zb2xlLmxvZygnRUxBUFNFRDonICsgdGhpcy5lbGFwc2VkKCkpO1xyXG5cclxuXHRcdGlmICh0aGlzLmVsYXBzZWQoKSA+IHRoaXMuVElNRU9VVCkge1xyXG5cdFx0XHQvLyBpZiBpZGxlIHRvbyBsb25nLCByZXNldCBnYW1lIHRvIHN0YXJ0XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZSAoKSB7XHJcblxyXG5cdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuZGlzcGxheUNoYXJhY3RlcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHJcblx0XHRcdHZhciBjaGFyYWN0ZXIgPSB0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzW2ldO1xyXG5cclxuXHRcdFx0c3dpdGNoIChjaGFyYWN0ZXIuZ2V0Q2xhc3MoKSkge1xyXG5cdFx0XHRcdGNhc2UgJ1BsYXllcic6XHJcblx0XHRcdFx0Y2FzZSAnVHJ1bXAnOlxyXG5cdFx0XHRcdGNhc2UgJ0xpb24nOlxyXG5cdFx0XHRcdGNhc2UgJ1RpZ2VyJzpcclxuXHRcdFx0XHRjYXNlICdCZWFyJzpcclxuXHRcdFx0XHRjYXNlICdHb3JpbGxhJzpcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNoYXJhY3Rlci51cGRhdGUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGRyYXcgKCkge1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnNbaV0uZHJhdyh0aGlzLmNvbnRleHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2FtZUxvb3AgKCkge1xyXG5cdFx0XHJcblx0XHRpZiAodGhpcy5jaGVja0lmQ29tcGxldGUoKSkge1xyXG5cdFx0XHR0aGlzLmVuZEdhbWUoKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy51cGRhdGUoKTtcclxuXHRcdHRoaXMuZHJhdygpO1xyXG5cdFx0XHJcblx0XHQvL2NvbnNvbGUubG9nKCdsb29waW5nLi4uJylcclxuXHRcdHRoaXMuZ2xvYmFsSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lTG9vcC5iaW5kKHRoaXMpKTtcclxuXHR9XHJcblxyXG59IiwiLyoqIFxyXG4gKiBHYW1lUGllY2UuanNcclxuICogQmFzaWMgR2FtZSBvYmplY3RcclxuICpcclxuICogVG8gbWFrZSB0aGlzIHdvcmssIHlvdSBtdXN0IGJlIHJ1bm5pbmcgdGhlIEJhYmVsIHRyYW5zcGlsZXIsIFxyXG4gKiBhbmQgd2F0Y2hpbmcgZm9yIGNoYW5nZXMgaW4gdGhpcyBmaWxlIHdpdGggYnJvd3NlcmlmeS4gVHdvIFxyXG4gKiBUZXJtaW5hbCB3aW5kb3dzIG5lZWQgdG8gYmUgb3BlbjpcclxuICogMS4gb25lIHdpbmRvdyB3aGVyZSB5b3UgdHlwZWQgdGhlIGNvbW1hbmQgXCJncnVudFwiXHJcbiAqIDIuIG9uZSB3aW5kb3cgd2hlcmUgeW91IHR5cGVkIHRoZSBjb21tYW5kIFwibnBtIHN0YXJ0XCJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQaWVjZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gICAgXHQvL1RPRE86IHVzZSBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lO1xyXG4gICAgICAgIHRoaXMudXVpZCA9IHRoaXMuc2V0SWQoKTtcclxuICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTsgLy8gY2hhbmdlIHRvIGZhbHNlIGZvciBkZWZlcnJlZCBsb2Fkc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIFNldCBhIHBvc2l0aW9uIGZvciB0aGUgb2JqZWN0LCBhbHNvIHRoZSBwb3NpdGlvbiBvZiB0aGUgXHJcbiAgICAgKiBET00gcmVwcmVzZW50YXRpb24gb2YgdGhlIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBzZXRET01Qb3NpdGlvbiAocG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgaWYgKHRoaXMuZG9tKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLnN0eWxlLnRvcCA9IHBvc2l0aW9uLnRvcCArICdweCc7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLnN0eWxlLmxlZnQgPSBwb3NpdGlvbi5sZWZ0ICsgJ3B4JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogU2V0IHRoZSBvYmplY3Qgc2l6ZSwgYWxzbyBpdHMgRE9NIHNpemVcclxuICAgICAqL1xyXG4gICAgc2V0RE9NU2l6ZSAoc2l6ZSkge1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgaWYgKHRoaXMuZG9tKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLnN0eWxlLndpZHRoID0gc2l6ZS53aWR0aCArICdweCc7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLnN0eWxlLmhlaWdodCA9IHNpemUuaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogR2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIGV2ZXJ5IGdhbWUgb2JqZWN0LlxyXG4gICAgICogQGxpbmsgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDUwMzQvY3JlYXRlLWd1aWQtdXVpZC1pbi1qYXZhc2NyaXB0XHJcbiAgICAgKi9cclxuICAgIHNldElkICgpIHtcclxuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpKjE2KSUxNiB8IDA7XHJcbiAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQvMTYpO1xyXG4gICAgICAgICAgICByZXR1cm4gKGM9PSd4JyA/IHIgOiAociYweDN8MHg4KSkudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB1dWlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIFJldHVybiB0aGUgZ2l2ZW4gbmFtZSBvZiB0aGlzIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBnZXROYW1lICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIHJldHVybiB0aGUgY2xhc3Mgb2YgdGhlIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBnZXRDbGFzcyAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBSZXR1cm4gdGhlIHVuaXF1ZSBpZCBvZiB0aGlzIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgZ2V0SWQgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnV1aWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogR2V0IHRoZSBlbmNsb3NpbmcgYm94IG91dHNpZGUgdGhlIG9iamVjdCBmb3IgZXh0ZXJuYWwgY29sbGlzaW9uc1xyXG4gICAgICovXHJcbiAgICBnZXRDb2xsaXNpb25SZWN0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogR2V0IHRoZSBpbnRlcm5hbCBib3ggd2hlbiB0aGlzIG9iamVjdCBhY3RzIGFzIGEgY29udGFpbmVyIGZvciBhbm90aGVyXHJcbiAgICAgKi9cclxuICAgIGdldEJvdW5kc1JlY3QgKCkge1xyXG5cclxuICAgIH1cclxuXHRcclxuXHQvKiogXHJcblx0ICogR2VuZXJpYyAncmVhZHknIGZ1bmN0aW9uIChlLmcuIGZvciBkZWxheWVkIGFzc2V0IGxvYWRzKVxyXG5cdCAqL1xyXG5cdHNldFJlYWR5ICh2YWwpIHtcclxuXHRcdHRoaXMucmVhZHkgPSB2YWw7XHJcblx0fVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEdlbmVyaWMgdXBkYXRlIChvdmVycmlkZSlcclxuICAgICAqL1xyXG4gICAgdXBkYXRlICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgIC8qKiBcclxuICAgICAgKiBnZW5lcmljIGRyYXcgKG92ZXJyaWRlKVxyXG4gICAgICAqL1xyXG4gICAgZHJhdyAoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiLyoqIFxyXG4gKiBHYW1lU2NyZWVuLmpzXHJcbiAqIE1haW4gZ2FtZSBzY3JlZW4gb2JqZWN0XHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIFNjcmVlblxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XHJcblxyXG4gaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcclxuIGltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4vQW5pbWFsQXJlYS5qcyc7XHJcbiBpbXBvcnQgUGxheWVyQXJlYSBmcm9tICcuL1BsYXllckFyZWEuanMnO1xyXG4gaW1wb3J0IENhZ2UgZnJvbSAnLi9DYWdlLmpzJztcclxuXHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIoY29uZmlnKTtcclxuXHJcbiBcdFx0dGhpcy5jYWdlcyA9IFtdO1xyXG4gXHRcdHRoaXMuYW5pbWFsQXJlYXMgPSBbXTtcclxuIFx0XHR0aGlzLnBsYXllckFyZWFzID0gW107XHJcblxyXG4gXHRcdC8vR2FtZVNjcmVlbiBzaG91bGQgaGlkZSBpdHMgbG9jYWwgaGVhZGVyIGFuZCBmb290ZXJcclxuIFx0XHR0aGlzLmhpZGVIZWFkZXIoKTtcclxuIFx0XHR0aGlzLmhpZGVGb290ZXIoKTtcclxuXHJcbiBcdFx0Ly8gbG9hZCB0aGUgYmFja2dyb3VuZCBpbWFnZVxyXG4gXHRcdHRoaXMubG9hZEJhY2tncm91bmQoJ2ltZy9zY3JlZW5zL2dhbWUtc2NyZWVuLnBuZycpO1xyXG5cclxuIFx0XHQvLyBnZXQgdGhlIHNlY3Rpb24gdGhhdCBoYXMgdGhlIGNhbnZhcyBmb3Igb3ZlcmxheVxyXG4gXHRcdHZhciBhcmVuYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLXNjcmVlbi1hcmVuYScpO1xyXG5cclxuIFx0XHQvLyBsb2FkIHN1Yi1vYmplY3RzIGludG8gdGhlIEFyZW5hXHJcbiBcdFx0dGhpcy5jYWdlcyAgID0gdGhpcy5sb2FkQ2FnZXMoYXJlbmEsICdpbWcvYXJlYXMvY2FnZS5wbmcnKTtcclxuIFx0XHR0aGlzLmFuaW1hbEFyZWEgPSB0aGlzLmxvYWRBbmltYWxBcmVhKCk7XHJcbiBcdFx0dGhpcy5wbGF5ZXJBcmVhID0gdGhpcy5sb2FkUGxheWVyQXJlYSgpO1xyXG5cclxuIFx0fVxyXG5cclxuIFx0bG9hZENhZ2VzIChjb250YWluZXIsIGltZ1BhdGgpIHtcclxuIFx0XHQvLyBsb2FkIDQgQ2FnZXNcclxuIFx0XHR0aGlzLmNhZ2VzLnB1c2goXHJcbiBcdFx0XHRuZXcgQ2FnZShcclxuIFx0XHRcdFx0e1xyXG4gXHRcdFx0XHRcdG5hbWU6ICdsaW9uLWNhZ2UnLCBcclxuIFx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMCwgbGVmdDogNzB9LCBcclxuIFx0XHRcdFx0XHRzaXplOiB7d2lkdGg6IDEwMCwgaGVpZ2h0OjEwMH0sIFxyXG4gXHRcdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcclxuIFx0XHRcdFx0XHRwYXRoOiBpbWdQYXRoXHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdClcclxuIFx0XHQpO1xyXG5cdFx0dGhpcy5jYWdlcy5wdXNoKFxyXG5cdFx0XHRuZXcgQ2FnZShcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiAndGlnZXItY2FnZScsIFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDMxMH0sIFxyXG5cdFx0XHRcdFx0c2l6ZToge3dpZHRoOiAxMDAsIGhlaWdodDoxMDB9LCBcclxuXHRcdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcclxuXHRcdFx0XHRcdHBhdGg6IGltZ1BhdGhcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdCk7XHJcblx0XHR0aGlzLmNhZ2VzLnB1c2goXHJcblx0XHRcdG5ldyBDYWdlKFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6ICdiZWFyLWNhZ2UnLCBcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAwLCBsZWZ0OiA1NTB9LCBcclxuXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSxcclxuXHRcdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcclxuXHRcdFx0XHRcdHBhdGg6IGltZ1BhdGhcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdCk7XHJcblx0XHR0aGlzLmNhZ2VzLnB1c2goXHJcblx0XHRcdG5ldyBDYWdlKFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6ICdnb3JpbGxhLWNhZ2UnLCBcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAwLCBsZWZ0OiA3OTB9LCBcclxuXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSxcclxuXHRcdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcclxuXHRcdFx0XHRcdHBhdGg6IGltZ1BhdGhcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdCk7XHJcbiBcdH1cclxuXHJcbiBcdGxvYWRBbmltYWxBcmVhICgpIHtcclxuIFx0XHQvLyBsb2FkIEFuaW1hbCBtb3ZlbWVudCBhcmVhXHJcbiBcdFx0dGhpcy5hbmltYWxBcmVhcy5wdXNoKFxyXG4gXHRcdFx0bmV3IEFuaW1hbEFyZWEoXHJcbiBcdFx0XHRcdHtcclxuIFx0XHRcdFx0XHRuYW1lOiAnWm9vJywgXHJcbiBcdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDEwNCwgbGVmdDogNn0sIFxyXG4gXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogOTcwLCBoZWlnaHQ6IDQxMH0sXHJcbiBcdFx0XHRcdFx0Y29udGFpbmVyOiB0aGlzLmRvbSwgXHJcbiBcdFx0XHRcdFx0cGF0aDogbnVsbFxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHQpXHJcbiBcdFx0KTtcclxuIFx0fVxyXG5cclxuIFx0bG9hZFBsYXllckFyZWEgKCkge1xyXG4gXHRcdC8vIGxvYWQgdGhlIFBsYXllclxyXG4gXHRcdHRoaXMucGxheWVyQXJlYXMucHVzaChcclxuIFx0XHRcdG5ldyBQbGF5ZXJBcmVhKFxyXG4gXHRcdFx0XHR7XHJcbiBcdFx0XHRcdFx0bmFtZTogJ1BsYXllciBBcmVhJywgXHJcbiBcdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDUxNCwgbGVmdDogNn0sIFxyXG4gXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogOTcwLCBoZWlnaHQ6IDEwMH0sXHJcbiBcdFx0XHRcdFx0Y29udGFpbmVyOiB0aGlzLmRvbSwgXHJcbiBcdFx0XHRcdFx0cGF0aDogbnVsbFxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHQpXHJcbiBcdFx0KTtcclxuIFx0fVxyXG5cclxuIH1cclxuXHJcbiIsIi8qKiBcclxuICogR29yaWxsYS5qc1xyXG4gKiBBIEdvcmlsbGEsIHdobyB0cmllcyB0byBnZXQgdGhlIFBsYXllci5cclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcclxuIGltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvcmlsbGEgZXh0ZW5kcyBBbmltYWwge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyIChjb25maWcpO1xyXG4gXHR9XHJcbiB9IiwiLyoqIFxyXG4gKiBIZWFsdGguanNcclxuICogVGhlIGNyaXR0ZXJzIHRoYXQgVHJ1bXAgdHJpZXMgdG8gc3RvcCBmcm9tIGdldHRpbmcgdGhlIFBsYXllci5cclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFsdGggZXh0ZW5kcyBDaGFyYWN0ZXIge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyIChjb25maWcpO1xyXG4gXHR9XHJcblxyXG4gfSIsIi8qKiBcclxuICogSWRlbnRpdHkuanNcclxuICogR2FtZSBMb2dvcywgTG9nb1R5cGVzLCBCcmFuZCBOYW1lXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xyXG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRlbnRpdHkgZXh0ZW5kcyBTdGF0aWNJbWFnZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuXHRcdHN1cGVyKGNvbmZpZyk7XHJcblxyXG5cdFx0dGhpcy5zZXRTb3VyY2UoY29uZmlnLnNvdXJjZSk7XHJcblx0XHR0aGlzLnNldEF1dGhvcihjb25maWcuYXV0aG9yKTtcclxuXHRcdHRoaXMubG9hZEltYWdlVG9ET00oY29uZmlnLmRvbUlkLCBjb25maWcucGF0aCk7XHJcblxyXG5cdFx0Ly9IaWRlIGFueSA8aDI+IHRleHQgZXF1aXZhbGVudCBvZiBpZGVudGl0eSBpbiB0aGlzIENTUyBib3hcclxuXHRcdHZhciB0ZXh0SWRlbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGNvbmZpZy5kb21JZCArICcgaDInKTtcclxuXHRcdHRleHRJZGVudGl0eS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdH1cclxuXHJcbn1cclxuIiwiLyoqIFxyXG4gKiBTdGF0aWNJbWFnZS5qc1xyXG4gKiBJbWFnZS1zdHlsZSBJbmZvcm1hdGlvbiB0aGF0IGNhbm5vdCBiZSBjaGFuZ2VkIG9uY2UgdGhlIGdhbWUgaXMgbG9hZGVkXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBJbmZvIHtcclxuXHJcblx0Ly8gc2F2ZSBzY29wZVxyXG5cdC8vIFRPRE86IHJlZmFjdG9yIHdpdGggYXJyb3cgZnVuY3Rpb25cclxuXHJcblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG5cdFx0c3VwZXIoY29uZmlnKTtcclxuXHRcdHRoaXMucmVhZHkgPSBmYWxzZTsgLy9vdmVyLXJpZGUgR2FtZVBpZWNlIGFuZCBpbmZvIHdpdGggZGVmZXJyYWxzXHJcblx0XHR0aGlzLmltYWdlID0gbnVsbDtcclxuXHRcdHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoO1xyXG5cdFx0dGhpcy5hdXRob3IgPSBjb25maWcuYXV0aG9yO1xyXG5cdFx0dGhpcy5zb3VyY2UgPSBjb25maWcuc291cmNlO1xyXG5cdH1cclxuXHJcblx0Ly8gbG9hZCBhbiBpbWFnZVxyXG5cdGxvYWQgKHBhdGgsIGNhbGxiYWNrKSB7XHJcblx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHR0aGF0LnNldFJlYWR5KGZhbHNlKTtcclxuXHRcdGNvbnNvbGUubG9nKCdlbnRlcmluZyBsb2FkIGluSW1hZ2UnKTtcclxuXHRcdHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHRcdGltZy5zcmMgPSBwYXRoO1xyXG5cdFx0aW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Y29uc29sZS5sb2codGhhdC5uYW1lICsgJyBpbWFnZSBsb2FkZWQgZnJvbTonICsgcGF0aCArICcgdzonICsgaW1nLndpZHRoICsgJyBoOicgKyBpbWcuaGVpZ2h0KVxyXG5cdFx0XHR0aGF0LnNldFJlYWR5KHRydWUpO1xyXG5cdFx0XHR0aGF0LmRhdGEgPSBpbWc7XHJcblx0XHRcdFxyXG5cdFx0XHRpZihjYWxsYmFjaykge1xyXG5cdFx0XHRcdGNhbGxiYWNrKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGltZy5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2Vycm9yIGxvYWRpbmcgaW1nIGZyb206JyArIHBhdGgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gbG9hZCBpbWFnZSwgYXBwZW5kIHRvIGV4aXN0aW5nIERPTSBlbGVtZW50XHJcblx0Ly8gTk9URTogdGhpcyBpcyBvdmVyLXdyaXR0ZW4gaW4gQ2hhcmFjdGVyLmpzLCB3aGljaCBsb2FkcyBpbWFnZXMgaW50byBDYW52YXNcclxuXHRsb2FkSW1hZ2VUb0RPTSAoZG9tSWQsIHBhdGgsIGNhbGxiYWNrKSB7XHJcblx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHR0aGlzLmxvYWQocGF0aCwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZm9yZWdyb3VuZCBpbWFnZSAnICsgcGF0aCArICcgbG9hZGVkJylcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9tSWQpLmFwcGVuZENoaWxkKHRoYXQuZGF0YSk7XHJcblx0XHRcdGlmIChjYWxsYmFjaykge1xyXG5cdFx0XHRcdGNhbGxiYWNrKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vIGxvYWQgaW1hZ2UgYXMgYSBDU1MgYmFja2dyb3VuZCBpbWFnZSBpbnRvIGV4aXN0aW5nIERPTSBlbGVtZW50LiBcclxuXHQvLyBOT1RFOiBubyBsb2NhbCByZWZlcmVuY2UgdG8gaW1hZ2UgaW4gdGhpcyBjYXNlXHJcblx0bG9hZEJhY2tncm91bmRJbWFnZSAoY29udGFpbmVyLCBwYXRoLCBjYWxsYmFjaykge1xyXG5cdFx0Y29uc29sZS5sb2coJ2xvYWRpbmcgYmFja2dyb3VuZCBpbWFnZTonICsgcGF0aClcclxuXHRcdGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J3VybCgnICsgcGF0aCArICcpJztcclxuXHRcdHRoaXMuc2V0UmVhZHkodHJ1ZSk7XHJcblx0XHRpZiAoY2FsbGJhY2spIHtcclxuXHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIERyYXcgdGhlIGltYWdlIHRvIGEgc3VwcGxpZWQgY2FudmFzIGNvbnRleHRcclxuXHRkcmF3VG9DYW52YXMgKGNvbnRleHQsIHBvc2l0aW9uLCBzaXplKSB7XHJcblx0XHRjb250ZXh0LmRyYXdJbWFnZShpbWcsIHBvc2l0aW9uLnRvcCwgcG9zaXRpb24ubGVmdCwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xyXG5cdH1cclxuXHJcblx0Ly8gRHJhdyB0byB0aGUgRE9NLiBBc3N1bWUgdGhlIEltYWdlIHdhcyBhbHJlYWR5IGF0dGFjaGVkIHRvIHRoZSBET01cclxuXHRkcmF3VG9ET00gKHBvc2l0aW9uLCBzaXplKSB7XHJcblx0XHR0aGlzLmltYWdlLnN0eWxlLnRvcCA9IHBvc2l0aW9uLnRvcDtcclxuXHRcdHRoaXMuaW1hZ2Uuc3R5bGUubGVmdCA9IHBvc2l0aW9uLmxlZnQ7XHJcblx0XHR0aGlzLmltYWdlLnN0eWxlLndpZHRoID0gc2l6ZS53aWR0aDtcclxuXHRcdHRoaXMuaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XHJcblx0fVxyXG5cclxufVxyXG4iLCIvKiogXHJcbiAqIEluZm8uanNcclxuICogR2VuZXJpYyBpbmZvcm1haXRvbiBvYmplY3RcclxuICogQGluaGVyaXRzIEdhbWVQaWVjZVxyXG4gKi9cclxuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvIGV4dGVuZHMgR2FtZVBpZWNlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoY29uZmlnKSB7XHJcblx0XHRzdXBlcihjb25maWcpO1xyXG5cdH1cclxuXHJcblx0c2V0QXV0aG9yIChhdXRob3IpIHtcclxuXHRcdHRoaXMuYXV0aG9yID0gYXV0aG9yO1xyXG5cdH1cclxuXHJcblx0c2V0U291cmNlIChzb3VyY2UpIHtcclxuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xyXG5cdH1cclxuXHJcbn0iLCIvKiogXHJcbiAqIEluc3RydWN0aW9ucy5qc1xyXG4gKiBUZXh0IHdoaWNoIHRlbGxzIHRoZSBQbGF5ZXIgaG93IHRvIHBsYXkgdGhlIGdhbWUuXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG4gaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcclxuIGltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVjdGlvbnMgZXh0ZW5kcyBTdGF0aWNUZXh0IHtcclxuXHJcblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG5cdFx0c3VwZXIoY29uZmlnKTtcclxuXHR9XHJcbn1cclxuIiwiLyoqIFxyXG4gKiBMaW9uLmpzXHJcbiAqIEEgTGlvbiwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xyXG4gaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlvbiBleHRlbmRzIEFuaW1hbCB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XHJcbiBcdH1cclxuIH0iLCIvKiogXHJcbiAqIFBsYXllci5qc1xyXG4gKiBVc2VyLWNvbnRyb2xsZWQgQ2hhcmFjdGVyXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlciAoY29uZmlnKTtcclxuIFx0fVxyXG4gfSIsIi8qKiBcclxuICogUGxheWVyQXJlYS5qc1xyXG4gKiBUaGUgcmVnaW9uIHdoZXJlIHRoZSBQbGF5ZXIgY2FuIG1vdmUuXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEFyZWFcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQXJlYSBleHRlbmRzIEFyZWEge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyKGNvbmZpZyk7XHJcbiBcdH1cclxuXHJcbiB9IiwiLyoqIFxyXG4gKiBTY29yZS5qc1xyXG4gKiBEaXNwbGF5IHVzZXIgc2NvcmVcclxuICogQGluaGVyaXRzIER5bmFtaWNUZXh0LCBUZXh0LCBJbmZvLCBHYW1lUGllY2VcclxuICovXHJcbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xyXG5pbXBvcnQgRHluYW1pY1RleHQgZnJvbSAnLi9EeW5hbWljVGV4dC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSBleHRlbmRzIER5bmFtaWNUZXh0IHtcclxuXHJcblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG5cdFx0c3VwZXIoY29uZmlnKTtcclxuXHR9XHJcbn0iLCIvKiogXHJcbiAqIFNjcmVlbi5qc1xyXG4gKiBHZW5lcmljIFNjcmVlbiBvYmplY3RcclxuICogQGluaGVyaXRzIEdhbWVQaWVjZS5qc1xyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG5cclxuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcclxuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcclxuIGltcG9ydCBJZGVudGl0eSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW4gZXh0ZW5kcyBHYW1lUGllY2Uge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyKGNvbmZpZyk7IC8vaW5pdCAncGFyZW50JyBHYW1lUGllY2VcclxuXHJcbiBcdFx0Ly8gc2F2ZSBhIHJlZmVyZW5jZSB0byBvdXIgcGFyZW50IEdhbWUgb2JqZWN0XHJcbiBcdFx0dGhpcy5nYW1lID0gY29uZmlnLmdhbWU7XHJcblxyXG4gXHRcdC8vIFNjcmVlbnMgYXJlIGRlZmluZWQgaW4gSFRNTCwgc28gc2F2ZSBhIHJlZmVyZW5jZSB0byBvdXIgRE9NIGlkXHJcbiBcdFx0dGhpcy5kb21JZCA9IGNvbmZpZy5pZDtcclxuXHJcbiBcdFx0Ly8gc2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgRE9NIGVsZW1lbnQgd2UncmUgY29ubmVjdGVkIHRvXHJcbiBcdFx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRvbUlkKTtcclxuXHJcbiBcdFx0Ly8gaW5zZXJ0IHRoZSBjb3B5cmlnaHQgaW5mbyBmcm9tIHRoZSBtYWluIEdhbWUgb2JqZWN0XHJcbiBcdFx0dGhpcy5hZGRXYXJuaW5nKCk7XHJcbiBcdH1cclxuXHJcbiBcdC8vIGxvYWQgYSBiYWNrZ3JvdW5kIGltYWdlIGludG8gdGhlIFNjcmVlblxyXG4gXHRsb2FkQmFja2dyb3VuZCAocGF0aCwgY2FsbGJhY2spIHtcclxuIFx0XHRjb25zb2xlLmxvZyhcImxvYWRpbmc6XCIgKyB0aGlzLmRvbUlkKTtcclxuIFx0XHR0aGlzLmJhY2tncm91bmRJbWFnZSA9IG5ldyBTdGF0aWNJbWFnZShcclxuIFx0XHRcdHtcclxuIFx0XHRcdFx0bmFtZTogdGhpcy5uYW1lICsgJy1pbWFnZScsXHJcbiBcdFx0XHRcdGRvbUlkOiB0aGlzLmlkICsgJy1pbWFnZScsXHJcbiBcdFx0XHRcdHBhdGg6IHBhdGgsXHJcbiBcdFx0XHRcdGNhbGxiYWNrOiBjYWxsYmFja1xyXG4gXHRcdFx0fVxyXG4gXHRcdCk7XHJcbiBcdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2UubG9hZEJhY2tncm91bmRJbWFnZSh0aGlzLmRvbSwgcGF0aCwgY2FsbGJhY2spO1xyXG4gXHR9XHJcblxyXG4gXHQvLyBzaG93IGFuZCBoaWRlIHJlZ2lvbnMgb2YgdGhlIFNjcmVlblxyXG4gXHRzaG93U2NyZWVuICgpIHtcclxuIFx0XHRjb25zb2xlLmxvZyhcInNob3dpbmc6XCIgKyB0aGlzLmRvbUlkKTtcclxuIFx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gXHR9XHJcblxyXG4gXHRoaWRlU2NyZWVuICgpIHtcclxuIFx0XHRjb25zb2xlLmxvZyhcImhpZGluZzpcIiArIHRoaXMuZG9tSWQpO1xyXG4gXHRcdHRoaXMuZG9tLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuIFx0fVxyXG5cclxuIFx0c2hvd0hlYWRlciAoKSB7XHJcbiBcdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiBcdH1cclxuXHJcbiBcdGhpZGVIZWFkZXIgKCkge1xyXG5cdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiBcdH1cclxuXHJcbiBcdHNob3dGb290ZXIgKCkge1xyXG5cdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gXHR9XHJcblxyXG4gXHRoaWRlRm9vdGVyICgpIHtcclxuXHRcdHRoaXMuZG9tLnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gXHR9XHJcblxyXG4gXHRhZGRXYXJuaW5nICgpIHtcclxuIFx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykuaW5uZXJIVE1MID0gdGhpcy5nYW1lLndhcm5pbmc7XHJcbiBcdH1cclxuXHJcbiB9OyIsIi8qKiBcclxuICogU3RhcnRTY3JlZW4uanNcclxuICogT3BlbmluZyBzY3JlZW4gZm9yIGdhbWUuXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIFNjcmVlblxyXG4gKi9cclxuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xyXG5cclxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcbiBpbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xyXG4gaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJztcclxuXHJcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XHJcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XHJcbiBpbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9JZGVudGl0eS5qcyc7XHJcbiBpbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL0JhY2tncm91bmQuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcblx0XHRzdXBlcihjb25maWcpO1xyXG5cclxuXHRcdC8vIHRoaXMuZG9tIGRlZmluZWQgaW4gU2NyZWVuXHJcblxyXG5cdFx0Ly8gTG9hZCBTdGFydFNjcmVlbiBzdWItb2JqZWN0c1xyXG5cdFx0dGhpcy5sb2FkQmFja2dyb3VuZCgnaW1nL3NjcmVlbnMvc3RhcnQtc2NyZWVuLnBuZycpO1xyXG5cclxuXHRcdC8vIGxvYWQgaWRlbnRpdHkgaW1hZ2VcclxuXHRcdHRoaXMubG9hZElkZW50aXR5KCk7XHJcblxyXG5cdFx0Ly8gbG9hZCBpbnN0cnVjdGlvbnNcclxuXHRcdHRoaXMubG9hZEluc3RydWN0aW9ucygpO1xyXG5cclxuXHRcdC8vIE1ha2UgdGhlIHN0YXJ0IGJ1dHRvbiBvcGVuIHRoZSBtYWluIGdhbWUgc2NyZWVuXHJcblx0XHR0aGlzLmJpbmRTdGFydCgpO1xyXG5cdH1cclxuXHJcblx0bG9hZElkZW50aXR5ICgpIHtcclxuXHRcdHRoaXMuaWRlbnRpdHkgPSBuZXcgSWRlbnRpdHkoXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnaWRlbnRpdHknLCBcclxuXHRcdFx0XHRkb21JZDogJ3N0YXJ0LXNjcmVlbi1pZGVudGl0eScsXHJcblx0XHRcdFx0cGF0aDogJ2ltZy9pZGVudGl0eS9sb2dvLnBuZycsIFxyXG5cdFx0XHRcdGF1dGhvcjogJ3BldGUgbWFya2lld2ljeicsIFxyXG5cdFx0XHRcdHNvdXJjZTogJ3BseW9qdW1wJ1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdC8vIHNldCBwb3NpdGlvbiBvZiBJZGVudGl0eVxyXG5cdFx0dGhpcy5pZGVudGl0eS5zZXRET01Qb3NpdGlvbiAoXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0b3A6IDAsXHJcblx0XHRcdFx0bGVmdDogMFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHR9XHJcblxyXG5cdGxvYWRJbnN0cnVjdGlvbnMgKCkge1xyXG5cclxuXHRcdHRoaXMuaW5zdHJ1Y3Rpb25zID0gbmV3IFN0YXRpY1RleHQoXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnZ2FtZSBpbnN0cnVjdGlvbnMnLFxyXG5cdFx0XHRcdGRvbUlkOiAnaW5zdHJ1Y3Rpb25zJyxcclxuXHRcdFx0XHR0ZXh0OiAnUGxheSB0byB3aW4uIFRoYXQgaXMgYWxsIFRydW1wIGNhcmVzIGFib3V0LCBhbmQgc28gc2hvdWxkIHlvdS4nXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0cnVjdGlvbnMuc2V0RE9NUG9zaXRpb24oXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0b3A6IDAsXHJcblx0XHRcdFx0bGVmdDogMCxcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0fVxyXG5cclxuXHRiaW5kU3RhcnQgKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpbiBiaW5kU3RhcnQsIHRoaXMuZ2FtZTpcIiArIHRoaXMuZ2FtZSlcclxuXHRcdC8vIHdlIHVzZSBiaW5kKCkgdG8gbGluayB0aGUgZnVuY3Rpb24gYmVsb3cgdG8gU3RhcnRTY3JlZW4gKG90aGVyd2lzZSwgaXQgdGhpbmtzIGl0IGlzIGluc2lkZSB3aW5kb3cpXHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQtc2NyZWVuLXBsYXktYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBcclxuXHRcdFx0ZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHQvL2FsZXJ0KFwiaW4gaGFuZGxlciwgZ2FtZTpcIiArIHRoaXMuZ2FtZSlcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0dGhpcy5nYW1lLnN0YXJ0R2FtZSgpO1xyXG5cclxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcclxuXHR9XHJcbn0iLCIvKiogXHJcbiAqIFN0YXRpY0ltYWdlLmpzXHJcbiAqIEltYWdlLXN0eWxlIEluZm9ybWF0aW9uIHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgb25jZSB0aGUgZ2FtZSBpcyBsb2FkZWRcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aWNJbWFnZSBleHRlbmRzIEltYWdlIHtcclxuXHJcblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG5cdFx0c3VwZXIoY29uZmlnKTtcclxuXHJcblx0XHR0aGlzLnN0YXRpYyA9IHRydWU7XHJcblx0fVxyXG5cclxufVxyXG4iLCIvKiogXHJcbiAqIFN0YXRpY1RleHQuanNcclxuICogVGV4dCB0aGF0IGNhbm5vdCBiZSBjaGFuZ2VkIGFmdGVyIGxvYWRlZCBieSB0aGUgZ2FtZVxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuIGltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aWNUZXh0IGV4dGVuZHMgVGV4dCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuXHRcdHN1cGVyKGNvbmZpZyk7XHJcblxyXG5cdFx0dGhpcy5zdGF0aWMgPSB0cnVlO1xyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsIi8qKiBcclxuICogVGV4dC5qc1xyXG4gKiBDcmVhdGVzIGEgdGV4dC10eXBlIEluZm8gb2JqZWN0XHJcbiAqIEBpbmhlcml0cyBJbmZvLCBHYW1lUGllY2VcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIEluZm8ge1xyXG5cclxuIFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIoY29uZmlnKTtcclxuXHJcbiBcdFx0Ly8gc2V0IHRoZSB0ZXh0XHJcbiBcdFx0dGhpcy5zZXRUZXh0KGNvbmZpZy50ZXh0KTtcclxuXHJcbiBcdFx0Ly8gc2V0IHRoZSBET01JZFxyXG4gXHRcdHRoaXMuYWRkVG9ET00oY29uZmlnLmRvbUlkKTtcclxuIFx0fVxyXG5cclxuIFx0c2V0VGV4dCAodHh0KSB7XHJcbiBcdFx0dGhpcy50ZXh0ID0gdHh0O1xyXG4gXHR9XHJcblxyXG4gXHRhZGRUb0RPTSAoZG9tSWQpIHtcclxuXHJcbiBcdFx0dGhpcy5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuIFx0XHR0aGlzLmRvbS5pZCA9IG5hbWUgKyAnLVRleHQnO1xyXG4gXHRcdHRoaXMuZG9tLmlubmVySFRNTCA9IHRoaXMudGV4dDtcclxuXHJcbiBcdFx0Ly8gY29udGFpbmVyXHJcbiBcdFx0dmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvbUlkKTtcclxuXHJcbiBcdFx0Ly8gYWRkIHRvIHRoZSBET01cclxuIFx0XHRjb250YWluZXIuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tLCBjb250YWluZXIuY2hpbGROb2Rlc1swXSk7XHJcblxyXG5cdH1cclxuXHJcbiB9IiwiLyoqIFxyXG4gKiBUaWdlci5qc1xyXG4gKiBBIFRpZ2VyLCB3aG8gdHJpZXMgdG8gZ2V0IHRoZSBQbGF5ZXIuXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XHJcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBUaWdlciBleHRlbmRzIEFuaW1hbCB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XHJcbiBcdH1cclxuIH0iLCIvKiogXHJcbiAqIFRydW1wLmpzXHJcbiAqIFRoZSBiYWxsLWxpa2UgQ2hhcmFjdGVyIHlvdSBraWNrIGludG8gQW5pbWFsc1xyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRydW1wIGV4dGVuZHMgQ2hhcmFjdGVyIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlciAoY29uZmlnKTtcclxuIFx0fVxyXG4gfSIsIi8qKiBcclxuICogQ3JlYXRlIHRoZSBnYW1lLiBJbXBvcnQgdGhlIHByaW1hcnkgY2xhc3NlcywgYW5kICdjb21wb3NpdGUnIFxyXG4gKiB0aGUgb3ZlcmFsbCBHYW1lIG9iamVjdCBvdXQgb2YgaW5zdGFuY2VzIG9mIHRoZSBjbGFzc2VzLlxyXG4gKi9cclxuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcblxyXG4vL1RoZSBlbnRpcmUgZ2FtZVxyXG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUuanMnO1xyXG5cclxuLy9TY3JlZW4gaW5oZXJpdGFuY2VcclxuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XHJcbmltcG9ydCBTdGFydFNjcmVlbiBmcm9tICcuL1N0YXJ0U2NyZWVuLmpzJztcclxuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi9HYW1lU2NyZWVuLmpzJztcclxuaW1wb3J0IEVuZFNjcmVlbiBmcm9tICcuL0VuZFNjcmVlbi5qcyc7XHJcblxyXG4vL0luZm8gaW5oZXJpdGFuY2VcclxuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcclxuaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJztcclxuaW1wb3J0IElkZW50aXR5IGZyb20gJy4vSWRlbnRpdHkuanMnO1xyXG5pbXBvcnQgSW5zdHJ1Y3Rpb25zIGZyb20gJy4vSW5zdHJ1Y3Rpb25zLmpzJztcclxuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4vRHluYW1pY1RleHQuanMnO1xyXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZS5qcyc7XHJcblxyXG4vL0NoYXJhY3RlciBpbmhlcml0YW5jZVxyXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcclxuaW1wb3J0IFRydW1wIGZyb20gJy4vVHJ1bXAuanMnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcclxuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XHJcbmltcG9ydCBMaW9uIGZyb20gJy4vTGlvbi5qcyc7XHJcbmltcG9ydCBUaWdlciBmcm9tICcuL1RpZ2VyLmpzJztcclxuaW1wb3J0IEJlYXIgZnJvbSAnLi9CZWFyLmpzJztcclxuaW1wb3J0IEdvcmlsbGEgZnJvbSAnLi9Hb3JpbGxhLmpzJztcclxuaW1wb3J0IEhlYWx0aCBmcm9tICcuL0hlYWx0aC5qcyc7XHJcblxyXG4vL0FyZWEgaW5oZXJpdGFuY2UuXHJcbmltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XHJcbmltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XHJcbmltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4vQW5pbWFsQXJlYS5qcyc7XHJcbmltcG9ydCBQbGF5ZXJBcmVhIGZyb20gJy4vUGxheWVyQXJlYS5qcyc7XHJcblxyXG4vL1Rlc3QgZmlsZSAodmVyeSBzaW1wbGUgdGVzdHJ1bm5lcilcclxuaW1wb3J0IFRlc3RzIGZyb20gJy4uLy4uL3Rlc3RzL1Rlc3RzLmpzJztcclxuXHJcbi8qKiBcclxuICogU2V0IHVwIHRlc3RzLlxyXG4gKi9cclxudmFyIG15VGVzdHMgPSBuZXcgVGVzdHMoKTtcclxuXHJcbi8qKlxyXG4gKiBTZXQgdXAgdGhlIEdhbWVcclxuICovXHJcbnZhciBteUdhbWUgPSBuZXcgR2FtZSh7bmFtZTogXCJab29LaWxsU29jY2VyXCJ9KTtcclxuXHJcbi8qKiBcclxuICogRVhQT1JUIFRPIFdFQiBDT05TT0xFXHJcbiAqIFRvIG1ha2Ugc29tZXRoaW5nIHZpc2libGUgaW4gV2ViIGNvbnNvbGUgZm9yIGRlYnVnZ2ludCwgYXR0YWNoIHRvIHdpbmRvdyBvYmplY3RcclxuICogTk9URTogUHJvZmVzc2lvbmFsIGNvZGUgdXNlcyBzcGVjaWFsaXplZCB0ZXN0aW5nIG1vZHVsZXMgbGlrZSBNb2NoYSwgS2FybWEsIGFuZCBcclxuICogc2ltaWxhciB0ZXN0aW5nIGxpYnJhcmllcy5cclxuICovXHJcblxyXG4vLyB3ZSBjYW4gcnVuIHRoaXMgdGVzdCBtYW51YWxseSB3aXRoIHRlc3RzLnJ1bigpO1xyXG53aW5kb3cudGVzdHMgPSBteVRlc3RzO1xyXG5cclxuLy8gbWFrZSB0aGUgZ2FtZSBvYmplY3QgdmlzaWJsZSBzbyB3ZSBjYW4gaW5zcGVjdCBpdC5cclxud2luZG93LmdhbWUgPSBteUdhbWU7XHJcblxyXG5jb25zb2xlLmxvZygnWk9PS0lMTFNPQ0NFUiBHYW1lIGluaXRpYWxpemVkLiBBY2Nlc3MgZ2FtZSB2aWEgXCJnYW1lXCIuIFVzZSBUZXN0cy5ydW4oKSB0byB0ZXN0LicpXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4uL21vZHVsZXMvanMvR2FtZVBpZWNlLmpzJztcclxuXHJcbi8vVGhlIGVudGlyZSBnYW1lXHJcbmltcG9ydCBHYW1lIGZyb20gJy4uL21vZHVsZXMvanMvR2FtZS5qcyc7XHJcblxyXG4vL1NjcmVlbiBpbmhlcml0YW5jZVxyXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4uL21vZHVsZXMvanMvU2NyZWVuLmpzJztcclxuaW1wb3J0IFN0YXJ0U2NyZWVuIGZyb20gJy4uL21vZHVsZXMvanMvU3RhcnRTY3JlZW4uanMnO1xyXG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL0dhbWVTY3JlZW4uanMnO1xyXG5pbXBvcnQgRW5kU2NyZWVuIGZyb20gJy4uL21vZHVsZXMvanMvRW5kU2NyZWVuLmpzJztcclxuXHJcbi8vSW5mbyBpbmhlcml0YW5jZVxyXG5pbXBvcnQgSW5mbyBmcm9tICcuLi9tb2R1bGVzL2pzL0luZm8uanMnO1xyXG5pbXBvcnQgVGV4dCBmcm9tICcuLi9tb2R1bGVzL2pzL1RleHQuanMnO1xyXG5pbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuLi9tb2R1bGVzL2pzL1N0YXRpY1RleHQuanMnO1xyXG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi4vbW9kdWxlcy9qcy9JZGVudGl0eS5qcyc7XHJcbmltcG9ydCBJbnN0cnVjdGlvbnMgZnJvbSAnLi4vbW9kdWxlcy9qcy9JbnN0cnVjdGlvbnMuanMnO1xyXG5pbXBvcnQgRHluYW1pY1RleHQgZnJvbSAnLi4vbW9kdWxlcy9qcy9EeW5hbWljVGV4dC5qcyc7XHJcbmltcG9ydCBTY29yZSBmcm9tICcuLi9tb2R1bGVzL2pzL1Njb3JlLmpzJztcclxuXHJcbi8vQ2hhcmFjdGVyIGluaGVyaXRhbmNlXHJcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi4vbW9kdWxlcy9qcy9DaGFyYWN0ZXIuanMnO1xyXG5pbXBvcnQgVHJ1bXAgZnJvbSAnLi4vbW9kdWxlcy9qcy9UcnVtcC5qcyc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vbW9kdWxlcy9qcy9QbGF5ZXIuanMnO1xyXG5pbXBvcnQgQW5pbWFsIGZyb20gJy4uL21vZHVsZXMvanMvQW5pbWFsLmpzJztcclxuaW1wb3J0IExpb24gZnJvbSAnLi4vbW9kdWxlcy9qcy9MaW9uLmpzJztcclxuaW1wb3J0IFRpZ2VyIGZyb20gJy4uL21vZHVsZXMvanMvVGlnZXIuanMnO1xyXG5pbXBvcnQgQmVhciBmcm9tICcuLi9tb2R1bGVzL2pzL0JlYXIuanMnO1xyXG5pbXBvcnQgR29yaWxsYSBmcm9tICcuLi9tb2R1bGVzL2pzL0dvcmlsbGEuanMnO1xyXG5pbXBvcnQgSGVhbHRoIGZyb20gJy4uL21vZHVsZXMvanMvSGVhbHRoLmpzJztcclxuXHJcbi8vQXJlYSBpbmhlcml0YW5jZS5cclxuaW1wb3J0IEFyZWEgZnJvbSAnLi4vbW9kdWxlcy9qcy9BcmVhLmpzJztcclxuaW1wb3J0IENhZ2UgZnJvbSAnLi4vbW9kdWxlcy9qcy9DYWdlLmpzJztcclxuaW1wb3J0IEFuaW1hbEFyZWEgZnJvbSAnLi4vbW9kdWxlcy9qcy9BbmltYWxBcmVhLmpzJztcclxuaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi4vbW9kdWxlcy9qcy9QbGF5ZXJBcmVhLmpzJztcclxuXHJcbi8qKiBcclxuICogVEVTVEJFRCAtIFRlc3QgYWxsIG91ciBvYmplY3RzLiBUaGlzIGlzIGEgdmVyeSBiYXNpYyB0ZXN0aW5nIHN5c3RlbS4gXHJcbiAqIE5PVEU6IFByb2Zlc3Npb25hbCBjb2RlIHVzZXMgdGVzdGluZyBsaWJyYXJpZXMgbGlrZSBLYXJtYSBhbmQgTW9jaGEuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0cyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yICgpIHtcclxuXHR9XHJcblxyXG5cdC8vIEJlY2F1c2Ugd2UgbWFrZSB0aGVzZSBvYmplY3RzIHdpdGggJ3ZhcicgdGhleSBhcmUgc2NvcGVkIHRvIHRoZSBydW4oKSBmdW5jdGlvbi5cclxuXHRydW4gKCkge1xyXG5cclxuXHRcdHZhciBjb25maWcgPSB7bmFtZTonRm9yZXN0IFRydW1wIG9yIERvbmFsZCBHdW1wIHJ1bHonfTtcclxuXHJcblx0XHQvLyBNYWtlIHNvbWUgdGVzdCBnYW1lIG9iamVjdHNcclxuXHRcdHZhciBnYW1lID0gbmV3IEdhbWUoY29uZmlnKTtcclxuXHRcdGNvbnNvbGUubG9nKGdhbWUuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHQvL3Rlc3QgR2FtZSBPYmplY3RcclxuXHRcdHZhciBteUdhbWUgPSBuZXcgR2FtZSh7bmFtZTogXCJab29LaWxsU29jY2VyXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15R2FtZS5nZXROYW1lKCkpO1xyXG5cclxuXHRcdC8vb3RoZXIgb2JqZWN0c1xyXG5cdFx0dmFyIG15U2NyZWVuID0gbmV3IFNjcmVlbih7bmFtZTogXCJPcGVuaW5nIFNjcmVlblwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteVNjcmVlbi5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteVN0YXJ0U2NyZWVuID0gbmV3IFN0YXJ0U2NyZWVuKHtuYW1lOiBcIlN0YXJ0IFNjcmVlblwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteVN0YXJ0U2NyZWVuLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15R2FtZVNjcmVlbiA9IG5ldyBHYW1lU2NyZWVuKHtuYW1lOiBcIkdhbWUgU2NyZWVuXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15R2FtZVNjcmVlbi5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUVuZFNjcmVlbiA9IG5ldyBFbmRTY3JlZW4oe25hbWU6IFwiRW5kIFNjcmVlblwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteUVuZFNjcmVlbi5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUluZm8gPSBuZXcgSW5mbyh7bmFtZTogXCJHZW5lcmljIEluZm9ybWF0aW9uXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15SW5mby5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteVRleHQgPSBuZXcgVGV4dCh7bmFtZTogXCJHZW5lcmljIFRleHQgT2JqZWN0XCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15VGV4dC5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteVN0YXRpY1RleHQgPSBuZXcgU3RhdGljVGV4dCh7bmFtZTogXCJHZW5lcmljIFN0YXRpYyBUZXh0IE9iamVjdFwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteVN0YXRpY1RleHQuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlJZGVudGl0eSA9IG5ldyBJZGVudGl0eSh7bmFtZTogXCJHZW5lcmljIElkZW50aXR5IE9iamVjdFwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteUlkZW50aXR5LmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15SW5zdHJ1Y3Rpb25zID0gbmV3IEluc3RydWN0aW9ucyh7bmFtZTogXCJHZW5lcmljIEluc3RydWN0aW9ucyBPYmplY3RcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlJbnN0cnVjdGlvbnMuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlEeW5hbWljVGV4dCA9IG5ldyBEeW5hbWljVGV4dCh7bmFtZTogXCJHZW5lcmljIER5bmFtaWMgVGV4dCBPYmplY3RcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlEeW5hbWljVGV4dC5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteVNjb3JlID0gbmV3IFNjb3JlKHtuYW1lOiBcInNjb3Jlcy4uLlwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteVNjb3JlLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15Q2hhcmFjdGVyID0gbmV3IENoYXJhY3Rlcih7bmFtZTogXCJHZW5lcmljIENoYXJhY3RlclwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteUNoYXJhY3Rlci5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteVRydW1wID0gbmV3IFRydW1wKHtuYW1lOiBcIkRvbmFsZCBUcnVtcFwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteVRydW1wLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15UGxheWVyID0gbmV3IFBsYXllcih7bmFtZTogXCJFbmQgVXNlclwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteVBsYXllci5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUFuaW1hbCA9IG5ldyBBbmltYWwoe25hbWU6IFwiR2VuZXJpYyBBbmltYWxcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlBbmltYWwuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlMaW9uID0gbmV3IExpb24oe25hbWU6IFwiQ293YXJkbHkgdGhlIExpb25cIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlMaW9uLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15VGlnZXIgPSBuZXcgVGlnZXIoe25hbWU6IFwiQ2hvbXBlciB0aGUgVGlnZXJcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlUaWdlci5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUJlYXIgPSBuZXcgQmVhcih7bmFtZTogXCJNYXVsZXIgdGhlIEJlYXJcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlCZWFyLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15R29yaWxsYSA9IG5ldyBHb3JpbGxhKHsgbmFtZTogXCJTcHVua3kgdGhlIEdvcmlsbGFcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlHb3JpbGxhLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15SGVhbHRoID0gbmV3IEhlYWx0aCh7bmFtZTogXCJPbmUgSGVhbHRoIEtpdFwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteUhlYWx0aC5nZXROYW1lKCkpO1xyXG5cclxuXHRcdC8vQXJlYSBpbmhlcml0YW5jZS5cclxuXHRcdHZhciBteUFyZWEgPSBuZXcgQXJlYSh7bmFtZTogXCJHZW5lcmljIEFyZWFcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlBcmVhLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15Q2FnZSA9IG5ldyBDYWdlKHtuYW1lOiBcIkdlbmVyaWMgQXJlYVwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteUNhZ2UuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlBbmltYWxBcmVhID0gbmV3IEFuaW1hbEFyZWEoe25hbWU6IFwiQW5pbWFsQXJlYVwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteUFuaW1hbEFyZWEuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlQbGF5ZXJBcmVhID0gbmV3IFBsYXllckFyZWEoe25hbWU6IFwiUGxheWVyQXJlYVwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteVBsYXllckFyZWEuZ2V0TmFtZSgpKTtcclxuXHR9XHJcbn1cclxuIl19
