var assert = require('assert');
var Board = require('./board')

describe('Game', function(){
  it('there should be a board with an array of 64 squares', function(){
    var board1 = new Board();
    board1.addSquares();
    assert.equal(64, board1.squares.length);
  });
})