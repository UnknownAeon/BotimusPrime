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
function help(botCommand) {
  if (botCommand.arg == undefined) {
    botCommand.msg.reply('you have not specified which command you would like help with.\n\n' +
    '**__Command Name:__**\n\thelp\n\n' +
    '**__Command Usage:__**\n\t!help [command]\n\t!help [command] [subcommmand]\n\n' +
    '**__Command Description:__**\n\tdisplays information for the given command or subcommand.\n\n' +
    'If you would like a listing of all commands, try !commands.');
  }
  else {
    if (!utils.isValid(botCommand.arg)) botCommand.msg.reply('that is not a valid command. Use !commands for a listing of all commands.');
    else {
      var commandInfo = utils.getInfo(botCommand.arg);
      if (commandInfo.argNum == 0) {
        botCommand.msg.reply('\n**__Command Name:__**\n\t' + commandInfo.name + '\n\n' +
        '**__Command Usage:__**\n\t' + commandInfo.usage + '\n\n' +
        '**__Command Description:__**\n\t' + commandInfo.desc + '\n\n');
      }
      else if (commandInfo.argNum == 1) {
        var message = '\n**__Command Name:__**\n\t' + commandInfo.name + '\n\n' +
        '**__Command Usage:__**\n\t' + commandInfo.usage + ' [option]' + '\n\n' +
        '**__Command Description:__**\n\t' + commandInfo.desc + '\n\n' +
        '**__Valid Options:__**\n\t';
        var first = true;
        commandInfo.args.forEach(arg) {
          if (first) {
            message += arg;
            first = false;
          }
          else message += ', ' + arg;
        }
        botCommand.msg.reply(message);
      }
      else if (commandInfo.argNum == 2) {

      }
    }
  }
}

module.exports = {
  help : help
}
