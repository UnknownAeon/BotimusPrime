/**
 * @author Kevin Pfeifle
 * @since 0.2
 */

const commands = require('./router.js');

function getInfo(results) {
  console.log(results.arg);
  if (results.arg === 'cointoss') return commands.cointoss.info;
  else if (results.arg === 'exposed') return commands.exposed.info;
  else if (results.arg === 'diceroll') return commands.diceroll.info;
  else if (results.arg === 'audio') return commands.audio.info;
  else if (results.arg === 'help') return commands.help.info;
  else if (results.arg === 'hots') return commands.hots.info;
  else if (results.arg === 'insult') return commands.insult.info;
  else if (results.arg === 'memespeak') return commands.meme.info;
  else if (results.arg === 'ping') {
    return {
      argNum : 0,
      name : 'ping',
      usage : '!ping',
      desc : 'pong!'
    };
  }
  else if (results.arg === 'rlstats') return commands.rlstats.info;
}

function isValid(command) {
  var validCommands = ['cointoss', 'exposed', 'diceroll', 'audio', 'help', 'hots', 'insult', 'memespeak', 'ping', 'rlstats'];
  if (validCommands.indexOf(command) > -1) return true;
  else return false;
}

/**
 * Gets a random number between 0 and the upper limit.
 * @param num the upper limit for the random number.
 * @returns the pseudo-randomly generated number.
 */
var random = function(num) {
  return Math.floor(Math.random() * num);
}

module.exports = {
  getInfo : getInfo,
  isValid : isValid,
  random : random
}
