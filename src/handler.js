/**
 * @author Kevin Pfeifle(UnknownAeon)
 * @since 0.2
 */
const commands = require('./router.js');

/**
 * Determines which command was chosen, and calls it.
 * @param msg the message that was sent.
 * @returns a promise to handle the command that was called.
 */
var handleCommand = function(msg) {
  return new Promise(function(resolve, reject) {
    resolve(parseMessage(msg));
  }).then(results => {
    if (results === undefined) return;
    // TODO: Is there any better way of doing this?
    // If the bot was summoned, it will execute the desired task.
    if (results.command === '!cointoss') commands.cointoss.coinFlip(msg);
    // TODO: Fix the magic conch.
    // else if (results.command === '!conch') conch(msg);
    else if (results.command === '!exposed') commands.exposed.exposedReply(msg);
    else if (results.command === '!diceroll') commands.diceroll.diceroll(msg, results.args);
    else if (results.command === '!help') commands.help.help(msg, results.args);
    else if (results.command === '!hots') commands.hots.hots(msg, results.args);
    else if (results.command === '!insult') commands.insult.insult(msg, results.args);
    else if (results.command === '!memespeak') commands.meme.memeSpeak(msg, results.args);
    else if (results.command === '!ping') msg.reply('Pong!');
    else msg.reply('sorry, I do not recognize that as a valid command. Type !help to see valid commands.');
  }).catch(function(err) {
    console.log('Error reading message content.');
  });
}

/**
 * Parses a message and isolates the command and args.
 * @param msg the message that was sent.
 * @returns json with the isolated command and args.
 */
var parseMessage = function(msg) {
  // All bot commands begin with !
  if (msg.content.charAt(0) !== '!') return;
  splitMsg = msg.content.split(' ');
  // First element is the command, the rest are supporting args.
  var command = splitMsg[0];
  var args = [];
  for (var i = 1; i < splitMsg.length; i++) {
    args.push(splitMsg[i]);
  }
  return({'command' : command, 'args' : args});
}

module.exports = {
  handleCommand : handleCommand
}
