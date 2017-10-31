/**
 * @author Kevin Pfeifle
 * @since 0.2
 */
var utils = require('../../utils.js');

/**
 * Controls the bot to send a tts message in the text channel and roast the
 * user of the summoner's choice.
 * @param command the command called by the bot summoner.
 */
function insult(command) {
  insults = [
    'you\'re a failed abortion whose birth certificate is an apology from the condom factory.',
    'you must have been born on a highway, that\'s where most accidents happen.',
    'you\'re so ugly Hello Kitty says goodbye to you.',
    'you\'re so ugly that when your mama dropped you off at school she got a ticket for littering.',
    'is your family tree a cactus? Because everyone on it is a prick.',
    'do you have to leave so soon? I was just about to poison the tea..',
    'dumbass.',
    'having no life is better than having your life.',
    'you\'re so annoying that people go to jail to get away from you.',
    'out of 100,000 sperm, you were the fastest?',
    'you\'re so fat you need cheat codes to win at fitness games.',
    'with a face like yours, I wish that I was blind.',
    'the only positive thing about you is your HIV status.',
    'why don\'t you slip into something more comfortable? Like a coma.',
    'eats dick for breakfast and dinner, lunch is reserved for ass.',
    'you should have been a blowjob.',
    'you should have been anal.',
    'is desperate for a lady.'
  ];
  if (command.arg === undefined) {
    command.msg.reply('A name is required for me to insult someone. Try using !help insult.');
    return;
  }
  var insult = utils.random(insults.length) + 1;
  command.msg.channel.send(command.arg + ', ' + insults[insult], {tts: true});
}

module.exports = {
  insult : insult,
  info : {
      argNum : 1,
      name : 'insult',
      usage : '!insult',
      args : ['the username of a channel member'],
      desc : 'commands the bot to to roast your friends.'
  }
}
