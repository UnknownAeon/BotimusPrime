/**
 * @author Andrew Subowo (asubowo/kumquat_juice)
 */

var rls = require('rls-api');

var client = new rls.Client({
  token: "9IW66CIWOE8GS24D34M3BRZGD608GWWO"
});


function rlstats(command) {
  if (command.arg === 'info') {
    var player = command.subarg;
    client.getPlayer(player, rls.platforms.STEAM, function(status, data){
        if(status === 200){
            command.msg.reply("This is the player data for " + player)
            command.msg.channel.send("\n**__Player Data:__**\n" +
            "\tDisplay name: " + data.displayName + "\n" +
            "\tWins\t" + data.stats.wins + "\n" +
            "\tGoals:\t" + data.stats.goals + "\n" +
            "\tMVPs:\t" + data.stats.mvps + "\n" +
            "\tSaves:\t" + data.stats.saves + "\n" +
            "\tShots:\t" + data.stats.shots + "\n" +
            "\tAssists:\t" + data.stats.assists);
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

        var jsonContents = JSON.parse(data);

        for (var i = 0; i < jsonContents.length; i++) {
          command.msg.reply(jsonContents.name);
        }

      }

    });
  }

  if (command.arg === 'search') {
    var player = command.subarg;
    client.searchPlayers(player, function(status, data){
    if(status === 200){
        command.msg.channel.send("-- Player Search Data:");
        command.msg.channel.send("   Results: " + data.results);
        command.msg.channel.send("   Total Results: " + data.totalResults);
    }
    });
  }


if (command.arg === 'season') {
  client.getSeasonsData(function(status, data) {
    if (status === 200) {
      command.msg.reply('This is the Seasons data returned');
      command.msg.channel.send(data);
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
