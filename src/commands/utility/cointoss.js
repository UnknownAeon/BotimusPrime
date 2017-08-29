/**
 * @author Kevin Pfeifle(UnknownAeon)
 * @since 0.2
 */
var utils = require('../../utils.js');

 /**
  * Controls the bot to flip a coin and send a tts message with the result.
  * @param msg The message that was used to summon the bot.
  */
var coinFlip = function(msg) {
   var result = utils.random(2) + 1;
   var winner;
   if (result == 1) winner = 'heads';
   else winner = 'tails';
   msg.reply('Flipping coin...\nThe winner is ' + winner + ". ");
 }

 module.exports = {
   coinFlip : coinFlip
 }
