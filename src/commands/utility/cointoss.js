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
   if (result == 1) msg.reply('Heads!', {file : './assets/images/coin/heads.png'});
   else msg.reply('Tails!', {file : './assets/images/coin/tails.png'});
 }

 module.exports = {
   coinFlip : coinFlip
 }
