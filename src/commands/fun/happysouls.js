/**
 * @author Andrew Subowo
 * @author Kevin Pfeifle(UnknownAeon)
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
      utils.playAudio('happysouls/boss_weapons.mp3', msg);
  }
  else if (args[0] == 'praise') {
      utils.playAudio('/happysouls/praisesun.mp3', msg);
  }
  else if (args[0] == 'intro') {
    utils.playAudio('happysouls/intro.mp3', msg);
  }
  else if (args[0] == 'nope') {
    utils.playAudio('happysouls/nopenopenope.mp3', msg);
  }
  else if (args[0] == 'regret') {
    utils.playAudio('happysouls/regret.mp3', msg);
  }
  if (args.length == 0) {
      msg.reply('Is this toooo eaassyyyy for youuuu?????');
      return;
  }
}

module.exports = {
  happySoulsReply : happySoulsReply
}

exports.info = {
  name : "happysouls",
  usage : "!happysouls <soundbite>",
  desc : "command the bot to enter your voice channel and play a sound bite from happy souls.",
  options : "bossweapons, intro, nope, praise, regret"
}
