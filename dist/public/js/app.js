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
			window.soundPool = this.soundPool;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQW5pbWFsQXJlYS5qcyIsIm1vZHVsZXMvanMvQXJlYS5qcyIsIm1vZHVsZXMvanMvQmFja2dyb3VuZC5qcyIsIm1vZHVsZXMvanMvQmVhci5qcyIsIm1vZHVsZXMvanMvQ2FnZS5qcyIsIm1vZHVsZXMvanMvQ2hhcmFjdGVyLmpzIiwibW9kdWxlcy9qcy9Db2xsaWRlci5qcyIsIm1vZHVsZXMvanMvRHluYW1pY1RleHQuanMiLCJtb2R1bGVzL2pzL0VuZFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvR2FtZS5qcyIsIm1vZHVsZXMvanMvR2FtZVBpZWNlLmpzIiwibW9kdWxlcy9qcy9HYW1lU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9Hb3JpbGxhLmpzIiwibW9kdWxlcy9qcy9IZWFsdGguanMiLCJtb2R1bGVzL2pzL0lkZW50aXR5LmpzIiwibW9kdWxlcy9qcy9JbWFnZS5qcyIsIm1vZHVsZXMvanMvSW5mby5qcyIsIm1vZHVsZXMvanMvSW5zdHJ1Y3Rpb25zLmpzIiwibW9kdWxlcy9qcy9MaW9uLmpzIiwibW9kdWxlcy9qcy9Nb3Zlci5qcyIsIm1vZHVsZXMvanMvUGxheWVyLmpzIiwibW9kdWxlcy9qcy9QbGF5ZXJBcmVhLmpzIiwibW9kdWxlcy9qcy9TY29yZS5qcyIsIm1vZHVsZXMvanMvU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9Tb3VuZGVyLmpzIiwibW9kdWxlcy9qcy9TdGFydFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvU3RhdGljSW1hZ2UuanMiLCJtb2R1bGVzL2pzL1N0YXRpY1RleHQuanMiLCJtb2R1bGVzL2pzL1RleHQuanMiLCJtb2R1bGVzL2pzL1RpZ2VyLmpzIiwibW9kdWxlcy9qcy9UcnVtcC5qcyIsIm1vZHVsZXMvanMvaW5kZXguanMiLCJ0ZXN0cy9UZXN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoi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QW5CO0FBQ0EsV0FBUSxHQUFSLENBQVksYUFBYSxPQUFiLEVBQVo7QUFDQTs7Ozs7O2tCQTNGbUIsSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiogXG4gKiBBbmltYWwuanNcbiAqIFRoZSBjcml0dGVycyB0aGF0IFRydW1wIHRyaWVzIHRvIHN0b3AgZnJvbSBnZXR0aW5nIHRoZSBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xuXG4gLy8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG4gaW1wb3J0IE1vdmVyIGZyb20gJy4vTW92ZXIuanMnO1xuIGltcG9ydCBDb2xsaWRlciBmcm9tICcuL0NvbGxpZGVyLmpzJztcbiAvLyBFTkQgQURERUQgV0VFSyAxMTw8PDw8PDw8PDw8PDxcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hbCBleHRlbmRzIENoYXJhY3RlciB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG5cbiBcdFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG4gXHRcdC8vIEFuaW1hbHMgZ2V0IFJhbmRvbVdhbGsgbW90aW9uXG4gXHRcdHRoaXMubW92ZXIuaW5pdFJhbmRvbVdhbGsoMC4wMiwgJ2JvdHRvbScpO1xuIFx0XHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cbiBcdH1cblxuIFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG4gXHR1cGRhdGUgKCkge1xuIFx0XHR0aGlzLm1vdmVyLnVwZGF0ZVJhbmRvbVdhbGsoKTtcbiBcdH1cbiBcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcblxuIH0iLCIvKiogXG4gKiBBbmltYWxBcmVhLmpzXG4gKiBUaGUgcmVnaW9uIGFuaW1hbHMgbW92ZSB0aHJvdWdoIHRvIGdldCB0byBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBBcmVhXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FnZSBleHRlbmRzIEFyZWEge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG4gXHR9XG5cbiB9IiwiLyoqIFxuICogQXJlYS5qc1xuICogQSBnZW5lcmljIHJlZ2lvbiBvZiB0aGUgZ2FtZSBzY3JlZW4uIFVzZWQgdG8gYWRkIHZpc3VhbCBvYmplY3RzLCBhbmQgXG4gKiBjcmVhdGUgYm91bmRzIGZvciBjb2xsaXNpb24gZGV0ZWN0aW9uLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgSW5mbywgSW1hZ2UsIFN0YXRpY0ltYWdlXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyZWEgZXh0ZW5kcyBHYW1lUGllY2Uge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG5cbiBcdFx0Ly8gY3JlYXRlIGEgPGRpdj4sIGFkZCB0byBET00sIHdpdGggb3B0aW9uYWwgaW1hZ2VcbiBcdFx0dGhpcy5hZGRUb0RPTShjb25maWcubmFtZSwgY29uZmlnLmNvbnRhaW5lciwgY29uZmlnLnBhdGgpO1xuXG4gXHRcdC8vIHBvc2l0aW9uIHdpdGggYWJzb2x1dGUgY29vcmRpbmF0ZWRcbiBcdFx0dGhpcy5zZXRET01Qb3NpdGlvbihjb25maWcucG9zaXRpb24pOyAvL2luaGVyaXRlZCBmcm9tIEdhbWVQaWVjZVxuIFx0XHR0aGlzLnNldERPTVNpemUoY29uZmlnLnNpemUpO1xuIFx0fVxuXG4gXHQvLyBjcmVhdGUgRE9NIGVsZW1lbnQsIExvYWQgYSBiYWNrZ3JvdW5kIGltYWdlLCBhbmQgaW5zZXJ0IGludG8gY29udGFpbmVyXG4gXHRhZGRUb0RPTSAobmFtZSwgY29udGFpbmVyLCBpbWdQYXRoKSB7XG4gXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gXHRcdHRoaXMuZG9tLmlkID0gbmFtZSArICctYXJlYSc7XG5cbiBcdFx0Ly8gcG9zaXRpb24gYWJzb2x1dGVseVxuIFx0XHR0aGlzLmRvbS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cbiBcdFx0Ly8gRG9uJ3QgYWxsb3cgcGFkZGluZyBvciBtYXJnaW5zIG9yIGJvcmRlcnMgZm9yIEFyZWFzXG4gXHRcdHRoaXMuZG9tLnN0eWxlLm1hcmdpbiA9ICcwcHgnO1xuIFx0XHR0aGlzLmRvbS5zdHlsZS5wYWRkaW5nID0gJzBweCc7XG5cbiBcdFx0Ly8gYWRkIHRvIHRoZSBET01cbiBcdFx0Y29udGFpbmVyLmluc2VydEJlZm9yZSh0aGlzLmRvbSwgY29udGFpbmVyLmNoaWxkTm9kZXNbMF0pO1xuXG4gXHRcdC8vIGlmIHdlIGhhdmUgYW4gaW1hZ2UsIGluc2VydCBpbiBlbGVtZW50IGJhY2tncm91bmRcbiBcdFx0aWYgKGltZ1BhdGgpIHtcblxuIFx0XHRcdHRoaXMuaW1hZ2UgPSBuZXcgU3RhdGljSW1hZ2UoXG4gXHRcdFx0XHR7XG4gXHRcdFx0XHRcdG5hbWU6IHRoaXMuZG9tLmlkICsgJy1pbWFnZSdcbiBcdFx0XHRcdH1cbiBcdFx0XHQpO1xuXG4gXHRcdFx0dGhpcy5pbWFnZS5sb2FkQmFja2dyb3VuZEltYWdlICh0aGlzLmRvbSwgaW1nUGF0aCk7XG4gXHRcdH1cblxuIFx0fVxuXG4gXHQvLyBib3VuZHMgZGV0ZWN0b3IgZm9yIHN1cHBsaWVkIENoYXJhY3RlclxuXG5cbiB9IiwiLyoqIFxuICogQmFja2dyb3VuZC5qc1xuICogR2FtZSBMb2dvcywgTG9nb1R5cGVzLCBCcmFuZCBOYW1lXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmQgZXh0ZW5kcyBTdGF0aWNJbWFnZSB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cblx0XHR0aGlzLnNldFNvdXJjZShjb25maWcuc291cmNlKTtcblx0XHR0aGlzLnNldEF1dGhvcihjb25maWcuYXV0aG9yKTtcblx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kSW1hZ2UoY29uZmlnLmRvbUlkLCBjb25maWcucGF0aCk7XG5cdH1cblxufVxuIiwiLyoqIFxuICogQmVhci5qc1xuICogQSBUaWdlciwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlYXIgZXh0ZW5kcyBBbmltYWwge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuIFx0fVxuXG5cbiB9IiwiLyoqIFxuICogQ2FnZS5qc1xuICogVGhlIHJlZ2lvbiB3aGVyZSBhbmltYWxzIGFyZSBjYWdlZC5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEFyZWFcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBDYWdlIGV4dGVuZHMgQXJlYSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblxuIFx0XHRzdXBlcihjb25maWcpO1xuXG4gXHR9XG5cbiB9IiwiLyoqIFxuICogQ2hhcmFjdGVyLmpzXG4gKiBHYW1lLWdlbmVyYXRlZCBvciB1c2VyIGF2YXRhcnMuIENoYXJhY3RlcnMgYXJlIHJlbmRlcmVkIGluIENhbnZhcywgYnV0IGhhdmUgdGhlaXIgXG4gKiBwb3NpdGlvbiBjb21wdXRlZCBhbmQgdXBkYXRlZCBvdXRzaWRlIGNhbnZhcy5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2VcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xuXG4gLy8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG4gaW1wb3J0IE1vdmVyIGZyb20gJy4vTW92ZXIuanMnO1xuIGltcG9ydCBDb2xsaWRlciBmcm9tICcuL0NvbGxpZGVyLmpzJztcbiAvLyBFTkQgQURERUQgV0VFSyAxMTw8PDw8PDw8PDw8PDxcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlciBleHRlbmRzIEdhbWVQaWVjZSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG5cbiBcdFx0IC8vIHN0b3JlIGEgcmVmZXJlbmNlIHRvIHRoZSBnYW1lIG9iamVjdFxuIFx0XHR0aGlzLmdhbWUgPSBjb25maWcuZ2FtZTtcblxuIFx0XHQvLyBTZXQgcG9zaXRpb24gYW5kIHNpemUgZnJvbSBjb25maWd1cmF0aW9uXG4gXHRcdHRoaXMucG9zaXRpb24gPSBjb25maWcucG9zaXRpb247XG4gXHRcdHRoaXMuc2l6ZSA9IGNvbmZpZy5zaXplO1xuXG4gXHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIFx0XHR0aGlzLm1vdmVyID0gbmV3IE1vdmVyKHRoaXMpO1xuIFx0XHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cbiBcdFx0dGhpcy5pbWFnZSA9IG5ldyBTdGF0aWNJbWFnZShcbiBcdFx0XHR7XG4gXHRcdFx0XHRuYW1lOiBjb25maWcubmFtZSArICctaW1hZ2UnLFxuIFx0XHRcdFx0cGF0aDogY29uZmlnLnBhdGhcbiBcdFx0XHR9XG4gXHRcdCk7XG5cbiBcdFx0Ly8gSW1hZ2VzIGRvbid0IGF1dG9tYXRpY2FsbHkgbG9hZCB3aGVuIHRoZXkncmUgbm90IGF0dGFjaGVkIHRvIHRoZSBET00sIFxuIFx0XHQvLyBvciBhIENTUyBiYWNrZ3JvdW5kIGltYWdlXG4gXHRcdHRoaXMuaW1hZ2UubG9hZChjb25maWcucGF0aCwgZnVuY3Rpb24gKCkge2NvbnNvbGUubG9nKCdsb2FkZWQ6JyArIGNvbmZpZy5uYW1lKTt9KTtcbiBcdH1cblxuIFx0Ly8gb3ZlcnJpZGUgZGVmYXVsdCBkcmF3IHdpdGggb3VyIG93blxuIFx0ZHJhdyAoY29udGV4dCkge1xuXHRcdGlmICh0aGlzLmltYWdlKSB7XG5cdFx0XHR2YXIgaW1nID0gdGhpcy5pbWFnZS5kYXRhO1xuIFx0XHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuXHRcdFx0Ly9jb25zb2xlLmxvZygnZHJhd2luZycpXG5cdFx0XHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cdFx0XHRpZiAoaW1nKSB7XG5cdFx0XHRcdC8vIGRyYXcgaW1hZ2UgaW50byBIVE1MNSBjYW52YXNcbiBcdFx0IFx0XHRjb250ZXh0LmRyYXdJbWFnZShpbWcsIHRoaXMucG9zaXRpb24ubGVmdCwgdGhpcy5wb3NpdGlvbi50b3ApO1xuXHRcdFx0fVxuXHRcdH1cbiBcdH1cbiB9IiwiLyoqIFxuICogQGNsYXNzIENvbGxpZGVyXG4gKiBAZGVzY3JpcHRpb24gY3JlYXRlIHRoZSBjb2xsaXNpb24gbWF0cml4IGRlZmluaW5nIHdoaWNoIG9iamVjdHMgY2FuIGNvbGxpZGUgXG4gKiB3aXRoIHdoaWNoIG9iamVjdHMuIE9iamVjdHMgdGhhdCBjYW4gY29sbGlkZSBoYXZlIHRoZWlyIHBvdGVudGlhbCBjb2xsaWRlcnMgXG4gKiBhZGRlZCBhcyByZWZlcmVuY2VzLCBlLmcuIFBsYXllci50cnVtcCBvciBUcnVtcC5wbGF5ZXIuXG4gKiBAcGFyYW0gQXJyYXkgY2hhcmFjdGVyQXJyYXkgdGhlIGFycmF5IG9mIENoYXJhY3RlcnMgd2hvIG1pZ2h0IGJlIGludm9sdmVkIFxuICogaW4gY29sbGlzaW9ucy5cbiAqL1xuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpZGVyIHtcblxuIFx0Y29uc3RydWN0b3IgKGNoYXJhY3RlckFycmF5KSB7XG4gXHRcdHRoaXMuY2hhcmFjdGVyQXJyYXkgPSBjaGFyYWN0ZXJBcnJheTtcbiBcdFx0dGhpcy5hbmltYWxBcnJheSA9IFtdOyAvL2ZpbGxlZCB1cCBpbiBzZXRVcENvbGxpc2lvbnNcbiBcdFx0dGhpcy5zZXRVcENvbGxpc2lvbnMoKTtcbiBcdH1cblxuIFx0c2V0VXBDb2xsaXNpb25zICgpIHtcbiBcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuY2hhcmFjdGVyQXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiBcdFx0XHRzd2l0Y2ggKHRoaXMuY2hhcmFjdGVyQXJyYXlbaV0uY29uc3RydWN0b3IubmFtZSkge1xuIFx0XHRcdFx0Y2FzZSAnTGlvbic6XG4gXHRcdFx0XHRjYXNlICdUaWdlcic6XG4gXHRcdFx0XHRjYXNlICdCZWFyJzpcbiBcdFx0XHRcdGNhc2UgJ0dvcmlsbGEnOlxuIFx0XHRcdFx0XHR0aGlzLmFuaW1hbEFycmF5LnB1c2godGhpcy5jaGFyYWN0ZXJBcnJheVtpXSk7XG4gXHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0Y2FzZSAnVHJ1bXAnOlxuIFx0XHRcdFx0XHR0aGlzLnRydW1wID0gdGhpcy5jaGFyYWN0ZXJBcnJheVtpXTtcbiBcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRjYXNlICdQbGF5ZXInOlxuIFx0XHRcdFx0XHR0aGlzLnBsYXllciA9IHRoaXMuY2hhcmFjdGVyQXJyYXlbaV07XG4gXHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly9jcm9zcy1jb25uZWN0IHRoZSBpbXBhY3RvcnNcbiBcdFx0dGhpcy50cnVtcC5wbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiBcdFx0dGhpcy50cnVtcC5hbmltYWxzID0gdGhpcy5hbmltYWxBcnJheTtcbiBcdFx0dGhpcy5wbGF5ZXIudHJ1bXAgPSB0aGlzLnRydW1wO1xuXG4gXHRcdC8vREVCVUdcbiBcdFx0d2luZG93LmFuaW1hbHMgPSB0aGlzLnRydW1wLmFuaW1hbHM7XG4gXHRcdFxuXG4gXHR9XG4gfSIsIi8qKiBcbiAqIER5bmFtaWNUZXh0LmpzXG4gKiBUZXh0IHRoYXQgY2FuIGJlIGNoYW5nZWQgYnkgdXNlciAoZS5nLiBpbnB1dCBmaWVsZCksIG9yIFxuICogdXBkYXRlZCBieSB0aGUgZ2FtZSBpdHNlbGYuXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNUZXh0IGV4dGVuZHMgVGV4dCB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cdH1cbn1cbiIsIi8qKiBcbiAqIEVuZFNjcmVlbi5qc1xuICogRW5kaW5nIHNjcmVlbiBmb3IgdGhlIGdhbWUuXG4gKiBAaW5oZXJpdHMgU2NyZWVuLCBHYW1lUGllY2VcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuIFxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZFNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTtcblxuIFx0XHQvLyBsb2FkIHRoZSBiYWNrZ3JvdW5kIGltYWdlXG4gXHRcdHRoaXMubG9hZEJhY2tncm91bmQoJ2ltZy9zY3JlZW5zL2VuZC1zY3JlZW4ucG5nJyk7XG5cbiBcdFx0Ly8gTG9hZCBFbmRTY3JlZW4gc3ViLW9iamVjdHNcbiBcdFx0dGhpcy5sb2FkSW5wdXRTY29yZSgpO1xuIFx0XHR0aGlzLmxvYWRIaWdoU2NvcmVzKCk7XG5cbiBcdFx0Ly8gQmluZCBcInBsYXkgYWdhaW5cIiBhbmQgXCJpbnN0cnVjdGlvbnNcIiBidXR0b25zLlxuIFx0XHR0aGlzLmJpbmRSZXBsYXkoKTtcbiBcdFx0dGhpcy5iaW5kSW5zdHJ1Y3Rpb25zKCk7XG4gXHR9XG5cbiBcdGxvYWRJbnB1dFNjb3JlICgpIHtcblxuIFx0fVxuXG4gXHRsb2FkSGlnaFNjb3JlcyAoKSB7XG5cbiBcdH1cblxuIFx0YmluZFJlcGxheSAoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJpbiBiaW5kU3RhcnQsIHRoaXMuZ2FtZTpcIiArIHRoaXMuZ2FtZSlcblx0XHQvLyB3ZSB1c2UgYmluZCgpIHRvIGxpbmsgdGhlIGZ1bmN0aW9uIGJlbG93IHRvIFN0YXJ0U2NyZWVuIChvdGhlcndpc2UsIGl0IHRoaW5rcyBpdCBpcyBpbnNpZGUgd2luZG93KVxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmQtc2NyZWVuLXBsYXktYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBcblx0XHRcdGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdC8vYWxlcnQoXCJpbiBoYW5kbGVyLCBnYW1lOlwiICsgdGhpcy5nYW1lKVxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHRoaXMuZ2FtZS5zdGFydEdhbWUoKTtcblxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGJpbmRJbnN0cnVjdGlvbnMgKCkge1xuXHRcdGNvbnNvbGUubG9nKFwiaW4gYmluZFN0YXJ0LCB0aGlzLmdhbWU6XCIgKyB0aGlzLmdhbWUpXG5cdFx0Ly8gd2UgdXNlIGJpbmQoKSB0byBsaW5rIHRoZSBmdW5jdGlvbiBiZWxvdyB0byBTdGFydFNjcmVlbiAob3RoZXJ3aXNlLCBpdCB0aGlua3MgaXQgaXMgaW5zaWRlIHdpbmRvdylcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kLXNjcmVlbi1pbnN0cnVjdGlvbnMtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBcblx0XHRcdGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdC8vYWxlcnQoXCJpbiBoYW5kbGVyLCBnYW1lOlwiICsgdGhpcy5nYW1lKVxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHRoaXMuZ2FtZS5sb2FkR2FtZSgpO1xuXG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG4gfSIsIi8qKiBcbiAqIEdhbWUuanNcbiAqIFRoZSBlbnRpcmUgR2FtZSBvYmplY3RcbiAqIEBpbmhlcml0cyBHYW1lUGllY2VcbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbi8vU2NyZWVuIGluaGVyaXRhbmNlXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcbmltcG9ydCBTdGFydFNjcmVlbiBmcm9tICcuL1N0YXJ0U2NyZWVuLmpzJztcbmltcG9ydCBHYW1lU2NyZWVuIGZyb20gJy4vR2FtZVNjcmVlbi5qcyc7XG5pbXBvcnQgRW5kU2NyZWVuIGZyb20gJy4vRW5kU2NyZWVuLmpzJztcblxuLy9JbmZvIGluaGVyaXRhbmNlXG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG5pbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9JZGVudGl0eS5qcyc7XG5pbXBvcnQgSW5zdHJ1Y3Rpb25zIGZyb20gJy4vSW5zdHJ1Y3Rpb25zLmpzJztcbmltcG9ydCBEeW5hbWljVGV4dCBmcm9tICcuL0R5bmFtaWNUZXh0LmpzJztcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlLmpzJztcblxuLy9DaGFyYWN0ZXIgaW5oZXJpdGFuY2VcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuaW1wb3J0IFRydW1wIGZyb20gJy4vVHJ1bXAuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcyc7XG5pbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcbmltcG9ydCBMaW9uIGZyb20gJy4vTGlvbi5qcyc7XG5pbXBvcnQgVGlnZXIgZnJvbSAnLi9UaWdlci5qcyc7XG5pbXBvcnQgQmVhciBmcm9tICcuL0JlYXIuanMnO1xuaW1wb3J0IEdvcmlsbGEgZnJvbSAnLi9Hb3JpbGxhLmpzJztcbmltcG9ydCBIZWFsdGggZnJvbSAnLi9IZWFsdGguanMnO1xuXG4vL0FyZWEgaW5oZXJpdGFuY2UuXG5pbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuaW1wb3J0IENhZ2UgZnJvbSAnLi9DYWdlLmpzJztcbmltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4vQW5pbWFsQXJlYS5qcyc7XG5pbXBvcnQgUGxheWVyQXJlYSBmcm9tICcuL1BsYXllckFyZWEuanMnO1xuXG4vLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcbmltcG9ydCBDb2xsaWRlciBmcm9tICcuL0NvbGxpZGVyLmpzJztcbmltcG9ydCBTb3VuZGVyIGZyb20gJy4vU291bmRlci5qcyc7XG4vLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBHYW1lUGllY2Uge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblxuXHRcdHN1cGVyKGNvbmZpZyk7XG5cblx0XHQvL2dhbWUgY29weXJpZ2h0XG5cdFx0dGhpcy53YXJuaW5nID0gJ1RoaXMgZ2FtZSBiZWxvbmdzIHRvIHVzLCBhbmQgbm9ib2R5IGVsc2UuJztcblxuXHRcdC8vZ2FtZSByZXZlcnRzIHRvIFN0YXJ0U2NyZWVuIGlmIHVucGxheWVkXG5cdFx0dGhpcy5USU1FT1VUID0gNTU1NTtcblxuXHRcdC8vIGRlZmluZSBJZCBsaW5rIHRvIERPTVxuXHRcdHRoaXMuU1RBUlRfU0NSRUVOX0lEID0gJ3N0YXJ0LXNjcmVlbic7XG5cdFx0dGhpcy5HQU1FX1NDUkVFTl9JRCA9ICdnYW1lLXNjcmVlbic7XG5cdFx0dGhpcy5FTkRfU0NSRUVOX0lEID0gJ2VuZC1zY3JlZW4nO1xuXG5cdFx0Ly8gbW9kZWwgc3RvcmFnZSwgc2NyZWVuc1xuXHRcdHRoaXMuc2NyZWVucyA9IFtdO1xuXG5cdFx0Ly8gbW9kZWwgc3RvcmFnZSwgZHluYW1pYyBjaGFyYWN0ZXJzXG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycyA9IFtdO1xuXG5cdFx0Ly8gaW5pdGlhbGl6ZSBnYW1lLCBsb2FkIHN0YXJ0IHNjcmVlblxuXHRcdHRoaXMuaW5pdCgpO1xuXG5cdH0gLy9lbmQgb2YgY29uc3RydWN0b3JcblxuXHRpbml0ICgpIHtcblxuXHRcdC8vIEdyYWIgdGhlIEhUTUwgc2NyZWVuIGVsZW1lbnRzIGFuZCBlbmNhcHN1bGF0ZSBpbiBhIFNjcmVlbiBjbGFzc1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLlNUQVJUX1NDUkVFTl9JRF0gPSBuZXcgU3RhcnRTY3JlZW4oe25hbWU6ICdTdGFydCBTY3JlZW4nLCBpZDogdGhpcy5TVEFSVF9TQ1JFRU5fSUQsIGdhbWU6IHRoaXN9KTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5HQU1FX1NDUkVFTl9JRF0gPSBuZXcgR2FtZVNjcmVlbih7bmFtZTogJ0dhbWUgU2NyZWVuJywgaWQ6IHRoaXMuR0FNRV9TQ1JFRU5fSUQsIGdhbWU6IHRoaXN9KTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5FTkRfU0NSRUVOX0lEXSA9IG5ldyBFbmRTY3JlZW4oe25hbWU6ICdFbmQgU2NyZWVuJywgaWQ6IHRoaXMuRU5EX1NDUkVFTl9JRCwgZ2FtZTogdGhpc30pO1xuXG5cdFx0Ly8gbG9hZCB0aGUgY2FudmFzXG5cdFx0dGhpcy5sb2FkQ2FudmFzKCk7XG5cblx0XHQvLyBtYWtlIHRoZSBzdGFydCBzY3JlZW4gdmlzaWJsZVxuXHRcdHRoaXMubG9hZEdhbWUoKTtcblx0fVxuXG5cdC8vIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgSFRNTDUgY2FudmFzIGNvbnRleHRcblx0bG9hZENhbnZhcyAoKSB7XG5cdFx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZS1zY3JlZW4tYXJlbmEgY2FudmFzJyk7XG5cdFx0dGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHR9XG5cblx0LyoqIFxuXHQgKiBMb2FkIENoYXJhY3RlcnNcblx0ICogZHluYW1pYyBDaGFyYWN0ZXJzIChlLmcuIHRob3NlIHRoYXQgYW5pbWF0ZSkgYXJlIGxvYWRlZCBieSBHYW1lLiBcblx0ICogT3RoZXIgc3RhdGljIHZpc3VhbCBvYmplY3RzIGFyZSBsb2FkZWQgYnkgU2NyZWVuIGNsYXNzZXMuXG5cdCAqL1xuXHRsb2FkUGxheWVycyAoKSB7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IFBsYXllcihcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdQbGF5ZXInLCBwb3NpdGlvbjoge3RvcDogNTEwLCBsZWZ0OiAyMDB9LFxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvcGxheWVycy9wbGF5ZXIucG5nJyxcblx0XHRcdFx0XHRnYW1lOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXHR9XG5cblx0bG9hZEFuaW1hbHMgKCkge1xuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcblx0XHRcdG5ldyBMaW9uKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ0xpb24nLCBcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMTUsIGxlZnQ6IDk0fSxcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvbGlvbi5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IFRpZ2VyKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ1RpZ2VyJywgXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDE1LCBsZWZ0OiAzMzN9LFxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvYW5pbWFscy90aWdlci5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IEJlYXIoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnQmVhcicsIHBvc2l0aW9uOiB7dG9wOiAxNSwgbGVmdDogNTcwfSxcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvYmVhci5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IEdvcmlsbGEoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnR29yaWxsYScsIHBvc2l0aW9uOiB7dG9wOiAxNSwgbGVmdDogODEyfSxcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvZ29yaWxsYS5wbmcnLFxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cblx0fVxuXG5cdGxvYWRUcnVtcHMgKCkge1xuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcblx0XHRcdG5ldyBUcnVtcChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdUcnVtcCcsIHBvc2l0aW9uOiB7dG9wOiA0NTAsIGxlZnQ6IDIwMH0sXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy90cnVtcHMvdHJ1bXAucG5nJyxcblx0XHRcdFx0XHRnYW1lOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXG5cdH1cblxuXHRsb2FkR2FtZSAoKSB7XG5cblx0XHQvL2xvYWQgSW5mbyBhc3NldHNcblxuXHRcdGNvbnNvbGUubG9nKCdsb2FkaW5nIHNwbGFzaCBzY3JlZW4nKTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5FTkRfU0NSRUVOX0lEXS5oaWRlU2NyZWVuKClcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5TVEFSVF9TQ1JFRU5fSURdLnNob3dTY3JlZW4oKTtcblx0fVxuXG5cdHN0YXJ0R2FtZSAoKSB7XG5cblx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcblx0XHQvL2xvYWQgYXVkaW8gc2FtcGxlc1xuXHRcdHRoaXMuc291bmRQb29sID0gbmV3IFNvdW5kZXIoKTtcblx0XHR0aGlzLnNvdW5kUG9vbC5hZGRTb3VuZCgna2ljaycsIDAuNyk7XG5cdFx0dGhpcy5zb3VuZFBvb2wuYWRkU291bmQoJ2xpb24nLCAwLjcpO1xuXHRcdHRoaXMuc291bmRQb29sLmFkZFNvdW5kKCd0aWdlcicsIDAuNyk7XG5cdFx0dGhpcy5zb3VuZFBvb2wuYWRkU291bmQoJ2JlYXInLCAwLjcpO1xuXHRcdHRoaXMuc291bmRQb29sLmFkZFNvdW5kKCdnb3JpbGxhJywgMC43KTtcblx0XHR3aW5kb3cuc291bmRQb29sID0gdGhpcy5zb3VuZFBvb2w7XG5cdFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxuXG5cdFx0Ly9sb2FkIENoYXJhY3RlcnNcblx0XHR0aGlzLmxvYWRBbmltYWxzKCk7XG5cdFx0dGhpcy5sb2FkUGxheWVycygpO1xuXHRcdHRoaXMubG9hZFRydW1wcygpO1xuXG5cdFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG5cdFx0dGhpcy5jb2xsaWRlciA9IG5ldyBDb2xsaWRlcih0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzKTtcblx0XHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cblx0XHQvL21ha2UgR2FtZVNjcmVlbiB2aXNpYmxlXG5cblx0XHQvLyBpbml0aWFsaXplIGVsYXBzZWQgdGltZVxuXHRcdHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcblxuXHRcdC8vIHNob3cgR2FtZVNjcmVlbiwgaGlkZSBvdGhlcnNcblx0XHRjb25zb2xlLmxvZygnc3RhcnRpbmcgZ2FtZScpO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLlNUQVJUX1NDUkVFTl9JRF0uaGlkZVNjcmVlbigpO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkVORF9TQ1JFRU5fSURdLmhpZGVTY3JlZW4oKTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5HQU1FX1NDUkVFTl9JRF0uc2hvd1NjcmVlbigpO1xuXHRcdHRoaXMuZ2FtZUxvb3AoKTtcblx0fVxuXG5cdGVuZEdhbWUgKCkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2VuZGluZyBnYW1lJyk7XG5cblx0XHQvLyByZXNldCB0aW1lclxuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcblxuXHRcdC8vIHR1cm4gb2ZmIGFuaW1hdGlvblxuXHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2xvYmFsSWQpO1xuXHRcdHRoaXMuZ2xvYmFsSWQgPSBudWxsO1xuXG5cdFx0Ly8gZ28gdG8gZW5kIHNjcmVlblxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkdBTUVfU0NSRUVOX0lEXS5oaWRlU2NyZWVuKCk7XG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuRU5EX1NDUkVFTl9JRF0uc2hvd1NjcmVlbigpO1xuXHR9XG5cblx0ZWxhcHNlZCAoKSB7XG5cblx0XHQvLyByZWNvcmQgdGltZSB3ZSBoYXZlIGJlZW4gaW4gZ2FtZUxvb3Bcblx0XHR0aGlzLmVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG5cdFx0Ly8gdGltZSBkaWZmZXJlbmNlIGluIG1zXG5cblx0XHR2YXIgdGltZURpZmYgPSAodGhpcy5lbmRUaW1lIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMDtcblxuXHRcdC8vIGdldCBzZWNvbmRzIChPcmlnaW5hbCBoYWQgJ3JvdW5kJyB3aGljaCBpbmNvcnJlY3RseSBjb3VudHMgMDoyOCwgMDoyOSwgMTozMCAuLi4gMTo1OSwgMTowKVxuXHRcdHJldHVybiBNYXRoLnJvdW5kKHRpbWVEaWZmICUgNjApO1xuXHR9XG5cblx0Y2hlY2tJZkNvbXBsZXRlICgpIHtcblxuXHRcdC8vIGdhbWUgbG9naWMgdG8gc2VlIGlmIHRoZSBnYW1lIHNob3VsZCByZXNldFxuXHRcdC8vLy8vLy8vLy8vLy9jb25zb2xlLmxvZygnRUxBUFNFRDonICsgdGhpcy5lbGFwc2VkKCkpO1xuXG5cdFx0aWYgKHRoaXMuZWxhcHNlZCgpID4gdGhpcy5USU1FT1VUKSB7XG5cdFx0XHQvLyBpZiBpZGxlIHRvbyBsb25nLCByZXNldCBnYW1lIHRvIHN0YXJ0XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR1cGRhdGUgKCkge1xuXG5cdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuZGlzcGxheUNoYXJhY3RlcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblxuXHRcdFx0dmFyIGNoYXJhY3RlciA9IHRoaXMuZGlzcGxheUNoYXJhY3RlcnNbaV07XG5cblx0XHRcdHN3aXRjaCAoY2hhcmFjdGVyLmdldENsYXNzKCkpIHtcblx0XHRcdFx0Y2FzZSAnUGxheWVyJzpcblx0XHRcdFx0Y2FzZSAnVHJ1bXAnOlxuXHRcdFx0XHRjYXNlICdMaW9uJzpcblx0XHRcdFx0Y2FzZSAnVGlnZXInOlxuXHRcdFx0XHRjYXNlICdCZWFyJzpcblx0XHRcdFx0Y2FzZSAnR29yaWxsYSc6XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNoYXJhY3Rlci51cGRhdGUoKTtcblx0XHR9XG5cdH1cblxuXHRkcmF3ICgpIHtcblxuIFx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcblx0XHR0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuIFx0XHQvLyBFTkQgQURERUQgV0VFSyAxMTw8PDw8PDw8PDw8PDxcblx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVyc1tpXS5kcmF3KHRoaXMuY29udGV4dCk7XG5cdFx0fVxuXHR9XG5cblx0Z2FtZUxvb3AgKCkge1xuXHRcdFxuXHRcdGlmICh0aGlzLmNoZWNrSWZDb21wbGV0ZSgpKSB7XG5cdFx0XHR0aGlzLmVuZEdhbWUoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0XHR0aGlzLmRyYXcoKTtcblx0XHRcblx0XHQvL2NvbnNvbGUubG9nKCdsb29waW5nLi4uJylcblx0XHR0aGlzLmdsb2JhbElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3AuYmluZCh0aGlzKSk7XG5cdH1cblxufSIsIi8qKiBcbiAqIEdhbWVQaWVjZS5qc1xuICogQmFzaWMgR2FtZSBvYmplY3RcbiAqXG4gKiBUbyBtYWtlIHRoaXMgd29yaywgeW91IG11c3QgYmUgcnVubmluZyB0aGUgQmFiZWwgdHJhbnNwaWxlciwgXG4gKiBhbmQgd2F0Y2hpbmcgZm9yIGNoYW5nZXMgaW4gdGhpcyBmaWxlIHdpdGggYnJvd3NlcmlmeS4gVHdvIFxuICogVGVybWluYWwgd2luZG93cyBuZWVkIHRvIGJlIG9wZW46XG4gKiAxLiBvbmUgd2luZG93IHdoZXJlIHlvdSB0eXBlZCB0aGUgY29tbWFuZCBcImdydW50XCJcbiAqIDIuIG9uZSB3aW5kb3cgd2hlcmUgeW91IHR5cGVkIHRoZSBjb21tYW5kIFwibnBtIHN0YXJ0XCJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBpZWNlIHtcblxuICAgIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICAgICAgLy9UT0RPOiB1c2Ugc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgICAgIHRoaXMudXVpZCA9IHRoaXMuc2V0SWQoKTtcbiAgICAgICAgdGhpcy5yZWFkeSA9IHRydWU7IC8vIGNoYW5nZSB0byBmYWxzZSBmb3IgZGVmZXJyZWQgbG9hZHNcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogU2V0IGEgcG9zaXRpb24gZm9yIHRoZSBvYmplY3QsIGFsc28gdGhlIHBvc2l0aW9uIG9mIHRoZSBcbiAgICAgKiBET00gcmVwcmVzZW50YXRpb24gb2YgdGhlIG9iamVjdFxuICAgICAqL1xuICAgIHNldERPTVBvc2l0aW9uIChwb3NpdGlvbikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIGlmICh0aGlzLmRvbSkge1xuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUudG9wID0gcG9zaXRpb24udG9wICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuZG9tLnN0eWxlLmxlZnQgPSBwb3NpdGlvbi5sZWZ0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBTZXQgdGhlIG9iamVjdCBzaXplLCBhbHNvIGl0cyBET00gc2l6ZVxuICAgICAqL1xuICAgIHNldERPTVNpemUgKHNpemUpIHtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgaWYgKHRoaXMuZG9tKSB7XG4gICAgICAgICAgICB0aGlzLmRvbS5zdHlsZS53aWR0aCA9IHNpemUud2lkdGggKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQgKyAncHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEdlbmVyYXRlIGEgdW5pcXVlIElEIGZvciBldmVyeSBnYW1lIG9iamVjdC5cbiAgICAgKiBAbGluayBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNTAzNC9jcmVhdGUtZ3VpZC11dWlkLWluLWphdmFzY3JpcHRcbiAgICAgKi9cbiAgICBzZXRJZCAoKSB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy91c2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSoxNiklMTYgfCAwO1xuICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZC8xNik7XG4gICAgICAgICAgICByZXR1cm4gKGM9PSd4JyA/IHIgOiAociYweDN8MHg4KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIFJldHVybiB0aGUgZ2l2ZW4gbmFtZSBvZiB0aGlzIG9iamVjdFxuICAgICAqL1xuICAgIGdldE5hbWUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiByZXR1cm4gdGhlIGNsYXNzIG9mIHRoZSBvYmplY3RcbiAgICAgKi9cbiAgICBnZXRDbGFzcyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIFJldHVybiB0aGUgdW5pcXVlIGlkIG9mIHRoaXMgb2JqZWN0LlxuICAgICAqL1xuICAgIGdldElkICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXVpZDtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogR2V0IHRoZSBlbmNsb3NpbmcgYm94IG91dHNpZGUgdGhlIG9iamVjdCBmb3IgZXh0ZXJuYWwgY29sbGlzaW9uc1xuICAgICAqL1xuICAgIGdldENvbGxpc2lvblJlY3QgKCkge1xuXG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEdldCB0aGUgaW50ZXJuYWwgYm94IHdoZW4gdGhpcyBvYmplY3QgYWN0cyBhcyBhIGNvbnRhaW5lciBmb3IgYW5vdGhlclxuICAgICAqL1xuICAgIGdldEJvdW5kc1JlY3QgKCkge1xuXG4gICAgfVxuXHRcblx0LyoqIFxuXHQgKiBHZW5lcmljICdyZWFkeScgZnVuY3Rpb24gKGUuZy4gZm9yIGRlbGF5ZWQgYXNzZXQgbG9hZHMpXG5cdCAqL1xuXHRzZXRSZWFkeSAodmFsKSB7XG5cdFx0dGhpcy5yZWFkeSA9IHZhbDtcblx0fVxuXG4gICAgLyoqIFxuICAgICAqIEdlbmVyaWMgdXBkYXRlIChvdmVycmlkZSlcbiAgICAgKi9cbiAgICB1cGRhdGUgKCkge1xuXG4gICAgfVxuXG4gICAgIC8qKiBcbiAgICAgICogZ2VuZXJpYyBkcmF3IChvdmVycmlkZSlcbiAgICAgICovXG4gICAgZHJhdyAoKSB7XG5cbiAgICB9XG59XG5cblxuIiwiLyoqIFxuICogR2FtZVNjcmVlbi5qc1xuICogTWFpbiBnYW1lIHNjcmVlbiBvYmplY3RcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIFNjcmVlblxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuIGltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4vQW5pbWFsQXJlYS5qcyc7XG4gaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi9QbGF5ZXJBcmVhLmpzJztcbiBpbXBvcnQgQ2FnZSBmcm9tICcuL0NhZ2UuanMnO1xuXG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuXG4gXHRcdHRoaXMuY2FnZXMgPSBbXTtcbiBcdFx0dGhpcy5hbmltYWxBcmVhcyA9IFtdO1xuIFx0XHR0aGlzLnBsYXllckFyZWFzID0gW107XG5cbiBcdFx0Ly9HYW1lU2NyZWVuIHNob3VsZCBoaWRlIGl0cyBsb2NhbCBoZWFkZXIgYW5kIGZvb3RlclxuIFx0XHR0aGlzLmhpZGVIZWFkZXIoKTtcbiBcdFx0dGhpcy5oaWRlRm9vdGVyKCk7XG5cbiBcdFx0Ly8gbG9hZCB0aGUgYmFja2dyb3VuZCBpbWFnZVxuIFx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kKCdpbWcvc2NyZWVucy9nYW1lLXNjcmVlbi5wbmcnKTtcblxuIFx0XHQvLyBnZXQgdGhlIHNlY3Rpb24gdGhhdCBoYXMgdGhlIGNhbnZhcyBmb3Igb3ZlcmxheVxuIFx0XHR2YXIgYXJlbmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1zY3JlZW4tYXJlbmEnKTtcblxuIFx0XHQvLyBsb2FkIHN1Yi1vYmplY3RzIGludG8gdGhlIEFyZW5hXG4gXHRcdHRoaXMuY2FnZXMgICA9IHRoaXMubG9hZENhZ2VzKGFyZW5hLCAnaW1nL2FyZWFzL2NhZ2UucG5nJyk7XG4gXHRcdHRoaXMuYW5pbWFsQXJlYSA9IHRoaXMubG9hZEFuaW1hbEFyZWEoKTtcbiBcdFx0dGhpcy5wbGF5ZXJBcmVhID0gdGhpcy5sb2FkUGxheWVyQXJlYSgpO1xuXG4gXHR9XG5cbiBcdGxvYWRDYWdlcyAoY29udGFpbmVyLCBpbWdQYXRoKSB7XG4gXHRcdC8vIGxvYWQgNCBDYWdlc1xuIFx0XHR0aGlzLmNhZ2VzLnB1c2goXG4gXHRcdFx0bmV3IENhZ2UoXG4gXHRcdFx0XHR7XG4gXHRcdFx0XHRcdG5hbWU6ICdsaW9uLWNhZ2UnLCBcbiBcdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDcwfSwgXG4gXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSwgXG4gXHRcdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcbiBcdFx0XHRcdFx0cGF0aDogaW1nUGF0aFxuIFx0XHRcdFx0fVxuIFx0XHRcdClcbiBcdFx0KTtcblx0XHR0aGlzLmNhZ2VzLnB1c2goXG5cdFx0XHRuZXcgQ2FnZShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICd0aWdlci1jYWdlJywgXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDMxMH0sIFxuXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSwgXG5cdFx0XHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsIFxuXHRcdFx0XHRcdHBhdGg6IGltZ1BhdGhcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5jYWdlcy5wdXNoKFxuXHRcdFx0bmV3IENhZ2UoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnYmVhci1jYWdlJywgXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDU1MH0sIFxuXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSxcblx0XHRcdFx0XHRjb250YWluZXI6IGNvbnRhaW5lciwgXG5cdFx0XHRcdFx0cGF0aDogaW1nUGF0aFxuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcblx0XHR0aGlzLmNhZ2VzLnB1c2goXG5cdFx0XHRuZXcgQ2FnZShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdnb3JpbGxhLWNhZ2UnLCBcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMCwgbGVmdDogNzkwfSwgXG5cdFx0XHRcdFx0c2l6ZToge3dpZHRoOiAxMDAsIGhlaWdodDoxMDB9LFxuXHRcdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcblx0XHRcdFx0XHRwYXRoOiBpbWdQYXRoXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuIFx0fVxuXG4gXHRsb2FkQW5pbWFsQXJlYSAoKSB7XG4gXHRcdC8vIGxvYWQgQW5pbWFsIG1vdmVtZW50IGFyZWFcbiBcdFx0dGhpcy5hbmltYWxBcmVhcy5wdXNoKFxuIFx0XHRcdG5ldyBBbmltYWxBcmVhKFxuIFx0XHRcdFx0e1xuIFx0XHRcdFx0XHRuYW1lOiAnWm9vJywgXG4gXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAxMDQsIGxlZnQ6IDZ9LCBcbiBcdFx0XHRcdFx0c2l6ZToge3dpZHRoOiA5NzAsIGhlaWdodDogNDEwfSxcbiBcdFx0XHRcdFx0Y29udGFpbmVyOiB0aGlzLmRvbSwgXG4gXHRcdFx0XHRcdHBhdGg6IG51bGxcbiBcdFx0XHRcdH1cbiBcdFx0XHQpXG4gXHRcdCk7XG4gXHR9XG5cbiBcdGxvYWRQbGF5ZXJBcmVhICgpIHtcbiBcdFx0Ly8gbG9hZCB0aGUgUGxheWVyXG4gXHRcdHRoaXMucGxheWVyQXJlYXMucHVzaChcbiBcdFx0XHRuZXcgUGxheWVyQXJlYShcbiBcdFx0XHRcdHtcbiBcdFx0XHRcdFx0bmFtZTogJ1BsYXllciBBcmVhJywgXG4gXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiA1MTQsIGxlZnQ6IDZ9LCBcbiBcdFx0XHRcdFx0c2l6ZToge3dpZHRoOiA5NzAsIGhlaWdodDogMTAwfSxcbiBcdFx0XHRcdFx0Y29udGFpbmVyOiB0aGlzLmRvbSwgXG4gXHRcdFx0XHRcdHBhdGg6IG51bGxcbiBcdFx0XHRcdH1cbiBcdFx0XHQpXG4gXHRcdCk7XG4gXHR9XG5cbiB9XG5cbiIsIi8qKiBcbiAqIEdvcmlsbGEuanNcbiAqIEEgR29yaWxsYSwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvcmlsbGEgZXh0ZW5kcyBBbmltYWwge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuIFx0fVxuIH0iLCIvKiogXG4gKiBIZWFsdGguanNcbiAqIFRoZSBjcml0dGVycyB0aGF0IFRydW1wIHRyaWVzIHRvIHN0b3AgZnJvbSBnZXR0aW5nIHRoZSBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhbHRoIGV4dGVuZHMgQ2hhcmFjdGVyIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcbiBcdH1cblxuIH0iLCIvKiogXG4gKiBJZGVudGl0eS5qc1xuICogR2FtZSBMb2dvcywgTG9nb1R5cGVzLCBCcmFuZCBOYW1lXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElkZW50aXR5IGV4dGVuZHMgU3RhdGljSW1hZ2Uge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXG5cdFx0dGhpcy5zZXRTb3VyY2UoY29uZmlnLnNvdXJjZSk7XG5cdFx0dGhpcy5zZXRBdXRob3IoY29uZmlnLmF1dGhvcik7XG5cdFx0dGhpcy5sb2FkSW1hZ2VUb0RPTShjb25maWcuZG9tSWQsIGNvbmZpZy5wYXRoKTtcblxuXHRcdC8vSGlkZSBhbnkgPGgyPiB0ZXh0IGVxdWl2YWxlbnQgb2YgaWRlbnRpdHkgaW4gdGhpcyBDU1MgYm94XG5cdFx0dmFyIHRleHRJZGVudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgY29uZmlnLmRvbUlkICsgJyBoMicpO1xuXHRcdHRleHRJZGVudGl0eS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR9XG5cbn1cbiIsIi8qKiBcbiAqIFN0YXRpY0ltYWdlLmpzXG4gKiBJbWFnZS1zdHlsZSBJbmZvcm1hdGlvbiB0aGF0IGNhbm5vdCBiZSBjaGFuZ2VkIG9uY2UgdGhlIGdhbWUgaXMgbG9hZGVkXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIEluZm8ge1xuXG5cdC8vIHNhdmUgc2NvcGVcblx0Ly8gVE9ETzogcmVmYWN0b3Igd2l0aCBhcnJvdyBmdW5jdGlvblxuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXHRcdHRoaXMucmVhZHkgPSBmYWxzZTsgLy9vdmVyLXJpZGUgR2FtZVBpZWNlIGFuZCBpbmZvIHdpdGggZGVmZXJyYWxzXG5cdFx0dGhpcy5pbWFnZSA9IG51bGw7XG5cdFx0dGhpcy5wYXRoID0gY29uZmlnLnBhdGg7XG5cdFx0dGhpcy5hdXRob3IgPSBjb25maWcuYXV0aG9yO1xuXHRcdHRoaXMuc291cmNlID0gY29uZmlnLnNvdXJjZTtcblx0fVxuXG5cdC8vIGxvYWQgYW4gaW1hZ2Vcblx0bG9hZCAocGF0aCwgY2FsbGJhY2spIHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0dGhhdC5zZXRSZWFkeShmYWxzZSk7XG5cdFx0Y29uc29sZS5sb2coJ2VudGVyaW5nIGxvYWQgaW5JbWFnZScpO1xuXHRcdHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRpbWcuc3JjID0gcGF0aDtcblx0XHRpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc29sZS5sb2codGhhdC5uYW1lICsgJyBpbWFnZSBsb2FkZWQgZnJvbTonICsgcGF0aCArICcgdzonICsgaW1nLndpZHRoICsgJyBoOicgKyBpbWcuaGVpZ2h0KVxuXHRcdFx0dGhhdC5zZXRSZWFkeSh0cnVlKTtcblx0XHRcdHRoYXQuZGF0YSA9IGltZztcblx0XHRcdFxuXHRcdFx0aWYoY2FsbGJhY2spIHtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2Vycm9yIGxvYWRpbmcgaW1nIGZyb206JyArIHBhdGgpO1xuXHRcdH1cblx0fVxuXG5cdC8vIGxvYWQgaW1hZ2UsIGFwcGVuZCB0byBleGlzdGluZyBET00gZWxlbWVudFxuXHQvLyBOT1RFOiB0aGlzIGlzIG92ZXItd3JpdHRlbiBpbiBDaGFyYWN0ZXIuanMsIHdoaWNoIGxvYWRzIGltYWdlcyBpbnRvIENhbnZhc1xuXHRsb2FkSW1hZ2VUb0RPTSAoZG9tSWQsIHBhdGgsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdHRoaXMubG9hZChwYXRoLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZm9yZWdyb3VuZCBpbWFnZSAnICsgcGF0aCArICcgbG9hZGVkJylcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvbUlkKS5hcHBlbmRDaGlsZCh0aGF0LmRhdGEpO1xuXHRcdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0fVxuXG5cdC8vIGxvYWQgaW1hZ2UgYXMgYSBDU1MgYmFja2dyb3VuZCBpbWFnZSBpbnRvIGV4aXN0aW5nIERPTSBlbGVtZW50LiBcblx0Ly8gTk9URTogbm8gbG9jYWwgcmVmZXJlbmNlIHRvIGltYWdlIGluIHRoaXMgY2FzZVxuXHRsb2FkQmFja2dyb3VuZEltYWdlIChjb250YWluZXIsIHBhdGgsIGNhbGxiYWNrKSB7XG5cdFx0Y29uc29sZS5sb2coJ2xvYWRpbmcgYmFja2dyb3VuZCBpbWFnZTonICsgcGF0aClcblx0XHRjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlPSd1cmwoJyArIHBhdGggKyAnKSc7XG5cdFx0dGhpcy5zZXRSZWFkeSh0cnVlKTtcblx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gRHJhdyB0aGUgaW1hZ2UgdG8gYSBzdXBwbGllZCBjYW52YXMgY29udGV4dFxuXHRkcmF3VG9DYW52YXMgKGNvbnRleHQsIHBvc2l0aW9uLCBzaXplKSB7XG5cdFx0Y29udGV4dC5kcmF3SW1hZ2UoaW1nLCBwb3NpdGlvbi50b3AsIHBvc2l0aW9uLmxlZnQsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcblx0fVxuXG5cdC8vIERyYXcgdG8gdGhlIERPTS4gQXNzdW1lIHRoZSBJbWFnZSB3YXMgYWxyZWFkeSBhdHRhY2hlZCB0byB0aGUgRE9NXG5cdGRyYXdUb0RPTSAocG9zaXRpb24sIHNpemUpIHtcblx0XHR0aGlzLmltYWdlLnN0eWxlLnRvcCA9IHBvc2l0aW9uLnRvcDtcblx0XHR0aGlzLmltYWdlLnN0eWxlLmxlZnQgPSBwb3NpdGlvbi5sZWZ0O1xuXHRcdHRoaXMuaW1hZ2Uuc3R5bGUud2lkdGggPSBzaXplLndpZHRoO1xuXHRcdHRoaXMuaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XG5cdH1cblxufVxuIiwiLyoqIFxuICogSW5mby5qc1xuICogR2VuZXJpYyBpbmZvcm1haXRvbiBvYmplY3RcbiAqIEBpbmhlcml0cyBHYW1lUGllY2VcbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm8gZXh0ZW5kcyBHYW1lUGllY2Uge1xuXG5cdGNvbnN0cnVjdG9yKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cdH1cblxuXHRzZXRBdXRob3IgKGF1dGhvcikge1xuXHRcdHRoaXMuYXV0aG9yID0gYXV0aG9yO1xuXHR9XG5cblx0c2V0U291cmNlIChzb3VyY2UpIHtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0fVxuXG59IiwiLyoqIFxuICogSW5zdHJ1Y3Rpb25zLmpzXG4gKiBUZXh0IHdoaWNoIHRlbGxzIHRoZSBQbGF5ZXIgaG93IHRvIHBsYXkgdGhlIGdhbWUuXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG4gaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdHJ1Y3Rpb25zIGV4dGVuZHMgU3RhdGljVGV4dCB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cdH1cbn1cbiIsIi8qKiBcbiAqIExpb24uanNcbiAqIEEgTGlvbiwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExpb24gZXh0ZW5kcyBBbmltYWwge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuIFx0fVxuIH0iLCIvKiogXG4gKiBAY2xhc3MgTW92ZXJcbiAqIEBkZXNjcmlwdGlvbiB1cGRhdGUgcG9zaXRpb24gb2Ygb2JqZWN0IGJlaW5nIGFuaW1hdGVkIGJ5IEdhbWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmVyIHtcblxuXHRjb25zdHJ1Y3RvciAoZ2FtZU9iaikge1xuXHRcdHRoaXMub2JqID0gZ2FtZU9iajtcblxuICAgICAgICAvLyBDaGFyYWN0ZXIgaGFzIHJlZmVyZW5jZSB0byBHYW1lXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWVPYmouZ2FtZTtcblxuICAgICAgICAvLyBNb3ZlbWVudCB0eXBlc1xuICAgICAgICB0aGlzLnR5cGUgPSAwO1xuICAgICAgICB0aGlzLlNMRVcgPSAxO1xuICAgICAgICB0aGlzLlJBTkRPTSA9IDI7XG4gICAgICAgIHRoaXMuUElOR1BPSU5HID0gMztcblxuICAgICAgICBpZiAoIXRoaXMuZ2FtZS5zb3VuZFBvb2wpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignbm8gc291bmRzIGluaXRpYWxpemVkLiBHYW1lIHdpbGwgcGxheSBzaWxlbnRseScpO1xuICAgICAgICB9XG5cblx0fVxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgdHJ1bmNhdG9yXG4gICAgICogQGRlc2NyaXB0aW9uIHRydW5jYXRlIChub3Qgcm91bmQpIG51bWJlciB0byBmaXhlZCBudW1iZXIgb2YgZGVjaW1hbHNcbiAgICAgKiBAcGFyYW0gTnVtYmVyIG51bSBmbG9hdGluZy1wb2ludCBudW1iZXJcbiAgICAgKiBAcGFyYW0gSW50ZWdlciBkZWNpbWFscyB0aGUgbnVtYmVyIG9mIGRlY2ltYWxzIHBvaW50cyB0byByb3VuZCB0b1xuICAgICAqIEByZXR1cm5zIE51bWJlciB0aGUgdHJ1bmNhdGVkIG51bWJlclxuICAgICAqL1xuICAgIHRydW5jYXRvciAobnVtLCBkZWNpbWFscykgeyAgICBcbiAgICAgICAgdmFyIG51bVBvd2VyID0gTWF0aC5wb3coMTAsIGRlY2ltYWxzKTsgLy8gXCJudW1Qb3dlckNvbnZlcnRlclwiIG1pZ2h0IGJlIGJldHRlclxuICAgICAgICByZXR1cm4gfn4obnVtICogbnVtUG93ZXIpL251bVBvd2VyO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBAbWV0aG9kIHJhbmRvbWl6ZXJcbiAgICAgKiBAZGVzY3JpcHRpb24gcmFuZG9taXplIGEgbnVtYmVyXG4gICAgICovXG4gICAgcmFuZG9taXplciAoKSB7XG4gICAgICAgIHZhciBkID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIChkID0gcGFyc2VJbnQoZCkgLSBkKTtcbiAgICAgICAgZCA9IHRoaXMudHJ1bmNhdG9yKGQsIDIpIC8gMTA7XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBAbWV0aG9kIGdldENlbnRlclxuICAgICAqL1xuICAgIGdldENlbnRlciAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogeCArICh3aWR0aC8yKSxcbiAgICAgICAgICAgIHk6IHkgKyAoaGVpZ2h0LzIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogQG1ldGhvZCBpbml0U2xld1xuICAgICAqIEBkZXNjcmlwdGlvbiBzbGV3IG9iamVjdCBob3Jpem9udGFsbHkgd2l0aCBrZXlwcmVzc2VzLiBBZGRzIGV2ZW50IFxuICAgICAqIGxpc3RlbmVycyBmb3Iga2V5ZG93biBhbmQga2V5dXAgZXZlbnRzLiBVc2VkIGZvciBcbiAgICAgKiBQbGF5ZXIgY2hhcmFjdGVycyBtb3ZpbmcgaG9yaXpvbnRhbGx5IGluIHRoZSBQbGF5ZXJBcmVhXG4gICAgICovXG5cdGluaXRTbGV3ICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQgU2xldyBtb3Rpb24nKTtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5TTEVXO1xuXG5cbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgIHRoaXMudGlja2VyID0gMDtcbiAgICAgICAgdGhpcy5sYXN0RGlyID0gMTtcblxuICAgICAgICAvLyBhZGQgYm90dG9tLCByaWdodCB0byBtYWtlIGEgUmVjdCBmb3IgdGhlIFBsYXllckFyZWFcbiAgICAgICAgdGhpcy5ib3VuZHMgPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5wbGF5ZXJBcmVhc1swXS5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5ib3VuZHMud2lkdGggPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5wbGF5ZXJBcmVhc1swXS5zaXplLndpZHRoO1xuICAgICAgICB0aGlzLmJvdW5kcy5oZWlnaHQgPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5wbGF5ZXJBcmVhc1swXS5zaXplLmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3VuZHMuYm90dG9tID0gdGhpcy5ib3VuZHMudG9wICsgdGhpcy5ib3VuZHMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdW5kcy5yaWdodCA9IHRoaXMuYm91bmRzLmxlZnQgKyB0aGlzLmJvdW5kcy53aWR0aDtcblxuICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5vYmouaW1hZ2U7XG5cbiAgICAgICAgLy8gdG9nZ2xlIHRoZSBwb3NpdGlvbiBvZiB0aGUgUGxheWVyIHdoZW4ga2lja2luZ1xuICAgICAgICB0aGlzLnVuS2ljayA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcbiAgICAgICAgdGhpcy5pbktpY2sgPSB0aGlzLm9iai5wb3NpdGlvbi50b3AgLSA2O1xuXG4gICAgICAgIC8vIE5PVEU6IFRydW1wIGlzIGFkZGVkIHRvIFBsYXllciBpbiBDb2xsaWRlclxuXG4gICAgICAgIC8vIGZsYWcgb3VyIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBsaXN0ZW4gZm9yIHVzZXIgZXZlbnRzXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBcbiAgICAgICAgICAgIGV2ZW50ID0+IHRoaXMuc2xldyhldmVudCksIGZhbHNlKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsXG4gICAgICAgICAgICBldmVudCA9PiB0aGlzLnVua2ljayhldmVudCksIGZhbHNlKTtcblx0fVxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgaW5pdFJhbmRvbVdhbGtcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdCByYW5kb20gbW90aW9ucyBhbG9uZyBhIHBhdGggZnJvbSB0aGUgXG4gICAgICogdG9wIHRvIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbi4gVXNlZCBmb3IgXG4gICAgICogQW5pbWFsIGNoYXJhY3RlcnMgbW92aW5nIHRocm91Z2ggdGhlIEFuaW1hbEFyZWEuXG4gICAgICogQHBhcmFtIE51bWJlciBwcmVmU3BlZWQgdGhlIHNwZWVkIG9mIG1vdmVtZW50XG4gICAgICogQHBhcmFtIFN0cmluZyBkaXJlY3Rpb24gdGhlIGRpcmVjdGlvbiB0aGUgQW5pbWFsIHVsdGltYXRlbHkgbW92ZXMsIFxuICAgICAqIC0gJ3RvcCc6IG92ZXJhbGwgbW92ZW1lbnQgdXAgdGhlIHNjcmVlblxuICAgICAqIC0gJ2xlZnQnOiBvdmVyYWxsIG1vdmVtZW50IHRvIHRoZSBzY3JlZW4gbGVmdFxuICAgICAqIC0gJ2JvdHRvbSc6IG92ZXJhbGwgbW92ZW1lbnQgdG8gdGhlIHNjcmVlbiBib3R0b20gKERFRkFVTFQpXG4gICAgICogLSAncmlnaHQnOiBvdmVyYWxsIG1vdmVtZW50IHRvIHRoZSBzY3JlZW4gcmlnaHRcbiAgICAgKiAtICdyZXR1cm4nOiByZXR1cm4gaW1tZWRpYXRlbHkgdG8gdGhlIENhZ2UgYXJlYVxuICAgICAqIC0gJ2NhZ2VkJzogc3RheSBpbiB0aGUgQ2FnZSBhcmVhXG4gICAgICovXG4gICAgaW5pdFJhbmRvbVdhbGsgKHByZWZTcGVlZCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0IFJhbmRvbVdhbGsnKTtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5SQU5ET007XG5cbiAgICAgICAgdGhpcy5zcGVlZCA9IHByZWZTcGVlZCAqIHRoaXMudGltZVN0YW1wUmFuZG9tKCk7XG4gICAgICAgIHRoaXMuZGVsYXkgPSB0aGlzLnRpbWVTdGFtcFJhbmRvbSgpICogMzAwO1xuICAgICAgICB0aGlzLm9iai5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgICAgIHRoaXMuZGVsYXlDb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5NQVggPSAzMDtcbiAgICAgICAgdGhpcy5NQVhfREVMQVkgPSAzMDA7XG5cbiAgICAgICAgLy8gb25lLXRpbWUgcGxheSBvZiBBbmltYWwgc291bmRcbiAgICAgICAgdGhpcy5maXJzdE1vdmUgPSB0cnVlO1xuXG4gICAgICAgIC8vIGFkZCBib3R0b20sIHJpZ2h0IHRvIG1ha2UgYSBSZWN0IGZvciB0aGUgQW5pbWFsQXJlYVxuICAgICAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLmJvdW5kcy53aWR0aCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnNpemUud2lkdGg7XG4gICAgICAgIHRoaXMuYm91bmRzLmhlaWdodCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnNpemUuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdW5kcy5ib3R0b20gPSB0aGlzLmJvdW5kcy50b3AgKyB0aGlzLmJvdW5kcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm91bmRzLnJpZ2h0ID0gdGhpcy5ib3VuZHMubGVmdCArIHRoaXMuYm91bmRzLndpZHRoO1xuXG4gICAgICAgIC8vIHJlbWVtYmVyIHdoZXJlIHdlIHN0YXJ0ZWQgKGluIHRoZSBjYWdlKVxuICAgICAgICB0aGlzLnN0YXJ0VG9wID0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xuICAgICAgICB0aGlzLnN0YXJ0TGVmdCA9IHRoaXMub2JqLnBvc2l0aW9uLmxlZnQ7XG5cbiAgICAgICAgLy8gY2FjaGUgcG9zaXRpb24gZHVyaW5nIG5ldyByYW5kb20gbW92ZXNcbiAgICAgICAgdGhpcy5uZXdUb3AgPSAwLCB0aGlzLm5ld0xlZnQgPSAwO1xuXG4gICAgICAgIC8vIGdldCBib3R0b20gYW5kIHJpZ2h0IGZyb20gQ2hhcmFjdGVyIGZyb20gaXRzIEltYWdlXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLm9iai5pbWFnZTtcblxuICAgICAgICAvLyBmbGFnIG91ciBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgaW5pdFBpbmdQb25nXG4gICAgICogQGRlc2NyaXB0aW9uIGluaXQgYSBwaW5nLXBvbmcgc3R5bGUgbW90aW9uLiBVc2VkIGZvciBcbiAgICAgKiBUcnVtcCBjaGFyYWN0ZXJzIG1vdmluZyB0aHJvdWdoIHRoZSBBbmltYWxBcmVhLlxuICAgICAqL1xuICAgIGluaXRQaW5nUG9uZyAocHJlZlNwZWVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0IFBpbmdQb25nIG1vdGlvbicpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLlBJTkdQT05HO1xuXG4gICAgICAgIC8vQW5pbWFsIGFyZWFcbiAgICAgICAgLy8gYWRkIGJvdHRvbSwgcmlnaHQgdG8gbWFrZSBhIFJlY3QgZm9yIHRoZSBBbmltYWxBcmVhXG4gICAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10uYW5pbWFsQXJlYXNbMF0ucG9zaXRpb247XG4gICAgICAgIHRoaXMuYm91bmRzLndpZHRoID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10uYW5pbWFsQXJlYXNbMF0uc2l6ZS53aWR0aDtcbiAgICAgICAgdGhpcy5ib3VuZHMuaGVpZ2h0ID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10uYW5pbWFsQXJlYXNbMF0uc2l6ZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm91bmRzLmJvdHRvbSA9IHRoaXMuYm91bmRzLnRvcCArIHRoaXMuYm91bmRzLmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3VuZHMucmlnaHQgPSB0aGlzLmJvdW5kcy5sZWZ0ICsgdGhpcy5ib3VuZHMud2lkdGg7XG5cbiAgICAgICAgdGhpcy5vYmouc3RhcnRUb3AgPSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XG5cbiAgICAgICAgLy8gZ2V0IGJvdHRvbSBhbmQgcmlnaHQgZnJvbSBDaGFyYWN0ZXIgZnJvbSBpdHMgSW1hZ2VcbiAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMub2JqLmltYWdlO1xuXG4gICAgICAgIHRoaXMub2JqLnNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5vYmouZHggPSAwO1xuICAgICAgICB0aGlzLm9iai5keSA9IDA7XG5cbiAgICAgICAgLy8gTk9URTogQW5pbWFscyBhbmQgUGxheWVycyBhcmUgYWRkZWQgdG8gVHJ1bXAgaW4gQ29sbGlkZXJcblxuICAgICAgICAvLyBmbGFnIG91ciBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgfVxuXG5cdC8qKiBcblx0ICogQG1ldGhvZCBzbGV3IFxuXHQgKiBNb3ZlIG9iamVjdCBzbGlnaHRseSB1cCBmb3IgZHVyYXRpb24gb2Ygc3BhY2UgYmFyIHByZXNzZWQgZG93blxuICAgICAqIENhbGxiYWNrIGZvciBrZXlkb3duIGFkZEV2ZW50TGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gRXZlbnQgZSB0aGUga2V5ZG93biBldmVudFxuICAgICAqL1xuXHRzbGV3IChlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICB0aGlzLmtpY2soZSk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL3ByZXZlbnQgc2Nyb2xsXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQrKztcbiAgICAgICAgICAgICAgICB0aGlzLnRpY2tlciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdERpciA9IC0xO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy9wcmV2ZW50IHNjcm9sbFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkKys7XG4gICAgICAgICAgICAgICAgdGhpcy50aWNrZXIgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3REaXIgPSAxO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy9wcmV2ZW50IHNjcm9sbFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXHR9XG5cbiAgICAvKiogXG4gICAgICogQG1ldGhvZCB1cGRhdGVTbGV3XG4gICAgICogQGRlc2NyaXB0aW9uIG1vdmUgYmFjayBhbmQgZm9ydGggaG9yaXpvbnRhbGx5LCB3aXRoIGEgc2ltcGxlIGVhc2luZyBtb3Rpb25cbiAgICAgKiB3aGVuIGxlZnQgYW5kIHJpZ2h0IGFycm93IGtleXMgYXJlIHByZXNzZWQuIEhhbmRsZSBjb2xsaXNpb25zIHdpdGggdGhlIGxlZnQgXG4gICAgICogYW5kIHJpZ2h0IHdhbGxzIG9mIHRoZSBQbGF5ZXJBcmVhLlxuICAgICAqIENhbGwgaW4gYW4gdXBkYXRlIGZ1bmN0aW9uIGluc2lkZSB0aGUgQ2hhcmFjdGVyLCBlLmcuIFxuICAgICAqIHVwZGF0ZSAoKSB7IHVwZGF0ZVJhbmRvbVdhbGsoKTsgfVxuICAgICAqIFRoZSBtYWluIEdhbWUgb2JqZWN0IGF1dG9tYXRpY2FsbHkgZmluZHMgYW5kICdmaXJlcycgdXBkYXRlKCkgZnVuY3Rpb24gaW4gXG4gICAgICogYWxsIENoYXJhY3RlcnMuXG4gICAgICovXG4gICAgdXBkYXRlU2xldyAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pbml0ZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1BsYXllciBTbGV3IE5PVCBpbml0aWFsaXplZCAoZGlkIHlvdSBsZWF2ZSBvdXQgb2YgY29uc3RydWN0b3I/KScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGlja2VyKys7XG4gICAgICAgIGlmICh0aGlzLnNwZWVkID4gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGlja2VyID4gMTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkIC89IDI7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQgPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ICs9ICh0aGlzLmxhc3REaXIgKiB0aGlzLnNwZWVkKTtcblxuICAgICAgICAvL2NoZWNrIGJvdW5kc1xuICAgICAgICBpZiAodGhpcy5ib3VuZHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgdyA9IHRoaXMuaW1hZ2UuZGF0YS53aWR0aDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmoucG9zaXRpb24ubGVmdCA8IHRoaXMuYm91bmRzLmxlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0RGlyID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCAvPSAxLjI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPSB0aGlzLmJvdW5kcy5sZWZ0ICsgKHRoaXMuc3BlZWQgKiAxLjUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vYmoucG9zaXRpb24ubGVmdCA+IHRoaXMuYm91bmRzLnJpZ2h0IC0gdykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3REaXIgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCAvPSAxLjI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPSB0aGlzLmJvdW5kcy5yaWdodCAtIHcgLSAodGhpcy5zcGVlZCAqIDEuNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2Qga2lja1xuICAgICAqIEBkZXNjcmlwdGlvbiBpZiBmb290IGlzIG5lYXIgVHJ1bXAsIGtpY2sgaGltIGludG8gdGhlIEFuaW1hbFxuICAgICAqL1xuICAgIGtpY2sgKGUpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnOjo6OlRISVMgVFJVTVA6Ojo6OicgKyB0aGlzLm9iai50cnVtcClcbiAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wID0gdGhpcy5pbktpY2s7XG5cbiAgICAgICAgaWYgKCF0aGlzLm9iai50cnVtcCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6IG1pc3NpbmcgY29sbGlzaW9uIG1hdHJpeCAoZGlkIHlvdSBpbmNsdWRlIENvbGxpZGVyPyknKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNlZSBpZiB3ZSdyZSBjbG9zZSBlbm91Z2ggdG8ga2ljayBpbiB0aGUgeSBheGlzXG4gICAgICAgIHZhciB0cnVtcFlEaXN0ID0gdGhpcy5vYmoucG9zaXRpb24udG9wIC0gdGhpcy5vYmoudHJ1bXAuaW1hZ2UuZGF0YS53aWR0aCAtIHRoaXMub2JqLnRydW1wLnBvc2l0aW9uLnRvcDtcbiAgICAgICAgLy9jb25zb2xlLmxvZygndHJ1bXBZRGlzdDonICsgdHJ1bXBZRGlzdClcblxuICAgICAgICAvLyBJZiBQbGF5ZXIgaXMgY2xvc2UgaW4gWSwgYW5kIGluc2lkZSBYIHJhbmdlLCBraWNrIHRoZSBUcnVtcCBpbnRvIEFuaW1hbEFyZWFcbiAgICAgICAgaWYgKHRydW1wWURpc3QgPCAxMCkge1xuXG4gICAgICAgICAgICAvLyBzdGFydCB0aGUgVHJ1bXAgbW92aW5nLCBzcGVlZFxuICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuc3BlZWQgPSA0MDtcblxuICAgICAgICAgICAgLy8gaWYgdG9vIGNsb3NlIHRvIGxlZnQgd2FsbCwgcHJlLWFzc2lnbiBhIHZhbHVlXG4gICAgICAgICAgICBpZiAodGhpcy5vYmoudHJ1bXAucG9zaXRpb24ubGVmdCA8ICh0aGlzLmJvdW5kcy5sZWZ0ICsgMjApKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI+PlRydW1wOiBsZWZ0IGJvdW5kIGNvcnJlY3Rpb25cIilcbiAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keCA9IC0wLjI7XG4gICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHkgPSAwLjg7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb21wdXRlIGR4IGFuZCBkeSBmb3IgVHJ1bXBcbiAgICAgICAgICAgIHZhciBkaXN0ID0gKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgLSB0aGlzLm9iai50cnVtcC5wb3NpdGlvbi5sZWZ0KSAvIDUwO1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRpc3QpIDwgMS4wKSB7XG4gICAgICAgICAgICAgICAgdmFyIGR4ID0gZGlzdDtcbiAgICAgICAgICAgICAgICBpZihkeCA+IDAuMDAzICYmIGR4IDwgMC44KSB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHggPSBkeDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHkgPSAxLjAgLSBkeDtcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RhcnQgdGhlIGtpY2tpbmcgc291bmRcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGR4IDwgMCAmJiBkeCA+IC0wLjgpIHtcbiAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keCA9IGR4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keSA9IDEuMCArIGR4O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZHgpIDwgMC4wMDMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLnJhbmRvbWl6ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgZCA9IGQgLSB0aGlzLnJhbmRvbWl6ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHggPSBkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keSA9IDEuMCArIGR4O1xuICAgICAgICAgICAgICAgICAgICAvLyBzdGFydCB0aGUga2lja2luZyBzb3VuZFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHkgPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHN0YXJ0IHRoZSBraWNraW5nIHNvdW5kXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5zb3VuZFBvb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnNvdW5kUG9vbC5wbGF5U291bmQoJ2tpY2snKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gLy8gZW5kIG9mIGZ1bmN0aW9uXG5cbiAgICAvKiogXG4gICAgICogQG1ldGhvZCB1bmtpY2tcbiAgICAgKiBAZGVzY3JpcHRpb24gc2V0IHBvc2l0aW9uIG9mIFBsYXllciBiYWNrIHRvIG9yaWdpbmFsXG4gICAgICovXG4gICAgdW5raWNrIChlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPSB0aGlzLnVuS2ljaztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBAbWV0aG9kIHRpbWVTdGFtcFJhbmRvbVxuICAgICAqIEBkZXNjcmlwdGlvbiByYW5kb21pemUgaW4gYSAxMC1mb2xkIHJhbmdlIHVzaW5nIHdpbmRvdy5wZXJmb3JtYW5jZVxuICAgICAqL1xuXHR0aW1lU3RhbXBSYW5kb20gKCkge1xuXHRcdHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy91c2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXG4gICAgICAgIH1cblx0XHR2YXIgbnVtID0gJ3h4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpKjEwKSUxMCB8IDA7XG4gICAgICAgICAgICBkID0gTWF0aC5mbG9vcihkLzEwKTtcbiAgICAgICAgICAgIHJldHVybiAoYz09J3gnID8gciA6IChyJjB4M3wweDgpKS50b1N0cmluZygxMCk7XG4gICAgICAgIH0pO1xuICAgICAgcmV0dXJuIG51bSAvIDEwMDAwO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gbWluIChpbmNsdXNpdmUpIGFuZCBtYXggKGV4Y2x1c2l2ZSlcblx0ICogQGxpbmsgXG5cdCAqL1xuXHRnZXRSYW5kb20obWluLCBtYXgpIHtcbiAgIFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG5cdH1cblxuICAgIC8qKiBcbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVJhbmRvbVdhbGtcbiAgICAgKiBAZGVzY3JpcHRpb24gZ2VuZXJhdGUgYSByYW5kb20gd2Fsaywgd2l0aCBvbmUgcHJlZmVycmVkIGRpcmVjdGlvbiwgXG4gICAgICogZ2l2aW5nIHRoZSBtZWFuZGVyaW5nIG1vdGlvbiB1c2VkIGJ5IEFuaW1hbHMuIFxuICAgICAqIENhbGwgaW4gYW4gdXBkYXRlIGZ1bmN0aW9uIGluc2lkZSB0aGUgQ2hhcmFjdGVyLCBlLmcuIFxuICAgICAqIHVwZGF0ZSAoKSB7IHVwZGF0ZVJhbmRvbVdhbGsoKTsgfVxuICAgICAqIFRoZSBtYWluIEdhbWUgb2JqZWN0IGF1dG9tYXRpY2FsbHkgZmluZHMgYW5kICdmaXJlcycgdXBkYXRlKCkgZnVuY3Rpb24gaW4gXG4gICAgICogYWxsIENoYXJhY3RlcnMuXG4gICAgICovXG5cdHVwZGF0ZVJhbmRvbVdhbGsgKCkge1xuICAgICAgICBpZiAoIXRoaXMuaW5pdGVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBbmltYWwgUmFuZG9tV2FsayBOT1QgaW5pdGlhbGl6ZWQgKGRpZCB5b3UgbGVhdmUgb3V0IG9mIGNvbnN0cnVjdG9yPyknKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXHRcdHRoaXMuY291bnRlcisrO1xuXHRcdHRoaXMuZGVsYXlDb3VudGVyKys7XG5cdFx0aWYgKHRoaXMuZGVsYXlDb3VudGVyIDwgdGhpcy5kZWxheSkge1xuXHRcdFx0Ly9jb25zb2xlLmxvZygnZGVsYXlDb3VudGVyOicgKyB0aGlzLmRlbGF5Q291bnRlciArICcgTUFYOicgKyB0aGlzLk1BWF9ERUxBWSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG4gICAgICAgIC8vIFBsYXkgYW5pbWFsJ3Mgb3BlbmluZyBzb3VuZCBPTkNFIGF0IHN0YXJ0IG9mIG1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLmZpcnN0TW92ZSAmJiB0aGlzLmdhbWUuc291bmRQb29sKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUuc291bmRQb29sLnBsYXlTb3VuZCh0aGlzLm9iai5jb25zdHJ1Y3Rvci5uYW1lLnRvTG93ZXJDYXNlKCksIDAuNyk7XG4gICAgICAgICAgICB0aGlzLmZpcnN0TW92ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29tcHV0ZSBkeCBhbmQgZHkgZnJvbSByYW5kb20gd2Fsay4gc3RvcmUgaW5pdGlhbCBwb3NpdGlvblxuICAgICAgICB0aGlzLm9sZExlZnQgPSB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0O1xuICAgICAgICB0aGlzLm9sZFRvcCA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcblxuICAgICAgICAvLyB0aGlzLm9iai5kaXJlY3Rpb24gd2FzIHNldCBpbiBpbml0UmFuZG9tV2Fsa1xuXHRcdHN3aXRjaCAodGhpcy5vYmouZGlyZWN0aW9uKSB7XG5cdFx0XHRjYXNlICd0b3AnOlxuXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi50b3AgLT0gKHRoaXMuc3BlZWQgKyAoMC4xICogdGhpcy5nZXRSYW5kb20oMSwgdGhpcy5zcGVlZCkpKTtcblx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24ubGVmdCAtPSAxMCAqICh0aGlzLmdldFJhbmRvbSgtdGhpcy5zcGVlZCwgdGhpcy5zcGVlZC8yKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbGVmdCc6XG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgLT0gKHRoaXMuc3BlZWQgKyAoMC41ICogdGhpcy5nZXRSYW5kb20oMCwgdGhpcy5zcGVlZCkpKTtcblx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24udG9wICs9IDEwICoodGhpcy5nZXRSYW5kb20oLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdib3R0b20nOlxuIFx0XHRcdFx0aWYgKHRoaXMuY291bnRlciA+IHRoaXMuTUFYKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTUFYID0gdGhpcy5nZXRSYW5kb20oMiwgMTUpO1xuXHRcdFx0XHRcdHRoaXMubmV3TGVmdCA9ICh0aGlzLmdldFJhbmRvbSgtdGhpcy5zcGVlZCwgdGhpcy5zcGVlZCkpO1xuXHRcdFx0XHRcdHRoaXMuY291bnRlciA9IDA7XG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyID4gdGhpcy5NQVggLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLmdldFJhbmRvbSgtMC4yLCAxLjIpIC8vTk9URTogZmluZS10dW5lIHRoaXMgdG8gbWFrZSBnYW1lcGxheSBoYXJkZXJcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi50b3AgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICB2YXIgciA9IHRoaXMuZ2V0UmFuZG9tKC0xLCAxKTtcblx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24ubGVmdCAtPSByICogdGhpcy5uZXdMZWZ0O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3JpZ2h0Jzpcblx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24ubGVmdCArPSAodGhpcy5zcGVlZCArICgwLjUgKiB0aGlzLmdldFJhbmRvbSgwLCB0aGlzLnNwZWVkKSkpO1xuXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi50b3AgKz0gMTAgKiAodGhpcy5nZXRSYW5kb20oLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdyZXR1cm4nOlxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgY2F1c2VkIGJ5IGEgVHJ1bXAgY29sbGlkZXIgcnVubmluZyBpbnRvIHRoZSBBbmltYWxcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiByZXR1cm4gQW5pbWFsIHRvIGl0cyBjYWdlXG4gICAgICAgICAgICAgICAgdGhpcy5vYmouZGlyZWN0aW9uID0gJ2NhZ2VkJztcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiB3cml0ZSByZXR1cm4gYXJjXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjYWdlZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCA9IHRoaXMuc3RhcnRMZWZ0O1xuICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCA9IHRoaXMuc3RhcnRUb3A7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogd2hlbiBjYWdlZCwgcmVzZXQgdW50aWwgaXQgaXMgdW5jYWdlZCBhZ2FpblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcblx0XHRcdFx0Y29uc29sZS5lcnJvcignTW92ZXIuc2V0UHJlZkRpcmVjdGlvbjogaW52YWxpZCBkaXJlY3Rpb246JyArIHRoaXMub2JqLmRpcmVjdGlvbik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuICAgICAgICAvLyBDb21wdXRlIGR4IGFuZCBkeSBmb3IgQW5pbWFsc1xuICAgICAgICB2YXIgeGRpc3QgPSB0aGlzLm9sZExlZnQgLSB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0O1xuICAgICAgICB2YXIgeWRpc3QgPSB0aGlzLm9sZFRvcCAtIHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcbiAgICAgICAgdmFyIHN1bSA9IHhkaXN0ICsgeWRpc3Q7XG4gICAgICAgIGlmIChzdW0gPiAwLjAwMDEpIHtcbiAgICAgICAgICAgIHRoaXMub2JqLmR4ID0geGRpc3QgLyBzdW07XG4gICAgICAgICAgICB0aGlzLm9iai5keSA9IHlkaXN0IC8gc3VtOyAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9iai5keCA9IDA7XG4gICAgICAgICAgICB0aGlzLm9iai5keSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzYXZlIG91ciBuZXcgcG9zaXRpb25cbiAgICAgICAgdGhpcy5vbGRMZWZ0ID0gdGhpcy5vYmoucG9zaXRpb24ubGVmdDtcbiAgICAgICAgdGhpcy5vbGRUb3AgPSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZygnIGR4OicgKyB0aGlzLm9iai5keCArICcgZHk6JyArIHRoaXMub2JqLmR5ICsgJyBzdW06JyArIHN1bSlcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVDb2xsaXNpb24gKHRydW1wLCBhbmltYWwpIHtcbiAgICAgICAgdmFyIHcgPSB0aGlzLm9iai5pbWFnZS5kYXRhLndpZHRoO1xuICAgICAgICB2YXIgaCA9IHRoaXMub2JqLmltYWdlLmRhdGEuaGVpZ2h0O1xuICAgICAgICB2YXIgYXcgPSBhbmltYWwuaW1hZ2UuZGF0YS53aWR0aDtcbiAgICAgICAgdmFyIGFoID0gYW5pbWFsLmltYWdlLmRhdGEuaGVpZ2h0O1xuXG4gICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IDwgYW5pbWFsLnBvc2l0aW9uLmxlZnQgKyBhdyAmJlxuICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCArIHcgPiBhbmltYWwucG9zaXRpb24ubGVmdCAmJlxuICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wIDwgYW5pbWFsLnBvc2l0aW9uLnRvcCArIGFoICYmXG4gICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgKyBoID4gYW5pbWFsLnBvc2l0aW9uLnRvcCkgeyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL2dldCBUcnVtcCBjZW50ZXJhbCBwb2ludFxuICAgICAgICAgICAgICAgIHZhciB0WENlbnRlciA9IHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKyB3LzI7XG4gICAgICAgICAgICAgICAgdmFyIHRZQ2VudGVyID0gdGhpcy5vYmoucG9zaXRpb24udG9wICArIGgvMjtcblxuICAgICAgICAgICAgICAgIC8vZ2V0IEFuaW1hbCBjZW50cmFsIHBvaW50XG4gICAgICAgICAgICAgICAgdmFyIGFYQ2VudGVyID0gYW5pbWFsLnBvc2l0aW9uLmxlZnQgKyBhdy8yO1xuICAgICAgICAgICAgICAgIHZhciBhWUNlbnRlciA9IGFuaW1hbC5wb3NpdGlvbi50b3AgKyBhaC8yO1xuXG4gICAgICAgICAgICAgICAgLy9jb21wdXRlIHggYW5kIHkgdmVjdG9yIGJldHdlZW4gY2VudGVyc1xuICAgICAgICAgICAgICAgIHZhciBjWERpZmYgPSB0WENlbnRlciAtIGFYQ2VudGVyO1xuICAgICAgICAgICAgICAgIHZhciBjWURpZmYgPSB0WUNlbnRlciA9IGFZQ2VudGVyO1xuXG4gICAgICAgICAgICAgICAgLy8gVHJ1bXAgZG9lc24ndCByZWFjdCBpZiBub3QgbW92aW5nIChldmVuIGlmIGFuaW1hbCBkb2VzKVxuICAgICAgICAgICAgICAgIGlmICh0cnVtcC5zcGVlZCAhPSAwICYmIHRydW1wLmR4ICE9IDAgJiYgdHJ1bXAuZHkgIT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIG1vdmUgb2JqZWN0IHNvIGl0IGlzbid0IGNvbGxpZGluZyBhbnltb3JlXG4gICAgICAgICAgICAgICAgICAgIGlmIChjWERpZmYgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1bXAucG9zaXRpb24ueCArPSAoY1hEaWZmICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVtcC5wb3NpdGlvbi54IC09IChjWERpZmYgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjWURpZmYgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1bXAucG9zaXRpb24ueSArPSAoY1lEaWZmICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVtcC5wb3NpdGlvbi55IC09IChjWURpZmYgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSBuZXcgdmVjdG9yc1xuICAgICAgICAgICAgICAgICAgICB0cnVtcC5keCA9IC1jWERpZmYgLyBjWURpZmY7XG4gICAgICAgICAgICAgICAgICAgIHRydW1wLmR5ID0gLWNZRGlmZiAvIGNYRGlmZjtcblxuICAgICAgICAgICAgICAgICAgICAvLyByb3VuZGluZyBlcnJvclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGRpZiA9IE1hdGguYWJzKHRydW1wLmR4ICsgdHJ1bXAuZHkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGRpZiA+IDEuMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRydW1wLmR4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVtcC5keSAtPSBkZGlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVtcC5keSArPSBkZGlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvL2VuZCBvZiBUcnVtcCBpcyBtb3ZpbmdcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdkeDo6Ojo6OicgKyB0cnVtcC5keCArICcgZHk6Ojo6OjonICsgdHJ1bXAuZHkpXG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVBpbmdQb25nXG4gICAgICogQGRlc2NyaXB0aW9uIG1vdmUgaW4gYSBwaW5nLXBvbmcgc3R5bGUuXG4gICAgICogQ2FsbCBpbiBhbiB1cGRhdGUgZnVuY3Rpb24gaW5zaWRlIHRoZSBDaGFyYWN0ZXIsIGUuZy4gXG4gICAgICogdXBkYXRlICgpIHsgdXBkYXRlUmFuZG9tV2FsaygpOyB9XG4gICAgICogVGhlIG1haW4gR2FtZSBvYmplY3QgYXV0b21hdGljYWxseSBmaW5kcyBhbmQgJ2ZpcmVzJyB1cGRhdGUoKSBmdW5jdGlvbiBpbiBcbiAgICAgKiBhbGwgQ2hhcmFjdGVycy5cbiAgICAgKiBQb3NzaWJsZSB1cGRhdGVzIGZvciBtb3Rpb246XG4gICAgICogMS4gQ29sbGlzaW9uIHdpdGggYSBQbGF5ZXIgKHZpYSBraWNrKCkgbWV0aG9kKSBzdGFydHMgdGhlIFRydW1wIGNoYXJhY3RlciBtb3ZpbmdcbiAgICAgKiAyLiBUcnVtcCB3aWxsIGJvdW5jZSBvbiBhbGwgd2FsbHMgRVhDRVBUIHRoZSBib3R0b20gd2FsbFxuICAgICAqIDMuIFdoZW4gdGhlIFRydW1wIGludGVyc2VjdHMgdGhlIGJvdHRvbSB3YWxsLCB0aGV5IHN0b3AgbW92aW5nXG4gICAgICogNC4gSWYgdGhleSBjb2xsaWRlIHdpdGggYW4gQW5pbWFsLCB0aGV5IGJvdW5jZSwgYW5kIHRoZSBBbmltYWwgcmV0dXJucyB0byBpdHMgQ2FnZS5cbiAgICAgKi9cbiAgICB1cGRhdGVQaW5nUG9uZyAoKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmluaXRlZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVHJ1bXAgUGluZ1BvbmcgTk9UIGluaXRpYWxpemVkIChkaWQgeW91IGxlYXZlIG91dCBvZiBjb25zdHJ1Y3Rvcj8pJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZygnZHg6JyArIHRoaXMub2JqLmR4ICsgJyBkeTonICsgdGhpcy5vYmouZHkpO1xuICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IC09IHRoaXMub2JqLnNwZWVkICogdGhpcy5vYmouZHg7XG4gICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCAtPSB0aGlzLm9iai5zcGVlZCAqIHRoaXMub2JqLmR5O1xuXG4gICAgICAgIC8vY2hlY2sgYm91bmRzIChBbmltYWxBcmVhKVxuICAgICAgICBpZiAodGhpcy5ib3VuZHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9iai5pbWFnZS5kYXRhKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgdyA9IHRoaXMub2JqLmltYWdlLmRhdGEud2lkdGg7XG4gICAgICAgICAgICAgICAgdmFyIGggPSB0aGlzLm9iai5pbWFnZS5kYXRhLmhlaWdodDtcblxuICAgICAgICAgICAgICAgIC8vIGNhdGNoIGNhc2VzIHdoZXJlIFRydW1wIGdldHMgaW50byB0aGUgQ2FnZSBhcmVhXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLnRvcCA8IHRoaXMuYm91bmRzLnRvcCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmouZHkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5keSA9IC10aGlzLm9iai5keTtcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wID0gdGhpcy5ib3VuZHMudG9wICsgMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBydW4gdGhpcyBvbmx5IGlmIHdlIGFyZSBtb3ZpbmcgZG93biB0aGUgc2NyZWVuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLmR5IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmoucG9zaXRpb24udG9wID4gKHRoaXMub2JqLnN0YXJ0VG9wIC0gKHRoaXMub2JqLmR5ICogdGhpcy5vYmouc3BlZWQpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLm9iai5keSA9IC10aGlzLm9iai5keTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCA9IHRoaXMub2JqLnN0YXJ0VG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouZHggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouZHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXN0ID0gdGhpcy5ib3VuZHMuYm90dG9tIC0gaCAtIHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwZCA9IC10aGlzLm9iai5keSAqIHRoaXMub2JqLnNwZWVkICogNDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVjZWxlcmF0ZSBiZWZvcmUgc3RvcHBpbmcgYXQgYm90dG9tIG9mIEFuaW1hbEFyZWFcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3QgPCBzcGQgJiYgc3BkID4gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouc3BlZWQgLz0gMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy9lbmQgb2YgZHkgbmVnYXRpdmUgKGdvaW5nIGRvd24pXG5cbiAgICAgICAgICAgICAgICAvLyBib3VuY2Ugb24gdGhlIG90aGVyIDMgd2FsbHNcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmoucG9zaXRpb24ubGVmdCA8IHRoaXMuYm91bmRzLmxlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouZHggPSAtdGhpcy5vYmouZHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi50b3AgPCB0aGlzLmJvdW5kcy50b3ApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouZHkgPSAtdGhpcy5vYmouZHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ID4gdGhpcy5ib3VuZHMucmlnaHQgLSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLmR4ID0gLXRoaXMub2JqLmR4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlIGVuY291bmRlciBhbiBhbmltYWwsIGJvdW5jZSwgQU5EICdraWNrJyB0aGUgYW5pbWFsIGJhY2sgaW50byBpdHMgY2FnZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5hbmltYWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLm9iai5hbmltYWxzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5pbWFsID0gdGhpcy5vYmouYW5pbWFsc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FsY3VsYXRlQ29sbGlzaW9uKHRoaXMub2JqLCBhbmltYWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXQgdGhlIEFuaW1hbCdzIHN0YXRlIHRvIHJldHVybiBob21lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz4+PlJFVFVSTklORyBBTklNQUwgVE8gQ0FHRScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWFsLmRpcmVjdGlvbiA9ICdyZXR1cm4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5zcGVlZCA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouc3BlZWQgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vYnJlYWsgb3V0IG9mIGhvcml6b250YWwgbW92ZVxuICAgICAgICBpZiAodGhpcy5vYmouZHkgPCAwLjAwMSAmJiB0aGlzLm9iai5keCA+IDAuMDAxKSB7XG4gICAgICAgICAgICB2YXIgZCA9IHRoaXMucmFuZG9taXplcigpO1xuICAgICAgICAgICAgdGhpcy5vYmouZHkgKz0gZCAtIHRoaXMucmFuZG9taXplcigpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn0gLy8gZW5kIG9mIGNsYXNzXG4iLCIvKiogXG4gKiBQbGF5ZXIuanNcbiAqIFVzZXItY29udHJvbGxlZCBDaGFyYWN0ZXJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5cbiAvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcbiBpbXBvcnQgTW92ZXIgZnJvbSAnLi9Nb3Zlci5qcyc7XG4gaW1wb3J0IENvbGxpZGVyIGZyb20gJy4vQ29sbGlkZXIuanMnO1xuIC8vIEVORCBBRERFRCBXRUVLIDExPDw8PDw8PDw8PDw8PFxuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcblxuIFx0XHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcbiBcdFx0dGhpcy5tb3Zlci5pbml0U2xldygpO1xuICBcdFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFx0XHRcbiBcdH1cblxuICBcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxuIFx0dXBkYXRlICgpIHtcbiBcdFx0dGhpcy5tb3Zlci51cGRhdGVTbGV3KCk7XG4gXHR9XG4gXHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cblxuIH0iLCIvKiogXG4gKiBQbGF5ZXJBcmVhLmpzXG4gKiBUaGUgcmVnaW9uIHdoZXJlIHRoZSBQbGF5ZXIgY2FuIG1vdmUuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBBcmVhXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQXJlYSBleHRlbmRzIEFyZWEge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG4gXHR9XG5cbiB9IiwiLyoqIFxuICogU2NvcmUuanNcbiAqIERpc3BsYXkgdXNlciBzY29yZVxuICogQGluaGVyaXRzIER5bmFtaWNUZXh0LCBUZXh0LCBJbmZvLCBHYW1lUGllY2VcbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbmltcG9ydCBEeW5hbWljVGV4dCBmcm9tICcuL0R5bmFtaWNUZXh0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUgZXh0ZW5kcyBEeW5hbWljVGV4dCB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cdH1cbn0iLCIvKiogXG4gKiBTY3JlZW4uanNcbiAqIEdlbmVyaWMgU2NyZWVuIG9iamVjdFxuICogQGluaGVyaXRzIEdhbWVQaWVjZS5qc1xuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuIGltcG9ydCBJZGVudGl0eSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlbiBleHRlbmRzIEdhbWVQaWVjZSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTsgLy9pbml0ICdwYXJlbnQnIEdhbWVQaWVjZVxuXG4gXHRcdC8vIHNhdmUgYSByZWZlcmVuY2UgdG8gb3VyIHBhcmVudCBHYW1lIG9iamVjdFxuIFx0XHR0aGlzLmdhbWUgPSBjb25maWcuZ2FtZTtcblxuIFx0XHQvLyBTY3JlZW5zIGFyZSBkZWZpbmVkIGluIEhUTUwsIHNvIHNhdmUgYSByZWZlcmVuY2UgdG8gb3VyIERPTSBpZFxuIFx0XHR0aGlzLmRvbUlkID0gY29uZmlnLmlkO1xuXG4gXHRcdC8vIHNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIERPTSBlbGVtZW50IHdlJ3JlIGNvbm5lY3RlZCB0b1xuIFx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZG9tSWQpO1xuXG4gXHRcdC8vIGluc2VydCB0aGUgY29weXJpZ2h0IGluZm8gZnJvbSB0aGUgbWFpbiBHYW1lIG9iamVjdFxuIFx0XHR0aGlzLmFkZFdhcm5pbmcoKTtcbiBcdH1cblxuIFx0Ly8gbG9hZCBhIGJhY2tncm91bmQgaW1hZ2UgaW50byB0aGUgU2NyZWVuXG4gXHRsb2FkQmFja2dyb3VuZCAocGF0aCwgY2FsbGJhY2spIHtcbiBcdFx0Y29uc29sZS5sb2coXCJsb2FkaW5nOlwiICsgdGhpcy5kb21JZCk7XG4gXHRcdHRoaXMuYmFja2dyb3VuZEltYWdlID0gbmV3IFN0YXRpY0ltYWdlKFxuIFx0XHRcdHtcbiBcdFx0XHRcdG5hbWU6IHRoaXMubmFtZSArICctaW1hZ2UnLFxuIFx0XHRcdFx0ZG9tSWQ6IHRoaXMuaWQgKyAnLWltYWdlJyxcbiBcdFx0XHRcdHBhdGg6IHBhdGgsXG4gXHRcdFx0XHRjYWxsYmFjazogY2FsbGJhY2tcbiBcdFx0XHR9XG4gXHRcdCk7XG4gXHRcdHRoaXMuYmFja2dyb3VuZEltYWdlLmxvYWRCYWNrZ3JvdW5kSW1hZ2UodGhpcy5kb20sIHBhdGgsIGNhbGxiYWNrKTtcbiBcdH1cblxuIFx0Ly8gc2hvdyBhbmQgaGlkZSByZWdpb25zIG9mIHRoZSBTY3JlZW5cbiBcdHNob3dTY3JlZW4gKCkge1xuIFx0XHRjb25zb2xlLmxvZyhcInNob3dpbmc6XCIgKyB0aGlzLmRvbUlkKTtcbiBcdFx0dGhpcy5kb20uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiBcdH1cblxuIFx0aGlkZVNjcmVlbiAoKSB7XG4gXHRcdGNvbnNvbGUubG9nKFwiaGlkaW5nOlwiICsgdGhpcy5kb21JZCk7XG4gXHRcdHRoaXMuZG9tLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiBcdH1cblxuIFx0c2hvd0hlYWRlciAoKSB7XG4gXHRcdHRoaXMuZG9tLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuIFx0fVxuXG4gXHRoaWRlSGVhZGVyICgpIHtcblx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gXHR9XG5cbiBcdHNob3dGb290ZXIgKCkge1xuXHRcdHRoaXMuZG9tLnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gXHR9XG5cbiBcdGhpZGVGb290ZXIgKCkge1xuXHRcdHRoaXMuZG9tLnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiBcdH1cblxuIFx0YWRkV2FybmluZyAoKSB7XG4gXHRcdHRoaXMuZG9tLnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKS5pbm5lckhUTUwgPSB0aGlzLmdhbWUud2FybmluZztcbiBcdH1cblxuIH07IiwiLyoqIFxuICogQGNsYXNzIFNvdW5kZXIuanNcblxuICogQGRlc2NyaXB0aW9uIHByb3ZpZGUgc291bmRzIHRoYXQgb3RoZXIgb2JqZWN0cyBjYW4gcGxheS4gRGV0ZWN0cyB0aGUga2luZHMgXG4gKiBvZiBhdWRpbyBmaWxlcyB0aGUgd2ViIGJyb3dlciBjYW4gcGxheSwgYW5kIHNlcnZlcyB0aGUgZmlyc3QgZmlsZSBpdCBmaW5kcyBpbiBcbiAqIHRoZSAvYXVkaW8gZm9sZGVyIG9mIHRoZSBkaXN0cmlidXRpb24uIEF1ZGlvIGZpbGVzIGFyZSBhY2Nlc3NlZCBieSBjdXN0b20gbmFtZXMgXG4gKiBmb3IgcGxheWJhY2suXG5cbiAqIEFkYXB0ZWQgZnJvbVxuICogQGh0dHA6Ly9ibG9nLnNrbGFtYmVydC5jb20vaHRtbDUtY2FudmFzLWdhbWUtaHRtbDUtYXVkaW8tYW5kLWZpbmlzaGluZy10b3VjaGVzL1xuXG4gKiBTb3VuZGVyLmpzIHNob3VsZCBiZSBsb2FkZWQgaW4gdGhlIG1haW4gR2FtZSBpbml0aWFsaXphdGlvbiBwcm9jZXNzLlxuXG4gKiBJbiBhZGRpdGlvbiwgdGhlIGRpc3RyaWJ1dGlvbiBNVVNUIGhhdmUgYW4gL2F1ZGlvIGRpcmVjdG9yeSB3aXRoIGZpbGVzIGluIG11bHRpcGxlIFxuICogYXVkaW8gZm9ybWF0czpcbiAqIE1QMyAoLm1wMylcbiAqIE9nZy1Wb3JiaXMgKC5vZ2cpXG4gKiBXQVYgKC53YXYpXG5cbiAqIEF1ZGlvIEVkaXRvcnM6XG4gKiBBdWRhY2l0eSAoZnJlZSlcbiAqIEBsaW5rIGh0dHA6Ly93d3cuYXVkYWNpdHl0ZWFtLm9yZy9cbiAqIFByb1Rvb2xzICgkJCQpXG4gKiBAbGluayBodHRwOi8vd3d3LmF2aWQuY29tL3Byby10b29sc1xuXG4gKiBBdWRpbyBjb252ZXJ0ZXJzOlxuICogQGxpbmsgaHR0cDovL21lZGlhLmlvL1xuICogQGxpbmsgaHR0cHM6Ly9zb3VyY2Vmb3JnZS5uZXQvcHJvamVjdHMvYXVkYWNpdHkvXG4gKiBAbGluayBodHRwOi8vd3d3Lm1lZGlhaHVtYW4uY29tL2F1ZGlvLWNvbnZlcnRlci9cbiAqIEBsaW5rIGh0dHA6Ly93d3cuaHRtbDVhdWRpb2NvbnZlcnRlci5jb20vXG4gXG4gKiBBdWRpbyBTYW1wbGVzOlxuICogQGxpbmsgaHR0cDovL3d3dy5ncnNpdGVzLmNvbS9hcmNoaXZlL3NvdW5kcy9jYXRlZ29yeS8yNS8/b2Zmc2V0PTIwXG4gKiBAbGluayBodHRwczovL3d3dy5mcmVlc291bmQub3JnXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kZXIge1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcblxuXHRcdC8vIENyZWF0ZSBhbiBhcnJheSBvZiBsb2FkZWQgc291bmRzXG5cdFx0dGhpcy5wYXRoID0gJ2F1ZGlvLyc7XG5cblx0XHR0aGlzLnNvdW5kcyA9IFtdO1xuXHRcdHRoaXMuY2hlY2tBdWRpbygpO1xuXHR9XG5cblx0LyoqIFxuXHQgKiBAbWV0aG9kIGNoZWNrQXVkaW9cblx0ICogQGRlc2NyaXB0aW9uIHNlZSB3aGljaCBhdWRpbyBmaWxlIGZvcm1hdHMgY2FuIGJlIHBsYXllZCBieSB0aGUgYnJvd3Nlci5cblx0ICovXG5cdGNoZWNrQXVkaW8gKCkge1xuXHRcdHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcblx0XHR2YXIgYm9vbCA9IGZhbHNlO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGlmIChib29sID0gISFlbGVtLmNhblBsYXlUeXBlKSB7XG5cdFx0XHRcdGJvb2wgPSBuZXcgQm9vbGVhbihib29sKTtcblx0XHRcdFx0Ym9vbC5vZ2cgPSBlbGVtLmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cInZvcmJpc1wiJykucmVwbGFjZSgvXm5vJC8sJycpO1xuXHRcdFx0XHRib29sLm1wMyA9IGVsZW0uY2FuUGxheVR5cGUoJ2F1ZGlvL21wZWc7JykucmVwbGFjZSgvXm5vJC8sJycpO1xuXHRcdFx0XHRib29sLndhdiA9IGVsZW0uY2FuUGxheVR5cGUoJ2F1ZGlvL3dhdjsgY29kZWNzPVwiMVwiJykucmVwbGFjZSgvXm5vJC8sJycpO1xuXHRcdFx0XHRib29sLm00YSA9IChlbGVtLmNhblBsYXlUeXBlKCdhdWRpby94LW00YTsnKSB8fCBlbGVtLmNhblBsYXlUeXBlKCdhdWRpby9hYWM7JykpLnJlcGxhY2UoL15ubyQvLCcnKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0Ly8gbGlzdCBzdXBwb3J0ZWQgYXVkaW8gdHlwZXNcblx0XHRcdC8vZWxlbSA9IG51bGw7IFxuXHRcdFx0dGhpcy50eXBlID0gYm9vbDtcblxuXHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLnR5cGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coaSArICcgc3VwcG9ydDonICsgdGhpcy50eXBlW2ldKTtcblx0XHRcdH1cblx0fVxuXG5cdC8qKiBcblx0ICogQG1ldGhvZCBzZXRTb3VuZFxuXHQgKiBAZGVzY3JpcHRpb24gY2FsbGJhY2sgZm9yIGxvYWRpbmcgc291bmQsIGFkZHMgdG8gdGhlIFxuXHQgKiBzb3VuZHMgYXJyYXkgZm9yIGxhdGVyIHBsYXliYWNrLlxuXHQgKi9cblx0c2V0U291bmQgKGUsIG5hbWUsIHZvbHVtZSkge1xuXHRcdGlmICghdm9sdW1lKSB7XG5cdFx0XHR2b2x1bWUgPSAwLjU7XG5cdFx0fVxuXHRcdHRoaXMuc291bmRzW25hbWVdID0gZS50YXJnZXQ7XG5cdFx0dGhpcy5zb3VuZHNbbmFtZV0udm9sdW1lID0gdm9sdW1lO1xuXHRcdGNvbnNvbGUubG9nKCdhZGRlZCBzb3VuZDonICsgbmFtZSlcblx0fVxuXG5cdC8qKiBcblx0ICogQG1ldGhvZCBzb3VuZEVycm9yXG5cdCAqIEBkZXNjcmlwdGlvbiBjYWxsYmFjayBmb3IgZmFpbGVkIGxvYWRzIG9mIHNvdW5kIGZpbGVzLlxuXHQgKi9cblx0c291bmRFcnJvciAoZSwgbmFtZSkge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ0F1ZGlvICcgKyBuYW1lICsgJyBmYWllZCB0byBsb2FkJyk7XG5cdFx0dGhpcy5zb3VuZHNbbmFtZV0gPSBudWxsO1xuXHR9XG5cblx0LyoqIFxuXHQgKiBAbWV0aG9kIGFkZFNvdW5kXG5cdCAqIEBkZXNjcmlwdGlvbiBhZGQgYSBuZXcgc291bmQuIFxuXHQgKiBAcGFyYW0gU3RyaW5nIG5hbWUgdGhlIG5hbWUgb2YgdGhlIHNvdW5kLiBUaGUgc291bmQgbmFtZSBcblx0ICogbXVzdCBtYXRjaCB0aGUgZmlsZSBjb250YWluaW5nIHRoZSBhdWRpbywgZS5nLiBmb3IgYSBzb3VuZCBjYWxsZWQgXG5cdCAqICdraWNrJyB0aGVyZSBtdXN0IGJlIGEgZmlsZSAvYXVkaW8va2ljay5tcDMgXG5cdCAqIFBvc3NpYmxlIGZvcm1hdHMgKGNyZWF0ZSB0aGVtIGFsbCBkdXJpbmcgcHJvZHVjdGlvbilcblx0ICogLSBNUDMgKC5tcDMpXG5cdCAqIC0gT2dnLVZvcmJpcyAoLm9nZylcblx0ICogLSBXQVYgKC53YXYpXG5cdCAqIEBwYXJhbSBOdW1iZXIgdm9sdW1lIHRoZSBsb3VkbmVzcyBvZiB0aGUgc291bmQsIGJldHdlZW4gMCAoc2lsZW50KSBcblx0ICogYW5kIDEuMCAoYXMgbG91ZCBhcyBwb3NzaWJsZSkuXG5cdCAqL1xuXHRhZGRTb3VuZCAobmFtZSwgdm9sdW1lKSB7XG5cdFx0aWYgKCFuYW1lKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCd0cmllZCB0byBsb2FkIGF1ZGlvIGZpbGUgd2l0aG91dCBhIG5hbWUgYW5kL29yIHBhdGgsIGFib3J0aW5nJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIHRyeSBjcmVhdGluZyB0aGUgc291bmRcblx0XHR2YXIgc25kO1xuXHRcdC8vIGdldCB0aGUgZXh0ZW5zaW9uIGFuZCByZW1haW5pbmcgcGF0aFxuXHRcdGZvciAodmFyIGkgaW4gdGhpcy50eXBlKSB7XG5cdFx0XHRjb25zb2xlLmxvZygndGhpcy50eXBlWycgKyBpICsgJ109JyArIHRoaXMudHlwZVtpXSk7XG5cdFx0XHRpZiAodGhpcy50eXBlW2ldICE9IFwiXCIpIHsgLy9yZXR1cm5lZCBkYXRhVHlwZSBmb3IgZWxlbS5jYW5QbGF5VHlwZSguLi4pXG5cblx0XHRcdFx0dmFyIGZpbGVQYXRoID0gdGhpcy5wYXRoICsgbmFtZSArICcuJyArIGk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiVFJZSU5HIFRPIExPQUQ6XCIgKyB0aGlzLnBhdGggKyBuYW1lICsgJy4nICsgaSk7XG5cblx0XHRcdFx0Ly8gQ3JlYXRlIHRoZSBBdWRpbyBvYmplY3Rcblx0XHRcdFx0c25kID0gbmV3IEF1ZGlvKGZpbGVQYXRoKTtcblxuXHRcdFx0XHQvLyB0cmFwIGxvYWQgYW5kIGVycm9yIGV2ZW50c1xuXHRcdFx0XHRzbmQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsIFxuXHRcdFx0XHRcdGV2ZW50ID0+IHRoaXMuc2V0U291bmQoZXZlbnQsIG5hbWUsIHZvbHVtZSksIGZhbHNlKTtcblxuXHRcdFx0XHRzbmQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBcblx0XHRcdFx0XHRldmVudCA9PiB0aGlzLnNvdW5kRXJyb3IoZXZlbnQsIG5hbWUpLCBmYWxzZSk7XG5cblx0XHRcdFx0Ly8gc3RhcnQgbG9hZGluZyB0aGUgc291bmRcblx0XHRcdFx0c25kLmxvYWQoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghc25kKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdzb3VuZCBmaWxlIGZvcjonICsgbmFtZSArICcgbm90IGZvdW5kIGluIGF1ZGlvJyk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKiogXG5cdCAqIEBtZXRob2QgcGxheVNvdW5kXG5cdCAqIEBkZXNjcmlwdGlvblxuXHQgKiBAcGFyYW1zIFN0cmluZyBuYW1lIHRoZSBuYW1lIG9mIHRoZSBzb3VuZC4gTXVzdCBtYXRjaCB0aGUgZmlsZW5hbWUgXG5cdCAqIFdJVEhPVVQgYSBmaWxlIGV4dGVuc2lvbiBpbiB0aGUgL2F1ZGlvIGZvbGRlciBmb3IgdGhlIGdhbWUuXG5cdCAqL1xuXHRwbGF5U291bmQgKG5hbWUpIHtcblx0XHQvLyBDaGVjayBmb3Igbm8gc291bmRzIChsb2FkZWQgc291bmQgaW4gZ2FtZS5qcyB3aXRob3V0IGRvaW5nIG5ldyBTb3VuZGVyKCkgKVxuXHRcdGlmICh0aGlzLnNvdW5kc1tuYW1lXSkge1xuXHRcdFx0dGhpcy5zb3VuZHNbbmFtZV0ucGxheSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdubyBzb3VuZCBmaWxlIHdpdGggbmFtZTonICsgbmFtZSArICcgaW4gYXVkaW8gZm9sZGVyIChPUiB5b3UgY2FsbGVkIGFkZFNvdW5kIEJFRk9SRSB5b3UgZGlkIG5ldyBTb3VuZGVyKCkgaW4geW91ciBjb2RlLi4uJyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqIFxuXHQgKiBAbWV0aG9kIGZpbGVFeGlzdHNcblx0ICogQGRlc2NyaXB0aW9uIGRldGVjdCBpZiBhIGZpbGUgaXMgcHJlc2VudCBvbiB0aGUgc2VydmVyLiBVc2VzIGFuIFxuXHQgKiBzeW5jaHJvbm91cyBBamF4IHRlY2huaXF1ZSwgc28gU0xPVyBpZiB5b3UgYXJlIHVzaW5nIGEgcmVtb3RlIHNlcnZlci4gXG5cdCAqIE5vIGNvbXBhcmFibGUgbWV0aG9kIGV4aXN0cyBmb3IgZGV0ZXJtaW5pbmcgaWYgYSBmb2xkZXIgZXhpc3RzIGluIFxuXHQgKiBjbGllbnQtc2lkZSB2YW5pbGxhIEphdmFTY3JpcHQuXG5cdCAqIEBwYXJhbSBTdHJpbmcgdXJsIHRoZSBwYXRoIHRvIHRoZSBmaWxlIG9uIHRoZSBzZXJ2ZXIuXG5cdCAqL1xuXHRmaWxlRXhpc3RzKHVybCkge1xuXHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHR4aHIub3BlbignSEVBRCcsIHVybCwgZmFsc2UpO1xuXHRcdHhoci5zZW5kKCk7XG5cdFx0aWYgKHhoci5zdGF0dXMgPT0gJzQwNCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cbn0gLy8gZW5kIG9mIGNsYXNzIiwiLyoqIFxuICogU3RhcnRTY3JlZW4uanNcbiAqIE9wZW5pbmcgc2NyZWVuIGZvciBnYW1lLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgU2NyZWVuXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJztcblxuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuaW1wb3J0IElkZW50aXR5IGZyb20gJy4vSWRlbnRpdHkuanMnO1xuaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi9CYWNrZ3JvdW5kLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXG5cdFx0Ly8gdGhpcy5kb20gZGVmaW5lZCBpbiBTY3JlZW5cblxuXHRcdC8vIExvYWQgU3RhcnRTY3JlZW4gc3ViLW9iamVjdHNcblx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kKCdpbWcvc2NyZWVucy9zdGFydC1zY3JlZW4ucG5nJyk7XG5cblx0XHQvLyBsb2FkIGlkZW50aXR5IGltYWdlXG5cdFx0dGhpcy5sb2FkSWRlbnRpdHkoKTtcblxuXHRcdC8vIGxvYWQgaW5zdHJ1Y3Rpb25zXG5cdFx0dGhpcy5sb2FkSW5zdHJ1Y3Rpb25zKCk7XG5cblx0XHQvLyBNYWtlIHRoZSBzdGFydCBidXR0b24gb3BlbiB0aGUgbWFpbiBnYW1lIHNjcmVlblxuXHRcdHRoaXMuYmluZFN0YXJ0KCk7XG5cdH1cblxuXHRsb2FkSWRlbnRpdHkgKCkge1xuXHRcdHRoaXMuaWRlbnRpdHkgPSBuZXcgSWRlbnRpdHkoXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdpZGVudGl0eScsIFxuXHRcdFx0XHRkb21JZDogJ3N0YXJ0LXNjcmVlbi1pZGVudGl0eScsXG5cdFx0XHRcdHBhdGg6ICdpbWcvaWRlbnRpdHkvbG9nby5wbmcnLCBcblx0XHRcdFx0YXV0aG9yOiAncGV0ZSBtYXJraWV3aWN6JywgXG5cdFx0XHRcdHNvdXJjZTogJ3BseW9qdW1wJ1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHQvLyBzZXQgcG9zaXRpb24gb2YgSWRlbnRpdHlcblx0XHR0aGlzLmlkZW50aXR5LnNldERPTVBvc2l0aW9uIChcblx0XHRcdHtcblx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRsZWZ0OiAwXG5cdFx0XHR9XG5cdFx0KTtcblxuXHR9XG5cblx0bG9hZEluc3RydWN0aW9ucyAoKSB7XG5cblx0XHR0aGlzLmluc3RydWN0aW9ucyA9IG5ldyBTdGF0aWNUZXh0KFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnZ2FtZSBpbnN0cnVjdGlvbnMnLFxuXHRcdFx0XHRkb21JZDogJ2luc3RydWN0aW9ucycsXG5cdFx0XHRcdHRleHQ6ICdQbGF5IHRvIHdpbi4gVGhhdCBpcyBhbGwgVHJ1bXAgY2FyZXMgYWJvdXQsIGFuZCBzbyBzaG91bGQgeW91Lidcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5pbnN0cnVjdGlvbnMuc2V0RE9NUG9zaXRpb24oXG5cdFx0XHR7XG5cdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0bGVmdDogMCxcblx0XHRcdH1cblx0XHQpO1xuXG5cdH1cblxuXHRiaW5kU3RhcnQgKCkge1xuXHRcdGNvbnNvbGUubG9nKFwiaW4gYmluZFN0YXJ0LCB0aGlzLmdhbWU6XCIgKyB0aGlzLmdhbWUpXG5cdFx0Ly8gd2UgdXNlIGJpbmQoKSB0byBsaW5rIHRoZSBmdW5jdGlvbiBiZWxvdyB0byBTdGFydFNjcmVlbiAob3RoZXJ3aXNlLCBpdCB0aGlua3MgaXQgaXMgaW5zaWRlIHdpbmRvdylcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQtc2NyZWVuLXBsYXktYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBcblx0XHRcdGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdC8vYWxlcnQoXCJpbiBoYW5kbGVyLCBnYW1lOlwiICsgdGhpcy5nYW1lKVxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHRoaXMuZ2FtZS5zdGFydEdhbWUoKTtcblxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxufSIsIi8qKiBcbiAqIFN0YXRpY0ltYWdlLmpzXG4gKiBJbWFnZS1zdHlsZSBJbmZvcm1hdGlvbiB0aGF0IGNhbm5vdCBiZSBjaGFuZ2VkIG9uY2UgdGhlIGdhbWUgaXMgbG9hZGVkXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGljSW1hZ2UgZXh0ZW5kcyBJbWFnZSB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cblx0XHR0aGlzLnN0YXRpYyA9IHRydWU7XG5cdH1cblxufVxuIiwiLyoqIFxuICogU3RhdGljVGV4dC5qc1xuICogVGV4dCB0aGF0IGNhbm5vdCBiZSBjaGFuZ2VkIGFmdGVyIGxvYWRlZCBieSB0aGUgZ2FtZVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aWNUZXh0IGV4dGVuZHMgVGV4dCB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cblx0XHR0aGlzLnN0YXRpYyA9IHRydWU7XG5cblx0fVxuXG59XG4iLCIvKiogXG4gKiBUZXh0LmpzXG4gKiBDcmVhdGVzIGEgdGV4dC10eXBlIEluZm8gb2JqZWN0XG4gKiBAaW5oZXJpdHMgSW5mbywgR2FtZVBpZWNlXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIEluZm8ge1xuXG4gXHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTtcblxuIFx0XHQvLyBzZXQgdGhlIHRleHRcbiBcdFx0dGhpcy5zZXRUZXh0KGNvbmZpZy50ZXh0KTtcblxuIFx0XHQvLyBzZXQgdGhlIERPTUlkXG4gXHRcdHRoaXMuYWRkVG9ET00oY29uZmlnLmRvbUlkKTtcbiBcdH1cblxuIFx0c2V0VGV4dCAodHh0KSB7XG4gXHRcdHRoaXMudGV4dCA9IHR4dDtcbiBcdH1cblxuIFx0YWRkVG9ET00gKGRvbUlkKSB7XG5cbiBcdFx0dGhpcy5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiBcdFx0dGhpcy5kb20uaWQgPSBuYW1lICsgJy1UZXh0JztcbiBcdFx0dGhpcy5kb20uaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xuXG4gXHRcdC8vIGNvbnRhaW5lclxuIFx0XHR2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9tSWQpO1xuXG4gXHRcdC8vIGFkZCB0byB0aGUgRE9NXG4gXHRcdGNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGhpcy5kb20sIGNvbnRhaW5lci5jaGlsZE5vZGVzWzBdKTtcblxuXHR9XG5cbiB9IiwiLyoqIFxuICogVGlnZXIuanNcbiAqIEEgVGlnZXIsIHdobyB0cmllcyB0byBnZXQgdGhlIFBsYXllci5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG4gaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBUaWdlciBleHRlbmRzIEFuaW1hbCB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG4gXHR9XG4gfSIsIi8qKiBcbiAqIFRydW1wLmpzXG4gKiBUaGUgYmFsbC1saWtlIENoYXJhY3RlciB5b3Uga2ljayBpbnRvIEFuaW1hbHNcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5cbiAvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcbiBpbXBvcnQgTW92ZXIgZnJvbSAnLi9Nb3Zlci5qcyc7XG4gaW1wb3J0IENvbGxpZGVyIGZyb20gJy4vQ29sbGlkZXIuanMnO1xuIC8vIEVORCBBRERFRCBXRUVLIDExPDw8PDw8PDw8PDw8PFxuIFxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRydW1wIGV4dGVuZHMgQ2hhcmFjdGVyIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcblxuIFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG4gXHRcdC8vVHJ1bXAgZ2V0cyBQaW5nUG9uZyBtb3Rpb25cbiBcdFx0dGhpcy5tb3Zlci5pbml0UGluZ1BvbmcoMCk7XG4gXHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cbiBcdH1cblxuIFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXG4gXHR1cGRhdGUgKCkge1xuIFx0XHR0aGlzLm1vdmVyLnVwZGF0ZVBpbmdQb25nKCk7XG4gXHR9XG4gXHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XG5cbiB9IiwiLyoqIFxuICogQ3JlYXRlIHRoZSBnYW1lLiBJbXBvcnQgdGhlIHByaW1hcnkgY2xhc3NlcywgYW5kICdjb21wb3NpdGUnIFxuICogdGhlIG92ZXJhbGwgR2FtZSBvYmplY3Qgb3V0IG9mIGluc3RhbmNlcyBvZiB0aGUgY2xhc3Nlcy5cbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbi8vVGhlIGVudGlyZSBnYW1lXG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUuanMnO1xuXG4vL1NjcmVlbiBpbmhlcml0YW5jZVxuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSAnLi9TdGFydFNjcmVlbi5qcyc7XG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuL0dhbWVTY3JlZW4uanMnO1xuaW1wb3J0IEVuZFNjcmVlbiBmcm9tICcuL0VuZFNjcmVlbi5qcyc7XG5cbi8vSW5mbyBpbmhlcml0YW5jZVxuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xuaW1wb3J0IElkZW50aXR5IGZyb20gJy4vSWRlbnRpdHkuanMnO1xuaW1wb3J0IEluc3RydWN0aW9ucyBmcm9tICcuL0luc3RydWN0aW9ucy5qcyc7XG5pbXBvcnQgRHluYW1pY1RleHQgZnJvbSAnLi9EeW5hbWljVGV4dC5qcyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZS5qcyc7XG5cbi8vQ2hhcmFjdGVyIGluaGVyaXRhbmNlXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbmltcG9ydCBUcnVtcCBmcm9tICcuL1RydW1wLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIuanMnO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5pbXBvcnQgTGlvbiBmcm9tICcuL0xpb24uanMnO1xuaW1wb3J0IFRpZ2VyIGZyb20gJy4vVGlnZXIuanMnO1xuaW1wb3J0IEJlYXIgZnJvbSAnLi9CZWFyLmpzJztcbmltcG9ydCBHb3JpbGxhIGZyb20gJy4vR29yaWxsYS5qcyc7XG5pbXBvcnQgSGVhbHRoIGZyb20gJy4vSGVhbHRoLmpzJztcblxuLy9BcmVhIGluaGVyaXRhbmNlLlxuaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcbmltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XG5pbXBvcnQgQW5pbWFsQXJlYSBmcm9tICcuL0FuaW1hbEFyZWEuanMnO1xuaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi9QbGF5ZXJBcmVhLmpzJztcblxuLy9UZXN0IGZpbGUgKHZlcnkgc2ltcGxlIHRlc3RydW5uZXIpXG5pbXBvcnQgVGVzdHMgZnJvbSAnLi4vLi4vdGVzdHMvVGVzdHMuanMnO1xuXG4vKiogXG4gKiBTZXQgdXAgdGVzdHMuXG4gKi9cbnZhciBteVRlc3RzID0gbmV3IFRlc3RzKCk7XG5cbi8qKlxuICogU2V0IHVwIHRoZSBHYW1lXG4gKi9cbnZhciBteUdhbWUgPSBuZXcgR2FtZSh7bmFtZTogXCJab29LaWxsU29jY2VyXCJ9KTtcblxuLyoqIFxuICogRVhQT1JUIFRPIFdFQiBDT05TT0xFXG4gKiBUbyBtYWtlIHNvbWV0aGluZyB2aXNpYmxlIGluIFdlYiBjb25zb2xlIGZvciBkZWJ1Z2dpbnQsIGF0dGFjaCB0byB3aW5kb3cgb2JqZWN0XG4gKiBOT1RFOiBQcm9mZXNzaW9uYWwgY29kZSB1c2VzIHNwZWNpYWxpemVkIHRlc3RpbmcgbW9kdWxlcyBsaWtlIE1vY2hhLCBLYXJtYSwgYW5kIFxuICogc2ltaWxhciB0ZXN0aW5nIGxpYnJhcmllcy5cbiAqL1xuXG4vLyB3ZSBjYW4gcnVuIHRoaXMgdGVzdCBtYW51YWxseSB3aXRoIHRlc3RzLnJ1bigpO1xud2luZG93LnRlc3RzID0gbXlUZXN0cztcblxuLy8gbWFrZSB0aGUgZ2FtZSBvYmplY3QgdmlzaWJsZSBzbyB3ZSBjYW4gaW5zcGVjdCBpdC5cbndpbmRvdy5nYW1lID0gbXlHYW1lO1xuXG5jb25zb2xlLmxvZygnWk9PS0lMTFNPQ0NFUiBHYW1lIGluaXRpYWxpemVkLiBBY2Nlc3MgZ2FtZSB2aWEgXCJnYW1lXCIuIFVzZSBUZXN0cy5ydW4oKSB0byB0ZXN0LicpXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi4vbW9kdWxlcy9qcy9HYW1lUGllY2UuanMnO1xuXG4vL1RoZSBlbnRpcmUgZ2FtZVxuaW1wb3J0IEdhbWUgZnJvbSAnLi4vbW9kdWxlcy9qcy9HYW1lLmpzJztcblxuLy9TY3JlZW4gaW5oZXJpdGFuY2VcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi4vbW9kdWxlcy9qcy9TY3JlZW4uanMnO1xuaW1wb3J0IFN0YXJ0U2NyZWVuIGZyb20gJy4uL21vZHVsZXMvanMvU3RhcnRTY3JlZW4uanMnO1xuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi4vbW9kdWxlcy9qcy9HYW1lU2NyZWVuLmpzJztcbmltcG9ydCBFbmRTY3JlZW4gZnJvbSAnLi4vbW9kdWxlcy9qcy9FbmRTY3JlZW4uanMnO1xuXG4vL0luZm8gaW5oZXJpdGFuY2VcbmltcG9ydCBJbmZvIGZyb20gJy4uL21vZHVsZXMvanMvSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuLi9tb2R1bGVzL2pzL1RleHQuanMnO1xuaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi4vbW9kdWxlcy9qcy9TdGF0aWNUZXh0LmpzJztcbmltcG9ydCBJZGVudGl0eSBmcm9tICcuLi9tb2R1bGVzL2pzL0lkZW50aXR5LmpzJztcbmltcG9ydCBJbnN0cnVjdGlvbnMgZnJvbSAnLi4vbW9kdWxlcy9qcy9JbnN0cnVjdGlvbnMuanMnO1xuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4uL21vZHVsZXMvanMvRHluYW1pY1RleHQuanMnO1xuaW1wb3J0IFNjb3JlIGZyb20gJy4uL21vZHVsZXMvanMvU2NvcmUuanMnO1xuXG4vL0NoYXJhY3RlciBpbmhlcml0YW5jZVxuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuLi9tb2R1bGVzL2pzL0NoYXJhY3Rlci5qcyc7XG5pbXBvcnQgVHJ1bXAgZnJvbSAnLi4vbW9kdWxlcy9qcy9UcnVtcC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL21vZHVsZXMvanMvUGxheWVyLmpzJztcbmltcG9ydCBBbmltYWwgZnJvbSAnLi4vbW9kdWxlcy9qcy9BbmltYWwuanMnO1xuaW1wb3J0IExpb24gZnJvbSAnLi4vbW9kdWxlcy9qcy9MaW9uLmpzJztcbmltcG9ydCBUaWdlciBmcm9tICcuLi9tb2R1bGVzL2pzL1RpZ2VyLmpzJztcbmltcG9ydCBCZWFyIGZyb20gJy4uL21vZHVsZXMvanMvQmVhci5qcyc7XG5pbXBvcnQgR29yaWxsYSBmcm9tICcuLi9tb2R1bGVzL2pzL0dvcmlsbGEuanMnO1xuaW1wb3J0IEhlYWx0aCBmcm9tICcuLi9tb2R1bGVzL2pzL0hlYWx0aC5qcyc7XG5cbi8vQXJlYSBpbmhlcml0YW5jZS5cbmltcG9ydCBBcmVhIGZyb20gJy4uL21vZHVsZXMvanMvQXJlYS5qcyc7XG5pbXBvcnQgQ2FnZSBmcm9tICcuLi9tb2R1bGVzL2pzL0NhZ2UuanMnO1xuaW1wb3J0IEFuaW1hbEFyZWEgZnJvbSAnLi4vbW9kdWxlcy9qcy9BbmltYWxBcmVhLmpzJztcbmltcG9ydCBQbGF5ZXJBcmVhIGZyb20gJy4uL21vZHVsZXMvanMvUGxheWVyQXJlYS5qcyc7XG5cbi8qKiBcbiAqIFRFU1RCRUQgLSBUZXN0IGFsbCBvdXIgb2JqZWN0cy4gVGhpcyBpcyBhIHZlcnkgYmFzaWMgdGVzdGluZyBzeXN0ZW0uIFxuICogTk9URTogUHJvZmVzc2lvbmFsIGNvZGUgdXNlcyB0ZXN0aW5nIGxpYnJhcmllcyBsaWtlIEthcm1hIGFuZCBNb2NoYS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdHMge1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcblx0fVxuXG5cdC8vIEJlY2F1c2Ugd2UgbWFrZSB0aGVzZSBvYmplY3RzIHdpdGggJ3ZhcicgdGhleSBhcmUgc2NvcGVkIHRvIHRoZSBydW4oKSBmdW5jdGlvbi5cblx0cnVuICgpIHtcblxuXHRcdHZhciBjb25maWcgPSB7bmFtZTonRm9yZXN0IFRydW1wIG9yIERvbmFsZCBHdW1wIHJ1bHonfTtcblxuXHRcdC8vIE1ha2Ugc29tZSB0ZXN0IGdhbWUgb2JqZWN0c1xuXHRcdHZhciBnYW1lID0gbmV3IEdhbWUoY29uZmlnKTtcblx0XHRjb25zb2xlLmxvZyhnYW1lLmdldE5hbWUoKSk7XG5cblx0XHQvL3Rlc3QgR2FtZSBPYmplY3Rcblx0XHR2YXIgbXlHYW1lID0gbmV3IEdhbWUoe25hbWU6IFwiWm9vS2lsbFNvY2NlclwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlHYW1lLmdldE5hbWUoKSk7XG5cblx0XHQvL290aGVyIG9iamVjdHNcblx0XHR2YXIgbXlTY3JlZW4gPSBuZXcgU2NyZWVuKHtuYW1lOiBcIk9wZW5pbmcgU2NyZWVuXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVNjcmVlbi5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15U3RhcnRTY3JlZW4gPSBuZXcgU3RhcnRTY3JlZW4oe25hbWU6IFwiU3RhcnQgU2NyZWVuXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVN0YXJ0U2NyZWVuLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlHYW1lU2NyZWVuID0gbmV3IEdhbWVTY3JlZW4oe25hbWU6IFwiR2FtZSBTY3JlZW5cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15R2FtZVNjcmVlbi5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15RW5kU2NyZWVuID0gbmV3IEVuZFNjcmVlbih7bmFtZTogXCJFbmQgU2NyZWVuXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUVuZFNjcmVlbi5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15SW5mbyA9IG5ldyBJbmZvKHtuYW1lOiBcIkdlbmVyaWMgSW5mb3JtYXRpb25cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15SW5mby5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15VGV4dCA9IG5ldyBUZXh0KHtuYW1lOiBcIkdlbmVyaWMgVGV4dCBPYmplY3RcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15VGV4dC5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15U3RhdGljVGV4dCA9IG5ldyBTdGF0aWNUZXh0KHtuYW1lOiBcIkdlbmVyaWMgU3RhdGljIFRleHQgT2JqZWN0XCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVN0YXRpY1RleHQuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUlkZW50aXR5ID0gbmV3IElkZW50aXR5KHtuYW1lOiBcIkdlbmVyaWMgSWRlbnRpdHkgT2JqZWN0XCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUlkZW50aXR5LmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlJbnN0cnVjdGlvbnMgPSBuZXcgSW5zdHJ1Y3Rpb25zKHtuYW1lOiBcIkdlbmVyaWMgSW5zdHJ1Y3Rpb25zIE9iamVjdFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlJbnN0cnVjdGlvbnMuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUR5bmFtaWNUZXh0ID0gbmV3IER5bmFtaWNUZXh0KHtuYW1lOiBcIkdlbmVyaWMgRHluYW1pYyBUZXh0IE9iamVjdFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlEeW5hbWljVGV4dC5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15U2NvcmUgPSBuZXcgU2NvcmUoe25hbWU6IFwic2NvcmVzLi4uXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVNjb3JlLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlDaGFyYWN0ZXIgPSBuZXcgQ2hhcmFjdGVyKHtuYW1lOiBcIkdlbmVyaWMgQ2hhcmFjdGVyXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUNoYXJhY3Rlci5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15VHJ1bXAgPSBuZXcgVHJ1bXAoe25hbWU6IFwiRG9uYWxkIFRydW1wXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVRydW1wLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlQbGF5ZXIgPSBuZXcgUGxheWVyKHtuYW1lOiBcIkVuZCBVc2VyXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVBsYXllci5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15QW5pbWFsID0gbmV3IEFuaW1hbCh7bmFtZTogXCJHZW5lcmljIEFuaW1hbFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlBbmltYWwuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUxpb24gPSBuZXcgTGlvbih7bmFtZTogXCJDb3dhcmRseSB0aGUgTGlvblwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlMaW9uLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlUaWdlciA9IG5ldyBUaWdlcih7bmFtZTogXCJDaG9tcGVyIHRoZSBUaWdlclwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlUaWdlci5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15QmVhciA9IG5ldyBCZWFyKHtuYW1lOiBcIk1hdWxlciB0aGUgQmVhclwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlCZWFyLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlHb3JpbGxhID0gbmV3IEdvcmlsbGEoeyBuYW1lOiBcIlNwdW5reSB0aGUgR29yaWxsYVwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlHb3JpbGxhLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlIZWFsdGggPSBuZXcgSGVhbHRoKHtuYW1lOiBcIk9uZSBIZWFsdGggS2l0XCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUhlYWx0aC5nZXROYW1lKCkpO1xuXG5cdFx0Ly9BcmVhIGluaGVyaXRhbmNlLlxuXHRcdHZhciBteUFyZWEgPSBuZXcgQXJlYSh7bmFtZTogXCJHZW5lcmljIEFyZWFcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15QXJlYS5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15Q2FnZSA9IG5ldyBDYWdlKHtuYW1lOiBcIkdlbmVyaWMgQXJlYVwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlDYWdlLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlBbmltYWxBcmVhID0gbmV3IEFuaW1hbEFyZWEoe25hbWU6IFwiQW5pbWFsQXJlYVwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlBbmltYWxBcmVhLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlQbGF5ZXJBcmVhID0gbmV3IFBsYXllckFyZWEoe25hbWU6IFwiUGxheWVyQXJlYVwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlQbGF5ZXJBcmVhLmdldE5hbWUoKSk7XG5cdH1cbn1cbiJdfQ==
