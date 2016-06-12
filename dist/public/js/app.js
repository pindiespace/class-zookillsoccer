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

},{"./Character.js":7,"./Collider.js":8,"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./Mover.js":21,"./StaticImage.js":28}],2:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./StaticImage.js":28}],4:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./StaticImage.js":28}],5:[function(require,module,exports){
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

},{"./Collider.js":8,"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./Mover.js":21,"./StaticImage.js":28}],8:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Info.js":18,"./Text.js":30}],10:[function(require,module,exports){
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

var _Sounder = require('./Sounder.js');

var _Sounder2 = _interopRequireDefault(_Sounder);

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
			// END ADDED IN WEEK 11<<<<<<<<<<<<<<

			//load Characters
			this.loadAnimals();
			this.loadPlayers();
			this.loadTrumps();

			// >>>>>>>>>>>ADDED IN WEEK 11
			this.collider = new _Collider2.default(this.displayCharacters);
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

},{"./Animal.js":1,"./AnimalArea.js":2,"./Area.js":3,"./Bear.js":5,"./Cage.js":6,"./Character.js":7,"./Collider.js":8,"./DynamicText.js":9,"./EndScreen.js":10,"./GamePiece.js":12,"./GameScreen.js":13,"./Gorilla.js":14,"./Health.js":15,"./Identity.js":16,"./Image.js":17,"./Info.js":18,"./Instructions.js":19,"./Lion.js":20,"./Player.js":22,"./PlayerArea.js":23,"./Score.js":24,"./Screen.js":25,"./Sounder.js":26,"./StartScreen.js":27,"./StaticText.js":29,"./Text.js":30,"./Tiger.js":31,"./Trump.js":32}],12:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./StaticImage.js":28}],17:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Info.js":18,"./StaticText.js":29,"./Text.js":30}],20:[function(require,module,exports){
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

},{"./DynamicText.js":9,"./GamePiece.js":12,"./Info.js":18,"./Text.js":30}],25:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Image.js":17,"./StaticImage.js":28}],26:[function(require,module,exports){
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
			if (this.sounds[name]) {
				this.sounds[name].play();
			} else {
				console.error('no sound file with name:' + name + ' in audio folder');
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

},{}],27:[function(require,module,exports){
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

},{"./Background.js":4,"./GamePiece.js":12,"./Identity.js":16,"./Image.js":17,"./Info.js":18,"./Screen.js":25,"./StaticText.js":29,"./Text.js":30}],28:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18}],29:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Info.js":18,"./Text.js":30}],30:[function(require,module,exports){
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

},{"./GamePiece.js":12,"./Info.js":18}],31:[function(require,module,exports){
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

},{"./Animal.js":1,"./Character.js":7,"./GamePiece.js":12}],32:[function(require,module,exports){
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

},{"./Character.js":7,"./Collider.js":8,"./GamePiece.js":12,"./Mover.js":21}],33:[function(require,module,exports){
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

},{"../../tests/Tests.js":34,"./Animal.js":1,"./AnimalArea.js":2,"./Area.js":3,"./Bear.js":5,"./Cage.js":6,"./Character.js":7,"./DynamicText.js":9,"./EndScreen.js":10,"./Game.js":11,"./GamePiece.js":12,"./GameScreen.js":13,"./Gorilla.js":14,"./Health.js":15,"./Identity.js":16,"./Info.js":18,"./Instructions.js":19,"./Lion.js":20,"./Player.js":22,"./PlayerArea.js":23,"./Score.js":24,"./Screen.js":25,"./StartScreen.js":27,"./StaticText.js":29,"./Text.js":30,"./Tiger.js":31,"./Trump.js":32}],34:[function(require,module,exports){
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

},{"../modules/js/Animal.js":1,"../modules/js/AnimalArea.js":2,"../modules/js/Area.js":3,"../modules/js/Bear.js":5,"../modules/js/Cage.js":6,"../modules/js/Character.js":7,"../modules/js/DynamicText.js":9,"../modules/js/EndScreen.js":10,"../modules/js/Game.js":11,"../modules/js/GamePiece.js":12,"../modules/js/GameScreen.js":13,"../modules/js/Gorilla.js":14,"../modules/js/Health.js":15,"../modules/js/Identity.js":16,"../modules/js/Info.js":18,"../modules/js/Instructions.js":19,"../modules/js/Lion.js":20,"../modules/js/Player.js":22,"../modules/js/PlayerArea.js":23,"../modules/js/Score.js":24,"../modules/js/Screen.js":25,"../modules/js/StartScreen.js":27,"../modules/js/StaticText.js":29,"../modules/js/Text.js":30,"../modules/js/Tiger.js":31,"../modules/js/Trump.js":32}]},{},[33])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzXFxqc1xcQW5pbWFsLmpzIiwibW9kdWxlc1xcanNcXEFuaW1hbEFyZWEuanMiLCJtb2R1bGVzXFxqc1xcQXJlYS5qcyIsIm1vZHVsZXNcXGpzXFxCYWNrZ3JvdW5kLmpzIiwibW9kdWxlc1xcanNcXEJlYXIuanMiLCJtb2R1bGVzXFxqc1xcQ2FnZS5qcyIsIm1vZHVsZXNcXGpzXFxDaGFyYWN0ZXIuanMiLCJtb2R1bGVzXFxqc1xcQ29sbGlkZXIuanMiLCJtb2R1bGVzXFxqc1xcRHluYW1pY1RleHQuanMiLCJtb2R1bGVzXFxqc1xcRW5kU2NyZWVuLmpzIiwibW9kdWxlc1xcanNcXEdhbWUuanMiLCJtb2R1bGVzXFxqc1xcR2FtZVBpZWNlLmpzIiwibW9kdWxlc1xcanNcXEdhbWVTY3JlZW4uanMiLCJtb2R1bGVzXFxqc1xcR29yaWxsYS5qcyIsIm1vZHVsZXNcXGpzXFxIZWFsdGguanMiLCJtb2R1bGVzXFxqc1xcSWRlbnRpdHkuanMiLCJtb2R1bGVzXFxqc1xcSW1hZ2UuanMiLCJtb2R1bGVzXFxqc1xcSW5mby5qcyIsIm1vZHVsZXNcXGpzXFxJbnN0cnVjdGlvbnMuanMiLCJtb2R1bGVzXFxqc1xcTGlvbi5qcyIsIm1vZHVsZXNcXGpzXFxNb3Zlci5qcyIsIm1vZHVsZXNcXGpzXFxQbGF5ZXIuanMiLCJtb2R1bGVzXFxqc1xcUGxheWVyQXJlYS5qcyIsIm1vZHVsZXNcXGpzXFxTY29yZS5qcyIsIm1vZHVsZXNcXGpzXFxTY3JlZW4uanMiLCJtb2R1bGVzXFxqc1xcU291bmRlci5qcyIsIm1vZHVsZXNcXGpzXFxTdGFydFNjcmVlbi5qcyIsIm1vZHVsZXNcXGpzXFxTdGF0aWNJbWFnZS5qcyIsIm1vZHVsZXNcXGpzXFxTdGF0aWNUZXh0LmpzIiwibW9kdWxlc1xcanNcXFRleHQuanMiLCJtb2R1bGVzXFxqc1xcVGlnZXIuanMiLCJtb2R1bGVzXFxqc1xcVHJ1bXAuanMiLCJtb2R1bGVzXFxqc1xcaW5kZXguanMiLCJ0ZXN0c1xcVGVzdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQ0tDOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCLE07OztBQUVwQixrQkFBYSxNQUFiLEVBQXFCO0FBQUE7Ozs7O0FBQUEsMEZBQ2IsTUFEYTs7QUFLcEIsVUFBSyxLQUFMLENBQVcsY0FBWCxDQUEwQixJQUExQixFQUFnQyxRQUFoQzs7O0FBTG9CO0FBUXBCOzs7Ozs7OzZCQUdTO0FBQ1QsV0FBSyxLQUFMLENBQVcsZ0JBQVg7QUFDQTs7Ozs7Ozs7a0JBZm1CLE07Ozs7Ozs7OztBQ1pyQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQixJOzs7QUFFcEIsZ0JBQWEsTUFBYixFQUFxQjtBQUFBOztBQUFBLG1GQUNkLE1BRGM7QUFFcEI7Ozs7O2tCQUptQixJOzs7Ozs7Ozs7OztBQ0ZyQjs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLEk7OztBQUVwQixnQkFBYSxNQUFiLEVBQXFCO0FBQUE7Ozs7QUFBQSx3RkFDZCxNQURjOztBQUlwQixVQUFLLFFBQUwsQ0FBYyxPQUFPLElBQXJCLEVBQTJCLE9BQU8sU0FBbEMsRUFBNkMsT0FBTyxJQUFwRDs7O0FBR0EsVUFBSyxjQUFMLENBQW9CLE9BQU8sUUFBM0IsRTtBQUNBLFVBQUssVUFBTCxDQUFnQixPQUFPLElBQXZCO0FBUm9CO0FBU3BCOzs7Ozs7OzZCQUdTLEksRUFBTSxTLEVBQVcsTyxFQUFTO0FBQ25DLFdBQUssR0FBTCxHQUFXLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0EsV0FBSyxHQUFMLENBQVMsRUFBVCxHQUFjLE9BQU8sT0FBckI7OztBQUdBLFdBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxRQUFmLEdBQTBCLFVBQTFCOzs7QUFHQSxXQUFLLEdBQUwsQ0FB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QUFDLE1BQU0sWUFBUCxFQUFmLENBQW5CO0FBQ0EsY0FBUSxHQUFSLENBQVksYUFBYSxPQUFiLEVBQVo7QUFDQTs7Ozs7O2tCQTNGbUIsSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiogXHJcbiAqIEFuaW1hbC5qc1xyXG4gKiBUaGUgY3JpdHRlcnMgdGhhdCBUcnVtcCB0cmllcyB0byBzdG9wIGZyb20gZ2V0dGluZyB0aGUgUGxheWVyLlxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xyXG5cclxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XHJcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XHJcblxyXG4gLy8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXHJcbiBpbXBvcnQgTW92ZXIgZnJvbSAnLi9Nb3Zlci5qcyc7XHJcbiBpbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XHJcbiAvLyBFTkQgQURERUQgV0VFSyAxMTw8PDw8PDw8PDw8PDxcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYWwgZXh0ZW5kcyBDaGFyYWN0ZXIge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyIChjb25maWcpO1xyXG5cclxuIFx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcclxuIFx0XHQvLyBBbmltYWxzIGdldCBSYW5kb21XYWxrIG1vdGlvblxyXG4gXHRcdHRoaXMubW92ZXIuaW5pdFJhbmRvbVdhbGsoMC4wMiwgJ2JvdHRvbScpO1xyXG4gXHRcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcclxuXHJcbiBcdH1cclxuXHJcbiBcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxyXG4gXHR1cGRhdGUgKCkge1xyXG4gXHRcdHRoaXMubW92ZXIudXBkYXRlUmFuZG9tV2FsaygpO1xyXG4gXHR9XHJcbiBcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcclxuXHJcbiB9IiwiLyoqIFxyXG4gKiBBbmltYWxBcmVhLmpzXHJcbiAqIFRoZSByZWdpb24gYW5pbWFscyBtb3ZlIHRocm91Z2ggdG8gZ2V0IHRvIFBsYXllci5cclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQXJlYVxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBDYWdlIGV4dGVuZHMgQXJlYSB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIoY29uZmlnKTtcclxuIFx0fVxyXG5cclxuIH0iLCIvKiogXHJcbiAqIEFyZWEuanNcclxuICogQSBnZW5lcmljIHJlZ2lvbiBvZiB0aGUgZ2FtZSBzY3JlZW4uIFVzZWQgdG8gYWRkIHZpc3VhbCBvYmplY3RzLCBhbmQgXHJcbiAqIGNyZWF0ZSBib3VuZHMgZm9yIGNvbGxpc2lvbiBkZXRlY3Rpb24uXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEluZm8sIEltYWdlLCBTdGF0aWNJbWFnZVxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG5cclxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XHJcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJlYSBleHRlbmRzIEdhbWVQaWVjZSB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIoY29uZmlnKTtcclxuXHJcbiBcdFx0Ly8gY3JlYXRlIGEgPGRpdj4sIGFkZCB0byBET00sIHdpdGggb3B0aW9uYWwgaW1hZ2VcclxuIFx0XHR0aGlzLmFkZFRvRE9NKGNvbmZpZy5uYW1lLCBjb25maWcuY29udGFpbmVyLCBjb25maWcucGF0aCk7XHJcblxyXG4gXHRcdC8vIHBvc2l0aW9uIHdpdGggYWJzb2x1dGUgY29vcmRpbmF0ZWRcclxuIFx0XHR0aGlzLnNldERPTVBvc2l0aW9uKGNvbmZpZy5wb3NpdGlvbik7IC8vaW5oZXJpdGVkIGZyb20gR2FtZVBpZWNlXHJcbiBcdFx0dGhpcy5zZXRET01TaXplKGNvbmZpZy5zaXplKTtcclxuIFx0fVxyXG5cclxuIFx0Ly8gY3JlYXRlIERPTSBlbGVtZW50LCBMb2FkIGEgYmFja2dyb3VuZCBpbWFnZSwgYW5kIGluc2VydCBpbnRvIGNvbnRhaW5lclxyXG4gXHRhZGRUb0RPTSAobmFtZSwgY29udGFpbmVyLCBpbWdQYXRoKSB7XHJcbiBcdFx0dGhpcy5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuIFx0XHR0aGlzLmRvbS5pZCA9IG5hbWUgKyAnLWFyZWEnO1xyXG5cclxuIFx0XHQvLyBwb3NpdGlvbiBhYnNvbHV0ZWx5XHJcbiBcdFx0dGhpcy5kb20uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cclxuIFx0XHQvLyBEb24ndCBhbGxvdyBwYWRkaW5nIG9yIG1hcmdpbnMgb3IgYm9yZGVycyBmb3IgQXJlYXNcclxuIFx0XHR0aGlzLmRvbS5zdHlsZS5tYXJnaW4gPSAnMHB4JztcclxuIFx0XHR0aGlzLmRvbS5zdHlsZS5wYWRkaW5nID0gJzBweCc7XHJcblxyXG4gXHRcdC8vIGFkZCB0byB0aGUgRE9NXHJcbiBcdFx0Y29udGFpbmVyLmluc2VydEJlZm9yZSh0aGlzLmRvbSwgY29udGFpbmVyLmNoaWxkTm9kZXNbMF0pO1xyXG5cclxuIFx0XHQvLyBpZiB3ZSBoYXZlIGFuIGltYWdlLCBpbnNlcnQgaW4gZWxlbWVudCBiYWNrZ3JvdW5kXHJcbiBcdFx0aWYgKGltZ1BhdGgpIHtcclxuXHJcbiBcdFx0XHR0aGlzLmltYWdlID0gbmV3IFN0YXRpY0ltYWdlKFxyXG4gXHRcdFx0XHR7XHJcbiBcdFx0XHRcdFx0bmFtZTogdGhpcy5kb20uaWQgKyAnLWltYWdlJ1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHQpO1xyXG5cclxuIFx0XHRcdHRoaXMuaW1hZ2UubG9hZEJhY2tncm91bmRJbWFnZSAodGhpcy5kb20sIGltZ1BhdGgpO1xyXG4gXHRcdH1cclxuXHJcbiBcdH1cclxuXHJcbiBcdC8vIGJvdW5kcyBkZXRlY3RvciBmb3Igc3VwcGxpZWQgQ2hhcmFjdGVyXHJcblxyXG5cclxuIH0iLCIvKiogXHJcbiAqIEJhY2tncm91bmQuanNcclxuICogR2FtZSBMb2dvcywgTG9nb1R5cGVzLCBCcmFuZCBOYW1lXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xyXG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja2dyb3VuZCBleHRlbmRzIFN0YXRpY0ltYWdlIHtcclxuXHJcblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG5cdFx0c3VwZXIoY29uZmlnKTtcclxuXHJcblx0XHR0aGlzLnNldFNvdXJjZShjb25maWcuc291cmNlKTtcclxuXHRcdHRoaXMuc2V0QXV0aG9yKGNvbmZpZy5hdXRob3IpO1xyXG5cdFx0dGhpcy5sb2FkQmFja2dyb3VuZEltYWdlKGNvbmZpZy5kb21JZCwgY29uZmlnLnBhdGgpO1xyXG5cdH1cclxuXHJcbn1cclxuIiwiLyoqIFxyXG4gKiBCZWFyLmpzXHJcbiAqIEEgVGlnZXIsIHdobyB0cmllcyB0byBnZXQgdGhlIFBsYXllci5cclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcclxuIGltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlYXIgZXh0ZW5kcyBBbmltYWwge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyIChjb25maWcpO1xyXG4gXHR9XHJcblxyXG5cclxuIH0iLCIvKiogXHJcbiAqIENhZ2UuanNcclxuICogVGhlIHJlZ2lvbiB3aGVyZSBhbmltYWxzIGFyZSBjYWdlZC5cclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQXJlYVxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBDYWdlIGV4dGVuZHMgQXJlYSB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcblxyXG4gXHRcdHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gXHR9XHJcblxyXG4gfSIsIi8qKiBcclxuICogQ2hhcmFjdGVyLmpzXHJcbiAqIEdhbWUtZ2VuZXJhdGVkIG9yIHVzZXIgYXZhdGFycy4gQ2hhcmFjdGVycyBhcmUgcmVuZGVyZWQgaW4gQ2FudmFzLCBidXQgaGF2ZSB0aGVpciBcclxuICogcG9zaXRpb24gY29tcHV0ZWQgYW5kIHVwZGF0ZWQgb3V0c2lkZSBjYW52YXMuXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2VcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuXHJcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xyXG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xyXG5cclxuIC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxyXG4gaW1wb3J0IE1vdmVyIGZyb20gJy4vTW92ZXIuanMnO1xyXG4gaW1wb3J0IENvbGxpZGVyIGZyb20gJy4vQ29sbGlkZXIuanMnO1xyXG4gLy8gRU5EIEFEREVEIFdFRUsgMTE8PDw8PDw8PDw8PDw8XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyIGV4dGVuZHMgR2FtZVBpZWNlIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlciAoY29uZmlnKTtcclxuXHJcbiBcdFx0IC8vIHN0b3JlIGEgcmVmZXJlbmNlIHRvIHRoZSBnYW1lIG9iamVjdFxyXG4gXHRcdHRoaXMuZ2FtZSA9IGNvbmZpZy5nYW1lO1xyXG5cclxuIFx0XHQvLyBTZXQgcG9zaXRpb24gYW5kIHNpemUgZnJvbSBjb25maWd1cmF0aW9uXHJcbiBcdFx0dGhpcy5wb3NpdGlvbiA9IGNvbmZpZy5wb3NpdGlvbjtcclxuIFx0XHR0aGlzLnNpemUgPSBjb25maWcuc2l6ZTtcclxuXHJcbiBcdFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXHJcbiBcdFx0dGhpcy5tb3ZlciA9IG5ldyBNb3Zlcih0aGlzKTtcclxuIFx0XHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XHJcblxyXG4gXHRcdHRoaXMuaW1hZ2UgPSBuZXcgU3RhdGljSW1hZ2UoXHJcbiBcdFx0XHR7XHJcbiBcdFx0XHRcdG5hbWU6IGNvbmZpZy5uYW1lICsgJy1pbWFnZScsXHJcbiBcdFx0XHRcdHBhdGg6IGNvbmZpZy5wYXRoXHJcbiBcdFx0XHR9XHJcbiBcdFx0KTtcclxuXHJcbiBcdFx0Ly8gSW1hZ2VzIGRvbid0IGF1dG9tYXRpY2FsbHkgbG9hZCB3aGVuIHRoZXkncmUgbm90IGF0dGFjaGVkIHRvIHRoZSBET00sIFxyXG4gXHRcdC8vIG9yIGEgQ1NTIGJhY2tncm91bmQgaW1hZ2VcclxuIFx0XHR0aGlzLmltYWdlLmxvYWQoY29uZmlnLnBhdGgsIGZ1bmN0aW9uICgpIHtjb25zb2xlLmxvZygnbG9hZGVkOicgKyBjb25maWcubmFtZSk7fSk7XHJcbiBcdH1cclxuXHJcbiBcdC8vIG92ZXJyaWRlIGRlZmF1bHQgZHJhdyB3aXRoIG91ciBvd25cclxuIFx0ZHJhdyAoY29udGV4dCkge1xyXG5cdFx0aWYgKHRoaXMuaW1hZ2UpIHtcclxuXHRcdFx0dmFyIGltZyA9IHRoaXMuaW1hZ2UuZGF0YTtcclxuIFx0XHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxyXG5cdFx0XHQvL2NvbnNvbGUubG9nKCdkcmF3aW5nJylcclxuXHRcdFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxyXG5cdFx0XHRpZiAoaW1nKSB7XHJcblx0XHRcdFx0Ly8gZHJhdyBpbWFnZSBpbnRvIEhUTUw1IGNhbnZhc1xyXG4gXHRcdCBcdFx0Y29udGV4dC5kcmF3SW1hZ2UoaW1nLCB0aGlzLnBvc2l0aW9uLmxlZnQsIHRoaXMucG9zaXRpb24udG9wKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG4gXHR9XHJcbiB9IiwiLyoqIFxyXG4gKiBAY2xhc3MgQ29sbGlkZXJcclxuICogQGRlc2NyaXB0aW9uIGNyZWF0ZSB0aGUgY29sbGlzaW9uIG1hdHJpeCBkZWZpbmluZyB3aGljaCBvYmplY3RzIGNhbiBjb2xsaWRlIFxyXG4gKiB3aXRoIHdoaWNoIG9iamVjdHMuIE9iamVjdHMgdGhhdCBjYW4gY29sbGlkZSBoYXZlIHRoZWlyIHBvdGVudGlhbCBjb2xsaWRlcnMgXHJcbiAqIGFkZGVkIGFzIHJlZmVyZW5jZXMsIGUuZy4gUGxheWVyLnRydW1wIG9yIFRydW1wLnBsYXllci5cclxuICogQHBhcmFtIEFycmF5IGNoYXJhY3RlckFycmF5IHRoZSBhcnJheSBvZiBDaGFyYWN0ZXJzIHdobyBtaWdodCBiZSBpbnZvbHZlZCBcclxuICogaW4gY29sbGlzaW9ucy5cclxuICovXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaWRlciB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY2hhcmFjdGVyQXJyYXkpIHtcclxuIFx0XHR0aGlzLmNoYXJhY3RlckFycmF5ID0gY2hhcmFjdGVyQXJyYXk7XHJcbiBcdFx0dGhpcy5hbmltYWxBcnJheSA9IFtdOyAvL2ZpbGxlZCB1cCBpbiBzZXRVcENvbGxpc2lvbnNcclxuIFx0XHR0aGlzLnNldFVwQ29sbGlzaW9ucygpO1xyXG4gXHR9XHJcblxyXG4gXHRzZXRVcENvbGxpc2lvbnMgKCkge1xyXG4gXHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmNoYXJhY3RlckFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiBcdFx0XHRzd2l0Y2ggKHRoaXMuY2hhcmFjdGVyQXJyYXlbaV0uY29uc3RydWN0b3IubmFtZSkge1xyXG4gXHRcdFx0XHRjYXNlICdMaW9uJzpcclxuIFx0XHRcdFx0Y2FzZSAnVGlnZXInOlxyXG4gXHRcdFx0XHRjYXNlICdCZWFyJzpcclxuIFx0XHRcdFx0Y2FzZSAnR29yaWxsYSc6XHJcbiBcdFx0XHRcdFx0dGhpcy5hbmltYWxBcnJheS5wdXNoKHRoaXMuY2hhcmFjdGVyQXJyYXlbaV0pO1xyXG4gXHRcdFx0XHRcdGJyZWFrO1xyXG4gXHRcdFx0XHRjYXNlICdUcnVtcCc6XHJcbiBcdFx0XHRcdFx0dGhpcy50cnVtcCA9IHRoaXMuY2hhcmFjdGVyQXJyYXlbaV07XHJcbiBcdFx0XHRcdFx0YnJlYWs7XHJcbiBcdFx0XHRcdGNhc2UgJ1BsYXllcic6XHJcbiBcdFx0XHRcdFx0dGhpcy5wbGF5ZXIgPSB0aGlzLmNoYXJhY3RlckFycmF5W2ldO1xyXG4gXHRcdFx0XHRcdGJyZWFrO1xyXG4gXHRcdFx0XHRkZWZhdWx0OlxyXG4gXHRcdFx0XHRcdGJyZWFrO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuXHJcbiBcdFx0Ly9jcm9zcy1jb25uZWN0IHRoZSBpbXBhY3RvcnNcclxuIFx0XHR0aGlzLnRydW1wLnBsYXllciA9IHRoaXMucGxheWVyO1xyXG4gXHRcdHRoaXMudHJ1bXAuYW5pbWFscyA9IHRoaXMuYW5pbWFsQXJyYXk7XHJcbiBcdFx0dGhpcy5wbGF5ZXIudHJ1bXAgPSB0aGlzLnRydW1wO1xyXG5cclxuIFx0XHQvL0RFQlVHXHJcbiBcdFx0d2luZG93LmFuaW1hbHMgPSB0aGlzLnRydW1wLmFuaW1hbHM7XHJcbiBcdFx0XHJcblxyXG4gXHR9XHJcbiB9IiwiLyoqIFxyXG4gKiBEeW5hbWljVGV4dC5qc1xyXG4gKiBUZXh0IHRoYXQgY2FuIGJlIGNoYW5nZWQgYnkgdXNlciAoZS5nLiBpbnB1dCBmaWVsZCksIG9yIFxyXG4gKiB1cGRhdGVkIGJ5IHRoZSBnYW1lIGl0c2VsZi5cclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcbiBpbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHluYW1pY1RleHQgZXh0ZW5kcyBUZXh0IHtcclxuXHJcblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG5cdFx0c3VwZXIoY29uZmlnKTtcclxuXHR9XHJcbn1cclxuIiwiLyoqIFxyXG4gKiBFbmRTY3JlZW4uanNcclxuICogRW5kaW5nIHNjcmVlbiBmb3IgdGhlIGdhbWUuXHJcbiAqIEBpbmhlcml0cyBTY3JlZW4sIEdhbWVQaWVjZVxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XHJcbiBcclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZFNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIoY29uZmlnKTtcclxuXHJcbiBcdFx0Ly8gbG9hZCB0aGUgYmFja2dyb3VuZCBpbWFnZVxyXG4gXHRcdHRoaXMubG9hZEJhY2tncm91bmQoJ2ltZy9zY3JlZW5zL2VuZC1zY3JlZW4ucG5nJyk7XHJcblxyXG4gXHRcdC8vIExvYWQgRW5kU2NyZWVuIHN1Yi1vYmplY3RzXHJcbiBcdFx0dGhpcy5sb2FkSW5wdXRTY29yZSgpO1xyXG4gXHRcdHRoaXMubG9hZEhpZ2hTY29yZXMoKTtcclxuXHJcbiBcdFx0Ly8gQmluZCBcInBsYXkgYWdhaW5cIiBhbmQgXCJpbnN0cnVjdGlvbnNcIiBidXR0b25zLlxyXG4gXHRcdHRoaXMuYmluZFJlcGxheSgpO1xyXG4gXHRcdHRoaXMuYmluZEluc3RydWN0aW9ucygpO1xyXG4gXHR9XHJcblxyXG4gXHRsb2FkSW5wdXRTY29yZSAoKSB7XHJcblxyXG4gXHR9XHJcblxyXG4gXHRsb2FkSGlnaFNjb3JlcyAoKSB7XHJcblxyXG4gXHR9XHJcblxyXG4gXHRiaW5kUmVwbGF5ICgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiaW4gYmluZFN0YXJ0LCB0aGlzLmdhbWU6XCIgKyB0aGlzLmdhbWUpXHJcblx0XHQvLyB3ZSB1c2UgYmluZCgpIHRvIGxpbmsgdGhlIGZ1bmN0aW9uIGJlbG93IHRvIFN0YXJ0U2NyZWVuIChvdGhlcndpc2UsIGl0IHRoaW5rcyBpdCBpcyBpbnNpZGUgd2luZG93KVxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZC1zY3JlZW4tcGxheS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFxyXG5cdFx0XHRmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdC8vYWxlcnQoXCJpbiBoYW5kbGVyLCBnYW1lOlwiICsgdGhpcy5nYW1lKVxyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR0aGlzLmdhbWUuc3RhcnRHYW1lKCk7XHJcblxyXG5cdFx0XHR9LmJpbmQodGhpcykpO1xyXG5cdH1cclxuXHJcblx0YmluZEluc3RydWN0aW9ucyAoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImluIGJpbmRTdGFydCwgdGhpcy5nYW1lOlwiICsgdGhpcy5nYW1lKVxyXG5cdFx0Ly8gd2UgdXNlIGJpbmQoKSB0byBsaW5rIHRoZSBmdW5jdGlvbiBiZWxvdyB0byBTdGFydFNjcmVlbiAob3RoZXJ3aXNlLCBpdCB0aGlua3MgaXQgaXMgaW5zaWRlIHdpbmRvdylcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmQtc2NyZWVuLWluc3RydWN0aW9ucy1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFxyXG5cdFx0XHRmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdC8vYWxlcnQoXCJpbiBoYW5kbGVyLCBnYW1lOlwiICsgdGhpcy5nYW1lKVxyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR0aGlzLmdhbWUubG9hZEdhbWUoKTtcclxuXHJcblx0XHRcdH0uYmluZCh0aGlzKSk7XHJcblx0fVxyXG4gfSIsIi8qKiBcclxuICogR2FtZS5qc1xyXG4gKiBUaGUgZW50aXJlIEdhbWUgb2JqZWN0XHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2VcclxuICovXHJcbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG5cclxuLy9TY3JlZW4gaW5oZXJpdGFuY2VcclxuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XHJcbmltcG9ydCBTdGFydFNjcmVlbiBmcm9tICcuL1N0YXJ0U2NyZWVuLmpzJztcclxuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi9HYW1lU2NyZWVuLmpzJztcclxuaW1wb3J0IEVuZFNjcmVlbiBmcm9tICcuL0VuZFNjcmVlbi5qcyc7XHJcblxyXG4vL0luZm8gaW5oZXJpdGFuY2VcclxuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcclxuaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xyXG5pbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XHJcbmltcG9ydCBJZGVudGl0eSBmcm9tICcuL0lkZW50aXR5LmpzJztcclxuaW1wb3J0IEluc3RydWN0aW9ucyBmcm9tICcuL0luc3RydWN0aW9ucy5qcyc7XHJcbmltcG9ydCBEeW5hbWljVGV4dCBmcm9tICcuL0R5bmFtaWNUZXh0LmpzJztcclxuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUuanMnO1xyXG5cclxuLy9DaGFyYWN0ZXIgaW5oZXJpdGFuY2VcclxuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XHJcbmltcG9ydCBUcnVtcCBmcm9tICcuL1RydW1wLmpzJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcyc7XHJcbmltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xyXG5pbXBvcnQgTGlvbiBmcm9tICcuL0xpb24uanMnO1xyXG5pbXBvcnQgVGlnZXIgZnJvbSAnLi9UaWdlci5qcyc7XHJcbmltcG9ydCBCZWFyIGZyb20gJy4vQmVhci5qcyc7XHJcbmltcG9ydCBHb3JpbGxhIGZyb20gJy4vR29yaWxsYS5qcyc7XHJcbmltcG9ydCBIZWFsdGggZnJvbSAnLi9IZWFsdGguanMnO1xyXG5cclxuLy9BcmVhIGluaGVyaXRhbmNlLlxyXG5pbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xyXG5pbXBvcnQgQ2FnZSBmcm9tICcuL0NhZ2UuanMnO1xyXG5pbXBvcnQgQW5pbWFsQXJlYSBmcm9tICcuL0FuaW1hbEFyZWEuanMnO1xyXG5pbXBvcnQgUGxheWVyQXJlYSBmcm9tICcuL1BsYXllckFyZWEuanMnO1xyXG5cclxuLy8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXHJcbmltcG9ydCBDb2xsaWRlciBmcm9tICcuL0NvbGxpZGVyLmpzJztcclxuaW1wb3J0IFNvdW5kZXIgZnJvbSAnLi9Tb3VuZGVyLmpzJztcclxuLy8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIEdhbWVQaWVjZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuXHJcblx0XHRzdXBlcihjb25maWcpO1xyXG5cclxuXHRcdC8vZ2FtZSBjb3B5cmlnaHRcclxuXHRcdHRoaXMud2FybmluZyA9ICdUaGlzIGdhbWUgYmVsb25ncyB0byB1cywgYW5kIG5vYm9keSBlbHNlLic7XHJcblxyXG5cdFx0Ly9nYW1lIHJldmVydHMgdG8gU3RhcnRTY3JlZW4gaWYgdW5wbGF5ZWRcclxuXHRcdHRoaXMuVElNRU9VVCA9IDU1NTU7XHJcblxyXG5cdFx0Ly8gZGVmaW5lIElkIGxpbmsgdG8gRE9NXHJcblx0XHR0aGlzLlNUQVJUX1NDUkVFTl9JRCA9ICdzdGFydC1zY3JlZW4nO1xyXG5cdFx0dGhpcy5HQU1FX1NDUkVFTl9JRCA9ICdnYW1lLXNjcmVlbic7XHJcblx0XHR0aGlzLkVORF9TQ1JFRU5fSUQgPSAnZW5kLXNjcmVlbic7XHJcblxyXG5cdFx0Ly8gbW9kZWwgc3RvcmFnZSwgc2NyZWVuc1xyXG5cdFx0dGhpcy5zY3JlZW5zID0gW107XHJcblxyXG5cdFx0Ly8gbW9kZWwgc3RvcmFnZSwgZHluYW1pYyBjaGFyYWN0ZXJzXHJcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzID0gW107XHJcblxyXG5cdFx0Ly8gaW5pdGlhbGl6ZSBnYW1lLCBsb2FkIHN0YXJ0IHNjcmVlblxyXG5cdFx0dGhpcy5pbml0KCk7XHJcblxyXG5cdH0gLy9lbmQgb2YgY29uc3RydWN0b3JcclxuXHJcblx0aW5pdCAoKSB7XHJcblxyXG5cdFx0Ly8gR3JhYiB0aGUgSFRNTCBzY3JlZW4gZWxlbWVudHMgYW5kIGVuY2Fwc3VsYXRlIGluIGEgU2NyZWVuIGNsYXNzXHJcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5TVEFSVF9TQ1JFRU5fSURdID0gbmV3IFN0YXJ0U2NyZWVuKHtuYW1lOiAnU3RhcnQgU2NyZWVuJywgaWQ6IHRoaXMuU1RBUlRfU0NSRUVOX0lELCBnYW1lOiB0aGlzfSk7XHJcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5HQU1FX1NDUkVFTl9JRF0gPSBuZXcgR2FtZVNjcmVlbih7bmFtZTogJ0dhbWUgU2NyZWVuJywgaWQ6IHRoaXMuR0FNRV9TQ1JFRU5fSUQsIGdhbWU6IHRoaXN9KTtcclxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkVORF9TQ1JFRU5fSURdID0gbmV3IEVuZFNjcmVlbih7bmFtZTogJ0VuZCBTY3JlZW4nLCBpZDogdGhpcy5FTkRfU0NSRUVOX0lELCBnYW1lOiB0aGlzfSk7XHJcblxyXG5cdFx0Ly8gbG9hZCB0aGUgY2FudmFzXHJcblx0XHR0aGlzLmxvYWRDYW52YXMoKTtcclxuXHJcblx0XHQvLyBtYWtlIHRoZSBzdGFydCBzY3JlZW4gdmlzaWJsZVxyXG5cdFx0dGhpcy5sb2FkR2FtZSgpO1xyXG5cdH1cclxuXHJcblx0Ly8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBIVE1MNSBjYW52YXMgY29udGV4dFxyXG5cdGxvYWRDYW52YXMgKCkge1xyXG5cdFx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZS1zY3JlZW4tYXJlbmEgY2FudmFzJyk7XHJcblx0XHR0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblx0fVxyXG5cclxuXHQvKiogXHJcblx0ICogTG9hZCBDaGFyYWN0ZXJzXHJcblx0ICogZHluYW1pYyBDaGFyYWN0ZXJzIChlLmcuIHRob3NlIHRoYXQgYW5pbWF0ZSkgYXJlIGxvYWRlZCBieSBHYW1lLiBcclxuXHQgKiBPdGhlciBzdGF0aWMgdmlzdWFsIG9iamVjdHMgYXJlIGxvYWRlZCBieSBTY3JlZW4gY2xhc3Nlcy5cclxuXHQgKi9cclxuXHRsb2FkUGxheWVycyAoKSB7XHJcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLnB1c2goXHJcblx0XHRcdG5ldyBQbGF5ZXIoXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogJ1BsYXllcicsIHBvc2l0aW9uOiB7dG9wOiA1MTAsIGxlZnQ6IDIwMH0sXHJcblx0XHRcdFx0XHRwYXRoOiAnaW1nL3BsYXllcnMvcGxheWVyLnBuZycsXHJcblx0XHRcdFx0XHRnYW1lOiB0aGlzXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0bG9hZEFuaW1hbHMgKCkge1xyXG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxyXG5cdFx0XHRuZXcgTGlvbihcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiAnTGlvbicsIFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDE1LCBsZWZ0OiA5NH0sXHJcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvbGlvbi5wbmcnLFxyXG5cdFx0XHRcdFx0Z2FtZTogdGhpc1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcclxuXHRcdFx0bmV3IFRpZ2VyKFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6ICdUaWdlcicsIFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDE1LCBsZWZ0OiAzMzN9LFxyXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy9hbmltYWxzL3RpZ2VyLnBuZycsXHJcblx0XHRcdFx0XHRnYW1lOiB0aGlzXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxyXG5cdFx0XHRuZXcgQmVhcihcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiAnQmVhcicsIHBvc2l0aW9uOiB7dG9wOiAxNSwgbGVmdDogNTcwfSxcclxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvYW5pbWFscy9iZWFyLnBuZycsXHJcblx0XHRcdFx0XHRnYW1lOiB0aGlzXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxyXG5cdFx0XHRuZXcgR29yaWxsYShcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiAnR29yaWxsYScsIHBvc2l0aW9uOiB7dG9wOiAxNSwgbGVmdDogODEyfSxcclxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvYW5pbWFscy9nb3JpbGxhLnBuZycsXHJcblx0XHRcdFx0XHRnYW1lOiB0aGlzXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cclxuXHR9XHJcblxyXG5cdGxvYWRUcnVtcHMgKCkge1xyXG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxyXG5cdFx0XHRuZXcgVHJ1bXAoXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogJ1RydW1wJywgcG9zaXRpb246IHt0b3A6IDQ1MCwgbGVmdDogMjAwfSxcclxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvdHJ1bXBzL3RydW1wLnBuZycsXHJcblx0XHRcdFx0XHRnYW1lOiB0aGlzXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cclxuXHR9XHJcblxyXG5cdGxvYWRHYW1lICgpIHtcclxuXHJcblx0XHQvL2xvYWQgSW5mbyBhc3NldHNcclxuXHJcblx0XHRjb25zb2xlLmxvZygnbG9hZGluZyBzcGxhc2ggc2NyZWVuJyk7XHJcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5FTkRfU0NSRUVOX0lEXS5oaWRlU2NyZWVuKClcclxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLlNUQVJUX1NDUkVFTl9JRF0uc2hvd1NjcmVlbigpO1xyXG5cdH1cclxuXHJcblx0c3RhcnRHYW1lICgpIHtcclxuXHJcblx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcclxuXHRcdC8vbG9hZCBhdWRpbyBzYW1wbGVzXHJcblx0XHR0aGlzLnNvdW5kUG9vbCA9IG5ldyBTb3VuZGVyKCk7XHJcblx0XHR0aGlzLnNvdW5kUG9vbC5hZGRTb3VuZCgna2ljaycsIDAuNyk7XHJcblx0XHR0aGlzLnNvdW5kUG9vbC5hZGRTb3VuZCgnbGlvbicsIDAuNyk7XHJcblx0XHR0aGlzLnNvdW5kUG9vbC5hZGRTb3VuZCgndGlnZXInLCAwLjcpO1xyXG5cdFx0dGhpcy5zb3VuZFBvb2wuYWRkU291bmQoJ2JlYXInLCAwLjcpO1xyXG5cdFx0dGhpcy5zb3VuZFBvb2wuYWRkU291bmQoJ2dvcmlsbGEnLCAwLjcpO1xyXG5cdFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxyXG5cclxuXHRcdC8vbG9hZCBDaGFyYWN0ZXJzXHJcblx0XHR0aGlzLmxvYWRBbmltYWxzKCk7XHJcblx0XHR0aGlzLmxvYWRQbGF5ZXJzKCk7XHJcblx0XHR0aGlzLmxvYWRUcnVtcHMoKTtcclxuXHJcblx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcclxuXHRcdHRoaXMuY29sbGlkZXIgPSBuZXcgQ29sbGlkZXIodGhpcy5kaXNwbGF5Q2hhcmFjdGVycyk7XHJcblx0XHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XHJcblxyXG5cdFx0Ly9tYWtlIEdhbWVTY3JlZW4gdmlzaWJsZVxyXG5cclxuXHRcdC8vIGluaXRpYWxpemUgZWxhcHNlZCB0aW1lXHJcblx0XHR0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XHJcblxyXG5cdFx0Ly8gc2hvdyBHYW1lU2NyZWVuLCBoaWRlIG90aGVyc1xyXG5cdFx0Y29uc29sZS5sb2coJ3N0YXJ0aW5nIGdhbWUnKTtcclxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLlNUQVJUX1NDUkVFTl9JRF0uaGlkZVNjcmVlbigpO1xyXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuRU5EX1NDUkVFTl9JRF0uaGlkZVNjcmVlbigpO1xyXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuR0FNRV9TQ1JFRU5fSURdLnNob3dTY3JlZW4oKTtcclxuXHRcdHRoaXMuZ2FtZUxvb3AoKTtcclxuXHR9XHJcblxyXG5cdGVuZEdhbWUgKCkge1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKCdlbmRpbmcgZ2FtZScpO1xyXG5cclxuXHRcdC8vIHJlc2V0IHRpbWVyXHJcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XHJcblxyXG5cdFx0Ly8gdHVybiBvZmYgYW5pbWF0aW9uXHJcblx0XHRjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmdsb2JhbElkKTtcclxuXHRcdHRoaXMuZ2xvYmFsSWQgPSBudWxsO1xyXG5cclxuXHRcdC8vIGdvIHRvIGVuZCBzY3JlZW5cclxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkdBTUVfU0NSRUVOX0lEXS5oaWRlU2NyZWVuKCk7XHJcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5FTkRfU0NSRUVOX0lEXS5zaG93U2NyZWVuKCk7XHJcblx0fVxyXG5cclxuXHRlbGFwc2VkICgpIHtcclxuXHJcblx0XHQvLyByZWNvcmQgdGltZSB3ZSBoYXZlIGJlZW4gaW4gZ2FtZUxvb3BcclxuXHRcdHRoaXMuZW5kVGltZSA9IG5ldyBEYXRlKCk7XHJcblxyXG5cdFx0Ly8gdGltZSBkaWZmZXJlbmNlIGluIG1zXHJcblxyXG5cdFx0dmFyIHRpbWVEaWZmID0gKHRoaXMuZW5kVGltZSAtIHRoaXMuc3RhcnRUaW1lKSAvIDEwMDA7XHJcblxyXG5cdFx0Ly8gZ2V0IHNlY29uZHMgKE9yaWdpbmFsIGhhZCAncm91bmQnIHdoaWNoIGluY29ycmVjdGx5IGNvdW50cyAwOjI4LCAwOjI5LCAxOjMwIC4uLiAxOjU5LCAxOjApXHJcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCh0aW1lRGlmZiAlIDYwKTtcclxuXHR9XHJcblxyXG5cdGNoZWNrSWZDb21wbGV0ZSAoKSB7XHJcblxyXG5cdFx0Ly8gZ2FtZSBsb2dpYyB0byBzZWUgaWYgdGhlIGdhbWUgc2hvdWxkIHJlc2V0XHJcblx0XHQvLy8vLy8vLy8vLy8vY29uc29sZS5sb2coJ0VMQVBTRUQ6JyArIHRoaXMuZWxhcHNlZCgpKTtcclxuXHJcblx0XHRpZiAodGhpcy5lbGFwc2VkKCkgPiB0aGlzLlRJTUVPVVQpIHtcclxuXHRcdFx0Ly8gaWYgaWRsZSB0b28gbG9uZywgcmVzZXQgZ2FtZSB0byBzdGFydFxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUgKCkge1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblxyXG5cdFx0XHR2YXIgY2hhcmFjdGVyID0gdGhpcy5kaXNwbGF5Q2hhcmFjdGVyc1tpXTtcclxuXHJcblx0XHRcdHN3aXRjaCAoY2hhcmFjdGVyLmdldENsYXNzKCkpIHtcclxuXHRcdFx0XHRjYXNlICdQbGF5ZXInOlxyXG5cdFx0XHRcdGNhc2UgJ1RydW1wJzpcclxuXHRcdFx0XHRjYXNlICdMaW9uJzpcclxuXHRcdFx0XHRjYXNlICdUaWdlcic6XHJcblx0XHRcdFx0Y2FzZSAnQmVhcic6XHJcblx0XHRcdFx0Y2FzZSAnR29yaWxsYSc6XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjaGFyYWN0ZXIudXBkYXRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkcmF3ICgpIHtcclxuXHJcbiBcdFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXHJcblx0XHR0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gXHRcdC8vIEVORCBBRERFRCBXRUVLIDExPDw8PDw8PDw8PDw8PFxyXG5cdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuZGlzcGxheUNoYXJhY3RlcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVyc1tpXS5kcmF3KHRoaXMuY29udGV4dCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnYW1lTG9vcCAoKSB7XHJcblx0XHRcclxuXHRcdGlmICh0aGlzLmNoZWNrSWZDb21wbGV0ZSgpKSB7XHJcblx0XHRcdHRoaXMuZW5kR2FtZSgpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLnVwZGF0ZSgpO1xyXG5cdFx0dGhpcy5kcmF3KCk7XHJcblx0XHRcclxuXHRcdC8vY29uc29sZS5sb2coJ2xvb3BpbmcuLi4nKVxyXG5cdFx0dGhpcy5nbG9iYWxJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wLmJpbmQodGhpcykpO1xyXG5cdH1cclxuXHJcbn0iLCIvKiogXHJcbiAqIEdhbWVQaWVjZS5qc1xyXG4gKiBCYXNpYyBHYW1lIG9iamVjdFxyXG4gKlxyXG4gKiBUbyBtYWtlIHRoaXMgd29yaywgeW91IG11c3QgYmUgcnVubmluZyB0aGUgQmFiZWwgdHJhbnNwaWxlciwgXHJcbiAqIGFuZCB3YXRjaGluZyBmb3IgY2hhbmdlcyBpbiB0aGlzIGZpbGUgd2l0aCBicm93c2VyaWZ5LiBUd28gXHJcbiAqIFRlcm1pbmFsIHdpbmRvd3MgbmVlZCB0byBiZSBvcGVuOlxyXG4gKiAxLiBvbmUgd2luZG93IHdoZXJlIHlvdSB0eXBlZCB0aGUgY29tbWFuZCBcImdydW50XCJcclxuICogMi4gb25lIHdpbmRvdyB3aGVyZSB5b3UgdHlwZWQgdGhlIGNvbW1hbmQgXCJucG0gc3RhcnRcIlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBpZWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiAgICAgICAgLy9UT0RPOiB1c2Ugc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZTtcclxuICAgICAgICB0aGlzLnV1aWQgPSB0aGlzLnNldElkKCk7XHJcbiAgICAgICAgdGhpcy5yZWFkeSA9IHRydWU7IC8vIGNoYW5nZSB0byBmYWxzZSBmb3IgZGVmZXJyZWQgbG9hZHNcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBTZXQgYSBwb3NpdGlvbiBmb3IgdGhlIG9iamVjdCwgYWxzbyB0aGUgcG9zaXRpb24gb2YgdGhlIFxyXG4gICAgICogRE9NIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgc2V0RE9NUG9zaXRpb24gKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIGlmICh0aGlzLmRvbSkge1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5zdHlsZS50b3AgPSBwb3NpdGlvbi50b3AgKyAncHgnO1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5zdHlsZS5sZWZ0ID0gcG9zaXRpb24ubGVmdCArICdweCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIFNldCB0aGUgb2JqZWN0IHNpemUsIGFsc28gaXRzIERPTSBzaXplXHJcbiAgICAgKi9cclxuICAgIHNldERPTVNpemUgKHNpemUpIHtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIGlmICh0aGlzLmRvbSkge1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5zdHlsZS53aWR0aCA9IHNpemUud2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5zdHlsZS5oZWlnaHQgPSBzaXplLmhlaWdodCArICdweCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEdlbmVyYXRlIGEgdW5pcXVlIElEIGZvciBldmVyeSBnYW1lIG9iamVjdC5cclxuICAgICAqIEBsaW5rIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2NyZWF0ZS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdFxyXG4gICAgICovXHJcbiAgICBzZXRJZCAoKSB7XHJcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy91c2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSoxNiklMTYgfCAwO1xyXG4gICAgICAgICAgICBkID0gTWF0aC5mbG9vcihkLzE2KTtcclxuICAgICAgICAgICAgcmV0dXJuIChjPT0neCcgPyByIDogKHImMHgzfDB4OCkpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdXVpZDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBSZXR1cm4gdGhlIGdpdmVuIG5hbWUgb2YgdGhpcyBvYmplY3RcclxuICAgICAqL1xyXG4gICAgZ2V0TmFtZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiByZXR1cm4gdGhlIGNsYXNzIG9mIHRoZSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgZ2V0Q2xhc3MgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogUmV0dXJuIHRoZSB1bmlxdWUgaWQgb2YgdGhpcyBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIGdldElkICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51dWlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEdldCB0aGUgZW5jbG9zaW5nIGJveCBvdXRzaWRlIHRoZSBvYmplY3QgZm9yIGV4dGVybmFsIGNvbGxpc2lvbnNcclxuICAgICAqL1xyXG4gICAgZ2V0Q29sbGlzaW9uUmVjdCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEdldCB0aGUgaW50ZXJuYWwgYm94IHdoZW4gdGhpcyBvYmplY3QgYWN0cyBhcyBhIGNvbnRhaW5lciBmb3IgYW5vdGhlclxyXG4gICAgICovXHJcbiAgICBnZXRCb3VuZHNSZWN0ICgpIHtcclxuXHJcbiAgICB9XHJcblx0XHJcblx0LyoqIFxyXG5cdCAqIEdlbmVyaWMgJ3JlYWR5JyBmdW5jdGlvbiAoZS5nLiBmb3IgZGVsYXllZCBhc3NldCBsb2FkcylcclxuXHQgKi9cclxuXHRzZXRSZWFkeSAodmFsKSB7XHJcblx0XHR0aGlzLnJlYWR5ID0gdmFsO1xyXG5cdH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBHZW5lcmljIHVwZGF0ZSAob3ZlcnJpZGUpXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZSAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICAvKiogXHJcbiAgICAgICogZ2VuZXJpYyBkcmF3IChvdmVycmlkZSlcclxuICAgICAgKi9cclxuICAgIGRyYXcgKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIi8qKiBcclxuICogR2FtZVNjcmVlbi5qc1xyXG4gKiBNYWluIGdhbWUgc2NyZWVuIG9iamVjdFxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBTY3JlZW5cclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xyXG5cclxuIGltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XHJcbiBpbXBvcnQgQW5pbWFsQXJlYSBmcm9tICcuL0FuaW1hbEFyZWEuanMnO1xyXG4gaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi9QbGF5ZXJBcmVhLmpzJztcclxuIGltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XHJcblxyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gXHRcdHRoaXMuY2FnZXMgPSBbXTtcclxuIFx0XHR0aGlzLmFuaW1hbEFyZWFzID0gW107XHJcbiBcdFx0dGhpcy5wbGF5ZXJBcmVhcyA9IFtdO1xyXG5cclxuIFx0XHQvL0dhbWVTY3JlZW4gc2hvdWxkIGhpZGUgaXRzIGxvY2FsIGhlYWRlciBhbmQgZm9vdGVyXHJcbiBcdFx0dGhpcy5oaWRlSGVhZGVyKCk7XHJcbiBcdFx0dGhpcy5oaWRlRm9vdGVyKCk7XHJcblxyXG4gXHRcdC8vIGxvYWQgdGhlIGJhY2tncm91bmQgaW1hZ2VcclxuIFx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kKCdpbWcvc2NyZWVucy9nYW1lLXNjcmVlbi5wbmcnKTtcclxuXHJcbiBcdFx0Ly8gZ2V0IHRoZSBzZWN0aW9uIHRoYXQgaGFzIHRoZSBjYW52YXMgZm9yIG92ZXJsYXlcclxuIFx0XHR2YXIgYXJlbmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1zY3JlZW4tYXJlbmEnKTtcclxuXHJcbiBcdFx0Ly8gbG9hZCBzdWItb2JqZWN0cyBpbnRvIHRoZSBBcmVuYVxyXG4gXHRcdHRoaXMuY2FnZXMgICA9IHRoaXMubG9hZENhZ2VzKGFyZW5hLCAnaW1nL2FyZWFzL2NhZ2UucG5nJyk7XHJcbiBcdFx0dGhpcy5hbmltYWxBcmVhID0gdGhpcy5sb2FkQW5pbWFsQXJlYSgpO1xyXG4gXHRcdHRoaXMucGxheWVyQXJlYSA9IHRoaXMubG9hZFBsYXllckFyZWEoKTtcclxuXHJcbiBcdH1cclxuXHJcbiBcdGxvYWRDYWdlcyAoY29udGFpbmVyLCBpbWdQYXRoKSB7XHJcbiBcdFx0Ly8gbG9hZCA0IENhZ2VzXHJcbiBcdFx0dGhpcy5jYWdlcy5wdXNoKFxyXG4gXHRcdFx0bmV3IENhZ2UoXHJcbiBcdFx0XHRcdHtcclxuIFx0XHRcdFx0XHRuYW1lOiAnbGlvbi1jYWdlJywgXHJcbiBcdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDcwfSwgXHJcbiBcdFx0XHRcdFx0c2l6ZToge3dpZHRoOiAxMDAsIGhlaWdodDoxMDB9LCBcclxuIFx0XHRcdFx0XHRjb250YWluZXI6IGNvbnRhaW5lciwgXHJcbiBcdFx0XHRcdFx0cGF0aDogaW1nUGF0aFxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHQpXHJcbiBcdFx0KTtcclxuXHRcdHRoaXMuY2FnZXMucHVzaChcclxuXHRcdFx0bmV3IENhZ2UoXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogJ3RpZ2VyLWNhZ2UnLCBcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAwLCBsZWZ0OiAzMTB9LCBcclxuXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSwgXHJcblx0XHRcdFx0XHRjb250YWluZXI6IGNvbnRhaW5lciwgXHJcblx0XHRcdFx0XHRwYXRoOiBpbWdQYXRoXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5jYWdlcy5wdXNoKFxyXG5cdFx0XHRuZXcgQ2FnZShcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiAnYmVhci1jYWdlJywgXHJcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMCwgbGVmdDogNTUwfSwgXHJcblx0XHRcdFx0XHRzaXplOiB7d2lkdGg6IDEwMCwgaGVpZ2h0OjEwMH0sXHJcblx0XHRcdFx0XHRjb250YWluZXI6IGNvbnRhaW5lciwgXHJcblx0XHRcdFx0XHRwYXRoOiBpbWdQYXRoXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5jYWdlcy5wdXNoKFxyXG5cdFx0XHRuZXcgQ2FnZShcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiAnZ29yaWxsYS1jYWdlJywgXHJcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMCwgbGVmdDogNzkwfSwgXHJcblx0XHRcdFx0XHRzaXplOiB7d2lkdGg6IDEwMCwgaGVpZ2h0OjEwMH0sXHJcblx0XHRcdFx0XHRjb250YWluZXI6IGNvbnRhaW5lciwgXHJcblx0XHRcdFx0XHRwYXRoOiBpbWdQYXRoXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG4gXHR9XHJcblxyXG4gXHRsb2FkQW5pbWFsQXJlYSAoKSB7XHJcbiBcdFx0Ly8gbG9hZCBBbmltYWwgbW92ZW1lbnQgYXJlYVxyXG4gXHRcdHRoaXMuYW5pbWFsQXJlYXMucHVzaChcclxuIFx0XHRcdG5ldyBBbmltYWxBcmVhKFxyXG4gXHRcdFx0XHR7XHJcbiBcdFx0XHRcdFx0bmFtZTogJ1pvbycsIFxyXG4gXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAxMDQsIGxlZnQ6IDZ9LCBcclxuIFx0XHRcdFx0XHRzaXplOiB7d2lkdGg6IDk3MCwgaGVpZ2h0OiA0MTB9LFxyXG4gXHRcdFx0XHRcdGNvbnRhaW5lcjogdGhpcy5kb20sIFxyXG4gXHRcdFx0XHRcdHBhdGg6IG51bGxcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0KVxyXG4gXHRcdCk7XHJcbiBcdH1cclxuXHJcbiBcdGxvYWRQbGF5ZXJBcmVhICgpIHtcclxuIFx0XHQvLyBsb2FkIHRoZSBQbGF5ZXJcclxuIFx0XHR0aGlzLnBsYXllckFyZWFzLnB1c2goXHJcbiBcdFx0XHRuZXcgUGxheWVyQXJlYShcclxuIFx0XHRcdFx0e1xyXG4gXHRcdFx0XHRcdG5hbWU6ICdQbGF5ZXIgQXJlYScsIFxyXG4gXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiA1MTQsIGxlZnQ6IDZ9LCBcclxuIFx0XHRcdFx0XHRzaXplOiB7d2lkdGg6IDk3MCwgaGVpZ2h0OiAxMDB9LFxyXG4gXHRcdFx0XHRcdGNvbnRhaW5lcjogdGhpcy5kb20sIFxyXG4gXHRcdFx0XHRcdHBhdGg6IG51bGxcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0KVxyXG4gXHRcdCk7XHJcbiBcdH1cclxuXHJcbiB9XHJcblxyXG4iLCIvKiogXHJcbiAqIEdvcmlsbGEuanNcclxuICogQSBHb3JpbGxhLCB3aG8gdHJpZXMgdG8gZ2V0IHRoZSBQbGF5ZXIuXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XHJcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBHb3JpbGxhIGV4dGVuZHMgQW5pbWFsIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlciAoY29uZmlnKTtcclxuIFx0fVxyXG4gfSIsIi8qKiBcclxuICogSGVhbHRoLmpzXHJcbiAqIFRoZSBjcml0dGVycyB0aGF0IFRydW1wIHRyaWVzIHRvIHN0b3AgZnJvbSBnZXR0aW5nIHRoZSBQbGF5ZXIuXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhbHRoIGV4dGVuZHMgQ2hhcmFjdGVyIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlciAoY29uZmlnKTtcclxuIFx0fVxyXG5cclxuIH0iLCIvKiogXHJcbiAqIElkZW50aXR5LmpzXHJcbiAqIEdhbWUgTG9nb3MsIExvZ29UeXBlcywgQnJhbmQgTmFtZVxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcclxuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElkZW50aXR5IGV4dGVuZHMgU3RhdGljSW1hZ2Uge1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcblx0XHRzdXBlcihjb25maWcpO1xyXG5cclxuXHRcdHRoaXMuc2V0U291cmNlKGNvbmZpZy5zb3VyY2UpO1xyXG5cdFx0dGhpcy5zZXRBdXRob3IoY29uZmlnLmF1dGhvcik7XHJcblx0XHR0aGlzLmxvYWRJbWFnZVRvRE9NKGNvbmZpZy5kb21JZCwgY29uZmlnLnBhdGgpO1xyXG5cclxuXHRcdC8vSGlkZSBhbnkgPGgyPiB0ZXh0IGVxdWl2YWxlbnQgb2YgaWRlbnRpdHkgaW4gdGhpcyBDU1MgYm94XHJcblx0XHR2YXIgdGV4dElkZW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBjb25maWcuZG9tSWQgKyAnIGgyJyk7XHJcblx0XHR0ZXh0SWRlbnRpdHkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHR9XHJcblxyXG59XHJcbiIsIi8qKiBcclxuICogU3RhdGljSW1hZ2UuanNcclxuICogSW1hZ2Utc3R5bGUgSW5mb3JtYXRpb24gdGhhdCBjYW5ub3QgYmUgY2hhbmdlZCBvbmNlIHRoZSBnYW1lIGlzIGxvYWRlZFxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgSW5mbyB7XHJcblxyXG5cdC8vIHNhdmUgc2NvcGVcclxuXHQvLyBUT0RPOiByZWZhY3RvciB3aXRoIGFycm93IGZ1bmN0aW9uXHJcblxyXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuXHRcdHN1cGVyKGNvbmZpZyk7XHJcblx0XHR0aGlzLnJlYWR5ID0gZmFsc2U7IC8vb3Zlci1yaWRlIEdhbWVQaWVjZSBhbmQgaW5mbyB3aXRoIGRlZmVycmFsc1xyXG5cdFx0dGhpcy5pbWFnZSA9IG51bGw7XHJcblx0XHR0aGlzLnBhdGggPSBjb25maWcucGF0aDtcclxuXHRcdHRoaXMuYXV0aG9yID0gY29uZmlnLmF1dGhvcjtcclxuXHRcdHRoaXMuc291cmNlID0gY29uZmlnLnNvdXJjZTtcclxuXHR9XHJcblxyXG5cdC8vIGxvYWQgYW4gaW1hZ2VcclxuXHRsb2FkIChwYXRoLCBjYWxsYmFjaykge1xyXG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0dGhhdC5zZXRSZWFkeShmYWxzZSk7XHJcblx0XHRjb25zb2xlLmxvZygnZW50ZXJpbmcgbG9hZCBpbkltYWdlJyk7XHJcblx0XHR2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblx0XHRpbWcuc3JjID0gcGF0aDtcclxuXHRcdGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKHRoYXQubmFtZSArICcgaW1hZ2UgbG9hZGVkIGZyb206JyArIHBhdGggKyAnIHc6JyArIGltZy53aWR0aCArICcgaDonICsgaW1nLmhlaWdodClcclxuXHRcdFx0dGhhdC5zZXRSZWFkeSh0cnVlKTtcclxuXHRcdFx0dGhhdC5kYXRhID0gaW1nO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYoY2FsbGJhY2spIHtcclxuXHRcdFx0XHRjYWxsYmFjaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpbWcub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdlcnJvciBsb2FkaW5nIGltZyBmcm9tOicgKyBwYXRoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIGxvYWQgaW1hZ2UsIGFwcGVuZCB0byBleGlzdGluZyBET00gZWxlbWVudFxyXG5cdC8vIE5PVEU6IHRoaXMgaXMgb3Zlci13cml0dGVuIGluIENoYXJhY3Rlci5qcywgd2hpY2ggbG9hZHMgaW1hZ2VzIGludG8gQ2FudmFzXHJcblx0bG9hZEltYWdlVG9ET00gKGRvbUlkLCBwYXRoLCBjYWxsYmFjaykge1xyXG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0dGhpcy5sb2FkKHBhdGgsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2ZvcmVncm91bmQgaW1hZ2UgJyArIHBhdGggKyAnIGxvYWRlZCcpXHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvbUlkKS5hcHBlbmRDaGlsZCh0aGF0LmRhdGEpO1xyXG5cdFx0XHRpZiAoY2FsbGJhY2spIHtcclxuXHRcdFx0XHRjYWxsYmFjaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHQvLyBsb2FkIGltYWdlIGFzIGEgQ1NTIGJhY2tncm91bmQgaW1hZ2UgaW50byBleGlzdGluZyBET00gZWxlbWVudC4gXHJcblx0Ly8gTk9URTogbm8gbG9jYWwgcmVmZXJlbmNlIHRvIGltYWdlIGluIHRoaXMgY2FzZVxyXG5cdGxvYWRCYWNrZ3JvdW5kSW1hZ2UgKGNvbnRhaW5lciwgcGF0aCwgY2FsbGJhY2spIHtcclxuXHRcdGNvbnNvbGUubG9nKCdsb2FkaW5nIGJhY2tncm91bmQgaW1hZ2U6JyArIHBhdGgpXHJcblx0XHRjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlPSd1cmwoJyArIHBhdGggKyAnKSc7XHJcblx0XHR0aGlzLnNldFJlYWR5KHRydWUpO1xyXG5cdFx0aWYgKGNhbGxiYWNrKSB7XHJcblx0XHRcdGNhbGxiYWNrKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBEcmF3IHRoZSBpbWFnZSB0byBhIHN1cHBsaWVkIGNhbnZhcyBjb250ZXh0XHJcblx0ZHJhd1RvQ2FudmFzIChjb250ZXh0LCBwb3NpdGlvbiwgc2l6ZSkge1xyXG5cdFx0Y29udGV4dC5kcmF3SW1hZ2UoaW1nLCBwb3NpdGlvbi50b3AsIHBvc2l0aW9uLmxlZnQsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcclxuXHR9XHJcblxyXG5cdC8vIERyYXcgdG8gdGhlIERPTS4gQXNzdW1lIHRoZSBJbWFnZSB3YXMgYWxyZWFkeSBhdHRhY2hlZCB0byB0aGUgRE9NXHJcblx0ZHJhd1RvRE9NIChwb3NpdGlvbiwgc2l6ZSkge1xyXG5cdFx0dGhpcy5pbWFnZS5zdHlsZS50b3AgPSBwb3NpdGlvbi50b3A7XHJcblx0XHR0aGlzLmltYWdlLnN0eWxlLmxlZnQgPSBwb3NpdGlvbi5sZWZ0O1xyXG5cdFx0dGhpcy5pbWFnZS5zdHlsZS53aWR0aCA9IHNpemUud2lkdGg7XHJcblx0XHR0aGlzLmltYWdlLnN0eWxlLmhlaWdodCA9IHNpemUuaGVpZ2h0O1xyXG5cdH1cclxuXHJcbn1cclxuIiwiLyoqIFxyXG4gKiBJbmZvLmpzXHJcbiAqIEdlbmVyaWMgaW5mb3JtYWl0b24gb2JqZWN0XHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2VcclxuICovXHJcbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mbyBleHRlbmRzIEdhbWVQaWVjZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG5cdFx0c3VwZXIoY29uZmlnKTtcclxuXHR9XHJcblxyXG5cdHNldEF1dGhvciAoYXV0aG9yKSB7XHJcblx0XHR0aGlzLmF1dGhvciA9IGF1dGhvcjtcclxuXHR9XHJcblxyXG5cdHNldFNvdXJjZSAoc291cmNlKSB7XHJcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuXHR9XHJcblxyXG59IiwiLyoqIFxyXG4gKiBJbnN0cnVjdGlvbnMuanNcclxuICogVGV4dCB3aGljaCB0ZWxscyB0aGUgUGxheWVyIGhvdyB0byBwbGF5IHRoZSBnYW1lLlxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuIGltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XHJcbiBpbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdHJ1Y3Rpb25zIGV4dGVuZHMgU3RhdGljVGV4dCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuXHRcdHN1cGVyKGNvbmZpZyk7XHJcblx0fVxyXG59XHJcbiIsIi8qKiBcclxuICogTGlvbi5qc1xyXG4gKiBBIExpb24sIHdobyB0cmllcyB0byBnZXQgdGhlIFBsYXllci5cclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcclxuIGltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExpb24gZXh0ZW5kcyBBbmltYWwge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyIChjb25maWcpO1xyXG4gXHR9XHJcbiB9IiwiLyoqIFxyXG4gKiBAY2xhc3MgTW92ZXJcclxuICogQGRlc2NyaXB0aW9uIHVwZGF0ZSBwb3NpdGlvbiBvZiBvYmplY3QgYmVpbmcgYW5pbWF0ZWQgYnkgR2FtZS5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IgKGdhbWVPYmopIHtcclxuXHRcdHRoaXMub2JqID0gZ2FtZU9iajtcclxuXHJcbiAgICAgICAgLy8gQ2hhcmFjdGVyIGhhcyByZWZlcmVuY2UgdG8gR2FtZVxyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWVPYmouZ2FtZTtcclxuXHJcbiAgICAgICAgLy8gTW92ZW1lbnQgdHlwZXNcclxuICAgICAgICB0aGlzLnR5cGUgPSAwO1xyXG4gICAgICAgIHRoaXMuU0xFVyA9IDE7XHJcbiAgICAgICAgdGhpcy5SQU5ET00gPSAyO1xyXG4gICAgICAgIHRoaXMuUElOR1BPSU5HID0gMztcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmdhbWUuc291bmRQb29sKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignbm8gc291bmRzIGluaXRpYWxpemVkLiBHYW1lIHdpbGwgcGxheSBzaWxlbnRseScpO1xyXG4gICAgICAgIH1cclxuXHJcblx0fVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEBtZXRob2QgdHJ1bmNhdG9yXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gdHJ1bmNhdGUgKG5vdCByb3VuZCkgbnVtYmVyIHRvIGZpeGVkIG51bWJlciBvZiBkZWNpbWFsc1xyXG4gICAgICogQHBhcmFtIE51bWJlciBudW0gZmxvYXRpbmctcG9pbnQgbnVtYmVyXHJcbiAgICAgKiBAcGFyYW0gSW50ZWdlciBkZWNpbWFscyB0aGUgbnVtYmVyIG9mIGRlY2ltYWxzIHBvaW50cyB0byByb3VuZCB0b1xyXG4gICAgICogQHJldHVybnMgTnVtYmVyIHRoZSB0cnVuY2F0ZWQgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIHRydW5jYXRvciAobnVtLCBkZWNpbWFscykgeyAgICBcclxuICAgICAgICB2YXIgbnVtUG93ZXIgPSBNYXRoLnBvdygxMCwgZGVjaW1hbHMpOyAvLyBcIm51bVBvd2VyQ29udmVydGVyXCIgbWlnaHQgYmUgYmV0dGVyXHJcbiAgICAgICAgcmV0dXJuIH5+KG51bSAqIG51bVBvd2VyKS9udW1Qb3dlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBAbWV0aG9kIHJhbmRvbWl6ZXJcclxuICAgICAqIEBkZXNjcmlwdGlvbiByYW5kb21pemUgYSBudW1iZXJcclxuICAgICAqL1xyXG4gICAgcmFuZG9taXplciAoKSB7XHJcbiAgICAgICAgdmFyIGQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAoZCA9IHBhcnNlSW50KGQpIC0gZCk7XHJcbiAgICAgICAgZCA9IHRoaXMudHJ1bmNhdG9yKGQsIDIpIC8gMTA7XHJcbiAgICAgICAgcmV0dXJuIGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogQG1ldGhvZCBnZXRDZW50ZXJcclxuICAgICAqL1xyXG4gICAgZ2V0Q2VudGVyICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogeCArICh3aWR0aC8yKSxcclxuICAgICAgICAgICAgeTogeSArIChoZWlnaHQvMilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogQG1ldGhvZCBpbml0U2xld1xyXG4gICAgICogQGRlc2NyaXB0aW9uIHNsZXcgb2JqZWN0IGhvcml6b250YWxseSB3aXRoIGtleXByZXNzZXMuIEFkZHMgZXZlbnQgXHJcbiAgICAgKiBsaXN0ZW5lcnMgZm9yIGtleWRvd24gYW5kIGtleXVwIGV2ZW50cy4gVXNlZCBmb3IgXHJcbiAgICAgKiBQbGF5ZXIgY2hhcmFjdGVycyBtb3ZpbmcgaG9yaXpvbnRhbGx5IGluIHRoZSBQbGF5ZXJBcmVhXHJcbiAgICAgKi9cclxuXHRpbml0U2xldyAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQgU2xldyBtb3Rpb24nKTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLlNMRVc7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgICAgICB0aGlzLnRpY2tlciA9IDA7XHJcbiAgICAgICAgdGhpcy5sYXN0RGlyID0gMTtcclxuXHJcbiAgICAgICAgLy8gYWRkIGJvdHRvbSwgcmlnaHQgdG8gbWFrZSBhIFJlY3QgZm9yIHRoZSBQbGF5ZXJBcmVhXHJcbiAgICAgICAgdGhpcy5ib3VuZHMgPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5wbGF5ZXJBcmVhc1swXS5wb3NpdGlvbjtcclxuICAgICAgICB0aGlzLmJvdW5kcy53aWR0aCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLnBsYXllckFyZWFzWzBdLnNpemUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5ib3VuZHMuaGVpZ2h0ID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10ucGxheWVyQXJlYXNbMF0uc2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5ib3VuZHMuYm90dG9tID0gdGhpcy5ib3VuZHMudG9wICsgdGhpcy5ib3VuZHMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYm91bmRzLnJpZ2h0ID0gdGhpcy5ib3VuZHMubGVmdCArIHRoaXMuYm91bmRzLndpZHRoO1xyXG5cclxuICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5vYmouaW1hZ2U7XHJcblxyXG4gICAgICAgIC8vIHRvZ2dsZSB0aGUgcG9zaXRpb24gb2YgdGhlIFBsYXllciB3aGVuIGtpY2tpbmdcclxuICAgICAgICB0aGlzLnVuS2ljayA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcclxuICAgICAgICB0aGlzLmluS2ljayA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcCAtIDY7XHJcblxyXG4gICAgICAgIC8vIE5PVEU6IFRydW1wIGlzIGFkZGVkIHRvIFBsYXllciBpbiBDb2xsaWRlclxyXG5cclxuICAgICAgICAvLyBmbGFnIG91ciBpbml0aWFsaXphdGlvblxyXG4gICAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gbGlzdGVuIGZvciB1c2VyIGV2ZW50c1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBcclxuICAgICAgICAgICAgZXZlbnQgPT4gdGhpcy5zbGV3KGV2ZW50KSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsXHJcbiAgICAgICAgICAgIGV2ZW50ID0+IHRoaXMudW5raWNrKGV2ZW50KSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBAbWV0aG9kIGluaXRSYW5kb21XYWxrXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdCByYW5kb20gbW90aW9ucyBhbG9uZyBhIHBhdGggZnJvbSB0aGUgXHJcbiAgICAgKiB0b3AgdG8gdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuLiBVc2VkIGZvciBcclxuICAgICAqIEFuaW1hbCBjaGFyYWN0ZXJzIG1vdmluZyB0aHJvdWdoIHRoZSBBbmltYWxBcmVhLlxyXG4gICAgICogQHBhcmFtIE51bWJlciBwcmVmU3BlZWQgdGhlIHNwZWVkIG9mIG1vdmVtZW50XHJcbiAgICAgKiBAcGFyYW0gU3RyaW5nIGRpcmVjdGlvbiB0aGUgZGlyZWN0aW9uIHRoZSBBbmltYWwgdWx0aW1hdGVseSBtb3ZlcywgXHJcbiAgICAgKiAtICd0b3AnOiBvdmVyYWxsIG1vdmVtZW50IHVwIHRoZSBzY3JlZW5cclxuICAgICAqIC0gJ2xlZnQnOiBvdmVyYWxsIG1vdmVtZW50IHRvIHRoZSBzY3JlZW4gbGVmdFxyXG4gICAgICogLSAnYm90dG9tJzogb3ZlcmFsbCBtb3ZlbWVudCB0byB0aGUgc2NyZWVuIGJvdHRvbSAoREVGQVVMVClcclxuICAgICAqIC0gJ3JpZ2h0Jzogb3ZlcmFsbCBtb3ZlbWVudCB0byB0aGUgc2NyZWVuIHJpZ2h0XHJcbiAgICAgKiAtICdyZXR1cm4nOiByZXR1cm4gaW1tZWRpYXRlbHkgdG8gdGhlIENhZ2UgYXJlYVxyXG4gICAgICogLSAnY2FnZWQnOiBzdGF5IGluIHRoZSBDYWdlIGFyZWFcclxuICAgICAqL1xyXG4gICAgaW5pdFJhbmRvbVdhbGsgKHByZWZTcGVlZCwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQgUmFuZG9tV2FsaycpO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMuUkFORE9NO1xyXG5cclxuICAgICAgICB0aGlzLnNwZWVkID0gcHJlZlNwZWVkICogdGhpcy50aW1lU3RhbXBSYW5kb20oKTtcclxuICAgICAgICB0aGlzLmRlbGF5ID0gdGhpcy50aW1lU3RhbXBSYW5kb20oKSAqIDMwMDtcclxuICAgICAgICB0aGlzLm9iai5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcclxuICAgICAgICB0aGlzLmRlbGF5Q291bnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5NQVggPSAzMDtcclxuICAgICAgICB0aGlzLk1BWF9ERUxBWSA9IDMwMDtcclxuXHJcbiAgICAgICAgLy8gb25lLXRpbWUgcGxheSBvZiBBbmltYWwgc291bmRcclxuICAgICAgICB0aGlzLmZpcnN0TW92ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIGFkZCBib3R0b20sIHJpZ2h0IHRvIG1ha2UgYSBSZWN0IGZvciB0aGUgQW5pbWFsQXJlYVxyXG4gICAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10uYW5pbWFsQXJlYXNbMF0ucG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5ib3VuZHMud2lkdGggPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5zaXplLndpZHRoO1xyXG4gICAgICAgIHRoaXMuYm91bmRzLmhlaWdodCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnNpemUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYm91bmRzLmJvdHRvbSA9IHRoaXMuYm91bmRzLnRvcCArIHRoaXMuYm91bmRzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmJvdW5kcy5yaWdodCA9IHRoaXMuYm91bmRzLmxlZnQgKyB0aGlzLmJvdW5kcy53aWR0aDtcclxuXHJcbiAgICAgICAgLy8gcmVtZW1iZXIgd2hlcmUgd2Ugc3RhcnRlZCAoaW4gdGhlIGNhZ2UpXHJcbiAgICAgICAgdGhpcy5zdGFydFRvcCA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcclxuICAgICAgICB0aGlzLnN0YXJ0TGVmdCA9IHRoaXMub2JqLnBvc2l0aW9uLmxlZnQ7XHJcblxyXG4gICAgICAgIC8vIGNhY2hlIHBvc2l0aW9uIGR1cmluZyBuZXcgcmFuZG9tIG1vdmVzXHJcbiAgICAgICAgdGhpcy5uZXdUb3AgPSAwLCB0aGlzLm5ld0xlZnQgPSAwO1xyXG5cclxuICAgICAgICAvLyBnZXQgYm90dG9tIGFuZCByaWdodCBmcm9tIENoYXJhY3RlciBmcm9tIGl0cyBJbWFnZVxyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLm9iai5pbWFnZTtcclxuXHJcbiAgICAgICAgLy8gZmxhZyBvdXIgaW5pdGlhbGl6YXRpb25cclxuICAgICAgICB0aGlzLmluaXRlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogQG1ldGhvZCBpbml0UGluZ1BvbmdcclxuICAgICAqIEBkZXNjcmlwdGlvbiBpbml0IGEgcGluZy1wb25nIHN0eWxlIG1vdGlvbi4gVXNlZCBmb3IgXHJcbiAgICAgKiBUcnVtcCBjaGFyYWN0ZXJzIG1vdmluZyB0aHJvdWdoIHRoZSBBbmltYWxBcmVhLlxyXG4gICAgICovXHJcbiAgICBpbml0UGluZ1BvbmcgKHByZWZTcGVlZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0IFBpbmdQb25nIG1vdGlvbicpO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMuUElOR1BPTkc7XHJcblxyXG4gICAgICAgIC8vQW5pbWFsIGFyZWFcclxuICAgICAgICAvLyBhZGQgYm90dG9tLCByaWdodCB0byBtYWtlIGEgUmVjdCBmb3IgdGhlIEFuaW1hbEFyZWFcclxuICAgICAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuYm91bmRzLndpZHRoID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10uYW5pbWFsQXJlYXNbMF0uc2l6ZS53aWR0aDtcclxuICAgICAgICB0aGlzLmJvdW5kcy5oZWlnaHQgPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5zaXplLmhlaWdodDtcclxuICAgICAgICB0aGlzLmJvdW5kcy5ib3R0b20gPSB0aGlzLmJvdW5kcy50b3AgKyB0aGlzLmJvdW5kcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5ib3VuZHMucmlnaHQgPSB0aGlzLmJvdW5kcy5sZWZ0ICsgdGhpcy5ib3VuZHMud2lkdGg7XHJcblxyXG4gICAgICAgIHRoaXMub2JqLnN0YXJ0VG9wID0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xyXG5cclxuICAgICAgICAvLyBnZXQgYm90dG9tIGFuZCByaWdodCBmcm9tIENoYXJhY3RlciBmcm9tIGl0cyBJbWFnZVxyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLm9iai5pbWFnZTtcclxuXHJcbiAgICAgICAgdGhpcy5vYmouc3BlZWQgPSAwO1xyXG4gICAgICAgIHRoaXMub2JqLmR4ID0gMDtcclxuICAgICAgICB0aGlzLm9iai5keSA9IDA7XHJcblxyXG4gICAgICAgIC8vIE5PVEU6IEFuaW1hbHMgYW5kIFBsYXllcnMgYXJlIGFkZGVkIHRvIFRydW1wIGluIENvbGxpZGVyXHJcblxyXG4gICAgICAgIC8vIGZsYWcgb3VyIGluaXRpYWxpemF0aW9uXHJcbiAgICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHQvKiogXHJcblx0ICogQG1ldGhvZCBzbGV3IFxyXG5cdCAqIE1vdmUgb2JqZWN0IHNsaWdodGx5IHVwIGZvciBkdXJhdGlvbiBvZiBzcGFjZSBiYXIgcHJlc3NlZCBkb3duXHJcbiAgICAgKiBDYWxsYmFjayBmb3Iga2V5ZG93biBhZGRFdmVudExpc3RlbmVyXHJcbiAgICAgKiBAcGFyYW0gRXZlbnQgZSB0aGUga2V5ZG93biBldmVudFxyXG4gICAgICovXHJcblx0c2xldyAoZSkge1xyXG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMzI6XHJcbiAgICAgICAgICAgIGNhc2UgMzg6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtpY2soZSk7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vcHJldmVudCBzY3JvbGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM3OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWNrZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCAtPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0RGlyID0gLTE7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vcHJldmVudCBzY3JvbGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM5OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWNrZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCArPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0RGlyID0gMTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy9wcmV2ZW50IHNjcm9sbFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEBtZXRob2QgdXBkYXRlU2xld1xyXG4gICAgICogQGRlc2NyaXB0aW9uIG1vdmUgYmFjayBhbmQgZm9ydGggaG9yaXpvbnRhbGx5LCB3aXRoIGEgc2ltcGxlIGVhc2luZyBtb3Rpb25cclxuICAgICAqIHdoZW4gbGVmdCBhbmQgcmlnaHQgYXJyb3cga2V5cyBhcmUgcHJlc3NlZC4gSGFuZGxlIGNvbGxpc2lvbnMgd2l0aCB0aGUgbGVmdCBcclxuICAgICAqIGFuZCByaWdodCB3YWxscyBvZiB0aGUgUGxheWVyQXJlYS5cclxuICAgICAqIENhbGwgaW4gYW4gdXBkYXRlIGZ1bmN0aW9uIGluc2lkZSB0aGUgQ2hhcmFjdGVyLCBlLmcuIFxyXG4gICAgICogdXBkYXRlICgpIHsgdXBkYXRlUmFuZG9tV2FsaygpOyB9XHJcbiAgICAgKiBUaGUgbWFpbiBHYW1lIG9iamVjdCBhdXRvbWF0aWNhbGx5IGZpbmRzIGFuZCAnZmlyZXMnIHVwZGF0ZSgpIGZ1bmN0aW9uIGluIFxyXG4gICAgICogYWxsIENoYXJhY3RlcnMuXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVNsZXcgKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbml0ZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGxheWVyIFNsZXcgTk9UIGluaXRpYWxpemVkIChkaWQgeW91IGxlYXZlIG91dCBvZiBjb25zdHJ1Y3Rvcj8pJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aWNrZXIrKztcclxuICAgICAgICBpZiAodGhpcy5zcGVlZCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGlja2VyID4gMTApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLz0gMjtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKz0gKHRoaXMubGFzdERpciAqIHRoaXMuc3BlZWQpO1xyXG5cclxuICAgICAgICAvL2NoZWNrIGJvdW5kc1xyXG4gICAgICAgIGlmICh0aGlzLmJvdW5kcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnZS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdyA9IHRoaXMuaW1hZ2UuZGF0YS53aWR0aDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IDwgdGhpcy5ib3VuZHMubGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdERpciA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCAvPSAxLjI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCA9IHRoaXMuYm91bmRzLmxlZnQgKyAodGhpcy5zcGVlZCAqIDEuNSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPiB0aGlzLmJvdW5kcy5yaWdodCAtIHcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3REaXIgPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkIC89IDEuMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ID0gdGhpcy5ib3VuZHMucmlnaHQgLSB3IC0gKHRoaXMuc3BlZWQgKiAxLjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEBtZXRob2Qga2lja1xyXG4gICAgICogQGRlc2NyaXB0aW9uIGlmIGZvb3QgaXMgbmVhciBUcnVtcCwga2ljayBoaW0gaW50byB0aGUgQW5pbWFsXHJcbiAgICAgKi9cclxuICAgIGtpY2sgKGUpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCc6Ojo6VEhJUyBUUlVNUDo6Ojo6JyArIHRoaXMub2JqLnRydW1wKVxyXG4gICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCA9IHRoaXMuaW5LaWNrO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMub2JqLnRydW1wKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiBtaXNzaW5nIGNvbGxpc2lvbiBtYXRyaXggKGRpZCB5b3UgaW5jbHVkZSBDb2xsaWRlcj8pJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNlZSBpZiB3ZSdyZSBjbG9zZSBlbm91Z2ggdG8ga2ljayBpbiB0aGUgeSBheGlzXHJcbiAgICAgICAgdmFyIHRydW1wWURpc3QgPSB0aGlzLm9iai5wb3NpdGlvbi50b3AgLSB0aGlzLm9iai50cnVtcC5pbWFnZS5kYXRhLndpZHRoIC0gdGhpcy5vYmoudHJ1bXAucG9zaXRpb24udG9wO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3RydW1wWURpc3Q6JyArIHRydW1wWURpc3QpXHJcblxyXG4gICAgICAgIC8vIElmIFBsYXllciBpcyBjbG9zZSBpbiBZLCBhbmQgaW5zaWRlIFggcmFuZ2UsIGtpY2sgdGhlIFRydW1wIGludG8gQW5pbWFsQXJlYVxyXG4gICAgICAgIGlmICh0cnVtcFlEaXN0IDwgMTApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0YXJ0IHRoZSBUcnVtcCBtb3ZpbmcsIHNwZWVkXHJcbiAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLnNwZWVkID0gNDA7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB0b28gY2xvc2UgdG8gbGVmdCB3YWxsLCBwcmUtYXNzaWduIGEgdmFsdWVcclxuICAgICAgICAgICAgaWYgKHRoaXMub2JqLnRydW1wLnBvc2l0aW9uLmxlZnQgPCAodGhpcy5ib3VuZHMubGVmdCArIDIwKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI+PlRydW1wOiBsZWZ0IGJvdW5kIGNvcnJlY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR4ID0gLTAuMjtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR5ID0gMC44O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjb21wdXRlIGR4IGFuZCBkeSBmb3IgVHJ1bXBcclxuICAgICAgICAgICAgdmFyIGRpc3QgPSAodGhpcy5vYmoucG9zaXRpb24ubGVmdCAtIHRoaXMub2JqLnRydW1wLnBvc2l0aW9uLmxlZnQpIC8gNTA7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaXN0KSA8IDEuMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGR4ID0gZGlzdDtcclxuICAgICAgICAgICAgICAgIGlmKGR4ID4gMC4wMDMgJiYgZHggPCAwLjgpIHtcclxuICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR4ID0gZHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHkgPSAxLjAgLSBkeDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdGFydCB0aGUga2lja2luZyBzb3VuZFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkeCA8IDAgJiYgZHggPiAtMC44KSB7XHJcbiAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keCA9IGR4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR5ID0gMS4wICsgZHg7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGR4KSA8IDAuMDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLnJhbmRvbWl6ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBkID0gZCAtIHRoaXMucmFuZG9taXplcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR4ID0gZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keSA9IDEuMCArIGR4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0YXJ0IHRoZSBraWNraW5nIHNvdW5kXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc3RhcnQgdGhlIGtpY2tpbmcgc291bmRcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWUuc291bmRQb29sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnNvdW5kUG9vbC5wbGF5U291bmQoJ2tpY2snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IC8vIGVuZCBvZiBmdW5jdGlvblxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEBtZXRob2QgdW5raWNrXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gc2V0IHBvc2l0aW9uIG9mIFBsYXllciBiYWNrIHRvIG9yaWdpbmFsXHJcbiAgICAgKi9cclxuICAgIHVua2ljayAoZSkge1xyXG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMzI6XHJcbiAgICAgICAgICAgIGNhc2UgMzg6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPSB0aGlzLnVuS2ljaztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBAbWV0aG9kIHRpbWVTdGFtcFJhbmRvbVxyXG4gICAgICogQGRlc2NyaXB0aW9uIHJhbmRvbWl6ZSBpbiBhIDEwLWZvbGQgcmFuZ2UgdXNpbmcgd2luZG93LnBlcmZvcm1hbmNlXHJcbiAgICAgKi9cclxuXHR0aW1lU3RhbXBSYW5kb20gKCkge1xyXG5cdFx0dmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy91c2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXHJcbiAgICAgICAgfVxyXG5cdFx0dmFyIG51bSA9ICd4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpKjEwKSUxMCB8IDA7XHJcbiAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQvMTApO1xyXG4gICAgICAgICAgICByZXR1cm4gKGM9PSd4JyA/IHIgOiAociYweDN8MHg4KSkudG9TdHJpbmcoMTApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gbnVtIC8gMTAwMDA7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChleGNsdXNpdmUpXHJcblx0ICogQGxpbmsgXHJcblx0ICovXHJcblx0Z2V0UmFuZG9tKG1pbiwgbWF4KSB7XHJcbiAgIFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcblx0fVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEBtZXRob2QgdXBkYXRlUmFuZG9tV2Fsa1xyXG4gICAgICogQGRlc2NyaXB0aW9uIGdlbmVyYXRlIGEgcmFuZG9tIHdhbGssIHdpdGggb25lIHByZWZlcnJlZCBkaXJlY3Rpb24sIFxyXG4gICAgICogZ2l2aW5nIHRoZSBtZWFuZGVyaW5nIG1vdGlvbiB1c2VkIGJ5IEFuaW1hbHMuIFxyXG4gICAgICogQ2FsbCBpbiBhbiB1cGRhdGUgZnVuY3Rpb24gaW5zaWRlIHRoZSBDaGFyYWN0ZXIsIGUuZy4gXHJcbiAgICAgKiB1cGRhdGUgKCkgeyB1cGRhdGVSYW5kb21XYWxrKCk7IH1cclxuICAgICAqIFRoZSBtYWluIEdhbWUgb2JqZWN0IGF1dG9tYXRpY2FsbHkgZmluZHMgYW5kICdmaXJlcycgdXBkYXRlKCkgZnVuY3Rpb24gaW4gXHJcbiAgICAgKiBhbGwgQ2hhcmFjdGVycy5cclxuICAgICAqL1xyXG5cdHVwZGF0ZVJhbmRvbVdhbGsgKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbml0ZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQW5pbWFsIFJhbmRvbVdhbGsgTk9UIGluaXRpYWxpemVkIChkaWQgeW91IGxlYXZlIG91dCBvZiBjb25zdHJ1Y3Rvcj8pJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblx0XHR0aGlzLmNvdW50ZXIrKztcclxuXHRcdHRoaXMuZGVsYXlDb3VudGVyKys7XHJcblx0XHRpZiAodGhpcy5kZWxheUNvdW50ZXIgPCB0aGlzLmRlbGF5KSB7XHJcblx0XHRcdC8vY29uc29sZS5sb2coJ2RlbGF5Q291bnRlcjonICsgdGhpcy5kZWxheUNvdW50ZXIgKyAnIE1BWDonICsgdGhpcy5NQVhfREVMQVkpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG4gICAgICAgIC8vIFBsYXkgYW5pbWFsJ3Mgb3BlbmluZyBzb3VuZCBPTkNFIGF0IHN0YXJ0IG9mIG1vdmVtZW50XHJcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RNb3ZlICYmIHRoaXMuZ2FtZS5zb3VuZFBvb2wpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnNvdW5kUG9vbC5wbGF5U291bmQodGhpcy5vYmouY29uc3RydWN0b3IubmFtZS50b0xvd2VyQ2FzZSgpLCAwLjcpO1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0TW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29tcHV0ZSBkeCBhbmQgZHkgZnJvbSByYW5kb20gd2Fsay4gc3RvcmUgaW5pdGlhbCBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMub2xkTGVmdCA9IHRoaXMub2JqLnBvc2l0aW9uLmxlZnQ7XHJcbiAgICAgICAgdGhpcy5vbGRUb3AgPSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XHJcblxyXG4gICAgICAgIC8vIHRoaXMub2JqLmRpcmVjdGlvbiB3YXMgc2V0IGluIGluaXRSYW5kb21XYWxrXHJcblx0XHRzd2l0Y2ggKHRoaXMub2JqLmRpcmVjdGlvbikge1xyXG5cdFx0XHRjYXNlICd0b3AnOlxyXG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLnRvcCAtPSAodGhpcy5zcGVlZCArICgwLjEgKiB0aGlzLmdldFJhbmRvbSgxLCB0aGlzLnNwZWVkKSkpO1xyXG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgLT0gMTAgKiAodGhpcy5nZXRSYW5kb20oLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQvMikpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdsZWZ0JzpcclxuXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IC09ICh0aGlzLnNwZWVkICsgKDAuNSAqIHRoaXMuZ2V0UmFuZG9tKDAsIHRoaXMuc3BlZWQpKSk7XHJcblx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24udG9wICs9IDEwICoodGhpcy5nZXRSYW5kb20oLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnYm90dG9tJzpcclxuIFx0XHRcdFx0aWYgKHRoaXMuY291bnRlciA+IHRoaXMuTUFYKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5NQVggPSB0aGlzLmdldFJhbmRvbSgyLCAxNSk7XHJcblx0XHRcdFx0XHR0aGlzLm5ld0xlZnQgPSAodGhpcy5nZXRSYW5kb20oLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpKTtcclxuXHRcdFx0XHRcdHRoaXMuY291bnRlciA9IDA7XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXIgPiB0aGlzLk1BWCAvIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5nZXRSYW5kb20oLTAuMiwgMS4yKSAvL05PVEU6IGZpbmUtdHVuZSB0aGlzIHRvIG1ha2UgZ2FtZXBsYXkgaGFyZGVyXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLnRvcCArPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzLmdldFJhbmRvbSgtMSwgMSk7XHJcblx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24ubGVmdCAtPSByICogdGhpcy5uZXdMZWZ0O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdyaWdodCc6XHJcblx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24ubGVmdCArPSAodGhpcy5zcGVlZCArICgwLjUgKiB0aGlzLmdldFJhbmRvbSgwLCB0aGlzLnNwZWVkKSkpO1xyXG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLnRvcCArPSAxMCAqICh0aGlzLmdldFJhbmRvbSgtdGhpcy5zcGVlZCwgdGhpcy5zcGVlZCkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdyZXR1cm4nOlxyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBjYXVzZWQgYnkgYSBUcnVtcCBjb2xsaWRlciBydW5uaW5nIGludG8gdGhlIEFuaW1hbFxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogcmV0dXJuIEFuaW1hbCB0byBpdHMgY2FnZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmouZGlyZWN0aW9uID0gJ2NhZ2VkJztcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHdyaXRlIHJldHVybiBhcmNcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjYWdlZCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ID0gdGhpcy5zdGFydExlZnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPSB0aGlzLnN0YXJ0VG9wO1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogd2hlbiBjYWdlZCwgcmVzZXQgdW50aWwgaXQgaXMgdW5jYWdlZCBhZ2FpblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcignTW92ZXIuc2V0UHJlZkRpcmVjdGlvbjogaW52YWxpZCBkaXJlY3Rpb246JyArIHRoaXMub2JqLmRpcmVjdGlvbik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblxyXG4gICAgICAgIC8vIENvbXB1dGUgZHggYW5kIGR5IGZvciBBbmltYWxzXHJcbiAgICAgICAgdmFyIHhkaXN0ID0gdGhpcy5vbGRMZWZ0IC0gdGhpcy5vYmoucG9zaXRpb24ubGVmdDtcclxuICAgICAgICB2YXIgeWRpc3QgPSB0aGlzLm9sZFRvcCAtIHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcclxuICAgICAgICB2YXIgc3VtID0geGRpc3QgKyB5ZGlzdDtcclxuICAgICAgICBpZiAoc3VtID4gMC4wMDAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqLmR4ID0geGRpc3QgLyBzdW07XHJcbiAgICAgICAgICAgIHRoaXMub2JqLmR5ID0geWRpc3QgLyBzdW07ICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9iai5keCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMub2JqLmR5ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNhdmUgb3VyIG5ldyBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMub2xkTGVmdCA9IHRoaXMub2JqLnBvc2l0aW9uLmxlZnQ7XHJcbiAgICAgICAgdGhpcy5vbGRUb3AgPSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJyBkeDonICsgdGhpcy5vYmouZHggKyAnIGR5OicgKyB0aGlzLm9iai5keSArICcgc3VtOicgKyBzdW0pXHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlQ29sbGlzaW9uICh0cnVtcCwgYW5pbWFsKSB7XHJcbiAgICAgICAgdmFyIHcgPSB0aGlzLm9iai5pbWFnZS5kYXRhLndpZHRoO1xyXG4gICAgICAgIHZhciBoID0gdGhpcy5vYmouaW1hZ2UuZGF0YS5oZWlnaHQ7XHJcbiAgICAgICAgdmFyIGF3ID0gYW5pbWFsLmltYWdlLmRhdGEud2lkdGg7XHJcbiAgICAgICAgdmFyIGFoID0gYW5pbWFsLmltYWdlLmRhdGEuaGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5vYmoucG9zaXRpb24ubGVmdCA8IGFuaW1hbC5wb3NpdGlvbi5sZWZ0ICsgYXcgJiZcclxuICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCArIHcgPiBhbmltYWwucG9zaXRpb24ubGVmdCAmJlxyXG4gICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPCBhbmltYWwucG9zaXRpb24udG9wICsgYWggJiZcclxuICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wICsgaCA+IGFuaW1hbC5wb3NpdGlvbi50b3ApIHsgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vZ2V0IFRydW1wIGNlbnRlcmFsIHBvaW50XHJcbiAgICAgICAgICAgICAgICB2YXIgdFhDZW50ZXIgPSB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ICsgdy8yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRZQ2VudGVyID0gdGhpcy5vYmoucG9zaXRpb24udG9wICArIGgvMjtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2dldCBBbmltYWwgY2VudHJhbCBwb2ludFxyXG4gICAgICAgICAgICAgICAgdmFyIGFYQ2VudGVyID0gYW5pbWFsLnBvc2l0aW9uLmxlZnQgKyBhdy8yO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFZQ2VudGVyID0gYW5pbWFsLnBvc2l0aW9uLnRvcCArIGFoLzI7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb21wdXRlIHggYW5kIHkgdmVjdG9yIGJldHdlZW4gY2VudGVyc1xyXG4gICAgICAgICAgICAgICAgdmFyIGNYRGlmZiA9IHRYQ2VudGVyIC0gYVhDZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB2YXIgY1lEaWZmID0gdFlDZW50ZXIgPSBhWUNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUcnVtcCBkb2Vzbid0IHJlYWN0IGlmIG5vdCBtb3ZpbmcgKGV2ZW4gaWYgYW5pbWFsIGRvZXMpXHJcbiAgICAgICAgICAgICAgICBpZiAodHJ1bXAuc3BlZWQgIT0gMCAmJiB0cnVtcC5keCAhPSAwICYmIHRydW1wLmR5ICE9IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbW92ZSBvYmplY3Qgc28gaXQgaXNuJ3QgY29sbGlkaW5nIGFueW1vcmVcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY1hEaWZmID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1bXAucG9zaXRpb24ueCArPSAoY1hEaWZmICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1bXAucG9zaXRpb24ueCAtPSAoY1hEaWZmICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY1lEaWZmID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1bXAucG9zaXRpb24ueSArPSAoY1lEaWZmICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1bXAucG9zaXRpb24ueSAtPSAoY1lEaWZmICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBub3JtYWxpemUgbmV3IHZlY3RvcnNcclxuICAgICAgICAgICAgICAgICAgICB0cnVtcC5keCA9IC1jWERpZmYgLyBjWURpZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ1bXAuZHkgPSAtY1lEaWZmIC8gY1hEaWZmO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyByb3VuZGluZyBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZGlmID0gTWF0aC5hYnModHJ1bXAuZHggKyB0cnVtcC5keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRkaWYgPiAxLjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRydW1wLmR4ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydW1wLmR5IC09IGRkaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVtcC5keSArPSBkZGlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAvL2VuZCBvZiBUcnVtcCBpcyBtb3ZpbmdcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2R4Ojo6Ojo6JyArIHRydW1wLmR4ICsgJyBkeTo6Ojo6OicgKyB0cnVtcC5keSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVBpbmdQb25nXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gbW92ZSBpbiBhIHBpbmctcG9uZyBzdHlsZS5cclxuICAgICAqIENhbGwgaW4gYW4gdXBkYXRlIGZ1bmN0aW9uIGluc2lkZSB0aGUgQ2hhcmFjdGVyLCBlLmcuIFxyXG4gICAgICogdXBkYXRlICgpIHsgdXBkYXRlUmFuZG9tV2FsaygpOyB9XHJcbiAgICAgKiBUaGUgbWFpbiBHYW1lIG9iamVjdCBhdXRvbWF0aWNhbGx5IGZpbmRzIGFuZCAnZmlyZXMnIHVwZGF0ZSgpIGZ1bmN0aW9uIGluIFxyXG4gICAgICogYWxsIENoYXJhY3RlcnMuXHJcbiAgICAgKiBQb3NzaWJsZSB1cGRhdGVzIGZvciBtb3Rpb246XHJcbiAgICAgKiAxLiBDb2xsaXNpb24gd2l0aCBhIFBsYXllciAodmlhIGtpY2soKSBtZXRob2QpIHN0YXJ0cyB0aGUgVHJ1bXAgY2hhcmFjdGVyIG1vdmluZ1xyXG4gICAgICogMi4gVHJ1bXAgd2lsbCBib3VuY2Ugb24gYWxsIHdhbGxzIEVYQ0VQVCB0aGUgYm90dG9tIHdhbGxcclxuICAgICAqIDMuIFdoZW4gdGhlIFRydW1wIGludGVyc2VjdHMgdGhlIGJvdHRvbSB3YWxsLCB0aGV5IHN0b3AgbW92aW5nXHJcbiAgICAgKiA0LiBJZiB0aGV5IGNvbGxpZGUgd2l0aCBhbiBBbmltYWwsIHRoZXkgYm91bmNlLCBhbmQgdGhlIEFuaW1hbCByZXR1cm5zIHRvIGl0cyBDYWdlLlxyXG4gICAgICovXHJcbiAgICB1cGRhdGVQaW5nUG9uZyAoKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pbml0ZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVHJ1bXAgUGluZ1BvbmcgTk9UIGluaXRpYWxpemVkIChkaWQgeW91IGxlYXZlIG91dCBvZiBjb25zdHJ1Y3Rvcj8pJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZHg6JyArIHRoaXMub2JqLmR4ICsgJyBkeTonICsgdGhpcy5vYmouZHkpO1xyXG4gICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgLT0gdGhpcy5vYmouc3BlZWQgKiB0aGlzLm9iai5keDtcclxuICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgLT0gdGhpcy5vYmouc3BlZWQgKiB0aGlzLm9iai5keTtcclxuXHJcbiAgICAgICAgLy9jaGVjayBib3VuZHMgKEFuaW1hbEFyZWEpXHJcbiAgICAgICAgaWYgKHRoaXMuYm91bmRzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9iai5pbWFnZS5kYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHcgPSB0aGlzLm9iai5pbWFnZS5kYXRhLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgdmFyIGggPSB0aGlzLm9iai5pbWFnZS5kYXRhLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjYXRjaCBjYXNlcyB3aGVyZSBUcnVtcCBnZXRzIGludG8gdGhlIENhZ2UgYXJlYVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLnRvcCA8IHRoaXMuYm91bmRzLnRvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5keSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouZHkgPSAtdGhpcy5vYmouZHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPSB0aGlzLmJvdW5kcy50b3AgKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJ1biB0aGlzIG9ubHkgaWYgd2UgYXJlIG1vdmluZyBkb3duIHRoZSBzY3JlZW5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5keSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmoucG9zaXRpb24udG9wID4gKHRoaXMub2JqLnN0YXJ0VG9wIC0gKHRoaXMub2JqLmR5ICogdGhpcy5vYmouc3BlZWQpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMub2JqLmR5ID0gLXRoaXMub2JqLmR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPSB0aGlzLm9iai5zdGFydFRvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouZHggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5keSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXN0ID0gdGhpcy5ib3VuZHMuYm90dG9tIC0gaCAtIHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3BkID0gLXRoaXMub2JqLmR5ICogdGhpcy5vYmouc3BlZWQgKiA0O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVjZWxlcmF0ZSBiZWZvcmUgc3RvcHBpbmcgYXQgYm90dG9tIG9mIEFuaW1hbEFyZWFcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdCA8IHNwZCAmJiBzcGQgPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnNwZWVkIC89IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAvL2VuZCBvZiBkeSBuZWdhdGl2ZSAoZ29pbmcgZG93bilcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBib3VuY2Ugb24gdGhlIG90aGVyIDMgd2FsbHNcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IDwgdGhpcy5ib3VuZHMubGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLmR4ID0gLXRoaXMub2JqLmR4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLnRvcCA8IHRoaXMuYm91bmRzLnRvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLmR5ID0gLXRoaXMub2JqLmR5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPiB0aGlzLmJvdW5kcy5yaWdodCAtIHcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5keCA9IC10aGlzLm9iai5keDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBlbmNvdW5kZXIgYW4gYW5pbWFsLCBib3VuY2UsIEFORCAna2ljaycgdGhlIGFuaW1hbCBiYWNrIGludG8gaXRzIGNhZ2VcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5hbmltYWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMub2JqLmFuaW1hbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFuaW1hbCA9IHRoaXMub2JqLmFuaW1hbHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxjdWxhdGVDb2xsaXNpb24odGhpcy5vYmosIGFuaW1hbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0IHRoZSBBbmltYWwncyBzdGF0ZSB0byByZXR1cm4gaG9tZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz4+PlJFVFVSTklORyBBTklNQUwgVE8gQ0FHRScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYWwuZGlyZWN0aW9uID0gJ3JldHVybic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmouc3BlZWQgPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouc3BlZWQgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2JyZWFrIG91dCBvZiBob3Jpem9udGFsIG1vdmVcclxuICAgICAgICBpZiAodGhpcy5vYmouZHkgPCAwLjAwMSAmJiB0aGlzLm9iai5keCA+IDAuMDAxKSB7XHJcbiAgICAgICAgICAgIHZhciBkID0gdGhpcy5yYW5kb21pemVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMub2JqLmR5ICs9IGQgLSB0aGlzLnJhbmRvbWl6ZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSAvLyBlbmQgb2YgY2xhc3NcclxuIiwiLyoqIFxyXG4gKiBQbGF5ZXIuanNcclxuICogVXNlci1jb250cm9sbGVkIENoYXJhY3RlclxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xyXG5cclxuIC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxyXG4gaW1wb3J0IE1vdmVyIGZyb20gJy4vTW92ZXIuanMnO1xyXG4gaW1wb3J0IENvbGxpZGVyIGZyb20gJy4vQ29sbGlkZXIuanMnO1xyXG4gLy8gRU5EIEFEREVEIFdFRUsgMTE8PDw8PDw8PDw8PDw8XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlciAoY29uZmlnKTtcclxuXHJcbiBcdFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXHJcbiBcdFx0dGhpcy5tb3Zlci5pbml0U2xldygpO1xyXG4gIFx0XHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XHRcdFxyXG4gXHR9XHJcblxyXG4gIFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXHJcbiBcdHVwZGF0ZSAoKSB7XHJcbiBcdFx0dGhpcy5tb3Zlci51cGRhdGVTbGV3KCk7XHJcbiBcdH1cclxuIFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxyXG5cclxuXHJcbiB9IiwiLyoqIFxyXG4gKiBQbGF5ZXJBcmVhLmpzXHJcbiAqIFRoZSByZWdpb24gd2hlcmUgdGhlIFBsYXllciBjYW4gbW92ZS5cclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQXJlYVxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJBcmVhIGV4dGVuZHMgQXJlYSB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIoY29uZmlnKTtcclxuIFx0fVxyXG5cclxuIH0iLCIvKiogXHJcbiAqIFNjb3JlLmpzXHJcbiAqIERpc3BsYXkgdXNlciBzY29yZVxyXG4gKiBAaW5oZXJpdHMgRHluYW1pY1RleHQsIFRleHQsIEluZm8sIEdhbWVQaWVjZVxyXG4gKi9cclxuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XHJcbmltcG9ydCBEeW5hbWljVGV4dCBmcm9tICcuL0R5bmFtaWNUZXh0LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlIGV4dGVuZHMgRHluYW1pY1RleHQge1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcblx0XHRzdXBlcihjb25maWcpO1xyXG5cdH1cclxufSIsIi8qKiBcclxuICogU2NyZWVuLmpzXHJcbiAqIEdlbmVyaWMgU2NyZWVuIG9iamVjdFxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLmpzXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcblxyXG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xyXG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xyXG4gaW1wb3J0IElkZW50aXR5IGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlbiBleHRlbmRzIEdhbWVQaWVjZSB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIoY29uZmlnKTsgLy9pbml0ICdwYXJlbnQnIEdhbWVQaWVjZVxyXG5cclxuIFx0XHQvLyBzYXZlIGEgcmVmZXJlbmNlIHRvIG91ciBwYXJlbnQgR2FtZSBvYmplY3RcclxuIFx0XHR0aGlzLmdhbWUgPSBjb25maWcuZ2FtZTtcclxuXHJcbiBcdFx0Ly8gU2NyZWVucyBhcmUgZGVmaW5lZCBpbiBIVE1MLCBzbyBzYXZlIGEgcmVmZXJlbmNlIHRvIG91ciBET00gaWRcclxuIFx0XHR0aGlzLmRvbUlkID0gY29uZmlnLmlkO1xyXG5cclxuIFx0XHQvLyBzYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBET00gZWxlbWVudCB3ZSdyZSBjb25uZWN0ZWQgdG9cclxuIFx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZG9tSWQpO1xyXG5cclxuIFx0XHQvLyBpbnNlcnQgdGhlIGNvcHlyaWdodCBpbmZvIGZyb20gdGhlIG1haW4gR2FtZSBvYmplY3RcclxuIFx0XHR0aGlzLmFkZFdhcm5pbmcoKTtcclxuIFx0fVxyXG5cclxuIFx0Ly8gbG9hZCBhIGJhY2tncm91bmQgaW1hZ2UgaW50byB0aGUgU2NyZWVuXHJcbiBcdGxvYWRCYWNrZ3JvdW5kIChwYXRoLCBjYWxsYmFjaykge1xyXG4gXHRcdGNvbnNvbGUubG9nKFwibG9hZGluZzpcIiArIHRoaXMuZG9tSWQpO1xyXG4gXHRcdHRoaXMuYmFja2dyb3VuZEltYWdlID0gbmV3IFN0YXRpY0ltYWdlKFxyXG4gXHRcdFx0e1xyXG4gXHRcdFx0XHRuYW1lOiB0aGlzLm5hbWUgKyAnLWltYWdlJyxcclxuIFx0XHRcdFx0ZG9tSWQ6IHRoaXMuaWQgKyAnLWltYWdlJyxcclxuIFx0XHRcdFx0cGF0aDogcGF0aCxcclxuIFx0XHRcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrXHJcbiBcdFx0XHR9XHJcbiBcdFx0KTtcclxuIFx0XHR0aGlzLmJhY2tncm91bmRJbWFnZS5sb2FkQmFja2dyb3VuZEltYWdlKHRoaXMuZG9tLCBwYXRoLCBjYWxsYmFjayk7XHJcbiBcdH1cclxuXHJcbiBcdC8vIHNob3cgYW5kIGhpZGUgcmVnaW9ucyBvZiB0aGUgU2NyZWVuXHJcbiBcdHNob3dTY3JlZW4gKCkge1xyXG4gXHRcdGNvbnNvbGUubG9nKFwic2hvd2luZzpcIiArIHRoaXMuZG9tSWQpO1xyXG4gXHRcdHRoaXMuZG9tLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiBcdH1cclxuXHJcbiBcdGhpZGVTY3JlZW4gKCkge1xyXG4gXHRcdGNvbnNvbGUubG9nKFwiaGlkaW5nOlwiICsgdGhpcy5kb21JZCk7XHJcbiBcdFx0dGhpcy5kb20uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gXHR9XHJcblxyXG4gXHRzaG93SGVhZGVyICgpIHtcclxuIFx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuIFx0fVxyXG5cclxuIFx0aGlkZUhlYWRlciAoKSB7XHJcblx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuIFx0fVxyXG5cclxuIFx0c2hvd0Zvb3RlciAoKSB7XHJcblx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiBcdH1cclxuXHJcbiBcdGhpZGVGb290ZXIgKCkge1xyXG5cdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiBcdH1cclxuXHJcbiBcdGFkZFdhcm5pbmcgKCkge1xyXG4gXHRcdHRoaXMuZG9tLnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKS5pbm5lckhUTUwgPSB0aGlzLmdhbWUud2FybmluZztcclxuIFx0fVxyXG5cclxuIH07IiwiLyoqIFxyXG4gKiBAY2xhc3MgU291bmRlci5qc1xyXG5cclxuICogQGRlc2NyaXB0aW9uIHByb3ZpZGUgc291bmRzIHRoYXQgb3RoZXIgb2JqZWN0cyBjYW4gcGxheS4gRGV0ZWN0cyB0aGUga2luZHMgXHJcbiAqIG9mIGF1ZGlvIGZpbGVzIHRoZSB3ZWIgYnJvd2VyIGNhbiBwbGF5LCBhbmQgc2VydmVzIHRoZSBmaXJzdCBmaWxlIGl0IGZpbmRzIGluIFxyXG4gKiB0aGUgL2F1ZGlvIGZvbGRlciBvZiB0aGUgZGlzdHJpYnV0aW9uLiBBdWRpbyBmaWxlcyBhcmUgYWNjZXNzZWQgYnkgY3VzdG9tIG5hbWVzIFxyXG4gKiBmb3IgcGxheWJhY2suXHJcblxyXG4gKiBBZGFwdGVkIGZyb21cclxuICogQGh0dHA6Ly9ibG9nLnNrbGFtYmVydC5jb20vaHRtbDUtY2FudmFzLWdhbWUtaHRtbDUtYXVkaW8tYW5kLWZpbmlzaGluZy10b3VjaGVzL1xyXG5cclxuICogU291bmRlci5qcyBzaG91bGQgYmUgbG9hZGVkIGluIHRoZSBtYWluIEdhbWUgaW5pdGlhbGl6YXRpb24gcHJvY2Vzcy5cclxuXHJcbiAqIEluIGFkZGl0aW9uLCB0aGUgZGlzdHJpYnV0aW9uIE1VU1QgaGF2ZSBhbiAvYXVkaW8gZGlyZWN0b3J5IHdpdGggZmlsZXMgaW4gbXVsdGlwbGUgXHJcbiAqIGF1ZGlvIGZvcm1hdHM6XHJcbiAqIE1QMyAoLm1wMylcclxuICogT2dnLVZvcmJpcyAoLm9nZylcclxuICogV0FWICgud2F2KVxyXG5cclxuICogQXVkaW8gRWRpdG9yczpcclxuICogQXVkYWNpdHkgKGZyZWUpXHJcbiAqIEBsaW5rIGh0dHA6Ly93d3cuYXVkYWNpdHl0ZWFtLm9yZy9cclxuICogUHJvVG9vbHMgKCQkJClcclxuICogQGxpbmsgaHR0cDovL3d3dy5hdmlkLmNvbS9wcm8tdG9vbHNcclxuXHJcbiAqIEF1ZGlvIGNvbnZlcnRlcnM6XHJcbiAqIEBsaW5rIGh0dHA6Ly9tZWRpYS5pby9cclxuICogQGxpbmsgaHR0cHM6Ly9zb3VyY2Vmb3JnZS5uZXQvcHJvamVjdHMvYXVkYWNpdHkvXHJcbiAqIEBsaW5rIGh0dHA6Ly93d3cubWVkaWFodW1hbi5jb20vYXVkaW8tY29udmVydGVyL1xyXG4gKiBAbGluayBodHRwOi8vd3d3Lmh0bWw1YXVkaW9jb252ZXJ0ZXIuY29tL1xyXG4gXHJcbiAqIEF1ZGlvIFNhbXBsZXM6XHJcbiAqIEBsaW5rIGh0dHA6Ly93d3cuZ3JzaXRlcy5jb20vYXJjaGl2ZS9zb3VuZHMvY2F0ZWdvcnkvMjUvP29mZnNldD0yMFxyXG4gKiBAbGluayBodHRwczovL3d3dy5mcmVlc291bmQub3JnXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IgKCkge1xyXG5cclxuXHRcdC8vIENyZWF0ZSBhbiBhcnJheSBvZiBsb2FkZWQgc291bmRzXHJcblx0XHR0aGlzLnBhdGggPSAnYXVkaW8vJztcclxuXHJcblx0XHR0aGlzLnNvdW5kcyA9IFtdO1xyXG5cdFx0dGhpcy5jaGVja0F1ZGlvKCk7XHJcblx0fVxyXG5cclxuXHQvKiogXHJcblx0ICogQG1ldGhvZCBjaGVja0F1ZGlvXHJcblx0ICogQGRlc2NyaXB0aW9uIHNlZSB3aGljaCBhdWRpbyBmaWxlIGZvcm1hdHMgY2FuIGJlIHBsYXllZCBieSB0aGUgYnJvd3Nlci5cclxuXHQgKi9cclxuXHRjaGVja0F1ZGlvICgpIHtcclxuXHRcdHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuXHRcdHZhciBib29sID0gZmFsc2U7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0aWYgKGJvb2wgPSAhIWVsZW0uY2FuUGxheVR5cGUpIHtcclxuXHRcdFx0XHRib29sID0gbmV3IEJvb2xlYW4oYm9vbCk7XHJcblx0XHRcdFx0Ym9vbC5vZ2cgPSBlbGVtLmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cInZvcmJpc1wiJykucmVwbGFjZSgvXm5vJC8sJycpO1xyXG5cdFx0XHRcdGJvb2wubXAzID0gZWxlbS5jYW5QbGF5VHlwZSgnYXVkaW8vbXBlZzsnKS5yZXBsYWNlKC9ebm8kLywnJyk7XHJcblx0XHRcdFx0Ym9vbC53YXYgPSBlbGVtLmNhblBsYXlUeXBlKCdhdWRpby93YXY7IGNvZGVjcz1cIjFcIicpLnJlcGxhY2UoL15ubyQvLCcnKTtcclxuXHRcdFx0XHRib29sLm00YSA9IChlbGVtLmNhblBsYXlUeXBlKCdhdWRpby94LW00YTsnKSB8fCBlbGVtLmNhblBsYXlUeXBlKCdhdWRpby9hYWM7JykpLnJlcGxhY2UoL15ubyQvLCcnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBjYXRjaCAoZSkge31cclxuXHRcdFx0Ly8gbGlzdCBzdXBwb3J0ZWQgYXVkaW8gdHlwZXNcclxuXHRcdFx0Ly9lbGVtID0gbnVsbDsgXHJcblx0XHRcdHRoaXMudHlwZSA9IGJvb2w7XHJcblxyXG5cdFx0XHRmb3IgKHZhciBpIGluIHRoaXMudHlwZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGkgKyAnIHN1cHBvcnQ6JyArIHRoaXMudHlwZVtpXSk7XHJcblx0XHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKiBcclxuXHQgKiBAbWV0aG9kIHNldFNvdW5kXHJcblx0ICogQGRlc2NyaXB0aW9uIGNhbGxiYWNrIGZvciBsb2FkaW5nIHNvdW5kLCBhZGRzIHRvIHRoZSBcclxuXHQgKiBzb3VuZHMgYXJyYXkgZm9yIGxhdGVyIHBsYXliYWNrLlxyXG5cdCAqL1xyXG5cdHNldFNvdW5kIChlLCBuYW1lLCB2b2x1bWUpIHtcclxuXHRcdGlmICghdm9sdW1lKSB7XHJcblx0XHRcdHZvbHVtZSA9IDAuNTtcclxuXHRcdH1cclxuXHRcdHRoaXMuc291bmRzW25hbWVdID0gZS50YXJnZXQ7XHJcblx0XHR0aGlzLnNvdW5kc1tuYW1lXS52b2x1bWUgPSB2b2x1bWU7XHJcblx0fVxyXG5cclxuXHQvKiogXHJcblx0ICogQG1ldGhvZCBzb3VuZEVycm9yXHJcblx0ICogQGRlc2NyaXB0aW9uIGNhbGxiYWNrIGZvciBmYWlsZWQgbG9hZHMgb2Ygc291bmQgZmlsZXMuXHJcblx0ICovXHJcblx0c291bmRFcnJvciAoZSwgbmFtZSkge1xyXG5cdFx0Y29uc29sZS5lcnJvcignQXVkaW8gJyArIG5hbWUgKyAnIGZhaWVkIHRvIGxvYWQnKTtcclxuXHRcdHRoaXMuc291bmRzW25hbWVdID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdC8qKiBcclxuXHQgKiBAbWV0aG9kIGFkZFNvdW5kXHJcblx0ICogQGRlc2NyaXB0aW9uIGFkZCBhIG5ldyBzb3VuZC4gXHJcblx0ICogQHBhcmFtIFN0cmluZyBuYW1lIHRoZSBuYW1lIG9mIHRoZSBzb3VuZC4gVGhlIHNvdW5kIG5hbWUgXHJcblx0ICogbXVzdCBtYXRjaCB0aGUgZmlsZSBjb250YWluaW5nIHRoZSBhdWRpbywgZS5nLiBmb3IgYSBzb3VuZCBjYWxsZWQgXHJcblx0ICogJ2tpY2snIHRoZXJlIG11c3QgYmUgYSBmaWxlIC9hdWRpby9raWNrLm1wMyBcclxuXHQgKiBQb3NzaWJsZSBmb3JtYXRzIChjcmVhdGUgdGhlbSBhbGwgZHVyaW5nIHByb2R1Y3Rpb24pXHJcblx0ICogLSBNUDMgKC5tcDMpXHJcblx0ICogLSBPZ2ctVm9yYmlzICgub2dnKVxyXG5cdCAqIC0gV0FWICgud2F2KVxyXG5cdCAqIEBwYXJhbSBOdW1iZXIgdm9sdW1lIHRoZSBsb3VkbmVzcyBvZiB0aGUgc291bmQsIGJldHdlZW4gMCAoc2lsZW50KSBcclxuXHQgKiBhbmQgMS4wIChhcyBsb3VkIGFzIHBvc3NpYmxlKS5cclxuXHQgKi9cclxuXHRhZGRTb3VuZCAobmFtZSwgdm9sdW1lKSB7XHJcblx0XHRpZiAoIW5hbWUpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcigndHJpZWQgdG8gbG9hZCBhdWRpbyBmaWxlIHdpdGhvdXQgYSBuYW1lIGFuZC9vciBwYXRoLCBhYm9ydGluZycpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHQvLyB0cnkgY3JlYXRpbmcgdGhlIHNvdW5kXHJcblx0XHR2YXIgc25kO1xyXG5cdFx0Ly8gZ2V0IHRoZSBleHRlbnNpb24gYW5kIHJlbWFpbmluZyBwYXRoXHJcblx0XHRmb3IgKHZhciBpIGluIHRoaXMudHlwZSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygndGhpcy50eXBlWycgKyBpICsgJ109JyArIHRoaXMudHlwZVtpXSk7XHJcblx0XHRcdGlmICh0aGlzLnR5cGVbaV0gIT0gXCJcIikgeyAvL3JldHVybmVkIGRhdGFUeXBlIGZvciBlbGVtLmNhblBsYXlUeXBlKC4uLilcclxuXHJcblx0XHRcdFx0dmFyIGZpbGVQYXRoID0gdGhpcy5wYXRoICsgbmFtZSArICcuJyArIGk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJUUllJTkcgVE8gTE9BRDpcIiArIHRoaXMucGF0aCArIG5hbWUgKyAnLicgKyBpKTtcclxuXHJcblx0XHRcdFx0Ly8gQ3JlYXRlIHRoZSBBdWRpbyBvYmplY3RcclxuXHRcdFx0XHRzbmQgPSBuZXcgQXVkaW8oZmlsZVBhdGgpO1xyXG5cclxuXHRcdFx0XHQvLyB0cmFwIGxvYWQgYW5kIGVycm9yIGV2ZW50c1xyXG5cdFx0XHRcdHNuZC5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRkYXRhJywgXHJcblx0XHRcdFx0XHRldmVudCA9PiB0aGlzLnNldFNvdW5kKGV2ZW50LCBuYW1lLCB2b2x1bWUpLCBmYWxzZSk7XHJcblxyXG5cdFx0XHRcdHNuZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIFxyXG5cdFx0XHRcdFx0ZXZlbnQgPT4gdGhpcy5zb3VuZEVycm9yKGV2ZW50LCBuYW1lKSwgZmFsc2UpO1xyXG5cclxuXHRcdFx0XHQvLyBzdGFydCBsb2FkaW5nIHRoZSBzb3VuZFxyXG5cdFx0XHRcdHNuZC5sb2FkKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICghc25kKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3NvdW5kIGZpbGUgZm9yOicgKyBuYW1lICsgJyBub3QgZm91bmQgaW4gYXVkaW8nKTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQvKiogXHJcblx0ICogQG1ldGhvZCBwbGF5U291bmRcclxuXHQgKiBAZGVzY3JpcHRpb25cclxuXHQgKiBAcGFyYW1zIFN0cmluZyBuYW1lIHRoZSBuYW1lIG9mIHRoZSBzb3VuZC4gTXVzdCBtYXRjaCB0aGUgZmlsZW5hbWUgXHJcblx0ICogV0lUSE9VVCBhIGZpbGUgZXh0ZW5zaW9uIGluIHRoZSAvYXVkaW8gZm9sZGVyIGZvciB0aGUgZ2FtZS5cclxuXHQgKi9cclxuXHRwbGF5U291bmQgKG5hbWUpIHtcclxuXHRcdGlmICh0aGlzLnNvdW5kc1tuYW1lXSkge1xyXG5cdFx0XHR0aGlzLnNvdW5kc1tuYW1lXS5wbGF5KCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdubyBzb3VuZCBmaWxlIHdpdGggbmFtZTonICsgbmFtZSArICcgaW4gYXVkaW8gZm9sZGVyJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKiogXHJcblx0ICogQG1ldGhvZCBmaWxlRXhpc3RzXHJcblx0ICogQGRlc2NyaXB0aW9uIGRldGVjdCBpZiBhIGZpbGUgaXMgcHJlc2VudCBvbiB0aGUgc2VydmVyLiBVc2VzIGFuIFxyXG5cdCAqIHN5bmNocm9ub3VzIEFqYXggdGVjaG5pcXVlLCBzbyBTTE9XIGlmIHlvdSBhcmUgdXNpbmcgYSByZW1vdGUgc2VydmVyLiBcclxuXHQgKiBObyBjb21wYXJhYmxlIG1ldGhvZCBleGlzdHMgZm9yIGRldGVybWluaW5nIGlmIGEgZm9sZGVyIGV4aXN0cyBpbiBcclxuXHQgKiBjbGllbnQtc2lkZSB2YW5pbGxhIEphdmFTY3JpcHQuXHJcblx0ICogQHBhcmFtIFN0cmluZyB1cmwgdGhlIHBhdGggdG8gdGhlIGZpbGUgb24gdGhlIHNlcnZlci5cclxuXHQgKi9cclxuXHRmaWxlRXhpc3RzKHVybCkge1xyXG5cdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdFx0eGhyLm9wZW4oJ0hFQUQnLCB1cmwsIGZhbHNlKTtcclxuXHRcdHhoci5zZW5kKCk7XHJcblx0XHRpZiAoeGhyLnN0YXR1cyA9PSAnNDA0Jykge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59IC8vIGVuZCBvZiBjbGFzcyIsIi8qKiBcclxuICogU3RhcnRTY3JlZW4uanNcclxuICogT3BlbmluZyBzY3JlZW4gZm9yIGdhbWUuXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIFNjcmVlblxyXG4gKi9cclxuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xyXG5cclxuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcclxuaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJztcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcclxuaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xyXG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9JZGVudGl0eS5qcyc7XHJcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vQmFja2dyb3VuZC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydFNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XHJcblxyXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuXHRcdHN1cGVyKGNvbmZpZyk7XHJcblxyXG5cdFx0Ly8gdGhpcy5kb20gZGVmaW5lZCBpbiBTY3JlZW5cclxuXHJcblx0XHQvLyBMb2FkIFN0YXJ0U2NyZWVuIHN1Yi1vYmplY3RzXHJcblx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kKCdpbWcvc2NyZWVucy9zdGFydC1zY3JlZW4ucG5nJyk7XHJcblxyXG5cdFx0Ly8gbG9hZCBpZGVudGl0eSBpbWFnZVxyXG5cdFx0dGhpcy5sb2FkSWRlbnRpdHkoKTtcclxuXHJcblx0XHQvLyBsb2FkIGluc3RydWN0aW9uc1xyXG5cdFx0dGhpcy5sb2FkSW5zdHJ1Y3Rpb25zKCk7XHJcblxyXG5cdFx0Ly8gTWFrZSB0aGUgc3RhcnQgYnV0dG9uIG9wZW4gdGhlIG1haW4gZ2FtZSBzY3JlZW5cclxuXHRcdHRoaXMuYmluZFN0YXJ0KCk7XHJcblx0fVxyXG5cclxuXHRsb2FkSWRlbnRpdHkgKCkge1xyXG5cdFx0dGhpcy5pZGVudGl0eSA9IG5ldyBJZGVudGl0eShcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdpZGVudGl0eScsIFxyXG5cdFx0XHRcdGRvbUlkOiAnc3RhcnQtc2NyZWVuLWlkZW50aXR5JyxcclxuXHRcdFx0XHRwYXRoOiAnaW1nL2lkZW50aXR5L2xvZ28ucG5nJywgXHJcblx0XHRcdFx0YXV0aG9yOiAncGV0ZSBtYXJraWV3aWN6JywgXHJcblx0XHRcdFx0c291cmNlOiAncGx5b2p1bXAnXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0Ly8gc2V0IHBvc2l0aW9uIG9mIElkZW50aXR5XHJcblx0XHR0aGlzLmlkZW50aXR5LnNldERPTVBvc2l0aW9uIChcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRvcDogMCxcclxuXHRcdFx0XHRsZWZ0OiAwXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdH1cclxuXHJcblx0bG9hZEluc3RydWN0aW9ucyAoKSB7XHJcblxyXG5cdFx0dGhpcy5pbnN0cnVjdGlvbnMgPSBuZXcgU3RhdGljVGV4dChcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdnYW1lIGluc3RydWN0aW9ucycsXHJcblx0XHRcdFx0ZG9tSWQ6ICdpbnN0cnVjdGlvbnMnLFxyXG5cdFx0XHRcdHRleHQ6ICdQbGF5IHRvIHdpbi4gVGhhdCBpcyBhbGwgVHJ1bXAgY2FyZXMgYWJvdXQsIGFuZCBzbyBzaG91bGQgeW91LidcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmluc3RydWN0aW9ucy5zZXRET01Qb3NpdGlvbihcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRvcDogMCxcclxuXHRcdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHR9XHJcblxyXG5cdGJpbmRTdGFydCAoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImluIGJpbmRTdGFydCwgdGhpcy5nYW1lOlwiICsgdGhpcy5nYW1lKVxyXG5cdFx0Ly8gd2UgdXNlIGJpbmQoKSB0byBsaW5rIHRoZSBmdW5jdGlvbiBiZWxvdyB0byBTdGFydFNjcmVlbiAob3RoZXJ3aXNlLCBpdCB0aGlua3MgaXQgaXMgaW5zaWRlIHdpbmRvdylcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydC1zY3JlZW4tcGxheS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFxyXG5cdFx0XHRmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdC8vYWxlcnQoXCJpbiBoYW5kbGVyLCBnYW1lOlwiICsgdGhpcy5nYW1lKVxyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR0aGlzLmdhbWUuc3RhcnRHYW1lKCk7XHJcblxyXG5cdFx0XHR9LmJpbmQodGhpcykpO1xyXG5cdH1cclxufSIsIi8qKiBcclxuICogU3RhdGljSW1hZ2UuanNcclxuICogSW1hZ2Utc3R5bGUgSW5mb3JtYXRpb24gdGhhdCBjYW5ub3QgYmUgY2hhbmdlZCBvbmNlIHRoZSBnYW1lIGlzIGxvYWRlZFxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpY0ltYWdlIGV4dGVuZHMgSW1hZ2Uge1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcblx0XHRzdXBlcihjb25maWcpO1xyXG5cclxuXHRcdHRoaXMuc3RhdGljID0gdHJ1ZTtcclxuXHR9XHJcblxyXG59XHJcbiIsIi8qKiBcclxuICogU3RhdGljVGV4dC5qc1xyXG4gKiBUZXh0IHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgYWZ0ZXIgbG9hZGVkIGJ5IHRoZSBnYW1lXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG4gaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpY1RleHQgZXh0ZW5kcyBUZXh0IHtcclxuXHJcblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG5cdFx0c3VwZXIoY29uZmlnKTtcclxuXHJcblx0XHR0aGlzLnN0YXRpYyA9IHRydWU7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiLyoqIFxyXG4gKiBUZXh0LmpzXHJcbiAqIENyZWF0ZXMgYSB0ZXh0LXR5cGUgSW5mbyBvYmplY3RcclxuICogQGluaGVyaXRzIEluZm8sIEdhbWVQaWVjZVxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgSW5mbyB7XHJcblxyXG4gXHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuIFx0XHRzdXBlcihjb25maWcpO1xyXG5cclxuIFx0XHQvLyBzZXQgdGhlIHRleHRcclxuIFx0XHR0aGlzLnNldFRleHQoY29uZmlnLnRleHQpO1xyXG5cclxuIFx0XHQvLyBzZXQgdGhlIERPTUlkXHJcbiBcdFx0dGhpcy5hZGRUb0RPTShjb25maWcuZG9tSWQpO1xyXG4gXHR9XHJcblxyXG4gXHRzZXRUZXh0ICh0eHQpIHtcclxuIFx0XHR0aGlzLnRleHQgPSB0eHQ7XHJcbiBcdH1cclxuXHJcbiBcdGFkZFRvRE9NIChkb21JZCkge1xyXG5cclxuIFx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gXHRcdHRoaXMuZG9tLmlkID0gbmFtZSArICctVGV4dCc7XHJcbiBcdFx0dGhpcy5kb20uaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xyXG5cclxuIFx0XHQvLyBjb250YWluZXJcclxuIFx0XHR2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9tSWQpO1xyXG5cclxuIFx0XHQvLyBhZGQgdG8gdGhlIERPTVxyXG4gXHRcdGNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGhpcy5kb20sIGNvbnRhaW5lci5jaGlsZE5vZGVzWzBdKTtcclxuXHJcblx0fVxyXG5cclxuIH0iLCIvKiogXHJcbiAqIFRpZ2VyLmpzXHJcbiAqIEEgVGlnZXIsIHdobyB0cmllcyB0byBnZXQgdGhlIFBsYXllci5cclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcclxuIGltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpZ2VyIGV4dGVuZHMgQW5pbWFsIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlciAoY29uZmlnKTtcclxuIFx0fVxyXG4gfSIsIi8qKiBcclxuICogVHJ1bXAuanNcclxuICogVGhlIGJhbGwtbGlrZSBDaGFyYWN0ZXIgeW91IGtpY2sgaW50byBBbmltYWxzXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XHJcblxyXG4gLy8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXHJcbiBpbXBvcnQgTW92ZXIgZnJvbSAnLi9Nb3Zlci5qcyc7XHJcbiBpbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XHJcbiAvLyBFTkQgQURERUQgV0VFSyAxMTw8PDw8PDw8PDw8PDxcclxuIFxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJ1bXAgZXh0ZW5kcyBDaGFyYWN0ZXIge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyIChjb25maWcpO1xyXG5cclxuIFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXHJcbiBcdFx0Ly9UcnVtcCBnZXRzIFBpbmdQb25nIG1vdGlvblxyXG4gXHRcdHRoaXMubW92ZXIuaW5pdFBpbmdQb25nKDApO1xyXG4gXHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XHJcblxyXG4gXHR9XHJcblxyXG4gXHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcclxuIFx0dXBkYXRlICgpIHtcclxuIFx0XHR0aGlzLm1vdmVyLnVwZGF0ZVBpbmdQb25nKCk7XHJcbiBcdH1cclxuIFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxyXG5cclxuIH0iLCIvKiogXHJcbiAqIENyZWF0ZSB0aGUgZ2FtZS4gSW1wb3J0IHRoZSBwcmltYXJ5IGNsYXNzZXMsIGFuZCAnY29tcG9zaXRlJyBcclxuICogdGhlIG92ZXJhbGwgR2FtZSBvYmplY3Qgb3V0IG9mIGluc3RhbmNlcyBvZiB0aGUgY2xhc3Nlcy5cclxuICovXHJcbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG5cclxuLy9UaGUgZW50aXJlIGdhbWVcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lLmpzJztcclxuXHJcbi8vU2NyZWVuIGluaGVyaXRhbmNlXHJcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xyXG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSAnLi9TdGFydFNjcmVlbi5qcyc7XHJcbmltcG9ydCBHYW1lU2NyZWVuIGZyb20gJy4vR2FtZVNjcmVlbi5qcyc7XHJcbmltcG9ydCBFbmRTY3JlZW4gZnJvbSAnLi9FbmRTY3JlZW4uanMnO1xyXG5cclxuLy9JbmZvIGluaGVyaXRhbmNlXHJcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XHJcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XHJcbmltcG9ydCBJZGVudGl0eSBmcm9tICcuL0lkZW50aXR5LmpzJztcclxuaW1wb3J0IEluc3RydWN0aW9ucyBmcm9tICcuL0luc3RydWN0aW9ucy5qcyc7XHJcbmltcG9ydCBEeW5hbWljVGV4dCBmcm9tICcuL0R5bmFtaWNUZXh0LmpzJztcclxuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUuanMnO1xyXG5cclxuLy9DaGFyYWN0ZXIgaW5oZXJpdGFuY2VcclxuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XHJcbmltcG9ydCBUcnVtcCBmcm9tICcuL1RydW1wLmpzJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcyc7XHJcbmltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xyXG5pbXBvcnQgTGlvbiBmcm9tICcuL0xpb24uanMnO1xyXG5pbXBvcnQgVGlnZXIgZnJvbSAnLi9UaWdlci5qcyc7XHJcbmltcG9ydCBCZWFyIGZyb20gJy4vQmVhci5qcyc7XHJcbmltcG9ydCBHb3JpbGxhIGZyb20gJy4vR29yaWxsYS5qcyc7XHJcbmltcG9ydCBIZWFsdGggZnJvbSAnLi9IZWFsdGguanMnO1xyXG5cclxuLy9BcmVhIGluaGVyaXRhbmNlLlxyXG5pbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xyXG5pbXBvcnQgQ2FnZSBmcm9tICcuL0NhZ2UuanMnO1xyXG5pbXBvcnQgQW5pbWFsQXJlYSBmcm9tICcuL0FuaW1hbEFyZWEuanMnO1xyXG5pbXBvcnQgUGxheWVyQXJlYSBmcm9tICcuL1BsYXllckFyZWEuanMnO1xyXG5cclxuLy9UZXN0IGZpbGUgKHZlcnkgc2ltcGxlIHRlc3RydW5uZXIpXHJcbmltcG9ydCBUZXN0cyBmcm9tICcuLi8uLi90ZXN0cy9UZXN0cy5qcyc7XHJcblxyXG4vKiogXHJcbiAqIFNldCB1cCB0ZXN0cy5cclxuICovXHJcbnZhciBteVRlc3RzID0gbmV3IFRlc3RzKCk7XHJcblxyXG4vKipcclxuICogU2V0IHVwIHRoZSBHYW1lXHJcbiAqL1xyXG52YXIgbXlHYW1lID0gbmV3IEdhbWUoe25hbWU6IFwiWm9vS2lsbFNvY2NlclwifSk7XHJcblxyXG4vKiogXHJcbiAqIEVYUE9SVCBUTyBXRUIgQ09OU09MRVxyXG4gKiBUbyBtYWtlIHNvbWV0aGluZyB2aXNpYmxlIGluIFdlYiBjb25zb2xlIGZvciBkZWJ1Z2dpbnQsIGF0dGFjaCB0byB3aW5kb3cgb2JqZWN0XHJcbiAqIE5PVEU6IFByb2Zlc3Npb25hbCBjb2RlIHVzZXMgc3BlY2lhbGl6ZWQgdGVzdGluZyBtb2R1bGVzIGxpa2UgTW9jaGEsIEthcm1hLCBhbmQgXHJcbiAqIHNpbWlsYXIgdGVzdGluZyBsaWJyYXJpZXMuXHJcbiAqL1xyXG5cclxuLy8gd2UgY2FuIHJ1biB0aGlzIHRlc3QgbWFudWFsbHkgd2l0aCB0ZXN0cy5ydW4oKTtcclxud2luZG93LnRlc3RzID0gbXlUZXN0cztcclxuXHJcbi8vIG1ha2UgdGhlIGdhbWUgb2JqZWN0IHZpc2libGUgc28gd2UgY2FuIGluc3BlY3QgaXQuXHJcbndpbmRvdy5nYW1lID0gbXlHYW1lO1xyXG5cclxuY29uc29sZS5sb2coJ1pPT0tJTExTT0NDRVIgR2FtZSBpbml0aWFsaXplZC4gQWNjZXNzIGdhbWUgdmlhIFwiZ2FtZVwiLiBVc2UgVGVzdHMucnVuKCkgdG8gdGVzdC4nKVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuLi9tb2R1bGVzL2pzL0dhbWVQaWVjZS5qcyc7XHJcblxyXG4vL1RoZSBlbnRpcmUgZ2FtZVxyXG5pbXBvcnQgR2FtZSBmcm9tICcuLi9tb2R1bGVzL2pzL0dhbWUuanMnO1xyXG5cclxuLy9TY3JlZW4gaW5oZXJpdGFuY2VcclxuaW1wb3J0IFNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL1NjcmVlbi5qcyc7XHJcbmltcG9ydCBTdGFydFNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL1N0YXJ0U2NyZWVuLmpzJztcclxuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi4vbW9kdWxlcy9qcy9HYW1lU2NyZWVuLmpzJztcclxuaW1wb3J0IEVuZFNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL0VuZFNjcmVlbi5qcyc7XHJcblxyXG4vL0luZm8gaW5oZXJpdGFuY2VcclxuaW1wb3J0IEluZm8gZnJvbSAnLi4vbW9kdWxlcy9qcy9JbmZvLmpzJztcclxuaW1wb3J0IFRleHQgZnJvbSAnLi4vbW9kdWxlcy9qcy9UZXh0LmpzJztcclxuaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi4vbW9kdWxlcy9qcy9TdGF0aWNUZXh0LmpzJztcclxuaW1wb3J0IElkZW50aXR5IGZyb20gJy4uL21vZHVsZXMvanMvSWRlbnRpdHkuanMnO1xyXG5pbXBvcnQgSW5zdHJ1Y3Rpb25zIGZyb20gJy4uL21vZHVsZXMvanMvSW5zdHJ1Y3Rpb25zLmpzJztcclxuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4uL21vZHVsZXMvanMvRHluYW1pY1RleHQuanMnO1xyXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi4vbW9kdWxlcy9qcy9TY29yZS5qcyc7XHJcblxyXG4vL0NoYXJhY3RlciBpbmhlcml0YW5jZVxyXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4uL21vZHVsZXMvanMvQ2hhcmFjdGVyLmpzJztcclxuaW1wb3J0IFRydW1wIGZyb20gJy4uL21vZHVsZXMvanMvVHJ1bXAuanMnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL21vZHVsZXMvanMvUGxheWVyLmpzJztcclxuaW1wb3J0IEFuaW1hbCBmcm9tICcuLi9tb2R1bGVzL2pzL0FuaW1hbC5qcyc7XHJcbmltcG9ydCBMaW9uIGZyb20gJy4uL21vZHVsZXMvanMvTGlvbi5qcyc7XHJcbmltcG9ydCBUaWdlciBmcm9tICcuLi9tb2R1bGVzL2pzL1RpZ2VyLmpzJztcclxuaW1wb3J0IEJlYXIgZnJvbSAnLi4vbW9kdWxlcy9qcy9CZWFyLmpzJztcclxuaW1wb3J0IEdvcmlsbGEgZnJvbSAnLi4vbW9kdWxlcy9qcy9Hb3JpbGxhLmpzJztcclxuaW1wb3J0IEhlYWx0aCBmcm9tICcuLi9tb2R1bGVzL2pzL0hlYWx0aC5qcyc7XHJcblxyXG4vL0FyZWEgaW5oZXJpdGFuY2UuXHJcbmltcG9ydCBBcmVhIGZyb20gJy4uL21vZHVsZXMvanMvQXJlYS5qcyc7XHJcbmltcG9ydCBDYWdlIGZyb20gJy4uL21vZHVsZXMvanMvQ2FnZS5qcyc7XHJcbmltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4uL21vZHVsZXMvanMvQW5pbWFsQXJlYS5qcyc7XHJcbmltcG9ydCBQbGF5ZXJBcmVhIGZyb20gJy4uL21vZHVsZXMvanMvUGxheWVyQXJlYS5qcyc7XHJcblxyXG4vKiogXHJcbiAqIFRFU1RCRUQgLSBUZXN0IGFsbCBvdXIgb2JqZWN0cy4gVGhpcyBpcyBhIHZlcnkgYmFzaWMgdGVzdGluZyBzeXN0ZW0uIFxyXG4gKiBOT1RFOiBQcm9mZXNzaW9uYWwgY29kZSB1c2VzIHRlc3RpbmcgbGlicmFyaWVzIGxpa2UgS2FybWEgYW5kIE1vY2hhLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdHMge1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoKSB7XHJcblx0fVxyXG5cclxuXHQvLyBCZWNhdXNlIHdlIG1ha2UgdGhlc2Ugb2JqZWN0cyB3aXRoICd2YXInIHRoZXkgYXJlIHNjb3BlZCB0byB0aGUgcnVuKCkgZnVuY3Rpb24uXHJcblx0cnVuICgpIHtcclxuXHJcblx0XHR2YXIgY29uZmlnID0ge25hbWU6J0ZvcmVzdCBUcnVtcCBvciBEb25hbGQgR3VtcCBydWx6J307XHJcblxyXG5cdFx0Ly8gTWFrZSBzb21lIHRlc3QgZ2FtZSBvYmplY3RzXHJcblx0XHR2YXIgZ2FtZSA9IG5ldyBHYW1lKGNvbmZpZyk7XHJcblx0XHRjb25zb2xlLmxvZyhnYW1lLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0Ly90ZXN0IEdhbWUgT2JqZWN0XHJcblx0XHR2YXIgbXlHYW1lID0gbmV3IEdhbWUoe25hbWU6IFwiWm9vS2lsbFNvY2NlclwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteUdhbWUuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHQvL290aGVyIG9iamVjdHNcclxuXHRcdHZhciBteVNjcmVlbiA9IG5ldyBTY3JlZW4oe25hbWU6IFwiT3BlbmluZyBTY3JlZW5cIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlTY3JlZW4uZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlTdGFydFNjcmVlbiA9IG5ldyBTdGFydFNjcmVlbih7bmFtZTogXCJTdGFydCBTY3JlZW5cIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlTdGFydFNjcmVlbi5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUdhbWVTY3JlZW4gPSBuZXcgR2FtZVNjcmVlbih7bmFtZTogXCJHYW1lIFNjcmVlblwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteUdhbWVTY3JlZW4uZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlFbmRTY3JlZW4gPSBuZXcgRW5kU2NyZWVuKHtuYW1lOiBcIkVuZCBTY3JlZW5cIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlFbmRTY3JlZW4uZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlJbmZvID0gbmV3IEluZm8oe25hbWU6IFwiR2VuZXJpYyBJbmZvcm1hdGlvblwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteUluZm8uZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlUZXh0ID0gbmV3IFRleHQoe25hbWU6IFwiR2VuZXJpYyBUZXh0IE9iamVjdFwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteVRleHQuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlTdGF0aWNUZXh0ID0gbmV3IFN0YXRpY1RleHQoe25hbWU6IFwiR2VuZXJpYyBTdGF0aWMgVGV4dCBPYmplY3RcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlTdGF0aWNUZXh0LmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15SWRlbnRpdHkgPSBuZXcgSWRlbnRpdHkoe25hbWU6IFwiR2VuZXJpYyBJZGVudGl0eSBPYmplY3RcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlJZGVudGl0eS5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUluc3RydWN0aW9ucyA9IG5ldyBJbnN0cnVjdGlvbnMoe25hbWU6IFwiR2VuZXJpYyBJbnN0cnVjdGlvbnMgT2JqZWN0XCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15SW5zdHJ1Y3Rpb25zLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15RHluYW1pY1RleHQgPSBuZXcgRHluYW1pY1RleHQoe25hbWU6IFwiR2VuZXJpYyBEeW5hbWljIFRleHQgT2JqZWN0XCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15RHluYW1pY1RleHQuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlTY29yZSA9IG5ldyBTY29yZSh7bmFtZTogXCJzY29yZXMuLi5cIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlTY29yZS5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUNoYXJhY3RlciA9IG5ldyBDaGFyYWN0ZXIoe25hbWU6IFwiR2VuZXJpYyBDaGFyYWN0ZXJcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlDaGFyYWN0ZXIuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlUcnVtcCA9IG5ldyBUcnVtcCh7bmFtZTogXCJEb25hbGQgVHJ1bXBcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlUcnVtcC5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteVBsYXllciA9IG5ldyBQbGF5ZXIoe25hbWU6IFwiRW5kIFVzZXJcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlQbGF5ZXIuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlBbmltYWwgPSBuZXcgQW5pbWFsKHtuYW1lOiBcIkdlbmVyaWMgQW5pbWFsXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15QW5pbWFsLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15TGlvbiA9IG5ldyBMaW9uKHtuYW1lOiBcIkNvd2FyZGx5IHRoZSBMaW9uXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15TGlvbi5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteVRpZ2VyID0gbmV3IFRpZ2VyKHtuYW1lOiBcIkNob21wZXIgdGhlIFRpZ2VyXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15VGlnZXIuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlCZWFyID0gbmV3IEJlYXIoe25hbWU6IFwiTWF1bGVyIHRoZSBCZWFyXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15QmVhci5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUdvcmlsbGEgPSBuZXcgR29yaWxsYSh7IG5hbWU6IFwiU3B1bmt5IHRoZSBHb3JpbGxhXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15R29yaWxsYS5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUhlYWx0aCA9IG5ldyBIZWFsdGgoe25hbWU6IFwiT25lIEhlYWx0aCBLaXRcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlIZWFsdGguZ2V0TmFtZSgpKTtcclxuXHJcblx0XHQvL0FyZWEgaW5oZXJpdGFuY2UuXHJcblx0XHR2YXIgbXlBcmVhID0gbmV3IEFyZWEoe25hbWU6IFwiR2VuZXJpYyBBcmVhXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15QXJlYS5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUNhZ2UgPSBuZXcgQ2FnZSh7bmFtZTogXCJHZW5lcmljIEFyZWFcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlDYWdlLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15QW5pbWFsQXJlYSA9IG5ldyBBbmltYWxBcmVhKHtuYW1lOiBcIkFuaW1hbEFyZWFcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlBbmltYWxBcmVhLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15UGxheWVyQXJlYSA9IG5ldyBQbGF5ZXJBcmVhKHtuYW1lOiBcIlBsYXllckFyZWFcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlQbGF5ZXJBcmVhLmdldE5hbWUoKSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
