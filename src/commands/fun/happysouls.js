/**
 * @author Andrew Subowo
 * @since 0.2 contributory
 */
var utils = require('../../utils.js')

/**
 * Plays audio files from happy souls.
 * @param msg the message that was sent.
 * @param args any arguements that were sent.
 */
var happySoulsReply = function(msg, args) {
  if (args[0] == 'bossweapons') {
      utils.playAudio('boss_weapons.mp3', msg);
  }
  else if (args[0] == 'praise') {
      utils.playAudio('praisesun.mp3', msg)
  }
  if (args.length == 0) {
      msg.reply('Is this toooo eaassyyyy for youuuu?????');
      return;
  }
}

module.exports = {
  happySoulsReply : happySoulsReply
}
