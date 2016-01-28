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
  },
  this.move = function(player){
    var spacesMoved = this.dice.roll();
    player.position += spacesMoved;
  },
  this.whereAreThePlayers = function(){
    for(player of this.players){
      var pos = player.position;
      return pos;
    }
  }
}


module.exports = Game;