/**
 * Botimus Prime, a discord bot designed for the 2AM Gaming server.
 *
 * @author Kevin Pfeifle(UnknownAeon)
 * @version 0.2
 * @since 0.1
 */
const discord = require('discord.js');
const handler = require('./handler.js')
const opus = require('opusscript');
const promise = require('Promise');
const client = new discord.Client();

client.on('ready', function() {
  console.log('Logged in as Botimus Prime!');
});

// When a client posts a message, it is filtered to see if the bot was summoned.
client.on('message', function(msg) {
  handler.handleCommand(msg);
});

// The bot's client id info.
client.login('MzQ3OTA2MjM3MjM0NTQ0Njcw.DHuZww.TAMWKFBPkXOQdM_ImH7plWHAo3A');
