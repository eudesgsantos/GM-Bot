const { MessageEmbed, Client, MessageReaction} = require('discord.js');

const alignment_2 = require('./alignment_2');

module.exports = async function alignment_1(message,Discord,client){
    const emojiId = "<:nino:825114172751609928>";
    const timeLimit = 60000;
    const newEmbed = new MessageEmbed()
    .setColor('#ffffff')
	.setTitle('Alignment Test')
	.setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
    .setDescription("A creature's general moral and personal attitudes are represented by its alignment: lawful good, neutral good, chaotic good, lawful neutral, neutral, chaotic neutral, lawful evil, neutral evil, or chaotic evil.\n\n**Answer each question by choosing the response that best describes your belief or most likely action.**\n\n React to start the test.\n")
    .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));

    let Embed = await message.channel.send(newEmbed);
    await Embed.react(emojiID);

    const filter = (reaction, user) => {
        return reaction.emoji.id === emojiId && user.id === message.author.id;
    };

    const collector = Embed.createReactionCollector(filter, { max: 1, time:timeLimit });

    collector.on('collect', async (reaction, user) => {
        console.log(`Starting alignment test for ${user.tag}`);
        Embed.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
        alignment_2(message,Discord,client,Embed);
    });
    
    
}

