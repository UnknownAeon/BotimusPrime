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
    command.msg.reply('you have not specified which command you would like help with.\n\n\
**__Name__**: \n\
\thelp\n\
Usage: \n\
\t!help [command]\n\
\t!help [command] [subcommmand]\n\
Description: \n\
\tdisplays information for the given command or subcommand.\n\nIf you would like a listing of all commands, try !commands.');
  }
  else {

  }
}

module.exports = {
  help : help
}
