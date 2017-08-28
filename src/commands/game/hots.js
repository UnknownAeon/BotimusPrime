/**
 * @author Kevin Pfeifle(UnknownAeon)
 * @since 0.2
 */
 const cheerio = require('cheerio');
 const request = require('request');

 /**
  * Maintains calls to all of the hots-based commands.
  * @param msg The message that was used to summon the bot.
  * @param args the arguements passed along with the command.
  */
function hots(msg, args) {
  if (args.length > 0 && args[0] === 'build') {
    hotslogs(msg, args);
  }
  else {
    msg.reply("I do not recognize that hots command.\nValid commands:\n!hots build [hero]");
  }
}

/**
 * Controls the bot to message the meta build for a hero on hotslogs.
 * @param msg The message that was used to summon the bot.
 * @param args the arguements passed along with the command.
 */
function hotslogs(msg, args) {
  if (args[1] == undefined) {
    msg.reply('In order to get a talent guide the name of the requested hero is required.');
    return;
  }
  // Ensures the first letter of the hero's name is capitalized.
  args = args[1].charAt(0).toUpperCase() + args[1].slice(1);
  scrubHOTSLOGS(args).then(function(talentBuild) {
    msg.reply('this is highest winrate build for ' + args + ' on hotslogs.com -- it may take a few moments to load.');
    msg.channel.send('Level 1:', {embed : {
      author : {
        name : talentBuild.level1.name,
        icon_url : talentBuild.level1.img
      },
      description : talentBuild.level1.desc
    }});
    msg.channel.send('Level 4:', {embed : {
      author : {
        name : talentBuild.level4.name,
        icon_url : talentBuild.level4.img
      },
      description : talentBuild.level4.desc
    }});
    msg.channel.send('Level 7:', {embed : {
      author : {
        name : talentBuild.level7.name,
        icon_url : talentBuild.level7.img
      },
      description : talentBuild.level7.desc
    }});
    msg.channel.send('Level 10:', {embed : {
      author : {
        name : talentBuild.level10.name,
        icon_url : talentBuild.level10.img
      },
      description : talentBuild.level10.desc
    }});
    msg.channel.send('Level 13:', {embed : {
      author : {
        name : talentBuild.level13.name,
        icon_url : talentBuild.level13.img
      },
      description : talentBuild.level13.desc
    }});
    msg.channel.send('Level 16:', {embed : {
      author : {
        name : talentBuild.level16.name,
        icon_url : talentBuild.level16.img
      },
      description : talentBuild.level16.desc
    }});
  });
}

/**
 * A web scrubber to gather the meta talent data from hotslogs.com
 * @param heroName the name of the hero to get talent info on.
 * @returns a promise to scrub the site and resolve the talent data.
 */
var scrubHOTSLOGS = function(heroName) {
  // TODO: maintain a list of all valid hero names so there are no errors.
  var url = 'https://www.hotslogs.com/Sitewide/HeroDetails?Hero=' + heroName;
  return new Promise(function(resolve, reject) {
    // Makes the request to the website.
    request(url, function(error, response, html){
      if(!error){
        var $ = cheerio.load(html);
        var talentBuild = {
          level1 : {
            name : 'No talent included',
            desc : 'Pick the talent at this tier that synergizes best!',
            img : 'http://www.mpcgaming.com/img/hotsicon.png'
          },
          level4 : {
            name : 'No talent included',
            desc : 'Pick the talent at this tier that synergizes best!',
            img : 'http://www.mpcgaming.com/img/hotsicon.png'
          },
          level7 : {
            name : 'No talent included',
            desc : 'Pick the talent at this tier that synergizes best!',
            img : 'http://www.mpcgaming.com/img/hotsicon.png'
          },
          level10 : {
            name : 'No talent included',
            desc : 'Pick the talent at this tier that synergizes best!',
            img : 'http://www.mpcgaming.com/img/hotsicon.png'
          },
          level13 : {
            name : 'No talent included',
            desc : 'Pick the talent at this tier that synergizes best!',
            img : 'http://www.mpcgaming.com/img/hotsicon.png'
          },
          level16 : {
            name : 'No talent included',
            desc : 'Pick the talent at this tier that synergizes best!',
            img : 'http://www.mpcgaming.com/img/hotsicon.png'
          }
        };
        // loads in the starting point that we want into cheerio -- the number at the end of the id is the talent buiild number.
        $('#ctl00_MainContent_RadGridPopularTalentBuilds_ctl00__0').filter(function(){
          // Filters the data to get just the info regarding each talent tier.
          var data = $(this);
          var talent1 = data.children().first().next().next().children().first().attr('alt');
          // Hotslogs sometimes does not have data on a tier for a build -- in this case, we use the default hard coded result above.
          if (talent1 !== undefined) {
            talent1 = talent1.split(': ');
            talentBuild.level1.name = talent1[0];
            talentBuild.level1.desc = talent1[1];
            talentBuild.level1.img = "http:" + data.children().first().next().next().children().first().attr('src');
          }
          var talent2 = data.children().first().next().next().next().children().first().attr('alt');
          if (talent2 !== undefined) {
            talent2 = talent2.split(': ');
            talentBuild.level4.name = talent2[0];
            talentBuild.level4.desc = talent2[1];
            talentBuild.level4.img = "http:" + data.children().first().next().next().next().children().first().attr('src');
          }
          var talent3 = data.children().first().next().next().next().next().children().first().attr('alt');
          if (talent3 !== undefined) {
            talent3 = talent3.split(': ');
            talentBuild.level7.name = talent3[0];
            talentBuild.level7.desc = talent3[1];
            talentBuild.level7.img = "http:" + data.children().first().next().next().next().next().children().first().attr('src');
          }
          var talent4 = data.children().first().next().next().next().next().next().children().first().attr('alt');
          if (talent4 !== undefined) {
            talent4 = talent4.split(': ');
            talentBuild.level10.name = talent4[0];
            talentBuild.level10.desc = talent4[1];
            talentBuild.level10.img = "http:" + data.children().first().next().next().next().next().next().children().first().attr('src');
          }
          var talent5 = data.children().first().next().next().next().next().next().next().children().first().attr('alt');
          if (talent5 !== undefined) {
            talent5 = talent5.split(': ');
            talentBuild.level13.name = talent5[0];
            talentBuild.level13.desc = talent5[1];
            talentBuild.level13.img = "http:" + data.children().first().next().next().next().next().next().next().children().first().attr('src');
          }
          var talent6 = data.children().first().next().next().next().next().next().next().next().children().first().attr('alt');
          if (talent6 !== undefined) {
            talent6 = talent6.split(': ');
            talentBuild.level16.name = talent6[0];
            talentBuild.level16.desc = talent6[1];
            talentBuild.level16.img = "http:" + data.children().first().next().next().next().next().next().next().next().children().first().attr('src');
          }
          resolve(talentBuild);
        })
      }
      else console.log("error scrubbing hotslogs data");
    });
  });
};

module.exports = {
  hots : hots
}
