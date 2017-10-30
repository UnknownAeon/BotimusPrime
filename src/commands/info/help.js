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
    command.msg.reply('you have not specified which command you would like help with.\n\n' +
    '**__Command Name:__**\n\thelp\n\n' +
    '**__Command Usage:__**\n\t!help [command]\n\t!help [command] [subcommmand]\n\n' +
    '**__Command Description:__**\n\n\tdisplays information for the given command or subcommand.\n\n' +
    'If you would like a listing of all commands, try !commands.');
  }
  else {

  }
}

module.exports = {
  help : help
}
