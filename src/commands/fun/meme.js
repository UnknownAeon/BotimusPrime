/**
 * @author Kevin Pfeifle(UnknownAeon)
 * @since 0.2
 */
var utils = require('../../utils.js')

/**
 * Uses tts and speaks a frequently used meme on the server.
 * @param msg the message that was used to summon the bot.
 * @param args the arguements passed along with the command.
 */
var memeSpeak = function(msg, args) {
  var meme;
  if (args[0] == 'earthquake') meme = 'get ready for another chinese earth quake abrbrbrbrbrbrrbrbrbrrbuhhhhhhhhhhhhhhhhhhhhhbrbrbrbrbrbrruhhhhhhhhhhhhhhhhhh';
  else if (args[0] == 'meow') meme = 'meow. meow. meow. meow. meow. meow. meow. meow.';
  else if (args[0] == 'sprinkler') meme = 'my sprinkler goes like thisstststststststststststststststststststststststst and comes back like ttttttttttttttttttttttttttttttttttttttte';
  else if (args[0] == 'dad') {
    console.log(args);
    if (args[1] === undefined) {
      msg.reply('sorry, but I need a number of dads to drop.');
      return;
    }
    else {
      meme = 'de-de-de-de-de-de-drop the dad,';
      var dad;
      var dads = [];
      var dadNum = 0;
      for (var i = 0; i < args[1]; i++) {
        dad = '';
        dadNum = utils.random(4) + 1;
        dad += 'd';
        for (var j = 0; j < dadNum; j++) {
          dad += 'a';
        }
        dad += 'd';
        dads.push(dad);
      }
      for (var k = 0; k < args[1]; k++) {
        meme += ' ' + dads[k];
      }
    }
  }
  else {
    msg.reply('sorry, I do not know that one. Ask my master to teach me?');
    return;
  }
  msg.channel.send(meme, {tts: true});
}

module.exports = {
  memeSpeak : memeSpeak
};
