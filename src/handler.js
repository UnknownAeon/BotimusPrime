/**
 * @author Kevin Pfeifle
 * @author Andrew Subowo
 * @since 0.2
 */
const commands = require('./router.js');
var Command = require('./command.js');

/**
 * Determines which command was chosen, and calls it.
 * @param msg the message that was sent.
 * @returns a promise to handle the command that was called.
 */
var handleCommand = function(msg) {
  return new Promise(function(resolve, reject) {
    resolve(new Command(msg));
  }).then(results => {
    if (results.isUndefined()) return;
    // TODO: Is there any better way of doing this?
    // If the bot was summoned, it will execute the desired task.
    if (results.command === '!cointoss') commands.cointoss.coinFlip(results);
    else if (results.command === '!exposed') commands.exposed.exposedReply(results);
    else if (results.command === '!diceroll') commands.diceroll.diceroll(results);
    else if (results.command === '!audio') commands.audio.audio(results);
    else if (results.command === '!help') commands.help.help(results);
    else if (results.command === '!hots') commands.hots.hots(results);
    else if (results.command === '!insult') commands.insult.insult(results);
    else if (results.command === '!memespeak') commands.meme.memeSpeak(results);
    else if (results.command === '!ping') msg.reply('Pong!');
    else if (results.command === '!rlstats') commands.rlstat.rlstats(results);
    else msg.reply('sorry, I do not recognize that as a valid command. Type !help to see valid commands.');
  })
}

module.exports = {
  handleCommand : handleCommand
}
