/**
 * @author Andrew Subowo (asubowo/kumquat_juice)
 */

var rls = require('rls-api');
var Discord = require('discord.js');

var client = new rls.Client({
  token: "9IW66CIWOE8GS24D34M3BRZGD608GWWO"
});


function rlstats(command) {
  if (command.arg === 'info') {
    if (command.subarg !== undefined) {
      var player = command.subarg;
      command.msg.channel.send('Creating player card for ' + player + ', please wait.')
      client.getPlayer(player, rls.platforms.STEAM, function(status, data){
          if(status === 200){
              var avatar = data.avatar;

              const embed = new Discord.RichEmbed()
                .setColor(0x00AE86)
                .setTitle("Player data for: " + player)
                .setThumbnail(avatar)
                .addBlankField(true)
                .addField("**__Display name__**", data.displayName)
                .addField("**__Wins__**", data.stats.wins)
                .addField("**__Goals__**", data.stats.goals)
                .addField("**__Times MVP__**", data.stats.mvps)
                .addField("**__Saves__**", data.stats.saves)
                .addField("**__Shots__**", data.stats.shots)
                .addField("**__Assists__**", data.stats.assists);

              command.msg.channel.send({embed});
            }
          else {
            command.msg.reply(player + " was not found. Please enter Unique Steam ID number or name.");
          }
          });
    }
    else {
      command.msg.reply('Please specify a player.')
    }
  }
}

  if (command.arg === 'dev2') {
    client.getPlaylistsData(function(status, data) {
      if (status === 200) {
        command.msg.reply("\n-- Playlist Data:");

        console.log(data);

      }

    });
  }

  if (command.arg === 'search') {
    var player = command.subarg;
    client.searchPlayers(player, function(status, data){
    if(status === 200){
        command.msg.channel.send("**__Player Search Data:__**");
        command.msg.channel.send("\tResults: " + data.results);
        command.msg.channel.send("\tTotal Results: " + data.totalResults);
    }
    });
  }


if (command.arg === 'season') {
  client.getSeasonsData(function(status, data) {
    if (status === 200) {
      command.msg.reply('This is the Seasons data returned');
      command.msg.channel.send(data);
      console.log(data);
    }
  });
}



}

//
// client.getTiersData(function(status, data){
//     if(status === 200){
//         console.log("-- Tiers data:");
//         console.log(data);
//     }
// });
//
//
//
// client.getRankedLeaderboard(rls.rankedPlaylists.DUEL, function(status, data){
//     if(status === 200){
//         console.log("-- Ranked Leaderboard:");
//         console.log("   Leaderboard count: " + data.length);
//         console.log("   Duel Number #1 Player: " + data[0].displayName);
//     }
// });
//
// client.getStatLeaderboard(rls.statType.GOALS, function(status, data){
//     if(status === 200){
//         console.log("-- Stat Goals Leaderboard:");
//         console.log("   Leaderboard count: " + data.length);
//         console.log("   Goals #1 Player: " + data[0].displayName);
//     }
// });

module.exports = {
  rlstats : rlstats
};
