/**
 * @author Kevin Pfeifle(UnknownAeon)
 * @since 0.2
 */

/**
 * Class to maintain all of the relevant command info.
 */
function Command(msg) {
  var processedInput = this.parseMessage(msg);
  if (processedInput == undefined) return;
  // The different instance variables of the class.
  this.msg = msg; // Msg used to summon bot.
  this.command = processedInput.command; // The command.
  this.arg = processedInput.arg; // The primary arg (if necessary).
  this.subarg = processedInput.subarg; // The seconday arg (if necessary).
}

/**
 * Parses a message and isolates the command and args.
 * @param msg the message that was sent.
 * @returns json with the isolated command and args.
 */
Command.prototype.parseMessage = function(msg) {
  // All bot commands begin with !, dont use !airhorn, that's for other bot.
  if (msg.content.charAt(0) !== '!' || msg.content === '!airhorn') return;
  splitMsg = msg.content.split(' ');
  // First element is the command, the rest are supporting args.
  var command = splitMsg[0];
  var arg = splitMsg[1];
  var subarg = splitMsg[2];

  return({'command' : command, 'arg' : arg, 'subarg' : subarg});
}

/**
 * Determines if the Command is undefined. If it is, it is likely that this is not a bot command.
 * @returns true or false.
 */
Command.prototype.isUndefined = function() {
  if (this.command == undefined) return true;
  else return false;
}

module.exports = Command;
