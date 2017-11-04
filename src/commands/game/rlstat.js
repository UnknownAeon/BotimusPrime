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
              var scorepercentage = parseFloat((parseInt(data.stats.goals) / parseInt(data.stats.shots)) * 100).toFixed(2);
              var goals = parseInt(data.stats.goals);
              var assists = parseInt(data.stats.assists);
              var saves = parseInt(data.stats.saves);
              var shots = parseInt(data.stats.shots);
              var playerEfficiency = (goals * 1) + (assists * 0.8) + (saves * 0.7)
                + (shots * 0.5) + ((goals/shots) * 0.6);


              const embed = new Discord.RichEmbed()
                .setColor(0x00AE86)
                .setTitle("Player data for: " + player)
                .setThumbnail(avatar)
                .addField("**__Display name__**", data.displayName)
                .addField("**__Wins__**", data.stats.wins)
                .addField("**__Goals__**", goals)
                .addField("**__Shots__**", shots)
                .addField("**__Shot/Goal Ratio__**", scorepercentage + "%")
                .addField("**__Times MVP__**", data.stats.mvps)
                .addField("**__Saves__**", saves)
                .addField("**__Assists__**", assists)
                .addBlankField(true)
                .addField("**__PLAYER EFFICIENCY__**", playerEfficiency);

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



} //end of command parsing

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
  info : {
    name :  "rlstats",
    usage:  "!rlstats [command] [command parameter]"
    desc  : "Perform some stat crunching. Available commands are:\ninfo, search"
  }
}
