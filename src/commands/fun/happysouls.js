/**
 * @author Andrew Subowo
 * @since 0.2 contributory
 */

var utils = require('../../utils.js')

var happySoulsReply = function(msg, args) {
  var reply;
  if (args[0] == 'what did you say?') {
      playAudio('boss_weapons.mp3');
  }
  else if (args[0] == 'praise') {
      playAudio('praisesun.mp3')
  }

  if (args === undefined) {
      msg.reply('Is this toooo eaassyyyy for youuuu?????');
      return;
  }
}

/**
 * Play a specific sound clip as passed in by happySouls
 * @param  string/char set audio String of audio clip
 */
function playAudio(audio) {
  var voiceChannel = msg.member.voiceChannel;
  try {
    voiceChannel.join().then(function(connection) {
      const dispatcher = connection.playFile('../assets/' + audio);
      dispatcher.on('end', function(end) {
        voiceChannel.leave();
      });
    }).catch(function(err) {
      console.log('err');
    });
  }
  catch (err) {
    msg.reply('You need to be in a voice channel.');
  }
  return;
}


module.exports = {
  happySoulsReply : happySoulsReply
}
