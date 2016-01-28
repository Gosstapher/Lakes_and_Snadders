var assert = require('assert');
var Board = require('./board')
var Player = require('./player')
var Dice = require('./dice')

describe('Game', function(){
  it('there should be a board with an array of 64 squares', function(){
    var board1 = new Board();
    board1.addSquares();
    assert.equal(64, board1.squares.length);
  });
  it('there should be a player that starts on square 1', function(){
    var board1 = new Board();
    board1.addSquares();
    var player1 = new Player('Bob');
    assert.equal(1, player1.position);
  });
  it('there should be a dice, which can display a number between 1 and 6 inclusive', function(){
    var dice1 = new Dice();
    var output = dice1.roll();
    assert.equal(true, output <= 6 && output > 0);
  });
})