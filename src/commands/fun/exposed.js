/**
 * @author Andrew Subowo
 * @since 0.2 contributory
 */

var utils = require('../../utils.js');

/**
 * Just as an inside joke between our friend group
 * @param msg The message used to summon the bot
 */

var exposedReply = function(msg) {
    replies = [
      'you\'ve been EXPOSED',
      'i\'m EXPOSING you',
      'i have 403821 subscribers on youtube',
      '#EXPOSED',
      'i\'m exposing u tryhards',
      'i left the hook u tryhards',
      'you made the game not fun for me'
    ];

    // Choose a random number for the games response
    var games = utils.random(100);

    // Choose a random reply
    var replySelector = utils.random(replies.length);
    if (replySelector === 0) {
      msg.reply('you only have ' + games + ' games? lol you broke ass bitch',{tts: true});
    } else {
      msg.reply(replies[replySelector],{tts: true});
    }
}

// Allows other files in the package access this
module.exports = {
  exposedReply : exposedReply
}
