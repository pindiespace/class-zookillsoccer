(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var _Mover = require('./Mover.js');

var _Mover2 = _interopRequireDefault(_Mover);

var _Collider = require('./Collider.js');

var _Collider2 = _interopRequireDefault(_Collider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Animal.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The critters that Trump tries to stop from getting the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// >>>>>>>>>>>ADDED IN WEEK 11


// END ADDED WEEK 11<<<<<<<<<<<<<

var Animal = function (_Character) {
  _inherits(Animal, _Character);

  function Animal(config) {
    _classCallCheck(this, Animal);

    // >>>>>>>>>>>ADDED IN WEEK 11

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Animal).call(this, config));

    _this.mover = new _Mover2.default(_this, 0.2, 'bottom');
    _this.collider = new _Collider2.default();
    // END ADDED IN WEEK 11<<<<<<<<<<<<<<

    return _this;
  }

  // >>>>>>>>>>>ADDED IN WEEK 11


  _createClass(Animal, [{
    key: 'update',
    value: function update() {
      this.mover.randomWalk();
    }
    // END ADDED IN WEEK 11<<<<<<<<<<<<<<

  }]);

  return Animal;
}(_Character3.default);

exports.default = Animal;

},{"./Character.js":7,"./Collider.js":8,"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./Mover.js":21,"./StaticImage.js":27}],2:[function(require,module,exports){
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

},{"./Area.js":3,"./GamePiece.js":12}],3:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./StaticImage.js":27}],4:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./StaticImage.js":27}],5:[function(require,module,exports){
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

},{"./Animal.js":1,"./Character.js":7,"./GamePiece.js":12}],6:[function(require,module,exports){
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

},{"./Area.js":3,"./GamePiece.js":12}],7:[function(require,module,exports){
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
        // >>>>>>>>>>>ADDED IN WEEK 11
        //console.log('drawing')
        // END ADDED IN WEEK 11<<<<<<<<<<<<<<
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

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./StaticImage.js":27}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * @class Collider
 * @description detect collisions between
 * a. two objects running into each other
 * b. an inside object running into the bounds of its container object 
 */

var Collider = function Collider() {
  _classCallCheck(this, Collider);
};

exports.default = Collider;

},{}],9:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Info.js":18,"./Text.js":29}],10:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Screen.js":25}],11:[function(require,module,exports){
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

			// >>>>>>>>>>>ADDED IN WEEK 11
			this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
			// END ADDED WEEK 11<<<<<<<<<<<<<
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

},{"./Animal.js":1,"./AnimalArea.js":2,"./Area.js":3,"./Bear.js":5,"./Cage.js":6,"./Character.js":7,"./DynamicText.js":9,"./EndScreen.js":10,"./GamePiece.js":12,"./GameScreen.js":13,"./Gorilla.js":14,"./Health.js":15,"./Identity.js":16,"./Image.js":17,"./Info.js":18,"./Instructions.js":19,"./Lion.js":20,"./Player.js":22,"./PlayerArea.js":23,"./Score.js":24,"./Screen.js":25,"./StartScreen.js":26,"./StaticText.js":28,"./Text.js":29,"./Tiger.js":30,"./Trump.js":31}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{"./AnimalArea.js":2,"./Area.js":3,"./Cage.js":6,"./GamePiece.js":12,"./PlayerArea.js":23,"./Screen.js":25}],14:[function(require,module,exports){
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

},{"./Animal.js":1,"./Character.js":7,"./GamePiece.js":12}],15:[function(require,module,exports){
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

},{"./Character.js":7,"./GamePiece.js":12}],16:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./StaticImage.js":27}],17:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Info.js":18}],18:[function(require,module,exports){
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

},{"./GamePiece.js":12}],19:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Info.js":18,"./StaticText.js":28,"./Text.js":29}],20:[function(require,module,exports){
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

},{"./Animal.js":1,"./Character.js":7,"./GamePiece.js":12}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * @class Mover
 * @description update position of object being animated by Game.
 */

var Mover = function () {
   function Mover(gameObj, prefSpeed, direction) {
      _classCallCheck(this, Mover);

      this.newTop = 1, this.newLeft = 1, this.newBottom = 1, this.newRight = 1;
      this.obj = gameObj;
      this.speed = prefSpeed * this.timeStampRandom();
      this.delay = this.timeStampRandom() * 300;
      this.direction = direction;
      this.counter = 0;
      this.delayCounter = 0;
      this.MAX = 30;
      this.MAX_DELAY = 300;

      console.log("TIMESTAMP RANDOM:" + this.timeStampRandom());
      console.log("TIMESTAMP DELAY:" + this.delay);
   }

   /** 
    * @method setOrigin
    * @description set the starting position of the object
    * @param Integer x the x coordinate of the object
    * @param Integer y the y coordinate of the object
    */


   _createClass(Mover, [{
      key: "setOrigin",
      value: function setOrigin(x, y) {
         this.obj.position.left = x;
         this.obj.position.top = y;
      }

      /** 
       * @method slider
       * @description slew object horizontally
       * @param deg the degrees to rotate the object
       */

   }, {
      key: "slider",
      value: function slider(deg) {
         console.log('setting slider');
         this.obj.keydown = function (e) {
            console.log(e.keyCode);
            switch (e.keyCode) {
               case 37:
                  //left
                  this.obj.position.left -= 1;
                  break;
               case 38:
                  //up
                  break;
               case 39:
                  //right
                  this.obj.position.right += 1;
                  break;
               case 40: //down
               default:
                  break;
            }
         };
      }

      /** 
       * @method kicker 
       * Move object slightly up for duration of space bar down
       */

   }, {
      key: "kicker",
      value: function kicker() {}

      /** 
       * @method pingPong
       * @description move in a ping-pong style
       */

   }, {
      key: "pingPong",
      value: function pingPong() {}
   }, {
      key: "timeStampRandom",
      value: function timeStampRandom() {
         var d = new Date().getTime();
         if (window.performance && typeof window.performance.now === "function") {
            d += performance.now(); //use high-precision timer if available
         }
         var num = 'xxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 10) % 10 | 0;
            d = Math.floor(d / 10);
            return (c == 'x' ? r : r & 0x3 | 0x8).toString(10);
         });
         return num / 10000;
      }

      /**
      * Returns a random number between min (inclusive) and max (exclusive)
      * @link 
      */

   }, {
      key: "getRandom",
      value: function getRandom(min, max) {
         return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      /** 
       * @method randomWalk
       * @description generate random walk, with one preferred direction, 
       * used by Animals
       */

   }, {
      key: "randomWalk",
      value: function randomWalk() {
         this.counter++;
         this.delayCounter++;
         if (this.delayCounter < this.delay) {
            //console.log('delayCounter:' + this.delayCounter + ' MAX:' + this.MAX_DELAY);
            return;
         }
         switch (this.direction) {
            case 'top':
               this.obj.position.top -= this.speed + 0.1 * this.getRandom(1, this.speed);
               this.obj.position.left += 10 * this.getRandom(-this.speed, this.speed);
               break;
            case 'left':
               this.obj.position.left -= this.speed + 0.1 * this.getRandom(1, this.speed);
               this.obj.position.top += 10 * this.getRandom(-this.speed, this.speed);
               break;
            case 'bottom':
               if (this.counter > this.MAX) {
                  this.MAX = parseInt(4, 30);
                  this.newLeft = this.getRandom(-this.speed, this.speed);
                  this.counter = 0;
               } else if (this.counter > this.MAX / 2) {
                  this.speed += this.timeStampRandom() / 50;
               }
               this.obj.position.top += this.speed;
               this.obj.position.left += this.newLeft;
               break;
            case 'right':
               this.obj.position.left += this.speed + 0.1 * this.getRandom(1, this.speed);
               this.obj.position.top += 10 * this.getRandom(-this.speed, this.speed);
               break;
            default:
               console.error('Mover.setPrefDirection: invalid direction:' + this.direction);
               break;
         }
      }
   }]);

   return Mover;
}();

exports.default = Mover;

},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

var _Mover = require('./Mover.js');

var _Mover2 = _interopRequireDefault(_Mover);

var _Collider = require('./Collider.js');

var _Collider2 = _interopRequireDefault(_Collider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Player.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * User-controlled Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// >>>>>>>>>>>ADDED IN WEEK 11


// END ADDED WEEK 11<<<<<<<<<<<<<

var Player = function (_Character) {
  _inherits(Player, _Character);

  function Player(config) {
    _classCallCheck(this, Player);

    // >>>>>>>>>>>ADDED IN WEEK 11

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this, config));

    _this.mover = new _Mover2.default(_this, 0.2);
    _this.collider = new _Collider2.default();
    // END ADDED IN WEEK 11<<<<<<<<<<<<<<

    // >>>>>>>>>>>ADDED IN WEEK 11
    _this.mover.slider();
    // END ADDED IN WEEK 11<<<<<<<<<<<<<<		
    return _this;
  }

  // >>>>>>>>>>>ADDED IN WEEK 11


  _createClass(Player, [{
    key: 'update',
    value: function update() {}
    // END ADDED IN WEEK 11<<<<<<<<<<<<<<

  }]);

  return Player;
}(_Character3.default);

exports.default = Player;

},{"./Character.js":7,"./Collider.js":8,"./GamePiece.js":12,"./Mover.js":21}],23:[function(require,module,exports){
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

},{"./Area.js":3,"./GamePiece.js":12}],24:[function(require,module,exports){
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

},{"./DynamicText.js":9,"./GamePiece.js":12,"./Info.js":18,"./Text.js":29}],25:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Image.js":17,"./StaticImage.js":27}],26:[function(require,module,exports){
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

},{"./Background.js":4,"./GamePiece.js":12,"./Identity.js":16,"./Image.js":17,"./Info.js":18,"./Screen.js":25,"./StaticText.js":28,"./Text.js":29}],27:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18}],28:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Info.js":18,"./Text.js":29}],29:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Info.js":18}],30:[function(require,module,exports){
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

},{"./Animal.js":1,"./Character.js":7,"./GamePiece.js":12}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

var _Mover = require('./Mover.js');

var _Mover2 = _interopRequireDefault(_Mover);

var _Collider = require('./Collider.js');

var _Collider2 = _interopRequireDefault(_Collider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Trump.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The ball-like Character you kick into Animals
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// >>>>>>>>>>>ADDED IN WEEK 11


// END ADDED WEEK 11<<<<<<<<<<<<<

var Trump = function (_Character) {
  _inherits(Trump, _Character);

  function Trump(config) {
    _classCallCheck(this, Trump);

    // >>>>>>>>>>>ADDED IN WEEK 11

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Trump).call(this, config));

    _this.mover = new _Mover2.default(_this, 0.2, 'top');
    _this.collider = new _Collider2.default();
    // END ADDED IN WEEK 11<<<<<<<<<<<<<<
    return _this;
  }

  // >>>>>>>>>>>ADDED IN WEEK 11


  _createClass(Trump, [{
    key: 'update',
    value: function update() {
      this.mover.pingPong();
    }
    // END ADDED IN WEEK 11<<<<<<<<<<<<<<

  }]);

  return Trump;
}(_Character3.default);

