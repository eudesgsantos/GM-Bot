const { Client } = require('discord.js');

const id = "424654518219833347"

module.exports = function kick_img(message){
    if (!(message.author.id == id)) return;
    if (message.attachments.size > 0) {
        if (message.attachments.every(attachIsImage)){
            const memberTarget = message.member;
            if(memberTarget){
                memberTarget
                .kick()
                .then((memberTarget) => message.channel.send(`${memberTarget} was kicked.`))
                .catch((err) => message.channel.send('I can not kick that user :('));
            }
        }
    }                       
    function attachIsImage(msgAttach) {
        var url = msgAttach.url;
        return url.indexOf("png", url.length - "png".length /*or 3*/) !== -1 || url.indexOf("jpg", url.length - "jpg".length /*or 3*/) !== -1;
    }
}