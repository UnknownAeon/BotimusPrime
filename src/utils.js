/**
 * @author Kevin Pfeifle(UnknownAeon)
 * @since 0.2
 */

 /**
  * Play a specific sound clip as passed in by happySouls
  * @param audio string/char set audio String of audio clip\
  * @param msg the message that summoned the bot.
  */
 function playAudio(audio, msg) {
   var voiceChannel = msg.member.voiceChannel;
   try {
     voiceChannel.join().then(function(connection) {
       const dispatcher = connection.playFile('./assets/' + audio);
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

/**
 * Gets a random number between 1 and the upper limit.
 * @param num the upper limit for the random number.
 * @returns the pseudo-randomly generated number.
 */
var random = function(num) {
  return Math.floor(Math.random() * num);
}

module.exports = {
  random : random,
  playAudio : playAudio
}
