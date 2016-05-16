/** 
 * Create ES6 Classes.
 * To make this work, you must be running the Babel transpiler, 
 * and watching for changes in this file with browserify. Two 
 * Terminal windows need to be open:
 * 1. one window where you typed the command "grunt"
 * 2. one window where you typed the command "npm start"
 */

class GamePiece {
    constructor (credentials) {
    	//TODO: use super();
        this.name = credentials.name;
        this.enrollmentNo = credentials.enrollmentNo
    }
    getName () {
    	var bob = 11; 
        return this.name;
    }
}

// Create the main Game object

var cred = {
    name:'Forest Trump or Donald Gump',
    enrollmentNo:11115078
}

var x = new GamePiece(cred);
console.log(x.getName());

