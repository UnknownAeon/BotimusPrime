/**
 * @author Kevin Pfeifle
 * @since 0.2
 */
var utils = require('../../utils.js');

 /**
  * Controls the bot to flip a coin and send a tts message with the result.
 * @param command the command called by the bot summoner.
  */
var coinFlip = function(command) {
   var result = utils.random(2) + 1;
   if (result == 1) command.msg.reply('Heads!', {file : './assets/images/coin/heads.png'});
   else command.msg.reply('Tails!', {file : './assets/images/coin/tails.png'});
 }

 module.exports = {
   coinFlip : coinFlip,
 }
