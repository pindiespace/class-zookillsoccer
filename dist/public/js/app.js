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
    // Animals get RandomWalk motion

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Animal).call(this, config));

    _this.mover.initRandomWalk(0.02, 'bottom');
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

},{"./Character.js":7,"./Collider.js":8,"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./Mover.js":21,"./StaticImage.js":29}],2:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./StaticImage.js":29}],4:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./StaticImage.js":29}],5:[function(require,module,exports){
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

},{"./Collider.js":8,"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./Mover.js":21,"./StaticImage.js":29}],8:[function(require,module,exports){
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
 * @param Array characterArray the array of Characters who might be involved 
 * in collisions.
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

      //DEBUG
      window.animals = this.trump.animals;
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

},{"./GamePiece.js":12,"./Info.js":18,"./Text.js":31}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

var _Identity = require('./Identity.js');

var _Identity2 = _interopRequireDefault(_Identity);

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
    key: 'loadIdentity',
    value: function loadIdentity(won) {

      if (this.identity) {
        this.identity.clear('end-screen-identity');
      }

      if (won) {
        this.identity = new _Identity2.default({
          name: 'identity',
          domId: 'end-screen-identity',
          path: 'img/identity/won.png',
          author: 'pete markiewicz',
          source: 'plyojump'
        });
      } else {
        this.identity = new _Identity2.default({
          name: 'identity',
          domId: 'end-screen-identity',
          path: 'img/identity/lost.png',
          author: 'pete markiewicz',
          source: 'plyojump'
        });
      }
    }

    //TODO: use a StaticText object, and add to EndScreen

  }, {
    key: 'showScore',
    value: function showScore(won) {
      this.loadIdentity(won);
      /*
      if (won) {
      	alert ("you won")
      } else {
      	alert ("you lost")
      }
      */
    }
  }, {
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

},{"./GamePiece.js":12,"./Identity.js":16,"./Screen.js":26}],11:[function(require,module,exports){
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

var _Sounder = require('./Sounder.js');

var _Sounder2 = _interopRequireDefault(_Sounder);

var _Scorer = require('./Scorer.js');

var _Scorer2 = _interopRequireDefault(_Scorer);

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

			// >>>>>>>>>>>ADDED IN WEEK 11
			//load audio samples
			this.soundPool = new _Sounder2.default();

			this.soundPool.addSound('kick', 0.7);
			this.soundPool.addSound('lion', 0.7);
			this.soundPool.addSound('tiger', 0.7);
			this.soundPool.addSound('bear', 0.7);
			this.soundPool.addSound('gorilla', 0.7);
			window.soundPool = this.soundPool;

			// END ADDED IN WEEK 11<<<<<<<<<<<<<<

			//load Characters
			this.loadAnimals();
			this.loadPlayers();
			this.loadTrumps();

			// >>>>>>>>>>>ADDED IN WEEK 11
			this.collider = new _Collider2.default(this.displayCharacters);

			// Add game over test
			this.scorer = new _Scorer2.default(this);
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

			// >>>>>>>>>>>ADDED IN WEEK 11
			// show the score
			this.screens[this.END_SCREEN_ID].showScore(this.scorer.won);
			// Null everything
			this.sounder = null;
			this.displayCharacters = [];
			this.collider = null;
			this.scorer = null;
			// END ADDED IN WEEK 11<<<<<<<<<<<<<<
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

			// check if gameplay is complete
			if (this.scorer.gameOver()) {
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

},{"./Animal.js":1,"./AnimalArea.js":2,"./Area.js":3,"./Bear.js":5,"./Cage.js":6,"./Character.js":7,"./Collider.js":8,"./DynamicText.js":9,"./EndScreen.js":10,"./GamePiece.js":12,"./GameScreen.js":13,"./Gorilla.js":14,"./Health.js":15,"./Identity.js":16,"./Image.js":17,"./Info.js":18,"./Instructions.js":19,"./Lion.js":20,"./Player.js":22,"./PlayerArea.js":23,"./Score.js":24,"./Scorer.js":25,"./Screen.js":26,"./Sounder.js":27,"./StartScreen.js":28,"./StaticText.js":30,"./Text.js":31,"./Tiger.js":32,"./Trump.js":33}],12:[function(require,module,exports){
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

},{"./AnimalArea.js":2,"./Area.js":3,"./Cage.js":6,"./GamePiece.js":12,"./PlayerArea.js":23,"./Screen.js":26}],14:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./StaticImage.js":29}],17:[function(require,module,exports){
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
	}, {
		key: 'clear',
		value: function clear(domId) {
			document.getElementById(domId).removeChild(this.data);
			this.data = null;
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

},{"./GamePiece.js":12,"./Info.js":18,"./StaticText.js":30,"./Text.js":31}],20:[function(require,module,exports){
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

        this.obj = gameObj;

        // Character has reference to Game
        this.game = gameObj.game;

        // Movement types
        this.type = 0;
        this.SLEW = 1;
        this.RANDOM = 2;
        this.PINGPOING = 3;

        if (!this.game.soundPool) {
            console.warn('no sounds initialized. Game will play silently');
        }
    }

    /** 
     * @method truncator
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
         * @method randomizer
         * @description randomize a number
         */

    }, {
        key: 'randomizer',
        value: function randomizer() {
            var d = performance.now();
            d = parseInt(d) - d;
            d = this.truncator(d, 2) / 10;
            return d;
        }

        /** 
         * @method getCenter
         */

    }, {
        key: 'getCenter',
        value: function getCenter(x, y, width, height) {
            return {
                x: x + width / 2,
                y: y + height / 2
            };
        }

        /** 
         * @method initSlew
         * @description slew object horizontally with keypresses. Adds event 
         * listeners for keydown and keyup events. Used for 
         * Player characters moving horizontally in the PlayerArea
         */

    }, {
        key: 'initSlew',
        value: function initSlew() {
            var _this = this;

            console.log('init Slew motion');
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

            // flag our initialization
            this.inited = true;

            // listen for user events
            document.addEventListener('keydown', function (event) {
                return _this.slew(event);
            }, false);

            document.addEventListener('keyup', function (event) {
                return _this.unkick(event);
            }, false);
        }

        /** 
         * @method initRandomWalk
         * @description init random motions along a path from the 
         * top to the bottom of the screen. Used for 
         * Animal characters moving through the AnimalArea.
         * @param Number prefSpeed the speed of movement
         * @param String direction the direction the Animal ultimately moves, 
         * - 'top': overall movement up the screen
         * - 'left': overall movement to the screen left
         * - 'bottom': overall movement to the screen bottom (DEFAULT)
         * - 'right': overall movement to the screen right
         * - 'return': return immediately to the Cage area
         * - 'caged': stay in the Cage area
         */

    }, {
        key: 'initRandomWalk',
        value: function initRandomWalk(prefSpeed, direction) {
            console.log('init RandomWalk');
            this.type = this.RANDOM;

            this.speed = prefSpeed * this.timeStampRandom();
            this.delay = this.timeStampRandom() * 300;
            this.obj.direction = direction;
            this.counter = 0;
            this.delayCounter = 0;
            this.MAX = 30;
            this.MAX_DELAY = 300;

            // one-time play of Animal sound
            this.firstMove = true;

            // add bottom, right to make a Rect for the AnimalArea
            this.bounds = this.game.screens['game-screen'].animalAreas[0].position;
            this.bounds.width = this.game.screens['game-screen'].animalAreas[0].size.width;
            this.bounds.height = this.game.screens['game-screen'].animalAreas[0].size.height;
            this.bounds.bottom = this.bounds.top + this.bounds.height;
            this.bounds.right = this.bounds.left + this.bounds.width;

            // remember where we started (in the cage)
            this.startTop = this.obj.position.top;
            this.startLeft = this.obj.position.left;

            // cache position during new random moves
            this.newTop = 0, this.newLeft = 0;

            // get bottom and right from Character from its Image
            this.image = this.obj.image;

            // flag our initialization
            this.inited = true;
        }

        /** 
         * @method initPingPong
         * @description init a ping-pong style motion. Used for 
         * Trump characters moving through the AnimalArea.
         */

    }, {
        key: 'initPingPong',
        value: function initPingPong(prefSpeed) {
            console.log('init PingPong motion');
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

            // flag our initialization
            this.inited = true;
        }

        /** 
         * @method slew 
         * Move object slightly up for duration of space bar pressed down
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
         * @description move back and forth horizontally, with a simple easing motion
         * when left and right arrow keys are pressed. Handle collisions with the left 
         * and right walls of the PlayerArea.
         * Call in an update function inside the Character, e.g. 
         * update () { updateRandomWalk(); }
         * The main Game object automatically finds and 'fires' update() function in 
         * all Characters.
         */

    }, {
        key: 'updateSlew',
        value: function updateSlew() {
            if (!this.inited) {
                console.error('Player Slew NOT initialized (did you leave out of constructor?)');
                return;
            }
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
                        this.speed /= 1.2;
                        this.obj.position.left = this.bounds.left + this.speed * 1.5;
                    } else if (this.obj.position.left > this.bounds.right - w) {
                        this.lastDir = -1;
                        this.speed /= 1.2;
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

            if (!this.obj.trump) {
                console.error('Error: missing collision matrix (did you include Collider?)');
                return;
            }

            // see if we're close enough to kick in the y axis
            var trumpYDist = this.obj.position.top - this.obj.trump.image.data.width - this.obj.trump.position.top;
            //console.log('trumpYDist:' + trumpYDist)

            // If Player is close in Y, and inside X range, kick the Trump into AnimalArea
            if (trumpYDist < 10) {

                // start the Trump moving, speed
                this.obj.trump.speed = 40;

                // if too close to left wall, pre-assign a value
                if (this.obj.trump.position.left < this.bounds.left + 20) {
                    console.log(">>Trump: left bound correction");
                    this.obj.trump.dx = -0.2;
                    this.obj.trump.dy = 0.8;
                    return;
                }

                // compute dx and dy for Trump
                var dist = (this.obj.position.left - this.obj.trump.position.left) / 50;
                if (Math.abs(dist) < 1.0) {
                    var dx = dist;
                    if (dx > 0.003 && dx < 0.8) {
                        this.obj.trump.dx = dx;
                        this.obj.trump.dy = 1.0 - dx;
                        // start the kicking sound
                    } else if (dx < 0 && dx > -0.8) {
                            this.obj.trump.dx = dx;
                            this.obj.trump.dy = 1.0 + dx;
                        } else if (Math.abs(dx) < 0.003) {
                            var d = this.randomizer();
                            d = d - this.randomizer();
                            this.obj.trump.dx = d;
                            this.obj.trump.dy = 1.0 + dx;
                            // start the kicking sound
                        } else {
                                this.obj.trump.dx = 0;
                                this.obj.trump.dy = 0;
                            }

                    // start the kicking sound
                    if (this.game.soundPool) {
                        this.game.soundPool.playSound('kick');
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

        /** 
         * @method timeStampRandom
         * @description randomize in a 10-fold range using window.performance
         */

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
         * @description generate a random walk, with one preferred direction, 
         * giving the meandering motion used by Animals. 
         * Call in an update function inside the Character, e.g. 
         * update () { updateRandomWalk(); }
         * The main Game object automatically finds and 'fires' update() function in 
         * all Characters.
         */

    }, {
        key: 'updateRandomWalk',
        value: function updateRandomWalk() {
            if (!this.inited) {
                console.error('Animal RandomWalk NOT initialized (did you leave out of constructor?)');
                return;
            }
            this.counter++;
            this.delayCounter++;
            if (this.delayCounter < this.delay) {
                //console.log('delayCounter:' + this.delayCounter + ' MAX:' + this.MAX_DELAY);
                return;
            }

            // Play animal's opening sound ONCE at start of movement
            if (this.firstMove && this.game.soundPool) {
                this.game.soundPool.playSound(this.obj.constructor.name.toLowerCase(), 0.7);
                this.firstMove = false;
            }

            // compute dx and dy from random walk. store initial position
            this.oldLeft = this.obj.position.left;
            this.oldTop = this.obj.position.top;

            // this.obj.direction was set in initRandomWalk
            switch (this.obj.direction) {
                case 'top':
                    this.obj.position.top -= this.speed + 0.1 * this.getRandom(1, this.speed);
                    this.obj.position.left -= 10 * this.getRandom(-this.speed, this.speed / 2);
                    break;
                case 'left':
                    this.obj.position.left -= this.speed + 0.5 * this.getRandom(0, this.speed);
                    this.obj.position.top += 10 * this.getRandom(-this.speed, this.speed);
                    break;
                case 'bottom':
                    if (this.counter > this.MAX) {
                        this.MAX = this.getRandom(2, 15);
                        this.newLeft = this.getRandom(-this.speed, this.speed);
                        this.counter = 0;
                    } else if (this.counter > this.MAX / 2) {
                        this.speed = this.getRandom(-0.2, 1.2); //NOTE: fine-tune this to make gameplay harder
                    }
                    this.obj.position.top += this.speed;
                    var r = this.getRandom(-1, 1);
                    this.obj.position.left -= r * this.newLeft;
                    break;
                case 'right':
                    this.obj.position.left += this.speed + 0.5 * this.getRandom(0, this.speed);
                    this.obj.position.top += 10 * this.getRandom(-this.speed, this.speed);
                    break;
                case 'return':
                    // This is caused by a Trump collider running into the Animal
                    // TODO: return Animal to its cage
                    this.obj.direction = 'caged';
                    // TODO: write return arc
                    break;
                case 'caged':
                    this.obj.position.left = this.startLeft;
                    this.obj.position.top = this.startTop;
                    // TODO: when caged, reset until it is uncaged again
                    break;
                default:
                    console.error('Mover.setPrefDirection: invalid direction:' + this.obj.direction);
                    break;
            }

            // Compute dx and dy for Animals
            var xdist = this.oldLeft - this.obj.position.left;
            var ydist = this.oldTop - this.obj.position.top;
            var sum = xdist + ydist;
            if (sum > 0.0001) {
                this.obj.dx = xdist / sum;
                this.obj.dy = ydist / sum;
            } else {
                this.obj.dx = 0;
                this.obj.dy = 0;
            }

            // save our new position
            this.oldLeft = this.obj.position.left;
            this.oldTop = this.obj.position.top;

            //console.log(' dx:' + this.obj.dx + ' dy:' + this.obj.dy + ' sum:' + sum)
        }
    }, {
        key: 'calculateCollision',
        value: function calculateCollision(trump, animal) {
            var w = this.obj.image.data.width;
            var h = this.obj.image.data.height;
            var aw = animal.image.data.width;
            var ah = animal.image.data.height;

            if (this.obj.position.left < animal.position.left + aw && this.obj.position.left + w > animal.position.left && this.obj.position.top < animal.position.top + ah && this.obj.position.top + h > animal.position.top) {

                //get Trump centeral point
                var tXCenter = this.obj.position.left + w / 2;
                var tYCenter = this.obj.position.top + h / 2;

                //get Animal central point
                var aXCenter = animal.position.left + aw / 2;
                var aYCenter = animal.position.top + ah / 2;

                //compute x and y vector between centers
                var cXDiff = tXCenter - aXCenter;
                var cYDiff = tYCenter = aYCenter;

                // Trump doesn't react if not moving (even if animal does)
                if (trump.speed != 0 && trump.dx != 0 && trump.dy != 0) {

                    // move object so it isn't colliding anymore
                    if (cXDiff >= 0) {
                        trump.position.x += cXDiff + 1;
                    } else {
                        trump.position.x -= cXDiff + 1;
                    }

                    if (cYDiff >= 0) {
                        trump.position.y += cYDiff + 1;
                    } else {
                        trump.position.y -= cYDiff + 1;
                    }

                    // normalize new vectors
                    trump.dx = -cXDiff / cYDiff;
                    trump.dy = -cYDiff / cXDiff;

                    // rounding error
                    var ddif = Math.abs(trump.dx + trump.dy);
                    if (ddif > 1.0) {
                        if (trump.dx >= 0) {
                            trump.dy -= ddif;
                        } else {
                            trump.dy += ddif;
                        }
                    }
                } //end of Trump is moving
                //console.log('dx::::::' + trump.dx + ' dy::::::' + trump.dy)

                return true;
            }
            return false;
        }

        /** 
         * @method updatePingPong
         * @description move in a ping-pong style.
         * Call in an update function inside the Character, e.g. 
         * update () { updateRandomWalk(); }
         * The main Game object automatically finds and 'fires' update() function in 
         * all Characters.
         * Possible updates for motion:
         * 1. Collision with a Player (via kick() method) starts the Trump character moving
         * 2. Trump will bounce on all walls EXCEPT the bottom wall
         * 3. When the Trump intersects the bottom wall, they stop moving
         * 4. If they collide with an Animal, they bounce, and the Animal returns to its Cage.
         */

    }, {
        key: 'updatePingPong',
        value: function updatePingPong() {

            if (!this.inited) {
                console.error('Trump PingPong NOT initialized (did you leave out of constructor?)');
                return;
            }
            //console.log('dx:' + this.obj.dx + ' dy:' + this.obj.dy);
            this.obj.position.left -= this.obj.speed * this.obj.dx;
            this.obj.position.top -= this.obj.speed * this.obj.dy;

            //check bounds (AnimalArea)
            if (this.bounds) {
                if (this.obj.image.data) {

                    var w = this.obj.image.data.width;
                    var h = this.obj.image.data.height;

                    // catch cases where Trump gets into the Cage area
                    if (this.obj.position.top < this.bounds.top) {
                        if (this.obj.dy > 0) {
                            this.obj.dy = -this.obj.dy;
                        }
                        this.obj.position.top = this.bounds.top + 1;
                    }

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

                            if (this.calculateCollision(this.obj, animal)) {
                                //set the Animal's state to return home
                                console.log('>>>RETURNING ANIMAL TO CAGE');
                                animal.direction = 'return';
                                if (this.obj.speed < 2) {
                                    this.obj.speed = 2;
                                }
                            }
                        }
                    }
                }
            }

            //break out of horizontal move
            if (this.obj.dy < 0.001 && this.obj.dx > 0.001) {
                var d = this.randomizer();
                this.obj.dy += d - this.randomizer();
            }
        }
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

},{"./DynamicText.js":9,"./GamePiece.js":12,"./Info.js":18,"./Text.js":31}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * @class Scorer
 * @description create an object which cant detect the end of the game, and 
 * route over to the ending screen. May load a Score text object to display game 
 * scores onscreen.
 * @param Array characterArray the array of Characters who might be involved 
 * in determining score. 
 */

var Scorer = function () {
	function Scorer(game) {
		_classCallCheck(this, Scorer);

		this.game = game;

		// Save list of moving characters (Player, Animals, Trumps)
		this.characterArray = this.game.displayCharacters;
		window.characterArray = this.characterArray;

		// Save the bounds of PlayerArea (Animal enters = out of game, escaped)
		this.outY = this.game.screens['game-screen'].playerAreas[0].position.top;
	}

	/** 
  * @method gameOver
  * @description Check the score, return true if game is over. 
  * Determined by state of Animals. At game end, they are all either
  * 1. Back in their cages
  * 2. Into or beyond the PlayerArea
  */


	_createClass(Scorer, [{
		key: 'gameOver',
		value: function gameOver() {
			var animalsDone = 0,
			    animalsReturned = 0,
			    totAnimals = 0;

			for (var i = 0, len = this.characterArray.length; i < len; i++) {
				var character = this.characterArray[i];
				if (character.direction) {
					totAnimals++;
					//test for returned to cage
					switch (character.direction) {
						case 'return':
						case 'caged':
							animalsDone++;
							animalsReturned++;
							break;
						default:
							break;
					}
					//test for out of AnimalArea (evaded the Player's Trump)
					if (character.position.top > this.outY) {
						animalsDone++;
					}
				}
			}

			if (animalsDone == animalsReturned) {
				this.won = true;
			} else {
				this.won = false;
			}

			if (totAnimals == animalsDone) {
				return true;
			}

			return false;
		}
	}]);

	return Scorer;
}();

exports.default = Scorer;

},{}],26:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Image.js":17,"./StaticImage.js":29}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * @class Sounder.js

 * @description provide sounds that other objects can play. Detects the kinds 
 * of audio files the web brower can play, and serves the first file it finds in 
 * the /audio folder of the distribution. Audio files are accessed by custom names 
 * for playback.

 * Adapted from
 * @http://blog.sklambert.com/html5-canvas-game-html5-audio-and-finishing-touches/

 * Sounder.js should be loaded in the main Game initialization process.

 * In addition, the distribution MUST have an /audio directory with files in multiple 
 * audio formats:
 * MP3 (.mp3)
 * Ogg-Vorbis (.ogg)
 * WAV (.wav)

 * Audio Editors:
 * Audacity (free)
 * @link http://www.audacityteam.org/
 * ProTools ($$$)
 * @link http://www.avid.com/pro-tools

 * Audio converters:
 * @link http://media.io/
 * @link https://sourceforge.net/projects/audacity/
 * @link http://www.mediahuman.com/audio-converter/
 * @link http://www.html5audioconverter.com/
 
 * Audio Samples:
 * @link http://www.grsites.com/archive/sounds/category/25/?offset=20
 * @link https://www.freesound.org
 */

var Sounder = function () {
	function Sounder() {
		_classCallCheck(this, Sounder);

		// Create an array of loaded sounds
		this.path = 'audio/';

		this.sounds = [];
		this.checkAudio();
	}

	/** 
  * @method checkAudio
  * @description see which audio file formats can be played by the browser.
  */


	_createClass(Sounder, [{
		key: 'checkAudio',
		value: function checkAudio() {
			var elem = document.createElement('audio');
			var bool = false;

			try {
				if (bool = !!elem.canPlayType) {
					bool = new Boolean(bool);
					bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '');
					bool.mp3 = elem.canPlayType('audio/mpeg;').replace(/^no$/, '');
					bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '');
					bool.m4a = (elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;')).replace(/^no$/, '');
				}
			} catch (e) {}
			// list supported audio types
			//elem = null;
			this.type = bool;

			for (var i in this.type) {
				console.log(i + ' support:' + this.type[i]);
			}
		}

		/** 
   * @method setSound
   * @description callback for loading sound, adds to the 
   * sounds array for later playback.
   */

	}, {
		key: 'setSound',
		value: function setSound(e, name, volume) {
			if (!volume) {
				volume = 0.5;
			}
			this.sounds[name] = e.target;
			this.sounds[name].volume = volume;
			console.log('added sound:' + name);
		}

		/** 
   * @method soundError
   * @description callback for failed loads of sound files.
   */

	}, {
		key: 'soundError',
		value: function soundError(e, name) {
			console.error('Audio ' + name + ' faied to load');
			this.sounds[name] = null;
		}

		/** 
   * @method addSound
   * @description add a new sound. 
   * @param String name the name of the sound. The sound name 
   * must match the file containing the audio, e.g. for a sound called 
   * 'kick' there must be a file /audio/kick.mp3 
   * Possible formats (create them all during production)
   * - MP3 (.mp3)
   * - Ogg-Vorbis (.ogg)
   * - WAV (.wav)
   * @param Number volume the loudness of the sound, between 0 (silent) 
   * and 1.0 (as loud as possible).
   */

	}, {
		key: 'addSound',
		value: function addSound(name, volume) {
			var _this = this;

			if (!name) {
				console.error('tried to load audio file without a name and/or path, aborting');
				return;
			}
			// try creating the sound
			var snd;
			// get the extension and remaining path
			for (var i in this.type) {
				console.log('this.type[' + i + ']=' + this.type[i]);
				if (this.type[i] != "") {
					//returned dataType for elem.canPlayType(...)

					var filePath = this.path + name + '.' + i;
					console.log("TRYING TO LOAD:" + this.path + name + '.' + i);

					// Create the Audio object
					snd = new Audio(filePath);

					// trap load and error events
					snd.addEventListener('loadeddata', function (event) {
						return _this.setSound(event, name, volume);
					}, false);

					snd.addEventListener('error', function (event) {
						return _this.soundError(event, name);
					}, false);

					// start loading the sound
					snd.load();
					break;
				}
			}
			if (!snd) {
				console.error('sound file for:' + name + ' not found in audio');
			}
		}

		/** 
   * @method playSound
   * @description
   * @params String name the name of the sound. Must match the filename 
   * WITHOUT a file extension in the /audio folder for the game.
   */

	}, {
		key: 'playSound',
		value: function playSound(name) {
			// Check for no sounds (loaded sound in game.js without doing new Sounder() )
			if (this.sounds[name]) {
				this.sounds[name].play();
			} else {
				console.error('no sound file with name:' + name + ' in audio folder (OR you called addSound BEFORE you did new Sounder() in your code...');
			}
		}

		/** 
   * @method fileExists
   * @description detect if a file is present on the server. Uses an 
   * synchronous Ajax technique, so SLOW if you are using a remote server. 
   * No comparable method exists for determining if a folder exists in 
   * client-side vanilla JavaScript.
   * @param String url the path to the file on the server.
   */

	}, {
		key: 'fileExists',
		value: function fileExists(url) {
			var xhr = new XMLHttpRequest();
			xhr.open('HEAD', url, false);
			xhr.send();
			if (xhr.status == '404') {
				return false;
			} else {
				return true;
			}
		}
	}]);

	return Sounder;
}(); // end of class


exports.default = Sounder;

},{}],28:[function(require,module,exports){
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

},{"./Background.js":4,"./GamePiece.js":12,"./Identity.js":16,"./Image.js":17,"./Info.js":18,"./Screen.js":26,"./StaticText.js":30,"./Text.js":31}],29:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18}],30:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Info.js":18,"./Text.js":31}],31:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Info.js":18}],32:[function(require,module,exports){
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

},{"./Animal.js":1,"./Character.js":7,"./GamePiece.js":12}],33:[function(require,module,exports){
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
    //Trump gets PingPong motion

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Trump).call(this, config));

    _this.mover.initPingPong(0);
    // END ADDED IN WEEK 11<<<<<<<<<<<<<<

    return _this;
  }

  // >>>>>>>>>>>ADDED IN WEEK 11


  _createClass(Trump, [{
    key: 'update',
    value: function update() {
      this.mover.updatePingPong();
    }
    // END ADDED IN WEEK 11<<<<<<<<<<<<<<

  }]);

  return Trump;
}(_Character3.default);

