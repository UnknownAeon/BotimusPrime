/**
 * @author Andrew Subowo (asubowo/kumquat_juice)
 */

var rls = require('rls-api');

var client = new rls.Client({
  token: "9IW66CIWOE8GS24D34M3BRZGD608GWWO"
});


function rlstats(command) {
  if (command.arg == 'platform') {
        client.getPlatformsData(function(status, data) {
        if(status === 200) {
            command.msg.reply("-- Platforms data:\n" + data);
            }
        });
  }

  if (command.arg == 'dev') {
    client.getPlayer("76561198033338223", rls.platforms.STEAM, function(status, data){
        if(status === 200){
            console.log("-- Player Data:");
            console.log("   Display name: " + data.displayName);
            console.log("   Goals: " + data.stats.goals);
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
// client.getPlaylistsData(function(status, data){
//     if(status === 200){
//         console.log("-- Playlists data:");
//         console.log(data);
//     }
// });
//
// client.getTiersData(function(status, data){
//     if(status === 200){
//         console.log("-- Tiers data:");
//         console.log(data);
//     }
// });
//
// client.getPlayer("76561198033338223", rls.platforms.STEAM, function(status, data){
//     if(status === 200){
//         console.log("-- Player Data:");
//         console.log("   Display name: " + data.displayName);
//         console.log("   Goals: " + data.stats.goals);
//     }
// });
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
