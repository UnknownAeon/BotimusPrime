/**
 * @author Kevin Pfeifle(UnknownAeon)
 * @since 0.2
 */

/**
 * Controls the bot to link a hotslogs page for the requested hero.
 * @param msg The message that was used to summon the bot.
 * @param args the arguements passed along with the command.
 */
function hotslogs(msg, args) {
  if (args[0] == undefined) {
    msg.reply('In order to link to hotslogs the name of the requested hero is required.');
    return;
  }
  args = args[0].charAt(0).toUpperCase() + args[0].slice(1);
  msg.reply('Link the to hotslogs page for ' + args + '\nhttps://www.hotslogs.com/Sitewide/HeroDetails?Hero=' + args);
}

module.exports = {
  hotslogs : hotslogs
}