exports.default = Trump;

},{"./Character.js":7,"./Collider.js":8,"./GamePiece.js":12,"./Mover.js":21}],34:[function(require,module,exports){
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

},{"../../tests/Tests.js":35,"./Animal.js":1,"./AnimalArea.js":2,"./Area.js":3,"./Bear.js":5,"./Cage.js":6,"./Character.js":7,"./DynamicText.js":9,"./EndScreen.js":10,"./Game.js":11,"./GamePiece.js":12,"./GameScreen.js":13,"./Gorilla.js":14,"./Health.js":15,"./Identity.js":16,"./Info.js":18,"./Instructions.js":19,"./Lion.js":20,"./Player.js":22,"./PlayerArea.js":23,"./Score.js":24,"./Screen.js":26,"./StartScreen.js":28,"./StaticText.js":30,"./Text.js":31,"./Tiger.js":32,"./Trump.js":33}],35:[function(require,module,exports){
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

},{"../modules/js/Animal.js":1,"../modules/js/AnimalArea.js":2,"../modules/js/Area.js":3,"../modules/js/Bear.js":5,"../modules/js/Cage.js":6,"../modules/js/Character.js":7,"../modules/js/DynamicText.js":9,"../modules/js/EndScreen.js":10,"../modules/js/Game.js":11,"../modules/js/GamePiece.js":12,"../modules/js/GameScreen.js":13,"../modules/js/Gorilla.js":14,"../modules/js/Health.js":15,"../modules/js/Identity.js":16,"../modules/js/Info.js":18,"../modules/js/Instructions.js":19,"../modules/js/Lion.js":20,"../modules/js/Player.js":22,"../modules/js/PlayerArea.js":23,"../modules/js/Score.js":24,"../modules/js/Screen.js":26,"../modules/js/StartScreen.js":28,"../modules/js/StaticText.js":30,"../modules/js/Text.js":31,"../modules/js/Tiger.js":32,"../modules/js/Trump.js":33}]},{},[34])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQW5pbWFsQXJlYS5qcyIsIm1vZHVsZXMvanMvQXJlYS5qcyIsIm1vZHVsZXMvanMvQmFja2dyb3VuZC5qcyIsIm1vZHVsZXMvanMvQmVhci5qcyIsIm1vZHVsZXMvanMvQ2FnZS5qcyIsIm1vZHVsZXMvanMvQ2hhcmFjdGVyLmpzIiwibW9kdWxlcy9qcy9Db2xsaWRlci5qcyIsIm1vZHVsZXMvanMvRHluYW1pY1RleHQuanMiLCJtb2R1bGVzL2pzL0VuZFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvR2FtZS5qcyIsIm1vZHVsZXMvanMvR2FtZVBpZWNlLmpzIiwibW9kdWxlcy9qcy9HYW1lU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9Hb3JpbGxhLmpzIiwibW9kdWxlcy9qcy9IZWFsdGguanMiLCJtb2R1bGVzL2pzL0lkZW50aXR5LmpzIiwibW9kdWxlcy9qcy9JbWFnZS5qcyIsIm1vZHVsZXMvanMvSW5mby5qcyIsIm1vZHVsZXMvanMvSW5zdHJ1Y3Rpb25zLmpzIiwibW9kdWxlcy9qcy9MaW9uLmpzIiwibW9kdWxlcy9qcy9Nb3Zlci5qcyIsIm1vZHVsZXMvanMvUGxheWVyLmpzIiwibW9kdWxlcy9qcy9QbGF5ZXJBcmVhLmpzIiwibW9kdWxlcy9qcy9TY29yZS5qcyIsIm1vZHVsZXMvanMvU2NvcmVyLmpzIiwibW9kdWxlcy9qcy9TY3JlZW4uanMiLCJtb2R1bGVzL2pzL1NvdW5kZXIuanMiLCJtb2R1bGVzL2pzL1N0YXJ0U2NyZWVuLmpzIiwibW9kdWxlcy9qcy9TdGF0aWNJbWFnZS5qcyIsIm1vZHVsZXMvanMvU3RhdGljVGV4dC5qcyIsIm1vZHVsZXMvanMvVGV4dC5qcyIsIm1vZHVsZXMvanMvVGlnZXIuanMiLCJtb2R1bGVzL2pzL1RydW1wLmpzIiwibW9kdWxlcy9qcy9pbmRleC5qcyIsInRlc3RzL1Rlc3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNLQzs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQixNOzs7QUFFcEIsa0JBQWEsTUFBYixFQUFxQjtBQUFBOzs7OztBQUFBLDBGQUNiLE1BRGE7O0FBS3BCLFVBQUssS0FBTCxDQUFXLGNBQVgsQ0FBMEIsSUFBMUIsRUFBZ0MsUUFBaEM7OztBQUxvQjtBQVFwQjs7Ozs7Ozs2QkFHUztBQUNULFdBQUssS0FBTCxDQUFXLGdCQUFYO0FBQ0E7Ozs7Ozs7O2tCQWZtQixNOzs7Ozs7Ozs7QUNackI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsSTs7O0FBRXBCLGdCQUFhLE1BQWIsRUFBcUI7QUFBQTs7QUFBQSxtRkFDZCxNQURjO0FBRXBCOzs7OztrQkFKbUIsSTs7Ozs7Ozs7Ozs7QUNGckI7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQixJOzs7QUFFcEIsZ0JBQWEsTUFBYixFQUFxQjtBQUFBOzs7O0FBQUEsd0ZBQ2QsTUFEYzs7QUFJcEIsVUFBSyxRQUFMLENBQWMsT0FBTyxJQUFyQixFQUEyQixPQUFPLFNBQWxDLEVBQTZDLE9BQU8sSUFBcEQ7OztBQUdBLFVBQUssY0FBTCxDQUFvQixPQUFPLFFBQTNCLEU7QUFDQSxVQUFLLFVBQUwsQ0FBZ0IsT0FBTyxJQUF2QjtBQVJvQjtBQVNwQjs7Ozs7Ozs2QkFHUyxJLEVBQU0sUyxFQUFXLE8sRUFBUztBQUNuQyxXQUFLLEdBQUwsR0FBVyxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtBQUNBLFdBQUssR0FBTCxDQUFTLEVBQVQsR0FBYyxPQUFPLE9BQXJCOzs7QUFHQSxXQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsUUFBZixHQUEwQixVQUExQjs7O0FBR0EsV0FBSyxHQUFMLENBQVMsS0FBVCxDQUFlLE1BQWYsR0FBd0IsS0FBeEI7QUFDQSxXQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsT0FBZixHQUF5QixLQUF6Qjs7O0FBR0EsZ0JBQVUsWUFBVixDQUF1QixLQUFLLEdBQTVCLEVBQWlDLFVBQVUsVUFBVixDQUFxQixDQUFyQixDQUFqQzs7O0FBR0EsVUFBSSxPQUFKLEVBQWE7O0FBRVosYUFBSyxLQUFMLEdBQWEsMEJBQ1o7QUFDQyxnQkFBTSxLQUFLLEdBQUwsQ0FBUyxFQUFULEdBQWM7QUFEckIsU0FEWSxDQUFiOztBQU1BLGFBQUssS0FBTCxDQUFXLG1CQUFYLENBQWdDLEtBQUssR0FBckMsRUFBMEMsT0FBMUM7QUFDQTtBQUVEOzs7Ozs7Ozs7a0JBeENtQixJOzs7Ozs7Ozs7QUNSckI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFb0IsVTs7O0FBRXBCLHNCQUFhLE1BQWIsRUFBcUI7QUFBQTs7QUFBQSw4RkFDZCxNQURjOztBQUdwQixVQUFLLFNBQUwsQ0FBZSxPQUFPLE1BQXRCO0FBQ0EsVUFBSyxTQUFMLENBQWUsT0FBTyxNQUF0QjtBQUNBLFVBQUssbUJBQUwsQ0FBeUIsT0FBTyxLQUFoQyxFQUF1QyxPQUFPLElBQTlDO0FBTG9CO0FBTXBCOzs7OztrQkFSbUIsVTs7Ozs7Ozs7O0FDSnBCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsSTs7O0FBRXBCLGdCQUFhLE1BQWIsRUFBcUI7QUFBQTs7QUFBQSxtRkFDYixNQURhO0FBRXBCOzs7OztrQkFKbUIsSTs7Ozs7Ozs7O0FDSnJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLEk7OztBQUVwQixnQkFBYSxNQUFiLEVBQXFCO0FBQUE7O0FBQUEsbUZBRWQsTUFGYztBQUlwQjs7Ozs7a0JBTm1CLEk7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUIsUzs7O0FBRXBCLHFCQUFhLE1BQWIsRUFBcUI7QUFBQTs7OztBQUFBLDZGQUNiLE1BRGE7O0FBSXBCLFVBQUssSUFBTCxHQUFZLE9BQU8sSUFBbkI7OztBQUdBLFVBQUssUUFBTCxHQUFnQixPQUFPLFFBQXZCO0FBQ0EsVUFBSyxJQUFMLEdBQVksT0FBTyxJQUFuQjs7O0FBR0EsVUFBSyxLQUFMLEdBQWEsMEJBQWI7OztBQUdBLFVBQUssS0FBTCxHQUFhLDBCQUNaO0FBQ0MsWUFBTSxPQUFPLElBQVAsR0FBYyxRQURyQjtBQUVDLFlBQU0sT0FBTztBQUZkLEtBRFksQ0FBYjs7OztBQVNBLFVBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsT0FBTyxJQUF2QixFQUE2QixZQUFZO0FBQUMsY0FBUSxHQUFSLENBQVksWUFBWSxPQUFPLElBQS9CO0FBQXNDLEtBQWhGO0FBdkJvQjtBQXdCcEI7Ozs7Ozs7eUJBR0ssTyxFQUFTO0FBQ2YsVUFBSSxLQUFLLEtBQVQsRUFBZ0I7QUFDZixZQUFJLE1BQU0sS0FBSyxLQUFMLENBQVcsSUFBckI7Ozs7QUFJQSxZQUFJLEdBQUosRUFBUzs7QUFFTixrQkFBUSxTQUFSLENBQWtCLEdBQWxCLEVBQXVCLEtBQUssUUFBTCxDQUFjLElBQXJDLEVBQTJDLEtBQUssUUFBTCxDQUFjLEdBQXpEO0FBQ0Y7QUFDRDtBQUNBOzs7Ozs7a0JBeENtQixTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDVEEsUTtBQUVwQixvQkFBYSxjQUFiLEVBQTZCO0FBQUE7O0FBQzVCLFNBQUssY0FBTCxHQUFzQixjQUF0QjtBQUNBLFNBQUssV0FBTCxHQUFtQixFQUFuQixDO0FBQ0EsU0FBSyxlQUFMO0FBQ0E7Ozs7c0NBRWtCO0FBQ2xCLFdBQUssSUFBSSxJQUFJLENBQVIsRUFBVyxNQUFNLEtBQUssY0FBTCxDQUFvQixNQUExQyxFQUFrRCxJQUFJLEdBQXRELEVBQTJELEdBQTNELEVBQWdFO0FBQy9ELGdCQUFRLEtBQUssY0FBTCxDQUFvQixDQUFwQixFQUF1QixXQUF2QixDQUFtQyxJQUEzQztBQUNDLGVBQUssTUFBTDtBQUNBLGVBQUssT0FBTDtBQUNBLGVBQUssTUFBTDtBQUNBLGVBQUssU0FBTDtBQUNDLGlCQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBc0IsS0FBSyxjQUFMLENBQW9CLENBQXBCLENBQXRCO0FBQ0E7QUFDRCxlQUFLLE9BQUw7QUFDQyxpQkFBSyxLQUFMLEdBQWEsS0FBSyxjQUFMLENBQW9CLENBQXBCLENBQWI7QUFDQTtBQUNELGVBQUssUUFBTDtBQUNDLGlCQUFLLE1BQUwsR0FBYyxLQUFLLGNBQUwsQ0FBb0IsQ0FBcEIsQ0FBZDtBQUNBO0FBQ0Q7QUFDQztBQWRGO0FBZ0JBOzs7QUFHRCxXQUFLLEtBQUwsQ0FBVyxNQUFYLEdBQW9CLEtBQUssTUFBekI7QUFDQSxXQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLEtBQUssV0FBMUI7QUFDQSxXQUFLLE1BQUwsQ0FBWSxLQUFaLEdBQW9CLEtBQUssS0FBekI7OztBQUdBLGFBQU8sT0FBUCxHQUFpQixLQUFLLEtBQUwsQ0FBVyxPQUE1QjtBQUdBOzs7Ozs7a0JBckNtQixROzs7Ozs7Ozs7QUNIckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztJQUVvQixXOzs7QUFFcEIsdUJBQWEsTUFBYixFQUFxQjtBQUFBOztBQUFBLDBGQUNkLE1BRGM7QUFFcEI7Ozs7O2tCQUptQixXOzs7Ozs7Ozs7OztBQ0pwQjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLFM7OztBQUVwQixxQkFBYSxNQUFiLEVBQXFCO0FBQUE7Ozs7QUFBQSw2RkFDZCxNQURjOztBQUlwQixVQUFLLGNBQUwsQ0FBb0IsNEJBQXBCOzs7QUFHQSxVQUFLLGNBQUw7QUFDQSxVQUFLLGNBQUw7OztBQUdBLFVBQUssVUFBTDtBQUNBLFVBQUssZ0JBQUw7QUFab0I7QUFhcEI7Ozs7aUNBRWEsRyxFQUFLOztBQUVsQixVQUFJLEtBQUssUUFBVCxFQUFtQjtBQUNsQixhQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLHFCQUFwQjtBQUNBOztBQUVELFVBQUksR0FBSixFQUFTO0FBQ1QsYUFBSyxRQUFMLEdBQWdCLHVCQUNmO0FBQ0MsZ0JBQU0sVUFEUDtBQUVDLGlCQUFPLHFCQUZSO0FBR0MsZ0JBQU0sc0JBSFA7QUFJQyxrQkFBUSxpQkFKVDtBQUtDLGtCQUFRO0FBTFQsU0FEZSxDQUFoQjtBQVNDLE9BVkQsTUFVTztBQUNQLGFBQUssUUFBTCxHQUFnQix1QkFDZjtBQUNDLGdCQUFNLFVBRFA7QUFFQyxpQkFBTyxxQkFGUjtBQUdDLGdCQUFNLHVCQUhQO0FBSUMsa0JBQVEsaUJBSlQ7QUFLQyxrQkFBUTtBQUxULFNBRGUsQ0FBaEI7QUFTQztBQUVEOzs7Ozs7OEJBR1UsRyxFQUFLO0FBQ2YsV0FBSyxZQUFMLENBQWtCLEdBQWxCOzs7Ozs7OztBQVFBOzs7cUNBRWlCLENBRWpCOzs7cUNBRWlCLENBRWpCOzs7aUNBRWE7QUFDZCxjQUFRLEdBQVIsQ0FBWSw2QkFBNkIsS0FBSyxJQUE5Qzs7QUFFQSxlQUFTLGFBQVQsQ0FBdUIseUJBQXZCLEVBQWtELGdCQUFsRCxDQUFtRSxPQUFuRSxFQUNDLFVBQVUsQ0FBVixFQUFhOztBQUVaLFVBQUUsY0FBRjtBQUNBLGFBQUssSUFBTCxDQUFVLFNBQVY7QUFFQSxPQUxELENBS0UsSUFMRixDQUtPLElBTFAsQ0FERDtBQU9BOzs7dUNBRW1CO0FBQ25CLGNBQVEsR0FBUixDQUFZLDZCQUE2QixLQUFLLElBQTlDOztBQUVBLGVBQVMsYUFBVCxDQUF1QixpQ0FBdkIsRUFBMEQsZ0JBQTFELENBQTJFLE9BQTNFLEVBQ0MsVUFBVSxDQUFWLEVBQWE7O0FBRVosVUFBRSxjQUFGO0FBQ0EsYUFBSyxJQUFMLENBQVUsUUFBVjtBQUVBLE9BTEQsQ0FLRSxJQUxGLENBS08sSUFMUCxDQUREO0FBT0E7Ozs7OztrQkF6Rm9CLFM7Ozs7Ozs7Ozs7O0FDSnRCOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUIsSTs7O0FBRXBCLGVBQWEsTUFBYixFQUFxQjtBQUFBOzs7O0FBQUEsc0ZBRWQsTUFGYzs7QUFLcEIsUUFBSyxPQUFMLEdBQWUsMkNBQWY7OztBQUdBLFFBQUssT0FBTCxHQUFlLElBQWY7OztBQUdBLFFBQUssZUFBTCxHQUF1QixjQUF2QjtBQUNBLFFBQUssY0FBTCxHQUFzQixhQUF0QjtBQUNBLFFBQUssYUFBTCxHQUFxQixZQUFyQjs7O0FBR0EsUUFBSyxPQUFMLEdBQWUsRUFBZjs7O0FBR0EsUUFBSyxpQkFBTCxHQUF5QixFQUF6Qjs7O0FBR0EsUUFBSyxJQUFMOztBQXRCb0I7QUF3QnBCLEU7Ozs7eUJBRU87OztBQUdQLFFBQUssT0FBTCxDQUFhLEtBQUssZUFBbEIsSUFBcUMsMEJBQWdCLEVBQUMsTUFBTSxjQUFQLEVBQXVCLElBQUksS0FBSyxlQUFoQyxFQUFpRCxNQUFNLElBQXZELEVBQWhCLENBQXJDO0FBQ0EsUUFBSyxPQUFMLENBQWEsS0FBSyxjQUFsQixJQUFvQyx5QkFBZSxFQUFDLE1BQU0sYUFBUCxFQUFzQixJQUFJLEtBQUssY0FBL0IsRUFBK0MsTUFBTSxJQUFyRCxFQUFmLENBQXBDO0FBQ0EsUUFBSyxPQUFMLENBQWEsS0FBSyxhQUFsQixJQUFtQyx3QkFBYyxFQUFDLE1BQU0sWUFBUCxFQUFxQixJQUFJLEtBQUssYUFBOUIsRUFBNkMsTUFBTSxJQUFuRCxFQUFkLENBQW5DOzs7QUFHQSxRQUFLLFVBQUw7OztBQUdBLFFBQUssUUFBTDtBQUNBOzs7Ozs7K0JBR2E7QUFDYixRQUFLLE1BQUwsR0FBYyxTQUFTLGFBQVQsQ0FBdUIsMkJBQXZCLENBQWQ7QUFDQSxRQUFLLE9BQUwsR0FBZSxLQUFLLE1BQUwsQ0FBWSxVQUFaLENBQXVCLElBQXZCLENBQWY7QUFDQTs7Ozs7Ozs7OztnQ0FPYztBQUNkLFFBQUssaUJBQUwsQ0FBdUIsSUFBdkIsQ0FDQyxxQkFDQztBQUNDLFVBQU0sUUFEUCxFQUNpQixVQUFVLEVBQUMsS0FBSyxHQUFOLEVBQVcsTUFBTSxHQUFqQixFQUQzQjtBQUVDLFVBQU0sd0JBRlA7QUFHQyxVQUFNO0FBSFAsSUFERCxDQUREO0FBU0E7OztnQ0FFYztBQUNkLFFBQUssaUJBQUwsQ0FBdUIsSUFBdkIsQ0FDQyxtQkFDQztBQUNDLFVBQU0sTUFEUDtBQUVDLGNBQVUsRUFBQyxLQUFLLEVBQU4sRUFBVSxNQUFNLEVBQWhCLEVBRlg7QUFHQyxVQUFNLHNCQUhQO0FBSUMsVUFBTTtBQUpQLElBREQsQ0FERDtBQVVBLFFBQUssaUJBQUwsQ0FBdUIsSUFBdkIsQ0FDQyxvQkFDQztBQUNDLFVBQU0sT0FEUDtBQUVDLGNBQVUsRUFBQyxLQUFLLEVBQU4sRUFBVSxNQUFNLEdBQWhCLEVBRlg7QUFHQyxVQUFNLHVCQUhQO0FBSUMsVUFBTTtBQUpQLElBREQsQ0FERDtBQVVBLFFBQUssaUJBQUwsQ0FBdUIsSUFBdkIsQ0FDQyxtQkFDQztBQUNDLFVBQU0sTUFEUCxFQUNlLFVBQVUsRUFBQyxLQUFLLEVBQU4sRUFBVSxNQUFNLEdBQWhCLEVBRHpCO0FBRUMsVUFBTSxzQkFGUDtBQUdDLFVBQU07QUFIUCxJQURELENBREQ7QUFTQSxRQUFLLGlCQUFMLENBQXVCLElBQXZCLENBQ0Msc0JBQ0M7QUFDQyxVQUFNLFNBRFAsRUFDa0IsVUFBVSxFQUFDLEtBQUssRUFBTixFQUFVLE1BQU0sR0FBaEIsRUFENUI7QUFFQyxVQUFNLHlCQUZQO0FBR0MsVUFBTTtBQUhQLElBREQsQ0FERDtBQVVBOzs7K0JBRWE7QUFDYixRQUFLLGlCQUFMLENBQXVCLElBQXZCLENBQ0Msb0JBQ0M7QUFDQyxVQUFNLE9BRFAsRUFDZ0IsVUFBVSxFQUFDLEtBQUssR0FBTixFQUFXLE1BQU0sR0FBakIsRUFEMUI7QUFFQyxVQUFNLHNCQUZQO0FBR0MsVUFBTTtBQUhQLElBREQsQ0FERDtBQVVBOzs7NkJBRVc7Ozs7QUFJWCxXQUFRLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLFFBQUssT0FBTCxDQUFhLEtBQUssYUFBbEIsRUFBaUMsVUFBakM7QUFDQSxRQUFLLE9BQUwsQ0FBYSxLQUFLLGVBQWxCLEVBQW1DLFVBQW5DO0FBQ0E7Ozs4QkFFWTs7OztBQUlaLFFBQUssU0FBTCxHQUFpQix1QkFBakI7O0FBRUEsUUFBSyxTQUFMLENBQWUsUUFBZixDQUF3QixNQUF4QixFQUFnQyxHQUFoQztBQUNBLFFBQUssU0FBTCxDQUFlLFFBQWYsQ0FBd0IsTUFBeEIsRUFBZ0MsR0FBaEM7QUFDQSxRQUFLLFNBQUwsQ0FBZSxRQUFmLENBQXdCLE9BQXhCLEVBQWlDLEdBQWpDO0FBQ0EsUUFBSyxTQUFMLENBQWUsUUFBZixDQUF3QixNQUF4QixFQUFnQyxHQUFoQztBQUNBLFFBQUssU0FBTCxDQUFlLFFBQWYsQ0FBd0IsU0FBeEIsRUFBbUMsR0FBbkM7QUFDQSxVQUFPLFNBQVAsR0FBbUIsS0FBSyxTQUF4Qjs7Ozs7QUFLQSxRQUFLLFdBQUw7QUFDQSxRQUFLLFdBQUw7QUFDQSxRQUFLLFVBQUw7OztBQUdBLFFBQUssUUFBTCxHQUFnQix1QkFBYSxLQUFLLGlCQUFsQixDQUFoQjs7O0FBR0EsUUFBSyxNQUFMLEdBQWMscUJBQVcsSUFBWCxDQUFkOzs7Ozs7QUFNQSxRQUFLLFNBQUwsR0FBaUIsSUFBSSxJQUFKLEVBQWpCOzs7QUFHQSxXQUFRLEdBQVIsQ0FBWSxlQUFaO0FBQ0EsUUFBSyxPQUFMLENBQWEsS0FBSyxlQUFsQixFQUFtQyxVQUFuQztBQUNBLFFBQUssT0FBTCxDQUFhLEtBQUssYUFBbEIsRUFBaUMsVUFBakM7QUFDQSxRQUFLLE9BQUwsQ0FBYSxLQUFLLGNBQWxCLEVBQWtDLFVBQWxDO0FBQ0EsUUFBSyxRQUFMO0FBQ0E7Ozs0QkFFVTs7QUFFVixXQUFRLEdBQVIsQ0FBWSxhQUFaOzs7QUFHQSxRQUFLLFNBQUwsR0FBaUIsQ0FBakI7OztBQUdBLHdCQUFxQixLQUFLLFFBQTFCO0FBQ0EsUUFBSyxRQUFMLEdBQWdCLElBQWhCOzs7QUFHQSxRQUFLLE9BQUwsQ0FBYSxLQUFLLGNBQWxCLEVBQWtDLFVBQWxDO0FBQ0EsUUFBSyxPQUFMLENBQWEsS0FBSyxhQUFsQixFQUFpQyxVQUFqQzs7OztBQUlBLFFBQUssT0FBTCxDQUFhLEtBQUssYUFBbEIsRUFBaUMsU0FBakMsQ0FBMkMsS0FBSyxNQUFMLENBQVksR0FBdkQ7O0FBRUEsUUFBSyxPQUFMLEdBQWUsSUFBZjtBQUNBLFFBQUssaUJBQUwsR0FBeUIsRUFBekI7QUFDQSxRQUFLLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxRQUFLLE1BQUwsR0FBYyxJQUFkOztBQUdBOzs7NEJBRVU7OztBQUdWLFFBQUssT0FBTCxHQUFlLElBQUksSUFBSixFQUFmOzs7O0FBSUEsT0FBSSxXQUFXLENBQUMsS0FBSyxPQUFMLEdBQWUsS0FBSyxTQUFyQixJQUFrQyxJQUFqRDs7O0FBR0EsVUFBTyxLQUFLLEtBQUwsQ0FBVyxXQUFXLEVBQXRCLENBQVA7QUFDQTs7O29DQUVrQjs7Ozs7QUFLbEIsT0FBSSxLQUFLLE9BQUwsS0FBaUIsS0FBSyxPQUExQixFQUFtQzs7QUFFbEMsV0FBTyxJQUFQO0FBQ0E7OztBQUdELE9BQUksS0FBSyxNQUFMLENBQVksUUFBWixFQUFKLEVBQTRCO0FBQzNCLFdBQU8sSUFBUDtBQUNBOztBQUVELFVBQU8sS0FBUDtBQUNBOzs7MkJBRVM7O0FBRVQsUUFBSyxJQUFJLElBQUksQ0FBUixFQUFXLE1BQU0sS0FBSyxpQkFBTCxDQUF1QixNQUE3QyxFQUFxRCxJQUFJLEdBQXpELEVBQThELEdBQTlELEVBQW1FOztBQUVsRSxRQUFJLFlBQVksS0FBSyxpQkFBTCxDQUF1QixDQUF2QixDQUFoQjs7QUFFQSxZQUFRLFVBQVUsUUFBVixFQUFSO0FBQ0MsVUFBSyxRQUFMO0FBQ0EsVUFBSyxPQUFMO0FBQ0EsVUFBSyxNQUFMO0FBQ0EsVUFBSyxPQUFMO0FBQ0EsVUFBSyxNQUFMO0FBQ0EsVUFBSyxTQUFMO0FBQ0E7QUFDQztBQVJGOztBQVdBLGNBQVUsTUFBVjtBQUNBO0FBQ0Q7Ozt5QkFFTzs7O0FBR1AsUUFBSyxPQUFMLENBQWEsU0FBYixDQUF1QixDQUF2QixFQUEwQixDQUExQixFQUE2QixLQUFLLE1BQUwsQ0FBWSxLQUF6QyxFQUFnRCxLQUFLLE1BQUwsQ0FBWSxNQUE1RDs7QUFFQSxRQUFLLElBQUksSUFBSSxDQUFSLEVBQVcsTUFBTSxLQUFLLGlCQUFMLENBQXVCLE1BQTdDLEVBQXFELElBQUksR0FBekQsRUFBOEQsR0FBOUQsRUFBbUU7QUFDbEUsU0FBSyxpQkFBTCxDQUF1QixDQUF2QixFQUEwQixJQUExQixDQUErQixLQUFLLE9BQXBDO0FBQ0E7QUFDRDs7OzZCQUVXOztBQUVYLE9BQUksS0FBSyxlQUFMLEVBQUosRUFBNEI7QUFDM0IsU0FBSyxPQUFMO0FBQ0E7QUFDQTtBQUNELFFBQUssTUFBTDtBQUNBLFFBQUssSUFBTDs7O0FBR0EsUUFBSyxRQUFMLEdBQWdCLHNCQUFzQixLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLElBQW5CLENBQXRCLENBQWhCO0FBQ0E7Ozs7OztrQkE3UW1CLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3JDQSxTO0FBRWpCLHFCQUFhLE1BQWIsRUFBcUI7QUFBQTs7O0FBRWpCLFNBQUssSUFBTCxHQUFZLE9BQU8sSUFBbkI7QUFDQSxTQUFLLElBQUwsR0FBWSxLQUFLLEtBQUwsRUFBWjtBQUNBLFNBQUssS0FBTCxHQUFhLElBQWIsQztBQUNIOzs7Ozs7Ozs7O21DQU1lLFEsRUFBVTtBQUN0QixXQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSxVQUFJLEtBQUssR0FBVCxFQUFjO0FBQ1YsYUFBSyxHQUFMLENBQVMsS0FBVCxDQUFlLEdBQWYsR0FBcUIsU0FBUyxHQUFULEdBQWUsSUFBcEM7QUFDQSxhQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsSUFBZixHQUFzQixTQUFTLElBQVQsR0FBZ0IsSUFBdEM7QUFDSDtBQUNKOzs7Ozs7OzsrQkFLVyxJLEVBQU07QUFDZCxXQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsVUFBSSxLQUFLLEdBQVQsRUFBYztBQUNWLGFBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxLQUFmLEdBQXVCLEtBQUssS0FBTCxHQUFhLElBQXBDO0FBQ0EsYUFBSyxHQUFMLENBQVMsS0FBVCxDQUFlLE1BQWYsR0FBd0IsS0FBSyxNQUFMLEdBQWMsSUFBdEM7QUFDSDtBQUNKOzs7Ozs7Ozs7NEJBTVE7QUFDTCxVQUFJLElBQUksSUFBSSxJQUFKLEdBQVcsT0FBWCxFQUFSO0FBQ0EsVUFBSSxPQUFPLFdBQVAsSUFBc0IsT0FBTyxPQUFPLFdBQVAsQ0FBbUIsR0FBMUIsS0FBa0MsVUFBNUQsRUFBd0U7QUFDcEUsYUFBSyxZQUFZLEdBQVosRUFBTCxDO0FBQ0g7QUFDRCxVQUFJLE9BQU8sdUNBQXVDLE9BQXZDLENBQStDLE9BQS9DLEVBQXdELFVBQVUsQ0FBVixFQUFhO0FBQzVFLFlBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFMLEtBQWMsRUFBbkIsSUFBdUIsRUFBdkIsR0FBNEIsQ0FBcEM7QUFDQSxZQUFJLEtBQUssS0FBTCxDQUFXLElBQUUsRUFBYixDQUFKO0FBQ0EsZUFBTyxDQUFDLEtBQUcsR0FBSCxHQUFTLENBQVQsR0FBYyxJQUFFLEdBQUYsR0FBTSxHQUFyQixFQUEyQixRQUEzQixDQUFvQyxFQUFwQyxDQUFQO0FBQ0gsT0FKVSxDQUFYO0FBS0EsYUFBTyxJQUFQO0FBQ0g7Ozs7Ozs7OzhCQUtVO0FBQ1AsYUFBTyxLQUFLLElBQVo7QUFDSDs7Ozs7Ozs7K0JBS1c7QUFDUixhQUFPLEtBQUssV0FBTCxDQUFpQixJQUF4QjtBQUNIOzs7Ozs7Ozs0QkFLUTtBQUNMLGFBQU8sS0FBSyxJQUFaO0FBQ0g7Ozs7Ozs7O3VDQUttQixDQUVuQjs7Ozs7Ozs7b0NBS2dCLENBRWhCOzs7Ozs7Ozs2QkFLTSxHLEVBQUs7QUFDZCxXQUFLLEtBQUwsR0FBYSxHQUFiO0FBQ0E7Ozs7Ozs7OzZCQUtZLENBRVQ7Ozs7Ozs7OzJCQUtPLENBRVA7Ozs7OztrQkF2R2dCLFM7Ozs7Ozs7Ozs7O0FDTHBCOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUIsVTs7O0FBRXBCLHNCQUFhLE1BQWIsRUFBcUI7QUFBQTs7QUFBQSw4RkFDZCxNQURjOztBQUdwQixVQUFLLEtBQUwsR0FBYSxFQUFiO0FBQ0EsVUFBSyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsVUFBSyxXQUFMLEdBQW1CLEVBQW5COzs7QUFHQSxVQUFLLFVBQUw7QUFDQSxVQUFLLFVBQUw7OztBQUdBLFVBQUssY0FBTCxDQUFvQiw2QkFBcEI7OztBQUdBLFFBQUksUUFBUSxTQUFTLGNBQVQsQ0FBd0IsbUJBQXhCLENBQVo7OztBQUdBLFVBQUssS0FBTCxHQUFlLE1BQUssU0FBTCxDQUFlLEtBQWYsRUFBc0Isb0JBQXRCLENBQWY7QUFDQSxVQUFLLFVBQUwsR0FBa0IsTUFBSyxjQUFMLEVBQWxCO0FBQ0EsVUFBSyxVQUFMLEdBQWtCLE1BQUssY0FBTCxFQUFsQjs7QUFwQm9CO0FBc0JwQjs7Ozs4QkFFVSxTLEVBQVcsTyxFQUFTOztBQUU5QixXQUFLLEtBQUwsQ0FBVyxJQUFYLENBQ0MsbUJBQ0M7QUFDQyxjQUFNLFdBRFA7QUFFQyxrQkFBVSxFQUFDLEtBQUssQ0FBTixFQUFTLE1BQU0sRUFBZixFQUZYO0FBR0MsY0FBTSxFQUFDLE9BQU8sR0FBUixFQUFhLFFBQU8sR0FBcEIsRUFIUDtBQUlDLG1CQUFXLFNBSlo7QUFLQyxjQUFNO0FBTFAsT0FERCxDQUREO0FBV0QsV0FBSyxLQUFMLENBQVcsSUFBWCxDQUNDLG1CQUNDO0FBQ0MsY0FBTSxZQURQO0FBRUMsa0JBQVUsRUFBQyxLQUFLLENBQU4sRUFBUyxNQUFNLEdBQWYsRUFGWDtBQUdDLGNBQU0sRUFBQyxPQUFPLEdBQVIsRUFBYSxRQUFPLEdBQXBCLEVBSFA7QUFJQyxtQkFBVyxTQUpaO0FBS0MsY0FBTTtBQUxQLE9BREQsQ0FERDtBQVdBLFdBQUssS0FBTCxDQUFXLElBQVgsQ0FDQyxtQkFDQztBQUNDLGNBQU0sV0FEUDtBQUVDLGtCQUFVLEVBQUMsS0FBSyxDQUFOLEVBQVMsTUFBTSxHQUFmLEVBRlg7QUFHQyxjQUFNLEVBQUMsT0FBTyxHQUFSLEVBQWEsUUFBTyxHQUFwQixFQUhQO0FBSUMsbUJBQVcsU0FKWjtBQUtDLGNBQU07QUFMUCxPQURELENBREQ7QUFXQSxXQUFLLEtBQUwsQ0FBVyxJQUFYLENBQ0MsbUJBQ0M7QUFDQyxjQUFNLGNBRFA7QUFFQyxrQkFBVSxFQUFDLEtBQUssQ0FBTixFQUFTLE1BQU0sR0FBZixFQUZYO0FBR0MsY0FBTSxFQUFDLE9BQU8sR0FBUixFQUFhLFFBQU8sR0FBcEIsRUFIUDtBQUlDLG1CQUFXLFNBSlo7QUFLQyxjQUFNO0FBTFAsT0FERCxDQUREO0FBV0M7OztxQ0FFaUI7O0FBRWpCLFdBQUssV0FBTCxDQUFpQixJQUFqQixDQUNDLHlCQUNDO0FBQ0MsY0FBTSxLQURQO0FBRUMsa0JBQVUsRUFBQyxLQUFLLEdBQU4sRUFBVyxNQUFNLENBQWpCLEVBRlg7QUFHQyxjQUFNLEVBQUMsT0FBTyxHQUFSLEVBQWEsUUFBUSxHQUFyQixFQUhQO0FBSUMsbUJBQVcsS0FBSyxHQUpqQjtBQUtDLGNBQU07QUFMUCxPQURELENBREQ7QUFXQTs7O3FDQUVpQjs7QUFFakIsV0FBSyxXQUFMLENBQWlCLElBQWpCLENBQ0MseUJBQ0M7QUFDQyxjQUFNLGFBRFA7QUFFQyxrQkFBVSxFQUFDLEtBQUssR0FBTixFQUFXLE1BQU0sQ0FBakIsRUFGWDtBQUdDLGNBQU0sRUFBQyxPQUFPLEdBQVIsRUFBYSxRQUFRLEdBQXJCLEVBSFA7QUFJQyxtQkFBVyxLQUFLLEdBSmpCO0FBS0MsY0FBTTtBQUxQLE9BREQsQ0FERDtBQVdBOzs7Ozs7a0JBdEdtQixVOzs7Ozs7Ozs7QUNUckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQixPOzs7QUFFcEIsbUJBQWEsTUFBYixFQUFxQjtBQUFBOztBQUFBLHNGQUNiLE1BRGE7QUFFcEI7Ozs7O2tCQUptQixPOzs7Ozs7Ozs7QUNKckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsTTs7O0FBRXBCLGtCQUFhLE1BQWIsRUFBcUI7QUFBQTs7QUFBQSxxRkFDYixNQURhO0FBRXBCOzs7OztrQkFKbUIsTTs7Ozs7Ozs7O0FDSnJCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRW9CLFE7OztBQUVwQixtQkFBYSxNQUFiLEVBQXFCO0FBQUE7O0FBQUEsMEZBQ2QsTUFEYzs7QUFHcEIsUUFBSyxTQUFMLENBQWUsT0FBTyxNQUF0QjtBQUNBLFFBQUssU0FBTCxDQUFlLE9BQU8sTUFBdEI7QUFDQSxRQUFLLGNBQUwsQ0FBb0IsT0FBTyxLQUEzQixFQUFrQyxPQUFPLElBQXpDOzs7QUFHQSxNQUFJLGVBQWUsU0FBUyxhQUFULENBQXVCLE1BQU0sT0FBTyxLQUFiLEdBQXFCLEtBQTVDLENBQW5CO0FBQ0EsZUFBYSxLQUFiLENBQW1CLE9BQW5CLEdBQTZCLE1BQTdCO0FBVG9CO0FBVXBCOzs7OztrQkFabUIsUTs7Ozs7Ozs7Ozs7QUNMcEI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVvQixLOzs7Ozs7QUFLcEIsZ0JBQWEsTUFBYixFQUFxQjtBQUFBOztBQUFBLHVGQUNkLE1BRGM7O0FBRXBCLFFBQUssS0FBTCxHQUFhLEtBQWIsQztBQUNBLFFBQUssS0FBTCxHQUFhLElBQWI7QUFDQSxRQUFLLElBQUwsR0FBWSxPQUFPLElBQW5CO0FBQ0EsUUFBSyxNQUFMLEdBQWMsT0FBTyxNQUFyQjtBQUNBLFFBQUssTUFBTCxHQUFjLE9BQU8sTUFBckI7QUFOb0I7QUFPcEI7Ozs7Ozs7dUJBR0ssSSxFQUFNLFEsRUFBVTtBQUNyQixPQUFJLE9BQU8sSUFBWDtBQUNBLFFBQUssUUFBTCxDQUFjLEtBQWQ7QUFDQSxXQUFRLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLE9BQUksTUFBTSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBLE9BQUksR0FBSixHQUFVLElBQVY7QUFDQSxPQUFJLE1BQUosR0FBYSxZQUFZO0FBQ3hCLFlBQVEsR0FBUixDQUFZLEtBQUssSUFBTCxHQUFZLHFCQUFaLEdBQW9DLElBQXBDLEdBQTJDLEtBQTNDLEdBQW1ELElBQUksS0FBdkQsR0FBK0QsS0FBL0QsR0FBdUUsSUFBSSxNQUF2RjtBQUNBLFNBQUssUUFBTCxDQUFjLElBQWQ7QUFDQSxTQUFLLElBQUwsR0FBWSxHQUFaOztBQUVBLFFBQUcsUUFBSCxFQUFhO0FBQ1o7QUFDQTtBQUNELElBUkQ7QUFTQSxPQUFJLE9BQUosR0FBYyxVQUFVLENBQVYsRUFBYTtBQUMxQixZQUFRLEdBQVIsQ0FBWSw0QkFBNEIsSUFBeEM7QUFDQSxJQUZEO0FBR0E7Ozt3QkFFTSxLLEVBQU87QUFDYixZQUFTLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0IsV0FBL0IsQ0FBMkMsS0FBSyxJQUFoRDtBQUNBLFFBQUssSUFBTCxHQUFZLElBQVo7QUFDQTs7Ozs7OztpQ0FJZSxLLEVBQU8sSSxFQUFNLFEsRUFBVTtBQUN0QyxPQUFJLE9BQU8sSUFBWDtBQUNBLFFBQUssSUFBTCxDQUFVLElBQVYsRUFBZ0IsWUFBWTtBQUMzQixZQUFRLEdBQVIsQ0FBWSxzQkFBc0IsSUFBdEIsR0FBNkIsU0FBekM7QUFDQSxhQUFTLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0IsV0FBL0IsQ0FBMkMsS0FBSyxJQUFoRDtBQUNBLFFBQUksUUFBSixFQUFjO0FBQ2I7QUFDQTtBQUNELElBTkQ7QUFPQTs7Ozs7OztzQ0FJb0IsUyxFQUFXLEksRUFBTSxRLEVBQVU7QUFDL0MsV0FBUSxHQUFSLENBQVksOEJBQThCLElBQTFDO0FBQ0EsYUFBVSxLQUFWLENBQWdCLGVBQWhCLEdBQWdDLFNBQVMsSUFBVCxHQUFnQixHQUFoRDtBQUNBLFFBQUssUUFBTCxDQUFjLElBQWQ7QUFDQSxPQUFJLFFBQUosRUFBYztBQUNiO0FBQ0E7QUFDRDs7Ozs7OytCQUdhLE8sRUFBUyxRLEVBQVUsSSxFQUFNO0FBQ3RDLFdBQVEsU0FBUixDQUFrQixHQUFsQixFQUF1QixTQUFTLEdBQWhDLEVBQXFDLFNBQVMsSUFBOUMsRUFBb0QsS0FBSyxLQUF6RCxFQUFnRSxLQUFLLE1BQXJFO0FBQ0E7Ozs7Ozs0QkFHVSxRLEVBQVUsSSxFQUFNO0FBQzFCLFFBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsR0FBakIsR0FBdUIsU0FBUyxHQUFoQztBQUNBLFFBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsSUFBakIsR0FBd0IsU0FBUyxJQUFqQztBQUNBLFFBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsS0FBakIsR0FBeUIsS0FBSyxLQUE5QjtBQUNBLFFBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsTUFBakIsR0FBMEIsS0FBSyxNQUEvQjtBQUNBOzs7Ozs7a0JBM0VtQixLOzs7Ozs7Ozs7OztBQ0ZyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsSTs7O0FBRXBCLGVBQVksTUFBWixFQUFvQjtBQUFBOztBQUFBLGlGQUNiLE1BRGE7QUFFbkI7Ozs7NEJBRVUsTSxFQUFRO0FBQ2xCLFFBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQTs7OzRCQUVVLE0sRUFBUTtBQUNsQixRQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0E7Ozs7OztrQkFabUIsSTs7Ozs7Ozs7O0FDSHBCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRW9CLFk7OztBQUVwQix3QkFBYSxNQUFiLEVBQXFCO0FBQUE7O0FBQUEsMkZBQ2QsTUFEYztBQUVwQjs7Ozs7a0JBSm1CLFk7Ozs7Ozs7OztBQ0pwQjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLEk7OztBQUVwQixnQkFBYSxNQUFiLEVBQXFCO0FBQUE7O0FBQUEsbUZBQ2IsTUFEYTtBQUVwQjs7Ozs7a0JBSm1CLEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0xELEs7QUFFcEIsbUJBQWEsT0FBYixFQUFzQjtBQUFBOztBQUNyQixhQUFLLEdBQUwsR0FBVyxPQUFYOzs7QUFHTSxhQUFLLElBQUwsR0FBWSxRQUFRLElBQXBCOzs7QUFHQSxhQUFLLElBQUwsR0FBWSxDQUFaO0FBQ0EsYUFBSyxJQUFMLEdBQVksQ0FBWjtBQUNBLGFBQUssTUFBTCxHQUFjLENBQWQ7QUFDQSxhQUFLLFNBQUwsR0FBaUIsQ0FBakI7O0FBRUEsWUFBSSxDQUFDLEtBQUssSUFBTCxDQUFVLFNBQWYsRUFBMEI7QUFDdEIsb0JBQVEsSUFBUixDQUFhLGdEQUFiO0FBQ0g7QUFFUDs7Ozs7Ozs7Ozs7OztrQ0FTYSxHLEVBQUssUSxFQUFVO0FBQ3RCLGdCQUFJLFdBQVcsS0FBSyxHQUFMLENBQVMsRUFBVCxFQUFhLFFBQWIsQ0FBZixDO0FBQ0EsbUJBQU8sRUFBQyxFQUFFLE1BQU0sUUFBUixDQUFELEdBQW1CLFFBQTFCO0FBQ0g7Ozs7Ozs7OztxQ0FNYTtBQUNWLGdCQUFJLElBQUksWUFBWSxHQUFaLEVBQVI7QUFDQyxnQkFBSSxTQUFTLENBQVQsSUFBYyxDQUFuQjtBQUNBLGdCQUFJLEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsSUFBdUIsRUFBM0I7QUFDQSxtQkFBTyxDQUFQO0FBQ0g7Ozs7Ozs7O2tDQUtVLEMsRUFBRyxDLEVBQUcsSyxFQUFPLE0sRUFBUTtBQUM1QixtQkFBTztBQUNILG1CQUFHLElBQUssUUFBTSxDQURYO0FBRUgsbUJBQUcsSUFBSyxTQUFPO0FBRlosYUFBUDtBQUlIOzs7Ozs7Ozs7OzttQ0FRUTtBQUFBOztBQUNMLG9CQUFRLEdBQVIsQ0FBWSxrQkFBWjtBQUNBLGlCQUFLLElBQUwsR0FBWSxLQUFLLElBQWpCOztBQUdBLGlCQUFLLEtBQUwsR0FBYSxDQUFiO0FBQ0EsaUJBQUssTUFBTCxHQUFjLENBQWQ7QUFDQSxpQkFBSyxPQUFMLEdBQWUsQ0FBZjs7O0FBR0EsaUJBQUssTUFBTCxHQUFjLEtBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsYUFBbEIsRUFBaUMsV0FBakMsQ0FBNkMsQ0FBN0MsRUFBZ0QsUUFBOUQ7QUFDQSxpQkFBSyxNQUFMLENBQVksS0FBWixHQUFvQixLQUFLLElBQUwsQ0FBVSxPQUFWLENBQWtCLGFBQWxCLEVBQWlDLFdBQWpDLENBQTZDLENBQTdDLEVBQWdELElBQWhELENBQXFELEtBQXpFO0FBQ0EsaUJBQUssTUFBTCxDQUFZLE1BQVosR0FBcUIsS0FBSyxJQUFMLENBQVUsT0FBVixDQUFrQixhQUFsQixFQUFpQyxXQUFqQyxDQUE2QyxDQUE3QyxFQUFnRCxJQUFoRCxDQUFxRCxNQUExRTtBQUNBLGlCQUFLLE1BQUwsQ0FBWSxNQUFaLEdBQXFCLEtBQUssTUFBTCxDQUFZLEdBQVosR0FBa0IsS0FBSyxNQUFMLENBQVksTUFBbkQ7QUFDQSxpQkFBSyxNQUFMLENBQVksS0FBWixHQUFvQixLQUFLLE1BQUwsQ0FBWSxJQUFaLEdBQW1CLEtBQUssTUFBTCxDQUFZLEtBQW5EOztBQUVBLGlCQUFLLEtBQUwsR0FBYSxLQUFLLEdBQUwsQ0FBUyxLQUF0Qjs7O0FBR0EsaUJBQUssTUFBTCxHQUFjLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsR0FBaEM7QUFDQSxpQkFBSyxNQUFMLEdBQWMsS0FBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixHQUFsQixHQUF3QixDQUF0Qzs7Ozs7QUFLQSxpQkFBSyxNQUFMLEdBQWMsSUFBZDs7O0FBR0EscUJBQVMsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFDSTtBQUFBLHVCQUFTLE1BQUssSUFBTCxDQUFVLEtBQVYsQ0FBVDtBQUFBLGFBREosRUFDK0IsS0FEL0I7O0FBR0EscUJBQVMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFDSTtBQUFBLHVCQUFTLE1BQUssTUFBTCxDQUFZLEtBQVosQ0FBVDtBQUFBLGFBREosRUFDaUMsS0FEakM7QUFFTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FnQmtCLFMsRUFBVyxTLEVBQVc7QUFDbEMsb0JBQVEsR0FBUixDQUFZLGlCQUFaO0FBQ0EsaUJBQUssSUFBTCxHQUFZLEtBQUssTUFBakI7O0FBRUEsaUJBQUssS0FBTCxHQUFhLFlBQVksS0FBSyxlQUFMLEVBQXpCO0FBQ0EsaUJBQUssS0FBTCxHQUFhLEtBQUssZUFBTCxLQUF5QixHQUF0QztBQUNBLGlCQUFLLEdBQUwsQ0FBUyxTQUFULEdBQXFCLFNBQXJCO0FBQ0EsaUJBQUssT0FBTCxHQUFlLENBQWY7QUFDQSxpQkFBSyxZQUFMLEdBQW9CLENBQXBCO0FBQ0EsaUJBQUssR0FBTCxHQUFXLEVBQVg7QUFDQSxpQkFBSyxTQUFMLEdBQWlCLEdBQWpCOzs7QUFHQSxpQkFBSyxTQUFMLEdBQWlCLElBQWpCOzs7QUFHQSxpQkFBSyxNQUFMLEdBQWMsS0FBSyxJQUFMLENBQVUsT0FBVixDQUFrQixhQUFsQixFQUFpQyxXQUFqQyxDQUE2QyxDQUE3QyxFQUFnRCxRQUE5RDtBQUNBLGlCQUFLLE1BQUwsQ0FBWSxLQUFaLEdBQW9CLEtBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsYUFBbEIsRUFBaUMsV0FBakMsQ0FBNkMsQ0FBN0MsRUFBZ0QsSUFBaEQsQ0FBcUQsS0FBekU7QUFDQSxpQkFBSyxNQUFMLENBQVksTUFBWixHQUFxQixLQUFLLElBQUwsQ0FBVSxPQUFWLENBQWtCLGFBQWxCLEVBQWlDLFdBQWpDLENBQTZDLENBQTdDLEVBQWdELElBQWhELENBQXFELE1BQTFFO0FBQ0EsaUJBQUssTUFBTCxDQUFZLE1BQVosR0FBcUIsS0FBSyxNQUFMLENBQVksR0FBWixHQUFrQixLQUFLLE1BQUwsQ0FBWSxNQUFuRDtBQUNBLGlCQUFLLE1BQUwsQ0FBWSxLQUFaLEdBQW9CLEtBQUssTUFBTCxDQUFZLElBQVosR0FBbUIsS0FBSyxNQUFMLENBQVksS0FBbkQ7OztBQUdBLGlCQUFLLFFBQUwsR0FBZ0IsS0FBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixHQUFsQztBQUNBLGlCQUFLLFNBQUwsR0FBaUIsS0FBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixJQUFuQzs7O0FBR0EsaUJBQUssTUFBTCxHQUFjLENBQWQsRUFBaUIsS0FBSyxPQUFMLEdBQWUsQ0FBaEM7OztBQUdBLGlCQUFLLEtBQUwsR0FBYSxLQUFLLEdBQUwsQ0FBUyxLQUF0Qjs7O0FBR0EsaUJBQUssTUFBTCxHQUFjLElBQWQ7QUFDSDs7Ozs7Ozs7OztxQ0FPYSxTLEVBQVc7QUFDckIsb0JBQVEsR0FBUixDQUFZLHNCQUFaO0FBQ0EsaUJBQUssSUFBTCxHQUFZLEtBQUssUUFBakI7Ozs7QUFJQSxpQkFBSyxNQUFMLEdBQWMsS0FBSyxJQUFMLENBQVUsT0FBVixDQUFrQixhQUFsQixFQUFpQyxXQUFqQyxDQUE2QyxDQUE3QyxFQUFnRCxRQUE5RDtBQUNBLGlCQUFLLE1BQUwsQ0FBWSxLQUFaLEdBQW9CLEtBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsYUFBbEIsRUFBaUMsV0FBakMsQ0FBNkMsQ0FBN0MsRUFBZ0QsSUFBaEQsQ0FBcUQsS0FBekU7QUFDQSxpQkFBSyxNQUFMLENBQVksTUFBWixHQUFxQixLQUFLLElBQUwsQ0FBVSxPQUFWLENBQWtCLGFBQWxCLEVBQWlDLFdBQWpDLENBQTZDLENBQTdDLEVBQWdELElBQWhELENBQXFELE1BQTFFO0FBQ0EsaUJBQUssTUFBTCxDQUFZLE1BQVosR0FBcUIsS0FBSyxNQUFMLENBQVksR0FBWixHQUFrQixLQUFLLE1BQUwsQ0FBWSxNQUFuRDtBQUNBLGlCQUFLLE1BQUwsQ0FBWSxLQUFaLEdBQW9CLEtBQUssTUFBTCxDQUFZLElBQVosR0FBbUIsS0FBSyxNQUFMLENBQVksS0FBbkQ7O0FBRUEsaUJBQUssR0FBTCxDQUFTLFFBQVQsR0FBb0IsS0FBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixHQUF0Qzs7O0FBR0EsaUJBQUssS0FBTCxHQUFhLEtBQUssR0FBTCxDQUFTLEtBQXRCOztBQUVBLGlCQUFLLEdBQUwsQ0FBUyxLQUFULEdBQWlCLENBQWpCO0FBQ0EsaUJBQUssR0FBTCxDQUFTLEVBQVQsR0FBYyxDQUFkO0FBQ0EsaUJBQUssR0FBTCxDQUFTLEVBQVQsR0FBYyxDQUFkOzs7OztBQUtBLGlCQUFLLE1BQUwsR0FBYyxJQUFkO0FBQ0g7Ozs7Ozs7Ozs7OzZCQVFFLEMsRUFBRztBQUNGLG9CQUFRLEVBQUUsT0FBVjtBQUNJLHFCQUFLLEVBQUw7QUFDQSxxQkFBSyxFQUFMO0FBQ0kseUJBQUssSUFBTCxDQUFVLENBQVY7QUFDQSxzQkFBRSxjQUFGLEc7QUFDQTtBQUNKLHFCQUFLLEVBQUw7QUFDSSx5QkFBSyxLQUFMO0FBQ0EseUJBQUssTUFBTCxHQUFjLENBQWQ7QUFDQSx5QkFBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixJQUFsQixJQUEwQixLQUFLLEtBQS9CO0FBQ0EseUJBQUssT0FBTCxHQUFlLENBQUMsQ0FBaEI7QUFDQSxzQkFBRSxjQUFGLEc7QUFDQTtBQUNKLHFCQUFLLEVBQUw7QUFDSSx5QkFBSyxLQUFMO0FBQ0EseUJBQUssTUFBTCxHQUFjLENBQWQ7QUFDQSx5QkFBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixJQUFsQixJQUEwQixLQUFLLEtBQS9CO0FBQ0EseUJBQUssT0FBTCxHQUFlLENBQWY7QUFDQSxzQkFBRSxjQUFGLEc7QUFDQTtBQUNKO0FBQ0k7QUFyQlI7QUF1Qk47Ozs7Ozs7Ozs7Ozs7OztxQ0FZZ0I7QUFDVixnQkFBSSxDQUFDLEtBQUssTUFBVixFQUFrQjtBQUNkLHdCQUFRLEtBQVIsQ0FBYyxpRUFBZDtBQUNBO0FBQ0g7QUFDRCxpQkFBSyxNQUFMO0FBQ0EsZ0JBQUksS0FBSyxLQUFMLEdBQWEsQ0FBakIsRUFBb0I7QUFDaEIsb0JBQUksS0FBSyxNQUFMLEdBQWMsRUFBbEIsRUFBc0I7QUFDbEIseUJBQUssS0FBTCxJQUFjLENBQWQ7QUFDQSx3QkFBSSxLQUFLLEtBQUwsR0FBYSxDQUFqQixFQUFvQjtBQUNoQiw2QkFBSyxLQUFMLEdBQWEsQ0FBYjtBQUNIO0FBQ0o7QUFDSjtBQUNELGlCQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLElBQWxCLElBQTJCLEtBQUssT0FBTCxHQUFlLEtBQUssS0FBL0M7OztBQUdBLGdCQUFJLEtBQUssTUFBVCxFQUFpQjtBQUNiLG9CQUFJLEtBQUssS0FBTCxDQUFXLElBQWYsRUFBcUI7QUFDakIsd0JBQUksSUFBSSxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLEtBQXhCO0FBQ0Esd0JBQUksS0FBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixJQUFsQixHQUF5QixLQUFLLE1BQUwsQ0FBWSxJQUF6QyxFQUErQztBQUMzQyw2QkFBSyxPQUFMLEdBQWUsQ0FBZjtBQUNBLDZCQUFLLEtBQUwsSUFBYyxHQUFkO0FBQ0EsNkJBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsSUFBbEIsR0FBeUIsS0FBSyxNQUFMLENBQVksSUFBWixHQUFvQixLQUFLLEtBQUwsR0FBYSxHQUExRDtBQUNILHFCQUpELE1BSU8sSUFBSSxLQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLElBQWxCLEdBQXlCLEtBQUssTUFBTCxDQUFZLEtBQVosR0FBb0IsQ0FBakQsRUFBb0Q7QUFDdkQsNkJBQUssT0FBTCxHQUFlLENBQUMsQ0FBaEI7QUFDQSw2QkFBSyxLQUFMLElBQWMsR0FBZDtBQUNBLDZCQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLElBQWxCLEdBQXlCLEtBQUssTUFBTCxDQUFZLEtBQVosR0FBb0IsQ0FBcEIsR0FBeUIsS0FBSyxLQUFMLEdBQWEsR0FBL0Q7QUFDSDtBQUNKO0FBQ0o7QUFDSjs7Ozs7Ozs7OzZCQU1LLEMsRUFBRzs7QUFFTCxpQkFBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixHQUFsQixHQUF3QixLQUFLLE1BQTdCOztBQUVBLGdCQUFJLENBQUMsS0FBSyxHQUFMLENBQVMsS0FBZCxFQUFxQjtBQUNqQix3QkFBUSxLQUFSLENBQWMsNkRBQWQ7QUFDQTtBQUNIOzs7QUFHRCxnQkFBSSxhQUFhLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsR0FBbEIsR0FBd0IsS0FBSyxHQUFMLENBQVMsS0FBVCxDQUFlLEtBQWYsQ0FBcUIsSUFBckIsQ0FBMEIsS0FBbEQsR0FBMEQsS0FBSyxHQUFMLENBQVMsS0FBVCxDQUFlLFFBQWYsQ0FBd0IsR0FBbkc7Ozs7QUFJQSxnQkFBSSxhQUFhLEVBQWpCLEVBQXFCOzs7QUFHakIscUJBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxLQUFmLEdBQXVCLEVBQXZCOzs7QUFHQSxvQkFBSSxLQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsUUFBZixDQUF3QixJQUF4QixHQUFnQyxLQUFLLE1BQUwsQ0FBWSxJQUFaLEdBQW1CLEVBQXZELEVBQTREO0FBQ3hELDRCQUFRLEdBQVIsQ0FBWSxnQ0FBWjtBQUNBLHlCQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsRUFBZixHQUFvQixDQUFDLEdBQXJCO0FBQ0EseUJBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxFQUFmLEdBQW9CLEdBQXBCO0FBQ0E7QUFDSDs7O0FBR0Qsb0JBQUksT0FBTyxDQUFDLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsSUFBbEIsR0FBeUIsS0FBSyxHQUFMLENBQVMsS0FBVCxDQUFlLFFBQWYsQ0FBd0IsSUFBbEQsSUFBMEQsRUFBckU7QUFDQSxvQkFBSSxLQUFLLEdBQUwsQ0FBUyxJQUFULElBQWlCLEdBQXJCLEVBQTBCO0FBQ3RCLHdCQUFJLEtBQUssSUFBVDtBQUNBLHdCQUFHLEtBQUssS0FBTCxJQUFjLEtBQUssR0FBdEIsRUFBMkI7QUFDeEIsNkJBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxFQUFmLEdBQW9CLEVBQXBCO0FBQ0MsNkJBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxFQUFmLEdBQW9CLE1BQU0sRUFBMUI7O0FBRUgscUJBSkQsTUFJTyxJQUFJLEtBQUssQ0FBTCxJQUFVLEtBQUssQ0FBQyxHQUFwQixFQUF5QjtBQUM3QixpQ0FBSyxHQUFMLENBQVMsS0FBVCxDQUFlLEVBQWYsR0FBb0IsRUFBcEI7QUFDQyxpQ0FBSyxHQUFMLENBQVMsS0FBVCxDQUFlLEVBQWYsR0FBb0IsTUFBTSxFQUExQjtBQUNILHlCQUhNLE1BR0EsSUFBSSxLQUFLLEdBQUwsQ0FBUyxFQUFULElBQWUsS0FBbkIsRUFBMEI7QUFDN0IsZ0NBQUksSUFBSSxLQUFLLFVBQUwsRUFBUjtBQUNBLGdDQUFJLElBQUksS0FBSyxVQUFMLEVBQVI7QUFDQSxpQ0FBSyxHQUFMLENBQVMsS0FBVCxDQUFlLEVBQWYsR0FBb0IsQ0FBcEI7QUFDQSxpQ0FBSyxHQUFMLENBQVMsS0FBVCxDQUFlLEVBQWYsR0FBb0IsTUFBTSxFQUExQjs7QUFFSCx5QkFOTSxNQU1BO0FBQ0gscUNBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxFQUFmLEdBQW9CLENBQXBCO0FBQ0EscUNBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxFQUFmLEdBQW9CLENBQXBCO0FBQ0g7OztBQUdELHdCQUFJLEtBQUssSUFBTCxDQUFVLFNBQWQsRUFBeUI7QUFDckIsNkJBQUssSUFBTCxDQUFVLFNBQVYsQ0FBb0IsU0FBcEIsQ0FBOEIsTUFBOUI7QUFDSDtBQUVKO0FBQ0o7QUFDSixTOzs7Ozs7Ozs7K0JBTU8sQyxFQUFHO0FBQ1Asb0JBQVEsRUFBRSxPQUFWO0FBQ0kscUJBQUssRUFBTDtBQUNBLHFCQUFLLEVBQUw7QUFDSSx5QkFBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixHQUFsQixHQUF3QixLQUFLLE1BQTdCO0FBQ0E7QUFKUjtBQU1IOzs7Ozs7Ozs7MENBTWU7QUFDbEIsZ0JBQUksSUFBSSxJQUFJLElBQUosR0FBVyxPQUFYLEVBQVI7QUFDTSxnQkFBSSxPQUFPLFdBQVAsSUFBc0IsT0FBTyxPQUFPLFdBQVAsQ0FBbUIsR0FBMUIsS0FBa0MsVUFBNUQsRUFBd0U7QUFDcEUscUJBQUssWUFBWSxHQUFaLEVBQUwsQztBQUNIO0FBQ1AsZ0JBQUksTUFBTSxPQUFPLE9BQVAsQ0FBZSxPQUFmLEVBQXdCLFVBQVUsQ0FBVixFQUFhO0FBQ3JDLG9CQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTCxLQUFjLEVBQW5CLElBQXVCLEVBQXZCLEdBQTRCLENBQXBDO0FBQ0Esb0JBQUksS0FBSyxLQUFMLENBQVcsSUFBRSxFQUFiLENBQUo7QUFDQSx1QkFBTyxDQUFDLEtBQUcsR0FBSCxHQUFTLENBQVQsR0FBYyxJQUFFLEdBQUYsR0FBTSxHQUFyQixFQUEyQixRQUEzQixDQUFvQyxFQUFwQyxDQUFQO0FBQ0gsYUFKRyxDQUFWO0FBS0ksbUJBQU8sTUFBTSxLQUFiO0FBQ0o7Ozs7Ozs7OztrQ0FNUyxHLEVBQUssRyxFQUFLO0FBQ2pCLG1CQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxNQUFpQixNQUFNLEdBQU4sR0FBWSxDQUE3QixDQUFYLElBQThDLEdBQXJEO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7OzJDQVdtQjtBQUNiLGdCQUFJLENBQUMsS0FBSyxNQUFWLEVBQWtCO0FBQ2Qsd0JBQVEsS0FBUixDQUFjLHVFQUFkO0FBQ0E7QUFDSDtBQUNQLGlCQUFLLE9BQUw7QUFDQSxpQkFBSyxZQUFMO0FBQ0EsZ0JBQUksS0FBSyxZQUFMLEdBQW9CLEtBQUssS0FBN0IsRUFBb0M7O0FBRW5DO0FBQ0E7OztBQUdLLGdCQUFJLEtBQUssU0FBTCxJQUFrQixLQUFLLElBQUwsQ0FBVSxTQUFoQyxFQUEyQztBQUN2QyxxQkFBSyxJQUFMLENBQVUsU0FBVixDQUFvQixTQUFwQixDQUE4QixLQUFLLEdBQUwsQ0FBUyxXQUFULENBQXFCLElBQXJCLENBQTBCLFdBQTFCLEVBQTlCLEVBQXVFLEdBQXZFO0FBQ0EscUJBQUssU0FBTCxHQUFpQixLQUFqQjtBQUNIOzs7QUFHRCxpQkFBSyxPQUFMLEdBQWUsS0FBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixJQUFqQztBQUNBLGlCQUFLLE1BQUwsR0FBYyxLQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLEdBQWhDOzs7QUFHTixvQkFBUSxLQUFLLEdBQUwsQ0FBUyxTQUFqQjtBQUNDLHFCQUFLLEtBQUw7QUFDQyx5QkFBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixHQUFsQixJQUEwQixLQUFLLEtBQUwsR0FBYyxNQUFNLEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsS0FBSyxLQUF2QixDQUE5QztBQUNBLHlCQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLElBQWxCLElBQTBCLEtBQU0sS0FBSyxTQUFMLENBQWUsQ0FBQyxLQUFLLEtBQXJCLEVBQTRCLEtBQUssS0FBTCxHQUFXLENBQXZDLENBQWhDO0FBQ0E7QUFDRCxxQkFBSyxNQUFMO0FBQ0MseUJBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsSUFBbEIsSUFBMkIsS0FBSyxLQUFMLEdBQWMsTUFBTSxLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLEtBQUssS0FBdkIsQ0FBL0M7QUFDQSx5QkFBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixHQUFsQixJQUF5QixLQUFLLEtBQUssU0FBTCxDQUFlLENBQUMsS0FBSyxLQUFyQixFQUE0QixLQUFLLEtBQWpDLENBQTlCO0FBQ0E7QUFDRCxxQkFBSyxRQUFMO0FBQ0Usd0JBQUksS0FBSyxPQUFMLEdBQWUsS0FBSyxHQUF4QixFQUE2QjtBQUNkLDZCQUFLLEdBQUwsR0FBVyxLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLEVBQWxCLENBQVg7QUFDZiw2QkFBSyxPQUFMLEdBQWdCLEtBQUssU0FBTCxDQUFlLENBQUMsS0FBSyxLQUFyQixFQUE0QixLQUFLLEtBQWpDLENBQWhCO0FBQ0EsNkJBQUssT0FBTCxHQUFlLENBQWY7QUFDQSxxQkFKQSxNQUlNLElBQUksS0FBSyxPQUFMLEdBQWUsS0FBSyxHQUFMLEdBQVcsQ0FBOUIsRUFBaUM7QUFDeEIsNkJBQUssS0FBTCxHQUFhLEtBQUssU0FBTCxDQUFlLENBQUMsR0FBaEIsRUFBcUIsR0FBckIsQ0FBYixDO0FBQ2Y7QUFDRCx5QkFBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixHQUFsQixJQUF5QixLQUFLLEtBQTlCO0FBQ1ksd0JBQUksSUFBSSxLQUFLLFNBQUwsQ0FBZSxDQUFDLENBQWhCLEVBQW1CLENBQW5CLENBQVI7QUFDWix5QkFBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixJQUFsQixJQUEwQixJQUFJLEtBQUssT0FBbkM7QUFDQTtBQUNELHFCQUFLLE9BQUw7QUFDQyx5QkFBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixJQUFsQixJQUEyQixLQUFLLEtBQUwsR0FBYyxNQUFNLEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsS0FBSyxLQUF2QixDQUEvQztBQUNBLHlCQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLEdBQWxCLElBQXlCLEtBQU0sS0FBSyxTQUFMLENBQWUsQ0FBQyxLQUFLLEtBQXJCLEVBQTRCLEtBQUssS0FBakMsQ0FBL0I7QUFDQTtBQUNELHFCQUFLLFFBQUw7OztBQUdhLHlCQUFLLEdBQUwsQ0FBUyxTQUFULEdBQXFCLE9BQXJCOztBQUVBO0FBQ0oscUJBQUssT0FBTDtBQUNJLHlCQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLElBQWxCLEdBQXlCLEtBQUssU0FBOUI7QUFDQSx5QkFBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixHQUFsQixHQUF3QixLQUFLLFFBQTdCOztBQUVBO0FBQ0o7QUFDUiw0QkFBUSxLQUFSLENBQWMsK0NBQStDLEtBQUssR0FBTCxDQUFTLFNBQXRFO0FBQ0E7QUF0Q0Y7OztBQTBDTSxnQkFBSSxRQUFRLEtBQUssT0FBTCxHQUFlLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsSUFBN0M7QUFDQSxnQkFBSSxRQUFRLEtBQUssTUFBTCxHQUFjLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsR0FBNUM7QUFDQSxnQkFBSSxNQUFNLFFBQVEsS0FBbEI7QUFDQSxnQkFBSSxNQUFNLE1BQVYsRUFBa0I7QUFDZCxxQkFBSyxHQUFMLENBQVMsRUFBVCxHQUFjLFFBQVEsR0FBdEI7QUFDQSxxQkFBSyxHQUFMLENBQVMsRUFBVCxHQUFjLFFBQVEsR0FBdEI7QUFDSCxhQUhELE1BR087QUFDSCxxQkFBSyxHQUFMLENBQVMsRUFBVCxHQUFjLENBQWQ7QUFDQSxxQkFBSyxHQUFMLENBQVMsRUFBVCxHQUFjLENBQWQ7QUFDSDs7O0FBR0QsaUJBQUssT0FBTCxHQUFlLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsSUFBakM7QUFDQSxpQkFBSyxNQUFMLEdBQWMsS0FBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixHQUFoQzs7O0FBR0g7OzsyQ0FFbUIsSyxFQUFPLE0sRUFBUTtBQUMvQixnQkFBSSxJQUFJLEtBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxJQUFmLENBQW9CLEtBQTVCO0FBQ0EsZ0JBQUksSUFBSSxLQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsSUFBZixDQUFvQixNQUE1QjtBQUNBLGdCQUFJLEtBQUssT0FBTyxLQUFQLENBQWEsSUFBYixDQUFrQixLQUEzQjtBQUNBLGdCQUFJLEtBQUssT0FBTyxLQUFQLENBQWEsSUFBYixDQUFrQixNQUEzQjs7QUFFQSxnQkFBSSxLQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLElBQWxCLEdBQXlCLE9BQU8sUUFBUCxDQUFnQixJQUFoQixHQUF1QixFQUFoRCxJQUNBLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsSUFBbEIsR0FBeUIsQ0FBekIsR0FBNkIsT0FBTyxRQUFQLENBQWdCLElBRDdDLElBRUEsS0FBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixHQUFsQixHQUF3QixPQUFPLFFBQVAsQ0FBZ0IsR0FBaEIsR0FBc0IsRUFGOUMsSUFHQSxLQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLEdBQWxCLEdBQXdCLENBQXhCLEdBQTRCLE9BQU8sUUFBUCxDQUFnQixHQUhoRCxFQUdxRDs7O0FBRzdDLG9CQUFJLFdBQVcsS0FBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixJQUFsQixHQUF5QixJQUFFLENBQTFDO0FBQ0Esb0JBQUksV0FBVyxLQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLEdBQWxCLEdBQXlCLElBQUUsQ0FBMUM7OztBQUdBLG9CQUFJLFdBQVcsT0FBTyxRQUFQLENBQWdCLElBQWhCLEdBQXVCLEtBQUcsQ0FBekM7QUFDQSxvQkFBSSxXQUFXLE9BQU8sUUFBUCxDQUFnQixHQUFoQixHQUFzQixLQUFHLENBQXhDOzs7QUFHQSxvQkFBSSxTQUFTLFdBQVcsUUFBeEI7QUFDQSxvQkFBSSxTQUFTLFdBQVcsUUFBeEI7OztBQUdBLG9CQUFJLE1BQU0sS0FBTixJQUFlLENBQWYsSUFBb0IsTUFBTSxFQUFOLElBQVksQ0FBaEMsSUFBcUMsTUFBTSxFQUFOLElBQVksQ0FBckQsRUFBd0Q7OztBQUdwRCx3QkFBSSxVQUFVLENBQWQsRUFBaUI7QUFDYiw4QkFBTSxRQUFOLENBQWUsQ0FBZixJQUFxQixTQUFTLENBQTlCO0FBQ0gscUJBRkQsTUFFTztBQUNILDhCQUFNLFFBQU4sQ0FBZSxDQUFmLElBQXFCLFNBQVMsQ0FBOUI7QUFDSDs7QUFFRCx3QkFBSSxVQUFVLENBQWQsRUFBaUI7QUFDYiw4QkFBTSxRQUFOLENBQWUsQ0FBZixJQUFxQixTQUFTLENBQTlCO0FBQ0gscUJBRkQsTUFFTztBQUNILDhCQUFNLFFBQU4sQ0FBZSxDQUFmLElBQXFCLFNBQVMsQ0FBOUI7QUFDSDs7O0FBR0QsMEJBQU0sRUFBTixHQUFXLENBQUMsTUFBRCxHQUFVLE1BQXJCO0FBQ0EsMEJBQU0sRUFBTixHQUFXLENBQUMsTUFBRCxHQUFVLE1BQXJCOzs7QUFHQSx3QkFBSSxPQUFPLEtBQUssR0FBTCxDQUFTLE1BQU0sRUFBTixHQUFXLE1BQU0sRUFBMUIsQ0FBWDtBQUNBLHdCQUFJLE9BQU8sR0FBWCxFQUFnQjtBQUNaLDRCQUFJLE1BQU0sRUFBTixJQUFZLENBQWhCLEVBQW1CO0FBQ2Ysa0NBQU0sRUFBTixJQUFZLElBQVo7QUFDSCx5QkFGRCxNQUVPO0FBQ0gsa0NBQU0sRUFBTixJQUFZLElBQVo7QUFDSDtBQUNKO0FBQ0osaUI7OztBQUdMLHVCQUFPLElBQVA7QUFDSDtBQUNELG1CQUFPLEtBQVA7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQWVpQjs7QUFFZCxnQkFBSSxDQUFDLEtBQUssTUFBVixFQUFrQjtBQUNkLHdCQUFRLEtBQVIsQ0FBYyxvRUFBZDtBQUNBO0FBQ0g7O0FBRUQsaUJBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsSUFBbEIsSUFBMEIsS0FBSyxHQUFMLENBQVMsS0FBVCxHQUFpQixLQUFLLEdBQUwsQ0FBUyxFQUFwRDtBQUNBLGlCQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLEdBQWxCLElBQXlCLEtBQUssR0FBTCxDQUFTLEtBQVQsR0FBaUIsS0FBSyxHQUFMLENBQVMsRUFBbkQ7OztBQUdBLGdCQUFJLEtBQUssTUFBVCxFQUFpQjtBQUNiLG9CQUFJLEtBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxJQUFuQixFQUF5Qjs7QUFFckIsd0JBQUksSUFBSSxLQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsSUFBZixDQUFvQixLQUE1QjtBQUNBLHdCQUFJLElBQUksS0FBSyxHQUFMLENBQVMsS0FBVCxDQUFlLElBQWYsQ0FBb0IsTUFBNUI7OztBQUdBLHdCQUFJLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsR0FBbEIsR0FBd0IsS0FBSyxNQUFMLENBQVksR0FBeEMsRUFBNkM7QUFDekMsNEJBQUksS0FBSyxHQUFMLENBQVMsRUFBVCxHQUFjLENBQWxCLEVBQXFCO0FBQ2pCLGlDQUFLLEdBQUwsQ0FBUyxFQUFULEdBQWMsQ0FBQyxLQUFLLEdBQUwsQ0FBUyxFQUF4QjtBQUNIO0FBQ0QsNkJBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsR0FBbEIsR0FBd0IsS0FBSyxNQUFMLENBQVksR0FBWixHQUFrQixDQUExQztBQUNIOzs7QUFHRCx3QkFBSSxLQUFLLEdBQUwsQ0FBUyxFQUFULEdBQWMsQ0FBbEIsRUFBcUI7QUFDakIsNEJBQUksS0FBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixHQUFsQixHQUF5QixLQUFLLEdBQUwsQ0FBUyxRQUFULEdBQXFCLEtBQUssR0FBTCxDQUFTLEVBQVQsR0FBYyxLQUFLLEdBQUwsQ0FBUyxLQUF6RSxFQUFrRjs7QUFFOUUsaUNBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsR0FBbEIsR0FBd0IsS0FBSyxHQUFMLENBQVMsUUFBakM7QUFDQSxpQ0FBSyxHQUFMLENBQVMsRUFBVCxHQUFjLENBQWQ7QUFDQSxpQ0FBSyxHQUFMLENBQVMsRUFBVCxHQUFjLENBQWQ7QUFDSDtBQUNELDRCQUFJLE9BQU8sS0FBSyxNQUFMLENBQVksTUFBWixHQUFxQixDQUFyQixHQUF5QixLQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLEdBQXREO0FBQ0EsNEJBQUksTUFBTSxDQUFDLEtBQUssR0FBTCxDQUFTLEVBQVYsR0FBZSxLQUFLLEdBQUwsQ0FBUyxLQUF4QixHQUFnQyxDQUExQzs7O0FBR0EsNEJBQUksT0FBTyxHQUFQLElBQWMsTUFBTSxDQUF4QixFQUEyQjtBQUN2QixpQ0FBSyxHQUFMLENBQVMsS0FBVCxJQUFrQixDQUFsQjtBQUNIO0FBQ0oscUI7OztBQUdELHdCQUFJLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsSUFBbEIsR0FBeUIsS0FBSyxNQUFMLENBQVksSUFBekMsRUFBK0M7QUFDM0MsNkJBQUssR0FBTCxDQUFTLEVBQVQsR0FBYyxDQUFDLEtBQUssR0FBTCxDQUFTLEVBQXhCO0FBQ0g7QUFDRCx3QkFBSSxLQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLEdBQWxCLEdBQXdCLEtBQUssTUFBTCxDQUFZLEdBQXhDLEVBQTZDO0FBQ3pDLDZCQUFLLEdBQUwsQ0FBUyxFQUFULEdBQWMsQ0FBQyxLQUFLLEdBQUwsQ0FBUyxFQUF4QjtBQUNIO0FBQ0Qsd0JBQUksS0FBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixJQUFsQixHQUF5QixLQUFLLE1BQUwsQ0FBWSxLQUFaLEdBQW9CLENBQWpELEVBQW9EO0FBQ2hELDZCQUFLLEdBQUwsQ0FBUyxFQUFULEdBQWMsQ0FBQyxLQUFLLEdBQUwsQ0FBUyxFQUF4QjtBQUNIOzs7QUFHRCx3QkFBSSxLQUFLLEdBQUwsQ0FBUyxPQUFiLEVBQXNCO0FBQ2xCLDZCQUFLLElBQUksSUFBSSxDQUFSLEVBQVcsTUFBTSxLQUFLLEdBQUwsQ0FBUyxPQUFULENBQWlCLE1BQXZDLEVBQStDLElBQUksR0FBbkQsRUFBd0QsR0FBeEQsRUFBNkQ7QUFDekQsZ0NBQUksU0FBUyxLQUFLLEdBQUwsQ0FBUyxPQUFULENBQWlCLENBQWpCLENBQWI7O0FBRUEsZ0NBQUksS0FBSyxrQkFBTCxDQUF3QixLQUFLLEdBQTdCLEVBQWtDLE1BQWxDLENBQUosRUFBK0M7O0FBRTNDLHdDQUFRLEdBQVIsQ0FBWSw2QkFBWjtBQUNBLHVDQUFPLFNBQVAsR0FBbUIsUUFBbkI7QUFDQSxvQ0FBSSxLQUFLLEdBQUwsQ0FBUyxLQUFULEdBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLHlDQUFLLEdBQUwsQ0FBUyxLQUFULEdBQWlCLENBQWpCO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFDSjtBQUNKOzs7QUFHRCxnQkFBSSxLQUFLLEdBQUwsQ0FBUyxFQUFULEdBQWMsS0FBZCxJQUF1QixLQUFLLEdBQUwsQ0FBUyxFQUFULEdBQWMsS0FBekMsRUFBZ0Q7QUFDNUMsb0JBQUksSUFBSSxLQUFLLFVBQUwsRUFBUjtBQUNBLHFCQUFLLEdBQUwsQ0FBUyxFQUFULElBQWUsSUFBSSxLQUFLLFVBQUwsRUFBbkI7QUFDSDtBQUVKOzs7Ozs7O2tCQWpsQmdCLEs7Ozs7Ozs7Ozs7O0FDQ3BCOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCLE07OztBQUVwQixrQkFBYSxNQUFiLEVBQXFCO0FBQUE7Ozs7QUFBQSwwRkFDYixNQURhOztBQUlwQixVQUFLLEtBQUwsQ0FBVyxRQUFYOztBQUpvQjtBQU1wQjs7Ozs7Ozs2QkFHUztBQUNULFdBQUssS0FBTCxDQUFXLFVBQVg7QUFDQTs7Ozs7Ozs7a0JBYm1CLE07Ozs7Ozs7OztBQ1JyQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQixVOzs7QUFFcEIsc0JBQWEsTUFBYixFQUFxQjtBQUFBOztBQUFBLHlGQUNkLE1BRGM7QUFFcEI7Ozs7O2tCQUptQixVOzs7Ozs7Ozs7QUNIdEI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLEs7OztBQUVwQixpQkFBYSxNQUFiLEVBQXFCO0FBQUE7O0FBQUEsb0ZBQ2QsTUFEYztBQUVwQjs7Ozs7a0JBSm1CLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNGQyxNO0FBRXBCLGlCQUFhLElBQWIsRUFBbUI7QUFBQTs7QUFFbEIsT0FBSyxJQUFMLEdBQVksSUFBWjs7O0FBR0EsT0FBSyxjQUFMLEdBQXNCLEtBQUssSUFBTCxDQUFVLGlCQUFoQztBQUNBLFNBQU8sY0FBUCxHQUF3QixLQUFLLGNBQTdCOzs7QUFHQSxPQUFLLElBQUwsR0FBWSxLQUFLLElBQUwsQ0FBVSxPQUFWLENBQWtCLGFBQWxCLEVBQWlDLFdBQWpDLENBQTZDLENBQTdDLEVBQWdELFFBQWhELENBQXlELEdBQXJFO0FBQ0E7Ozs7Ozs7Ozs7Ozs7NkJBU1U7QUFDWCxPQUFJLGNBQWMsQ0FBbEI7T0FBcUIsa0JBQWtCLENBQXZDO09BQTBDLGFBQWEsQ0FBdkQ7O0FBRUEsUUFBSyxJQUFJLElBQUksQ0FBUixFQUFXLE1BQU0sS0FBSyxjQUFMLENBQW9CLE1BQTFDLEVBQWtELElBQUksR0FBdEQsRUFBMkQsR0FBM0QsRUFBZ0U7QUFDL0QsUUFBSSxZQUFZLEtBQUssY0FBTCxDQUFvQixDQUFwQixDQUFoQjtBQUNBLFFBQUksVUFBVSxTQUFkLEVBQXlCO0FBQ3hCOztBQUVBLGFBQVEsVUFBVSxTQUFsQjtBQUNDLFdBQUssUUFBTDtBQUNBLFdBQUssT0FBTDtBQUNDO0FBQ0E7QUFDQTtBQUNEO0FBQ0M7QUFQRjs7QUFVQSxTQUFHLFVBQVUsUUFBVixDQUFtQixHQUFuQixHQUF5QixLQUFLLElBQWpDLEVBQXVDO0FBQ3RDO0FBQ0E7QUFDRDtBQUNEOztBQUVELE9BQUksZUFBZSxlQUFuQixFQUFvQztBQUNuQyxTQUFLLEdBQUwsR0FBVyxJQUFYO0FBQ0EsSUFGRCxNQUVPO0FBQ04sU0FBSyxHQUFMLEdBQVcsS0FBWDtBQUNBOztBQUVELE9BQUksY0FBYyxXQUFsQixFQUErQjtBQUM5QixXQUFPLElBQVA7QUFDQTs7QUFFRCxVQUFPLEtBQVA7QUFDQTs7Ozs7O2tCQXhEb0IsTTs7Ozs7Ozs7Ozs7QUNIckI7Ozs7QUFFQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQixNOzs7QUFFcEIsa0JBQWEsTUFBYixFQUFxQjtBQUFBOzs7Ozs7QUFBQSwwRkFDZCxNQURjOztBQUlwQixVQUFLLElBQUwsR0FBWSxPQUFPLElBQW5COzs7QUFHQSxVQUFLLEtBQUwsR0FBYSxPQUFPLEVBQXBCOzs7QUFHQSxVQUFLLEdBQUwsR0FBVyxTQUFTLGNBQVQsQ0FBd0IsTUFBSyxLQUE3QixDQUFYOzs7QUFHQSxVQUFLLFVBQUw7QUFib0I7QUFjcEI7Ozs7Ozs7bUNBR2UsSSxFQUFNLFEsRUFBVTtBQUMvQixjQUFRLEdBQVIsQ0FBWSxhQUFhLEtBQUssS0FBOUI7QUFDQSxXQUFLLGVBQUwsR0FBdUIsb0JBQ3RCO0FBQ0MsY0FBTSxLQUFLLElBQUwsR0FBWSxRQURuQjtBQUVDLGVBQU8sS0FBSyxFQUFMLEdBQVUsUUFGbEI7QUFHQyxjQUFNLElBSFA7QUFJQyxrQkFBVTtBQUpYLE9BRHNCLENBQXZCO0FBUUEsV0FBSyxlQUFMLENBQXFCLG1CQUFyQixDQUF5QyxLQUFLLEdBQTlDLEVBQW1ELElBQW5ELEVBQXlELFFBQXpEO0FBQ0E7Ozs7OztpQ0FHYTtBQUNiLGNBQVEsR0FBUixDQUFZLGFBQWEsS0FBSyxLQUE5QjtBQUNBLFdBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxPQUFmLEdBQXlCLE9BQXpCO0FBQ0E7OztpQ0FFYTtBQUNiLGNBQVEsR0FBUixDQUFZLFlBQVksS0FBSyxLQUE3QjtBQUNBLFdBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxPQUFmLEdBQXlCLE1BQXpCO0FBQ0E7OztpQ0FFYTtBQUNiLFdBQUssR0FBTCxDQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsQ0FBd0MsT0FBeEMsR0FBa0QsT0FBbEQ7QUFDQTs7O2lDQUVhO0FBQ2QsV0FBSyxHQUFMLENBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxLQUFsQyxDQUF3QyxPQUF4QyxHQUFrRCxNQUFsRDtBQUVDOzs7aUNBRWE7QUFDZCxXQUFLLEdBQUwsQ0FBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLE9BQXhDLEdBQWtELE9BQWxEO0FBRUM7OztpQ0FFYTtBQUNkLFdBQUssR0FBTCxDQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsQ0FBd0MsT0FBeEMsR0FBa0QsTUFBbEQ7QUFFQzs7O2lDQUVhO0FBQ2IsV0FBSyxHQUFMLENBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxTQUFsQyxHQUE4QyxLQUFLLElBQUwsQ0FBVSxPQUF4RDtBQUNBOzs7Ozs7a0JBaEVtQixNO0FBa0VwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzFDbUIsTztBQUVwQixvQkFBZTtBQUFBOzs7QUFHZCxPQUFLLElBQUwsR0FBWSxRQUFaOztBQUVBLE9BQUssTUFBTCxHQUFjLEVBQWQ7QUFDQSxPQUFLLFVBQUw7QUFDQTs7Ozs7Ozs7OzsrQkFNYTtBQUNiLE9BQUksT0FBTyxTQUFTLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWDtBQUNBLE9BQUksT0FBTyxLQUFYOztBQUVBLE9BQUk7QUFDSCxRQUFJLE9BQU8sQ0FBQyxDQUFDLEtBQUssV0FBbEIsRUFBK0I7QUFDOUIsWUFBTyxJQUFJLE9BQUosQ0FBWSxJQUFaLENBQVA7QUFDQSxVQUFLLEdBQUwsR0FBVyxLQUFLLFdBQUwsQ0FBaUIsNEJBQWpCLEVBQStDLE9BQS9DLENBQXVELE1BQXZELEVBQThELEVBQTlELENBQVg7QUFDQSxVQUFLLEdBQUwsR0FBVyxLQUFLLFdBQUwsQ0FBaUIsYUFBakIsRUFBZ0MsT0FBaEMsQ0FBd0MsTUFBeEMsRUFBK0MsRUFBL0MsQ0FBWDtBQUNBLFVBQUssR0FBTCxHQUFXLEtBQUssV0FBTCxDQUFpQix1QkFBakIsRUFBMEMsT0FBMUMsQ0FBa0QsTUFBbEQsRUFBeUQsRUFBekQsQ0FBWDtBQUNBLFVBQUssR0FBTCxHQUFXLENBQUMsS0FBSyxXQUFMLENBQWlCLGNBQWpCLEtBQW9DLEtBQUssV0FBTCxDQUFpQixZQUFqQixDQUFyQyxFQUFxRSxPQUFyRSxDQUE2RSxNQUE3RSxFQUFvRixFQUFwRixDQUFYO0FBQ0E7QUFDRCxJQVJELENBUUUsT0FBTyxDQUFQLEVBQVUsQ0FBRTs7O0FBR2IsUUFBSyxJQUFMLEdBQVksSUFBWjs7QUFFQSxRQUFLLElBQUksQ0FBVCxJQUFjLEtBQUssSUFBbkIsRUFBeUI7QUFDeEIsWUFBUSxHQUFSLENBQVksSUFBSSxXQUFKLEdBQWtCLEtBQUssSUFBTCxDQUFVLENBQVYsQ0FBOUI7QUFDQTtBQUNGOzs7Ozs7Ozs7OzJCQU9TLEMsRUFBRyxJLEVBQU0sTSxFQUFRO0FBQzFCLE9BQUksQ0FBQyxNQUFMLEVBQWE7QUFDWixhQUFTLEdBQVQ7QUFDQTtBQUNELFFBQUssTUFBTCxDQUFZLElBQVosSUFBb0IsRUFBRSxNQUF0QjtBQUNBLFFBQUssTUFBTCxDQUFZLElBQVosRUFBa0IsTUFBbEIsR0FBMkIsTUFBM0I7QUFDQSxXQUFRLEdBQVIsQ0FBWSxpQkFBaUIsSUFBN0I7QUFDQTs7Ozs7Ozs7OzZCQU1XLEMsRUFBRyxJLEVBQU07QUFDcEIsV0FBUSxLQUFSLENBQWMsV0FBVyxJQUFYLEdBQWtCLGdCQUFoQztBQUNBLFFBQUssTUFBTCxDQUFZLElBQVosSUFBb0IsSUFBcEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQWVTLEksRUFBTSxNLEVBQVE7QUFBQTs7QUFDdkIsT0FBSSxDQUFDLElBQUwsRUFBVztBQUNWLFlBQVEsS0FBUixDQUFjLCtEQUFkO0FBQ0E7QUFDQTs7QUFFRCxPQUFJLEdBQUo7O0FBRUEsUUFBSyxJQUFJLENBQVQsSUFBYyxLQUFLLElBQW5CLEVBQXlCO0FBQ3hCLFlBQVEsR0FBUixDQUFZLGVBQWUsQ0FBZixHQUFtQixJQUFuQixHQUEwQixLQUFLLElBQUwsQ0FBVSxDQUFWLENBQXRDO0FBQ0EsUUFBSSxLQUFLLElBQUwsQ0FBVSxDQUFWLEtBQWdCLEVBQXBCLEVBQXdCOzs7QUFFdkIsU0FBSSxXQUFXLEtBQUssSUFBTCxHQUFZLElBQVosR0FBbUIsR0FBbkIsR0FBeUIsQ0FBeEM7QUFDQSxhQUFRLEdBQVIsQ0FBWSxvQkFBb0IsS0FBSyxJQUF6QixHQUFnQyxJQUFoQyxHQUF1QyxHQUF2QyxHQUE2QyxDQUF6RDs7O0FBR0EsV0FBTSxJQUFJLEtBQUosQ0FBVSxRQUFWLENBQU47OztBQUdBLFNBQUksZ0JBQUosQ0FBcUIsWUFBckIsRUFDQztBQUFBLGFBQVMsTUFBSyxRQUFMLENBQWMsS0FBZCxFQUFxQixJQUFyQixFQUEyQixNQUEzQixDQUFUO0FBQUEsTUFERCxFQUM4QyxLQUQ5Qzs7QUFHQSxTQUFJLGdCQUFKLENBQXFCLE9BQXJCLEVBQ0M7QUFBQSxhQUFTLE1BQUssVUFBTCxDQUFnQixLQUFoQixFQUF1QixJQUF2QixDQUFUO0FBQUEsTUFERCxFQUN3QyxLQUR4Qzs7O0FBSUEsU0FBSSxJQUFKO0FBQ0E7QUFDQTtBQUNEO0FBQ0QsT0FBSSxDQUFDLEdBQUwsRUFBVTtBQUNULFlBQVEsS0FBUixDQUFjLG9CQUFvQixJQUFwQixHQUEyQixxQkFBekM7QUFDQTtBQUVEOzs7Ozs7Ozs7Ozs0QkFRVSxJLEVBQU07O0FBRWhCLE9BQUksS0FBSyxNQUFMLENBQVksSUFBWixDQUFKLEVBQXVCO0FBQ3RCLFNBQUssTUFBTCxDQUFZLElBQVosRUFBa0IsSUFBbEI7QUFDQSxJQUZELE1BRU87QUFDTixZQUFRLEtBQVIsQ0FBYyw2QkFBNkIsSUFBN0IsR0FBb0MsdUZBQWxEO0FBQ0E7QUFDRDs7Ozs7Ozs7Ozs7Ozs2QkFVVSxHLEVBQUs7QUFDZixPQUFJLE1BQU0sSUFBSSxjQUFKLEVBQVY7QUFDQSxPQUFJLElBQUosQ0FBUyxNQUFULEVBQWlCLEdBQWpCLEVBQXNCLEtBQXRCO0FBQ0EsT0FBSSxJQUFKO0FBQ0EsT0FBSSxJQUFJLE1BQUosSUFBYyxLQUFsQixFQUF5QjtBQUN4QixXQUFPLEtBQVA7QUFDQSxJQUZELE1BRU87QUFDTixXQUFPLElBQVA7QUFDQTtBQUNEOzs7Ozs7O2tCQTdJbUIsTzs7Ozs7Ozs7Ozs7QUM5QnJCOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLFc7OztBQUVwQixzQkFBYSxNQUFiLEVBQXFCO0FBQUE7Ozs7OztBQUFBLDZGQUNkLE1BRGM7O0FBTXBCLFFBQUssY0FBTCxDQUFvQiw4QkFBcEI7OztBQUdBLFFBQUssWUFBTDs7O0FBR0EsUUFBSyxnQkFBTDs7O0FBR0EsUUFBSyxTQUFMO0FBZm9CO0FBZ0JwQjs7OztpQ0FFZTtBQUNmLFFBQUssUUFBTCxHQUFnQix1QkFDZjtBQUNDLFVBQU0sVUFEUDtBQUVDLFdBQU8sdUJBRlI7QUFHQyxVQUFNLHVCQUhQO0FBSUMsWUFBUSxpQkFKVDtBQUtDLFlBQVE7QUFMVCxJQURlLENBQWhCOzs7QUFXQSxRQUFLLFFBQUwsQ0FBYyxjQUFkLENBQ0M7QUFDQyxTQUFLLENBRE47QUFFQyxVQUFNO0FBRlAsSUFERDtBQU9BOzs7cUNBRW1COztBQUVuQixRQUFLLFlBQUwsR0FBb0IseUJBQ25CO0FBQ0MsVUFBTSxtQkFEUDtBQUVDLFdBQU8sY0FGUjtBQUdDLFVBQU07QUFIUCxJQURtQixDQUFwQjs7QUFRQSxRQUFLLFlBQUwsQ0FBa0IsY0FBbEIsQ0FDQztBQUNDLFNBQUssQ0FETjtBQUVDLFVBQU07QUFGUCxJQUREO0FBT0E7Ozs4QkFFWTtBQUNaLFdBQVEsR0FBUixDQUFZLDZCQUE2QixLQUFLLElBQTlDOztBQUVBLFlBQVMsYUFBVCxDQUF1QiwyQkFBdkIsRUFBb0QsZ0JBQXBELENBQXFFLE9BQXJFLEVBQ0MsVUFBVSxDQUFWLEVBQWE7O0FBRVosTUFBRSxjQUFGO0FBQ0EsU0FBSyxJQUFMLENBQVUsU0FBVjtBQUVBLElBTEQsQ0FLRSxJQUxGLENBS08sSUFMUCxDQUREO0FBT0E7Ozs7OztrQkF0RW1CLFc7Ozs7Ozs7OztBQ2JwQjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFb0IsVzs7O0FBRXBCLHVCQUFhLE1BQWIsRUFBcUI7QUFBQTs7QUFBQSwrRkFDZCxNQURjOztBQUdwQixVQUFLLE1BQUwsR0FBYyxJQUFkO0FBSG9CO0FBSXBCOzs7OztrQkFObUIsVzs7Ozs7Ozs7O0FDSnBCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVvQixVOzs7QUFFcEIsc0JBQWEsTUFBYixFQUFxQjtBQUFBOztBQUFBLDhGQUNkLE1BRGM7O0FBR3BCLFVBQUssTUFBTCxHQUFjLElBQWQ7O0FBSG9CO0FBS3BCOzs7OztrQkFQbUIsVTs7Ozs7Ozs7Ozs7QUNIcEI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsSTs7O0FBRXBCLGdCQUFZLE1BQVosRUFBb0I7QUFBQTs7OztBQUFBLHdGQUNiLE1BRGE7O0FBSW5CLFVBQUssT0FBTCxDQUFhLE9BQU8sSUFBcEI7OztBQUdBLFVBQUssUUFBTCxDQUFjLE9BQU8sS0FBckI7QUFQbUI7QUFRbkI7Ozs7NEJBRVEsRyxFQUFLO0FBQ2IsV0FBSyxJQUFMLEdBQVksR0FBWjtBQUNBOzs7NkJBRVMsSyxFQUFPOztBQUVoQixXQUFLLEdBQUwsR0FBVyxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtBQUNBLFdBQUssR0FBTCxDQUFTLEVBQVQsR0FBYyxPQUFPLE9BQXJCO0FBQ0EsV0FBSyxHQUFMLENBQVMsU0FBVCxHQUFxQixLQUFLLElBQTFCOzs7QUFHQSxVQUFJLFlBQVksU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQWhCOzs7QUFHQSxnQkFBVSxZQUFWLENBQXVCLEtBQUssR0FBNUIsRUFBaUMsVUFBVSxVQUFWLENBQXFCLENBQXJCLENBQWpDO0FBRUQ7Ozs7OztrQkE1Qm9CLEk7Ozs7Ozs7OztBQ0hyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLEs7OztBQUVwQixpQkFBYSxNQUFiLEVBQXFCO0FBQUE7O0FBQUEsb0ZBQ2IsTUFEYTtBQUVwQjs7Ozs7a0JBSm1CLEs7Ozs7Ozs7Ozs7O0FDSnJCOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCLEs7OztBQUVwQixpQkFBYSxNQUFiLEVBQXFCO0FBQUE7Ozs7O0FBQUEseUZBQ2IsTUFEYTs7QUFLcEIsVUFBSyxLQUFMLENBQVcsWUFBWCxDQUF3QixDQUF4Qjs7O0FBTG9CO0FBUXBCOzs7Ozs7OzZCQUdTO0FBQ1QsV0FBSyxLQUFMLENBQVcsY0FBWDtBQUNBOzs7Ozs7OztrQkFmbUIsSzs7Ozs7QUNUdEI7Ozs7QUFHQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUFLQSxJQUFJLFVBQVUscUJBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLElBQUksU0FBUyxtQkFBUyxFQUFDLE1BQU0sZUFBUCxFQUFULENBQWI7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEtBQVAsR0FBZSxPQUFmOzs7QUFHQSxPQUFPLElBQVAsR0FBYyxNQUFkOztBQUVBLFFBQVEsR0FBUixDQUFZLGtGQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTs7OztBQUdBOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0lBTXFCLEs7QUFFcEIsa0JBQWU7QUFBQTtBQUNkOzs7Ozs7O3dCQUdNOztBQUVOLE9BQUksU0FBUyxFQUFDLE1BQUssa0NBQU4sRUFBYjs7O0FBR0EsT0FBSSxPQUFPLG1CQUFTLE1BQVQsQ0FBWDtBQUNBLFdBQVEsR0FBUixDQUFZLEtBQUssT0FBTCxFQUFaOzs7QUFHQSxPQUFJLFNBQVMsbUJBQVMsRUFBQyxNQUFNLGVBQVAsRUFBVCxDQUFiO0FBQ0EsV0FBUSxHQUFSLENBQVksT0FBTyxPQUFQLEVBQVo7OztBQUdBLE9BQUksV0FBVyxxQkFBVyxFQUFDLE1BQU0sZ0JBQVAsRUFBWCxDQUFmO0FBQ0EsV0FBUSxHQUFSLENBQVksU0FBUyxPQUFULEVBQVo7O0FBRUEsT0FBSSxnQkFBZ0IsMEJBQWdCLEVBQUMsTUFBTSxjQUFQLEVBQWhCLENBQXBCO0FBQ0EsV0FBUSxHQUFSLENBQVksY0FBYyxPQUFkLEVBQVo7O0FBRUEsT0FBSSxlQUFlLHlCQUFlLEVBQUMsTUFBTSxhQUFQLEVBQWYsQ0FBbkI7QUFDQSxXQUFRLEdBQVIsQ0FBWSxhQUFhLE9BQWIsRUFBWjs7QUFFQSxPQUFJLGNBQWMsd0JBQWMsRUFBQyxNQUFNLFlBQVAsRUFBZCxDQUFsQjtBQUNBLFdBQVEsR0FBUixDQUFZLFlBQVksT0FBWixFQUFaOztBQUVBLE9BQUksU0FBUyxtQkFBUyxFQUFDLE1BQU0scUJBQVAsRUFBVCxDQUFiO0FBQ0EsV0FBUSxHQUFSLENBQVksT0FBTyxPQUFQLEVBQVo7O0FBRUEsT0FBSSxTQUFTLG1CQUFTLEVBQUMsTUFBTSxxQkFBUCxFQUFULENBQWI7QUFDQSxXQUFRLEdBQVIsQ0FBWSxPQUFPLE9BQVAsRUFBWjs7QUFFQSxPQUFJLGVBQWUseUJBQWUsRUFBQyxNQUFNLDRCQUFQLEVBQWYsQ0FBbkI7QUFDQSxXQUFRLEdBQVIsQ0FBWSxhQUFhLE9BQWIsRUFBWjs7QUFFQSxPQUFJLGFBQWEsdUJBQWEsRUFBQyxNQUFNLHlCQUFQLEVBQWIsQ0FBakI7QUFDQSxXQUFRLEdBQVIsQ0FBWSxXQUFXLE9BQVgsRUFBWjs7QUFFQSxPQUFJLGlCQUFpQiwyQkFBaUIsRUFBQyxNQUFNLDZCQUFQLEVBQWpCLENBQXJCO0FBQ0EsV0FBUSxHQUFSLENBQVksZUFBZSxPQUFmLEVBQVo7O0FBRUEsT0FBSSxnQkFBZ0IsMEJBQWdCLEVBQUMsTUFBTSw2QkFBUCxFQUFoQixDQUFwQjtBQUNBLFdBQVEsR0FBUixDQUFZLGNBQWMsT0FBZCxFQUFaOztBQUVBLE9BQUksVUFBVSxvQkFBVSxFQUFDLE1BQU0sV0FBUCxFQUFWLENBQWQ7QUFDQSxXQUFRLEdBQVIsQ0FBWSxRQUFRLE9BQVIsRUFBWjs7QUFFQSxPQUFJLGNBQWMsd0JBQWMsRUFBQyxNQUFNLG1CQUFQLEVBQWQsQ0FBbEI7QUFDQSxXQUFRLEdBQVIsQ0FBWSxZQUFZLE9BQVosRUFBWjs7QUFFQSxPQUFJLFVBQVUsb0JBQVUsRUFBQyxNQUFNLGNBQVAsRUFBVixDQUFkO0FBQ0EsV0FBUSxHQUFSLENBQVksUUFBUSxPQUFSLEVBQVo7O0FBRUEsT0FBSSxXQUFXLHFCQUFXLEVBQUMsTUFBTSxVQUFQLEVBQVgsQ0FBZjtBQUNBLFdBQVEsR0FBUixDQUFZLFNBQVMsT0FBVCxFQUFaOztBQUVBLE9BQUksV0FBVyxxQkFBVyxFQUFDLE1BQU0sZ0JBQVAsRUFBWCxDQUFmO0FBQ0EsV0FBUSxHQUFSLENBQVksU0FBUyxPQUFULEVBQVo7O0FBRUEsT0FBSSxTQUFTLG1CQUFTLEVBQUMsTUFBTSxtQkFBUCxFQUFULENBQWI7QUFDQSxXQUFRLEdBQVIsQ0FBWSxPQUFPLE9BQVAsRUFBWjs7QUFFQSxPQUFJLFVBQVUsb0JBQVUsRUFBQyxNQUFNLG1CQUFQLEVBQVYsQ0FBZDtBQUNBLFdBQVEsR0FBUixDQUFZLFFBQVEsT0FBUixFQUFaOztBQUVBLE9BQUksU0FBUyxtQkFBUyxFQUFDLE1BQU0saUJBQVAsRUFBVCxDQUFiO0FBQ0EsV0FBUSxHQUFSLENBQVksT0FBTyxPQUFQLEVBQVo7O0FBRUEsT0FBSSxZQUFZLHNCQUFZLEVBQUUsTUFBTSxvQkFBUixFQUFaLENBQWhCO0FBQ0EsV0FBUSxHQUFSLENBQVksVUFBVSxPQUFWLEVBQVo7O0FBRUEsT0FBSSxXQUFXLHFCQUFXLEVBQUMsTUFBTSxnQkFBUCxFQUFYLENBQWY7QUFDQSxXQUFRLEdBQVIsQ0FBWSxTQUFTLE9BQVQsRUFBWjs7O0FBR0EsT0FBSSxTQUFTLG1CQUFTLEVBQUMsTUFBTSxjQUFQLEVBQVQsQ0FBYjtBQUNBLFdBQVEsR0FBUixDQUFZLE9BQU8sT0FBUCxFQUFaOztBQUVBLE9BQUksU0FBUyxtQkFBUyxFQUFDLE1BQU0sY0FBUCxFQUFULENBQWI7QUFDQSxXQUFRLEdBQVIsQ0FBWSxPQUFPLE9BQVAsRUFBWjs7QUFFQSxPQUFJLGVBQWUseUJBQWUsRUFBQyxNQUFNLFlBQVAsRUFBZixDQUFuQjtBQUNBLFdBQVEsR0FBUixDQUFZLGFBQWEsT0FBYixFQUFaOztBQUVBLE9BQUksZUFBZSx5QkFBZSxFQUFDLE1BQU0sWUFBUCxFQUFmLENBQW5CO0FBQ0EsV0FBUSxHQUFSLENBQVksYUFBYSxPQUFiLEVBQVo7QUFDQTs7Ozs7O2tCQTNGbUIsSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiogXG4gKiBBbmltYWwuanNcbiAqIFRoZSBjcml0dGVycyB0aGF0IFRydW1wIHRyaWVzIHRvIHN0b3AgZnJvbSBnZXR0aW5nIHRoZSBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xuXG4gLy8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG4gaW1wb3J0IE1vdmVyIGZyb20gJy4vTW92ZXIuanMnO1xuIGltcG9ydCBDb2xsaWRlciBmcm9tICcuL0NvbGxpZGVyLmpzJztcbiAvLyBFTkQgQURERUQgV0VFSyAxMTw8PDw8PDw8PDw8PDxcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hbCBleHRlbmRzIENoYXJhY3RlciB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG5cbiBcdFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG4gXHRcdC8vIEFuaW1hbHMgZ2V0IFJhbmRvbVdhbGsgbW90aW9uXG4gXHRcdHRoaXMubW92ZXIuaW5pdFJhbmRvbVdhbGsoMC4wMiwgJ2JvdHRvbScpO1xuIFx0XHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cbiBcdH1cblxuIFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG4gXHR1cGRhdGUgKCkge1xuIFx0XHR0aGlzLm1vdmVyLnVwZGF0ZVJhbmRvbVdhbGsoKTtcbiBcdH1cbiBcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcblxuIH0iLCIvKiogXG4gKiBBbmltYWxBcmVhLmpzXG4gKiBUaGUgcmVnaW9uIGFuaW1hbHMgbW92ZSB0aHJvdWdoIHRvIGdldCB0byBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBBcmVhXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FnZSBleHRlbmRzIEFyZWEge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG4gXHR9XG5cbiB9IiwiLyoqIFxuICogQXJlYS5qc1xuICogQSBnZW5lcmljIHJlZ2lvbiBvZiB0aGUgZ2FtZSBzY3JlZW4uIFVzZWQgdG8gYWRkIHZpc3VhbCBvYmplY3RzLCBhbmQgXG4gKiBjcmVhdGUgYm91bmRzIGZvciBjb2xsaXNpb24gZGV0ZWN0aW9uLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgSW5mbywgSW1hZ2UsIFN0YXRpY0ltYWdlXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyZWEgZXh0ZW5kcyBHYW1lUGllY2Uge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG5cbiBcdFx0Ly8gY3JlYXRlIGEgPGRpdj4sIGFkZCB0byBET00sIHdpdGggb3B0aW9uYWwgaW1hZ2VcbiBcdFx0dGhpcy5hZGRUb0RPTShjb25maWcubmFtZSwgY29uZmlnLmNvbnRhaW5lciwgY29uZmlnLnBhdGgpO1xuXG4gXHRcdC8vIHBvc2l0aW9uIHdpdGggYWJzb2x1dGUgY29vcmRpbmF0ZWRcbiBcdFx0dGhpcy5zZXRET01Qb3NpdGlvbihjb25maWcucG9zaXRpb24pOyAvL2luaGVyaXRlZCBmcm9tIEdhbWVQaWVjZVxuIFx0XHR0aGlzLnNldERPTVNpemUoY29uZmlnLnNpemUpO1xuIFx0fVxuXG4gXHQvLyBjcmVhdGUgRE9NIGVsZW1lbnQsIExvYWQgYSBiYWNrZ3JvdW5kIGltYWdlLCBhbmQgaW5zZXJ0IGludG8gY29udGFpbmVyXG4gXHRhZGRUb0RPTSAobmFtZSwgY29udGFpbmVyLCBpbWdQYXRoKSB7XG4gXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gXHRcdHRoaXMuZG9tLmlkID0gbmFtZSArICctYXJlYSc7XG5cbiBcdFx0Ly8gcG9zaXRpb24gYWJzb2x1dGVseVxuIFx0XHR0aGlzLmRvbS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cbiBcdFx0Ly8gRG9uJ3QgYWxsb3cgcGFkZGluZyBvciBtYXJnaW5zIG9yIGJvcmRlcnMgZm9yIEFyZWFzXG4gXHRcdHRoaXMuZG9tLnN0eWxlLm1hcmdpbiA9ICcwcHgnO1xuIFx0XHR0aGlzLmRvbS5zdHlsZS5wYWRkaW5nID0gJzBweCc7XG5cbiBcdFx0Ly8gYWRkIHRvIHRoZSBET01cbiBcdFx0Y29udGFpbmVyLmluc2VydEJlZm9yZSh0aGlzLmRvbSwgY29udGFpbmVyLmNoaWxkTm9kZXNbMF0pO1xuXG4gXHRcdC8vIGlmIHdlIGhhdmUgYW4gaW1hZ2UsIGluc2VydCBpbiBlbGVtZW50IGJhY2tncm91bmRcbiBcdFx0aWYgKGltZ1BhdGgpIHtcblxuIFx0XHRcdHRoaXMuaW1hZ2UgPSBuZXcgU3RhdGljSW1hZ2UoXG4gXHRcdFx0XHR7XG4gXHRcdFx0XHRcdG5hbWU6IHRoaXMuZG9tLmlkICsgJy1pbWFnZSdcbiBcdFx0XHRcdH1cbiBcdFx0XHQpO1xuXG4gXHRcdFx0dGhpcy5pbWFnZS5sb2FkQmFja2dyb3VuZEltYWdlICh0aGlzLmRvbSwgaW1nUGF0aCk7XG4gXHRcdH1cblxuIFx0fVxuXG4gXHQvLyBib3VuZHMgZGV0ZWN0b3IgZm9yIHN1cHBsaWVkIENoYXJhY3RlclxuXG5cbiB9IiwiLyoqIFxuICogQmFja2dyb3VuZC5qc1xuICogR2FtZSBMb2dvcywgTG9nb1R5cGVzLCBCcmFuZCBOYW1lXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmQgZXh0ZW5kcyBTdGF0aWNJbWFnZSB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cblx0XHR0aGlzLnNldFNvdXJjZShjb25maWcuc291cmNlKTtcblx0XHR0aGlzLnNldEF1dGhvcihjb25maWcuYXV0aG9yKTtcblx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kSW1hZ2UoY29uZmlnLmRvbUlkLCBjb25maWcucGF0aCk7XG5cdH1cblxufVxuIiwiLyoqIFxuICogQmVhci5qc1xuICogQSBUaWdlciwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlYXIgZXh0ZW5kcyBBbmltYWwge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuIFx0fVxuXG5cbiB9IiwiLyoqIFxuICogQ2FnZS5qc1xuICogVGhlIHJlZ2lvbiB3aGVyZSBhbmltYWxzIGFyZSBjYWdlZC5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEFyZWFcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBDYWdlIGV4dGVuZHMgQXJlYSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblxuIFx0XHRzdXBlcihjb25maWcpO1xuXG4gXHR9XG5cbiB9IiwiLyoqIFxuICogQ2hhcmFjdGVyLmpzXG4gKiBHYW1lLWdlbmVyYXRlZCBvciB1c2VyIGF2YXRhcnMuIENoYXJhY3RlcnMgYXJlIHJlbmRlcmVkIGluIENhbnZhcywgYnV0IGhhdmUgdGhlaXIgXG4gKiBwb3NpdGlvbiBjb21wdXRlZCBhbmQgdXBkYXRlZCBvdXRzaWRlIGNhbnZhcy5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2VcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xuXG4gLy8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG4gaW1wb3J0IE1vdmVyIGZyb20gJy4vTW92ZXIuanMnO1xuIGltcG9ydCBDb2xsaWRlciBmcm9tICcuL0NvbGxpZGVyLmpzJztcbiAvLyBFTkQgQURERUQgV0VFSyAxMTw8PDw8PDw8PDw8PDxcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlciBleHRlbmRzIEdhbWVQaWVjZSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG5cbiBcdFx0IC8vIHN0b3JlIGEgcmVmZXJlbmNlIHRvIHRoZSBnYW1lIG9iamVjdFxuIFx0XHR0aGlzLmdhbWUgPSBjb25maWcuZ2FtZTtcblxuIFx0XHQvLyBTZXQgcG9zaXRpb24gYW5kIHNpemUgZnJvbSBjb25maWd1cmF0aW9uXG4gXHRcdHRoaXMucG9zaXRpb24gPSBjb25maWcucG9zaXRpb247XG4gXHRcdHRoaXMuc2l6ZSA9IGNvbmZpZy5zaXplO1xuXG4gXHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIFx0XHR0aGlzLm1vdmVyID0gbmV3IE1vdmVyKHRoaXMpO1xuIFx0XHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cbiBcdFx0dGhpcy5pbWFnZSA9IG5ldyBTdGF0aWNJbWFnZShcbiBcdFx0XHR7XG4gXHRcdFx0XHRuYW1lOiBjb25maWcubmFtZSArICctaW1hZ2UnLFxuIFx0XHRcdFx0cGF0aDogY29uZmlnLnBhdGhcbiBcdFx0XHR9XG4gXHRcdCk7XG5cbiBcdFx0Ly8gSW1hZ2VzIGRvbid0IGF1dG9tYXRpY2FsbHkgbG9hZCB3aGVuIHRoZXkncmUgbm90IGF0dGFjaGVkIHRvIHRoZSBET00sIFxuIFx0XHQvLyBvciBhIENTUyBiYWNrZ3JvdW5kIGltYWdlXG4gXHRcdHRoaXMuaW1hZ2UubG9hZChjb25maWcucGF0aCwgZnVuY3Rpb24gKCkge2NvbnNvbGUubG9nKCdsb2FkZWQ6JyArIGNvbmZpZy5uYW1lKTt9KTtcbiBcdH1cblxuIFx0Ly8gb3ZlcnJpZGUgZGVmYXVsdCBkcmF3IHdpdGggb3VyIG93blxuIFx0ZHJhdyAoY29udGV4dCkge1xuXHRcdGlmICh0aGlzLmltYWdlKSB7XG5cdFx0XHR2YXIgaW1nID0gdGhpcy5pbWFnZS5kYXRhO1xuIFx0XHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuXHRcdFx0Ly9jb25zb2xlLmxvZygnZHJhd2luZycpXG5cdFx0XHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cdFx0XHRpZiAoaW1nKSB7XG5cdFx0XHRcdC8vIGRyYXcgaW1hZ2UgaW50byBIVE1MNSBjYW52YXNcbiBcdFx0IFx0XHRjb250ZXh0LmRyYXdJbWFnZShpbWcsIHRoaXMucG9zaXRpb24ubGVmdCwgdGhpcy5wb3NpdGlvbi50b3ApO1xuXHRcdFx0fVxuXHRcdH1cbiBcdH1cbiB9IiwiLyoqIFxuICogQGNsYXNzIENvbGxpZGVyXG4gKiBAZGVzY3JpcHRpb24gY3JlYXRlIHRoZSBjb2xsaXNpb24gbWF0cml4IGRlZmluaW5nIHdoaWNoIG9iamVjdHMgY2FuIGNvbGxpZGUgXG4gKiB3aXRoIHdoaWNoIG9iamVjdHMuIE9iamVjdHMgdGhhdCBjYW4gY29sbGlkZSBoYXZlIHRoZWlyIHBvdGVudGlhbCBjb2xsaWRlcnMgXG4gKiBhZGRlZCBhcyByZWZlcmVuY2VzLCBlLmcuIFBsYXllci50cnVtcCBvciBUcnVtcC5wbGF5ZXIuXG4gKiBAcGFyYW0gQXJyYXkgY2hhcmFjdGVyQXJyYXkgdGhlIGFycmF5IG9mIENoYXJhY3RlcnMgd2hvIG1pZ2h0IGJlIGludm9sdmVkIFxuICogaW4gY29sbGlzaW9ucy5cbiAqL1xuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpZGVyIHtcblxuIFx0Y29uc3RydWN0b3IgKGNoYXJhY3RlckFycmF5KSB7XG4gXHRcdHRoaXMuY2hhcmFjdGVyQXJyYXkgPSBjaGFyYWN0ZXJBcnJheTtcbiBcdFx0dGhpcy5hbmltYWxBcnJheSA9IFtdOyAvL2ZpbGxlZCB1cCBpbiBzZXRVcENvbGxpc2lvbnNcbiBcdFx0dGhpcy5zZXRVcENvbGxpc2lvbnMoKTtcbiBcdH1cblxuIFx0c2V0VXBDb2xsaXNpb25zICgpIHtcbiBcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuY2hhcmFjdGVyQXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiBcdFx0XHRzd2l0Y2ggKHRoaXMuY2hhcmFjdGVyQXJyYXlbaV0uY29uc3RydWN0b3IubmFtZSkge1xuIFx0XHRcdFx0Y2FzZSAnTGlvbic6XG4gXHRcdFx0XHRjYXNlICdUaWdlcic6XG4gXHRcdFx0XHRjYXNlICdCZWFyJzpcbiBcdFx0XHRcdGNhc2UgJ0dvcmlsbGEnOlxuIFx0XHRcdFx0XHR0aGlzLmFuaW1hbEFycmF5LnB1c2godGhpcy5jaGFyYWN0ZXJBcnJheVtpXSk7XG4gXHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0Y2FzZSAnVHJ1bXAnOlxuIFx0XHRcdFx0XHR0aGlzLnRydW1wID0gdGhpcy5jaGFyYWN0ZXJBcnJheVtpXTtcbiBcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRjYXNlICdQbGF5ZXInOlxuIFx0XHRcdFx0XHR0aGlzLnBsYXllciA9IHRoaXMuY2hhcmFjdGVyQXJyYXlbaV07XG4gXHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly9jcm9zcy1jb25uZWN0IHRoZSBpbXBhY3RvcnNcbiBcdFx0dGhpcy50cnVtcC5wbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiBcdFx0dGhpcy50cnVtcC5hbmltYWxzID0gdGhpcy5hbmltYWxBcnJheTtcbiBcdFx0dGhpcy5wbGF5ZXIudHJ1bXAgPSB0aGlzLnRydW1wO1xuXG4gXHRcdC8vREVCVUdcbiBcdFx0d2luZG93LmFuaW1hbHMgPSB0aGlzLnRydW1wLmFuaW1hbHM7XG4gXHRcdFxuXG4gXHR9XG4gfSIsIi8qKiBcbiAqIER5bmFtaWNUZXh0LmpzXG4gKiBUZXh0IHRoYXQgY2FuIGJlIGNoYW5nZWQgYnkgdXNlciAoZS5nLiBpbnB1dCBmaWVsZCksIG9yIFxuICogdXBkYXRlZCBieSB0aGUgZ2FtZSBpdHNlbGYuXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNUZXh0IGV4dGVuZHMgVGV4dCB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cdH1cbn1cbiIsIi8qKiBcbiAqIEVuZFNjcmVlbi5qc1xuICogRW5kaW5nIHNjcmVlbiBmb3IgdGhlIGdhbWUuXG4gKiBAaW5oZXJpdHMgU2NyZWVuLCBHYW1lUGllY2VcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuIGltcG9ydCBJZGVudGl0eSBmcm9tICcuL0lkZW50aXR5LmpzJztcbiBcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG5cbiBcdFx0Ly8gbG9hZCB0aGUgYmFja2dyb3VuZCBpbWFnZVxuIFx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kKCdpbWcvc2NyZWVucy9lbmQtc2NyZWVuLnBuZycpO1xuXG4gXHRcdC8vIExvYWQgRW5kU2NyZWVuIHN1Yi1vYmplY3RzXG4gXHRcdHRoaXMubG9hZElucHV0U2NvcmUoKTtcbiBcdFx0dGhpcy5sb2FkSGlnaFNjb3JlcygpO1xuXG4gXHRcdC8vIEJpbmQgXCJwbGF5IGFnYWluXCIgYW5kIFwiaW5zdHJ1Y3Rpb25zXCIgYnV0dG9ucy5cbiBcdFx0dGhpcy5iaW5kUmVwbGF5KCk7XG4gXHRcdHRoaXMuYmluZEluc3RydWN0aW9ucygpO1xuIFx0fVxuXG4gXHRsb2FkSWRlbnRpdHkgKHdvbikge1xuXG4gXHRcdGlmICh0aGlzLmlkZW50aXR5KSB7XG4gXHRcdFx0dGhpcy5pZGVudGl0eS5jbGVhcignZW5kLXNjcmVlbi1pZGVudGl0eScpO1xuIFx0XHR9XG5cbiBcdFx0aWYgKHdvbikge1xuXHRcdFx0dGhpcy5pZGVudGl0eSA9IG5ldyBJZGVudGl0eShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdpZGVudGl0eScsIFxuXHRcdFx0XHRcdGRvbUlkOiAnZW5kLXNjcmVlbi1pZGVudGl0eScsXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy9pZGVudGl0eS93b24ucG5nJywgXG5cdFx0XHRcdFx0YXV0aG9yOiAncGV0ZSBtYXJraWV3aWN6JywgXG5cdFx0XHRcdFx0c291cmNlOiAncGx5b2p1bXAnXG5cdFx0XHRcdH1cblx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmlkZW50aXR5ID0gbmV3IElkZW50aXR5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ2lkZW50aXR5JywgXG5cdFx0XHRcdFx0ZG9tSWQ6ICdlbmQtc2NyZWVuLWlkZW50aXR5Jyxcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2lkZW50aXR5L2xvc3QucG5nJywgXG5cdFx0XHRcdFx0YXV0aG9yOiAncGV0ZSBtYXJraWV3aWN6JywgXG5cdFx0XHRcdFx0c291cmNlOiAncGx5b2p1bXAnXG5cdFx0XHRcdH1cblx0XHRcdCk7XG4gXHRcdH1cblxuIFx0fVxuIFxuIFx0Ly9UT0RPOiB1c2UgYSBTdGF0aWNUZXh0IG9iamVjdCwgYW5kIGFkZCB0byBFbmRTY3JlZW5cbiBcdHNob3dTY29yZSAod29uKSB7XG4gXHRcdHRoaXMubG9hZElkZW50aXR5KHdvbik7XG4gXHRcdC8qXG4gXHRcdGlmICh3b24pIHtcbiBcdFx0XHRhbGVydCAoXCJ5b3Ugd29uXCIpXG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0YWxlcnQgKFwieW91IGxvc3RcIilcbiBcdFx0fVxuIFx0XHQqL1xuIFx0fVxuXG4gXHRsb2FkSW5wdXRTY29yZSAoKSB7XG5cbiBcdH1cblxuIFx0bG9hZEhpZ2hTY29yZXMgKCkge1xuXG4gXHR9XG5cbiBcdGJpbmRSZXBsYXkgKCkge1xuXHRcdGNvbnNvbGUubG9nKFwiaW4gYmluZFN0YXJ0LCB0aGlzLmdhbWU6XCIgKyB0aGlzLmdhbWUpXG5cdFx0Ly8gd2UgdXNlIGJpbmQoKSB0byBsaW5rIHRoZSBmdW5jdGlvbiBiZWxvdyB0byBTdGFydFNjcmVlbiAob3RoZXJ3aXNlLCBpdCB0aGlua3MgaXQgaXMgaW5zaWRlIHdpbmRvdylcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kLXNjcmVlbi1wbGF5LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXG5cdFx0XHRmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHQvL2FsZXJ0KFwiaW4gaGFuZGxlciwgZ2FtZTpcIiArIHRoaXMuZ2FtZSlcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLmdhbWUuc3RhcnRHYW1lKCk7XG5cblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRiaW5kSW5zdHJ1Y3Rpb25zICgpIHtcblx0XHRjb25zb2xlLmxvZyhcImluIGJpbmRTdGFydCwgdGhpcy5nYW1lOlwiICsgdGhpcy5nYW1lKVxuXHRcdC8vIHdlIHVzZSBiaW5kKCkgdG8gbGluayB0aGUgZnVuY3Rpb24gYmVsb3cgdG8gU3RhcnRTY3JlZW4gKG90aGVyd2lzZSwgaXQgdGhpbmtzIGl0IGlzIGluc2lkZSB3aW5kb3cpXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZC1zY3JlZW4taW5zdHJ1Y3Rpb25zLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXG5cdFx0XHRmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHQvL2FsZXJ0KFwiaW4gaGFuZGxlciwgZ2FtZTpcIiArIHRoaXMuZ2FtZSlcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLmdhbWUubG9hZEdhbWUoKTtcblxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuIH0iLCIvKiogXG4gKiBHYW1lLmpzXG4gKiBUaGUgZW50aXJlIEdhbWUgb2JqZWN0XG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG4vL1NjcmVlbiBpbmhlcml0YW5jZVxuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSAnLi9TdGFydFNjcmVlbi5qcyc7XG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuL0dhbWVTY3JlZW4uanMnO1xuaW1wb3J0IEVuZFNjcmVlbiBmcm9tICcuL0VuZFNjcmVlbi5qcyc7XG5cbi8vSW5mbyBpbmhlcml0YW5jZVxuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuaW1wb3J0IElkZW50aXR5IGZyb20gJy4vSWRlbnRpdHkuanMnO1xuaW1wb3J0IEluc3RydWN0aW9ucyBmcm9tICcuL0luc3RydWN0aW9ucy5qcyc7XG5pbXBvcnQgRHluYW1pY1RleHQgZnJvbSAnLi9EeW5hbWljVGV4dC5qcyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZS5qcyc7XG5cbi8vQ2hhcmFjdGVyIGluaGVyaXRhbmNlXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbmltcG9ydCBUcnVtcCBmcm9tICcuL1RydW1wLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIuanMnO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5pbXBvcnQgTGlvbiBmcm9tICcuL0xpb24uanMnO1xuaW1wb3J0IFRpZ2VyIGZyb20gJy4vVGlnZXIuanMnO1xuaW1wb3J0IEJlYXIgZnJvbSAnLi9CZWFyLmpzJztcbmltcG9ydCBHb3JpbGxhIGZyb20gJy4vR29yaWxsYS5qcyc7XG5pbXBvcnQgSGVhbHRoIGZyb20gJy4vSGVhbHRoLmpzJztcblxuLy9BcmVhIGluaGVyaXRhbmNlLlxuaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcbmltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XG5pbXBvcnQgQW5pbWFsQXJlYSBmcm9tICcuL0FuaW1hbEFyZWEuanMnO1xuaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi9QbGF5ZXJBcmVhLmpzJztcblxuLy8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG5pbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XG5pbXBvcnQgU291bmRlciBmcm9tICcuL1NvdW5kZXIuanMnO1xuaW1wb3J0IFNjb3JlciBmcm9tICcuL1Njb3Jlci5qcyc7XG4vLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBHYW1lUGllY2Uge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblxuXHRcdHN1cGVyKGNvbmZpZyk7XG5cblx0XHQvL2dhbWUgY29weXJpZ2h0XG5cdFx0dGhpcy53YXJuaW5nID0gJ1RoaXMgZ2FtZSBiZWxvbmdzIHRvIHVzLCBhbmQgbm9ib2R5IGVsc2UuJztcblxuXHRcdC8vZ2FtZSByZXZlcnRzIHRvIFN0YXJ0U2NyZWVuIGlmIHVucGxheWVkXG5cdFx0dGhpcy5USU1FT1VUID0gNTU1NTtcblxuXHRcdC8vIGRlZmluZSBJZCBsaW5rIHRvIERPTVxuXHRcdHRoaXMuU1RBUlRfU0NSRUVOX0lEID0gJ3N0YXJ0LXNjcmVlbic7XG5cdFx0dGhpcy5HQU1FX1NDUkVFTl9JRCA9ICdnYW1lLXNjcmVlbic7XG5cdFx0dGhpcy5FTkRfU0NSRUVOX0lEID0gJ2VuZC1zY3JlZW4nO1xuXG5cdFx0Ly8gbW9kZWwgc3RvcmFnZSwgc2NyZWVuc1xuXHRcdHRoaXMuc2NyZWVucyA9IFtdO1xuXG5cdFx0Ly8gbW9kZWwgc3RvcmFnZSwgZHluYW1pYyBjaGFyYWN0ZXJzXG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycyA9IFtdO1xuXG5cdFx0Ly8gaW5pdGlhbGl6ZSBnYW1lLCBsb2FkIHN0YXJ0IHNjcmVlblxuXHRcdHRoaXMuaW5pdCgpO1xuXG5cdH0gLy9lbmQgb2YgY29uc3RydWN0b3JcblxuXHRpbml0ICgpIHtcblxuXHRcdC8vIEdyYWIgdGhlIEhUTUwgc2NyZWVuIGVsZW1lbnRzIGFuZCBlbmNhcHN1bGF0ZSBpbiBhIFNjcmVlbiBjbGFzc1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLlNUQVJUX1NDUkVFTl9JRF0gPSBuZXcgU3RhcnRTY3JlZW4oe25hbWU6ICdTdGFydCBTY3JlZW4nLCBpZDogdGhpcy5TVEFSVF9TQ1JFRU5fSUQsIGdhbWU6IHRoaXN9KTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5HQU1FX1NDUkVFTl9JRF0gPSBuZXcgR2FtZVNjcmVlbih7bmFtZTogJ0dhbWUgU2NyZWVuJywgaWQ6IHRoaXMuR0FNRV9TQ1JFRU5fSUQsIGdhbWU6IHRoaXN9KTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5FTkRfU0NSRUVOX0lEXSA9IG5ldyBFbmRTY3JlZW4oe25hbWU6ICdFbmQgU2NyZWVuJywgaWQ6IHRoaXMuRU5EX1NDUkVFTl9JRCwgZ2FtZTogdGhpc30pO1xuXG5cdFx0Ly8gbG9hZCB0aGUgY2FudmFzXG5cdFx0dGhpcy5sb2FkQ2FudmFzKCk7XG5cblx0XHQvLyBtYWtlIHRoZSBzdGFydCBzY3JlZW4gdmlzaWJsZVxuXHRcdHRoaXMubG9hZEdhbWUoKTtcblx0fVxuXG5cdC8vIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgSFRNTDUgY2FudmFzIGNvbnRleHRcblx0bG9hZENhbnZhcyAoKSB7XG5cdFx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZS1zY3JlZW4tYXJlbmEgY2FudmFzJyk7XG5cdFx0dGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHR9XG5cblx0LyoqIFxuXHQgKiBMb2FkIENoYXJhY3RlcnNcblx0ICogZHluYW1pYyBDaGFyYWN0ZXJzIChlLmcuIHRob3NlIHRoYXQgYW5pbWF0ZSkgYXJlIGxvYWRlZCBieSBHYW1lLiBcblx0ICogT3RoZXIgc3RhdGljIHZpc3VhbCBvYmplY3RzIGFyZSBsb2FkZWQgYnkgU2NyZWVuIGNsYXNzZXMuXG5cdCAqL1xuXHRsb2FkUGxheWVycyAoKSB7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IFBsYXllcihcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdQbGF5ZXInLCBwb3NpdGlvbjoge3RvcDogNTEwLCBsZWZ0OiAyMDB9LFxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvcGxheWVycy9wbGF5ZXIucG5nJyxcblx0XHRcdFx0XHRnYW1lOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXHR9XG5cblx0bG9hZEFuaW1hbHMgKCkge1xuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcblx0XHRcdG5ldyBMaW9uKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ0xpb24nLCBcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMTUsIGxlZnQ6IDk0fSxcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvbGlvbi5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IFRpZ2VyKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ1RpZ2VyJywgXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDE1LCBsZWZ0OiAzMzN9LFxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvYW5pbWFscy90aWdlci5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IEJlYXIoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnQmVhcicsIHBvc2l0aW9uOiB7dG9wOiAxNSwgbGVmdDogNTcwfSxcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvYmVhci5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IEdvcmlsbGEoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnR29yaWxsYScsIHBvc2l0aW9uOiB7dG9wOiAxNSwgbGVmdDogODEyfSxcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvZ29yaWxsYS5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cblx0fVxuXG5cdGxvYWRUcnVtcHMgKCkge1xuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcblx0XHRcdG5ldyBUcnVtcChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdUcnVtcCcsIHBvc2l0aW9uOiB7dG9wOiA0NTAsIGxlZnQ6IDIwMH0sXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy90cnVtcHMvdHJ1bXAucG5nJyxcblx0XHRcdFx0XHRnYW1lOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXG5cdH1cblxuXHRsb2FkR2FtZSAoKSB7XG5cblx0XHQvL2xvYWQgSW5mbyBhc3NldHNcblxuXHRcdGNvbnNvbGUubG9nKCdsb2FkaW5nIHNwbGFzaCBzY3JlZW4nKTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5FTkRfU0NSRUVOX0lEXS5oaWRlU2NyZWVuKClcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5TVEFSVF9TQ1JFRU5fSURdLnNob3dTY3JlZW4oKTtcblx0fVxuXG5cdHN0YXJ0R2FtZSAoKSB7XG5cblx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcblx0XHQvL2xvYWQgYXVkaW8gc2FtcGxlc1xuXHRcdHRoaXMuc291bmRQb29sID0gbmV3IFNvdW5kZXIoKTtcblxuXHRcdHRoaXMuc291bmRQb29sLmFkZFNvdW5kKCdraWNrJywgMC43KTtcblx0XHR0aGlzLnNvdW5kUG9vbC5hZGRTb3VuZCgnbGlvbicsIDAuNyk7XG5cdFx0dGhpcy5zb3VuZFBvb2wuYWRkU291bmQoJ3RpZ2VyJywgMC43KTtcblx0XHR0aGlzLnNvdW5kUG9vbC5hZGRTb3VuZCgnYmVhcicsIDAuNyk7XG5cdFx0dGhpcy5zb3VuZFBvb2wuYWRkU291bmQoJ2dvcmlsbGEnLCAwLjcpO1xuXHRcdHdpbmRvdy5zb3VuZFBvb2wgPSB0aGlzLnNvdW5kUG9vbDtcblxuXHRcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcblxuXHRcdC8vbG9hZCBDaGFyYWN0ZXJzXG5cdFx0dGhpcy5sb2FkQW5pbWFscygpO1xuXHRcdHRoaXMubG9hZFBsYXllcnMoKTtcblx0XHR0aGlzLmxvYWRUcnVtcHMoKTtcblxuXHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuXHRcdHRoaXMuY29sbGlkZXIgPSBuZXcgQ29sbGlkZXIodGhpcy5kaXNwbGF5Q2hhcmFjdGVycyk7XG5cblx0XHQvLyBBZGQgZ2FtZSBvdmVyIHRlc3Rcblx0XHR0aGlzLnNjb3JlciA9IG5ldyBTY29yZXIodGhpcyk7XG5cdFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxuXG5cdFx0Ly9tYWtlIEdhbWVTY3JlZW4gdmlzaWJsZVxuXG5cdFx0Ly8gaW5pdGlhbGl6ZSBlbGFwc2VkIHRpbWVcblx0XHR0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG5cblx0XHQvLyBzaG93IEdhbWVTY3JlZW4sIGhpZGUgb3RoZXJzXG5cdFx0Y29uc29sZS5sb2coJ3N0YXJ0aW5nIGdhbWUnKTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5TVEFSVF9TQ1JFRU5fSURdLmhpZGVTY3JlZW4oKTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5FTkRfU0NSRUVOX0lEXS5oaWRlU2NyZWVuKCk7XG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuR0FNRV9TQ1JFRU5fSURdLnNob3dTY3JlZW4oKTtcblx0XHR0aGlzLmdhbWVMb29wKCk7XG5cdH1cblxuXHRlbmRHYW1lICgpIHtcblxuXHRcdGNvbnNvbGUubG9nKCdlbmRpbmcgZ2FtZScpO1xuXG5cdFx0Ly8gcmVzZXQgdGltZXJcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XG5cblx0XHQvLyB0dXJuIG9mZiBhbmltYXRpb25cblx0XHRjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmdsb2JhbElkKTtcblx0XHR0aGlzLmdsb2JhbElkID0gbnVsbDtcblxuXHRcdC8vIGdvIHRvIGVuZCBzY3JlZW5cblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5HQU1FX1NDUkVFTl9JRF0uaGlkZVNjcmVlbigpO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkVORF9TQ1JFRU5fSURdLnNob3dTY3JlZW4oKTtcblxuXHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuXHRcdC8vIHNob3cgdGhlIHNjb3JlXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuRU5EX1NDUkVFTl9JRF0uc2hvd1Njb3JlKHRoaXMuc2NvcmVyLndvbik7XG5cdFx0Ly8gTnVsbCBldmVyeXRoaW5nXG5cdFx0dGhpcy5zb3VuZGVyID0gbnVsbDtcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzID0gW107XG5cdFx0dGhpcy5jb2xsaWRlciA9IG51bGw7XG5cdFx0dGhpcy5zY29yZXIgPSBudWxsO1xuXHRcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcblxuXHR9XG5cblx0ZWxhcHNlZCAoKSB7XG5cblx0XHQvLyByZWNvcmQgdGltZSB3ZSBoYXZlIGJlZW4gaW4gZ2FtZUxvb3Bcblx0XHR0aGlzLmVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG5cdFx0Ly8gdGltZSBkaWZmZXJlbmNlIGluIG1zXG5cblx0XHR2YXIgdGltZURpZmYgPSAodGhpcy5lbmRUaW1lIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMDtcblxuXHRcdC8vIGdldCBzZWNvbmRzIChPcmlnaW5hbCBoYWQgJ3JvdW5kJyB3aGljaCBpbmNvcnJlY3RseSBjb3VudHMgMDoyOCwgMDoyOSwgMTozMCAuLi4gMTo1OSwgMTowKVxuXHRcdHJldHVybiBNYXRoLnJvdW5kKHRpbWVEaWZmICUgNjApO1xuXHR9XG5cblx0Y2hlY2tJZkNvbXBsZXRlICgpIHtcblxuXHRcdC8vIGdhbWUgbG9naWMgdG8gc2VlIGlmIHRoZSBnYW1lIHNob3VsZCByZXNldFxuXHRcdC8vLy8vLy8vLy8vLy9jb25zb2xlLmxvZygnRUxBUFNFRDonICsgdGhpcy5lbGFwc2VkKCkpO1xuXG5cdFx0aWYgKHRoaXMuZWxhcHNlZCgpID4gdGhpcy5USU1FT1VUKSB7XG5cdFx0XHQvLyBpZiBpZGxlIHRvbyBsb25nLCByZXNldCBnYW1lIHRvIHN0YXJ0XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBjaGVjayBpZiBnYW1lcGxheSBpcyBjb21wbGV0ZVxuXHRcdGlmICh0aGlzLnNjb3Jlci5nYW1lT3ZlcigpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR1cGRhdGUgKCkge1xuXG5cdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuZGlzcGxheUNoYXJhY3RlcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblxuXHRcdFx0dmFyIGNoYXJhY3RlciA9IHRoaXMuZGlzcGxheUNoYXJhY3RlcnNbaV07XG5cblx0XHRcdHN3aXRjaCAoY2hhcmFjdGVyLmdldENsYXNzKCkpIHtcblx0XHRcdFx0Y2FzZSAnUGxheWVyJzpcblx0XHRcdFx0Y2FzZSAnVHJ1bXAnOlxuXHRcdFx0XHRjYXNlICdMaW9uJzpcblx0XHRcdFx0Y2FzZSAnVGlnZXInOlxuXHRcdFx0XHRjYXNlICdCZWFyJzpcblx0XHRcdFx0Y2FzZSAnR29yaWxsYSc6XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNoYXJhY3Rlci51cGRhdGUoKTtcblx0XHR9XG5cdH1cblxuXHRkcmF3ICgpIHtcblxuIFx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcblx0XHR0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuIFx0XHQvLyBFTkQgQURERUQgV0VFSyAxMTw8PDw8PDw8PDw8PDxcblx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVyc1tpXS5kcmF3KHRoaXMuY29udGV4dCk7XG5cdFx0fVxuXHR9XG5cblx0Z2FtZUxvb3AgKCkge1xuXHRcdFxuXHRcdGlmICh0aGlzLmNoZWNrSWZDb21wbGV0ZSgpKSB7XG5cdFx0XHR0aGlzLmVuZEdhbWUoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0XHR0aGlzLmRyYXcoKTtcblx0XHRcblx0XHQvL2NvbnNvbGUubG9nKCdsb29waW5nLi4uJylcblx0XHR0aGlzLmdsb2JhbElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3AuYmluZCh0aGlzKSk7XG5cdH1cblxufSIsIi8qKiBcbiAqIEdhbWVQaWVjZS5qc1xuICogQmFzaWMgR2FtZSBvYmplY3RcbiAqXG4gKiBUbyBtYWtlIHRoaXMgd29yaywgeW91IG11c3QgYmUgcnVubmluZyB0aGUgQmFiZWwgdHJhbnNwaWxlciwgXG4gKiBhbmQgd2F0Y2hpbmcgZm9yIGNoYW5nZXMgaW4gdGhpcyBmaWxlIHdpdGggYnJvd3NlcmlmeS4gVHdvIFxuICogVGVybWluYWwgd2luZG93cyBuZWVkIHRvIGJlIG9wZW46XG4gKiAxLiBvbmUgd2luZG93IHdoZXJlIHlvdSB0eXBlZCB0aGUgY29tbWFuZCBcImdydW50XCJcbiAqIDIuIG9uZSB3aW5kb3cgd2hlcmUgeW91IHR5cGVkIHRoZSBjb21tYW5kIFwibnBtIHN0YXJ0XCJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBpZWNlIHtcblxuICAgIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICAgICAgLy9UT0RPOiB1c2Ugc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgICAgIHRoaXMudXVpZCA9IHRoaXMuc2V0SWQoKTtcbiAgICAgICAgdGhpcy5yZWFkeSA9IHRydWU7IC8vIGNoYW5nZSB0byBmYWxzZSBmb3IgZGVmZXJyZWQgbG9hZHNcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogU2V0IGEgcG9zaXRpb24gZm9yIHRoZSBvYmplY3QsIGFsc28gdGhlIHBvc2l0aW9uIG9mIHRoZSBcbiAgICAgKiBET00gcmVwcmVzZW50YXRpb24gb2YgdGhlIG9iamVjdFxuICAgICAqL1xuICAgIHNldERPTVBvc2l0aW9uIChwb3NpdGlvbikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIGlmICh0aGlzLmRvbSkge1xuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUudG9wID0gcG9zaXRpb24udG9wICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuZG9tLnN0eWxlLmxlZnQgPSBwb3NpdGlvbi5sZWZ0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBTZXQgdGhlIG9iamVjdCBzaXplLCBhbHNvIGl0cyBET00gc2l6ZVxuICAgICAqL1xuICAgIHNldERPTVNpemUgKHNpemUpIHtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgaWYgKHRoaXMuZG9tKSB7XG4gICAgICAgICAgICB0aGlzLmRvbS5zdHlsZS53aWR0aCA9IHNpemUud2lkdGggKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQgKyAncHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEdlbmVyYXRlIGEgdW5pcXVlIElEIGZvciBldmVyeSBnYW1lIG9iamVjdC5cbiAgICAgKiBAbGluayBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNTAzNC9jcmVhdGUtZ3VpZC11dWlkLWluLWphdmFzY3JpcHRcbiAgICAgKi9cbiAgICBzZXRJZCAoKSB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy91c2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSoxNiklMTYgfCAwO1xuICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZC8xNik7XG4gICAgICAgICAgICByZXR1cm4gKGM9PSd4JyA/IHIgOiAociYweDN8MHg4KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIFJldHVybiB0aGUgZ2l2ZW4gbmFtZSBvZiB0aGlzIG9iamVjdFxuICAgICAqL1xuICAgIGdldE5hbWUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiByZXR1cm4gdGhlIGNsYXNzIG9mIHRoZSBvYmplY3RcbiAgICAgKi9cbiAgICBnZXRDbGFzcyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIFJldHVybiB0aGUgdW5pcXVlIGlkIG9mIHRoaXMgb2JqZWN0LlxuICAgICAqL1xuICAgIGdldElkICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXVpZDtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogR2V0IHRoZSBlbmNsb3NpbmcgYm94IG91dHNpZGUgdGhlIG9iamVjdCBmb3IgZXh0ZXJuYWwgY29sbGlzaW9uc1xuICAgICAqL1xuICAgIGdldENvbGxpc2lvblJlY3QgKCkge1xuXG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEdldCB0aGUgaW50ZXJuYWwgYm94IHdoZW4gdGhpcyBvYmplY3QgYWN0cyBhcyBhIGNvbnRhaW5lciBmb3IgYW5vdGhlclxuICAgICAqL1xuICAgIGdldEJvdW5kc1JlY3QgKCkge1xuXG4gICAgfVxuXHRcblx0LyoqIFxuXHQgKiBHZW5lcmljICdyZWFkeScgZnVuY3Rpb24gKGUuZy4gZm9yIGRlbGF5ZWQgYXNzZXQgbG9hZHMpXG5cdCAqL1xuXHRzZXRSZWFkeSAodmFsKSB7XG5cdFx0dGhpcy5yZWFkeSA9IHZhbDtcblx0fVxuXG4gICAgLyoqIFxuICAgICAqIEdlbmVyaWMgdXBkYXRlIChvdmVycmlkZSlcbiAgICAgKi9cbiAgICB1cGRhdGUgKCkge1xuXG4gICAgfVxuXG4gICAgIC8qKiBcbiAgICAgICogZ2VuZXJpYyBkcmF3IChvdmVycmlkZSlcbiAgICAgICovXG4gICAgZHJhdyAoKSB7XG5cbiAgICB9XG59XG5cblxuIiwiLyoqIFxuICogR2FtZVNjcmVlbi5qc1xuICogTWFpbiBnYW1lIHNjcmVlbiBvYmplY3RcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIFNjcmVlblxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuIGltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4vQW5pbWFsQXJlYS5qcyc7XG4gaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi9QbGF5ZXJBcmVhLmpzJztcbiBpbXBvcnQgQ2FnZSBmcm9tICcuL0NhZ2UuanMnO1xuXG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuXG4gXHRcdHRoaXMuY2FnZXMgPSBbXTtcbiBcdFx0dGhpcy5hbmltYWxBcmVhcyA9IFtdO1xuIFx0XHR0aGlzLnBsYXllckFyZWFzID0gW107XG5cbiBcdFx0Ly9HYW1lU2NyZWVuIHNob3VsZCBoaWRlIGl0cyBsb2NhbCBoZWFkZXIgYW5kIGZvb3RlclxuIFx0XHR0aGlzLmhpZGVIZWFkZXIoKTtcbiBcdFx0dGhpcy5oaWRlRm9vdGVyKCk7XG5cbiBcdFx0Ly8gbG9hZCB0aGUgYmFja2dyb3VuZCBpbWFnZVxuIFx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kKCdpbWcvc2NyZWVucy9nYW1lLXNjcmVlbi5wbmcnKTtcblxuIFx0XHQvLyBnZXQgdGhlIHNlY3Rpb24gdGhhdCBoYXMgdGhlIGNhbnZhcyBmb3Igb3ZlcmxheVxuIFx0XHR2YXIgYXJlbmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1zY3JlZW4tYXJlbmEnKTtcblxuIFx0XHQvLyBsb2FkIHN1Yi1vYmplY3RzIGludG8gdGhlIEFyZW5hXG4gXHRcdHRoaXMuY2FnZXMgICA9IHRoaXMubG9hZENhZ2VzKGFyZW5hLCAnaW1nL2FyZWFzL2NhZ2UucG5nJyk7XG4gXHRcdHRoaXMuYW5pbWFsQXJlYSA9IHRoaXMubG9hZEFuaW1hbEFyZWEoKTtcbiBcdFx0dGhpcy5wbGF5ZXJBcmVhID0gdGhpcy5sb2FkUGxheWVyQXJlYSgpO1xuXG4gXHR9XG5cbiBcdGxvYWRDYWdlcyAoY29udGFpbmVyLCBpbWdQYXRoKSB7XG4gXHRcdC8vIGxvYWQgNCBDYWdlc1xuIFx0XHR0aGlzLmNhZ2VzLnB1c2goXG4gXHRcdFx0bmV3IENhZ2UoXG4gXHRcdFx0XHR7XG4gXHRcdFx0XHRcdG5hbWU6ICdsaW9uLWNhZ2UnLCBcbiBcdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDcwfSwgXG4gXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSwgXG4gXHRcdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcbiBcdFx0XHRcdFx0cGF0aDogaW1nUGF0aFxuIFx0XHRcdFx0fVxuIFx0XHRcdClcbiBcdFx0KTtcblx0XHR0aGlzLmNhZ2VzLnB1c2goXG5cdFx0XHRuZXcgQ2FnZShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICd0aWdlci1jYWdlJywgXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDMxMH0sIFxuXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSwgXG5cdFx0XHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsIFxuXHRcdFx0XHRcdHBhdGg6IGltZ1BhdGhcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5jYWdlcy5wdXNoKFxuXHRcdFx0bmV3IENhZ2UoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnYmVhci1jYWdlJywgXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDU1MH0sIFxuXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSxcblx0XHRcdFx0XHRjb250YWluZXI6IGNvbnRhaW5lciwgXG5cdFx0XHRcdFx0cGF0aDogaW1nUGF0aFxuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcblx0XHR0aGlzLmNhZ2VzLnB1c2goXG5cdFx0XHRuZXcgQ2FnZShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdnb3JpbGxhLWNhZ2UnLCBcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMCwgbGVmdDogNzkwfSwgXG5cdFx0XHRcdFx0c2l6ZToge3dpZHRoOiAxMDAsIGhlaWdodDoxMDB9LFxuXHRcdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcblx0XHRcdFx0XHRwYXRoOiBpbWdQYXRoXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuIFx0fVxuXG4gXHRsb2FkQW5pbWFsQXJlYSAoKSB7XG4gXHRcdC8vIGxvYWQgQW5pbWFsIG1vdmVtZW50IGFyZWFcbiBcdFx0dGhpcy5hbmltYWxBcmVhcy5wdXNoKFxuIFx0XHRcdG5ldyBBbmltYWxBcmVhKFxuIFx0XHRcdFx0e1xuIFx0XHRcdFx0XHRuYW1lOiAnWm9vJywgXG4gXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAxMDQsIGxlZnQ6IDZ9LCBcbiBcdFx0XHRcdFx0c2l6ZToge3dpZHRoOiA5NzAsIGhlaWdodDogNDEwfSxcbiBcdFx0XHRcdFx0Y29udGFpbmVyOiB0aGlzLmRvbSwgXG4gXHRcdFx0XHRcdHBhdGg6IG51bGxcbiBcdFx0XHRcdH1cbiBcdFx0XHQpXG4gXHRcdCk7XG4gXHR9XG5cbiBcdGxvYWRQbGF5ZXJBcmVhICgpIHtcbiBcdFx0Ly8gbG9hZCB0aGUgUGxheWVyXG4gXHRcdHRoaXMucGxheWVyQXJlYXMucHVzaChcbiBcdFx0XHRuZXcgUGxheWVyQXJlYShcbiBcdFx0XHRcdHtcbiBcdFx0XHRcdFx0bmFtZTogJ1BsYXllciBBcmVhJywgXG4gXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiA1MTQsIGxlZnQ6IDZ9LCBcbiBcdFx0XHRcdFx0c2l6ZToge3dpZHRoOiA5NzAsIGhlaWdodDogMTAwfSxcbiBcdFx0XHRcdFx0Y29udGFpbmVyOiB0aGlzLmRvbSwgXG4gXHRcdFx0XHRcdHBhdGg6IG51bGxcbiBcdFx0XHRcdH1cbiBcdFx0XHQpXG4gXHRcdCk7XG4gXHR9XG5cbiB9XG5cbiIsIi8qKiBcbiAqIEdvcmlsbGEuanNcbiAqIEEgR29yaWxsYSwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvcmlsbGEgZXh0ZW5kcyBBbmltYWwge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuIFx0fVxuIH0iLCIvKiogXG4gKiBIZWFsdGguanNcbiAqIFRoZSBjcml0dGVycyB0aGF0IFRydW1wIHRyaWVzIHRvIHN0b3AgZnJvbSBnZXR0aW5nIHRoZSBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhbHRoIGV4dGVuZHMgQ2hhcmFjdGVyIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcbiBcdH1cblxuIH0iLCIvKiogXG4gKiBJZGVudGl0eS5qc1xuICogR2FtZSBMb2dvcywgTG9nb1R5cGVzLCBCcmFuZCBOYW1lXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElkZW50aXR5IGV4dGVuZHMgU3RhdGljSW1hZ2Uge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXG5cdFx0dGhpcy5zZXRTb3VyY2UoY29uZmlnLnNvdXJjZSk7XG5cdFx0dGhpcy5zZXRBdXRob3IoY29uZmlnLmF1dGhvcik7XG5cdFx0dGhpcy5sb2FkSW1hZ2VUb0RPTShjb25maWcuZG9tSWQsIGNvbmZpZy5wYXRoKTtcblxuXHRcdC8vSGlkZSBhbnkgPGgyPiB0ZXh0IGVxdWl2YWxlbnQgb2YgaWRlbnRpdHkgaW4gdGhpcyBDU1MgYm94XG5cdFx0dmFyIHRleHRJZGVudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgY29uZmlnLmRvbUlkICsgJyBoMicpO1xuXHRcdHRleHRJZGVudGl0eS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR9XG5cbn1cbiIsIi8qKiBcbiAqIFN0YXRpY0ltYWdlLmpzXG4gKiBJbWFnZS1zdHlsZSBJbmZvcm1hdGlvbiB0aGF0IGNhbm5vdCBiZSBjaGFuZ2VkIG9uY2UgdGhlIGdhbWUgaXMgbG9hZGVkXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIEluZm8ge1xuXG5cdC8vIHNhdmUgc2NvcGVcblx0Ly8gVE9ETzogcmVmYWN0b3Igd2l0aCBhcnJvdyBmdW5jdGlvblxuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXHRcdHRoaXMucmVhZHkgPSBmYWxzZTsgLy9vdmVyLXJpZGUgR2FtZVBpZWNlIGFuZCBpbmZvIHdpdGggZGVmZXJyYWxzXG5cdFx0dGhpcy5pbWFnZSA9IG51bGw7XG5cdFx0dGhpcy5wYXRoID0gY29uZmlnLnBhdGg7XG5cdFx0dGhpcy5hdXRob3IgPSBjb25maWcuYXV0aG9yO1xuXHRcdHRoaXMuc291cmNlID0gY29uZmlnLnNvdXJjZTtcblx0fVxuXG5cdC8vIGxvYWQgYW4gaW1hZ2Vcblx0bG9hZCAocGF0aCwgY2FsbGJhY2spIHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5zZXRSZWFkeShmYWxzZSk7XG5cdFx0Y29uc29sZS5sb2coJ2VudGVyaW5nIGxvYWQgaW5JbWFnZScpO1xuXHRcdHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRpbWcuc3JjID0gcGF0aDtcblx0XHRpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc29sZS5sb2codGhhdC5uYW1lICsgJyBpbWFnZSBsb2FkZWQgZnJvbTonICsgcGF0aCArICcgdzonICsgaW1nLndpZHRoICsgJyBoOicgKyBpbWcuaGVpZ2h0KVxuXHRcdFx0dGhhdC5zZXRSZWFkeSh0cnVlKTtcblx0XHRcdHRoYXQuZGF0YSA9IGltZztcblx0XHRcdFxuXHRcdFx0aWYoY2FsbGJhY2spIHtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2Vycm9yIGxvYWRpbmcgaW1nIGZyb206JyArIHBhdGgpO1xuXHRcdH1cblx0fVxuXG5cdGNsZWFyIChkb21JZCkge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvbUlkKS5yZW1vdmVDaGlsZCh0aGlzLmRhdGEpO1xuXHRcdHRoaXMuZGF0YSA9IG51bGw7XG5cdH1cblxuXHQvLyBsb2FkIGltYWdlLCBhcHBlbmQgdG8gZXhpc3RpbmcgRE9NIGVsZW1lbnRcblx0Ly8gTk9URTogdGhpcyBpcyBvdmVyLXdyaXR0ZW4gaW4gQ2hhcmFjdGVyLmpzLCB3aGljaCBsb2FkcyBpbWFnZXMgaW50byBDYW52YXNcblx0bG9hZEltYWdlVG9ET00gKGRvbUlkLCBwYXRoLCBjYWxsYmFjaykge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHR0aGlzLmxvYWQocGF0aCwgZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZvcmVncm91bmQgaW1hZ2UgJyArIHBhdGggKyAnIGxvYWRlZCcpXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21JZCkuYXBwZW5kQ2hpbGQodGhhdC5kYXRhKTtcblx0XHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Ly8gbG9hZCBpbWFnZSBhcyBhIENTUyBiYWNrZ3JvdW5kIGltYWdlIGludG8gZXhpc3RpbmcgRE9NIGVsZW1lbnQuIFxuXHQvLyBOT1RFOiBubyBsb2NhbCByZWZlcmVuY2UgdG8gaW1hZ2UgaW4gdGhpcyBjYXNlXG5cdGxvYWRCYWNrZ3JvdW5kSW1hZ2UgKGNvbnRhaW5lciwgcGF0aCwgY2FsbGJhY2spIHtcblx0XHRjb25zb2xlLmxvZygnbG9hZGluZyBiYWNrZ3JvdW5kIGltYWdlOicgKyBwYXRoKVxuXHRcdGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J3VybCgnICsgcGF0aCArICcpJztcblx0XHR0aGlzLnNldFJlYWR5KHRydWUpO1xuXHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0Y2FsbGJhY2soKTtcblx0XHR9XG5cdH1cblxuXHQvLyBEcmF3IHRoZSBpbWFnZSB0byBhIHN1cHBsaWVkIGNhbnZhcyBjb250ZXh0XG5cdGRyYXdUb0NhbnZhcyAoY29udGV4dCwgcG9zaXRpb24sIHNpemUpIHtcblx0XHRjb250ZXh0LmRyYXdJbWFnZShpbWcsIHBvc2l0aW9uLnRvcCwgcG9zaXRpb24ubGVmdCwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xuXHR9XG5cblx0Ly8gRHJhdyB0byB0aGUgRE9NLiBBc3N1bWUgdGhlIEltYWdlIHdhcyBhbHJlYWR5IGF0dGFjaGVkIHRvIHRoZSBET01cblx0ZHJhd1RvRE9NIChwb3NpdGlvbiwgc2l6ZSkge1xuXHRcdHRoaXMuaW1hZ2Uuc3R5bGUudG9wID0gcG9zaXRpb24udG9wO1xuXHRcdHRoaXMuaW1hZ2Uuc3R5bGUubGVmdCA9IHBvc2l0aW9uLmxlZnQ7XG5cdFx0dGhpcy5pbWFnZS5zdHlsZS53aWR0aCA9IHNpemUud2lkdGg7XG5cdFx0dGhpcy5pbWFnZS5zdHlsZS5oZWlnaHQgPSBzaXplLmhlaWdodDtcblx0fVxuXG59XG4iLCIvKiogXG4gKiBJbmZvLmpzXG4gKiBHZW5lcmljIGluZm9ybWFpdG9uIG9iamVjdFxuICogQGluaGVyaXRzIEdhbWVQaWVjZVxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mbyBleHRlbmRzIEdhbWVQaWVjZSB7XG5cblx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0fVxuXG5cdHNldEF1dGhvciAoYXV0aG9yKSB7XG5cdFx0dGhpcy5hdXRob3IgPSBhdXRob3I7XG5cdH1cblxuXHRzZXRTb3VyY2UgKHNvdXJjZSkge1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHR9XG5cbn0iLCIvKiogXG4gKiBJbnN0cnVjdGlvbnMuanNcbiAqIFRleHQgd2hpY2ggdGVsbHMgdGhlIFBsYXllciBob3cgdG8gcGxheSB0aGUgZ2FtZS5cbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbiBpbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVjdGlvbnMgZXh0ZW5kcyBTdGF0aWNUZXh0IHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0fVxufVxuIiwiLyoqIFxuICogTGlvbi5qc1xuICogQSBMaW9uLCB3aG8gdHJpZXMgdG8gZ2V0IHRoZSBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuIGltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlvbiBleHRlbmRzIEFuaW1hbCB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG4gXHR9XG4gfSIsIi8qKiBcbiAqIEBjbGFzcyBNb3ZlclxuICogQGRlc2NyaXB0aW9uIHVwZGF0ZSBwb3NpdGlvbiBvZiBvYmplY3QgYmVpbmcgYW5pbWF0ZWQgYnkgR2FtZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92ZXIge1xuXG5cdGNvbnN0cnVjdG9yIChnYW1lT2JqKSB7XG5cdFx0dGhpcy5vYmogPSBnYW1lT2JqO1xuXG4gICAgICAgIC8vIENoYXJhY3RlciBoYXMgcmVmZXJlbmNlIHRvIEdhbWVcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZU9iai5nYW1lO1xuXG4gICAgICAgIC8vIE1vdmVtZW50IHR5cGVzXG4gICAgICAgIHRoaXMudHlwZSA9IDA7XG4gICAgICAgIHRoaXMuU0xFVyA9IDE7XG4gICAgICAgIHRoaXMuUkFORE9NID0gMjtcbiAgICAgICAgdGhpcy5QSU5HUE9JTkcgPSAzO1xuXG4gICAgICAgIGlmICghdGhpcy5nYW1lLnNvdW5kUG9vbCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdubyBzb3VuZHMgaW5pdGlhbGl6ZWQuIEdhbWUgd2lsbCBwbGF5IHNpbGVudGx5Jyk7XG4gICAgICAgIH1cblxuXHR9XG5cbiAgICAvKiogXG4gICAgICogQG1ldGhvZCB0cnVuY2F0b3JcbiAgICAgKiBAZGVzY3JpcHRpb24gdHJ1bmNhdGUgKG5vdCByb3VuZCkgbnVtYmVyIHRvIGZpeGVkIG51bWJlciBvZiBkZWNpbWFsc1xuICAgICAqIEBwYXJhbSBOdW1iZXIgbnVtIGZsb2F0aW5nLXBvaW50IG51bWJlclxuICAgICAqIEBwYXJhbSBJbnRlZ2VyIGRlY2ltYWxzIHRoZSBudW1iZXIgb2YgZGVjaW1hbHMgcG9pbnRzIHRvIHJvdW5kIHRvXG4gICAgICogQHJldHVybnMgTnVtYmVyIHRoZSB0cnVuY2F0ZWQgbnVtYmVyXG4gICAgICovXG4gICAgdHJ1bmNhdG9yIChudW0sIGRlY2ltYWxzKSB7ICAgIFxuICAgICAgICB2YXIgbnVtUG93ZXIgPSBNYXRoLnBvdygxMCwgZGVjaW1hbHMpOyAvLyBcIm51bVBvd2VyQ29udmVydGVyXCIgbWlnaHQgYmUgYmV0dGVyXG4gICAgICAgIHJldHVybiB+fihudW0gKiBudW1Qb3dlcikvbnVtUG93ZXI7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgcmFuZG9taXplclxuICAgICAqIEBkZXNjcmlwdGlvbiByYW5kb21pemUgYSBudW1iZXJcbiAgICAgKi9cbiAgICByYW5kb21pemVyICgpIHtcbiAgICAgICAgdmFyIGQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgKGQgPSBwYXJzZUludChkKSAtIGQpO1xuICAgICAgICBkID0gdGhpcy50cnVuY2F0b3IoZCwgMikgLyAxMDtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgZ2V0Q2VudGVyXG4gICAgICovXG4gICAgZ2V0Q2VudGVyICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB4ICsgKHdpZHRoLzIpLFxuICAgICAgICAgICAgeTogeSArIChoZWlnaHQvMilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBAbWV0aG9kIGluaXRTbGV3XG4gICAgICogQGRlc2NyaXB0aW9uIHNsZXcgb2JqZWN0IGhvcml6b250YWxseSB3aXRoIGtleXByZXNzZXMuIEFkZHMgZXZlbnQgXG4gICAgICogbGlzdGVuZXJzIGZvciBrZXlkb3duIGFuZCBrZXl1cCBldmVudHMuIFVzZWQgZm9yIFxuICAgICAqIFBsYXllciBjaGFyYWN0ZXJzIG1vdmluZyBob3Jpem9udGFsbHkgaW4gdGhlIFBsYXllckFyZWFcbiAgICAgKi9cblx0aW5pdFNsZXcgKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW5pdCBTbGV3IG1vdGlvbicpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLlNMRVc7XG5cblxuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgdGhpcy50aWNrZXIgPSAwO1xuICAgICAgICB0aGlzLmxhc3REaXIgPSAxO1xuXG4gICAgICAgIC8vIGFkZCBib3R0b20sIHJpZ2h0IHRvIG1ha2UgYSBSZWN0IGZvciB0aGUgUGxheWVyQXJlYVxuICAgICAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLnBsYXllckFyZWFzWzBdLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLmJvdW5kcy53aWR0aCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLnBsYXllckFyZWFzWzBdLnNpemUud2lkdGg7XG4gICAgICAgIHRoaXMuYm91bmRzLmhlaWdodCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLnBsYXllckFyZWFzWzBdLnNpemUuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdW5kcy5ib3R0b20gPSB0aGlzLmJvdW5kcy50b3AgKyB0aGlzLmJvdW5kcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm91bmRzLnJpZ2h0ID0gdGhpcy5ib3VuZHMubGVmdCArIHRoaXMuYm91bmRzLndpZHRoO1xuXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLm9iai5pbWFnZTtcblxuICAgICAgICAvLyB0b2dnbGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBQbGF5ZXIgd2hlbiBraWNraW5nXG4gICAgICAgIHRoaXMudW5LaWNrID0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xuICAgICAgICB0aGlzLmluS2ljayA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcCAtIDY7XG5cbiAgICAgICAgLy8gTk9URTogVHJ1bXAgaXMgYWRkZWQgdG8gUGxheWVyIGluIENvbGxpZGVyXG5cbiAgICAgICAgLy8gZmxhZyBvdXIgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIGxpc3RlbiBmb3IgdXNlciBldmVudHNcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIFxuICAgICAgICAgICAgZXZlbnQgPT4gdGhpcy5zbGV3KGV2ZW50KSwgZmFsc2UpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJyxcbiAgICAgICAgICAgIGV2ZW50ID0+IHRoaXMudW5raWNrKGV2ZW50KSwgZmFsc2UpO1xuXHR9XG5cbiAgICAvKiogXG4gICAgICogQG1ldGhvZCBpbml0UmFuZG9tV2Fsa1xuICAgICAqIEBkZXNjcmlwdGlvbiBpbml0IHJhbmRvbSBtb3Rpb25zIGFsb25nIGEgcGF0aCBmcm9tIHRoZSBcbiAgICAgKiB0b3AgdG8gdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuLiBVc2VkIGZvciBcbiAgICAgKiBBbmltYWwgY2hhcmFjdGVycyBtb3ZpbmcgdGhyb3VnaCB0aGUgQW5pbWFsQXJlYS5cbiAgICAgKiBAcGFyYW0gTnVtYmVyIHByZWZTcGVlZCB0aGUgc3BlZWQgb2YgbW92ZW1lbnRcbiAgICAgKiBAcGFyYW0gU3RyaW5nIGRpcmVjdGlvbiB0aGUgZGlyZWN0aW9uIHRoZSBBbmltYWwgdWx0aW1hdGVseSBtb3ZlcywgXG4gICAgICogLSAndG9wJzogb3ZlcmFsbCBtb3ZlbWVudCB1cCB0aGUgc2NyZWVuXG4gICAgICogLSAnbGVmdCc6IG92ZXJhbGwgbW92ZW1lbnQgdG8gdGhlIHNjcmVlbiBsZWZ0XG4gICAgICogLSAnYm90dG9tJzogb3ZlcmFsbCBtb3ZlbWVudCB0byB0aGUgc2NyZWVuIGJvdHRvbSAoREVGQVVMVClcbiAgICAgKiAtICdyaWdodCc6IG92ZXJhbGwgbW92ZW1lbnQgdG8gdGhlIHNjcmVlbiByaWdodFxuICAgICAqIC0gJ3JldHVybic6IHJldHVybiBpbW1lZGlhdGVseSB0byB0aGUgQ2FnZSBhcmVhXG4gICAgICogLSAnY2FnZWQnOiBzdGF5IGluIHRoZSBDYWdlIGFyZWFcbiAgICAgKi9cbiAgICBpbml0UmFuZG9tV2FsayAocHJlZlNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQgUmFuZG9tV2FsaycpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLlJBTkRPTTtcblxuICAgICAgICB0aGlzLnNwZWVkID0gcHJlZlNwZWVkICogdGhpcy50aW1lU3RhbXBSYW5kb20oKTtcbiAgICAgICAgdGhpcy5kZWxheSA9IHRoaXMudGltZVN0YW1wUmFuZG9tKCkgKiAzMDA7XG4gICAgICAgIHRoaXMub2JqLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5kZWxheUNvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLk1BWCA9IDMwO1xuICAgICAgICB0aGlzLk1BWF9ERUxBWSA9IDMwMDtcblxuICAgICAgICAvLyBvbmUtdGltZSBwbGF5IG9mIEFuaW1hbCBzb3VuZFxuICAgICAgICB0aGlzLmZpcnN0TW92ZSA9IHRydWU7XG5cbiAgICAgICAgLy8gYWRkIGJvdHRvbSwgcmlnaHQgdG8gbWFrZSBhIFJlY3QgZm9yIHRoZSBBbmltYWxBcmVhXG4gICAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10uYW5pbWFsQXJlYXNbMF0ucG9zaXRpb247XG4gICAgICAgIHRoaXMuYm91bmRzLndpZHRoID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10uYW5pbWFsQXJlYXNbMF0uc2l6ZS53aWR0aDtcbiAgICAgICAgdGhpcy5ib3VuZHMuaGVpZ2h0ID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10uYW5pbWFsQXJlYXNbMF0uc2l6ZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm91bmRzLmJvdHRvbSA9IHRoaXMuYm91bmRzLnRvcCArIHRoaXMuYm91bmRzLmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3VuZHMucmlnaHQgPSB0aGlzLmJvdW5kcy5sZWZ0ICsgdGhpcy5ib3VuZHMud2lkdGg7XG5cbiAgICAgICAgLy8gcmVtZW1iZXIgd2hlcmUgd2Ugc3RhcnRlZCAoaW4gdGhlIGNhZ2UpXG4gICAgICAgIHRoaXMuc3RhcnRUb3AgPSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XG4gICAgICAgIHRoaXMuc3RhcnRMZWZ0ID0gdGhpcy5vYmoucG9zaXRpb24ubGVmdDtcblxuICAgICAgICAvLyBjYWNoZSBwb3NpdGlvbiBkdXJpbmcgbmV3IHJhbmRvbSBtb3Zlc1xuICAgICAgICB0aGlzLm5ld1RvcCA9IDAsIHRoaXMubmV3TGVmdCA9IDA7XG5cbiAgICAgICAgLy8gZ2V0IGJvdHRvbSBhbmQgcmlnaHQgZnJvbSBDaGFyYWN0ZXIgZnJvbSBpdHMgSW1hZ2VcbiAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMub2JqLmltYWdlO1xuXG4gICAgICAgIC8vIGZsYWcgb3VyIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogQG1ldGhvZCBpbml0UGluZ1BvbmdcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdCBhIHBpbmctcG9uZyBzdHlsZSBtb3Rpb24uIFVzZWQgZm9yIFxuICAgICAqIFRydW1wIGNoYXJhY3RlcnMgbW92aW5nIHRocm91Z2ggdGhlIEFuaW1hbEFyZWEuXG4gICAgICovXG4gICAgaW5pdFBpbmdQb25nIChwcmVmU3BlZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQgUGluZ1BvbmcgbW90aW9uJyk7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMuUElOR1BPTkc7XG5cbiAgICAgICAgLy9BbmltYWwgYXJlYVxuICAgICAgICAvLyBhZGQgYm90dG9tLCByaWdodCB0byBtYWtlIGEgUmVjdCBmb3IgdGhlIEFuaW1hbEFyZWFcbiAgICAgICAgdGhpcy5ib3VuZHMgPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5ib3VuZHMud2lkdGggPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5zaXplLndpZHRoO1xuICAgICAgICB0aGlzLmJvdW5kcy5oZWlnaHQgPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5zaXplLmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3VuZHMuYm90dG9tID0gdGhpcy5ib3VuZHMudG9wICsgdGhpcy5ib3VuZHMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdW5kcy5yaWdodCA9IHRoaXMuYm91bmRzLmxlZnQgKyB0aGlzLmJvdW5kcy53aWR0aDtcblxuICAgICAgICB0aGlzLm9iai5zdGFydFRvcCA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcblxuICAgICAgICAvLyBnZXQgYm90dG9tIGFuZCByaWdodCBmcm9tIENoYXJhY3RlciBmcm9tIGl0cyBJbWFnZVxuICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5vYmouaW1hZ2U7XG5cbiAgICAgICAgdGhpcy5vYmouc3BlZWQgPSAwO1xuICAgICAgICB0aGlzLm9iai5keCA9IDA7XG4gICAgICAgIHRoaXMub2JqLmR5ID0gMDtcblxuICAgICAgICAvLyBOT1RFOiBBbmltYWxzIGFuZCBQbGF5ZXJzIGFyZSBhZGRlZCB0byBUcnVtcCBpbiBDb2xsaWRlclxuXG4gICAgICAgIC8vIGZsYWcgb3VyIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICB9XG5cblx0LyoqIFxuXHQgKiBAbWV0aG9kIHNsZXcgXG5cdCAqIE1vdmUgb2JqZWN0IHNsaWdodGx5IHVwIGZvciBkdXJhdGlvbiBvZiBzcGFjZSBiYXIgcHJlc3NlZCBkb3duXG4gICAgICogQ2FsbGJhY2sgZm9yIGtleWRvd24gYWRkRXZlbnRMaXN0ZW5lclxuICAgICAqIEBwYXJhbSBFdmVudCBlIHRoZSBrZXlkb3duIGV2ZW50XG4gICAgICovXG5cdHNsZXcgKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIHRoaXMua2ljayhlKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vcHJldmVudCBzY3JvbGxcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCsrO1xuICAgICAgICAgICAgICAgIHRoaXMudGlja2VyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0RGlyID0gLTE7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL3ByZXZlbnQgc2Nyb2xsXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQrKztcbiAgICAgICAgICAgICAgICB0aGlzLnRpY2tlciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdERpciA9IDE7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL3ByZXZlbnQgc2Nyb2xsXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cdH1cblxuICAgIC8qKiBcbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVNsZXdcbiAgICAgKiBAZGVzY3JpcHRpb24gbW92ZSBiYWNrIGFuZCBmb3J0aCBob3Jpem9udGFsbHksIHdpdGggYSBzaW1wbGUgZWFzaW5nIG1vdGlvblxuICAgICAqIHdoZW4gbGVmdCBhbmQgcmlnaHQgYXJyb3cga2V5cyBhcmUgcHJlc3NlZC4gSGFuZGxlIGNvbGxpc2lvbnMgd2l0aCB0aGUgbGVmdCBcbiAgICAgKiBhbmQgcmlnaHQgd2FsbHMgb2YgdGhlIFBsYXllckFyZWEuXG4gICAgICogQ2FsbCBpbiBhbiB1cGRhdGUgZnVuY3Rpb24gaW5zaWRlIHRoZSBDaGFyYWN0ZXIsIGUuZy4gXG4gICAgICogdXBkYXRlICgpIHsgdXBkYXRlUmFuZG9tV2FsaygpOyB9XG4gICAgICogVGhlIG1haW4gR2FtZSBvYmplY3QgYXV0b21hdGljYWxseSBmaW5kcyBhbmQgJ2ZpcmVzJyB1cGRhdGUoKSBmdW5jdGlvbiBpbiBcbiAgICAgKiBhbGwgQ2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICB1cGRhdGVTbGV3ICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmluaXRlZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGxheWVyIFNsZXcgTk9UIGluaXRpYWxpemVkIChkaWQgeW91IGxlYXZlIG91dCBvZiBjb25zdHJ1Y3Rvcj8pJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aWNrZXIrKztcbiAgICAgICAgaWYgKHRoaXMuc3BlZWQgPiAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50aWNrZXIgPiAxMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLz0gMjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zcGVlZCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKz0gKHRoaXMubGFzdERpciAqIHRoaXMuc3BlZWQpO1xuXG4gICAgICAgIC8vY2hlY2sgYm91bmRzXG4gICAgICAgIGlmICh0aGlzLmJvdW5kcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciB3ID0gdGhpcy5pbWFnZS5kYXRhLndpZHRoO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IDwgdGhpcy5ib3VuZHMubGVmdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3REaXIgPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkIC89IDEuMjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCA9IHRoaXMuYm91bmRzLmxlZnQgKyAodGhpcy5zcGVlZCAqIDEuNSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ID4gdGhpcy5ib3VuZHMucmlnaHQgLSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdERpciA9IC0xO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkIC89IDEuMjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCA9IHRoaXMuYm91bmRzLnJpZ2h0IC0gdyAtICh0aGlzLnNwZWVkICogMS41KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogQG1ldGhvZCBraWNrXG4gICAgICogQGRlc2NyaXB0aW9uIGlmIGZvb3QgaXMgbmVhciBUcnVtcCwga2ljayBoaW0gaW50byB0aGUgQW5pbWFsXG4gICAgICovXG4gICAga2ljayAoZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCc6Ojo6VEhJUyBUUlVNUDo6Ojo6JyArIHRoaXMub2JqLnRydW1wKVxuICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPSB0aGlzLmluS2ljaztcblxuICAgICAgICBpZiAoIXRoaXMub2JqLnRydW1wKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogbWlzc2luZyBjb2xsaXNpb24gbWF0cml4IChkaWQgeW91IGluY2x1ZGUgQ29sbGlkZXI/KScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2VlIGlmIHdlJ3JlIGNsb3NlIGVub3VnaCB0byBraWNrIGluIHRoZSB5IGF4aXNcbiAgICAgICAgdmFyIHRydW1wWURpc3QgPSB0aGlzLm9iai5wb3NpdGlvbi50b3AgLSB0aGlzLm9iai50cnVtcC5pbWFnZS5kYXRhLndpZHRoIC0gdGhpcy5vYmoudHJ1bXAucG9zaXRpb24udG9wO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCd0cnVtcFlEaXN0OicgKyB0cnVtcFlEaXN0KVxuXG4gICAgICAgIC8vIElmIFBsYXllciBpcyBjbG9zZSBpbiBZLCBhbmQgaW5zaWRlIFggcmFuZ2UsIGtpY2sgdGhlIFRydW1wIGludG8gQW5pbWFsQXJlYVxuICAgICAgICBpZiAodHJ1bXBZRGlzdCA8IDEwKSB7XG5cbiAgICAgICAgICAgIC8vIHN0YXJ0IHRoZSBUcnVtcCBtb3ZpbmcsIHNwZWVkXG4gICAgICAgICAgICB0aGlzLm9iai50cnVtcC5zcGVlZCA9IDQwO1xuXG4gICAgICAgICAgICAvLyBpZiB0b28gY2xvc2UgdG8gbGVmdCB3YWxsLCBwcmUtYXNzaWduIGEgdmFsdWVcbiAgICAgICAgICAgIGlmICh0aGlzLm9iai50cnVtcC5wb3NpdGlvbi5sZWZ0IDwgKHRoaXMuYm91bmRzLmxlZnQgKyAyMCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj4+VHJ1bXA6IGxlZnQgYm91bmQgY29ycmVjdGlvblwiKVxuICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR4ID0gLTAuMjtcbiAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keSA9IDAuODtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvbXB1dGUgZHggYW5kIGR5IGZvciBUcnVtcFxuICAgICAgICAgICAgdmFyIGRpc3QgPSAodGhpcy5vYmoucG9zaXRpb24ubGVmdCAtIHRoaXMub2JqLnRydW1wLnBvc2l0aW9uLmxlZnQpIC8gNTA7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlzdCkgPCAxLjApIHtcbiAgICAgICAgICAgICAgICB2YXIgZHggPSBkaXN0O1xuICAgICAgICAgICAgICAgIGlmKGR4ID4gMC4wMDMgJiYgZHggPCAwLjgpIHtcbiAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keCA9IGR4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keSA9IDEuMCAtIGR4O1xuICAgICAgICAgICAgICAgICAgICAvLyBzdGFydCB0aGUga2lja2luZyBzb3VuZFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZHggPCAwICYmIGR4ID4gLTAuOCkge1xuICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR4ID0gZHg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR5ID0gMS4wICsgZHg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhkeCkgPCAwLjAwMykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHRoaXMucmFuZG9taXplcigpO1xuICAgICAgICAgICAgICAgICAgICBkID0gZCAtIHRoaXMucmFuZG9taXplcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keCA9IGQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR5ID0gMS4wICsgZHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIHN0YXJ0IHRoZSBraWNraW5nIHNvdW5kXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHggPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gc3RhcnQgdGhlIGtpY2tpbmcgc291bmRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lLnNvdW5kUG9vbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc291bmRQb29sLnBsYXlTb3VuZCgna2ljaycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSAvLyBlbmQgb2YgZnVuY3Rpb25cblxuICAgIC8qKiBcbiAgICAgKiBAbWV0aG9kIHVua2lja1xuICAgICAqIEBkZXNjcmlwdGlvbiBzZXQgcG9zaXRpb24gb2YgUGxheWVyIGJhY2sgdG8gb3JpZ2luYWxcbiAgICAgKi9cbiAgICB1bmtpY2sgKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCA9IHRoaXMudW5LaWNrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgdGltZVN0YW1wUmFuZG9tXG4gICAgICogQGRlc2NyaXB0aW9uIHJhbmRvbWl6ZSBpbiBhIDEwLWZvbGQgcmFuZ2UgdXNpbmcgd2luZG93LnBlcmZvcm1hbmNlXG4gICAgICovXG5cdHRpbWVTdGFtcFJhbmRvbSAoKSB7XG5cdFx0dmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcbiAgICAgICAgfVxuXHRcdHZhciBudW0gPSAneHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgdmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkqMTApJTEwIHwgMDtcbiAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQvMTApO1xuICAgICAgICAgICAgcmV0dXJuIChjPT0neCcgPyByIDogKHImMHgzfDB4OCkpLnRvU3RyaW5nKDEwKTtcbiAgICAgICAgfSk7XG4gICAgICByZXR1cm4gbnVtIC8gMTAwMDA7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gKGluY2x1c2l2ZSkgYW5kIG1heCAoZXhjbHVzaXZlKVxuXHQgKiBAbGluayBcblx0ICovXG5cdGdldFJhbmRvbShtaW4sIG1heCkge1xuICAgXHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcblx0fVxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgdXBkYXRlUmFuZG9tV2Fsa1xuICAgICAqIEBkZXNjcmlwdGlvbiBnZW5lcmF0ZSBhIHJhbmRvbSB3YWxrLCB3aXRoIG9uZSBwcmVmZXJyZWQgZGlyZWN0aW9uLCBcbiAgICAgKiBnaXZpbmcgdGhlIG1lYW5kZXJpbmcgbW90aW9uIHVzZWQgYnkgQW5pbWFscy4gXG4gICAgICogQ2FsbCBpbiBhbiB1cGRhdGUgZnVuY3Rpb24gaW5zaWRlIHRoZSBDaGFyYWN0ZXIsIGUuZy4gXG4gICAgICogdXBkYXRlICgpIHsgdXBkYXRlUmFuZG9tV2FsaygpOyB9XG4gICAgICogVGhlIG1haW4gR2FtZSBvYmplY3QgYXV0b21hdGljYWxseSBmaW5kcyBhbmQgJ2ZpcmVzJyB1cGRhdGUoKSBmdW5jdGlvbiBpbiBcbiAgICAgKiBhbGwgQ2hhcmFjdGVycy5cbiAgICAgKi9cblx0dXBkYXRlUmFuZG9tV2FsayAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pbml0ZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuaW1hbCBSYW5kb21XYWxrIE5PVCBpbml0aWFsaXplZCAoZGlkIHlvdSBsZWF2ZSBvdXQgb2YgY29uc3RydWN0b3I/KScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cdFx0dGhpcy5jb3VudGVyKys7XG5cdFx0dGhpcy5kZWxheUNvdW50ZXIrKztcblx0XHRpZiAodGhpcy5kZWxheUNvdW50ZXIgPCB0aGlzLmRlbGF5KSB7XG5cdFx0XHQvL2NvbnNvbGUubG9nKCdkZWxheUNvdW50ZXI6JyArIHRoaXMuZGVsYXlDb3VudGVyICsgJyBNQVg6JyArIHRoaXMuTUFYX0RFTEFZKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cbiAgICAgICAgLy8gUGxheSBhbmltYWwncyBvcGVuaW5nIHNvdW5kIE9OQ0UgYXQgc3RhcnQgb2YgbW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RNb3ZlICYmIHRoaXMuZ2FtZS5zb3VuZFBvb2wpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zb3VuZFBvb2wucGxheVNvdW5kKHRoaXMub2JqLmNvbnN0cnVjdG9yLm5hbWUudG9Mb3dlckNhc2UoKSwgMC43KTtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RNb3ZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb21wdXRlIGR4IGFuZCBkeSBmcm9tIHJhbmRvbSB3YWxrLiBzdG9yZSBpbml0aWFsIHBvc2l0aW9uXG4gICAgICAgIHRoaXMub2xkTGVmdCA9IHRoaXMub2JqLnBvc2l0aW9uLmxlZnQ7XG4gICAgICAgIHRoaXMub2xkVG9wID0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xuXG4gICAgICAgIC8vIHRoaXMub2JqLmRpcmVjdGlvbiB3YXMgc2V0IGluIGluaXRSYW5kb21XYWxrXG5cdFx0c3dpdGNoICh0aGlzLm9iai5kaXJlY3Rpb24pIHtcblx0XHRcdGNhc2UgJ3RvcCc6XG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLnRvcCAtPSAodGhpcy5zcGVlZCArICgwLjEgKiB0aGlzLmdldFJhbmRvbSgxLCB0aGlzLnNwZWVkKSkpO1xuXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IC09IDEwICogKHRoaXMuZ2V0UmFuZG9tKC10aGlzLnNwZWVkLCB0aGlzLnNwZWVkLzIpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdsZWZ0Jzpcblx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24ubGVmdCAtPSAodGhpcy5zcGVlZCArICgwLjUgKiB0aGlzLmdldFJhbmRvbSgwLCB0aGlzLnNwZWVkKSkpO1xuXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi50b3AgKz0gMTAgKih0aGlzLmdldFJhbmRvbSgtdGhpcy5zcGVlZCwgdGhpcy5zcGVlZCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2JvdHRvbSc6XG4gXHRcdFx0XHRpZiAodGhpcy5jb3VudGVyID4gdGhpcy5NQVgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5NQVggPSB0aGlzLmdldFJhbmRvbSgyLCAxNSk7XG5cdFx0XHRcdFx0dGhpcy5uZXdMZWZ0ID0gKHRoaXMuZ2V0UmFuZG9tKC10aGlzLnNwZWVkLCB0aGlzLnNwZWVkKSk7XG5cdFx0XHRcdFx0dGhpcy5jb3VudGVyID0gMDtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXIgPiB0aGlzLk1BWCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuZ2V0UmFuZG9tKC0wLjIsIDEuMikgLy9OT1RFOiBmaW5lLXR1bmUgdGhpcyB0byBtYWtlIGdhbWVwbGF5IGhhcmRlclxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLnRvcCArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy5nZXRSYW5kb20oLTEsIDEpO1xuXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IC09IHIgKiB0aGlzLm5ld0xlZnQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncmlnaHQnOlxuXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ICs9ICh0aGlzLnNwZWVkICsgKDAuNSAqIHRoaXMuZ2V0UmFuZG9tKDAsIHRoaXMuc3BlZWQpKSk7XG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLnRvcCArPSAxMCAqICh0aGlzLmdldFJhbmRvbSgtdGhpcy5zcGVlZCwgdGhpcy5zcGVlZCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3JldHVybic6XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBjYXVzZWQgYnkgYSBUcnVtcCBjb2xsaWRlciBydW5uaW5nIGludG8gdGhlIEFuaW1hbFxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHJldHVybiBBbmltYWwgdG8gaXRzIGNhZ2VcbiAgICAgICAgICAgICAgICB0aGlzLm9iai5kaXJlY3Rpb24gPSAnY2FnZWQnO1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IHdyaXRlIHJldHVybiBhcmNcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NhZ2VkJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ID0gdGhpcy5zdGFydExlZnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wID0gdGhpcy5zdGFydFRvcDtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiB3aGVuIGNhZ2VkLCByZXNldCB1bnRpbCBpdCBpcyB1bmNhZ2VkIGFnYWluXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdNb3Zlci5zZXRQcmVmRGlyZWN0aW9uOiBpbnZhbGlkIGRpcmVjdGlvbjonICsgdGhpcy5vYmouZGlyZWN0aW9uKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG4gICAgICAgIC8vIENvbXB1dGUgZHggYW5kIGR5IGZvciBBbmltYWxzXG4gICAgICAgIHZhciB4ZGlzdCA9IHRoaXMub2xkTGVmdCAtIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQ7XG4gICAgICAgIHZhciB5ZGlzdCA9IHRoaXMub2xkVG9wIC0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xuICAgICAgICB2YXIgc3VtID0geGRpc3QgKyB5ZGlzdDtcbiAgICAgICAgaWYgKHN1bSA+IDAuMDAwMSkge1xuICAgICAgICAgICAgdGhpcy5vYmouZHggPSB4ZGlzdCAvIHN1bTtcbiAgICAgICAgICAgIHRoaXMub2JqLmR5ID0geWRpc3QgLyBzdW07ICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub2JqLmR4ID0gMDtcbiAgICAgICAgICAgIHRoaXMub2JqLmR5ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNhdmUgb3VyIG5ldyBwb3NpdGlvblxuICAgICAgICB0aGlzLm9sZExlZnQgPSB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0O1xuICAgICAgICB0aGlzLm9sZFRvcCA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKCcgZHg6JyArIHRoaXMub2JqLmR4ICsgJyBkeTonICsgdGhpcy5vYmouZHkgKyAnIHN1bTonICsgc3VtKVxuICAgIH1cblxuICAgIGNhbGN1bGF0ZUNvbGxpc2lvbiAodHJ1bXAsIGFuaW1hbCkge1xuICAgICAgICB2YXIgdyA9IHRoaXMub2JqLmltYWdlLmRhdGEud2lkdGg7XG4gICAgICAgIHZhciBoID0gdGhpcy5vYmouaW1hZ2UuZGF0YS5oZWlnaHQ7XG4gICAgICAgIHZhciBhdyA9IGFuaW1hbC5pbWFnZS5kYXRhLndpZHRoO1xuICAgICAgICB2YXIgYWggPSBhbmltYWwuaW1hZ2UuZGF0YS5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPCBhbmltYWwucG9zaXRpb24ubGVmdCArIGF3ICYmXG4gICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ICsgdyA+IGFuaW1hbC5wb3NpdGlvbi5sZWZ0ICYmXG4gICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPCBhbmltYWwucG9zaXRpb24udG9wICsgYWggJiZcbiAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCArIGggPiBhbmltYWwucG9zaXRpb24udG9wKSB7IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vZ2V0IFRydW1wIGNlbnRlcmFsIHBvaW50XG4gICAgICAgICAgICAgICAgdmFyIHRYQ2VudGVyID0gdGhpcy5vYmoucG9zaXRpb24ubGVmdCArIHcvMjtcbiAgICAgICAgICAgICAgICB2YXIgdFlDZW50ZXIgPSB0aGlzLm9iai5wb3NpdGlvbi50b3AgICsgaC8yO1xuXG4gICAgICAgICAgICAgICAgLy9nZXQgQW5pbWFsIGNlbnRyYWwgcG9pbnRcbiAgICAgICAgICAgICAgICB2YXIgYVhDZW50ZXIgPSBhbmltYWwucG9zaXRpb24ubGVmdCArIGF3LzI7XG4gICAgICAgICAgICAgICAgdmFyIGFZQ2VudGVyID0gYW5pbWFsLnBvc2l0aW9uLnRvcCArIGFoLzI7XG5cbiAgICAgICAgICAgICAgICAvL2NvbXB1dGUgeCBhbmQgeSB2ZWN0b3IgYmV0d2VlbiBjZW50ZXJzXG4gICAgICAgICAgICAgICAgdmFyIGNYRGlmZiA9IHRYQ2VudGVyIC0gYVhDZW50ZXI7XG4gICAgICAgICAgICAgICAgdmFyIGNZRGlmZiA9IHRZQ2VudGVyID0gYVlDZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAvLyBUcnVtcCBkb2Vzbid0IHJlYWN0IGlmIG5vdCBtb3ZpbmcgKGV2ZW4gaWYgYW5pbWFsIGRvZXMpXG4gICAgICAgICAgICAgICAgaWYgKHRydW1wLnNwZWVkICE9IDAgJiYgdHJ1bXAuZHggIT0gMCAmJiB0cnVtcC5keSAhPSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbW92ZSBvYmplY3Qgc28gaXQgaXNuJ3QgY29sbGlkaW5nIGFueW1vcmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNYRGlmZiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVtcC5wb3NpdGlvbi54ICs9IChjWERpZmYgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydW1wLnBvc2l0aW9uLnggLT0gKGNYRGlmZiArIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNZRGlmZiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVtcC5wb3NpdGlvbi55ICs9IChjWURpZmYgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydW1wLnBvc2l0aW9uLnkgLT0gKGNZRGlmZiArIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbm9ybWFsaXplIG5ldyB2ZWN0b3JzXG4gICAgICAgICAgICAgICAgICAgIHRydW1wLmR4ID0gLWNYRGlmZiAvIGNZRGlmZjtcbiAgICAgICAgICAgICAgICAgICAgdHJ1bXAuZHkgPSAtY1lEaWZmIC8gY1hEaWZmO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJvdW5kaW5nIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZGlmID0gTWF0aC5hYnModHJ1bXAuZHggKyB0cnVtcC5keSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZGlmID4gMS4wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJ1bXAuZHggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydW1wLmR5IC09IGRkaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydW1wLmR5ICs9IGRkaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vZW5kIG9mIFRydW1wIGlzIG1vdmluZ1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2R4Ojo6Ojo6JyArIHRydW1wLmR4ICsgJyBkeTo6Ojo6OicgKyB0cnVtcC5keSlcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgdXBkYXRlUGluZ1BvbmdcbiAgICAgKiBAZGVzY3JpcHRpb24gbW92ZSBpbiBhIHBpbmctcG9uZyBzdHlsZS5cbiAgICAgKiBDYWxsIGluIGFuIHVwZGF0ZSBmdW5jdGlvbiBpbnNpZGUgdGhlIENoYXJhY3RlciwgZS5nLiBcbiAgICAgKiB1cGRhdGUgKCkgeyB1cGRhdGVSYW5kb21XYWxrKCk7IH1cbiAgICAgKiBUaGUgbWFpbiBHYW1lIG9iamVjdCBhdXRvbWF0aWNhbGx5IGZpbmRzIGFuZCAnZmlyZXMnIHVwZGF0ZSgpIGZ1bmN0aW9uIGluIFxuICAgICAqIGFsbCBDaGFyYWN0ZXJzLlxuICAgICAqIFBvc3NpYmxlIHVwZGF0ZXMgZm9yIG1vdGlvbjpcbiAgICAgKiAxLiBDb2xsaXNpb24gd2l0aCBhIFBsYXllciAodmlhIGtpY2soKSBtZXRob2QpIHN0YXJ0cyB0aGUgVHJ1bXAgY2hhcmFjdGVyIG1vdmluZ1xuICAgICAqIDIuIFRydW1wIHdpbGwgYm91bmNlIG9uIGFsbCB3YWxscyBFWENFUFQgdGhlIGJvdHRvbSB3YWxsXG4gICAgICogMy4gV2hlbiB0aGUgVHJ1bXAgaW50ZXJzZWN0cyB0aGUgYm90dG9tIHdhbGwsIHRoZXkgc3RvcCBtb3ZpbmdcbiAgICAgKiA0LiBJZiB0aGV5IGNvbGxpZGUgd2l0aCBhbiBBbmltYWwsIHRoZXkgYm91bmNlLCBhbmQgdGhlIEFuaW1hbCByZXR1cm5zIHRvIGl0cyBDYWdlLlxuICAgICAqL1xuICAgIHVwZGF0ZVBpbmdQb25nICgpIHtcblxuICAgICAgICBpZiAoIXRoaXMuaW5pdGVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUcnVtcCBQaW5nUG9uZyBOT1QgaW5pdGlhbGl6ZWQgKGRpZCB5b3UgbGVhdmUgb3V0IG9mIGNvbnN0cnVjdG9yPyknKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKCdkeDonICsgdGhpcy5vYmouZHggKyAnIGR5OicgKyB0aGlzLm9iai5keSk7XG4gICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgLT0gdGhpcy5vYmouc3BlZWQgKiB0aGlzLm9iai5keDtcbiAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wIC09IHRoaXMub2JqLnNwZWVkICogdGhpcy5vYmouZHk7XG5cbiAgICAgICAgLy9jaGVjayBib3VuZHMgKEFuaW1hbEFyZWEpXG4gICAgICAgIGlmICh0aGlzLmJvdW5kcykge1xuICAgICAgICAgICAgaWYgKHRoaXMub2JqLmltYWdlLmRhdGEpIHtcblxuICAgICAgICAgICAgICAgIHZhciB3ID0gdGhpcy5vYmouaW1hZ2UuZGF0YS53aWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgaCA9IHRoaXMub2JqLmltYWdlLmRhdGEuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgLy8gY2F0Y2ggY2FzZXMgd2hlcmUgVHJ1bXAgZ2V0cyBpbnRvIHRoZSBDYWdlIGFyZWFcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmoucG9zaXRpb24udG9wIDwgdGhpcy5ib3VuZHMudG9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5keSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLmR5ID0gLXRoaXMub2JqLmR5O1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPSB0aGlzLmJvdW5kcy50b3AgKyAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHJ1biB0aGlzIG9ubHkgaWYgd2UgYXJlIG1vdmluZyBkb3duIHRoZSBzY3JlZW5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmouZHkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi50b3AgPiAodGhpcy5vYmouc3RhcnRUb3AgLSAodGhpcy5vYmouZHkgKiB0aGlzLm9iai5zcGVlZCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMub2JqLmR5ID0gLXRoaXMub2JqLmR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wID0gdGhpcy5vYmouc3RhcnRUb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5keCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5keSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpc3QgPSB0aGlzLmJvdW5kcy5ib3R0b20gLSBoIC0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3BkID0gLXRoaXMub2JqLmR5ICogdGhpcy5vYmouc3BlZWQgKiA0O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBkZWNlbGVyYXRlIGJlZm9yZSBzdG9wcGluZyBhdCBib3R0b20gb2YgQW5pbWFsQXJlYVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdCA8IHNwZCAmJiBzcGQgPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5zcGVlZCAvPSAyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvL2VuZCBvZiBkeSBuZWdhdGl2ZSAoZ29pbmcgZG93bilcblxuICAgICAgICAgICAgICAgIC8vIGJvdW5jZSBvbiB0aGUgb3RoZXIgMyB3YWxsc1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IDwgdGhpcy5ib3VuZHMubGVmdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5keCA9IC10aGlzLm9iai5keDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLnRvcCA8IHRoaXMuYm91bmRzLnRvcCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5keSA9IC10aGlzLm9iai5keTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPiB0aGlzLmJvdW5kcy5yaWdodCAtIHcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouZHggPSAtdGhpcy5vYmouZHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgZW5jb3VuZGVyIGFuIGFuaW1hbCwgYm91bmNlLCBBTkQgJ2tpY2snIHRoZSBhbmltYWwgYmFjayBpbnRvIGl0cyBjYWdlXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLmFuaW1hbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMub2JqLmFuaW1hbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbmltYWwgPSB0aGlzLm9iai5hbmltYWxzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxjdWxhdGVDb2xsaXNpb24odGhpcy5vYmosIGFuaW1hbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCB0aGUgQW5pbWFsJ3Mgc3RhdGUgdG8gcmV0dXJuIGhvbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPj4+UkVUVVJOSU5HIEFOSU1BTCBUTyBDQUdFJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYWwuZGlyZWN0aW9uID0gJ3JldHVybic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnNwZWVkIDwgMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5zcGVlZCA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9icmVhayBvdXQgb2YgaG9yaXpvbnRhbCBtb3ZlXG4gICAgICAgIGlmICh0aGlzLm9iai5keSA8IDAuMDAxICYmIHRoaXMub2JqLmR4ID4gMC4wMDEpIHtcbiAgICAgICAgICAgIHZhciBkID0gdGhpcy5yYW5kb21pemVyKCk7XG4gICAgICAgICAgICB0aGlzLm9iai5keSArPSBkIC0gdGhpcy5yYW5kb21pemVyKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufSAvLyBlbmQgb2YgY2xhc3NcbiIsIi8qKiBcbiAqIFBsYXllci5qc1xuICogVXNlci1jb250cm9sbGVkIENoYXJhY3RlclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcblxuIC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIGltcG9ydCBNb3ZlciBmcm9tICcuL01vdmVyLmpzJztcbiBpbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XG4gLy8gRU5EIEFEREVEIFdFRUsgMTE8PDw8PDw8PDw8PDw8XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuXG4gXHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIFx0XHR0aGlzLm1vdmVyLmluaXRTbGV3KCk7XG4gIFx0XHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XHRcdFxuIFx0fVxuXG4gIFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG4gXHR1cGRhdGUgKCkge1xuIFx0XHR0aGlzLm1vdmVyLnVwZGF0ZVNsZXcoKTtcbiBcdH1cbiBcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcblxuXG4gfSIsIi8qKiBcbiAqIFBsYXllckFyZWEuanNcbiAqIFRoZSByZWdpb24gd2hlcmUgdGhlIFBsYXllciBjYW4gbW92ZS5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEFyZWFcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJBcmVhIGV4dGVuZHMgQXJlYSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTtcbiBcdH1cblxuIH0iLCIvKiogXG4gKiBTY29yZS5qc1xuICogRGlzcGxheSB1c2VyIHNjb3JlXG4gKiBAaW5oZXJpdHMgRHluYW1pY1RleHQsIFRleHQsIEluZm8sIEdhbWVQaWVjZVxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4vRHluYW1pY1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSBleHRlbmRzIER5bmFtaWNUZXh0IHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0fVxuXG59IiwiLyoqIFxuICogQGNsYXNzIFNjb3JlclxuICogQGRlc2NyaXB0aW9uIGNyZWF0ZSBhbiBvYmplY3Qgd2hpY2ggY2FudCBkZXRlY3QgdGhlIGVuZCBvZiB0aGUgZ2FtZSwgYW5kIFxuICogcm91dGUgb3ZlciB0byB0aGUgZW5kaW5nIHNjcmVlbi4gTWF5IGxvYWQgYSBTY29yZSB0ZXh0IG9iamVjdCB0byBkaXNwbGF5IGdhbWUgXG4gKiBzY29yZXMgb25zY3JlZW4uXG4gKiBAcGFyYW0gQXJyYXkgY2hhcmFjdGVyQXJyYXkgdGhlIGFycmF5IG9mIENoYXJhY3RlcnMgd2hvIG1pZ2h0IGJlIGludm9sdmVkIFxuICogaW4gZGV0ZXJtaW5pbmcgc2NvcmUuIFxuICovXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVyIHtcblxuIFx0Y29uc3RydWN0b3IgKGdhbWUpIHtcblxuIFx0XHR0aGlzLmdhbWUgPSBnYW1lO1xuXG4gXHRcdC8vIFNhdmUgbGlzdCBvZiBtb3ZpbmcgY2hhcmFjdGVycyAoUGxheWVyLCBBbmltYWxzLCBUcnVtcHMpXG4gXHRcdHRoaXMuY2hhcmFjdGVyQXJyYXkgPSB0aGlzLmdhbWUuZGlzcGxheUNoYXJhY3RlcnM7XG4gXHRcdHdpbmRvdy5jaGFyYWN0ZXJBcnJheSA9IHRoaXMuY2hhcmFjdGVyQXJyYXk7XG5cbiBcdFx0Ly8gU2F2ZSB0aGUgYm91bmRzIG9mIFBsYXllckFyZWEgKEFuaW1hbCBlbnRlcnMgPSBvdXQgb2YgZ2FtZSwgZXNjYXBlZClcbiBcdFx0dGhpcy5vdXRZID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10ucGxheWVyQXJlYXNbMF0ucG9zaXRpb24udG9wO1xuIFx0fVxuXG5cdC8qKiBcblx0ICogQG1ldGhvZCBnYW1lT3ZlclxuXHQgKiBAZGVzY3JpcHRpb24gQ2hlY2sgdGhlIHNjb3JlLCByZXR1cm4gdHJ1ZSBpZiBnYW1lIGlzIG92ZXIuIFxuXHQgKiBEZXRlcm1pbmVkIGJ5IHN0YXRlIG9mIEFuaW1hbHMuIEF0IGdhbWUgZW5kLCB0aGV5IGFyZSBhbGwgZWl0aGVyXG5cdCAqIDEuIEJhY2sgaW4gdGhlaXIgY2FnZXNcblx0ICogMi4gSW50byBvciBiZXlvbmQgdGhlIFBsYXllckFyZWFcblx0ICovXG5cdGdhbWVPdmVyICgpIHtcblx0XHR2YXIgYW5pbWFsc0RvbmUgPSAwLCBhbmltYWxzUmV0dXJuZWQgPSAwLCB0b3RBbmltYWxzID0gMDtcblxuXHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmNoYXJhY3RlckFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR2YXIgY2hhcmFjdGVyID0gdGhpcy5jaGFyYWN0ZXJBcnJheVtpXVxuXHRcdFx0aWYgKGNoYXJhY3Rlci5kaXJlY3Rpb24pIHtcblx0XHRcdFx0dG90QW5pbWFscysrO1xuXHRcdFx0XHQvL3Rlc3QgZm9yIHJldHVybmVkIHRvIGNhZ2Vcblx0XHRcdFx0c3dpdGNoIChjaGFyYWN0ZXIuZGlyZWN0aW9uKSB7XG5cdFx0XHRcdFx0Y2FzZSAncmV0dXJuJzpcblx0XHRcdFx0XHRjYXNlICdjYWdlZCc6XG5cdFx0XHRcdFx0XHRhbmltYWxzRG9uZSsrO1xuXHRcdFx0XHRcdFx0YW5pbWFsc1JldHVybmVkKys7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly90ZXN0IGZvciBvdXQgb2YgQW5pbWFsQXJlYSAoZXZhZGVkIHRoZSBQbGF5ZXIncyBUcnVtcClcblx0XHRcdFx0aWYoY2hhcmFjdGVyLnBvc2l0aW9uLnRvcCA+IHRoaXMub3V0WSkge1xuXHRcdFx0XHRcdGFuaW1hbHNEb25lKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoYW5pbWFsc0RvbmUgPT0gYW5pbWFsc1JldHVybmVkKSB7XG5cdFx0XHR0aGlzLndvbiA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMud29uID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHRvdEFuaW1hbHMgPT0gYW5pbWFsc0RvbmUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG4gfSIsIi8qKiBcbiAqIFNjcmVlbi5qc1xuICogR2VuZXJpYyBTY3JlZW4gb2JqZWN0XG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLmpzXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IElkZW50aXR5IGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyZWVuIGV4dGVuZHMgR2FtZVBpZWNlIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpOyAvL2luaXQgJ3BhcmVudCcgR2FtZVBpZWNlXG5cbiBcdFx0Ly8gc2F2ZSBhIHJlZmVyZW5jZSB0byBvdXIgcGFyZW50IEdhbWUgb2JqZWN0XG4gXHRcdHRoaXMuZ2FtZSA9IGNvbmZpZy5nYW1lO1xuXG4gXHRcdC8vIFNjcmVlbnMgYXJlIGRlZmluZWQgaW4gSFRNTCwgc28gc2F2ZSBhIHJlZmVyZW5jZSB0byBvdXIgRE9NIGlkXG4gXHRcdHRoaXMuZG9tSWQgPSBjb25maWcuaWQ7XG5cbiBcdFx0Ly8gc2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgRE9NIGVsZW1lbnQgd2UncmUgY29ubmVjdGVkIHRvXG4gXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kb21JZCk7XG5cbiBcdFx0Ly8gaW5zZXJ0IHRoZSBjb3B5cmlnaHQgaW5mbyBmcm9tIHRoZSBtYWluIEdhbWUgb2JqZWN0XG4gXHRcdHRoaXMuYWRkV2FybmluZygpO1xuIFx0fVxuXG4gXHQvLyBsb2FkIGEgYmFja2dyb3VuZCBpbWFnZSBpbnRvIHRoZSBTY3JlZW5cbiBcdGxvYWRCYWNrZ3JvdW5kIChwYXRoLCBjYWxsYmFjaykge1xuIFx0XHRjb25zb2xlLmxvZyhcImxvYWRpbmc6XCIgKyB0aGlzLmRvbUlkKTtcbiBcdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2UgPSBuZXcgU3RhdGljSW1hZ2UoXG4gXHRcdFx0e1xuIFx0XHRcdFx0bmFtZTogdGhpcy5uYW1lICsgJy1pbWFnZScsXG4gXHRcdFx0XHRkb21JZDogdGhpcy5pZCArICctaW1hZ2UnLFxuIFx0XHRcdFx0cGF0aDogcGF0aCxcbiBcdFx0XHRcdGNhbGxiYWNrOiBjYWxsYmFja1xuIFx0XHRcdH1cbiBcdFx0KTtcbiBcdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2UubG9hZEJhY2tncm91bmRJbWFnZSh0aGlzLmRvbSwgcGF0aCwgY2FsbGJhY2spO1xuIFx0fVxuXG4gXHQvLyBzaG93IGFuZCBoaWRlIHJlZ2lvbnMgb2YgdGhlIFNjcmVlblxuIFx0c2hvd1NjcmVlbiAoKSB7XG4gXHRcdGNvbnNvbGUubG9nKFwic2hvd2luZzpcIiArIHRoaXMuZG9tSWQpO1xuIFx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuIFx0fVxuXG4gXHRoaWRlU2NyZWVuICgpIHtcbiBcdFx0Y29uc29sZS5sb2coXCJoaWRpbmc6XCIgKyB0aGlzLmRvbUlkKTtcbiBcdFx0dGhpcy5kb20uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuIFx0fVxuXG4gXHRzaG93SGVhZGVyICgpIHtcbiBcdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gXHR9XG5cbiBcdGhpZGVIZWFkZXIgKCkge1xuXHRcdHRoaXMuZG9tLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiBcdH1cblxuIFx0c2hvd0Zvb3RlciAoKSB7XG5cdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiBcdH1cblxuIFx0aGlkZUZvb3RlciAoKSB7XG5cdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuIFx0fVxuXG4gXHRhZGRXYXJuaW5nICgpIHtcbiBcdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLmlubmVySFRNTCA9IHRoaXMuZ2FtZS53YXJuaW5nO1xuIFx0fVxuXG4gfTsiLCIvKiogXG4gKiBAY2xhc3MgU291bmRlci5qc1xuXG4gKiBAZGVzY3JpcHRpb24gcHJvdmlkZSBzb3VuZHMgdGhhdCBvdGhlciBvYmplY3RzIGNhbiBwbGF5LiBEZXRlY3RzIHRoZSBraW5kcyBcbiAqIG9mIGF1ZGlvIGZpbGVzIHRoZSB3ZWIgYnJvd2VyIGNhbiBwbGF5LCBhbmQgc2VydmVzIHRoZSBmaXJzdCBmaWxlIGl0IGZpbmRzIGluIFxuICogdGhlIC9hdWRpbyBmb2xkZXIgb2YgdGhlIGRpc3RyaWJ1dGlvbi4gQXVkaW8gZmlsZXMgYXJlIGFjY2Vzc2VkIGJ5IGN1c3RvbSBuYW1lcyBcbiAqIGZvciBwbGF5YmFjay5cblxuICogQWRhcHRlZCBmcm9tXG4gKiBAaHR0cDovL2Jsb2cuc2tsYW1iZXJ0LmNvbS9odG1sNS1jYW52YXMtZ2FtZS1odG1sNS1hdWRpby1hbmQtZmluaXNoaW5nLXRvdWNoZXMvXG5cbiAqIFNvdW5kZXIuanMgc2hvdWxkIGJlIGxvYWRlZCBpbiB0aGUgbWFpbiBHYW1lIGluaXRpYWxpemF0aW9uIHByb2Nlc3MuXG5cbiAqIEluIGFkZGl0aW9uLCB0aGUgZGlzdHJpYnV0aW9uIE1VU1QgaGF2ZSBhbiAvYXVkaW8gZGlyZWN0b3J5IHdpdGggZmlsZXMgaW4gbXVsdGlwbGUgXG4gKiBhdWRpbyBmb3JtYXRzOlxuICogTVAzICgubXAzKVxuICogT2dnLVZvcmJpcyAoLm9nZylcbiAqIFdBViAoLndhdilcblxuICogQXVkaW8gRWRpdG9yczpcbiAqIEF1ZGFjaXR5IChmcmVlKVxuICogQGxpbmsgaHR0cDovL3d3dy5hdWRhY2l0eXRlYW0ub3JnL1xuICogUHJvVG9vbHMgKCQkJClcbiAqIEBsaW5rIGh0dHA6Ly93d3cuYXZpZC5jb20vcHJvLXRvb2xzXG5cbiAqIEF1ZGlvIGNvbnZlcnRlcnM6XG4gKiBAbGluayBodHRwOi8vbWVkaWEuaW8vXG4gKiBAbGluayBodHRwczovL3NvdXJjZWZvcmdlLm5ldC9wcm9qZWN0cy9hdWRhY2l0eS9cbiAqIEBsaW5rIGh0dHA6Ly93d3cubWVkaWFodW1hbi5jb20vYXVkaW8tY29udmVydGVyL1xuICogQGxpbmsgaHR0cDovL3d3dy5odG1sNWF1ZGlvY29udmVydGVyLmNvbS9cbiBcbiAqIEF1ZGlvIFNhbXBsZXM6XG4gKiBAbGluayBodHRwOi8vd3d3Lmdyc2l0ZXMuY29tL2FyY2hpdmUvc291bmRzL2NhdGVnb3J5LzI1Lz9vZmZzZXQ9MjBcbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmZyZWVzb3VuZC5vcmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291bmRlciB7XG5cblx0Y29uc3RydWN0b3IgKCkge1xuXG5cdFx0Ly8gQ3JlYXRlIGFuIGFycmF5IG9mIGxvYWRlZCBzb3VuZHNcblx0XHR0aGlzLnBhdGggPSAnYXVkaW8vJztcblxuXHRcdHRoaXMuc291bmRzID0gW107XG5cdFx0dGhpcy5jaGVja0F1ZGlvKCk7XG5cdH1cblxuXHQvKiogXG5cdCAqIEBtZXRob2QgY2hlY2tBdWRpb1xuXHQgKiBAZGVzY3JpcHRpb24gc2VlIHdoaWNoIGF1ZGlvIGZpbGUgZm9ybWF0cyBjYW4gYmUgcGxheWVkIGJ5IHRoZSBicm93c2VyLlxuXHQgKi9cblx0Y2hlY2tBdWRpbyAoKSB7XG5cdFx0dmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xuXHRcdHZhciBib29sID0gZmFsc2U7XG5cblx0XHR0cnkge1xuXHRcdFx0aWYgKGJvb2wgPSAhIWVsZW0uY2FuUGxheVR5cGUpIHtcblx0XHRcdFx0Ym9vbCA9IG5ldyBCb29sZWFuKGJvb2wpO1xuXHRcdFx0XHRib29sLm9nZyA9IGVsZW0uY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywnJyk7XG5cdFx0XHRcdGJvb2wubXAzID0gZWxlbS5jYW5QbGF5VHlwZSgnYXVkaW8vbXBlZzsnKS5yZXBsYWNlKC9ebm8kLywnJyk7XG5cdFx0XHRcdGJvb2wud2F2ID0gZWxlbS5jYW5QbGF5VHlwZSgnYXVkaW8vd2F2OyBjb2RlY3M9XCIxXCInKS5yZXBsYWNlKC9ebm8kLywnJyk7XG5cdFx0XHRcdGJvb2wubTRhID0gKGVsZW0uY2FuUGxheVR5cGUoJ2F1ZGlvL3gtbTRhOycpIHx8IGVsZW0uY2FuUGxheVR5cGUoJ2F1ZGlvL2FhYzsnKSkucmVwbGFjZSgvXm5vJC8sJycpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0XHQvLyBsaXN0IHN1cHBvcnRlZCBhdWRpbyB0eXBlc1xuXHRcdFx0Ly9lbGVtID0gbnVsbDsgXG5cdFx0XHR0aGlzLnR5cGUgPSBib29sO1xuXG5cdFx0XHRmb3IgKHZhciBpIGluIHRoaXMudHlwZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhpICsgJyBzdXBwb3J0OicgKyB0aGlzLnR5cGVbaV0pO1xuXHRcdFx0fVxuXHR9XG5cblx0LyoqIFxuXHQgKiBAbWV0aG9kIHNldFNvdW5kXG5cdCAqIEBkZXNjcmlwdGlvbiBjYWxsYmFjayBmb3IgbG9hZGluZyBzb3VuZCwgYWRkcyB0byB0aGUgXG5cdCAqIHNvdW5kcyBhcnJheSBmb3IgbGF0ZXIgcGxheWJhY2suXG5cdCAqL1xuXHRzZXRTb3VuZCAoZSwgbmFtZSwgdm9sdW1lKSB7XG5cdFx0aWYgKCF2b2x1bWUpIHtcblx0XHRcdHZvbHVtZSA9IDAuNTtcblx0XHR9XG5cdFx0dGhpcy5zb3VuZHNbbmFtZV0gPSBlLnRhcmdldDtcblx0XHR0aGlzLnNvdW5kc1tuYW1lXS52b2x1bWUgPSB2b2x1bWU7XG5cdFx0Y29uc29sZS5sb2coJ2FkZGVkIHNvdW5kOicgKyBuYW1lKVxuXHR9XG5cblx0LyoqIFxuXHQgKiBAbWV0aG9kIHNvdW5kRXJyb3Jcblx0ICogQGRlc2NyaXB0aW9uIGNhbGxiYWNrIGZvciBmYWlsZWQgbG9hZHMgb2Ygc291bmQgZmlsZXMuXG5cdCAqL1xuXHRzb3VuZEVycm9yIChlLCBuYW1lKSB7XG5cdFx0Y29uc29sZS5lcnJvcignQXVkaW8gJyArIG5hbWUgKyAnIGZhaWVkIHRvIGxvYWQnKTtcblx0XHR0aGlzLnNvdW5kc1tuYW1lXSA9IG51bGw7XG5cdH1cblxuXHQvKiogXG5cdCAqIEBtZXRob2QgYWRkU291bmRcblx0ICogQGRlc2NyaXB0aW9uIGFkZCBhIG5ldyBzb3VuZC4gXG5cdCAqIEBwYXJhbSBTdHJpbmcgbmFtZSB0aGUgbmFtZSBvZiB0aGUgc291bmQuIFRoZSBzb3VuZCBuYW1lIFxuXHQgKiBtdXN0IG1hdGNoIHRoZSBmaWxlIGNvbnRhaW5pbmcgdGhlIGF1ZGlvLCBlLmcuIGZvciBhIHNvdW5kIGNhbGxlZCBcblx0ICogJ2tpY2snIHRoZXJlIG11c3QgYmUgYSBmaWxlIC9hdWRpby9raWNrLm1wMyBcblx0ICogUG9zc2libGUgZm9ybWF0cyAoY3JlYXRlIHRoZW0gYWxsIGR1cmluZyBwcm9kdWN0aW9uKVxuXHQgKiAtIE1QMyAoLm1wMylcblx0ICogLSBPZ2ctVm9yYmlzICgub2dnKVxuXHQgKiAtIFdBViAoLndhdilcblx0ICogQHBhcmFtIE51bWJlciB2b2x1bWUgdGhlIGxvdWRuZXNzIG9mIHRoZSBzb3VuZCwgYmV0d2VlbiAwIChzaWxlbnQpIFxuXHQgKiBhbmQgMS4wIChhcyBsb3VkIGFzIHBvc3NpYmxlKS5cblx0ICovXG5cdGFkZFNvdW5kIChuYW1lLCB2b2x1bWUpIHtcblx0XHRpZiAoIW5hbWUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3RyaWVkIHRvIGxvYWQgYXVkaW8gZmlsZSB3aXRob3V0IGEgbmFtZSBhbmQvb3IgcGF0aCwgYWJvcnRpbmcnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gdHJ5IGNyZWF0aW5nIHRoZSBzb3VuZFxuXHRcdHZhciBzbmQ7XG5cdFx0Ly8gZ2V0IHRoZSBleHRlbnNpb24gYW5kIHJlbWFpbmluZyBwYXRoXG5cdFx0Zm9yICh2YXIgaSBpbiB0aGlzLnR5cGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLnR5cGVbJyArIGkgKyAnXT0nICsgdGhpcy50eXBlW2ldKTtcblx0XHRcdGlmICh0aGlzLnR5cGVbaV0gIT0gXCJcIikgeyAvL3JldHVybmVkIGRhdGFUeXBlIGZvciBlbGVtLmNhblBsYXlUeXBlKC4uLilcblxuXHRcdFx0XHR2YXIgZmlsZVBhdGggPSB0aGlzLnBhdGggKyBuYW1lICsgJy4nICsgaTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJUUllJTkcgVE8gTE9BRDpcIiArIHRoaXMucGF0aCArIG5hbWUgKyAnLicgKyBpKTtcblxuXHRcdFx0XHQvLyBDcmVhdGUgdGhlIEF1ZGlvIG9iamVjdFxuXHRcdFx0XHRzbmQgPSBuZXcgQXVkaW8oZmlsZVBhdGgpO1xuXG5cdFx0XHRcdC8vIHRyYXAgbG9hZCBhbmQgZXJyb3IgZXZlbnRzXG5cdFx0XHRcdHNuZC5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRkYXRhJywgXG5cdFx0XHRcdFx0ZXZlbnQgPT4gdGhpcy5zZXRTb3VuZChldmVudCwgbmFtZSwgdm9sdW1lKSwgZmFsc2UpO1xuXG5cdFx0XHRcdHNuZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIFxuXHRcdFx0XHRcdGV2ZW50ID0+IHRoaXMuc291bmRFcnJvcihldmVudCwgbmFtZSksIGZhbHNlKTtcblxuXHRcdFx0XHQvLyBzdGFydCBsb2FkaW5nIHRoZSBzb3VuZFxuXHRcdFx0XHRzbmQubG9hZCgpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFzbmQpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3NvdW5kIGZpbGUgZm9yOicgKyBuYW1lICsgJyBub3QgZm91bmQgaW4gYXVkaW8nKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKiBcblx0ICogQG1ldGhvZCBwbGF5U291bmRcblx0ICogQGRlc2NyaXB0aW9uXG5cdCAqIEBwYXJhbXMgU3RyaW5nIG5hbWUgdGhlIG5hbWUgb2YgdGhlIHNvdW5kLiBNdXN0IG1hdGNoIHRoZSBmaWxlbmFtZSBcblx0ICogV0lUSE9VVCBhIGZpbGUgZXh0ZW5zaW9uIGluIHRoZSAvYXVkaW8gZm9sZGVyIGZvciB0aGUgZ2FtZS5cblx0ICovXG5cdHBsYXlTb3VuZCAobmFtZSkge1xuXHRcdC8vIENoZWNrIGZvciBubyBzb3VuZHMgKGxvYWRlZCBzb3VuZCBpbiBnYW1lLmpzIHdpdGhvdXQgZG9pbmcgbmV3IFNvdW5kZXIoKSApXG5cdFx0aWYgKHRoaXMuc291bmRzW25hbWVdKSB7XG5cdFx0XHR0aGlzLnNvdW5kc1tuYW1lXS5wbGF5KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ25vIHNvdW5kIGZpbGUgd2l0aCBuYW1lOicgKyBuYW1lICsgJyBpbiBhdWRpbyBmb2xkZXIgKE9SIHlvdSBjYWxsZWQgYWRkU291bmQgQkVGT1JFIHlvdSBkaWQgbmV3IFNvdW5kZXIoKSBpbiB5b3VyIGNvZGUuLi4nKTtcblx0XHR9XG5cdH1cblxuXHQvKiogXG5cdCAqIEBtZXRob2QgZmlsZUV4aXN0c1xuXHQgKiBAZGVzY3JpcHRpb24gZGV0ZWN0IGlmIGEgZmlsZSBpcyBwcmVzZW50IG9uIHRoZSBzZXJ2ZXIuIFVzZXMgYW4gXG5cdCAqIHN5bmNocm9ub3VzIEFqYXggdGVjaG5pcXVlLCBzbyBTTE9XIGlmIHlvdSBhcmUgdXNpbmcgYSByZW1vdGUgc2VydmVyLiBcblx0ICogTm8gY29tcGFyYWJsZSBtZXRob2QgZXhpc3RzIGZvciBkZXRlcm1pbmluZyBpZiBhIGZvbGRlciBleGlzdHMgaW4gXG5cdCAqIGNsaWVudC1zaWRlIHZhbmlsbGEgSmF2YVNjcmlwdC5cblx0ICogQHBhcmFtIFN0cmluZyB1cmwgdGhlIHBhdGggdG8gdGhlIGZpbGUgb24gdGhlIHNlcnZlci5cblx0ICovXG5cdGZpbGVFeGlzdHModXJsKSB7XG5cdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdHhoci5vcGVuKCdIRUFEJywgdXJsLCBmYWxzZSk7XG5cdFx0eGhyLnNlbmQoKTtcblx0XHRpZiAoeGhyLnN0YXR1cyA9PSAnNDA0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblxufSAvLyBlbmQgb2YgY2xhc3MiLCIvKiogXG4gKiBTdGFydFNjcmVlbi5qc1xuICogT3BlbmluZyBzY3JlZW4gZm9yIGdhbWUuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBTY3JlZW5cbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcblxuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG5pbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9JZGVudGl0eS5qcyc7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL0JhY2tncm91bmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydFNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cblx0XHQvLyB0aGlzLmRvbSBkZWZpbmVkIGluIFNjcmVlblxuXG5cdFx0Ly8gTG9hZCBTdGFydFNjcmVlbiBzdWItb2JqZWN0c1xuXHRcdHRoaXMubG9hZEJhY2tncm91bmQoJ2ltZy9zY3JlZW5zL3N0YXJ0LXNjcmVlbi5wbmcnKTtcblxuXHRcdC8vIGxvYWQgaWRlbnRpdHkgaW1hZ2Vcblx0XHR0aGlzLmxvYWRJZGVudGl0eSgpO1xuXG5cdFx0Ly8gbG9hZCBpbnN0cnVjdGlvbnNcblx0XHR0aGlzLmxvYWRJbnN0cnVjdGlvbnMoKTtcblxuXHRcdC8vIE1ha2UgdGhlIHN0YXJ0IGJ1dHRvbiBvcGVuIHRoZSBtYWluIGdhbWUgc2NyZWVuXG5cdFx0dGhpcy5iaW5kU3RhcnQoKTtcblx0fVxuXG5cdGxvYWRJZGVudGl0eSAoKSB7XG5cdFx0dGhpcy5pZGVudGl0eSA9IG5ldyBJZGVudGl0eShcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ2lkZW50aXR5JywgXG5cdFx0XHRcdGRvbUlkOiAnc3RhcnQtc2NyZWVuLWlkZW50aXR5Jyxcblx0XHRcdFx0cGF0aDogJ2ltZy9pZGVudGl0eS9sb2dvLnBuZycsIFxuXHRcdFx0XHRhdXRob3I6ICdwZXRlIG1hcmtpZXdpY3onLCBcblx0XHRcdFx0c291cmNlOiAncGx5b2p1bXAnXG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdC8vIHNldCBwb3NpdGlvbiBvZiBJZGVudGl0eVxuXHRcdHRoaXMuaWRlbnRpdHkuc2V0RE9NUG9zaXRpb24gKFxuXHRcdFx0e1xuXHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdGxlZnQ6IDBcblx0XHRcdH1cblx0XHQpO1xuXG5cdH1cblxuXHRsb2FkSW5zdHJ1Y3Rpb25zICgpIHtcblxuXHRcdHRoaXMuaW5zdHJ1Y3Rpb25zID0gbmV3IFN0YXRpY1RleHQoXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdnYW1lIGluc3RydWN0aW9ucycsXG5cdFx0XHRcdGRvbUlkOiAnaW5zdHJ1Y3Rpb25zJyxcblx0XHRcdFx0dGV4dDogJ1BsYXkgdG8gd2luLiBUaGF0IGlzIGFsbCBUcnVtcCBjYXJlcyBhYm91dCwgYW5kIHNvIHNob3VsZCB5b3UuJ1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmluc3RydWN0aW9ucy5zZXRET01Qb3NpdGlvbihcblx0XHRcdHtcblx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0fVxuXHRcdCk7XG5cblx0fVxuXG5cdGJpbmRTdGFydCAoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJpbiBiaW5kU3RhcnQsIHRoaXMuZ2FtZTpcIiArIHRoaXMuZ2FtZSlcblx0XHQvLyB3ZSB1c2UgYmluZCgpIHRvIGxpbmsgdGhlIGZ1bmN0aW9uIGJlbG93IHRvIFN0YXJ0U2NyZWVuIChvdGhlcndpc2UsIGl0IHRoaW5rcyBpdCBpcyBpbnNpZGUgd2luZG93KVxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydC1zY3JlZW4tcGxheS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFxuXHRcdFx0ZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0Ly9hbGVydChcImluIGhhbmRsZXIsIGdhbWU6XCIgKyB0aGlzLmdhbWUpXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy5nYW1lLnN0YXJ0R2FtZSgpO1xuXG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG59IiwiLyoqIFxuICogU3RhdGljSW1hZ2UuanNcbiAqIEltYWdlLXN0eWxlIEluZm9ybWF0aW9uIHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgb25jZSB0aGUgZ2FtZSBpcyBsb2FkZWRcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aWNJbWFnZSBleHRlbmRzIEltYWdlIHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblxuXHRcdHRoaXMuc3RhdGljID0gdHJ1ZTtcblx0fVxuXG59XG4iLCIvKiogXG4gKiBTdGF0aWNUZXh0LmpzXG4gKiBUZXh0IHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgYWZ0ZXIgbG9hZGVkIGJ5IHRoZSBnYW1lXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpY1RleHQgZXh0ZW5kcyBUZXh0IHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblxuXHRcdHRoaXMuc3RhdGljID0gdHJ1ZTtcblxuXHR9XG5cbn1cbiIsIi8qKiBcbiAqIFRleHQuanNcbiAqIENyZWF0ZXMgYSB0ZXh0LXR5cGUgSW5mbyBvYmplY3RcbiAqIEBpbmhlcml0cyBJbmZvLCBHYW1lUGllY2VcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgSW5mbyB7XG5cbiBcdGNvbnN0cnVjdG9yKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuXG4gXHRcdC8vIHNldCB0aGUgdGV4dFxuIFx0XHR0aGlzLnNldFRleHQoY29uZmlnLnRleHQpO1xuXG4gXHRcdC8vIHNldCB0aGUgRE9NSWRcbiBcdFx0dGhpcy5hZGRUb0RPTShjb25maWcuZG9tSWQpO1xuIFx0fVxuXG4gXHRzZXRUZXh0ICh0eHQpIHtcbiBcdFx0dGhpcy50ZXh0ID0gdHh0O1xuIFx0fVxuXG4gXHRhZGRUb0RPTSAoZG9tSWQpIHtcblxuIFx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuIFx0XHR0aGlzLmRvbS5pZCA9IG5hbWUgKyAnLVRleHQnO1xuIFx0XHR0aGlzLmRvbS5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XG5cbiBcdFx0Ly8gY29udGFpbmVyXG4gXHRcdHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21JZCk7XG5cbiBcdFx0Ly8gYWRkIHRvIHRoZSBET01cbiBcdFx0Y29udGFpbmVyLmluc2VydEJlZm9yZSh0aGlzLmRvbSwgY29udGFpbmVyLmNoaWxkTm9kZXNbMF0pO1xuXG5cdH1cblxuIH0iLCIvKiogXG4gKiBUaWdlci5qc1xuICogQSBUaWdlciwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpZ2VyIGV4dGVuZHMgQW5pbWFsIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcbiBcdH1cbiB9IiwiLyoqIFxuICogVHJ1bXAuanNcbiAqIFRoZSBiYWxsLWxpa2UgQ2hhcmFjdGVyIHlvdSBraWNrIGludG8gQW5pbWFsc1xuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcblxuIC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIGltcG9ydCBNb3ZlciBmcm9tICcuL01vdmVyLmpzJztcbiBpbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XG4gLy8gRU5EIEFEREVEIFdFRUsgMTE8PDw8PDw8PDw8PDw8XG4gXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJ1bXAgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuXG4gXHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcbiBcdFx0Ly9UcnVtcCBnZXRzIFBpbmdQb25nIG1vdGlvblxuIFx0XHR0aGlzLm1vdmVyLmluaXRQaW5nUG9uZygwKTtcbiBcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcblxuIFx0fVxuXG4gXHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcbiBcdHVwZGF0ZSAoKSB7XG4gXHRcdHRoaXMubW92ZXIudXBkYXRlUGluZ1BvbmcoKTtcbiBcdH1cbiBcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcblxuIH0iLCIvKiogXG4gKiBDcmVhdGUgdGhlIGdhbWUuIEltcG9ydCB0aGUgcHJpbWFyeSBjbGFzc2VzLCBhbmQgJ2NvbXBvc2l0ZScgXG4gKiB0aGUgb3ZlcmFsbCBHYW1lIG9iamVjdCBvdXQgb2YgaW5zdGFuY2VzIG9mIHRoZSBjbGFzc2VzLlxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuLy9UaGUgZW50aXJlIGdhbWVcbmltcG9ydCBHYW1lIGZyb20gJy4vR2FtZS5qcyc7XG5cbi8vU2NyZWVuIGluaGVyaXRhbmNlXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcbmltcG9ydCBTdGFydFNjcmVlbiBmcm9tICcuL1N0YXJ0U2NyZWVuLmpzJztcbmltcG9ydCBHYW1lU2NyZWVuIGZyb20gJy4vR2FtZVNjcmVlbi5qcyc7XG5pbXBvcnQgRW5kU2NyZWVuIGZyb20gJy4vRW5kU2NyZWVuLmpzJztcblxuLy9JbmZvIGluaGVyaXRhbmNlXG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9JZGVudGl0eS5qcyc7XG5pbXBvcnQgSW5zdHJ1Y3Rpb25zIGZyb20gJy4vSW5zdHJ1Y3Rpb25zLmpzJztcbmltcG9ydCBEeW5hbWljVGV4dCBmcm9tICcuL0R5bmFtaWNUZXh0LmpzJztcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlLmpzJztcblxuLy9DaGFyYWN0ZXIgaW5oZXJpdGFuY2VcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuaW1wb3J0IFRydW1wIGZyb20gJy4vVHJ1bXAuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcyc7XG5pbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcbmltcG9ydCBMaW9uIGZyb20gJy4vTGlvbi5qcyc7XG5pbXBvcnQgVGlnZXIgZnJvbSAnLi9UaWdlci5qcyc7XG5pbXBvcnQgQmVhciBmcm9tICcuL0JlYXIuanMnO1xuaW1wb3J0IEdvcmlsbGEgZnJvbSAnLi9Hb3JpbGxhLmpzJztcbmltcG9ydCBIZWFsdGggZnJvbSAnLi9IZWFsdGguanMnO1xuXG4vL0FyZWEgaW5oZXJpdGFuY2UuXG5pbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuaW1wb3J0IENhZ2UgZnJvbSAnLi9DYWdlLmpzJztcbmltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4vQW5pbWFsQXJlYS5qcyc7XG5pbXBvcnQgUGxheWVyQXJlYSBmcm9tICcuL1BsYXllckFyZWEuanMnO1xuXG4vL1Rlc3QgZmlsZSAodmVyeSBzaW1wbGUgdGVzdHJ1bm5lcilcbmltcG9ydCBUZXN0cyBmcm9tICcuLi8uLi90ZXN0cy9UZXN0cy5qcyc7XG5cbi8qKiBcbiAqIFNldCB1cCB0ZXN0cy5cbiAqL1xudmFyIG15VGVzdHMgPSBuZXcgVGVzdHMoKTtcblxuLyoqXG4gKiBTZXQgdXAgdGhlIEdhbWVcbiAqL1xudmFyIG15R2FtZSA9IG5ldyBHYW1lKHtuYW1lOiBcIlpvb0tpbGxTb2NjZXJcIn0pO1xuXG4vKiogXG4gKiBFWFBPUlQgVE8gV0VCIENPTlNPTEVcbiAqIFRvIG1ha2Ugc29tZXRoaW5nIHZpc2libGUgaW4gV2ViIGNvbnNvbGUgZm9yIGRlYnVnZ2ludCwgYXR0YWNoIHRvIHdpbmRvdyBvYmplY3RcbiAqIE5PVEU6IFByb2Zlc3Npb25hbCBjb2RlIHVzZXMgc3BlY2lhbGl6ZWQgdGVzdGluZyBtb2R1bGVzIGxpa2UgTW9jaGEsIEthcm1hLCBhbmQgXG4gKiBzaW1pbGFyIHRlc3RpbmcgbGlicmFyaWVzLlxuICovXG5cbi8vIHdlIGNhbiBydW4gdGhpcyB0ZXN0IG1hbnVhbGx5IHdpdGggdGVzdHMucnVuKCk7XG53aW5kb3cudGVzdHMgPSBteVRlc3RzO1xuXG4vLyBtYWtlIHRoZSBnYW1lIG9iamVjdCB2aXNpYmxlIHNvIHdlIGNhbiBpbnNwZWN0IGl0Llxud2luZG93LmdhbWUgPSBteUdhbWU7XG5cbmNvbnNvbGUubG9nKCdaT09LSUxMU09DQ0VSIEdhbWUgaW5pdGlhbGl6ZWQuIEFjY2VzcyBnYW1lIHZpYSBcImdhbWVcIi4gVXNlIFRlc3RzLnJ1bigpIHRvIHRlc3QuJylcblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuLi9tb2R1bGVzL2pzL0dhbWVQaWVjZS5qcyc7XG5cbi8vVGhlIGVudGlyZSBnYW1lXG5pbXBvcnQgR2FtZSBmcm9tICcuLi9tb2R1bGVzL2pzL0dhbWUuanMnO1xuXG4vL1NjcmVlbiBpbmhlcml0YW5jZVxuaW1wb3J0IFNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL1NjcmVlbi5qcyc7XG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSAnLi4vbW9kdWxlcy9qcy9TdGFydFNjcmVlbi5qcyc7XG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL0dhbWVTY3JlZW4uanMnO1xuaW1wb3J0IEVuZFNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL0VuZFNjcmVlbi5qcyc7XG5cbi8vSW5mbyBpbmhlcml0YW5jZVxuaW1wb3J0IEluZm8gZnJvbSAnLi4vbW9kdWxlcy9qcy9JbmZvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4uL21vZHVsZXMvanMvVGV4dC5qcyc7XG5pbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuLi9tb2R1bGVzL2pzL1N0YXRpY1RleHQuanMnO1xuaW1wb3J0IElkZW50aXR5IGZyb20gJy4uL21vZHVsZXMvanMvSWRlbnRpdHkuanMnO1xuaW1wb3J0IEluc3RydWN0aW9ucyBmcm9tICcuLi9tb2R1bGVzL2pzL0luc3RydWN0aW9ucy5qcyc7XG5pbXBvcnQgRHluYW1pY1RleHQgZnJvbSAnLi4vbW9kdWxlcy9qcy9EeW5hbWljVGV4dC5qcyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi4vbW9kdWxlcy9qcy9TY29yZS5qcyc7XG5cbi8vQ2hhcmFjdGVyIGluaGVyaXRhbmNlXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4uL21vZHVsZXMvanMvQ2hhcmFjdGVyLmpzJztcbmltcG9ydCBUcnVtcCBmcm9tICcuLi9tb2R1bGVzL2pzL1RydW1wLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vbW9kdWxlcy9qcy9QbGF5ZXIuanMnO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuLi9tb2R1bGVzL2pzL0FuaW1hbC5qcyc7XG5pbXBvcnQgTGlvbiBmcm9tICcuLi9tb2R1bGVzL2pzL0xpb24uanMnO1xuaW1wb3J0IFRpZ2VyIGZyb20gJy4uL21vZHVsZXMvanMvVGlnZXIuanMnO1xuaW1wb3J0IEJlYXIgZnJvbSAnLi4vbW9kdWxlcy9qcy9CZWFyLmpzJztcbmltcG9ydCBHb3JpbGxhIGZyb20gJy4uL21vZHVsZXMvanMvR29yaWxsYS5qcyc7XG5pbXBvcnQgSGVhbHRoIGZyb20gJy4uL21vZHVsZXMvanMvSGVhbHRoLmpzJztcblxuLy9BcmVhIGluaGVyaXRhbmNlLlxuaW1wb3J0IEFyZWEgZnJvbSAnLi4vbW9kdWxlcy9qcy9BcmVhLmpzJztcbmltcG9ydCBDYWdlIGZyb20gJy4uL21vZHVsZXMvanMvQ2FnZS5qcyc7XG5pbXBvcnQgQW5pbWFsQXJlYSBmcm9tICcuLi9tb2R1bGVzL2pzL0FuaW1hbEFyZWEuanMnO1xuaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi4vbW9kdWxlcy9qcy9QbGF5ZXJBcmVhLmpzJztcblxuLyoqIFxuICogVEVTVEJFRCAtIFRlc3QgYWxsIG91ciBvYmplY3RzLiBUaGlzIGlzIGEgdmVyeSBiYXNpYyB0ZXN0aW5nIHN5c3RlbS4gXG4gKiBOT1RFOiBQcm9mZXNzaW9uYWwgY29kZSB1c2VzIHRlc3RpbmcgbGlicmFyaWVzIGxpa2UgS2FybWEgYW5kIE1vY2hhLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0cyB7XG5cblx0Y29uc3RydWN0b3IgKCkge1xuXHR9XG5cblx0Ly8gQmVjYXVzZSB3ZSBtYWtlIHRoZXNlIG9iamVjdHMgd2l0aCAndmFyJyB0aGV5IGFyZSBzY29wZWQgdG8gdGhlIHJ1bigpIGZ1bmN0aW9uLlxuXHRydW4gKCkge1xuXG5cdFx0dmFyIGNvbmZpZyA9IHtuYW1lOidGb3Jlc3QgVHJ1bXAgb3IgRG9uYWxkIEd1bXAgcnVseid9O1xuXG5cdFx0Ly8gTWFrZSBzb21lIHRlc3QgZ2FtZSBvYmplY3RzXG5cdFx0dmFyIGdhbWUgPSBuZXcgR2FtZShjb25maWcpO1xuXHRcdGNvbnNvbGUubG9nKGdhbWUuZ2V0TmFtZSgpKTtcblxuXHRcdC8vdGVzdCBHYW1lIE9iamVjdFxuXHRcdHZhciBteUdhbWUgPSBuZXcgR2FtZSh7bmFtZTogXCJab29LaWxsU29jY2VyXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUdhbWUuZ2V0TmFtZSgpKTtcblxuXHRcdC8vb3RoZXIgb2JqZWN0c1xuXHRcdHZhciBteVNjcmVlbiA9IG5ldyBTY3JlZW4oe25hbWU6IFwiT3BlbmluZyBTY3JlZW5cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15U2NyZWVuLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlTdGFydFNjcmVlbiA9IG5ldyBTdGFydFNjcmVlbih7bmFtZTogXCJTdGFydCBTY3JlZW5cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15U3RhcnRTY3JlZW4uZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUdhbWVTY3JlZW4gPSBuZXcgR2FtZVNjcmVlbih7bmFtZTogXCJHYW1lIFNjcmVlblwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlHYW1lU2NyZWVuLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlFbmRTY3JlZW4gPSBuZXcgRW5kU2NyZWVuKHtuYW1lOiBcIkVuZCBTY3JlZW5cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15RW5kU2NyZWVuLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlJbmZvID0gbmV3IEluZm8oe25hbWU6IFwiR2VuZXJpYyBJbmZvcm1hdGlvblwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlJbmZvLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlUZXh0ID0gbmV3IFRleHQoe25hbWU6IFwiR2VuZXJpYyBUZXh0IE9iamVjdFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlUZXh0LmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlTdGF0aWNUZXh0ID0gbmV3IFN0YXRpY1RleHQoe25hbWU6IFwiR2VuZXJpYyBTdGF0aWMgVGV4dCBPYmplY3RcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15U3RhdGljVGV4dC5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15SWRlbnRpdHkgPSBuZXcgSWRlbnRpdHkoe25hbWU6IFwiR2VuZXJpYyBJZGVudGl0eSBPYmplY3RcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15SWRlbnRpdHkuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUluc3RydWN0aW9ucyA9IG5ldyBJbnN0cnVjdGlvbnMoe25hbWU6IFwiR2VuZXJpYyBJbnN0cnVjdGlvbnMgT2JqZWN0XCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUluc3RydWN0aW9ucy5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15RHluYW1pY1RleHQgPSBuZXcgRHluYW1pY1RleHQoe25hbWU6IFwiR2VuZXJpYyBEeW5hbWljIFRleHQgT2JqZWN0XCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUR5bmFtaWNUZXh0LmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlTY29yZSA9IG5ldyBTY29yZSh7bmFtZTogXCJzY29yZXMuLi5cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15U2NvcmUuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUNoYXJhY3RlciA9IG5ldyBDaGFyYWN0ZXIoe25hbWU6IFwiR2VuZXJpYyBDaGFyYWN0ZXJcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15Q2hhcmFjdGVyLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlUcnVtcCA9IG5ldyBUcnVtcCh7bmFtZTogXCJEb25hbGQgVHJ1bXBcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15VHJ1bXAuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVBsYXllciA9IG5ldyBQbGF5ZXIoe25hbWU6IFwiRW5kIFVzZXJcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15UGxheWVyLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlBbmltYWwgPSBuZXcgQW5pbWFsKHtuYW1lOiBcIkdlbmVyaWMgQW5pbWFsXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUFuaW1hbC5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15TGlvbiA9IG5ldyBMaW9uKHtuYW1lOiBcIkNvd2FyZGx5IHRoZSBMaW9uXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUxpb24uZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVRpZ2VyID0gbmV3IFRpZ2VyKHtuYW1lOiBcIkNob21wZXIgdGhlIFRpZ2VyXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVRpZ2VyLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlCZWFyID0gbmV3IEJlYXIoe25hbWU6IFwiTWF1bGVyIHRoZSBCZWFyXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUJlYXIuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUdvcmlsbGEgPSBuZXcgR29yaWxsYSh7IG5hbWU6IFwiU3B1bmt5IHRoZSBHb3JpbGxhXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUdvcmlsbGEuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUhlYWx0aCA9IG5ldyBIZWFsdGgoe25hbWU6IFwiT25lIEhlYWx0aCBLaXRcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15SGVhbHRoLmdldE5hbWUoKSk7XG5cblx0XHQvL0FyZWEgaW5oZXJpdGFuY2UuXG5cdFx0dmFyIG15QXJlYSA9IG5ldyBBcmVhKHtuYW1lOiBcIkdlbmVyaWMgQXJlYVwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlBcmVhLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlDYWdlID0gbmV3IENhZ2Uoe25hbWU6IFwiR2VuZXJpYyBBcmVhXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUNhZ2UuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUFuaW1hbEFyZWEgPSBuZXcgQW5pbWFsQXJlYSh7bmFtZTogXCJBbmltYWxBcmVhXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUFuaW1hbEFyZWEuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVBsYXllckFyZWEgPSBuZXcgUGxheWVyQXJlYSh7bmFtZTogXCJQbGF5ZXJBcmVhXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVBsYXllckFyZWEuZ2V0TmFtZSgpKTtcblx0fVxufVxuIl19