exports.default = Trump;

},{"./Character.js":7,"./Collider.js":8,"./GamePiece.js":12,"./Mover.js":21}],32:[function(require,module,exports){
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

},{"../../tests/Tests.js":33,"./Animal.js":1,"./AnimalArea.js":2,"./Area.js":3,"./Bear.js":5,"./Cage.js":6,"./Character.js":7,"./DynamicText.js":9,"./EndScreen.js":10,"./Game.js":11,"./GamePiece.js":12,"./GameScreen.js":13,"./Gorilla.js":14,"./Health.js":15,"./Identity.js":16,"./Info.js":18,"./Instructions.js":19,"./Lion.js":20,"./Player.js":22,"./PlayerArea.js":23,"./Score.js":24,"./Screen.js":25,"./StartScreen.js":26,"./StaticText.js":28,"./Text.js":29,"./Tiger.js":30,"./Trump.js":31}],33:[function(require,module,exports){
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

},{"../modules/js/Animal.js":1,"../modules/js/AnimalArea.js":2,"../modules/js/Area.js":3,"../modules/js/Bear.js":5,"../modules/js/Cage.js":6,"../modules/js/Character.js":7,"../modules/js/DynamicText.js":9,"../modules/js/EndScreen.js":10,"../modules/js/Game.js":11,"../modules/js/GamePiece.js":12,"../modules/js/GameScreen.js":13,"../modules/js/Gorilla.js":14,"../modules/js/Health.js":15,"../modules/js/Identity.js":16,"../modules/js/Info.js":18,"../modules/js/Instructions.js":19,"../modules/js/Lion.js":20,"../modules/js/Player.js":22,"../modules/js/PlayerArea.js":23,"../modules/js/Score.js":24,"../modules/js/Screen.js":25,"../modules/js/StartScreen.js":26,"../modules/js/StaticText.js":28,"../modules/js/Text.js":29,"../modules/js/Tiger.js":30,"../modules/js/Trump.js":31}]},{},[32])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQW5pbWFsQXJlYS5qcyIsIm1vZHVsZXMvanMvQXJlYS5qcyIsIm1vZHVsZXMvanMvQmFja2dyb3VuZC5qcyIsIm1vZHVsZXMvanMvQmVhci5qcyIsIm1vZHVsZXMvanMvQ2FnZS5qcyIsIm1vZHVsZXMvanMvQ2hhcmFjdGVyLmpzIiwibW9kdWxlcy9qcy9Db2xsaWRlci5qcyIsIm1vZHVsZXMvanMvRHluYW1pY1RleHQuanMiLCJtb2R1bGVzL2pzL0VuZFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvR2FtZS5qcyIsIm1vZHVsZXMvanMvR2FtZVBpZWNlLmpzIiwibW9kdWxlcy9qcy9HYW1lU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9Hb3JpbGxhLmpzIiwibW9kdWxlcy9qcy9IZWFsdGguanMiLCJtb2R1bGVzL2pzL0lkZW50aXR5LmpzIiwibW9kdWxlcy9qcy9JbWFnZS5qcyIsIm1vZHVsZXMvanMvSW5mby5qcyIsIm1vZHVsZXMvanMvSW5zdHJ1Y3Rpb25zLmpzIiwibW9kdWxlcy9qcy9MaW9uLmpzIiwibW9kdWxlcy9qcy9Nb3Zlci5qcyIsIm1vZHVsZXMvanMvUGxheWVyLmpzIiwibW9kdWxlcy9qcy9QbGF5ZXJBcmVhLmpzIiwibW9kdWxlcy9qcy9TY29yZS5qcyIsIm1vZHVsZXMvanMvU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9TdGFydFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvU3RhdGljSW1hZ2UuanMiLCJtb2R1bGVzL2pzL1N0YXRpY1RleHQuanMiLCJtb2R1bGVzL2pzL1RleHQuanMiLCJtb2R1bGVzL2pzL1RpZ2VyLmpzIiwibW9kdWxlcy9qcy9UcnVtcC5qcyIsIm1vZHVsZXMvanMvaW5kZXguanMiLCJ0ZXN0cy9UZXN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FDS0M7Ozs7QUFD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WUFBUCxFQUFmLENBQW5CO0FBQ0EsV0FBUSxHQUFSLENBQVksYUFBYSxPQUFiLEVBQVo7O0FBRUEsT0FBSSxlQUFlLHlCQUFlLEVBQUMsTUFBTSxZQUFQLEVBQWYsQ0FBbkI7QUFDQSxXQUFRLEdBQVIsQ0FBWSxhQUFhLE9BQWIsRUFBWjtBQUNBOzs7Ozs7a0JBM0ZtQixLIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKiBcbiAqIEFuaW1hbC5qc1xuICogVGhlIGNyaXR0ZXJzIHRoYXQgVHJ1bXAgdHJpZXMgdG8gc3RvcCBmcm9tIGdldHRpbmcgdGhlIFBsYXllci5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5cbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XG5cbiAvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcbiBpbXBvcnQgTW92ZXIgZnJvbSAnLi9Nb3Zlci5qcyc7XG4gaW1wb3J0IENvbGxpZGVyIGZyb20gJy4vQ29sbGlkZXIuanMnO1xuIC8vIEVORCBBRERFRCBXRUVLIDExPDw8PDw8PDw8PDw8PFxuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbWFsIGV4dGVuZHMgQ2hhcmFjdGVyIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcblxuIFx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcbiBcdFx0dGhpcy5tb3ZlciA9IG5ldyBNb3Zlcih0aGlzLCAwLjIsICdib3R0b20nKTtcbiBcdFx0dGhpcy5jb2xsaWRlciA9IG5ldyBDb2xsaWRlcigpO1xuIFx0XHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cbiBcdH1cblxuIFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG4gXHR1cGRhdGUgKCkge1xuIFx0XHR0aGlzLm1vdmVyLnJhbmRvbVdhbGsoKTtcbiBcdH1cbiBcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcblxuIH0iLCIvKiogXG4gKiBBbmltYWxBcmVhLmpzXG4gKiBUaGUgcmVnaW9uIGFuaW1hbHMgbW92ZSB0aHJvdWdoIHRvIGdldCB0byBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBBcmVhXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FnZSBleHRlbmRzIEFyZWEge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG4gXHR9XG5cbiB9IiwiLyoqIFxuICogQXJlYS5qc1xuICogQSBnZW5lcmljIHJlZ2lvbiBvZiB0aGUgZ2FtZSBzY3JlZW4uIFVzZWQgdG8gYWRkIHZpc3VhbCBvYmplY3RzLCBhbmQgXG4gKiBjcmVhdGUgYm91bmRzIGZvciBjb2xsaXNpb24gZGV0ZWN0aW9uLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgSW5mbywgSW1hZ2UsIFN0YXRpY0ltYWdlXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyZWEgZXh0ZW5kcyBHYW1lUGllY2Uge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG5cbiBcdFx0Ly8gY3JlYXRlIGEgPGRpdj4sIGFkZCB0byBET00sIHdpdGggb3B0aW9uYWwgaW1hZ2VcbiBcdFx0dGhpcy5hZGRUb0RPTShjb25maWcubmFtZSwgY29uZmlnLmNvbnRhaW5lciwgY29uZmlnLnBhdGgpO1xuXG4gXHRcdC8vIHBvc2l0aW9uIHdpdGggYWJzb2x1dGUgY29vcmRpbmF0ZWRcbiBcdFx0dGhpcy5zZXRET01Qb3NpdGlvbihjb25maWcucG9zaXRpb24pOyAvL2luaGVyaXRlZCBmcm9tIEdhbWVQaWVjZVxuIFx0XHR0aGlzLnNldERPTVNpemUoY29uZmlnLnNpemUpO1xuIFx0fVxuXG4gXHQvLyBjcmVhdGUgRE9NIGVsZW1lbnQsIExvYWQgYSBiYWNrZ3JvdW5kIGltYWdlLCBhbmQgaW5zZXJ0IGludG8gY29udGFpbmVyXG4gXHRhZGRUb0RPTSAobmFtZSwgY29udGFpbmVyLCBpbWdQYXRoKSB7XG4gXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gXHRcdHRoaXMuZG9tLmlkID0gbmFtZSArICctYXJlYSc7XG5cbiBcdFx0Ly8gcG9zaXRpb24gYWJzb2x1dGVseVxuIFx0XHR0aGlzLmRvbS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cbiBcdFx0Ly8gRG9uJ3QgYWxsb3cgcGFkZGluZyBvciBtYXJnaW5zIG9yIGJvcmRlcnMgZm9yIEFyZWFzXG4gXHRcdHRoaXMuZG9tLnN0eWxlLm1hcmdpbiA9ICcwcHgnO1xuIFx0XHR0aGlzLmRvbS5zdHlsZS5wYWRkaW5nID0gJzBweCc7XG5cbiBcdFx0Ly8gYWRkIHRvIHRoZSBET01cbiBcdFx0Y29udGFpbmVyLmluc2VydEJlZm9yZSh0aGlzLmRvbSwgY29udGFpbmVyLmNoaWxkTm9kZXNbMF0pO1xuXG4gXHRcdC8vIGlmIHdlIGhhdmUgYW4gaW1hZ2UsIGluc2VydCBpbiBlbGVtZW50IGJhY2tncm91bmRcbiBcdFx0aWYgKGltZ1BhdGgpIHtcblxuIFx0XHRcdHRoaXMuaW1hZ2UgPSBuZXcgU3RhdGljSW1hZ2UoXG4gXHRcdFx0XHR7XG4gXHRcdFx0XHRcdG5hbWU6IHRoaXMuZG9tLmlkICsgJy1pbWFnZSdcbiBcdFx0XHRcdH1cbiBcdFx0XHQpO1xuXG4gXHRcdFx0dGhpcy5pbWFnZS5sb2FkQmFja2dyb3VuZEltYWdlICh0aGlzLmRvbSwgaW1nUGF0aCk7XG4gXHRcdH1cblxuIFx0fVxuXG4gXHQvLyBib3VuZHMgZGV0ZWN0b3IgZm9yIHN1cHBsaWVkIENoYXJhY3RlclxuXG5cbiB9IiwiLyoqIFxuICogQmFja2dyb3VuZC5qc1xuICogR2FtZSBMb2dvcywgTG9nb1R5cGVzLCBCcmFuZCBOYW1lXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmQgZXh0ZW5kcyBTdGF0aWNJbWFnZSB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cblx0XHR0aGlzLnNldFNvdXJjZShjb25maWcuc291cmNlKTtcblx0XHR0aGlzLnNldEF1dGhvcihjb25maWcuYXV0aG9yKTtcblx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kSW1hZ2UoY29uZmlnLmRvbUlkLCBjb25maWcucGF0aCk7XG5cdH1cblxufVxuIiwiLyoqIFxuICogQmVhci5qc1xuICogQSBUaWdlciwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlYXIgZXh0ZW5kcyBBbmltYWwge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuIFx0fVxuXG5cbiB9IiwiLyoqIFxuICogQ2FnZS5qc1xuICogVGhlIHJlZ2lvbiB3aGVyZSBhbmltYWxzIGFyZSBjYWdlZC5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEFyZWFcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBDYWdlIGV4dGVuZHMgQXJlYSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblxuIFx0XHRzdXBlcihjb25maWcpO1xuXG4gXHR9XG5cbiB9IiwiLyoqIFxuICogQ2hhcmFjdGVyLmpzXG4gKiBHYW1lLWdlbmVyYXRlZCBvciB1c2VyIGF2YXRhcnMuIENoYXJhY3RlcnMgYXJlIHJlbmRlcmVkIGluIENhbnZhcywgYnV0IGhhdmUgdGhlaXIgXG4gKiBwb3NpdGlvbiBjb21wdXRlZCBhbmQgdXBkYXRlZCBvdXRzaWRlIGNhbnZhcy5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2VcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyIGV4dGVuZHMgR2FtZVBpZWNlIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcblxuIFx0XHQvLyBTZXQgcG9zaXRpb24gYW5kIHNpemUgZnJvbSBjb25maWd1cmF0aW9uXG4gXHRcdHRoaXMucG9zaXRpb24gPSBjb25maWcucG9zaXRpb247XG4gXHRcdHRoaXMuc2l6ZSA9IGNvbmZpZy5zaXplO1xuXG4gXHRcdC8vIHN0b3JlIGEgcmVmZXJlbmNlIHRvIHRoZSBnYW1lIG9iamVjdFxuIFx0XHR0aGlzLmdhbWUgPSBjb25maWcuZ2FtZTtcblxuIFx0XHR0aGlzLmltYWdlID0gbmV3IFN0YXRpY0ltYWdlKFxuIFx0XHRcdHtcbiBcdFx0XHRcdG5hbWU6IGNvbmZpZy5uYW1lICsgJy1pbWFnZScsXG4gXHRcdFx0XHRwYXRoOiBjb25maWcucGF0aFxuIFx0XHRcdH1cbiBcdFx0KTtcblxuIFx0XHQvLyBJbWFnZXMgZG9uJ3QgYXV0b21hdGljYWxseSBsb2FkIHdoZW4gdGhleSdyZSBub3QgYXR0YWNoZWQgdG8gdGhlIERPTSwgXG4gXHRcdC8vIG9yIGEgQ1NTIGJhY2tncm91bmQgaW1hZ2VcbiBcdFx0dGhpcy5pbWFnZS5sb2FkKGNvbmZpZy5wYXRoLCBmdW5jdGlvbiAoKSB7Y29uc29sZS5sb2coJ2xvYWRlZDonICsgY29uZmlnLm5hbWUpO30pO1xuIFx0fVxuXG4gXHQvLyBvdmVycmlkZSBkZWZhdWx0IGRyYXcgd2l0aCBvdXIgb3duXG4gXHRkcmF3IChjb250ZXh0KSB7XG5cdFx0aWYgKHRoaXMuaW1hZ2UpIHtcblx0XHRcdHZhciBpbWcgPSB0aGlzLmltYWdlLmRhdGE7XG4gXHRcdFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG5cdFx0XHQvL2NvbnNvbGUubG9nKCdkcmF3aW5nJylcblx0XHRcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcblx0XHRcdGlmIChpbWcpIHtcblx0XHRcdFx0Ly8gZHJhdyBpbWFnZSBpbnRvIEhUTUw1IGNhbnZhc1xuIFx0XHQgXHRcdGNvbnRleHQuZHJhd0ltYWdlKGltZywgdGhpcy5wb3NpdGlvbi5sZWZ0LCB0aGlzLnBvc2l0aW9uLnRvcCk7XG5cdFx0XHR9XG5cdFx0fVxuIFx0fVxuIH0iLCIvKiogXG4gKiBAY2xhc3MgQ29sbGlkZXJcbiAqIEBkZXNjcmlwdGlvbiBkZXRlY3QgY29sbGlzaW9ucyBiZXR3ZWVuXG4gKiBhLiB0d28gb2JqZWN0cyBydW5uaW5nIGludG8gZWFjaCBvdGhlclxuICogYi4gYW4gaW5zaWRlIG9iamVjdCBydW5uaW5nIGludG8gdGhlIGJvdW5kcyBvZiBpdHMgY29udGFpbmVyIG9iamVjdCBcbiAqL1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGlkZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoKSB7XG4gXHRcbiBcdH1cbiB9IiwiLyoqIFxuICogRHluYW1pY1RleHQuanNcbiAqIFRleHQgdGhhdCBjYW4gYmUgY2hhbmdlZCBieSB1c2VyIChlLmcuIGlucHV0IGZpZWxkKSwgb3IgXG4gKiB1cGRhdGVkIGJ5IHRoZSBnYW1lIGl0c2VsZi5cbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHluYW1pY1RleHQgZXh0ZW5kcyBUZXh0IHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0fVxufVxuIiwiLyoqIFxuICogRW5kU2NyZWVuLmpzXG4gKiBFbmRpbmcgc2NyZWVuIGZvciB0aGUgZ2FtZS5cbiAqIEBpbmhlcml0cyBTY3JlZW4sIEdhbWVQaWVjZVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG4gXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuXG4gXHRcdC8vIGxvYWQgdGhlIGJhY2tncm91bmQgaW1hZ2VcbiBcdFx0dGhpcy5sb2FkQmFja2dyb3VuZCgnaW1nL3NjcmVlbnMvZW5kLXNjcmVlbi5wbmcnKTtcblxuIFx0XHQvLyBMb2FkIEVuZFNjcmVlbiBzdWItb2JqZWN0c1xuIFx0XHR0aGlzLmxvYWRJbnB1dFNjb3JlKCk7XG4gXHRcdHRoaXMubG9hZEhpZ2hTY29yZXMoKTtcblxuIFx0XHQvLyBCaW5kIFwicGxheSBhZ2FpblwiIGFuZCBcImluc3RydWN0aW9uc1wiIGJ1dHRvbnMuXG4gXHRcdHRoaXMuYmluZFJlcGxheSgpO1xuIFx0XHR0aGlzLmJpbmRJbnN0cnVjdGlvbnMoKTtcbiBcdH1cblxuIFx0bG9hZElucHV0U2NvcmUgKCkge1xuXG4gXHR9XG5cbiBcdGxvYWRIaWdoU2NvcmVzICgpIHtcblxuIFx0fVxuXG4gXHRiaW5kUmVwbGF5ICgpIHtcblx0XHRjb25zb2xlLmxvZyhcImluIGJpbmRTdGFydCwgdGhpcy5nYW1lOlwiICsgdGhpcy5nYW1lKVxuXHRcdC8vIHdlIHVzZSBiaW5kKCkgdG8gbGluayB0aGUgZnVuY3Rpb24gYmVsb3cgdG8gU3RhcnRTY3JlZW4gKG90aGVyd2lzZSwgaXQgdGhpbmtzIGl0IGlzIGluc2lkZSB3aW5kb3cpXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZC1zY3JlZW4tcGxheS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFxuXHRcdFx0ZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0Ly9hbGVydChcImluIGhhbmRsZXIsIGdhbWU6XCIgKyB0aGlzLmdhbWUpXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy5nYW1lLnN0YXJ0R2FtZSgpO1xuXG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0YmluZEluc3RydWN0aW9ucyAoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJpbiBiaW5kU3RhcnQsIHRoaXMuZ2FtZTpcIiArIHRoaXMuZ2FtZSlcblx0XHQvLyB3ZSB1c2UgYmluZCgpIHRvIGxpbmsgdGhlIGZ1bmN0aW9uIGJlbG93IHRvIFN0YXJ0U2NyZWVuIChvdGhlcndpc2UsIGl0IHRoaW5rcyBpdCBpcyBpbnNpZGUgd2luZG93KVxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmQtc2NyZWVuLWluc3RydWN0aW9ucy1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFxuXHRcdFx0ZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0Ly9hbGVydChcImluIGhhbmRsZXIsIGdhbWU6XCIgKyB0aGlzLmdhbWUpXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy5nYW1lLmxvYWRHYW1lKCk7XG5cblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cbiB9IiwiLyoqIFxuICogR2FtZS5qc1xuICogVGhlIGVudGlyZSBHYW1lIG9iamVjdFxuICogQGluaGVyaXRzIEdhbWVQaWVjZVxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuLy9TY3JlZW4gaW5oZXJpdGFuY2VcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuaW1wb3J0IFN0YXJ0U2NyZWVuIGZyb20gJy4vU3RhcnRTY3JlZW4uanMnO1xuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi9HYW1lU2NyZWVuLmpzJztcbmltcG9ydCBFbmRTY3JlZW4gZnJvbSAnLi9FbmRTY3JlZW4uanMnO1xuXG4vL0luZm8gaW5oZXJpdGFuY2VcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbmltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbmltcG9ydCBJZGVudGl0eSBmcm9tICcuL0lkZW50aXR5LmpzJztcbmltcG9ydCBJbnN0cnVjdGlvbnMgZnJvbSAnLi9JbnN0cnVjdGlvbnMuanMnO1xuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4vRHluYW1pY1RleHQuanMnO1xuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUuanMnO1xuXG4vL0NoYXJhY3RlciBpbmhlcml0YW5jZVxuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5pbXBvcnQgVHJ1bXAgZnJvbSAnLi9UcnVtcC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcbmltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuaW1wb3J0IExpb24gZnJvbSAnLi9MaW9uLmpzJztcbmltcG9ydCBUaWdlciBmcm9tICcuL1RpZ2VyLmpzJztcbmltcG9ydCBCZWFyIGZyb20gJy4vQmVhci5qcyc7XG5pbXBvcnQgR29yaWxsYSBmcm9tICcuL0dvcmlsbGEuanMnO1xuaW1wb3J0IEhlYWx0aCBmcm9tICcuL0hlYWx0aC5qcyc7XG5cbi8vQXJlYSBpbmhlcml0YW5jZS5cbmltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5pbXBvcnQgQ2FnZSBmcm9tICcuL0NhZ2UuanMnO1xuaW1wb3J0IEFuaW1hbEFyZWEgZnJvbSAnLi9BbmltYWxBcmVhLmpzJztcbmltcG9ydCBQbGF5ZXJBcmVhIGZyb20gJy4vUGxheWVyQXJlYS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBHYW1lUGllY2Uge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblxuXHRcdHN1cGVyKGNvbmZpZyk7XG5cblx0XHQvL2dhbWUgY29weXJpZ2h0XG5cdFx0dGhpcy53YXJuaW5nID0gJ1RoaXMgZ2FtZSBiZWxvbmdzIHRvIHVzLCBhbmQgbm9ib2R5IGVsc2UuJztcblxuXHRcdC8vZ2FtZSByZXZlcnRzIHRvIFN0YXJ0U2NyZWVuIGlmIHVucGxheWVkXG5cdFx0dGhpcy5USU1FT1VUID0gNTU1NTtcblxuXHRcdC8vIGRlZmluZSBJZCBsaW5rIHRvIERPTVxuXHRcdHRoaXMuU1RBUlRfU0NSRUVOX0lEID0gJ3N0YXJ0LXNjcmVlbic7XG5cdFx0dGhpcy5HQU1FX1NDUkVFTl9JRCA9ICdnYW1lLXNjcmVlbic7XG5cdFx0dGhpcy5FTkRfU0NSRUVOX0lEID0gJ2VuZC1zY3JlZW4nO1xuXG5cdFx0Ly8gbW9kZWwgc3RvcmFnZSwgc2NyZWVuc1xuXHRcdHRoaXMuc2NyZWVucyA9IFtdO1xuXG5cdFx0Ly8gbW9kZWwgc3RvcmFnZSwgZHluYW1pYyBjaGFyYWN0ZXJzXG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycyA9IFtdO1xuXG5cdFx0Ly8gaW5pdGlhbGl6ZSBnYW1lLCBsb2FkIHN0YXJ0IHNjcmVlblxuXHRcdHRoaXMuaW5pdCgpO1xuXG5cdH0gLy9lbmQgb2YgY29uc3RydWN0b3JcblxuXHRpbml0ICgpIHtcblxuXHRcdC8vIEdyYWIgdGhlIEhUTUwgc2NyZWVuIGVsZW1lbnRzIGFuZCBlbmNhcHN1bGF0ZSBpbiBhIFNjcmVlbiBjbGFzc1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLlNUQVJUX1NDUkVFTl9JRF0gPSBuZXcgU3RhcnRTY3JlZW4oe25hbWU6ICdTdGFydCBTY3JlZW4nLCBpZDogdGhpcy5TVEFSVF9TQ1JFRU5fSUQsIGdhbWU6IHRoaXN9KTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5HQU1FX1NDUkVFTl9JRF0gPSBuZXcgR2FtZVNjcmVlbih7bmFtZTogJ0dhbWUgU2NyZWVuJywgaWQ6IHRoaXMuR0FNRV9TQ1JFRU5fSUQsIGdhbWU6IHRoaXN9KTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5FTkRfU0NSRUVOX0lEXSA9IG5ldyBFbmRTY3JlZW4oe25hbWU6ICdFbmQgU2NyZWVuJywgaWQ6IHRoaXMuRU5EX1NDUkVFTl9JRCwgZ2FtZTogdGhpc30pO1xuXG5cdFx0Ly8gbG9hZCB0aGUgY2FudmFzXG5cdFx0dGhpcy5sb2FkQ2FudmFzKCk7XG5cblx0XHQvLyBtYWtlIHRoZSBzdGFydCBzY3JlZW4gdmlzaWJsZVxuXHRcdHRoaXMubG9hZEdhbWUoKTtcblx0fVxuXG5cdC8vIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgSFRNTDUgY2FudmFzIGNvbnRleHRcblx0bG9hZENhbnZhcyAoKSB7XG5cdFx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZS1zY3JlZW4tYXJlbmEgY2FudmFzJyk7XG5cdFx0dGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHR9XG5cblx0LyoqIFxuXHQgKiBMb2FkIENoYXJhY3RlcnNcblx0ICogZHluYW1pYyBDaGFyYWN0ZXJzIChlLmcuIHRob3NlIHRoYXQgYW5pbWF0ZSkgYXJlIGxvYWRlZCBieSBHYW1lLiBcblx0ICogT3RoZXIgc3RhdGljIHZpc3VhbCBvYmplY3RzIGFyZSBsb2FkZWQgYnkgU2NyZWVuIGNsYXNzZXMuXG5cdCAqL1xuXHRsb2FkUGxheWVycyAoKSB7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IFBsYXllcihcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdQbGF5ZXInLCBwb3NpdGlvbjoge3RvcDogNTEwLCBsZWZ0OiAyMDB9LFxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvcGxheWVycy9wbGF5ZXIucG5nJyxcblx0XHRcdFx0XHRnYW1lOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXHR9XG5cblx0bG9hZEFuaW1hbHMgKCkge1xuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcblx0XHRcdG5ldyBMaW9uKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ0xpb24nLCBcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMTUsIGxlZnQ6IDk0fSxcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvbGlvbi5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IFRpZ2VyKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ1RpZ2VyJywgXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDE1LCBsZWZ0OiAzMzN9LFxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvYW5pbWFscy90aWdlci5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IEJlYXIoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnQmVhcicsIHBvc2l0aW9uOiB7dG9wOiAxNSwgbGVmdDogNTcwfSxcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvYmVhci5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IEdvcmlsbGEoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnR29yaWxsYScsIHBvc2l0aW9uOiB7dG9wOiAxNSwgbGVmdDogODEyfSxcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvZ29yaWxsYS5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cblx0fVxuXG5cdGxvYWRUcnVtcHMgKCkge1xuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcblx0XHRcdG5ldyBUcnVtcChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdUcnVtcCcsIHBvc2l0aW9uOiB7dG9wOiA0NTAsIGxlZnQ6IDIwMH0sXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy90cnVtcHMvdHJ1bXAucG5nJyxcblx0XHRcdFx0XHRnYW1lOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXG5cdH1cblxuXHRsb2FkR2FtZSAoKSB7XG5cblx0XHQvL2xvYWQgSW5mbyBhc3NldHNcblxuXHRcdGNvbnNvbGUubG9nKCdsb2FkaW5nIHNwbGFzaCBzY3JlZW4nKTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5FTkRfU0NSRUVOX0lEXS5oaWRlU2NyZWVuKClcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5TVEFSVF9TQ1JFRU5fSURdLnNob3dTY3JlZW4oKTtcblx0fVxuXG5cdHN0YXJ0R2FtZSAoKSB7XG5cblx0XHQvL2xvYWQgQ2hhcmFjdGVyc1xuXHRcdHRoaXMubG9hZEFuaW1hbHMoKTtcblx0XHR0aGlzLmxvYWRQbGF5ZXJzKCk7XG5cdFx0dGhpcy5sb2FkVHJ1bXBzKCk7XG5cblx0XHQvL21ha2UgR2FtZVNjcmVlbiB2aXNpYmxlXG5cblx0XHQvLyBpbml0aWFsaXplIGVsYXBzZWQgdGltZVxuXHRcdHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcblxuXHRcdC8vIHNob3cgR2FtZVNjcmVlbiwgaGlkZSBvdGhlcnNcblx0XHRjb25zb2xlLmxvZygnc3RhcnRpbmcgZ2FtZScpO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLlNUQVJUX1NDUkVFTl9JRF0uaGlkZVNjcmVlbigpO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkVORF9TQ1JFRU5fSURdLmhpZGVTY3JlZW4oKTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5HQU1FX1NDUkVFTl9JRF0uc2hvd1NjcmVlbigpO1xuXHRcdHRoaXMuZ2FtZUxvb3AoKTtcblx0fVxuXG5cdGVuZEdhbWUgKCkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2VuZGluZyBnYW1lJyk7XG5cblx0XHQvLyByZXNldCB0aW1lclxuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcblxuXHRcdC8vIHR1cm4gb2ZmIGFuaW1hdGlvblxuXHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2xvYmFsSWQpO1xuXHRcdHRoaXMuZ2xvYmFsSWQgPSBudWxsO1xuXG5cdFx0Ly8gZ28gdG8gZW5kIHNjcmVlblxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkdBTUVfU0NSRUVOX0lEXS5oaWRlU2NyZWVuKCk7XG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuRU5EX1NDUkVFTl9JRF0uc2hvd1NjcmVlbigpO1xuXHR9XG5cblx0ZWxhcHNlZCAoKSB7XG5cblx0XHQvLyByZWNvcmQgdGltZSB3ZSBoYXZlIGJlZW4gaW4gZ2FtZUxvb3Bcblx0XHR0aGlzLmVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG5cdFx0Ly8gdGltZSBkaWZmZXJlbmNlIGluIG1zXG5cblx0XHR2YXIgdGltZURpZmYgPSAodGhpcy5lbmRUaW1lIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMDtcblxuXHRcdC8vIGdldCBzZWNvbmRzIChPcmlnaW5hbCBoYWQgJ3JvdW5kJyB3aGljaCBpbmNvcnJlY3RseSBjb3VudHMgMDoyOCwgMDoyOSwgMTozMCAuLi4gMTo1OSwgMTowKVxuXHRcdHJldHVybiBNYXRoLnJvdW5kKHRpbWVEaWZmICUgNjApO1xuXHR9XG5cblx0Y2hlY2tJZkNvbXBsZXRlICgpIHtcblxuXHRcdC8vIGdhbWUgbG9naWMgdG8gc2VlIGlmIHRoZSBnYW1lIHNob3VsZCByZXNldFxuXHRcdC8vLy8vLy8vLy8vLy9jb25zb2xlLmxvZygnRUxBUFNFRDonICsgdGhpcy5lbGFwc2VkKCkpO1xuXG5cdFx0aWYgKHRoaXMuZWxhcHNlZCgpID4gdGhpcy5USU1FT1VUKSB7XG5cdFx0XHQvLyBpZiBpZGxlIHRvbyBsb25nLCByZXNldCBnYW1lIHRvIHN0YXJ0XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR1cGRhdGUgKCkge1xuXG5cdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuZGlzcGxheUNoYXJhY3RlcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblxuXHRcdFx0dmFyIGNoYXJhY3RlciA9IHRoaXMuZGlzcGxheUNoYXJhY3RlcnNbaV07XG5cblx0XHRcdHN3aXRjaCAoY2hhcmFjdGVyLmdldENsYXNzKCkpIHtcblx0XHRcdFx0Y2FzZSAnUGxheWVyJzpcblx0XHRcdFx0Y2FzZSAnVHJ1bXAnOlxuXHRcdFx0XHRjYXNlICdMaW9uJzpcblx0XHRcdFx0Y2FzZSAnVGlnZXInOlxuXHRcdFx0XHRjYXNlICdCZWFyJzpcblx0XHRcdFx0Y2FzZSAnR29yaWxsYSc6XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNoYXJhY3Rlci51cGRhdGUoKTtcblx0XHR9XG5cdH1cblxuXHRkcmF3ICgpIHtcblxuIFx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcblx0XHR0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuIFx0XHQvLyBFTkQgQURERUQgV0VFSyAxMTw8PDw8PDw8PDw8PDxcblx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVyc1tpXS5kcmF3KHRoaXMuY29udGV4dCk7XG5cdFx0fVxuXHR9XG5cblx0Z2FtZUxvb3AgKCkge1xuXHRcdFxuXHRcdGlmICh0aGlzLmNoZWNrSWZDb21wbGV0ZSgpKSB7XG5cdFx0XHR0aGlzLmVuZEdhbWUoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0XHR0aGlzLmRyYXcoKTtcblx0XHRcblx0XHQvL2NvbnNvbGUubG9nKCdsb29waW5nLi4uJylcblx0XHR0aGlzLmdsb2JhbElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3AuYmluZCh0aGlzKSk7XG5cdH1cblxufSIsIi8qKiBcbiAqIEdhbWVQaWVjZS5qc1xuICogQmFzaWMgR2FtZSBvYmplY3RcbiAqXG4gKiBUbyBtYWtlIHRoaXMgd29yaywgeW91IG11c3QgYmUgcnVubmluZyB0aGUgQmFiZWwgdHJhbnNwaWxlciwgXG4gKiBhbmQgd2F0Y2hpbmcgZm9yIGNoYW5nZXMgaW4gdGhpcyBmaWxlIHdpdGggYnJvd3NlcmlmeS4gVHdvIFxuICogVGVybWluYWwgd2luZG93cyBuZWVkIHRvIGJlIG9wZW46XG4gKiAxLiBvbmUgd2luZG93IHdoZXJlIHlvdSB0eXBlZCB0aGUgY29tbWFuZCBcImdydW50XCJcbiAqIDIuIG9uZSB3aW5kb3cgd2hlcmUgeW91IHR5cGVkIHRoZSBjb21tYW5kIFwibnBtIHN0YXJ0XCJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBpZWNlIHtcblxuICAgIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICAgICAgLy9UT0RPOiB1c2Ugc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgICAgIHRoaXMudXVpZCA9IHRoaXMuc2V0SWQoKTtcbiAgICAgICAgdGhpcy5yZWFkeSA9IHRydWU7IC8vIGNoYW5nZSB0byBmYWxzZSBmb3IgZGVmZXJyZWQgbG9hZHNcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogU2V0IGEgcG9zaXRpb24gZm9yIHRoZSBvYmplY3QsIGFsc28gdGhlIHBvc2l0aW9uIG9mIHRoZSBcbiAgICAgKiBET00gcmVwcmVzZW50YXRpb24gb2YgdGhlIG9iamVjdFxuICAgICAqL1xuICAgIHNldERPTVBvc2l0aW9uIChwb3NpdGlvbikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIGlmICh0aGlzLmRvbSkge1xuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUudG9wID0gcG9zaXRpb24udG9wICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuZG9tLnN0eWxlLmxlZnQgPSBwb3NpdGlvbi5sZWZ0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBTZXQgdGhlIG9iamVjdCBzaXplLCBhbHNvIGl0cyBET00gc2l6ZVxuICAgICAqL1xuICAgIHNldERPTVNpemUgKHNpemUpIHtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgaWYgKHRoaXMuZG9tKSB7XG4gICAgICAgICAgICB0aGlzLmRvbS5zdHlsZS53aWR0aCA9IHNpemUud2lkdGggKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQgKyAncHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEdlbmVyYXRlIGEgdW5pcXVlIElEIGZvciBldmVyeSBnYW1lIG9iamVjdC5cbiAgICAgKiBAbGluayBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNTAzNC9jcmVhdGUtZ3VpZC11dWlkLWluLWphdmFzY3JpcHRcbiAgICAgKi9cbiAgICBzZXRJZCAoKSB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy91c2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSoxNiklMTYgfCAwO1xuICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZC8xNik7XG4gICAgICAgICAgICByZXR1cm4gKGM9PSd4JyA/IHIgOiAociYweDN8MHg4KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIFJldHVybiB0aGUgZ2l2ZW4gbmFtZSBvZiB0aGlzIG9iamVjdFxuICAgICAqL1xuICAgIGdldE5hbWUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiByZXR1cm4gdGhlIGNsYXNzIG9mIHRoZSBvYmplY3RcbiAgICAgKi9cbiAgICBnZXRDbGFzcyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIFJldHVybiB0aGUgdW5pcXVlIGlkIG9mIHRoaXMgb2JqZWN0LlxuICAgICAqL1xuICAgIGdldElkICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXVpZDtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogR2V0IHRoZSBlbmNsb3NpbmcgYm94IG91dHNpZGUgdGhlIG9iamVjdCBmb3IgZXh0ZXJuYWwgY29sbGlzaW9uc1xuICAgICAqL1xuICAgIGdldENvbGxpc2lvblJlY3QgKCkge1xuXG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEdldCB0aGUgaW50ZXJuYWwgYm94IHdoZW4gdGhpcyBvYmplY3QgYWN0cyBhcyBhIGNvbnRhaW5lciBmb3IgYW5vdGhlclxuICAgICAqL1xuICAgIGdldEJvdW5kc1JlY3QgKCkge1xuXG4gICAgfVxuXHRcblx0LyoqIFxuXHQgKiBHZW5lcmljICdyZWFkeScgZnVuY3Rpb24gKGUuZy4gZm9yIGRlbGF5ZWQgYXNzZXQgbG9hZHMpXG5cdCAqL1xuXHRzZXRSZWFkeSAodmFsKSB7XG5cdFx0dGhpcy5yZWFkeSA9IHZhbDtcblx0fVxuXG4gICAgLyoqIFxuICAgICAqIEdlbmVyaWMgdXBkYXRlIChvdmVycmlkZSlcbiAgICAgKi9cbiAgICB1cGRhdGUgKCkge1xuXG4gICAgfVxuXG4gICAgIC8qKiBcbiAgICAgICogZ2VuZXJpYyBkcmF3IChvdmVycmlkZSlcbiAgICAgICovXG4gICAgZHJhdyAoKSB7XG5cbiAgICB9XG59XG5cblxuIiwiLyoqIFxuICogR2FtZVNjcmVlbi5qc1xuICogTWFpbiBnYW1lIHNjcmVlbiBvYmplY3RcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIFNjcmVlblxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuIGltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4vQW5pbWFsQXJlYS5qcyc7XG4gaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi9QbGF5ZXJBcmVhLmpzJztcbiBpbXBvcnQgQ2FnZSBmcm9tICcuL0NhZ2UuanMnO1xuXG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuXG4gXHRcdHRoaXMuY2FnZXMgPSBbXTtcbiBcdFx0dGhpcy5hbmltYWxBcmVhcyA9IFtdO1xuIFx0XHR0aGlzLnBsYXllckFyZWFzID0gW107XG5cbiBcdFx0Ly9HYW1lU2NyZWVuIHNob3VsZCBoaWRlIGl0cyBsb2NhbCBoZWFkZXIgYW5kIGZvb3RlclxuIFx0XHR0aGlzLmhpZGVIZWFkZXIoKTtcbiBcdFx0dGhpcy5oaWRlRm9vdGVyKCk7XG5cbiBcdFx0Ly8gbG9hZCB0aGUgYmFja2dyb3VuZCBpbWFnZVxuIFx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kKCdpbWcvc2NyZWVucy9nYW1lLXNjcmVlbi5wbmcnKTtcblxuIFx0XHQvLyBnZXQgdGhlIHNlY3Rpb24gdGhhdCBoYXMgdGhlIGNhbnZhcyBmb3Igb3ZlcmxheVxuIFx0XHR2YXIgYXJlbmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1zY3JlZW4tYXJlbmEnKTtcblxuIFx0XHQvLyBsb2FkIHN1Yi1vYmplY3RzIGludG8gdGhlIEFyZW5hXG4gXHRcdHRoaXMuY2FnZXMgICA9IHRoaXMubG9hZENhZ2VzKGFyZW5hLCAnaW1nL2FyZWFzL2NhZ2UucG5nJyk7XG4gXHRcdHRoaXMuYW5pbWFsQXJlYSA9IHRoaXMubG9hZEFuaW1hbEFyZWEoKTtcbiBcdFx0dGhpcy5wbGF5ZXJBcmVhID0gdGhpcy5sb2FkUGxheWVyQXJlYSgpO1xuXG4gXHR9XG5cbiBcdGxvYWRDYWdlcyAoY29udGFpbmVyLCBpbWdQYXRoKSB7XG4gXHRcdC8vIGxvYWQgNCBDYWdlc1xuIFx0XHR0aGlzLmNhZ2VzLnB1c2goXG4gXHRcdFx0bmV3IENhZ2UoXG4gXHRcdFx0XHR7XG4gXHRcdFx0XHRcdG5hbWU6ICdsaW9uLWNhZ2UnLCBcbiBcdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDcwfSwgXG4gXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSwgXG4gXHRcdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcbiBcdFx0XHRcdFx0cGF0aDogaW1nUGF0aFxuIFx0XHRcdFx0fVxuIFx0XHRcdClcbiBcdFx0KTtcblx0XHR0aGlzLmNhZ2VzLnB1c2goXG5cdFx0XHRuZXcgQ2FnZShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICd0aWdlci1jYWdlJywgXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDMxMH0sIFxuXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSwgXG5cdFx0XHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsIFxuXHRcdFx0XHRcdHBhdGg6IGltZ1BhdGhcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5jYWdlcy5wdXNoKFxuXHRcdFx0bmV3IENhZ2UoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnYmVhci1jYWdlJywgXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDU1MH0sIFxuXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSxcblx0XHRcdFx0XHRjb250YWluZXI6IGNvbnRhaW5lciwgXG5cdFx0XHRcdFx0cGF0aDogaW1nUGF0aFxuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcblx0XHR0aGlzLmNhZ2VzLnB1c2goXG5cdFx0XHRuZXcgQ2FnZShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdnb3JpbGxhLWNhZ2UnLCBcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMCwgbGVmdDogNzkwfSwgXG5cdFx0XHRcdFx0c2l6ZToge3dpZHRoOiAxMDAsIGhlaWdodDoxMDB9LFxuXHRcdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcblx0XHRcdFx0XHRwYXRoOiBpbWdQYXRoXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuIFx0fVxuXG4gXHRsb2FkQW5pbWFsQXJlYSAoKSB7XG4gXHRcdC8vIGxvYWQgQW5pbWFsIG1vdmVtZW50IGFyZWFcbiBcdFx0dGhpcy5hbmltYWxBcmVhcy5wdXNoKFxuIFx0XHRcdG5ldyBBbmltYWxBcmVhKFxuIFx0XHRcdFx0e1xuIFx0XHRcdFx0XHRuYW1lOiAnWm9vJywgXG4gXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAxMDQsIGxlZnQ6IDZ9LCBcbiBcdFx0XHRcdFx0c2l6ZToge3dpZHRoOiA5NzAsIGhlaWdodDogNDEwfSxcbiBcdFx0XHRcdFx0Y29udGFpbmVyOiB0aGlzLmRvbSwgXG4gXHRcdFx0XHRcdHBhdGg6IG51bGxcbiBcdFx0XHRcdH1cbiBcdFx0XHQpXG4gXHRcdCk7XG4gXHR9XG5cbiBcdGxvYWRQbGF5ZXJBcmVhICgpIHtcbiBcdFx0Ly8gbG9hZCB0aGUgUGxheWVyXG4gXHRcdHRoaXMucGxheWVyQXJlYXMucHVzaChcbiBcdFx0XHRuZXcgUGxheWVyQXJlYShcbiBcdFx0XHRcdHtcbiBcdFx0XHRcdFx0bmFtZTogJ1BsYXllciBBcmVhJywgXG4gXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiA1MTQsIGxlZnQ6IDZ9LCBcbiBcdFx0XHRcdFx0c2l6ZToge3dpZHRoOiA5NzAsIGhlaWdodDogMTAwfSxcbiBcdFx0XHRcdFx0Y29udGFpbmVyOiB0aGlzLmRvbSwgXG4gXHRcdFx0XHRcdHBhdGg6IG51bGxcbiBcdFx0XHRcdH1cbiBcdFx0XHQpXG4gXHRcdCk7XG4gXHR9XG5cbiB9XG5cbiIsIi8qKiBcbiAqIEdvcmlsbGEuanNcbiAqIEEgR29yaWxsYSwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvcmlsbGEgZXh0ZW5kcyBBbmltYWwge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuIFx0fVxuIH0iLCIvKiogXG4gKiBIZWFsdGguanNcbiAqIFRoZSBjcml0dGVycyB0aGF0IFRydW1wIHRyaWVzIHRvIHN0b3AgZnJvbSBnZXR0aW5nIHRoZSBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhbHRoIGV4dGVuZHMgQ2hhcmFjdGVyIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcbiBcdH1cblxuIH0iLCIvKiogXG4gKiBJZGVudGl0eS5qc1xuICogR2FtZSBMb2dvcywgTG9nb1R5cGVzLCBCcmFuZCBOYW1lXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElkZW50aXR5IGV4dGVuZHMgU3RhdGljSW1hZ2Uge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXG5cdFx0dGhpcy5zZXRTb3VyY2UoY29uZmlnLnNvdXJjZSk7XG5cdFx0dGhpcy5zZXRBdXRob3IoY29uZmlnLmF1dGhvcik7XG5cdFx0dGhpcy5sb2FkSW1hZ2VUb0RPTShjb25maWcuZG9tSWQsIGNvbmZpZy5wYXRoKTtcblxuXHRcdC8vSGlkZSBhbnkgPGgyPiB0ZXh0IGVxdWl2YWxlbnQgb2YgaWRlbnRpdHkgaW4gdGhpcyBDU1MgYm94XG5cdFx0dmFyIHRleHRJZGVudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgY29uZmlnLmRvbUlkICsgJyBoMicpO1xuXHRcdHRleHRJZGVudGl0eS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR9XG5cbn1cbiIsIi8qKiBcbiAqIFN0YXRpY0ltYWdlLmpzXG4gKiBJbWFnZS1zdHlsZSBJbmZvcm1hdGlvbiB0aGF0IGNhbm5vdCBiZSBjaGFuZ2VkIG9uY2UgdGhlIGdhbWUgaXMgbG9hZGVkXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIEluZm8ge1xuXG5cdC8vIHNhdmUgc2NvcGVcblx0Ly8gVE9ETzogcmVmYWN0b3Igd2l0aCBhcnJvdyBmdW5jdGlvblxuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXHRcdHRoaXMucmVhZHkgPSBmYWxzZTsgLy9vdmVyLXJpZGUgR2FtZVBpZWNlIGFuZCBpbmZvIHdpdGggZGVmZXJyYWxzXG5cdFx0dGhpcy5pbWFnZSA9IG51bGw7XG5cdFx0dGhpcy5wYXRoID0gY29uZmlnLnBhdGg7XG5cdFx0dGhpcy5hdXRob3IgPSBjb25maWcuYXV0aG9yO1xuXHRcdHRoaXMuc291cmNlID0gY29uZmlnLnNvdXJjZTtcblx0fVxuXG5cdC8vIGxvYWQgYW4gaW1hZ2Vcblx0bG9hZCAocGF0aCwgY2FsbGJhY2spIHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5zZXRSZWFkeShmYWxzZSk7XG5cdFx0Y29uc29sZS5sb2coJ2VudGVyaW5nIGxvYWQgaW5JbWFnZScpO1xuXHRcdHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRpbWcuc3JjID0gcGF0aDtcblx0XHRpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc29sZS5sb2codGhhdC5uYW1lICsgJyBpbWFnZSBsb2FkZWQgZnJvbTonICsgcGF0aCArICcgdzonICsgaW1nLndpZHRoICsgJyBoOicgKyBpbWcuaGVpZ2h0KVxuXHRcdFx0dGhhdC5zZXRSZWFkeSh0cnVlKTtcblx0XHRcdHRoYXQuZGF0YSA9IGltZztcblx0XHRcdFxuXHRcdFx0aWYoY2FsbGJhY2spIHtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2Vycm9yIGxvYWRpbmcgaW1nIGZyb206JyArIHBhdGgpO1xuXHRcdH1cblx0fVxuXG5cdC8vIGxvYWQgaW1hZ2UsIGFwcGVuZCB0byBleGlzdGluZyBET00gZWxlbWVudFxuXHQvLyBOT1RFOiB0aGlzIGlzIG92ZXItd3JpdHRlbiBpbiBDaGFyYWN0ZXIuanMsIHdoaWNoIGxvYWRzIGltYWdlcyBpbnRvIENhbnZhc1xuXHRsb2FkSW1hZ2VUb0RPTSAoZG9tSWQsIHBhdGgsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdHRoaXMubG9hZChwYXRoLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZm9yZWdyb3VuZCBpbWFnZSAnICsgcGF0aCArICcgbG9hZGVkJylcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvbUlkKS5hcHBlbmRDaGlsZCh0aGF0LmRhdGEpO1xuXHRcdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0fVxuXG5cdC8vIGxvYWQgaW1hZ2UgYXMgYSBDU1MgYmFja2dyb3VuZCBpbWFnZSBpbnRvIGV4aXN0aW5nIERPTSBlbGVtZW50LiBcblx0Ly8gTk9URTogbm8gbG9jYWwgcmVmZXJlbmNlIHRvIGltYWdlIGluIHRoaXMgY2FzZVxuXHRsb2FkQmFja2dyb3VuZEltYWdlIChjb250YWluZXIsIHBhdGgsIGNhbGxiYWNrKSB7XG5cdFx0Y29uc29sZS5sb2coJ2xvYWRpbmcgYmFja2dyb3VuZCBpbWFnZTonICsgcGF0aClcblx0XHRjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlPSd1cmwoJyArIHBhdGggKyAnKSc7XG5cdFx0dGhpcy5zZXRSZWFkeSh0cnVlKTtcblx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gRHJhdyB0aGUgaW1hZ2UgdG8gYSBzdXBwbGllZCBjYW52YXMgY29udGV4dFxuXHRkcmF3VG9DYW52YXMgKGNvbnRleHQsIHBvc2l0aW9uLCBzaXplKSB7XG5cdFx0Y29udGV4dC5kcmF3SW1hZ2UoaW1nLCBwb3NpdGlvbi50b3AsIHBvc2l0aW9uLmxlZnQsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcblx0fVxuXG5cdC8vIERyYXcgdG8gdGhlIERPTS4gQXNzdW1lIHRoZSBJbWFnZSB3YXMgYWxyZWFkeSBhdHRhY2hlZCB0byB0aGUgRE9NXG5cdGRyYXdUb0RPTSAocG9zaXRpb24sIHNpemUpIHtcblx0XHR0aGlzLmltYWdlLnN0eWxlLnRvcCA9IHBvc2l0aW9uLnRvcDtcblx0XHR0aGlzLmltYWdlLnN0eWxlLmxlZnQgPSBwb3NpdGlvbi5sZWZ0O1xuXHRcdHRoaXMuaW1hZ2Uuc3R5bGUud2lkdGggPSBzaXplLndpZHRoO1xuXHRcdHRoaXMuaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XG5cdH1cblxufVxuIiwiLyoqIFxuICogSW5mby5qc1xuICogR2VuZXJpYyBpbmZvcm1haXRvbiBvYmplY3RcbiAqIEBpbmhlcml0cyBHYW1lUGllY2VcbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm8gZXh0ZW5kcyBHYW1lUGllY2Uge1xuXG5cdGNvbnN0cnVjdG9yKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cdH1cblxuXHRzZXRBdXRob3IgKGF1dGhvcikge1xuXHRcdHRoaXMuYXV0aG9yID0gYXV0aG9yO1xuXHR9XG5cblx0c2V0U291cmNlIChzb3VyY2UpIHtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG59IiwiLyoqIFxuICogSW5zdHJ1Y3Rpb25zLmpzXG4gKiBUZXh0IHdoaWNoIHRlbGxzIHRoZSBQbGF5ZXIgaG93IHRvIHBsYXkgdGhlIGdhbWUuXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG4gaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdHJ1Y3Rpb25zIGV4dGVuZHMgU3RhdGljVGV4dCB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cdH1cbn1cbiIsIi8qKiBcbiAqIExpb24uanNcbiAqIEEgTGlvbiwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExpb24gZXh0ZW5kcyBBbmltYWwge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuIFx0fVxuIH0iLCIvKiogXG4gKiBAY2xhc3MgTW92ZXJcbiAqIEBkZXNjcmlwdGlvbiB1cGRhdGUgcG9zaXRpb24gb2Ygb2JqZWN0IGJlaW5nIGFuaW1hdGVkIGJ5IEdhbWUuXG4gKi9cblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmVyIHtcblxuIFx0Y29uc3RydWN0b3IgKGdhbWVPYmosIHByZWZTcGVlZCwgIGRpcmVjdGlvbikge1xuIFx0XHR0aGlzLm5ld1RvcCA9IDEsIHRoaXMubmV3TGVmdCA9IDEsIHRoaXMubmV3Qm90dG9tID0gMSwgdGhpcy5uZXdSaWdodCA9IDE7XG4gXHRcdHRoaXMub2JqID0gZ2FtZU9iajtcbiBcdFx0dGhpcy5zcGVlZCA9IHByZWZTcGVlZCAqIHRoaXMudGltZVN0YW1wUmFuZG9tKCk7XG4gXHRcdHRoaXMuZGVsYXkgPSB0aGlzLnRpbWVTdGFtcFJhbmRvbSgpICogMzAwO1xuIFx0XHR0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiBcdFx0dGhpcy5jb3VudGVyID0gMDtcbiBcdFx0dGhpcy5kZWxheUNvdW50ZXIgPSAwO1xuIFx0XHR0aGlzLk1BWCA9IDMwO1xuIFx0XHR0aGlzLk1BWF9ERUxBWSA9IDMwMDtcblxuIFx0XHRjb25zb2xlLmxvZyhcIlRJTUVTVEFNUCBSQU5ET006XCIgKyB0aGlzLnRpbWVTdGFtcFJhbmRvbSgpKTtcbiBcdFx0Y29uc29sZS5sb2coXCJUSU1FU1RBTVAgREVMQVk6XCIgKyB0aGlzLmRlbGF5KVxuIFx0fVxuXG4gXHQvKiogXG4gXHQgKiBAbWV0aG9kIHNldE9yaWdpblxuIFx0ICogQGRlc2NyaXB0aW9uIHNldCB0aGUgc3RhcnRpbmcgcG9zaXRpb24gb2YgdGhlIG9iamVjdFxuIFx0ICogQHBhcmFtIEludGVnZXIgeCB0aGUgeCBjb29yZGluYXRlIG9mIHRoZSBvYmplY3RcbiBcdCAqIEBwYXJhbSBJbnRlZ2VyIHkgdGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgb2JqZWN0XG4gXHQgKi9cbiBcdHNldE9yaWdpbiAoeCwgeSkge1xuIFx0XHR0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ID0geDtcbiBcdFx0dGhpcy5vYmoucG9zaXRpb24udG9wID0geTtcbiBcdH1cblxuIFx0LyoqIFxuIFx0ICogQG1ldGhvZCBzbGlkZXJcbiBcdCAqIEBkZXNjcmlwdGlvbiBzbGV3IG9iamVjdCBob3Jpem9udGFsbHlcbiBcdCAqIEBwYXJhbSBkZWcgdGhlIGRlZ3JlZXMgdG8gcm90YXRlIHRoZSBvYmplY3RcbiBcdCAqL1xuIFx0c2xpZGVyIChkZWcpIHtcbiBcdFx0Y29uc29sZS5sb2coJ3NldHRpbmcgc2xpZGVyJylcbiBcdFx0dGhpcy5vYmoua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgXHRcdGNvbnNvbGUubG9nKGUua2V5Q29kZSk7XG4gICAgXHRcdHN3aXRjaChlLmtleUNvZGUpIHtcbiAgICBcdFx0XHRjYXNlIDM3OiAgLy9sZWZ0XG4gICAgXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IC09IDE7XG4gICAgXHRcdFx0XHRicmVhaztcbiAgICBcdFx0XHRjYXNlIDM4OiAgICAvL3VwXG4gICAgXHRcdFx0XHRicmVhaztcbiAgICBcdFx0XHRjYXNlIDM5OiAvL3JpZ2h0XG4gICAgXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi5yaWdodCArPSAxO1xuICAgIFx0XHRcdFx0YnJlYWs7XG4gICAgXHRcdFx0Y2FzZSA0MDogIC8vZG93blxuICAgIFx0XHRcdGRlZmF1bHQ6XG4gICAgXHRcdFx0XHRicmVhaztcbiAgICBcdFx0fVxuXG4gXHRcdH1cbiBcdH1cblxuIFx0LyoqIFxuIFx0ICogQG1ldGhvZCBraWNrZXIgXG4gXHQgKiBNb3ZlIG9iamVjdCBzbGlnaHRseSB1cCBmb3IgZHVyYXRpb24gb2Ygc3BhY2UgYmFyIGRvd25cbiBcdCAqL1xuIFx0a2lja2VyICgpIHtcblxuIFx0fVxuXG4gXHQvKiogXG4gXHQgKiBAbWV0aG9kIHBpbmdQb25nXG4gXHQgKiBAZGVzY3JpcHRpb24gbW92ZSBpbiBhIHBpbmctcG9uZyBzdHlsZVxuIFx0ICovXG4gXHRwaW5nUG9uZyAoKSB7XG4gXHRcdFxuIFx0fVxuXG4gXHR0aW1lU3RhbXBSYW5kb20gKCkge1xuIFx0XHR2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxuICAgICAgICB9XG5cdFx0dmFyIG51bSA9ICd4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSoxMCklMTAgfCAwO1xuICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZC8xMCk7XG4gICAgICAgICAgICByZXR1cm4gKGM9PSd4JyA/IHIgOiAociYweDN8MHg4KSkudG9TdHJpbmcoMTApO1xuICAgICAgICB9KTtcbiAgICAgIHJldHVybiBudW0gLyAxMDAwMDtcblxuIFx0fVxuXG4gXHQvKipcblx0ICogUmV0dXJucyBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gKGluY2x1c2l2ZSkgYW5kIG1heCAoZXhjbHVzaXZlKVxuXHQgKiBAbGluayBcblx0ICovXG5cdGdldFJhbmRvbShtaW4sIG1heCkge1xuICAgIFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG5cdH1cblxuXG4gXHQvKiogXG4gXHQgKiBAbWV0aG9kIHJhbmRvbVdhbGtcbiBcdCAqIEBkZXNjcmlwdGlvbiBnZW5lcmF0ZSByYW5kb20gd2Fsaywgd2l0aCBvbmUgcHJlZmVycmVkIGRpcmVjdGlvbiwgXG4gXHQgKiB1c2VkIGJ5IEFuaW1hbHNcbiBcdCAqL1xuIFx0cmFuZG9tV2FsayAoKSB7XG4gXHRcdHRoaXMuY291bnRlcisrO1xuIFx0XHR0aGlzLmRlbGF5Q291bnRlcisrO1xuIFx0XHRpZiAodGhpcy5kZWxheUNvdW50ZXIgPCB0aGlzLmRlbGF5KSB7XG4gXHRcdFx0Ly9jb25zb2xlLmxvZygnZGVsYXlDb3VudGVyOicgKyB0aGlzLmRlbGF5Q291bnRlciArICcgTUFYOicgKyB0aGlzLk1BWF9ERUxBWSk7XG4gXHRcdFx0cmV0dXJuO1xuIFx0XHR9XG4gXHRcdHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcbiBcdFx0XHRjYXNlICd0b3AnOlxuIFx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24udG9wIC09ICh0aGlzLnNwZWVkICsgKDAuMSAqIHRoaXMuZ2V0UmFuZG9tKDEsIHRoaXMuc3BlZWQpKSk7XG4gXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ICs9IDEwICogKHRoaXMuZ2V0UmFuZG9tKC10aGlzLnNwZWVkLCB0aGlzLnNwZWVkKSk7XG4gXHRcdFx0XHRicmVhaztcbiBcdFx0XHRjYXNlICdsZWZ0JzpcbiBcdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgLT0gKHRoaXMuc3BlZWQgKyAoMC4xICogdGhpcy5nZXRSYW5kb20oMSwgdGhpcy5zcGVlZCkpKTtcbiBcdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLnRvcCArPSAgMTAgKih0aGlzLmdldFJhbmRvbSgtdGhpcy5zcGVlZCwgdGhpcy5zcGVlZCkpO1xuIFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0Y2FzZSAnYm90dG9tJzpcbiAgXHRcdFx0XHRpZiAodGhpcy5jb3VudGVyID4gdGhpcy5NQVgpIHtcbiAgXHRcdFx0XHRcdHRoaXMuTUFYID0gcGFyc2VJbnQoNCwgMzApO1xuIFx0XHRcdFx0XHR0aGlzLm5ld0xlZnQgPSAodGhpcy5nZXRSYW5kb20oLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpKTtcbiBcdFx0XHRcdFx0dGhpcy5jb3VudGVyID0gMDtcbiBcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyID4gdGhpcy5NQVggLyAyKSB7XG4gXHRcdFx0XHRcdHRoaXMuc3BlZWQgKz0gdGhpcy50aW1lU3RhbXBSYW5kb20oKSAvIDUwO1xuIFx0XHRcdFx0fVxuXHRcdFx0IFx0dGhpcy5vYmoucG9zaXRpb24udG9wICs9IHRoaXMuc3BlZWQ7XG4gXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ICs9IHRoaXMubmV3TGVmdDtcbiBcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdGNhc2UgJ3JpZ2h0JzpcbiBcdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKz0gKHRoaXMuc3BlZWQgKyAoMC4xICogdGhpcy5nZXRSYW5kb20oMSwgdGhpcy5zcGVlZCkpKTtcbiBcdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLnRvcCArPSAxMCAqICh0aGlzLmdldFJhbmRvbSgtdGhpcy5zcGVlZCwgdGhpcy5zcGVlZCkpO1xuIFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ01vdmVyLnNldFByZWZEaXJlY3Rpb246IGludmFsaWQgZGlyZWN0aW9uOicgKyB0aGlzLmRpcmVjdGlvbik7XG4gXHRcdFx0XHRicmVhaztcbiBcdFx0fVxuXHRcdFxuICAgIH1cblxuXG4gfSIsIi8qKiBcbiAqIFBsYXllci5qc1xuICogVXNlci1jb250cm9sbGVkIENoYXJhY3RlclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcblxuIC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIGltcG9ydCBNb3ZlciBmcm9tICcuL01vdmVyLmpzJztcbiBpbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XG4gLy8gRU5EIEFEREVEIFdFRUsgMTE8PDw8PDw8PDw8PDw8XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuIFx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcbiBcdFx0dGhpcy5tb3ZlciA9IG5ldyBNb3Zlcih0aGlzLCAwLjIpO1xuIFx0XHR0aGlzLmNvbGxpZGVyID0gbmV3IENvbGxpZGVyKCk7XG4gXHRcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcblxuIFx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcbiBcdFx0dGhpcy5tb3Zlci5zbGlkZXIoKTtcbiAgXHRcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcdFx0XG4gXHR9XG5cbiAgXHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcbiBcdHVwZGF0ZSAoKSB7XG5cbiBcdH1cbiBcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcblxuXG4gfSIsIi8qKiBcbiAqIFBsYXllckFyZWEuanNcbiAqIFRoZSByZWdpb24gd2hlcmUgdGhlIFBsYXllciBjYW4gbW92ZS5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEFyZWFcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJBcmVhIGV4dGVuZHMgQXJlYSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTtcbiBcdH1cblxuIH0iLCIvKiogXG4gKiBTY29yZS5qc1xuICogRGlzcGxheSB1c2VyIHNjb3JlXG4gKiBAaW5oZXJpdHMgRHluYW1pY1RleHQsIFRleHQsIEluZm8sIEdhbWVQaWVjZVxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4vRHluYW1pY1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSBleHRlbmRzIER5bmFtaWNUZXh0IHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0fVxufSIsIi8qKiBcbiAqIFNjcmVlbi5qc1xuICogR2VuZXJpYyBTY3JlZW4gb2JqZWN0XG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLmpzXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IElkZW50aXR5IGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyZWVuIGV4dGVuZHMgR2FtZVBpZWNlIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpOyAvL2luaXQgJ3BhcmVudCcgR2FtZVBpZWNlXG5cbiBcdFx0Ly8gc2F2ZSBhIHJlZmVyZW5jZSB0byBvdXIgcGFyZW50IEdhbWUgb2JqZWN0XG4gXHRcdHRoaXMuZ2FtZSA9IGNvbmZpZy5nYW1lO1xuXG4gXHRcdC8vIFNjcmVlbnMgYXJlIGRlZmluZWQgaW4gSFRNTCwgc28gc2F2ZSBhIHJlZmVyZW5jZSB0byBvdXIgRE9NIGlkXG4gXHRcdHRoaXMuZG9tSWQgPSBjb25maWcuaWQ7XG5cbiBcdFx0Ly8gc2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgRE9NIGVsZW1lbnQgd2UncmUgY29ubmVjdGVkIHRvXG4gXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kb21JZCk7XG5cbiBcdFx0Ly8gaW5zZXJ0IHRoZSBjb3B5cmlnaHQgaW5mbyBmcm9tIHRoZSBtYWluIEdhbWUgb2JqZWN0XG4gXHRcdHRoaXMuYWRkV2FybmluZygpO1xuIFx0fVxuXG4gXHQvLyBsb2FkIGEgYmFja2dyb3VuZCBpbWFnZSBpbnRvIHRoZSBTY3JlZW5cbiBcdGxvYWRCYWNrZ3JvdW5kIChwYXRoLCBjYWxsYmFjaykge1xuIFx0XHRjb25zb2xlLmxvZyhcImxvYWRpbmc6XCIgKyB0aGlzLmRvbUlkKTtcbiBcdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2UgPSBuZXcgU3RhdGljSW1hZ2UoXG4gXHRcdFx0e1xuIFx0XHRcdFx0bmFtZTogdGhpcy5uYW1lICsgJy1pbWFnZScsXG4gXHRcdFx0XHRkb21JZDogdGhpcy5pZCArICctaW1hZ2UnLFxuIFx0XHRcdFx0cGF0aDogcGF0aCxcbiBcdFx0XHRcdGNhbGxiYWNrOiBjYWxsYmFja1xuIFx0XHRcdH1cbiBcdFx0KTtcbiBcdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2UubG9hZEJhY2tncm91bmRJbWFnZSh0aGlzLmRvbSwgcGF0aCwgY2FsbGJhY2spO1xuIFx0fVxuXG4gXHQvLyBzaG93IGFuZCBoaWRlIHJlZ2lvbnMgb2YgdGhlIFNjcmVlblxuIFx0c2hvd1NjcmVlbiAoKSB7XG4gXHRcdGNvbnNvbGUubG9nKFwic2hvd2luZzpcIiArIHRoaXMuZG9tSWQpO1xuIFx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuIFx0fVxuXG4gXHRoaWRlU2NyZWVuICgpIHtcbiBcdFx0Y29uc29sZS5sb2coXCJoaWRpbmc6XCIgKyB0aGlzLmRvbUlkKTtcbiBcdFx0dGhpcy5kb20uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuIFx0fVxuXG4gXHRzaG93SGVhZGVyICgpIHtcbiBcdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gXHR9XG5cbiBcdGhpZGVIZWFkZXIgKCkge1xuXHRcdHRoaXMuZG9tLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiBcdH1cblxuIFx0c2hvd0Zvb3RlciAoKSB7XG5cdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiBcdH1cblxuIFx0aGlkZUZvb3RlciAoKSB7XG5cdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuIFx0fVxuXG4gXHRhZGRXYXJuaW5nICgpIHtcbiBcdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLmlubmVySFRNTCA9IHRoaXMuZ2FtZS53YXJuaW5nO1xuIFx0fVxuXG4gfTsiLCIvKiogXG4gKiBTdGFydFNjcmVlbi5qc1xuICogT3BlbmluZyBzY3JlZW4gZm9yIGdhbWUuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBTY3JlZW5cbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcblxuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG5pbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9JZGVudGl0eS5qcyc7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL0JhY2tncm91bmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydFNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cblx0XHQvLyB0aGlzLmRvbSBkZWZpbmVkIGluIFNjcmVlblxuXG5cdFx0Ly8gTG9hZCBTdGFydFNjcmVlbiBzdWItb2JqZWN0c1xuXHRcdHRoaXMubG9hZEJhY2tncm91bmQoJ2ltZy9zY3JlZW5zL3N0YXJ0LXNjcmVlbi5wbmcnKTtcblxuXHRcdC8vIGxvYWQgaWRlbnRpdHkgaW1hZ2Vcblx0XHR0aGlzLmxvYWRJZGVudGl0eSgpO1xuXG5cdFx0Ly8gbG9hZCBpbnN0cnVjdGlvbnNcblx0XHR0aGlzLmxvYWRJbnN0cnVjdGlvbnMoKTtcblxuXHRcdC8vIE1ha2UgdGhlIHN0YXJ0IGJ1dHRvbiBvcGVuIHRoZSBtYWluIGdhbWUgc2NyZWVuXG5cdFx0dGhpcy5iaW5kU3RhcnQoKTtcblx0fVxuXG5cdGxvYWRJZGVudGl0eSAoKSB7XG5cdFx0dGhpcy5pZGVudGl0eSA9IG5ldyBJZGVudGl0eShcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ2lkZW50aXR5JywgXG5cdFx0XHRcdGRvbUlkOiAnc3RhcnQtc2NyZWVuLWlkZW50aXR5Jyxcblx0XHRcdFx0cGF0aDogJ2ltZy9pZGVudGl0eS9sb2dvLnBuZycsIFxuXHRcdFx0XHRhdXRob3I6ICdwZXRlIG1hcmtpZXdpY3onLCBcblx0XHRcdFx0c291cmNlOiAncGx5b2p1bXAnXG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdC8vIHNldCBwb3NpdGlvbiBvZiBJZGVudGl0eVxuXHRcdHRoaXMuaWRlbnRpdHkuc2V0RE9NUG9zaXRpb24gKFxuXHRcdFx0e1xuXHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdGxlZnQ6IDBcblx0XHRcdH1cblx0XHQpO1xuXG5cdH1cblxuXHRsb2FkSW5zdHJ1Y3Rpb25zICgpIHtcblxuXHRcdHRoaXMuaW5zdHJ1Y3Rpb25zID0gbmV3IFN0YXRpY1RleHQoXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdnYW1lIGluc3RydWN0aW9ucycsXG5cdFx0XHRcdGRvbUlkOiAnaW5zdHJ1Y3Rpb25zJyxcblx0XHRcdFx0dGV4dDogJ1BsYXkgdG8gd2luLiBUaGF0IGlzIGFsbCBUcnVtcCBjYXJlcyBhYm91dCwgYW5kIHNvIHNob3VsZCB5b3UuJ1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmluc3RydWN0aW9ucy5zZXRET01Qb3NpdGlvbihcblx0XHRcdHtcblx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0fVxuXHRcdCk7XG5cblx0fVxuXG5cdGJpbmRTdGFydCAoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJpbiBiaW5kU3RhcnQsIHRoaXMuZ2FtZTpcIiArIHRoaXMuZ2FtZSlcblx0XHQvLyB3ZSB1c2UgYmluZCgpIHRvIGxpbmsgdGhlIGZ1bmN0aW9uIGJlbG93IHRvIFN0YXJ0U2NyZWVuIChvdGhlcndpc2UsIGl0IHRoaW5rcyBpdCBpcyBpbnNpZGUgd2luZG93KVxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydC1zY3JlZW4tcGxheS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFxuXHRcdFx0ZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0Ly9hbGVydChcImluIGhhbmRsZXIsIGdhbWU6XCIgKyB0aGlzLmdhbWUpXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy5nYW1lLnN0YXJ0R2FtZSgpO1xuXG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG59IiwiLyoqIFxuICogU3RhdGljSW1hZ2UuanNcbiAqIEltYWdlLXN0eWxlIEluZm9ybWF0aW9uIHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgb25jZSB0aGUgZ2FtZSBpcyBsb2FkZWRcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aWNJbWFnZSBleHRlbmRzIEltYWdlIHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblxuXHRcdHRoaXMuc3RhdGljID0gdHJ1ZTtcblx0fVxuXG59XG4iLCIvKiogXG4gKiBTdGF0aWNUZXh0LmpzXG4gKiBUZXh0IHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgYWZ0ZXIgbG9hZGVkIGJ5IHRoZSBnYW1lXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpY1RleHQgZXh0ZW5kcyBUZXh0IHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblxuXHRcdHRoaXMuc3RhdGljID0gdHJ1ZTtcblxuXHR9XG5cbn1cbiIsIi8qKiBcbiAqIFRleHQuanNcbiAqIENyZWF0ZXMgYSB0ZXh0LXR5cGUgSW5mbyBvYmplY3RcbiAqIEBpbmhlcml0cyBJbmZvLCBHYW1lUGllY2VcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgSW5mbyB7XG5cbiBcdGNvbnN0cnVjdG9yKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuXG4gXHRcdC8vIHNldCB0aGUgdGV4dFxuIFx0XHR0aGlzLnNldFRleHQoY29uZmlnLnRleHQpO1xuXG4gXHRcdC8vIHNldCB0aGUgRE9NSWRcbiBcdFx0dGhpcy5hZGRUb0RPTShjb25maWcuZG9tSWQpO1xuIFx0fVxuXG4gXHRzZXRUZXh0ICh0eHQpIHtcbiBcdFx0dGhpcy50ZXh0ID0gdHh0O1xuIFx0fVxuXG4gXHRhZGRUb0RPTSAoZG9tSWQpIHtcblxuIFx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuIFx0XHR0aGlzLmRvbS5pZCA9IG5hbWUgKyAnLVRleHQnO1xuIFx0XHR0aGlzLmRvbS5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XG5cbiBcdFx0Ly8gY29udGFpbmVyXG4gXHRcdHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21JZCk7XG5cbiBcdFx0Ly8gYWRkIHRvIHRoZSBET01cbiBcdFx0Y29udGFpbmVyLmluc2VydEJlZm9yZSh0aGlzLmRvbSwgY29udGFpbmVyLmNoaWxkTm9kZXNbMF0pO1xuXG5cdH1cblxuIH0iLCIvKiogXG4gKiBUaWdlci5qc1xuICogQSBUaWdlciwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpZ2VyIGV4dGVuZHMgQW5pbWFsIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcbiBcdH1cbiB9IiwiLyoqIFxuICogVHJ1bXAuanNcbiAqIFRoZSBiYWxsLWxpa2UgQ2hhcmFjdGVyIHlvdSBraWNrIGludG8gQW5pbWFsc1xuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcblxuIC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIGltcG9ydCBNb3ZlciBmcm9tICcuL01vdmVyLmpzJztcbiBpbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XG4gLy8gRU5EIEFEREVEIFdFRUsgMTE8PDw8PDw8PDw8PDw8XG4gXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJ1bXAgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuXG4gXHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIFx0XHR0aGlzLm1vdmVyID0gbmV3IE1vdmVyKHRoaXMsIDAuMiwgJ3RvcCcpO1xuIFx0XHR0aGlzLmNvbGxpZGVyID0gbmV3IENvbGxpZGVyKCk7XG4gXHRcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcbiBcdH1cblxuIFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG4gXHR1cGRhdGUgKCkge1xuIFx0XHR0aGlzLm1vdmVyLnBpbmdQb25nKCk7XG4gXHR9XG4gXHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cbiB9IiwiLyoqIFxuICogQ3JlYXRlIHRoZSBnYW1lLiBJbXBvcnQgdGhlIHByaW1hcnkgY2xhc3NlcywgYW5kICdjb21wb3NpdGUnIFxuICogdGhlIG92ZXJhbGwgR2FtZSBvYmplY3Qgb3V0IG9mIGluc3RhbmNlcyBvZiB0aGUgY2xhc3Nlcy5cbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbi8vVGhlIGVudGlyZSBnYW1lXG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUuanMnO1xuXG4vL1NjcmVlbiBpbmhlcml0YW5jZVxuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSAnLi9TdGFydFNjcmVlbi5qcyc7XG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuL0dhbWVTY3JlZW4uanMnO1xuaW1wb3J0IEVuZFNjcmVlbiBmcm9tICcuL0VuZFNjcmVlbi5qcyc7XG5cbi8vSW5mbyBpbmhlcml0YW5jZVxuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xuaW1wb3J0IElkZW50aXR5IGZyb20gJy4vSWRlbnRpdHkuanMnO1xuaW1wb3J0IEluc3RydWN0aW9ucyBmcm9tICcuL0luc3RydWN0aW9ucy5qcyc7XG5pbXBvcnQgRHluYW1pY1RleHQgZnJvbSAnLi9EeW5hbWljVGV4dC5qcyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZS5qcyc7XG5cbi8vQ2hhcmFjdGVyIGluaGVyaXRhbmNlXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbmltcG9ydCBUcnVtcCBmcm9tICcuL1RydW1wLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIuanMnO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5pbXBvcnQgTGlvbiBmcm9tICcuL0xpb24uanMnO1xuaW1wb3J0IFRpZ2VyIGZyb20gJy4vVGlnZXIuanMnO1xuaW1wb3J0IEJlYXIgZnJvbSAnLi9CZWFyLmpzJztcbmltcG9ydCBHb3JpbGxhIGZyb20gJy4vR29yaWxsYS5qcyc7XG5pbXBvcnQgSGVhbHRoIGZyb20gJy4vSGVhbHRoLmpzJztcblxuLy9BcmVhIGluaGVyaXRhbmNlLlxuaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcbmltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XG5pbXBvcnQgQW5pbWFsQXJlYSBmcm9tICcuL0FuaW1hbEFyZWEuanMnO1xuaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi9QbGF5ZXJBcmVhLmpzJztcblxuLy9UZXN0IGZpbGUgKHZlcnkgc2ltcGxlIHRlc3RydW5uZXIpXG5pbXBvcnQgVGVzdHMgZnJvbSAnLi4vLi4vdGVzdHMvVGVzdHMuanMnO1xuXG4vKiogXG4gKiBTZXQgdXAgdGVzdHMuXG4gKi9cbnZhciBteVRlc3RzID0gbmV3IFRlc3RzKCk7XG5cbi8qKlxuICogU2V0IHVwIHRoZSBHYW1lXG4gKi9cbnZhciBteUdhbWUgPSBuZXcgR2FtZSh7bmFtZTogXCJab29LaWxsU29jY2VyXCJ9KTtcblxuLyoqIFxuICogRVhQT1JUIFRPIFdFQiBDT05TT0xFXG4gKiBUbyBtYWtlIHNvbWV0aGluZyB2aXNpYmxlIGluIFdlYiBjb25zb2xlIGZvciBkZWJ1Z2dpbnQsIGF0dGFjaCB0byB3aW5kb3cgb2JqZWN0XG4gKiBOT1RFOiBQcm9mZXNzaW9uYWwgY29kZSB1c2VzIHNwZWNpYWxpemVkIHRlc3RpbmcgbW9kdWxlcyBsaWtlIE1vY2hhLCBLYXJtYSwgYW5kIFxuICogc2ltaWxhciB0ZXN0aW5nIGxpYnJhcmllcy5cbiAqL1xuXG4vLyB3ZSBjYW4gcnVuIHRoaXMgdGVzdCBtYW51YWxseSB3aXRoIHRlc3RzLnJ1bigpO1xud2luZG93LnRlc3RzID0gbXlUZXN0cztcblxuLy8gbWFrZSB0aGUgZ2FtZSBvYmplY3QgdmlzaWJsZSBzbyB3ZSBjYW4gaW5zcGVjdCBpdC5cbndpbmRvdy5nYW1lID0gbXlHYW1lO1xuXG5jb25zb2xlLmxvZygnWk9PS0lMTFNPQ0NFUiBHYW1lIGluaXRpYWxpemVkLiBBY2Nlc3MgZ2FtZSB2aWEgXCJnYW1lXCIuIFVzZSBUZXN0cy5ydW4oKSB0byB0ZXN0LicpXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi4vbW9kdWxlcy9qcy9HYW1lUGllY2UuanMnO1xuXG4vL1RoZSBlbnRpcmUgZ2FtZVxuaW1wb3J0IEdhbWUgZnJvbSAnLi4vbW9kdWxlcy9qcy9HYW1lLmpzJztcblxuLy9TY3JlZW4gaW5oZXJpdGFuY2VcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi4vbW9kdWxlcy9qcy9TY3JlZW4uanMnO1xuaW1wb3J0IFN0YXJ0U2NyZWVuIGZyb20gJy4uL21vZHVsZXMvanMvU3RhcnRTY3JlZW4uanMnO1xuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi4vbW9kdWxlcy9qcy9HYW1lU2NyZWVuLmpzJztcbmltcG9ydCBFbmRTY3JlZW4gZnJvbSAnLi4vbW9kdWxlcy9qcy9FbmRTY3JlZW4uanMnO1xuXG4vL0luZm8gaW5oZXJpdGFuY2VcbmltcG9ydCBJbmZvIGZyb20gJy4uL21vZHVsZXMvanMvSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuLi9tb2R1bGVzL2pzL1RleHQuanMnO1xuaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi4vbW9kdWxlcy9qcy9TdGF0aWNUZXh0LmpzJztcbmltcG9ydCBJZGVudGl0eSBmcm9tICcuLi9tb2R1bGVzL2pzL0lkZW50aXR5LmpzJztcbmltcG9ydCBJbnN0cnVjdGlvbnMgZnJvbSAnLi4vbW9kdWxlcy9qcy9JbnN0cnVjdGlvbnMuanMnO1xuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4uL21vZHVsZXMvanMvRHluYW1pY1RleHQuanMnO1xuaW1wb3J0IFNjb3JlIGZyb20gJy4uL21vZHVsZXMvanMvU2NvcmUuanMnO1xuXG4vL0NoYXJhY3RlciBpbmhlcml0YW5jZVxuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuLi9tb2R1bGVzL2pzL0NoYXJhY3Rlci5qcyc7XG5pbXBvcnQgVHJ1bXAgZnJvbSAnLi4vbW9kdWxlcy9qcy9UcnVtcC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL21vZHVsZXMvanMvUGxheWVyLmpzJztcbmltcG9ydCBBbmltYWwgZnJvbSAnLi4vbW9kdWxlcy9qcy9BbmltYWwuanMnO1xuaW1wb3J0IExpb24gZnJvbSAnLi4vbW9kdWxlcy9qcy9MaW9uLmpzJztcbmltcG9ydCBUaWdlciBmcm9tICcuLi9tb2R1bGVzL2pzL1RpZ2VyLmpzJztcbmltcG9ydCBCZWFyIGZyb20gJy4uL21vZHVsZXMvanMvQmVhci5qcyc7XG5pbXBvcnQgR29yaWxsYSBmcm9tICcuLi9tb2R1bGVzL2pzL0dvcmlsbGEuanMnO1xuaW1wb3J0IEhlYWx0aCBmcm9tICcuLi9tb2R1bGVzL2pzL0hlYWx0aC5qcyc7XG5cbi8vQXJlYSBpbmhlcml0YW5jZS5cbmltcG9ydCBBcmVhIGZyb20gJy4uL21vZHVsZXMvanMvQXJlYS5qcyc7XG5pbXBvcnQgQ2FnZSBmcm9tICcuLi9tb2R1bGVzL2pzL0NhZ2UuanMnO1xuaW1wb3J0IEFuaW1hbEFyZWEgZnJvbSAnLi4vbW9kdWxlcy9qcy9BbmltYWxBcmVhLmpzJztcbmltcG9ydCBQbGF5ZXJBcmVhIGZyb20gJy4uL21vZHVsZXMvanMvUGxheWVyQXJlYS5qcyc7XG5cbi8qKiBcbiAqIFRFU1RCRUQgLSBUZXN0IGFsbCBvdXIgb2JqZWN0cy4gVGhpcyBpcyBhIHZlcnkgYmFzaWMgdGVzdGluZyBzeXN0ZW0uIFxuICogTk9URTogUHJvZmVzc2lvbmFsIGNvZGUgdXNlcyB0ZXN0aW5nIGxpYnJhcmllcyBsaWtlIEthcm1hIGFuZCBNb2NoYS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdHMge1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcblx0fVxuXG5cdC8vIEJlY2F1c2Ugd2UgbWFrZSB0aGVzZSBvYmplY3RzIHdpdGggJ3ZhcicgdGhleSBhcmUgc2NvcGVkIHRvIHRoZSBydW4oKSBmdW5jdGlvbi5cblx0cnVuICgpIHtcblxuXHRcdHZhciBjb25maWcgPSB7bmFtZTonRm9yZXN0IFRydW1wIG9yIERvbmFsZCBHdW1wIHJ1bHonfTtcblxuXHRcdC8vIE1ha2Ugc29tZSB0ZXN0IGdhbWUgb2JqZWN0c1xuXHRcdHZhciBnYW1lID0gbmV3IEdhbWUoY29uZmlnKTtcblx0XHRjb25zb2xlLmxvZyhnYW1lLmdldE5hbWUoKSk7XG5cblx0XHQvL3Rlc3QgR2FtZSBPYmplY3Rcblx0XHR2YXIgbXlHYW1lID0gbmV3IEdhbWUoe25hbWU6IFwiWm9vS2lsbFNvY2NlclwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlHYW1lLmdldE5hbWUoKSk7XG5cblx0XHQvL290aGVyIG9iamVjdHNcblx0XHR2YXIgbXlTY3JlZW4gPSBuZXcgU2NyZWVuKHtuYW1lOiBcIk9wZW5pbmcgU2NyZWVuXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVNjcmVlbi5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15U3RhcnRTY3JlZW4gPSBuZXcgU3RhcnRTY3JlZW4oe25hbWU6IFwiU3RhcnQgU2NyZWVuXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVN0YXJ0U2NyZWVuLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlHYW1lU2NyZWVuID0gbmV3IEdhbWVTY3JlZW4oe25hbWU6IFwiR2FtZSBTY3JlZW5cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15R2FtZVNjcmVlbi5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15RW5kU2NyZWVuID0gbmV3IEVuZFNjcmVlbih7bmFtZTogXCJFbmQgU2NyZWVuXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUVuZFNjcmVlbi5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15SW5mbyA9IG5ldyBJbmZvKHtuYW1lOiBcIkdlbmVyaWMgSW5mb3JtYXRpb25cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15SW5mby5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15VGV4dCA9IG5ldyBUZXh0KHtuYW1lOiBcIkdlbmVyaWMgVGV4dCBPYmplY3RcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15VGV4dC5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15U3RhdGljVGV4dCA9IG5ldyBTdGF0aWNUZXh0KHtuYW1lOiBcIkdlbmVyaWMgU3RhdGljIFRleHQgT2JqZWN0XCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVN0YXRpY1RleHQuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUlkZW50aXR5ID0gbmV3IElkZW50aXR5KHtuYW1lOiBcIkdlbmVyaWMgSWRlbnRpdHkgT2JqZWN0XCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUlkZW50aXR5LmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlJbnN0cnVjdGlvbnMgPSBuZXcgSW5zdHJ1Y3Rpb25zKHtuYW1lOiBcIkdlbmVyaWMgSW5zdHJ1Y3Rpb25zIE9iamVjdFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlJbnN0cnVjdGlvbnMuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUR5bmFtaWNUZXh0ID0gbmV3IER5bmFtaWNUZXh0KHtuYW1lOiBcIkdlbmVyaWMgRHluYW1pYyBUZXh0IE9iamVjdFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlEeW5hbWljVGV4dC5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15U2NvcmUgPSBuZXcgU2NvcmUoe25hbWU6IFwic2NvcmVzLi4uXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVNjb3JlLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlDaGFyYWN0ZXIgPSBuZXcgQ2hhcmFjdGVyKHtuYW1lOiBcIkdlbmVyaWMgQ2hhcmFjdGVyXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUNoYXJhY3Rlci5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15VHJ1bXAgPSBuZXcgVHJ1bXAoe25hbWU6IFwiRG9uYWxkIFRydW1wXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVRydW1wLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlQbGF5ZXIgPSBuZXcgUGxheWVyKHtuYW1lOiBcIkVuZCBVc2VyXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVBsYXllci5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15QW5pbWFsID0gbmV3IEFuaW1hbCh7bmFtZTogXCJHZW5lcmljIEFuaW1hbFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlBbmltYWwuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUxpb24gPSBuZXcgTGlvbih7bmFtZTogXCJDb3dhcmRseSB0aGUgTGlvblwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlMaW9uLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlUaWdlciA9IG5ldyBUaWdlcih7bmFtZTogXCJDaG9tcGVyIHRoZSBUaWdlclwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlUaWdlci5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15QmVhciA9IG5ldyBCZWFyKHtuYW1lOiBcIk1hdWxlciB0aGUgQmVhclwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlCZWFyLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlHb3JpbGxhID0gbmV3IEdvcmlsbGEoeyBuYW1lOiBcIlNwdW5reSB0aGUgR29yaWxsYVwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlHb3JpbGxhLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlIZWFsdGggPSBuZXcgSGVhbHRoKHtuYW1lOiBcIk9uZSBIZWFsdGggS2l0XCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUhlYWx0aC5nZXROYW1lKCkpO1xuXG5cdFx0Ly9BcmVhIGluaGVyaXRhbmNlLlxuXHRcdHZhciBteUFyZWEgPSBuZXcgQXJlYSh7bmFtZTogXCJHZW5lcmljIEFyZWFcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15QXJlYS5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15Q2FnZSA9IG5ldyBDYWdlKHtuYW1lOiBcIkdlbmVyaWMgQXJlYVwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlDYWdlLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlBbmltYWxBcmVhID0gbmV3IEFuaW1hbEFyZWEoe25hbWU6IFwiQW5pbWFsQXJlYVwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlBbmltYWxBcmVhLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlQbGF5ZXJBcmVhID0gbmV3IFBsYXllckFyZWEoe25hbWU6IFwiUGxheWVyQXJlYVwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlQbGF5ZXJBcmVhLmdldE5hbWUoKSk7XG5cdH1cbn1cbiJdfQ==
