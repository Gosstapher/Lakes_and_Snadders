var Square = require('./square');

var Board = function(){
  this.squares = [];
  this.addSquares = function(){
    
    for(var i = 1; i < 65; i++){
     var newSquare = new Square(i);
     this.squares.push(newSquare);
    }
  }
}

module.exports = Board;