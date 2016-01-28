var _ = require('lodash');
var Dice = function(){
  this.roll = function(){
    var result = (_.random(1, 6));
    return result
  }
}

module.exports = Dice;