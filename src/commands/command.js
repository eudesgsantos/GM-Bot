const { Client, Discord } = require('discord.js');

const PREFIX = "$";

const kick = require('./kick');
const talk = require('./talk');
const roll = require('./D&D/roll');
const alignment_1 = require('./alignmenttest/alignment_1');

const channelID = '803419900508504106'

module.exports = async function command(message,Discord,client,dialogflow,uuid) {
    if (message.channel.id != channelID) return;
    const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);
        console.log(CMD_NAME);
        console.log(args);
           
    switch(CMD_NAME){
        case 'kick': kick(message,args);
            break;
        case 'alignment': alignment_1(message,Discord,client);
            break;
        case 'roll': roll(message,args);
            break;
        /*case 'talk': 
            talk(message.content.split(' ').slice(1).join(' ')).then((res) => {
            console.log(res);
            message.reply(res);
            });
            break;*/
    }
}