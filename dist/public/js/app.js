(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/** 
 * Create ES6 Classes.
 * To make this work, you must be running the Babel transpiler, 
 * and watching for changes in this file with browserify. Two 
 * Terminal windows need to be open:
 * 1. one window where you typed the command "grunt"
 * 2. one window where you typed the command "npm start"
 */

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var GamePiece = (function () {
    function GamePiece(credentials) {
        _classCallCheck(this, GamePiece);

        //TODO: use super();
        this.name = credentials.name;
        this.enrollmentNo = credentials.enrollmentNo;
    }

    // Create the main Game object

    GamePiece.prototype.getName = function getName() {
        var bob = 11;
        return this.name;
    };

    return GamePiece;
})();

var cred = {
    name: 'Forest Trump or Donald Gump',
    enrollmentNo: 11115078
};

var x = new GamePiece(cred);
console.log(x.getName());

},{}]},{},[1]);
