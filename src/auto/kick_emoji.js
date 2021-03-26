const { Client } = require('discord.js');

const denuncia = '<:denuncia:690998683663073353>'

module.exports = function kick_emoji(message){
    var bool = message.content.match(denuncia);
    var res = message.content.toLowerCase();
    var bool1 = res.match('denuncia');
    var bool2 = res.match('denúncia');
    var instakick = message.author.id.match('343529468725559297');
    if (bool || bool1 || bool2 ) {
        const memberTarget = message.member;
        if(memberTarget){
            memberTarget
            .kick()
            .then((memberTarget) => message.channel.send(`${memberTarget} was kicked.`))
            .catch((err) => message.channel.send('I can not kick that user :('));
        }
    }
}                       