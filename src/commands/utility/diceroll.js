/**
 * @author Kevin Pfeifle(UnknownAeon)
 * @since 0.2
 */
var utils = require('../../utils.js');

/**
 * Controls the bot to roll a dice. If a number is given, that is number of sides of the dice.
 * @param msg The message that was used to summon the bot.
 * @param args the arguements passed along with the command.
 */
function diceroll(msg) {
  var result = utils.random(6);
  msg.reply('you rolled a ' + result + '.', {file : './assets/images/dice/dice' + result + '.png'});
}

module.exports = {
  diceroll : diceroll
}
