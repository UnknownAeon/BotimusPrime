/**
 * @author Kevin Pfeifle(UnknownAeon)
 * @since 0.2
 */

/**
 * Controls the bot to list out all of the available commands.
 * @param msg The message that was used to summon the bot.
 */
function help(msg, args) {
  if (args.length == 0) {
    msg.reply('I am Botimus Prime, the 2AM Gaming bot. If you need help with commands, try one of these help options:\
    \n!help [category]\nValid categories - fun, game, info, moderation, utility');
  }
}

module.exports = {
  help : help
}
