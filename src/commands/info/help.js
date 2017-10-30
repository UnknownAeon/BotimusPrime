/**
 * @author Kevin Pfeifle
 * @since 0.2
 */

/**
 * Controls the bot to give the help info for a given commmand.
 * @param msg The message that was used to summon the bot.
 */
function help(command) {
  if (command.arg == undefined) {
    command.msg.reply('you have not specified which command you would like help with.\n\nName: help\n' +
    'Usage: !help [command] or !help [command] [subcommmand]\nDescription: displays information for the given command or subcommand.\n\n' +
    'If you would like a listing of all commands, try !commands.');
  }
  else {

  }
}

module.exports = {
  help : help
}
