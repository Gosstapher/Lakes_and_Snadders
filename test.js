var assert = require('assert');
var Board = require('./board');
var Player = require('./player');
var Dice = require('./dice');
var Game = require('./game');

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
  it('there should be a board when a new game is created', function(){
    var game1 = new Game();
    game1.setUpGame();
    assert.equal(64, game1.board.squares.length);
  });
  it('the game should have a dice, which can display a number between 1 and 6 inclusive', function(){
    var game1 = new Game();
    var output = game1.dice.roll();
    assert.equal(true, output <= 6 && output > 0);
  });
  it('the game should have players', function(){
    var game1 = new Game();
    var player1 = new Player('Robert');
    var player2 = new Player('Rob');
    var player3 = new Player('Bob');
    var player4 = new Player('Bobby');
    game1.addPlayer(player1);
    game1.addPlayer(player2);
    game1.addPlayer(player3);
    game1.addPlayer(player4);
    assert.equal(4, game1.players.length);
  });
    
  // it('the player should be able to move to another square on the board', function(){
  //   var board1 = new Board();
  //   board1.addSquares();
  //   var player1 = new Player('Bob')
  // });
})










