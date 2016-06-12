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
         * @description init random motions along a path. Used for 
         * Animal characters moving through the AnimalArea.
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
         * @description have a Trump init.
         * NOTE: collision potential added separately
         */

    }, {
        key: 'initPingPong',
        value: function initPingPong(prefSpeed, trump) {
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
         * @description generate random walk, with one preferred direction, 
         * used by Animals.
            * this.obj.direction is the overall path the Animal is following to one of the 
            * four walls of the AnimalArea. If it is 'return' it has collided with a Trump
            * and is returning to its cage.
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

            // Play animal's opening sound once at start of movement
            if (this.firstMove && this.game.soundPool) {
                this.game.soundPool.playSound(this.obj.constructor.name.toLowerCase(), 0.7);
                this.firstMove = false;
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
         * @method pingPong
         * @description move in a ping-pong style. This is specific to the game.
         * 1. collision starts the character moving
         * 2. they bounce on all walls EXCEPT the one they were closest to when collide with
         * 3. when they intersect that wall, they stop
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
 * @class Sounder
 * @description provide sounds that other objects can play.
 * Adapted from
 * @http://blog.sklambert.com/html5-canvas-game-html5-audio-and-finishing-touches/
 * Audio converters
 * @link http://media.io/
 * @link https://sourceforge.net/projects/audacity/
 * @link http://www.mediahuman.com/audio-converter/
 * @link http://www.html5audioconverter.com/
 * Audio Samples
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
	}, {
		key: 'setSound',
		value: function setSound(e, name, volume) {
			if (!volume) {
				volume = 0.5;
			}
			this.sounds[name] = e.target;
			this.sounds[name].volume = volume;
		}
	}, {
		key: 'soundError',
		value: function soundError(e, name) {
			console.error('Audio ' + name + ' faied to load');
			this.sounds[name] = null;
		}
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
					console.log("TRYING TO LOAD:" + this.path + name + '.' + i);
					snd = new Audio('audio/' + name + '.' + i);
					snd.addEventListener('loadeddata', function (event) {
						return _this.setSound(event, name, volume);
					}, false);

					snd.addEventListener('error', function (event) {
						return _this.soundError(event, name);
					}, false);

					snd.load();
					break;
				}
			}
			if (!snd) {
				console.error('sound file for:' + name + ' not found in audio');
			}

			//snd.addEventListener('ended', function() {
			//	this.sounds[name] = snd;
			//}, false);
		}
	}, {
		key: 'playSound',
		value: function playSound(name) {
			if (this.sounds[name]) {
				this.sounds[name].play();
			} else {
				console.error('no sound file with name:' + name + ' in audio folder');
			}
		}
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

    _this.mover.initPingPong(0, _this);
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzXFxqc1xcQW5pbWFsLmpzIiwibW9kdWxlc1xcanNcXEFuaW1hbEFyZWEuanMiLCJtb2R1bGVzXFxqc1xcQXJlYS5qcyIsIm1vZHVsZXNcXGpzXFxCYWNrZ3JvdW5kLmpzIiwibW9kdWxlc1xcanNcXEJlYXIuanMiLCJtb2R1bGVzXFxqc1xcQ2FnZS5qcyIsIm1vZHVsZXNcXGpzXFxDaGFyYWN0ZXIuanMiLCJtb2R1bGVzXFxqc1xcQ29sbGlkZXIuanMiLCJtb2R1bGVzXFxqc1xcRHluYW1pY1RleHQuanMiLCJtb2R1bGVzXFxqc1xcRW5kU2NyZWVuLmpzIiwibW9kdWxlc1xcanNcXEdhbWUuanMiLCJtb2R1bGVzXFxqc1xcR2FtZVBpZWNlLmpzIiwibW9kdWxlc1xcanNcXEdhbWVTY3JlZW4uanMiLCJtb2R1bGVzXFxqc1xcR29yaWxsYS5qcyIsIm1vZHVsZXNcXGpzXFxIZWFsdGguanMiLCJtb2R1bGVzXFxqc1xcSWRlbnRpdHkuanMiLCJtb2R1bGVzXFxqc1xcSW1hZ2UuanMiLCJtb2R1bGVzXFxqc1xcSW5mby5qcyIsIm1vZHVsZXNcXGpzXFxJbnN0cnVjdGlvbnMuanMiLCJtb2R1bGVzXFxqc1xcTGlvbi5qcyIsIm1vZHVsZXNcXGpzXFxNb3Zlci5qcyIsIm1vZHVsZXNcXGpzXFxQbGF5ZXIuanMiLCJtb2R1bGVzXFxqc1xcUGxheWVyQXJlYS5qcyIsIm1vZHVsZXNcXGpzXFxTY29yZS5qcyIsIm1vZHVsZXNcXGpzXFxTY3JlZW4uanMiLCJtb2R1bGVzXFxqc1xcU291bmRlci5qcyIsIm1vZHVsZXNcXGpzXFxTdGFydFNjcmVlbi5qcyIsIm1vZHVsZXNcXGpzXFxTdGF0aWNJbWFnZS5qcyIsIm1vZHVsZXNcXGpzXFxTdGF0aWNUZXh0LmpzIiwibW9kdWxlc1xcanNcXFRleHQuanMiLCJtb2R1bGVzXFxqc1xcVGlnZXIuanMiLCJtb2R1bGVzXFxqc1xcVHJ1bXAuanMiLCJtb2R1bGVzXFxqc1xcaW5kZXguanMiLCJ0ZXN0c1xcVGVzdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQ0tDOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCLE07OztBQUVwQixrQkFBYSxNQUFiLEVBQXFCO0FBQUE7Ozs7O0FBQUEsMEZBQ2IsTUFEYTs7QUFLcEIsVUFBSyxLQUFMLENBQVcsY0FBWCxDQUEwQixJQUExQixFQUFnQyxRQUFoQzs7O0FBTG9CO0FBUXBCOzs7Ozs7OzZCQUdTO0FBQ1QsV0FBSyxLQUFMLENBQVcsZ0JBQVg7QUFDQTs7Ozs7Ozs7a0JBZm1CLE07Ozs7Ozs7OztBQ1pyQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQixJOzs7QUFFcEIsZ0JBQWEsTUFBYixFQUFxQjtBQUFBOztBQUFBLG1GQUNkLE1BRGM7QUFFcEI7Ozs7O2tCQUptQixJOzs7Ozs7Ozs7OztBQ0ZyQjs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLEk7OztBQUVwQixnQkFBYSxNQUFiLEVBQXFCO0FBQUE7Ozs7QUFBQSx3RkFDZCxNQURjOztBQUlwQixVQUFLLFFBQUwsQ0FBYyxPQUFPLElBQXJCLEVBQTJCLE9BQU8sU0FBbEMsRUFBNkMsT0FBTyxJQUFwRDs7O0FBR0EsVUFBSyxjQUFMLENBQW9CLE9BQU8sUUFBM0IsRTtBQUNBLFVBQUssVUFBTCxDQUFnQixPQUFPLElBQXZCO0FBUm9CO0FBU3BCOzs7Ozs7OzZCQUdTLEksRUFBTSxTLEVBQVcsTyxFQUFTO0FBQ25DLFdBQUssR0FBTCxHQUFXLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0EsV0FBSyxHQUFMLENBQVMsRUFBVCxHQUFjLE9BQU8sT0FBckI7OztBQUdBLFdBQUssR0FBTCxDQUFTLEtBQVQsQ0FBZSxRQUFmLEdBQTBCLFVBQTFCOzs7QUFHQSxXQUFLLEdBQUwsQ0FB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ZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqIFxyXG4gKiBBbmltYWwuanNcclxuICogVGhlIGNyaXR0ZXJzIHRoYXQgVHJ1bXAgdHJpZXMgdG8gc3RvcCBmcm9tIGdldHRpbmcgdGhlIFBsYXllci5cclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcclxuXHJcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xyXG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xyXG5cclxuIC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxyXG4gaW1wb3J0IE1vdmVyIGZyb20gJy4vTW92ZXIuanMnO1xyXG4gaW1wb3J0IENvbGxpZGVyIGZyb20gJy4vQ29sbGlkZXIuanMnO1xyXG4gLy8gRU5EIEFEREVEIFdFRUsgMTE8PDw8PDw8PDw8PDw8XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbWFsIGV4dGVuZHMgQ2hhcmFjdGVyIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlciAoY29uZmlnKTtcclxuXHJcbiBcdFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXHJcbiBcdFx0Ly8gQW5pbWFscyBnZXQgUmFuZG9tV2FsayBtb3Rpb25cclxuIFx0XHR0aGlzLm1vdmVyLmluaXRSYW5kb21XYWxrKDAuMDIsICdib3R0b20nKTtcclxuIFx0XHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XHJcblxyXG4gXHR9XHJcblxyXG4gXHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcclxuIFx0dXBkYXRlICgpIHtcclxuIFx0XHR0aGlzLm1vdmVyLnVwZGF0ZVJhbmRvbVdhbGsoKTtcclxuIFx0fVxyXG4gXHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XHJcblxyXG4gfSIsIi8qKiBcclxuICogQW5pbWFsQXJlYS5qc1xyXG4gKiBUaGUgcmVnaW9uIGFuaW1hbHMgbW92ZSB0aHJvdWdoIHRvIGdldCB0byBQbGF5ZXIuXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEFyZWFcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FnZSBleHRlbmRzIEFyZWEge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyKGNvbmZpZyk7XHJcbiBcdH1cclxuXHJcbiB9IiwiLyoqIFxyXG4gKiBBcmVhLmpzXHJcbiAqIEEgZ2VuZXJpYyByZWdpb24gb2YgdGhlIGdhbWUgc2NyZWVuLiBVc2VkIHRvIGFkZCB2aXN1YWwgb2JqZWN0cywgYW5kIFxyXG4gKiBjcmVhdGUgYm91bmRzIGZvciBjb2xsaXNpb24gZGV0ZWN0aW9uLlxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBJbmZvLCBJbWFnZSwgU3RhdGljSW1hZ2VcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuXHJcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xyXG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyZWEgZXh0ZW5kcyBHYW1lUGllY2Uge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gXHRcdC8vIGNyZWF0ZSBhIDxkaXY+LCBhZGQgdG8gRE9NLCB3aXRoIG9wdGlvbmFsIGltYWdlXHJcbiBcdFx0dGhpcy5hZGRUb0RPTShjb25maWcubmFtZSwgY29uZmlnLmNvbnRhaW5lciwgY29uZmlnLnBhdGgpO1xyXG5cclxuIFx0XHQvLyBwb3NpdGlvbiB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVkXHJcbiBcdFx0dGhpcy5zZXRET01Qb3NpdGlvbihjb25maWcucG9zaXRpb24pOyAvL2luaGVyaXRlZCBmcm9tIEdhbWVQaWVjZVxyXG4gXHRcdHRoaXMuc2V0RE9NU2l6ZShjb25maWcuc2l6ZSk7XHJcbiBcdH1cclxuXHJcbiBcdC8vIGNyZWF0ZSBET00gZWxlbWVudCwgTG9hZCBhIGJhY2tncm91bmQgaW1hZ2UsIGFuZCBpbnNlcnQgaW50byBjb250YWluZXJcclxuIFx0YWRkVG9ET00gKG5hbWUsIGNvbnRhaW5lciwgaW1nUGF0aCkge1xyXG4gXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiBcdFx0dGhpcy5kb20uaWQgPSBuYW1lICsgJy1hcmVhJztcclxuXHJcbiBcdFx0Ly8gcG9zaXRpb24gYWJzb2x1dGVseVxyXG4gXHRcdHRoaXMuZG9tLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHJcbiBcdFx0Ly8gRG9uJ3QgYWxsb3cgcGFkZGluZyBvciBtYXJnaW5zIG9yIGJvcmRlcnMgZm9yIEFyZWFzXHJcbiBcdFx0dGhpcy5kb20uc3R5bGUubWFyZ2luID0gJzBweCc7XHJcbiBcdFx0dGhpcy5kb20uc3R5bGUucGFkZGluZyA9ICcwcHgnO1xyXG5cclxuIFx0XHQvLyBhZGQgdG8gdGhlIERPTVxyXG4gXHRcdGNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGhpcy5kb20sIGNvbnRhaW5lci5jaGlsZE5vZGVzWzBdKTtcclxuXHJcbiBcdFx0Ly8gaWYgd2UgaGF2ZSBhbiBpbWFnZSwgaW5zZXJ0IGluIGVsZW1lbnQgYmFja2dyb3VuZFxyXG4gXHRcdGlmIChpbWdQYXRoKSB7XHJcblxyXG4gXHRcdFx0dGhpcy5pbWFnZSA9IG5ldyBTdGF0aWNJbWFnZShcclxuIFx0XHRcdFx0e1xyXG4gXHRcdFx0XHRcdG5hbWU6IHRoaXMuZG9tLmlkICsgJy1pbWFnZSdcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0KTtcclxuXHJcbiBcdFx0XHR0aGlzLmltYWdlLmxvYWRCYWNrZ3JvdW5kSW1hZ2UgKHRoaXMuZG9tLCBpbWdQYXRoKTtcclxuIFx0XHR9XHJcblxyXG4gXHR9XHJcblxyXG4gXHQvLyBib3VuZHMgZGV0ZWN0b3IgZm9yIHN1cHBsaWVkIENoYXJhY3RlclxyXG5cclxuXHJcbiB9IiwiLyoqIFxyXG4gKiBCYWNrZ3JvdW5kLmpzXHJcbiAqIEdhbWUgTG9nb3MsIExvZ29UeXBlcywgQnJhbmQgTmFtZVxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcclxuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmQgZXh0ZW5kcyBTdGF0aWNJbWFnZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuXHRcdHN1cGVyKGNvbmZpZyk7XHJcblxyXG5cdFx0dGhpcy5zZXRTb3VyY2UoY29uZmlnLnNvdXJjZSk7XHJcblx0XHR0aGlzLnNldEF1dGhvcihjb25maWcuYXV0aG9yKTtcclxuXHRcdHRoaXMubG9hZEJhY2tncm91bmRJbWFnZShjb25maWcuZG9tSWQsIGNvbmZpZy5wYXRoKTtcclxuXHR9XHJcblxyXG59XHJcbiIsIi8qKiBcclxuICogQmVhci5qc1xyXG4gKiBBIFRpZ2VyLCB3aG8gdHJpZXMgdG8gZ2V0IHRoZSBQbGF5ZXIuXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XHJcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBCZWFyIGV4dGVuZHMgQW5pbWFsIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlciAoY29uZmlnKTtcclxuIFx0fVxyXG5cclxuXHJcbiB9IiwiLyoqIFxyXG4gKiBDYWdlLmpzXHJcbiAqIFRoZSByZWdpb24gd2hlcmUgYW5pbWFscyBhcmUgY2FnZWQuXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEFyZWFcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FnZSBleHRlbmRzIEFyZWEge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG5cclxuIFx0XHRzdXBlcihjb25maWcpO1xyXG5cclxuIFx0fVxyXG5cclxuIH0iLCIvKiogXHJcbiAqIENoYXJhY3Rlci5qc1xyXG4gKiBHYW1lLWdlbmVyYXRlZCBvciB1c2VyIGF2YXRhcnMuIENoYXJhY3RlcnMgYXJlIHJlbmRlcmVkIGluIENhbnZhcywgYnV0IGhhdmUgdGhlaXIgXHJcbiAqIHBvc2l0aW9uIGNvbXB1dGVkIGFuZCB1cGRhdGVkIG91dHNpZGUgY2FudmFzLlxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcblxyXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcclxuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcclxuXHJcbiAvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcclxuIGltcG9ydCBNb3ZlciBmcm9tICcuL01vdmVyLmpzJztcclxuIGltcG9ydCBDb2xsaWRlciBmcm9tICcuL0NvbGxpZGVyLmpzJztcclxuIC8vIEVORCBBRERFRCBXRUVLIDExPDw8PDw8PDw8PDw8PFxyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlciBleHRlbmRzIEdhbWVQaWVjZSB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XHJcblxyXG4gXHRcdCAvLyBzdG9yZSBhIHJlZmVyZW5jZSB0byB0aGUgZ2FtZSBvYmplY3RcclxuIFx0XHR0aGlzLmdhbWUgPSBjb25maWcuZ2FtZTtcclxuXHJcbiBcdFx0Ly8gU2V0IHBvc2l0aW9uIGFuZCBzaXplIGZyb20gY29uZmlndXJhdGlvblxyXG4gXHRcdHRoaXMucG9zaXRpb24gPSBjb25maWcucG9zaXRpb247XHJcbiBcdFx0dGhpcy5zaXplID0gY29uZmlnLnNpemU7XHJcblxyXG4gXHRcdHdpbmRvdy50aGVHYW1lID0gY29uZmlnLmdhbWU7XHJcblxyXG4gXHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxyXG4gXHRcdHRoaXMubW92ZXIgPSBuZXcgTW92ZXIodGhpcyk7XHJcbiBcdFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxyXG5cclxuXHJcblxyXG4gXHRcdHRoaXMuaW1hZ2UgPSBuZXcgU3RhdGljSW1hZ2UoXHJcbiBcdFx0XHR7XHJcbiBcdFx0XHRcdG5hbWU6IGNvbmZpZy5uYW1lICsgJy1pbWFnZScsXHJcbiBcdFx0XHRcdHBhdGg6IGNvbmZpZy5wYXRoXHJcbiBcdFx0XHR9XHJcbiBcdFx0KTtcclxuXHJcbiBcdFx0Ly8gSW1hZ2VzIGRvbid0IGF1dG9tYXRpY2FsbHkgbG9hZCB3aGVuIHRoZXkncmUgbm90IGF0dGFjaGVkIHRvIHRoZSBET00sIFxyXG4gXHRcdC8vIG9yIGEgQ1NTIGJhY2tncm91bmQgaW1hZ2VcclxuIFx0XHR0aGlzLmltYWdlLmxvYWQoY29uZmlnLnBhdGgsIGZ1bmN0aW9uICgpIHtjb25zb2xlLmxvZygnbG9hZGVkOicgKyBjb25maWcubmFtZSk7fSk7XHJcbiBcdH1cclxuXHJcbiBcdC8vIG92ZXJyaWRlIGRlZmF1bHQgZHJhdyB3aXRoIG91ciBvd25cclxuIFx0ZHJhdyAoY29udGV4dCkge1xyXG5cdFx0aWYgKHRoaXMuaW1hZ2UpIHtcclxuXHRcdFx0dmFyIGltZyA9IHRoaXMuaW1hZ2UuZGF0YTtcclxuIFx0XHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxyXG5cdFx0XHQvL2NvbnNvbGUubG9nKCdkcmF3aW5nJylcclxuXHRcdFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxyXG5cdFx0XHRpZiAoaW1nKSB7XHJcblx0XHRcdFx0Ly8gZHJhdyBpbWFnZSBpbnRvIEhUTUw1IGNhbnZhc1xyXG4gXHRcdCBcdFx0Y29udGV4dC5kcmF3SW1hZ2UoaW1nLCB0aGlzLnBvc2l0aW9uLmxlZnQsIHRoaXMucG9zaXRpb24udG9wKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG4gXHR9XHJcbiB9IiwiLyoqIFxyXG4gKiBAY2xhc3MgQ29sbGlkZXJcclxuICogQGRlc2NyaXB0aW9uIGNyZWF0ZSB0aGUgY29sbGlzaW9uIG1hdHJpeCBkZWZpbmluZyB3aGljaCBvYmplY3RzIGNhbiBjb2xsaWRlIFxyXG4gKiB3aXRoIHdoaWNoIG9iamVjdHMuIE9iamVjdHMgdGhhdCBjYW4gY29sbGlkZSBoYXZlIHRoZWlyIHBvdGVudGlhbCBjb2xsaWRlcnMgXHJcbiAqIGFkZGVkIGFzIHJlZmVyZW5jZXMsIGUuZy4gUGxheWVyLnRydW1wIG9yIFRydW1wLnBsYXllci5cclxuICovXHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGlkZXIge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNoYXJhY3RlckFycmF5KSB7XHJcbiBcdFx0dGhpcy5jaGFyYWN0ZXJBcnJheSA9IGNoYXJhY3RlckFycmF5O1xyXG4gXHRcdHRoaXMuYW5pbWFsQXJyYXkgPSBbXTsgLy9maWxsZWQgdXAgaW4gc2V0VXBDb2xsaXNpb25zXHJcbiBcdFx0dGhpcy5zZXRVcENvbGxpc2lvbnMoKTtcclxuIFx0fVxyXG5cclxuIFx0c2V0VXBDb2xsaXNpb25zICgpIHtcclxuIFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5jaGFyYWN0ZXJBcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gXHRcdFx0c3dpdGNoICh0aGlzLmNoYXJhY3RlckFycmF5W2ldLmNvbnN0cnVjdG9yLm5hbWUpIHtcclxuIFx0XHRcdFx0Y2FzZSAnTGlvbic6XHJcbiBcdFx0XHRcdGNhc2UgJ1RpZ2VyJzpcclxuIFx0XHRcdFx0Y2FzZSAnQmVhcic6XHJcbiBcdFx0XHRcdGNhc2UgJ0dvcmlsbGEnOlxyXG4gXHRcdFx0XHRcdHRoaXMuYW5pbWFsQXJyYXkucHVzaCh0aGlzLmNoYXJhY3RlckFycmF5W2ldKTtcclxuIFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0Y2FzZSAnVHJ1bXAnOlxyXG4gXHRcdFx0XHRcdHRoaXMudHJ1bXAgPSB0aGlzLmNoYXJhY3RlckFycmF5W2ldO1xyXG4gXHRcdFx0XHRcdGJyZWFrO1xyXG4gXHRcdFx0XHRjYXNlICdQbGF5ZXInOlxyXG4gXHRcdFx0XHRcdHRoaXMucGxheWVyID0gdGhpcy5jaGFyYWN0ZXJBcnJheVtpXTtcclxuIFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdFx0ZGVmYXVsdDpcclxuIFx0XHRcdFx0XHRicmVhaztcclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcblxyXG4gXHRcdC8vY3Jvc3MtY29ubmVjdCB0aGUgaW1wYWN0b3JzXHJcbiBcdFx0dGhpcy50cnVtcC5wbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuIFx0XHR0aGlzLnRydW1wLmFuaW1hbHMgPSB0aGlzLmFuaW1hbEFycmF5O1xyXG4gXHRcdHRoaXMucGxheWVyLnRydW1wID0gdGhpcy50cnVtcDtcclxuXHJcbiBcdFx0Ly9ERUJVR1xyXG4gXHRcdHdpbmRvdy5hbmltYWxzID0gdGhpcy50cnVtcC5hbmltYWxzO1xyXG4gXHRcdFxyXG5cclxuIFx0fVxyXG4gfSIsIi8qKiBcclxuICogRHluYW1pY1RleHQuanNcclxuICogVGV4dCB0aGF0IGNhbiBiZSBjaGFuZ2VkIGJ5IHVzZXIgKGUuZy4gaW5wdXQgZmllbGQpLCBvciBcclxuICogdXBkYXRlZCBieSB0aGUgZ2FtZSBpdHNlbGYuXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG4gaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNUZXh0IGV4dGVuZHMgVGV4dCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuXHRcdHN1cGVyKGNvbmZpZyk7XHJcblx0fVxyXG59XHJcbiIsIi8qKiBcclxuICogRW5kU2NyZWVuLmpzXHJcbiAqIEVuZGluZyBzY3JlZW4gZm9yIHRoZSBnYW1lLlxyXG4gKiBAaW5oZXJpdHMgU2NyZWVuLCBHYW1lUGllY2VcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xyXG4gXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gXHRcdC8vIGxvYWQgdGhlIGJhY2tncm91bmQgaW1hZ2VcclxuIFx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kKCdpbWcvc2NyZWVucy9lbmQtc2NyZWVuLnBuZycpO1xyXG5cclxuIFx0XHQvLyBMb2FkIEVuZFNjcmVlbiBzdWItb2JqZWN0c1xyXG4gXHRcdHRoaXMubG9hZElucHV0U2NvcmUoKTtcclxuIFx0XHR0aGlzLmxvYWRIaWdoU2NvcmVzKCk7XHJcblxyXG4gXHRcdC8vIEJpbmQgXCJwbGF5IGFnYWluXCIgYW5kIFwiaW5zdHJ1Y3Rpb25zXCIgYnV0dG9ucy5cclxuIFx0XHR0aGlzLmJpbmRSZXBsYXkoKTtcclxuIFx0XHR0aGlzLmJpbmRJbnN0cnVjdGlvbnMoKTtcclxuIFx0fVxyXG5cclxuIFx0bG9hZElucHV0U2NvcmUgKCkge1xyXG5cclxuIFx0fVxyXG5cclxuIFx0bG9hZEhpZ2hTY29yZXMgKCkge1xyXG5cclxuIFx0fVxyXG5cclxuIFx0YmluZFJlcGxheSAoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImluIGJpbmRTdGFydCwgdGhpcy5nYW1lOlwiICsgdGhpcy5nYW1lKVxyXG5cdFx0Ly8gd2UgdXNlIGJpbmQoKSB0byBsaW5rIHRoZSBmdW5jdGlvbiBiZWxvdyB0byBTdGFydFNjcmVlbiAob3RoZXJ3aXNlLCBpdCB0aGlua3MgaXQgaXMgaW5zaWRlIHdpbmRvdylcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmQtc2NyZWVuLXBsYXktYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBcclxuXHRcdFx0ZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHQvL2FsZXJ0KFwiaW4gaGFuZGxlciwgZ2FtZTpcIiArIHRoaXMuZ2FtZSlcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0dGhpcy5nYW1lLnN0YXJ0R2FtZSgpO1xyXG5cclxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcclxuXHR9XHJcblxyXG5cdGJpbmRJbnN0cnVjdGlvbnMgKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpbiBiaW5kU3RhcnQsIHRoaXMuZ2FtZTpcIiArIHRoaXMuZ2FtZSlcclxuXHRcdC8vIHdlIHVzZSBiaW5kKCkgdG8gbGluayB0aGUgZnVuY3Rpb24gYmVsb3cgdG8gU3RhcnRTY3JlZW4gKG90aGVyd2lzZSwgaXQgdGhpbmtzIGl0IGlzIGluc2lkZSB3aW5kb3cpXHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kLXNjcmVlbi1pbnN0cnVjdGlvbnMtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBcclxuXHRcdFx0ZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHQvL2FsZXJ0KFwiaW4gaGFuZGxlciwgZ2FtZTpcIiArIHRoaXMuZ2FtZSlcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0dGhpcy5nYW1lLmxvYWRHYW1lKCk7XHJcblxyXG5cdFx0XHR9LmJpbmQodGhpcykpO1xyXG5cdH1cclxuIH0iLCIvKiogXHJcbiAqIEdhbWUuanNcclxuICogVGhlIGVudGlyZSBHYW1lIG9iamVjdFxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlXHJcbiAqL1xyXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuXHJcbi8vU2NyZWVuIGluaGVyaXRhbmNlXHJcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xyXG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSAnLi9TdGFydFNjcmVlbi5qcyc7XHJcbmltcG9ydCBHYW1lU2NyZWVuIGZyb20gJy4vR2FtZVNjcmVlbi5qcyc7XHJcbmltcG9ydCBFbmRTY3JlZW4gZnJvbSAnLi9FbmRTY3JlZW4uanMnO1xyXG5cclxuLy9JbmZvIGluaGVyaXRhbmNlXHJcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XHJcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcclxuaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xyXG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9JZGVudGl0eS5qcyc7XHJcbmltcG9ydCBJbnN0cnVjdGlvbnMgZnJvbSAnLi9JbnN0cnVjdGlvbnMuanMnO1xyXG5pbXBvcnQgRHluYW1pY1RleHQgZnJvbSAnLi9EeW5hbWljVGV4dC5qcyc7XHJcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlLmpzJztcclxuXHJcbi8vQ2hhcmFjdGVyIGluaGVyaXRhbmNlXHJcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xyXG5pbXBvcnQgVHJ1bXAgZnJvbSAnLi9UcnVtcC5qcyc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIuanMnO1xyXG5pbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcclxuaW1wb3J0IExpb24gZnJvbSAnLi9MaW9uLmpzJztcclxuaW1wb3J0IFRpZ2VyIGZyb20gJy4vVGlnZXIuanMnO1xyXG5pbXBvcnQgQmVhciBmcm9tICcuL0JlYXIuanMnO1xyXG5pbXBvcnQgR29yaWxsYSBmcm9tICcuL0dvcmlsbGEuanMnO1xyXG5pbXBvcnQgSGVhbHRoIGZyb20gJy4vSGVhbHRoLmpzJztcclxuXHJcbi8vQXJlYSBpbmhlcml0YW5jZS5cclxuaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcclxuaW1wb3J0IENhZ2UgZnJvbSAnLi9DYWdlLmpzJztcclxuaW1wb3J0IEFuaW1hbEFyZWEgZnJvbSAnLi9BbmltYWxBcmVhLmpzJztcclxuaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi9QbGF5ZXJBcmVhLmpzJztcclxuXHJcbi8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxyXG5pbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XHJcbmltcG9ydCBTb3VuZGVyIGZyb20gJy4vU291bmRlci5qcyc7XHJcbi8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBHYW1lUGllY2Uge1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcblxyXG5cdFx0c3VwZXIoY29uZmlnKTtcclxuXHJcblx0XHQvL2dhbWUgY29weXJpZ2h0XHJcblx0XHR0aGlzLndhcm5pbmcgPSAnVGhpcyBnYW1lIGJlbG9uZ3MgdG8gdXMsIGFuZCBub2JvZHkgZWxzZS4nO1xyXG5cclxuXHRcdC8vZ2FtZSByZXZlcnRzIHRvIFN0YXJ0U2NyZWVuIGlmIHVucGxheWVkXHJcblx0XHR0aGlzLlRJTUVPVVQgPSA1NTU1O1xyXG5cclxuXHRcdC8vIGRlZmluZSBJZCBsaW5rIHRvIERPTVxyXG5cdFx0dGhpcy5TVEFSVF9TQ1JFRU5fSUQgPSAnc3RhcnQtc2NyZWVuJztcclxuXHRcdHRoaXMuR0FNRV9TQ1JFRU5fSUQgPSAnZ2FtZS1zY3JlZW4nO1xyXG5cdFx0dGhpcy5FTkRfU0NSRUVOX0lEID0gJ2VuZC1zY3JlZW4nO1xyXG5cclxuXHRcdC8vIG1vZGVsIHN0b3JhZ2UsIHNjcmVlbnNcclxuXHRcdHRoaXMuc2NyZWVucyA9IFtdO1xyXG5cclxuXHRcdC8vIG1vZGVsIHN0b3JhZ2UsIGR5bmFtaWMgY2hhcmFjdGVyc1xyXG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycyA9IFtdO1xyXG5cclxuXHRcdC8vIGluaXRpYWxpemUgZ2FtZSwgbG9hZCBzdGFydCBzY3JlZW5cclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cclxuXHR9IC8vZW5kIG9mIGNvbnN0cnVjdG9yXHJcblxyXG5cdGluaXQgKCkge1xyXG5cclxuXHRcdC8vIEdyYWIgdGhlIEhUTUwgc2NyZWVuIGVsZW1lbnRzIGFuZCBlbmNhcHN1bGF0ZSBpbiBhIFNjcmVlbiBjbGFzc1xyXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuU1RBUlRfU0NSRUVOX0lEXSA9IG5ldyBTdGFydFNjcmVlbih7bmFtZTogJ1N0YXJ0IFNjcmVlbicsIGlkOiB0aGlzLlNUQVJUX1NDUkVFTl9JRCwgZ2FtZTogdGhpc30pO1xyXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuR0FNRV9TQ1JFRU5fSURdID0gbmV3IEdhbWVTY3JlZW4oe25hbWU6ICdHYW1lIFNjcmVlbicsIGlkOiB0aGlzLkdBTUVfU0NSRUVOX0lELCBnYW1lOiB0aGlzfSk7XHJcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5FTkRfU0NSRUVOX0lEXSA9IG5ldyBFbmRTY3JlZW4oe25hbWU6ICdFbmQgU2NyZWVuJywgaWQ6IHRoaXMuRU5EX1NDUkVFTl9JRCwgZ2FtZTogdGhpc30pO1xyXG5cclxuXHRcdC8vIGxvYWQgdGhlIGNhbnZhc1xyXG5cdFx0dGhpcy5sb2FkQ2FudmFzKCk7XHJcblxyXG5cdFx0Ly8gbWFrZSB0aGUgc3RhcnQgc2NyZWVuIHZpc2libGVcclxuXHRcdHRoaXMubG9hZEdhbWUoKTtcclxuXHR9XHJcblxyXG5cdC8vIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgSFRNTDUgY2FudmFzIGNvbnRleHRcclxuXHRsb2FkQ2FudmFzICgpIHtcclxuXHRcdHRoaXMuY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUtc2NyZWVuLWFyZW5hIGNhbnZhcycpO1xyXG5cdFx0dGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cdH1cclxuXHJcblx0LyoqIFxyXG5cdCAqIExvYWQgQ2hhcmFjdGVyc1xyXG5cdCAqIGR5bmFtaWMgQ2hhcmFjdGVycyAoZS5nLiB0aG9zZSB0aGF0IGFuaW1hdGUpIGFyZSBsb2FkZWQgYnkgR2FtZS4gXHJcblx0ICogT3RoZXIgc3RhdGljIHZpc3VhbCBvYmplY3RzIGFyZSBsb2FkZWQgYnkgU2NyZWVuIGNsYXNzZXMuXHJcblx0ICovXHJcblx0bG9hZFBsYXllcnMgKCkge1xyXG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxyXG5cdFx0XHRuZXcgUGxheWVyKFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6ICdQbGF5ZXInLCBwb3NpdGlvbjoge3RvcDogNTEwLCBsZWZ0OiAyMDB9LFxyXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy9wbGF5ZXJzL3BsYXllci5wbmcnLFxyXG5cdFx0XHRcdFx0Z2FtZTogdGhpc1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGxvYWRBbmltYWxzICgpIHtcclxuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcclxuXHRcdFx0bmV3IExpb24oXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogJ0xpb24nLCBcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAxNSwgbGVmdDogOTR9LFxyXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy9hbmltYWxzL2xpb24ucG5nJyxcclxuXHRcdFx0XHRcdGdhbWU6IHRoaXNcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHRcdCk7XHJcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLnB1c2goXHJcblx0XHRcdG5ldyBUaWdlcihcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiAnVGlnZXInLCBcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAxNSwgbGVmdDogMzMzfSxcclxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvYW5pbWFscy90aWdlci5wbmcnLFxyXG5cdFx0XHRcdFx0Z2FtZTogdGhpc1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcclxuXHRcdFx0bmV3IEJlYXIoXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogJ0JlYXInLCBwb3NpdGlvbjoge3RvcDogMTUsIGxlZnQ6IDU3MH0sXHJcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvYmVhci5wbmcnLFxyXG5cdFx0XHRcdFx0Z2FtZTogdGhpc1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcclxuXHRcdFx0bmV3IEdvcmlsbGEoXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogJ0dvcmlsbGEnLCBwb3NpdGlvbjoge3RvcDogMTUsIGxlZnQ6IDgxMn0sXHJcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvZ29yaWxsYS5wbmcnLFxyXG5cdFx0XHRcdFx0Z2FtZTogdGhpc1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHJcblx0fVxyXG5cclxuXHRsb2FkVHJ1bXBzICgpIHtcclxuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcclxuXHRcdFx0bmV3IFRydW1wKFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6ICdUcnVtcCcsIHBvc2l0aW9uOiB7dG9wOiA0NTAsIGxlZnQ6IDIwMH0sXHJcblx0XHRcdFx0XHRwYXRoOiAnaW1nL3RydW1wcy90cnVtcC5wbmcnLFxyXG5cdFx0XHRcdFx0Z2FtZTogdGhpc1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHJcblx0fVxyXG5cclxuXHRsb2FkR2FtZSAoKSB7XHJcblxyXG5cdFx0Ly9sb2FkIEluZm8gYXNzZXRzXHJcblxyXG5cdFx0Y29uc29sZS5sb2coJ2xvYWRpbmcgc3BsYXNoIHNjcmVlbicpO1xyXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuRU5EX1NDUkVFTl9JRF0uaGlkZVNjcmVlbigpXHJcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5TVEFSVF9TQ1JFRU5fSURdLnNob3dTY3JlZW4oKTtcclxuXHR9XHJcblxyXG5cdHN0YXJ0R2FtZSAoKSB7XHJcblxyXG5cdFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXHJcblx0XHQvL2xvYWQgYXVkaW8gc2FtcGxlc1xyXG5cdFx0dGhpcy5zb3VuZFBvb2wgPSBuZXcgU291bmRlcigpO1xyXG5cdFx0dGhpcy5zb3VuZFBvb2wuYWRkU291bmQoJ2tpY2snLCAwLjcpO1xyXG5cdFx0dGhpcy5zb3VuZFBvb2wuYWRkU291bmQoJ2xpb24nLCAwLjcpO1xyXG5cdFx0dGhpcy5zb3VuZFBvb2wuYWRkU291bmQoJ3RpZ2VyJywgMC43KTtcclxuXHRcdHRoaXMuc291bmRQb29sLmFkZFNvdW5kKCdiZWFyJywgMC43KTtcclxuXHRcdHRoaXMuc291bmRQb29sLmFkZFNvdW5kKCdnb3JpbGxhJywgMC43KTtcclxuXHRcdC8vIEVORCBBRERFRCBJTiBXRUVLIDExPDw8PDw8PDw8PDw8PDxcclxuXHJcblx0XHQvL2xvYWQgQ2hhcmFjdGVyc1xyXG5cdFx0dGhpcy5sb2FkQW5pbWFscygpO1xyXG5cdFx0dGhpcy5sb2FkUGxheWVycygpO1xyXG5cdFx0dGhpcy5sb2FkVHJ1bXBzKCk7XHJcblxyXG5cdFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXHJcblx0XHR0aGlzLmNvbGxpZGVyID0gbmV3IENvbGxpZGVyKHRoaXMuZGlzcGxheUNoYXJhY3RlcnMpO1xyXG5cdFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxyXG5cclxuXHRcdC8vbWFrZSBHYW1lU2NyZWVuIHZpc2libGVcclxuXHJcblx0XHQvLyBpbml0aWFsaXplIGVsYXBzZWQgdGltZVxyXG5cdFx0dGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuXHRcdC8vIHNob3cgR2FtZVNjcmVlbiwgaGlkZSBvdGhlcnNcclxuXHRcdGNvbnNvbGUubG9nKCdzdGFydGluZyBnYW1lJyk7XHJcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5TVEFSVF9TQ1JFRU5fSURdLmhpZGVTY3JlZW4oKTtcclxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkVORF9TQ1JFRU5fSURdLmhpZGVTY3JlZW4oKTtcclxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkdBTUVfU0NSRUVOX0lEXS5zaG93U2NyZWVuKCk7XHJcblx0XHR0aGlzLmdhbWVMb29wKCk7XHJcblx0fVxyXG5cclxuXHRlbmRHYW1lICgpIHtcclxuXHJcblx0XHRjb25zb2xlLmxvZygnZW5kaW5nIGdhbWUnKTtcclxuXHJcblx0XHQvLyByZXNldCB0aW1lclxyXG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xyXG5cclxuXHRcdC8vIHR1cm4gb2ZmIGFuaW1hdGlvblxyXG5cdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5nbG9iYWxJZCk7XHJcblx0XHR0aGlzLmdsb2JhbElkID0gbnVsbDtcclxuXHJcblx0XHQvLyBnbyB0byBlbmQgc2NyZWVuXHJcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5HQU1FX1NDUkVFTl9JRF0uaGlkZVNjcmVlbigpO1xyXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuRU5EX1NDUkVFTl9JRF0uc2hvd1NjcmVlbigpO1xyXG5cdH1cclxuXHJcblx0ZWxhcHNlZCAoKSB7XHJcblxyXG5cdFx0Ly8gcmVjb3JkIHRpbWUgd2UgaGF2ZSBiZWVuIGluIGdhbWVMb29wXHJcblx0XHR0aGlzLmVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuXHRcdC8vIHRpbWUgZGlmZmVyZW5jZSBpbiBtc1xyXG5cclxuXHRcdHZhciB0aW1lRGlmZiA9ICh0aGlzLmVuZFRpbWUgLSB0aGlzLnN0YXJ0VGltZSkgLyAxMDAwO1xyXG5cclxuXHRcdC8vIGdldCBzZWNvbmRzIChPcmlnaW5hbCBoYWQgJ3JvdW5kJyB3aGljaCBpbmNvcnJlY3RseSBjb3VudHMgMDoyOCwgMDoyOSwgMTozMCAuLi4gMTo1OSwgMTowKVxyXG5cdFx0cmV0dXJuIE1hdGgucm91bmQodGltZURpZmYgJSA2MCk7XHJcblx0fVxyXG5cclxuXHRjaGVja0lmQ29tcGxldGUgKCkge1xyXG5cclxuXHRcdC8vIGdhbWUgbG9naWMgdG8gc2VlIGlmIHRoZSBnYW1lIHNob3VsZCByZXNldFxyXG5cdFx0Ly8vLy8vLy8vLy8vL2NvbnNvbGUubG9nKCdFTEFQU0VEOicgKyB0aGlzLmVsYXBzZWQoKSk7XHJcblxyXG5cdFx0aWYgKHRoaXMuZWxhcHNlZCgpID4gdGhpcy5USU1FT1VUKSB7XHJcblx0XHRcdC8vIGlmIGlkbGUgdG9vIGxvbmcsIHJlc2V0IGdhbWUgdG8gc3RhcnRcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlICgpIHtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cclxuXHRcdFx0dmFyIGNoYXJhY3RlciA9IHRoaXMuZGlzcGxheUNoYXJhY3RlcnNbaV07XHJcblxyXG5cdFx0XHRzd2l0Y2ggKGNoYXJhY3Rlci5nZXRDbGFzcygpKSB7XHJcblx0XHRcdFx0Y2FzZSAnUGxheWVyJzpcclxuXHRcdFx0XHRjYXNlICdUcnVtcCc6XHJcblx0XHRcdFx0Y2FzZSAnTGlvbic6XHJcblx0XHRcdFx0Y2FzZSAnVGlnZXInOlxyXG5cdFx0XHRcdGNhc2UgJ0JlYXInOlxyXG5cdFx0XHRcdGNhc2UgJ0dvcmlsbGEnOlxyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y2hhcmFjdGVyLnVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZHJhdyAoKSB7XHJcblxyXG4gXHRcdC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxyXG5cdFx0dGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuIFx0XHQvLyBFTkQgQURERUQgV0VFSyAxMTw8PDw8PDw8PDw8PDxcclxuXHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnNbaV0uZHJhdyh0aGlzLmNvbnRleHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2FtZUxvb3AgKCkge1xyXG5cdFx0XHJcblx0XHRpZiAodGhpcy5jaGVja0lmQ29tcGxldGUoKSkge1xyXG5cdFx0XHR0aGlzLmVuZEdhbWUoKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy51cGRhdGUoKTtcclxuXHRcdHRoaXMuZHJhdygpO1xyXG5cdFx0XHJcblx0XHQvL2NvbnNvbGUubG9nKCdsb29waW5nLi4uJylcclxuXHRcdHRoaXMuZ2xvYmFsSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lTG9vcC5iaW5kKHRoaXMpKTtcclxuXHR9XHJcblxyXG59IiwiLyoqIFxyXG4gKiBHYW1lUGllY2UuanNcclxuICogQmFzaWMgR2FtZSBvYmplY3RcclxuICpcclxuICogVG8gbWFrZSB0aGlzIHdvcmssIHlvdSBtdXN0IGJlIHJ1bm5pbmcgdGhlIEJhYmVsIHRyYW5zcGlsZXIsIFxyXG4gKiBhbmQgd2F0Y2hpbmcgZm9yIGNoYW5nZXMgaW4gdGhpcyBmaWxlIHdpdGggYnJvd3NlcmlmeS4gVHdvIFxyXG4gKiBUZXJtaW5hbCB3aW5kb3dzIG5lZWQgdG8gYmUgb3BlbjpcclxuICogMS4gb25lIHdpbmRvdyB3aGVyZSB5b3UgdHlwZWQgdGhlIGNvbW1hbmQgXCJncnVudFwiXHJcbiAqIDIuIG9uZSB3aW5kb3cgd2hlcmUgeW91IHR5cGVkIHRoZSBjb21tYW5kIFwibnBtIHN0YXJ0XCJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQaWVjZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gICAgICAgIC8vVE9ETzogdXNlIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWU7XHJcbiAgICAgICAgdGhpcy51dWlkID0gdGhpcy5zZXRJZCgpO1xyXG4gICAgICAgIHRoaXMucmVhZHkgPSB0cnVlOyAvLyBjaGFuZ2UgdG8gZmFsc2UgZm9yIGRlZmVycmVkIGxvYWRzXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogU2V0IGEgcG9zaXRpb24gZm9yIHRoZSBvYmplY3QsIGFsc28gdGhlIHBvc2l0aW9uIG9mIHRoZSBcclxuICAgICAqIERPTSByZXByZXNlbnRhdGlvbiBvZiB0aGUgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHNldERPTVBvc2l0aW9uIChwb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICBpZiAodGhpcy5kb20pIHtcclxuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUudG9wID0gcG9zaXRpb24udG9wICsgJ3B4JztcclxuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUubGVmdCA9IHBvc2l0aW9uLmxlZnQgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBTZXQgdGhlIG9iamVjdCBzaXplLCBhbHNvIGl0cyBET00gc2l6ZVxyXG4gICAgICovXHJcbiAgICBzZXRET01TaXplIChzaXplKSB7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICBpZiAodGhpcy5kb20pIHtcclxuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUud2lkdGggPSBzaXplLndpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBHZW5lcmF0ZSBhIHVuaXF1ZSBJRCBmb3IgZXZlcnkgZ2FtZSBvYmplY3QuXHJcbiAgICAgKiBAbGluayBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNTAzNC9jcmVhdGUtZ3VpZC11dWlkLWluLWphdmFzY3JpcHRcclxuICAgICAqL1xyXG4gICAgc2V0SWQgKCkge1xyXG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgdmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkqMTYpJTE2IHwgMDtcclxuICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZC8xNik7XHJcbiAgICAgICAgICAgIHJldHVybiAoYz09J3gnID8gciA6IChyJjB4M3wweDgpKS50b1N0cmluZygxNik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHV1aWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogUmV0dXJuIHRoZSBnaXZlbiBuYW1lIG9mIHRoaXMgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIGdldE5hbWUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogcmV0dXJuIHRoZSBjbGFzcyBvZiB0aGUgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIGdldENsYXNzICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIFJldHVybiB0aGUgdW5pcXVlIGlkIG9mIHRoaXMgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBnZXRJZCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXVpZDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBHZXQgdGhlIGVuY2xvc2luZyBib3ggb3V0c2lkZSB0aGUgb2JqZWN0IGZvciBleHRlcm5hbCBjb2xsaXNpb25zXHJcbiAgICAgKi9cclxuICAgIGdldENvbGxpc2lvblJlY3QgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBHZXQgdGhlIGludGVybmFsIGJveCB3aGVuIHRoaXMgb2JqZWN0IGFjdHMgYXMgYSBjb250YWluZXIgZm9yIGFub3RoZXJcclxuICAgICAqL1xyXG4gICAgZ2V0Qm91bmRzUmVjdCAoKSB7XHJcblxyXG4gICAgfVxyXG5cdFxyXG5cdC8qKiBcclxuXHQgKiBHZW5lcmljICdyZWFkeScgZnVuY3Rpb24gKGUuZy4gZm9yIGRlbGF5ZWQgYXNzZXQgbG9hZHMpXHJcblx0ICovXHJcblx0c2V0UmVhZHkgKHZhbCkge1xyXG5cdFx0dGhpcy5yZWFkeSA9IHZhbDtcclxuXHR9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogR2VuZXJpYyB1cGRhdGUgKG92ZXJyaWRlKVxyXG4gICAgICovXHJcbiAgICB1cGRhdGUgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAgLyoqIFxyXG4gICAgICAqIGdlbmVyaWMgZHJhdyAob3ZlcnJpZGUpXHJcbiAgICAgICovXHJcbiAgICBkcmF3ICgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCIvKiogXHJcbiAqIEdhbWVTY3JlZW4uanNcclxuICogTWFpbiBnYW1lIHNjcmVlbiBvYmplY3RcclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgU2NyZWVuXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcclxuXHJcbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xyXG4gaW1wb3J0IEFuaW1hbEFyZWEgZnJvbSAnLi9BbmltYWxBcmVhLmpzJztcclxuIGltcG9ydCBQbGF5ZXJBcmVhIGZyb20gJy4vUGxheWVyQXJlYS5qcyc7XHJcbiBpbXBvcnQgQ2FnZSBmcm9tICcuL0NhZ2UuanMnO1xyXG5cclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlcihjb25maWcpO1xyXG5cclxuIFx0XHR0aGlzLmNhZ2VzID0gW107XHJcbiBcdFx0dGhpcy5hbmltYWxBcmVhcyA9IFtdO1xyXG4gXHRcdHRoaXMucGxheWVyQXJlYXMgPSBbXTtcclxuXHJcbiBcdFx0Ly9HYW1lU2NyZWVuIHNob3VsZCBoaWRlIGl0cyBsb2NhbCBoZWFkZXIgYW5kIGZvb3RlclxyXG4gXHRcdHRoaXMuaGlkZUhlYWRlcigpO1xyXG4gXHRcdHRoaXMuaGlkZUZvb3RlcigpO1xyXG5cclxuIFx0XHQvLyBsb2FkIHRoZSBiYWNrZ3JvdW5kIGltYWdlXHJcbiBcdFx0dGhpcy5sb2FkQmFja2dyb3VuZCgnaW1nL3NjcmVlbnMvZ2FtZS1zY3JlZW4ucG5nJyk7XHJcblxyXG4gXHRcdC8vIGdldCB0aGUgc2VjdGlvbiB0aGF0IGhhcyB0aGUgY2FudmFzIGZvciBvdmVybGF5XHJcbiBcdFx0dmFyIGFyZW5hID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc2NyZWVuLWFyZW5hJyk7XHJcblxyXG4gXHRcdC8vIGxvYWQgc3ViLW9iamVjdHMgaW50byB0aGUgQXJlbmFcclxuIFx0XHR0aGlzLmNhZ2VzICAgPSB0aGlzLmxvYWRDYWdlcyhhcmVuYSwgJ2ltZy9hcmVhcy9jYWdlLnBuZycpO1xyXG4gXHRcdHRoaXMuYW5pbWFsQXJlYSA9IHRoaXMubG9hZEFuaW1hbEFyZWEoKTtcclxuIFx0XHR0aGlzLnBsYXllckFyZWEgPSB0aGlzLmxvYWRQbGF5ZXJBcmVhKCk7XHJcblxyXG4gXHR9XHJcblxyXG4gXHRsb2FkQ2FnZXMgKGNvbnRhaW5lciwgaW1nUGF0aCkge1xyXG4gXHRcdC8vIGxvYWQgNCBDYWdlc1xyXG4gXHRcdHRoaXMuY2FnZXMucHVzaChcclxuIFx0XHRcdG5ldyBDYWdlKFxyXG4gXHRcdFx0XHR7XHJcbiBcdFx0XHRcdFx0bmFtZTogJ2xpb24tY2FnZScsIFxyXG4gXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAwLCBsZWZ0OiA3MH0sIFxyXG4gXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSwgXHJcbiBcdFx0XHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsIFxyXG4gXHRcdFx0XHRcdHBhdGg6IGltZ1BhdGhcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0KVxyXG4gXHRcdCk7XHJcblx0XHR0aGlzLmNhZ2VzLnB1c2goXHJcblx0XHRcdG5ldyBDYWdlKFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6ICd0aWdlci1jYWdlJywgXHJcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMCwgbGVmdDogMzEwfSwgXHJcblx0XHRcdFx0XHRzaXplOiB7d2lkdGg6IDEwMCwgaGVpZ2h0OjEwMH0sIFxyXG5cdFx0XHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsIFxyXG5cdFx0XHRcdFx0cGF0aDogaW1nUGF0aFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHRcdHRoaXMuY2FnZXMucHVzaChcclxuXHRcdFx0bmV3IENhZ2UoXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogJ2JlYXItY2FnZScsIFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDU1MH0sIFxyXG5cdFx0XHRcdFx0c2l6ZToge3dpZHRoOiAxMDAsIGhlaWdodDoxMDB9LFxyXG5cdFx0XHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsIFxyXG5cdFx0XHRcdFx0cGF0aDogaW1nUGF0aFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHRcdHRoaXMuY2FnZXMucHVzaChcclxuXHRcdFx0bmV3IENhZ2UoXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogJ2dvcmlsbGEtY2FnZScsIFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDc5MH0sIFxyXG5cdFx0XHRcdFx0c2l6ZToge3dpZHRoOiAxMDAsIGhlaWdodDoxMDB9LFxyXG5cdFx0XHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsIFxyXG5cdFx0XHRcdFx0cGF0aDogaW1nUGF0aFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuIFx0fVxyXG5cclxuIFx0bG9hZEFuaW1hbEFyZWEgKCkge1xyXG4gXHRcdC8vIGxvYWQgQW5pbWFsIG1vdmVtZW50IGFyZWFcclxuIFx0XHR0aGlzLmFuaW1hbEFyZWFzLnB1c2goXHJcbiBcdFx0XHRuZXcgQW5pbWFsQXJlYShcclxuIFx0XHRcdFx0e1xyXG4gXHRcdFx0XHRcdG5hbWU6ICdab28nLCBcclxuIFx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMTA0LCBsZWZ0OiA2fSwgXHJcbiBcdFx0XHRcdFx0c2l6ZToge3dpZHRoOiA5NzAsIGhlaWdodDogNDEwfSxcclxuIFx0XHRcdFx0XHRjb250YWluZXI6IHRoaXMuZG9tLCBcclxuIFx0XHRcdFx0XHRwYXRoOiBudWxsXHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdClcclxuIFx0XHQpO1xyXG4gXHR9XHJcblxyXG4gXHRsb2FkUGxheWVyQXJlYSAoKSB7XHJcbiBcdFx0Ly8gbG9hZCB0aGUgUGxheWVyXHJcbiBcdFx0dGhpcy5wbGF5ZXJBcmVhcy5wdXNoKFxyXG4gXHRcdFx0bmV3IFBsYXllckFyZWEoXHJcbiBcdFx0XHRcdHtcclxuIFx0XHRcdFx0XHRuYW1lOiAnUGxheWVyIEFyZWEnLCBcclxuIFx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogNTE0LCBsZWZ0OiA2fSwgXHJcbiBcdFx0XHRcdFx0c2l6ZToge3dpZHRoOiA5NzAsIGhlaWdodDogMTAwfSxcclxuIFx0XHRcdFx0XHRjb250YWluZXI6IHRoaXMuZG9tLCBcclxuIFx0XHRcdFx0XHRwYXRoOiBudWxsXHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdClcclxuIFx0XHQpO1xyXG4gXHR9XHJcblxyXG4gfVxyXG5cclxuIiwiLyoqIFxyXG4gKiBHb3JpbGxhLmpzXHJcbiAqIEEgR29yaWxsYSwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xyXG4gaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29yaWxsYSBleHRlbmRzIEFuaW1hbCB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XHJcbiBcdH1cclxuIH0iLCIvKiogXHJcbiAqIEhlYWx0aC5qc1xyXG4gKiBUaGUgY3JpdHRlcnMgdGhhdCBUcnVtcCB0cmllcyB0byBzdG9wIGZyb20gZ2V0dGluZyB0aGUgUGxheWVyLlxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWx0aCBleHRlbmRzIENoYXJhY3RlciB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XHJcbiBcdH1cclxuXHJcbiB9IiwiLyoqIFxyXG4gKiBJZGVudGl0eS5qc1xyXG4gKiBHYW1lIExvZ29zLCBMb2dvVHlwZXMsIEJyYW5kIE5hbWVcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XHJcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZGVudGl0eSBleHRlbmRzIFN0YXRpY0ltYWdlIHtcclxuXHJcblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG5cdFx0c3VwZXIoY29uZmlnKTtcclxuXHJcblx0XHR0aGlzLnNldFNvdXJjZShjb25maWcuc291cmNlKTtcclxuXHRcdHRoaXMuc2V0QXV0aG9yKGNvbmZpZy5hdXRob3IpO1xyXG5cdFx0dGhpcy5sb2FkSW1hZ2VUb0RPTShjb25maWcuZG9tSWQsIGNvbmZpZy5wYXRoKTtcclxuXHJcblx0XHQvL0hpZGUgYW55IDxoMj4gdGV4dCBlcXVpdmFsZW50IG9mIGlkZW50aXR5IGluIHRoaXMgQ1NTIGJveFxyXG5cdFx0dmFyIHRleHRJZGVudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgY29uZmlnLmRvbUlkICsgJyBoMicpO1xyXG5cdFx0dGV4dElkZW50aXR5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0fVxyXG5cclxufVxyXG4iLCIvKiogXHJcbiAqIFN0YXRpY0ltYWdlLmpzXHJcbiAqIEltYWdlLXN0eWxlIEluZm9ybWF0aW9uIHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgb25jZSB0aGUgZ2FtZSBpcyBsb2FkZWRcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIEluZm8ge1xyXG5cclxuXHQvLyBzYXZlIHNjb3BlXHJcblx0Ly8gVE9ETzogcmVmYWN0b3Igd2l0aCBhcnJvdyBmdW5jdGlvblxyXG5cclxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcblx0XHRzdXBlcihjb25maWcpO1xyXG5cdFx0dGhpcy5yZWFkeSA9IGZhbHNlOyAvL292ZXItcmlkZSBHYW1lUGllY2UgYW5kIGluZm8gd2l0aCBkZWZlcnJhbHNcclxuXHRcdHRoaXMuaW1hZ2UgPSBudWxsO1xyXG5cdFx0dGhpcy5wYXRoID0gY29uZmlnLnBhdGg7XHJcblx0XHR0aGlzLmF1dGhvciA9IGNvbmZpZy5hdXRob3I7XHJcblx0XHR0aGlzLnNvdXJjZSA9IGNvbmZpZy5zb3VyY2U7XHJcblx0fVxyXG5cclxuXHQvLyBsb2FkIGFuIGltYWdlXHJcblx0bG9hZCAocGF0aCwgY2FsbGJhY2spIHtcclxuXHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdHRoYXQuc2V0UmVhZHkoZmFsc2UpO1xyXG5cdFx0Y29uc29sZS5sb2coJ2VudGVyaW5nIGxvYWQgaW5JbWFnZScpO1xyXG5cdFx0dmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cdFx0aW1nLnNyYyA9IHBhdGg7XHJcblx0XHRpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyh0aGF0Lm5hbWUgKyAnIGltYWdlIGxvYWRlZCBmcm9tOicgKyBwYXRoICsgJyB3OicgKyBpbWcud2lkdGggKyAnIGg6JyArIGltZy5oZWlnaHQpXHJcblx0XHRcdHRoYXQuc2V0UmVhZHkodHJ1ZSk7XHJcblx0XHRcdHRoYXQuZGF0YSA9IGltZztcclxuXHRcdFx0XHJcblx0XHRcdGlmKGNhbGxiYWNrKSB7XHJcblx0XHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZXJyb3IgbG9hZGluZyBpbWcgZnJvbTonICsgcGF0aCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBsb2FkIGltYWdlLCBhcHBlbmQgdG8gZXhpc3RpbmcgRE9NIGVsZW1lbnRcclxuXHQvLyBOT1RFOiB0aGlzIGlzIG92ZXItd3JpdHRlbiBpbiBDaGFyYWN0ZXIuanMsIHdoaWNoIGxvYWRzIGltYWdlcyBpbnRvIENhbnZhc1xyXG5cdGxvYWRJbWFnZVRvRE9NIChkb21JZCwgcGF0aCwgY2FsbGJhY2spIHtcclxuXHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdHRoaXMubG9hZChwYXRoLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdmb3JlZ3JvdW5kIGltYWdlICcgKyBwYXRoICsgJyBsb2FkZWQnKVxyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21JZCkuYXBwZW5kQ2hpbGQodGhhdC5kYXRhKTtcclxuXHRcdFx0aWYgKGNhbGxiYWNrKSB7XHJcblx0XHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly8gbG9hZCBpbWFnZSBhcyBhIENTUyBiYWNrZ3JvdW5kIGltYWdlIGludG8gZXhpc3RpbmcgRE9NIGVsZW1lbnQuIFxyXG5cdC8vIE5PVEU6IG5vIGxvY2FsIHJlZmVyZW5jZSB0byBpbWFnZSBpbiB0aGlzIGNhc2VcclxuXHRsb2FkQmFja2dyb3VuZEltYWdlIChjb250YWluZXIsIHBhdGgsIGNhbGxiYWNrKSB7XHJcblx0XHRjb25zb2xlLmxvZygnbG9hZGluZyBiYWNrZ3JvdW5kIGltYWdlOicgKyBwYXRoKVxyXG5cdFx0Y29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZT0ndXJsKCcgKyBwYXRoICsgJyknO1xyXG5cdFx0dGhpcy5zZXRSZWFkeSh0cnVlKTtcclxuXHRcdGlmIChjYWxsYmFjaykge1xyXG5cdFx0XHRjYWxsYmFjaygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gRHJhdyB0aGUgaW1hZ2UgdG8gYSBzdXBwbGllZCBjYW52YXMgY29udGV4dFxyXG5cdGRyYXdUb0NhbnZhcyAoY29udGV4dCwgcG9zaXRpb24sIHNpemUpIHtcclxuXHRcdGNvbnRleHQuZHJhd0ltYWdlKGltZywgcG9zaXRpb24udG9wLCBwb3NpdGlvbi5sZWZ0LCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XHJcblx0fVxyXG5cclxuXHQvLyBEcmF3IHRvIHRoZSBET00uIEFzc3VtZSB0aGUgSW1hZ2Ugd2FzIGFscmVhZHkgYXR0YWNoZWQgdG8gdGhlIERPTVxyXG5cdGRyYXdUb0RPTSAocG9zaXRpb24sIHNpemUpIHtcclxuXHRcdHRoaXMuaW1hZ2Uuc3R5bGUudG9wID0gcG9zaXRpb24udG9wO1xyXG5cdFx0dGhpcy5pbWFnZS5zdHlsZS5sZWZ0ID0gcG9zaXRpb24ubGVmdDtcclxuXHRcdHRoaXMuaW1hZ2Uuc3R5bGUud2lkdGggPSBzaXplLndpZHRoO1xyXG5cdFx0dGhpcy5pbWFnZS5zdHlsZS5oZWlnaHQgPSBzaXplLmhlaWdodDtcclxuXHR9XHJcblxyXG59XHJcbiIsIi8qKiBcclxuICogSW5mby5qc1xyXG4gKiBHZW5lcmljIGluZm9ybWFpdG9uIG9iamVjdFxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlXHJcbiAqL1xyXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm8gZXh0ZW5kcyBHYW1lUGllY2Uge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuXHRcdHN1cGVyKGNvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRzZXRBdXRob3IgKGF1dGhvcikge1xyXG5cdFx0dGhpcy5hdXRob3IgPSBhdXRob3I7XHJcblx0fVxyXG5cclxuXHRzZXRTb3VyY2UgKHNvdXJjZSkge1xyXG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcblx0fVxyXG5cclxufSIsIi8qKiBcclxuICogSW5zdHJ1Y3Rpb25zLmpzXHJcbiAqIFRleHQgd2hpY2ggdGVsbHMgdGhlIFBsYXllciBob3cgdG8gcGxheSB0aGUgZ2FtZS5cclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcbiBpbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xyXG4gaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RydWN0aW9ucyBleHRlbmRzIFN0YXRpY1RleHQge1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcblx0XHRzdXBlcihjb25maWcpO1xyXG5cdH1cclxufVxyXG4iLCIvKiogXHJcbiAqIExpb24uanNcclxuICogQSBMaW9uLCB3aG8gdHJpZXMgdG8gZ2V0IHRoZSBQbGF5ZXIuXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XHJcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBMaW9uIGV4dGVuZHMgQW5pbWFsIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlciAoY29uZmlnKTtcclxuIFx0fVxyXG4gfSIsIi8qKiBcclxuICogQGNsYXNzIE1vdmVyXHJcbiAqIEBkZXNjcmlwdGlvbiB1cGRhdGUgcG9zaXRpb24gb2Ygb2JqZWN0IGJlaW5nIGFuaW1hdGVkIGJ5IEdhbWUuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92ZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoZ2FtZU9iaikge1xyXG5cdFx0dGhpcy5vYmogPSBnYW1lT2JqO1xyXG5cclxuICAgICAgICAvLyBDaGFyYWN0ZXIgaGFzIHJlZmVyZW5jZSB0byBHYW1lXHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZU9iai5nYW1lO1xyXG5cclxuICAgICAgICAvLyBNb3ZlbWVudCB0eXBlc1xyXG4gICAgICAgIHRoaXMudHlwZSA9IDA7XHJcbiAgICAgICAgdGhpcy5TTEVXID0gMTtcclxuICAgICAgICB0aGlzLlJBTkRPTSA9IDI7XHJcbiAgICAgICAgdGhpcy5QSU5HUE9JTkcgPSAzO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZ2FtZS5zb3VuZFBvb2wpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdubyBzb3VuZHMgaW5pdGlhbGl6ZWQuIEdhbWUgd2lsbCBwbGF5IHNpbGVudGx5Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHR9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogQG1ldGhvZCB0cnVuY2F0ZVxyXG4gICAgICogQGRlc2NyaXB0aW9uIHRydW5jYXRlIChub3Qgcm91bmQpIG51bWJlciB0byBmaXhlZCBudW1iZXIgb2YgZGVjaW1hbHNcclxuICAgICAqIEBwYXJhbSBOdW1iZXIgbnVtIGZsb2F0aW5nLXBvaW50IG51bWJlclxyXG4gICAgICogQHBhcmFtIEludGVnZXIgZGVjaW1hbHMgdGhlIG51bWJlciBvZiBkZWNpbWFscyBwb2ludHMgdG8gcm91bmQgdG9cclxuICAgICAqIEByZXR1cm5zIE51bWJlciB0aGUgdHJ1bmNhdGVkIG51bWJlclxyXG4gICAgICovXHJcbiAgICB0cnVuY2F0b3IgKG51bSwgZGVjaW1hbHMpIHsgICAgXHJcbiAgICAgICAgdmFyIG51bVBvd2VyID0gTWF0aC5wb3coMTAsIGRlY2ltYWxzKTsgLy8gXCJudW1Qb3dlckNvbnZlcnRlclwiIG1pZ2h0IGJlIGJldHRlclxyXG4gICAgICAgIHJldHVybiB+fihudW0gKiBudW1Qb3dlcikvbnVtUG93ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogQG1ldGhvZCByYW5kb21pemVyXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gcmFuZG9taXplIGEgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIHJhbmRvbWl6ZXIgKCkge1xyXG4gICAgICAgIHZhciBkID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgKGQgPSBwYXJzZUludChkKSAtIGQpO1xyXG4gICAgICAgIGQgPSB0aGlzLnRydW5jYXRvcihkLCAyKSAvIDEwO1xyXG4gICAgICAgIHJldHVybiBkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEBtZXRob2QgZ2V0Q2VudGVyXHJcbiAgICAgKi9cclxuICAgIGdldENlbnRlciAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHggKyAod2lkdGgvMiksXHJcbiAgICAgICAgICAgIHk6IHkgKyAoaGVpZ2h0LzIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHQvKiogXHJcblx0ICogQG1ldGhvZCBpbml0U2xpZGVyXHJcblx0ICogQGRlc2NyaXB0aW9uIHNsZXcgb2JqZWN0IGhvcml6b250YWxseSB3aXRoIGtleXByZXNzZXNcclxuXHQgKiBAcGFyYW0gZGVnIHRoZSBkZWdyZWVzIHRvIHJvdGF0ZSB0aGUgUGxheWVyLiBcclxuICAgICAqIE5PVEU6IHdlIGFsc28gZ3JhYiB0aGUgJ1RydW1wJyBvYmplY3QuXHJcblx0ICovXHJcblx0aW5pdFNsZXcgKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0IFNsZXcgbW90aW9uJyk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5TTEVXO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICAgICAgdGhpcy50aWNrZXIgPSAwO1xyXG4gICAgICAgIHRoaXMubGFzdERpciA9IDE7XHJcblxyXG4gICAgICAgIC8vIGFkZCBib3R0b20sIHJpZ2h0IHRvIG1ha2UgYSBSZWN0IGZvciB0aGUgUGxheWVyQXJlYVxyXG4gICAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10ucGxheWVyQXJlYXNbMF0ucG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5ib3VuZHMud2lkdGggPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5wbGF5ZXJBcmVhc1swXS5zaXplLndpZHRoO1xyXG4gICAgICAgIHRoaXMuYm91bmRzLmhlaWdodCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLnBsYXllckFyZWFzWzBdLnNpemUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYm91bmRzLmJvdHRvbSA9IHRoaXMuYm91bmRzLnRvcCArIHRoaXMuYm91bmRzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmJvdW5kcy5yaWdodCA9IHRoaXMuYm91bmRzLmxlZnQgKyB0aGlzLmJvdW5kcy53aWR0aDtcclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMub2JqLmltYWdlO1xyXG5cclxuICAgICAgICAvLyB0b2dnbGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBQbGF5ZXIgd2hlbiBraWNraW5nXHJcbiAgICAgICAgdGhpcy51bktpY2sgPSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XHJcbiAgICAgICAgdGhpcy5pbktpY2sgPSB0aGlzLm9iai5wb3NpdGlvbi50b3AgLSA2O1xyXG5cclxuICAgICAgICAvLyBOT1RFOiBUcnVtcCBpcyBhZGRlZCB0byBQbGF5ZXIgaW4gQ29sbGlkZXJcclxuXHJcbiAgICAgICAgLy8gZmxhZyBvdXIgaW5pdGlhbGl6YXRpb25cclxuICAgICAgICB0aGlzLmluaXRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIGxpc3RlbiBmb3IgdXNlciBldmVudHNcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgXHJcbiAgICAgICAgICAgIGV2ZW50ID0+IHRoaXMuc2xldyhldmVudCksIGZhbHNlKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLFxyXG4gICAgICAgICAgICBldmVudCA9PiB0aGlzLnVua2ljayhldmVudCksIGZhbHNlKTtcclxuXHR9XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogQG1ldGhvZCBpbml0UmFuZG9tV2Fsa1xyXG4gICAgICogQGRlc2NyaXB0aW9uIGluaXQgcmFuZG9tIG1vdGlvbnMgYWxvbmcgYSBwYXRoLiBVc2VkIGZvciBcclxuICAgICAqIEFuaW1hbCBjaGFyYWN0ZXJzIG1vdmluZyB0aHJvdWdoIHRoZSBBbmltYWxBcmVhLlxyXG4gICAgICovXHJcbiAgICBpbml0UmFuZG9tV2FsayAocHJlZlNwZWVkLCBkaXJlY3Rpb24pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW5pdCBSYW5kb21XYWxrJyk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5SQU5ET007XHJcblxyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBwcmVmU3BlZWQgKiB0aGlzLnRpbWVTdGFtcFJhbmRvbSgpO1xyXG4gICAgICAgIHRoaXMuZGVsYXkgPSB0aGlzLnRpbWVTdGFtcFJhbmRvbSgpICogMzAwO1xyXG4gICAgICAgIHRoaXMub2JqLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuZGVsYXlDb3VudGVyID0gMDtcclxuICAgICAgICB0aGlzLk1BWCA9IDMwO1xyXG4gICAgICAgIHRoaXMuTUFYX0RFTEFZID0gMzAwO1xyXG5cclxuICAgICAgICAvLyBvbmUtdGltZSBwbGF5IG9mIEFuaW1hbCBzb3VuZFxyXG4gICAgICAgIHRoaXMuZmlyc3RNb3ZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gYWRkIGJvdHRvbSwgcmlnaHQgdG8gbWFrZSBhIFJlY3QgZm9yIHRoZSBBbmltYWxBcmVhXHJcbiAgICAgICAgdGhpcy5ib3VuZHMgPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5wb3NpdGlvbjtcclxuICAgICAgICB0aGlzLmJvdW5kcy53aWR0aCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnNpemUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5ib3VuZHMuaGVpZ2h0ID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10uYW5pbWFsQXJlYXNbMF0uc2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5ib3VuZHMuYm90dG9tID0gdGhpcy5ib3VuZHMudG9wICsgdGhpcy5ib3VuZHMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYm91bmRzLnJpZ2h0ID0gdGhpcy5ib3VuZHMubGVmdCArIHRoaXMuYm91bmRzLndpZHRoO1xyXG5cclxuICAgICAgICAvLyByZW1lbWJlciB3aGVyZSB3ZSBzdGFydGVkIChpbiB0aGUgY2FnZSlcclxuICAgICAgICB0aGlzLnN0YXJ0VG9wID0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xyXG4gICAgICAgIHRoaXMuc3RhcnRMZWZ0ID0gdGhpcy5vYmoucG9zaXRpb24ubGVmdDtcclxuXHJcbiAgICAgICAgLy8gY2FjaGUgcG9zaXRpb24gZHVyaW5nIG5ldyByYW5kb20gbW92ZXNcclxuICAgICAgICB0aGlzLm5ld1RvcCA9IDAsIHRoaXMubmV3TGVmdCA9IDA7XHJcblxyXG4gICAgICAgIC8vIGdldCBib3R0b20gYW5kIHJpZ2h0IGZyb20gQ2hhcmFjdGVyIGZyb20gaXRzIEltYWdlXHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMub2JqLmltYWdlO1xyXG5cclxuICAgICAgICAvLyBmbGFnIG91ciBpbml0aWFsaXphdGlvblxyXG4gICAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBAbWV0aG9kIGluaXRQaW5nUG9uZ1xyXG4gICAgICogQGRlc2NyaXB0aW9uIGhhdmUgYSBUcnVtcCBpbml0LlxyXG4gICAgICogTk9URTogY29sbGlzaW9uIHBvdGVudGlhbCBhZGRlZCBzZXBhcmF0ZWx5XHJcbiAgICAgKi9cclxuICAgIGluaXRQaW5nUG9uZyAocHJlZlNwZWVkLCB0cnVtcCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0IFBpbmdQb25nIG1vdGlvbicpO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMuUElOR1BPTkc7XHJcblxyXG4gICAgICAgIC8vQW5pbWFsIGFyZWFcclxuICAgICAgICAvLyBhZGQgYm90dG9tLCByaWdodCB0byBtYWtlIGEgUmVjdCBmb3IgdGhlIEFuaW1hbEFyZWFcclxuICAgICAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuYm91bmRzLndpZHRoID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10uYW5pbWFsQXJlYXNbMF0uc2l6ZS53aWR0aDtcclxuICAgICAgICB0aGlzLmJvdW5kcy5oZWlnaHQgPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5zaXplLmhlaWdodDtcclxuICAgICAgICB0aGlzLmJvdW5kcy5ib3R0b20gPSB0aGlzLmJvdW5kcy50b3AgKyB0aGlzLmJvdW5kcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5ib3VuZHMucmlnaHQgPSB0aGlzLmJvdW5kcy5sZWZ0ICsgdGhpcy5ib3VuZHMud2lkdGg7XHJcblxyXG4gICAgICAgIHRoaXMub2JqLnN0YXJ0VG9wID0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xyXG5cclxuICAgICAgICAvLyBnZXQgYm90dG9tIGFuZCByaWdodCBmcm9tIENoYXJhY3RlciBmcm9tIGl0cyBJbWFnZVxyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLm9iai5pbWFnZTtcclxuXHJcbiAgICAgICAgdGhpcy5vYmouc3BlZWQgPSAwO1xyXG4gICAgICAgIHRoaXMub2JqLmR4ID0gMDtcclxuICAgICAgICB0aGlzLm9iai5keSA9IDA7XHJcblxyXG4gICAgICAgIC8vIE5PVEU6IEFuaW1hbHMgYW5kIFBsYXllcnMgYXJlIGFkZGVkIHRvIFRydW1wIGluIENvbGxpZGVyXHJcblxyXG4gICAgICAgIC8vIGZsYWcgb3VyIGluaXRpYWxpemF0aW9uXHJcbiAgICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHQvKiogXHJcblx0ICogQG1ldGhvZCBzbGV3IFxyXG5cdCAqIE1vdmUgb2JqZWN0IHNsaWdodGx5IHVwIGZvciBkdXJhdGlvbiBvZiBzcGFjZSBiYXIgZG93blxyXG4gICAgICogQ2FsbGJhY2sgZm9yIGtleWRvd24gYWRkRXZlbnRMaXN0ZW5lclxyXG4gICAgICogQHBhcmFtIEV2ZW50IGUgdGhlIGtleWRvd24gZXZlbnRcclxuICAgICAqL1xyXG5cdHNsZXcgKGUpIHtcclxuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIDMyOlxyXG4gICAgICAgICAgICBjYXNlIDM4OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5raWNrKGUpO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL3ByZXZlbnQgc2Nyb2xsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzNzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQrKztcclxuICAgICAgICAgICAgICAgIHRoaXMudGlja2VyID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgLT0gdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdERpciA9IC0xO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL3ByZXZlbnQgc2Nyb2xsXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOTpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQrKztcclxuICAgICAgICAgICAgICAgIHRoaXMudGlja2VyID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKz0gdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdERpciA9IDE7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vcHJldmVudCBzY3JvbGxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVNsZXdcclxuICAgICAqIEBkZXNjcmlwdGlvbiBwcm92aWRlIHNpbXBsZSBlYXNpbmcgbW90aW9uLCBhbHNvLCBib3VuY2UgXHJcbiAgICAgKiBvZmYgd2FsbHMuXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVNsZXcgKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbml0ZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGxheWVyIFNsZXcgTk9UIGluaXRpYWxpemVkIChkaWQgeW91IGxlYXZlIG91dCBvZiBjb25zdHJ1Y3Rvcj8pJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aWNrZXIrKztcclxuICAgICAgICBpZiAodGhpcy5zcGVlZCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGlja2VyID4gMTApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLz0gMjtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKz0gKHRoaXMubGFzdERpciAqIHRoaXMuc3BlZWQpO1xyXG5cclxuICAgICAgICAvL2NoZWNrIGJvdW5kc1xyXG4gICAgICAgIGlmICh0aGlzLmJvdW5kcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnZS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdyA9IHRoaXMuaW1hZ2UuZGF0YS53aWR0aDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IDwgdGhpcy5ib3VuZHMubGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdERpciA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCAvPSAxLjI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCA9IHRoaXMuYm91bmRzLmxlZnQgKyAodGhpcy5zcGVlZCAqIDEuNSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPiB0aGlzLmJvdW5kcy5yaWdodCAtIHcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3REaXIgPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkIC89IDEuMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ID0gdGhpcy5ib3VuZHMucmlnaHQgLSB3IC0gKHRoaXMuc3BlZWQgKiAxLjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEBtZXRob2Qga2lja1xyXG4gICAgICogQGRlc2NyaXB0aW9uIGlmIGZvb3QgaXMgbmVhciBUcnVtcCwga2ljayBoaW0gaW50byB0aGUgQW5pbWFsXHJcbiAgICAgKi9cclxuICAgIGtpY2sgKGUpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCc6Ojo6VEhJUyBUUlVNUDo6Ojo6JyArIHRoaXMub2JqLnRydW1wKVxyXG4gICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCA9IHRoaXMuaW5LaWNrO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMub2JqLnRydW1wKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiBtaXNzaW5nIGNvbGxpc2lvbiBtYXRyaXggKGRpZCB5b3UgaW5jbHVkZSBDb2xsaWRlcj8pJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNlZSBpZiB3ZSdyZSBjbG9zZSBlbm91Z2ggdG8ga2ljayBpbiB0aGUgeSBheGlzXHJcbiAgICAgICAgdmFyIHRydW1wWURpc3QgPSB0aGlzLm9iai5wb3NpdGlvbi50b3AgLSB0aGlzLm9iai50cnVtcC5pbWFnZS5kYXRhLndpZHRoIC0gdGhpcy5vYmoudHJ1bXAucG9zaXRpb24udG9wO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3RydW1wWURpc3Q6JyArIHRydW1wWURpc3QpXHJcblxyXG4gICAgICAgIC8vIElmIFBsYXllciBpcyBjbG9zZSBpbiBZLCBhbmQgaW5zaWRlIFggcmFuZ2UsIGtpY2sgdGhlIFRydW1wIGludG8gQW5pbWFsQXJlYVxyXG4gICAgICAgIGlmICh0cnVtcFlEaXN0IDwgMTApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0YXJ0IHRoZSBUcnVtcCBtb3ZpbmcsIHNwZWVkXHJcbiAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLnNwZWVkID0gNDA7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB0b28gY2xvc2UgdG8gbGVmdCB3YWxsLCBwcmUtYXNzaWduIGEgdmFsdWVcclxuICAgICAgICAgICAgaWYgKHRoaXMub2JqLnRydW1wLnBvc2l0aW9uLmxlZnQgPCAodGhpcy5ib3VuZHMubGVmdCArIDIwKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI+PlRydW1wOiBsZWZ0IGJvdW5kIGNvcnJlY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR4ID0gLTAuMjtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR5ID0gMC44O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjb21wdXRlIGR4IGFuZCBkeSBmb3IgVHJ1bXBcclxuICAgICAgICAgICAgdmFyIGRpc3QgPSAodGhpcy5vYmoucG9zaXRpb24ubGVmdCAtIHRoaXMub2JqLnRydW1wLnBvc2l0aW9uLmxlZnQpIC8gNTA7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaXN0KSA8IDEuMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGR4ID0gZGlzdDtcclxuICAgICAgICAgICAgICAgIGlmKGR4ID4gMC4wMDMgJiYgZHggPCAwLjgpIHtcclxuICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR4ID0gZHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHkgPSAxLjAgLSBkeDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdGFydCB0aGUga2lja2luZyBzb3VuZFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkeCA8IDAgJiYgZHggPiAtMC44KSB7XHJcbiAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keCA9IGR4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR5ID0gMS4wICsgZHg7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGR4KSA8IDAuMDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLnJhbmRvbWl6ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBkID0gZCAtIHRoaXMucmFuZG9taXplcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR4ID0gZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keSA9IDEuMCArIGR4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0YXJ0IHRoZSBraWNraW5nIHNvdW5kXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc3RhcnQgdGhlIGtpY2tpbmcgc291bmRcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWUuc291bmRQb29sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnNvdW5kUG9vbC5wbGF5U291bmQoJ2tpY2snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IC8vIGVuZCBvZiBmdW5jdGlvblxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIEBtZXRob2QgdW5raWNrXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gc2V0IHBvc2l0aW9uIG9mIFBsYXllciBiYWNrIHRvIG9yaWdpbmFsXHJcbiAgICAgKi9cclxuICAgIHVua2ljayAoZSkge1xyXG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMzI6XHJcbiAgICAgICAgICAgIGNhc2UgMzg6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPSB0aGlzLnVuS2ljaztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBAbWV0aG9kIHRpbWVTdGFtcFJhbmRvbVxyXG4gICAgICogQGRlc2NyaXB0aW9uIHJhbmRvbWl6ZSBpbiBhIDEwLWZvbGQgcmFuZ2UgdXNpbmcgd2luZG93LnBlcmZvcm1hbmNlXHJcbiAgICAgKi9cclxuXHR0aW1lU3RhbXBSYW5kb20gKCkge1xyXG5cdFx0dmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy91c2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXHJcbiAgICAgICAgfVxyXG5cdFx0dmFyIG51bSA9ICd4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpKjEwKSUxMCB8IDA7XHJcbiAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQvMTApO1xyXG4gICAgICAgICAgICByZXR1cm4gKGM9PSd4JyA/IHIgOiAociYweDN8MHg4KSkudG9TdHJpbmcoMTApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gbnVtIC8gMTAwMDA7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChleGNsdXNpdmUpXHJcblx0ICogQGxpbmsgXHJcblx0ICovXHJcblx0Z2V0UmFuZG9tKG1pbiwgbWF4KSB7XHJcbiAgIFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcblx0fVxyXG5cclxuXHQvKiogXHJcblx0ICogQG1ldGhvZCB1cGRhdGVSYW5kb21XYWxrXHJcblx0ICogQGRlc2NyaXB0aW9uIGdlbmVyYXRlIHJhbmRvbSB3YWxrLCB3aXRoIG9uZSBwcmVmZXJyZWQgZGlyZWN0aW9uLCBcclxuXHQgKiB1c2VkIGJ5IEFuaW1hbHMuXHJcbiAgICAgKiB0aGlzLm9iai5kaXJlY3Rpb24gaXMgdGhlIG92ZXJhbGwgcGF0aCB0aGUgQW5pbWFsIGlzIGZvbGxvd2luZyB0byBvbmUgb2YgdGhlIFxyXG4gICAgICogZm91ciB3YWxscyBvZiB0aGUgQW5pbWFsQXJlYS4gSWYgaXQgaXMgJ3JldHVybicgaXQgaGFzIGNvbGxpZGVkIHdpdGggYSBUcnVtcFxyXG4gICAgICogYW5kIGlzIHJldHVybmluZyB0byBpdHMgY2FnZS5cclxuXHQgKi9cclxuXHR1cGRhdGVSYW5kb21XYWxrICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5pdGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuaW1hbCBSYW5kb21XYWxrIE5PVCBpbml0aWFsaXplZCAoZGlkIHlvdSBsZWF2ZSBvdXQgb2YgY29uc3RydWN0b3I/KScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cdFx0dGhpcy5jb3VudGVyKys7XHJcblx0XHR0aGlzLmRlbGF5Q291bnRlcisrO1xyXG5cdFx0aWYgKHRoaXMuZGVsYXlDb3VudGVyIDwgdGhpcy5kZWxheSkge1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKCdkZWxheUNvdW50ZXI6JyArIHRoaXMuZGVsYXlDb3VudGVyICsgJyBNQVg6JyArIHRoaXMuTUFYX0RFTEFZKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuICAgICAgICAvLyBQbGF5IGFuaW1hbCdzIG9wZW5pbmcgc291bmQgb25jZSBhdCBzdGFydCBvZiBtb3ZlbWVudFxyXG4gICAgICAgIGlmICh0aGlzLmZpcnN0TW92ZSAmJiB0aGlzLmdhbWUuc291bmRQb29sKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zb3VuZFBvb2wucGxheVNvdW5kKHRoaXMub2JqLmNvbnN0cnVjdG9yLm5hbWUudG9Mb3dlckNhc2UoKSwgMC43KTtcclxuICAgICAgICAgICAgdGhpcy5maXJzdE1vdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbXB1dGUgZHggYW5kIGR5IGZyb20gcmFuZG9tIHdhbGsuIHN0b3JlIGluaXRpYWwgcG9zaXRpb25cclxuICAgICAgICB0aGlzLm9sZExlZnQgPSB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0O1xyXG4gICAgICAgIHRoaXMub2xkVG9wID0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xyXG5cclxuXHRcdHN3aXRjaCAodGhpcy5vYmouZGlyZWN0aW9uKSB7XHJcblx0XHRcdGNhc2UgJ3RvcCc6XHJcblx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24udG9wIC09ICh0aGlzLnNwZWVkICsgKDAuMSAqIHRoaXMuZ2V0UmFuZG9tKDEsIHRoaXMuc3BlZWQpKSk7XHJcblx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24ubGVmdCAtPSAxMCAqICh0aGlzLmdldFJhbmRvbSgtdGhpcy5zcGVlZCwgdGhpcy5zcGVlZC8yKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xlZnQnOlxyXG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgLT0gKHRoaXMuc3BlZWQgKyAoMC41ICogdGhpcy5nZXRSYW5kb20oMCwgdGhpcy5zcGVlZCkpKTtcclxuXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi50b3AgKz0gMTAgKih0aGlzLmdldFJhbmRvbSgtdGhpcy5zcGVlZCwgdGhpcy5zcGVlZCkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdib3R0b20nOlxyXG4gXHRcdFx0XHRpZiAodGhpcy5jb3VudGVyID4gdGhpcy5NQVgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLk1BWCA9IHRoaXMuZ2V0UmFuZG9tKDIsIDE1KTtcclxuXHRcdFx0XHRcdHRoaXMubmV3TGVmdCA9ICh0aGlzLmdldFJhbmRvbSgtdGhpcy5zcGVlZCwgdGhpcy5zcGVlZCkpO1xyXG5cdFx0XHRcdFx0dGhpcy5jb3VudGVyID0gMDtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlciA+IHRoaXMuTUFYIC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLmdldFJhbmRvbSgtMC4yLCAxLjIpIC8vTk9URTogZmluZS10dW5lIHRoaXMgdG8gbWFrZSBnYW1lcGxheSBoYXJkZXJcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24udG9wICs9IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgciA9IHRoaXMuZ2V0UmFuZG9tKC0xLCAxKTtcclxuXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IC09IHIgKiB0aGlzLm5ld0xlZnQ7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ3JpZ2h0JzpcclxuXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ICs9ICh0aGlzLnNwZWVkICsgKDAuNSAqIHRoaXMuZ2V0UmFuZG9tKDAsIHRoaXMuc3BlZWQpKSk7XHJcblx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24udG9wICs9IDEwICogKHRoaXMuZ2V0UmFuZG9tKC10aGlzLnNwZWVkLCB0aGlzLnNwZWVkKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ3JldHVybic6XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGNhdXNlZCBieSBhIFRydW1wIGNvbGxpZGVyIHJ1bm5pbmcgaW50byB0aGUgQW5pbWFsXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiByZXR1cm4gQW5pbWFsIHRvIGl0cyBjYWdlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9iai5kaXJlY3Rpb24gPSAnY2FnZWQnO1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogd3JpdGUgcmV0dXJuIGFyY1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NhZ2VkJzpcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPSB0aGlzLnN0YXJ0TGVmdDtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCA9IHRoaXMuc3RhcnRUb3A7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiB3aGVuIGNhZ2VkLCByZXNldCB1bnRpbCBpdCBpcyB1bmNhZ2VkIGFnYWluXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdNb3Zlci5zZXRQcmVmRGlyZWN0aW9uOiBpbnZhbGlkIGRpcmVjdGlvbjonICsgdGhpcy5vYmouZGlyZWN0aW9uKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcbiAgICAgICAgLy8gQ29tcHV0ZSBkeCBhbmQgZHkgZm9yIEFuaW1hbHNcclxuICAgICAgICB2YXIgeGRpc3QgPSB0aGlzLm9sZExlZnQgLSB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0O1xyXG4gICAgICAgIHZhciB5ZGlzdCA9IHRoaXMub2xkVG9wIC0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xyXG4gICAgICAgIHZhciBzdW0gPSB4ZGlzdCArIHlkaXN0O1xyXG4gICAgICAgIGlmIChzdW0gPiAwLjAwMDEpIHtcclxuICAgICAgICAgICAgdGhpcy5vYmouZHggPSB4ZGlzdCAvIHN1bTtcclxuICAgICAgICAgICAgdGhpcy5vYmouZHkgPSB5ZGlzdCAvIHN1bTsgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqLmR4ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5vYmouZHkgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2F2ZSBvdXIgbmV3IHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5vbGRMZWZ0ID0gdGhpcy5vYmoucG9zaXRpb24ubGVmdDtcclxuICAgICAgICB0aGlzLm9sZFRvcCA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnIGR4OicgKyB0aGlzLm9iai5keCArICcgZHk6JyArIHRoaXMub2JqLmR5ICsgJyBzdW06JyArIHN1bSlcclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVDb2xsaXNpb24gKHRydW1wLCBhbmltYWwpIHtcclxuICAgICAgICB2YXIgdyA9IHRoaXMub2JqLmltYWdlLmRhdGEud2lkdGg7XHJcbiAgICAgICAgdmFyIGggPSB0aGlzLm9iai5pbWFnZS5kYXRhLmhlaWdodDtcclxuICAgICAgICB2YXIgYXcgPSBhbmltYWwuaW1hZ2UuZGF0YS53aWR0aDtcclxuICAgICAgICB2YXIgYWggPSBhbmltYWwuaW1hZ2UuZGF0YS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IDwgYW5pbWFsLnBvc2l0aW9uLmxlZnQgKyBhdyAmJlxyXG4gICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ICsgdyA+IGFuaW1hbC5wb3NpdGlvbi5sZWZ0ICYmXHJcbiAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCA8IGFuaW1hbC5wb3NpdGlvbi50b3AgKyBhaCAmJlxyXG4gICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgKyBoID4gYW5pbWFsLnBvc2l0aW9uLnRvcCkgeyBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9nZXQgVHJ1bXAgY2VudGVyYWwgcG9pbnRcclxuICAgICAgICAgICAgICAgIHZhciB0WENlbnRlciA9IHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKyB3LzI7XHJcbiAgICAgICAgICAgICAgICB2YXIgdFlDZW50ZXIgPSB0aGlzLm9iai5wb3NpdGlvbi50b3AgICsgaC8yO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vZ2V0IEFuaW1hbCBjZW50cmFsIHBvaW50XHJcbiAgICAgICAgICAgICAgICB2YXIgYVhDZW50ZXIgPSBhbmltYWwucG9zaXRpb24ubGVmdCArIGF3LzI7XHJcbiAgICAgICAgICAgICAgICB2YXIgYVlDZW50ZXIgPSBhbmltYWwucG9zaXRpb24udG9wICsgYWgvMjtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NvbXB1dGUgeCBhbmQgeSB2ZWN0b3IgYmV0d2VlbiBjZW50ZXJzXHJcbiAgICAgICAgICAgICAgICB2YXIgY1hEaWZmID0gdFhDZW50ZXIgLSBhWENlbnRlcjtcclxuICAgICAgICAgICAgICAgIHZhciBjWURpZmYgPSB0WUNlbnRlciA9IGFZQ2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRydW1wIGRvZXNuJ3QgcmVhY3QgaWYgbm90IG1vdmluZyAoZXZlbiBpZiBhbmltYWwgZG9lcylcclxuICAgICAgICAgICAgICAgIGlmICh0cnVtcC5zcGVlZCAhPSAwICYmIHRydW1wLmR4ICE9IDAgJiYgdHJ1bXAuZHkgIT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBtb3ZlIG9iamVjdCBzbyBpdCBpc24ndCBjb2xsaWRpbmcgYW55bW9yZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjWERpZmYgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVtcC5wb3NpdGlvbi54ICs9IChjWERpZmYgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVtcC5wb3NpdGlvbi54IC09IChjWERpZmYgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjWURpZmYgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVtcC5wb3NpdGlvbi55ICs9IChjWURpZmYgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVtcC5wb3NpdGlvbi55IC09IChjWURpZmYgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSBuZXcgdmVjdG9yc1xyXG4gICAgICAgICAgICAgICAgICAgIHRydW1wLmR4ID0gLWNYRGlmZiAvIGNZRGlmZjtcclxuICAgICAgICAgICAgICAgICAgICB0cnVtcC5keSA9IC1jWURpZmYgLyBjWERpZmY7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJvdW5kaW5nIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRkaWYgPSBNYXRoLmFicyh0cnVtcC5keCArIHRydW1wLmR5KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGRpZiA+IDEuMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJ1bXAuZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1bXAuZHkgLT0gZGRpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydW1wLmR5ICs9IGRkaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IC8vZW5kIG9mIFRydW1wIGlzIG1vdmluZ1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZHg6Ojo6OjonICsgdHJ1bXAuZHggKyAnIGR5Ojo6Ojo6JyArIHRydW1wLmR5KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBAbWV0aG9kIHBpbmdQb25nXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gbW92ZSBpbiBhIHBpbmctcG9uZyBzdHlsZS4gVGhpcyBpcyBzcGVjaWZpYyB0byB0aGUgZ2FtZS5cclxuICAgICAqIDEuIGNvbGxpc2lvbiBzdGFydHMgdGhlIGNoYXJhY3RlciBtb3ZpbmdcclxuICAgICAqIDIuIHRoZXkgYm91bmNlIG9uIGFsbCB3YWxscyBFWENFUFQgdGhlIG9uZSB0aGV5IHdlcmUgY2xvc2VzdCB0byB3aGVuIGNvbGxpZGUgd2l0aFxyXG4gICAgICogMy4gd2hlbiB0aGV5IGludGVyc2VjdCB0aGF0IHdhbGwsIHRoZXkgc3RvcFxyXG4gICAgICovXHJcbiAgICB1cGRhdGVQaW5nUG9uZyAoKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pbml0ZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVHJ1bXAgUGluZ1BvbmcgTk9UIGluaXRpYWxpemVkIChkaWQgeW91IGxlYXZlIG91dCBvZiBjb25zdHJ1Y3Rvcj8pJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZHg6JyArIHRoaXMub2JqLmR4ICsgJyBkeTonICsgdGhpcy5vYmouZHkpO1xyXG4gICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgLT0gdGhpcy5vYmouc3BlZWQgKiB0aGlzLm9iai5keDtcclxuICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgLT0gdGhpcy5vYmouc3BlZWQgKiB0aGlzLm9iai5keTtcclxuXHJcbiAgICAgICAgLy9jaGVjayBib3VuZHMgKEFuaW1hbEFyZWEpXHJcbiAgICAgICAgaWYgKHRoaXMuYm91bmRzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9iai5pbWFnZS5kYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHcgPSB0aGlzLm9iai5pbWFnZS5kYXRhLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgdmFyIGggPSB0aGlzLm9iai5pbWFnZS5kYXRhLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjYXRjaCBjYXNlcyB3aGVyZSBUcnVtcCBnZXRzIGludG8gdGhlIENhZ2UgYXJlYVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLnRvcCA8IHRoaXMuYm91bmRzLnRvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5keSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouZHkgPSAtdGhpcy5vYmouZHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPSB0aGlzLmJvdW5kcy50b3AgKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJ1biB0aGlzIG9ubHkgaWYgd2UgYXJlIG1vdmluZyBkb3duIHRoZSBzY3JlZW5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5keSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmoucG9zaXRpb24udG9wID4gKHRoaXMub2JqLnN0YXJ0VG9wIC0gKHRoaXMub2JqLmR5ICogdGhpcy5vYmouc3BlZWQpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMub2JqLmR5ID0gLXRoaXMub2JqLmR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPSB0aGlzLm9iai5zdGFydFRvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouZHggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5keSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXN0ID0gdGhpcy5ib3VuZHMuYm90dG9tIC0gaCAtIHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3BkID0gLXRoaXMub2JqLmR5ICogdGhpcy5vYmouc3BlZWQgKiA0O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVjZWxlcmF0ZSBiZWZvcmUgc3RvcHBpbmcgYXQgYm90dG9tIG9mIEFuaW1hbEFyZWFcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdCA8IHNwZCAmJiBzcGQgPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnNwZWVkIC89IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAvL2VuZCBvZiBkeSBuZWdhdGl2ZSAoZ29pbmcgZG93bilcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBib3VuY2Ugb24gdGhlIG90aGVyIDMgd2FsbHNcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IDwgdGhpcy5ib3VuZHMubGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLmR4ID0gLXRoaXMub2JqLmR4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLnRvcCA8IHRoaXMuYm91bmRzLnRvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLmR5ID0gLXRoaXMub2JqLmR5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPiB0aGlzLmJvdW5kcy5yaWdodCAtIHcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5keCA9IC10aGlzLm9iai5keDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBlbmNvdW5kZXIgYW4gYW5pbWFsLCBib3VuY2UsIEFORCAna2ljaycgdGhlIGFuaW1hbCBiYWNrIGludG8gaXRzIGNhZ2VcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5hbmltYWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMub2JqLmFuaW1hbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFuaW1hbCA9IHRoaXMub2JqLmFuaW1hbHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxjdWxhdGVDb2xsaXNpb24odGhpcy5vYmosIGFuaW1hbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0IHRoZSBBbmltYWwncyBzdGF0ZSB0byByZXR1cm4gaG9tZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz4+PlJFVFVSTklORyBBTklNQUwgVE8gQ0FHRScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYWwuZGlyZWN0aW9uID0gJ3JldHVybic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmouc3BlZWQgPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouc3BlZWQgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2JyZWFrIG91dCBvZiBob3Jpem9udGFsIG1vdmVcclxuICAgICAgICBpZiAodGhpcy5vYmouZHkgPCAwLjAwMSAmJiB0aGlzLm9iai5keCA+IDAuMDAxKSB7XHJcbiAgICAgICAgICAgIHZhciBkID0gdGhpcy5yYW5kb21pemVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMub2JqLmR5ICs9IGQgLSB0aGlzLnJhbmRvbWl6ZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSAvLyBlbmQgb2YgY2xhc3NcclxuIiwiLyoqIFxyXG4gKiBQbGF5ZXIuanNcclxuICogVXNlci1jb250cm9sbGVkIENoYXJhY3RlclxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcclxuICovXHJcbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcclxuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xyXG5cclxuIC8vID4+Pj4+Pj4+Pj4+QURERUQgSU4gV0VFSyAxMVxyXG4gaW1wb3J0IE1vdmVyIGZyb20gJy4vTW92ZXIuanMnO1xyXG4gaW1wb3J0IENvbGxpZGVyIGZyb20gJy4vQ29sbGlkZXIuanMnO1xyXG4gLy8gRU5EIEFEREVEIFdFRUsgMTE8PDw8PDw8PDw8PDw8XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlciAoY29uZmlnKTtcclxuXHJcbiBcdFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXHJcbiBcdFx0dGhpcy5tb3Zlci5pbml0U2xldygpO1xyXG4gIFx0XHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XHRcdFxyXG4gXHR9XHJcblxyXG4gIFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXHJcbiBcdHVwZGF0ZSAoKSB7XHJcbiBcdFx0dGhpcy5tb3Zlci51cGRhdGVTbGV3KCk7XHJcbiBcdH1cclxuIFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxyXG5cclxuXHJcbiB9IiwiLyoqIFxyXG4gKiBQbGF5ZXJBcmVhLmpzXHJcbiAqIFRoZSByZWdpb24gd2hlcmUgdGhlIFBsYXllciBjYW4gbW92ZS5cclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQXJlYVxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJBcmVhIGV4dGVuZHMgQXJlYSB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIoY29uZmlnKTtcclxuIFx0fVxyXG5cclxuIH0iLCIvKiogXHJcbiAqIFNjb3JlLmpzXHJcbiAqIERpc3BsYXkgdXNlciBzY29yZVxyXG4gKiBAaW5oZXJpdHMgRHluYW1pY1RleHQsIFRleHQsIEluZm8sIEdhbWVQaWVjZVxyXG4gKi9cclxuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XHJcbmltcG9ydCBEeW5hbWljVGV4dCBmcm9tICcuL0R5bmFtaWNUZXh0LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlIGV4dGVuZHMgRHluYW1pY1RleHQge1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcblx0XHRzdXBlcihjb25maWcpO1xyXG5cdH1cclxufSIsIi8qKiBcclxuICogU2NyZWVuLmpzXHJcbiAqIEdlbmVyaWMgU2NyZWVuIG9iamVjdFxyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLmpzXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcblxyXG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xyXG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xyXG4gaW1wb3J0IElkZW50aXR5IGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlbiBleHRlbmRzIEdhbWVQaWVjZSB7XHJcblxyXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiBcdFx0c3VwZXIoY29uZmlnKTsgLy9pbml0ICdwYXJlbnQnIEdhbWVQaWVjZVxyXG5cclxuIFx0XHQvLyBzYXZlIGEgcmVmZXJlbmNlIHRvIG91ciBwYXJlbnQgR2FtZSBvYmplY3RcclxuIFx0XHR0aGlzLmdhbWUgPSBjb25maWcuZ2FtZTtcclxuXHJcbiBcdFx0Ly8gU2NyZWVucyBhcmUgZGVmaW5lZCBpbiBIVE1MLCBzbyBzYXZlIGEgcmVmZXJlbmNlIHRvIG91ciBET00gaWRcclxuIFx0XHR0aGlzLmRvbUlkID0gY29uZmlnLmlkO1xyXG5cclxuIFx0XHQvLyBzYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBET00gZWxlbWVudCB3ZSdyZSBjb25uZWN0ZWQgdG9cclxuIFx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZG9tSWQpO1xyXG5cclxuIFx0XHQvLyBpbnNlcnQgdGhlIGNvcHlyaWdodCBpbmZvIGZyb20gdGhlIG1haW4gR2FtZSBvYmplY3RcclxuIFx0XHR0aGlzLmFkZFdhcm5pbmcoKTtcclxuIFx0fVxyXG5cclxuIFx0Ly8gbG9hZCBhIGJhY2tncm91bmQgaW1hZ2UgaW50byB0aGUgU2NyZWVuXHJcbiBcdGxvYWRCYWNrZ3JvdW5kIChwYXRoLCBjYWxsYmFjaykge1xyXG4gXHRcdGNvbnNvbGUubG9nKFwibG9hZGluZzpcIiArIHRoaXMuZG9tSWQpO1xyXG4gXHRcdHRoaXMuYmFja2dyb3VuZEltYWdlID0gbmV3IFN0YXRpY0ltYWdlKFxyXG4gXHRcdFx0e1xyXG4gXHRcdFx0XHRuYW1lOiB0aGlzLm5hbWUgKyAnLWltYWdlJyxcclxuIFx0XHRcdFx0ZG9tSWQ6IHRoaXMuaWQgKyAnLWltYWdlJyxcclxuIFx0XHRcdFx0cGF0aDogcGF0aCxcclxuIFx0XHRcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrXHJcbiBcdFx0XHR9XHJcbiBcdFx0KTtcclxuIFx0XHR0aGlzLmJhY2tncm91bmRJbWFnZS5sb2FkQmFja2dyb3VuZEltYWdlKHRoaXMuZG9tLCBwYXRoLCBjYWxsYmFjayk7XHJcbiBcdH1cclxuXHJcbiBcdC8vIHNob3cgYW5kIGhpZGUgcmVnaW9ucyBvZiB0aGUgU2NyZWVuXHJcbiBcdHNob3dTY3JlZW4gKCkge1xyXG4gXHRcdGNvbnNvbGUubG9nKFwic2hvd2luZzpcIiArIHRoaXMuZG9tSWQpO1xyXG4gXHRcdHRoaXMuZG9tLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiBcdH1cclxuXHJcbiBcdGhpZGVTY3JlZW4gKCkge1xyXG4gXHRcdGNvbnNvbGUubG9nKFwiaGlkaW5nOlwiICsgdGhpcy5kb21JZCk7XHJcbiBcdFx0dGhpcy5kb20uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gXHR9XHJcblxyXG4gXHRzaG93SGVhZGVyICgpIHtcclxuIFx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuIFx0fVxyXG5cclxuIFx0aGlkZUhlYWRlciAoKSB7XHJcblx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuIFx0fVxyXG5cclxuIFx0c2hvd0Zvb3RlciAoKSB7XHJcblx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiBcdH1cclxuXHJcbiBcdGhpZGVGb290ZXIgKCkge1xyXG5cdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmZvb3RlcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiBcdH1cclxuXHJcbiBcdGFkZFdhcm5pbmcgKCkge1xyXG4gXHRcdHRoaXMuZG9tLnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKS5pbm5lckhUTUwgPSB0aGlzLmdhbWUud2FybmluZztcclxuIFx0fVxyXG5cclxuIH07IiwiLyoqIFxyXG4gKiBAY2xhc3MgU291bmRlclxyXG4gKiBAZGVzY3JpcHRpb24gcHJvdmlkZSBzb3VuZHMgdGhhdCBvdGhlciBvYmplY3RzIGNhbiBwbGF5LlxyXG4gKiBBZGFwdGVkIGZyb21cclxuICogQGh0dHA6Ly9ibG9nLnNrbGFtYmVydC5jb20vaHRtbDUtY2FudmFzLWdhbWUtaHRtbDUtYXVkaW8tYW5kLWZpbmlzaGluZy10b3VjaGVzL1xyXG4gKiBBdWRpbyBjb252ZXJ0ZXJzXHJcbiAqIEBsaW5rIGh0dHA6Ly9tZWRpYS5pby9cclxuICogQGxpbmsgaHR0cHM6Ly9zb3VyY2Vmb3JnZS5uZXQvcHJvamVjdHMvYXVkYWNpdHkvXHJcbiAqIEBsaW5rIGh0dHA6Ly93d3cubWVkaWFodW1hbi5jb20vYXVkaW8tY29udmVydGVyL1xyXG4gKiBAbGluayBodHRwOi8vd3d3Lmh0bWw1YXVkaW9jb252ZXJ0ZXIuY29tL1xyXG4gKiBBdWRpbyBTYW1wbGVzXHJcbiAqIEBsaW5rIGh0dHA6Ly93d3cuZ3JzaXRlcy5jb20vYXJjaGl2ZS9zb3VuZHMvY2F0ZWdvcnkvMjUvP29mZnNldD0yMFxyXG4gKiBAbGluayBodHRwczovL3d3dy5mcmVlc291bmQub3JnXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IgKCkge1xyXG5cclxuXHRcdC8vIENyZWF0ZSBhbiBhcnJheSBvZiBsb2FkZWQgc291bmRzXHJcblx0XHR0aGlzLnBhdGggPSAnYXVkaW8vJztcclxuXHRcdHRoaXMuc291bmRzID0gW107XHJcblx0XHR0aGlzLmNoZWNrQXVkaW8oKTtcclxuXHR9XHJcblxyXG5cdGNoZWNrQXVkaW8gKCkge1xyXG5cdFx0dmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG5cdFx0dmFyIGJvb2wgPSBmYWxzZTtcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRpZiAoYm9vbCA9ICEhZWxlbS5jYW5QbGF5VHlwZSkge1xyXG5cdFx0XHRcdGJvb2wgPSBuZXcgQm9vbGVhbihib29sKTtcclxuXHRcdFx0XHRib29sLm9nZyA9IGVsZW0uY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywnJyk7XHJcblx0XHRcdFx0Ym9vbC5tcDMgPSBlbGVtLmNhblBsYXlUeXBlKCdhdWRpby9tcGVnOycpLnJlcGxhY2UoL15ubyQvLCcnKTtcclxuXHRcdFx0XHRib29sLndhdiA9IGVsZW0uY2FuUGxheVR5cGUoJ2F1ZGlvL3dhdjsgY29kZWNzPVwiMVwiJykucmVwbGFjZSgvXm5vJC8sJycpO1xyXG5cdFx0XHRcdGJvb2wubTRhID0gKGVsZW0uY2FuUGxheVR5cGUoJ2F1ZGlvL3gtbTRhOycpIHx8IGVsZW0uY2FuUGxheVR5cGUoJ2F1ZGlvL2FhYzsnKSkucmVwbGFjZSgvXm5vJC8sJycpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGNhdGNoIChlKSB7fVxyXG5cdFx0XHQvLyBsaXN0IHN1cHBvcnRlZCBhdWRpbyB0eXBlc1xyXG5cdFx0XHQvL2VsZW0gPSBudWxsOyBcclxuXHRcdFx0dGhpcy50eXBlID0gYm9vbDtcclxuXHJcblx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy50eXBlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coaSArICcgc3VwcG9ydDonICsgdGhpcy50eXBlW2ldKTtcclxuXHRcdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0U291bmQgKGUsIG5hbWUsIHZvbHVtZSkge1xyXG5cdFx0aWYgKCF2b2x1bWUpIHtcclxuXHRcdFx0dm9sdW1lID0gMC41O1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zb3VuZHNbbmFtZV0gPSBlLnRhcmdldDtcclxuXHRcdHRoaXMuc291bmRzW25hbWVdLnZvbHVtZSA9IHZvbHVtZTtcclxuXHR9XHJcblxyXG5cdHNvdW5kRXJyb3IgKGUsIG5hbWUpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ0F1ZGlvICcgKyBuYW1lICsgJyBmYWllZCB0byBsb2FkJyk7XHJcblx0XHR0aGlzLnNvdW5kc1tuYW1lXSA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRhZGRTb3VuZCAobmFtZSwgdm9sdW1lKSB7XHJcblx0XHRpZiAoIW5hbWUpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcigndHJpZWQgdG8gbG9hZCBhdWRpbyBmaWxlIHdpdGhvdXQgYSBuYW1lIGFuZC9vciBwYXRoLCBhYm9ydGluZycpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHQvLyB0cnkgY3JlYXRpbmcgdGhlIHNvdW5kXHJcblx0XHR2YXIgc25kO1xyXG5cdFx0Ly8gZ2V0IHRoZSBleHRlbnNpb24gYW5kIHJlbWFpbmluZyBwYXRoXHJcblx0XHRmb3IgKHZhciBpIGluIHRoaXMudHlwZSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygndGhpcy50eXBlWycgKyBpICsgJ109JyArIHRoaXMudHlwZVtpXSk7XHJcblx0XHRcdGlmICh0aGlzLnR5cGVbaV0gIT0gXCJcIikgeyAvL3JldHVybmVkIGRhdGFUeXBlIGZvciBlbGVtLmNhblBsYXlUeXBlKC4uLilcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlRSWUlORyBUTyBMT0FEOlwiICsgdGhpcy5wYXRoICsgbmFtZSArICcuJyArIGkpXHJcblx0XHRcdFx0c25kID0gbmV3IEF1ZGlvKCdhdWRpby8nICsgbmFtZSArICcuJyArIGkpO1xyXG5cdFx0XHRcdHNuZC5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRkYXRhJywgXHJcblx0XHRcdFx0XHRldmVudCA9PiB0aGlzLnNldFNvdW5kKGV2ZW50LCBuYW1lLCB2b2x1bWUpLCBmYWxzZSk7XHJcblxyXG5cdFx0XHRcdHNuZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIFxyXG5cdFx0XHRcdFx0ZXZlbnQgPT4gdGhpcy5zb3VuZEVycm9yKGV2ZW50LCBuYW1lKSwgZmFsc2UpO1xyXG5cclxuXHRcdFx0XHRzbmQubG9hZCgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoIXNuZCkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdzb3VuZCBmaWxlIGZvcjonICsgbmFtZSArICcgbm90IGZvdW5kIGluIGF1ZGlvJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly9zbmQuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBmdW5jdGlvbigpIHtcclxuXHRcdC8vXHR0aGlzLnNvdW5kc1tuYW1lXSA9IHNuZDtcclxuXHRcdC8vfSwgZmFsc2UpO1xyXG5cclxuXHJcblx0fVxyXG5cclxuXHRwbGF5U291bmQgKG5hbWUpIHtcclxuXHRcdGlmICh0aGlzLnNvdW5kc1tuYW1lXSkge1xyXG5cdFx0XHR0aGlzLnNvdW5kc1tuYW1lXS5wbGF5KCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdubyBzb3VuZCBmaWxlIHdpdGggbmFtZTonICsgbmFtZSArICcgaW4gYXVkaW8gZm9sZGVyJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmaWxlRXhpc3RzKHVybCkge1xyXG5cdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdFx0eGhyLm9wZW4oJ0hFQUQnLCB1cmwsIGZhbHNlKTtcclxuXHRcdHhoci5zZW5kKCk7XHJcblx0XHRpZiAoeGhyLnN0YXR1cyA9PSAnNDA0Jykge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59IC8vIGVuZCBvZiBjbGFzcyIsIi8qKiBcclxuICogU3RhcnRTY3JlZW4uanNcclxuICogT3BlbmluZyBzY3JlZW4gZm9yIGdhbWUuXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIFNjcmVlblxyXG4gKi9cclxuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xyXG5cclxuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcclxuaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJztcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcclxuaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xyXG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9JZGVudGl0eS5qcyc7XHJcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vQmFja2dyb3VuZC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydFNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XHJcblxyXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuXHRcdHN1cGVyKGNvbmZpZyk7XHJcblxyXG5cdFx0Ly8gdGhpcy5kb20gZGVmaW5lZCBpbiBTY3JlZW5cclxuXHJcblx0XHQvLyBMb2FkIFN0YXJ0U2NyZWVuIHN1Yi1vYmplY3RzXHJcblx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kKCdpbWcvc2NyZWVucy9zdGFydC1zY3JlZW4ucG5nJyk7XHJcblxyXG5cdFx0Ly8gbG9hZCBpZGVudGl0eSBpbWFnZVxyXG5cdFx0dGhpcy5sb2FkSWRlbnRpdHkoKTtcclxuXHJcblx0XHQvLyBsb2FkIGluc3RydWN0aW9uc1xyXG5cdFx0dGhpcy5sb2FkSW5zdHJ1Y3Rpb25zKCk7XHJcblxyXG5cdFx0Ly8gTWFrZSB0aGUgc3RhcnQgYnV0dG9uIG9wZW4gdGhlIG1haW4gZ2FtZSBzY3JlZW5cclxuXHRcdHRoaXMuYmluZFN0YXJ0KCk7XHJcblx0fVxyXG5cclxuXHRsb2FkSWRlbnRpdHkgKCkge1xyXG5cdFx0dGhpcy5pZGVudGl0eSA9IG5ldyBJZGVudGl0eShcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdpZGVudGl0eScsIFxyXG5cdFx0XHRcdGRvbUlkOiAnc3RhcnQtc2NyZWVuLWlkZW50aXR5JyxcclxuXHRcdFx0XHRwYXRoOiAnaW1nL2lkZW50aXR5L2xvZ28ucG5nJywgXHJcblx0XHRcdFx0YXV0aG9yOiAncGV0ZSBtYXJraWV3aWN6JywgXHJcblx0XHRcdFx0c291cmNlOiAncGx5b2p1bXAnXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0Ly8gc2V0IHBvc2l0aW9uIG9mIElkZW50aXR5XHJcblx0XHR0aGlzLmlkZW50aXR5LnNldERPTVBvc2l0aW9uIChcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRvcDogMCxcclxuXHRcdFx0XHRsZWZ0OiAwXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdH1cclxuXHJcblx0bG9hZEluc3RydWN0aW9ucyAoKSB7XHJcblxyXG5cdFx0dGhpcy5pbnN0cnVjdGlvbnMgPSBuZXcgU3RhdGljVGV4dChcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdnYW1lIGluc3RydWN0aW9ucycsXHJcblx0XHRcdFx0ZG9tSWQ6ICdpbnN0cnVjdGlvbnMnLFxyXG5cdFx0XHRcdHRleHQ6ICdQbGF5IHRvIHdpbi4gVGhhdCBpcyBhbGwgVHJ1bXAgY2FyZXMgYWJvdXQsIGFuZCBzbyBzaG91bGQgeW91LidcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmluc3RydWN0aW9ucy5zZXRET01Qb3NpdGlvbihcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRvcDogMCxcclxuXHRcdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHR9XHJcblxyXG5cdGJpbmRTdGFydCAoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImluIGJpbmRTdGFydCwgdGhpcy5nYW1lOlwiICsgdGhpcy5nYW1lKVxyXG5cdFx0Ly8gd2UgdXNlIGJpbmQoKSB0byBsaW5rIHRoZSBmdW5jdGlvbiBiZWxvdyB0byBTdGFydFNjcmVlbiAob3RoZXJ3aXNlLCBpdCB0aGlua3MgaXQgaXMgaW5zaWRlIHdpbmRvdylcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydC1zY3JlZW4tcGxheS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFxyXG5cdFx0XHRmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdC8vYWxlcnQoXCJpbiBoYW5kbGVyLCBnYW1lOlwiICsgdGhpcy5nYW1lKVxyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR0aGlzLmdhbWUuc3RhcnRHYW1lKCk7XHJcblxyXG5cdFx0XHR9LmJpbmQodGhpcykpO1xyXG5cdH1cclxufSIsIi8qKiBcclxuICogU3RhdGljSW1hZ2UuanNcclxuICogSW1hZ2Utc3R5bGUgSW5mb3JtYXRpb24gdGhhdCBjYW5ub3QgYmUgY2hhbmdlZCBvbmNlIHRoZSBnYW1lIGlzIGxvYWRlZFxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpY0ltYWdlIGV4dGVuZHMgSW1hZ2Uge1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcblx0XHRzdXBlcihjb25maWcpO1xyXG5cclxuXHRcdHRoaXMuc3RhdGljID0gdHJ1ZTtcclxuXHR9XHJcblxyXG59XHJcbiIsIi8qKiBcclxuICogU3RhdGljVGV4dC5qc1xyXG4gKiBUZXh0IHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgYWZ0ZXIgbG9hZGVkIGJ5IHRoZSBnYW1lXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xyXG4gaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpY1RleHQgZXh0ZW5kcyBUZXh0IHtcclxuXHJcblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG5cdFx0c3VwZXIoY29uZmlnKTtcclxuXHJcblx0XHR0aGlzLnN0YXRpYyA9IHRydWU7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuIiwiLyoqIFxyXG4gKiBUZXh0LmpzXHJcbiAqIENyZWF0ZXMgYSB0ZXh0LXR5cGUgSW5mbyBvYmplY3RcclxuICogQGluaGVyaXRzIEluZm8sIEdhbWVQaWVjZVxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgSW5mbyB7XHJcblxyXG4gXHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuIFx0XHRzdXBlcihjb25maWcpO1xyXG5cclxuIFx0XHQvLyBzZXQgdGhlIHRleHRcclxuIFx0XHR0aGlzLnNldFRleHQoY29uZmlnLnRleHQpO1xyXG5cclxuIFx0XHQvLyBzZXQgdGhlIERPTUlkXHJcbiBcdFx0dGhpcy5hZGRUb0RPTShjb25maWcuZG9tSWQpO1xyXG4gXHR9XHJcblxyXG4gXHRzZXRUZXh0ICh0eHQpIHtcclxuIFx0XHR0aGlzLnRleHQgPSB0eHQ7XHJcbiBcdH1cclxuXHJcbiBcdGFkZFRvRE9NIChkb21JZCkge1xyXG5cclxuIFx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gXHRcdHRoaXMuZG9tLmlkID0gbmFtZSArICctVGV4dCc7XHJcbiBcdFx0dGhpcy5kb20uaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xyXG5cclxuIFx0XHQvLyBjb250YWluZXJcclxuIFx0XHR2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9tSWQpO1xyXG5cclxuIFx0XHQvLyBhZGQgdG8gdGhlIERPTVxyXG4gXHRcdGNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGhpcy5kb20sIGNvbnRhaW5lci5jaGlsZE5vZGVzWzBdKTtcclxuXHJcblx0fVxyXG5cclxuIH0iLCIvKiogXHJcbiAqIFRpZ2VyLmpzXHJcbiAqIEEgVGlnZXIsIHdobyB0cmllcyB0byBnZXQgdGhlIFBsYXllci5cclxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXHJcbiAqL1xyXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XHJcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcclxuIGltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpZ2VyIGV4dGVuZHMgQW5pbWFsIHtcclxuXHJcbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcclxuIFx0XHRzdXBlciAoY29uZmlnKTtcclxuIFx0fVxyXG4gfSIsIi8qKiBcclxuICogVHJ1bXAuanNcclxuICogVGhlIGJhbGwtbGlrZSBDaGFyYWN0ZXIgeW91IGtpY2sgaW50byBBbmltYWxzXHJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxyXG4gKi9cclxuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XHJcblxyXG4gLy8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXHJcbiBpbXBvcnQgTW92ZXIgZnJvbSAnLi9Nb3Zlci5qcyc7XHJcbiBpbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XHJcbiAvLyBFTkQgQURERUQgV0VFSyAxMTw8PDw8PDw8PDw8PDxcclxuIFxyXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJ1bXAgZXh0ZW5kcyBDaGFyYWN0ZXIge1xyXG5cclxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gXHRcdHN1cGVyIChjb25maWcpO1xyXG5cclxuIFx0Ly8gPj4+Pj4+Pj4+Pj5BRERFRCBJTiBXRUVLIDExXHJcbiBcdFx0Ly9UcnVtcCBnZXRzIFBpbmdQb25nIG1vdGlvblxyXG4gXHRcdHRoaXMubW92ZXIuaW5pdFBpbmdQb25nKDAsIHRoaXMpO1xyXG4gXHQvLyBFTkQgQURERUQgSU4gV0VFSyAxMTw8PDw8PDw8PDw8PDw8XHJcblxyXG4gXHR9XHJcblxyXG4gXHQvLyA+Pj4+Pj4+Pj4+PkFEREVEIElOIFdFRUsgMTFcclxuIFx0dXBkYXRlICgpIHtcclxuIFx0XHR0aGlzLm1vdmVyLnVwZGF0ZVBpbmdQb25nKCk7XHJcbiBcdH1cclxuIFx0Ly8gRU5EIEFEREVEIElOIFdFRUsgMTE8PDw8PDw8PDw8PDw8PFxyXG5cclxuIH0iLCIvKiogXHJcbiAqIENyZWF0ZSB0aGUgZ2FtZS4gSW1wb3J0IHRoZSBwcmltYXJ5IGNsYXNzZXMsIGFuZCAnY29tcG9zaXRlJyBcclxuICogdGhlIG92ZXJhbGwgR2FtZSBvYmplY3Qgb3V0IG9mIGluc3RhbmNlcyBvZiB0aGUgY2xhc3Nlcy5cclxuICovXHJcbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xyXG5cclxuLy9UaGUgZW50aXJlIGdhbWVcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lLmpzJztcclxuXHJcbi8vU2NyZWVuIGluaGVyaXRhbmNlXHJcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xyXG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSAnLi9TdGFydFNjcmVlbi5qcyc7XHJcbmltcG9ydCBHYW1lU2NyZWVuIGZyb20gJy4vR2FtZVNjcmVlbi5qcyc7XHJcbmltcG9ydCBFbmRTY3JlZW4gZnJvbSAnLi9FbmRTY3JlZW4uanMnO1xyXG5cclxuLy9JbmZvIGluaGVyaXRhbmNlXHJcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XHJcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XHJcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XHJcbmltcG9ydCBJZGVudGl0eSBmcm9tICcuL0lkZW50aXR5LmpzJztcclxuaW1wb3J0IEluc3RydWN0aW9ucyBmcm9tICcuL0luc3RydWN0aW9ucy5qcyc7XHJcbmltcG9ydCBEeW5hbWljVGV4dCBmcm9tICcuL0R5bmFtaWNUZXh0LmpzJztcclxuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUuanMnO1xyXG5cclxuLy9DaGFyYWN0ZXIgaW5oZXJpdGFuY2VcclxuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XHJcbmltcG9ydCBUcnVtcCBmcm9tICcuL1RydW1wLmpzJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcyc7XHJcbmltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xyXG5pbXBvcnQgTGlvbiBmcm9tICcuL0xpb24uanMnO1xyXG5pbXBvcnQgVGlnZXIgZnJvbSAnLi9UaWdlci5qcyc7XHJcbmltcG9ydCBCZWFyIGZyb20gJy4vQmVhci5qcyc7XHJcbmltcG9ydCBHb3JpbGxhIGZyb20gJy4vR29yaWxsYS5qcyc7XHJcbmltcG9ydCBIZWFsdGggZnJvbSAnLi9IZWFsdGguanMnO1xyXG5cclxuLy9BcmVhIGluaGVyaXRhbmNlLlxyXG5pbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xyXG5pbXBvcnQgQ2FnZSBmcm9tICcuL0NhZ2UuanMnO1xyXG5pbXBvcnQgQW5pbWFsQXJlYSBmcm9tICcuL0FuaW1hbEFyZWEuanMnO1xyXG5pbXBvcnQgUGxheWVyQXJlYSBmcm9tICcuL1BsYXllckFyZWEuanMnO1xyXG5cclxuLy9UZXN0IGZpbGUgKHZlcnkgc2ltcGxlIHRlc3RydW5uZXIpXHJcbmltcG9ydCBUZXN0cyBmcm9tICcuLi8uLi90ZXN0cy9UZXN0cy5qcyc7XHJcblxyXG4vKiogXHJcbiAqIFNldCB1cCB0ZXN0cy5cclxuICovXHJcbnZhciBteVRlc3RzID0gbmV3IFRlc3RzKCk7XHJcblxyXG4vKipcclxuICogU2V0IHVwIHRoZSBHYW1lXHJcbiAqL1xyXG52YXIgbXlHYW1lID0gbmV3IEdhbWUoe25hbWU6IFwiWm9vS2lsbFNvY2NlclwifSk7XHJcblxyXG4vKiogXHJcbiAqIEVYUE9SVCBUTyBXRUIgQ09OU09MRVxyXG4gKiBUbyBtYWtlIHNvbWV0aGluZyB2aXNpYmxlIGluIFdlYiBjb25zb2xlIGZvciBkZWJ1Z2dpbnQsIGF0dGFjaCB0byB3aW5kb3cgb2JqZWN0XHJcbiAqIE5PVEU6IFByb2Zlc3Npb25hbCBjb2RlIHVzZXMgc3BlY2lhbGl6ZWQgdGVzdGluZyBtb2R1bGVzIGxpa2UgTW9jaGEsIEthcm1hLCBhbmQgXHJcbiAqIHNpbWlsYXIgdGVzdGluZyBsaWJyYXJpZXMuXHJcbiAqL1xyXG5cclxuLy8gd2UgY2FuIHJ1biB0aGlzIHRlc3QgbWFudWFsbHkgd2l0aCB0ZXN0cy5ydW4oKTtcclxud2luZG93LnRlc3RzID0gbXlUZXN0cztcclxuXHJcbi8vIG1ha2UgdGhlIGdhbWUgb2JqZWN0IHZpc2libGUgc28gd2UgY2FuIGluc3BlY3QgaXQuXHJcbndpbmRvdy5nYW1lID0gbXlHYW1lO1xyXG5cclxuY29uc29sZS5sb2coJ1pPT0tJTExTT0NDRVIgR2FtZSBpbml0aWFsaXplZC4gQWNjZXNzIGdhbWUgdmlhIFwiZ2FtZVwiLiBVc2UgVGVzdHMucnVuKCkgdG8gdGVzdC4nKVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuLi9tb2R1bGVzL2pzL0dhbWVQaWVjZS5qcyc7XHJcblxyXG4vL1RoZSBlbnRpcmUgZ2FtZVxyXG5pbXBvcnQgR2FtZSBmcm9tICcuLi9tb2R1bGVzL2pzL0dhbWUuanMnO1xyXG5cclxuLy9TY3JlZW4gaW5oZXJpdGFuY2VcclxuaW1wb3J0IFNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL1NjcmVlbi5qcyc7XHJcbmltcG9ydCBTdGFydFNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL1N0YXJ0U2NyZWVuLmpzJztcclxuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi4vbW9kdWxlcy9qcy9HYW1lU2NyZWVuLmpzJztcclxuaW1wb3J0IEVuZFNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL0VuZFNjcmVlbi5qcyc7XHJcblxyXG4vL0luZm8gaW5oZXJpdGFuY2VcclxuaW1wb3J0IEluZm8gZnJvbSAnLi4vbW9kdWxlcy9qcy9JbmZvLmpzJztcclxuaW1wb3J0IFRleHQgZnJvbSAnLi4vbW9kdWxlcy9qcy9UZXh0LmpzJztcclxuaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi4vbW9kdWxlcy9qcy9TdGF0aWNUZXh0LmpzJztcclxuaW1wb3J0IElkZW50aXR5IGZyb20gJy4uL21vZHVsZXMvanMvSWRlbnRpdHkuanMnO1xyXG5pbXBvcnQgSW5zdHJ1Y3Rpb25zIGZyb20gJy4uL21vZHVsZXMvanMvSW5zdHJ1Y3Rpb25zLmpzJztcclxuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4uL21vZHVsZXMvanMvRHluYW1pY1RleHQuanMnO1xyXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi4vbW9kdWxlcy9qcy9TY29yZS5qcyc7XHJcblxyXG4vL0NoYXJhY3RlciBpbmhlcml0YW5jZVxyXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4uL21vZHVsZXMvanMvQ2hhcmFjdGVyLmpzJztcclxuaW1wb3J0IFRydW1wIGZyb20gJy4uL21vZHVsZXMvanMvVHJ1bXAuanMnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL21vZHVsZXMvanMvUGxheWVyLmpzJztcclxuaW1wb3J0IEFuaW1hbCBmcm9tICcuLi9tb2R1bGVzL2pzL0FuaW1hbC5qcyc7XHJcbmltcG9ydCBMaW9uIGZyb20gJy4uL21vZHVsZXMvanMvTGlvbi5qcyc7XHJcbmltcG9ydCBUaWdlciBmcm9tICcuLi9tb2R1bGVzL2pzL1RpZ2VyLmpzJztcclxuaW1wb3J0IEJlYXIgZnJvbSAnLi4vbW9kdWxlcy9qcy9CZWFyLmpzJztcclxuaW1wb3J0IEdvcmlsbGEgZnJvbSAnLi4vbW9kdWxlcy9qcy9Hb3JpbGxhLmpzJztcclxuaW1wb3J0IEhlYWx0aCBmcm9tICcuLi9tb2R1bGVzL2pzL0hlYWx0aC5qcyc7XHJcblxyXG4vL0FyZWEgaW5oZXJpdGFuY2UuXHJcbmltcG9ydCBBcmVhIGZyb20gJy4uL21vZHVsZXMvanMvQXJlYS5qcyc7XHJcbmltcG9ydCBDYWdlIGZyb20gJy4uL21vZHVsZXMvanMvQ2FnZS5qcyc7XHJcbmltcG9ydCBBbmltYWxBcmVhIGZyb20gJy4uL21vZHVsZXMvanMvQW5pbWFsQXJlYS5qcyc7XHJcbmltcG9ydCBQbGF5ZXJBcmVhIGZyb20gJy4uL21vZHVsZXMvanMvUGxheWVyQXJlYS5qcyc7XHJcblxyXG4vKiogXHJcbiAqIFRFU1RCRUQgLSBUZXN0IGFsbCBvdXIgb2JqZWN0cy4gVGhpcyBpcyBhIHZlcnkgYmFzaWMgdGVzdGluZyBzeXN0ZW0uIFxyXG4gKiBOT1RFOiBQcm9mZXNzaW9uYWwgY29kZSB1c2VzIHRlc3RpbmcgbGlicmFyaWVzIGxpa2UgS2FybWEgYW5kIE1vY2hhLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdHMge1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoKSB7XHJcblx0fVxyXG5cclxuXHQvLyBCZWNhdXNlIHdlIG1ha2UgdGhlc2Ugb2JqZWN0cyB3aXRoICd2YXInIHRoZXkgYXJlIHNjb3BlZCB0byB0aGUgcnVuKCkgZnVuY3Rpb24uXHJcblx0cnVuICgpIHtcclxuXHJcblx0XHR2YXIgY29uZmlnID0ge25hbWU6J0ZvcmVzdCBUcnVtcCBvciBEb25hbGQgR3VtcCBydWx6J307XHJcblxyXG5cdFx0Ly8gTWFrZSBzb21lIHRlc3QgZ2FtZSBvYmplY3RzXHJcblx0XHR2YXIgZ2FtZSA9IG5ldyBHYW1lKGNvbmZpZyk7XHJcblx0XHRjb25zb2xlLmxvZyhnYW1lLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0Ly90ZXN0IEdhbWUgT2JqZWN0XHJcblx0XHR2YXIgbXlHYW1lID0gbmV3IEdhbWUoe25hbWU6IFwiWm9vS2lsbFNvY2NlclwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteUdhbWUuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHQvL290aGVyIG9iamVjdHNcclxuXHRcdHZhciBteVNjcmVlbiA9IG5ldyBTY3JlZW4oe25hbWU6IFwiT3BlbmluZyBTY3JlZW5cIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlTY3JlZW4uZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlTdGFydFNjcmVlbiA9IG5ldyBTdGFydFNjcmVlbih7bmFtZTogXCJTdGFydCBTY3JlZW5cIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlTdGFydFNjcmVlbi5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUdhbWVTY3JlZW4gPSBuZXcgR2FtZVNjcmVlbih7bmFtZTogXCJHYW1lIFNjcmVlblwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteUdhbWVTY3JlZW4uZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlFbmRTY3JlZW4gPSBuZXcgRW5kU2NyZWVuKHtuYW1lOiBcIkVuZCBTY3JlZW5cIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlFbmRTY3JlZW4uZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlJbmZvID0gbmV3IEluZm8oe25hbWU6IFwiR2VuZXJpYyBJbmZvcm1hdGlvblwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteUluZm8uZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlUZXh0ID0gbmV3IFRleHQoe25hbWU6IFwiR2VuZXJpYyBUZXh0IE9iamVjdFwifSk7XHJcblx0XHRjb25zb2xlLmxvZyhteVRleHQuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlTdGF0aWNUZXh0ID0gbmV3IFN0YXRpY1RleHQoe25hbWU6IFwiR2VuZXJpYyBTdGF0aWMgVGV4dCBPYmplY3RcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlTdGF0aWNUZXh0LmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15SWRlbnRpdHkgPSBuZXcgSWRlbnRpdHkoe25hbWU6IFwiR2VuZXJpYyBJZGVudGl0eSBPYmplY3RcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlJZGVudGl0eS5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUluc3RydWN0aW9ucyA9IG5ldyBJbnN0cnVjdGlvbnMoe25hbWU6IFwiR2VuZXJpYyBJbnN0cnVjdGlvbnMgT2JqZWN0XCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15SW5zdHJ1Y3Rpb25zLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15RHluYW1pY1RleHQgPSBuZXcgRHluYW1pY1RleHQoe25hbWU6IFwiR2VuZXJpYyBEeW5hbWljIFRleHQgT2JqZWN0XCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15RHluYW1pY1RleHQuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlTY29yZSA9IG5ldyBTY29yZSh7bmFtZTogXCJzY29yZXMuLi5cIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlTY29yZS5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUNoYXJhY3RlciA9IG5ldyBDaGFyYWN0ZXIoe25hbWU6IFwiR2VuZXJpYyBDaGFyYWN0ZXJcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlDaGFyYWN0ZXIuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlUcnVtcCA9IG5ldyBUcnVtcCh7bmFtZTogXCJEb25hbGQgVHJ1bXBcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlUcnVtcC5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteVBsYXllciA9IG5ldyBQbGF5ZXIoe25hbWU6IFwiRW5kIFVzZXJcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlQbGF5ZXIuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlBbmltYWwgPSBuZXcgQW5pbWFsKHtuYW1lOiBcIkdlbmVyaWMgQW5pbWFsXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15QW5pbWFsLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15TGlvbiA9IG5ldyBMaW9uKHtuYW1lOiBcIkNvd2FyZGx5IHRoZSBMaW9uXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15TGlvbi5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteVRpZ2VyID0gbmV3IFRpZ2VyKHtuYW1lOiBcIkNob21wZXIgdGhlIFRpZ2VyXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15VGlnZXIuZ2V0TmFtZSgpKTtcclxuXHJcblx0XHR2YXIgbXlCZWFyID0gbmV3IEJlYXIoe25hbWU6IFwiTWF1bGVyIHRoZSBCZWFyXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15QmVhci5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUdvcmlsbGEgPSBuZXcgR29yaWxsYSh7IG5hbWU6IFwiU3B1bmt5IHRoZSBHb3JpbGxhXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15R29yaWxsYS5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUhlYWx0aCA9IG5ldyBIZWFsdGgoe25hbWU6IFwiT25lIEhlYWx0aCBLaXRcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlIZWFsdGguZ2V0TmFtZSgpKTtcclxuXHJcblx0XHQvL0FyZWEgaW5oZXJpdGFuY2UuXHJcblx0XHR2YXIgbXlBcmVhID0gbmV3IEFyZWEoe25hbWU6IFwiR2VuZXJpYyBBcmVhXCJ9KTtcclxuXHRcdGNvbnNvbGUubG9nKG15QXJlYS5nZXROYW1lKCkpO1xyXG5cclxuXHRcdHZhciBteUNhZ2UgPSBuZXcgQ2FnZSh7bmFtZTogXCJHZW5lcmljIEFyZWFcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlDYWdlLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15QW5pbWFsQXJlYSA9IG5ldyBBbmltYWxBcmVhKHtuYW1lOiBcIkFuaW1hbEFyZWFcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlBbmltYWxBcmVhLmdldE5hbWUoKSk7XHJcblxyXG5cdFx0dmFyIG15UGxheWVyQXJlYSA9IG5ldyBQbGF5ZXJBcmVhKHtuYW1lOiBcIlBsYXllckFyZWFcIn0pO1xyXG5cdFx0Y29uc29sZS5sb2cobXlQbGF5ZXJBcmVhLmdldE5hbWUoKSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
