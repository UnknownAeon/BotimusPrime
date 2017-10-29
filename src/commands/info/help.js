/**
 * @author Kevin Pfeifle(UnknownAeon)
 * @since 0.2
 */

/**
 * Controls the bot to list out all of the available commands.
 * @param msg The message that was used to summon the bot.
 */
function help(command) {
  if (command.arg == undefined) {
    command.msg.reply('!help gives details on commands, to see a listing of all commands try !commands.\n\n' +
    'Name: Help Categories\nUsage: !help [category]\nDescription: Gives description of command categories.\n' +
    'Valid categories: fun, game, info, moderation, utility\n\n' +
    'Name: Help Commands\nUsage: !help [category] [command] gives description of a command. See categories for listings.');
  }
  if (command.arg == 'fun') {
    if (command.subarg == undefined) {
      command.msg.reply('Commands in the fun category are those who have no purpose or are silly. Try using this command:\n' +
      'Name: Fun Commands Help\nUsage: !help [fun] [command]\nDescription: Gives details on the given \'fun\' command.\n' +
      'Valid commands within the \'fun\' category:\naudio\nexposed\ninsult\nmeme');
    }
  }
}

module.exports = {
  help : help
}
