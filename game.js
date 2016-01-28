var Board = require('./board');

var Game = function(){
  this.board = new Board();
  this.setUpGame = function(){
    this.board.addSquares();
  }
}


module.exports = Game;