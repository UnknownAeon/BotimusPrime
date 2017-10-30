/**
 * @author Kevin Pfeifle
 * @since 0.2
 */

var commands = require('../../router.js');
var utils = require('../../utils.js');

/**
 * Controls the bot to give the help info for a given commmand.
 * @param msg The message that was used to summon the bot.
 */
function help(command) {
  if (command.arg == undefined) {
    command.msg.reply('you have not specified which command you would like help with.\n\n' +
    '**__Command Name:__**\n\thelp\n\n' +
    '**__Command Usage:__**\n\t!help [command]\n\t!help [command] [subcommmand]\n\n' +
    '**__Command Description:__**\n\tdisplays information for the given command or subcommand.\n\n' +
    'If you would like a listing of all commands, try !commands.');
  }
  else {
    if (!utils.isValid(command.command)) command.msg.reply('that is not a valid command. Use !commands for a listing of all commands.');
    else {
      var commandInfo = utils.getInfo(command.command);
      if (commandInfo.argNum == 0) {
        command.msg.reply('\n**__Command Name:__**\n\t' + commandInfo.name + '\n\n' +
        '**__Command Usage:__**\n\t' + commandInfo.usage + '\n\n' +
        '**__Command Description:__**\n\t' + commandInfo.desc + '\n\n');
      }
      else if (commandInfo.argNum == 1) {

      }
      else if (commandInfo.argNum == 2) {

      }
    }
  }
}

module.exports = {
  help : help
}
