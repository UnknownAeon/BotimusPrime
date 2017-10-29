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
    'Name: Help Categories\nUsage: !help [category]\nDescription: Gives description of command categories. ' +
    'Valid categories: fun, game, info, moderation, utility\n\n' +
    'Name: Help Commands\nUsage: !help [category] [command]\nDescription: Gives description of a command. See categories for listings.');
  }
  if (command.arg == 'fun') {
    if (command.subarg == undefined) {
      command.msg.reply('commands in the fun category are those who have no purpose or are silly.\n\n' +
      'Name: Fun Commands Help\nUsage: !help [fun] [command]\nDescription: Gives details on the given \'fun\' command. ' +
      'Valid commands within the \'fun\' category: audio, exposed, insult, meme');
    }
  }
  else if (command.arg == 'game') {
    if (command.subarg == undefined) {
      command.msg.reply('commands in the game category are those that give details or tools pertaining to games.\n\n' +
      'Name: Game Commands Help\nUsage: !help [game] [command]\nDescription: Gives details on the given \'game\' command. ' +
      'Valid commands within the \'game\' category are: hots');
    }
  }
  else if (command.arg == 'info') {
    if (command.subarg == undefined) {
      command.msg.reply('commands in the info category give information about this bot.\n\n' +
      'Name: Info Commands Help\nUsage: !help [info] [command]\nDescription: Gives details on the given \'info\' command. ' +
      'Valid commands within the \'info\' category are: commands, info');
    }
  }
  else if (command.arg == 'moderation') {
    command.msg.reply('there are currently no available moderation tools.');
  }
  else if (command.arg == 'utility') {
    if (command.subarg == undefined) {
      command.msg.reply('commands in the utility category are those that server a useful purpose.\n\n' +
      'Name: Utility Commands Help\nUsage: !help [utility] [command]\nDescription: Gives details on the given \'utility\' command. ' +
      'Valid commands within the \'utility\' category are: cointoss, diceroll');
    }
  }
  else command.msg.reply('that is not a valid category. Valid categories: fun, game, info, moderation, utility');
}

module.exports = {
  help : help
}
