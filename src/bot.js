require("dotenv").config();

const { Client, Discord } = require('discord.js');

const command = require('./commands/command');
const kick_img = require ('./auto/kick_img');
const kick_emoji = require ('./auto/kick_emoji');

const client = new Client();

const PREFIX = "!";

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});

client.on('message', async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        command(message,Discord,client);
    }
    //kick_emoji(message);
    //kick_img(message);
});

client.login(process.env.DISCORD_BOT_TOKEN);
