/**
 * @author Kevin Pfeifle
 * @since 0.2
 */

const commands = require('./router.js');

function getInfo(command) {
  if (command == '!cointoss') return commands.cointoss.info;
}

function isValid(command) {
  if (command == '!cointoss') return true;
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
