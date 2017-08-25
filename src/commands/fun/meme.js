/**
 * @author Kevin Pfeifle(UnknownAeon)
 * @since 0.2
 */

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
  else {
    msg.reply('sorry, I do not know that one. Ask my master to teach me?');
    return;
  }
  msg.channel.send(meme, {tts: true});
}

module.exports = {
  memeSpeak : memeSpeak
};
