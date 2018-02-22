/**
 * @author Andrew Subowo
 * @author Kevin Pfeifle
 * @since 0.2 contributory
 */
var utils = require('../../utils.js')

/**
 * Plays the selected audio file into your current voice channel..
 * @param command the command called by the bot summoner.
 */
var audio = function(command) {
  if (command.arg == undefined || command.subarg == undefined) {
    command.msg.reply("you must include a category and an audio file. Try !help audio.");
    return;
  }
  // Game Grumps category of audio files.
  if (command.arg == 'gg') {
    if (command.subarg == 'sandstorm') playAudio('sandstorm.mp3', command);
  }
  else if (command.arg == 'dbd') {
    if (command.subarg == 'job') playAudio('pretty_good_JOB.wav', command);
  }
  // Happy Souls category of audio files.
  else if (command.arg == 'hs') {
    if (command.subarg == 'bossweapons') playAudio('happysouls/boss_weapons.mp3', command);
    else if (command.subarg == 'praise') playAudio('happysouls/praisesun.mp3', command);
    else if (command.subarg == 'intro') playAudio('happysouls/intro.mp3', command);
    else if (command.subarg == 'nope') playAudio('happysouls/nopenopenope.mp3', command);
    else if (command.subarg == 'regret') playAudio('happysouls/regret.mp3', command);
  }
  // Spongebob catgegory of audio files.
  else if (command.arg == 'sb') {
    if (command.subarg == 'conch') playAudio('conch.mp3', command);
  }
  else if (command.arg == 'misc') {
    if (command.subarg == 'cocaine') playAudio('cocaine.mp3', command);
  }
}
/**
 * Play a specific sound clip as passed in by the audio function.
 * @param audio string/char set audio String of audio clip
 * @param command the command called by the bot summoner.
 */
function playAudio(audio, command) {
  var voiceChannel = command.msg.member.voiceChannel;
  try {
    voiceChannel.join().then(function(connection) {
      const dispatcher = connection.playFile('./assets/audio/' + audio);
      dispatcher.on('end', function(end) {
        voiceChannel.leave();
      });
    }).catch(function(err) {
      console.log(err);
    });
  }
  catch (err) {
    command.msg.reply('You need to be in a voice channel.');
  }
  return;
}

module.exports = {
  audio : audio
}

exports.info = {
  argNum : 1,
  name : "happysouls",
  usage : "!happysouls",
  desc : "command the bot to enter your voice channel and play a sound bite from happy souls.",
  options : "bossweapons, intro, nope, praise, regret"
}
