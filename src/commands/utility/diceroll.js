/**
 * @author Kevin Pfeifle
 * @since 0.2
 */
var utils = require('../../utils.js');

/**
 * Controls the bot to roll a dice. If a number is given, that is number of sides of the dice.
 * @param command the command called by the bot summoner.
 */
var diceroll = function(command) {
  var result = utils.random(6) + 1;
  command.msg.reply('you rolled a ' + result + '.', {file : './assets/images/dice/dice' + result + '.png'});
}

module.exports = {
  diceroll : diceroll
}
