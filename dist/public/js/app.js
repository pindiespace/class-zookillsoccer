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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * @class Collider
 * @description detect collisions between specific objects in the 
 * game framework. It is NOT a general-purpose collision detector.
 */

var Collider = function () {
  function Collider(characterArray) {
    _classCallCheck(this, Collider);

    this.characterArray = characterArray;
    this.animalArray = []; //filled up in setUpCollisions
    this.setUpCollisions();
  }

  _createClass(Collider, [{
    key: 'setUpCollisions',
    value: function setUpCollisions() {
      for (var i = 0, len = this.characterArray.length; i < len; i++) {
        switch (this.characterArray[i].constructor.name) {
          case 'Lion':
          case 'Tier':
          case 'Bear':
          case 'Gorilla':
            this.animalArray.push(this.characterArray[i]);
            break;
          case 'Trump':
            this.trump = this.characterArray[i];
            break;
          case 'Player':
            this.player = this.characterArray[i];
            break;
          default:
            break;
        }
      }

      //cross-connect the impactors
      this.trump.player = this.player;
      this.trump.animals = this.animalArray;
      this.player.trump = this.trump;
    }
  }]);

  return Collider;
}();

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

var _Collider = require('./Collider.js');

var _Collider2 = _interopRequireDefault(_Collider);

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


// >>>>>>>>>>>ADDED IN WEEK 11


