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
    msg.reply('Usage: !help [category]\nGives description of command categories.\n\
     Valid categories: fun, game, info, moderation, utility\n\
     Usage: !help [category] [command] gives description of a command.');
  }
  if (command.arg == 'fun') {
    if (command.subarg == undefined) {
      msg.reply('Commands in the fun category are those who have no purpose or are silly. Try using this command:\n\
      !help [fun] [command]\n Valid commands within the \'fun\' category:\
      \naudio\nexposed\ninsult\nmeme');
    }
  }
}

module.exports = {
  help : help
}
