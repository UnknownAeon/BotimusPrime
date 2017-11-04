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
    var player = command.subarg;
    client.getPlayer(player, rls.platforms.STEAM, function(status, data){
        if(status === 200){
            var avatar = data.avatar;

            const embed = new Discord.RichEmbed()
              .setTitle("Player data for: " + player)
              .setThumbnail(avatar)
              .addField("Display name", data.displayName)
              .addField("Wins", data.stats.wins)
              .addField("Goals", data.stats.goals)
              .addField("Times MVP", data.stats.mvps)
              .addField("Saves", data.stats.saves)
              .addField("Shots", data.stats.shots)
              .addField("Assists", data.stats.assists);

            command.msg.channel.send({embed});

            // command.msg.channel.send("\n**__Player Data:__**\n" +
            // "\tDisplay name: " + data.displayName + "\n" +
            // "\tWins:\t\t" + data.stats.wins + "\n" +
            // "\tGoals:\t\t" + data.stats.goals + "\n" +
            // "\tMVPs:\t\t" + data.stats.mvps + "\n" +
            // "\tSaves:\t\t" + data.stats.saves + "\n" +
            // "\tShots:\t\t" + data.stats.shots + "\n" +
            // "\tAssists:\t" + data.stats.assists);
            // command.msg.channel.send('Avatar', {embed })
          }
        else {
          command.msg.reply(player + " was not found. Please enter in the steam unique ID number instead.");
        }
        });
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
