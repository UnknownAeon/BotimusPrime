/**
 * @author Kevin Pfeifle(UnknownAeon)
 * @since 0.2
 */
var utils = require('../../utils.js');

function conch(msg) {
  utils.playAudio('conch.mp3', msg);
}

module.exports = {
  conch : conch
}
