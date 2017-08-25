function conch(msg) {
  var voiceChannel = msg.member.voiceChannel;
  try {
    voiceChannel.join().then(function(connection) {
      const dispatcher = connection.playFile('../assets/conch.mp3');
      dispatcher.on('end', function(end) {
        voiceChannel.leave();
      });
    }).catch(function(err) {
      console.log('err');
    });
  }
  catch (err) {
    msg.reply('You must be in a voice channel to hear the wisdom of the magic conch.');
  }
}
