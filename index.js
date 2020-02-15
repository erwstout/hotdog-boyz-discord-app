const Discord = require('discord.js');
const _ = require('lodash');
require('dotenv').config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
 
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => {
    const messageContent = _.split(msg.content, ' ');

    if(_.includes(messageContent, "hotdog")) {
        msg.reply(':hotdog: PLEDGE ALLEGIANCE')
    }

});

client.login(DISCORD_TOKEN);