var Board = require('./board');
var Dice = require('./dice');
var Player = require('./player');


var Game = function(){
  this.board = new Board();
  this.dice = new Dice();
  this.players =[];
  this.setUpGame = function(){
    this.board.addSquares();
  },
  this.addPlayer = function(player){
    this.players.push(player);
  }
}


module.exports = Game;