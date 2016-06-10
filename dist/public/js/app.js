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

    _this.mover.initRandom(0.02, 'bottom');
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
 * @description create the collision matrix defining which objects can collide 
 * with which objects. Objects that can collide have their potential colliders 
 * added as references, e.g. Player.trump or Trump.player.
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
          case 'Tiger':
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
     * @method truncate
     * @description truncate (not round) number to fixed number of decimals
     * @param Number num floating-point number
     * @param Integer decimals the number of decimals points to round to
     * @returns Number the truncated number
     */


    _createClass(Mover, [{
        key: 'truncator',
        value: function truncator(num, decimals) {
            var numPower = Math.pow(10, decimals); // "numPowerConverter" might be better
            return ~ ~(num * numPower) / numPower;
        }

        /** 
         * @method initSlider
         * @description slew object horizontally with keypresses
         * @param deg the degrees to rotate the Player. 
           * NOTE: we also grab the 'Trump' object.
         */

    }, {
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

            // NOTE: Trump is added to Player in Collider

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

            this.obj.startTop = this.obj.position.top;

            // get bottom and right from Character from its Image
            this.image = this.obj.image;

            this.obj.speed = 0;
            this.obj.dx = 0;
            this.obj.dy = 0;

            // NOTE: Animals and Players are added to Trump in Collider
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
                this.obj.trump.speed = 40;

                // TODO: ADD EDGE CASE WHERE TRUMP IN BOTTOM-LEFT, BOUNCE TO RIGHT

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
                    } else if (dx == 0) {
                        // slight randomization of dx
                        var d = performance.now();
                        d = parseInt(d) - d;
                        d = this.truncator(d, 2) / 10;
                        this.obj.trump.dx = d;
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
         * used by Animals.
           * this.direction is the overall path the Animal is following to one of the 
           * four walls of the AnimalArea. If it is 'return' it has collided with a Trump
           * and is returning to its cage.
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

            // compute dx and dy from random walk. store initial position
            var oldLeft = this.obj.position.left;
            var oldTop = this.obj.position.top;

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
                        this.speed += this.timeStampRandom() / 120;
                    }
                    this.obj.position.top += this.speed;
                    this.obj.position.left += this.newLeft;
                    break;
                case 'right':
                    this.obj.position.left += this.speed + 0.1 * this.getRandom(1, this.speed);
                    this.obj.position.top += 10 * this.getRandom(-this.speed, this.speed);
                    break;
                case 'return':
                    // TODO: return Animal to its cage
                    break;
                case 'caged':
                    // TODO: when caged, reset until it is uncaged again
                    break;
                default:
                    console.error('Mover.setPrefDirection: invalid direction:' + this.direction);
                    break;
            }

            var xdist = oldLeft - this.obj.position.left;
            var ydist = oldTop - this.obj.position.top;
            var sum = xdist + ydist;
            this.obj.dx = xdist / sum;
            this.obj.dy = ydist / sum;
        }

        /**
         * @method boxCollision
         * detect intersection of two rectangles, and 
         * rebound according to angle of collision
         * @link https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
         * @link http://gamedevelopment.tutsplus.com/tutorials/when-worlds-collide-simulating-circle-circle-collisions--gamedev-769
         */

    }, {
        key: 'calculateNewVelocities',
        value: function calculateNewVelocities(firstBall, secondBall) {

            //reverse dx and dy between objects
            //var newVelX2 = -firstBall.dx;
            //var newVelY2 = -firstBall.dy;

            //var newVelX1 = -secondBall.dx;
            //var newVelY1 = -secondBall.dy;

            console.log('firstBall.dx:' + firstBall.dx + ' secondBall.dx:' + secondBall.dx);

            //firstBall.dx = newVelX1;
            //firstBall.dy = newVelY1;

            //secondBall.dx = newVelX2;
            //secondBall.dy = newVelY2;

            //firstBall.position.left += newVelX1;
            //firstBall.position.top += newVelY1;

            //secondBall.position.left += newVelX2;
            //secondBall.position.top += newVelY2;
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

            //check bounds (AnimalArea)
            if (this.bounds) {
                if (this.obj.image.data) {

                    var w = this.obj.image.data.width;
                    var h = this.obj.image.data.height;

                    // run this only if we are moving down the screen
                    if (this.obj.dy < 0) {
                        if (this.obj.position.top > this.obj.startTop - this.obj.dy * this.obj.speed) {
                            //this.obj.dy = -this.obj.dy;
                            this.obj.position.top = this.obj.startTop;
                            this.obj.dx = 0;
                            this.obj.dy = 0;
                        }
                        var dist = this.bounds.bottom - h - this.obj.position.top;
                        var spd = -this.obj.dy * this.obj.speed * 4;
                        ////////console.log('dist:' + dist + ' spd:' + spd)

                        // decelerate before stopping at bottom of AnimalArea
                        if (dist < spd && spd > 2) {
                            this.obj.speed /= 2;
                        }
                    } //end of dy negative (going down)

                    // bounce on the other 3 walls
                    if (this.obj.position.left < this.bounds.left) {
                        this.obj.dx = -this.obj.dx;
                    }
                    if (this.obj.position.top < this.bounds.top) {
                        this.obj.dy = -this.obj.dy;
                    }
                    if (this.obj.position.left > this.bounds.right - w) {
                        this.obj.dx = -this.obj.dx;
                    }

                    // If we encounder an animal, bounce, AND 'kick' the animal back into its cage
                    if (this.obj.animals) {
                        for (var i = 0, len = this.obj.animals.length; i < len; i++) {
                            var animal = this.obj.animals[i];
                            var aw = animal.image.data.width;
                            var ah = animal.image.data.height;

                            if (this.obj.position.left < animal.position.left + aw && this.obj.position.left + w > animal.position.left && this.obj.position.top < animal.position.top + ah && this.obj.position.top + h > animal.position.top) {
                                this.calculateNewVelocities(this.obj, animal);
                            }
                        }
                    }
                }
            }
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQW5pbWFsQXJlYS5qcyIsIm1vZHVsZXMvanMvQXJlYS5qcyIsIm1vZHVsZXMvanMvQmFja2dyb3VuZC5qcyIsIm1vZHVsZXMvanMvQmVhci5qcyIsIm1vZHVsZXMvanMvQ2FnZS5qcyIsIm1vZHVsZXMvanMvQ2hhcmFjdGVyLmpzIiwibW9kdWxlcy9qcy9Db2xsaWRlci5qcyIsIm1vZHVsZXMvanMvRHluYW1pY1RleHQuanMiLCJtb2R1bGVzL2pzL0VuZFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvR2FtZS5qcyIsIm1vZHVsZXMvanMvR2FtZVBpZWNlLmpzIiwibW9kdWxlcy9qcy9HYW1lU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9Hb3JpbGxhLmpzIiwibW9kdWxlcy9qcy9IZWFsdGguanMiLCJtb2R1bGVzL2pzL0lkZW50aXR5LmpzIiwibW9kdWxlcy9qcy9JbWFnZS5qcyIsIm1vZHVsZXMvanMvSW5mby5qcyIsIm1vZHVsZXMvanMvSW5zdHJ1Y3Rpb25zLmpzIiwibW9kdWxlcy9qcy9MaW9uLmpzIiwibW9kdWxlcy9qcy9Nb3Zlci5qcyIsIm1vZHVsZXMvanMvUGxheWVyLmpzIiwibW9kdWxlcy9qcy9QbGF5ZXJBcmVhLmpzIiwibW9kdWxlcy9qcy9TY29yZS5qcyIsIm1vZHVsZXMvanMvU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9TdGFydFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvU3RhdGljSW1hZ2UuanMiLCJtb2R1bGVzL2pzL1N0YXRpY1RleHQuanMiLCJtb2R1bGVzL2pzL1RleHQuanMiLCJtb2R1bGVzL2pzL1RpZ2VyLmpzIiwibW9kdWxlcy9qcy9UcnVtcC5qcyIsIm1vZHVsZXMvanMvaW5kZXguanMiLCJ0ZXN0cy9UZXN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FDS0M7Ozs7QUFD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Y2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiogXG4gKiBBbmltYWwuanNcbiAqIFRoZSBjcml0dGVycyB0aGF0IFRydW1wIHRyaWVzIHRvIHN0b3AgZnJvbSBnZXR0aW5nIHRoZSBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xuXG4gLy8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG4gaW1wb3J0IE1vdmVyIGZyb20gJy4vTW92ZXIuanMnO1xuIGltcG9ydCBDb2xsaWRlciBmcm9tICcuL0NvbGxpZGVyLmpzJztcbiAvLyBFTkQgQURERUQgV0VFSyAxMTw8PDw8PDw8PDw8PDxcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hbCBleHRlbmRzIENoYXJhY3RlciB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG5cbiBcdFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG4gXHRcdC8vIEFuaW1hbHMgZ2V0IFJBTkRPTSBNT1RJT05cbiBcdFx0dGhpcy5tb3Zlci5pbml0UmFuZG9tKDAuMDIsICdib3R0b20nKTtcbiBcdFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxuXG4gXHR9XG5cbiBcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIFx0dXBkYXRlICgpIHtcbiBcdFx0dGhpcy5tb3Zlci51cGRhdGVSYW5kb21XYWxrKCk7XG4gXHR9XG4gXHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cbiB9IiwiLyoqIFxuICogQW5pbWFsQXJlYS5qc1xuICogVGhlIHJlZ2lvbiBhbmltYWxzIG1vdmUgdGhyb3VnaCB0byBnZXQgdG8gUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQXJlYVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhZ2UgZXh0ZW5kcyBBcmVhIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuIFx0fVxuXG4gfSIsIi8qKiBcbiAqIEFyZWEuanNcbiAqIEEgZ2VuZXJpYyByZWdpb24gb2YgdGhlIGdhbWUgc2NyZWVuLiBVc2VkIHRvIGFkZCB2aXN1YWwgb2JqZWN0cywgYW5kIFxuICogY3JlYXRlIGJvdW5kcyBmb3IgY29sbGlzaW9uIGRldGVjdGlvbi5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEluZm8sIEltYWdlLCBTdGF0aWNJbWFnZVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBBcmVhIGV4dGVuZHMgR2FtZVBpZWNlIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuXG4gXHRcdC8vIGNyZWF0ZSBhIDxkaXY+LCBhZGQgdG8gRE9NLCB3aXRoIG9wdGlvbmFsIGltYWdlXG4gXHRcdHRoaXMuYWRkVG9ET00oY29uZmlnLm5hbWUsIGNvbmZpZy5jb250YWluZXIsIGNvbmZpZy5wYXRoKTtcblxuIFx0XHQvLyBwb3NpdGlvbiB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVkXG4gXHRcdHRoaXMuc2V0RE9NUG9zaXRpb24oY29uZmlnLnBvc2l0aW9uKTsgLy9pbmhlcml0ZWQgZnJvbSBHYW1lUGllY2VcbiBcdFx0dGhpcy5zZXRET01TaXplKGNvbmZpZy5zaXplKTtcbiBcdH1cblxuIFx0Ly8gY3JlYXRlIERPTSBlbGVtZW50LCBMb2FkIGEgYmFja2dyb3VuZCBpbWFnZSwgYW5kIGluc2VydCBpbnRvIGNvbnRhaW5lclxuIFx0YWRkVG9ET00gKG5hbWUsIGNvbnRhaW5lciwgaW1nUGF0aCkge1xuIFx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuIFx0XHR0aGlzLmRvbS5pZCA9IG5hbWUgKyAnLWFyZWEnO1xuXG4gXHRcdC8vIHBvc2l0aW9uIGFic29sdXRlbHlcbiBcdFx0dGhpcy5kb20uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXG4gXHRcdC8vIERvbid0IGFsbG93IHBhZGRpbmcgb3IgbWFyZ2lucyBvciBib3JkZXJzIGZvciBBcmVhc1xuIFx0XHR0aGlzLmRvbS5zdHlsZS5tYXJnaW4gPSAnMHB4JztcbiBcdFx0dGhpcy5kb20uc3R5bGUucGFkZGluZyA9ICcwcHgnO1xuXG4gXHRcdC8vIGFkZCB0byB0aGUgRE9NXG4gXHRcdGNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGhpcy5kb20sIGNvbnRhaW5lci5jaGlsZE5vZGVzWzBdKTtcblxuIFx0XHQvLyBpZiB3ZSBoYXZlIGFuIGltYWdlLCBpbnNlcnQgaW4gZWxlbWVudCBiYWNrZ3JvdW5kXG4gXHRcdGlmIChpbWdQYXRoKSB7XG5cbiBcdFx0XHR0aGlzLmltYWdlID0gbmV3IFN0YXRpY0ltYWdlKFxuIFx0XHRcdFx0e1xuIFx0XHRcdFx0XHRuYW1lOiB0aGlzLmRvbS5pZCArICctaW1hZ2UnXG4gXHRcdFx0XHR9XG4gXHRcdFx0KTtcblxuIFx0XHRcdHRoaXMuaW1hZ2UubG9hZEJhY2tncm91bmRJbWFnZSAodGhpcy5kb20sIGltZ1BhdGgpO1xuIFx0XHR9XG5cbiBcdH1cblxuIFx0Ly8gYm91bmRzIGRldGVjdG9yIGZvciBzdXBwbGllZCBDaGFyYWN0ZXJcblxuXG4gfSIsIi8qKiBcbiAqIEJhY2tncm91bmQuanNcbiAqIEdhbWUgTG9nb3MsIExvZ29UeXBlcywgQnJhbmQgTmFtZVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrZ3JvdW5kIGV4dGVuZHMgU3RhdGljSW1hZ2Uge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXG5cdFx0dGhpcy5zZXRTb3VyY2UoY29uZmlnLnNvdXJjZSk7XG5cdFx0dGhpcy5zZXRBdXRob3IoY29uZmlnLmF1dGhvcik7XG5cdFx0dGhpcy5sb2FkQmFja2dyb3VuZEltYWdlKGNvbmZpZy5kb21JZCwgY29uZmlnLnBhdGgpO1xuXHR9XG5cbn1cbiIsIi8qKiBcbiAqIEJlYXIuanNcbiAqIEEgVGlnZXIsIHdobyB0cmllcyB0byBnZXQgdGhlIFBsYXllci5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG4gaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBCZWFyIGV4dGVuZHMgQW5pbWFsIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcbiBcdH1cblxuXG4gfSIsIi8qKiBcbiAqIENhZ2UuanNcbiAqIFRoZSByZWdpb24gd2hlcmUgYW5pbWFscyBhcmUgY2FnZWQuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBBcmVhXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FnZSBleHRlbmRzIEFyZWEge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cbiBcdFx0c3VwZXIoY29uZmlnKTtcblxuIFx0fVxuXG4gfSIsIi8qKiBcbiAqIENoYXJhY3Rlci5qc1xuICogR2FtZS1nZW5lcmF0ZWQgb3IgdXNlciBhdmF0YXJzLiBDaGFyYWN0ZXJzIGFyZSByZW5kZXJlZCBpbiBDYW52YXMsIGJ1dCBoYXZlIHRoZWlyIFxuICogcG9zaXRpb24gY29tcHV0ZWQgYW5kIHVwZGF0ZWQgb3V0c2lkZSBjYW52YXMuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcblxuIC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIGltcG9ydCBNb3ZlciBmcm9tICcuL01vdmVyLmpzJztcbiBpbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XG4gLy8gRU5EIEFEREVEIFdFRUsgMTE8PDw8PDw8PDw8PDw8XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBHYW1lUGllY2Uge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuXG4gXHRcdCAvLyBzdG9yZSBhIHJlZmVyZW5jZSB0byB0aGUgZ2FtZSBvYmplY3RcbiBcdFx0dGhpcy5nYW1lID0gY29uZmlnLmdhbWU7XG5cbiBcdFx0Ly8gU2V0IHBvc2l0aW9uIGFuZCBzaXplIGZyb20gY29uZmlndXJhdGlvblxuIFx0XHR0aGlzLnBvc2l0aW9uID0gY29uZmlnLnBvc2l0aW9uO1xuIFx0XHR0aGlzLnNpemUgPSBjb25maWcuc2l6ZTtcblxuIFx0XHR3aW5kb3cudGhlR2FtZSA9IGNvbmZpZy5nYW1lO1xuXG4gXHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIFx0XHR0aGlzLm1vdmVyID0gbmV3IE1vdmVyKHRoaXMpO1xuIFx0XHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cblxuXG4gXHRcdHRoaXMuaW1hZ2UgPSBuZXcgU3RhdGljSW1hZ2UoXG4gXHRcdFx0e1xuIFx0XHRcdFx0bmFtZTogY29uZmlnLm5hbWUgKyAnLWltYWdlJyxcbiBcdFx0XHRcdHBhdGg6IGNvbmZpZy5wYXRoXG4gXHRcdFx0fVxuIFx0XHQpO1xuXG4gXHRcdC8vIEltYWdlcyBkb24ndCBhdXRvbWF0aWNhbGx5IGxvYWQgd2hlbiB0aGV5J3JlIG5vdCBhdHRhY2hlZCB0byB0aGUgRE9NLCBcbiBcdFx0Ly8gb3IgYSBDU1MgYmFja2dyb3VuZCBpbWFnZVxuIFx0XHR0aGlzLmltYWdlLmxvYWQoY29uZmlnLnBhdGgsIGZ1bmN0aW9uICgpIHtjb25zb2xlLmxvZygnbG9hZGVkOicgKyBjb25maWcubmFtZSk7fSk7XG4gXHR9XG5cbiBcdC8vIG92ZXJyaWRlIGRlZmF1bHQgZHJhdyB3aXRoIG91ciBvd25cbiBcdGRyYXcgKGNvbnRleHQpIHtcblx0XHRpZiAodGhpcy5pbWFnZSkge1xuXHRcdFx0dmFyIGltZyA9IHRoaXMuaW1hZ2UuZGF0YTtcbiBcdFx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcblx0XHRcdC8vY29uc29sZS5sb2coJ2RyYXdpbmcnKVxuXHRcdFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxuXHRcdFx0aWYgKGltZykge1xuXHRcdFx0XHQvLyBkcmF3IGltYWdlIGludG8gSFRNTDUgY2FudmFzXG4gXHRcdCBcdFx0Y29udGV4dC5kcmF3SW1hZ2UoaW1nLCB0aGlzLnBvc2l0aW9uLmxlZnQsIHRoaXMucG9zaXRpb24udG9wKTtcblx0XHRcdH1cblx0XHR9XG4gXHR9XG4gfSIsIi8qKiBcbiAqIEBjbGFzcyBDb2xsaWRlclxuICogQGRlc2NyaXB0aW9uIGNyZWF0ZSB0aGUgY29sbGlzaW9uIG1hdHJpeCBkZWZpbmluZyB3aGljaCBvYmplY3RzIGNhbiBjb2xsaWRlIFxuICogd2l0aCB3aGljaCBvYmplY3RzLiBPYmplY3RzIHRoYXQgY2FuIGNvbGxpZGUgaGF2ZSB0aGVpciBwb3RlbnRpYWwgY29sbGlkZXJzIFxuICogYWRkZWQgYXMgcmVmZXJlbmNlcywgZS5nLiBQbGF5ZXIudHJ1bXAgb3IgVHJ1bXAucGxheWVyLlxuICovXG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaWRlciB7XG5cbiBcdGNvbnN0cnVjdG9yIChjaGFyYWN0ZXJBcnJheSkge1xuIFx0XHR0aGlzLmNoYXJhY3RlckFycmF5ID0gY2hhcmFjdGVyQXJyYXk7XG4gXHRcdHRoaXMuYW5pbWFsQXJyYXkgPSBbXTsgLy9maWxsZWQgdXAgaW4gc2V0VXBDb2xsaXNpb25zXG4gXHRcdHRoaXMuc2V0VXBDb2xsaXNpb25zKCk7XG4gXHR9XG5cbiBcdHNldFVwQ29sbGlzaW9ucyAoKSB7XG4gXHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmNoYXJhY3RlckFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gXHRcdFx0c3dpdGNoICh0aGlzLmNoYXJhY3RlckFycmF5W2ldLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiBcdFx0XHRcdGNhc2UgJ0xpb24nOlxuIFx0XHRcdFx0Y2FzZSAnVGlnZXInOlxuIFx0XHRcdFx0Y2FzZSAnQmVhcic6XG4gXHRcdFx0XHRjYXNlICdHb3JpbGxhJzpcbiBcdFx0XHRcdFx0dGhpcy5hbmltYWxBcnJheS5wdXNoKHRoaXMuY2hhcmFjdGVyQXJyYXlbaV0pO1xuIFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdGNhc2UgJ1RydW1wJzpcbiBcdFx0XHRcdFx0dGhpcy50cnVtcCA9IHRoaXMuY2hhcmFjdGVyQXJyYXlbaV07XG4gXHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0Y2FzZSAnUGxheWVyJzpcbiBcdFx0XHRcdFx0dGhpcy5wbGF5ZXIgPSB0aGlzLmNoYXJhY3RlckFycmF5W2ldO1xuIFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vY3Jvc3MtY29ubmVjdCB0aGUgaW1wYWN0b3JzXG4gXHRcdHRoaXMudHJ1bXAucGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gXHRcdHRoaXMudHJ1bXAuYW5pbWFscyA9IHRoaXMuYW5pbWFsQXJyYXk7XG4gXHRcdHRoaXMucGxheWVyLnRydW1wID0gdGhpcy50cnVtcDtcblxuIFx0fVxuIH0iLCIvKiogXG4gKiBEeW5hbWljVGV4dC5qc1xuICogVGV4dCB0aGF0IGNhbiBiZSBjaGFuZ2VkIGJ5IHVzZXIgKGUuZy4gaW5wdXQgZmllbGQpLCBvciBcbiAqIHVwZGF0ZWQgYnkgdGhlIGdhbWUgaXRzZWxmLlxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljVGV4dCBleHRlbmRzIFRleHQge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXHR9XG59XG4iLCIvKiogXG4gKiBFbmRTY3JlZW4uanNcbiAqIEVuZGluZyBzY3JlZW4gZm9yIHRoZSBnYW1lLlxuICogQGluaGVyaXRzIFNjcmVlbiwgR2FtZVBpZWNlXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcbiBcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG5cbiBcdFx0Ly8gbG9hZCB0aGUgYmFja2dyb3VuZCBpbWFnZVxuIFx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kKCdpbWcvc2NyZWVucy9lbmQtc2NyZWVuLnBuZycpO1xuXG4gXHRcdC8vIExvYWQgRW5kU2NyZWVuIHN1Yi1vYmplY3RzXG4gXHRcdHRoaXMubG9hZElucHV0U2NvcmUoKTtcbiBcdFx0dGhpcy5sb2FkSGlnaFNjb3JlcygpO1xuXG4gXHRcdC8vIEJpbmQgXCJwbGF5IGFnYWluXCIgYW5kIFwiaW5zdHJ1Y3Rpb25zXCIgYnV0dG9ucy5cbiBcdFx0dGhpcy5iaW5kUmVwbGF5KCk7XG4gXHRcdHRoaXMuYmluZEluc3RydWN0aW9ucygpO1xuIFx0fVxuXG4gXHRsb2FkSW5wdXRTY29yZSAoKSB7XG5cbiBcdH1cblxuIFx0bG9hZEhpZ2hTY29yZXMgKCkge1xuXG4gXHR9XG5cbiBcdGJpbmRSZXBsYXkgKCkge1xuXHRcdGNvbnNvbGUubG9nKFwiaW4gYmluZFN0YXJ0LCB0aGlzLmdhbWU6XCIgKyB0aGlzLmdhbWUpXG5cdFx0Ly8gd2UgdXNlIGJpbmQoKSB0byBsaW5rIHRoZSBmdW5jdGlvbiBiZWxvdyB0byBTdGFydFNjcmVlbiAob3RoZXJ3aXNlLCBpdCB0aGlua3MgaXQgaXMgaW5zaWRlIHdpbmRvdylcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kLXNjcmVlbi1wbGF5LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXG5cdFx0XHRmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHQvL2FsZXJ0KFwiaW4gaGFuZGxlciwgZ2FtZTpcIiArIHRoaXMuZ2FtZSlcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLmdhbWUuc3RhcnRHYW1lKCk7XG5cblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRiaW5kSW5zdHJ1Y3Rpb25zICgpIHtcblx0XHRjb25zb2xlLmxvZyhcImluIGJpbmRTdGFydCwgdGhpcy5nYW1lOlwiICsgdGhpcy5nYW1lKVxuXHRcdC8vIHdlIHVzZSBiaW5kKCkgdG8gbGluayB0aGUgZnVuY3Rpb24gYmVsb3cgdG8gU3RhcnRTY3JlZW4gKG90aGVyd2lzZSwgaXQgdGhpbmtzIGl0IGlzIGluc2lkZSB3aW5kb3cpXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZC1zY3JlZW4taW5zdHJ1Y3Rpb25zLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXG5cdFx0XHRmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHQvL2FsZXJ0KFwiaW4gaGFuZGxlciwgZ2FtZTpcIiArIHRoaXMuZ2FtZSlcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLmdhbWUubG9hZEdhbWUoKTtcblxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuIH0iLCIvKiogXG4gKiBHYW1lLmpzXG4gKiBUaGUgZW50aXJlIEdhbWUgb2JqZWN0XG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG4vL1NjcmVlbiBpbmhlcml0YW5jZVxuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSAnLi9TdGFydFNjcmVlbi5qcyc7XG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuL0dhbWVTY3JlZW4uanMnO1xuaW1wb3J0IEVuZFNjcmVlbiBmcm9tICcuL0VuZFNjcmVlbi5qcyc7XG5cbi8vSW5mbyBpbmhlcml0YW5jZVxuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuaW1wb3J0IElkZW50aXR5IGZyb20gJy4vSWRlbnRpdHkuanMnO1xuaW1wb3J0IEluc3RydWN0aW9ucyBmcm9tICcuL0luc3RydWN0aW9ucy5qcyc7XG5pbXBvcnQgRHluYW1pY1RleHQgZnJvbSAnLi9EeW5hbWljVGV4dC5qcyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZS5qcyc7XG5cbi8vQ2hhcmFjdGVyIGluaGVyaXRhbmNlXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbmltcG9ydCBUcnVtcCBmcm9tICcuL1RydW1wLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIuanMnO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5pbXBvcnQgTGlvbiBmcm9tICcuL0xpb24uanMnO1xuaW1wb3J0IFRpZ2VyIGZyb20gJy4vVGlnZXIuanMnO1xuaW1wb3J0IEJlYXIgZnJvbSAnLi9CZWFyLmpzJztcbmltcG9ydCBHb3JpbGxhIGZyb20gJy4vR29yaWxsYS5qcyc7XG5pbXBvcnQgSGVhbHRoIGZyb20gJy4vSGVhbHRoLmpzJztcblxuLy9BcmVhIGluaGVyaXRhbmNlLlxuaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcbmltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XG5pbXBvcnQgQW5pbWFsQXJlYSBmcm9tICcuL0FuaW1hbEFyZWEuanMnO1xuaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi9QbGF5ZXJBcmVhLmpzJztcblxuLy8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG5pbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XG4vLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBHYW1lUGllY2Uge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblxuXHRcdHN1cGVyKGNvbmZpZyk7XG5cblx0XHQvL2dhbWUgY29weXJpZ2h0XG5cdFx0dGhpcy53YXJuaW5nID0gJ1RoaXMgZ2FtZSBiZWxvbmdzIHRvIHVzLCBhbmQgbm9ib2R5IGVsc2UuJztcblxuXHRcdC8vZ2FtZSByZXZlcnRzIHRvIFN0YXJ0U2NyZWVuIGlmIHVucGxheWVkXG5cdFx0dGhpcy5USU1FT1VUID0gNTU1NTtcblxuXHRcdC8vIGRlZmluZSBJZCBsaW5rIHRvIERPTVxuXHRcdHRoaXMuU1RBUlRfU0NSRUVOX0lEID0gJ3N0YXJ0LXNjcmVlbic7XG5cdFx0dGhpcy5HQU1FX1NDUkVFTl9JRCA9ICdnYW1lLXNjcmVlbic7XG5cdFx0dGhpcy5FTkRfU0NSRUVOX0lEID0gJ2VuZC1zY3JlZW4nO1xuXG5cdFx0Ly8gbW9kZWwgc3RvcmFnZSwgc2NyZWVuc1xuXHRcdHRoaXMuc2NyZWVucyA9IFtdO1xuXG5cdFx0Ly8gbW9kZWwgc3RvcmFnZSwgZHluYW1pYyBjaGFyYWN0ZXJzXG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycyA9IFtdO1xuXG5cdFx0Ly8gaW5pdGlhbGl6ZSBnYW1lLCBsb2FkIHN0YXJ0IHNjcmVlblxuXHRcdHRoaXMuaW5pdCgpO1xuXG5cdH0gLy9lbmQgb2YgY29uc3RydWN0b3JcblxuXHRpbml0ICgpIHtcblxuXHRcdC8vIEdyYWIgdGhlIEhUTUwgc2NyZWVuIGVsZW1lbnRzIGFuZCBlbmNhcHN1bGF0ZSBpbiBhIFNjcmVlbiBjbGFzc1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLlNUQVJUX1NDUkVFTl9JRF0gPSBuZXcgU3RhcnRTY3JlZW4oe25hbWU6ICdTdGFydCBTY3JlZW4nLCBpZDogdGhpcy5TVEFSVF9TQ1JFRU5fSUQsIGdhbWU6IHRoaXN9KTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5HQU1FX1NDUkVFTl9JRF0gPSBuZXcgR2FtZVNjcmVlbih7bmFtZTogJ0dhbWUgU2NyZWVuJywgaWQ6IHRoaXMuR0FNRV9TQ1JFRU5fSUQsIGdhbWU6IHRoaXN9KTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5FTkRfU0NSRUVOX0lEXSA9IG5ldyBFbmRTY3JlZW4oe25hbWU6ICdFbmQgU2NyZWVuJywgaWQ6IHRoaXMuRU5EX1NDUkVFTl9JRCwgZ2FtZTogdGhpc30pO1xuXG5cdFx0Ly8gbG9hZCB0aGUgY2FudmFzXG5cdFx0dGhpcy5sb2FkQ2FudmFzKCk7XG5cblx0XHQvLyBtYWtlIHRoZSBzdGFydCBzY3JlZW4gdmlzaWJsZVxuXHRcdHRoaXMubG9hZEdhbWUoKTtcblx0fVxuXG5cdC8vIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgSFRNTDUgY2FudmFzIGNvbnRleHRcblx0bG9hZENhbnZhcyAoKSB7XG5cdFx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZS1zY3JlZW4tYXJlbmEgY2FudmFzJyk7XG5cdFx0dGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHR9XG5cblx0LyoqIFxuXHQgKiBMb2FkIENoYXJhY3RlcnNcblx0ICogZHluYW1pYyBDaGFyYWN0ZXJzIChlLmcuIHRob3NlIHRoYXQgYW5pbWF0ZSkgYXJlIGxvYWRlZCBieSBHYW1lLiBcblx0ICogT3RoZXIgc3RhdGljIHZpc3VhbCBvYmplY3RzIGFyZSBsb2FkZWQgYnkgU2NyZWVuIGNsYXNzZXMuXG5cdCAqL1xuXHRsb2FkUGxheWVycyAoKSB7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IFBsYXllcihcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdQbGF5ZXInLCBwb3NpdGlvbjoge3RvcDogNTEwLCBsZWZ0OiAyMDB9LFxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvcGxheWVycy9wbGF5ZXIucG5nJyxcblx0XHRcdFx0XHRnYW1lOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXHR9XG5cblx0bG9hZEFuaW1hbHMgKCkge1xuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcblx0XHRcdG5ldyBMaW9uKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ0xpb24nLCBcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMTUsIGxlZnQ6IDk0fSxcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvbGlvbi5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IFRpZ2VyKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ1RpZ2VyJywgXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDE1LCBsZWZ0OiAzMzN9LFxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvYW5pbWFscy90aWdlci5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IEJlYXIoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnQmVhcicsIHBvc2l0aW9uOiB7dG9wOiAxNSwgbGVmdDogNTcwfSxcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvYmVhci5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IEdvcmlsbGEoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnR29yaWxsYScsIHBvc2l0aW9uOiB7dG9wOiAxNSwgbGVmdDogODEyfSxcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvZ29yaWxsYS5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cblx0fVxuXG5cdGxvYWRUcnVtcHMgKCkge1xuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcblx0XHRcdG5ldyBUcnVtcChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdUcnVtcCcsIHBvc2l0aW9uOiB7dG9wOiA0NTAsIGxlZnQ6IDIwMH0sXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy90cnVtcHMvdHJ1bXAucG5nJyxcblx0XHRcdFx0XHRnYW1lOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXG5cdH1cblxuXHRsb2FkR2FtZSAoKSB7XG5cblx0XHQvL2xvYWQgSW5mbyBhc3NldHNcblxuXHRcdGNvbnNvbGUubG9nKCdsb2FkaW5nIHNwbGFzaCBzY3JlZW4nKTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5FTkRfU0NSRUVOX0lEXS5oaWRlU2NyZWVuKClcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5TVEFSVF9TQ1JFRU5fSURdLnNob3dTY3JlZW4oKTtcblx0fVxuXG5cdHN0YXJ0R2FtZSAoKSB7XG5cblx0XHQvL2xvYWQgQ2hhcmFjdGVyc1xuXHRcdHRoaXMubG9hZEFuaW1hbHMoKTtcblx0XHR0aGlzLmxvYWRQbGF5ZXJzKCk7XG5cdFx0dGhpcy5sb2FkVHJ1bXBzKCk7XG5cblx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcblx0XHR0aGlzLmNvbGxkZXIgPSBuZXcgQ29sbGlkZXIodGhpcy5kaXNwbGF5Q2hhcmFjdGVycyk7XG5cdFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxuXG5cdFx0Ly9tYWtlIEdhbWVTY3JlZW4gdmlzaWJsZVxuXG5cdFx0Ly8gaW5pdGlhbGl6ZSBlbGFwc2VkIHRpbWVcblx0XHR0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG5cblx0XHQvLyBzaG93IEdhbWVTY3JlZW4sIGhpZGUgb3RoZXJzXG5cdFx0Y29uc29sZS5sb2coJ3N0YXJ0aW5nIGdhbWUnKTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5TVEFSVF9TQ1JFRU5fSURdLmhpZGVTY3JlZW4oKTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5FTkRfU0NSRUVOX0lEXS5oaWRlU2NyZWVuKCk7XG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuR0FNRV9TQ1JFRU5fSURdLnNob3dTY3JlZW4oKTtcblx0XHR0aGlzLmdhbWVMb29wKCk7XG5cdH1cblxuXHRlbmRHYW1lICgpIHtcblxuXHRcdGNvbnNvbGUubG9nKCdlbmRpbmcgZ2FtZScpO1xuXG5cdFx0Ly8gcmVzZXQgdGltZXJcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XG5cblx0XHQvLyB0dXJuIG9mZiBhbmltYXRpb25cblx0XHRjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmdsb2JhbElkKTtcblx0XHR0aGlzLmdsb2JhbElkID0gbnVsbDtcblxuXHRcdC8vIGdvIHRvIGVuZCBzY3JlZW5cblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5HQU1FX1NDUkVFTl9JRF0uaGlkZVNjcmVlbigpO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkVORF9TQ1JFRU5fSURdLnNob3dTY3JlZW4oKTtcblx0fVxuXG5cdGVsYXBzZWQgKCkge1xuXG5cdFx0Ly8gcmVjb3JkIHRpbWUgd2UgaGF2ZSBiZWVuIGluIGdhbWVMb29wXG5cdFx0dGhpcy5lbmRUaW1lID0gbmV3IERhdGUoKTtcblxuXHRcdC8vIHRpbWUgZGlmZmVyZW5jZSBpbiBtc1xuXG5cdFx0dmFyIHRpbWVEaWZmID0gKHRoaXMuZW5kVGltZSAtIHRoaXMuc3RhcnRUaW1lKSAvIDEwMDA7XG5cblx0XHQvLyBnZXQgc2Vjb25kcyAoT3JpZ2luYWwgaGFkICdyb3VuZCcgd2hpY2ggaW5jb3JyZWN0bHkgY291bnRzIDA6MjgsIDA6MjksIDE6MzAgLi4uIDE6NTksIDE6MClcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCh0aW1lRGlmZiAlIDYwKTtcblx0fVxuXG5cdGNoZWNrSWZDb21wbGV0ZSAoKSB7XG5cblx0XHQvLyBnYW1lIGxvZ2ljIHRvIHNlZSBpZiB0aGUgZ2FtZSBzaG91bGQgcmVzZXRcblx0XHQvLy8vLy8vLy8vLy8vY29uc29sZS5sb2coJ0VMQVBTRUQ6JyArIHRoaXMuZWxhcHNlZCgpKTtcblxuXHRcdGlmICh0aGlzLmVsYXBzZWQoKSA+IHRoaXMuVElNRU9VVCkge1xuXHRcdFx0Ly8gaWYgaWRsZSB0b28gbG9uZywgcmVzZXQgZ2FtZSB0byBzdGFydFxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dXBkYXRlICgpIHtcblxuXHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cblx0XHRcdHZhciBjaGFyYWN0ZXIgPSB0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzW2ldO1xuXG5cdFx0XHRzd2l0Y2ggKGNoYXJhY3Rlci5nZXRDbGFzcygpKSB7XG5cdFx0XHRcdGNhc2UgJ1BsYXllcic6XG5cdFx0XHRcdGNhc2UgJ1RydW1wJzpcblx0XHRcdFx0Y2FzZSAnTGlvbic6XG5cdFx0XHRcdGNhc2UgJ1RpZ2VyJzpcblx0XHRcdFx0Y2FzZSAnQmVhcic6XG5cdFx0XHRcdGNhc2UgJ0dvcmlsbGEnOlxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjaGFyYWN0ZXIudXBkYXRlKCk7XG5cdFx0fVxuXHR9XG5cblx0ZHJhdyAoKSB7XG5cbiBcdFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG5cdFx0dGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiBcdFx0Ly8gRU5EIEFEREVEIFdFRUsgMTE8PDw8PDw8PDw8PDw8XG5cdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuZGlzcGxheUNoYXJhY3RlcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnNbaV0uZHJhdyh0aGlzLmNvbnRleHQpO1xuXHRcdH1cblx0fVxuXG5cdGdhbWVMb29wICgpIHtcblx0XHRcblx0XHRpZiAodGhpcy5jaGVja0lmQ29tcGxldGUoKSkge1xuXHRcdFx0dGhpcy5lbmRHYW1lKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0dGhpcy5kcmF3KCk7XG5cdFx0XG5cdFx0Ly9jb25zb2xlLmxvZygnbG9vcGluZy4uLicpXG5cdFx0dGhpcy5nbG9iYWxJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wLmJpbmQodGhpcykpO1xuXHR9XG5cbn0iLCIvKiogXG4gKiBHYW1lUGllY2UuanNcbiAqIEJhc2ljIEdhbWUgb2JqZWN0XG4gKlxuICogVG8gbWFrZSB0aGlzIHdvcmssIHlvdSBtdXN0IGJlIHJ1bm5pbmcgdGhlIEJhYmVsIHRyYW5zcGlsZXIsIFxuICogYW5kIHdhdGNoaW5nIGZvciBjaGFuZ2VzIGluIHRoaXMgZmlsZSB3aXRoIGJyb3dzZXJpZnkuIFR3byBcbiAqIFRlcm1pbmFsIHdpbmRvd3MgbmVlZCB0byBiZSBvcGVuOlxuICogMS4gb25lIHdpbmRvdyB3aGVyZSB5b3UgdHlwZWQgdGhlIGNvbW1hbmQgXCJncnVudFwiXG4gKiAyLiBvbmUgd2luZG93IHdoZXJlIHlvdSB0eXBlZCB0aGUgY29tbWFuZCBcIm5wbSBzdGFydFwiXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQaWVjZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgICAgIC8vVE9ETzogdXNlIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgICAgICB0aGlzLnV1aWQgPSB0aGlzLnNldElkKCk7XG4gICAgICAgIHRoaXMucmVhZHkgPSB0cnVlOyAvLyBjaGFuZ2UgdG8gZmFsc2UgZm9yIGRlZmVycmVkIGxvYWRzXG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIFNldCBhIHBvc2l0aW9uIGZvciB0aGUgb2JqZWN0LCBhbHNvIHRoZSBwb3NpdGlvbiBvZiB0aGUgXG4gICAgICogRE9NIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3RcbiAgICAgKi9cbiAgICBzZXRET01Qb3NpdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICBpZiAodGhpcy5kb20pIHtcbiAgICAgICAgICAgIHRoaXMuZG9tLnN0eWxlLnRvcCA9IHBvc2l0aW9uLnRvcCArICdweCc7XG4gICAgICAgICAgICB0aGlzLmRvbS5zdHlsZS5sZWZ0ID0gcG9zaXRpb24ubGVmdCArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogU2V0IHRoZSBvYmplY3Qgc2l6ZSwgYWxzbyBpdHMgRE9NIHNpemVcbiAgICAgKi9cbiAgICBzZXRET01TaXplIChzaXplKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIGlmICh0aGlzLmRvbSkge1xuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUud2lkdGggPSBzaXplLndpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuZG9tLnN0eWxlLmhlaWdodCA9IHNpemUuaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBHZW5lcmF0ZSBhIHVuaXF1ZSBJRCBmb3IgZXZlcnkgZ2FtZSBvYmplY3QuXG4gICAgICogQGxpbmsgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDUwMzQvY3JlYXRlLWd1aWQtdXVpZC1pbi1qYXZhc2NyaXB0XG4gICAgICovXG4gICAgc2V0SWQgKCkge1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxuICAgICAgICB9XG4gICAgICAgIHZhciB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgdmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkqMTYpJTE2IHwgMDtcbiAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQvMTYpO1xuICAgICAgICAgICAgcmV0dXJuIChjPT0neCcgPyByIDogKHImMHgzfDB4OCkpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1dWlkO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBSZXR1cm4gdGhlIGdpdmVuIG5hbWUgb2YgdGhpcyBvYmplY3RcbiAgICAgKi9cbiAgICBnZXROYW1lICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogcmV0dXJuIHRoZSBjbGFzcyBvZiB0aGUgb2JqZWN0XG4gICAgICovXG4gICAgZ2V0Q2xhc3MgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBSZXR1cm4gdGhlIHVuaXF1ZSBpZCBvZiB0aGlzIG9iamVjdC5cbiAgICAgKi9cbiAgICBnZXRJZCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV1aWQ7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEdldCB0aGUgZW5jbG9zaW5nIGJveCBvdXRzaWRlIHRoZSBvYmplY3QgZm9yIGV4dGVybmFsIGNvbGxpc2lvbnNcbiAgICAgKi9cbiAgICBnZXRDb2xsaXNpb25SZWN0ICgpIHtcblxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBHZXQgdGhlIGludGVybmFsIGJveCB3aGVuIHRoaXMgb2JqZWN0IGFjdHMgYXMgYSBjb250YWluZXIgZm9yIGFub3RoZXJcbiAgICAgKi9cbiAgICBnZXRCb3VuZHNSZWN0ICgpIHtcblxuICAgIH1cblx0XG5cdC8qKiBcblx0ICogR2VuZXJpYyAncmVhZHknIGZ1bmN0aW9uIChlLmcuIGZvciBkZWxheWVkIGFzc2V0IGxvYWRzKVxuXHQgKi9cblx0c2V0UmVhZHkgKHZhbCkge1xuXHRcdHRoaXMucmVhZHkgPSB2YWw7XG5cdH1cblxuICAgIC8qKiBcbiAgICAgKiBHZW5lcmljIHVwZGF0ZSAob3ZlcnJpZGUpXG4gICAgICovXG4gICAgdXBkYXRlICgpIHtcblxuICAgIH1cblxuICAgICAvKiogXG4gICAgICAqIGdlbmVyaWMgZHJhdyAob3ZlcnJpZGUpXG4gICAgICAqL1xuICAgIGRyYXcgKCkge1xuXG4gICAgfVxufVxuXG5cbiIsIi8qKiBcbiAqIEdhbWVTY3JlZW4uanNcbiAqIE1haW4gZ2FtZSBzY3JlZW4gb2JqZWN0XG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBTY3JlZW5cbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuXG4gaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcbiBpbXBvcnQgQW5pbWFsQXJlYSBmcm9tICcuL0FuaW1hbEFyZWEuanMnO1xuIGltcG9ydCBQbGF5ZXJBcmVhIGZyb20gJy4vUGxheWVyQXJlYS5qcyc7XG4gaW1wb3J0IENhZ2UgZnJvbSAnLi9DYWdlLmpzJztcblxuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTtcblxuIFx0XHR0aGlzLmNhZ2VzID0gW107XG4gXHRcdHRoaXMuYW5pbWFsQXJlYXMgPSBbXTtcbiBcdFx0dGhpcy5wbGF5ZXJBcmVhcyA9IFtdO1xuXG4gXHRcdC8vR2FtZVNjcmVlbiBzaG91bGQgaGlkZSBpdHMgbG9jYWwgaGVhZGVyIGFuZCBmb290ZXJcbiBcdFx0dGhpcy5oaWRlSGVhZGVyKCk7XG4gXHRcdHRoaXMuaGlkZUZvb3RlcigpO1xuXG4gXHRcdC8vIGxvYWQgdGhlIGJhY2tncm91bmQgaW1hZ2VcbiBcdFx0dGhpcy5sb2FkQmFja2dyb3VuZCgnaW1nL3NjcmVlbnMvZ2FtZS1zY3JlZW4ucG5nJyk7XG5cbiBcdFx0Ly8gZ2V0IHRoZSBzZWN0aW9uIHRoYXQgaGFzIHRoZSBjYW52YXMgZm9yIG92ZXJsYXlcbiBcdFx0dmFyIGFyZW5hID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc2NyZWVuLWFyZW5hJyk7XG5cbiBcdFx0Ly8gbG9hZCBzdWItb2JqZWN0cyBpbnRvIHRoZSBBcmVuYVxuIFx0XHR0aGlzLmNhZ2VzICAgPSB0aGlzLmxvYWRDYWdlcyhhcmVuYSwgJ2ltZy9hcmVhcy9jYWdlLnBuZycpO1xuIFx0XHR0aGlzLmFuaW1hbEFyZWEgPSB0aGlzLmxvYWRBbmltYWxBcmVhKCk7XG4gXHRcdHRoaXMucGxheWVyQXJlYSA9IHRoaXMubG9hZFBsYXllckFyZWEoKTtcblxuIFx0fVxuXG4gXHRsb2FkQ2FnZXMgKGNvbnRhaW5lciwgaW1nUGF0aCkge1xuIFx0XHQvLyBsb2FkIDQgQ2FnZXNcbiBcdFx0dGhpcy5jYWdlcy5wdXNoKFxuIFx0XHRcdG5ldyBDYWdlKFxuIFx0XHRcdFx0e1xuIFx0XHRcdFx0XHRuYW1lOiAnbGlvbi1jYWdlJywgXG4gXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAwLCBsZWZ0OiA3MH0sIFxuIFx0XHRcdFx0XHRzaXplOiB7d2lkdGg6IDEwMCwgaGVpZ2h0OjEwMH0sIFxuIFx0XHRcdFx0XHRjb250YWluZXI6IGNvbnRhaW5lciwgXG4gXHRcdFx0XHRcdHBhdGg6IGltZ1BhdGhcbiBcdFx0XHRcdH1cbiBcdFx0XHQpXG4gXHRcdCk7XG5cdFx0dGhpcy5jYWdlcy5wdXNoKFxuXHRcdFx0bmV3IENhZ2UoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAndGlnZXItY2FnZScsIFxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAwLCBsZWZ0OiAzMTB9LCBcblx0XHRcdFx0XHRzaXplOiB7d2lkdGg6IDEwMCwgaGVpZ2h0OjEwMH0sIFxuXHRcdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcblx0XHRcdFx0XHRwYXRoOiBpbWdQYXRoXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXHRcdHRoaXMuY2FnZXMucHVzaChcblx0XHRcdG5ldyBDYWdlKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ2JlYXItY2FnZScsIFxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAwLCBsZWZ0OiA1NTB9LCBcblx0XHRcdFx0XHRzaXplOiB7d2lkdGg6IDEwMCwgaGVpZ2h0OjEwMH0sXG5cdFx0XHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsIFxuXHRcdFx0XHRcdHBhdGg6IGltZ1BhdGhcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5jYWdlcy5wdXNoKFxuXHRcdFx0bmV3IENhZ2UoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnZ29yaWxsYS1jYWdlJywgXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDc5MH0sIFxuXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSxcblx0XHRcdFx0XHRjb250YWluZXI6IGNvbnRhaW5lciwgXG5cdFx0XHRcdFx0cGF0aDogaW1nUGF0aFxuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcbiBcdH1cblxuIFx0bG9hZEFuaW1hbEFyZWEgKCkge1xuIFx0XHQvLyBsb2FkIEFuaW1hbCBtb3ZlbWVudCBhcmVhXG4gXHRcdHRoaXMuYW5pbWFsQXJlYXMucHVzaChcbiBcdFx0XHRuZXcgQW5pbWFsQXJlYShcbiBcdFx0XHRcdHtcbiBcdFx0XHRcdFx0bmFtZTogJ1pvbycsIFxuIFx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMTA0LCBsZWZ0OiA2fSwgXG4gXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogOTcwLCBoZWlnaHQ6IDQxMH0sXG4gXHRcdFx0XHRcdGNvbnRhaW5lcjogdGhpcy5kb20sIFxuIFx0XHRcdFx0XHRwYXRoOiBudWxsXG4gXHRcdFx0XHR9XG4gXHRcdFx0KVxuIFx0XHQpO1xuIFx0fVxuXG4gXHRsb2FkUGxheWVyQXJlYSAoKSB7XG4gXHRcdC8vIGxvYWQgdGhlIFBsYXllclxuIFx0XHR0aGlzLnBsYXllckFyZWFzLnB1c2goXG4gXHRcdFx0bmV3IFBsYXllckFyZWEoXG4gXHRcdFx0XHR7XG4gXHRcdFx0XHRcdG5hbWU6ICdQbGF5ZXIgQXJlYScsIFxuIFx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogNTE0LCBsZWZ0OiA2fSwgXG4gXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogOTcwLCBoZWlnaHQ6IDEwMH0sXG4gXHRcdFx0XHRcdGNvbnRhaW5lcjogdGhpcy5kb20sIFxuIFx0XHRcdFx0XHRwYXRoOiBudWxsXG4gXHRcdFx0XHR9XG4gXHRcdFx0KVxuIFx0XHQpO1xuIFx0fVxuXG4gfVxuXG4iLCIvKiogXG4gKiBHb3JpbGxhLmpzXG4gKiBBIEdvcmlsbGEsIHdobyB0cmllcyB0byBnZXQgdGhlIFBsYXllci5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG4gaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBHb3JpbGxhIGV4dGVuZHMgQW5pbWFsIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcbiBcdH1cbiB9IiwiLyoqIFxuICogSGVhbHRoLmpzXG4gKiBUaGUgY3JpdHRlcnMgdGhhdCBUcnVtcCB0cmllcyB0byBzdG9wIGZyb20gZ2V0dGluZyB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWx0aCBleHRlbmRzIENoYXJhY3RlciB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG4gXHR9XG5cbiB9IiwiLyoqIFxuICogSWRlbnRpdHkuanNcbiAqIEdhbWUgTG9nb3MsIExvZ29UeXBlcywgQnJhbmQgTmFtZVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZGVudGl0eSBleHRlbmRzIFN0YXRpY0ltYWdlIHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblxuXHRcdHRoaXMuc2V0U291cmNlKGNvbmZpZy5zb3VyY2UpO1xuXHRcdHRoaXMuc2V0QXV0aG9yKGNvbmZpZy5hdXRob3IpO1xuXHRcdHRoaXMubG9hZEltYWdlVG9ET00oY29uZmlnLmRvbUlkLCBjb25maWcucGF0aCk7XG5cblx0XHQvL0hpZGUgYW55IDxoMj4gdGV4dCBlcXVpdmFsZW50IG9mIGlkZW50aXR5IGluIHRoaXMgQ1NTIGJveFxuXHRcdHZhciB0ZXh0SWRlbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGNvbmZpZy5kb21JZCArICcgaDInKTtcblx0XHR0ZXh0SWRlbnRpdHkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fVxuXG59XG4iLCIvKiogXG4gKiBTdGF0aWNJbWFnZS5qc1xuICogSW1hZ2Utc3R5bGUgSW5mb3JtYXRpb24gdGhhdCBjYW5ub3QgYmUgY2hhbmdlZCBvbmNlIHRoZSBnYW1lIGlzIGxvYWRlZFxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBJbmZvIHtcblxuXHQvLyBzYXZlIHNjb3BlXG5cdC8vIFRPRE86IHJlZmFjdG9yIHdpdGggYXJyb3cgZnVuY3Rpb25cblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0XHR0aGlzLnJlYWR5ID0gZmFsc2U7IC8vb3Zlci1yaWRlIEdhbWVQaWVjZSBhbmQgaW5mbyB3aXRoIGRlZmVycmFsc1xuXHRcdHRoaXMuaW1hZ2UgPSBudWxsO1xuXHRcdHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoO1xuXHRcdHRoaXMuYXV0aG9yID0gY29uZmlnLmF1dGhvcjtcblx0XHR0aGlzLnNvdXJjZSA9IGNvbmZpZy5zb3VyY2U7XG5cdH1cblxuXHQvLyBsb2FkIGFuIGltYWdlXG5cdGxvYWQgKHBhdGgsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdHRoYXQuc2V0UmVhZHkoZmFsc2UpO1xuXHRcdGNvbnNvbGUubG9nKCdlbnRlcmluZyBsb2FkIGluSW1hZ2UnKTtcblx0XHR2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0aW1nLnNyYyA9IHBhdGg7XG5cdFx0aW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnNvbGUubG9nKHRoYXQubmFtZSArICcgaW1hZ2UgbG9hZGVkIGZyb206JyArIHBhdGggKyAnIHc6JyArIGltZy53aWR0aCArICcgaDonICsgaW1nLmhlaWdodClcblx0XHRcdHRoYXQuc2V0UmVhZHkodHJ1ZSk7XG5cdFx0XHR0aGF0LmRhdGEgPSBpbWc7XG5cdFx0XHRcblx0XHRcdGlmKGNhbGxiYWNrKSB7XG5cdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGltZy5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdlcnJvciBsb2FkaW5nIGltZyBmcm9tOicgKyBwYXRoKTtcblx0XHR9XG5cdH1cblxuXHQvLyBsb2FkIGltYWdlLCBhcHBlbmQgdG8gZXhpc3RpbmcgRE9NIGVsZW1lbnRcblx0Ly8gTk9URTogdGhpcyBpcyBvdmVyLXdyaXR0ZW4gaW4gQ2hhcmFjdGVyLmpzLCB3aGljaCBsb2FkcyBpbWFnZXMgaW50byBDYW52YXNcblx0bG9hZEltYWdlVG9ET00gKGRvbUlkLCBwYXRoLCBjYWxsYmFjaykge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHR0aGlzLmxvYWQocGF0aCwgZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZvcmVncm91bmQgaW1hZ2UgJyArIHBhdGggKyAnIGxvYWRlZCcpXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21JZCkuYXBwZW5kQ2hpbGQodGhhdC5kYXRhKTtcblx0XHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdH1cblxuXHQvLyBsb2FkIGltYWdlIGFzIGEgQ1NTIGJhY2tncm91bmQgaW1hZ2UgaW50byBleGlzdGluZyBET00gZWxlbWVudC4gXG5cdC8vIE5PVEU6IG5vIGxvY2FsIHJlZmVyZW5jZSB0byBpbWFnZSBpbiB0aGlzIGNhc2Vcblx0bG9hZEJhY2tncm91bmRJbWFnZSAoY29udGFpbmVyLCBwYXRoLCBjYWxsYmFjaykge1xuXHRcdGNvbnNvbGUubG9nKCdsb2FkaW5nIGJhY2tncm91bmQgaW1hZ2U6JyArIHBhdGgpXG5cdFx0Y29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZT0ndXJsKCcgKyBwYXRoICsgJyknO1xuXHRcdHRoaXMuc2V0UmVhZHkodHJ1ZSk7XG5cdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdH1cblx0fVxuXG5cdC8vIERyYXcgdGhlIGltYWdlIHRvIGEgc3VwcGxpZWQgY2FudmFzIGNvbnRleHRcblx0ZHJhd1RvQ2FudmFzIChjb250ZXh0LCBwb3NpdGlvbiwgc2l6ZSkge1xuXHRcdGNvbnRleHQuZHJhd0ltYWdlKGltZywgcG9zaXRpb24udG9wLCBwb3NpdGlvbi5sZWZ0LCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG5cdH1cblxuXHQvLyBEcmF3IHRvIHRoZSBET00uIEFzc3VtZSB0aGUgSW1hZ2Ugd2FzIGFscmVhZHkgYXR0YWNoZWQgdG8gdGhlIERPTVxuXHRkcmF3VG9ET00gKHBvc2l0aW9uLCBzaXplKSB7XG5cdFx0dGhpcy5pbWFnZS5zdHlsZS50b3AgPSBwb3NpdGlvbi50b3A7XG5cdFx0dGhpcy5pbWFnZS5zdHlsZS5sZWZ0ID0gcG9zaXRpb24ubGVmdDtcblx0XHR0aGlzLmltYWdlLnN0eWxlLndpZHRoID0gc2l6ZS53aWR0aDtcblx0XHR0aGlzLmltYWdlLnN0eWxlLmhlaWdodCA9IHNpemUuaGVpZ2h0O1xuXHR9XG5cbn1cbiIsIi8qKiBcbiAqIEluZm8uanNcbiAqIEdlbmVyaWMgaW5mb3JtYWl0b24gb2JqZWN0XG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvIGV4dGVuZHMgR2FtZVBpZWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXHR9XG5cblx0c2V0QXV0aG9yIChhdXRob3IpIHtcblx0XHR0aGlzLmF1dGhvciA9IGF1dGhvcjtcblx0fVxuXG5cdHNldFNvdXJjZSAoc291cmNlKSB7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdH1cblxufSIsIi8qKiBcbiAqIEluc3RydWN0aW9ucy5qc1xuICogVGV4dCB3aGljaCB0ZWxscyB0aGUgUGxheWVyIGhvdyB0byBwbGF5IHRoZSBnYW1lLlxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuIGltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RydWN0aW9ucyBleHRlbmRzIFN0YXRpY1RleHQge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXHR9XG59XG4iLCIvKiogXG4gKiBMaW9uLmpzXG4gKiBBIExpb24sIHdobyB0cmllcyB0byBnZXQgdGhlIFBsYXllci5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG4gaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBMaW9uIGV4dGVuZHMgQW5pbWFsIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcbiBcdH1cbiB9IiwiLyoqIFxuICogQGNsYXNzIE1vdmVyXG4gKiBAZGVzY3JpcHRpb24gdXBkYXRlIHBvc2l0aW9uIG9mIG9iamVjdCBiZWluZyBhbmltYXRlZCBieSBHYW1lLlxuICovXG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZlciB7XG5cbiBcdGNvbnN0cnVjdG9yIChnYW1lT2JqKSB7XG4gXHRcdC8vdGhpcy5uZXdUb3AgPSAxLCB0aGlzLm5ld0xlZnQgPSAxLCB0aGlzLm5ld0JvdHRvbSA9IDEsIHRoaXMubmV3UmlnaHQgPSAxO1xuIFx0XHR0aGlzLm9iaiA9IGdhbWVPYmo7XG5cbiAgICAgICAgLy8gQ2hhcmFjdGVyIGhhcyByZWZlcmVuY2UgdG8gR2FtZVxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lT2JqLmdhbWU7XG5cbiAgICAgICAgLy8gTW92ZW1lbnQgdHlwZXNcbiAgICAgICAgdGhpcy50eXBlID0gMDtcbiAgICAgICAgdGhpcy5TTEVXID0gMTtcbiAgICAgICAgdGhpcy5SQU5ET00gPSAyO1xuICAgICAgICB0aGlzLlBJTkdQT0lORyA9IDM7XG5cbiBcdH1cblxuICAgIC8qKiBcbiAgICAgKiBAbWV0aG9kIHRydW5jYXRlXG4gICAgICogQGRlc2NyaXB0aW9uIHRydW5jYXRlIChub3Qgcm91bmQpIG51bWJlciB0byBmaXhlZCBudW1iZXIgb2YgZGVjaW1hbHNcbiAgICAgKiBAcGFyYW0gTnVtYmVyIG51bSBmbG9hdGluZy1wb2ludCBudW1iZXJcbiAgICAgKiBAcGFyYW0gSW50ZWdlciBkZWNpbWFscyB0aGUgbnVtYmVyIG9mIGRlY2ltYWxzIHBvaW50cyB0byByb3VuZCB0b1xuICAgICAqIEByZXR1cm5zIE51bWJlciB0aGUgdHJ1bmNhdGVkIG51bWJlclxuICAgICAqL1xuICAgIHRydW5jYXRvciAobnVtLCBkZWNpbWFscykgeyAgICBcbiAgICAgICAgdmFyIG51bVBvd2VyID0gTWF0aC5wb3coMTAsIGRlY2ltYWxzKTsgLy8gXCJudW1Qb3dlckNvbnZlcnRlclwiIG1pZ2h0IGJlIGJldHRlclxuICAgICAgICByZXR1cm4gfn4obnVtICogbnVtUG93ZXIpL251bVBvd2VyO1xuICAgIH1cblxuIFx0LyoqIFxuIFx0ICogQG1ldGhvZCBpbml0U2xpZGVyXG4gXHQgKiBAZGVzY3JpcHRpb24gc2xldyBvYmplY3QgaG9yaXpvbnRhbGx5IHdpdGgga2V5cHJlc3Nlc1xuIFx0ICogQHBhcmFtIGRlZyB0aGUgZGVncmVlcyB0byByb3RhdGUgdGhlIFBsYXllci4gXG4gICAgICogTk9URTogd2UgYWxzbyBncmFiIHRoZSAnVHJ1bXAnIG9iamVjdC5cbiBcdCAqL1xuIFx0aW5pdFNsZXcgKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW5pdGluZyBzbGV3IG1vdGlvbicpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLlNMRVc7XG5cbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgIHRoaXMudGlja2VyID0gMDtcbiAgICAgICAgdGhpcy5sYXN0RGlyID0gMTtcblxuICAgICAgICAvLyBhZGQgYm90dG9tLCByaWdodCB0byBtYWtlIGEgUmVjdCBmb3IgdGhlIFBsYXllckFyZWFcbiAgICAgICAgdGhpcy5ib3VuZHMgPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5wbGF5ZXJBcmVhc1swXS5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5ib3VuZHMud2lkdGggPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5wbGF5ZXJBcmVhc1swXS5zaXplLndpZHRoO1xuICAgICAgICB0aGlzLmJvdW5kcy5oZWlnaHQgPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5wbGF5ZXJBcmVhc1swXS5zaXplLmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3VuZHMuYm90dG9tID0gdGhpcy5ib3VuZHMudG9wICsgdGhpcy5ib3VuZHMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdW5kcy5yaWdodCA9IHRoaXMuYm91bmRzLmxlZnQgKyB0aGlzLmJvdW5kcy53aWR0aDtcblxuICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5vYmouaW1hZ2U7XG5cbiAgICAgICAgLy8gdG9nZ2xlIHRoZSBwb3NpdGlvbiBvZiB0aGUgUGxheWVyIHdoZW4ga2lja2luZ1xuICAgICAgICB0aGlzLnVuS2ljayA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcbiAgICAgICAgdGhpcy5pbktpY2sgPSB0aGlzLm9iai5wb3NpdGlvbi50b3AgLSA2O1xuXG4gICAgICAgIC8vIE5PVEU6IFRydW1wIGlzIGFkZGVkIHRvIFBsYXllciBpbiBDb2xsaWRlclxuXG4gICAgICAgIC8vIGxpc3RlbiBmb3IgdXNlciBldmVudHNcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIFxuICAgICAgICAgICAgZXZlbnQgPT4gdGhpcy5zbGV3KGV2ZW50KSwgZmFsc2UpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJyxcbiAgICAgICAgICAgIGV2ZW50ID0+IHRoaXMudW5raWNrKGV2ZW50KSwgZmFsc2UpO1xuIFx0fVxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgaW5pdFJhbmRvbVxuICAgICAqIEBkZXNjcmlwdGlvbiBpbml0IHJhbmRvbSBtb3Rpb25zIGFsb25nIGEgcGF0aC4gVXNlZCBmb3IgXG4gICAgICogQW5pbWFsIGNoYXJhY3RlcnMgbW92aW5nIHRocm91Z2ggdGhlIEFuaW1hbEFyZWEuXG4gICAgICovXG4gICAgaW5pdFJhbmRvbSAocHJlZlNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQgcmFuZG9tIG1vdGlvbicpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLlJBTkRPTTtcblxuICAgICAgICB0aGlzLnNwZWVkID0gcHJlZlNwZWVkICogdGhpcy50aW1lU3RhbXBSYW5kb20oKTtcbiAgICAgICAgdGhpcy5kZWxheSA9IHRoaXMudGltZVN0YW1wUmFuZG9tKCkgKiAzMDA7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLmRlbGF5Q291bnRlciA9IDA7XG4gICAgICAgIHRoaXMuTUFYID0gMzA7XG4gICAgICAgIHRoaXMuTUFYX0RFTEFZID0gMzAwO1xuXG4gICAgICAgIC8vIGFkZCBib3R0b20sIHJpZ2h0IHRvIG1ha2UgYSBSZWN0IGZvciB0aGUgQW5pbWFsQXJlYVxuICAgICAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLmJvdW5kcy53aWR0aCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnNpemUud2lkdGg7XG4gICAgICAgIHRoaXMuYm91bmRzLmhlaWdodCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnNpemUuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdW5kcy5ib3R0b20gPSB0aGlzLmJvdW5kcy50b3AgKyB0aGlzLmJvdW5kcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm91bmRzLnJpZ2h0ID0gdGhpcy5ib3VuZHMubGVmdCArIHRoaXMuYm91bmRzLndpZHRoO1xuXG4gICAgICAgIC8vIGdldCBib3R0b20gYW5kIHJpZ2h0IGZyb20gQ2hhcmFjdGVyIGZyb20gaXRzIEltYWdlXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLm9iai5pbWFnZTtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogQG1ldGhvZCBpbml0UGluZ1BvbmdcbiAgICAgKiBAZGVzY3JpcHRpb24gaGF2ZSBhIFRydW1wIGluaXQuXG4gICAgICogTk9URTogY29sbGlzaW9uIHBvdGVudGlhbCBhZGRlZCBzZXBhcmF0ZWx5XG4gICAgICovXG4gICAgaW5pdFBpbmdQb25nIChwcmVmU3BlZWQsIHRydW1wKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0IHBpbmdwb25nIG1vdGlvbicpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLlBJTkdQT05HO1xuXG4gICAgICAgIC8vQW5pbWFsIGFyZWFcbiAgICAgICAgLy8gYWRkIGJvdHRvbSwgcmlnaHQgdG8gbWFrZSBhIFJlY3QgZm9yIHRoZSBBbmltYWxBcmVhXG4gICAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10uYW5pbWFsQXJlYXNbMF0ucG9zaXRpb247XG4gICAgICAgIHRoaXMuYm91bmRzLndpZHRoID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10uYW5pbWFsQXJlYXNbMF0uc2l6ZS53aWR0aDtcbiAgICAgICAgdGhpcy5ib3VuZHMuaGVpZ2h0ID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10uYW5pbWFsQXJlYXNbMF0uc2l6ZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm91bmRzLmJvdHRvbSA9IHRoaXMuYm91bmRzLnRvcCArIHRoaXMuYm91bmRzLmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3VuZHMucmlnaHQgPSB0aGlzLmJvdW5kcy5sZWZ0ICsgdGhpcy5ib3VuZHMud2lkdGg7XG5cbiAgICAgICAgdGhpcy5vYmouc3RhcnRUb3AgPSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XG5cbiAgICAgICAgLy8gZ2V0IGJvdHRvbSBhbmQgcmlnaHQgZnJvbSBDaGFyYWN0ZXIgZnJvbSBpdHMgSW1hZ2VcbiAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMub2JqLmltYWdlO1xuXG4gICAgICAgIHRoaXMub2JqLnNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5vYmouZHggPSAwO1xuICAgICAgICB0aGlzLm9iai5keSA9IDA7XG5cbiAgICAgICAgLy8gTk9URTogQW5pbWFscyBhbmQgUGxheWVycyBhcmUgYWRkZWQgdG8gVHJ1bXAgaW4gQ29sbGlkZXJcblxuICAgIH1cblxuIFx0LyoqIFxuIFx0ICogQG1ldGhvZCBzbGV3IFxuIFx0ICogTW92ZSBvYmplY3Qgc2xpZ2h0bHkgdXAgZm9yIGR1cmF0aW9uIG9mIHNwYWNlIGJhciBkb3duXG4gICAgICogQ2FsbGJhY2sgZm9yIGtleWRvd24gYWRkRXZlbnRMaXN0ZW5lclxuICAgICAqIEBwYXJhbSBFdmVudCBlIHRoZSBrZXlkb3duIGV2ZW50XG4gICAgICovXG4gXHRzbGV3IChlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICB0aGlzLmtpY2soZSk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL3ByZXZlbnQgc2Nyb2xsXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQrKztcbiAgICAgICAgICAgICAgICB0aGlzLnRpY2tlciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdERpciA9IC0xO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy9wcmV2ZW50IHNjcm9sbFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkKys7XG4gICAgICAgICAgICAgICAgdGhpcy50aWNrZXIgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3REaXIgPSAxO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy9wcmV2ZW50IHNjcm9sbFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuIFx0fVxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgdXBkYXRlU2xld1xuICAgICAqIEBkZXNjcmlwdGlvbiBwcm92aWRlIHNpbXBsZSBlYXNpbmcgbW90aW9uLCBhbHNvLCBib3VuY2UgXG4gICAgICogb2ZmIHdhbGxzLlxuICAgICAqL1xuICAgIHVwZGF0ZVNsZXcgKCkge1xuICAgICAgICB0aGlzLnRpY2tlcisrO1xuICAgICAgICBpZiAodGhpcy5zcGVlZCA+IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpY2tlciA+IDEwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCAvPSAyO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCArPSAodGhpcy5sYXN0RGlyICogdGhpcy5zcGVlZCk7XG5cbiAgICAgICAgLy9jaGVjayBib3VuZHNcbiAgICAgICAgaWYgKHRoaXMuYm91bmRzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIHcgPSB0aGlzLmltYWdlLmRhdGEud2lkdGg7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPCB0aGlzLmJvdW5kcy5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdERpciA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPSB0aGlzLmJvdW5kcy5sZWZ0ICsgKHRoaXMuc3BlZWQgKiAxLjUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vYmoucG9zaXRpb24ubGVmdCA+IHRoaXMuYm91bmRzLnJpZ2h0IC0gdykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3REaXIgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCA9IHRoaXMuYm91bmRzLnJpZ2h0IC0gdyAtICh0aGlzLnNwZWVkICogMS41KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogQG1ldGhvZCBraWNrXG4gICAgICogQGRlc2NyaXB0aW9uIGlmIGZvb3QgaXMgbmVhciBUcnVtcCwga2ljayBoaW0gaW50byB0aGUgQW5pbWFsXG4gICAgICovXG4gICAga2ljayAoZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCc6Ojo6VEhJUyBUUlVNUDo6Ojo6JyArIHRoaXMub2JqLnRydW1wKVxuICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPSB0aGlzLmluS2ljaztcblxuXG4gICAgICAgIC8vIHNlZSBpZiB3ZSdyZSBjbG9zZSBlbm91Z2ggdG8ga2ljayBpbiB0aGUgeSBheGlzXG4gICAgICAgIHZhciB0cnVtcFlEaXN0ID0gdGhpcy5vYmoucG9zaXRpb24udG9wIC0gdGhpcy5vYmoudHJ1bXAuaW1hZ2UuZGF0YS53aWR0aCAtIHRoaXMub2JqLnRydW1wLnBvc2l0aW9uLnRvcDtcbiAgICAgICAgLy9jb25zb2xlLmxvZygndHJ1bXBZRGlzdDonICsgdHJ1bXBZRGlzdClcblxuICAgICAgICAvLyBJZiBQbGF5ZXIgaXMgY2xvc2UgaW4gWSwgYW5kIGluc2lkZSBYIHJhbmdlLCBraWNrIHRoZSBUcnVtcCBpbnRvIEFuaW1hbEFyZWFcbiAgICAgICAgaWYgKHRydW1wWURpc3QgPCAxMCkge1xuXG4gICAgICAgIC8vIHN0YXJ0IHRoZSBUcnVtcCBtb3ZpbmcsIHNwZWVkXG4gICAgICAgIHRoaXMub2JqLnRydW1wLnNwZWVkID0gNDA7XG5cbiAgICAgICAgLy8gVE9ETzogQUREIEVER0UgQ0FTRSBXSEVSRSBUUlVNUCBJTiBCT1RUT00tTEVGVCwgQk9VTkNFIFRPIFJJR0hUXG5cbiAgICAgICAgICAgIC8vIGNvbXB1dGUgZHggYW5kIGR5IGZvciBUcnVtcFxuICAgICAgICAgICAgdmFyIGRpc3QgPSAodGhpcy5vYmoucG9zaXRpb24ubGVmdCAtIHRoaXMub2JqLnRydW1wLnBvc2l0aW9uLmxlZnQpIC8gNTA7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlzdCkgPCAxLjApIHtcbiAgICAgICAgICAgICAgICB2YXIgZHggPSBkaXN0O1xuICAgICAgICAgICAgICAgIGlmKGR4ID4gMCAmJiBkeCA8IDAuNykge1xuICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR4ID0gZHg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR5ID0gMS4wIC0gZHg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkeCA8IDAgJiYgZHggPiAtMC43KSB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHggPSBkeDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHkgPSAxLjAgKyBkeDtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZHggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBzbGlnaHQgcmFuZG9taXphdGlvbiBvZiBkeFxuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICAoZCA9IHBhcnNlSW50KGQpIC0gZCk7XG4gICAgICAgICAgICAgICAgICAgIGQgPSB0aGlzLnRydW5jYXRvcihkLCAyKSAvIDEwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keCA9IGQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR5ID0gMS4wICsgZHg7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR5ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IC8vIGVuZCBvZiBmdW5jdGlvblxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgdW5raWNrXG4gICAgICogQGRlc2NyaXB0aW9uIHNldCBwb3NpdGlvbiBvZiBQbGF5ZXIgYmFjayB0byBvcmlnaW5hbFxuICAgICAqL1xuICAgIHVua2ljayAoZSkge1xuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wID0gdGhpcy51bktpY2s7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiBcdHRpbWVTdGFtcFJhbmRvbSAoKSB7XG4gXHRcdHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy91c2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXG4gICAgICAgIH1cblx0XHR2YXIgbnVtID0gJ3h4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpKjEwKSUxMCB8IDA7XG4gICAgICAgICAgICBkID0gTWF0aC5mbG9vcihkLzEwKTtcbiAgICAgICAgICAgIHJldHVybiAoYz09J3gnID8gciA6IChyJjB4M3wweDgpKS50b1N0cmluZygxMCk7XG4gICAgICAgIH0pO1xuICAgICAgcmV0dXJuIG51bSAvIDEwMDAwO1xuIFx0fVxuXG4gXHQvKipcblx0ICogUmV0dXJucyBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gKGluY2x1c2l2ZSkgYW5kIG1heCAoZXhjbHVzaXZlKVxuXHQgKiBAbGluayBcblx0ICovXG5cdGdldFJhbmRvbShtaW4sIG1heCkge1xuICAgIFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG5cdH1cblxuXG4gXHQvKiogXG4gXHQgKiBAbWV0aG9kIHVwZGF0ZVJhbmRvbVdhbGtcbiBcdCAqIEBkZXNjcmlwdGlvbiBnZW5lcmF0ZSByYW5kb20gd2Fsaywgd2l0aCBvbmUgcHJlZmVycmVkIGRpcmVjdGlvbiwgXG4gXHQgKiB1c2VkIGJ5IEFuaW1hbHMuXG4gICAgICogdGhpcy5kaXJlY3Rpb24gaXMgdGhlIG92ZXJhbGwgcGF0aCB0aGUgQW5pbWFsIGlzIGZvbGxvd2luZyB0byBvbmUgb2YgdGhlIFxuICAgICAqIGZvdXIgd2FsbHMgb2YgdGhlIEFuaW1hbEFyZWEuIElmIGl0IGlzICdyZXR1cm4nIGl0IGhhcyBjb2xsaWRlZCB3aXRoIGEgVHJ1bXBcbiAgICAgKiBhbmQgaXMgcmV0dXJuaW5nIHRvIGl0cyBjYWdlLlxuIFx0ICovXG4gXHR1cGRhdGVSYW5kb21XYWxrICgpIHtcbiBcdFx0dGhpcy5jb3VudGVyKys7XG4gXHRcdHRoaXMuZGVsYXlDb3VudGVyKys7XG4gXHRcdGlmICh0aGlzLmRlbGF5Q291bnRlciA8IHRoaXMuZGVsYXkpIHtcbiBcdFx0XHQvL2NvbnNvbGUubG9nKCdkZWxheUNvdW50ZXI6JyArIHRoaXMuZGVsYXlDb3VudGVyICsgJyBNQVg6JyArIHRoaXMuTUFYX0RFTEFZKTtcbiBcdFx0XHRyZXR1cm47XG4gXHRcdH1cblxuICAgICAgICAvLyBjb21wdXRlIGR4IGFuZCBkeSBmcm9tIHJhbmRvbSB3YWxrLiBzdG9yZSBpbml0aWFsIHBvc2l0aW9uXG4gICAgICAgIHZhciBvbGRMZWZ0ID0gdGhpcy5vYmoucG9zaXRpb24ubGVmdDtcbiAgICAgICAgdmFyIG9sZFRvcCA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcblxuIFx0XHRzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XG4gXHRcdFx0Y2FzZSAndG9wJzpcbiBcdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLnRvcCAtPSAodGhpcy5zcGVlZCArICgwLjEgKiB0aGlzLmdldFJhbmRvbSgxLCB0aGlzLnNwZWVkKSkpO1xuIFx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24ubGVmdCArPSAxMCAqICh0aGlzLmdldFJhbmRvbSgtdGhpcy5zcGVlZCwgdGhpcy5zcGVlZCkpO1xuIFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0Y2FzZSAnbGVmdCc6XG4gXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IC09ICh0aGlzLnNwZWVkICsgKDAuMSAqIHRoaXMuZ2V0UmFuZG9tKDEsIHRoaXMuc3BlZWQpKSk7XG4gXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi50b3AgKz0gIDEwICoodGhpcy5nZXRSYW5kb20oLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpKTtcbiBcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdGNhc2UgJ2JvdHRvbSc6XG4gIFx0XHRcdFx0aWYgKHRoaXMuY291bnRlciA+IHRoaXMuTUFYKSB7XG4gIFx0XHRcdFx0XHR0aGlzLk1BWCA9IHBhcnNlSW50KDQsIDMwKTtcbiBcdFx0XHRcdFx0dGhpcy5uZXdMZWZ0ID0gKHRoaXMuZ2V0UmFuZG9tKC10aGlzLnNwZWVkLCB0aGlzLnNwZWVkKSk7XG4gXHRcdFx0XHRcdHRoaXMuY291bnRlciA9IDA7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlciA+IHRoaXMuTUFYIC8gMikge1xuIFx0XHRcdFx0XHR0aGlzLnNwZWVkICs9IHRoaXMudGltZVN0YW1wUmFuZG9tKCkgLyAxMjA7XG4gXHRcdFx0XHR9XG5cdFx0XHQgXHR0aGlzLm9iai5wb3NpdGlvbi50b3AgKz0gdGhpcy5zcGVlZDtcbiBcdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKz0gdGhpcy5uZXdMZWZ0O1xuIFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0Y2FzZSAncmlnaHQnOlxuIFx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24ubGVmdCArPSAodGhpcy5zcGVlZCArICgwLjEgKiB0aGlzLmdldFJhbmRvbSgxLCB0aGlzLnNwZWVkKSkpO1xuIFx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24udG9wICs9IDEwICogKHRoaXMuZ2V0UmFuZG9tKC10aGlzLnNwZWVkLCB0aGlzLnNwZWVkKSk7XG4gXHRcdFx0XHRicmVhaztcbiBcdFx0XHRjYXNlICdyZXR1cm4nOlxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHJldHVybiBBbmltYWwgdG8gaXRzIGNhZ2VcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NhZ2VkJzpcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiB3aGVuIGNhZ2VkLCByZXNldCB1bnRpbCBpdCBpcyB1bmNhZ2VkIGFnYWluXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuIFx0XHRcdFx0Y29uc29sZS5lcnJvcignTW92ZXIuc2V0UHJlZkRpcmVjdGlvbjogaW52YWxpZCBkaXJlY3Rpb246JyArIHRoaXMuZGlyZWN0aW9uKTtcbiBcdFx0XHRcdGJyZWFrO1xuIFx0XHR9XG5cbiAgICAgICAgdmFyIHhkaXN0ID0gb2xkTGVmdCAtIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQ7XG4gICAgICAgIHZhciB5ZGlzdCA9IG9sZFRvcCAtIHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcbiAgICAgICAgdmFyIHN1bSA9IHhkaXN0ICsgeWRpc3Q7XG4gICAgICAgIHRoaXMub2JqLmR4ID0geGRpc3QgLyBzdW07XG4gICAgICAgIHRoaXMub2JqLmR5ID0geWRpc3QgLyBzdW07XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIGJveENvbGxpc2lvblxuICAgICAqIGRldGVjdCBpbnRlcnNlY3Rpb24gb2YgdHdvIHJlY3RhbmdsZXMsIGFuZCBcbiAgICAgKiByZWJvdW5kIGFjY29yZGluZyB0byBhbmdsZSBvZiBjb2xsaXNpb25cbiAgICAgKiBAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0dhbWVzL1RlY2huaXF1ZXMvMkRfY29sbGlzaW9uX2RldGVjdGlvblxuICAgICAqIEBsaW5rIGh0dHA6Ly9nYW1lZGV2ZWxvcG1lbnQudHV0c3BsdXMuY29tL3R1dG9yaWFscy93aGVuLXdvcmxkcy1jb2xsaWRlLXNpbXVsYXRpbmctY2lyY2xlLWNpcmNsZS1jb2xsaXNpb25zLS1nYW1lZGV2LTc2OVxuICAgICAqL1xuICAgICBjYWxjdWxhdGVOZXdWZWxvY2l0aWVzKGZpcnN0QmFsbCwgc2Vjb25kQmFsbCkge1xuXG4gICAgICAgIC8vcmV2ZXJzZSBkeCBhbmQgZHkgYmV0d2VlbiBvYmplY3RzXG4gICAgICAgIC8vdmFyIG5ld1ZlbFgyID0gLWZpcnN0QmFsbC5keDtcbiAgICAgICAgLy92YXIgbmV3VmVsWTIgPSAtZmlyc3RCYWxsLmR5O1xuIFxuICAgICAgICAvL3ZhciBuZXdWZWxYMSA9IC1zZWNvbmRCYWxsLmR4O1xuICAgICAgICAvL3ZhciBuZXdWZWxZMSA9IC1zZWNvbmRCYWxsLmR5O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdmaXJzdEJhbGwuZHg6JyArIGZpcnN0QmFsbC5keCArICcgc2Vjb25kQmFsbC5keDonICsgc2Vjb25kQmFsbC5keCk7XG5cbiAgICAgICAgLy9maXJzdEJhbGwuZHggPSBuZXdWZWxYMTtcbiAgICAgICAgLy9maXJzdEJhbGwuZHkgPSBuZXdWZWxZMTtcblxuICAgICAgICAvL3NlY29uZEJhbGwuZHggPSBuZXdWZWxYMjtcbiAgICAgICAgLy9zZWNvbmRCYWxsLmR5ID0gbmV3VmVsWTI7XG5cbiAgICAgICAgLy9maXJzdEJhbGwucG9zaXRpb24ubGVmdCArPSBuZXdWZWxYMTtcbiAgICAgICAgLy9maXJzdEJhbGwucG9zaXRpb24udG9wICs9IG5ld1ZlbFkxO1xuXG4gICAgICAgIC8vc2Vjb25kQmFsbC5wb3NpdGlvbi5sZWZ0ICs9IG5ld1ZlbFgyO1xuICAgICAgICAvL3NlY29uZEJhbGwucG9zaXRpb24udG9wICs9IG5ld1ZlbFkyO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBAbWV0aG9kIHBpbmdQb25nXG4gICAgICogQGRlc2NyaXB0aW9uIG1vdmUgaW4gYSBwaW5nLXBvbmcgc3R5bGUuIFRoaXMgaXMgc3BlY2lmaWMgdG8gdGhlIGdhbWUuXG4gICAgICogMS4gY29sbGlzaW9uIHN0YXJ0cyB0aGUgY2hhcmFjdGVyIG1vdmluZ1xuICAgICAqIDIuIHRoZXkgYm91bmNlIG9uIGFsbCB3YWxscyBFWENFUFQgdGhlIG9uZSB0aGV5IHdlcmUgY2xvc2VzdCB0byB3aGVuIGNvbGxpZGUgd2l0aFxuICAgICAqIDMuIHdoZW4gdGhleSBpbnRlcnNlY3QgdGhhdCB3YWxsLCB0aGV5IHN0b3BcbiAgICAgKi9cbiAgICBwaW5nUG9uZyAoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2R4OicgKyB0aGlzLm9iai5keCArICcgZHk6JyArIHRoaXMub2JqLmR5KTtcbiAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCAtPSB0aGlzLm9iai5zcGVlZCAqIHRoaXMub2JqLmR4O1xuICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgLT0gdGhpcy5vYmouc3BlZWQgKiB0aGlzLm9iai5keTtcblxuICAgICAgICAvL2NoZWNrIGJvdW5kcyAoQW5pbWFsQXJlYSlcbiAgICAgICAgaWYgKHRoaXMuYm91bmRzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vYmouaW1hZ2UuZGF0YSkge1xuXG4gICAgICAgICAgICAgICAgdmFyIHcgPSB0aGlzLm9iai5pbWFnZS5kYXRhLndpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBoID0gdGhpcy5vYmouaW1hZ2UuZGF0YS5oZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAvLyBydW4gdGhpcyBvbmx5IGlmIHdlIGFyZSBtb3ZpbmcgZG93biB0aGUgc2NyZWVuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLmR5IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmoucG9zaXRpb24udG9wID4gKHRoaXMub2JqLnN0YXJ0VG9wIC0gKHRoaXMub2JqLmR5ICogdGhpcy5vYmouc3BlZWQpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLm9iai5keSA9IC10aGlzLm9iai5keTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCA9IHRoaXMub2JqLnN0YXJ0VG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouZHggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouZHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXN0ID0gdGhpcy5ib3VuZHMuYm90dG9tIC0gaCAtIHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwZCA9IC10aGlzLm9iai5keSAqIHRoaXMub2JqLnNwZWVkICogNDtcbiAgICAgICAgICAgICAgICAgICAvLy8vLy8vL2NvbnNvbGUubG9nKCdkaXN0OicgKyBkaXN0ICsgJyBzcGQ6JyArIHNwZClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVjZWxlcmF0ZSBiZWZvcmUgc3RvcHBpbmcgYXQgYm90dG9tIG9mIEFuaW1hbEFyZWFcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3QgPCBzcGQgJiYgc3BkID4gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouc3BlZWQgLz0gMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy9lbmQgb2YgZHkgbmVnYXRpdmUgKGdvaW5nIGRvd24pXG5cbiAgICAgICAgICAgICAgICAvLyBib3VuY2Ugb24gdGhlIG90aGVyIDMgd2FsbHNcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmoucG9zaXRpb24ubGVmdCA8IHRoaXMuYm91bmRzLmxlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouZHggPSAtdGhpcy5vYmouZHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi50b3AgPCB0aGlzLmJvdW5kcy50b3ApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouZHkgPSAtdGhpcy5vYmouZHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ID4gdGhpcy5ib3VuZHMucmlnaHQgLSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLmR4ID0gLXRoaXMub2JqLmR4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlIGVuY291bmRlciBhbiBhbmltYWwsIGJvdW5jZSwgQU5EICdraWNrJyB0aGUgYW5pbWFsIGJhY2sgaW50byBpdHMgY2FnZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5hbmltYWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLm9iai5hbmltYWxzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5pbWFsID0gdGhpcy5vYmouYW5pbWFsc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdyA9IGFuaW1hbC5pbWFnZS5kYXRhLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFoID0gYW5pbWFsLmltYWdlLmRhdGEuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmoucG9zaXRpb24ubGVmdCA8IGFuaW1hbC5wb3NpdGlvbi5sZWZ0ICsgYXcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ICsgdyA+IGFuaW1hbC5wb3NpdGlvbi5sZWZ0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wIDwgYW5pbWFsLnBvc2l0aW9uLnRvcCArIGFoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wICsgaCA+IGFuaW1hbC5wb3NpdGlvbi50b3ApIHsgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVOZXdWZWxvY2l0aWVzKHRoaXMub2JqLCBhbmltYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vTGV0IGJvdW5jZSAxIHRpbWUgb2ZmIG9mIGJvdHRvbSwgYnV0IHN0b3AgdGhlIHNlY29uZCB0aW1lXG5cbiAgICB9XG5cbiAgICB3YXNLaWNrZWQgKCkge1xuXG4gICAgfVxuXG4gICAgdXBkYXRlUGluZ1BvbmcgKCkge1xuXG4gICAgfVxuXG4gfSAvLyBlbmQgb2YgY2xhc3NcbiIsIi8qKiBcbiAqIFBsYXllci5qc1xuICogVXNlci1jb250cm9sbGVkIENoYXJhY3RlclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcblxuIC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIGltcG9ydCBNb3ZlciBmcm9tICcuL01vdmVyLmpzJztcbiBpbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XG4gLy8gRU5EIEFEREVEIFdFRUsgMTE8PDw8PDw8PDw8PDw8XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuXG4gXHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIFx0XHR0aGlzLm1vdmVyLmluaXRTbGV3KCk7XG4gIFx0XHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XHRcdFxuIFx0fVxuXG4gIFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG4gXHR1cGRhdGUgKCkge1xuIFx0XHR0aGlzLm1vdmVyLnVwZGF0ZVNsZXcoKTtcbiBcdH1cbiBcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcblxuXG4gfSIsIi8qKiBcbiAqIFBsYXllckFyZWEuanNcbiAqIFRoZSByZWdpb24gd2hlcmUgdGhlIFBsYXllciBjYW4gbW92ZS5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEFyZWFcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJBcmVhIGV4dGVuZHMgQXJlYSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTtcbiBcdH1cblxuIH0iLCIvKiogXG4gKiBTY29yZS5qc1xuICogRGlzcGxheSB1c2VyIHNjb3JlXG4gKiBAaW5oZXJpdHMgRHluYW1pY1RleHQsIFRleHQsIEluZm8sIEdhbWVQaWVjZVxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4vRHluYW1pY1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSBleHRlbmRzIER5bmFtaWNUZXh0IHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0fVxufSIsIi8qKiBcbiAqIFNjcmVlbi5qc1xuICogR2VuZXJpYyBTY3JlZW4gb2JqZWN0XG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLmpzXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IElkZW50aXR5IGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyZWVuIGV4dGVuZHMgR2FtZVBpZWNlIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpOyAvL2luaXQgJ3BhcmVudCcgR2FtZVBpZWNlXG5cbiBcdFx0Ly8gc2F2ZSBhIHJlZmVyZW5jZSB0byBvdXIgcGFyZW50IEdhbWUgb2JqZWN0XG4gXHRcdHRoaXMuZ2FtZSA9IGNvbmZpZy5nYW1lO1xuXG4gXHRcdC8vIFNjcmVlbnMgYXJlIGRlZmluZWQgaW4gSFRNTCwgc28gc2F2ZSBhIHJlZmVyZW5jZSB0byBvdXIgRE9NIGlkXG4gXHRcdHRoaXMuZG9tSWQgPSBjb25maWcuaWQ7XG5cbiBcdFx0Ly8gc2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgRE9NIGVsZW1lbnQgd2UncmUgY29ubmVjdGVkIHRvXG4gXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kb21JZCk7XG5cbiBcdFx0Ly8gaW5zZXJ0IHRoZSBjb3B5cmlnaHQgaW5mbyBmcm9tIHRoZSBtYWluIEdhbWUgb2JqZWN0XG4gXHRcdHRoaXMuYWRkV2FybmluZygpO1xuIFx0fVxuXG4gXHQvLyBsb2FkIGEgYmFja2dyb3VuZCBpbWFnZSBpbnRvIHRoZSBTY3JlZW5cbiBcdGxvYWRCYWNrZ3JvdW5kIChwYXRoLCBjYWxsYmFjaykge1xuIFx0XHRjb25zb2xlLmxvZyhcImxvYWRpbmc6XCIgKyB0aGlzLmRvbUlkKTtcbiBcdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2UgPSBuZXcgU3RhdGljSW1hZ2UoXG4gXHRcdFx0e1xuIFx0XHRcdFx0bmFtZTogdGhpcy5uYW1lICsgJy1pbWFnZScsXG4gXHRcdFx0XHRkb21JZDogdGhpcy5pZCArICctaW1hZ2UnLFxuIFx0XHRcdFx0cGF0aDogcGF0aCxcbiBcdFx0XHRcdGNhbGxiYWNrOiBjYWxsYmFja1xuIFx0XHRcdH1cbiBcdFx0KTtcbiBcdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2UubG9hZEJhY2tncm91bmRJbWFnZSh0aGlzLmRvbSwgcGF0aCwgY2FsbGJhY2spO1xuIFx0fVxuXG4gXHQvLyBzaG93IGFuZCBoaWRlIHJlZ2lvbnMgb2YgdGhlIFNjcmVlblxuIFx0c2hvd1NjcmVlbiAoKSB7XG4gXHRcdGNvbnNvbGUubG9nKFwic2hvd2luZzpcIiArIHRoaXMuZG9tSWQpO1xuIFx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuIFx0fVxuXG4gXHRoaWRlU2NyZWVuICgpIHtcbiBcdFx0Y29uc29sZS5sb2coXCJoaWRpbmc6XCIgKyB0aGlzLmRvbUlkKTtcbiBcdFx0dGhpcy5kb20uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuIFx0fVxuXG4gXHRzaG93SGVhZGVyICgpIHtcbiBcdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gXHR9XG5cbiBcdGhpZGVIZWFkZXIgKCkge1xuXHRcdHRoaXMuZG9tLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiBcdH1cblxuIFx0c2hvd0Zvb3RlciAoKSB7XG5cdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiBcdH1cblxuIFx0aGlkZUZvb3RlciAoKSB7XG5cdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuIFx0fVxuXG4gXHRhZGRXYXJuaW5nICgpIHtcbiBcdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLmlubmVySFRNTCA9IHRoaXMuZ2FtZS53YXJuaW5nO1xuIFx0fVxuXG4gfTsiLCIvKiogXG4gKiBTdGFydFNjcmVlbi5qc1xuICogT3BlbmluZyBzY3JlZW4gZm9yIGdhbWUuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBTY3JlZW5cbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcblxuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG5pbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9JZGVudGl0eS5qcyc7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL0JhY2tncm91bmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydFNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cblx0XHQvLyB0aGlzLmRvbSBkZWZpbmVkIGluIFNjcmVlblxuXG5cdFx0Ly8gTG9hZCBTdGFydFNjcmVlbiBzdWItb2JqZWN0c1xuXHRcdHRoaXMubG9hZEJhY2tncm91bmQoJ2ltZy9zY3JlZW5zL3N0YXJ0LXNjcmVlbi5wbmcnKTtcblxuXHRcdC8vIGxvYWQgaWRlbnRpdHkgaW1hZ2Vcblx0XHR0aGlzLmxvYWRJZGVudGl0eSgpO1xuXG5cdFx0Ly8gbG9hZCBpbnN0cnVjdGlvbnNcblx0XHR0aGlzLmxvYWRJbnN0cnVjdGlvbnMoKTtcblxuXHRcdC8vIE1ha2UgdGhlIHN0YXJ0IGJ1dHRvbiBvcGVuIHRoZSBtYWluIGdhbWUgc2NyZWVuXG5cdFx0dGhpcy5iaW5kU3RhcnQoKTtcblx0fVxuXG5cdGxvYWRJZGVudGl0eSAoKSB7XG5cdFx0dGhpcy5pZGVudGl0eSA9IG5ldyBJZGVudGl0eShcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ2lkZW50aXR5JywgXG5cdFx0XHRcdGRvbUlkOiAnc3RhcnQtc2NyZWVuLWlkZW50aXR5Jyxcblx0XHRcdFx0cGF0aDogJ2ltZy9pZGVudGl0eS9sb2dvLnBuZycsIFxuXHRcdFx0XHRhdXRob3I6ICdwZXRlIG1hcmtpZXdpY3onLCBcblx0XHRcdFx0c291cmNlOiAncGx5b2p1bXAnXG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdC8vIHNldCBwb3NpdGlvbiBvZiBJZGVudGl0eVxuXHRcdHRoaXMuaWRlbnRpdHkuc2V0RE9NUG9zaXRpb24gKFxuXHRcdFx0e1xuXHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdGxlZnQ6IDBcblx0XHRcdH1cblx0XHQpO1xuXG5cdH1cblxuXHRsb2FkSW5zdHJ1Y3Rpb25zICgpIHtcblxuXHRcdHRoaXMuaW5zdHJ1Y3Rpb25zID0gbmV3IFN0YXRpY1RleHQoXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdnYW1lIGluc3RydWN0aW9ucycsXG5cdFx0XHRcdGRvbUlkOiAnaW5zdHJ1Y3Rpb25zJyxcblx0XHRcdFx0dGV4dDogJ1BsYXkgdG8gd2luLiBUaGF0IGlzIGFsbCBUcnVtcCBjYXJlcyBhYm91dCwgYW5kIHNvIHNob3VsZCB5b3UuJ1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmluc3RydWN0aW9ucy5zZXRET01Qb3NpdGlvbihcblx0XHRcdHtcblx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0fVxuXHRcdCk7XG5cblx0fVxuXG5cdGJpbmRTdGFydCAoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJpbiBiaW5kU3RhcnQsIHRoaXMuZ2FtZTpcIiArIHRoaXMuZ2FtZSlcblx0XHQvLyB3ZSB1c2UgYmluZCgpIHRvIGxpbmsgdGhlIGZ1bmN0aW9uIGJlbG93IHRvIFN0YXJ0U2NyZWVuIChvdGhlcndpc2UsIGl0IHRoaW5rcyBpdCBpcyBpbnNpZGUgd2luZG93KVxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydC1zY3JlZW4tcGxheS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFxuXHRcdFx0ZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0Ly9hbGVydChcImluIGhhbmRsZXIsIGdhbWU6XCIgKyB0aGlzLmdhbWUpXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy5nYW1lLnN0YXJ0R2FtZSgpO1xuXG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG59IiwiLyoqIFxuICogU3RhdGljSW1hZ2UuanNcbiAqIEltYWdlLXN0eWxlIEluZm9ybWF0aW9uIHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgb25jZSB0aGUgZ2FtZSBpcyBsb2FkZWRcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aWNJbWFnZSBleHRlbmRzIEltYWdlIHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblxuXHRcdHRoaXMuc3RhdGljID0gdHJ1ZTtcblx0fVxuXG59XG4iLCIvKiogXG4gKiBTdGF0aWNUZXh0LmpzXG4gKiBUZXh0IHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgYWZ0ZXIgbG9hZGVkIGJ5IHRoZSBnYW1lXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpY1RleHQgZXh0ZW5kcyBUZXh0IHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblxuXHRcdHRoaXMuc3RhdGljID0gdHJ1ZTtcblxuXHR9XG5cbn1cbiIsIi8qKiBcbiAqIFRleHQuanNcbiAqIENyZWF0ZXMgYSB0ZXh0LXR5cGUgSW5mbyBvYmplY3RcbiAqIEBpbmhlcml0cyBJbmZvLCBHYW1lUGllY2VcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgSW5mbyB7XG5cbiBcdGNvbnN0cnVjdG9yKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuXG4gXHRcdC8vIHNldCB0aGUgdGV4dFxuIFx0XHR0aGlzLnNldFRleHQoY29uZmlnLnRleHQpO1xuXG4gXHRcdC8vIHNldCB0aGUgRE9NSWRcbiBcdFx0dGhpcy5hZGRUb0RPTShjb25maWcuZG9tSWQpO1xuIFx0fVxuXG4gXHRzZXRUZXh0ICh0eHQpIHtcbiBcdFx0dGhpcy50ZXh0ID0gdHh0O1xuIFx0fVxuXG4gXHRhZGRUb0RPTSAoZG9tSWQpIHtcblxuIFx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuIFx0XHR0aGlzLmRvbS5pZCA9IG5hbWUgKyAnLVRleHQnO1xuIFx0XHR0aGlzLmRvbS5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XG5cbiBcdFx0Ly8gY29udGFpbmVyXG4gXHRcdHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21JZCk7XG5cbiBcdFx0Ly8gYWRkIHRvIHRoZSBET01cbiBcdFx0Y29udGFpbmVyLmluc2VydEJlZm9yZSh0aGlzLmRvbSwgY29udGFpbmVyLmNoaWxkTm9kZXNbMF0pO1xuXG5cdH1cblxuIH0iLCIvKiogXG4gKiBUaWdlci5qc1xuICogQSBUaWdlciwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpZ2VyIGV4dGVuZHMgQW5pbWFsIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcbiBcdH1cbiB9IiwiLyoqIFxuICogVHJ1bXAuanNcbiAqIFRoZSBiYWxsLWxpa2UgQ2hhcmFjdGVyIHlvdSBraWNrIGludG8gQW5pbWFsc1xuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcblxuIC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIGltcG9ydCBNb3ZlciBmcm9tICcuL01vdmVyLmpzJztcbiBpbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XG4gLy8gRU5EIEFEREVEIFdFRUsgMTE8PDw8PDw8PDw8PDw8XG4gXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJ1bXAgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuXG4gXHRcdHRoaXMubW92ZXIuaW5pdFBpbmdQb25nKDAsIHRoaXMpO1xuXG4gXHR9XG5cbiBcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIFx0dXBkYXRlICgpIHtcbiBcdFx0dGhpcy5tb3Zlci5waW5nUG9uZygpO1xuIFx0fVxuIFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxuXG4gfSIsIi8qKiBcbiAqIENyZWF0ZSB0aGUgZ2FtZS4gSW1wb3J0IHRoZSBwcmltYXJ5IGNsYXNzZXMsIGFuZCAnY29tcG9zaXRlJyBcbiAqIHRoZSBvdmVyYWxsIEdhbWUgb2JqZWN0IG91dCBvZiBpbnN0YW5jZXMgb2YgdGhlIGNsYXNzZXMuXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG4vL1RoZSBlbnRpcmUgZ2FtZVxuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lLmpzJztcblxuLy9TY3JlZW4gaW5oZXJpdGFuY2VcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuaW1wb3J0IFN0YXJ0U2NyZWVuIGZyb20gJy4vU3RhcnRTY3JlZW4uanMnO1xuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi9HYW1lU2NyZWVuLmpzJztcbmltcG9ydCBFbmRTY3JlZW4gZnJvbSAnLi9FbmRTY3JlZW4uanMnO1xuXG4vL0luZm8gaW5oZXJpdGFuY2VcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJztcbmltcG9ydCBJZGVudGl0eSBmcm9tICcuL0lkZW50aXR5LmpzJztcbmltcG9ydCBJbnN0cnVjdGlvbnMgZnJvbSAnLi9JbnN0cnVjdGlvbnMuanMnO1xuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4vRHluYW1pY1RleHQuanMnO1xuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUuanMnO1xuXG4vL0NoYXJhY3RlciBpbmhlcml0YW5jZVxuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5pbXBvcnQgVHJ1bXAgZnJvbSAnLi9UcnVtcC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcbmltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuaW1wb3J0IExpb24gZnJvbSAnLi9MaW9uLmpzJztcbmltcG9ydCBUaWdlciBmcm9tICcuL1RpZ2VyLmpzJztcbmltcG9ydCBCZWFyIGZyb20gJy4vQmVhci5qcyc7XG5pbXBvcnQgR29yaWxsYSBmcm9tICcuL0dvcmlsbGEuanMnO1xuaW1wb3J0IEhlYWx0aCBmcm9tICcuL0hlYWx0aC5qcyc7XG5cbi8vQXJlYSBpbmhlcml0YW5jZS5cbmltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5pbXBvcnQgQ2FnZSBmcm9tICcuL0NhZ2UuanMnO1xuaW1wb3J0IEFuaW1hbEFyZWEgZnJvbSAnLi9BbmltYWxBcmVhLmpzJztcbmltcG9ydCBQbGF5ZXJBcmVhIGZyb20gJy4vUGxheWVyQXJlYS5qcyc7XG5cbi8vVGVzdCBmaWxlICh2ZXJ5IHNpbXBsZSB0ZXN0cnVubmVyKVxuaW1wb3J0IFRlc3RzIGZyb20gJy4uLy4uL3Rlc3RzL1Rlc3RzLmpzJztcblxuLyoqIFxuICogU2V0IHVwIHRlc3RzLlxuICovXG52YXIgbXlUZXN0cyA9IG5ldyBUZXN0cygpO1xuXG4vKipcbiAqIFNldCB1cCB0aGUgR2FtZVxuICovXG52YXIgbXlHYW1lID0gbmV3IEdhbWUoe25hbWU6IFwiWm9vS2lsbFNvY2NlclwifSk7XG5cbi8qKiBcbiAqIEVYUE9SVCBUTyBXRUIgQ09OU09MRVxuICogVG8gbWFrZSBzb21ldGhpbmcgdmlzaWJsZSBpbiBXZWIgY29uc29sZSBmb3IgZGVidWdnaW50LCBhdHRhY2ggdG8gd2luZG93IG9iamVjdFxuICogTk9URTogUHJvZmVzc2lvbmFsIGNvZGUgdXNlcyBzcGVjaWFsaXplZCB0ZXN0aW5nIG1vZHVsZXMgbGlrZSBNb2NoYSwgS2FybWEsIGFuZCBcbiAqIHNpbWlsYXIgdGVzdGluZyBsaWJyYXJpZXMuXG4gKi9cblxuLy8gd2UgY2FuIHJ1biB0aGlzIHRlc3QgbWFudWFsbHkgd2l0aCB0ZXN0cy5ydW4oKTtcbndpbmRvdy50ZXN0cyA9IG15VGVzdHM7XG5cbi8vIG1ha2UgdGhlIGdhbWUgb2JqZWN0IHZpc2libGUgc28gd2UgY2FuIGluc3BlY3QgaXQuXG53aW5kb3cuZ2FtZSA9IG15R2FtZTtcblxuY29uc29sZS5sb2coJ1pPT0tJTExTT0NDRVIgR2FtZSBpbml0aWFsaXplZC4gQWNjZXNzIGdhbWUgdmlhIFwiZ2FtZVwiLiBVc2UgVGVzdHMucnVuKCkgdG8gdGVzdC4nKVxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4uL21vZHVsZXMvanMvR2FtZVBpZWNlLmpzJztcblxuLy9UaGUgZW50aXJlIGdhbWVcbmltcG9ydCBHYW1lIGZyb20gJy4uL21vZHVsZXMvanMvR2FtZS5qcyc7XG5cbi8vU2NyZWVuIGluaGVyaXRhbmNlXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4uL21vZHVsZXMvanMvU2NyZWVuLmpzJztcbmltcG9ydCBTdGFydFNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL1N0YXJ0U2NyZWVuLmpzJztcbmltcG9ydCBHYW1lU2NyZWVuIGZyb20gJy4uL21vZHVsZXMvanMvR2FtZVNjcmVlbi5qcyc7XG5pbXBvcnQgRW5kU2NyZWVuIGZyb20gJy4uL21vZHVsZXMvanMvRW5kU2NyZWVuLmpzJztcblxuLy9JbmZvIGluaGVyaXRhbmNlXG5pbXBvcnQgSW5mbyBmcm9tICcuLi9tb2R1bGVzL2pzL0luZm8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi4vbW9kdWxlcy9qcy9UZXh0LmpzJztcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4uL21vZHVsZXMvanMvU3RhdGljVGV4dC5qcyc7XG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi4vbW9kdWxlcy9qcy9JZGVudGl0eS5qcyc7XG5pbXBvcnQgSW5zdHJ1Y3Rpb25zIGZyb20gJy4uL21vZHVsZXMvanMvSW5zdHJ1Y3Rpb25zLmpzJztcbmltcG9ydCBEeW5hbWljVGV4dCBmcm9tICcuLi9tb2R1bGVzL2pzL0R5bmFtaWNUZXh0LmpzJztcbmltcG9ydCBTY29yZSBmcm9tICcuLi9tb2R1bGVzL2pzL1Njb3JlLmpzJztcblxuLy9DaGFyYWN0ZXIgaW5oZXJpdGFuY2VcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi4vbW9kdWxlcy9qcy9DaGFyYWN0ZXIuanMnO1xuaW1wb3J0IFRydW1wIGZyb20gJy4uL21vZHVsZXMvanMvVHJ1bXAuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuLi9tb2R1bGVzL2pzL1BsYXllci5qcyc7XG5pbXBvcnQgQW5pbWFsIGZyb20gJy4uL21vZHVsZXMvanMvQW5pbWFsLmpzJztcbmltcG9ydCBMaW9uIGZyb20gJy4uL21vZHVsZXMvanMvTGlvbi5qcyc7XG5pbXBvcnQgVGlnZXIgZnJvbSAnLi4vbW9kdWxlcy9qcy9UaWdlci5qcyc7XG5pbXBvcnQgQmVhciBmcm9tICcuLi9tb2R1bGVzL2pzL0JlYXIuanMnO1xuaW1wb3J0IEdvcmlsbGEgZnJvbSAnLi4vbW9kdWxlcy9qcy9Hb3JpbGxhLmpzJztcbmltcG9ydCBIZWFsdGggZnJvbSAnLi4vbW9kdWxlcy9qcy9IZWFsdGguanMnO1xuXG4vL0FyZWEgaW5oZXJpdGFuY2UuXG5pbXBvcnQgQXJlYSBmcm9tICcuLi9tb2R1bGVzL2pzL0FyZWEuanMnO1xuaW1wb3J0IENhZ2UgZnJvbSAnLi4vbW9kdWxlcy9qcy9DYWdlLmpzJztcbmltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4uL21vZHVsZXMvanMvQW5pbWFsQXJlYS5qcyc7XG5pbXBvcnQgUGxheWVyQXJlYSBmcm9tICcuLi9tb2R1bGVzL2pzL1BsYXllckFyZWEuanMnO1xuXG4vKiogXG4gKiBURVNUQkVEIC0gVGVzdCBhbGwgb3VyIG9iamVjdHMuIFRoaXMgaXMgYSB2ZXJ5IGJhc2ljIHRlc3Rpbmcgc3lzdGVtLiBcbiAqIE5PVEU6IFByb2Zlc3Npb25hbCBjb2RlIHVzZXMgdGVzdGluZyBsaWJyYXJpZXMgbGlrZSBLYXJtYSBhbmQgTW9jaGEuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RzIHtcblxuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdH1cblxuXHQvLyBCZWNhdXNlIHdlIG1ha2UgdGhlc2Ugb2JqZWN0cyB3aXRoICd2YXInIHRoZXkgYXJlIHNjb3BlZCB0byB0aGUgcnVuKCkgZnVuY3Rpb24uXG5cdHJ1biAoKSB7XG5cblx0XHR2YXIgY29uZmlnID0ge25hbWU6J0ZvcmVzdCBUcnVtcCBvciBEb25hbGQgR3VtcCBydWx6J307XG5cblx0XHQvLyBNYWtlIHNvbWUgdGVzdCBnYW1lIG9iamVjdHNcblx0XHR2YXIgZ2FtZSA9IG5ldyBHYW1lKGNvbmZpZyk7XG5cdFx0Y29uc29sZS5sb2coZ2FtZS5nZXROYW1lKCkpO1xuXG5cdFx0Ly90ZXN0IEdhbWUgT2JqZWN0XG5cdFx0dmFyIG15R2FtZSA9IG5ldyBHYW1lKHtuYW1lOiBcIlpvb0tpbGxTb2NjZXJcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15R2FtZS5nZXROYW1lKCkpO1xuXG5cdFx0Ly9vdGhlciBvYmplY3RzXG5cdFx0dmFyIG15U2NyZWVuID0gbmV3IFNjcmVlbih7bmFtZTogXCJPcGVuaW5nIFNjcmVlblwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlTY3JlZW4uZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVN0YXJ0U2NyZWVuID0gbmV3IFN0YXJ0U2NyZWVuKHtuYW1lOiBcIlN0YXJ0IFNjcmVlblwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlTdGFydFNjcmVlbi5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15R2FtZVNjcmVlbiA9IG5ldyBHYW1lU2NyZWVuKHtuYW1lOiBcIkdhbWUgU2NyZWVuXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUdhbWVTY3JlZW4uZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUVuZFNjcmVlbiA9IG5ldyBFbmRTY3JlZW4oe25hbWU6IFwiRW5kIFNjcmVlblwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlFbmRTY3JlZW4uZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUluZm8gPSBuZXcgSW5mbyh7bmFtZTogXCJHZW5lcmljIEluZm9ybWF0aW9uXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUluZm8uZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVRleHQgPSBuZXcgVGV4dCh7bmFtZTogXCJHZW5lcmljIFRleHQgT2JqZWN0XCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVRleHQuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVN0YXRpY1RleHQgPSBuZXcgU3RhdGljVGV4dCh7bmFtZTogXCJHZW5lcmljIFN0YXRpYyBUZXh0IE9iamVjdFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlTdGF0aWNUZXh0LmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlJZGVudGl0eSA9IG5ldyBJZGVudGl0eSh7bmFtZTogXCJHZW5lcmljIElkZW50aXR5IE9iamVjdFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlJZGVudGl0eS5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15SW5zdHJ1Y3Rpb25zID0gbmV3IEluc3RydWN0aW9ucyh7bmFtZTogXCJHZW5lcmljIEluc3RydWN0aW9ucyBPYmplY3RcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15SW5zdHJ1Y3Rpb25zLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlEeW5hbWljVGV4dCA9IG5ldyBEeW5hbWljVGV4dCh7bmFtZTogXCJHZW5lcmljIER5bmFtaWMgVGV4dCBPYmplY3RcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15RHluYW1pY1RleHQuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVNjb3JlID0gbmV3IFNjb3JlKHtuYW1lOiBcInNjb3Jlcy4uLlwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlTY29yZS5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15Q2hhcmFjdGVyID0gbmV3IENoYXJhY3Rlcih7bmFtZTogXCJHZW5lcmljIENoYXJhY3RlclwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlDaGFyYWN0ZXIuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVRydW1wID0gbmV3IFRydW1wKHtuYW1lOiBcIkRvbmFsZCBUcnVtcFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlUcnVtcC5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15UGxheWVyID0gbmV3IFBsYXllcih7bmFtZTogXCJFbmQgVXNlclwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlQbGF5ZXIuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUFuaW1hbCA9IG5ldyBBbmltYWwoe25hbWU6IFwiR2VuZXJpYyBBbmltYWxcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15QW5pbWFsLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlMaW9uID0gbmV3IExpb24oe25hbWU6IFwiQ293YXJkbHkgdGhlIExpb25cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15TGlvbi5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15VGlnZXIgPSBuZXcgVGlnZXIoe25hbWU6IFwiQ2hvbXBlciB0aGUgVGlnZXJcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15VGlnZXIuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUJlYXIgPSBuZXcgQmVhcih7bmFtZTogXCJNYXVsZXIgdGhlIEJlYXJcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15QmVhci5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15R29yaWxsYSA9IG5ldyBHb3JpbGxhKHsgbmFtZTogXCJTcHVua3kgdGhlIEdvcmlsbGFcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15R29yaWxsYS5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15SGVhbHRoID0gbmV3IEhlYWx0aCh7bmFtZTogXCJPbmUgSGVhbHRoIEtpdFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlIZWFsdGguZ2V0TmFtZSgpKTtcblxuXHRcdC8vQXJlYSBpbmhlcml0YW5jZS5cblx0XHR2YXIgbXlBcmVhID0gbmV3IEFyZWEoe25hbWU6IFwiR2VuZXJpYyBBcmVhXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUFyZWEuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUNhZ2UgPSBuZXcgQ2FnZSh7bmFtZTogXCJHZW5lcmljIEFyZWFcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15Q2FnZS5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15QW5pbWFsQXJlYSA9IG5ldyBBbmltYWxBcmVhKHtuYW1lOiBcIkFuaW1hbEFyZWFcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15QW5pbWFsQXJlYS5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15UGxheWVyQXJlYSA9IG5ldyBQbGF5ZXJBcmVhKHtuYW1lOiBcIlBsYXllckFyZWFcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15UGxheWVyQXJlYS5nZXROYW1lKCkpO1xuXHR9XG59XG4iXX0=
