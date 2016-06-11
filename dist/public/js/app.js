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
                    if (dx > 0 && dx < 0.7) {
                        this.obj.trump.dx = dx;
                        this.obj.trump.dy = 1.0 - dx;
                    } else if (dx < 0 && dx > -0.7) {
                        this.obj.trump.dx = dx;
                        this.obj.trump.dy = 1.0 + dx;
                    } else if (dx < 0.003) {
                        var d = this.randomizer();
                        d = d - this.randomizer();

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
            this.oldLeft = this.obj.position.left;
            this.oldTop = this.obj.position.top;

            switch (this.direction) {
                case 'top':
                    this.obj.position.top -= this.speed + 0.1 * this.getRandom(1, this.speed);
                    this.obj.position.left += 10 * this.getRandom(-this.speed, this.speed);
                    if (isNaN(this.obj.position.left)) {
                        //TODO: FIGURE OUT WHAT IS BEING COMPUTED AS NAN FOR THIS!!!!!
                        //TODO: ADD ANIMAL REBOUNT TO HOME CAGE
                        //TODO: ADD ANIMAL STAYS IN CAGE
                        //TODO: ANIMALS "roll" AROUND STATIONARY TRUMP
                    }
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

                            if (this.calculateCollision(this.obj, animal)) {}
                            //set the Animal's state to return home

                            /*
                            if (this.obj.position.left < animal.position.left + aw &&
                                this.obj.position.left + w > animal.position.left &&
                                this.obj.position.top < animal.position.top + ah &&
                                this.obj.position.top + h > animal.position.top) {                           
                                    this.calculateNewVelocities(this.obj, animal);
                                }
                            */
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzXFxqc1xcQW5pbWFsLmpzIiwibW9kdWxlc1xcanNcXEFuaW1hbEFyZWEuanMiLCJtb2R1bGVzXFxqc1xcQXJlYS5qcyIsIm1vZHVsZXNcXGpzXFxCYWNrZ3JvdW5kLmpzIiwibW9kdWxlc1xcanNcXEJlYXIuanMiLCJtb2R1bGVzXFxqc1xcQ2FnZS5qcyIsIm1vZHVsZXNcXGpzXFxDaGFyYWN0ZXIuanMiLCJtb2R1bGVzXFxqc1xcQ29sbGlkZXIuanMiLCJtb2R1bGVzXFxqc1xcRHluYW1pY1RleHQuanMiLCJtb2R1bGVzXFxqc1xcRW5kU2NyZWVuLmpzIiwibW9kdWxlc1xcanNcXEdhbWUuanMiLCJtb2R1bGVzXFxqc1xcR2FtZVBpZWNlLmpzIiwibW9kdWxlc1xcanNcXEdhbWVTY3JlZW4uanMiLCJtb2R1bGVzXFxqc1xcR29yaWxsYS5qcyIsIm1vZHVsZXNcXGpzXFxIZWFsdGguanMiLCJtb2R1bGVzXFxqc1xcSWRlbnRpdHkuanMiLCJtb2R1bGVzXFxqc1xcSW1hZ2UuanMiLCJtb2R1bGVzXFxqc1xcSW5mby5qcyIsIm1vZHVsZXNcXGpzXFxJbnN0cnVjdGlvbnMuanMiLCJtb2R1bGVzXFxqc1xcTGlvbi5qcyIsIm1vZHVsZXNcXGpzXFxNb3Zlci5qcyIsIm1vZHVsZXNcXGpzXFxQbGF5ZXIuanMiLCJtb2R1bGVzXFxqc1xcUGxheWVyQXJlYS5qcyIsIm1vZHVsZXNcXGpzXFxTY29yZS5qcyIsIm1vZHVsZXNcXGpzXFxTY3JlZW4uanMiLCJtb2R1bGVzXFxqc1xcU3RhcnRTY3JlZW4uanMiLCJtb2R1bGVzXFxqc1xcU3RhdGljSW1hZ2UuanMiLCJtb2R1bGVzXFxqc1xcU3RhdGljVGV4dC5qcyIsIm1vZHVsZXNcXGpzXFxUZXh0LmpzIiwibW9kdWxlc1xcanNcXFRpZ2VyLmpzIiwibW9kdWxlc1xcanNcXFRydW1wLmpzIiwibW9kdWxlc1xcanNcXGluZGV4LmpzIiwi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LG1CQUFTLEVBQUMsTUFBTSxjQUFQLEVBQVQsQ0FBYjtBQUNBLGNBQVEsR0FBUixDQUFZLE9BQU8sT0FBUCxFQUFaOztBQUVBLFVBQUksU0FBUyxtQkFBUyxFQUFDLE1BQU0sY0FBUCxFQUFULENBQWI7QUFDQSxjQUFRLEdBQVIsQ0FBWSxPQUFPLE9BQVAsRUFBWjs7QUFFQSxVQUFJLGVBQWUseUJBQWUsRUFBQyxNQUFNLFlBQVAsRUFBZixDQUFuQjtBQUNBLGNBQVEsR0FBUixDQUFZLGFBQWEsT0FBYixFQUFaOztBQUVBLFVBQUksZUFBZSx5QkFBZSxFQUFDLE1BQU0sWUFBUCxFQUFmLENBQW5CO0FBQ0EsY0FBUSxHQUFSLENBQVksYUFBYSxPQUFiLEVBQVo7QUFDQTs7Ozs7O2tCQTNGbUIsSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiogXHJcbiAqIEFuaW1hbC5qc1xyXG4gKiBUaGUgY3JpdHRlcnMgdGhhdCBUcnVtcCB0cmllcyB0byBzdG9wIGZyb20gZ2V0dGluZyB0aGUgUGxheWVyLlxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xyXG5cclxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XHJcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XHJcblxyXG4gLy8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXHJcbiBpbXBvcnQgTW92ZXIgZnJvbSAnLi9Nb3Zlci5qcyc7XHJcbiBpbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XHJcbiAvLyBFTkQgQURERUQgV0VFSyAxMTw8PDw8PDw8PDw8PDxcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYWwgZXh0ZW5kcyBDaGFyYWN0ZXIge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyIChjb25maWcpO1xyXG5cclxuIFx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcclxuIFx0XHQvLyBBbmltYWxzIGdldCBSQU5ET00gTU9USU9OXHJcbiBcdFx0dGhpcy5tb3Zlci5pbml0UmFuZG9tKDAuMDIsICdib3R0b20nKTtcclxuIFx0XHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XHJcblxyXG4gXHR9XHJcblxyXG4gXHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcclxuIFx0dXBkYXRlICgpIHtcclxuIFx0XHR0aGlzLm1vdmVyLnVwZGF0ZVJhbmRvbVdhbGsoKTtcclxuIFx0fVxyXG4gXHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XHJcblxyXG4gfSIsIi8qKiBcclxuICogQW5pbWFsQXJlYS5qc1xyXG4gKiBUaGUgcmVnaW9uIGFuaW1hbHMgbW92ZSB0aHJvdWdoIHRvIGdldCB0byBQbGF5ZXIuXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEFyZWFcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FnZSBleHRlbmRzIEFyZWEge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyKGNvbmZpZyk7XHJcbiBcdH1cclxuXHJcbiB9IiwiLyoqIFxyXG4gKiBBcmVhLmpzXHJcbiAqIEEgZ2VuZXJpYyByZWdpb24gb2YgdGhlIGdhbWUgc2NyZWVuLiBVc2VkIHRvIGFkZCB2aXN1YWwgb2JqZWN0cywgYW5kIFxyXG4gKiBjcmVhdGUgYm91bmRzIGZvciBjb2xsaXNpb24gZGV0ZWN0aW9uLlxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBJbmZvLCBJbWFnZSwgU3RhdGljSW1hZ2VcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuXHJcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xyXG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyZWEgZXh0ZW5kcyBHYW1lUGllY2Uge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gXHRcdC8vIGNyZWF0ZSBhIDxkaXY+LCBhZGQgdG8gRE9NLCB3aXRoIG9wdGlvbmFsIGltYWdlXHJcbiBcdFx0dGhpcy5hZGRUb0RPTShjb25maWcubmFtZSwgY29uZmlnLmNvbnRhaW5lciwgY29uZmlnLnBhdGgpO1xyXG5cclxuIFx0XHQvLyBwb3NpdGlvbiB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVkXHJcbiBcdFx0dGhpcy5zZXRET01Qb3NpdGlvbihjb25maWcucG9zaXRpb24pOyAvL2luaGVyaXRlZCBmcm9tIEdhbWVQaWVjZVxyXG4gXHRcdHRoaXMuc2V0RE9NU2l6ZShjb25maWcuc2l6ZSk7XHJcbiBcdH1cclxuXHJcbiBcdC8vIGNyZWF0ZSBET00gZWxlbWVudCwgTG9hZCBhIGJhY2tncm91bmQgaW1hZ2UsIGFuZCBpbnNlcnQgaW50byBjb250YWluZXJcclxuIFx0YWRkVG9ET00gKG5hbWUsIGNvbnRhaW5lciwgaW1nUGF0aCkge1xyXG4gXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiBcdFx0dGhpcy5kb20uaWQgPSBuYW1lICsgJy1hcmVhJztcclxuXHJcbiBcdFx0Ly8gcG9zaXRpb24gYWJzb2x1dGVseVxyXG4gXHRcdHRoaXMuZG9tLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHJcbiBcdFx0Ly8gRG9uJ3QgYWxsb3cgcGFkZGluZyBvciBtYXJnaW5zIG9yIGJvcmRlcnMgZm9yIEFyZWFzXHJcbiBcdFx0dGhpcy5kb20uc3R5bGUubWFyZ2luID0gJzBweCc7XHJcbiBcdFx0dGhpcy5kb20uc3R5bGUucGFkZGluZyA9ICcwcHgnO1xyXG5cclxuIFx0XHQvLyBhZGQgdG8gdGhlIERPTVxyXG4gXHRcdGNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGhpcy5kb20sIGNvbnRhaW5lci5jaGlsZE5vZGVzWzBdKTtcclxuXHJcbiBcdFx0Ly8gaWYgd2UgaGF2ZSBhbiBpbWFnZSwgaW5zZXJ0IGluIGVsZW1lbnQgYmFja2dyb3VuZFxyXG4gXHRcdGlmIChpbWdQYXRoKSB7XHJcblxyXG4gXHRcdFx0dGhpcy5pbWFnZSA9IG5ldyBTdGF0aWNJbWFnZShcclxuIFx0XHRcdFx0e1xyXG4gXHRcdFx0XHRcdG5hbWU6IHRoaXMuZG9tLmlkICsgJy1pbWFnZSdcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0KTtcclxuXHJcbiBcdFx0XHR0aGlzLmltYWdlLmxvYWRCYWNrZ3JvdW5kSW1hZ2UgKHRoaXMuZG9tLCBpbWdQYXRoKTtcclxuIFx0XHR9XHJcblxyXG4gXHR9XHJcblxyXG4gXHQvLyBib3VuZHMgZGV0ZWN0b3IgZm9yIHN1cHBsaWVkIENoYXJhY3RlclxyXG5cclxuXHJcbiB9IiwiLyoqIFxyXG4gKiBCYWNrZ3JvdW5kLmpzXHJcbiAqIEdhbWUgTG9nb3MsIExvZ29UeXBlcywgQnJhbmQgTmFtZVxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcclxuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmQgZXh0ZW5kcyBTdGF0aWNJbWFnZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuXHRcdHN1cGVyKGNvbmZpZyk7XHJcblxyXG5cdFx0dGhpcy5zZXRTb3VyY2UoY29uZmlnLnNvdXJjZSk7XHJcblx0XHR0aGlzLnNldEF1dGhvcihjb25maWcuYXV0aG9yKTtcclxuXHRcdHRoaXMubG9hZEJhY2tncm91bmRJbWFnZShjb25maWcuZG9tSWQsIGNvbmZpZy5wYXRoKTtcclxuXHR9XHJcblxyXG59XHJcbiIsIi8qKiBcclxuICogQmVhci5qc1xyXG4gKiBBIFRpZ2VyLCB3aG8gdHJpZXMgdG8gZ2V0IHRoZSBQbGF5ZXIuXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XHJcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBCZWFyIGV4dGVuZHMgQW5pbWFsIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlciAoY29uZmlnKTtcclxuIFx0fVxyXG5cclxuXHJcbiB9IiwiLyoqIFxyXG4gKiBDYWdlLmpzXHJcbiAqIFRoZSByZWdpb24gd2hlcmUgYW5pbWFscyBhcmUgY2FnZWQuXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEFyZWFcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FnZSBleHRlbmRzIEFyZWEge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG5cclxuIFx0XHRzdXBlcihjb25maWcpO1xyXG5cclxuIFx0fVxyXG5cclxuIH0iLCIvKiogXHJcbiAqIENoYXJhY3Rlci5qc1xyXG4gKiBHYW1lLWdlbmVyYXRlZCBvciB1c2VyIGF2YXRhcnMuIENoYXJhY3RlcnMgYXJlIHJlbmRlcmVkIGluIENhbnZhcywgYnV0IGhhdmUgdGhlaXIgXHJcbiAqIHBvc2l0aW9uIGNvbXB1dGVkIGFuZCB1cGRhdGVkIG91dHNpZGUgY2FudmFzLlxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcblxyXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcclxuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcclxuXHJcbiAvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcclxuIGltcG9ydCBNb3ZlciBmcm9tICcuL01vdmVyLmpzJztcclxuIGltcG9ydCBDb2xsaWRlciBmcm9tICcuL0NvbGxpZGVyLmpzJztcclxuIC8vIEVORCBBRERFRCBXRUVLIDExPDw8PDw8PDw8PDw8PFxyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlciBleHRlbmRzIEdhbWVQaWVjZSB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XHJcblxyXG4gXHRcdCAvLyBzdG9yZSBhIHJlZmVyZW5jZSB0byB0aGUgZ2FtZSBvYmplY3RcclxuIFx0XHR0aGlzLmdhbWUgPSBjb25maWcuZ2FtZTtcclxuXHJcbiBcdFx0Ly8gU2V0IHBvc2l0aW9uIGFuZCBzaXplIGZyb20gY29uZmlndXJhdGlvblxyXG4gXHRcdHRoaXMucG9zaXRpb24gPSBjb25maWcucG9zaXRpb247XHJcbiBcdFx0dGhpcy5zaXplID0gY29uZmlnLnNpemU7XHJcblxyXG4gXHRcdHdpbmRvdy50aGVHYW1lID0gY29uZmlnLmdhbWU7XHJcblxyXG4gXHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxyXG4gXHRcdHRoaXMubW92ZXIgPSBuZXcgTW92ZXIodGhpcyk7XHJcbiBcdFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxyXG5cclxuXHJcblxyXG4gXHRcdHRoaXMuaW1hZ2UgPSBuZXcgU3RhdGljSW1hZ2UoXHJcbiBcdFx0XHR7XHJcbiBcdFx0XHRcdG5hbWU6IGNvbmZpZy5uYW1lICsgJy1pbWFnZScsXHJcbiBcdFx0XHRcdHBhdGg6IGNvbmZpZy5wYXRoXHJcbiBcdFx0XHR9XHJcbiBcdFx0KTtcclxuXHJcbiBcdFx0Ly8gSW1hZ2VzIGRvbid0IGF1dG9tYXRpY2FsbHkgbG9hZCB3aGVuIHRoZXkncmUgbm90IGF0dGFjaGVkIHRvIHRoZSBET00sIFxyXG4gXHRcdC8vIG9yIGEgQ1NTIGJhY2tncm91bmQgaW1hZ2VcclxuIFx0XHR0aGlzLmltYWdlLmxvYWQoY29uZmlnLnBhdGgsIGZ1bmN0aW9uICgpIHtjb25zb2xlLmxvZygnbG9hZGVkOicgKyBjb25maWcubmFtZSk7fSk7XHJcbiBcdH1cclxuXHJcbiBcdC8vIG92ZXJyaWRlIGRlZmF1bHQgZHJhdyB3aXRoIG91ciBvd25cclxuIFx0ZHJhdyAoY29udGV4dCkge1xyXG5cdFx0aWYgKHRoaXMuaW1hZ2UpIHtcclxuXHRcdFx0dmFyIGltZyA9IHRoaXMuaW1hZ2UuZGF0YTtcclxuIFx0XHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxyXG5cdFx0XHQvL2NvbnNvbGUubG9nKCdkcmF3aW5nJylcclxuXHRcdFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxyXG5cdFx0XHRpZiAoaW1nKSB7XHJcblx0XHRcdFx0Ly8gZHJhdyBpbWFnZSBpbnRvIEhUTUw1IGNhbnZhc1xyXG4gXHRcdCBcdFx0Y29udGV4dC5kcmF3SW1hZ2UoaW1nLCB0aGlzLnBvc2l0aW9uLmxlZnQsIHRoaXMucG9zaXRpb24udG9wKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG4gXHR9XHJcbiB9IiwiLyoqIFxyXG4gKiBAY2xhc3MgQ29sbGlkZXJcclxuICogQGRlc2NyaXB0aW9uIGNyZWF0ZSB0aGUgY29sbGlzaW9uIG1hdHJpeCBkZWZpbmluZyB3aGljaCBvYmplY3RzIGNhbiBjb2xsaWRlIFxyXG4gKiB3aXRoIHdoaWNoIG9iamVjdHMuIE9iamVjdHMgdGhhdCBjYW4gY29sbGlkZSBoYXZlIHRoZWlyIHBvdGVudGlhbCBjb2xsaWRlcnMgXHJcbiAqIGFkZGVkIGFzIHJlZmVyZW5jZXMsIGUuZy4gUGxheWVyLnRydW1wIG9yIFRydW1wLnBsYXllci5cclxuICovXHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGlkZXIge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNoYXJhY3RlckFycmF5KSB7XHJcbiBcdFx0dGhpcy5jaGFyYWN0ZXJBcnJheSA9IGNoYXJhY3RlckFycmF5O1xyXG4gXHRcdHRoaXMuYW5pbWFsQXJyYXkgPSBbXTsgLy9maWxsZWQgdXAgaW4gc2V0VXBDb2xsaXNpb25zXHJcbiBcdFx0dGhpcy5zZXRVcENvbGxpc2lvbnMoKTtcclxuIFx0fVxyXG5cclxuIFx0c2V0VXBDb2xsaXNpb25zICgpIHtcclxuIFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5jaGFyYWN0ZXJBcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gXHRcdFx0c3dpdGNoICh0aGlzLmNoYXJhY3RlckFycmF5W2ldLmNvbnN0cnVjdG9yLm5hbWUpIHtcclxuIFx0XHRcdFx0Y2FzZSAnTGlvbic6XHJcbiBcdFx0XHRcdGNhc2UgJ1RpZ2VyJzpcclxuIFx0XHRcdFx0Y2FzZSAnQmVhcic6XHJcbiBcdFx0XHRcdGNhc2UgJ0dvcmlsbGEnOlxyXG4gXHRcdFx0XHRcdHRoaXMuYW5pbWFsQXJyYXkucHVzaCh0aGlzLmNoYXJhY3RlckFycmF5W2ldKTtcclxuIFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0Y2FzZSAnVHJ1bXAnOlxyXG4gXHRcdFx0XHRcdHRoaXMudHJ1bXAgPSB0aGlzLmNoYXJhY3RlckFycmF5W2ldO1xyXG4gXHRcdFx0XHRcdGJyZWFrO1xyXG4gXHRcdFx0XHRjYXNlICdQbGF5ZXInOlxyXG4gXHRcdFx0XHRcdHRoaXMucGxheWVyID0gdGhpcy5jaGFyYWN0ZXJBcnJheVtpXTtcclxuIFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0ZGVmYXVsdDpcclxuIFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcblxyXG4gXHRcdC8vY3Jvc3MtY29ubmVjdCB0aGUgaW1wYWN0b3JzXHJcbiBcdFx0dGhpcy50cnVtcC5wbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuIFx0XHR0aGlzLnRydW1wLmFuaW1hbHMgPSB0aGlzLmFuaW1hbEFycmF5O1xyXG4gXHRcdHRoaXMucGxheWVyLnRydW1wID0gdGhpcy50cnVtcDtcclxuXHJcbiBcdFx0Ly9ERUJVR1xyXG4gXHRcdHdpbmRvdy5hbmltYWxzID0gdGhpcy50cnVtcC5hbmltYWxzO1xyXG4gXHRcdFxyXG5cclxuIFx0fVxyXG4gfSIsIi8qKiBcclxuICogRHluYW1pY1RleHQuanNcclxuICogVGV4dCB0aGF0IGNhbiBiZSBjaGFuZ2VkIGJ5IHVzZXIgKGUuZy4gaW5wdXQgZmllbGQpLCBvciBcclxuICogdXBkYXRlZCBieSB0aGUgZ2FtZSBpdHNlbGYuXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG4gaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNUZXh0IGV4dGVuZHMgVGV4dCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuXHRcdHN1cGVyKGNvbmZpZyk7XHJcblx0fVxyXG59XHJcbiIsIi8qKiBcclxuICogRW5kU2NyZWVuLmpzXHJcbiAqIEVuZGluZyBzY3JlZW4gZm9yIHRoZSBnYW1lLlxyXG4gKiBAaW5oZXJpdHMgU2NyZWVuLCBHYW1lUGllY2VcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xyXG4gXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gXHRcdC8vIGxvYWQgdGhlIGJhY2tncm91bmQgaW1hZ2VcclxuIFx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kKCdpbWcvc2NyZWVucy9lbmQtc2NyZWVuLnBuZycpO1xyXG5cclxuIFx0XHQvLyBMb2FkIEVuZFNjcmVlbiBzdWItb2JqZWN0c1xyXG4gXHRcdHRoaXMubG9hZElucHV0U2NvcmUoKTtcclxuIFx0XHR0aGlzLmxvYWRIaWdoU2NvcmVzKCk7XHJcblxyXG4gXHRcdC8vIEJpbmQgXCJwbGF5IGFnYWluXCIgYW5kIFwiaW5zdHJ1Y3Rpb25zXCIgYnV0dG9ucy5cclxuIFx0XHR0aGlzLmJpbmRSZXBsYXkoKTtcclxuIFx0XHR0aGlzLmJpbmRJbnN0cnVjdGlvbnMoKTtcclxuIFx0fVxyXG5cclxuIFx0bG9hZElucHV0U2NvcmUgKCkge1xyXG5cclxuIFx0fVxyXG5cclxuIFx0bG9hZEhpZ2hTY29yZXMgKCkge1xyXG5cclxuIFx0fVxyXG5cclxuIFx0YmluZFJlcGxheSAoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImluIGJpbmRTdGFydCwgdGhpcy5nYW1lOlwiICsgdGhpcy5nYW1lKVxyXG5cdFx0Ly8gd2UgdXNlIGJpbmQoKSB0byBsaW5rIHRoZSBmdW5jdGlvbiBiZWxvdyB0byBTdGFydFNjcmVlbiAob3RoZXJ3aXNlLCBpdCB0aGlua3MgaXQgaXMgaW5zaWRlIHdpbmRvdylcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmQtc2NyZWVuLXBsYXktYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBcclxuXHRcdFx0ZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHQvL2FsZXJ0KFwiaW4gaGFuZGxlciwgZ2FtZTpcIiArIHRoaXMuZ2FtZSlcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0dGhpcy5nYW1lLnN0YXJ0R2FtZSgpO1xyXG5cclxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcclxuXHR9XHJcblxyXG5cdGJpbmRJbnN0cnVjdGlvbnMgKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpbiBiaW5kU3RhcnQsIHRoaXMuZ2FtZTpcIiArIHRoaXMuZ2FtZSlcclxuXHRcdC8vIHdlIHVzZSBiaW5kKCkgdG8gbGluayB0aGUgZnVuY3Rpb24gYmVsb3cgdG8gU3RhcnRTY3JlZW4gKG90aGVyd2lzZSwgaXQgdGhpbmtzIGl0IGlzIGluc2lkZSB3aW5kb3cpXHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kLXNjcmVlbi1pbnN0cnVjdGlvbnMtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBcclxuXHRcdFx0ZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHQvL2FsZXJ0KFwiaW4gaGFuZGxlciwgZ2FtZTpcIiArIHRoaXMuZ2FtZSlcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0dGhpcy5nYW1lLmxvYWRHYW1lKCk7XHJcblxyXG5cdFx0XHR9LmJpbmQodGhpcykpO1xyXG5cdH1cclxuIH0iLCIvKiogXHJcbiAqIEdhbWUuanNcclxuICogVGhlIGVudGlyZSBHYW1lIG9iamVjdFxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlXHJcbiAqL1xyXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuXHJcbi8vU2NyZWVuIGluaGVyaXRhbmNlXHJcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xyXG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSAnLi9TdGFydFNjcmVlbi5qcyc7XHJcbmltcG9ydCBHYW1lU2NyZWVuIGZyb20gJy4vR2FtZVNjcmVlbi5qcyc7XHJcbmltcG9ydCBFbmRTY3JlZW4gZnJvbSAnLi9FbmRTY3JlZW4uanMnO1xyXG5cclxuLy9JbmZvIGluaGVyaXRhbmNlXHJcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XHJcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcclxuaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xyXG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9JZGVudGl0eS5qcyc7XHJcbmltcG9ydCBJbnN0cnVjdGlvbnMgZnJvbSAnLi9JbnN0cnVjdGlvbnMuanMnO1xyXG5pbXBvcnQgRHluYW1pY1RleHQgZnJvbSAnLi9EeW5hbWljVGV4dC5qcyc7XHJcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlLmpzJztcclxuXHJcbi8vQ2hhcmFjdGVyIGluaGVyaXRhbmNlXHJcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xyXG5pbXBvcnQgVHJ1bXAgZnJvbSAnLi9UcnVtcC5qcyc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIuanMnO1xyXG5pbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcclxuaW1wb3J0IExpb24gZnJvbSAnLi9MaW9uLmpzJztcclxuaW1wb3J0IFRpZ2VyIGZyb20gJy4vVGlnZXIuanMnO1xyXG5pbXBvcnQgQmVhciBmcm9tICcuL0JlYXIuanMnO1xyXG5pbXBvcnQgR29yaWxsYSBmcm9tICcuL0dvcmlsbGEuanMnO1xyXG5pbXBvcnQgSGVhbHRoIGZyb20gJy4vSGVhbHRoLmpzJztcclxuXHJcbi8vQXJlYSBpbmhlcml0YW5jZS5cclxuaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcclxuaW1wb3J0IENhZ2UgZnJvbSAnLi9DYWdlLmpzJztcclxuaW1wb3J0IEFuaW1hbEFyZWEgZnJvbSAnLi9BbmltYWxBcmVhLmpzJztcclxuaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi9QbGF5ZXJBcmVhLmpzJztcclxuXHJcbi8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxyXG5pbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XHJcbi8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBHYW1lUGllY2Uge1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcblxyXG5cdFx0c3VwZXIoY29uZmlnKTtcclxuXHJcblx0XHQvL2dhbWUgY29weXJpZ2h0XHJcblx0XHR0aGlzLndhcm5pbmcgPSAnVGhpcyBnYW1lIGJlbG9uZ3MgdG8gdXMsIGFuZCBub2JvZHkgZWxzZS4nO1xyXG5cclxuXHRcdC8vZ2FtZSByZXZlcnRzIHRvIFN0YXJ0U2NyZWVuIGlmIHVucGxheWVkXHJcblx0XHR0aGlzLlRJTUVPVVQgPSA1NTU1O1xyXG5cclxuXHRcdC8vIGRlZmluZSBJZCBsaW5rIHRvIERPTVxyXG5cdFx0dGhpcy5TVEFSVF9TQ1JFRU5fSUQgPSAnc3RhcnQtc2NyZWVuJztcclxuXHRcdHRoaXMuR0FNRV9TQ1JFRU5fSUQgPSAnZ2FtZS1zY3JlZW4nO1xyXG5cdFx0dGhpcy5FTkRfU0NSRUVOX0lEID0gJ2VuZC1zY3JlZW4nO1xyXG5cclxuXHRcdC8vIG1vZGVsIHN0b3JhZ2UsIHNjcmVlbnNcclxuXHRcdHRoaXMuc2NyZWVucyA9IFtdO1xyXG5cclxuXHRcdC8vIG1vZGVsIHN0b3JhZ2UsIGR5bmFtaWMgY2hhcmFjdGVyc1xyXG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycyA9IFtdO1xyXG5cclxuXHRcdC8vIGluaXRpYWxpemUgZ2FtZSwgbG9hZCBzdGFydCBzY3JlZW5cclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cclxuXHR9IC8vZW5kIG9mIGNvbnN0cnVjdG9yXHJcblxyXG5cdGluaXQgKCkge1xyXG5cclxuXHRcdC8vIEdyYWIgdGhlIEhUTUwgc2NyZWVuIGVsZW1lbnRzIGFuZCBlbmNhcHN1bGF0ZSBpbiBhIFNjcmVlbiBjbGFzc1xyXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuU1RBUlRfU0NSRUVOX0lEXSA9IG5ldyBTdGFydFNjcmVlbih7bmFtZTogJ1N0YXJ0IFNjcmVlbicsIGlkOiB0aGlzLlNUQVJUX1NDUkVFTl9JRCwgZ2FtZTogdGhpc30pO1xyXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuR0FNRV9TQ1JFRU5fSURdID0gbmV3IEdhbWVTY3JlZW4oe25hbWU6ICdHYW1lIFNjcmVlbicsIGlkOiB0aGlzLkdBTUVfU0NSRUVOX0lELCBnYW1lOiB0aGlzfSk7XHJcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5FTkRfU0NSRUVOX0lEXSA9IG5ldyBFbmRTY3JlZW4oe25hbWU6ICdFbmQgU2NyZWVuJywgaWQ6IHRoaXMuRU5EX1NDUkVFTl9JRCwgZ2FtZTogdGhpc30pO1xyXG5cclxuXHRcdC8vIGxvYWQgdGhlIGNhbnZhc1xyXG5cdFx0dGhpcy5sb2FkQ2FudmFzKCk7XHJcblxyXG5cdFx0Ly8gbWFrZSB0aGUgc3RhcnQgc2NyZWVuIHZpc2libGVcclxuXHRcdHRoaXMubG9hZEdhbWUoKTtcclxuXHR9XHJcblxyXG5cdC8vIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgSFRNTDUgY2FudmFzIGNvbnRleHRcclxuXHRsb2FkQ2FudmFzICgpIHtcclxuXHRcdHRoaXMuY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUtc2NyZWVuLWFyZW5hIGNhbnZhcycpO1xyXG5cdFx0dGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cdH1cclxuXHJcblx0LyoqIFxyXG5cdCAqIExvYWQgQ2hhcmFjdGVyc1xyXG5cdCAqIGR5bmFtaWMgQ2hhcmFjdGVycyAoZS5nLiB0aG9zZSB0aGF0IGFuaW1hdGUpIGFyZSBsb2FkZWQgYnkgR2FtZS4gXHJcblx0ICogT3RoZXIgc3RhdGljIHZpc3VhbCBvYmplY3RzIGFyZSBsb2FkZWQgYnkgU2NyZWVuIGNsYXNzZXMuXHJcblx0ICovXHJcblx0bG9hZFBsYXllcnMgKCkge1xyXG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxyXG5cdFx0XHRuZXcgUGxheWVyKFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6ICdQbGF5ZXInLCBwb3NpdGlvbjoge3RvcDogNTEwLCBsZWZ0OiAyMDB9LFxyXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy9wbGF5ZXJzL3BsYXllci5wbmcnLFxyXG5cdFx0XHRcdFx0Z2FtZTogdGhpc1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGxvYWRBbmltYWxzICgpIHtcclxuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcclxuXHRcdFx0bmV3IExpb24oXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogJ0xpb24nLCBcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAxNSwgbGVmdDogOTR9LFxyXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy9hbmltYWxzL2xpb24ucG5nJyxcclxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdCk7XHJcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLnB1c2goXHJcblx0XHRcdG5ldyBUaWdlcihcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiAnVGlnZXInLCBcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAxNSwgbGVmdDogMzMzfSxcclxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvYW5pbWFscy90aWdlci5wbmcnLFxyXG5cdFx0XHRcdFx0Z2FtZTogdGhpc1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcclxuXHRcdFx0bmV3IEJlYXIoXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogJ0JlYXInLCBwb3NpdGlvbjoge3RvcDogMTUsIGxlZnQ6IDU3MH0sXHJcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvYmVhci5wbmcnLFxyXG5cdFx0XHRcdFx0Z2FtZTogdGhpc1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcclxuXHRcdFx0bmV3IEdvcmlsbGEoXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogJ0dvcmlsbGEnLCBwb3NpdGlvbjoge3RvcDogMTUsIGxlZnQ6IDgxMn0sXHJcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvZ29yaWxsYS5wbmcnLFxyXG5cdFx0XHRcdFx0Z2FtZTogdGhpc1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHJcblx0fVxyXG5cclxuXHRsb2FkVHJ1bXBzICgpIHtcclxuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcclxuXHRcdFx0bmV3IFRydW1wKFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6ICdUcnVtcCcsIHBvc2l0aW9uOiB7dG9wOiA0NTAsIGxlZnQ6IDIwMH0sXHJcblx0XHRcdFx0XHRwYXRoOiAnaW1nL3RydW1wcy90cnVtcC5wbmcnLFxyXG5cdFx0XHRcdFx0Z2FtZTogdGhpc1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHJcblx0fVxyXG5cclxuXHRsb2FkR2FtZSAoKSB7XHJcblxyXG5cdFx0Ly9sb2FkIEluZm8gYXNzZXRzXHJcblxyXG5cdFx0Y29uc29sZS5sb2coJ2xvYWRpbmcgc3BsYXNoIHNjcmVlbicpO1xyXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuRU5EX1NDUkVFTl9JRF0uaGlkZVNjcmVlbigpXHJcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5TVEFSVF9TQ1JFRU5fSURdLnNob3dTY3JlZW4oKTtcclxuXHR9XHJcblxyXG5cdHN0YXJ0R2FtZSAoKSB7XHJcblxyXG5cdFx0Ly9sb2FkIENoYXJhY3RlcnNcclxuXHRcdHRoaXMubG9hZEFuaW1hbHMoKTtcclxuXHRcdHRoaXMubG9hZFBsYXllcnMoKTtcclxuXHRcdHRoaXMubG9hZFRydW1wcygpO1xyXG5cclxuXHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxyXG5cdFx0dGhpcy5jb2xsZGVyID0gbmV3IENvbGxpZGVyKHRoaXMuZGlzcGxheUNoYXJhY3RlcnMpO1xyXG5cdFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxyXG5cclxuXHRcdC8vbWFrZSBHYW1lU2NyZWVuIHZpc2libGVcclxuXHJcblx0XHQvLyBpbml0aWFsaXplIGVsYXBzZWQgdGltZVxyXG5cdFx0dGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuXHRcdC8vIHNob3cgR2FtZVNjcmVlbiwgaGlkZSBvdGhlcnNcclxuXHRcdGNvbnNvbGUubG9nKCdzdGFydGluZyBnYW1lJyk7XHJcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5TVEFSVF9TQ1JFRU5fSURdLmhpZGVTY3JlZW4oKTtcclxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkVORF9TQ1JFRU5fSURdLmhpZGVTY3JlZW4oKTtcclxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkdBTUVfU0NSRUVOX0lEXS5zaG93U2NyZWVuKCk7XHJcblx0XHR0aGlzLmdhbWVMb29wKCk7XHJcblx0fVxyXG5cclxuXHRlbmRHYW1lICgpIHtcclxuXHJcblx0XHRjb25zb2xlLmxvZygnZW5kaW5nIGdhbWUnKTtcclxuXHJcblx0XHQvLyByZXNldCB0aW1lclxyXG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xyXG5cclxuXHRcdC8vIHR1cm4gb2ZmIGFuaW1hdGlvblxyXG5cdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5nbG9iYWxJZCk7XHJcblx0XHR0aGlzLmdsb2JhbElkID0gbnVsbDtcclxuXHJcblx0XHQvLyBnbyB0byBlbmQgc2NyZWVuXHJcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5HQU1FX1NDUkVFTl9JRF0uaGlkZVNjcmVlbigpO1xyXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuRU5EX1NDUkVFTl9JRF0uc2hvd1NjcmVlbigpO1xyXG5cdH1cclxuXHJcblx0ZWxhcHNlZCAoKSB7XHJcblxyXG5cdFx0Ly8gcmVjb3JkIHRpbWUgd2UgaGF2ZSBiZWVuIGluIGdhbWVMb29wXHJcblx0XHR0aGlzLmVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuXHRcdC8vIHRpbWUgZGlmZmVyZW5jZSBpbiBtc1xyXG5cclxuXHRcdHZhciB0aW1lRGlmZiA9ICh0aGlzLmVuZFRpbWUgLSB0aGlzLnN0YXJ0VGltZSkgLyAxMDAwO1xyXG5cclxuXHRcdC8vIGdldCBzZWNvbmRzIChPcmlnaW5hbCBoYWQgJ3JvdW5kJyB3aGljaCBpbmNvcnJlY3RseSBjb3VudHMgMDoyOCwgMDoyOSwgMTozMCAuLi4gMTo1OSwgMTowKVxyXG5cdFx0cmV0dXJuIE1hdGgucm91bmQodGltZURpZmYgJSA2MCk7XHJcblx0fVxyXG5cclxuXHRjaGVja0lmQ29tcGxldGUgKCkge1xyXG5cclxuXHRcdC8vIGdhbWUgbG9naWMgdG8gc2VlIGlmIHRoZSBnYW1lIHNob3VsZCByZXNldFxyXG5cdFx0Ly8vLy8vLy8vLy8vL2NvbnNvbGUubG9nKCdFTEFQU0VEOicgKyB0aGlzLmVsYXBzZWQoKSk7XHJcblxyXG5cdFx0aWYgKHRoaXMuZWxhcHNlZCgpID4gdGhpcy5USU1FT1VUKSB7XHJcblx0XHRcdC8vIGlmIGlkbGUgdG9vIGxvbmcsIHJlc2V0IGdhbWUgdG8gc3RhcnRcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlICgpIHtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cclxuXHRcdFx0dmFyIGNoYXJhY3RlciA9IHRoaXMuZGlzcGxheUNoYXJhY3RlcnNbaV07XHJcblxyXG5cdFx0XHRzd2l0Y2ggKGNoYXJhY3Rlci5nZXRDbGFzcygpKSB7XHJcblx0XHRcdFx0Y2FzZSAnUGxheWVyJzpcclxuXHRcdFx0XHRjYXNlICdUcnVtcCc6XHJcblx0XHRcdFx0Y2FzZSAnTGlvbic6XHJcblx0XHRcdFx0Y2FzZSAnVGlnZXInOlxyXG5cdFx0XHRcdGNhc2UgJ0JlYXInOlxyXG5cdFx0XHRcdGNhc2UgJ0dvcmlsbGEnOlxyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y2hhcmFjdGVyLnVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZHJhdyAoKSB7XHJcblxyXG4gXHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxyXG5cdFx0dGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuIFx0XHQvLyBFTkQgQURERUQgV0VFSyAxMTw8PDw8PDw8PDw8PDxcclxuXHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnNbaV0uZHJhdyh0aGlzLmNvbnRleHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2FtZUxvb3AgKCkge1xyXG5cdFx0XHJcblx0XHRpZiAodGhpcy5jaGVja0lmQ29tcGxldGUoKSkge1xyXG5cdFx0XHR0aGlzLmVuZEdhbWUoKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy51cGRhdGUoKTtcclxuXHRcdHRoaXMuZHJhdygpO1xyXG5cdFx0XHJcblx0XHQvL2NvbnNvbGUubG9nKCdsb29waW5nLi4uJylcclxuXHRcdHRoaXMuZ2xvYmFsSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lTG9vcC5iaW5kKHRoaXMpKTtcclxuXHR9XHJcblxyXG59IiwiLyoqIFxyXG4gKiBHYW1lUGllY2UuanNcclxuICogQmFzaWMgR2FtZSBvYmplY3RcclxuICpcclxuICogVG8gbWFrZSB0aGlzIHdvcmssIHlvdSBtdXN0IGJlIHJ1bm5pbmcgdGhlIEJhYmVsIHRyYW5zcGlsZXIsIFxyXG4gKiBhbmQgd2F0Y2hpbmcgZm9yIGNoYW5nZXMgaW4gdGhpcyBmaWxlIHdpdGggYnJvd3NlcmlmeS4gVHdvIFxyXG4gKiBUZXJtaW5hbCB3aW5kb3dzIG5lZWQgdG8gYmUgb3BlbjpcclxuICogMS4gb25lIHdpbmRvdyB3aGVyZSB5b3UgdHlwZWQgdGhlIGNvbW1hbmQgXCJncnVudFwiXHJcbiAqIDIuIG9uZSB3aW5kb3cgd2hlcmUgeW91IHR5cGVkIHRoZSBjb21tYW5kIFwibnBtIHN0YXJ0XCJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQaWVjZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gICAgICAgIC8vVE9ETzogdXNlIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWU7XHJcbiAgICAgICAgdGhpcy51dWlkID0gdGhpcy5zZXRJZCgpO1xyXG4gICAgICAgIHRoaXMucmVhZHkgPSB0cnVlOyAvLyBjaGFuZ2UgdG8gZmFsc2UgZm9yIGRlZmVycmVkIGxvYWRzXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogU2V0IGEgcG9zaXRpb24gZm9yIHRoZSBvYmplY3QsIGFsc28gdGhlIHBvc2l0aW9uIG9mIHRoZSBcclxuICAgICAqIERPTSByZXByZXNlbnRhdGlvbiBvZiB0aGUgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHNldERPTVBvc2l0aW9uIChwb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICBpZiAodGhpcy5kb20pIHtcclxuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUudG9wID0gcG9zaXRpb24udG9wICsgJ3B4JztcclxuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUubGVmdCA9IHBvc2l0aW9uLmxlZnQgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBTZXQgdGhlIG9iamVjdCBzaXplLCBhbHNvIGl0cyBET00gc2l6ZVxyXG4gICAgICovXHJcbiAgICBzZXRET01TaXplIChzaXplKSB7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICBpZiAodGhpcy5kb20pIHtcclxuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUud2lkdGggPSBzaXplLndpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBHZW5lcmF0ZSBhIHVuaXF1ZSBJRCBmb3IgZXZlcnkgZ2FtZSBvYmplY3QuXHJcbiAgICAgKiBAbGluayBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNTAzNC9jcmVhdGUtZ3VpZC11dWlkLWluLWphdmFzY3JpcHRcclxuICAgICAqL1xyXG4gICAgc2V0SWQgKCkge1xyXG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgdmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkqMTYpJTE2IHwgMDtcclxuICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZC8xNik7XHJcbiAgICAgICAgICAgIHJldHVybiAoYz09J3gnID8gciA6IChyJjB4M3wweDgpKS50b1N0cmluZygxNik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHV1aWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogUmV0dXJuIHRoZSBnaXZlbiBuYW1lIG9mIHRoaXMgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIGdldE5hbWUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogcmV0dXJuIHRoZSBjbGFzcyBvZiB0aGUgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIGdldENsYXNzICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIFJldHVybiB0aGUgdW5pcXVlIGlkIG9mIHRoaXMgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBnZXRJZCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXVpZDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBHZXQgdGhlIGVuY2xvc2luZyBib3ggb3V0c2lkZSB0aGUgb2JqZWN0IGZvciBleHRlcm5hbCBjb2xsaXNpb25zXHJcbiAgICAgKi9cclxuICAgIGdldENvbGxpc2lvblJlY3QgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBHZXQgdGhlIGludGVybmFsIGJveCB3aGVuIHRoaXMgb2JqZWN0IGFjdHMgYXMgYSBjb250YWluZXIgZm9yIGFub3RoZXJcclxuICAgICAqL1xyXG4gICAgZ2V0Qm91bmRzUmVjdCAoKSB7XHJcblxyXG4gICAgfVxyXG5cdFxyXG5cdC8qKiBcclxuXHQgKiBHZW5lcmljICdyZWFkeScgZnVuY3Rpb24gKGUuZy4gZm9yIGRlbGF5ZWQgYXNzZXQgbG9hZHMpXHJcblx0ICovXHJcblx0c2V0UmVhZHkgKHZhbCkge1xyXG5cdFx0dGhpcy5yZWFkeSA9IHZhbDtcclxuXHR9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogR2VuZXJpYyB1cGRhdGUgKG92ZXJyaWRlKVxyXG4gICAgICovXHJcbiAgICB1cGRhdGUgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAgLyoqIFxyXG4gICAgICAqIGdlbmVyaWMgZHJhdyAob3ZlcnJpZGUpXHJcbiAgICAgICovXHJcbiAgICBkcmF3ICgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCIvKiogXHJcbiAqIEdhbWVTY3JlZW4uanNcclxuICogTWFpbiBnYW1lIHNjcmVlbiBvYmplY3RcclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgU2NyZWVuXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcclxuXHJcbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xyXG4gaW1wb3J0IEFuaW1hbEFyZWEgZnJvbSAnLi9BbmltYWxBcmVhLmpzJztcclxuIGltcG9ydCBQbGF5ZXJBcmVhIGZyb20gJy4vUGxheWVyQXJlYS5qcyc7XHJcbiBpbXBvcnQgQ2FnZSBmcm9tICcuL0NhZ2UuanMnO1xyXG5cclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlcihjb25maWcpO1xyXG5cclxuIFx0XHR0aGlzLmNhZ2VzID0gW107XHJcbiBcdFx0dGhpcy5hbmltYWxBcmVhcyA9IFtdO1xyXG4gXHRcdHRoaXMucGxheWVyQXJlYXMgPSBbXTtcclxuXHJcbiBcdFx0Ly9HYW1lU2NyZWVuIHNob3VsZCBoaWRlIGl0cyBsb2NhbCBoZWFkZXIgYW5kIGZvb3RlclxyXG4gXHRcdHRoaXMuaGlkZUhlYWRlcigpO1xyXG4gXHRcdHRoaXMuaGlkZUZvb3RlcigpO1xyXG5cclxuIFx0XHQvLyBsb2FkIHRoZSBiYWNrZ3JvdW5kIGltYWdlXHJcbiBcdFx0dGhpcy5sb2FkQmFja2dyb3VuZCgnaW1nL3NjcmVlbnMvZ2FtZS1zY3JlZW4ucG5nJyk7XHJcblxyXG4gXHRcdC8vIGdldCB0aGUgc2VjdGlvbiB0aGF0IGhhcyB0aGUgY2FudmFzIGZvciBvdmVybGF5XHJcbiBcdFx0dmFyIGFyZW5hID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc2NyZWVuLWFyZW5hJyk7XHJcblxyXG4gXHRcdC8vIGxvYWQgc3ViLW9iamVjdHMgaW50byB0aGUgQXJlbmFcclxuIFx0XHR0aGlzLmNhZ2VzICAgPSB0aGlzLmxvYWRDYWdlcyhhcmVuYSwgJ2ltZy9hcmVhcy9jYWdlLnBuZycpO1xyXG4gXHRcdHRoaXMuYW5pbWFsQXJlYSA9IHRoaXMubG9hZEFuaW1hbEFyZWEoKTtcclxuIFx0XHR0aGlzLnBsYXllckFyZWEgPSB0aGlzLmxvYWRQbGF5ZXJBcmVhKCk7XHJcblxyXG4gXHR9XHJcblxyXG4gXHRsb2FkQ2FnZXMgKGNvbnRhaW5lciwgaW1nUGF0aCkge1xyXG4gXHRcdC8vIGxvYWQgNCBDYWdlc1xyXG4gXHRcdHRoaXMuY2FnZXMucHVzaChcclxuIFx0XHRcdG5ldyBDYWdlKFxyXG4gXHRcdFx0XHR7XHJcbiBcdFx0XHRcdFx0bmFtZTogJ2xpb24tY2FnZScsIFxyXG4gXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAwLCBsZWZ0OiA3MH0sIFxyXG4gXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSwgXHJcbiBcdFx0XHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsIFxyXG4gXHRcdFx0XHRcdHBhdGg6IGltZ1BhdGhcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0KVxyXG4gXHRcdCk7XHJcblx0XHR0aGlzLmNhZ2VzLnB1c2goXHJcblx0XHRcdG5ldyBDYWdlKFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6ICd0aWdlci1jYWdlJywgXHJcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMCwgbGVmdDogMzEwfSwgXHJcblx0XHRcdFx0XHRzaXplOiB7d2lkdGg6IDEwMCwgaGVpZ2h0OjEwMH0sIFxyXG5cdFx0XHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsIFxyXG5cdFx0XHRcdFx0cGF0aDogaW1nUGF0aFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHRcdHRoaXMuY2FnZXMucHVzaChcclxuXHRcdFx0bmV3IENhZ2UoXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogJ2JlYXItY2FnZScsIFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDU1MH0sIFxyXG5cdFx0XHRcdFx0c2l6ZToge3dpZHRoOiAxMDAsIGhlaWdodDoxMDB9LFxyXG5cdFx0XHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsIFxyXG5cdFx0XHRcdFx0cGF0aDogaW1nUGF0aFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHRcdHRoaXMuY2FnZXMucHVzaChcclxuXHRcdFx0bmV3IENhZ2UoXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogJ2dvcmlsbGEtY2FnZScsIFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDc5MH0sIFxyXG5cdFx0XHRcdFx0c2l6ZToge3dpZHRoOiAxMDAsIGhlaWdodDoxMDB9LFxyXG5cdFx0XHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsIFxyXG5cdFx0XHRcdFx0cGF0aDogaW1nUGF0aFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuIFx0fVxyXG5cclxuIFx0bG9hZEFuaW1hbEFyZWEgKCkge1xyXG4gXHRcdC8vIGxvYWQgQW5pbWFsIG1vdmVtZW50IGFyZWFcclxuIFx0XHR0aGlzLmFuaW1hbEFyZWFzLnB1c2goXHJcbiBcdFx0XHRuZXcgQW5pbWFsQXJlYShcclxuIFx0XHRcdFx0e1xyXG4gXHRcdFx0XHRcdG5hbWU6ICdab28nLCBcclxuIFx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMTA0LCBsZWZ0OiA2fSwgXHJcbiBcdFx0XHRcdFx0c2l6ZToge3dpZHRoOiA5NzAsIGhlaWdodDogNDEwfSxcclxuIFx0XHRcdFx0XHRjb250YWluZXI6IHRoaXMuZG9tLCBcclxuIFx0XHRcdFx0XHRwYXRoOiBudWxsXHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdClcclxuIFx0XHQpO1xyXG4gXHR9XHJcblxyXG4gXHRsb2FkUGxheWVyQXJlYSAoKSB7XHJcbiBcdFx0Ly8gbG9hZCB0aGUgUGxheWVyXHJcbiBcdFx0dGhpcy5wbGF5ZXJBcmVhcy5wdXNoKFxyXG4gXHRcdFx0bmV3IFBsYXllckFyZWEoXHJcbiBcdFx0XHRcdHtcclxuIFx0XHRcdFx0XHRuYW1lOiAnUGxheWVyIEFyZWEnLCBcclxuIFx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogNTE0LCBsZWZ0OiA2fSwgXHJcbiBcdFx0XHRcdFx0c2l6ZToge3dpZHRoOiA5NzAsIGhlaWdodDogMTAwfSxcclxuIFx0XHRcdFx0XHRjb250YWluZXI6IHRoaXMuZG9tLCBcclxuIFx0XHRcdFx0XHRwYXRoOiBudWxsXHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdClcclxuIFx0XHQpO1xyXG4gXHR9XHJcblxyXG4gfVxyXG5cclxuIiwiLyoqIFxyXG4gKiBHb3JpbGxhLmpzXHJcbiAqIEEgR29yaWxsYSwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xyXG4gaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29yaWxsYSBleHRlbmRzIEFuaW1hbCB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XHJcbiBcdH1cclxuIH0iLCIvKiogXHJcbiAqIEhlYWx0aC5qc1xyXG4gKiBUaGUgY3JpdHRlcnMgdGhhdCBUcnVtcCB0cmllcyB0byBzdG9wIGZyb20gZ2V0dGluZyB0aGUgUGxheWVyLlxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWx0aCBleHRlbmRzIENoYXJhY3RlciB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XHJcbiBcdH1cclxuXHJcbiB9IiwiLyoqIFxyXG4gKiBJZGVudGl0eS5qc1xyXG4gKiBHYW1lIExvZ29zLCBMb2dvVHlwZXMsIEJyYW5kIE5hbWVcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XHJcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZGVudGl0eSBleHRlbmRzIFN0YXRpY0ltYWdlIHtcclxuXHJcblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG5cdFx0c3VwZXIoY29uZmlnKTtcclxuXHJcblx0XHR0aGlzLnNldFNvdXJjZShjb25maWcuc291cmNlKTtcclxuXHRcdHRoaXMuc2V0QXV0aG9yKGNvbmZpZy5hdXRob3IpO1xyXG5cdFx0dGhpcy5sb2FkSW1hZ2VUb0RPTShjb25maWcuZG9tSWQsIGNvbmZpZy5wYXRoKTtcclxuXHJcblx0XHQvL0hpZGUgYW55IDxoMj4gdGV4dCBlcXVpdmFsZW50IG9mIGlkZW50aXR5IGluIHRoaXMgQ1NTIGJveFxyXG5cdFx0dmFyIHRleHRJZGVudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgY29uZmlnLmRvbUlkICsgJyBoMicpO1xyXG5cdFx0dGV4dElkZW50aXR5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0fVxyXG5cclxufVxyXG4iLCIvKiogXHJcbiAqIFN0YXRpY0ltYWdlLmpzXHJcbiAqIEltYWdlLXN0eWxlIEluZm9ybWF0aW9uIHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgb25jZSB0aGUgZ2FtZSBpcyBsb2FkZWRcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIEluZm8ge1xyXG5cclxuXHQvLyBzYXZlIHNjb3BlXHJcblx0Ly8gVE9ETzogcmVmYWN0b3Igd2l0aCBhcnJvdyBmdW5jdGlvblxyXG5cclxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcblx0XHRzdXBlcihjb25maWcpO1xyXG5cdFx0dGhpcy5yZWFkeSA9IGZhbHNlOyAvL292ZXItcmlkZSBHYW1lUGllY2UgYW5kIGluZm8gd2l0aCBkZWZlcnJhbHNcclxuXHRcdHRoaXMuaW1hZ2UgPSBudWxsO1xyXG5cdFx0dGhpcy5wYXRoID0gY29uZmlnLnBhdGg7XHJcblx0XHR0aGlzLmF1dGhvciA9IGNvbmZpZy5hdXRob3I7XHJcblx0XHR0aGlzLnNvdXJjZSA9IGNvbmZpZy5zb3VyY2U7XHJcblx0fVxyXG5cclxuXHQvLyBsb2FkIGFuIGltYWdlXHJcblx0bG9hZCAocGF0aCwgY2FsbGJhY2spIHtcclxuXHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdHRoYXQuc2V0UmVhZHkoZmFsc2UpO1xyXG5cdFx0Y29uc29sZS5sb2coJ2VudGVyaW5nIGxvYWQgaW5JbWFnZScpO1xyXG5cdFx0dmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cdFx0aW1nLnNyYyA9IHBhdGg7XHJcblx0XHRpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyh0aGF0Lm5hbWUgKyAnIGltYWdlIGxvYWRlZCBmcm9tOicgKyBwYXRoICsgJyB3OicgKyBpbWcud2lkdGggKyAnIGg6JyArIGltZy5oZWlnaHQpXHJcblx0XHRcdHRoYXQuc2V0UmVhZHkodHJ1ZSk7XHJcblx0XHRcdHRoYXQuZGF0YSA9IGltZztcclxuXHRcdFx0XHJcblx0XHRcdGlmKGNhbGxiYWNrKSB7XHJcblx0XHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZXJyb3IgbG9hZGluZyBpbWcgZnJvbTonICsgcGF0aCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBsb2FkIGltYWdlLCBhcHBlbmQgdG8gZXhpc3RpbmcgRE9NIGVsZW1lbnRcclxuXHQvLyBOT1RFOiB0aGlzIGlzIG92ZXItd3JpdHRlbiBpbiBDaGFyYWN0ZXIuanMsIHdoaWNoIGxvYWRzIGltYWdlcyBpbnRvIENhbnZhc1xyXG5cdGxvYWRJbWFnZVRvRE9NIChkb21JZCwgcGF0aCwgY2FsbGJhY2spIHtcclxuXHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdHRoaXMubG9hZChwYXRoLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmb3JlZ3JvdW5kIGltYWdlICcgKyBwYXRoICsgJyBsb2FkZWQnKVxyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21JZCkuYXBwZW5kQ2hpbGQodGhhdC5kYXRhKTtcclxuXHRcdFx0aWYgKGNhbGxiYWNrKSB7XHJcblx0XHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly8gbG9hZCBpbWFnZSBhcyBhIENTUyBiYWNrZ3JvdW5kIGltYWdlIGludG8gZXhpc3RpbmcgRE9NIGVsZW1lbnQuIFxyXG5cdC8vIE5PVEU6IG5vIGxvY2FsIHJlZmVyZW5jZSB0byBpbWFnZSBpbiB0aGlzIGNhc2VcclxuXHRsb2FkQmFja2dyb3VuZEltYWdlIChjb250YWluZXIsIHBhdGgsIGNhbGxiYWNrKSB7XHJcblx0XHRjb25zb2xlLmxvZygnbG9hZGluZyBiYWNrZ3JvdW5kIGltYWdlOicgKyBwYXRoKVxyXG5cdFx0Y29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZT0ndXJsKCcgKyBwYXRoICsgJyknO1xyXG5cdFx0dGhpcy5zZXRSZWFkeSh0cnVlKTtcclxuXHRcdGlmIChjYWxsYmFjaykge1xyXG5cdFx0XHRjYWxsYmFjaygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gRHJhdyB0aGUgaW1hZ2UgdG8gYSBzdXBwbGllZCBjYW52YXMgY29udGV4dFxyXG5cdGRyYXdUb0NhbnZhcyAoY29udGV4dCwgcG9zaXRpb24sIHNpemUpIHtcclxuXHRcdGNvbnRleHQuZHJhd0ltYWdlKGltZywgcG9zaXRpb24udG9wLCBwb3NpdGlvbi5sZWZ0LCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XHJcblx0fVxyXG5cclxuXHQvLyBEcmF3IHRvIHRoZSBET00uIEFzc3VtZSB0aGUgSW1hZ2Ugd2FzIGFscmVhZHkgYXR0YWNoZWQgdG8gdGhlIERPTVxyXG5cdGRyYXdUb0RPTSAocG9zaXRpb24sIHNpemUpIHtcclxuXHRcdHRoaXMuaW1hZ2Uuc3R5bGUudG9wID0gcG9zaXRpb24udG9wO1xyXG5cdFx0dGhpcy5pbWFnZS5zdHlsZS5sZWZ0ID0gcG9zaXRpb24ubGVmdDtcclxuXHRcdHRoaXMuaW1hZ2Uuc3R5bGUud2lkdGggPSBzaXplLndpZHRoO1xyXG5cdFx0dGhpcy5pbWFnZS5zdHlsZS5oZWlnaHQgPSBzaXplLmhlaWdodDtcclxuXHR9XHJcblxyXG59XHJcbiIsIi8qKiBcclxuICogSW5mby5qc1xyXG4gKiBHZW5lcmljIGluZm9ybWFpdG9uIG9iamVjdFxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlXHJcbiAqL1xyXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm8gZXh0ZW5kcyBHYW1lUGllY2Uge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuXHRcdHN1cGVyKGNvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRzZXRBdXRob3IgKGF1dGhvcikge1xyXG5cdFx0dGhpcy5hdXRob3IgPSBhdXRob3I7XHJcblx0fVxyXG5cclxuXHRzZXRTb3VyY2UgKHNvdXJjZSkge1xyXG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcblx0fVxyXG5cclxufSIsIi8qKiBcclxuICogSW5zdHJ1Y3Rpb25zLmpzXHJcbiAqIFRleHQgd2hpY2ggdGVsbHMgdGhlIFBsYXllciBob3cgdG8gcGxheSB0aGUgZ2FtZS5cclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcbiBpbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xyXG4gaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RydWN0aW9ucyBleHRlbmRzIFN0YXRpY1RleHQge1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcblx0XHRzdXBlcihjb25maWcpO1xyXG5cdH1cclxufVxyXG4iLCIvKiogXHJcbiAqIExpb24uanNcclxuICogQSBMaW9uLCB3aG8gdHJpZXMgdG8gZ2V0IHRoZSBQbGF5ZXIuXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XHJcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBMaW9uIGV4dGVuZHMgQW5pbWFsIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlciAoY29uZmlnKTtcclxuIFx0fVxyXG4gfSIsIi8qKiBcclxuICogQGNsYXNzIE1vdmVyXHJcbiAqIEBkZXNjcmlwdGlvbiB1cGRhdGUgcG9zaXRpb24gb2Ygb2JqZWN0IGJlaW5nIGFuaW1hdGVkIGJ5IEdhbWUuXHJcbiAqL1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmVyIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChnYW1lT2JqKSB7XHJcbiBcdFx0Ly90aGlzLm5ld1RvcCA9IDEsIHRoaXMubmV3TGVmdCA9IDEsIHRoaXMubmV3Qm90dG9tID0gMSwgdGhpcy5uZXdSaWdodCA9IDE7XHJcbiBcdFx0dGhpcy5vYmogPSBnYW1lT2JqO1xyXG5cclxuICAgICAgICAvLyBDaGFyYWN0ZXIgaGFzIHJlZmVyZW5jZSB0byBHYW1lXHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZU9iai5nYW1lO1xyXG5cclxuICAgICAgICAvLyBNb3ZlbWVudCB0eXBlc1xyXG4gICAgICAgIHRoaXMudHlwZSA9IDA7XHJcbiAgICAgICAgdGhpcy5TTEVXID0gMTtcclxuICAgICAgICB0aGlzLlJBTkRPTSA9IDI7XHJcbiAgICAgICAgdGhpcy5QSU5HUE9JTkcgPSAzO1xyXG5cclxuIFx0fVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEBtZXRob2QgdHJ1bmNhdGVcclxuICAgICAqIEBkZXNjcmlwdGlvbiB0cnVuY2F0ZSAobm90IHJvdW5kKSBudW1iZXIgdG8gZml4ZWQgbnVtYmVyIG9mIGRlY2ltYWxzXHJcbiAgICAgKiBAcGFyYW0gTnVtYmVyIG51bSBmbG9hdGluZy1wb2ludCBudW1iZXJcclxuICAgICAqIEBwYXJhbSBJbnRlZ2VyIGRlY2ltYWxzIHRoZSBudW1iZXIgb2YgZGVjaW1hbHMgcG9pbnRzIHRvIHJvdW5kIHRvXHJcbiAgICAgKiBAcmV0dXJucyBOdW1iZXIgdGhlIHRydW5jYXRlZCBudW1iZXJcclxuICAgICAqL1xyXG4gICAgdHJ1bmNhdG9yIChudW0sIGRlY2ltYWxzKSB7ICAgIFxyXG4gICAgICAgIHZhciBudW1Qb3dlciA9IE1hdGgucG93KDEwLCBkZWNpbWFscyk7IC8vIFwibnVtUG93ZXJDb252ZXJ0ZXJcIiBtaWdodCBiZSBiZXR0ZXJcclxuICAgICAgICByZXR1cm4gfn4obnVtICogbnVtUG93ZXIpL251bVBvd2VyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEBtZXRob2QgcmFuZG9taXplclxyXG4gICAgICogQGRlc2NyaXB0aW9uIHJhbmRvbWl6ZSBhIG51bWJlclxyXG4gICAgICovXHJcbiAgICByYW5kb21pemVyICgpIHtcclxuICAgICAgICB2YXIgZCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIChkID0gcGFyc2VJbnQoZCkgLSBkKTtcclxuICAgICAgICBkID0gdGhpcy50cnVuY2F0b3IoZCwgMikgLyAxMDtcclxuICAgICAgICByZXR1cm4gZDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBAbWV0aG9kIGdldENlbnRlclxyXG4gICAgICovXHJcbiAgICBnZXRDZW50ZXIgKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB4ICsgKHdpZHRoLzIpLFxyXG4gICAgICAgICAgICB5OiB5ICsgKGhlaWdodC8yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiBcdC8qKiBcclxuIFx0ICogQG1ldGhvZCBpbml0U2xpZGVyXHJcbiBcdCAqIEBkZXNjcmlwdGlvbiBzbGV3IG9iamVjdCBob3Jpem9udGFsbHkgd2l0aCBrZXlwcmVzc2VzXHJcbiBcdCAqIEBwYXJhbSBkZWcgdGhlIGRlZ3JlZXMgdG8gcm90YXRlIHRoZSBQbGF5ZXIuIFxyXG4gICAgICogTk9URTogd2UgYWxzbyBncmFiIHRoZSAnVHJ1bXAnIG9iamVjdC5cclxuIFx0ICovXHJcbiBcdGluaXRTbGV3ICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW5pdGluZyBzbGV3IG1vdGlvbicpO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMuU0xFVztcclxuXHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICAgICAgdGhpcy50aWNrZXIgPSAwO1xyXG4gICAgICAgIHRoaXMubGFzdERpciA9IDE7XHJcblxyXG4gICAgICAgIC8vIGFkZCBib3R0b20sIHJpZ2h0IHRvIG1ha2UgYSBSZWN0IGZvciB0aGUgUGxheWVyQXJlYVxyXG4gICAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10ucGxheWVyQXJlYXNbMF0ucG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5ib3VuZHMud2lkdGggPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5wbGF5ZXJBcmVhc1swXS5zaXplLndpZHRoO1xyXG4gICAgICAgIHRoaXMuYm91bmRzLmhlaWdodCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLnBsYXllckFyZWFzWzBdLnNpemUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYm91bmRzLmJvdHRvbSA9IHRoaXMuYm91bmRzLnRvcCArIHRoaXMuYm91bmRzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmJvdW5kcy5yaWdodCA9IHRoaXMuYm91bmRzLmxlZnQgKyB0aGlzLmJvdW5kcy53aWR0aDtcclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMub2JqLmltYWdlO1xyXG5cclxuICAgICAgICAvLyB0b2dnbGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBQbGF5ZXIgd2hlbiBraWNraW5nXHJcbiAgICAgICAgdGhpcy51bktpY2sgPSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XHJcbiAgICAgICAgdGhpcy5pbktpY2sgPSB0aGlzLm9iai5wb3NpdGlvbi50b3AgLSA2O1xyXG5cclxuICAgICAgICAvLyBOT1RFOiBUcnVtcCBpcyBhZGRlZCB0byBQbGF5ZXIgaW4gQ29sbGlkZXJcclxuXHJcbiAgICAgICAgLy8gbGlzdGVuIGZvciB1c2VyIGV2ZW50c1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBcclxuICAgICAgICAgICAgZXZlbnQgPT4gdGhpcy5zbGV3KGV2ZW50KSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsXHJcbiAgICAgICAgICAgIGV2ZW50ID0+IHRoaXMudW5raWNrKGV2ZW50KSwgZmFsc2UpO1xyXG4gXHR9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogQG1ldGhvZCBpbml0UmFuZG9tXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdCByYW5kb20gbW90aW9ucyBhbG9uZyBhIHBhdGguIFVzZWQgZm9yIFxyXG4gICAgICogQW5pbWFsIGNoYXJhY3RlcnMgbW92aW5nIHRocm91Z2ggdGhlIEFuaW1hbEFyZWEuXHJcbiAgICAgKi9cclxuICAgIGluaXRSYW5kb20gKHByZWZTcGVlZCwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQgcmFuZG9tIG1vdGlvbicpO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMuUkFORE9NO1xyXG5cclxuICAgICAgICB0aGlzLnNwZWVkID0gcHJlZlNwZWVkICogdGhpcy50aW1lU3RhbXBSYW5kb20oKTtcclxuICAgICAgICB0aGlzLmRlbGF5ID0gdGhpcy50aW1lU3RhbXBSYW5kb20oKSAqIDMwMDtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuZGVsYXlDb3VudGVyID0gMDtcclxuICAgICAgICB0aGlzLk1BWCA9IDMwO1xyXG4gICAgICAgIHRoaXMuTUFYX0RFTEFZID0gMzAwO1xyXG5cclxuICAgICAgICAvLyBhZGQgYm90dG9tLCByaWdodCB0byBtYWtlIGEgUmVjdCBmb3IgdGhlIEFuaW1hbEFyZWFcclxuICAgICAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuYm91bmRzLndpZHRoID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10uYW5pbWFsQXJlYXNbMF0uc2l6ZS53aWR0aDtcclxuICAgICAgICB0aGlzLmJvdW5kcy5oZWlnaHQgPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5zaXplLmhlaWdodDtcclxuICAgICAgICB0aGlzLmJvdW5kcy5ib3R0b20gPSB0aGlzLmJvdW5kcy50b3AgKyB0aGlzLmJvdW5kcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5ib3VuZHMucmlnaHQgPSB0aGlzLmJvdW5kcy5sZWZ0ICsgdGhpcy5ib3VuZHMud2lkdGg7XHJcblxyXG4gICAgICAgIC8vIGdldCBib3R0b20gYW5kIHJpZ2h0IGZyb20gQ2hhcmFjdGVyIGZyb20gaXRzIEltYWdlXHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMub2JqLmltYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEBtZXRob2QgaW5pdFBpbmdQb25nXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gaGF2ZSBhIFRydW1wIGluaXQuXHJcbiAgICAgKiBOT1RFOiBjb2xsaXNpb24gcG90ZW50aWFsIGFkZGVkIHNlcGFyYXRlbHlcclxuICAgICAqL1xyXG4gICAgaW5pdFBpbmdQb25nIChwcmVmU3BlZWQsIHRydW1wKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQgcGluZ3BvbmcgbW90aW9uJyk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5QSU5HUE9ORztcclxuXHJcbiAgICAgICAgLy9BbmltYWwgYXJlYVxyXG4gICAgICAgIC8vIGFkZCBib3R0b20sIHJpZ2h0IHRvIG1ha2UgYSBSZWN0IGZvciB0aGUgQW5pbWFsQXJlYVxyXG4gICAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10uYW5pbWFsQXJlYXNbMF0ucG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5ib3VuZHMud2lkdGggPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5zaXplLndpZHRoO1xyXG4gICAgICAgIHRoaXMuYm91bmRzLmhlaWdodCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnNpemUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYm91bmRzLmJvdHRvbSA9IHRoaXMuYm91bmRzLnRvcCArIHRoaXMuYm91bmRzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmJvdW5kcy5yaWdodCA9IHRoaXMuYm91bmRzLmxlZnQgKyB0aGlzLmJvdW5kcy53aWR0aDtcclxuXHJcbiAgICAgICAgdGhpcy5vYmouc3RhcnRUb3AgPSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XHJcblxyXG4gICAgICAgIC8vIGdldCBib3R0b20gYW5kIHJpZ2h0IGZyb20gQ2hhcmFjdGVyIGZyb20gaXRzIEltYWdlXHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMub2JqLmltYWdlO1xyXG5cclxuICAgICAgICB0aGlzLm9iai5zcGVlZCA9IDA7XHJcbiAgICAgICAgdGhpcy5vYmouZHggPSAwO1xyXG4gICAgICAgIHRoaXMub2JqLmR5ID0gMDtcclxuXHJcbiAgICAgICAgLy8gTk9URTogQW5pbWFscyBhbmQgUGxheWVycyBhcmUgYWRkZWQgdG8gVHJ1bXAgaW4gQ29sbGlkZXJcclxuXHJcbiAgICB9XHJcblxyXG4gXHQvKiogXHJcbiBcdCAqIEBtZXRob2Qgc2xldyBcclxuIFx0ICogTW92ZSBvYmplY3Qgc2xpZ2h0bHkgdXAgZm9yIGR1cmF0aW9uIG9mIHNwYWNlIGJhciBkb3duXHJcbiAgICAgKiBDYWxsYmFjayBmb3Iga2V5ZG93biBhZGRFdmVudExpc3RlbmVyXHJcbiAgICAgKiBAcGFyYW0gRXZlbnQgZSB0aGUga2V5ZG93biBldmVudFxyXG4gICAgICovXHJcbiBcdHNsZXcgKGUpIHtcclxuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIDMyOlxyXG4gICAgICAgICAgICBjYXNlIDM4OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5raWNrKGUpO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL3ByZXZlbnQgc2Nyb2xsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzNzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQrKztcclxuICAgICAgICAgICAgICAgIHRoaXMudGlja2VyID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgLT0gdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdERpciA9IC0xO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL3ByZXZlbnQgc2Nyb2xsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOTpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQrKztcclxuICAgICAgICAgICAgICAgIHRoaXMudGlja2VyID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKz0gdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdERpciA9IDE7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vcHJldmVudCBzY3JvbGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gXHR9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogQG1ldGhvZCB1cGRhdGVTbGV3XHJcbiAgICAgKiBAZGVzY3JpcHRpb24gcHJvdmlkZSBzaW1wbGUgZWFzaW5nIG1vdGlvbiwgYWxzbywgYm91bmNlIFxyXG4gICAgICogb2ZmIHdhbGxzLlxyXG4gICAgICovXHJcbiAgICB1cGRhdGVTbGV3ICgpIHtcclxuICAgICAgICB0aGlzLnRpY2tlcisrO1xyXG4gICAgICAgIGlmICh0aGlzLnNwZWVkID4gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50aWNrZXIgPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCAvPSAyO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCArPSAodGhpcy5sYXN0RGlyICogdGhpcy5zcGVlZCk7XHJcblxyXG4gICAgICAgIC8vY2hlY2sgYm91bmRzXHJcbiAgICAgICAgaWYgKHRoaXMuYm91bmRzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3ID0gdGhpcy5pbWFnZS5kYXRhLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPCB0aGlzLmJvdW5kcy5sZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0RGlyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkIC89IDEuMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ID0gdGhpcy5ib3VuZHMubGVmdCArICh0aGlzLnNwZWVkICogMS41KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vYmoucG9zaXRpb24ubGVmdCA+IHRoaXMuYm91bmRzLnJpZ2h0IC0gdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdERpciA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLz0gMS4yO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPSB0aGlzLmJvdW5kcy5yaWdodCAtIHcgLSAodGhpcy5zcGVlZCAqIDEuNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogQG1ldGhvZCBraWNrXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gaWYgZm9vdCBpcyBuZWFyIFRydW1wLCBraWNrIGhpbSBpbnRvIHRoZSBBbmltYWxcclxuICAgICAqL1xyXG4gICAga2ljayAoZSkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJzo6OjpUSElTIFRSVU1QOjo6OjonICsgdGhpcy5vYmoudHJ1bXApXHJcbiAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wID0gdGhpcy5pbktpY2s7XHJcblxyXG4gICAgICAgIC8vIHNlZSBpZiB3ZSdyZSBjbG9zZSBlbm91Z2ggdG8ga2ljayBpbiB0aGUgeSBheGlzXHJcbiAgICAgICAgdmFyIHRydW1wWURpc3QgPSB0aGlzLm9iai5wb3NpdGlvbi50b3AgLSB0aGlzLm9iai50cnVtcC5pbWFnZS5kYXRhLndpZHRoIC0gdGhpcy5vYmoudHJ1bXAucG9zaXRpb24udG9wO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3RydW1wWURpc3Q6JyArIHRydW1wWURpc3QpXHJcblxyXG4gICAgICAgIC8vIElmIFBsYXllciBpcyBjbG9zZSBpbiBZLCBhbmQgaW5zaWRlIFggcmFuZ2UsIGtpY2sgdGhlIFRydW1wIGludG8gQW5pbWFsQXJlYVxyXG4gICAgICAgIGlmICh0cnVtcFlEaXN0IDwgMTApIHtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBzdGFydCB0aGUgVHJ1bXAgbW92aW5nLCBzcGVlZFxyXG4gICAgICAgICAgICB0aGlzLm9iai50cnVtcC5zcGVlZCA9IDQwO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdG9vIGNsb3NlIHRvIGxlZnQgd2FsbCwgcHJlLWFzc2lnbiBhIHZhbHVlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9iai50cnVtcC5wb3NpdGlvbi5sZWZ0IDwgKHRoaXMuYm91bmRzLmxlZnQgKyAyMCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPj5UcnVtcDogbGVmdCBib3VuZCBjb3JyZWN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keCA9IC0wLjI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keSA9IDAuODtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY29tcHV0ZSBkeCBhbmQgZHkgZm9yIFRydW1wXHJcbiAgICAgICAgICAgIHZhciBkaXN0ID0gKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgLSB0aGlzLm9iai50cnVtcC5wb3NpdGlvbi5sZWZ0KSAvIDUwO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlzdCkgPCAxLjApIHtcclxuICAgICAgICAgICAgICAgIHZhciBkeCA9IGRpc3Q7XHJcbiAgICAgICAgICAgICAgICBpZihkeCA+IDAgJiYgZHggPCAwLjcpIHtcclxuICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR4ID0gZHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHkgPSAxLjAgLSBkeDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZHggPCAwICYmIGR4ID4gLTAuNykge1xyXG4gICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHggPSBkeDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keSA9IDEuMCArIGR4O1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZHggPCAwLjAwMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5yYW5kb21pemVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZCA9IGQgLSB0aGlzLnJhbmRvbWl6ZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHggPSBkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR5ID0gMS4wICsgZHg7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gLy8gZW5kIG9mIGZ1bmN0aW9uXHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogQG1ldGhvZCB1bmtpY2tcclxuICAgICAqIEBkZXNjcmlwdGlvbiBzZXQgcG9zaXRpb24gb2YgUGxheWVyIGJhY2sgdG8gb3JpZ2luYWxcclxuICAgICAqL1xyXG4gICAgdW5raWNrIChlKSB7XHJcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAzMjpcclxuICAgICAgICAgICAgY2FzZSAzODpcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCA9IHRoaXMudW5LaWNrO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEBtZXRob2QgdGltZVN0YW1wUmFuZG9tXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gcmFuZG9taXplIGluIGEgMTAtZm9sZCByYW5nZSB1c2luZyB3aW5kb3cucGVyZm9ybWFuY2VcclxuICAgICAqL1xyXG4gXHR0aW1lU3RhbXBSYW5kb20gKCkge1xyXG4gXHRcdHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxyXG4gICAgICAgIH1cclxuXHRcdHZhciBudW0gPSAneHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSoxMCklMTAgfCAwO1xyXG4gICAgICAgICAgICBkID0gTWF0aC5mbG9vcihkLzEwKTtcclxuICAgICAgICAgICAgcmV0dXJuIChjPT0neCcgPyByIDogKHImMHgzfDB4OCkpLnRvU3RyaW5nKDEwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgcmV0dXJuIG51bSAvIDEwMDAwO1xyXG4gXHR9XHJcblxyXG4gXHQvKipcclxuXHQgKiBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChleGNsdXNpdmUpXHJcblx0ICogQGxpbmsgXHJcblx0ICovXHJcblx0Z2V0UmFuZG9tKG1pbiwgbWF4KSB7XHJcbiAgICBcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG5cdH1cclxuXHJcbiBcdC8qKiBcclxuIFx0ICogQG1ldGhvZCB1cGRhdGVSYW5kb21XYWxrXHJcbiBcdCAqIEBkZXNjcmlwdGlvbiBnZW5lcmF0ZSByYW5kb20gd2Fsaywgd2l0aCBvbmUgcHJlZmVycmVkIGRpcmVjdGlvbiwgXHJcbiBcdCAqIHVzZWQgYnkgQW5pbWFscy5cclxuICAgICAqIHRoaXMuZGlyZWN0aW9uIGlzIHRoZSBvdmVyYWxsIHBhdGggdGhlIEFuaW1hbCBpcyBmb2xsb3dpbmcgdG8gb25lIG9mIHRoZSBcclxuICAgICAqIGZvdXIgd2FsbHMgb2YgdGhlIEFuaW1hbEFyZWEuIElmIGl0IGlzICdyZXR1cm4nIGl0IGhhcyBjb2xsaWRlZCB3aXRoIGEgVHJ1bXBcclxuICAgICAqIGFuZCBpcyByZXR1cm5pbmcgdG8gaXRzIGNhZ2UuXHJcbiBcdCAqL1xyXG4gXHR1cGRhdGVSYW5kb21XYWxrICgpIHtcclxuIFx0XHR0aGlzLmNvdW50ZXIrKztcclxuIFx0XHR0aGlzLmRlbGF5Q291bnRlcisrO1xyXG4gXHRcdGlmICh0aGlzLmRlbGF5Q291bnRlciA8IHRoaXMuZGVsYXkpIHtcclxuIFx0XHRcdC8vY29uc29sZS5sb2coJ2RlbGF5Q291bnRlcjonICsgdGhpcy5kZWxheUNvdW50ZXIgKyAnIE1BWDonICsgdGhpcy5NQVhfREVMQVkpO1xyXG4gXHRcdFx0cmV0dXJuO1xyXG4gXHRcdH1cclxuXHJcbiAgICAgICAgLy8gY29tcHV0ZSBkeCBhbmQgZHkgZnJvbSByYW5kb20gd2Fsay4gc3RvcmUgaW5pdGlhbCBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMub2xkTGVmdCA9IHRoaXMub2JqLnBvc2l0aW9uLmxlZnQ7XHJcbiAgICAgICAgdGhpcy5vbGRUb3AgPSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XHJcblxyXG4gXHRcdHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcclxuIFx0XHRcdGNhc2UgJ3RvcCc6XHJcbiBcdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLnRvcCAtPSAodGhpcy5zcGVlZCArICgwLjEgKiB0aGlzLmdldFJhbmRvbSgxLCB0aGlzLnNwZWVkKSkpO1xyXG4gXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ICs9IDEwICogKHRoaXMuZ2V0UmFuZG9tKC10aGlzLnNwZWVkLCB0aGlzLnNwZWVkKSk7XHJcbiAgICAgICAgICAgICAgICBpZihpc05hTih0aGlzLm9iai5wb3NpdGlvbi5sZWZ0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vVE9ETzogRklHVVJFIE9VVCBXSEFUIElTIEJFSU5HIENPTVBVVEVEIEFTIE5BTiBGT1IgVEhJUyEhISEhXHJcbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBBREQgQU5JTUFMIFJFQk9VTlQgVE8gSE9NRSBDQUdFXHJcbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBBREQgQU5JTUFMIFNUQVlTIElOIENBR0VcclxuICAgICAgICAgICAgICAgICAgICAvL1RPRE86IEFOSU1BTFMgXCJyb2xsXCIgQVJPVU5EIFNUQVRJT05BUlkgVFJVTVBcclxuICAgICAgICAgICAgICAgIH1cclxuIFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHRjYXNlICdsZWZ0JzpcclxuIFx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24ubGVmdCAtPSAodGhpcy5zcGVlZCArICgwLjEgKiB0aGlzLmdldFJhbmRvbSgxLCB0aGlzLnNwZWVkKSkpO1xyXG4gXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi50b3AgKz0gIDEwICoodGhpcy5nZXRSYW5kb20oLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpKTtcclxuIFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHRjYXNlICdib3R0b20nOlxyXG4gIFx0XHRcdFx0aWYgKHRoaXMuY291bnRlciA+IHRoaXMuTUFYKSB7XHJcbiAgXHRcdFx0XHRcdHRoaXMuTUFYID0gcGFyc2VJbnQoNCwgMzApO1xyXG4gXHRcdFx0XHRcdHRoaXMubmV3TGVmdCA9ICh0aGlzLmdldFJhbmRvbSgtdGhpcy5zcGVlZCwgdGhpcy5zcGVlZCkpO1xyXG4gXHRcdFx0XHRcdHRoaXMuY291bnRlciA9IDA7XHJcbiBcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyID4gdGhpcy5NQVggLyAyKSB7XHJcbiBcdFx0XHRcdFx0dGhpcy5zcGVlZCArPSB0aGlzLnRpbWVTdGFtcFJhbmRvbSgpIC8gMTIwO1xyXG4gXHRcdFx0XHR9XHJcblx0XHRcdCBcdHRoaXMub2JqLnBvc2l0aW9uLnRvcCArPSB0aGlzLnNwZWVkO1xyXG4gXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ICs9IHRoaXMubmV3TGVmdDtcclxuIFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHRjYXNlICdyaWdodCc6XHJcbiBcdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKz0gKHRoaXMuc3BlZWQgKyAoMC4xICogdGhpcy5nZXRSYW5kb20oMSwgdGhpcy5zcGVlZCkpKTtcclxuIFx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24udG9wICs9IDEwICogKHRoaXMuZ2V0UmFuZG9tKC10aGlzLnNwZWVkLCB0aGlzLnNwZWVkKSk7XHJcbiBcdFx0XHRcdGJyZWFrO1xyXG4gXHRcdFx0Y2FzZSAncmV0dXJuJzpcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHJldHVybiBBbmltYWwgdG8gaXRzIGNhZ2VcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjYWdlZCc6XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiB3aGVuIGNhZ2VkLCByZXNldCB1bnRpbCBpdCBpcyB1bmNhZ2VkIGFnYWluXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuIFx0XHRcdFx0Y29uc29sZS5lcnJvcignTW92ZXIuc2V0UHJlZkRpcmVjdGlvbjogaW52YWxpZCBkaXJlY3Rpb246JyArIHRoaXMuZGlyZWN0aW9uKTtcclxuIFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0fVxyXG5cclxuICAgICAgICAvLyBDb21wdXRlIGR4IGFuZCBkeSBmb3IgQW5pbWFsc1xyXG4gICAgICAgIHZhciB4ZGlzdCA9IHRoaXMub2xkTGVmdCAtIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQ7XHJcbiAgICAgICAgdmFyIHlkaXN0ID0gdGhpcy5vbGRUb3AgLSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XHJcbiAgICAgICAgdmFyIHN1bSA9IHhkaXN0ICsgeWRpc3Q7XHJcbiAgICAgICAgaWYgKHN1bSA+IDAuMDAwMSkge1xyXG4gICAgICAgICAgICB0aGlzLm9iai5keCA9IHhkaXN0IC8gc3VtO1xyXG4gICAgICAgICAgICB0aGlzLm9iai5keSA9IHlkaXN0IC8gc3VtOyAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vYmouZHggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm9iai5keSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzYXZlIG91ciBuZXcgcG9zaXRpb25cclxuICAgICAgICB0aGlzLm9sZExlZnQgPSB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0O1xyXG4gICAgICAgIHRoaXMub2xkVG9wID0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKCcgZHg6JyArIHRoaXMub2JqLmR4ICsgJyBkeTonICsgdGhpcy5vYmouZHkgKyAnIHN1bTonICsgc3VtKVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZUNvbGxpc2lvbiAodHJ1bXAsIGFuaW1hbCkge1xyXG4gICAgICAgIHZhciB3ID0gdGhpcy5vYmouaW1hZ2UuZGF0YS53aWR0aDtcclxuICAgICAgICB2YXIgaCA9IHRoaXMub2JqLmltYWdlLmRhdGEuaGVpZ2h0O1xyXG4gICAgICAgIHZhciBhdyA9IGFuaW1hbC5pbWFnZS5kYXRhLndpZHRoO1xyXG4gICAgICAgIHZhciBhaCA9IGFuaW1hbC5pbWFnZS5kYXRhLmhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPCBhbmltYWwucG9zaXRpb24ubGVmdCArIGF3ICYmXHJcbiAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKyB3ID4gYW5pbWFsLnBvc2l0aW9uLmxlZnQgJiZcclxuICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wIDwgYW5pbWFsLnBvc2l0aW9uLnRvcCArIGFoICYmXHJcbiAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCArIGggPiBhbmltYWwucG9zaXRpb24udG9wKSB7IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL2dldCBUcnVtcCBjZW50ZXJhbCBwb2ludFxyXG4gICAgICAgICAgICAgICAgdmFyIHRYQ2VudGVyID0gdGhpcy5vYmoucG9zaXRpb24ubGVmdCArIHcvMjtcclxuICAgICAgICAgICAgICAgIHZhciB0WUNlbnRlciA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcCAgKyBoLzI7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9nZXQgQW5pbWFsIGNlbnRyYWwgcG9pbnRcclxuICAgICAgICAgICAgICAgIHZhciBhWENlbnRlciA9IGFuaW1hbC5wb3NpdGlvbi5sZWZ0ICsgYXcvMjtcclxuICAgICAgICAgICAgICAgIHZhciBhWUNlbnRlciA9IGFuaW1hbC5wb3NpdGlvbi50b3AgKyBhaC8yO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vY29tcHV0ZSB4IGFuZCB5IHZlY3RvciBiZXR3ZWVuIGNlbnRlcnNcclxuICAgICAgICAgICAgICAgIHZhciBjWERpZmYgPSB0WENlbnRlciAtIGFYQ2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNZRGlmZiA9IHRZQ2VudGVyID0gYVlDZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVHJ1bXAgZG9lc24ndCByZWFjdCBpZiBub3QgbW92aW5nIChldmVuIGlmIGFuaW1hbCBkb2VzKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRydW1wLnNwZWVkICE9IDAgJiYgdHJ1bXAuZHggIT0gMCAmJiB0cnVtcC5keSAhPSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbW92ZSBvYmplY3Qgc28gaXQgaXNuJ3QgY29sbGlkaW5nIGFueW1vcmVcclxuICAgICAgICAgICAgICAgIGlmIChjWERpZmYgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRydW1wLnBvc2l0aW9uLnggKz0gKGNYRGlmZiArIDEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnVtcC5wb3NpdGlvbi54IC09IChjWERpZmYgKyAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY1lEaWZmID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnVtcC5wb3NpdGlvbi55ICs9IChjWURpZmYgKyAxKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ1bXAucG9zaXRpb24ueSAtPSAoY1lEaWZmICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbm9ybWFsaXplIG5ldyB2ZWN0b3JzXHJcbiAgICAgICAgICAgICAgICB0cnVtcC5keCA9IC1jWERpZmYgLyBjWURpZmY7XHJcbiAgICAgICAgICAgICAgICB0cnVtcC5keSA9IC1jWURpZmYgLyBjWERpZmY7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcm91bmRpbmcgZXJyb3JcclxuICAgICAgICAgICAgICAgIHZhciBkZGlmID0gTWF0aC5hYnModHJ1bXAuZHggKyB0cnVtcC5keSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGRpZiA+IDEuMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cnVtcC5keCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydW1wLmR5IC09IGRkaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1bXAuZHkgKz0gZGRpZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IC8vZW5kIG9mIFRydW1wIGlzIG1vdmluZ1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZHg6Ojo6OjonICsgdHJ1bXAuZHggKyAnIGR5Ojo6Ojo6JyArIHRydW1wLmR5KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBAbWV0aG9kIHBpbmdQb25nXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gbW92ZSBpbiBhIHBpbmctcG9uZyBzdHlsZS4gVGhpcyBpcyBzcGVjaWZpYyB0byB0aGUgZ2FtZS5cclxuICAgICAqIDEuIGNvbGxpc2lvbiBzdGFydHMgdGhlIGNoYXJhY3RlciBtb3ZpbmdcclxuICAgICAqIDIuIHRoZXkgYm91bmNlIG9uIGFsbCB3YWxscyBFWENFUFQgdGhlIG9uZSB0aGV5IHdlcmUgY2xvc2VzdCB0byB3aGVuIGNvbGxpZGUgd2l0aFxyXG4gICAgICogMy4gd2hlbiB0aGV5IGludGVyc2VjdCB0aGF0IHdhbGwsIHRoZXkgc3RvcFxyXG4gICAgICovXHJcbiAgICBwaW5nUG9uZyAoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZHg6JyArIHRoaXMub2JqLmR4ICsgJyBkeTonICsgdGhpcy5vYmouZHkpO1xyXG4gICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgLT0gdGhpcy5vYmouc3BlZWQgKiB0aGlzLm9iai5keDtcclxuICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgLT0gdGhpcy5vYmouc3BlZWQgKiB0aGlzLm9iai5keTtcclxuXHJcbiAgICAgICAgLy9jaGVjayBib3VuZHMgKEFuaW1hbEFyZWEpXHJcbiAgICAgICAgaWYgKHRoaXMuYm91bmRzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9iai5pbWFnZS5kYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHcgPSB0aGlzLm9iai5pbWFnZS5kYXRhLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgdmFyIGggPSB0aGlzLm9iai5pbWFnZS5kYXRhLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBydW4gdGhpcyBvbmx5IGlmIHdlIGFyZSBtb3ZpbmcgZG93biB0aGUgc2NyZWVuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmouZHkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLnRvcCA+ICh0aGlzLm9iai5zdGFydFRvcCAtICh0aGlzLm9iai5keSAqIHRoaXMub2JqLnNwZWVkKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLm9iai5keSA9IC10aGlzLm9iai5keTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wID0gdGhpcy5vYmouc3RhcnRUb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLmR4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouZHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdCA9IHRoaXMuYm91bmRzLmJvdHRvbSAtIGggLSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwZCA9IC10aGlzLm9iai5keSAqIHRoaXMub2JqLnNwZWVkICogNDtcclxuICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vY29uc29sZS5sb2coJ2Rpc3Q6JyArIGRpc3QgKyAnIHNwZDonICsgc3BkKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVjZWxlcmF0ZSBiZWZvcmUgc3RvcHBpbmcgYXQgYm90dG9tIG9mIEFuaW1hbEFyZWFcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdCA8IHNwZCAmJiBzcGQgPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnNwZWVkIC89IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAvL2VuZCBvZiBkeSBuZWdhdGl2ZSAoZ29pbmcgZG93bilcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBib3VuY2Ugb24gdGhlIG90aGVyIDMgd2FsbHNcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IDwgdGhpcy5ib3VuZHMubGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLmR4ID0gLXRoaXMub2JqLmR4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLnRvcCA8IHRoaXMuYm91bmRzLnRvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLmR5ID0gLXRoaXMub2JqLmR5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPiB0aGlzLmJvdW5kcy5yaWdodCAtIHcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5keCA9IC10aGlzLm9iai5keDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBlbmNvdW5kZXIgYW4gYW5pbWFsLCBib3VuY2UsIEFORCAna2ljaycgdGhlIGFuaW1hbCBiYWNrIGludG8gaXRzIGNhZ2VcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5hbmltYWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMub2JqLmFuaW1hbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFuaW1hbCA9IHRoaXMub2JqLmFuaW1hbHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxjdWxhdGVDb2xsaXNpb24odGhpcy5vYmosIGFuaW1hbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0IHRoZSBBbmltYWwncyBzdGF0ZSB0byByZXR1cm4gaG9tZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IDwgYW5pbWFsLnBvc2l0aW9uLmxlZnQgKyBhdyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCArIHcgPiBhbmltYWwucG9zaXRpb24ubGVmdCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wIDwgYW5pbWFsLnBvc2l0aW9uLnRvcCArIGFoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgKyBoID4gYW5pbWFsLnBvc2l0aW9uLnRvcCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlTmV3VmVsb2NpdGllcyh0aGlzLm9iaiwgYW5pbWFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2JyZWFrIG91dCBvZiBob3Jpem9udGFsIG1vdmVcclxuICAgICAgICBpZiAodGhpcy5vYmouZHkgPCAwLjAwMSAmJiB0aGlzLm9iai5keCA+IDAuMDAxKSB7XHJcbiAgICAgICAgICAgIHZhciBkID0gdGhpcy5yYW5kb21pemVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMub2JqLmR5ICs9IGQgLSB0aGlzLnJhbmRvbWl6ZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuIH0gLy8gZW5kIG9mIGNsYXNzXHJcbiIsIi8qKiBcclxuICogUGxheWVyLmpzXHJcbiAqIFVzZXItY29udHJvbGxlZCBDaGFyYWN0ZXJcclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcclxuXHJcbiAvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcclxuIGltcG9ydCBNb3ZlciBmcm9tICcuL01vdmVyLmpzJztcclxuIGltcG9ydCBDb2xsaWRlciBmcm9tICcuL0NvbGxpZGVyLmpzJztcclxuIC8vIEVORCBBRERFRCBXRUVLIDExPDw8PDw8PDw8PDw8PFxyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIENoYXJhY3RlciB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XHJcblxyXG4gXHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxyXG4gXHRcdHRoaXMubW92ZXIuaW5pdFNsZXcoKTtcclxuICBcdFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFx0XHRcclxuIFx0fVxyXG5cclxuICBcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxyXG4gXHR1cGRhdGUgKCkge1xyXG4gXHRcdHRoaXMubW92ZXIudXBkYXRlU2xldygpO1xyXG4gXHR9XHJcbiBcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcclxuXHJcblxyXG4gfSIsIi8qKiBcclxuICogUGxheWVyQXJlYS5qc1xyXG4gKiBUaGUgcmVnaW9uIHdoZXJlIHRoZSBQbGF5ZXIgY2FuIG1vdmUuXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEFyZWFcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQXJlYSBleHRlbmRzIEFyZWEge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyKGNvbmZpZyk7XHJcbiBcdH1cclxuXHJcbiB9IiwiLyoqIFxyXG4gKiBTY29yZS5qc1xyXG4gKiBEaXNwbGF5IHVzZXIgc2NvcmVcclxuICogQGluaGVyaXRzIER5bmFtaWNUZXh0LCBUZXh0LCBJbmZvLCBHYW1lUGllY2VcclxuICovXHJcbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xyXG5pbXBvcnQgRHluYW1pY1RleHQgZnJvbSAnLi9EeW5hbWljVGV4dC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSBleHRlbmRzIER5bmFtaWNUZXh0IHtcclxuXHJcblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG5cdFx0c3VwZXIoY29uZmlnKTtcclxuXHR9XHJcbn0iLCIvKiogXHJcbiAqIFNjcmVlbi5qc1xyXG4gKiBHZW5lcmljIFNjcmVlbiBvYmplY3RcclxuICogQGluaGVyaXRzIEdhbWVQaWVjZS5qc1xyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG5cclxuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcclxuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcclxuIGltcG9ydCBJZGVudGl0eSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW4gZXh0ZW5kcyBHYW1lUGllY2Uge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyKGNvbmZpZyk7IC8vaW5pdCAncGFyZW50JyBHYW1lUGllY2VcclxuXHJcbiBcdFx0Ly8gc2F2ZSBhIHJlZmVyZW5jZSB0byBvdXIgcGFyZW50IEdhbWUgb2JqZWN0XHJcbiBcdFx0dGhpcy5nYW1lID0gY29uZmlnLmdhbWU7XHJcblxyXG4gXHRcdC8vIFNjcmVlbnMgYXJlIGRlZmluZWQgaW4gSFRNTCwgc28gc2F2ZSBhIHJlZmVyZW5jZSB0byBvdXIgRE9NIGlkXHJcbiBcdFx0dGhpcy5kb21JZCA9IGNvbmZpZy5pZDtcclxuXHJcbiBcdFx0Ly8gc2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgRE9NIGVsZW1lbnQgd2UncmUgY29ubmVjdGVkIHRvXHJcbiBcdFx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRvbUlkKTtcclxuXHJcbiBcdFx0Ly8gaW5zZXJ0IHRoZSBjb3B5cmlnaHQgaW5mbyBmcm9tIHRoZSBtYWluIEdhbWUgb2JqZWN0XHJcbiBcdFx0dGhpcy5hZGRXYXJuaW5nKCk7XHJcbiBcdH1cclxuXHJcbiBcdC8vIGxvYWQgYSBiYWNrZ3JvdW5kIGltYWdlIGludG8gdGhlIFNjcmVlblxyXG4gXHRsb2FkQmFja2dyb3VuZCAocGF0aCwgY2FsbGJhY2spIHtcclxuIFx0XHRjb25zb2xlLmxvZyhcImxvYWRpbmc6XCIgKyB0aGlzLmRvbUlkKTtcclxuIFx0XHR0aGlzLmJhY2tncm91bmRJbWFnZSA9IG5ldyBTdGF0aWNJbWFnZShcclxuIFx0XHRcdHtcclxuIFx0XHRcdFx0bmFtZTogdGhpcy5uYW1lICsgJy1pbWFnZScsXHJcbiBcdFx0XHRcdGRvbUlkOiB0aGlzLmlkICsgJy1pbWFnZScsXHJcbiBcdFx0XHRcdHBhdGg6IHBhdGgsXHJcbiBcdFx0XHRcdGNhbGxiYWNrOiBjYWxsYmFja1xyXG4gXHRcdFx0fVxyXG4gXHRcdCk7XHJcbiBcdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2UubG9hZEJhY2tncm91bmRJbWFnZSh0aGlzLmRvbSwgcGF0aCwgY2FsbGJhY2spO1xyXG4gXHR9XHJcblxyXG4gXHQvLyBzaG93IGFuZCBoaWRlIHJlZ2lvbnMgb2YgdGhlIFNjcmVlblxyXG4gXHRzaG93U2NyZWVuICgpIHtcclxuIFx0XHRjb25zb2xlLmxvZyhcInNob3dpbmc6XCIgKyB0aGlzLmRvbUlkKTtcclxuIFx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gXHR9XHJcblxyXG4gXHRoaWRlU2NyZWVuICgpIHtcclxuIFx0XHRjb25zb2xlLmxvZyhcImhpZGluZzpcIiArIHRoaXMuZG9tSWQpO1xyXG4gXHRcdHRoaXMuZG9tLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuIFx0fVxyXG5cclxuIFx0c2hvd0hlYWRlciAoKSB7XHJcbiBcdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiBcdH1cclxuXHJcbiBcdGhpZGVIZWFkZXIgKCkge1xyXG5cdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiBcdH1cclxuXHJcbiBcdHNob3dGb290ZXIgKCkge1xyXG5cdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gXHR9XHJcblxyXG4gXHRoaWRlRm9vdGVyICgpIHtcclxuXHRcdHRoaXMuZG9tLnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gXHR9XHJcblxyXG4gXHRhZGRXYXJuaW5nICgpIHtcclxuIFx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykuaW5uZXJIVE1MID0gdGhpcy5nYW1lLndhcm5pbmc7XHJcbiBcdH1cclxuXHJcbiB9OyIsIi8qKiBcclxuICogU3RhcnRTY3JlZW4uanNcclxuICogT3BlbmluZyBzY3JlZW4gZm9yIGdhbWUuXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIFNjcmVlblxyXG4gKi9cclxuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xyXG5cclxuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcclxuaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJztcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcclxuaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xyXG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9JZGVudGl0eS5qcyc7XHJcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vQmFja2dyb3VuZC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydFNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XHJcblxyXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuXHRcdHN1cGVyKGNvbmZpZyk7XHJcblxyXG5cdFx0Ly8gdGhpcy5kb20gZGVmaW5lZCBpbiBTY3JlZW5cclxuXHJcblx0XHQvLyBMb2FkIFN0YXJ0U2NyZWVuIHN1Yi1vYmplY3RzXHJcblx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kKCdpbWcvc2NyZWVucy9zdGFydC1zY3JlZW4ucG5nJyk7XHJcblxyXG5cdFx0Ly8gbG9hZCBpZGVudGl0eSBpbWFnZVxyXG5cdFx0dGhpcy5sb2FkSWRlbnRpdHkoKTtcclxuXHJcblx0XHQvLyBsb2FkIGluc3RydWN0aW9uc1xyXG5cdFx0dGhpcy5sb2FkSW5zdHJ1Y3Rpb25zKCk7XHJcblxyXG5cdFx0Ly8gTWFrZSB0aGUgc3RhcnQgYnV0dG9uIG9wZW4gdGhlIG1haW4gZ2FtZSBzY3JlZW5cclxuXHRcdHRoaXMuYmluZFN0YXJ0KCk7XHJcblx0fVxyXG5cclxuXHRsb2FkSWRlbnRpdHkgKCkge1xyXG5cdFx0dGhpcy5pZGVudGl0eSA9IG5ldyBJZGVudGl0eShcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdpZGVudGl0eScsIFxyXG5cdFx0XHRcdGRvbUlkOiAnc3RhcnQtc2NyZWVuLWlkZW50aXR5JyxcclxuXHRcdFx0XHRwYXRoOiAnaW1nL2lkZW50aXR5L2xvZ28ucG5nJywgXHJcblx0XHRcdFx0YXV0aG9yOiAncGV0ZSBtYXJraWV3aWN6JywgXHJcblx0XHRcdFx0c291cmNlOiAncGx5b2p1bXAnXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0Ly8gc2V0IHBvc2l0aW9uIG9mIElkZW50aXR5XHJcblx0XHR0aGlzLmlkZW50aXR5LnNldERPTVBvc2l0aW9uIChcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRvcDogMCxcclxuXHRcdFx0XHRsZWZ0OiAwXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdH1cclxuXHJcblx0bG9hZEluc3RydWN0aW9ucyAoKSB7XHJcblxyXG5cdFx0dGhpcy5pbnN0cnVjdGlvbnMgPSBuZXcgU3RhdGljVGV4dChcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdnYW1lIGluc3RydWN0aW9ucycsXHJcblx0XHRcdFx0ZG9tSWQ6ICdpbnN0cnVjdGlvbnMnLFxyXG5cdFx0XHRcdHRleHQ6ICdQbGF5IHRvIHdpbi4gVGhhdCBpcyBhbGwgVHJ1bXAgY2FyZXMgYWJvdXQsIGFuZCBzbyBzaG91bGQgeW91LidcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmluc3RydWN0aW9ucy5zZXRET01Qb3NpdGlvbihcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRvcDogMCxcclxuXHRcdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHR9XHJcblxyXG5cdGJpbmRTdGFydCAoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImluIGJpbmRTdGFydCwgdGhpcy5nYW1lOlwiICsgdGhpcy5nYW1lKVxyXG5cdFx0Ly8gd2UgdXNlIGJpbmQoKSB0byBsaW5rIHRoZSBmdW5jdGlvbiBiZWxvdyB0byBTdGFydFNjcmVlbiAob3RoZXJ3aXNlLCBpdCB0aGlua3MgaXQgaXMgaW5zaWRlIHdpbmRvdylcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydC1zY3JlZW4tcGxheS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFxyXG5cdFx0XHRmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdC8vYWxlcnQoXCJpbiBoYW5kbGVyLCBnYW1lOlwiICsgdGhpcy5nYW1lKVxyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR0aGlzLmdhbWUuc3RhcnRHYW1lKCk7XHJcblxyXG5cdFx0XHR9LmJpbmQodGhpcykpO1xyXG5cdH1cclxufSIsIi8qKiBcclxuICogU3RhdGljSW1hZ2UuanNcclxuICogSW1hZ2Utc3R5bGUgSW5mb3JtYXRpb24gdGhhdCBjYW5ub3QgYmUgY2hhbmdlZCBvbmNlIHRoZSBnYW1lIGlzIGxvYWRlZFxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpY0ltYWdlIGV4dGVuZHMgSW1hZ2Uge1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcblx0XHRzdXBlcihjb25maWcpO1xyXG5cclxuXHRcdHRoaXMuc3RhdGljID0gdHJ1ZTtcclxuXHR9XHJcblxyXG59XHJcbiIsIi8qKiBcclxuICogU3RhdGljVGV4dC5qc1xyXG4gKiBUZXh0IHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgYWZ0ZXIgbG9hZGVkIGJ5IHRoZSBnYW1lXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG4gaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpY1RleHQgZXh0ZW5kcyBUZXh0IHtcclxuXHJcblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG5cdFx0c3VwZXIoY29uZmlnKTtcclxuXHJcblx0XHR0aGlzLnN0YXRpYyA9IHRydWU7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiLyoqIFxyXG4gKiBUZXh0LmpzXHJcbiAqIENyZWF0ZXMgYSB0ZXh0LXR5cGUgSW5mbyBvYmplY3RcclxuICogQGluaGVyaXRzIEluZm8sIEdhbWVQaWVjZVxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgSW5mbyB7XHJcblxyXG4gXHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuIFx0XHRzdXBlcihjb25maWcpO1xyXG5cclxuIFx0XHQvLyBzZXQgdGhlIHRleHRcclxuIFx0XHR0aGlzLnNldFRleHQoY29uZmlnLnRleHQpO1xyXG5cclxuIFx0XHQvLyBzZXQgdGhlIERPTUlkXHJcbiBcdFx0dGhpcy5hZGRUb0RPTShjb25maWcuZG9tSWQpO1xyXG4gXHR9XHJcblxyXG4gXHRzZXRUZXh0ICh0eHQpIHtcclxuIFx0XHR0aGlzLnRleHQgPSB0eHQ7XHJcbiBcdH1cclxuXHJcbiBcdGFkZFRvRE9NIChkb21JZCkge1xyXG5cclxuIFx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gXHRcdHRoaXMuZG9tLmlkID0gbmFtZSArICctVGV4dCc7XHJcbiBcdFx0dGhpcy5kb20uaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xyXG5cclxuIFx0XHQvLyBjb250YWluZXJcclxuIFx0XHR2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9tSWQpO1xyXG5cclxuIFx0XHQvLyBhZGQgdG8gdGhlIERPTVxyXG4gXHRcdGNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGhpcy5kb20sIGNvbnRhaW5lci5jaGlsZE5vZGVzWzBdKTtcclxuXHJcblx0fVxyXG5cclxuIH0iLCIvKiogXHJcbiAqIFRpZ2VyLmpzXHJcbiAqIEEgVGlnZXIsIHdobyB0cmllcyB0byBnZXQgdGhlIFBsYXllci5cclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcclxuIGltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpZ2VyIGV4dGVuZHMgQW5pbWFsIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlciAoY29uZmlnKTtcclxuIFx0fVxyXG4gfSIsIi8qKiBcclxuICogVHJ1bXAuanNcclxuICogVGhlIGJhbGwtbGlrZSBDaGFyYWN0ZXIgeW91IGtpY2sgaW50byBBbmltYWxzXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XHJcblxyXG4gLy8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXHJcbiBpbXBvcnQgTW92ZXIgZnJvbSAnLi9Nb3Zlci5qcyc7XHJcbiBpbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XHJcbiAvLyBFTkQgQURERUQgV0VFSyAxMTw8PDw8PDw8PDw8PDxcclxuIFxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJ1bXAgZXh0ZW5kcyBDaGFyYWN0ZXIge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyIChjb25maWcpO1xyXG5cclxuIFx0XHR0aGlzLm1vdmVyLmluaXRQaW5nUG9uZygwLCB0aGlzKTtcclxuXHJcbiBcdH1cclxuXHJcbiBcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxyXG4gXHR1cGRhdGUgKCkge1xyXG4gXHRcdHRoaXMubW92ZXIucGluZ1BvbmcoKTtcclxuIFx0fVxyXG4gXHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XHJcblxyXG4gfSIsIi8qKiBcclxuICogQ3JlYXRlIHRoZSBnYW1lLiBJbXBvcnQgdGhlIHByaW1hcnkgY2xhc3NlcywgYW5kICdjb21wb3NpdGUnIFxyXG4gKiB0aGUgb3ZlcmFsbCBHYW1lIG9iamVjdCBvdXQgb2YgaW5zdGFuY2VzIG9mIHRoZSBjbGFzc2VzLlxyXG4gKi9cclxuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcblxyXG4vL1RoZSBlbnRpcmUgZ2FtZVxyXG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUuanMnO1xyXG5cclxuLy9TY3JlZW4gaW5oZXJpdGFuY2VcclxuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XHJcbmltcG9ydCBTdGFydFNjcmVlbiBmcm9tICcuL1N0YXJ0U2NyZWVuLmpzJztcclxuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi9HYW1lU2NyZWVuLmpzJztcclxuaW1wb3J0IEVuZFNjcmVlbiBmcm9tICcuL0VuZFNjcmVlbi5qcyc7XHJcblxyXG4vL0luZm8gaW5oZXJpdGFuY2VcclxuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcclxuaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJztcclxuaW1wb3J0IElkZW50aXR5IGZyb20gJy4vSWRlbnRpdHkuanMnO1xyXG5pbXBvcnQgSW5zdHJ1Y3Rpb25zIGZyb20gJy4vSW5zdHJ1Y3Rpb25zLmpzJztcclxuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4vRHluYW1pY1RleHQuanMnO1xyXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZS5qcyc7XHJcblxyXG4vL0NoYXJhY3RlciBpbmhlcml0YW5jZVxyXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcclxuaW1wb3J0IFRydW1wIGZyb20gJy4vVHJ1bXAuanMnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcclxuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XHJcbmltcG9ydCBMaW9uIGZyb20gJy4vTGlvbi5qcyc7XHJcbmltcG9ydCBUaWdlciBmcm9tICcuL1RpZ2VyLmpzJztcclxuaW1wb3J0IEJlYXIgZnJvbSAnLi9CZWFyLmpzJztcclxuaW1wb3J0IEdvcmlsbGEgZnJvbSAnLi9Hb3JpbGxhLmpzJztcclxuaW1wb3J0IEhlYWx0aCBmcm9tICcuL0hlYWx0aC5qcyc7XHJcblxyXG4vL0FyZWEgaW5oZXJpdGFuY2UuXHJcbmltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XHJcbmltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XHJcbmltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4vQW5pbWFsQXJlYS5qcyc7XHJcbmltcG9ydCBQbGF5ZXJBcmVhIGZyb20gJy4vUGxheWVyQXJlYS5qcyc7XHJcblxyXG4vL1Rlc3QgZmlsZSAodmVyeSBzaW1wbGUgdGVzdHJ1bm5lcilcclxuaW1wb3J0IFRlc3RzIGZyb20gJy4uLy4uL3Rlc3RzL1Rlc3RzLmpzJztcclxuXHJcbi8qKiBcclxuICogU2V0IHVwIHRlc3RzLlxyXG4gKi9cclxudmFyIG15VGVzdHMgPSBuZXcgVGVzdHMoKTtcclxuXHJcbi8qKlxyXG4gKiBTZXQgdXAgdGhlIEdhbWVcclxuICovXHJcbnZhciBteUdhbWUgPSBuZXcgR2FtZSh7bmFtZTogXCJab29LaWxsU29jY2VyXCJ9KTtcclxuXHJcbi8qKiBcclxuICogRVhQT1JUIFRPIFdFQiBDT05TT0xFXHJcbiAqIFRvIG1ha2Ugc29tZXRoaW5nIHZpc2libGUgaW4gV2ViIGNvbnNvbGUgZm9yIGRlYnVnZ2ludCwgYXR0YWNoIHRvIHdpbmRvdyBvYmplY3RcclxuICogTk9URTogUHJvZmVzc2lvbmFsIGNvZGUgdXNlcyBzcGVjaWFsaXplZCB0ZXN0aW5nIG1vZHVsZXMgbGlrZSBNb2NoYSwgS2FybWEsIGFuZCBcclxuICogc2ltaWxhciB0ZXN0aW5nIGxpYnJhcmllcy5cclxuICovXHJcblxyXG4vLyB3ZSBjYW4gcnVuIHRoaXMgdGVzdCBtYW51YWxseSB3aXRoIHRlc3RzLnJ1bigpO1xyXG53aW5kb3cudGVzdHMgPSBteVRlc3RzO1xyXG5cclxuLy8gbWFrZSB0aGUgZ2FtZSBvYmplY3QgdmlzaWJsZSBzbyB3ZSBjYW4gaW5zcGVjdCBpdC5cclxud2luZG93LmdhbWUgPSBteUdhbWU7XHJcblxyXG5jb25zb2xlLmxvZygnWk9PS0lMTFNPQ0NFUiBHYW1lIGluaXRpYWxpemVkLiBBY2Nlc3MgZ2FtZSB2aWEgXCJnYW1lXCIuIFVzZSBUZXN0cy5ydW4oKSB0byB0ZXN0LicpXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4uL21vZHVsZXMvanMvR2FtZVBpZWNlLmpzJztcclxuXHJcbi8vVGhlIGVudGlyZSBnYW1lXHJcbmltcG9ydCBHYW1lIGZyb20gJy4uL21vZHVsZXMvanMvR2FtZS5qcyc7XHJcblxyXG4vL1NjcmVlbiBpbmhlcml0YW5jZVxyXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4uL21vZHVsZXMvanMvU2NyZWVuLmpzJztcclxuaW1wb3J0IFN0YXJ0U2NyZWVuIGZyb20gJy4uL21vZHVsZXMvanMvU3RhcnRTY3JlZW4uanMnO1xyXG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL0dhbWVTY3JlZW4uanMnO1xyXG5pbXBvcnQgRW5kU2NyZWVuIGZyb20gJy4uL21vZHVsZXMvanMvRW5kU2NyZWVuLmpzJztcclxuXHJcbi8vSW5mbyBpbmhlcml0YW5jZVxyXG5pbXBvcnQgSW5mbyBmcm9tICcuLi9tb2R1bGVzL2pzL0luZm8uanMnO1xyXG5pbXBvcnQgVGV4dCBmcm9tICcuLi9tb2R1bGVzL2pzL1RleHQuanMnO1xyXG5pbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuLi9tb2R1bGVzL2pzL1N0YXRpY1RleHQuanMnO1xyXG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi4vbW9kdWxlcy9qcy9JZGVudGl0eS5qcyc7XHJcbmltcG9ydCBJbnN0cnVjdGlvbnMgZnJvbSAnLi4vbW9kdWxlcy9qcy9JbnN0cnVjdGlvbnMuanMnO1xyXG5pbXBvcnQgRHluYW1pY1RleHQgZnJvbSAnLi4vbW9kdWxlcy9qcy9EeW5hbWljVGV4dC5qcyc7XHJcbmltcG9ydCBTY29yZSBmcm9tICcuLi9tb2R1bGVzL2pzL1Njb3JlLmpzJztcclxuXHJcbi8vQ2hhcmFjdGVyIGluaGVyaXRhbmNlXHJcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi4vbW9kdWxlcy9qcy9DaGFyYWN0ZXIuanMnO1xyXG5pbXBvcnQgVHJ1bXAgZnJvbSAnLi4vbW9kdWxlcy9qcy9UcnVtcC5qcyc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vbW9kdWxlcy9qcy9QbGF5ZXIuanMnO1xyXG5pbXBvcnQgQW5pbWFsIGZyb20gJy4uL21vZHVsZXMvanMvQW5pbWFsLmpzJztcclxuaW1wb3J0IExpb24gZnJvbSAnLi4vbW9kdWxlcy9qcy9MaW9uLmpzJztcclxuaW1wb3J0IFRpZ2VyIGZyb20gJy4uL21vZHVsZXMvanMvVGlnZXIuanMnO1xyXG5pbXBvcnQgQmVhciBmcm9tICcuLi9tb2R1bGVzL2pzL0JlYXIuanMnO1xyXG5pbXBvcnQgR29yaWxsYSBmcm9tICcuLi9tb2R1bGVzL2pzL0dvcmlsbGEuanMnO1xyXG5pbXBvcnQgSGVhbHRoIGZyb20gJy4uL21vZHVsZXMvanMvSGVhbHRoLmpzJztcclxuXHJcbi8vQXJlYSBpbmhlcml0YW5jZS5cclxuaW1wb3J0IEFyZWEgZnJvbSAnLi4vbW9kdWxlcy9qcy9BcmVhLmpzJztcclxuaW1wb3J0IENhZ2UgZnJvbSAnLi4vbW9kdWxlcy9qcy9DYWdlLmpzJztcclxuaW1wb3J0IEFuaW1hbEFyZWEgZnJvbSAnLi4vbW9kdWxlcy9qcy9BbmltYWxBcmVhLmpzJztcclxuaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi4vbW9kdWxlcy9qcy9QbGF5ZXJBcmVhLmpzJztcclxuXHJcbi8qKiBcclxuICogVEVTVEJFRCAtIFRlc3QgYWxsIG91ciBvYmplY3RzLiBUaGlzIGlzIGEgdmVyeSBiYXNpYyB0ZXN0aW5nIHN5c3RlbS4gXHJcbiAqIE5PVEU6IFByb2Zlc3Npb25hbCBjb2RlIHVzZXMgdGVzdGluZyBsaWJyYXJpZXMgbGlrZSBLYXJtYSBhbmQgTW9jaGEuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0cyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yICgpIHtcclxuXHR9XHJcblxyXG5cdC8vIEJlY2F1c2Ugd2UgbWFrZSB0aGVzZSBvYmplY3RzIHdpdGggJ3ZhcicgdGhleSBhcmUgc2NvcGVkIHRvIHRoZSBydW4oKSBmdW5jdGlvbi5cclxuXHRydW4gKCkge1xyXG5cclxuXHRcdHZhciBjb25maWcgPSB7bmFtZTonRm9yZXN0IFRydW1wIG9yIERvbmFsZCBHdW1wIHJ1bHonfTtcclxuXHJcblx0XHQvLyBNYWtlIHNvbWUgdGVzdCBnYW1lIG9iamVjdHNcclxuXHRcdHZhciBnYW1lID0gbmV3IEdhbWUoY29uZmlnKTtcclxuXHRcdGNvbnNvbGUubG9nKGdhbWUuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHQvL3Rlc3QgR2FtZSBPYmplY3RcclxuXHRcdHZhciBteUdhbWUgPSBuZXcgR2FtZSh7bmFtZTogXCJab29LaWxsU29jY2VyXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15R2FtZS5nZXROYW1lKCkpO1xyXG5cclxuXHRcdC8vb3RoZXIgb2JqZWN0c1xyXG5cdFx0dmFyIG15U2NyZWVuID0gbmV3IFNjcmVlbih7bmFtZTogXCJPcGVuaW5nIFNjcmVlblwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteVNjcmVlbi5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteVN0YXJ0U2NyZWVuID0gbmV3IFN0YXJ0U2NyZWVuKHtuYW1lOiBcIlN0YXJ0IFNjcmVlblwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteVN0YXJ0U2NyZWVuLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15R2FtZVNjcmVlbiA9IG5ldyBHYW1lU2NyZWVuKHtuYW1lOiBcIkdhbWUgU2NyZWVuXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15R2FtZVNjcmVlbi5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUVuZFNjcmVlbiA9IG5ldyBFbmRTY3JlZW4oe25hbWU6IFwiRW5kIFNjcmVlblwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteUVuZFNjcmVlbi5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUluZm8gPSBuZXcgSW5mbyh7bmFtZTogXCJHZW5lcmljIEluZm9ybWF0aW9uXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15SW5mby5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteVRleHQgPSBuZXcgVGV4dCh7bmFtZTogXCJHZW5lcmljIFRleHQgT2JqZWN0XCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15VGV4dC5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteVN0YXRpY1RleHQgPSBuZXcgU3RhdGljVGV4dCh7bmFtZTogXCJHZW5lcmljIFN0YXRpYyBUZXh0IE9iamVjdFwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteVN0YXRpY1RleHQuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlJZGVudGl0eSA9IG5ldyBJZGVudGl0eSh7bmFtZTogXCJHZW5lcmljIElkZW50aXR5IE9iamVjdFwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteUlkZW50aXR5LmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15SW5zdHJ1Y3Rpb25zID0gbmV3IEluc3RydWN0aW9ucyh7bmFtZTogXCJHZW5lcmljIEluc3RydWN0aW9ucyBPYmplY3RcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlJbnN0cnVjdGlvbnMuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlEeW5hbWljVGV4dCA9IG5ldyBEeW5hbWljVGV4dCh7bmFtZTogXCJHZW5lcmljIER5bmFtaWMgVGV4dCBPYmplY3RcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlEeW5hbWljVGV4dC5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteVNjb3JlID0gbmV3IFNjb3JlKHtuYW1lOiBcInNjb3Jlcy4uLlwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteVNjb3JlLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15Q2hhcmFjdGVyID0gbmV3IENoYXJhY3Rlcih7bmFtZTogXCJHZW5lcmljIENoYXJhY3RlclwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteUNoYXJhY3Rlci5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteVRydW1wID0gbmV3IFRydW1wKHtuYW1lOiBcIkRvbmFsZCBUcnVtcFwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteVRydW1wLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15UGxheWVyID0gbmV3IFBsYXllcih7bmFtZTogXCJFbmQgVXNlclwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteVBsYXllci5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUFuaW1hbCA9IG5ldyBBbmltYWwoe25hbWU6IFwiR2VuZXJpYyBBbmltYWxcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlBbmltYWwuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlMaW9uID0gbmV3IExpb24oe25hbWU6IFwiQ293YXJkbHkgdGhlIExpb25cIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlMaW9uLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15VGlnZXIgPSBuZXcgVGlnZXIoe25hbWU6IFwiQ2hvbXBlciB0aGUgVGlnZXJcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlUaWdlci5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUJlYXIgPSBuZXcgQmVhcih7bmFtZTogXCJNYXVsZXIgdGhlIEJlYXJcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlCZWFyLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15R29yaWxsYSA9IG5ldyBHb3JpbGxhKHsgbmFtZTogXCJTcHVua3kgdGhlIEdvcmlsbGFcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlHb3JpbGxhLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15SGVhbHRoID0gbmV3IEhlYWx0aCh7bmFtZTogXCJPbmUgSGVhbHRoIEtpdFwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteUhlYWx0aC5nZXROYW1lKCkpO1xyXG5cclxuXHRcdC8vQXJlYSBpbmhlcml0YW5jZS5cclxuXHRcdHZhciBteUFyZWEgPSBuZXcgQXJlYSh7bmFtZTogXCJHZW5lcmljIEFyZWFcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlBcmVhLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15Q2FnZSA9IG5ldyBDYWdlKHtuYW1lOiBcIkdlbmVyaWMgQXJlYVwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteUNhZ2UuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlBbmltYWxBcmVhID0gbmV3IEFuaW1hbEFyZWEoe25hbWU6IFwiQW5pbWFsQXJlYVwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteUFuaW1hbEFyZWEuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlQbGF5ZXJBcmVhID0gbmV3IFBsYXllckFyZWEoe25hbWU6IFwiUGxheWVyQXJlYVwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteVBsYXllckFyZWEuZ2V0TmFtZSgpKTtcclxuXHR9XHJcbn1cclxuIl19
