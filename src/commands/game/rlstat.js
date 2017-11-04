/**
 * @author Andrew Subowo (asubowo/kumquat_juice)
 */

var rls = require('rls-api');

var client = new rls.Client({
  token: "9IW66CIWOE8GS24D34M3BRZGD608GWWO"
});


function rlstats(command) {
  if (command.arg == 'info') {
    var player = command.subarg;
    client.getPlayer(player, rls.platforms.STEAM, function(status, data){
        if(status === 200){
            command.msg.reply("\n-- Player Data:\n" +
            "   Display name: " + data.displayName + "\n" +
            "   Goals: " + data.stats.goals);
          }
        else if (status === 404) {
          command.msg.reply(player + " was not found. Please enter in the steam unique ID number instead.");
        }
        });
      }

  if (command.arg == 'dev2') {
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

  if (command.arg == 'search') {
    var player = command.subarg;
    client.searchPlayers(player, function(status, data){
    if(status === 200){
        command.msg.reply("-- Player Search Data:");
        command.msg.reply("   Results: " + data.results);
        command.msg.reply("   Total Results: " + data.totalResults);
    }
    });
  }
}


//
// client.getSeasonsData(function(status, data){
//     if(status === 200){
//         console.log("-- Seasons data:");
//         console.log(data);
//     }
// });
//
//
// client.getTiersData(function(status, data){
//     if(status === 200){
//         console.log("-- Tiers data:");
//         console.log(data);
//     }
// });
//
//
// client.searchPlayers("Mike", function(status, data){
//     if(status === 200){
//         console.log("-- Player Search Data:");
//         console.log("   Results: " + data.results);
//         console.log("   Total Results: " + data.totalResults);
//     }
// });
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
