const { Client } = require('discord.js');

module.exports = function kick(message, args) {
    if(!message.member.hasPermission('KICK_MEMBERS'))
            return message.reply('You do not have permissions to use that command');
    if(args.length === 0) return message.reply('Please provide an ID.')
    const member = message.mentions.users.first();
    console.log(member);
    const memberTarget = message.guild.members.cache.get(member.id)
    if(memberTarget){
        memberTarget
        .kick()
        .then((memberTarget) => message.channel.send(`${memberTarget} was kicked.`))
        .catch((err) => message.channel.send('I can not kick that user :('));

    } else {
        message.channel.send('That member was not found.');
    }
}