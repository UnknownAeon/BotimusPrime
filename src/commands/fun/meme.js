/**
 * @author Kevin Pfeifle
 * @since 0.2
 */
var utils = require('../../utils.js')

/**
 * Uses tts and speaks a frequently used meme on the server.
 * @param command the command called by the bot summoner.
 */
var memeSpeak = function(command) {
  var meme;
  if (command.arg == undefined) {
    command.msg.reply('please give me a meme to speak. Try using !help memespeak.');
    return;
  }
  if (command.arg == 'earthquake') meme = 'get ready for another chinese earth quake abrbrbrbrbrbrrbrbrbrrbuhhhhhhhhhhhhhhhhhhhhhbrbrbrbrbrbrruhhhhhhhhhhhhhhhhhh';
  else if (command.arg == 'meow') meme = 'meow. meow. meow. meow. meow. meow. meow. meow.';
  else if (command.arg == 'sprinkler') meme = 'my sprinkler goes like thisstststststststststststststststststststststststst and comes back like ttttttttttttttttttttttttttttttttttttttte';
  else if (command.arg == 'dad') {
    if (command.subarg === undefined) {
      command.msg.reply('sorry, but I need a number of dads to drop.');
      return;
    }
    else {
      meme = 'de-de-de-de-de-de-drop the dad,';
      var dad;
      var dads = [];
      var dadNum = 0;
      for (var i = 0; i < command.subarg; i++) {
        dad = '';
        dadNum = utils.random(4) + 1;
        dad += 'd';
        for (var j = 0; j < dadNum; j++) {
          dad += 'a';
        }
        dad += 'd';
        dads.push(dad);
      }
      for (var k = 0; k < command.subarg; k++) {
        meme += ' ' + dads[k];
      }
    }
  }
  else {
    command.msg.reply('sorry, I do not know that one. Ask my master to teach me?');
    return;
  }
  command.msg.channel.send(meme, {tts: true});
}

module.exports = {
  memeSpeak : memeSpeak
  info : {
      argNum : 2,
      name : 'meme speak',
      usage : '!memespeak',
      args : ['earthquake', 'meow', 'sprinkler', 'dad'],
      subargs : [null, null, null, ['number of dads']]
      desc : 'commands the bot to speak a text meme via tts.'
  }
};
