var Board = require('./board');
var Dice = require('./dice');

var Game = function(){
  this.board = new Board();
  this.dice = new Dice();
  this.setUpGame = function(){
    this.board.addSquares();
  }
}


module.exports = Game;