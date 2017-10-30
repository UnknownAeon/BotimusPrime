/**
 * @author Kevin Pfeifle
 * @since 0.2
 */

const commands = require('./router.js');

function getInfo(results) {
  if (results === 'cointoss') return commands.cointoss.info;
  else if (results === 'exposed') return commands.exposed.info;
  else if (results === 'diceroll') return commands.diceroll.info;
  else if (results === 'audio') return commands.audio.info;
  else if (results === 'help') return commands.help.info;
  else if (results === 'hots') return commands.hots.info;
  else if (results === 'insult') return commands.insult.info;
  else if (results === 'memespeak') return commands.meme.info;
  else if (results === 'ping') {
    return {
      argNum : 0,
      name : 'ping',
      usage : '!ping',
      desc : 'pong!'
    };
  }
  else if (results === 'rlstats') return commands.rlstats.info;
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