// END ADDED IN WEEK 11<<<<<<<<<<<<<<

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

			// >>>>>>>>>>>ADDED IN WEEK 11
			this.collder = new _Collider2.default(this.displayCharacters);
			// END ADDED IN WEEK 11<<<<<<<<<<<<<<

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

},{"./Animal.js":1,"./AnimalArea.js":2,"./Area.js":3,"./Bear.js":5,"./Cage.js":6,"./Character.js":7,"./Collider.js":8,"./DynamicText.js":9,"./EndScreen.js":10,"./GamePiece.js":12,"./GameScreen.js":13,"./Gorilla.js":14,"./Health.js":15,"./Identity.js":16,"./Image.js":17,"./Info.js":18,"./Instructions.js":19,"./Lion.js":20,"./Player.js":22,"./PlayerArea.js":23,"./Score.js":24,"./Screen.js":25,"./StartScreen.js":26,"./StaticText.js":28,"./Text.js":29,"./Tiger.js":30,"./Trump.js":31}],12:[function(require,module,exports){
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

        /** 
         * @method initPingPong
         * @description have a Trump init.
         * NOTE: collision potential added separately
         */

    }, {
        key: 'initPingPong',
        value: function initPingPong(prefSpeed, trump) {
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

            this.obj.speed = 0;
            this.obj.dx = 0;
            this.obj.dy = 0;
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
            //console.log('::::THIS TRUMP:::::' + this.obj.trump)
            this.obj.position.top = this.inKick;

            // see if we're close enough to kick in the y axis
            var trumpYDist = this.obj.position.top - this.obj.trump.image.data.width - this.obj.trump.position.top;
            //console.log('trumpYDist:' + trumpYDist)

            // If Player is close in Y, and inside X range, kick the Trump into AnimalArea
            if (trumpYDist < 10) {

                // start the Trump moving, speed
                this.obj.trump.speed = 5;

                // compute dx and dy for Trump
                var dist = (this.obj.position.left - this.obj.trump.position.left) / 50;
                if (Math.abs(dist) < 1.0) {
                    var dx = dist;
                    if (dx > 0 && dx < 0.7) {
                        this.obj.trump.dx = dx;
                        this.obj.trump.dy = 1.0 - dx;
                    } else if (dx < 0 && dx > -0.7) {
                        this.obj.trump.dx = dx;
                        this.obj.trump.dy = 1.0 + dx;
                    } else {
                        this.obj.trump.dx = 0;
                        this.obj.trump.dy = 0;
                    }
                }
            }
        } // end of function

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
        value: function pingPong() {
            //console.log('dx:' + this.obj.dx + ' dy:' + this.obj.dy);
            this.obj.position.left -= this.obj.speed * this.obj.dx;
            this.obj.position.top -= this.obj.speed * this.obj.dy;

            //TODO: check for collisions with AnimalArea and Animals.
            //Let bounce 1 time off of bottom, but stop the second time
        }
    }, {
        key: 'wasKicked',
        value: function wasKicked() {}
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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Trump).call(this, config));

    _this.mover.initPingPong(0, _this);

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQW5pbWFsQXJlYS5qcyIsIm1vZHVsZXMvanMvQXJlYS5qcyIsIm1vZHVsZXMvanMvQmFja2dyb3VuZC5qcyIsIm1vZHVsZXMvanMvQmVhci5qcyIsIm1vZHVsZXMvanMvQ2FnZS5qcyIsIm1vZHVsZXMvanMvQ2hhcmFjdGVyLmpzIiwibW9kdWxlcy9qcy9Db2xsaWRlci5qcyIsIm1vZHVsZXMvanMvRHluYW1pY1RleHQuanMiLCJtb2R1bGVzL2pzL0VuZFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvR2FtZS5qcyIsIm1vZHVsZXMvanMvR2FtZVBpZWNlLmpzIiwibW9kdWxlcy9qcy9HYW1lU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9Hb3JpbGxhLmpzIiwibW9kdWxlcy9qcy9IZWFsdGguanMiLCJtb2R1bGVzL2pzL0lkZW50aXR5LmpzIiwibW9kdWxlcy9qcy9JbWFnZS5qcyIsIm1vZHVsZXMvanMvSW5mby5qcyIsIm1vZHVsZXMvanMvSW5zdHJ1Y3Rpb25zLmpzIiwibW9kdWxlcy9qcy9MaW9uLmpzIiwibW9kdWxlcy9qcy9Nb3Zlci5qcyIsIm1vZHVsZXMvanMvUGxheWVyLmpzIiwibW9kdWxlcy9qcy9QbGF5ZXJBcmVhLmpzIiwibW9kdWxlcy9qcy9TY29yZS5qcyIsIm1vZHVsZXMvanMvU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9TdGFydFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvU3RhdGljSW1hZ2UuanMiLCJtb2R1bGVzL2pzL1N0YXRpY1RleHQuanMiLCJtb2R1bGVzL2pzL1RleHQuanMiLCJtb2R1bGVzL2pzL1RpZ2VyLmpzIiwibW9kdWxlcy9qcy9UcnVtcC5qcyIsIm1vZHVsZXMvanMvaW5kZXguanMiLCJ0ZXN0cy9UZXN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FDS0M7Ozs7QUFD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O0FBQ0EsV0FBUSxHQUFSLENBQVksT0FBTyxPQUFQLEVBQVo7O0FBRUEsT0FBSSxVQUFVLG9CQUFVLEVBQUMsTUFBTSxtQkFBUCxFQUFWLENBQWQ7QUFDQSxXQUFRLEdBQVIsQ0FBWSxRQUFRLE9BQVIsRUFBWjs7QUFFQSxPQUFJLFNBQVMsbUJBQVMsRUFBQyxNQUFNLGlCQUFQLEVBQVQsQ0FBYjtBQUNBLFdBQVEsR0FBUixDQUFZLE9BQU8sT0FBUCxFQUFaOztBQUVBLE9BQUksWUFBWSxzQkFBWSxFQUFFLE1BQU0sb0JBQVIsRUFBWixDQUFoQjtBQUNBLFdBQVEsR0FBUixDQUFZLFVBQVUsT0FBVixFQUFaOztBQUVBLE9BQUksV0FBVyxxQkFBVyxFQUFDLE1BQU0sZ0JBQVAsRUFBWCxDQUFmO0FBQ0EsV0FBUSxHQUFSLENBQVksU0FBUyxPQUFULEVBQVo7OztBQUdBLE9BQUksU0FBUyxtQkFBUyxFQUFDLE1BQU0sY0FBUCxFQUFULENBQWI7QUFDQSxXQUFRLEdBQVIsQ0FBWSxPQUFPLE9BQVAsRUFBWjs7QUFFQSxPQUFJLFNBQVMsbUJBQVMsRUFBQyxNQUFNLGNBQVAsRUFBVCxDQUFiO0FBQ0EsV0FBUSxHQUFSLENBQVksT0FBTyxPQUFQLEVBQVo7O0FBRUEsT0FBSSxlQUFlLHlCQUFlLEVBQUMsTUFBTSxZQUFQLEVBQWYsQ0FBbkI7QUFDQSxXQUFRLEdBQVIsQ0FBWSxhQUFhLE9BQWIsRUFBWjs7QUFFQSxPQUFJLGVBQWUseUJBQWUsRUFBQyxNQUFNLFlBQVAsRUFBZixDQUFuQjtBQUNBLFdBQVEsR0FBUixDQUFZLGFBQWEsT0FBYixFQUFaO0FBQ0E7Ozs7OztrQkEzRm1CLEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqIFxuICogQW5pbWFsLmpzXG4gKiBUaGUgY3JpdHRlcnMgdGhhdCBUcnVtcCB0cmllcyB0byBzdG9wIGZyb20gZ2V0dGluZyB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcblxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcblxuIC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIGltcG9ydCBNb3ZlciBmcm9tICcuL01vdmVyLmpzJztcbiBpbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XG4gLy8gRU5EIEFEREVEIFdFRUsgMTE8PDw8PDw8PDw8PDw8XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYWwgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuXG4gXHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIFx0XHQvLyBBbmltYWxzIGdldCBSQU5ET00gTU9USU9OXG4gXHRcdHRoaXMubW92ZXIuaW5pdFJhbmRvbSgwLjIsICdib3R0b20nKTtcbiBcdFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxuXG4gXHR9XG5cbiBcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIFx0dXBkYXRlICgpIHtcbiBcdFx0dGhpcy5tb3Zlci51cGRhdGVSYW5kb21XYWxrKCk7XG4gXHR9XG4gXHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cbiB9IiwiLyoqIFxuICogQW5pbWFsQXJlYS5qc1xuICogVGhlIHJlZ2lvbiBhbmltYWxzIG1vdmUgdGhyb3VnaCB0byBnZXQgdG8gUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQXJlYVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhZ2UgZXh0ZW5kcyBBcmVhIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuIFx0fVxuXG4gfSIsIi8qKiBcbiAqIEFyZWEuanNcbiAqIEEgZ2VuZXJpYyByZWdpb24gb2YgdGhlIGdhbWUgc2NyZWVuLiBVc2VkIHRvIGFkZCB2aXN1YWwgb2JqZWN0cywgYW5kIFxuICogY3JlYXRlIGJvdW5kcyBmb3IgY29sbGlzaW9uIGRldGVjdGlvbi5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEluZm8sIEltYWdlLCBTdGF0aWNJbWFnZVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBBcmVhIGV4dGVuZHMgR2FtZVBpZWNlIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuXG4gXHRcdC8vIGNyZWF0ZSBhIDxkaXY+LCBhZGQgdG8gRE9NLCB3aXRoIG9wdGlvbmFsIGltYWdlXG4gXHRcdHRoaXMuYWRkVG9ET00oY29uZmlnLm5hbWUsIGNvbmZpZy5jb250YWluZXIsIGNvbmZpZy5wYXRoKTtcblxuIFx0XHQvLyBwb3NpdGlvbiB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVkXG4gXHRcdHRoaXMuc2V0RE9NUG9zaXRpb24oY29uZmlnLnBvc2l0aW9uKTsgLy9pbmhlcml0ZWQgZnJvbSBHYW1lUGllY2VcbiBcdFx0dGhpcy5zZXRET01TaXplKGNvbmZpZy5zaXplKTtcbiBcdH1cblxuIFx0Ly8gY3JlYXRlIERPTSBlbGVtZW50LCBMb2FkIGEgYmFja2dyb3VuZCBpbWFnZSwgYW5kIGluc2VydCBpbnRvIGNvbnRhaW5lclxuIFx0YWRkVG9ET00gKG5hbWUsIGNvbnRhaW5lciwgaW1nUGF0aCkge1xuIFx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuIFx0XHR0aGlzLmRvbS5pZCA9IG5hbWUgKyAnLWFyZWEnO1xuXG4gXHRcdC8vIHBvc2l0aW9uIGFic29sdXRlbHlcbiBcdFx0dGhpcy5kb20uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXG4gXHRcdC8vIERvbid0IGFsbG93IHBhZGRpbmcgb3IgbWFyZ2lucyBvciBib3JkZXJzIGZvciBBcmVhc1xuIFx0XHR0aGlzLmRvbS5zdHlsZS5tYXJnaW4gPSAnMHB4JztcbiBcdFx0dGhpcy5kb20uc3R5bGUucGFkZGluZyA9ICcwcHgnO1xuXG4gXHRcdC8vIGFkZCB0byB0aGUgRE9NXG4gXHRcdGNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGhpcy5kb20sIGNvbnRhaW5lci5jaGlsZE5vZGVzWzBdKTtcblxuIFx0XHQvLyBpZiB3ZSBoYXZlIGFuIGltYWdlLCBpbnNlcnQgaW4gZWxlbWVudCBiYWNrZ3JvdW5kXG4gXHRcdGlmIChpbWdQYXRoKSB7XG5cbiBcdFx0XHR0aGlzLmltYWdlID0gbmV3IFN0YXRpY0ltYWdlKFxuIFx0XHRcdFx0e1xuIFx0XHRcdFx0XHRuYW1lOiB0aGlzLmRvbS5pZCArICctaW1hZ2UnXG4gXHRcdFx0XHR9XG4gXHRcdFx0KTtcblxuIFx0XHRcdHRoaXMuaW1hZ2UubG9hZEJhY2tncm91bmRJbWFnZSAodGhpcy5kb20sIGltZ1BhdGgpO1xuIFx0XHR9XG5cbiBcdH1cblxuIFx0Ly8gYm91bmRzIGRldGVjdG9yIGZvciBzdXBwbGllZCBDaGFyYWN0ZXJcblxuXG4gfSIsIi8qKiBcbiAqIEJhY2tncm91bmQuanNcbiAqIEdhbWUgTG9nb3MsIExvZ29UeXBlcywgQnJhbmQgTmFtZVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrZ3JvdW5kIGV4dGVuZHMgU3RhdGljSW1hZ2Uge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXG5cdFx0dGhpcy5zZXRTb3VyY2UoY29uZmlnLnNvdXJjZSk7XG5cdFx0dGhpcy5zZXRBdXRob3IoY29uZmlnLmF1dGhvcik7XG5cdFx0dGhpcy5sb2FkQmFja2dyb3VuZEltYWdlKGNvbmZpZy5kb21JZCwgY29uZmlnLnBhdGgpO1xuXHR9XG5cbn1cbiIsIi8qKiBcbiAqIEJlYXIuanNcbiAqIEEgVGlnZXIsIHdobyB0cmllcyB0byBnZXQgdGhlIFBsYXllci5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG4gaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBCZWFyIGV4dGVuZHMgQW5pbWFsIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcbiBcdH1cblxuXG4gfSIsIi8qKiBcbiAqIENhZ2UuanNcbiAqIFRoZSByZWdpb24gd2hlcmUgYW5pbWFscyBhcmUgY2FnZWQuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBBcmVhXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FnZSBleHRlbmRzIEFyZWEge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cbiBcdFx0c3VwZXIoY29uZmlnKTtcblxuIFx0fVxuXG4gfSIsIi8qKiBcbiAqIENoYXJhY3Rlci5qc1xuICogR2FtZS1nZW5lcmF0ZWQgb3IgdXNlciBhdmF0YXJzLiBDaGFyYWN0ZXJzIGFyZSByZW5kZXJlZCBpbiBDYW52YXMsIGJ1dCBoYXZlIHRoZWlyIFxuICogcG9zaXRpb24gY29tcHV0ZWQgYW5kIHVwZGF0ZWQgb3V0c2lkZSBjYW52YXMuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcblxuIC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIGltcG9ydCBNb3ZlciBmcm9tICcuL01vdmVyLmpzJztcbiBpbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XG4gLy8gRU5EIEFEREVEIFdFRUsgMTE8PDw8PDw8PDw8PDw8XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBHYW1lUGllY2Uge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuXG4gXHRcdCAvLyBzdG9yZSBhIHJlZmVyZW5jZSB0byB0aGUgZ2FtZSBvYmplY3RcbiBcdFx0dGhpcy5nYW1lID0gY29uZmlnLmdhbWU7XG5cbiBcdFx0Ly8gU2V0IHBvc2l0aW9uIGFuZCBzaXplIGZyb20gY29uZmlndXJhdGlvblxuIFx0XHR0aGlzLnBvc2l0aW9uID0gY29uZmlnLnBvc2l0aW9uO1xuIFx0XHR0aGlzLnNpemUgPSBjb25maWcuc2l6ZTtcblxuIFx0XHR3aW5kb3cudGhlR2FtZSA9IGNvbmZpZy5nYW1lO1xuXG4gXHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIFx0XHR0aGlzLm1vdmVyID0gbmV3IE1vdmVyKHRoaXMpO1xuIFx0XHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cblxuXG4gXHRcdHRoaXMuaW1hZ2UgPSBuZXcgU3RhdGljSW1hZ2UoXG4gXHRcdFx0e1xuIFx0XHRcdFx0bmFtZTogY29uZmlnLm5hbWUgKyAnLWltYWdlJyxcbiBcdFx0XHRcdHBhdGg6IGNvbmZpZy5wYXRoXG4gXHRcdFx0fVxuIFx0XHQpO1xuXG4gXHRcdC8vIEltYWdlcyBkb24ndCBhdXRvbWF0aWNhbGx5IGxvYWQgd2hlbiB0aGV5J3JlIG5vdCBhdHRhY2hlZCB0byB0aGUgRE9NLCBcbiBcdFx0Ly8gb3IgYSBDU1MgYmFja2dyb3VuZCBpbWFnZVxuIFx0XHR0aGlzLmltYWdlLmxvYWQoY29uZmlnLnBhdGgsIGZ1bmN0aW9uICgpIHtjb25zb2xlLmxvZygnbG9hZGVkOicgKyBjb25maWcubmFtZSk7fSk7XG4gXHR9XG5cbiBcdC8vIG92ZXJyaWRlIGRlZmF1bHQgZHJhdyB3aXRoIG91ciBvd25cbiBcdGRyYXcgKGNvbnRleHQpIHtcblx0XHRpZiAodGhpcy5pbWFnZSkge1xuXHRcdFx0dmFyIGltZyA9IHRoaXMuaW1hZ2UuZGF0YTtcbiBcdFx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcblx0XHRcdC8vY29uc29sZS5sb2coJ2RyYXdpbmcnKVxuXHRcdFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxuXHRcdFx0aWYgKGltZykge1xuXHRcdFx0XHQvLyBkcmF3IGltYWdlIGludG8gSFRNTDUgY2FudmFzXG4gXHRcdCBcdFx0Y29udGV4dC5kcmF3SW1hZ2UoaW1nLCB0aGlzLnBvc2l0aW9uLmxlZnQsIHRoaXMucG9zaXRpb24udG9wKTtcblx0XHRcdH1cblx0XHR9XG4gXHR9XG4gfSIsIi8qKiBcbiAqIEBjbGFzcyBDb2xsaWRlclxuICogQGRlc2NyaXB0aW9uIGRldGVjdCBjb2xsaXNpb25zIGJldHdlZW4gc3BlY2lmaWMgb2JqZWN0cyBpbiB0aGUgXG4gKiBnYW1lIGZyYW1ld29yay4gSXQgaXMgTk9UIGEgZ2VuZXJhbC1wdXJwb3NlIGNvbGxpc2lvbiBkZXRlY3Rvci5cbiAqL1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGlkZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoY2hhcmFjdGVyQXJyYXkpIHtcbiBcdFx0dGhpcy5jaGFyYWN0ZXJBcnJheSA9IGNoYXJhY3RlckFycmF5O1xuIFx0XHR0aGlzLmFuaW1hbEFycmF5ID0gW107IC8vZmlsbGVkIHVwIGluIHNldFVwQ29sbGlzaW9uc1xuIFx0XHR0aGlzLnNldFVwQ29sbGlzaW9ucygpO1xuIFx0fVxuXG4gXHRzZXRVcENvbGxpc2lvbnMgKCkge1xuIFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5jaGFyYWN0ZXJBcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuIFx0XHRcdHN3aXRjaCAodGhpcy5jaGFyYWN0ZXJBcnJheVtpXS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gXHRcdFx0XHRjYXNlICdMaW9uJzpcbiBcdFx0XHRcdGNhc2UgJ1RpZXInOlxuIFx0XHRcdFx0Y2FzZSAnQmVhcic6XG4gXHRcdFx0XHRjYXNlICdHb3JpbGxhJzpcbiBcdFx0XHRcdFx0dGhpcy5hbmltYWxBcnJheS5wdXNoKHRoaXMuY2hhcmFjdGVyQXJyYXlbaV0pO1xuIFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdGNhc2UgJ1RydW1wJzpcbiBcdFx0XHRcdFx0dGhpcy50cnVtcCA9IHRoaXMuY2hhcmFjdGVyQXJyYXlbaV07XG4gXHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0Y2FzZSAnUGxheWVyJzpcbiBcdFx0XHRcdFx0dGhpcy5wbGF5ZXIgPSB0aGlzLmNoYXJhY3RlckFycmF5W2ldO1xuIFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vY3Jvc3MtY29ubmVjdCB0aGUgaW1wYWN0b3JzXG4gXHRcdHRoaXMudHJ1bXAucGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gXHRcdHRoaXMudHJ1bXAuYW5pbWFscyA9IHRoaXMuYW5pbWFsQXJyYXk7XG4gXHRcdHRoaXMucGxheWVyLnRydW1wID0gdGhpcy50cnVtcDtcblxuIFx0fVxuIH0iLCIvKiogXG4gKiBEeW5hbWljVGV4dC5qc1xuICogVGV4dCB0aGF0IGNhbiBiZSBjaGFuZ2VkIGJ5IHVzZXIgKGUuZy4gaW5wdXQgZmllbGQpLCBvciBcbiAqIHVwZGF0ZWQgYnkgdGhlIGdhbWUgaXRzZWxmLlxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljVGV4dCBleHRlbmRzIFRleHQge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXHR9XG59XG4iLCIvKiogXG4gKiBFbmRTY3JlZW4uanNcbiAqIEVuZGluZyBzY3JlZW4gZm9yIHRoZSBnYW1lLlxuICogQGluaGVyaXRzIFNjcmVlbiwgR2FtZVBpZWNlXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcbiBcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG5cbiBcdFx0Ly8gbG9hZCB0aGUgYmFja2dyb3VuZCBpbWFnZVxuIFx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kKCdpbWcvc2NyZWVucy9lbmQtc2NyZWVuLnBuZycpO1xuXG4gXHRcdC8vIExvYWQgRW5kU2NyZWVuIHN1Yi1vYmplY3RzXG4gXHRcdHRoaXMubG9hZElucHV0U2NvcmUoKTtcbiBcdFx0dGhpcy5sb2FkSGlnaFNjb3JlcygpO1xuXG4gXHRcdC8vIEJpbmQgXCJwbGF5IGFnYWluXCIgYW5kIFwiaW5zdHJ1Y3Rpb25zXCIgYnV0dG9ucy5cbiBcdFx0dGhpcy5iaW5kUmVwbGF5KCk7XG4gXHRcdHRoaXMuYmluZEluc3RydWN0aW9ucygpO1xuIFx0fVxuXG4gXHRsb2FkSW5wdXRTY29yZSAoKSB7XG5cbiBcdH1cblxuIFx0bG9hZEhpZ2hTY29yZXMgKCkge1xuXG4gXHR9XG5cbiBcdGJpbmRSZXBsYXkgKCkge1xuXHRcdGNvbnNvbGUubG9nKFwiaW4gYmluZFN0YXJ0LCB0aGlzLmdhbWU6XCIgKyB0aGlzLmdhbWUpXG5cdFx0Ly8gd2UgdXNlIGJpbmQoKSB0byBsaW5rIHRoZSBmdW5jdGlvbiBiZWxvdyB0byBTdGFydFNjcmVlbiAob3RoZXJ3aXNlLCBpdCB0aGlua3MgaXQgaXMgaW5zaWRlIHdpbmRvdylcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kLXNjcmVlbi1wbGF5LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXG5cdFx0XHRmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHQvL2FsZXJ0KFwiaW4gaGFuZGxlciwgZ2FtZTpcIiArIHRoaXMuZ2FtZSlcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLmdhbWUuc3RhcnRHYW1lKCk7XG5cblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRiaW5kSW5zdHJ1Y3Rpb25zICgpIHtcblx0XHRjb25zb2xlLmxvZyhcImluIGJpbmRTdGFydCwgdGhpcy5nYW1lOlwiICsgdGhpcy5nYW1lKVxuXHRcdC8vIHdlIHVzZSBiaW5kKCkgdG8gbGluayB0aGUgZnVuY3Rpb24gYmVsb3cgdG8gU3RhcnRTY3JlZW4gKG90aGVyd2lzZSwgaXQgdGhpbmtzIGl0IGlzIGluc2lkZSB3aW5kb3cpXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZC1zY3JlZW4taW5zdHJ1Y3Rpb25zLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXG5cdFx0XHRmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHQvL2FsZXJ0KFwiaW4gaGFuZGxlciwgZ2FtZTpcIiArIHRoaXMuZ2FtZSlcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLmdhbWUubG9hZEdhbWUoKTtcblxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuIH0iLCIvKiogXG4gKiBHYW1lLmpzXG4gKiBUaGUgZW50aXJlIEdhbWUgb2JqZWN0XG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG4vL1NjcmVlbiBpbmhlcml0YW5jZVxuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSAnLi9TdGFydFNjcmVlbi5qcyc7XG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuL0dhbWVTY3JlZW4uanMnO1xuaW1wb3J0IEVuZFNjcmVlbiBmcm9tICcuL0VuZFNjcmVlbi5qcyc7XG5cbi8vSW5mbyBpbmhlcml0YW5jZVxuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuaW1wb3J0IElkZW50aXR5IGZyb20gJy4vSWRlbnRpdHkuanMnO1xuaW1wb3J0IEluc3RydWN0aW9ucyBmcm9tICcuL0luc3RydWN0aW9ucy5qcyc7XG5pbXBvcnQgRHluYW1pY1RleHQgZnJvbSAnLi9EeW5hbWljVGV4dC5qcyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZS5qcyc7XG5cbi8vQ2hhcmFjdGVyIGluaGVyaXRhbmNlXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbmltcG9ydCBUcnVtcCBmcm9tICcuL1RydW1wLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIuanMnO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5pbXBvcnQgTGlvbiBmcm9tICcuL0xpb24uanMnO1xuaW1wb3J0IFRpZ2VyIGZyb20gJy4vVGlnZXIuanMnO1xuaW1wb3J0IEJlYXIgZnJvbSAnLi9CZWFyLmpzJztcbmltcG9ydCBHb3JpbGxhIGZyb20gJy4vR29yaWxsYS5qcyc7XG5pbXBvcnQgSGVhbHRoIGZyb20gJy4vSGVhbHRoLmpzJztcblxuLy9BcmVhIGluaGVyaXRhbmNlLlxuaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcbmltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XG5pbXBvcnQgQW5pbWFsQXJlYSBmcm9tICcuL0FuaW1hbEFyZWEuanMnO1xuaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi9QbGF5ZXJBcmVhLmpzJztcblxuLy8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG5pbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XG4vLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBHYW1lUGllY2Uge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblxuXHRcdHN1cGVyKGNvbmZpZyk7XG5cblx0XHQvL2dhbWUgY29weXJpZ2h0XG5cdFx0dGhpcy53YXJuaW5nID0gJ1RoaXMgZ2FtZSBiZWxvbmdzIHRvIHVzLCBhbmQgbm9ib2R5IGVsc2UuJztcblxuXHRcdC8vZ2FtZSByZXZlcnRzIHRvIFN0YXJ0U2NyZWVuIGlmIHVucGxheWVkXG5cdFx0dGhpcy5USU1FT1VUID0gNTU1NTtcblxuXHRcdC8vIGRlZmluZSBJZCBsaW5rIHRvIERPTVxuXHRcdHRoaXMuU1RBUlRfU0NSRUVOX0lEID0gJ3N0YXJ0LXNjcmVlbic7XG5cdFx0dGhpcy5HQU1FX1NDUkVFTl9JRCA9ICdnYW1lLXNjcmVlbic7XG5cdFx0dGhpcy5FTkRfU0NSRUVOX0lEID0gJ2VuZC1zY3JlZW4nO1xuXG5cdFx0Ly8gbW9kZWwgc3RvcmFnZSwgc2NyZWVuc1xuXHRcdHRoaXMuc2NyZWVucyA9IFtdO1xuXG5cdFx0Ly8gbW9kZWwgc3RvcmFnZSwgZHluYW1pYyBjaGFyYWN0ZXJzXG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycyA9IFtdO1xuXG5cdFx0Ly8gaW5pdGlhbGl6ZSBnYW1lLCBsb2FkIHN0YXJ0IHNjcmVlblxuXHRcdHRoaXMuaW5pdCgpO1xuXG5cdH0gLy9lbmQgb2YgY29uc3RydWN0b3JcblxuXHRpbml0ICgpIHtcblxuXHRcdC8vIEdyYWIgdGhlIEhUTUwgc2NyZWVuIGVsZW1lbnRzIGFuZCBlbmNhcHN1bGF0ZSBpbiBhIFNjcmVlbiBjbGFzc1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLlNUQVJUX1NDUkVFTl9JRF0gPSBuZXcgU3RhcnRTY3JlZW4oe25hbWU6ICdTdGFydCBTY3JlZW4nLCBpZDogdGhpcy5TVEFSVF9TQ1JFRU5fSUQsIGdhbWU6IHRoaXN9KTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5HQU1FX1NDUkVFTl9JRF0gPSBuZXcgR2FtZVNjcmVlbih7bmFtZTogJ0dhbWUgU2NyZWVuJywgaWQ6IHRoaXMuR0FNRV9TQ1JFRU5fSUQsIGdhbWU6IHRoaXN9KTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5FTkRfU0NSRUVOX0lEXSA9IG5ldyBFbmRTY3JlZW4oe25hbWU6ICdFbmQgU2NyZWVuJywgaWQ6IHRoaXMuRU5EX1NDUkVFTl9JRCwgZ2FtZTogdGhpc30pO1xuXG5cdFx0Ly8gbG9hZCB0aGUgY2FudmFzXG5cdFx0dGhpcy5sb2FkQ2FudmFzKCk7XG5cblx0XHQvLyBtYWtlIHRoZSBzdGFydCBzY3JlZW4gdmlzaWJsZVxuXHRcdHRoaXMubG9hZEdhbWUoKTtcblx0fVxuXG5cdC8vIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgSFRNTDUgY2FudmFzIGNvbnRleHRcblx0bG9hZENhbnZhcyAoKSB7XG5cdFx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZS1zY3JlZW4tYXJlbmEgY2FudmFzJyk7XG5cdFx0dGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHR9XG5cblx0LyoqIFxuXHQgKiBMb2FkIENoYXJhY3RlcnNcblx0ICogZHluYW1pYyBDaGFyYWN0ZXJzIChlLmcuIHRob3NlIHRoYXQgYW5pbWF0ZSkgYXJlIGxvYWRlZCBieSBHYW1lLiBcblx0ICogT3RoZXIgc3RhdGljIHZpc3VhbCBvYmplY3RzIGFyZSBsb2FkZWQgYnkgU2NyZWVuIGNsYXNzZXMuXG5cdCAqL1xuXHRsb2FkUGxheWVycyAoKSB7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IFBsYXllcihcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdQbGF5ZXInLCBwb3NpdGlvbjoge3RvcDogNTEwLCBsZWZ0OiAyMDB9LFxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvcGxheWVycy9wbGF5ZXIucG5nJyxcblx0XHRcdFx0XHRnYW1lOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXHR9XG5cblx0bG9hZEFuaW1hbHMgKCkge1xuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcblx0XHRcdG5ldyBMaW9uKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ0xpb24nLCBcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMTUsIGxlZnQ6IDk0fSxcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvbGlvbi5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IFRpZ2VyKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ1RpZ2VyJywgXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDE1LCBsZWZ0OiAzMzN9LFxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvYW5pbWFscy90aWdlci5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IEJlYXIoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnQmVhcicsIHBvc2l0aW9uOiB7dG9wOiAxNSwgbGVmdDogNTcwfSxcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvYmVhci5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IEdvcmlsbGEoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnR29yaWxsYScsIHBvc2l0aW9uOiB7dG9wOiAxNSwgbGVmdDogODEyfSxcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvZ29yaWxsYS5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cblx0fVxuXG5cdGxvYWRUcnVtcHMgKCkge1xuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcblx0XHRcdG5ldyBUcnVtcChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdUcnVtcCcsIHBvc2l0aW9uOiB7dG9wOiA0NTAsIGxlZnQ6IDIwMH0sXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy90cnVtcHMvdHJ1bXAucG5nJyxcblx0XHRcdFx0XHRnYW1lOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXG5cdH1cblxuXHRsb2FkR2FtZSAoKSB7XG5cblx0XHQvL2xvYWQgSW5mbyBhc3NldHNcblxuXHRcdGNvbnNvbGUubG9nKCdsb2FkaW5nIHNwbGFzaCBzY3JlZW4nKTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5FTkRfU0NSRUVOX0lEXS5oaWRlU2NyZWVuKClcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5TVEFSVF9TQ1JFRU5fSURdLnNob3dTY3JlZW4oKTtcblx0fVxuXG5cdHN0YXJ0R2FtZSAoKSB7XG5cblx0XHQvL2xvYWQgQ2hhcmFjdGVyc1xuXHRcdHRoaXMubG9hZEFuaW1hbHMoKTtcblx0XHR0aGlzLmxvYWRQbGF5ZXJzKCk7XG5cdFx0dGhpcy5sb2FkVHJ1bXBzKCk7XG5cblx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcblx0XHR0aGlzLmNvbGxkZXIgPSBuZXcgQ29sbGlkZXIodGhpcy5kaXNwbGF5Q2hhcmFjdGVycyk7XG5cdFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxuXG5cblx0XHQvL21ha2UgR2FtZVNjcmVlbiB2aXNpYmxlXG5cblx0XHQvLyBpbml0aWFsaXplIGVsYXBzZWQgdGltZVxuXHRcdHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcblxuXHRcdC8vIHNob3cgR2FtZVNjcmVlbiwgaGlkZSBvdGhlcnNcblx0XHRjb25zb2xlLmxvZygnc3RhcnRpbmcgZ2FtZScpO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLlNUQVJUX1NDUkVFTl9JRF0uaGlkZVNjcmVlbigpO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkVORF9TQ1JFRU5fSURdLmhpZGVTY3JlZW4oKTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5HQU1FX1NDUkVFTl9JRF0uc2hvd1NjcmVlbigpO1xuXHRcdHRoaXMuZ2FtZUxvb3AoKTtcblx0fVxuXG5cdGVuZEdhbWUgKCkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2VuZGluZyBnYW1lJyk7XG5cblx0XHQvLyByZXNldCB0aW1lclxuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcblxuXHRcdC8vIHR1cm4gb2ZmIGFuaW1hdGlvblxuXHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2xvYmFsSWQpO1xuXHRcdHRoaXMuZ2xvYmFsSWQgPSBudWxsO1xuXG5cdFx0Ly8gZ28gdG8gZW5kIHNjcmVlblxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkdBTUVfU0NSRUVOX0lEXS5oaWRlU2NyZWVuKCk7XG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuRU5EX1NDUkVFTl9JRF0uc2hvd1NjcmVlbigpO1xuXHR9XG5cblx0ZWxhcHNlZCAoKSB7XG5cblx0XHQvLyByZWNvcmQgdGltZSB3ZSBoYXZlIGJlZW4gaW4gZ2FtZUxvb3Bcblx0XHR0aGlzLmVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG5cdFx0Ly8gdGltZSBkaWZmZXJlbmNlIGluIG1zXG5cblx0XHR2YXIgdGltZURpZmYgPSAodGhpcy5lbmRUaW1lIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMDtcblxuXHRcdC8vIGdldCBzZWNvbmRzIChPcmlnaW5hbCBoYWQgJ3JvdW5kJyB3aGljaCBpbmNvcnJlY3RseSBjb3VudHMgMDoyOCwgMDoyOSwgMTozMCAuLi4gMTo1OSwgMTowKVxuXHRcdHJldHVybiBNYXRoLnJvdW5kKHRpbWVEaWZmICUgNjApO1xuXHR9XG5cblx0Y2hlY2tJZkNvbXBsZXRlICgpIHtcblxuXHRcdC8vIGdhbWUgbG9naWMgdG8gc2VlIGlmIHRoZSBnYW1lIHNob3VsZCByZXNldFxuXHRcdC8vLy8vLy8vLy8vLy9jb25zb2xlLmxvZygnRUxBUFNFRDonICsgdGhpcy5lbGFwc2VkKCkpO1xuXG5cdFx0aWYgKHRoaXMuZWxhcHNlZCgpID4gdGhpcy5USU1FT1VUKSB7XG5cdFx0XHQvLyBpZiBpZGxlIHRvbyBsb25nLCByZXNldCBnYW1lIHRvIHN0YXJ0XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR1cGRhdGUgKCkge1xuXG5cdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuZGlzcGxheUNoYXJhY3RlcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblxuXHRcdFx0dmFyIGNoYXJhY3RlciA9IHRoaXMuZGlzcGxheUNoYXJhY3RlcnNbaV07XG5cblx0XHRcdHN3aXRjaCAoY2hhcmFjdGVyLmdldENsYXNzKCkpIHtcblx0XHRcdFx0Y2FzZSAnUGxheWVyJzpcblx0XHRcdFx0Y2FzZSAnVHJ1bXAnOlxuXHRcdFx0XHRjYXNlICdMaW9uJzpcblx0XHRcdFx0Y2FzZSAnVGlnZXInOlxuXHRcdFx0XHRjYXNlICdCZWFyJzpcblx0XHRcdFx0Y2FzZSAnR29yaWxsYSc6XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNoYXJhY3Rlci51cGRhdGUoKTtcblx0XHR9XG5cdH1cblxuXHRkcmF3ICgpIHtcblxuIFx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcblx0XHR0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuIFx0XHQvLyBFTkQgQURERUQgV0VFSyAxMTw8PDw8PDw8PDw8PDxcblx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVyc1tpXS5kcmF3KHRoaXMuY29udGV4dCk7XG5cdFx0fVxuXHR9XG5cblx0Z2FtZUxvb3AgKCkge1xuXHRcdFxuXHRcdGlmICh0aGlzLmNoZWNrSWZDb21wbGV0ZSgpKSB7XG5cdFx0XHR0aGlzLmVuZEdhbWUoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0XHR0aGlzLmRyYXcoKTtcblx0XHRcblx0XHQvL2NvbnNvbGUubG9nKCdsb29waW5nLi4uJylcblx0XHR0aGlzLmdsb2JhbElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3AuYmluZCh0aGlzKSk7XG5cdH1cblxufSIsIi8qKiBcbiAqIEdhbWVQaWVjZS5qc1xuICogQmFzaWMgR2FtZSBvYmplY3RcbiAqXG4gKiBUbyBtYWtlIHRoaXMgd29yaywgeW91IG11c3QgYmUgcnVubmluZyB0aGUgQmFiZWwgdHJhbnNwaWxlciwgXG4gKiBhbmQgd2F0Y2hpbmcgZm9yIGNoYW5nZXMgaW4gdGhpcyBmaWxlIHdpdGggYnJvd3NlcmlmeS4gVHdvIFxuICogVGVybWluYWwgd2luZG93cyBuZWVkIHRvIGJlIG9wZW46XG4gKiAxLiBvbmUgd2luZG93IHdoZXJlIHlvdSB0eXBlZCB0aGUgY29tbWFuZCBcImdydW50XCJcbiAqIDIuIG9uZSB3aW5kb3cgd2hlcmUgeW91IHR5cGVkIHRoZSBjb21tYW5kIFwibnBtIHN0YXJ0XCJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBpZWNlIHtcblxuICAgIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICAgICAgLy9UT0RPOiB1c2Ugc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgICAgIHRoaXMudXVpZCA9IHRoaXMuc2V0SWQoKTtcbiAgICAgICAgdGhpcy5yZWFkeSA9IHRydWU7IC8vIGNoYW5nZSB0byBmYWxzZSBmb3IgZGVmZXJyZWQgbG9hZHNcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogU2V0IGEgcG9zaXRpb24gZm9yIHRoZSBvYmplY3QsIGFsc28gdGhlIHBvc2l0aW9uIG9mIHRoZSBcbiAgICAgKiBET00gcmVwcmVzZW50YXRpb24gb2YgdGhlIG9iamVjdFxuICAgICAqL1xuICAgIHNldERPTVBvc2l0aW9uIChwb3NpdGlvbikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIGlmICh0aGlzLmRvbSkge1xuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUudG9wID0gcG9zaXRpb24udG9wICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuZG9tLnN0eWxlLmxlZnQgPSBwb3NpdGlvbi5sZWZ0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBTZXQgdGhlIG9iamVjdCBzaXplLCBhbHNvIGl0cyBET00gc2l6ZVxuICAgICAqL1xuICAgIHNldERPTVNpemUgKHNpemUpIHtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgaWYgKHRoaXMuZG9tKSB7XG4gICAgICAgICAgICB0aGlzLmRvbS5zdHlsZS53aWR0aCA9IHNpemUud2lkdGggKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQgKyAncHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEdlbmVyYXRlIGEgdW5pcXVlIElEIGZvciBldmVyeSBnYW1lIG9iamVjdC5cbiAgICAgKiBAbGluayBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNTAzNC9jcmVhdGUtZ3VpZC11dWlkLWluLWphdmFzY3JpcHRcbiAgICAgKi9cbiAgICBzZXRJZCAoKSB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy91c2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSoxNiklMTYgfCAwO1xuICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZC8xNik7XG4gICAgICAgICAgICByZXR1cm4gKGM9PSd4JyA/IHIgOiAociYweDN8MHg4KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIFJldHVybiB0aGUgZ2l2ZW4gbmFtZSBvZiB0aGlzIG9iamVjdFxuICAgICAqL1xuICAgIGdldE5hbWUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiByZXR1cm4gdGhlIGNsYXNzIG9mIHRoZSBvYmplY3RcbiAgICAgKi9cbiAgICBnZXRDbGFzcyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIFJldHVybiB0aGUgdW5pcXVlIGlkIG9mIHRoaXMgb2JqZWN0LlxuICAgICAqL1xuICAgIGdldElkICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXVpZDtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogR2V0IHRoZSBlbmNsb3NpbmcgYm94IG91dHNpZGUgdGhlIG9iamVjdCBmb3IgZXh0ZXJuYWwgY29sbGlzaW9uc1xuICAgICAqL1xuICAgIGdldENvbGxpc2lvblJlY3QgKCkge1xuXG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEdldCB0aGUgaW50ZXJuYWwgYm94IHdoZW4gdGhpcyBvYmplY3QgYWN0cyBhcyBhIGNvbnRhaW5lciBmb3IgYW5vdGhlclxuICAgICAqL1xuICAgIGdldEJvdW5kc1JlY3QgKCkge1xuXG4gICAgfVxuXHRcblx0LyoqIFxuXHQgKiBHZW5lcmljICdyZWFkeScgZnVuY3Rpb24gKGUuZy4gZm9yIGRlbGF5ZWQgYXNzZXQgbG9hZHMpXG5cdCAqL1xuXHRzZXRSZWFkeSAodmFsKSB7XG5cdFx0dGhpcy5yZWFkeSA9IHZhbDtcblx0fVxuXG4gICAgLyoqIFxuICAgICAqIEdlbmVyaWMgdXBkYXRlIChvdmVycmlkZSlcbiAgICAgKi9cbiAgICB1cGRhdGUgKCkge1xuXG4gICAgfVxuXG4gICAgIC8qKiBcbiAgICAgICogZ2VuZXJpYyBkcmF3IChvdmVycmlkZSlcbiAgICAgICovXG4gICAgZHJhdyAoKSB7XG5cbiAgICB9XG59XG5cblxuIiwiLyoqIFxuICogR2FtZVNjcmVlbi5qc1xuICogTWFpbiBnYW1lIHNjcmVlbiBvYmplY3RcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIFNjcmVlblxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuIGltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4vQW5pbWFsQXJlYS5qcyc7XG4gaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi9QbGF5ZXJBcmVhLmpzJztcbiBpbXBvcnQgQ2FnZSBmcm9tICcuL0NhZ2UuanMnO1xuXG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuXG4gXHRcdHRoaXMuY2FnZXMgPSBbXTtcbiBcdFx0dGhpcy5hbmltYWxBcmVhcyA9IFtdO1xuIFx0XHR0aGlzLnBsYXllckFyZWFzID0gW107XG5cbiBcdFx0Ly9HYW1lU2NyZWVuIHNob3VsZCBoaWRlIGl0cyBsb2NhbCBoZWFkZXIgYW5kIGZvb3RlclxuIFx0XHR0aGlzLmhpZGVIZWFkZXIoKTtcbiBcdFx0dGhpcy5oaWRlRm9vdGVyKCk7XG5cbiBcdFx0Ly8gbG9hZCB0aGUgYmFja2dyb3VuZCBpbWFnZVxuIFx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kKCdpbWcvc2NyZWVucy9nYW1lLXNjcmVlbi5wbmcnKTtcblxuIFx0XHQvLyBnZXQgdGhlIHNlY3Rpb24gdGhhdCBoYXMgdGhlIGNhbnZhcyBmb3Igb3ZlcmxheVxuIFx0XHR2YXIgYXJlbmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1zY3JlZW4tYXJlbmEnKTtcblxuIFx0XHQvLyBsb2FkIHN1Yi1vYmplY3RzIGludG8gdGhlIEFyZW5hXG4gXHRcdHRoaXMuY2FnZXMgICA9IHRoaXMubG9hZENhZ2VzKGFyZW5hLCAnaW1nL2FyZWFzL2NhZ2UucG5nJyk7XG4gXHRcdHRoaXMuYW5pbWFsQXJlYSA9IHRoaXMubG9hZEFuaW1hbEFyZWEoKTtcbiBcdFx0dGhpcy5wbGF5ZXJBcmVhID0gdGhpcy5sb2FkUGxheWVyQXJlYSgpO1xuXG4gXHR9XG5cbiBcdGxvYWRDYWdlcyAoY29udGFpbmVyLCBpbWdQYXRoKSB7XG4gXHRcdC8vIGxvYWQgNCBDYWdlc1xuIFx0XHR0aGlzLmNhZ2VzLnB1c2goXG4gXHRcdFx0bmV3IENhZ2UoXG4gXHRcdFx0XHR7XG4gXHRcdFx0XHRcdG5hbWU6ICdsaW9uLWNhZ2UnLCBcbiBcdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDcwfSwgXG4gXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSwgXG4gXHRcdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcbiBcdFx0XHRcdFx0cGF0aDogaW1nUGF0aFxuIFx0XHRcdFx0fVxuIFx0XHRcdClcbiBcdFx0KTtcblx0XHR0aGlzLmNhZ2VzLnB1c2goXG5cdFx0XHRuZXcgQ2FnZShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICd0aWdlci1jYWdlJywgXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDMxMH0sIFxuXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSwgXG5cdFx0XHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsIFxuXHRcdFx0XHRcdHBhdGg6IGltZ1BhdGhcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5jYWdlcy5wdXNoKFxuXHRcdFx0bmV3IENhZ2UoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnYmVhci1jYWdlJywgXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDU1MH0sIFxuXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSxcblx0XHRcdFx0XHRjb250YWluZXI6IGNvbnRhaW5lciwgXG5cdFx0XHRcdFx0cGF0aDogaW1nUGF0aFxuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcblx0XHR0aGlzLmNhZ2VzLnB1c2goXG5cdFx0XHRuZXcgQ2FnZShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdnb3JpbGxhLWNhZ2UnLCBcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMCwgbGVmdDogNzkwfSwgXG5cdFx0XHRcdFx0c2l6ZToge3dpZHRoOiAxMDAsIGhlaWdodDoxMDB9LFxuXHRcdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcblx0XHRcdFx0XHRwYXRoOiBpbWdQYXRoXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuIFx0fVxuXG4gXHRsb2FkQW5pbWFsQXJlYSAoKSB7XG4gXHRcdC8vIGxvYWQgQW5pbWFsIG1vdmVtZW50IGFyZWFcbiBcdFx0dGhpcy5hbmltYWxBcmVhcy5wdXNoKFxuIFx0XHRcdG5ldyBBbmltYWxBcmVhKFxuIFx0XHRcdFx0e1xuIFx0XHRcdFx0XHRuYW1lOiAnWm9vJywgXG4gXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAxMDQsIGxlZnQ6IDZ9LCBcbiBcdFx0XHRcdFx0c2l6ZToge3dpZHRoOiA5NzAsIGhlaWdodDogNDEwfSxcbiBcdFx0XHRcdFx0Y29udGFpbmVyOiB0aGlzLmRvbSwgXG4gXHRcdFx0XHRcdHBhdGg6IG51bGxcbiBcdFx0XHRcdH1cbiBcdFx0XHQpXG4gXHRcdCk7XG4gXHR9XG5cbiBcdGxvYWRQbGF5ZXJBcmVhICgpIHtcbiBcdFx0Ly8gbG9hZCB0aGUgUGxheWVyXG4gXHRcdHRoaXMucGxheWVyQXJlYXMucHVzaChcbiBcdFx0XHRuZXcgUGxheWVyQXJlYShcbiBcdFx0XHRcdHtcbiBcdFx0XHRcdFx0bmFtZTogJ1BsYXllciBBcmVhJywgXG4gXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiA1MTQsIGxlZnQ6IDZ9LCBcbiBcdFx0XHRcdFx0c2l6ZToge3dpZHRoOiA5NzAsIGhlaWdodDogMTAwfSxcbiBcdFx0XHRcdFx0Y29udGFpbmVyOiB0aGlzLmRvbSwgXG4gXHRcdFx0XHRcdHBhdGg6IG51bGxcbiBcdFx0XHRcdH1cbiBcdFx0XHQpXG4gXHRcdCk7XG4gXHR9XG5cbiB9XG5cbiIsIi8qKiBcbiAqIEdvcmlsbGEuanNcbiAqIEEgR29yaWxsYSwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvcmlsbGEgZXh0ZW5kcyBBbmltYWwge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuIFx0fVxuIH0iLCIvKiogXG4gKiBIZWFsdGguanNcbiAqIFRoZSBjcml0dGVycyB0aGF0IFRydW1wIHRyaWVzIHRvIHN0b3AgZnJvbSBnZXR0aW5nIHRoZSBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhbHRoIGV4dGVuZHMgQ2hhcmFjdGVyIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcbiBcdH1cblxuIH0iLCIvKiogXG4gKiBJZGVudGl0eS5qc1xuICogR2FtZSBMb2dvcywgTG9nb1R5cGVzLCBCcmFuZCBOYW1lXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElkZW50aXR5IGV4dGVuZHMgU3RhdGljSW1hZ2Uge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXG5cdFx0dGhpcy5zZXRTb3VyY2UoY29uZmlnLnNvdXJjZSk7XG5cdFx0dGhpcy5zZXRBdXRob3IoY29uZmlnLmF1dGhvcik7XG5cdFx0dGhpcy5sb2FkSW1hZ2VUb0RPTShjb25maWcuZG9tSWQsIGNvbmZpZy5wYXRoKTtcblxuXHRcdC8vSGlkZSBhbnkgPGgyPiB0ZXh0IGVxdWl2YWxlbnQgb2YgaWRlbnRpdHkgaW4gdGhpcyBDU1MgYm94XG5cdFx0dmFyIHRleHRJZGVudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgY29uZmlnLmRvbUlkICsgJyBoMicpO1xuXHRcdHRleHRJZGVudGl0eS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR9XG5cbn1cbiIsIi8qKiBcbiAqIFN0YXRpY0ltYWdlLmpzXG4gKiBJbWFnZS1zdHlsZSBJbmZvcm1hdGlvbiB0aGF0IGNhbm5vdCBiZSBjaGFuZ2VkIG9uY2UgdGhlIGdhbWUgaXMgbG9hZGVkXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIEluZm8ge1xuXG5cdC8vIHNhdmUgc2NvcGVcblx0Ly8gVE9ETzogcmVmYWN0b3Igd2l0aCBhcnJvdyBmdW5jdGlvblxuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXHRcdHRoaXMucmVhZHkgPSBmYWxzZTsgLy9vdmVyLXJpZGUgR2FtZVBpZWNlIGFuZCBpbmZvIHdpdGggZGVmZXJyYWxzXG5cdFx0dGhpcy5pbWFnZSA9IG51bGw7XG5cdFx0dGhpcy5wYXRoID0gY29uZmlnLnBhdGg7XG5cdFx0dGhpcy5hdXRob3IgPSBjb25maWcuYXV0aG9yO1xuXHRcdHRoaXMuc291cmNlID0gY29uZmlnLnNvdXJjZTtcblx0fVxuXG5cdC8vIGxvYWQgYW4gaW1hZ2Vcblx0bG9hZCAocGF0aCwgY2FsbGJhY2spIHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5zZXRSZWFkeShmYWxzZSk7XG5cdFx0Y29uc29sZS5sb2coJ2VudGVyaW5nIGxvYWQgaW5JbWFnZScpO1xuXHRcdHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRpbWcuc3JjID0gcGF0aDtcblx0XHRpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc29sZS5sb2codGhhdC5uYW1lICsgJyBpbWFnZSBsb2FkZWQgZnJvbTonICsgcGF0aCArICcgdzonICsgaW1nLndpZHRoICsgJyBoOicgKyBpbWcuaGVpZ2h0KVxuXHRcdFx0dGhhdC5zZXRSZWFkeSh0cnVlKTtcblx0XHRcdHRoYXQuZGF0YSA9IGltZztcblx0XHRcdFxuXHRcdFx0aWYoY2FsbGJhY2spIHtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2Vycm9yIGxvYWRpbmcgaW1nIGZyb206JyArIHBhdGgpO1xuXHRcdH1cblx0fVxuXG5cdC8vIGxvYWQgaW1hZ2UsIGFwcGVuZCB0byBleGlzdGluZyBET00gZWxlbWVudFxuXHQvLyBOT1RFOiB0aGlzIGlzIG92ZXItd3JpdHRlbiBpbiBDaGFyYWN0ZXIuanMsIHdoaWNoIGxvYWRzIGltYWdlcyBpbnRvIENhbnZhc1xuXHRsb2FkSW1hZ2VUb0RPTSAoZG9tSWQsIHBhdGgsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdHRoaXMubG9hZChwYXRoLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZm9yZWdyb3VuZCBpbWFnZSAnICsgcGF0aCArICcgbG9hZGVkJylcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvbUlkKS5hcHBlbmRDaGlsZCh0aGF0LmRhdGEpO1xuXHRcdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0fVxuXG5cdC8vIGxvYWQgaW1hZ2UgYXMgYSBDU1MgYmFja2dyb3VuZCBpbWFnZSBpbnRvIGV4aXN0aW5nIERPTSBlbGVtZW50LiBcblx0Ly8gTk9URTogbm8gbG9jYWwgcmVmZXJlbmNlIHRvIGltYWdlIGluIHRoaXMgY2FzZVxuXHRsb2FkQmFja2dyb3VuZEltYWdlIChjb250YWluZXIsIHBhdGgsIGNhbGxiYWNrKSB7XG5cdFx0Y29uc29sZS5sb2coJ2xvYWRpbmcgYmFja2dyb3VuZCBpbWFnZTonICsgcGF0aClcblx0XHRjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlPSd1cmwoJyArIHBhdGggKyAnKSc7XG5cdFx0dGhpcy5zZXRSZWFkeSh0cnVlKTtcblx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gRHJhdyB0aGUgaW1hZ2UgdG8gYSBzdXBwbGllZCBjYW52YXMgY29udGV4dFxuXHRkcmF3VG9DYW52YXMgKGNvbnRleHQsIHBvc2l0aW9uLCBzaXplKSB7XG5cdFx0Y29udGV4dC5kcmF3SW1hZ2UoaW1nLCBwb3NpdGlvbi50b3AsIHBvc2l0aW9uLmxlZnQsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcblx0fVxuXG5cdC8vIERyYXcgdG8gdGhlIERPTS4gQXNzdW1lIHRoZSBJbWFnZSB3YXMgYWxyZWFkeSBhdHRhY2hlZCB0byB0aGUgRE9NXG5cdGRyYXdUb0RPTSAocG9zaXRpb24sIHNpemUpIHtcblx0XHR0aGlzLmltYWdlLnN0eWxlLnRvcCA9IHBvc2l0aW9uLnRvcDtcblx0XHR0aGlzLmltYWdlLnN0eWxlLmxlZnQgPSBwb3NpdGlvbi5sZWZ0O1xuXHRcdHRoaXMuaW1hZ2Uuc3R5bGUud2lkdGggPSBzaXplLndpZHRoO1xuXHRcdHRoaXMuaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XG5cdH1cblxufVxuIiwiLyoqIFxuICogSW5mby5qc1xuICogR2VuZXJpYyBpbmZvcm1haXRvbiBvYmplY3RcbiAqIEBpbmhlcml0cyBHYW1lUGllY2VcbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm8gZXh0ZW5kcyBHYW1lUGllY2Uge1xuXG5cdGNvbnN0cnVjdG9yKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cdH1cblxuXHRzZXRBdXRob3IgKGF1dGhvcikge1xuXHRcdHRoaXMuYXV0aG9yID0gYXV0aG9yO1xuXHR9XG5cblx0c2V0U291cmNlIChzb3VyY2UpIHtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG59IiwiLyoqIFxuICogSW5zdHJ1Y3Rpb25zLmpzXG4gKiBUZXh0IHdoaWNoIHRlbGxzIHRoZSBQbGF5ZXIgaG93IHRvIHBsYXkgdGhlIGdhbWUuXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG4gaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdHJ1Y3Rpb25zIGV4dGVuZHMgU3RhdGljVGV4dCB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cdH1cbn1cbiIsIi8qKiBcbiAqIExpb24uanNcbiAqIEEgTGlvbiwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExpb24gZXh0ZW5kcyBBbmltYWwge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuIFx0fVxuIH0iLCIvKiogXG4gKiBAY2xhc3MgTW92ZXJcbiAqIEBkZXNjcmlwdGlvbiB1cGRhdGUgcG9zaXRpb24gb2Ygb2JqZWN0IGJlaW5nIGFuaW1hdGVkIGJ5IEdhbWUuXG4gKi9cblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmVyIHtcblxuIFx0Y29uc3RydWN0b3IgKGdhbWVPYmopIHtcbiBcdFx0Ly90aGlzLm5ld1RvcCA9IDEsIHRoaXMubmV3TGVmdCA9IDEsIHRoaXMubmV3Qm90dG9tID0gMSwgdGhpcy5uZXdSaWdodCA9IDE7XG4gXHRcdHRoaXMub2JqID0gZ2FtZU9iajtcblxuICAgICAgICAvLyBDaGFyYWN0ZXIgaGFzIHJlZmVyZW5jZSB0byBHYW1lXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWVPYmouZ2FtZTtcblxuICAgICAgICAvLyBNb3ZlbWVudCB0eXBlc1xuICAgICAgICB0aGlzLnR5cGUgPSAwO1xuICAgICAgICB0aGlzLlNMRVcgPSAxO1xuICAgICAgICB0aGlzLlJBTkRPTSA9IDI7XG4gICAgICAgIHRoaXMuUElOR1BPSU5HID0gMztcblxuIFx0fVxuXG4gXHQvKiogXG4gXHQgKiBAbWV0aG9kIGluaXRTbGlkZXJcbiBcdCAqIEBkZXNjcmlwdGlvbiBzbGV3IG9iamVjdCBob3Jpem9udGFsbHkgd2l0aCBrZXlwcmVzc2VzXG4gXHQgKiBAcGFyYW0gZGVnIHRoZSBkZWdyZWVzIHRvIHJvdGF0ZSB0aGUgUGxheWVyLiBcbiAgICAgKiBOT1RFOiB3ZSBhbHNvIGdyYWIgdGhlICdUcnVtcCcgb2JqZWN0LlxuIFx0ICovXG4gXHRpbml0U2xldygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXRpbmcgc2xldyBtb3Rpb24nKTtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5TTEVXO1xuXG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgICAgICB0aGlzLnRpY2tlciA9IDA7XG4gICAgICAgIHRoaXMubGFzdERpciA9IDE7XG5cbiAgICAgICAgLy8gYWRkIGJvdHRvbSwgcmlnaHQgdG8gbWFrZSBhIFJlY3QgZm9yIHRoZSBQbGF5ZXJBcmVhXG4gICAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10ucGxheWVyQXJlYXNbMF0ucG9zaXRpb247XG4gICAgICAgIHRoaXMuYm91bmRzLndpZHRoID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10ucGxheWVyQXJlYXNbMF0uc2l6ZS53aWR0aDtcbiAgICAgICAgdGhpcy5ib3VuZHMuaGVpZ2h0ID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10ucGxheWVyQXJlYXNbMF0uc2l6ZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm91bmRzLmJvdHRvbSA9IHRoaXMuYm91bmRzLnRvcCArIHRoaXMuYm91bmRzLmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3VuZHMucmlnaHQgPSB0aGlzLmJvdW5kcy5sZWZ0ICsgdGhpcy5ib3VuZHMud2lkdGg7XG5cbiAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMub2JqLmltYWdlO1xuXG4gICAgICAgIC8vIHRvZ2dsZSB0aGUgcG9zaXRpb24gb2YgdGhlIFBsYXllciB3aGVuIGtpY2tpbmdcbiAgICAgICAgdGhpcy51bktpY2sgPSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XG4gICAgICAgIHRoaXMuaW5LaWNrID0gdGhpcy5vYmoucG9zaXRpb24udG9wIC0gNjtcblxuICAgICAgICAvLyBsaXN0ZW4gZm9yIHVzZXIgZXZlbnRzXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBcbiAgICAgICAgICAgIGV2ZW50ID0+IHRoaXMuc2xldyhldmVudCksIGZhbHNlKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsXG4gICAgICAgICAgICBldmVudCA9PiB0aGlzLnVua2ljayhldmVudCksIGZhbHNlKTtcbiBcdH1cblxuICAgIC8qKiBcbiAgICAgKiBAbWV0aG9kIGluaXRSYW5kb21cbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdCByYW5kb20gbW90aW9ucyBhbG9uZyBhIHBhdGguIFVzZWQgZm9yIFxuICAgICAqIEFuaW1hbCBjaGFyYWN0ZXJzIG1vdmluZyB0aHJvdWdoIHRoZSBBbmltYWxBcmVhLlxuICAgICAqL1xuICAgIGluaXRSYW5kb20gKHByZWZTcGVlZCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0IHJhbmRvbSBtb3Rpb24nKTtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5SQU5ET007XG5cbiAgICAgICAgdGhpcy5zcGVlZCA9IHByZWZTcGVlZCAqIHRoaXMudGltZVN0YW1wUmFuZG9tKCk7XG4gICAgICAgIHRoaXMuZGVsYXkgPSB0aGlzLnRpbWVTdGFtcFJhbmRvbSgpICogMzAwO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5kZWxheUNvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLk1BWCA9IDMwO1xuICAgICAgICB0aGlzLk1BWF9ERUxBWSA9IDMwMDtcblxuICAgICAgICAvLyBhZGQgYm90dG9tLCByaWdodCB0byBtYWtlIGEgUmVjdCBmb3IgdGhlIEFuaW1hbEFyZWFcbiAgICAgICAgdGhpcy5ib3VuZHMgPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5ib3VuZHMud2lkdGggPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5zaXplLndpZHRoO1xuICAgICAgICB0aGlzLmJvdW5kcy5oZWlnaHQgPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5zaXplLmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3VuZHMuYm90dG9tID0gdGhpcy5ib3VuZHMudG9wICsgdGhpcy5ib3VuZHMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdW5kcy5yaWdodCA9IHRoaXMuYm91bmRzLmxlZnQgKyB0aGlzLmJvdW5kcy53aWR0aDtcblxuICAgICAgICAvLyBnZXQgYm90dG9tIGFuZCByaWdodCBmcm9tIENoYXJhY3RlciBmcm9tIGl0cyBJbWFnZVxuICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5vYmouaW1hZ2U7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgaW5pdFBpbmdQb25nXG4gICAgICogQGRlc2NyaXB0aW9uIGhhdmUgYSBUcnVtcCBpbml0LlxuICAgICAqIE5PVEU6IGNvbGxpc2lvbiBwb3RlbnRpYWwgYWRkZWQgc2VwYXJhdGVseVxuICAgICAqL1xuICAgIGluaXRQaW5nUG9uZyAocHJlZlNwZWVkLCB0cnVtcCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW5pdCBwaW5ncG9uZyBtb3Rpb24nKTtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5QSU5HUE9ORztcblxuICAgICAgICAvL0FuaW1hbCBhcmVhXG4gICAgICAgIC8vIGFkZCBib3R0b20sIHJpZ2h0IHRvIG1ha2UgYSBSZWN0IGZvciB0aGUgQW5pbWFsQXJlYVxuICAgICAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLmJvdW5kcy53aWR0aCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnNpemUud2lkdGg7XG4gICAgICAgIHRoaXMuYm91bmRzLmhlaWdodCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnNpemUuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdW5kcy5ib3R0b20gPSB0aGlzLmJvdW5kcy50b3AgKyB0aGlzLmJvdW5kcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm91bmRzLnJpZ2h0ID0gdGhpcy5ib3VuZHMubGVmdCArIHRoaXMuYm91bmRzLndpZHRoO1xuXG4gICAgICAgIC8vIGdldCBib3R0b20gYW5kIHJpZ2h0IGZyb20gQ2hhcmFjdGVyIGZyb20gaXRzIEltYWdlXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLm9iai5pbWFnZTtcblxuICAgICAgICB0aGlzLm9iai5zcGVlZCA9IDA7XG4gICAgICAgIHRoaXMub2JqLmR4ID0gMDtcbiAgICAgICAgdGhpcy5vYmouZHkgPSAwO1xuICAgIH1cblxuIFx0LyoqIFxuIFx0ICogQG1ldGhvZCBzbGV3IFxuIFx0ICogTW92ZSBvYmplY3Qgc2xpZ2h0bHkgdXAgZm9yIGR1cmF0aW9uIG9mIHNwYWNlIGJhciBkb3duXG4gICAgICogQ2FsbGJhY2sgZm9yIGtleWRvd24gYWRkRXZlbnRMaXN0ZW5lclxuICAgICAqIEBwYXJhbSBFdmVudCBlIHRoZSBrZXlkb3duIGV2ZW50XG4gICAgICovXG4gXHRzbGV3IChlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICB0aGlzLmtpY2soZSk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL3ByZXZlbnQgc2Nyb2xsXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQrKztcbiAgICAgICAgICAgICAgICB0aGlzLnRpY2tlciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdERpciA9IC0xO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy9wcmV2ZW50IHNjcm9sbFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkKys7XG4gICAgICAgICAgICAgICAgdGhpcy50aWNrZXIgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3REaXIgPSAxO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy9wcmV2ZW50IHNjcm9sbFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuIFx0fVxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgdXBkYXRlU2xld1xuICAgICAqIEBkZXNjcmlwdGlvbiBwcm92aWRlIHNpbXBsZSBlYXNpbmcgbW90aW9uLCBhbHNvLCBib3VuY2UgXG4gICAgICogb2ZmIHdhbGxzLlxuICAgICAqL1xuICAgIHVwZGF0ZVNsZXcgKCkge1xuICAgICAgICB0aGlzLnRpY2tlcisrO1xuICAgICAgICBpZiAodGhpcy5zcGVlZCA+IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpY2tlciA+IDEwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCAvPSAyO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCArPSAodGhpcy5sYXN0RGlyICogdGhpcy5zcGVlZCk7XG5cbiAgICAgICAgLy9jaGVjayBib3VuZHNcbiAgICAgICAgaWYgKHRoaXMuYm91bmRzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIHcgPSB0aGlzLmltYWdlLmRhdGEud2lkdGg7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPCB0aGlzLmJvdW5kcy5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdERpciA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPSB0aGlzLmJvdW5kcy5sZWZ0ICsgKHRoaXMuc3BlZWQgKiAxLjUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vYmoucG9zaXRpb24ubGVmdCA+IHRoaXMuYm91bmRzLnJpZ2h0IC0gdykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3REaXIgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCA9IHRoaXMuYm91bmRzLnJpZ2h0IC0gdyAtICh0aGlzLnNwZWVkICogMS41KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogQG1ldGhvZCBraWNrXG4gICAgICogQGRlc2NyaXB0aW9uIGlmIGZvb3QgaXMgbmVhciBUcnVtcCwga2ljayBoaW0gaW50byB0aGUgQW5pbWFsXG4gICAgICovXG4gICAga2ljayAoZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCc6Ojo6VEhJUyBUUlVNUDo6Ojo6JyArIHRoaXMub2JqLnRydW1wKVxuICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPSB0aGlzLmluS2ljaztcblxuXG4gICAgICAgIC8vIHNlZSBpZiB3ZSdyZSBjbG9zZSBlbm91Z2ggdG8ga2ljayBpbiB0aGUgeSBheGlzXG4gICAgICAgIHZhciB0cnVtcFlEaXN0ID0gdGhpcy5vYmoucG9zaXRpb24udG9wIC0gdGhpcy5vYmoudHJ1bXAuaW1hZ2UuZGF0YS53aWR0aCAtIHRoaXMub2JqLnRydW1wLnBvc2l0aW9uLnRvcDtcbiAgICAgICAgLy9jb25zb2xlLmxvZygndHJ1bXBZRGlzdDonICsgdHJ1bXBZRGlzdClcblxuICAgICAgICAvLyBJZiBQbGF5ZXIgaXMgY2xvc2UgaW4gWSwgYW5kIGluc2lkZSBYIHJhbmdlLCBraWNrIHRoZSBUcnVtcCBpbnRvIEFuaW1hbEFyZWFcbiAgICAgICAgaWYgKHRydW1wWURpc3QgPCAxMCkge1xuXG4gICAgICAgIC8vIHN0YXJ0IHRoZSBUcnVtcCBtb3ZpbmcsIHNwZWVkXG4gICAgICAgIHRoaXMub2JqLnRydW1wLnNwZWVkID0gNTtcblxuICAgICAgICAgICAgLy8gY29tcHV0ZSBkeCBhbmQgZHkgZm9yIFRydW1wXG4gICAgICAgICAgICB2YXIgZGlzdCA9ICh0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IC0gdGhpcy5vYmoudHJ1bXAucG9zaXRpb24ubGVmdCkgLyA1MDtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaXN0KSA8IDEuMCkge1xuICAgICAgICAgICAgICAgIHZhciBkeCA9IGRpc3Q7XG4gICAgICAgICAgICAgICAgaWYoZHggPiAwICYmIGR4IDwgMC43KSB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHggPSBkeDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHkgPSAxLjAgLSBkeDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGR4IDwgMCAmJiBkeCA+IC0wLjcpIHtcbiAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keCA9IGR4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keSA9IDEuMCArIGR4O1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHggPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSAvLyBlbmQgb2YgZnVuY3Rpb25cblxuICAgIC8qKiBcbiAgICAgKiBAbWV0aG9kIHVua2lja1xuICAgICAqIEBkZXNjcmlwdGlvbiBzZXQgcG9zaXRpb24gb2YgUGxheWVyIGJhY2sgdG8gb3JpZ2luYWxcbiAgICAgKi9cbiAgICB1bmtpY2sgKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCA9IHRoaXMudW5LaWNrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gXHR0aW1lU3RhbXBSYW5kb20gKCkge1xuIFx0XHR2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxuICAgICAgICB9XG5cdFx0dmFyIG51bSA9ICd4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSoxMCklMTAgfCAwO1xuICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZC8xMCk7XG4gICAgICAgICAgICByZXR1cm4gKGM9PSd4JyA/IHIgOiAociYweDN8MHg4KSkudG9TdHJpbmcoMTApO1xuICAgICAgICB9KTtcbiAgICAgIHJldHVybiBudW0gLyAxMDAwMDtcbiBcdH1cblxuIFx0LyoqXG5cdCAqIFJldHVybnMgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gbWluIChpbmNsdXNpdmUpIGFuZCBtYXggKGV4Y2x1c2l2ZSlcblx0ICogQGxpbmsgXG5cdCAqL1xuXHRnZXRSYW5kb20obWluLCBtYXgpIHtcbiAgICBcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuXHR9XG5cblxuIFx0LyoqIFxuIFx0ICogQG1ldGhvZCB1cGRhdGVSYW5kb21XYWxrXG4gXHQgKiBAZGVzY3JpcHRpb24gZ2VuZXJhdGUgcmFuZG9tIHdhbGssIHdpdGggb25lIHByZWZlcnJlZCBkaXJlY3Rpb24sIFxuIFx0ICogdXNlZCBieSBBbmltYWxzXG4gXHQgKi9cbiBcdHVwZGF0ZVJhbmRvbVdhbGsgKCkge1xuIFx0XHR0aGlzLmNvdW50ZXIrKztcbiBcdFx0dGhpcy5kZWxheUNvdW50ZXIrKztcbiBcdFx0aWYgKHRoaXMuZGVsYXlDb3VudGVyIDwgdGhpcy5kZWxheSkge1xuIFx0XHRcdC8vY29uc29sZS5sb2coJ2RlbGF5Q291bnRlcjonICsgdGhpcy5kZWxheUNvdW50ZXIgKyAnIE1BWDonICsgdGhpcy5NQVhfREVMQVkpO1xuIFx0XHRcdHJldHVybjtcbiBcdFx0fVxuIFx0XHRzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XG4gXHRcdFx0Y2FzZSAndG9wJzpcbiBcdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLnRvcCAtPSAodGhpcy5zcGVlZCArICgwLjEgKiB0aGlzLmdldFJhbmRvbSgxLCB0aGlzLnNwZWVkKSkpO1xuIFx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24ubGVmdCArPSAxMCAqICh0aGlzLmdldFJhbmRvbSgtdGhpcy5zcGVlZCwgdGhpcy5zcGVlZCkpO1xuIFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0Y2FzZSAnbGVmdCc6XG4gXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IC09ICh0aGlzLnNwZWVkICsgKDAuMSAqIHRoaXMuZ2V0UmFuZG9tKDEsIHRoaXMuc3BlZWQpKSk7XG4gXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi50b3AgKz0gIDEwICoodGhpcy5nZXRSYW5kb20oLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpKTtcbiBcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdGNhc2UgJ2JvdHRvbSc6XG4gIFx0XHRcdFx0aWYgKHRoaXMuY291bnRlciA+IHRoaXMuTUFYKSB7XG4gIFx0XHRcdFx0XHR0aGlzLk1BWCA9IHBhcnNlSW50KDQsIDMwKTtcbiBcdFx0XHRcdFx0dGhpcy5uZXdMZWZ0ID0gKHRoaXMuZ2V0UmFuZG9tKC10aGlzLnNwZWVkLCB0aGlzLnNwZWVkKSk7XG4gXHRcdFx0XHRcdHRoaXMuY291bnRlciA9IDA7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlciA+IHRoaXMuTUFYIC8gMikge1xuIFx0XHRcdFx0XHR0aGlzLnNwZWVkICs9IHRoaXMudGltZVN0YW1wUmFuZG9tKCkgLyA1MDtcbiBcdFx0XHRcdH1cblx0XHRcdCBcdHRoaXMub2JqLnBvc2l0aW9uLnRvcCArPSB0aGlzLnNwZWVkO1xuIFx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24ubGVmdCArPSB0aGlzLm5ld0xlZnQ7XG4gXHRcdFx0XHRicmVhaztcbiBcdFx0XHRjYXNlICdyaWdodCc6XG4gXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ICs9ICh0aGlzLnNwZWVkICsgKDAuMSAqIHRoaXMuZ2V0UmFuZG9tKDEsIHRoaXMuc3BlZWQpKSk7XG4gXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi50b3AgKz0gMTAgKiAodGhpcy5nZXRSYW5kb20oLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpKTtcbiBcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRjb25zb2xlLmVycm9yKCdNb3Zlci5zZXRQcmVmRGlyZWN0aW9uOiBpbnZhbGlkIGRpcmVjdGlvbjonICsgdGhpcy5kaXJlY3Rpb24pO1xuIFx0XHRcdFx0YnJlYWs7XG4gXHRcdH1cbiAgICB9XG5cblxuICAgIC8qKiBcbiAgICAgKiBAbWV0aG9kIHBpbmdQb25nXG4gICAgICogQGRlc2NyaXB0aW9uIG1vdmUgaW4gYSBwaW5nLXBvbmcgc3R5bGUuIFRoaXMgaXMgc3BlY2lmaWMgdG8gdGhlIGdhbWUuXG4gICAgICogMS4gY29sbGlzaW9uIHN0YXJ0cyB0aGUgY2hhcmFjdGVyIG1vdmluZ1xuICAgICAqIDIuIHRoZXkgYm91bmNlIG9uIGFsbCB3YWxscyBFWENFUFQgdGhlIG9uZSB0aGV5IHdlcmUgY2xvc2VzdCB0byB3aGVuIGNvbGxpZGUgd2l0aFxuICAgICAqIDMuIHdoZW4gdGhleSBpbnRlcnNlY3QgdGhhdCB3YWxsLCB0aGV5IHN0b3BcbiAgICAgKi9cbiAgICBwaW5nUG9uZyAoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2R4OicgKyB0aGlzLm9iai5keCArICcgZHk6JyArIHRoaXMub2JqLmR5KTtcbiAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCAtPSB0aGlzLm9iai5zcGVlZCAqIHRoaXMub2JqLmR4O1xuICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgLT0gdGhpcy5vYmouc3BlZWQgKiB0aGlzLm9iai5keTtcblxuICAgICAgICAvL1RPRE86IGNoZWNrIGZvciBjb2xsaXNpb25zIHdpdGggQW5pbWFsQXJlYSBhbmQgQW5pbWFscy5cbiAgICAgICAgLy9MZXQgYm91bmNlIDEgdGltZSBvZmYgb2YgYm90dG9tLCBidXQgc3RvcCB0aGUgc2Vjb25kIHRpbWVcblxuICAgIH1cblxuICAgIHdhc0tpY2tlZCAoKSB7XG5cbiAgICB9XG5cbiAgICB1cGRhdGVQaW5nUG9uZyAoKSB7XG5cbiAgICB9XG5cbiB9IC8vIGVuZCBvZiBjbGFzc1xuIiwiLyoqIFxuICogUGxheWVyLmpzXG4gKiBVc2VyLWNvbnRyb2xsZWQgQ2hhcmFjdGVyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuXG4gLy8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG4gaW1wb3J0IE1vdmVyIGZyb20gJy4vTW92ZXIuanMnO1xuIGltcG9ydCBDb2xsaWRlciBmcm9tICcuL0NvbGxpZGVyLmpzJztcbiAvLyBFTkQgQURERUQgV0VFSyAxMTw8PDw8PDw8PDw8PDxcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIENoYXJhY3RlciB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG5cbiBcdFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG4gXHRcdHRoaXMubW92ZXIuaW5pdFNsZXcoKTtcbiAgXHRcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcdFx0XG4gXHR9XG5cbiAgXHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcbiBcdHVwZGF0ZSAoKSB7XG4gXHRcdHRoaXMubW92ZXIudXBkYXRlU2xldygpO1xuIFx0fVxuIFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxuXG5cbiB9IiwiLyoqIFxuICogUGxheWVyQXJlYS5qc1xuICogVGhlIHJlZ2lvbiB3aGVyZSB0aGUgUGxheWVyIGNhbiBtb3ZlLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQXJlYVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckFyZWEgZXh0ZW5kcyBBcmVhIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuIFx0fVxuXG4gfSIsIi8qKiBcbiAqIFNjb3JlLmpzXG4gKiBEaXNwbGF5IHVzZXIgc2NvcmVcbiAqIEBpbmhlcml0cyBEeW5hbWljVGV4dCwgVGV4dCwgSW5mbywgR2FtZVBpZWNlXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgRHluYW1pY1RleHQgZnJvbSAnLi9EeW5hbWljVGV4dC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlIGV4dGVuZHMgRHluYW1pY1RleHQge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXHR9XG59IiwiLyoqIFxuICogU2NyZWVuLmpzXG4gKiBHZW5lcmljIFNjcmVlbiBvYmplY3RcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UuanNcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbiBpbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW4gZXh0ZW5kcyBHYW1lUGllY2Uge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7IC8vaW5pdCAncGFyZW50JyBHYW1lUGllY2VcblxuIFx0XHQvLyBzYXZlIGEgcmVmZXJlbmNlIHRvIG91ciBwYXJlbnQgR2FtZSBvYmplY3RcbiBcdFx0dGhpcy5nYW1lID0gY29uZmlnLmdhbWU7XG5cbiBcdFx0Ly8gU2NyZWVucyBhcmUgZGVmaW5lZCBpbiBIVE1MLCBzbyBzYXZlIGEgcmVmZXJlbmNlIHRvIG91ciBET00gaWRcbiBcdFx0dGhpcy5kb21JZCA9IGNvbmZpZy5pZDtcblxuIFx0XHQvLyBzYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBET00gZWxlbWVudCB3ZSdyZSBjb25uZWN0ZWQgdG9cbiBcdFx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRvbUlkKTtcblxuIFx0XHQvLyBpbnNlcnQgdGhlIGNvcHlyaWdodCBpbmZvIGZyb20gdGhlIG1haW4gR2FtZSBvYmplY3RcbiBcdFx0dGhpcy5hZGRXYXJuaW5nKCk7XG4gXHR9XG5cbiBcdC8vIGxvYWQgYSBiYWNrZ3JvdW5kIGltYWdlIGludG8gdGhlIFNjcmVlblxuIFx0bG9hZEJhY2tncm91bmQgKHBhdGgsIGNhbGxiYWNrKSB7XG4gXHRcdGNvbnNvbGUubG9nKFwibG9hZGluZzpcIiArIHRoaXMuZG9tSWQpO1xuIFx0XHR0aGlzLmJhY2tncm91bmRJbWFnZSA9IG5ldyBTdGF0aWNJbWFnZShcbiBcdFx0XHR7XG4gXHRcdFx0XHRuYW1lOiB0aGlzLm5hbWUgKyAnLWltYWdlJyxcbiBcdFx0XHRcdGRvbUlkOiB0aGlzLmlkICsgJy1pbWFnZScsXG4gXHRcdFx0XHRwYXRoOiBwYXRoLFxuIFx0XHRcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrXG4gXHRcdFx0fVxuIFx0XHQpO1xuIFx0XHR0aGlzLmJhY2tncm91bmRJbWFnZS5sb2FkQmFja2dyb3VuZEltYWdlKHRoaXMuZG9tLCBwYXRoLCBjYWxsYmFjayk7XG4gXHR9XG5cbiBcdC8vIHNob3cgYW5kIGhpZGUgcmVnaW9ucyBvZiB0aGUgU2NyZWVuXG4gXHRzaG93U2NyZWVuICgpIHtcbiBcdFx0Y29uc29sZS5sb2coXCJzaG93aW5nOlwiICsgdGhpcy5kb21JZCk7XG4gXHRcdHRoaXMuZG9tLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gXHR9XG5cbiBcdGhpZGVTY3JlZW4gKCkge1xuIFx0XHRjb25zb2xlLmxvZyhcImhpZGluZzpcIiArIHRoaXMuZG9tSWQpO1xuIFx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gXHR9XG5cbiBcdHNob3dIZWFkZXIgKCkge1xuIFx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiBcdH1cblxuIFx0aGlkZUhlYWRlciAoKSB7XG5cdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuIFx0fVxuXG4gXHRzaG93Rm9vdGVyICgpIHtcblx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuIFx0fVxuXG4gXHRoaWRlRm9vdGVyICgpIHtcblx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gXHR9XG5cbiBcdGFkZFdhcm5pbmcgKCkge1xuIFx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykuaW5uZXJIVE1MID0gdGhpcy5nYW1lLndhcm5pbmc7XG4gXHR9XG5cbiB9OyIsIi8qKiBcbiAqIFN0YXJ0U2NyZWVuLmpzXG4gKiBPcGVuaW5nIHNjcmVlbiBmb3IgZ2FtZS5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIFNjcmVlblxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuXG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XG5cbmltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbmltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbmltcG9ydCBJZGVudGl0eSBmcm9tICcuL0lkZW50aXR5LmpzJztcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vQmFja2dyb3VuZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0U2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblxuXHRcdC8vIHRoaXMuZG9tIGRlZmluZWQgaW4gU2NyZWVuXG5cblx0XHQvLyBMb2FkIFN0YXJ0U2NyZWVuIHN1Yi1vYmplY3RzXG5cdFx0dGhpcy5sb2FkQmFja2dyb3VuZCgnaW1nL3NjcmVlbnMvc3RhcnQtc2NyZWVuLnBuZycpO1xuXG5cdFx0Ly8gbG9hZCBpZGVudGl0eSBpbWFnZVxuXHRcdHRoaXMubG9hZElkZW50aXR5KCk7XG5cblx0XHQvLyBsb2FkIGluc3RydWN0aW9uc1xuXHRcdHRoaXMubG9hZEluc3RydWN0aW9ucygpO1xuXG5cdFx0Ly8gTWFrZSB0aGUgc3RhcnQgYnV0dG9uIG9wZW4gdGhlIG1haW4gZ2FtZSBzY3JlZW5cblx0XHR0aGlzLmJpbmRTdGFydCgpO1xuXHR9XG5cblx0bG9hZElkZW50aXR5ICgpIHtcblx0XHR0aGlzLmlkZW50aXR5ID0gbmV3IElkZW50aXR5KFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnaWRlbnRpdHknLCBcblx0XHRcdFx0ZG9tSWQ6ICdzdGFydC1zY3JlZW4taWRlbnRpdHknLFxuXHRcdFx0XHRwYXRoOiAnaW1nL2lkZW50aXR5L2xvZ28ucG5nJywgXG5cdFx0XHRcdGF1dGhvcjogJ3BldGUgbWFya2lld2ljeicsIFxuXHRcdFx0XHRzb3VyY2U6ICdwbHlvanVtcCdcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0Ly8gc2V0IHBvc2l0aW9uIG9mIElkZW50aXR5XG5cdFx0dGhpcy5pZGVudGl0eS5zZXRET01Qb3NpdGlvbiAoXG5cdFx0XHR7XG5cdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0bGVmdDogMFxuXHRcdFx0fVxuXHRcdCk7XG5cblx0fVxuXG5cdGxvYWRJbnN0cnVjdGlvbnMgKCkge1xuXG5cdFx0dGhpcy5pbnN0cnVjdGlvbnMgPSBuZXcgU3RhdGljVGV4dChcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ2dhbWUgaW5zdHJ1Y3Rpb25zJyxcblx0XHRcdFx0ZG9tSWQ6ICdpbnN0cnVjdGlvbnMnLFxuXHRcdFx0XHR0ZXh0OiAnUGxheSB0byB3aW4uIFRoYXQgaXMgYWxsIFRydW1wIGNhcmVzIGFib3V0LCBhbmQgc28gc2hvdWxkIHlvdS4nXG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaW5zdHJ1Y3Rpb25zLnNldERPTVBvc2l0aW9uKFxuXHRcdFx0e1xuXHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHR9XG5cdFx0KTtcblxuXHR9XG5cblx0YmluZFN0YXJ0ICgpIHtcblx0XHRjb25zb2xlLmxvZyhcImluIGJpbmRTdGFydCwgdGhpcy5nYW1lOlwiICsgdGhpcy5nYW1lKVxuXHRcdC8vIHdlIHVzZSBiaW5kKCkgdG8gbGluayB0aGUgZnVuY3Rpb24gYmVsb3cgdG8gU3RhcnRTY3JlZW4gKG90aGVyd2lzZSwgaXQgdGhpbmtzIGl0IGlzIGluc2lkZSB3aW5kb3cpXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXJ0LXNjcmVlbi1wbGF5LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXG5cdFx0XHRmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHQvL2FsZXJ0KFwiaW4gaGFuZGxlciwgZ2FtZTpcIiArIHRoaXMuZ2FtZSlcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLmdhbWUuc3RhcnRHYW1lKCk7XG5cblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cbn0iLCIvKiogXG4gKiBTdGF0aWNJbWFnZS5qc1xuICogSW1hZ2Utc3R5bGUgSW5mb3JtYXRpb24gdGhhdCBjYW5ub3QgYmUgY2hhbmdlZCBvbmNlIHRoZSBnYW1lIGlzIGxvYWRlZFxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpY0ltYWdlIGV4dGVuZHMgSW1hZ2Uge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXG5cdFx0dGhpcy5zdGF0aWMgPSB0cnVlO1xuXHR9XG5cbn1cbiIsIi8qKiBcbiAqIFN0YXRpY1RleHQuanNcbiAqIFRleHQgdGhhdCBjYW5ub3QgYmUgY2hhbmdlZCBhZnRlciBsb2FkZWQgYnkgdGhlIGdhbWVcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGljVGV4dCBleHRlbmRzIFRleHQge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXG5cdFx0dGhpcy5zdGF0aWMgPSB0cnVlO1xuXG5cdH1cblxufVxuIiwiLyoqIFxuICogVGV4dC5qc1xuICogQ3JlYXRlcyBhIHRleHQtdHlwZSBJbmZvIG9iamVjdFxuICogQGluaGVyaXRzIEluZm8sIEdhbWVQaWVjZVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBJbmZvIHtcblxuIFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG5cbiBcdFx0Ly8gc2V0IHRoZSB0ZXh0XG4gXHRcdHRoaXMuc2V0VGV4dChjb25maWcudGV4dCk7XG5cbiBcdFx0Ly8gc2V0IHRoZSBET01JZFxuIFx0XHR0aGlzLmFkZFRvRE9NKGNvbmZpZy5kb21JZCk7XG4gXHR9XG5cbiBcdHNldFRleHQgKHR4dCkge1xuIFx0XHR0aGlzLnRleHQgPSB0eHQ7XG4gXHR9XG5cbiBcdGFkZFRvRE9NIChkb21JZCkge1xuXG4gXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gXHRcdHRoaXMuZG9tLmlkID0gbmFtZSArICctVGV4dCc7XG4gXHRcdHRoaXMuZG9tLmlubmVySFRNTCA9IHRoaXMudGV4dDtcblxuIFx0XHQvLyBjb250YWluZXJcbiBcdFx0dmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvbUlkKTtcblxuIFx0XHQvLyBhZGQgdG8gdGhlIERPTVxuIFx0XHRjb250YWluZXIuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tLCBjb250YWluZXIuY2hpbGROb2Rlc1swXSk7XG5cblx0fVxuXG4gfSIsIi8qKiBcbiAqIFRpZ2VyLmpzXG4gKiBBIFRpZ2VyLCB3aG8gdHJpZXMgdG8gZ2V0IHRoZSBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuIGltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlnZXIgZXh0ZW5kcyBBbmltYWwge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuIFx0fVxuIH0iLCIvKiogXG4gKiBUcnVtcC5qc1xuICogVGhlIGJhbGwtbGlrZSBDaGFyYWN0ZXIgeW91IGtpY2sgaW50byBBbmltYWxzXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuXG4gLy8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG4gaW1wb3J0IE1vdmVyIGZyb20gJy4vTW92ZXIuanMnO1xuIGltcG9ydCBDb2xsaWRlciBmcm9tICcuL0NvbGxpZGVyLmpzJztcbiAvLyBFTkQgQURERUQgV0VFSyAxMTw8PDw8PDw8PDw8PDxcbiBcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBUcnVtcCBleHRlbmRzIENoYXJhY3RlciB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG5cbiBcdFx0dGhpcy5tb3Zlci5pbml0UGluZ1BvbmcoMCwgdGhpcyk7XG5cbiBcdH1cblxuIFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG4gXHR1cGRhdGUgKCkge1xuIFx0XHR0aGlzLm1vdmVyLnBpbmdQb25nKCk7XG4gXHR9XG4gXHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cbiB9IiwiLyoqIFxuICogQ3JlYXRlIHRoZSBnYW1lLiBJbXBvcnQgdGhlIHByaW1hcnkgY2xhc3NlcywgYW5kICdjb21wb3NpdGUnIFxuICogdGhlIG92ZXJhbGwgR2FtZSBvYmplY3Qgb3V0IG9mIGluc3RhbmNlcyBvZiB0aGUgY2xhc3Nlcy5cbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbi8vVGhlIGVudGlyZSBnYW1lXG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUuanMnO1xuXG4vL1NjcmVlbiBpbmhlcml0YW5jZVxuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSAnLi9TdGFydFNjcmVlbi5qcyc7XG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuL0dhbWVTY3JlZW4uanMnO1xuaW1wb3J0IEVuZFNjcmVlbiBmcm9tICcuL0VuZFNjcmVlbi5qcyc7XG5cbi8vSW5mbyBpbmhlcml0YW5jZVxuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xuaW1wb3J0IElkZW50aXR5IGZyb20gJy4vSWRlbnRpdHkuanMnO1xuaW1wb3J0IEluc3RydWN0aW9ucyBmcm9tICcuL0luc3RydWN0aW9ucy5qcyc7XG5pbXBvcnQgRHluYW1pY1RleHQgZnJvbSAnLi9EeW5hbWljVGV4dC5qcyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZS5qcyc7XG5cbi8vQ2hhcmFjdGVyIGluaGVyaXRhbmNlXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbmltcG9ydCBUcnVtcCBmcm9tICcuL1RydW1wLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIuanMnO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5pbXBvcnQgTGlvbiBmcm9tICcuL0xpb24uanMnO1xuaW1wb3J0IFRpZ2VyIGZyb20gJy4vVGlnZXIuanMnO1xuaW1wb3J0IEJlYXIgZnJvbSAnLi9CZWFyLmpzJztcbmltcG9ydCBHb3JpbGxhIGZyb20gJy4vR29yaWxsYS5qcyc7XG5pbXBvcnQgSGVhbHRoIGZyb20gJy4vSGVhbHRoLmpzJztcblxuLy9BcmVhIGluaGVyaXRhbmNlLlxuaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcbmltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XG5pbXBvcnQgQW5pbWFsQXJlYSBmcm9tICcuL0FuaW1hbEFyZWEuanMnO1xuaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi9QbGF5ZXJBcmVhLmpzJztcblxuLy9UZXN0IGZpbGUgKHZlcnkgc2ltcGxlIHRlc3RydW5uZXIpXG5pbXBvcnQgVGVzdHMgZnJvbSAnLi4vLi4vdGVzdHMvVGVzdHMuanMnO1xuXG4vKiogXG4gKiBTZXQgdXAgdGVzdHMuXG4gKi9cbnZhciBteVRlc3RzID0gbmV3IFRlc3RzKCk7XG5cbi8qKlxuICogU2V0IHVwIHRoZSBHYW1lXG4gKi9cbnZhciBteUdhbWUgPSBuZXcgR2FtZSh7bmFtZTogXCJab29LaWxsU29jY2VyXCJ9KTtcblxuLyoqIFxuICogRVhQT1JUIFRPIFdFQiBDT05TT0xFXG4gKiBUbyBtYWtlIHNvbWV0aGluZyB2aXNpYmxlIGluIFdlYiBjb25zb2xlIGZvciBkZWJ1Z2dpbnQsIGF0dGFjaCB0byB3aW5kb3cgb2JqZWN0XG4gKiBOT1RFOiBQcm9mZXNzaW9uYWwgY29kZSB1c2VzIHNwZWNpYWxpemVkIHRlc3RpbmcgbW9kdWxlcyBsaWtlIE1vY2hhLCBLYXJtYSwgYW5kIFxuICogc2ltaWxhciB0ZXN0aW5nIGxpYnJhcmllcy5cbiAqL1xuXG4vLyB3ZSBjYW4gcnVuIHRoaXMgdGVzdCBtYW51YWxseSB3aXRoIHRlc3RzLnJ1bigpO1xud2luZG93LnRlc3RzID0gbXlUZXN0cztcblxuLy8gbWFrZSB0aGUgZ2FtZSBvYmplY3QgdmlzaWJsZSBzbyB3ZSBjYW4gaW5zcGVjdCBpdC5cbndpbmRvdy5nYW1lID0gbXlHYW1lO1xuXG5jb25zb2xlLmxvZygnWk9PS0lMTFNPQ0NFUiBHYW1lIGluaXRpYWxpemVkLiBBY2Nlc3MgZ2FtZSB2aWEgXCJnYW1lXCIuIFVzZSBUZXN0cy5ydW4oKSB0byB0ZXN0LicpXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi4vbW9kdWxlcy9qcy9HYW1lUGllY2UuanMnO1xuXG4vL1RoZSBlbnRpcmUgZ2FtZVxuaW1wb3J0IEdhbWUgZnJvbSAnLi4vbW9kdWxlcy9qcy9HYW1lLmpzJztcblxuLy9TY3JlZW4gaW5oZXJpdGFuY2VcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi4vbW9kdWxlcy9qcy9TY3JlZW4uanMnO1xuaW1wb3J0IFN0YXJ0U2NyZWVuIGZyb20gJy4uL21vZHVsZXMvanMvU3RhcnRTY3JlZW4uanMnO1xuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi4vbW9kdWxlcy9qcy9HYW1lU2NyZWVuLmpzJztcbmltcG9ydCBFbmRTY3JlZW4gZnJvbSAnLi4vbW9kdWxlcy9qcy9FbmRTY3JlZW4uanMnO1xuXG4vL0luZm8gaW5oZXJpdGFuY2VcbmltcG9ydCBJbmZvIGZyb20gJy4uL21vZHVsZXMvanMvSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuLi9tb2R1bGVzL2pzL1RleHQuanMnO1xuaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi4vbW9kdWxlcy9qcy9TdGF0aWNUZXh0LmpzJztcbmltcG9ydCBJZGVudGl0eSBmcm9tICcuLi9tb2R1bGVzL2pzL0lkZW50aXR5LmpzJztcbmltcG9ydCBJbnN0cnVjdGlvbnMgZnJvbSAnLi4vbW9kdWxlcy9qcy9JbnN0cnVjdGlvbnMuanMnO1xuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4uL21vZHVsZXMvanMvRHluYW1pY1RleHQuanMnO1xuaW1wb3J0IFNjb3JlIGZyb20gJy4uL21vZHVsZXMvanMvU2NvcmUuanMnO1xuXG4vL0NoYXJhY3RlciBpbmhlcml0YW5jZVxuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuLi9tb2R1bGVzL2pzL0NoYXJhY3Rlci5qcyc7XG5pbXBvcnQgVHJ1bXAgZnJvbSAnLi4vbW9kdWxlcy9qcy9UcnVtcC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL21vZHVsZXMvanMvUGxheWVyLmpzJztcbmltcG9ydCBBbmltYWwgZnJvbSAnLi4vbW9kdWxlcy9qcy9BbmltYWwuanMnO1xuaW1wb3J0IExpb24gZnJvbSAnLi4vbW9kdWxlcy9qcy9MaW9uLmpzJztcbmltcG9ydCBUaWdlciBmcm9tICcuLi9tb2R1bGVzL2pzL1RpZ2VyLmpzJztcbmltcG9ydCBCZWFyIGZyb20gJy4uL21vZHVsZXMvanMvQmVhci5qcyc7XG5pbXBvcnQgR29yaWxsYSBmcm9tICcuLi9tb2R1bGVzL2pzL0dvcmlsbGEuanMnO1xuaW1wb3J0IEhlYWx0aCBmcm9tICcuLi9tb2R1bGVzL2pzL0hlYWx0aC5qcyc7XG5cbi8vQXJlYSBpbmhlcml0YW5jZS5cbmltcG9ydCBBcmVhIGZyb20gJy4uL21vZHVsZXMvanMvQXJlYS5qcyc7XG5pbXBvcnQgQ2FnZSBmcm9tICcuLi9tb2R1bGVzL2pzL0NhZ2UuanMnO1xuaW1wb3J0IEFuaW1hbEFyZWEgZnJvbSAnLi4vbW9kdWxlcy9qcy9BbmltYWxBcmVhLmpzJztcbmltcG9ydCBQbGF5ZXJBcmVhIGZyb20gJy4uL21vZHVsZXMvanMvUGxheWVyQXJlYS5qcyc7XG5cbi8qKiBcbiAqIFRFU1RCRUQgLSBUZXN0IGFsbCBvdXIgb2JqZWN0cy4gVGhpcyBpcyBhIHZlcnkgYmFzaWMgdGVzdGluZyBzeXN0ZW0uIFxuICogTk9URTogUHJvZmVzc2lvbmFsIGNvZGUgdXNlcyB0ZXN0aW5nIGxpYnJhcmllcyBsaWtlIEthcm1hIGFuZCBNb2NoYS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdHMge1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcblx0fVxuXG5cdC8vIEJlY2F1c2Ugd2UgbWFrZSB0aGVzZSBvYmplY3RzIHdpdGggJ3ZhcicgdGhleSBhcmUgc2NvcGVkIHRvIHRoZSBydW4oKSBmdW5jdGlvbi5cblx0cnVuICgpIHtcblxuXHRcdHZhciBjb25maWcgPSB7bmFtZTonRm9yZXN0IFRydW1wIG9yIERvbmFsZCBHdW1wIHJ1bHonfTtcblxuXHRcdC8vIE1ha2Ugc29tZSB0ZXN0IGdhbWUgb2JqZWN0c1xuXHRcdHZhciBnYW1lID0gbmV3IEdhbWUoY29uZmlnKTtcblx0XHRjb25zb2xlLmxvZyhnYW1lLmdldE5hbWUoKSk7XG5cblx0XHQvL3Rlc3QgR2FtZSBPYmplY3Rcblx0XHR2YXIgbXlHYW1lID0gbmV3IEdhbWUoe25hbWU6IFwiWm9vS2lsbFNvY2NlclwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlHYW1lLmdldE5hbWUoKSk7XG5cblx0XHQvL290aGVyIG9iamVjdHNcblx0XHR2YXIgbXlTY3JlZW4gPSBuZXcgU2NyZWVuKHtuYW1lOiBcIk9wZW5pbmcgU2NyZWVuXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVNjcmVlbi5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15U3RhcnRTY3JlZW4gPSBuZXcgU3RhcnRTY3JlZW4oe25hbWU6IFwiU3RhcnQgU2NyZWVuXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVN0YXJ0U2NyZWVuLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlHYW1lU2NyZWVuID0gbmV3IEdhbWVTY3JlZW4oe25hbWU6IFwiR2FtZSBTY3JlZW5cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15R2FtZVNjcmVlbi5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15RW5kU2NyZWVuID0gbmV3IEVuZFNjcmVlbih7bmFtZTogXCJFbmQgU2NyZWVuXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUVuZFNjcmVlbi5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15SW5mbyA9IG5ldyBJbmZvKHtuYW1lOiBcIkdlbmVyaWMgSW5mb3JtYXRpb25cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15SW5mby5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15VGV4dCA9IG5ldyBUZXh0KHtuYW1lOiBcIkdlbmVyaWMgVGV4dCBPYmplY3RcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15VGV4dC5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15U3RhdGljVGV4dCA9IG5ldyBTdGF0aWNUZXh0KHtuYW1lOiBcIkdlbmVyaWMgU3RhdGljIFRleHQgT2JqZWN0XCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVN0YXRpY1RleHQuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUlkZW50aXR5ID0gbmV3IElkZW50aXR5KHtuYW1lOiBcIkdlbmVyaWMgSWRlbnRpdHkgT2JqZWN0XCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUlkZW50aXR5LmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlJbnN0cnVjdGlvbnMgPSBuZXcgSW5zdHJ1Y3Rpb25zKHtuYW1lOiBcIkdlbmVyaWMgSW5zdHJ1Y3Rpb25zIE9iamVjdFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlJbnN0cnVjdGlvbnMuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUR5bmFtaWNUZXh0ID0gbmV3IER5bmFtaWNUZXh0KHtuYW1lOiBcIkdlbmVyaWMgRHluYW1pYyBUZXh0IE9iamVjdFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlEeW5hbWljVGV4dC5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15U2NvcmUgPSBuZXcgU2NvcmUoe25hbWU6IFwic2NvcmVzLi4uXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVNjb3JlLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlDaGFyYWN0ZXIgPSBuZXcgQ2hhcmFjdGVyKHtuYW1lOiBcIkdlbmVyaWMgQ2hhcmFjdGVyXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUNoYXJhY3Rlci5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15VHJ1bXAgPSBuZXcgVHJ1bXAoe25hbWU6IFwiRG9uYWxkIFRydW1wXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVRydW1wLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlQbGF5ZXIgPSBuZXcgUGxheWVyKHtuYW1lOiBcIkVuZCBVc2VyXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVBsYXllci5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15QW5pbWFsID0gbmV3IEFuaW1hbCh7bmFtZTogXCJHZW5lcmljIEFuaW1hbFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlBbmltYWwuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUxpb24gPSBuZXcgTGlvbih7bmFtZTogXCJDb3dhcmRseSB0aGUgTGlvblwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlMaW9uLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlUaWdlciA9IG5ldyBUaWdlcih7bmFtZTogXCJDaG9tcGVyIHRoZSBUaWdlclwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlUaWdlci5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15QmVhciA9IG5ldyBCZWFyKHtuYW1lOiBcIk1hdWxlciB0aGUgQmVhclwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlCZWFyLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlHb3JpbGxhID0gbmV3IEdvcmlsbGEoeyBuYW1lOiBcIlNwdW5reSB0aGUgR29yaWxsYVwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlHb3JpbGxhLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlIZWFsdGggPSBuZXcgSGVhbHRoKHtuYW1lOiBcIk9uZSBIZWFsdGggS2l0XCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUhlYWx0aC5nZXROYW1lKCkpO1xuXG5cdFx0Ly9BcmVhIGluaGVyaXRhbmNlLlxuXHRcdHZhciBteUFyZWEgPSBuZXcgQXJlYSh7bmFtZTogXCJHZW5lcmljIEFyZWFcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15QXJlYS5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15Q2FnZSA9IG5ldyBDYWdlKHtuYW1lOiBcIkdlbmVyaWMgQXJlYVwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlDYWdlLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlBbmltYWxBcmVhID0gbmV3IEFuaW1hbEFyZWEoe25hbWU6IFwiQW5pbWFsQXJlYVwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlBbmltYWxBcmVhLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlQbGF5ZXJBcmVhID0gbmV3IFBsYXllckFyZWEoe25hbWU6IFwiUGxheWVyQXJlYVwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlQbGF5ZXJBcmVhLmdldE5hbWUoKSk7XG5cdH1cbn1cbiJdfQ==
