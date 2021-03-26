const { MessageEmbed, Client, MessageReaction} = require('discord.js');

module.exports = function roll(message,args){
    var list = [];
    const maxRoll = 200;
    const maxDice = 100;
    const bool = args[1].match('d');
    if(!bool) return;
    const parse = args[1].split('d')
    console.log(parse[1]);
    console.log(args[0]);
    if(args[0] > maxRoll ){
        message.reply(`Please enter a number of rolls less than ${maxRoll}.`);
        return;
    }
    if(parse[1] > maxDice ){
        message.reply(`Please enter a dice number less than ${maxDice}.`);
        return;
    }
    for (var i = 0; i < args[0]; i++){
        var num = Math.floor(Math.random() * parse[1])+ 1;  
        list.push(num);
    }
    message.channel.send(list);
    message.channel.send(`Sum : ${list.reduce((a, b) => a + b, 0)}`);
} 
