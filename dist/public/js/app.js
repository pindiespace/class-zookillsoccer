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
    // Animals get RANDOM MOTION

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Animal).call(this, config));

    _this.mover.initRandom(0.2, 'bottom');
    // END ADDED IN WEEK 11<<<<<<<<<<<<<<

    return _this;
  }

  // >>>>>>>>>>>ADDED IN WEEK 11


  _createClass(Animal, [{
    key: 'update',
    value: function update() {
      this.mover.updateRandomWalk();
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

var _Mover = require('./Mover.js');

var _Mover2 = _interopRequireDefault(_Mover);

var _Collider = require('./Collider.js');

var _Collider2 = _interopRequireDefault(_Collider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Character.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game-generated or user avatars. Characters are rendered in Canvas, but have their 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * position computed and updated outside canvas.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// >>>>>>>>>>>ADDED IN WEEK 11


// END ADDED WEEK 11<<<<<<<<<<<<<

var Character = function (_GamePiece) {
  _inherits(Character, _GamePiece);

  function Character(config) {
    _classCallCheck(this, Character);

    // store a reference to the game object

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Character).call(this, config));

    _this.game = config.game;

    // Set position and size from configuration
    _this.position = config.position;
    _this.size = config.size;

    window.theGame = config.game;

    // >>>>>>>>>>>ADDED IN WEEK 11
    _this.mover = new _Mover2.default(_this);
    // END ADDED IN WEEK 11<<<<<<<<<<<<<<

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

},{"./Collider.js":8,"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./Mover.js":21,"./StaticImage.js":27}],8:[function(require,module,exports){
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
'use strict';

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
    function Mover(gameObj) {
        _classCallCheck(this, Mover);

        //this.newTop = 1, this.newLeft = 1, this.newBottom = 1, this.newRight = 1;
        this.obj = gameObj;

        // Character has reference to Game
        this.game = gameObj.game;

        //window.theGame = game;

        // Movement types
        this.type = 0;
        this.SLEW = 1;
        this.RANDOM = 2;
        this.PINGPOING = 3;
    }

    /** 
     * @method initSlider
     * @description slew object horizontally with keypresses
     * @param deg the degrees to rotate the Player. 
       * NOTE: we also grab the 'Trump' object.
     */


    _createClass(Mover, [{
        key: 'initSlew',
        value: function initSlew() {
            var _this = this;

            console.log('initing slew motion');
            this.type = this.SLEW;

            this.speed = 0;
            this.ticker = 0;
            this.lastDir = 1;

            // add bottom, right to make a Rect for the PlayerArea
            this.bounds = this.game.screens['game-screen'].playerAreas[0].position;
            this.bounds.width = this.game.screens['game-screen'].playerAreas[0].size.width;
            this.bounds.height = this.game.screens['game-screen'].playerAreas[0].size.height;
            this.bounds.bottom = this.bounds.top + this.bounds.height;
            this.bounds.right = this.bounds.left + this.bounds.width;

            this.image = this.obj.image;

            // toggle the position of the Player when kicking
            this.unKick = this.obj.position.top;
            this.inKick = this.obj.position.top - 6;

            // listen for user events
            document.addEventListener('keydown', function (event) {
                return _this.slew(event);
            }, false);

            document.addEventListener('keyup', function (event) {
                return _this.unkick(event);
            }, false);
        }

        /** 
         * @method initRandom
         * @description init random motions along a path. Used for 
         * Animal characters moving through the AnimalArea.
         */

    }, {
        key: 'initRandom',
        value: function initRandom(prefSpeed, direction) {
            console.log('init random motion');
            this.type = this.RANDOM;

            this.speed = prefSpeed * this.timeStampRandom();
            this.delay = this.timeStampRandom() * 300;
            this.direction = direction;
            this.counter = 0;
            this.delayCounter = 0;
            this.MAX = 30;
            this.MAX_DELAY = 300;

            // add bottom, right to make a Rect for the AnimalArea
            this.bounds = this.game.screens['game-screen'].animalAreas[0].position;
            this.bounds.width = this.game.screens['game-screen'].animalAreas[0].size.width;
            this.bounds.height = this.game.screens['game-screen'].animalAreas[0].size.height;
            this.bounds.bottom = this.bounds.top + this.bounds.height;
            this.bounds.right = this.bounds.left + this.bounds.width;

            // get bottom and right from Character from its Image
            this.image = this.obj.image;
        }
    }, {
        key: 'initPingPong',
        value: function initPingPong(prefSpeed, collider) {
            console.log('init pingpong motion');
            this.type = this.PINGPONG;

            //Animal area
            // add bottom, right to make a Rect for the AnimalArea
            this.bounds = this.game.screens['game-screen'].animalAreas[0].position;
            this.bounds.width = this.game.screens['game-screen'].animalAreas[0].size.width;
            this.bounds.height = this.game.screens['game-screen'].animalAreas[0].size.height;
            this.bounds.bottom = this.bounds.top + this.bounds.height;
            this.bounds.right = this.bounds.left + this.bounds.width;

            // get bottom and right from Character from its Image
            this.image = this.obj.image;

            //FIND PLAYER - KLUDGE, BUT WILL WORK IF Player created BEFORE TRUMP
            //KLUDGE
            //TODO; this.game.characterArray[i]
        }

        /** 
         * @method slew 
         * Move object slightly up for duration of space bar down
           * Callback for keydown addEventListener
           * @param Event e the keydown event
           */

    }, {
        key: 'slew',
        value: function slew(e) {
            switch (e.keyCode) {
                case 32:
                case 38:
                    this.kick(e);
                    e.preventDefault(); //prevent scroll
                    break;
                case 37:
                    this.speed++;
                    this.ticker = 0;
                    this.obj.position.left -= this.speed;
                    this.lastDir = -1;
                    e.preventDefault(); //prevent scroll
                    break;
                case 39:
                    this.speed++;
                    this.ticker = 0;
                    this.obj.position.left += this.speed;
                    this.lastDir = 1;
                    e.preventDefault(); //prevent scroll
                    break;
                default:
                    break;
            }
        }

        /** 
         * @method updateSlew
         * @description provide simple easing motion, also, bounce 
         * off walls.
         */

    }, {
        key: 'updateSlew',
        value: function updateSlew() {
            this.ticker++;
            if (this.speed > 0) {
                if (this.ticker > 10) {
                    this.speed /= 2;
                    if (this.speed < 1) {
                        this.speed = 0;
                    }
                }
            }
            this.obj.position.left += this.lastDir * this.speed;

            //check bounds
            if (this.bounds) {
                if (this.image.data) {
                    var w = this.image.data.width;
                    if (this.obj.position.left < this.bounds.left) {
                        this.lastDir = 1;
                        this.obj.position.left = this.bounds.left + this.speed * 1.5;
                    } else if (this.obj.position.left > this.bounds.right - w) {
                        this.lastDir = -1;
                        this.obj.position.left = this.bounds.right - w - this.speed * 1.5;
                    }
                }
            }
        }

        /** 
         * @method kick
         * @description if foot is near Trump, kick him into the Animal
         */

    }, {
        key: 'kick',
        value: function kick(e) {
            this.obj.position.top = this.inKick;
        }

        /** 
         * @method unkick
         * @description set position of Player back to original
         */

    }, {
        key: 'unkick',
        value: function unkick(e) {
            switch (e.keyCode) {
                case 32:
                case 38:
                    this.obj.position.top = this.unKick;
                    break;
            }
        }
    }, {
        key: 'timeStampRandom',
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
        key: 'getRandom',
        value: function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        /** 
         * @method updateRandomWalk
         * @description generate random walk, with one preferred direction, 
         * used by Animals
         */

    }, {
        key: 'updateRandomWalk',
        value: function updateRandomWalk() {
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

        /** 
         * @method pingPong
         * @description move in a ping-pong style. This is specific to the game.
         * 1. collision starts the character moving
         * 2. they bounce on all walls EXCEPT the one they were closest to when collide with
         * 3. when they intersect that wall, they stop
         */

    }, {
        key: 'pingPong',
        value: function pingPong(collider) {}
    }, {
        key: 'updatePingPong',
        value: function updatePingPong() {}
    }]);

    return Mover;
}(); // end of class


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

    _this.mover.initSlew();
    // END ADDED IN WEEK 11<<<<<<<<<<<<<<		
    return _this;
  }

  // >>>>>>>>>>>ADDED IN WEEK 11


  _createClass(Player, [{
    key: 'update',
    value: function update() {
      this.mover.updateSlew();
    }
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

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Trump).call(this, config));
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQW5pbWFsQXJlYS5qcyIsIm1vZHVsZXMvanMvQXJlYS5qcyIsIm1vZHVsZXMvanMvQmFja2dyb3VuZC5qcyIsIm1vZHVsZXMvanMvQmVhci5qcyIsIm1vZHVsZXMvanMvQ2FnZS5qcyIsIm1vZHVsZXMvanMvQ2hhcmFjdGVyLmpzIiwibW9kdWxlcy9qcy9Db2xsaWRlci5qcyIsIm1vZHVsZXMvanMvRHluYW1pY1RleHQuanMiLCJtb2R1bGVzL2pzL0VuZFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvR2FtZS5qcyIsIm1vZHVsZXMvanMvR2FtZVBpZWNlLmpzIiwibW9kdWxlcy9qcy9HYW1lU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9Hb3JpbGxhLmpzIiwibW9kdWxlcy9qcy9IZWFsdGguanMiLCJtb2R1bGVzL2pzL0lkZW50aXR5LmpzIiwibW9kdWxlcy9qcy9JbWFnZS5qcyIsIm1vZHVsZXMvanMvSW5mby5qcyIsIm1vZHVsZXMvanMvSW5zdHJ1Y3Rpb25zLmpzIiwibW9kdWxlcy9qcy9MaW9uLmpzIiwibW9kdWxlcy9qcy9Nb3Zlci5qcyIsIm1vZHVsZXMvanMvUGxheWVyLmpzIiwibW9kdWxlcy9qcy9QbGF5ZXJBcmVhLmpzIiwibW9kdWxlcy9qcy9TY29yZS5qcyIsIm1vZHVsZXMvanMvU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9TdGFydFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvU3RhdGljSW1hZ2UuanMiLCJtb2R1bGVzL2pzL1N0YXRpY1RleHQuanMiLCJtb2R1bGVzL2pzL1RleHQuanMiLCJtb2R1bGVzL2pzL1RpZ2VyLmpzIiwibW9kdWxlcy9qcy9UcnVtcC5qcyIsIm1vZHVsZXMvanMvaW5kZXguanMiLCJ0ZXN0cy9UZXN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FDS0M7Ozs7QUFD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bUJBQVMsRUFBQyxNQUFNLGlCQUFQLEVBQVQsQ0FBYjtBQUNBLFdBQVEsR0FBUixDQUFZLE9BQU8sT0FBUCxFQUFaOztBQUVBLE9BQUksWUFBWSxzQkFBWSxFQUFFLE1BQU0sb0JBQVIsRUFBWixDQUFoQjtBQUNBLFdBQVEsR0FBUixDQUFZLFVBQVUsT0FBVixFQUFaOztBQUVBLE9BQUksV0FBVyxxQkFBVyxFQUFDLE1BQU0sZ0JBQVAsRUFBWCxDQUFmO0FBQ0EsV0FBUSxHQUFSLENBQVksU0FBUyxPQUFULEVBQVo7OztBQUdBLE9BQUksU0FBUyxtQkFBUyxFQUFDLE1BQU0sY0FBUCxFQUFULENBQWI7QUFDQSxXQUFRLEdBQVIsQ0FBWSxPQUFPLE9BQVAsRUFBWjs7QUFFQSxPQUFJLFNBQVMsbUJBQVMsRUFBQyxNQUFNLGNBQVAsRUFBVCxDQUFiO0FBQ0EsV0FBUSxHQUFSLENBQVksT0FBTyxPQUFQLEVBQVo7O0FBRUEsT0FBSSxlQUFlLHlCQUFlLEVBQUMsTUFBTSxZQUFQLEVBQWYsQ0FBbkI7QUFDQSxXQUFRLEdBQVIsQ0FBWSxhQUFhLE9BQWIsRUFBWjs7QUFFQSxPQUFJLGVBQWUseUJBQWUsRUFBQyxNQUFNLFlBQVAsRUFBZixDQUFuQjtBQUNBLFdBQVEsR0FBUixDQUFZLGFBQWEsT0FBYixFQUFaO0FBQ0E7Ozs7OztrQkEzRm1CLEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqIFxuICogQW5pbWFsLmpzXG4gKiBUaGUgY3JpdHRlcnMgdGhhdCBUcnVtcCB0cmllcyB0byBzdG9wIGZyb20gZ2V0dGluZyB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcblxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcblxuIC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIGltcG9ydCBNb3ZlciBmcm9tICcuL01vdmVyLmpzJztcbiBpbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XG4gLy8gRU5EIEFEREVEIFdFRUsgMTE8PDw8PDw8PDw8PDw8XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYWwgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuXG4gXHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIFx0XHQvLyBBbmltYWxzIGdldCBSQU5ET00gTU9USU9OXG4gXHRcdHRoaXMubW92ZXIuaW5pdFJhbmRvbSgwLjIsICdib3R0b20nKTtcbiBcdFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxuXG4gXHR9XG5cbiBcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIFx0dXBkYXRlICgpIHtcbiBcdFx0dGhpcy5tb3Zlci51cGRhdGVSYW5kb21XYWxrKCk7XG4gXHR9XG4gXHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cbiB9IiwiLyoqIFxuICogQW5pbWFsQXJlYS5qc1xuICogVGhlIHJlZ2lvbiBhbmltYWxzIG1vdmUgdGhyb3VnaCB0byBnZXQgdG8gUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQXJlYVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhZ2UgZXh0ZW5kcyBBcmVhIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuIFx0fVxuXG4gfSIsIi8qKiBcbiAqIEFyZWEuanNcbiAqIEEgZ2VuZXJpYyByZWdpb24gb2YgdGhlIGdhbWUgc2NyZWVuLiBVc2VkIHRvIGFkZCB2aXN1YWwgb2JqZWN0cywgYW5kIFxuICogY3JlYXRlIGJvdW5kcyBmb3IgY29sbGlzaW9uIGRldGVjdGlvbi5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEluZm8sIEltYWdlLCBTdGF0aWNJbWFnZVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBBcmVhIGV4dGVuZHMgR2FtZVBpZWNlIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuXG4gXHRcdC8vIGNyZWF0ZSBhIDxkaXY+LCBhZGQgdG8gRE9NLCB3aXRoIG9wdGlvbmFsIGltYWdlXG4gXHRcdHRoaXMuYWRkVG9ET00oY29uZmlnLm5hbWUsIGNvbmZpZy5jb250YWluZXIsIGNvbmZpZy5wYXRoKTtcblxuIFx0XHQvLyBwb3NpdGlvbiB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVkXG4gXHRcdHRoaXMuc2V0RE9NUG9zaXRpb24oY29uZmlnLnBvc2l0aW9uKTsgLy9pbmhlcml0ZWQgZnJvbSBHYW1lUGllY2VcbiBcdFx0dGhpcy5zZXRET01TaXplKGNvbmZpZy5zaXplKTtcbiBcdH1cblxuIFx0Ly8gY3JlYXRlIERPTSBlbGVtZW50LCBMb2FkIGEgYmFja2dyb3VuZCBpbWFnZSwgYW5kIGluc2VydCBpbnRvIGNvbnRhaW5lclxuIFx0YWRkVG9ET00gKG5hbWUsIGNvbnRhaW5lciwgaW1nUGF0aCkge1xuIFx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuIFx0XHR0aGlzLmRvbS5pZCA9IG5hbWUgKyAnLWFyZWEnO1xuXG4gXHRcdC8vIHBvc2l0aW9uIGFic29sdXRlbHlcbiBcdFx0dGhpcy5kb20uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXG4gXHRcdC8vIERvbid0IGFsbG93IHBhZGRpbmcgb3IgbWFyZ2lucyBvciBib3JkZXJzIGZvciBBcmVhc1xuIFx0XHR0aGlzLmRvbS5zdHlsZS5tYXJnaW4gPSAnMHB4JztcbiBcdFx0dGhpcy5kb20uc3R5bGUucGFkZGluZyA9ICcwcHgnO1xuXG4gXHRcdC8vIGFkZCB0byB0aGUgRE9NXG4gXHRcdGNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGhpcy5kb20sIGNvbnRhaW5lci5jaGlsZE5vZGVzWzBdKTtcblxuIFx0XHQvLyBpZiB3ZSBoYXZlIGFuIGltYWdlLCBpbnNlcnQgaW4gZWxlbWVudCBiYWNrZ3JvdW5kXG4gXHRcdGlmIChpbWdQYXRoKSB7XG5cbiBcdFx0XHR0aGlzLmltYWdlID0gbmV3IFN0YXRpY0ltYWdlKFxuIFx0XHRcdFx0e1xuIFx0XHRcdFx0XHRuYW1lOiB0aGlzLmRvbS5pZCArICctaW1hZ2UnXG4gXHRcdFx0XHR9XG4gXHRcdFx0KTtcblxuIFx0XHRcdHRoaXMuaW1hZ2UubG9hZEJhY2tncm91bmRJbWFnZSAodGhpcy5kb20sIGltZ1BhdGgpO1xuIFx0XHR9XG5cbiBcdH1cblxuIFx0Ly8gYm91bmRzIGRldGVjdG9yIGZvciBzdXBwbGllZCBDaGFyYWN0ZXJcblxuXG4gfSIsIi8qKiBcbiAqIEJhY2tncm91bmQuanNcbiAqIEdhbWUgTG9nb3MsIExvZ29UeXBlcywgQnJhbmQgTmFtZVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrZ3JvdW5kIGV4dGVuZHMgU3RhdGljSW1hZ2Uge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXG5cdFx0dGhpcy5zZXRTb3VyY2UoY29uZmlnLnNvdXJjZSk7XG5cdFx0dGhpcy5zZXRBdXRob3IoY29uZmlnLmF1dGhvcik7XG5cdFx0dGhpcy5sb2FkQmFja2dyb3VuZEltYWdlKGNvbmZpZy5kb21JZCwgY29uZmlnLnBhdGgpO1xuXHR9XG5cbn1cbiIsIi8qKiBcbiAqIEJlYXIuanNcbiAqIEEgVGlnZXIsIHdobyB0cmllcyB0byBnZXQgdGhlIFBsYXllci5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG4gaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBCZWFyIGV4dGVuZHMgQW5pbWFsIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcbiBcdH1cblxuXG4gfSIsIi8qKiBcbiAqIENhZ2UuanNcbiAqIFRoZSByZWdpb24gd2hlcmUgYW5pbWFscyBhcmUgY2FnZWQuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBBcmVhXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FnZSBleHRlbmRzIEFyZWEge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cbiBcdFx0c3VwZXIoY29uZmlnKTtcblxuIFx0fVxuXG4gfSIsIi8qKiBcbiAqIENoYXJhY3Rlci5qc1xuICogR2FtZS1nZW5lcmF0ZWQgb3IgdXNlciBhdmF0YXJzLiBDaGFyYWN0ZXJzIGFyZSByZW5kZXJlZCBpbiBDYW52YXMsIGJ1dCBoYXZlIHRoZWlyIFxuICogcG9zaXRpb24gY29tcHV0ZWQgYW5kIHVwZGF0ZWQgb3V0c2lkZSBjYW52YXMuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcblxuIC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIGltcG9ydCBNb3ZlciBmcm9tICcuL01vdmVyLmpzJztcbiBpbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XG4gLy8gRU5EIEFEREVEIFdFRUsgMTE8PDw8PDw8PDw8PDw8XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBHYW1lUGllY2Uge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuXG4gXHRcdCAvLyBzdG9yZSBhIHJlZmVyZW5jZSB0byB0aGUgZ2FtZSBvYmplY3RcbiBcdFx0dGhpcy5nYW1lID0gY29uZmlnLmdhbWU7XG5cbiBcdFx0Ly8gU2V0IHBvc2l0aW9uIGFuZCBzaXplIGZyb20gY29uZmlndXJhdGlvblxuIFx0XHR0aGlzLnBvc2l0aW9uID0gY29uZmlnLnBvc2l0aW9uO1xuIFx0XHR0aGlzLnNpemUgPSBjb25maWcuc2l6ZTtcblxuIFx0XHR3aW5kb3cudGhlR2FtZSA9IGNvbmZpZy5nYW1lO1xuXG4gXHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIFx0XHR0aGlzLm1vdmVyID0gbmV3IE1vdmVyKHRoaXMpO1xuIFx0XHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cblxuXG4gXHRcdHRoaXMuaW1hZ2UgPSBuZXcgU3RhdGljSW1hZ2UoXG4gXHRcdFx0e1xuIFx0XHRcdFx0bmFtZTogY29uZmlnLm5hbWUgKyAnLWltYWdlJyxcbiBcdFx0XHRcdHBhdGg6IGNvbmZpZy5wYXRoXG4gXHRcdFx0fVxuIFx0XHQpO1xuXG4gXHRcdC8vIEltYWdlcyBkb24ndCBhdXRvbWF0aWNhbGx5IGxvYWQgd2hlbiB0aGV5J3JlIG5vdCBhdHRhY2hlZCB0byB0aGUgRE9NLCBcbiBcdFx0Ly8gb3IgYSBDU1MgYmFja2dyb3VuZCBpbWFnZVxuIFx0XHR0aGlzLmltYWdlLmxvYWQoY29uZmlnLnBhdGgsIGZ1bmN0aW9uICgpIHtjb25zb2xlLmxvZygnbG9hZGVkOicgKyBjb25maWcubmFtZSk7fSk7XG4gXHR9XG5cbiBcdC8vIG92ZXJyaWRlIGRlZmF1bHQgZHJhdyB3aXRoIG91ciBvd25cbiBcdGRyYXcgKGNvbnRleHQpIHtcblx0XHRpZiAodGhpcy5pbWFnZSkge1xuXHRcdFx0dmFyIGltZyA9IHRoaXMuaW1hZ2UuZGF0YTtcbiBcdFx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcblx0XHRcdC8vY29uc29sZS5sb2coJ2RyYXdpbmcnKVxuXHRcdFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxuXHRcdFx0aWYgKGltZykge1xuXHRcdFx0XHQvLyBkcmF3IGltYWdlIGludG8gSFRNTDUgY2FudmFzXG4gXHRcdCBcdFx0Y29udGV4dC5kcmF3SW1hZ2UoaW1nLCB0aGlzLnBvc2l0aW9uLmxlZnQsIHRoaXMucG9zaXRpb24udG9wKTtcblx0XHRcdH1cblx0XHR9XG4gXHR9XG4gfSIsIi8qKiBcbiAqIEBjbGFzcyBDb2xsaWRlclxuICogQGRlc2NyaXB0aW9uIGRldGVjdCBjb2xsaXNpb25zIGJldHdlZW5cbiAqIGEuIHR3byBvYmplY3RzIHJ1bm5pbmcgaW50byBlYWNoIG90aGVyXG4gKiBiLiBhbiBpbnNpZGUgb2JqZWN0IHJ1bm5pbmcgaW50byB0aGUgYm91bmRzIG9mIGl0cyBjb250YWluZXIgb2JqZWN0IFxuICovXG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaWRlciB7XG5cbiBcdGNvbnN0cnVjdG9yICgpIHtcbiBcdFxuIFx0fVxuIH0iLCIvKiogXG4gKiBEeW5hbWljVGV4dC5qc1xuICogVGV4dCB0aGF0IGNhbiBiZSBjaGFuZ2VkIGJ5IHVzZXIgKGUuZy4gaW5wdXQgZmllbGQpLCBvciBcbiAqIHVwZGF0ZWQgYnkgdGhlIGdhbWUgaXRzZWxmLlxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljVGV4dCBleHRlbmRzIFRleHQge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXHR9XG59XG4iLCIvKiogXG4gKiBFbmRTY3JlZW4uanNcbiAqIEVuZGluZyBzY3JlZW4gZm9yIHRoZSBnYW1lLlxuICogQGluaGVyaXRzIFNjcmVlbiwgR2FtZVBpZWNlXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcbiBcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG5cbiBcdFx0Ly8gbG9hZCB0aGUgYmFja2dyb3VuZCBpbWFnZVxuIFx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kKCdpbWcvc2NyZWVucy9lbmQtc2NyZWVuLnBuZycpO1xuXG4gXHRcdC8vIExvYWQgRW5kU2NyZWVuIHN1Yi1vYmplY3RzXG4gXHRcdHRoaXMubG9hZElucHV0U2NvcmUoKTtcbiBcdFx0dGhpcy5sb2FkSGlnaFNjb3JlcygpO1xuXG4gXHRcdC8vIEJpbmQgXCJwbGF5IGFnYWluXCIgYW5kIFwiaW5zdHJ1Y3Rpb25zXCIgYnV0dG9ucy5cbiBcdFx0dGhpcy5iaW5kUmVwbGF5KCk7XG4gXHRcdHRoaXMuYmluZEluc3RydWN0aW9ucygpO1xuIFx0fVxuXG4gXHRsb2FkSW5wdXRTY29yZSAoKSB7XG5cbiBcdH1cblxuIFx0bG9hZEhpZ2hTY29yZXMgKCkge1xuXG4gXHR9XG5cbiBcdGJpbmRSZXBsYXkgKCkge1xuXHRcdGNvbnNvbGUubG9nKFwiaW4gYmluZFN0YXJ0LCB0aGlzLmdhbWU6XCIgKyB0aGlzLmdhbWUpXG5cdFx0Ly8gd2UgdXNlIGJpbmQoKSB0byBsaW5rIHRoZSBmdW5jdGlvbiBiZWxvdyB0byBTdGFydFNjcmVlbiAob3RoZXJ3aXNlLCBpdCB0aGlua3MgaXQgaXMgaW5zaWRlIHdpbmRvdylcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kLXNjcmVlbi1wbGF5LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXG5cdFx0XHRmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHQvL2FsZXJ0KFwiaW4gaGFuZGxlciwgZ2FtZTpcIiArIHRoaXMuZ2FtZSlcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLmdhbWUuc3RhcnRHYW1lKCk7XG5cblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRiaW5kSW5zdHJ1Y3Rpb25zICgpIHtcblx0XHRjb25zb2xlLmxvZyhcImluIGJpbmRTdGFydCwgdGhpcy5nYW1lOlwiICsgdGhpcy5nYW1lKVxuXHRcdC8vIHdlIHVzZSBiaW5kKCkgdG8gbGluayB0aGUgZnVuY3Rpb24gYmVsb3cgdG8gU3RhcnRTY3JlZW4gKG90aGVyd2lzZSwgaXQgdGhpbmtzIGl0IGlzIGluc2lkZSB3aW5kb3cpXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZC1zY3JlZW4taW5zdHJ1Y3Rpb25zLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXG5cdFx0XHRmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHQvL2FsZXJ0KFwiaW4gaGFuZGxlciwgZ2FtZTpcIiArIHRoaXMuZ2FtZSlcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLmdhbWUubG9hZEdhbWUoKTtcblxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuIH0iLCIvKiogXG4gKiBHYW1lLmpzXG4gKiBUaGUgZW50aXJlIEdhbWUgb2JqZWN0XG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG4vL1NjcmVlbiBpbmhlcml0YW5jZVxuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSAnLi9TdGFydFNjcmVlbi5qcyc7XG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuL0dhbWVTY3JlZW4uanMnO1xuaW1wb3J0IEVuZFNjcmVlbiBmcm9tICcuL0VuZFNjcmVlbi5qcyc7XG5cbi8vSW5mbyBpbmhlcml0YW5jZVxuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuaW1wb3J0IElkZW50aXR5IGZyb20gJy4vSWRlbnRpdHkuanMnO1xuaW1wb3J0IEluc3RydWN0aW9ucyBmcm9tICcuL0luc3RydWN0aW9ucy5qcyc7XG5pbXBvcnQgRHluYW1pY1RleHQgZnJvbSAnLi9EeW5hbWljVGV4dC5qcyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZS5qcyc7XG5cbi8vQ2hhcmFjdGVyIGluaGVyaXRhbmNlXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbmltcG9ydCBUcnVtcCBmcm9tICcuL1RydW1wLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIuanMnO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5pbXBvcnQgTGlvbiBmcm9tICcuL0xpb24uanMnO1xuaW1wb3J0IFRpZ2VyIGZyb20gJy4vVGlnZXIuanMnO1xuaW1wb3J0IEJlYXIgZnJvbSAnLi9CZWFyLmpzJztcbmltcG9ydCBHb3JpbGxhIGZyb20gJy4vR29yaWxsYS5qcyc7XG5pbXBvcnQgSGVhbHRoIGZyb20gJy4vSGVhbHRoLmpzJztcblxuLy9BcmVhIGluaGVyaXRhbmNlLlxuaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcbmltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XG5pbXBvcnQgQW5pbWFsQXJlYSBmcm9tICcuL0FuaW1hbEFyZWEuanMnO1xuaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi9QbGF5ZXJBcmVhLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIEdhbWVQaWVjZSB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXG5cdFx0c3VwZXIoY29uZmlnKTtcblxuXHRcdC8vZ2FtZSBjb3B5cmlnaHRcblx0XHR0aGlzLndhcm5pbmcgPSAnVGhpcyBnYW1lIGJlbG9uZ3MgdG8gdXMsIGFuZCBub2JvZHkgZWxzZS4nO1xuXG5cdFx0Ly9nYW1lIHJldmVydHMgdG8gU3RhcnRTY3JlZW4gaWYgdW5wbGF5ZWRcblx0XHR0aGlzLlRJTUVPVVQgPSA1NTU1O1xuXG5cdFx0Ly8gZGVmaW5lIElkIGxpbmsgdG8gRE9NXG5cdFx0dGhpcy5TVEFSVF9TQ1JFRU5fSUQgPSAnc3RhcnQtc2NyZWVuJztcblx0XHR0aGlzLkdBTUVfU0NSRUVOX0lEID0gJ2dhbWUtc2NyZWVuJztcblx0XHR0aGlzLkVORF9TQ1JFRU5fSUQgPSAnZW5kLXNjcmVlbic7XG5cblx0XHQvLyBtb2RlbCBzdG9yYWdlLCBzY3JlZW5zXG5cdFx0dGhpcy5zY3JlZW5zID0gW107XG5cblx0XHQvLyBtb2RlbCBzdG9yYWdlLCBkeW5hbWljIGNoYXJhY3RlcnNcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzID0gW107XG5cblx0XHQvLyBpbml0aWFsaXplIGdhbWUsIGxvYWQgc3RhcnQgc2NyZWVuXG5cdFx0dGhpcy5pbml0KCk7XG5cblx0fSAvL2VuZCBvZiBjb25zdHJ1Y3RvclxuXG5cdGluaXQgKCkge1xuXG5cdFx0Ly8gR3JhYiB0aGUgSFRNTCBzY3JlZW4gZWxlbWVudHMgYW5kIGVuY2Fwc3VsYXRlIGluIGEgU2NyZWVuIGNsYXNzXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuU1RBUlRfU0NSRUVOX0lEXSA9IG5ldyBTdGFydFNjcmVlbih7bmFtZTogJ1N0YXJ0IFNjcmVlbicsIGlkOiB0aGlzLlNUQVJUX1NDUkVFTl9JRCwgZ2FtZTogdGhpc30pO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkdBTUVfU0NSRUVOX0lEXSA9IG5ldyBHYW1lU2NyZWVuKHtuYW1lOiAnR2FtZSBTY3JlZW4nLCBpZDogdGhpcy5HQU1FX1NDUkVFTl9JRCwgZ2FtZTogdGhpc30pO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkVORF9TQ1JFRU5fSURdID0gbmV3IEVuZFNjcmVlbih7bmFtZTogJ0VuZCBTY3JlZW4nLCBpZDogdGhpcy5FTkRfU0NSRUVOX0lELCBnYW1lOiB0aGlzfSk7XG5cblx0XHQvLyBsb2FkIHRoZSBjYW52YXNcblx0XHR0aGlzLmxvYWRDYW52YXMoKTtcblxuXHRcdC8vIG1ha2UgdGhlIHN0YXJ0IHNjcmVlbiB2aXNpYmxlXG5cdFx0dGhpcy5sb2FkR2FtZSgpO1xuXHR9XG5cblx0Ly8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBIVE1MNSBjYW52YXMgY29udGV4dFxuXHRsb2FkQ2FudmFzICgpIHtcblx0XHR0aGlzLmNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lLXNjcmVlbi1hcmVuYSBjYW52YXMnKTtcblx0XHR0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cdH1cblxuXHQvKiogXG5cdCAqIExvYWQgQ2hhcmFjdGVyc1xuXHQgKiBkeW5hbWljIENoYXJhY3RlcnMgKGUuZy4gdGhvc2UgdGhhdCBhbmltYXRlKSBhcmUgbG9hZGVkIGJ5IEdhbWUuIFxuXHQgKiBPdGhlciBzdGF0aWMgdmlzdWFsIG9iamVjdHMgYXJlIGxvYWRlZCBieSBTY3JlZW4gY2xhc3Nlcy5cblx0ICovXG5cdGxvYWRQbGF5ZXJzICgpIHtcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLnB1c2goXG5cdFx0XHRuZXcgUGxheWVyKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ1BsYXllcicsIHBvc2l0aW9uOiB7dG9wOiA1MTAsIGxlZnQ6IDIwMH0sXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy9wbGF5ZXJzL3BsYXllci5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cblxuXHRsb2FkQW5pbWFscyAoKSB7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IExpb24oXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnTGlvbicsIFxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAxNSwgbGVmdDogOTR9LFxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvYW5pbWFscy9saW9uLnBuZycsXG5cdFx0XHRcdFx0Z2FtZTogdGhpc1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLnB1c2goXG5cdFx0XHRuZXcgVGlnZXIoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnVGlnZXInLCBcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMTUsIGxlZnQ6IDMzM30sXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy9hbmltYWxzL3RpZ2VyLnBuZycsXG5cdFx0XHRcdFx0Z2FtZTogdGhpc1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLnB1c2goXG5cdFx0XHRuZXcgQmVhcihcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdCZWFyJywgcG9zaXRpb246IHt0b3A6IDE1LCBsZWZ0OiA1NzB9LFxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvYW5pbWFscy9iZWFyLnBuZycsXG5cdFx0XHRcdFx0Z2FtZTogdGhpc1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLnB1c2goXG5cdFx0XHRuZXcgR29yaWxsYShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdHb3JpbGxhJywgcG9zaXRpb246IHt0b3A6IDE1LCBsZWZ0OiA4MTJ9LFxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvYW5pbWFscy9nb3JpbGxhLnBuZycsXG5cdFx0XHRcdFx0Z2FtZTogdGhpc1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcblxuXHR9XG5cblx0bG9hZFRydW1wcyAoKSB7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IFRydW1wKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ1RydW1wJywgcG9zaXRpb246IHt0b3A6IDQ1MCwgbGVmdDogMjAwfSxcblx0XHRcdFx0XHRwYXRoOiAnaW1nL3RydW1wcy90cnVtcC5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cblx0fVxuXG5cdGxvYWRHYW1lICgpIHtcblxuXHRcdC8vbG9hZCBJbmZvIGFzc2V0c1xuXG5cdFx0Y29uc29sZS5sb2coJ2xvYWRpbmcgc3BsYXNoIHNjcmVlbicpO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkVORF9TQ1JFRU5fSURdLmhpZGVTY3JlZW4oKVxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLlNUQVJUX1NDUkVFTl9JRF0uc2hvd1NjcmVlbigpO1xuXHR9XG5cblx0c3RhcnRHYW1lICgpIHtcblxuXHRcdC8vbG9hZCBDaGFyYWN0ZXJzXG5cdFx0dGhpcy5sb2FkQW5pbWFscygpO1xuXHRcdHRoaXMubG9hZFBsYXllcnMoKTtcblx0XHR0aGlzLmxvYWRUcnVtcHMoKTtcblxuXHRcdC8vbWFrZSBHYW1lU2NyZWVuIHZpc2libGVcblxuXHRcdC8vIGluaXRpYWxpemUgZWxhcHNlZCB0aW1lXG5cdFx0dGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG5cdFx0Ly8gc2hvdyBHYW1lU2NyZWVuLCBoaWRlIG90aGVyc1xuXHRcdGNvbnNvbGUubG9nKCdzdGFydGluZyBnYW1lJyk7XG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuU1RBUlRfU0NSRUVOX0lEXS5oaWRlU2NyZWVuKCk7XG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuRU5EX1NDUkVFTl9JRF0uaGlkZVNjcmVlbigpO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkdBTUVfU0NSRUVOX0lEXS5zaG93U2NyZWVuKCk7XG5cdFx0dGhpcy5nYW1lTG9vcCgpO1xuXHR9XG5cblx0ZW5kR2FtZSAoKSB7XG5cblx0XHRjb25zb2xlLmxvZygnZW5kaW5nIGdhbWUnKTtcblxuXHRcdC8vIHJlc2V0IHRpbWVyXG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXG5cdFx0Ly8gdHVybiBvZmYgYW5pbWF0aW9uXG5cdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5nbG9iYWxJZCk7XG5cdFx0dGhpcy5nbG9iYWxJZCA9IG51bGw7XG5cblx0XHQvLyBnbyB0byBlbmQgc2NyZWVuXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuR0FNRV9TQ1JFRU5fSURdLmhpZGVTY3JlZW4oKTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5FTkRfU0NSRUVOX0lEXS5zaG93U2NyZWVuKCk7XG5cdH1cblxuXHRlbGFwc2VkICgpIHtcblxuXHRcdC8vIHJlY29yZCB0aW1lIHdlIGhhdmUgYmVlbiBpbiBnYW1lTG9vcFxuXHRcdHRoaXMuZW5kVGltZSA9IG5ldyBEYXRlKCk7XG5cblx0XHQvLyB0aW1lIGRpZmZlcmVuY2UgaW4gbXNcblxuXHRcdHZhciB0aW1lRGlmZiA9ICh0aGlzLmVuZFRpbWUgLSB0aGlzLnN0YXJ0VGltZSkgLyAxMDAwO1xuXG5cdFx0Ly8gZ2V0IHNlY29uZHMgKE9yaWdpbmFsIGhhZCAncm91bmQnIHdoaWNoIGluY29ycmVjdGx5IGNvdW50cyAwOjI4LCAwOjI5LCAxOjMwIC4uLiAxOjU5LCAxOjApXG5cdFx0cmV0dXJuIE1hdGgucm91bmQodGltZURpZmYgJSA2MCk7XG5cdH1cblxuXHRjaGVja0lmQ29tcGxldGUgKCkge1xuXG5cdFx0Ly8gZ2FtZSBsb2dpYyB0byBzZWUgaWYgdGhlIGdhbWUgc2hvdWxkIHJlc2V0XG5cdFx0Ly8vLy8vLy8vLy8vL2NvbnNvbGUubG9nKCdFTEFQU0VEOicgKyB0aGlzLmVsYXBzZWQoKSk7XG5cblx0XHRpZiAodGhpcy5lbGFwc2VkKCkgPiB0aGlzLlRJTUVPVVQpIHtcblx0XHRcdC8vIGlmIGlkbGUgdG9vIGxvbmcsIHJlc2V0IGdhbWUgdG8gc3RhcnRcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHVwZGF0ZSAoKSB7XG5cblx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXG5cdFx0XHR2YXIgY2hhcmFjdGVyID0gdGhpcy5kaXNwbGF5Q2hhcmFjdGVyc1tpXTtcblxuXHRcdFx0c3dpdGNoIChjaGFyYWN0ZXIuZ2V0Q2xhc3MoKSkge1xuXHRcdFx0XHRjYXNlICdQbGF5ZXInOlxuXHRcdFx0XHRjYXNlICdUcnVtcCc6XG5cdFx0XHRcdGNhc2UgJ0xpb24nOlxuXHRcdFx0XHRjYXNlICdUaWdlcic6XG5cdFx0XHRcdGNhc2UgJ0JlYXInOlxuXHRcdFx0XHRjYXNlICdHb3JpbGxhJzpcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y2hhcmFjdGVyLnVwZGF0ZSgpO1xuXHRcdH1cblx0fVxuXG5cdGRyYXcgKCkge1xuXG4gXHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuXHRcdHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gXHRcdC8vIEVORCBBRERFRCBXRUVLIDExPDw8PDw8PDw8PDw8PFxuXHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzW2ldLmRyYXcodGhpcy5jb250ZXh0KTtcblx0XHR9XG5cdH1cblxuXHRnYW1lTG9vcCAoKSB7XG5cdFx0XG5cdFx0aWYgKHRoaXMuY2hlY2tJZkNvbXBsZXRlKCkpIHtcblx0XHRcdHRoaXMuZW5kR2FtZSgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdHRoaXMuZHJhdygpO1xuXHRcdFxuXHRcdC8vY29uc29sZS5sb2coJ2xvb3BpbmcuLi4nKVxuXHRcdHRoaXMuZ2xvYmFsSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lTG9vcC5iaW5kKHRoaXMpKTtcblx0fVxuXG59IiwiLyoqIFxuICogR2FtZVBpZWNlLmpzXG4gKiBCYXNpYyBHYW1lIG9iamVjdFxuICpcbiAqIFRvIG1ha2UgdGhpcyB3b3JrLCB5b3UgbXVzdCBiZSBydW5uaW5nIHRoZSBCYWJlbCB0cmFuc3BpbGVyLCBcbiAqIGFuZCB3YXRjaGluZyBmb3IgY2hhbmdlcyBpbiB0aGlzIGZpbGUgd2l0aCBicm93c2VyaWZ5LiBUd28gXG4gKiBUZXJtaW5hbCB3aW5kb3dzIG5lZWQgdG8gYmUgb3BlbjpcbiAqIDEuIG9uZSB3aW5kb3cgd2hlcmUgeW91IHR5cGVkIHRoZSBjb21tYW5kIFwiZ3J1bnRcIlxuICogMi4gb25lIHdpbmRvdyB3aGVyZSB5b3UgdHlwZWQgdGhlIGNvbW1hbmQgXCJucG0gc3RhcnRcIlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGllY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgICAgICAvL1RPRE86IHVzZSBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZTtcbiAgICAgICAgdGhpcy51dWlkID0gdGhpcy5zZXRJZCgpO1xuICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTsgLy8gY2hhbmdlIHRvIGZhbHNlIGZvciBkZWZlcnJlZCBsb2Fkc1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBTZXQgYSBwb3NpdGlvbiBmb3IgdGhlIG9iamVjdCwgYWxzbyB0aGUgcG9zaXRpb24gb2YgdGhlIFxuICAgICAqIERPTSByZXByZXNlbnRhdGlvbiBvZiB0aGUgb2JqZWN0XG4gICAgICovXG4gICAgc2V0RE9NUG9zaXRpb24gKHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgaWYgKHRoaXMuZG9tKSB7XG4gICAgICAgICAgICB0aGlzLmRvbS5zdHlsZS50b3AgPSBwb3NpdGlvbi50b3AgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUubGVmdCA9IHBvc2l0aW9uLmxlZnQgKyAncHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIFNldCB0aGUgb2JqZWN0IHNpemUsIGFsc28gaXRzIERPTSBzaXplXG4gICAgICovXG4gICAgc2V0RE9NU2l6ZSAoc2l6ZSkge1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICBpZiAodGhpcy5kb20pIHtcbiAgICAgICAgICAgIHRoaXMuZG9tLnN0eWxlLndpZHRoID0gc2l6ZS53aWR0aCArICdweCc7XG4gICAgICAgICAgICB0aGlzLmRvbS5zdHlsZS5oZWlnaHQgPSBzaXplLmhlaWdodCArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogR2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIGV2ZXJ5IGdhbWUgb2JqZWN0LlxuICAgICAqIEBsaW5rIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2NyZWF0ZS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdFxuICAgICAqL1xuICAgIHNldElkICgpIHtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpKjE2KSUxNiB8IDA7XG4gICAgICAgICAgICBkID0gTWF0aC5mbG9vcihkLzE2KTtcbiAgICAgICAgICAgIHJldHVybiAoYz09J3gnID8gciA6IChyJjB4M3wweDgpKS50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXVpZDtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogUmV0dXJuIHRoZSBnaXZlbiBuYW1lIG9mIHRoaXMgb2JqZWN0XG4gICAgICovXG4gICAgZ2V0TmFtZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIHJldHVybiB0aGUgY2xhc3Mgb2YgdGhlIG9iamVjdFxuICAgICAqL1xuICAgIGdldENsYXNzICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogUmV0dXJuIHRoZSB1bmlxdWUgaWQgb2YgdGhpcyBvYmplY3QuXG4gICAgICovXG4gICAgZ2V0SWQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51dWlkO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBHZXQgdGhlIGVuY2xvc2luZyBib3ggb3V0c2lkZSB0aGUgb2JqZWN0IGZvciBleHRlcm5hbCBjb2xsaXNpb25zXG4gICAgICovXG4gICAgZ2V0Q29sbGlzaW9uUmVjdCAoKSB7XG5cbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogR2V0IHRoZSBpbnRlcm5hbCBib3ggd2hlbiB0aGlzIG9iamVjdCBhY3RzIGFzIGEgY29udGFpbmVyIGZvciBhbm90aGVyXG4gICAgICovXG4gICAgZ2V0Qm91bmRzUmVjdCAoKSB7XG5cbiAgICB9XG5cdFxuXHQvKiogXG5cdCAqIEdlbmVyaWMgJ3JlYWR5JyBmdW5jdGlvbiAoZS5nLiBmb3IgZGVsYXllZCBhc3NldCBsb2Fkcylcblx0ICovXG5cdHNldFJlYWR5ICh2YWwpIHtcblx0XHR0aGlzLnJlYWR5ID0gdmFsO1xuXHR9XG5cbiAgICAvKiogXG4gICAgICogR2VuZXJpYyB1cGRhdGUgKG92ZXJyaWRlKVxuICAgICAqL1xuICAgIHVwZGF0ZSAoKSB7XG5cbiAgICB9XG5cbiAgICAgLyoqIFxuICAgICAgKiBnZW5lcmljIGRyYXcgKG92ZXJyaWRlKVxuICAgICAgKi9cbiAgICBkcmF3ICgpIHtcblxuICAgIH1cbn1cblxuXG4iLCIvKiogXG4gKiBHYW1lU2NyZWVuLmpzXG4gKiBNYWluIGdhbWUgc2NyZWVuIG9iamVjdFxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgU2NyZWVuXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcblxuIGltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG4gaW1wb3J0IEFuaW1hbEFyZWEgZnJvbSAnLi9BbmltYWxBcmVhLmpzJztcbiBpbXBvcnQgUGxheWVyQXJlYSBmcm9tICcuL1BsYXllckFyZWEuanMnO1xuIGltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XG5cblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG5cbiBcdFx0dGhpcy5jYWdlcyA9IFtdO1xuIFx0XHR0aGlzLmFuaW1hbEFyZWFzID0gW107XG4gXHRcdHRoaXMucGxheWVyQXJlYXMgPSBbXTtcblxuIFx0XHQvL0dhbWVTY3JlZW4gc2hvdWxkIGhpZGUgaXRzIGxvY2FsIGhlYWRlciBhbmQgZm9vdGVyXG4gXHRcdHRoaXMuaGlkZUhlYWRlcigpO1xuIFx0XHR0aGlzLmhpZGVGb290ZXIoKTtcblxuIFx0XHQvLyBsb2FkIHRoZSBiYWNrZ3JvdW5kIGltYWdlXG4gXHRcdHRoaXMubG9hZEJhY2tncm91bmQoJ2ltZy9zY3JlZW5zL2dhbWUtc2NyZWVuLnBuZycpO1xuXG4gXHRcdC8vIGdldCB0aGUgc2VjdGlvbiB0aGF0IGhhcyB0aGUgY2FudmFzIGZvciBvdmVybGF5XG4gXHRcdHZhciBhcmVuYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLXNjcmVlbi1hcmVuYScpO1xuXG4gXHRcdC8vIGxvYWQgc3ViLW9iamVjdHMgaW50byB0aGUgQXJlbmFcbiBcdFx0dGhpcy5jYWdlcyAgID0gdGhpcy5sb2FkQ2FnZXMoYXJlbmEsICdpbWcvYXJlYXMvY2FnZS5wbmcnKTtcbiBcdFx0dGhpcy5hbmltYWxBcmVhID0gdGhpcy5sb2FkQW5pbWFsQXJlYSgpO1xuIFx0XHR0aGlzLnBsYXllckFyZWEgPSB0aGlzLmxvYWRQbGF5ZXJBcmVhKCk7XG5cbiBcdH1cblxuIFx0bG9hZENhZ2VzIChjb250YWluZXIsIGltZ1BhdGgpIHtcbiBcdFx0Ly8gbG9hZCA0IENhZ2VzXG4gXHRcdHRoaXMuY2FnZXMucHVzaChcbiBcdFx0XHRuZXcgQ2FnZShcbiBcdFx0XHRcdHtcbiBcdFx0XHRcdFx0bmFtZTogJ2xpb24tY2FnZScsIFxuIFx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMCwgbGVmdDogNzB9LCBcbiBcdFx0XHRcdFx0c2l6ZToge3dpZHRoOiAxMDAsIGhlaWdodDoxMDB9LCBcbiBcdFx0XHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsIFxuIFx0XHRcdFx0XHRwYXRoOiBpbWdQYXRoXG4gXHRcdFx0XHR9XG4gXHRcdFx0KVxuIFx0XHQpO1xuXHRcdHRoaXMuY2FnZXMucHVzaChcblx0XHRcdG5ldyBDYWdlKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ3RpZ2VyLWNhZ2UnLCBcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMCwgbGVmdDogMzEwfSwgXG5cdFx0XHRcdFx0c2l6ZToge3dpZHRoOiAxMDAsIGhlaWdodDoxMDB9LCBcblx0XHRcdFx0XHRjb250YWluZXI6IGNvbnRhaW5lciwgXG5cdFx0XHRcdFx0cGF0aDogaW1nUGF0aFxuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcblx0XHR0aGlzLmNhZ2VzLnB1c2goXG5cdFx0XHRuZXcgQ2FnZShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdiZWFyLWNhZ2UnLCBcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMCwgbGVmdDogNTUwfSwgXG5cdFx0XHRcdFx0c2l6ZToge3dpZHRoOiAxMDAsIGhlaWdodDoxMDB9LFxuXHRcdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcblx0XHRcdFx0XHRwYXRoOiBpbWdQYXRoXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXHRcdHRoaXMuY2FnZXMucHVzaChcblx0XHRcdG5ldyBDYWdlKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ2dvcmlsbGEtY2FnZScsIFxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAwLCBsZWZ0OiA3OTB9LCBcblx0XHRcdFx0XHRzaXplOiB7d2lkdGg6IDEwMCwgaGVpZ2h0OjEwMH0sXG5cdFx0XHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsIFxuXHRcdFx0XHRcdHBhdGg6IGltZ1BhdGhcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG4gXHR9XG5cbiBcdGxvYWRBbmltYWxBcmVhICgpIHtcbiBcdFx0Ly8gbG9hZCBBbmltYWwgbW92ZW1lbnQgYXJlYVxuIFx0XHR0aGlzLmFuaW1hbEFyZWFzLnB1c2goXG4gXHRcdFx0bmV3IEFuaW1hbEFyZWEoXG4gXHRcdFx0XHR7XG4gXHRcdFx0XHRcdG5hbWU6ICdab28nLCBcbiBcdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDEwNCwgbGVmdDogNn0sIFxuIFx0XHRcdFx0XHRzaXplOiB7d2lkdGg6IDk3MCwgaGVpZ2h0OiA0MTB9LFxuIFx0XHRcdFx0XHRjb250YWluZXI6IHRoaXMuZG9tLCBcbiBcdFx0XHRcdFx0cGF0aDogbnVsbFxuIFx0XHRcdFx0fVxuIFx0XHRcdClcbiBcdFx0KTtcbiBcdH1cblxuIFx0bG9hZFBsYXllckFyZWEgKCkge1xuIFx0XHQvLyBsb2FkIHRoZSBQbGF5ZXJcbiBcdFx0dGhpcy5wbGF5ZXJBcmVhcy5wdXNoKFxuIFx0XHRcdG5ldyBQbGF5ZXJBcmVhKFxuIFx0XHRcdFx0e1xuIFx0XHRcdFx0XHRuYW1lOiAnUGxheWVyIEFyZWEnLCBcbiBcdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDUxNCwgbGVmdDogNn0sIFxuIFx0XHRcdFx0XHRzaXplOiB7d2lkdGg6IDk3MCwgaGVpZ2h0OiAxMDB9LFxuIFx0XHRcdFx0XHRjb250YWluZXI6IHRoaXMuZG9tLCBcbiBcdFx0XHRcdFx0cGF0aDogbnVsbFxuIFx0XHRcdFx0fVxuIFx0XHRcdClcbiBcdFx0KTtcbiBcdH1cblxuIH1cblxuIiwiLyoqIFxuICogR29yaWxsYS5qc1xuICogQSBHb3JpbGxhLCB3aG8gdHJpZXMgdG8gZ2V0IHRoZSBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuIGltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29yaWxsYSBleHRlbmRzIEFuaW1hbCB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG4gXHR9XG4gfSIsIi8qKiBcbiAqIEhlYWx0aC5qc1xuICogVGhlIGNyaXR0ZXJzIHRoYXQgVHJ1bXAgdHJpZXMgdG8gc3RvcCBmcm9tIGdldHRpbmcgdGhlIFBsYXllci5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFsdGggZXh0ZW5kcyBDaGFyYWN0ZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuIFx0fVxuXG4gfSIsIi8qKiBcbiAqIElkZW50aXR5LmpzXG4gKiBHYW1lIExvZ29zLCBMb2dvVHlwZXMsIEJyYW5kIE5hbWVcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRlbnRpdHkgZXh0ZW5kcyBTdGF0aWNJbWFnZSB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cblx0XHR0aGlzLnNldFNvdXJjZShjb25maWcuc291cmNlKTtcblx0XHR0aGlzLnNldEF1dGhvcihjb25maWcuYXV0aG9yKTtcblx0XHR0aGlzLmxvYWRJbWFnZVRvRE9NKGNvbmZpZy5kb21JZCwgY29uZmlnLnBhdGgpO1xuXG5cdFx0Ly9IaWRlIGFueSA8aDI+IHRleHQgZXF1aXZhbGVudCBvZiBpZGVudGl0eSBpbiB0aGlzIENTUyBib3hcblx0XHR2YXIgdGV4dElkZW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBjb25maWcuZG9tSWQgKyAnIGgyJyk7XG5cdFx0dGV4dElkZW50aXR5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH1cblxufVxuIiwiLyoqIFxuICogU3RhdGljSW1hZ2UuanNcbiAqIEltYWdlLXN0eWxlIEluZm9ybWF0aW9uIHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgb25jZSB0aGUgZ2FtZSBpcyBsb2FkZWRcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgSW5mbyB7XG5cblx0Ly8gc2F2ZSBzY29wZVxuXHQvLyBUT0RPOiByZWZhY3RvciB3aXRoIGFycm93IGZ1bmN0aW9uXG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cdFx0dGhpcy5yZWFkeSA9IGZhbHNlOyAvL292ZXItcmlkZSBHYW1lUGllY2UgYW5kIGluZm8gd2l0aCBkZWZlcnJhbHNcblx0XHR0aGlzLmltYWdlID0gbnVsbDtcblx0XHR0aGlzLnBhdGggPSBjb25maWcucGF0aDtcblx0XHR0aGlzLmF1dGhvciA9IGNvbmZpZy5hdXRob3I7XG5cdFx0dGhpcy5zb3VyY2UgPSBjb25maWcuc291cmNlO1xuXHR9XG5cblx0Ly8gbG9hZCBhbiBpbWFnZVxuXHRsb2FkIChwYXRoLCBjYWxsYmFjaykge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHR0aGF0LnNldFJlYWR5KGZhbHNlKTtcblx0XHRjb25zb2xlLmxvZygnZW50ZXJpbmcgbG9hZCBpbkltYWdlJyk7XG5cdFx0dmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdGltZy5zcmMgPSBwYXRoO1xuXHRcdGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGF0Lm5hbWUgKyAnIGltYWdlIGxvYWRlZCBmcm9tOicgKyBwYXRoICsgJyB3OicgKyBpbWcud2lkdGggKyAnIGg6JyArIGltZy5oZWlnaHQpXG5cdFx0XHR0aGF0LnNldFJlYWR5KHRydWUpO1xuXHRcdFx0dGhhdC5kYXRhID0gaW1nO1xuXHRcdFx0XG5cdFx0XHRpZihjYWxsYmFjaykge1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpbWcub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZXJyb3IgbG9hZGluZyBpbWcgZnJvbTonICsgcGF0aCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gbG9hZCBpbWFnZSwgYXBwZW5kIHRvIGV4aXN0aW5nIERPTSBlbGVtZW50XG5cdC8vIE5PVEU6IHRoaXMgaXMgb3Zlci13cml0dGVuIGluIENoYXJhY3Rlci5qcywgd2hpY2ggbG9hZHMgaW1hZ2VzIGludG8gQ2FudmFzXG5cdGxvYWRJbWFnZVRvRE9NIChkb21JZCwgcGF0aCwgY2FsbGJhY2spIHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0dGhpcy5sb2FkKHBhdGgsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdmb3JlZ3JvdW5kIGltYWdlICcgKyBwYXRoICsgJyBsb2FkZWQnKVxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9tSWQpLmFwcGVuZENoaWxkKHRoYXQuZGF0YSk7XG5cdFx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHR9XG5cblx0Ly8gbG9hZCBpbWFnZSBhcyBhIENTUyBiYWNrZ3JvdW5kIGltYWdlIGludG8gZXhpc3RpbmcgRE9NIGVsZW1lbnQuIFxuXHQvLyBOT1RFOiBubyBsb2NhbCByZWZlcmVuY2UgdG8gaW1hZ2UgaW4gdGhpcyBjYXNlXG5cdGxvYWRCYWNrZ3JvdW5kSW1hZ2UgKGNvbnRhaW5lciwgcGF0aCwgY2FsbGJhY2spIHtcblx0XHRjb25zb2xlLmxvZygnbG9hZGluZyBiYWNrZ3JvdW5kIGltYWdlOicgKyBwYXRoKVxuXHRcdGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J3VybCgnICsgcGF0aCArICcpJztcblx0XHR0aGlzLnNldFJlYWR5KHRydWUpO1xuXHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0Y2FsbGJhY2soKTtcblx0XHR9XG5cdH1cblxuXHQvLyBEcmF3IHRoZSBpbWFnZSB0byBhIHN1cHBsaWVkIGNhbnZhcyBjb250ZXh0XG5cdGRyYXdUb0NhbnZhcyAoY29udGV4dCwgcG9zaXRpb24sIHNpemUpIHtcblx0XHRjb250ZXh0LmRyYXdJbWFnZShpbWcsIHBvc2l0aW9uLnRvcCwgcG9zaXRpb24ubGVmdCwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xuXHR9XG5cblx0Ly8gRHJhdyB0byB0aGUgRE9NLiBBc3N1bWUgdGhlIEltYWdlIHdhcyBhbHJlYWR5IGF0dGFjaGVkIHRvIHRoZSBET01cblx0ZHJhd1RvRE9NIChwb3NpdGlvbiwgc2l6ZSkge1xuXHRcdHRoaXMuaW1hZ2Uuc3R5bGUudG9wID0gcG9zaXRpb24udG9wO1xuXHRcdHRoaXMuaW1hZ2Uuc3R5bGUubGVmdCA9IHBvc2l0aW9uLmxlZnQ7XG5cdFx0dGhpcy5pbWFnZS5zdHlsZS53aWR0aCA9IHNpemUud2lkdGg7XG5cdFx0dGhpcy5pbWFnZS5zdHlsZS5oZWlnaHQgPSBzaXplLmhlaWdodDtcblx0fVxuXG59XG4iLCIvKiogXG4gKiBJbmZvLmpzXG4gKiBHZW5lcmljIGluZm9ybWFpdG9uIG9iamVjdFxuICogQGluaGVyaXRzIEdhbWVQaWVjZVxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mbyBleHRlbmRzIEdhbWVQaWVjZSB7XG5cblx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0fVxuXG5cdHNldEF1dGhvciAoYXV0aG9yKSB7XG5cdFx0dGhpcy5hdXRob3IgPSBhdXRob3I7XG5cdH1cblxuXHRzZXRTb3VyY2UgKHNvdXJjZSkge1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHR9XG5cbn0iLCIvKiogXG4gKiBJbnN0cnVjdGlvbnMuanNcbiAqIFRleHQgd2hpY2ggdGVsbHMgdGhlIFBsYXllciBob3cgdG8gcGxheSB0aGUgZ2FtZS5cbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbiBpbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVjdGlvbnMgZXh0ZW5kcyBTdGF0aWNUZXh0IHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0fVxufVxuIiwiLyoqIFxuICogTGlvbi5qc1xuICogQSBMaW9uLCB3aG8gdHJpZXMgdG8gZ2V0IHRoZSBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuIGltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlvbiBleHRlbmRzIEFuaW1hbCB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG4gXHR9XG4gfSIsIi8qKiBcbiAqIEBjbGFzcyBNb3ZlclxuICogQGRlc2NyaXB0aW9uIHVwZGF0ZSBwb3NpdGlvbiBvZiBvYmplY3QgYmVpbmcgYW5pbWF0ZWQgYnkgR2FtZS5cbiAqL1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92ZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoZ2FtZU9iaikge1xuIFx0XHQvL3RoaXMubmV3VG9wID0gMSwgdGhpcy5uZXdMZWZ0ID0gMSwgdGhpcy5uZXdCb3R0b20gPSAxLCB0aGlzLm5ld1JpZ2h0ID0gMTtcbiBcdFx0dGhpcy5vYmogPSBnYW1lT2JqO1xuXG4gICAgICAgIC8vIENoYXJhY3RlciBoYXMgcmVmZXJlbmNlIHRvIEdhbWVcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZU9iai5nYW1lO1xuXG4gICAgICAgIC8vd2luZG93LnRoZUdhbWUgPSBnYW1lO1xuXG4gICAgICAgIC8vIE1vdmVtZW50IHR5cGVzXG4gICAgICAgIHRoaXMudHlwZSA9IDA7XG4gICAgICAgIHRoaXMuU0xFVyA9IDE7XG4gICAgICAgIHRoaXMuUkFORE9NID0gMjtcbiAgICAgICAgdGhpcy5QSU5HUE9JTkcgPSAzO1xuXG4gXHR9XG5cbiBcdC8qKiBcbiBcdCAqIEBtZXRob2QgaW5pdFNsaWRlclxuIFx0ICogQGRlc2NyaXB0aW9uIHNsZXcgb2JqZWN0IGhvcml6b250YWxseSB3aXRoIGtleXByZXNzZXNcbiBcdCAqIEBwYXJhbSBkZWcgdGhlIGRlZ3JlZXMgdG8gcm90YXRlIHRoZSBQbGF5ZXIuIFxuICAgICAqIE5PVEU6IHdlIGFsc28gZ3JhYiB0aGUgJ1RydW1wJyBvYmplY3QuXG4gXHQgKi9cbiBcdGluaXRTbGV3KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW5pdGluZyBzbGV3IG1vdGlvbicpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLlNMRVc7XG5cbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgIHRoaXMudGlja2VyID0gMDtcbiAgICAgICAgdGhpcy5sYXN0RGlyID0gMTtcblxuICAgICAgICAvLyBhZGQgYm90dG9tLCByaWdodCB0byBtYWtlIGEgUmVjdCBmb3IgdGhlIFBsYXllckFyZWFcbiAgICAgICAgdGhpcy5ib3VuZHMgPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5wbGF5ZXJBcmVhc1swXS5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5ib3VuZHMud2lkdGggPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5wbGF5ZXJBcmVhc1swXS5zaXplLndpZHRoO1xuICAgICAgICB0aGlzLmJvdW5kcy5oZWlnaHQgPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5wbGF5ZXJBcmVhc1swXS5zaXplLmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3VuZHMuYm90dG9tID0gdGhpcy5ib3VuZHMudG9wICsgdGhpcy5ib3VuZHMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdW5kcy5yaWdodCA9IHRoaXMuYm91bmRzLmxlZnQgKyB0aGlzLmJvdW5kcy53aWR0aDtcblxuICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5vYmouaW1hZ2U7XG5cbiAgICAgICAgLy8gdG9nZ2xlIHRoZSBwb3NpdGlvbiBvZiB0aGUgUGxheWVyIHdoZW4ga2lja2luZ1xuICAgICAgICB0aGlzLnVuS2ljayA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcbiAgICAgICAgdGhpcy5pbktpY2sgPSB0aGlzLm9iai5wb3NpdGlvbi50b3AgLSA2O1xuXG4gICAgICAgIC8vIGxpc3RlbiBmb3IgdXNlciBldmVudHNcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIFxuICAgICAgICAgICAgZXZlbnQgPT4gdGhpcy5zbGV3KGV2ZW50KSwgZmFsc2UpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJyxcbiAgICAgICAgICAgIGV2ZW50ID0+IHRoaXMudW5raWNrKGV2ZW50KSwgZmFsc2UpO1xuIFx0fVxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgaW5pdFJhbmRvbVxuICAgICAqIEBkZXNjcmlwdGlvbiBpbml0IHJhbmRvbSBtb3Rpb25zIGFsb25nIGEgcGF0aC4gVXNlZCBmb3IgXG4gICAgICogQW5pbWFsIGNoYXJhY3RlcnMgbW92aW5nIHRocm91Z2ggdGhlIEFuaW1hbEFyZWEuXG4gICAgICovXG4gICAgaW5pdFJhbmRvbSAocHJlZlNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQgcmFuZG9tIG1vdGlvbicpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLlJBTkRPTTtcblxuICAgICAgICB0aGlzLnNwZWVkID0gcHJlZlNwZWVkICogdGhpcy50aW1lU3RhbXBSYW5kb20oKTtcbiAgICAgICAgdGhpcy5kZWxheSA9IHRoaXMudGltZVN0YW1wUmFuZG9tKCkgKiAzMDA7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLmRlbGF5Q291bnRlciA9IDA7XG4gICAgICAgIHRoaXMuTUFYID0gMzA7XG4gICAgICAgIHRoaXMuTUFYX0RFTEFZID0gMzAwO1xuXG4gICAgICAgIC8vIGFkZCBib3R0b20sIHJpZ2h0IHRvIG1ha2UgYSBSZWN0IGZvciB0aGUgQW5pbWFsQXJlYVxuICAgICAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLmJvdW5kcy53aWR0aCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnNpemUud2lkdGg7XG4gICAgICAgIHRoaXMuYm91bmRzLmhlaWdodCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnNpemUuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdW5kcy5ib3R0b20gPSB0aGlzLmJvdW5kcy50b3AgKyB0aGlzLmJvdW5kcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm91bmRzLnJpZ2h0ID0gdGhpcy5ib3VuZHMubGVmdCArIHRoaXMuYm91bmRzLndpZHRoO1xuXG4gICAgICAgIC8vIGdldCBib3R0b20gYW5kIHJpZ2h0IGZyb20gQ2hhcmFjdGVyIGZyb20gaXRzIEltYWdlXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLm9iai5pbWFnZTtcbiAgICB9XG5cbiAgICBpbml0UGluZ1BvbmcgKHByZWZTcGVlZCwgY29sbGlkZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQgcGluZ3BvbmcgbW90aW9uJyk7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMuUElOR1BPTkc7XG5cbiAgICAgICAgLy9BbmltYWwgYXJlYVxuICAgICAgICAvLyBhZGQgYm90dG9tLCByaWdodCB0byBtYWtlIGEgUmVjdCBmb3IgdGhlIEFuaW1hbEFyZWFcbiAgICAgICAgdGhpcy5ib3VuZHMgPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5ib3VuZHMud2lkdGggPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5zaXplLndpZHRoO1xuICAgICAgICB0aGlzLmJvdW5kcy5oZWlnaHQgPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5zaXplLmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3VuZHMuYm90dG9tID0gdGhpcy5ib3VuZHMudG9wICsgdGhpcy5ib3VuZHMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdW5kcy5yaWdodCA9IHRoaXMuYm91bmRzLmxlZnQgKyB0aGlzLmJvdW5kcy53aWR0aDtcblxuICAgICAgICAvLyBnZXQgYm90dG9tIGFuZCByaWdodCBmcm9tIENoYXJhY3RlciBmcm9tIGl0cyBJbWFnZVxuICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5vYmouaW1hZ2U7XG5cbiAgICAgICAgLy9GSU5EIFBMQVlFUiAtIEtMVURHRSwgQlVUIFdJTEwgV09SSyBJRiBQbGF5ZXIgY3JlYXRlZCBCRUZPUkUgVFJVTVBcbiAgICAgICAgLy9LTFVER0VcbiAgICAgICAgLy9UT0RPOyB0aGlzLmdhbWUuY2hhcmFjdGVyQXJyYXlbaV1cblxuICAgIH1cblxuIFx0LyoqIFxuIFx0ICogQG1ldGhvZCBzbGV3IFxuIFx0ICogTW92ZSBvYmplY3Qgc2xpZ2h0bHkgdXAgZm9yIGR1cmF0aW9uIG9mIHNwYWNlIGJhciBkb3duXG4gICAgICogQ2FsbGJhY2sgZm9yIGtleWRvd24gYWRkRXZlbnRMaXN0ZW5lclxuICAgICAqIEBwYXJhbSBFdmVudCBlIHRoZSBrZXlkb3duIGV2ZW50XG4gICAgICovXG4gXHRzbGV3IChlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICB0aGlzLmtpY2soZSk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL3ByZXZlbnQgc2Nyb2xsXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQrKztcbiAgICAgICAgICAgICAgICB0aGlzLnRpY2tlciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdERpciA9IC0xO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy9wcmV2ZW50IHNjcm9sbFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkKys7XG4gICAgICAgICAgICAgICAgdGhpcy50aWNrZXIgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3REaXIgPSAxO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy9wcmV2ZW50IHNjcm9sbFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuIFx0fVxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgdXBkYXRlU2xld1xuICAgICAqIEBkZXNjcmlwdGlvbiBwcm92aWRlIHNpbXBsZSBlYXNpbmcgbW90aW9uLCBhbHNvLCBib3VuY2UgXG4gICAgICogb2ZmIHdhbGxzLlxuICAgICAqL1xuICAgIHVwZGF0ZVNsZXcgKCkge1xuICAgICAgICB0aGlzLnRpY2tlcisrO1xuICAgICAgICBpZiAodGhpcy5zcGVlZCA+IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpY2tlciA+IDEwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCAvPSAyO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCArPSAodGhpcy5sYXN0RGlyICogdGhpcy5zcGVlZCk7XG5cbiAgICAgICAgLy9jaGVjayBib3VuZHNcbiAgICAgICAgaWYgKHRoaXMuYm91bmRzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIHcgPSB0aGlzLmltYWdlLmRhdGEud2lkdGg7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPCB0aGlzLmJvdW5kcy5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdERpciA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPSB0aGlzLmJvdW5kcy5sZWZ0ICsgKHRoaXMuc3BlZWQgKiAxLjUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vYmoucG9zaXRpb24ubGVmdCA+IHRoaXMuYm91bmRzLnJpZ2h0IC0gdykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3REaXIgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCA9IHRoaXMuYm91bmRzLnJpZ2h0IC0gdyAtICh0aGlzLnNwZWVkICogMS41KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogQG1ldGhvZCBraWNrXG4gICAgICogQGRlc2NyaXB0aW9uIGlmIGZvb3QgaXMgbmVhciBUcnVtcCwga2ljayBoaW0gaW50byB0aGUgQW5pbWFsXG4gICAgICovXG4gICAga2ljayAoZSkge1xuICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPSB0aGlzLmluS2ljaztcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogQG1ldGhvZCB1bmtpY2tcbiAgICAgKiBAZGVzY3JpcHRpb24gc2V0IHBvc2l0aW9uIG9mIFBsYXllciBiYWNrIHRvIG9yaWdpbmFsXG4gICAgICovXG4gICAgdW5raWNrIChlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPSB0aGlzLnVuS2ljaztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuIFx0dGltZVN0YW1wUmFuZG9tICgpIHtcbiBcdFx0dmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcbiAgICAgICAgfVxuXHRcdHZhciBudW0gPSAneHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgdmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkqMTApJTEwIHwgMDtcbiAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQvMTApO1xuICAgICAgICAgICAgcmV0dXJuIChjPT0neCcgPyByIDogKHImMHgzfDB4OCkpLnRvU3RyaW5nKDEwKTtcbiAgICAgICAgfSk7XG4gICAgICByZXR1cm4gbnVtIC8gMTAwMDA7XG4gXHR9XG5cbiBcdC8qKlxuXHQgKiBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChleGNsdXNpdmUpXG5cdCAqIEBsaW5rIFxuXHQgKi9cblx0Z2V0UmFuZG9tKG1pbiwgbWF4KSB7XG4gICAgXHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcblx0fVxuXG5cbiBcdC8qKiBcbiBcdCAqIEBtZXRob2QgdXBkYXRlUmFuZG9tV2Fsa1xuIFx0ICogQGRlc2NyaXB0aW9uIGdlbmVyYXRlIHJhbmRvbSB3YWxrLCB3aXRoIG9uZSBwcmVmZXJyZWQgZGlyZWN0aW9uLCBcbiBcdCAqIHVzZWQgYnkgQW5pbWFsc1xuIFx0ICovXG4gXHR1cGRhdGVSYW5kb21XYWxrICgpIHtcbiBcdFx0dGhpcy5jb3VudGVyKys7XG4gXHRcdHRoaXMuZGVsYXlDb3VudGVyKys7XG4gXHRcdGlmICh0aGlzLmRlbGF5Q291bnRlciA8IHRoaXMuZGVsYXkpIHtcbiBcdFx0XHQvL2NvbnNvbGUubG9nKCdkZWxheUNvdW50ZXI6JyArIHRoaXMuZGVsYXlDb3VudGVyICsgJyBNQVg6JyArIHRoaXMuTUFYX0RFTEFZKTtcbiBcdFx0XHRyZXR1cm47XG4gXHRcdH1cbiBcdFx0c3dpdGNoICh0aGlzLmRpcmVjdGlvbikge1xuIFx0XHRcdGNhc2UgJ3RvcCc6XG4gXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi50b3AgLT0gKHRoaXMuc3BlZWQgKyAoMC4xICogdGhpcy5nZXRSYW5kb20oMSwgdGhpcy5zcGVlZCkpKTtcbiBcdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKz0gMTAgKiAodGhpcy5nZXRSYW5kb20oLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpKTtcbiBcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdGNhc2UgJ2xlZnQnOlxuIFx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24ubGVmdCAtPSAodGhpcy5zcGVlZCArICgwLjEgKiB0aGlzLmdldFJhbmRvbSgxLCB0aGlzLnNwZWVkKSkpO1xuIFx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24udG9wICs9ICAxMCAqKHRoaXMuZ2V0UmFuZG9tKC10aGlzLnNwZWVkLCB0aGlzLnNwZWVkKSk7XG4gXHRcdFx0XHRicmVhaztcbiBcdFx0XHRjYXNlICdib3R0b20nOlxuICBcdFx0XHRcdGlmICh0aGlzLmNvdW50ZXIgPiB0aGlzLk1BWCkge1xuICBcdFx0XHRcdFx0dGhpcy5NQVggPSBwYXJzZUludCg0LCAzMCk7XG4gXHRcdFx0XHRcdHRoaXMubmV3TGVmdCA9ICh0aGlzLmdldFJhbmRvbSgtdGhpcy5zcGVlZCwgdGhpcy5zcGVlZCkpO1xuIFx0XHRcdFx0XHR0aGlzLmNvdW50ZXIgPSAwO1xuIFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXIgPiB0aGlzLk1BWCAvIDIpIHtcbiBcdFx0XHRcdFx0dGhpcy5zcGVlZCArPSB0aGlzLnRpbWVTdGFtcFJhbmRvbSgpIC8gNTA7XG4gXHRcdFx0XHR9XG5cdFx0XHQgXHR0aGlzLm9iai5wb3NpdGlvbi50b3AgKz0gdGhpcy5zcGVlZDtcbiBcdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKz0gdGhpcy5uZXdMZWZ0O1xuIFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0Y2FzZSAncmlnaHQnOlxuIFx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24ubGVmdCArPSAodGhpcy5zcGVlZCArICgwLjEgKiB0aGlzLmdldFJhbmRvbSgxLCB0aGlzLnNwZWVkKSkpO1xuIFx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24udG9wICs9IDEwICogKHRoaXMuZ2V0UmFuZG9tKC10aGlzLnNwZWVkLCB0aGlzLnNwZWVkKSk7XG4gXHRcdFx0XHRicmVhaztcbiBcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0Y29uc29sZS5lcnJvcignTW92ZXIuc2V0UHJlZkRpcmVjdGlvbjogaW52YWxpZCBkaXJlY3Rpb246JyArIHRoaXMuZGlyZWN0aW9uKTtcbiBcdFx0XHRcdGJyZWFrO1xuIFx0XHR9XG4gICAgfVxuXG5cbiAgICAvKiogXG4gICAgICogQG1ldGhvZCBwaW5nUG9uZ1xuICAgICAqIEBkZXNjcmlwdGlvbiBtb3ZlIGluIGEgcGluZy1wb25nIHN0eWxlLiBUaGlzIGlzIHNwZWNpZmljIHRvIHRoZSBnYW1lLlxuICAgICAqIDEuIGNvbGxpc2lvbiBzdGFydHMgdGhlIGNoYXJhY3RlciBtb3ZpbmdcbiAgICAgKiAyLiB0aGV5IGJvdW5jZSBvbiBhbGwgd2FsbHMgRVhDRVBUIHRoZSBvbmUgdGhleSB3ZXJlIGNsb3Nlc3QgdG8gd2hlbiBjb2xsaWRlIHdpdGhcbiAgICAgKiAzLiB3aGVuIHRoZXkgaW50ZXJzZWN0IHRoYXQgd2FsbCwgdGhleSBzdG9wXG4gICAgICovXG4gICAgcGluZ1BvbmcgKGNvbGxpZGVyKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHVwZGF0ZVBpbmdQb25nICgpIHtcblxuICAgIH1cblxuIH0gLy8gZW5kIG9mIGNsYXNzXG4iLCIvKiogXG4gKiBQbGF5ZXIuanNcbiAqIFVzZXItY29udHJvbGxlZCBDaGFyYWN0ZXJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5cbiAvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcbiBpbXBvcnQgTW92ZXIgZnJvbSAnLi9Nb3Zlci5qcyc7XG4gaW1wb3J0IENvbGxpZGVyIGZyb20gJy4vQ29sbGlkZXIuanMnO1xuIC8vIEVORCBBRERFRCBXRUVLIDExPDw8PDw8PDw8PDw8PFxuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcblxuIFx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcbiBcdFx0dGhpcy5tb3Zlci5pbml0U2xldygpO1xuICBcdFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFx0XHRcbiBcdH1cblxuICBcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIFx0dXBkYXRlICgpIHtcbiBcdFx0dGhpcy5tb3Zlci51cGRhdGVTbGV3KCk7XG4gXHR9XG4gXHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cblxuIH0iLCIvKiogXG4gKiBQbGF5ZXJBcmVhLmpzXG4gKiBUaGUgcmVnaW9uIHdoZXJlIHRoZSBQbGF5ZXIgY2FuIG1vdmUuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBBcmVhXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQXJlYSBleHRlbmRzIEFyZWEge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG4gXHR9XG5cbiB9IiwiLyoqIFxuICogU2NvcmUuanNcbiAqIERpc3BsYXkgdXNlciBzY29yZVxuICogQGluaGVyaXRzIER5bmFtaWNUZXh0LCBUZXh0LCBJbmZvLCBHYW1lUGllY2VcbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbmltcG9ydCBEeW5hbWljVGV4dCBmcm9tICcuL0R5bmFtaWNUZXh0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUgZXh0ZW5kcyBEeW5hbWljVGV4dCB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cdH1cbn0iLCIvKiogXG4gKiBTY3JlZW4uanNcbiAqIEdlbmVyaWMgU2NyZWVuIG9iamVjdFxuICogQGluaGVyaXRzIEdhbWVQaWVjZS5qc1xuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuIGltcG9ydCBJZGVudGl0eSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlbiBleHRlbmRzIEdhbWVQaWVjZSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTsgLy9pbml0ICdwYXJlbnQnIEdhbWVQaWVjZVxuXG4gXHRcdC8vIHNhdmUgYSByZWZlcmVuY2UgdG8gb3VyIHBhcmVudCBHYW1lIG9iamVjdFxuIFx0XHR0aGlzLmdhbWUgPSBjb25maWcuZ2FtZTtcblxuIFx0XHQvLyBTY3JlZW5zIGFyZSBkZWZpbmVkIGluIEhUTUwsIHNvIHNhdmUgYSByZWZlcmVuY2UgdG8gb3VyIERPTSBpZFxuIFx0XHR0aGlzLmRvbUlkID0gY29uZmlnLmlkO1xuXG4gXHRcdC8vIHNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIERPTSBlbGVtZW50IHdlJ3JlIGNvbm5lY3RlZCB0b1xuIFx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZG9tSWQpO1xuXG4gXHRcdC8vIGluc2VydCB0aGUgY29weXJpZ2h0IGluZm8gZnJvbSB0aGUgbWFpbiBHYW1lIG9iamVjdFxuIFx0XHR0aGlzLmFkZFdhcm5pbmcoKTtcbiBcdH1cblxuIFx0Ly8gbG9hZCBhIGJhY2tncm91bmQgaW1hZ2UgaW50byB0aGUgU2NyZWVuXG4gXHRsb2FkQmFja2dyb3VuZCAocGF0aCwgY2FsbGJhY2spIHtcbiBcdFx0Y29uc29sZS5sb2coXCJsb2FkaW5nOlwiICsgdGhpcy5kb21JZCk7XG4gXHRcdHRoaXMuYmFja2dyb3VuZEltYWdlID0gbmV3IFN0YXRpY0ltYWdlKFxuIFx0XHRcdHtcbiBcdFx0XHRcdG5hbWU6IHRoaXMubmFtZSArICctaW1hZ2UnLFxuIFx0XHRcdFx0ZG9tSWQ6IHRoaXMuaWQgKyAnLWltYWdlJyxcbiBcdFx0XHRcdHBhdGg6IHBhdGgsXG4gXHRcdFx0XHRjYWxsYmFjazogY2FsbGJhY2tcbiBcdFx0XHR9XG4gXHRcdCk7XG4gXHRcdHRoaXMuYmFja2dyb3VuZEltYWdlLmxvYWRCYWNrZ3JvdW5kSW1hZ2UodGhpcy5kb20sIHBhdGgsIGNhbGxiYWNrKTtcbiBcdH1cblxuIFx0Ly8gc2hvdyBhbmQgaGlkZSByZWdpb25zIG9mIHRoZSBTY3JlZW5cbiBcdHNob3dTY3JlZW4gKCkge1xuIFx0XHRjb25zb2xlLmxvZyhcInNob3dpbmc6XCIgKyB0aGlzLmRvbUlkKTtcbiBcdFx0dGhpcy5kb20uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiBcdH1cblxuIFx0aGlkZVNjcmVlbiAoKSB7XG4gXHRcdGNvbnNvbGUubG9nKFwiaGlkaW5nOlwiICsgdGhpcy5kb21JZCk7XG4gXHRcdHRoaXMuZG9tLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiBcdH1cblxuIFx0c2hvd0hlYWRlciAoKSB7XG4gXHRcdHRoaXMuZG9tLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuIFx0fVxuXG4gXHRoaWRlSGVhZGVyICgpIHtcblx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gXHR9XG5cbiBcdHNob3dGb290ZXIgKCkge1xuXHRcdHRoaXMuZG9tLnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gXHR9XG5cbiBcdGhpZGVGb290ZXIgKCkge1xuXHRcdHRoaXMuZG9tLnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiBcdH1cblxuIFx0YWRkV2FybmluZyAoKSB7XG4gXHRcdHRoaXMuZG9tLnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKS5pbm5lckhUTUwgPSB0aGlzLmdhbWUud2FybmluZztcbiBcdH1cblxuIH07IiwiLyoqIFxuICogU3RhcnRTY3JlZW4uanNcbiAqIE9wZW5pbmcgc2NyZWVuIGZvciBnYW1lLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgU2NyZWVuXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJztcblxuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuaW1wb3J0IElkZW50aXR5IGZyb20gJy4vSWRlbnRpdHkuanMnO1xuaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi9CYWNrZ3JvdW5kLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXG5cdFx0Ly8gdGhpcy5kb20gZGVmaW5lZCBpbiBTY3JlZW5cblxuXHRcdC8vIExvYWQgU3RhcnRTY3JlZW4gc3ViLW9iamVjdHNcblx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kKCdpbWcvc2NyZWVucy9zdGFydC1zY3JlZW4ucG5nJyk7XG5cblx0XHQvLyBsb2FkIGlkZW50aXR5IGltYWdlXG5cdFx0dGhpcy5sb2FkSWRlbnRpdHkoKTtcblxuXHRcdC8vIGxvYWQgaW5zdHJ1Y3Rpb25zXG5cdFx0dGhpcy5sb2FkSW5zdHJ1Y3Rpb25zKCk7XG5cblx0XHQvLyBNYWtlIHRoZSBzdGFydCBidXR0b24gb3BlbiB0aGUgbWFpbiBnYW1lIHNjcmVlblxuXHRcdHRoaXMuYmluZFN0YXJ0KCk7XG5cdH1cblxuXHRsb2FkSWRlbnRpdHkgKCkge1xuXHRcdHRoaXMuaWRlbnRpdHkgPSBuZXcgSWRlbnRpdHkoXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdpZGVudGl0eScsIFxuXHRcdFx0XHRkb21JZDogJ3N0YXJ0LXNjcmVlbi1pZGVudGl0eScsXG5cdFx0XHRcdHBhdGg6ICdpbWcvaWRlbnRpdHkvbG9nby5wbmcnLCBcblx0XHRcdFx0YXV0aG9yOiAncGV0ZSBtYXJraWV3aWN6JywgXG5cdFx0XHRcdHNvdXJjZTogJ3BseW9qdW1wJ1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHQvLyBzZXQgcG9zaXRpb24gb2YgSWRlbnRpdHlcblx0XHR0aGlzLmlkZW50aXR5LnNldERPTVBvc2l0aW9uIChcblx0XHRcdHtcblx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRsZWZ0OiAwXG5cdFx0XHR9XG5cdFx0KTtcblxuXHR9XG5cblx0bG9hZEluc3RydWN0aW9ucyAoKSB7XG5cblx0XHR0aGlzLmluc3RydWN0aW9ucyA9IG5ldyBTdGF0aWNUZXh0KFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnZ2FtZSBpbnN0cnVjdGlvbnMnLFxuXHRcdFx0XHRkb21JZDogJ2luc3RydWN0aW9ucycsXG5cdFx0XHRcdHRleHQ6ICdQbGF5IHRvIHdpbi4gVGhhdCBpcyBhbGwgVHJ1bXAgY2FyZXMgYWJvdXQsIGFuZCBzbyBzaG91bGQgeW91Lidcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5pbnN0cnVjdGlvbnMuc2V0RE9NUG9zaXRpb24oXG5cdFx0XHR7XG5cdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0bGVmdDogMCxcblx0XHRcdH1cblx0XHQpO1xuXG5cdH1cblxuXHRiaW5kU3RhcnQgKCkge1xuXHRcdGNvbnNvbGUubG9nKFwiaW4gYmluZFN0YXJ0LCB0aGlzLmdhbWU6XCIgKyB0aGlzLmdhbWUpXG5cdFx0Ly8gd2UgdXNlIGJpbmQoKSB0byBsaW5rIHRoZSBmdW5jdGlvbiBiZWxvdyB0byBTdGFydFNjcmVlbiAob3RoZXJ3aXNlLCBpdCB0aGlua3MgaXQgaXMgaW5zaWRlIHdpbmRvdylcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQtc2NyZWVuLXBsYXktYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBcblx0XHRcdGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdC8vYWxlcnQoXCJpbiBoYW5kbGVyLCBnYW1lOlwiICsgdGhpcy5nYW1lKVxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHRoaXMuZ2FtZS5zdGFydEdhbWUoKTtcblxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxufSIsIi8qKiBcbiAqIFN0YXRpY0ltYWdlLmpzXG4gKiBJbWFnZS1zdHlsZSBJbmZvcm1hdGlvbiB0aGF0IGNhbm5vdCBiZSBjaGFuZ2VkIG9uY2UgdGhlIGdhbWUgaXMgbG9hZGVkXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGljSW1hZ2UgZXh0ZW5kcyBJbWFnZSB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cblx0XHR0aGlzLnN0YXRpYyA9IHRydWU7XG5cdH1cblxufVxuIiwiLyoqIFxuICogU3RhdGljVGV4dC5qc1xuICogVGV4dCB0aGF0IGNhbm5vdCBiZSBjaGFuZ2VkIGFmdGVyIGxvYWRlZCBieSB0aGUgZ2FtZVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aWNUZXh0IGV4dGVuZHMgVGV4dCB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cblx0XHR0aGlzLnN0YXRpYyA9IHRydWU7XG5cblx0fVxuXG59XG4iLCIvKiogXG4gKiBUZXh0LmpzXG4gKiBDcmVhdGVzIGEgdGV4dC10eXBlIEluZm8gb2JqZWN0XG4gKiBAaW5oZXJpdHMgSW5mbywgR2FtZVBpZWNlXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIEluZm8ge1xuXG4gXHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTtcblxuIFx0XHQvLyBzZXQgdGhlIHRleHRcbiBcdFx0dGhpcy5zZXRUZXh0KGNvbmZpZy50ZXh0KTtcblxuIFx0XHQvLyBzZXQgdGhlIERPTUlkXG4gXHRcdHRoaXMuYWRkVG9ET00oY29uZmlnLmRvbUlkKTtcbiBcdH1cblxuIFx0c2V0VGV4dCAodHh0KSB7XG4gXHRcdHRoaXMudGV4dCA9IHR4dDtcbiBcdH1cblxuIFx0YWRkVG9ET00gKGRvbUlkKSB7XG5cbiBcdFx0dGhpcy5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiBcdFx0dGhpcy5kb20uaWQgPSBuYW1lICsgJy1UZXh0JztcbiBcdFx0dGhpcy5kb20uaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xuXG4gXHRcdC8vIGNvbnRhaW5lclxuIFx0XHR2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9tSWQpO1xuXG4gXHRcdC8vIGFkZCB0byB0aGUgRE9NXG4gXHRcdGNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGhpcy5kb20sIGNvbnRhaW5lci5jaGlsZE5vZGVzWzBdKTtcblxuXHR9XG5cbiB9IiwiLyoqIFxuICogVGlnZXIuanNcbiAqIEEgVGlnZXIsIHdobyB0cmllcyB0byBnZXQgdGhlIFBsYXllci5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG4gaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBUaWdlciBleHRlbmRzIEFuaW1hbCB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG4gXHR9XG4gfSIsIi8qKiBcbiAqIFRydW1wLmpzXG4gKiBUaGUgYmFsbC1saWtlIENoYXJhY3RlciB5b3Uga2ljayBpbnRvIEFuaW1hbHNcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5cbiAvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcbiBpbXBvcnQgTW92ZXIgZnJvbSAnLi9Nb3Zlci5qcyc7XG4gaW1wb3J0IENvbGxpZGVyIGZyb20gJy4vQ29sbGlkZXIuanMnO1xuIC8vIEVORCBBRERFRCBXRUVLIDExPDw8PDw8PDw8PDw8PFxuIFxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRydW1wIGV4dGVuZHMgQ2hhcmFjdGVyIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcblxuIFx0fVxuXG4gXHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcbiBcdHVwZGF0ZSAoKSB7XG4gXHRcdHRoaXMubW92ZXIucGluZ1BvbmcoKTtcbiBcdH1cbiBcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcblxuIH0iLCIvKiogXG4gKiBDcmVhdGUgdGhlIGdhbWUuIEltcG9ydCB0aGUgcHJpbWFyeSBjbGFzc2VzLCBhbmQgJ2NvbXBvc2l0ZScgXG4gKiB0aGUgb3ZlcmFsbCBHYW1lIG9iamVjdCBvdXQgb2YgaW5zdGFuY2VzIG9mIHRoZSBjbGFzc2VzLlxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuLy9UaGUgZW50aXJlIGdhbWVcbmltcG9ydCBHYW1lIGZyb20gJy4vR2FtZS5qcyc7XG5cbi8vU2NyZWVuIGluaGVyaXRhbmNlXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcbmltcG9ydCBTdGFydFNjcmVlbiBmcm9tICcuL1N0YXJ0U2NyZWVuLmpzJztcbmltcG9ydCBHYW1lU2NyZWVuIGZyb20gJy4vR2FtZVNjcmVlbi5qcyc7XG5pbXBvcnQgRW5kU2NyZWVuIGZyb20gJy4vRW5kU2NyZWVuLmpzJztcblxuLy9JbmZvIGluaGVyaXRhbmNlXG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9JZGVudGl0eS5qcyc7XG5pbXBvcnQgSW5zdHJ1Y3Rpb25zIGZyb20gJy4vSW5zdHJ1Y3Rpb25zLmpzJztcbmltcG9ydCBEeW5hbWljVGV4dCBmcm9tICcuL0R5bmFtaWNUZXh0LmpzJztcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlLmpzJztcblxuLy9DaGFyYWN0ZXIgaW5oZXJpdGFuY2VcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuaW1wb3J0IFRydW1wIGZyb20gJy4vVHJ1bXAuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcyc7XG5pbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcbmltcG9ydCBMaW9uIGZyb20gJy4vTGlvbi5qcyc7XG5pbXBvcnQgVGlnZXIgZnJvbSAnLi9UaWdlci5qcyc7XG5pbXBvcnQgQmVhciBmcm9tICcuL0JlYXIuanMnO1xuaW1wb3J0IEdvcmlsbGEgZnJvbSAnLi9Hb3JpbGxhLmpzJztcbmltcG9ydCBIZWFsdGggZnJvbSAnLi9IZWFsdGguanMnO1xuXG4vL0FyZWEgaW5oZXJpdGFuY2UuXG5pbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuaW1wb3J0IENhZ2UgZnJvbSAnLi9DYWdlLmpzJztcbmltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4vQW5pbWFsQXJlYS5qcyc7XG5pbXBvcnQgUGxheWVyQXJlYSBmcm9tICcuL1BsYXllckFyZWEuanMnO1xuXG4vL1Rlc3QgZmlsZSAodmVyeSBzaW1wbGUgdGVzdHJ1bm5lcilcbmltcG9ydCBUZXN0cyBmcm9tICcuLi8uLi90ZXN0cy9UZXN0cy5qcyc7XG5cbi8qKiBcbiAqIFNldCB1cCB0ZXN0cy5cbiAqL1xudmFyIG15VGVzdHMgPSBuZXcgVGVzdHMoKTtcblxuLyoqXG4gKiBTZXQgdXAgdGhlIEdhbWVcbiAqL1xudmFyIG15R2FtZSA9IG5ldyBHYW1lKHtuYW1lOiBcIlpvb0tpbGxTb2NjZXJcIn0pO1xuXG4vKiogXG4gKiBFWFBPUlQgVE8gV0VCIENPTlNPTEVcbiAqIFRvIG1ha2Ugc29tZXRoaW5nIHZpc2libGUgaW4gV2ViIGNvbnNvbGUgZm9yIGRlYnVnZ2ludCwgYXR0YWNoIHRvIHdpbmRvdyBvYmplY3RcbiAqIE5PVEU6IFByb2Zlc3Npb25hbCBjb2RlIHVzZXMgc3BlY2lhbGl6ZWQgdGVzdGluZyBtb2R1bGVzIGxpa2UgTW9jaGEsIEthcm1hLCBhbmQgXG4gKiBzaW1pbGFyIHRlc3RpbmcgbGlicmFyaWVzLlxuICovXG5cbi8vIHdlIGNhbiBydW4gdGhpcyB0ZXN0IG1hbnVhbGx5IHdpdGggdGVzdHMucnVuKCk7XG53aW5kb3cudGVzdHMgPSBteVRlc3RzO1xuXG4vLyBtYWtlIHRoZSBnYW1lIG9iamVjdCB2aXNpYmxlIHNvIHdlIGNhbiBpbnNwZWN0IGl0Llxud2luZG93LmdhbWUgPSBteUdhbWU7XG5cbmNvbnNvbGUubG9nKCdaT09LSUxMU09DQ0VSIEdhbWUgaW5pdGlhbGl6ZWQuIEFjY2VzcyBnYW1lIHZpYSBcImdhbWVcIi4gVXNlIFRlc3RzLnJ1bigpIHRvIHRlc3QuJylcblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuLi9tb2R1bGVzL2pzL0dhbWVQaWVjZS5qcyc7XG5cbi8vVGhlIGVudGlyZSBnYW1lXG5pbXBvcnQgR2FtZSBmcm9tICcuLi9tb2R1bGVzL2pzL0dhbWUuanMnO1xuXG4vL1NjcmVlbiBpbmhlcml0YW5jZVxuaW1wb3J0IFNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL1NjcmVlbi5qcyc7XG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSAnLi4vbW9kdWxlcy9qcy9TdGFydFNjcmVlbi5qcyc7XG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL0dhbWVTY3JlZW4uanMnO1xuaW1wb3J0IEVuZFNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL0VuZFNjcmVlbi5qcyc7XG5cbi8vSW5mbyBpbmhlcml0YW5jZVxuaW1wb3J0IEluZm8gZnJvbSAnLi4vbW9kdWxlcy9qcy9JbmZvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4uL21vZHVsZXMvanMvVGV4dC5qcyc7XG5pbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuLi9tb2R1bGVzL2pzL1N0YXRpY1RleHQuanMnO1xuaW1wb3J0IElkZW50aXR5IGZyb20gJy4uL21vZHVsZXMvanMvSWRlbnRpdHkuanMnO1xuaW1wb3J0IEluc3RydWN0aW9ucyBmcm9tICcuLi9tb2R1bGVzL2pzL0luc3RydWN0aW9ucy5qcyc7XG5pbXBvcnQgRHluYW1pY1RleHQgZnJvbSAnLi4vbW9kdWxlcy9qcy9EeW5hbWljVGV4dC5qcyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi4vbW9kdWxlcy9qcy9TY29yZS5qcyc7XG5cbi8vQ2hhcmFjdGVyIGluaGVyaXRhbmNlXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4uL21vZHVsZXMvanMvQ2hhcmFjdGVyLmpzJztcbmltcG9ydCBUcnVtcCBmcm9tICcuLi9tb2R1bGVzL2pzL1RydW1wLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vbW9kdWxlcy9qcy9QbGF5ZXIuanMnO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuLi9tb2R1bGVzL2pzL0FuaW1hbC5qcyc7XG5pbXBvcnQgTGlvbiBmcm9tICcuLi9tb2R1bGVzL2pzL0xpb24uanMnO1xuaW1wb3J0IFRpZ2VyIGZyb20gJy4uL21vZHVsZXMvanMvVGlnZXIuanMnO1xuaW1wb3J0IEJlYXIgZnJvbSAnLi4vbW9kdWxlcy9qcy9CZWFyLmpzJztcbmltcG9ydCBHb3JpbGxhIGZyb20gJy4uL21vZHVsZXMvanMvR29yaWxsYS5qcyc7XG5pbXBvcnQgSGVhbHRoIGZyb20gJy4uL21vZHVsZXMvanMvSGVhbHRoLmpzJztcblxuLy9BcmVhIGluaGVyaXRhbmNlLlxuaW1wb3J0IEFyZWEgZnJvbSAnLi4vbW9kdWxlcy9qcy9BcmVhLmpzJztcbmltcG9ydCBDYWdlIGZyb20gJy4uL21vZHVsZXMvanMvQ2FnZS5qcyc7XG5pbXBvcnQgQW5pbWFsQXJlYSBmcm9tICcuLi9tb2R1bGVzL2pzL0FuaW1hbEFyZWEuanMnO1xuaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi4vbW9kdWxlcy9qcy9QbGF5ZXJBcmVhLmpzJztcblxuLyoqIFxuICogVEVTVEJFRCAtIFRlc3QgYWxsIG91ciBvYmplY3RzLiBUaGlzIGlzIGEgdmVyeSBiYXNpYyB0ZXN0aW5nIHN5c3RlbS4gXG4gKiBOT1RFOiBQcm9mZXNzaW9uYWwgY29kZSB1c2VzIHRlc3RpbmcgbGlicmFyaWVzIGxpa2UgS2FybWEgYW5kIE1vY2hhLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0cyB7XG5cblx0Y29uc3RydWN0b3IgKCkge1xuXHR9XG5cblx0Ly8gQmVjYXVzZSB3ZSBtYWtlIHRoZXNlIG9iamVjdHMgd2l0aCAndmFyJyB0aGV5IGFyZSBzY29wZWQgdG8gdGhlIHJ1bigpIGZ1bmN0aW9uLlxuXHRydW4gKCkge1xuXG5cdFx0dmFyIGNvbmZpZyA9IHtuYW1lOidGb3Jlc3QgVHJ1bXAgb3IgRG9uYWxkIEd1bXAgcnVseid9O1xuXG5cdFx0Ly8gTWFrZSBzb21lIHRlc3QgZ2FtZSBvYmplY3RzXG5cdFx0dmFyIGdhbWUgPSBuZXcgR2FtZShjb25maWcpO1xuXHRcdGNvbnNvbGUubG9nKGdhbWUuZ2V0TmFtZSgpKTtcblxuXHRcdC8vdGVzdCBHYW1lIE9iamVjdFxuXHRcdHZhciBteUdhbWUgPSBuZXcgR2FtZSh7bmFtZTogXCJab29LaWxsU29jY2VyXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUdhbWUuZ2V0TmFtZSgpKTtcblxuXHRcdC8vb3RoZXIgb2JqZWN0c1xuXHRcdHZhciBteVNjcmVlbiA9IG5ldyBTY3JlZW4oe25hbWU6IFwiT3BlbmluZyBTY3JlZW5cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15U2NyZWVuLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlTdGFydFNjcmVlbiA9IG5ldyBTdGFydFNjcmVlbih7bmFtZTogXCJTdGFydCBTY3JlZW5cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15U3RhcnRTY3JlZW4uZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUdhbWVTY3JlZW4gPSBuZXcgR2FtZVNjcmVlbih7bmFtZTogXCJHYW1lIFNjcmVlblwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlHYW1lU2NyZWVuLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlFbmRTY3JlZW4gPSBuZXcgRW5kU2NyZWVuKHtuYW1lOiBcIkVuZCBTY3JlZW5cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15RW5kU2NyZWVuLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlJbmZvID0gbmV3IEluZm8oe25hbWU6IFwiR2VuZXJpYyBJbmZvcm1hdGlvblwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlJbmZvLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlUZXh0ID0gbmV3IFRleHQoe25hbWU6IFwiR2VuZXJpYyBUZXh0IE9iamVjdFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlUZXh0LmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlTdGF0aWNUZXh0ID0gbmV3IFN0YXRpY1RleHQoe25hbWU6IFwiR2VuZXJpYyBTdGF0aWMgVGV4dCBPYmplY3RcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15U3RhdGljVGV4dC5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15SWRlbnRpdHkgPSBuZXcgSWRlbnRpdHkoe25hbWU6IFwiR2VuZXJpYyBJZGVudGl0eSBPYmplY3RcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15SWRlbnRpdHkuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUluc3RydWN0aW9ucyA9IG5ldyBJbnN0cnVjdGlvbnMoe25hbWU6IFwiR2VuZXJpYyBJbnN0cnVjdGlvbnMgT2JqZWN0XCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUluc3RydWN0aW9ucy5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15RHluYW1pY1RleHQgPSBuZXcgRHluYW1pY1RleHQoe25hbWU6IFwiR2VuZXJpYyBEeW5hbWljIFRleHQgT2JqZWN0XCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUR5bmFtaWNUZXh0LmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlTY29yZSA9IG5ldyBTY29yZSh7bmFtZTogXCJzY29yZXMuLi5cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15U2NvcmUuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUNoYXJhY3RlciA9IG5ldyBDaGFyYWN0ZXIoe25hbWU6IFwiR2VuZXJpYyBDaGFyYWN0ZXJcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15Q2hhcmFjdGVyLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlUcnVtcCA9IG5ldyBUcnVtcCh7bmFtZTogXCJEb25hbGQgVHJ1bXBcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15VHJ1bXAuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVBsYXllciA9IG5ldyBQbGF5ZXIoe25hbWU6IFwiRW5kIFVzZXJcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15UGxheWVyLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlBbmltYWwgPSBuZXcgQW5pbWFsKHtuYW1lOiBcIkdlbmVyaWMgQW5pbWFsXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUFuaW1hbC5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15TGlvbiA9IG5ldyBMaW9uKHtuYW1lOiBcIkNvd2FyZGx5IHRoZSBMaW9uXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUxpb24uZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVRpZ2VyID0gbmV3IFRpZ2VyKHtuYW1lOiBcIkNob21wZXIgdGhlIFRpZ2VyXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVRpZ2VyLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlCZWFyID0gbmV3IEJlYXIoe25hbWU6IFwiTWF1bGVyIHRoZSBCZWFyXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUJlYXIuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUdvcmlsbGEgPSBuZXcgR29yaWxsYSh7IG5hbWU6IFwiU3B1bmt5IHRoZSBHb3JpbGxhXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUdvcmlsbGEuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUhlYWx0aCA9IG5ldyBIZWFsdGgoe25hbWU6IFwiT25lIEhlYWx0aCBLaXRcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15SGVhbHRoLmdldE5hbWUoKSk7XG5cblx0XHQvL0FyZWEgaW5oZXJpdGFuY2UuXG5cdFx0dmFyIG15QXJlYSA9IG5ldyBBcmVhKHtuYW1lOiBcIkdlbmVyaWMgQXJlYVwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlBcmVhLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlDYWdlID0gbmV3IENhZ2Uoe25hbWU6IFwiR2VuZXJpYyBBcmVhXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUNhZ2UuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUFuaW1hbEFyZWEgPSBuZXcgQW5pbWFsQXJlYSh7bmFtZTogXCJBbmltYWxBcmVhXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUFuaW1hbEFyZWEuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVBsYXllckFyZWEgPSBuZXcgUGxheWVyQXJlYSh7bmFtZTogXCJQbGF5ZXJBcmVhXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVBsYXllckFyZWEuZ2V0TmFtZSgpKTtcblx0fVxufVxuIl19
