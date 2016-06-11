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
            this.obj.direction = direction;
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

            // remember where we started (in the cage)
            this.startTop = this.obj.position.top;
            this.startLeft = this.obj.position.left;

            // cache position during new random moves
            this.newTop = 0, this.newLeft = 0;

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
                    if (dx > 0.003 && dx < 0.8) {
                        this.obj.trump.dx = dx;
                        this.obj.trump.dy = 1.0 - dx;
                    } else if (dx < 0 && dx > -0.8) {
                        this.obj.trump.dx = dx;
                        this.obj.trump.dy = 1.0 + dx;
                    } else if (Math.abs(dx) < 0.003) {
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
            * this.obj.direction is the overall path the Animal is following to one of the 
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
                        //////this.MAX =4;
                        this.MAX = this.getRandom(2, 15);
                        //console.log("THIS MAX:" + this.MAX)
                        this.newLeft = this.getRandom(-this.speed, this.speed);
                        this.counter = 0;
                    } else if (this.counter > this.MAX / 2) {
                        //this.speed += this.timeStampRandom() / 240;
                        this.speed = this.getRandom(-0.2, 1);
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
         * @method pingPong
         * @description move in a ping-pong style. This is specific to the game.
         * 1. collision starts the character moving
         * 2. they bounce on all walls EXCEPT the one they were closest to when collide with
         * 3. when they intersect that wall, they stop
         */

    }, {
        key: 'updatePingPong',
        value: function updatePingPong() {
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
                                    this.obj.speed = 2; /////////////////////////////
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
      this.mover.updatePingPong();
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzXFxqc1xcQW5pbWFsLmpzIiwibW9kdWxlc1xcanNcXEFuaW1hbEFyZWEuanMiLCJtb2R1bGVzXFxqc1xcQXJlYS5qcyIsIm1vZHVsZXNcXGpzXFxCYWNrZ3JvdW5kLmpzIiwibW9kdWxlc1xcanNcXEJlYXIuanMiLCJtb2R1bGVzXFxqc1xcQ2FnZS5qcyIsIm1vZHVsZXNcXGpzXFxDaGFyYWN0ZXIuanMiLCJtb2R1bGVzXFxqc1xcQ29sbGlkZXIuanMiLCJtb2R1bGVzXFxqc1xcRHluYW1pY1RleHQuanMiLCJtb2R1bGVzXFxqc1xcRW5kU2NyZWVuLmpzIiwibW9kdWxlc1xcanNcXEdhbWUuanMiLCJtb2R1bGVzXFxqc1xcR2FtZVBpZWNlLmpzIiwibW9kdWxlc1xcanNcXEdhbWVTY3JlZW4uanMiLCJtb2R1bGVzXFxqc1xcR29yaWxsYS5qcyIsIm1vZHVsZXNcXGpzXFxIZWFsdGguanMiLCJtb2R1bGVzXFxqc1xcSWRlbnRpdHkuanMiLCJtb2R1bGVzXFxqc1xcSW1hZ2UuanMiLCJtb2R1bGVzXFxqc1xcSW5mby5qcyIsIm1vZHVsZXNcXGpzXFxJbnN0cnVjdGlvbnMuanMiLCJtb2R1bGVzXFxqc1xcTGlvbi5qcyIsIm1vZHVsZXNcXGpzXFxNb3Zlci5qcyIsIm1vZHVsZXNcXGpzXFxQbGF5ZXIuanMiLCJtb2R1bGVzXFxqc1xcUGxheWVyQXJlYS5qcyIsIm1vZHVsZXNcXGpzXFxTY29yZS5qcyIsIm1vZHVsZXNcXGpzXFxTY3JlZW4uanMiLCJtb2R1bGVzXFxqc1xcU3RhcnRTY3JlZW4uanMiLCJtb2R1bGVzXFxqc1xcU3RhdGljSW1hZ2UuanMiLCJtb2R1bGVzXFxqc1xcU3RhdGljVGV4dC5qcyIsIm1vZHVsZXNcXGpzXFxUZXh0LmpzIiwibW9kdWxlc1xcanNcXFRpZ2VyLmpzIiwibW9kdWxlc1xcanNcXFRydW1wLmpzIiwibW9kdWxlc1xcanNcXGluZGV4LmpzIiwi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bUJBQVMsRUFBQyxNQUFNLGNBQVAsRUFBVCxDQUFiO0FBQ0EsY0FBUSxHQUFSLENBQVksT0FBTyxPQUFQLEVBQVo7O0FBRUEsVUFBSSxlQUFlLHlCQUFlLEVBQUMsTUFBTSxZQUFQLEVBQWYsQ0FBbkI7QUFDQSxjQUFRLEdBQVIsQ0FBWSxhQUFhLE9BQWIsRUFBWjs7QUFFQSxVQUFJLGVBQWUseUJBQWUsRUFBQyxNQUFNLFlBQVAsRUFBZixDQUFuQjtBQUNBLGNBQVEsR0FBUixDQUFZLGFBQWEsT0FBYixFQUFaO0FBQ0E7Ozs7OztrQkEzRm1CLEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqIFxyXG4gKiBBbmltYWwuanNcclxuICogVGhlIGNyaXR0ZXJzIHRoYXQgVHJ1bXAgdHJpZXMgdG8gc3RvcCBmcm9tIGdldHRpbmcgdGhlIFBsYXllci5cclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcclxuXHJcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xyXG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xyXG5cclxuIC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxyXG4gaW1wb3J0IE1vdmVyIGZyb20gJy4vTW92ZXIuanMnO1xyXG4gaW1wb3J0IENvbGxpZGVyIGZyb20gJy4vQ29sbGlkZXIuanMnO1xyXG4gLy8gRU5EIEFEREVEIFdFRUsgMTE8PDw8PDw8PDw8PDw8XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbWFsIGV4dGVuZHMgQ2hhcmFjdGVyIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlciAoY29uZmlnKTtcclxuXHJcbiBcdFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXHJcbiBcdFx0Ly8gQW5pbWFscyBnZXQgUkFORE9NIE1PVElPTlxyXG4gXHRcdHRoaXMubW92ZXIuaW5pdFJhbmRvbSgwLjAyLCAnYm90dG9tJyk7XHJcbiBcdFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxyXG5cclxuIFx0fVxyXG5cclxuIFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXHJcbiBcdHVwZGF0ZSAoKSB7XHJcbiBcdFx0dGhpcy5tb3Zlci51cGRhdGVSYW5kb21XYWxrKCk7XHJcbiBcdH1cclxuIFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxyXG5cclxuIH0iLCIvKiogXHJcbiAqIEFuaW1hbEFyZWEuanNcclxuICogVGhlIHJlZ2lvbiBhbmltYWxzIG1vdmUgdGhyb3VnaCB0byBnZXQgdG8gUGxheWVyLlxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBBcmVhXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhZ2UgZXh0ZW5kcyBBcmVhIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlcihjb25maWcpO1xyXG4gXHR9XHJcblxyXG4gfSIsIi8qKiBcclxuICogQXJlYS5qc1xyXG4gKiBBIGdlbmVyaWMgcmVnaW9uIG9mIHRoZSBnYW1lIHNjcmVlbi4gVXNlZCB0byBhZGQgdmlzdWFsIG9iamVjdHMsIGFuZCBcclxuICogY3JlYXRlIGJvdW5kcyBmb3IgY29sbGlzaW9uIGRldGVjdGlvbi5cclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgSW5mbywgSW1hZ2UsIFN0YXRpY0ltYWdlXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcblxyXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcclxuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBBcmVhIGV4dGVuZHMgR2FtZVBpZWNlIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlcihjb25maWcpO1xyXG5cclxuIFx0XHQvLyBjcmVhdGUgYSA8ZGl2PiwgYWRkIHRvIERPTSwgd2l0aCBvcHRpb25hbCBpbWFnZVxyXG4gXHRcdHRoaXMuYWRkVG9ET00oY29uZmlnLm5hbWUsIGNvbmZpZy5jb250YWluZXIsIGNvbmZpZy5wYXRoKTtcclxuXHJcbiBcdFx0Ly8gcG9zaXRpb24gd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlZFxyXG4gXHRcdHRoaXMuc2V0RE9NUG9zaXRpb24oY29uZmlnLnBvc2l0aW9uKTsgLy9pbmhlcml0ZWQgZnJvbSBHYW1lUGllY2VcclxuIFx0XHR0aGlzLnNldERPTVNpemUoY29uZmlnLnNpemUpO1xyXG4gXHR9XHJcblxyXG4gXHQvLyBjcmVhdGUgRE9NIGVsZW1lbnQsIExvYWQgYSBiYWNrZ3JvdW5kIGltYWdlLCBhbmQgaW5zZXJ0IGludG8gY29udGFpbmVyXHJcbiBcdGFkZFRvRE9NIChuYW1lLCBjb250YWluZXIsIGltZ1BhdGgpIHtcclxuIFx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gXHRcdHRoaXMuZG9tLmlkID0gbmFtZSArICctYXJlYSc7XHJcblxyXG4gXHRcdC8vIHBvc2l0aW9uIGFic29sdXRlbHlcclxuIFx0XHR0aGlzLmRvbS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblxyXG4gXHRcdC8vIERvbid0IGFsbG93IHBhZGRpbmcgb3IgbWFyZ2lucyBvciBib3JkZXJzIGZvciBBcmVhc1xyXG4gXHRcdHRoaXMuZG9tLnN0eWxlLm1hcmdpbiA9ICcwcHgnO1xyXG4gXHRcdHRoaXMuZG9tLnN0eWxlLnBhZGRpbmcgPSAnMHB4JztcclxuXHJcbiBcdFx0Ly8gYWRkIHRvIHRoZSBET01cclxuIFx0XHRjb250YWluZXIuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tLCBjb250YWluZXIuY2hpbGROb2Rlc1swXSk7XHJcblxyXG4gXHRcdC8vIGlmIHdlIGhhdmUgYW4gaW1hZ2UsIGluc2VydCBpbiBlbGVtZW50IGJhY2tncm91bmRcclxuIFx0XHRpZiAoaW1nUGF0aCkge1xyXG5cclxuIFx0XHRcdHRoaXMuaW1hZ2UgPSBuZXcgU3RhdGljSW1hZ2UoXHJcbiBcdFx0XHRcdHtcclxuIFx0XHRcdFx0XHRuYW1lOiB0aGlzLmRvbS5pZCArICctaW1hZ2UnXHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdCk7XHJcblxyXG4gXHRcdFx0dGhpcy5pbWFnZS5sb2FkQmFja2dyb3VuZEltYWdlICh0aGlzLmRvbSwgaW1nUGF0aCk7XHJcbiBcdFx0fVxyXG5cclxuIFx0fVxyXG5cclxuIFx0Ly8gYm91bmRzIGRldGVjdG9yIGZvciBzdXBwbGllZCBDaGFyYWN0ZXJcclxuXHJcblxyXG4gfSIsIi8qKiBcclxuICogQmFja2dyb3VuZC5qc1xyXG4gKiBHYW1lIExvZ29zLCBMb2dvVHlwZXMsIEJyYW5kIE5hbWVcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XHJcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrZ3JvdW5kIGV4dGVuZHMgU3RhdGljSW1hZ2Uge1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcblx0XHRzdXBlcihjb25maWcpO1xyXG5cclxuXHRcdHRoaXMuc2V0U291cmNlKGNvbmZpZy5zb3VyY2UpO1xyXG5cdFx0dGhpcy5zZXRBdXRob3IoY29uZmlnLmF1dGhvcik7XHJcblx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kSW1hZ2UoY29uZmlnLmRvbUlkLCBjb25maWcucGF0aCk7XHJcblx0fVxyXG5cclxufVxyXG4iLCIvKiogXHJcbiAqIEJlYXIuanNcclxuICogQSBUaWdlciwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xyXG4gaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVhciBleHRlbmRzIEFuaW1hbCB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XHJcbiBcdH1cclxuXHJcblxyXG4gfSIsIi8qKiBcclxuICogQ2FnZS5qc1xyXG4gKiBUaGUgcmVnaW9uIHdoZXJlIGFuaW1hbHMgYXJlIGNhZ2VkLlxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBBcmVhXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhZ2UgZXh0ZW5kcyBBcmVhIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuXHJcbiBcdFx0c3VwZXIoY29uZmlnKTtcclxuXHJcbiBcdH1cclxuXHJcbiB9IiwiLyoqIFxyXG4gKiBDaGFyYWN0ZXIuanNcclxuICogR2FtZS1nZW5lcmF0ZWQgb3IgdXNlciBhdmF0YXJzLiBDaGFyYWN0ZXJzIGFyZSByZW5kZXJlZCBpbiBDYW52YXMsIGJ1dCBoYXZlIHRoZWlyIFxyXG4gKiBwb3NpdGlvbiBjb21wdXRlZCBhbmQgdXBkYXRlZCBvdXRzaWRlIGNhbnZhcy5cclxuICogQGluaGVyaXRzIEdhbWVQaWVjZVxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG5cclxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XHJcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XHJcblxyXG4gLy8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXHJcbiBpbXBvcnQgTW92ZXIgZnJvbSAnLi9Nb3Zlci5qcyc7XHJcbiBpbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XHJcbiAvLyBFTkQgQURERUQgV0VFSyAxMTw8PDw8PDw8PDw8PDxcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBHYW1lUGllY2Uge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyIChjb25maWcpO1xyXG5cclxuIFx0XHQgLy8gc3RvcmUgYSByZWZlcmVuY2UgdG8gdGhlIGdhbWUgb2JqZWN0XHJcbiBcdFx0dGhpcy5nYW1lID0gY29uZmlnLmdhbWU7XHJcblxyXG4gXHRcdC8vIFNldCBwb3NpdGlvbiBhbmQgc2l6ZSBmcm9tIGNvbmZpZ3VyYXRpb25cclxuIFx0XHR0aGlzLnBvc2l0aW9uID0gY29uZmlnLnBvc2l0aW9uO1xyXG4gXHRcdHRoaXMuc2l6ZSA9IGNvbmZpZy5zaXplO1xyXG5cclxuIFx0XHR3aW5kb3cudGhlR2FtZSA9IGNvbmZpZy5nYW1lO1xyXG5cclxuIFx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcclxuIFx0XHR0aGlzLm1vdmVyID0gbmV3IE1vdmVyKHRoaXMpO1xyXG4gXHRcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcclxuXHJcblxyXG5cclxuIFx0XHR0aGlzLmltYWdlID0gbmV3IFN0YXRpY0ltYWdlKFxyXG4gXHRcdFx0e1xyXG4gXHRcdFx0XHRuYW1lOiBjb25maWcubmFtZSArICctaW1hZ2UnLFxyXG4gXHRcdFx0XHRwYXRoOiBjb25maWcucGF0aFxyXG4gXHRcdFx0fVxyXG4gXHRcdCk7XHJcblxyXG4gXHRcdC8vIEltYWdlcyBkb24ndCBhdXRvbWF0aWNhbGx5IGxvYWQgd2hlbiB0aGV5J3JlIG5vdCBhdHRhY2hlZCB0byB0aGUgRE9NLCBcclxuIFx0XHQvLyBvciBhIENTUyBiYWNrZ3JvdW5kIGltYWdlXHJcbiBcdFx0dGhpcy5pbWFnZS5sb2FkKGNvbmZpZy5wYXRoLCBmdW5jdGlvbiAoKSB7Y29uc29sZS5sb2coJ2xvYWRlZDonICsgY29uZmlnLm5hbWUpO30pO1xyXG4gXHR9XHJcblxyXG4gXHQvLyBvdmVycmlkZSBkZWZhdWx0IGRyYXcgd2l0aCBvdXIgb3duXHJcbiBcdGRyYXcgKGNvbnRleHQpIHtcclxuXHRcdGlmICh0aGlzLmltYWdlKSB7XHJcblx0XHRcdHZhciBpbWcgPSB0aGlzLmltYWdlLmRhdGE7XHJcbiBcdFx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcclxuXHRcdFx0Ly9jb25zb2xlLmxvZygnZHJhd2luZycpXHJcblx0XHRcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcclxuXHRcdFx0aWYgKGltZykge1xyXG5cdFx0XHRcdC8vIGRyYXcgaW1hZ2UgaW50byBIVE1MNSBjYW52YXNcclxuIFx0XHQgXHRcdGNvbnRleHQuZHJhd0ltYWdlKGltZywgdGhpcy5wb3NpdGlvbi5sZWZ0LCB0aGlzLnBvc2l0aW9uLnRvcCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuIFx0fVxyXG4gfSIsIi8qKiBcclxuICogQGNsYXNzIENvbGxpZGVyXHJcbiAqIEBkZXNjcmlwdGlvbiBjcmVhdGUgdGhlIGNvbGxpc2lvbiBtYXRyaXggZGVmaW5pbmcgd2hpY2ggb2JqZWN0cyBjYW4gY29sbGlkZSBcclxuICogd2l0aCB3aGljaCBvYmplY3RzLiBPYmplY3RzIHRoYXQgY2FuIGNvbGxpZGUgaGF2ZSB0aGVpciBwb3RlbnRpYWwgY29sbGlkZXJzIFxyXG4gKiBhZGRlZCBhcyByZWZlcmVuY2VzLCBlLmcuIFBsYXllci50cnVtcCBvciBUcnVtcC5wbGF5ZXIuXHJcbiAqL1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpZGVyIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjaGFyYWN0ZXJBcnJheSkge1xyXG4gXHRcdHRoaXMuY2hhcmFjdGVyQXJyYXkgPSBjaGFyYWN0ZXJBcnJheTtcclxuIFx0XHR0aGlzLmFuaW1hbEFycmF5ID0gW107IC8vZmlsbGVkIHVwIGluIHNldFVwQ29sbGlzaW9uc1xyXG4gXHRcdHRoaXMuc2V0VXBDb2xsaXNpb25zKCk7XHJcbiBcdH1cclxuXHJcbiBcdHNldFVwQ29sbGlzaW9ucyAoKSB7XHJcbiBcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuY2hhcmFjdGVyQXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuIFx0XHRcdHN3aXRjaCAodGhpcy5jaGFyYWN0ZXJBcnJheVtpXS5jb25zdHJ1Y3Rvci5uYW1lKSB7XHJcbiBcdFx0XHRcdGNhc2UgJ0xpb24nOlxyXG4gXHRcdFx0XHRjYXNlICdUaWdlcic6XHJcbiBcdFx0XHRcdGNhc2UgJ0JlYXInOlxyXG4gXHRcdFx0XHRjYXNlICdHb3JpbGxhJzpcclxuIFx0XHRcdFx0XHR0aGlzLmFuaW1hbEFycmF5LnB1c2godGhpcy5jaGFyYWN0ZXJBcnJheVtpXSk7XHJcbiBcdFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHRcdGNhc2UgJ1RydW1wJzpcclxuIFx0XHRcdFx0XHR0aGlzLnRydW1wID0gdGhpcy5jaGFyYWN0ZXJBcnJheVtpXTtcclxuIFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0Y2FzZSAnUGxheWVyJzpcclxuIFx0XHRcdFx0XHR0aGlzLnBsYXllciA9IHRoaXMuY2hhcmFjdGVyQXJyYXlbaV07XHJcbiBcdFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHRcdGRlZmF1bHQ6XHJcbiBcdFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG5cclxuIFx0XHQvL2Nyb3NzLWNvbm5lY3QgdGhlIGltcGFjdG9yc1xyXG4gXHRcdHRoaXMudHJ1bXAucGxheWVyID0gdGhpcy5wbGF5ZXI7XHJcbiBcdFx0dGhpcy50cnVtcC5hbmltYWxzID0gdGhpcy5hbmltYWxBcnJheTtcclxuIFx0XHR0aGlzLnBsYXllci50cnVtcCA9IHRoaXMudHJ1bXA7XHJcblxyXG4gXHRcdC8vREVCVUdcclxuIFx0XHR3aW5kb3cuYW5pbWFscyA9IHRoaXMudHJ1bXAuYW5pbWFscztcclxuIFx0XHRcclxuXHJcbiBcdH1cclxuIH0iLCIvKiogXHJcbiAqIER5bmFtaWNUZXh0LmpzXHJcbiAqIFRleHQgdGhhdCBjYW4gYmUgY2hhbmdlZCBieSB1c2VyIChlLmcuIGlucHV0IGZpZWxkKSwgb3IgXHJcbiAqIHVwZGF0ZWQgYnkgdGhlIGdhbWUgaXRzZWxmLlxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuIGltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljVGV4dCBleHRlbmRzIFRleHQge1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcblx0XHRzdXBlcihjb25maWcpO1xyXG5cdH1cclxufVxyXG4iLCIvKiogXHJcbiAqIEVuZFNjcmVlbi5qc1xyXG4gKiBFbmRpbmcgc2NyZWVuIGZvciB0aGUgZ2FtZS5cclxuICogQGluaGVyaXRzIFNjcmVlbiwgR2FtZVBpZWNlXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcclxuIFxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlcihjb25maWcpO1xyXG5cclxuIFx0XHQvLyBsb2FkIHRoZSBiYWNrZ3JvdW5kIGltYWdlXHJcbiBcdFx0dGhpcy5sb2FkQmFja2dyb3VuZCgnaW1nL3NjcmVlbnMvZW5kLXNjcmVlbi5wbmcnKTtcclxuXHJcbiBcdFx0Ly8gTG9hZCBFbmRTY3JlZW4gc3ViLW9iamVjdHNcclxuIFx0XHR0aGlzLmxvYWRJbnB1dFNjb3JlKCk7XHJcbiBcdFx0dGhpcy5sb2FkSGlnaFNjb3JlcygpO1xyXG5cclxuIFx0XHQvLyBCaW5kIFwicGxheSBhZ2FpblwiIGFuZCBcImluc3RydWN0aW9uc1wiIGJ1dHRvbnMuXHJcbiBcdFx0dGhpcy5iaW5kUmVwbGF5KCk7XHJcbiBcdFx0dGhpcy5iaW5kSW5zdHJ1Y3Rpb25zKCk7XHJcbiBcdH1cclxuXHJcbiBcdGxvYWRJbnB1dFNjb3JlICgpIHtcclxuXHJcbiBcdH1cclxuXHJcbiBcdGxvYWRIaWdoU2NvcmVzICgpIHtcclxuXHJcbiBcdH1cclxuXHJcbiBcdGJpbmRSZXBsYXkgKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpbiBiaW5kU3RhcnQsIHRoaXMuZ2FtZTpcIiArIHRoaXMuZ2FtZSlcclxuXHRcdC8vIHdlIHVzZSBiaW5kKCkgdG8gbGluayB0aGUgZnVuY3Rpb24gYmVsb3cgdG8gU3RhcnRTY3JlZW4gKG90aGVyd2lzZSwgaXQgdGhpbmtzIGl0IGlzIGluc2lkZSB3aW5kb3cpXHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kLXNjcmVlbi1wbGF5LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXHJcblx0XHRcdGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0Ly9hbGVydChcImluIGhhbmRsZXIsIGdhbWU6XCIgKyB0aGlzLmdhbWUpXHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdHRoaXMuZ2FtZS5zdGFydEdhbWUoKTtcclxuXHJcblx0XHRcdH0uYmluZCh0aGlzKSk7XHJcblx0fVxyXG5cclxuXHRiaW5kSW5zdHJ1Y3Rpb25zICgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiaW4gYmluZFN0YXJ0LCB0aGlzLmdhbWU6XCIgKyB0aGlzLmdhbWUpXHJcblx0XHQvLyB3ZSB1c2UgYmluZCgpIHRvIGxpbmsgdGhlIGZ1bmN0aW9uIGJlbG93IHRvIFN0YXJ0U2NyZWVuIChvdGhlcndpc2UsIGl0IHRoaW5rcyBpdCBpcyBpbnNpZGUgd2luZG93KVxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZC1zY3JlZW4taW5zdHJ1Y3Rpb25zLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXHJcblx0XHRcdGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0Ly9hbGVydChcImluIGhhbmRsZXIsIGdhbWU6XCIgKyB0aGlzLmdhbWUpXHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdHRoaXMuZ2FtZS5sb2FkR2FtZSgpO1xyXG5cclxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcclxuXHR9XHJcbiB9IiwiLyoqIFxyXG4gKiBHYW1lLmpzXHJcbiAqIFRoZSBlbnRpcmUgR2FtZSBvYmplY3RcclxuICogQGluaGVyaXRzIEdhbWVQaWVjZVxyXG4gKi9cclxuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcblxyXG4vL1NjcmVlbiBpbmhlcml0YW5jZVxyXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcclxuaW1wb3J0IFN0YXJ0U2NyZWVuIGZyb20gJy4vU3RhcnRTY3JlZW4uanMnO1xyXG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuL0dhbWVTY3JlZW4uanMnO1xyXG5pbXBvcnQgRW5kU2NyZWVuIGZyb20gJy4vRW5kU2NyZWVuLmpzJztcclxuXHJcbi8vSW5mbyBpbmhlcml0YW5jZVxyXG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xyXG5pbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XHJcbmltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcclxuaW1wb3J0IElkZW50aXR5IGZyb20gJy4vSWRlbnRpdHkuanMnO1xyXG5pbXBvcnQgSW5zdHJ1Y3Rpb25zIGZyb20gJy4vSW5zdHJ1Y3Rpb25zLmpzJztcclxuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4vRHluYW1pY1RleHQuanMnO1xyXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZS5qcyc7XHJcblxyXG4vL0NoYXJhY3RlciBpbmhlcml0YW5jZVxyXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcclxuaW1wb3J0IFRydW1wIGZyb20gJy4vVHJ1bXAuanMnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcclxuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XHJcbmltcG9ydCBMaW9uIGZyb20gJy4vTGlvbi5qcyc7XHJcbmltcG9ydCBUaWdlciBmcm9tICcuL1RpZ2VyLmpzJztcclxuaW1wb3J0IEJlYXIgZnJvbSAnLi9CZWFyLmpzJztcclxuaW1wb3J0IEdvcmlsbGEgZnJvbSAnLi9Hb3JpbGxhLmpzJztcclxuaW1wb3J0IEhlYWx0aCBmcm9tICcuL0hlYWx0aC5qcyc7XHJcblxyXG4vL0FyZWEgaW5oZXJpdGFuY2UuXHJcbmltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XHJcbmltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XHJcbmltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4vQW5pbWFsQXJlYS5qcyc7XHJcbmltcG9ydCBQbGF5ZXJBcmVhIGZyb20gJy4vUGxheWVyQXJlYS5qcyc7XHJcblxyXG4vLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcclxuaW1wb3J0IENvbGxpZGVyIGZyb20gJy4vQ29sbGlkZXIuanMnO1xyXG4vLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgR2FtZVBpZWNlIHtcclxuXHJcblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG5cclxuXHRcdHN1cGVyKGNvbmZpZyk7XHJcblxyXG5cdFx0Ly9nYW1lIGNvcHlyaWdodFxyXG5cdFx0dGhpcy53YXJuaW5nID0gJ1RoaXMgZ2FtZSBiZWxvbmdzIHRvIHVzLCBhbmQgbm9ib2R5IGVsc2UuJztcclxuXHJcblx0XHQvL2dhbWUgcmV2ZXJ0cyB0byBTdGFydFNjcmVlbiBpZiB1bnBsYXllZFxyXG5cdFx0dGhpcy5USU1FT1VUID0gNTU1NTtcclxuXHJcblx0XHQvLyBkZWZpbmUgSWQgbGluayB0byBET01cclxuXHRcdHRoaXMuU1RBUlRfU0NSRUVOX0lEID0gJ3N0YXJ0LXNjcmVlbic7XHJcblx0XHR0aGlzLkdBTUVfU0NSRUVOX0lEID0gJ2dhbWUtc2NyZWVuJztcclxuXHRcdHRoaXMuRU5EX1NDUkVFTl9JRCA9ICdlbmQtc2NyZWVuJztcclxuXHJcblx0XHQvLyBtb2RlbCBzdG9yYWdlLCBzY3JlZW5zXHJcblx0XHR0aGlzLnNjcmVlbnMgPSBbXTtcclxuXHJcblx0XHQvLyBtb2RlbCBzdG9yYWdlLCBkeW5hbWljIGNoYXJhY3RlcnNcclxuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMgPSBbXTtcclxuXHJcblx0XHQvLyBpbml0aWFsaXplIGdhbWUsIGxvYWQgc3RhcnQgc2NyZWVuXHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHJcblx0fSAvL2VuZCBvZiBjb25zdHJ1Y3RvclxyXG5cclxuXHRpbml0ICgpIHtcclxuXHJcblx0XHQvLyBHcmFiIHRoZSBIVE1MIHNjcmVlbiBlbGVtZW50cyBhbmQgZW5jYXBzdWxhdGUgaW4gYSBTY3JlZW4gY2xhc3NcclxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLlNUQVJUX1NDUkVFTl9JRF0gPSBuZXcgU3RhcnRTY3JlZW4oe25hbWU6ICdTdGFydCBTY3JlZW4nLCBpZDogdGhpcy5TVEFSVF9TQ1JFRU5fSUQsIGdhbWU6IHRoaXN9KTtcclxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkdBTUVfU0NSRUVOX0lEXSA9IG5ldyBHYW1lU2NyZWVuKHtuYW1lOiAnR2FtZSBTY3JlZW4nLCBpZDogdGhpcy5HQU1FX1NDUkVFTl9JRCwgZ2FtZTogdGhpc30pO1xyXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuRU5EX1NDUkVFTl9JRF0gPSBuZXcgRW5kU2NyZWVuKHtuYW1lOiAnRW5kIFNjcmVlbicsIGlkOiB0aGlzLkVORF9TQ1JFRU5fSUQsIGdhbWU6IHRoaXN9KTtcclxuXHJcblx0XHQvLyBsb2FkIHRoZSBjYW52YXNcclxuXHRcdHRoaXMubG9hZENhbnZhcygpO1xyXG5cclxuXHRcdC8vIG1ha2UgdGhlIHN0YXJ0IHNjcmVlbiB2aXNpYmxlXHJcblx0XHR0aGlzLmxvYWRHYW1lKCk7XHJcblx0fVxyXG5cclxuXHQvLyBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIEhUTUw1IGNhbnZhcyBjb250ZXh0XHJcblx0bG9hZENhbnZhcyAoKSB7XHJcblx0XHR0aGlzLmNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lLXNjcmVlbi1hcmVuYSBjYW52YXMnKTtcclxuXHRcdHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHR9XHJcblxyXG5cdC8qKiBcclxuXHQgKiBMb2FkIENoYXJhY3RlcnNcclxuXHQgKiBkeW5hbWljIENoYXJhY3RlcnMgKGUuZy4gdGhvc2UgdGhhdCBhbmltYXRlKSBhcmUgbG9hZGVkIGJ5IEdhbWUuIFxyXG5cdCAqIE90aGVyIHN0YXRpYyB2aXN1YWwgb2JqZWN0cyBhcmUgbG9hZGVkIGJ5IFNjcmVlbiBjbGFzc2VzLlxyXG5cdCAqL1xyXG5cdGxvYWRQbGF5ZXJzICgpIHtcclxuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcclxuXHRcdFx0bmV3IFBsYXllcihcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiAnUGxheWVyJywgcG9zaXRpb246IHt0b3A6IDUxMCwgbGVmdDogMjAwfSxcclxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvcGxheWVycy9wbGF5ZXIucG5nJyxcclxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRsb2FkQW5pbWFscyAoKSB7XHJcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLnB1c2goXHJcblx0XHRcdG5ldyBMaW9uKFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6ICdMaW9uJywgXHJcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMTUsIGxlZnQ6IDk0fSxcclxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvYW5pbWFscy9saW9uLnBuZycsXHJcblx0XHRcdFx0XHRnYW1lOiB0aGlzXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxyXG5cdFx0XHRuZXcgVGlnZXIoXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogJ1RpZ2VyJywgXHJcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMTUsIGxlZnQ6IDMzM30sXHJcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvdGlnZXIucG5nJyxcclxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdCk7XHJcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLnB1c2goXHJcblx0XHRcdG5ldyBCZWFyKFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6ICdCZWFyJywgcG9zaXRpb246IHt0b3A6IDE1LCBsZWZ0OiA1NzB9LFxyXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy9hbmltYWxzL2JlYXIucG5nJyxcclxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdCk7XHJcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLnB1c2goXHJcblx0XHRcdG5ldyBHb3JpbGxhKFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6ICdHb3JpbGxhJywgcG9zaXRpb246IHt0b3A6IDE1LCBsZWZ0OiA4MTJ9LFxyXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy9hbmltYWxzL2dvcmlsbGEucG5nJyxcclxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdCk7XHJcblxyXG5cdH1cclxuXHJcblx0bG9hZFRydW1wcyAoKSB7XHJcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLnB1c2goXHJcblx0XHRcdG5ldyBUcnVtcChcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiAnVHJ1bXAnLCBwb3NpdGlvbjoge3RvcDogNDUwLCBsZWZ0OiAyMDB9LFxyXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy90cnVtcHMvdHJ1bXAucG5nJyxcclxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdCk7XHJcblxyXG5cdH1cclxuXHJcblx0bG9hZEdhbWUgKCkge1xyXG5cclxuXHRcdC8vbG9hZCBJbmZvIGFzc2V0c1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKCdsb2FkaW5nIHNwbGFzaCBzY3JlZW4nKTtcclxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkVORF9TQ1JFRU5fSURdLmhpZGVTY3JlZW4oKVxyXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuU1RBUlRfU0NSRUVOX0lEXS5zaG93U2NyZWVuKCk7XHJcblx0fVxyXG5cclxuXHRzdGFydEdhbWUgKCkge1xyXG5cclxuXHRcdC8vbG9hZCBDaGFyYWN0ZXJzXHJcblx0XHR0aGlzLmxvYWRBbmltYWxzKCk7XHJcblx0XHR0aGlzLmxvYWRQbGF5ZXJzKCk7XHJcblx0XHR0aGlzLmxvYWRUcnVtcHMoKTtcclxuXHJcblx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcclxuXHRcdHRoaXMuY29sbGRlciA9IG5ldyBDb2xsaWRlcih0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzKTtcclxuXHRcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcclxuXHJcblx0XHQvL21ha2UgR2FtZVNjcmVlbiB2aXNpYmxlXHJcblxyXG5cdFx0Ly8gaW5pdGlhbGl6ZSBlbGFwc2VkIHRpbWVcclxuXHRcdHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcclxuXHJcblx0XHQvLyBzaG93IEdhbWVTY3JlZW4sIGhpZGUgb3RoZXJzXHJcblx0XHRjb25zb2xlLmxvZygnc3RhcnRpbmcgZ2FtZScpO1xyXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuU1RBUlRfU0NSRUVOX0lEXS5oaWRlU2NyZWVuKCk7XHJcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5FTkRfU0NSRUVOX0lEXS5oaWRlU2NyZWVuKCk7XHJcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5HQU1FX1NDUkVFTl9JRF0uc2hvd1NjcmVlbigpO1xyXG5cdFx0dGhpcy5nYW1lTG9vcCgpO1xyXG5cdH1cclxuXHJcblx0ZW5kR2FtZSAoKSB7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coJ2VuZGluZyBnYW1lJyk7XHJcblxyXG5cdFx0Ly8gcmVzZXQgdGltZXJcclxuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcclxuXHJcblx0XHQvLyB0dXJuIG9mZiBhbmltYXRpb25cclxuXHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2xvYmFsSWQpO1xyXG5cdFx0dGhpcy5nbG9iYWxJZCA9IG51bGw7XHJcblxyXG5cdFx0Ly8gZ28gdG8gZW5kIHNjcmVlblxyXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuR0FNRV9TQ1JFRU5fSURdLmhpZGVTY3JlZW4oKTtcclxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkVORF9TQ1JFRU5fSURdLnNob3dTY3JlZW4oKTtcclxuXHR9XHJcblxyXG5cdGVsYXBzZWQgKCkge1xyXG5cclxuXHRcdC8vIHJlY29yZCB0aW1lIHdlIGhhdmUgYmVlbiBpbiBnYW1lTG9vcFxyXG5cdFx0dGhpcy5lbmRUaW1lID0gbmV3IERhdGUoKTtcclxuXHJcblx0XHQvLyB0aW1lIGRpZmZlcmVuY2UgaW4gbXNcclxuXHJcblx0XHR2YXIgdGltZURpZmYgPSAodGhpcy5lbmRUaW1lIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMDtcclxuXHJcblx0XHQvLyBnZXQgc2Vjb25kcyAoT3JpZ2luYWwgaGFkICdyb3VuZCcgd2hpY2ggaW5jb3JyZWN0bHkgY291bnRzIDA6MjgsIDA6MjksIDE6MzAgLi4uIDE6NTksIDE6MClcclxuXHRcdHJldHVybiBNYXRoLnJvdW5kKHRpbWVEaWZmICUgNjApO1xyXG5cdH1cclxuXHJcblx0Y2hlY2tJZkNvbXBsZXRlICgpIHtcclxuXHJcblx0XHQvLyBnYW1lIGxvZ2ljIHRvIHNlZSBpZiB0aGUgZ2FtZSBzaG91bGQgcmVzZXRcclxuXHRcdC8vLy8vLy8vLy8vLy9jb25zb2xlLmxvZygnRUxBUFNFRDonICsgdGhpcy5lbGFwc2VkKCkpO1xyXG5cclxuXHRcdGlmICh0aGlzLmVsYXBzZWQoKSA+IHRoaXMuVElNRU9VVCkge1xyXG5cdFx0XHQvLyBpZiBpZGxlIHRvbyBsb25nLCByZXNldCBnYW1lIHRvIHN0YXJ0XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZSAoKSB7XHJcblxyXG5cdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuZGlzcGxheUNoYXJhY3RlcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHJcblx0XHRcdHZhciBjaGFyYWN0ZXIgPSB0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzW2ldO1xyXG5cclxuXHRcdFx0c3dpdGNoIChjaGFyYWN0ZXIuZ2V0Q2xhc3MoKSkge1xyXG5cdFx0XHRcdGNhc2UgJ1BsYXllcic6XHJcblx0XHRcdFx0Y2FzZSAnVHJ1bXAnOlxyXG5cdFx0XHRcdGNhc2UgJ0xpb24nOlxyXG5cdFx0XHRcdGNhc2UgJ1RpZ2VyJzpcclxuXHRcdFx0XHRjYXNlICdCZWFyJzpcclxuXHRcdFx0XHRjYXNlICdHb3JpbGxhJzpcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNoYXJhY3Rlci51cGRhdGUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGRyYXcgKCkge1xyXG5cclxuIFx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcclxuXHRcdHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiBcdFx0Ly8gRU5EIEFEREVEIFdFRUsgMTE8PDw8PDw8PDw8PDw8XHJcblx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzW2ldLmRyYXcodGhpcy5jb250ZXh0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdhbWVMb29wICgpIHtcclxuXHRcdFxyXG5cdFx0aWYgKHRoaXMuY2hlY2tJZkNvbXBsZXRlKCkpIHtcclxuXHRcdFx0dGhpcy5lbmRHYW1lKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMudXBkYXRlKCk7XHJcblx0XHR0aGlzLmRyYXcoKTtcclxuXHRcdFxyXG5cdFx0Ly9jb25zb2xlLmxvZygnbG9vcGluZy4uLicpXHJcblx0XHR0aGlzLmdsb2JhbElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3AuYmluZCh0aGlzKSk7XHJcblx0fVxyXG5cclxufSIsIi8qKiBcclxuICogR2FtZVBpZWNlLmpzXHJcbiAqIEJhc2ljIEdhbWUgb2JqZWN0XHJcbiAqXHJcbiAqIFRvIG1ha2UgdGhpcyB3b3JrLCB5b3UgbXVzdCBiZSBydW5uaW5nIHRoZSBCYWJlbCB0cmFuc3BpbGVyLCBcclxuICogYW5kIHdhdGNoaW5nIGZvciBjaGFuZ2VzIGluIHRoaXMgZmlsZSB3aXRoIGJyb3dzZXJpZnkuIFR3byBcclxuICogVGVybWluYWwgd2luZG93cyBuZWVkIHRvIGJlIG9wZW46XHJcbiAqIDEuIG9uZSB3aW5kb3cgd2hlcmUgeW91IHR5cGVkIHRoZSBjb21tYW5kIFwiZ3J1bnRcIlxyXG4gKiAyLiBvbmUgd2luZG93IHdoZXJlIHlvdSB0eXBlZCB0aGUgY29tbWFuZCBcIm5wbSBzdGFydFwiXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGllY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuICAgICAgICAvL1RPRE86IHVzZSBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lO1xyXG4gICAgICAgIHRoaXMudXVpZCA9IHRoaXMuc2V0SWQoKTtcclxuICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTsgLy8gY2hhbmdlIHRvIGZhbHNlIGZvciBkZWZlcnJlZCBsb2Fkc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIFNldCBhIHBvc2l0aW9uIGZvciB0aGUgb2JqZWN0LCBhbHNvIHRoZSBwb3NpdGlvbiBvZiB0aGUgXHJcbiAgICAgKiBET00gcmVwcmVzZW50YXRpb24gb2YgdGhlIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBzZXRET01Qb3NpdGlvbiAocG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgaWYgKHRoaXMuZG9tKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLnN0eWxlLnRvcCA9IHBvc2l0aW9uLnRvcCArICdweCc7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLnN0eWxlLmxlZnQgPSBwb3NpdGlvbi5sZWZ0ICsgJ3B4JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogU2V0IHRoZSBvYmplY3Qgc2l6ZSwgYWxzbyBpdHMgRE9NIHNpemVcclxuICAgICAqL1xyXG4gICAgc2V0RE9NU2l6ZSAoc2l6ZSkge1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgaWYgKHRoaXMuZG9tKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLnN0eWxlLndpZHRoID0gc2l6ZS53aWR0aCArICdweCc7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLnN0eWxlLmhlaWdodCA9IHNpemUuaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogR2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIGV2ZXJ5IGdhbWUgb2JqZWN0LlxyXG4gICAgICogQGxpbmsgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDUwMzQvY3JlYXRlLWd1aWQtdXVpZC1pbi1qYXZhc2NyaXB0XHJcbiAgICAgKi9cclxuICAgIHNldElkICgpIHtcclxuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpKjE2KSUxNiB8IDA7XHJcbiAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQvMTYpO1xyXG4gICAgICAgICAgICByZXR1cm4gKGM9PSd4JyA/IHIgOiAociYweDN8MHg4KSkudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB1dWlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIFJldHVybiB0aGUgZ2l2ZW4gbmFtZSBvZiB0aGlzIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBnZXROYW1lICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIHJldHVybiB0aGUgY2xhc3Mgb2YgdGhlIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBnZXRDbGFzcyAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBSZXR1cm4gdGhlIHVuaXF1ZSBpZCBvZiB0aGlzIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgZ2V0SWQgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnV1aWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogR2V0IHRoZSBlbmNsb3NpbmcgYm94IG91dHNpZGUgdGhlIG9iamVjdCBmb3IgZXh0ZXJuYWwgY29sbGlzaW9uc1xyXG4gICAgICovXHJcbiAgICBnZXRDb2xsaXNpb25SZWN0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogR2V0IHRoZSBpbnRlcm5hbCBib3ggd2hlbiB0aGlzIG9iamVjdCBhY3RzIGFzIGEgY29udGFpbmVyIGZvciBhbm90aGVyXHJcbiAgICAgKi9cclxuICAgIGdldEJvdW5kc1JlY3QgKCkge1xyXG5cclxuICAgIH1cclxuXHRcclxuXHQvKiogXHJcblx0ICogR2VuZXJpYyAncmVhZHknIGZ1bmN0aW9uIChlLmcuIGZvciBkZWxheWVkIGFzc2V0IGxvYWRzKVxyXG5cdCAqL1xyXG5cdHNldFJlYWR5ICh2YWwpIHtcclxuXHRcdHRoaXMucmVhZHkgPSB2YWw7XHJcblx0fVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEdlbmVyaWMgdXBkYXRlIChvdmVycmlkZSlcclxuICAgICAqL1xyXG4gICAgdXBkYXRlICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgIC8qKiBcclxuICAgICAgKiBnZW5lcmljIGRyYXcgKG92ZXJyaWRlKVxyXG4gICAgICAqL1xyXG4gICAgZHJhdyAoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiLyoqIFxyXG4gKiBHYW1lU2NyZWVuLmpzXHJcbiAqIE1haW4gZ2FtZSBzY3JlZW4gb2JqZWN0XHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIFNjcmVlblxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XHJcblxyXG4gaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcclxuIGltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4vQW5pbWFsQXJlYS5qcyc7XHJcbiBpbXBvcnQgUGxheWVyQXJlYSBmcm9tICcuL1BsYXllckFyZWEuanMnO1xyXG4gaW1wb3J0IENhZ2UgZnJvbSAnLi9DYWdlLmpzJztcclxuXHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIoY29uZmlnKTtcclxuXHJcbiBcdFx0dGhpcy5jYWdlcyA9IFtdO1xyXG4gXHRcdHRoaXMuYW5pbWFsQXJlYXMgPSBbXTtcclxuIFx0XHR0aGlzLnBsYXllckFyZWFzID0gW107XHJcblxyXG4gXHRcdC8vR2FtZVNjcmVlbiBzaG91bGQgaGlkZSBpdHMgbG9jYWwgaGVhZGVyIGFuZCBmb290ZXJcclxuIFx0XHR0aGlzLmhpZGVIZWFkZXIoKTtcclxuIFx0XHR0aGlzLmhpZGVGb290ZXIoKTtcclxuXHJcbiBcdFx0Ly8gbG9hZCB0aGUgYmFja2dyb3VuZCBpbWFnZVxyXG4gXHRcdHRoaXMubG9hZEJhY2tncm91bmQoJ2ltZy9zY3JlZW5zL2dhbWUtc2NyZWVuLnBuZycpO1xyXG5cclxuIFx0XHQvLyBnZXQgdGhlIHNlY3Rpb24gdGhhdCBoYXMgdGhlIGNhbnZhcyBmb3Igb3ZlcmxheVxyXG4gXHRcdHZhciBhcmVuYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLXNjcmVlbi1hcmVuYScpO1xyXG5cclxuIFx0XHQvLyBsb2FkIHN1Yi1vYmplY3RzIGludG8gdGhlIEFyZW5hXHJcbiBcdFx0dGhpcy5jYWdlcyAgID0gdGhpcy5sb2FkQ2FnZXMoYXJlbmEsICdpbWcvYXJlYXMvY2FnZS5wbmcnKTtcclxuIFx0XHR0aGlzLmFuaW1hbEFyZWEgPSB0aGlzLmxvYWRBbmltYWxBcmVhKCk7XHJcbiBcdFx0dGhpcy5wbGF5ZXJBcmVhID0gdGhpcy5sb2FkUGxheWVyQXJlYSgpO1xyXG5cclxuIFx0fVxyXG5cclxuIFx0bG9hZENhZ2VzIChjb250YWluZXIsIGltZ1BhdGgpIHtcclxuIFx0XHQvLyBsb2FkIDQgQ2FnZXNcclxuIFx0XHR0aGlzLmNhZ2VzLnB1c2goXHJcbiBcdFx0XHRuZXcgQ2FnZShcclxuIFx0XHRcdFx0e1xyXG4gXHRcdFx0XHRcdG5hbWU6ICdsaW9uLWNhZ2UnLCBcclxuIFx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMCwgbGVmdDogNzB9LCBcclxuIFx0XHRcdFx0XHRzaXplOiB7d2lkdGg6IDEwMCwgaGVpZ2h0OjEwMH0sIFxyXG4gXHRcdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcclxuIFx0XHRcdFx0XHRwYXRoOiBpbWdQYXRoXHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdClcclxuIFx0XHQpO1xyXG5cdFx0dGhpcy5jYWdlcy5wdXNoKFxyXG5cdFx0XHRuZXcgQ2FnZShcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiAndGlnZXItY2FnZScsIFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDMxMH0sIFxyXG5cdFx0XHRcdFx0c2l6ZToge3dpZHRoOiAxMDAsIGhlaWdodDoxMDB9LCBcclxuXHRcdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcclxuXHRcdFx0XHRcdHBhdGg6IGltZ1BhdGhcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdCk7XHJcblx0XHR0aGlzLmNhZ2VzLnB1c2goXHJcblx0XHRcdG5ldyBDYWdlKFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6ICdiZWFyLWNhZ2UnLCBcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAwLCBsZWZ0OiA1NTB9LCBcclxuXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSxcclxuXHRcdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcclxuXHRcdFx0XHRcdHBhdGg6IGltZ1BhdGhcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdCk7XHJcblx0XHR0aGlzLmNhZ2VzLnB1c2goXHJcblx0XHRcdG5ldyBDYWdlKFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6ICdnb3JpbGxhLWNhZ2UnLCBcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAwLCBsZWZ0OiA3OTB9LCBcclxuXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSxcclxuXHRcdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcclxuXHRcdFx0XHRcdHBhdGg6IGltZ1BhdGhcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdCk7XHJcbiBcdH1cclxuXHJcbiBcdGxvYWRBbmltYWxBcmVhICgpIHtcclxuIFx0XHQvLyBsb2FkIEFuaW1hbCBtb3ZlbWVudCBhcmVhXHJcbiBcdFx0dGhpcy5hbmltYWxBcmVhcy5wdXNoKFxyXG4gXHRcdFx0bmV3IEFuaW1hbEFyZWEoXHJcbiBcdFx0XHRcdHtcclxuIFx0XHRcdFx0XHRuYW1lOiAnWm9vJywgXHJcbiBcdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDEwNCwgbGVmdDogNn0sIFxyXG4gXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogOTcwLCBoZWlnaHQ6IDQxMH0sXHJcbiBcdFx0XHRcdFx0Y29udGFpbmVyOiB0aGlzLmRvbSwgXHJcbiBcdFx0XHRcdFx0cGF0aDogbnVsbFxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHQpXHJcbiBcdFx0KTtcclxuIFx0fVxyXG5cclxuIFx0bG9hZFBsYXllckFyZWEgKCkge1xyXG4gXHRcdC8vIGxvYWQgdGhlIFBsYXllclxyXG4gXHRcdHRoaXMucGxheWVyQXJlYXMucHVzaChcclxuIFx0XHRcdG5ldyBQbGF5ZXJBcmVhKFxyXG4gXHRcdFx0XHR7XHJcbiBcdFx0XHRcdFx0bmFtZTogJ1BsYXllciBBcmVhJywgXHJcbiBcdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDUxNCwgbGVmdDogNn0sIFxyXG4gXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogOTcwLCBoZWlnaHQ6IDEwMH0sXHJcbiBcdFx0XHRcdFx0Y29udGFpbmVyOiB0aGlzLmRvbSwgXHJcbiBcdFx0XHRcdFx0cGF0aDogbnVsbFxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHQpXHJcbiBcdFx0KTtcclxuIFx0fVxyXG5cclxuIH1cclxuXHJcbiIsIi8qKiBcclxuICogR29yaWxsYS5qc1xyXG4gKiBBIEdvcmlsbGEsIHdobyB0cmllcyB0byBnZXQgdGhlIFBsYXllci5cclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcclxuIGltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvcmlsbGEgZXh0ZW5kcyBBbmltYWwge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyIChjb25maWcpO1xyXG4gXHR9XHJcbiB9IiwiLyoqIFxyXG4gKiBIZWFsdGguanNcclxuICogVGhlIGNyaXR0ZXJzIHRoYXQgVHJ1bXAgdHJpZXMgdG8gc3RvcCBmcm9tIGdldHRpbmcgdGhlIFBsYXllci5cclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFsdGggZXh0ZW5kcyBDaGFyYWN0ZXIge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyIChjb25maWcpO1xyXG4gXHR9XHJcblxyXG4gfSIsIi8qKiBcclxuICogSWRlbnRpdHkuanNcclxuICogR2FtZSBMb2dvcywgTG9nb1R5cGVzLCBCcmFuZCBOYW1lXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xyXG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRlbnRpdHkgZXh0ZW5kcyBTdGF0aWNJbWFnZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuXHRcdHN1cGVyKGNvbmZpZyk7XHJcblxyXG5cdFx0dGhpcy5zZXRTb3VyY2UoY29uZmlnLnNvdXJjZSk7XHJcblx0XHR0aGlzLnNldEF1dGhvcihjb25maWcuYXV0aG9yKTtcclxuXHRcdHRoaXMubG9hZEltYWdlVG9ET00oY29uZmlnLmRvbUlkLCBjb25maWcucGF0aCk7XHJcblxyXG5cdFx0Ly9IaWRlIGFueSA8aDI+IHRleHQgZXF1aXZhbGVudCBvZiBpZGVudGl0eSBpbiB0aGlzIENTUyBib3hcclxuXHRcdHZhciB0ZXh0SWRlbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGNvbmZpZy5kb21JZCArICcgaDInKTtcclxuXHRcdHRleHRJZGVudGl0eS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdH1cclxuXHJcbn1cclxuIiwiLyoqIFxyXG4gKiBTdGF0aWNJbWFnZS5qc1xyXG4gKiBJbWFnZS1zdHlsZSBJbmZvcm1hdGlvbiB0aGF0IGNhbm5vdCBiZSBjaGFuZ2VkIG9uY2UgdGhlIGdhbWUgaXMgbG9hZGVkXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBJbmZvIHtcclxuXHJcblx0Ly8gc2F2ZSBzY29wZVxyXG5cdC8vIFRPRE86IHJlZmFjdG9yIHdpdGggYXJyb3cgZnVuY3Rpb25cclxuXHJcblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG5cdFx0c3VwZXIoY29uZmlnKTtcclxuXHRcdHRoaXMucmVhZHkgPSBmYWxzZTsgLy9vdmVyLXJpZGUgR2FtZVBpZWNlIGFuZCBpbmZvIHdpdGggZGVmZXJyYWxzXHJcblx0XHR0aGlzLmltYWdlID0gbnVsbDtcclxuXHRcdHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoO1xyXG5cdFx0dGhpcy5hdXRob3IgPSBjb25maWcuYXV0aG9yO1xyXG5cdFx0dGhpcy5zb3VyY2UgPSBjb25maWcuc291cmNlO1xyXG5cdH1cclxuXHJcblx0Ly8gbG9hZCBhbiBpbWFnZVxyXG5cdGxvYWQgKHBhdGgsIGNhbGxiYWNrKSB7XHJcblx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHR0aGF0LnNldFJlYWR5KGZhbHNlKTtcclxuXHRcdGNvbnNvbGUubG9nKCdlbnRlcmluZyBsb2FkIGluSW1hZ2UnKTtcclxuXHRcdHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHRcdGltZy5zcmMgPSBwYXRoO1xyXG5cdFx0aW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Y29uc29sZS5sb2codGhhdC5uYW1lICsgJyBpbWFnZSBsb2FkZWQgZnJvbTonICsgcGF0aCArICcgdzonICsgaW1nLndpZHRoICsgJyBoOicgKyBpbWcuaGVpZ2h0KVxyXG5cdFx0XHR0aGF0LnNldFJlYWR5KHRydWUpO1xyXG5cdFx0XHR0aGF0LmRhdGEgPSBpbWc7XHJcblx0XHRcdFxyXG5cdFx0XHRpZihjYWxsYmFjaykge1xyXG5cdFx0XHRcdGNhbGxiYWNrKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGltZy5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2Vycm9yIGxvYWRpbmcgaW1nIGZyb206JyArIHBhdGgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gbG9hZCBpbWFnZSwgYXBwZW5kIHRvIGV4aXN0aW5nIERPTSBlbGVtZW50XHJcblx0Ly8gTk9URTogdGhpcyBpcyBvdmVyLXdyaXR0ZW4gaW4gQ2hhcmFjdGVyLmpzLCB3aGljaCBsb2FkcyBpbWFnZXMgaW50byBDYW52YXNcclxuXHRsb2FkSW1hZ2VUb0RPTSAoZG9tSWQsIHBhdGgsIGNhbGxiYWNrKSB7XHJcblx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHR0aGlzLmxvYWQocGF0aCwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZm9yZWdyb3VuZCBpbWFnZSAnICsgcGF0aCArICcgbG9hZGVkJylcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9tSWQpLmFwcGVuZENoaWxkKHRoYXQuZGF0YSk7XHJcblx0XHRcdGlmIChjYWxsYmFjaykge1xyXG5cdFx0XHRcdGNhbGxiYWNrKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vIGxvYWQgaW1hZ2UgYXMgYSBDU1MgYmFja2dyb3VuZCBpbWFnZSBpbnRvIGV4aXN0aW5nIERPTSBlbGVtZW50LiBcclxuXHQvLyBOT1RFOiBubyBsb2NhbCByZWZlcmVuY2UgdG8gaW1hZ2UgaW4gdGhpcyBjYXNlXHJcblx0bG9hZEJhY2tncm91bmRJbWFnZSAoY29udGFpbmVyLCBwYXRoLCBjYWxsYmFjaykge1xyXG5cdFx0Y29uc29sZS5sb2coJ2xvYWRpbmcgYmFja2dyb3VuZCBpbWFnZTonICsgcGF0aClcclxuXHRcdGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J3VybCgnICsgcGF0aCArICcpJztcclxuXHRcdHRoaXMuc2V0UmVhZHkodHJ1ZSk7XHJcblx0XHRpZiAoY2FsbGJhY2spIHtcclxuXHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIERyYXcgdGhlIGltYWdlIHRvIGEgc3VwcGxpZWQgY2FudmFzIGNvbnRleHRcclxuXHRkcmF3VG9DYW52YXMgKGNvbnRleHQsIHBvc2l0aW9uLCBzaXplKSB7XHJcblx0XHRjb250ZXh0LmRyYXdJbWFnZShpbWcsIHBvc2l0aW9uLnRvcCwgcG9zaXRpb24ubGVmdCwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xyXG5cdH1cclxuXHJcblx0Ly8gRHJhdyB0byB0aGUgRE9NLiBBc3N1bWUgdGhlIEltYWdlIHdhcyBhbHJlYWR5IGF0dGFjaGVkIHRvIHRoZSBET01cclxuXHRkcmF3VG9ET00gKHBvc2l0aW9uLCBzaXplKSB7XHJcblx0XHR0aGlzLmltYWdlLnN0eWxlLnRvcCA9IHBvc2l0aW9uLnRvcDtcclxuXHRcdHRoaXMuaW1hZ2Uuc3R5bGUubGVmdCA9IHBvc2l0aW9uLmxlZnQ7XHJcblx0XHR0aGlzLmltYWdlLnN0eWxlLndpZHRoID0gc2l6ZS53aWR0aDtcclxuXHRcdHRoaXMuaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XHJcblx0fVxyXG5cclxufVxyXG4iLCIvKiogXHJcbiAqIEluZm8uanNcclxuICogR2VuZXJpYyBpbmZvcm1haXRvbiBvYmplY3RcclxuICogQGluaGVyaXRzIEdhbWVQaWVjZVxyXG4gKi9cclxuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvIGV4dGVuZHMgR2FtZVBpZWNlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoY29uZmlnKSB7XHJcblx0XHRzdXBlcihjb25maWcpO1xyXG5cdH1cclxuXHJcblx0c2V0QXV0aG9yIChhdXRob3IpIHtcclxuXHRcdHRoaXMuYXV0aG9yID0gYXV0aG9yO1xyXG5cdH1cclxuXHJcblx0c2V0U291cmNlIChzb3VyY2UpIHtcclxuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xyXG5cdH1cclxuXHJcbn0iLCIvKiogXHJcbiAqIEluc3RydWN0aW9ucy5qc1xyXG4gKiBUZXh0IHdoaWNoIHRlbGxzIHRoZSBQbGF5ZXIgaG93IHRvIHBsYXkgdGhlIGdhbWUuXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG4gaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcclxuIGltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVjdGlvbnMgZXh0ZW5kcyBTdGF0aWNUZXh0IHtcclxuXHJcblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG5cdFx0c3VwZXIoY29uZmlnKTtcclxuXHR9XHJcbn1cclxuIiwiLyoqIFxyXG4gKiBMaW9uLmpzXHJcbiAqIEEgTGlvbiwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xyXG4gaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlvbiBleHRlbmRzIEFuaW1hbCB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XHJcbiBcdH1cclxuIH0iLCIvKiogXHJcbiAqIEBjbGFzcyBNb3ZlclxyXG4gKiBAZGVzY3JpcHRpb24gdXBkYXRlIHBvc2l0aW9uIG9mIG9iamVjdCBiZWluZyBhbmltYXRlZCBieSBHYW1lLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IgKGdhbWVPYmopIHtcclxuXHRcdHRoaXMub2JqID0gZ2FtZU9iajtcclxuXHJcbiAgICAgICAgLy8gQ2hhcmFjdGVyIGhhcyByZWZlcmVuY2UgdG8gR2FtZVxyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWVPYmouZ2FtZTtcclxuXHJcbiAgICAgICAgLy8gTW92ZW1lbnQgdHlwZXNcclxuICAgICAgICB0aGlzLnR5cGUgPSAwO1xyXG4gICAgICAgIHRoaXMuU0xFVyA9IDE7XHJcbiAgICAgICAgdGhpcy5SQU5ET00gPSAyO1xyXG4gICAgICAgIHRoaXMuUElOR1BPSU5HID0gMztcclxuXHJcblx0fVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEBtZXRob2QgdHJ1bmNhdGVcclxuICAgICAqIEBkZXNjcmlwdGlvbiB0cnVuY2F0ZSAobm90IHJvdW5kKSBudW1iZXIgdG8gZml4ZWQgbnVtYmVyIG9mIGRlY2ltYWxzXHJcbiAgICAgKiBAcGFyYW0gTnVtYmVyIG51bSBmbG9hdGluZy1wb2ludCBudW1iZXJcclxuICAgICAqIEBwYXJhbSBJbnRlZ2VyIGRlY2ltYWxzIHRoZSBudW1iZXIgb2YgZGVjaW1hbHMgcG9pbnRzIHRvIHJvdW5kIHRvXHJcbiAgICAgKiBAcmV0dXJucyBOdW1iZXIgdGhlIHRydW5jYXRlZCBudW1iZXJcclxuICAgICAqL1xyXG4gICAgdHJ1bmNhdG9yIChudW0sIGRlY2ltYWxzKSB7ICAgIFxyXG4gICAgICAgIHZhciBudW1Qb3dlciA9IE1hdGgucG93KDEwLCBkZWNpbWFscyk7IC8vIFwibnVtUG93ZXJDb252ZXJ0ZXJcIiBtaWdodCBiZSBiZXR0ZXJcclxuICAgICAgICByZXR1cm4gfn4obnVtICogbnVtUG93ZXIpL251bVBvd2VyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEBtZXRob2QgcmFuZG9taXplclxyXG4gICAgICogQGRlc2NyaXB0aW9uIHJhbmRvbWl6ZSBhIG51bWJlclxyXG4gICAgICovXHJcbiAgICByYW5kb21pemVyICgpIHtcclxuICAgICAgICB2YXIgZCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIChkID0gcGFyc2VJbnQoZCkgLSBkKTtcclxuICAgICAgICBkID0gdGhpcy50cnVuY2F0b3IoZCwgMikgLyAxMDtcclxuICAgICAgICByZXR1cm4gZDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBAbWV0aG9kIGdldENlbnRlclxyXG4gICAgICovXHJcbiAgICBnZXRDZW50ZXIgKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB4ICsgKHdpZHRoLzIpLFxyXG4gICAgICAgICAgICB5OiB5ICsgKGhlaWdodC8yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblx0LyoqIFxyXG5cdCAqIEBtZXRob2QgaW5pdFNsaWRlclxyXG5cdCAqIEBkZXNjcmlwdGlvbiBzbGV3IG9iamVjdCBob3Jpem9udGFsbHkgd2l0aCBrZXlwcmVzc2VzXHJcblx0ICogQHBhcmFtIGRlZyB0aGUgZGVncmVlcyB0byByb3RhdGUgdGhlIFBsYXllci4gXHJcbiAgICAgKiBOT1RFOiB3ZSBhbHNvIGdyYWIgdGhlICdUcnVtcCcgb2JqZWN0LlxyXG5cdCAqL1xyXG5cdGluaXRTbGV3ICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW5pdGluZyBzbGV3IG1vdGlvbicpO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMuU0xFVztcclxuXHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICAgICAgdGhpcy50aWNrZXIgPSAwO1xyXG4gICAgICAgIHRoaXMubGFzdERpciA9IDE7XHJcblxyXG4gICAgICAgIC8vIGFkZCBib3R0b20sIHJpZ2h0IHRvIG1ha2UgYSBSZWN0IGZvciB0aGUgUGxheWVyQXJlYVxyXG4gICAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10ucGxheWVyQXJlYXNbMF0ucG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5ib3VuZHMud2lkdGggPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5wbGF5ZXJBcmVhc1swXS5zaXplLndpZHRoO1xyXG4gICAgICAgIHRoaXMuYm91bmRzLmhlaWdodCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLnBsYXllckFyZWFzWzBdLnNpemUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYm91bmRzLmJvdHRvbSA9IHRoaXMuYm91bmRzLnRvcCArIHRoaXMuYm91bmRzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmJvdW5kcy5yaWdodCA9IHRoaXMuYm91bmRzLmxlZnQgKyB0aGlzLmJvdW5kcy53aWR0aDtcclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMub2JqLmltYWdlO1xyXG5cclxuICAgICAgICAvLyB0b2dnbGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBQbGF5ZXIgd2hlbiBraWNraW5nXHJcbiAgICAgICAgdGhpcy51bktpY2sgPSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XHJcbiAgICAgICAgdGhpcy5pbktpY2sgPSB0aGlzLm9iai5wb3NpdGlvbi50b3AgLSA2O1xyXG5cclxuICAgICAgICAvLyBOT1RFOiBUcnVtcCBpcyBhZGRlZCB0byBQbGF5ZXIgaW4gQ29sbGlkZXJcclxuXHJcbiAgICAgICAgLy8gbGlzdGVuIGZvciB1c2VyIGV2ZW50c1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBcclxuICAgICAgICAgICAgZXZlbnQgPT4gdGhpcy5zbGV3KGV2ZW50KSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsXHJcbiAgICAgICAgICAgIGV2ZW50ID0+IHRoaXMudW5raWNrKGV2ZW50KSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBAbWV0aG9kIGluaXRSYW5kb21cclxuICAgICAqIEBkZXNjcmlwdGlvbiBpbml0IHJhbmRvbSBtb3Rpb25zIGFsb25nIGEgcGF0aC4gVXNlZCBmb3IgXHJcbiAgICAgKiBBbmltYWwgY2hhcmFjdGVycyBtb3ZpbmcgdGhyb3VnaCB0aGUgQW5pbWFsQXJlYS5cclxuICAgICAqL1xyXG4gICAgaW5pdFJhbmRvbSAocHJlZlNwZWVkLCBkaXJlY3Rpb24pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW5pdCByYW5kb20gbW90aW9uJyk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5SQU5ET007XHJcblxyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBwcmVmU3BlZWQgKiB0aGlzLnRpbWVTdGFtcFJhbmRvbSgpO1xyXG4gICAgICAgIHRoaXMuZGVsYXkgPSB0aGlzLnRpbWVTdGFtcFJhbmRvbSgpICogMzAwO1xyXG4gICAgICAgIHRoaXMub2JqLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuZGVsYXlDb3VudGVyID0gMDtcclxuICAgICAgICB0aGlzLk1BWCA9IDMwO1xyXG4gICAgICAgIHRoaXMuTUFYX0RFTEFZID0gMzAwO1xyXG5cclxuICAgICAgICAvLyBhZGQgYm90dG9tLCByaWdodCB0byBtYWtlIGEgUmVjdCBmb3IgdGhlIEFuaW1hbEFyZWFcclxuICAgICAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuYm91bmRzLndpZHRoID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10uYW5pbWFsQXJlYXNbMF0uc2l6ZS53aWR0aDtcclxuICAgICAgICB0aGlzLmJvdW5kcy5oZWlnaHQgPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5zaXplLmhlaWdodDtcclxuICAgICAgICB0aGlzLmJvdW5kcy5ib3R0b20gPSB0aGlzLmJvdW5kcy50b3AgKyB0aGlzLmJvdW5kcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5ib3VuZHMucmlnaHQgPSB0aGlzLmJvdW5kcy5sZWZ0ICsgdGhpcy5ib3VuZHMud2lkdGg7XHJcblxyXG5cclxuICAgICAgICAvLyByZW1lbWJlciB3aGVyZSB3ZSBzdGFydGVkIChpbiB0aGUgY2FnZSlcclxuICAgICAgICB0aGlzLnN0YXJ0VG9wID0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xyXG4gICAgICAgIHRoaXMuc3RhcnRMZWZ0ID0gdGhpcy5vYmoucG9zaXRpb24ubGVmdDtcclxuXHJcbiAgICAgICAgLy8gY2FjaGUgcG9zaXRpb24gZHVyaW5nIG5ldyByYW5kb20gbW92ZXNcclxuICAgICAgICB0aGlzLm5ld1RvcCA9IDAsIHRoaXMubmV3TGVmdCA9IDA7XHJcblxyXG4gICAgICAgIC8vIGdldCBib3R0b20gYW5kIHJpZ2h0IGZyb20gQ2hhcmFjdGVyIGZyb20gaXRzIEltYWdlXHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMub2JqLmltYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEBtZXRob2QgaW5pdFBpbmdQb25nXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gaGF2ZSBhIFRydW1wIGluaXQuXHJcbiAgICAgKiBOT1RFOiBjb2xsaXNpb24gcG90ZW50aWFsIGFkZGVkIHNlcGFyYXRlbHlcclxuICAgICAqL1xyXG4gICAgaW5pdFBpbmdQb25nIChwcmVmU3BlZWQsIHRydW1wKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQgcGluZ3BvbmcgbW90aW9uJyk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5QSU5HUE9ORztcclxuXHJcbiAgICAgICAgLy9BbmltYWwgYXJlYVxyXG4gICAgICAgIC8vIGFkZCBib3R0b20sIHJpZ2h0IHRvIG1ha2UgYSBSZWN0IGZvciB0aGUgQW5pbWFsQXJlYVxyXG4gICAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10uYW5pbWFsQXJlYXNbMF0ucG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5ib3VuZHMud2lkdGggPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5zaXplLndpZHRoO1xyXG4gICAgICAgIHRoaXMuYm91bmRzLmhlaWdodCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnNpemUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYm91bmRzLmJvdHRvbSA9IHRoaXMuYm91bmRzLnRvcCArIHRoaXMuYm91bmRzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmJvdW5kcy5yaWdodCA9IHRoaXMuYm91bmRzLmxlZnQgKyB0aGlzLmJvdW5kcy53aWR0aDtcclxuXHJcbiAgICAgICAgdGhpcy5vYmouc3RhcnRUb3AgPSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XHJcblxyXG4gICAgICAgIC8vIGdldCBib3R0b20gYW5kIHJpZ2h0IGZyb20gQ2hhcmFjdGVyIGZyb20gaXRzIEltYWdlXHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMub2JqLmltYWdlO1xyXG5cclxuICAgICAgICB0aGlzLm9iai5zcGVlZCA9IDA7XHJcbiAgICAgICAgdGhpcy5vYmouZHggPSAwO1xyXG4gICAgICAgIHRoaXMub2JqLmR5ID0gMDtcclxuXHJcbiAgICAgICAgLy8gTk9URTogQW5pbWFscyBhbmQgUGxheWVycyBhcmUgYWRkZWQgdG8gVHJ1bXAgaW4gQ29sbGlkZXJcclxuXHJcbiAgICB9XHJcblxyXG5cdC8qKiBcclxuXHQgKiBAbWV0aG9kIHNsZXcgXHJcblx0ICogTW92ZSBvYmplY3Qgc2xpZ2h0bHkgdXAgZm9yIGR1cmF0aW9uIG9mIHNwYWNlIGJhciBkb3duXHJcbiAgICAgKiBDYWxsYmFjayBmb3Iga2V5ZG93biBhZGRFdmVudExpc3RlbmVyXHJcbiAgICAgKiBAcGFyYW0gRXZlbnQgZSB0aGUga2V5ZG93biBldmVudFxyXG4gICAgICovXHJcblx0c2xldyAoZSkge1xyXG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMzI6XHJcbiAgICAgICAgICAgIGNhc2UgMzg6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtpY2soZSk7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vcHJldmVudCBzY3JvbGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM3OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWNrZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCAtPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0RGlyID0gLTE7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vcHJldmVudCBzY3JvbGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM5OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWNrZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCArPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0RGlyID0gMTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy9wcmV2ZW50IHNjcm9sbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEBtZXRob2QgdXBkYXRlU2xld1xyXG4gICAgICogQGRlc2NyaXB0aW9uIHByb3ZpZGUgc2ltcGxlIGVhc2luZyBtb3Rpb24sIGFsc28sIGJvdW5jZSBcclxuICAgICAqIG9mZiB3YWxscy5cclxuICAgICAqL1xyXG4gICAgdXBkYXRlU2xldyAoKSB7XHJcbiAgICAgICAgdGhpcy50aWNrZXIrKztcclxuICAgICAgICBpZiAodGhpcy5zcGVlZCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGlja2VyID4gMTApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLz0gMjtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKz0gKHRoaXMubGFzdERpciAqIHRoaXMuc3BlZWQpO1xyXG5cclxuICAgICAgICAvL2NoZWNrIGJvdW5kc1xyXG4gICAgICAgIGlmICh0aGlzLmJvdW5kcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnZS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdyA9IHRoaXMuaW1hZ2UuZGF0YS53aWR0aDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IDwgdGhpcy5ib3VuZHMubGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdERpciA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCAvPSAxLjI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCA9IHRoaXMuYm91bmRzLmxlZnQgKyAodGhpcy5zcGVlZCAqIDEuNSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPiB0aGlzLmJvdW5kcy5yaWdodCAtIHcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3REaXIgPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkIC89IDEuMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ID0gdGhpcy5ib3VuZHMucmlnaHQgLSB3IC0gKHRoaXMuc3BlZWQgKiAxLjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEBtZXRob2Qga2lja1xyXG4gICAgICogQGRlc2NyaXB0aW9uIGlmIGZvb3QgaXMgbmVhciBUcnVtcCwga2ljayBoaW0gaW50byB0aGUgQW5pbWFsXHJcbiAgICAgKi9cclxuICAgIGtpY2sgKGUpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCc6Ojo6VEhJUyBUUlVNUDo6Ojo6JyArIHRoaXMub2JqLnRydW1wKVxyXG4gICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCA9IHRoaXMuaW5LaWNrO1xyXG5cclxuICAgICAgICAvLyBzZWUgaWYgd2UncmUgY2xvc2UgZW5vdWdoIHRvIGtpY2sgaW4gdGhlIHkgYXhpc1xyXG4gICAgICAgIHZhciB0cnVtcFlEaXN0ID0gdGhpcy5vYmoucG9zaXRpb24udG9wIC0gdGhpcy5vYmoudHJ1bXAuaW1hZ2UuZGF0YS53aWR0aCAtIHRoaXMub2JqLnRydW1wLnBvc2l0aW9uLnRvcDtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCd0cnVtcFlEaXN0OicgKyB0cnVtcFlEaXN0KVxyXG5cclxuICAgICAgICAvLyBJZiBQbGF5ZXIgaXMgY2xvc2UgaW4gWSwgYW5kIGluc2lkZSBYIHJhbmdlLCBraWNrIHRoZSBUcnVtcCBpbnRvIEFuaW1hbEFyZWFcclxuICAgICAgICBpZiAodHJ1bXBZRGlzdCA8IDEwKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gc3RhcnQgdGhlIFRydW1wIG1vdmluZywgc3BlZWRcclxuICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuc3BlZWQgPSA0MDtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHRvbyBjbG9zZSB0byBsZWZ0IHdhbGwsIHByZS1hc3NpZ24gYSB2YWx1ZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5vYmoudHJ1bXAucG9zaXRpb24ubGVmdCA8ICh0aGlzLmJvdW5kcy5sZWZ0ICsgMjApKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj4+VHJ1bXA6IGxlZnQgYm91bmQgY29ycmVjdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHggPSAtMC4yO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHkgPSAwLjg7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGNvbXB1dGUgZHggYW5kIGR5IGZvciBUcnVtcFxyXG4gICAgICAgICAgICB2YXIgZGlzdCA9ICh0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IC0gdGhpcy5vYmoudHJ1bXAucG9zaXRpb24ubGVmdCkgLyA1MDtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRpc3QpIDwgMS4wKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHggPSBkaXN0O1xyXG4gICAgICAgICAgICAgICAgaWYoZHggPiAwLjAwMyAmJiBkeCA8IDAuOCkge1xyXG4gICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHggPSBkeDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keSA9IDEuMCAtIGR4O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkeCA8IDAgJiYgZHggPiAtMC44KSB7XHJcbiAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keCA9IGR4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR5ID0gMS4wICsgZHg7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGR4KSA8IDAuMDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLnJhbmRvbWl6ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBkID0gZCAtIHRoaXMucmFuZG9taXplcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR4ID0gZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keSA9IDEuMCArIGR4O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gLy8gZW5kIG9mIGZ1bmN0aW9uXHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogQG1ldGhvZCB1bmtpY2tcclxuICAgICAqIEBkZXNjcmlwdGlvbiBzZXQgcG9zaXRpb24gb2YgUGxheWVyIGJhY2sgdG8gb3JpZ2luYWxcclxuICAgICAqL1xyXG4gICAgdW5raWNrIChlKSB7XHJcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAzMjpcclxuICAgICAgICAgICAgY2FzZSAzODpcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCA9IHRoaXMudW5LaWNrO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEBtZXRob2QgdGltZVN0YW1wUmFuZG9tXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gcmFuZG9taXplIGluIGEgMTAtZm9sZCByYW5nZSB1c2luZyB3aW5kb3cucGVyZm9ybWFuY2VcclxuICAgICAqL1xyXG5cdHRpbWVTdGFtcFJhbmRvbSAoKSB7XHJcblx0XHR2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcclxuICAgICAgICB9XHJcblx0XHR2YXIgbnVtID0gJ3h4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgdmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkqMTApJTEwIHwgMDtcclxuICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZC8xMCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoYz09J3gnID8gciA6IChyJjB4M3wweDgpKS50b1N0cmluZygxMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBudW0gLyAxMDAwMDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gbWluIChpbmNsdXNpdmUpIGFuZCBtYXggKGV4Y2x1c2l2ZSlcclxuXHQgKiBAbGluayBcclxuXHQgKi9cclxuXHRnZXRSYW5kb20obWluLCBtYXgpIHtcclxuICAgXHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxuXHR9XHJcblxyXG5cdC8qKiBcclxuXHQgKiBAbWV0aG9kIHVwZGF0ZVJhbmRvbVdhbGtcclxuXHQgKiBAZGVzY3JpcHRpb24gZ2VuZXJhdGUgcmFuZG9tIHdhbGssIHdpdGggb25lIHByZWZlcnJlZCBkaXJlY3Rpb24sIFxyXG5cdCAqIHVzZWQgYnkgQW5pbWFscy5cclxuICAgICAqIHRoaXMub2JqLmRpcmVjdGlvbiBpcyB0aGUgb3ZlcmFsbCBwYXRoIHRoZSBBbmltYWwgaXMgZm9sbG93aW5nIHRvIG9uZSBvZiB0aGUgXHJcbiAgICAgKiBmb3VyIHdhbGxzIG9mIHRoZSBBbmltYWxBcmVhLiBJZiBpdCBpcyAncmV0dXJuJyBpdCBoYXMgY29sbGlkZWQgd2l0aCBhIFRydW1wXHJcbiAgICAgKiBhbmQgaXMgcmV0dXJuaW5nIHRvIGl0cyBjYWdlLlxyXG5cdCAqL1xyXG5cdHVwZGF0ZVJhbmRvbVdhbGsgKCkge1xyXG5cdFx0dGhpcy5jb3VudGVyKys7XHJcblx0XHR0aGlzLmRlbGF5Q291bnRlcisrO1xyXG5cdFx0aWYgKHRoaXMuZGVsYXlDb3VudGVyIDwgdGhpcy5kZWxheSkge1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKCdkZWxheUNvdW50ZXI6JyArIHRoaXMuZGVsYXlDb3VudGVyICsgJyBNQVg6JyArIHRoaXMuTUFYX0RFTEFZKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuICAgICAgICAvLyBjb21wdXRlIGR4IGFuZCBkeSBmcm9tIHJhbmRvbSB3YWxrLiBzdG9yZSBpbml0aWFsIHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5vbGRMZWZ0ID0gdGhpcy5vYmoucG9zaXRpb24ubGVmdDtcclxuICAgICAgICB0aGlzLm9sZFRvcCA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcclxuXHJcblx0XHRzd2l0Y2ggKHRoaXMub2JqLmRpcmVjdGlvbikge1xyXG5cdFx0XHRjYXNlICd0b3AnOlxyXG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLnRvcCAtPSAodGhpcy5zcGVlZCArICgwLjEgKiB0aGlzLmdldFJhbmRvbSgxLCB0aGlzLnNwZWVkKSkpO1xyXG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgLT0gMTAgKiAodGhpcy5nZXRSYW5kb20oLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQvMikpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdsZWZ0JzpcclxuXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IC09ICh0aGlzLnNwZWVkICsgKDAuNSAqIHRoaXMuZ2V0UmFuZG9tKDAsIHRoaXMuc3BlZWQpKSk7XHJcblx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24udG9wICs9IDEwICoodGhpcy5nZXRSYW5kb20oLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnYm90dG9tJzpcclxuIFx0XHRcdFx0aWYgKHRoaXMuY291bnRlciA+IHRoaXMuTUFYKSB7XHJcbiBcdFx0XHRcdFx0Ly8vLy8vdGhpcy5NQVggPTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5NQVggPSB0aGlzLmdldFJhbmRvbSgyLCAxNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRISVMgTUFYOlwiICsgdGhpcy5NQVgpXHJcblx0XHRcdFx0XHR0aGlzLm5ld0xlZnQgPSAodGhpcy5nZXRSYW5kb20oLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpKTtcclxuXHRcdFx0XHRcdHRoaXMuY291bnRlciA9IDA7XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXIgPiB0aGlzLk1BWCAvIDIpIHtcclxuXHRcdFx0XHRcdC8vdGhpcy5zcGVlZCArPSB0aGlzLnRpbWVTdGFtcFJhbmRvbSgpIC8gMjQwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLmdldFJhbmRvbSgtMC4yLCAxKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi50b3AgKz0gdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy5nZXRSYW5kb20oLTEsIDEpO1xyXG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgLT0gciAqIHRoaXMubmV3TGVmdDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAncmlnaHQnOlxyXG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKz0gKHRoaXMuc3BlZWQgKyAoMC41ICogdGhpcy5nZXRSYW5kb20oMCwgdGhpcy5zcGVlZCkpKTtcclxuXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi50b3AgKz0gMTAgKiAodGhpcy5nZXRSYW5kb20oLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAncmV0dXJuJzpcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgY2F1c2VkIGJ5IGEgVHJ1bXAgY29sbGlkZXIgcnVubmluZyBpbnRvIHRoZSBBbmltYWxcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHJldHVybiBBbmltYWwgdG8gaXRzIGNhZ2VcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqLmRpcmVjdGlvbiA9ICdjYWdlZCc7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiB3cml0ZSByZXR1cm4gYXJjXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnY2FnZWQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCA9IHRoaXMuc3RhcnRMZWZ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wID0gdGhpcy5zdGFydFRvcDtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHdoZW4gY2FnZWQsIHJlc2V0IHVudGlsIGl0IGlzIHVuY2FnZWQgYWdhaW5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ01vdmVyLnNldFByZWZEaXJlY3Rpb246IGludmFsaWQgZGlyZWN0aW9uOicgKyB0aGlzLm9iai5kaXJlY3Rpb24pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuICAgICAgICAvLyBDb21wdXRlIGR4IGFuZCBkeSBmb3IgQW5pbWFsc1xyXG4gICAgICAgIHZhciB4ZGlzdCA9IHRoaXMub2xkTGVmdCAtIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQ7XHJcbiAgICAgICAgdmFyIHlkaXN0ID0gdGhpcy5vbGRUb3AgLSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XHJcbiAgICAgICAgdmFyIHN1bSA9IHhkaXN0ICsgeWRpc3Q7XHJcbiAgICAgICAgaWYgKHN1bSA+IDAuMDAwMSkge1xyXG4gICAgICAgICAgICB0aGlzLm9iai5keCA9IHhkaXN0IC8gc3VtO1xyXG4gICAgICAgICAgICB0aGlzLm9iai5keSA9IHlkaXN0IC8gc3VtOyAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vYmouZHggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm9iai5keSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzYXZlIG91ciBuZXcgcG9zaXRpb25cclxuICAgICAgICB0aGlzLm9sZExlZnQgPSB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0O1xyXG4gICAgICAgIHRoaXMub2xkVG9wID0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKCcgZHg6JyArIHRoaXMub2JqLmR4ICsgJyBkeTonICsgdGhpcy5vYmouZHkgKyAnIHN1bTonICsgc3VtKVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZUNvbGxpc2lvbiAodHJ1bXAsIGFuaW1hbCkge1xyXG4gICAgICAgIHZhciB3ID0gdGhpcy5vYmouaW1hZ2UuZGF0YS53aWR0aDtcclxuICAgICAgICB2YXIgaCA9IHRoaXMub2JqLmltYWdlLmRhdGEuaGVpZ2h0O1xyXG4gICAgICAgIHZhciBhdyA9IGFuaW1hbC5pbWFnZS5kYXRhLndpZHRoO1xyXG4gICAgICAgIHZhciBhaCA9IGFuaW1hbC5pbWFnZS5kYXRhLmhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPCBhbmltYWwucG9zaXRpb24ubGVmdCArIGF3ICYmXHJcbiAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKyB3ID4gYW5pbWFsLnBvc2l0aW9uLmxlZnQgJiZcclxuICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wIDwgYW5pbWFsLnBvc2l0aW9uLnRvcCArIGFoICYmXHJcbiAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCArIGggPiBhbmltYWwucG9zaXRpb24udG9wKSB7IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL2dldCBUcnVtcCBjZW50ZXJhbCBwb2ludFxyXG4gICAgICAgICAgICAgICAgdmFyIHRYQ2VudGVyID0gdGhpcy5vYmoucG9zaXRpb24ubGVmdCArIHcvMjtcclxuICAgICAgICAgICAgICAgIHZhciB0WUNlbnRlciA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcCAgKyBoLzI7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9nZXQgQW5pbWFsIGNlbnRyYWwgcG9pbnRcclxuICAgICAgICAgICAgICAgIHZhciBhWENlbnRlciA9IGFuaW1hbC5wb3NpdGlvbi5sZWZ0ICsgYXcvMjtcclxuICAgICAgICAgICAgICAgIHZhciBhWUNlbnRlciA9IGFuaW1hbC5wb3NpdGlvbi50b3AgKyBhaC8yO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vY29tcHV0ZSB4IGFuZCB5IHZlY3RvciBiZXR3ZWVuIGNlbnRlcnNcclxuICAgICAgICAgICAgICAgIHZhciBjWERpZmYgPSB0WENlbnRlciAtIGFYQ2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNZRGlmZiA9IHRZQ2VudGVyID0gYVlDZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVHJ1bXAgZG9lc24ndCByZWFjdCBpZiBub3QgbW92aW5nIChldmVuIGlmIGFuaW1hbCBkb2VzKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRydW1wLnNwZWVkICE9IDAgJiYgdHJ1bXAuZHggIT0gMCAmJiB0cnVtcC5keSAhPSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1vdmUgb2JqZWN0IHNvIGl0IGlzbid0IGNvbGxpZGluZyBhbnltb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNYRGlmZiA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydW1wLnBvc2l0aW9uLnggKz0gKGNYRGlmZiArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydW1wLnBvc2l0aW9uLnggLT0gKGNYRGlmZiArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNZRGlmZiA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydW1wLnBvc2l0aW9uLnkgKz0gKGNZRGlmZiArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydW1wLnBvc2l0aW9uLnkgLT0gKGNZRGlmZiArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9ybWFsaXplIG5ldyB2ZWN0b3JzXHJcbiAgICAgICAgICAgICAgICAgICAgdHJ1bXAuZHggPSAtY1hEaWZmIC8gY1lEaWZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRydW1wLmR5ID0gLWNZRGlmZiAvIGNYRGlmZjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcm91bmRpbmcgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGRpZiA9IE1hdGguYWJzKHRydW1wLmR4ICsgdHJ1bXAuZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZGlmID4gMS4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cnVtcC5keCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVtcC5keSAtPSBkZGlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1bXAuZHkgKz0gZGRpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gLy9lbmQgb2YgVHJ1bXAgaXMgbW92aW5nXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdkeDo6Ojo6OicgKyB0cnVtcC5keCArICcgZHk6Ojo6OjonICsgdHJ1bXAuZHkpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEBtZXRob2QgcGluZ1BvbmdcclxuICAgICAqIEBkZXNjcmlwdGlvbiBtb3ZlIGluIGEgcGluZy1wb25nIHN0eWxlLiBUaGlzIGlzIHNwZWNpZmljIHRvIHRoZSBnYW1lLlxyXG4gICAgICogMS4gY29sbGlzaW9uIHN0YXJ0cyB0aGUgY2hhcmFjdGVyIG1vdmluZ1xyXG4gICAgICogMi4gdGhleSBib3VuY2Ugb24gYWxsIHdhbGxzIEVYQ0VQVCB0aGUgb25lIHRoZXkgd2VyZSBjbG9zZXN0IHRvIHdoZW4gY29sbGlkZSB3aXRoXHJcbiAgICAgKiAzLiB3aGVuIHRoZXkgaW50ZXJzZWN0IHRoYXQgd2FsbCwgdGhleSBzdG9wXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVBpbmdQb25nICgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdkeDonICsgdGhpcy5vYmouZHggKyAnIGR5OicgKyB0aGlzLm9iai5keSk7XHJcbiAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCAtPSB0aGlzLm9iai5zcGVlZCAqIHRoaXMub2JqLmR4O1xyXG4gICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCAtPSB0aGlzLm9iai5zcGVlZCAqIHRoaXMub2JqLmR5O1xyXG5cclxuICAgICAgICAvL2NoZWNrIGJvdW5kcyAoQW5pbWFsQXJlYSlcclxuICAgICAgICBpZiAodGhpcy5ib3VuZHMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub2JqLmltYWdlLmRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdyA9IHRoaXMub2JqLmltYWdlLmRhdGEud2lkdGg7XHJcbiAgICAgICAgICAgICAgICB2YXIgaCA9IHRoaXMub2JqLmltYWdlLmRhdGEuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNhdGNoIGNhc2VzIHdoZXJlIFRydW1wIGdldHMgaW50byB0aGUgQ2FnZSBhcmVhXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmoucG9zaXRpb24udG9wIDwgdGhpcy5ib3VuZHMudG9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLmR5ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5keSA9IC10aGlzLm9iai5keTtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCA9IHRoaXMuYm91bmRzLnRvcCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcnVuIHRoaXMgb25seSBpZiB3ZSBhcmUgbW92aW5nIGRvd24gdGhlIHNjcmVlblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLmR5IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi50b3AgPiAodGhpcy5vYmouc3RhcnRUb3AgLSAodGhpcy5vYmouZHkgKiB0aGlzLm9iai5zcGVlZCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5vYmouZHkgPSAtdGhpcy5vYmouZHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCA9IHRoaXMub2JqLnN0YXJ0VG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5keCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLmR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpc3QgPSB0aGlzLmJvdW5kcy5ib3R0b20gLSBoIC0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcGQgPSAtdGhpcy5vYmouZHkgKiB0aGlzLm9iai5zcGVlZCAqIDQ7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBkZWNlbGVyYXRlIGJlZm9yZSBzdG9wcGluZyBhdCBib3R0b20gb2YgQW5pbWFsQXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXN0IDwgc3BkICYmIHNwZCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouc3BlZWQgLz0gMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IC8vZW5kIG9mIGR5IG5lZ2F0aXZlIChnb2luZyBkb3duKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGJvdW5jZSBvbiB0aGUgb3RoZXIgMyB3YWxsc1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPCB0aGlzLmJvdW5kcy5sZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouZHggPSAtdGhpcy5vYmouZHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmoucG9zaXRpb24udG9wIDwgdGhpcy5ib3VuZHMudG9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouZHkgPSAtdGhpcy5vYmouZHk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmoucG9zaXRpb24ubGVmdCA+IHRoaXMuYm91bmRzLnJpZ2h0IC0gdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLmR4ID0gLXRoaXMub2JqLmR4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIHdlIGVuY291bmRlciBhbiBhbmltYWwsIGJvdW5jZSwgQU5EICdraWNrJyB0aGUgYW5pbWFsIGJhY2sgaW50byBpdHMgY2FnZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLmFuaW1hbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5vYmouYW5pbWFscy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5pbWFsID0gdGhpcy5vYmouYW5pbWFsc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbGN1bGF0ZUNvbGxpc2lvbih0aGlzLm9iaiwgYW5pbWFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXQgdGhlIEFuaW1hbCdzIHN0YXRlIHRvIHJldHVybiBob21lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPj4+UkVUVVJOSU5HIEFOSU1BTCBUTyBDQUdFJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hbC5kaXJlY3Rpb24gPSAncmV0dXJuJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5zcGVlZCA8IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5zcGVlZCA9IDI7IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vYnJlYWsgb3V0IG9mIGhvcml6b250YWwgbW92ZVxyXG4gICAgICAgIGlmICh0aGlzLm9iai5keSA8IDAuMDAxICYmIHRoaXMub2JqLmR4ID4gMC4wMDEpIHtcclxuICAgICAgICAgICAgdmFyIGQgPSB0aGlzLnJhbmRvbWl6ZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5vYmouZHkgKz0gZCAtIHRoaXMucmFuZG9taXplcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59IC8vIGVuZCBvZiBjbGFzc1xyXG4iLCIvKiogXHJcbiAqIFBsYXllci5qc1xyXG4gKiBVc2VyLWNvbnRyb2xsZWQgQ2hhcmFjdGVyXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XHJcblxyXG4gLy8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXHJcbiBpbXBvcnQgTW92ZXIgZnJvbSAnLi9Nb3Zlci5qcyc7XHJcbiBpbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XHJcbiAvLyBFTkQgQURERUQgV0VFSyAxMTw8PDw8PDw8PDw8PDxcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyIChjb25maWcpO1xyXG5cclxuIFx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcclxuIFx0XHR0aGlzLm1vdmVyLmluaXRTbGV3KCk7XHJcbiAgXHRcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcdFx0XHJcbiBcdH1cclxuXHJcbiAgXHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcclxuIFx0dXBkYXRlICgpIHtcclxuIFx0XHR0aGlzLm1vdmVyLnVwZGF0ZVNsZXcoKTtcclxuIFx0fVxyXG4gXHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XHJcblxyXG5cclxuIH0iLCIvKiogXHJcbiAqIFBsYXllckFyZWEuanNcclxuICogVGhlIHJlZ2lvbiB3aGVyZSB0aGUgUGxheWVyIGNhbiBtb3ZlLlxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBBcmVhXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckFyZWEgZXh0ZW5kcyBBcmVhIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlcihjb25maWcpO1xyXG4gXHR9XHJcblxyXG4gfSIsIi8qKiBcclxuICogU2NvcmUuanNcclxuICogRGlzcGxheSB1c2VyIHNjb3JlXHJcbiAqIEBpbmhlcml0cyBEeW5hbWljVGV4dCwgVGV4dCwgSW5mbywgR2FtZVBpZWNlXHJcbiAqL1xyXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcclxuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4vRHluYW1pY1RleHQuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUgZXh0ZW5kcyBEeW5hbWljVGV4dCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuXHRcdHN1cGVyKGNvbmZpZyk7XHJcblx0fVxyXG59IiwiLyoqIFxyXG4gKiBTY3JlZW4uanNcclxuICogR2VuZXJpYyBTY3JlZW4gb2JqZWN0XHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UuanNcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuXHJcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XHJcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XHJcbiBpbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyZWVuIGV4dGVuZHMgR2FtZVBpZWNlIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlcihjb25maWcpOyAvL2luaXQgJ3BhcmVudCcgR2FtZVBpZWNlXHJcblxyXG4gXHRcdC8vIHNhdmUgYSByZWZlcmVuY2UgdG8gb3VyIHBhcmVudCBHYW1lIG9iamVjdFxyXG4gXHRcdHRoaXMuZ2FtZSA9IGNvbmZpZy5nYW1lO1xyXG5cclxuIFx0XHQvLyBTY3JlZW5zIGFyZSBkZWZpbmVkIGluIEhUTUwsIHNvIHNhdmUgYSByZWZlcmVuY2UgdG8gb3VyIERPTSBpZFxyXG4gXHRcdHRoaXMuZG9tSWQgPSBjb25maWcuaWQ7XHJcblxyXG4gXHRcdC8vIHNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIERPTSBlbGVtZW50IHdlJ3JlIGNvbm5lY3RlZCB0b1xyXG4gXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kb21JZCk7XHJcblxyXG4gXHRcdC8vIGluc2VydCB0aGUgY29weXJpZ2h0IGluZm8gZnJvbSB0aGUgbWFpbiBHYW1lIG9iamVjdFxyXG4gXHRcdHRoaXMuYWRkV2FybmluZygpO1xyXG4gXHR9XHJcblxyXG4gXHQvLyBsb2FkIGEgYmFja2dyb3VuZCBpbWFnZSBpbnRvIHRoZSBTY3JlZW5cclxuIFx0bG9hZEJhY2tncm91bmQgKHBhdGgsIGNhbGxiYWNrKSB7XHJcbiBcdFx0Y29uc29sZS5sb2coXCJsb2FkaW5nOlwiICsgdGhpcy5kb21JZCk7XHJcbiBcdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2UgPSBuZXcgU3RhdGljSW1hZ2UoXHJcbiBcdFx0XHR7XHJcbiBcdFx0XHRcdG5hbWU6IHRoaXMubmFtZSArICctaW1hZ2UnLFxyXG4gXHRcdFx0XHRkb21JZDogdGhpcy5pZCArICctaW1hZ2UnLFxyXG4gXHRcdFx0XHRwYXRoOiBwYXRoLFxyXG4gXHRcdFx0XHRjYWxsYmFjazogY2FsbGJhY2tcclxuIFx0XHRcdH1cclxuIFx0XHQpO1xyXG4gXHRcdHRoaXMuYmFja2dyb3VuZEltYWdlLmxvYWRCYWNrZ3JvdW5kSW1hZ2UodGhpcy5kb20sIHBhdGgsIGNhbGxiYWNrKTtcclxuIFx0fVxyXG5cclxuIFx0Ly8gc2hvdyBhbmQgaGlkZSByZWdpb25zIG9mIHRoZSBTY3JlZW5cclxuIFx0c2hvd1NjcmVlbiAoKSB7XHJcbiBcdFx0Y29uc29sZS5sb2coXCJzaG93aW5nOlwiICsgdGhpcy5kb21JZCk7XHJcbiBcdFx0dGhpcy5kb20uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuIFx0fVxyXG5cclxuIFx0aGlkZVNjcmVlbiAoKSB7XHJcbiBcdFx0Y29uc29sZS5sb2coXCJoaWRpbmc6XCIgKyB0aGlzLmRvbUlkKTtcclxuIFx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiBcdH1cclxuXHJcbiBcdHNob3dIZWFkZXIgKCkge1xyXG4gXHRcdHRoaXMuZG9tLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gXHR9XHJcblxyXG4gXHRoaWRlSGVhZGVyICgpIHtcclxuXHRcdHRoaXMuZG9tLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gXHR9XHJcblxyXG4gXHRzaG93Rm9vdGVyICgpIHtcclxuXHRcdHRoaXMuZG9tLnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuIFx0fVxyXG5cclxuIFx0aGlkZUZvb3RlciAoKSB7XHJcblx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuIFx0fVxyXG5cclxuIFx0YWRkV2FybmluZyAoKSB7XHJcbiBcdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLmlubmVySFRNTCA9IHRoaXMuZ2FtZS53YXJuaW5nO1xyXG4gXHR9XHJcblxyXG4gfTsiLCIvKiogXHJcbiAqIFN0YXJ0U2NyZWVuLmpzXHJcbiAqIE9wZW5pbmcgc2NyZWVuIGZvciBnYW1lLlxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBTY3JlZW5cclxuICovXHJcbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcclxuXHJcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XHJcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XHJcbmltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcclxuaW1wb3J0IElkZW50aXR5IGZyb20gJy4vSWRlbnRpdHkuanMnO1xyXG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL0JhY2tncm91bmQuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcblx0XHRzdXBlcihjb25maWcpO1xyXG5cclxuXHRcdC8vIHRoaXMuZG9tIGRlZmluZWQgaW4gU2NyZWVuXHJcblxyXG5cdFx0Ly8gTG9hZCBTdGFydFNjcmVlbiBzdWItb2JqZWN0c1xyXG5cdFx0dGhpcy5sb2FkQmFja2dyb3VuZCgnaW1nL3NjcmVlbnMvc3RhcnQtc2NyZWVuLnBuZycpO1xyXG5cclxuXHRcdC8vIGxvYWQgaWRlbnRpdHkgaW1hZ2VcclxuXHRcdHRoaXMubG9hZElkZW50aXR5KCk7XHJcblxyXG5cdFx0Ly8gbG9hZCBpbnN0cnVjdGlvbnNcclxuXHRcdHRoaXMubG9hZEluc3RydWN0aW9ucygpO1xyXG5cclxuXHRcdC8vIE1ha2UgdGhlIHN0YXJ0IGJ1dHRvbiBvcGVuIHRoZSBtYWluIGdhbWUgc2NyZWVuXHJcblx0XHR0aGlzLmJpbmRTdGFydCgpO1xyXG5cdH1cclxuXHJcblx0bG9hZElkZW50aXR5ICgpIHtcclxuXHRcdHRoaXMuaWRlbnRpdHkgPSBuZXcgSWRlbnRpdHkoXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnaWRlbnRpdHknLCBcclxuXHRcdFx0XHRkb21JZDogJ3N0YXJ0LXNjcmVlbi1pZGVudGl0eScsXHJcblx0XHRcdFx0cGF0aDogJ2ltZy9pZGVudGl0eS9sb2dvLnBuZycsIFxyXG5cdFx0XHRcdGF1dGhvcjogJ3BldGUgbWFya2lld2ljeicsIFxyXG5cdFx0XHRcdHNvdXJjZTogJ3BseW9qdW1wJ1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdC8vIHNldCBwb3NpdGlvbiBvZiBJZGVudGl0eVxyXG5cdFx0dGhpcy5pZGVudGl0eS5zZXRET01Qb3NpdGlvbiAoXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0b3A6IDAsXHJcblx0XHRcdFx0bGVmdDogMFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHR9XHJcblxyXG5cdGxvYWRJbnN0cnVjdGlvbnMgKCkge1xyXG5cclxuXHRcdHRoaXMuaW5zdHJ1Y3Rpb25zID0gbmV3IFN0YXRpY1RleHQoXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnZ2FtZSBpbnN0cnVjdGlvbnMnLFxyXG5cdFx0XHRcdGRvbUlkOiAnaW5zdHJ1Y3Rpb25zJyxcclxuXHRcdFx0XHR0ZXh0OiAnUGxheSB0byB3aW4uIFRoYXQgaXMgYWxsIFRydW1wIGNhcmVzIGFib3V0LCBhbmQgc28gc2hvdWxkIHlvdS4nXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0cnVjdGlvbnMuc2V0RE9NUG9zaXRpb24oXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0b3A6IDAsXHJcblx0XHRcdFx0bGVmdDogMCxcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0fVxyXG5cclxuXHRiaW5kU3RhcnQgKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpbiBiaW5kU3RhcnQsIHRoaXMuZ2FtZTpcIiArIHRoaXMuZ2FtZSlcclxuXHRcdC8vIHdlIHVzZSBiaW5kKCkgdG8gbGluayB0aGUgZnVuY3Rpb24gYmVsb3cgdG8gU3RhcnRTY3JlZW4gKG90aGVyd2lzZSwgaXQgdGhpbmtzIGl0IGlzIGluc2lkZSB3aW5kb3cpXHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQtc2NyZWVuLXBsYXktYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBcclxuXHRcdFx0ZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHQvL2FsZXJ0KFwiaW4gaGFuZGxlciwgZ2FtZTpcIiArIHRoaXMuZ2FtZSlcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0dGhpcy5nYW1lLnN0YXJ0R2FtZSgpO1xyXG5cclxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcclxuXHR9XHJcbn0iLCIvKiogXHJcbiAqIFN0YXRpY0ltYWdlLmpzXHJcbiAqIEltYWdlLXN0eWxlIEluZm9ybWF0aW9uIHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgb25jZSB0aGUgZ2FtZSBpcyBsb2FkZWRcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aWNJbWFnZSBleHRlbmRzIEltYWdlIHtcclxuXHJcblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG5cdFx0c3VwZXIoY29uZmlnKTtcclxuXHJcblx0XHR0aGlzLnN0YXRpYyA9IHRydWU7XHJcblx0fVxyXG5cclxufVxyXG4iLCIvKiogXHJcbiAqIFN0YXRpY1RleHQuanNcclxuICogVGV4dCB0aGF0IGNhbm5vdCBiZSBjaGFuZ2VkIGFmdGVyIGxvYWRlZCBieSB0aGUgZ2FtZVxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuIGltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aWNUZXh0IGV4dGVuZHMgVGV4dCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuXHRcdHN1cGVyKGNvbmZpZyk7XHJcblxyXG5cdFx0dGhpcy5zdGF0aWMgPSB0cnVlO1xyXG5cclxuXHR9XHJcblxyXG59XHJcbiIsIi8qKiBcclxuICogVGV4dC5qc1xyXG4gKiBDcmVhdGVzIGEgdGV4dC10eXBlIEluZm8gb2JqZWN0XHJcbiAqIEBpbmhlcml0cyBJbmZvLCBHYW1lUGllY2VcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIEluZm8ge1xyXG5cclxuIFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIoY29uZmlnKTtcclxuXHJcbiBcdFx0Ly8gc2V0IHRoZSB0ZXh0XHJcbiBcdFx0dGhpcy5zZXRUZXh0KGNvbmZpZy50ZXh0KTtcclxuXHJcbiBcdFx0Ly8gc2V0IHRoZSBET01JZFxyXG4gXHRcdHRoaXMuYWRkVG9ET00oY29uZmlnLmRvbUlkKTtcclxuIFx0fVxyXG5cclxuIFx0c2V0VGV4dCAodHh0KSB7XHJcbiBcdFx0dGhpcy50ZXh0ID0gdHh0O1xyXG4gXHR9XHJcblxyXG4gXHRhZGRUb0RPTSAoZG9tSWQpIHtcclxuXHJcbiBcdFx0dGhpcy5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuIFx0XHR0aGlzLmRvbS5pZCA9IG5hbWUgKyAnLVRleHQnO1xyXG4gXHRcdHRoaXMuZG9tLmlubmVySFRNTCA9IHRoaXMudGV4dDtcclxuXHJcbiBcdFx0Ly8gY29udGFpbmVyXHJcbiBcdFx0dmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvbUlkKTtcclxuXHJcbiBcdFx0Ly8gYWRkIHRvIHRoZSBET01cclxuIFx0XHRjb250YWluZXIuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tLCBjb250YWluZXIuY2hpbGROb2Rlc1swXSk7XHJcblxyXG5cdH1cclxuXHJcbiB9IiwiLyoqIFxyXG4gKiBUaWdlci5qc1xyXG4gKiBBIFRpZ2VyLCB3aG8gdHJpZXMgdG8gZ2V0IHRoZSBQbGF5ZXIuXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XHJcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBUaWdlciBleHRlbmRzIEFuaW1hbCB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XHJcbiBcdH1cclxuIH0iLCIvKiogXHJcbiAqIFRydW1wLmpzXHJcbiAqIFRoZSBiYWxsLWxpa2UgQ2hhcmFjdGVyIHlvdSBraWNrIGludG8gQW5pbWFsc1xyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xyXG5cclxuIC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxyXG4gaW1wb3J0IE1vdmVyIGZyb20gJy4vTW92ZXIuanMnO1xyXG4gaW1wb3J0IENvbGxpZGVyIGZyb20gJy4vQ29sbGlkZXIuanMnO1xyXG4gLy8gRU5EIEFEREVEIFdFRUsgMTE8PDw8PDw8PDw8PDw8XHJcbiBcclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRydW1wIGV4dGVuZHMgQ2hhcmFjdGVyIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlciAoY29uZmlnKTtcclxuXHJcbiBcdFx0dGhpcy5tb3Zlci5pbml0UGluZ1BvbmcoMCwgdGhpcyk7XHJcblxyXG4gXHR9XHJcblxyXG4gXHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcclxuIFx0dXBkYXRlICgpIHtcclxuIFx0XHR0aGlzLm1vdmVyLnVwZGF0ZVBpbmdQb25nKCk7XHJcbiBcdH1cclxuIFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxyXG5cclxuIH0iLCIvKiogXHJcbiAqIENyZWF0ZSB0aGUgZ2FtZS4gSW1wb3J0IHRoZSBwcmltYXJ5IGNsYXNzZXMsIGFuZCAnY29tcG9zaXRlJyBcclxuICogdGhlIG92ZXJhbGwgR2FtZSBvYmplY3Qgb3V0IG9mIGluc3RhbmNlcyBvZiB0aGUgY2xhc3Nlcy5cclxuICovXHJcbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG5cclxuLy9UaGUgZW50aXJlIGdhbWVcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lLmpzJztcclxuXHJcbi8vU2NyZWVuIGluaGVyaXRhbmNlXHJcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xyXG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSAnLi9TdGFydFNjcmVlbi5qcyc7XHJcbmltcG9ydCBHYW1lU2NyZWVuIGZyb20gJy4vR2FtZVNjcmVlbi5qcyc7XHJcbmltcG9ydCBFbmRTY3JlZW4gZnJvbSAnLi9FbmRTY3JlZW4uanMnO1xyXG5cclxuLy9JbmZvIGluaGVyaXRhbmNlXHJcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XHJcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XHJcbmltcG9ydCBJZGVudGl0eSBmcm9tICcuL0lkZW50aXR5LmpzJztcclxuaW1wb3J0IEluc3RydWN0aW9ucyBmcm9tICcuL0luc3RydWN0aW9ucy5qcyc7XHJcbmltcG9ydCBEeW5hbWljVGV4dCBmcm9tICcuL0R5bmFtaWNUZXh0LmpzJztcclxuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUuanMnO1xyXG5cclxuLy9DaGFyYWN0ZXIgaW5oZXJpdGFuY2VcclxuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XHJcbmltcG9ydCBUcnVtcCBmcm9tICcuL1RydW1wLmpzJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcyc7XHJcbmltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xyXG5pbXBvcnQgTGlvbiBmcm9tICcuL0xpb24uanMnO1xyXG5pbXBvcnQgVGlnZXIgZnJvbSAnLi9UaWdlci5qcyc7XHJcbmltcG9ydCBCZWFyIGZyb20gJy4vQmVhci5qcyc7XHJcbmltcG9ydCBHb3JpbGxhIGZyb20gJy4vR29yaWxsYS5qcyc7XHJcbmltcG9ydCBIZWFsdGggZnJvbSAnLi9IZWFsdGguanMnO1xyXG5cclxuLy9BcmVhIGluaGVyaXRhbmNlLlxyXG5pbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xyXG5pbXBvcnQgQ2FnZSBmcm9tICcuL0NhZ2UuanMnO1xyXG5pbXBvcnQgQW5pbWFsQXJlYSBmcm9tICcuL0FuaW1hbEFyZWEuanMnO1xyXG5pbXBvcnQgUGxheWVyQXJlYSBmcm9tICcuL1BsYXllckFyZWEuanMnO1xyXG5cclxuLy9UZXN0IGZpbGUgKHZlcnkgc2ltcGxlIHRlc3RydW5uZXIpXHJcbmltcG9ydCBUZXN0cyBmcm9tICcuLi8uLi90ZXN0cy9UZXN0cy5qcyc7XHJcblxyXG4vKiogXHJcbiAqIFNldCB1cCB0ZXN0cy5cclxuICovXHJcbnZhciBteVRlc3RzID0gbmV3IFRlc3RzKCk7XHJcblxyXG4vKipcclxuICogU2V0IHVwIHRoZSBHYW1lXHJcbiAqL1xyXG52YXIgbXlHYW1lID0gbmV3IEdhbWUoe25hbWU6IFwiWm9vS2lsbFNvY2NlclwifSk7XHJcblxyXG4vKiogXHJcbiAqIEVYUE9SVCBUTyBXRUIgQ09OU09MRVxyXG4gKiBUbyBtYWtlIHNvbWV0aGluZyB2aXNpYmxlIGluIFdlYiBjb25zb2xlIGZvciBkZWJ1Z2dpbnQsIGF0dGFjaCB0byB3aW5kb3cgb2JqZWN0XHJcbiAqIE5PVEU6IFByb2Zlc3Npb25hbCBjb2RlIHVzZXMgc3BlY2lhbGl6ZWQgdGVzdGluZyBtb2R1bGVzIGxpa2UgTW9jaGEsIEthcm1hLCBhbmQgXHJcbiAqIHNpbWlsYXIgdGVzdGluZyBsaWJyYXJpZXMuXHJcbiAqL1xyXG5cclxuLy8gd2UgY2FuIHJ1biB0aGlzIHRlc3QgbWFudWFsbHkgd2l0aCB0ZXN0cy5ydW4oKTtcclxud2luZG93LnRlc3RzID0gbXlUZXN0cztcclxuXHJcbi8vIG1ha2UgdGhlIGdhbWUgb2JqZWN0IHZpc2libGUgc28gd2UgY2FuIGluc3BlY3QgaXQuXHJcbndpbmRvdy5nYW1lID0gbXlHYW1lO1xyXG5cclxuY29uc29sZS5sb2coJ1pPT0tJTExTT0NDRVIgR2FtZSBpbml0aWFsaXplZC4gQWNjZXNzIGdhbWUgdmlhIFwiZ2FtZVwiLiBVc2UgVGVzdHMucnVuKCkgdG8gdGVzdC4nKVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuLi9tb2R1bGVzL2pzL0dhbWVQaWVjZS5qcyc7XHJcblxyXG4vL1RoZSBlbnRpcmUgZ2FtZVxyXG5pbXBvcnQgR2FtZSBmcm9tICcuLi9tb2R1bGVzL2pzL0dhbWUuanMnO1xyXG5cclxuLy9TY3JlZW4gaW5oZXJpdGFuY2VcclxuaW1wb3J0IFNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL1NjcmVlbi5qcyc7XHJcbmltcG9ydCBTdGFydFNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL1N0YXJ0U2NyZWVuLmpzJztcclxuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi4vbW9kdWxlcy9qcy9HYW1lU2NyZWVuLmpzJztcclxuaW1wb3J0IEVuZFNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL0VuZFNjcmVlbi5qcyc7XHJcblxyXG4vL0luZm8gaW5oZXJpdGFuY2VcclxuaW1wb3J0IEluZm8gZnJvbSAnLi4vbW9kdWxlcy9qcy9JbmZvLmpzJztcclxuaW1wb3J0IFRleHQgZnJvbSAnLi4vbW9kdWxlcy9qcy9UZXh0LmpzJztcclxuaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi4vbW9kdWxlcy9qcy9TdGF0aWNUZXh0LmpzJztcclxuaW1wb3J0IElkZW50aXR5IGZyb20gJy4uL21vZHVsZXMvanMvSWRlbnRpdHkuanMnO1xyXG5pbXBvcnQgSW5zdHJ1Y3Rpb25zIGZyb20gJy4uL21vZHVsZXMvanMvSW5zdHJ1Y3Rpb25zLmpzJztcclxuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4uL21vZHVsZXMvanMvRHluYW1pY1RleHQuanMnO1xyXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi4vbW9kdWxlcy9qcy9TY29yZS5qcyc7XHJcblxyXG4vL0NoYXJhY3RlciBpbmhlcml0YW5jZVxyXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4uL21vZHVsZXMvanMvQ2hhcmFjdGVyLmpzJztcclxuaW1wb3J0IFRydW1wIGZyb20gJy4uL21vZHVsZXMvanMvVHJ1bXAuanMnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL21vZHVsZXMvanMvUGxheWVyLmpzJztcclxuaW1wb3J0IEFuaW1hbCBmcm9tICcuLi9tb2R1bGVzL2pzL0FuaW1hbC5qcyc7XHJcbmltcG9ydCBMaW9uIGZyb20gJy4uL21vZHVsZXMvanMvTGlvbi5qcyc7XHJcbmltcG9ydCBUaWdlciBmcm9tICcuLi9tb2R1bGVzL2pzL1RpZ2VyLmpzJztcclxuaW1wb3J0IEJlYXIgZnJvbSAnLi4vbW9kdWxlcy9qcy9CZWFyLmpzJztcclxuaW1wb3J0IEdvcmlsbGEgZnJvbSAnLi4vbW9kdWxlcy9qcy9Hb3JpbGxhLmpzJztcclxuaW1wb3J0IEhlYWx0aCBmcm9tICcuLi9tb2R1bGVzL2pzL0hlYWx0aC5qcyc7XHJcblxyXG4vL0FyZWEgaW5oZXJpdGFuY2UuXHJcbmltcG9ydCBBcmVhIGZyb20gJy4uL21vZHVsZXMvanMvQXJlYS5qcyc7XHJcbmltcG9ydCBDYWdlIGZyb20gJy4uL21vZHVsZXMvanMvQ2FnZS5qcyc7XHJcbmltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4uL21vZHVsZXMvanMvQW5pbWFsQXJlYS5qcyc7XHJcbmltcG9ydCBQbGF5ZXJBcmVhIGZyb20gJy4uL21vZHVsZXMvanMvUGxheWVyQXJlYS5qcyc7XHJcblxyXG4vKiogXHJcbiAqIFRFU1RCRUQgLSBUZXN0IGFsbCBvdXIgb2JqZWN0cy4gVGhpcyBpcyBhIHZlcnkgYmFzaWMgdGVzdGluZyBzeXN0ZW0uIFxyXG4gKiBOT1RFOiBQcm9mZXNzaW9uYWwgY29kZSB1c2VzIHRlc3RpbmcgbGlicmFyaWVzIGxpa2UgS2FybWEgYW5kIE1vY2hhLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdHMge1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoKSB7XHJcblx0fVxyXG5cclxuXHQvLyBCZWNhdXNlIHdlIG1ha2UgdGhlc2Ugb2JqZWN0cyB3aXRoICd2YXInIHRoZXkgYXJlIHNjb3BlZCB0byB0aGUgcnVuKCkgZnVuY3Rpb24uXHJcblx0cnVuICgpIHtcclxuXHJcblx0XHR2YXIgY29uZmlnID0ge25hbWU6J0ZvcmVzdCBUcnVtcCBvciBEb25hbGQgR3VtcCBydWx6J307XHJcblxyXG5cdFx0Ly8gTWFrZSBzb21lIHRlc3QgZ2FtZSBvYmplY3RzXHJcblx0XHR2YXIgZ2FtZSA9IG5ldyBHYW1lKGNvbmZpZyk7XHJcblx0XHRjb25zb2xlLmxvZyhnYW1lLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0Ly90ZXN0IEdhbWUgT2JqZWN0XHJcblx0XHR2YXIgbXlHYW1lID0gbmV3IEdhbWUoe25hbWU6IFwiWm9vS2lsbFNvY2NlclwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteUdhbWUuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHQvL290aGVyIG9iamVjdHNcclxuXHRcdHZhciBteVNjcmVlbiA9IG5ldyBTY3JlZW4oe25hbWU6IFwiT3BlbmluZyBTY3JlZW5cIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlTY3JlZW4uZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlTdGFydFNjcmVlbiA9IG5ldyBTdGFydFNjcmVlbih7bmFtZTogXCJTdGFydCBTY3JlZW5cIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlTdGFydFNjcmVlbi5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUdhbWVTY3JlZW4gPSBuZXcgR2FtZVNjcmVlbih7bmFtZTogXCJHYW1lIFNjcmVlblwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteUdhbWVTY3JlZW4uZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlFbmRTY3JlZW4gPSBuZXcgRW5kU2NyZWVuKHtuYW1lOiBcIkVuZCBTY3JlZW5cIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlFbmRTY3JlZW4uZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlJbmZvID0gbmV3IEluZm8oe25hbWU6IFwiR2VuZXJpYyBJbmZvcm1hdGlvblwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteUluZm8uZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlUZXh0ID0gbmV3IFRleHQoe25hbWU6IFwiR2VuZXJpYyBUZXh0IE9iamVjdFwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteVRleHQuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlTdGF0aWNUZXh0ID0gbmV3IFN0YXRpY1RleHQoe25hbWU6IFwiR2VuZXJpYyBTdGF0aWMgVGV4dCBPYmplY3RcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlTdGF0aWNUZXh0LmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15SWRlbnRpdHkgPSBuZXcgSWRlbnRpdHkoe25hbWU6IFwiR2VuZXJpYyBJZGVudGl0eSBPYmplY3RcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlJZGVudGl0eS5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUluc3RydWN0aW9ucyA9IG5ldyBJbnN0cnVjdGlvbnMoe25hbWU6IFwiR2VuZXJpYyBJbnN0cnVjdGlvbnMgT2JqZWN0XCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15SW5zdHJ1Y3Rpb25zLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15RHluYW1pY1RleHQgPSBuZXcgRHluYW1pY1RleHQoe25hbWU6IFwiR2VuZXJpYyBEeW5hbWljIFRleHQgT2JqZWN0XCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15RHluYW1pY1RleHQuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlTY29yZSA9IG5ldyBTY29yZSh7bmFtZTogXCJzY29yZXMuLi5cIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlTY29yZS5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUNoYXJhY3RlciA9IG5ldyBDaGFyYWN0ZXIoe25hbWU6IFwiR2VuZXJpYyBDaGFyYWN0ZXJcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlDaGFyYWN0ZXIuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlUcnVtcCA9IG5ldyBUcnVtcCh7bmFtZTogXCJEb25hbGQgVHJ1bXBcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlUcnVtcC5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteVBsYXllciA9IG5ldyBQbGF5ZXIoe25hbWU6IFwiRW5kIFVzZXJcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlQbGF5ZXIuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlBbmltYWwgPSBuZXcgQW5pbWFsKHtuYW1lOiBcIkdlbmVyaWMgQW5pbWFsXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15QW5pbWFsLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15TGlvbiA9IG5ldyBMaW9uKHtuYW1lOiBcIkNvd2FyZGx5IHRoZSBMaW9uXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15TGlvbi5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteVRpZ2VyID0gbmV3IFRpZ2VyKHtuYW1lOiBcIkNob21wZXIgdGhlIFRpZ2VyXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15VGlnZXIuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlCZWFyID0gbmV3IEJlYXIoe25hbWU6IFwiTWF1bGVyIHRoZSBCZWFyXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15QmVhci5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUdvcmlsbGEgPSBuZXcgR29yaWxsYSh7IG5hbWU6IFwiU3B1bmt5IHRoZSBHb3JpbGxhXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15R29yaWxsYS5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUhlYWx0aCA9IG5ldyBIZWFsdGgoe25hbWU6IFwiT25lIEhlYWx0aCBLaXRcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlIZWFsdGguZ2V0TmFtZSgpKTtcclxuXHJcblx0XHQvL0FyZWEgaW5oZXJpdGFuY2UuXHJcblx0XHR2YXIgbXlBcmVhID0gbmV3IEFyZWEoe25hbWU6IFwiR2VuZXJpYyBBcmVhXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15QXJlYS5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUNhZ2UgPSBuZXcgQ2FnZSh7bmFtZTogXCJHZW5lcmljIEFyZWFcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlDYWdlLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15QW5pbWFsQXJlYSA9IG5ldyBBbmltYWxBcmVhKHtuYW1lOiBcIkFuaW1hbEFyZWFcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlBbmltYWxBcmVhLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15UGxheWVyQXJlYSA9IG5ldyBQbGF5ZXJBcmVhKHtuYW1lOiBcIlBsYXllckFyZWFcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlQbGF5ZXJBcmVhLmdldE5hbWUoKSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
