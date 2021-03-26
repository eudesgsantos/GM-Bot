const { MessageEmbed, Client} = require('discord.js');


module.exports = async function alignment_2(message,Discord,client,Embed){
    const timeLimit = 120000;

    const list = ["1️⃣","2️⃣","3️⃣","4️⃣"];    

    const filter = (reaction, user) => {
        return list.includes(reaction.emoji.name) && user.id === message.author.id;
    };

    //const collector = Embed.createReactionCollector(filter, {  max: 36, time:timeLimit });
    
    const { guild } = message

    roleNames = ['Lawful Good','Neutral Good','Chaotic Good','Lawful Neutral','True Neutral','Chaotic Neutral','Lawful Evil','Neutral Evil','Chaotic Evil']

    var role;

    const member = guild.members.cache.get(message.author.id);

    var alignments = [0,0,0,0,0,0,0,0,0];
    var LC = [0,0,0];
    var GE = [0,0,0]; 
    
    A1();

    function A1(){
        const alignm_1 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**1. Family elders are expressing disapproval of you to the rest of the family. Do you:**\n\n 1. Accept the criticism and change your ways.\n 2. Seek a compromise with them.\n 3. Besmirch the reputation of those expressing disapproval as you ignore their scorn.\n 4. Silence them any way you can.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_1);
        Embed.react("1️⃣");
        Embed.react("2️⃣");
        Embed.react("3️⃣");
        Embed.react("4️⃣");
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[0] += 2;
                    alignments[1] += 2;
                    alignments[2] += 2;
                    GE[0] += 2;
                    A2();
                    break;
                case '2️⃣':
                    alignments[0] += 1;
                    alignments[1] += 1;
                    alignments[2] += 1;
                    GE[0] += 1;
                    A2();
                    break;
                case '3️⃣':
                    alignments[6] += 1;
                    alignments[7] += 1;
                    alignments[8] += 1;
                    GE[2] += 1;
                    A2();
                    break;
                case '4️⃣':
                    alignments[6] += 2;
                    alignments[7] += 2;
                    alignments[8] += 2;
                    GE[2] += 2;
                    A2();
                    break;
            }
        
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A2(){
        const alignm_2 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**2. Would you give up a promising career to aid the family in time of need?**\n\n 1. In a heartbeat.\n 2. Yes, with some reluctance.\n 3. Only if I was certain I'd be able to return to my career soon.\n 4. No.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_2);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[0] += 2;
                    alignments[1] += 2;
                    alignments[2] += 2;
                    GE[0] += 2;
                    A3();
                    break;
                case '2️⃣':
                    alignments[0] += 1;
                    alignments[1] += 1;
                    alignments[2] += 1;
                    GE[0] += 1;
                    A3();
                    break;
                case '3️⃣':
                    alignments[3] += 1;
                    alignments[4] += 1;
                    alignments[5] += 1;
                    GE[1] += 1;
                    A3();
                    break;
                case '4️⃣':
                    alignments[3] += 2;
                    alignments[4] += 2;
                    alignments[5] += 2;
                    GE[1] += 2;
                    A3();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A3(){
        const alignm_3 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**3. Would you betray a family member to advance your own career?**\n\n 1. Yes, without a twinge of guilt.\n 2. Yes, if I could do it secretly.\n 3. I'd resist the temptation.\n 4. I find the very idea abhorrent.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_3);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[6] += 2;
                    alignments[7] += 2;
                    alignments[8] += 2;
                    GE[2] += 2;
                    A4();
                    break;
                case '2️⃣':
                    alignments[6] += 1;
                    alignments[7] += 1;
                    alignments[8] += 1;
                    GE[2] += 1;
                    A4();
                    break;
                case '3️⃣':
                    alignments[3] += 1;
                    alignments[4] += 1;
                    alignments[5] += 1;
                    GE[1] += 1;
                    A4();
                    break;
                case '4️⃣':
                    alignments[3] += 2;
                    alignments[4] += 2;
                    alignments[5] += 2;
                    GE[1] += 2;
                    A4();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A4(){
        const alignm_4 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**4. Do you respect the leaders of your family?**\n\n 1. Their words guide my actions.\n 2. They're role models for me.\n 3. They're often out of touch with my life.\n 4. They're out of touch with reality.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_4);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[0] += 2;
                    alignments[3] += 2;
                    alignments[6] += 2;
                    LC[0] += 2;
                    A5();
                    break;
                case '2️⃣':
                    alignments[0] += 1;
                    alignments[3] += 1;
                    alignments[6] += 1;
                    LC[0] += 1;
                    A5();
                    break;
                case '3️⃣':
                    alignments[2] += 1;
                    alignments[5] += 1;
                    alignments[8] += 1;
                    LC[2] += 1;
                    A5();
                    break;
                case '4️⃣':
                    alignments[2] += 2;
                    alignments[5] += 2;
                    alignments[8] += 2;
                    LC[2] += 2;
                    A5();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A5(){
        const alignm_5 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**5. If your family had arranged your marriage to someone loathsome, would you:**\n\n 1. Go through with it, proud to serve your family.\n 2. Agree, hiding your reluctance.\n 3. Subtly work against the union.\n 4. Flee.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_5);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[0] += 2;
                    alignments[3] += 2;
                    alignments[6] += 2;
                    LC[0] += 2;
                    A6();
                    break;
                case '2️⃣':
                    alignments[0] += 1;
                    alignments[3] += 1;
                    alignments[6] += 1;
                    LC[0] += 1;
                    A6();
                    break;
                case '3️⃣':
                    alignments[1] += 1;
                    alignments[4] += 1;
                    alignments[7] += 1;
                    LC[1] += 1;
                    A6();
                    break;
                case '4️⃣':
                    alignments[1] += 2;
                    alignments[4] += 2;
                    alignments[7] += 2;
                    LC[1] += 2;
                    A6();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }
    

    function A6(){
        const alignm_6 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**6. You're estranged from a family member. On his deathbed, he seeks reconciliation. Do you:**\n\n 1. Speak to him, but hold your ground.\n 2. Refuse to speak to him.\n 3. Discuss your estrangement openly and without rancor.\n 4. Actively seek reconciliation, and heed his dying words.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_6);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[2] += 2;
                    alignments[5] += 2;
                    alignments[8] += 2;
                    LC[2] += 2;
                    A7();
                    break;
                case '2️⃣':
                    alignments[2] += 1;
                    alignments[5] += 1;
                    alignments[8] += 1;
                    LC[2] += 1;
                    A7();
                    break;
                case '3️⃣':
                    alignments[1] += 1;
                    alignments[4] += 1;
                    alignments[7] += 1;
                    LC[1] += 1;
                    A7();
                    break;
                case '4️⃣':
                    alignments[1] += 2;
                    alignments[4] += 2;
                    alignments[7] += 2;
                    LC[1] += 2;
                    A7();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A7(){
        const alignm_7 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**7. A powerful but corrupt judge offers you wealth if you'll testify against your friend. Do you:**\n\n 1. Condemn your friend and take the money.\n 2. Take the money and testify, but try to keep your testimony ineffective.\n 3. Refuse the offer and refuse to testify.\n 4. Testify on your friend's behalf, no matter the consequences.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_7);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[6] += 2;
                    alignments[7] += 2;
                    alignments[8] += 2;
                    GE[2] += 2;
                    A8();
                    break;
                case '2️⃣':
                    alignments[6] += 1;
                    alignments[7] += 1;
                    alignments[8] += 1;
                    GE[2] += 1;
                    A8();
                    break;
                case '3️⃣':
                    alignments[0] += 1;
                    alignments[1] += 1;
                    alignments[2] += 1;
                    GE[0] += 1;
                    A8();
                    break;
                case '4️⃣':
                    alignments[0] += 2;
                    alignments[1] += 2;
                    alignments[2] += 2;
                    GE[0] += 2;
                    A8();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A8(){
        const alignm_8 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**8. Do you become close to friends, or hold most people at a safe distance?**\n\n 1. I have an abundance of close friends.\n 2. I have some close friends.\n 3. I have few close friends.\n 4. I try to keep people at a distance.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_8);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[0] += 2;
                    alignments[1] += 2;
                    alignments[2] += 2;
                    GE[0] += 2;
                    A9();
                    break;
                case '2️⃣':
                    alignments[0] += 1;
                    alignments[1] += 1;
                    alignments[2] += 1;
                    GE[0] += 1;
                    A9();
                    break;
                case '3️⃣':
                    alignments[3] += 1;
                    alignments[4] += 1;
                    alignments[5] += 1;
                    GE[1] += 1;
                    A9();
                    break;
                case '4️⃣':
                    alignments[3] += 2;
                    alignments[4] += 2;
                    alignments[5] += 2;
                    GE[1] += 2;
                    A9();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A9(){
        const alignm_9 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**9. Have you ever betrayed a friend?**\n\n 1. I've done so more than once, and I sometimes get away with it.\n 2. I've done so once.\n 3. I've been tempted to do so, but I've never gone through with it.\n 4. I'd never contemplate such a thing.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_9);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[6] += 2;
                    alignments[7] += 2;
                    alignments[8] += 2;
                    GE[2] += 2;
                    A10();
                    break;
                case '2️⃣':
                    alignments[6] += 1;
                    alignments[7] += 1;
                    alignments[8] += 1;
                    GE[2] += 1;
                    A10();
                    break;
                case '3️⃣':
                    alignments[3] += 1;
                    alignments[4] += 1;
                    alignments[5] += 1;
                    GE[1] += 1;
                    A10();
                    break;
                case '4️⃣':
                    alignments[3] += 2;
                    alignments[4] += 2;
                    alignments[5] += 2;
                    GE[1] += 2;
                    A10();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A10(){
        const alignm_10 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**10. How do you view lifelong commitment to a single romantic partner?**\n\n 1. I have or want such a romance.\n 2. Such a romance would be ideal--if it's achievable.\n 3. I worry I'd miss out on what others have to offer.\n 4. Tie yourself to one person? Huge mistake.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_10);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[0] += 2;
                    alignments[3] += 2;
                    alignments[6] += 2;
                    LC[0] += 2;
                    A11();
                    break;
                case '2️⃣':
                    alignments[0] += 1;
                    alignments[3] += 1;
                    alignments[6] += 1;
                    LC[0] += 1;
                    A11();
                    break;
                case '3️⃣':
                    alignments[2] += 1;
                    alignments[5] += 1;
                    alignments[8] += 1;
                    LC[2] += 1;
                    A11();
                    break;
                case '4️⃣':
                    alignments[2] += 2;
                    alignments[5] += 2;
                    alignments[8] += 2;
                    LC[2] += 2;
                    A11();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A11(){
        const alignm_11 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**11. Do you insist on repayment when lending money to friends?**\n\n 1. Yes, and I write up a contract so there's no misunderstanding.\n 2. Yes, but I try to be flexible about the exact terms.\n 3. No, although it's sure nice to be repaid.\n 4. No, they just owe me a favor.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_11);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[0] += 2;
                    alignments[3] += 2;
                    alignments[6] += 2;
                    LC[0] += 2;
                    A12();
                    break;
                case '2️⃣':
                    alignments[0] += 1;
                    alignments[3] += 1;
                    alignments[6] += 1;
                    LC[0] += 1;
                    A12();
                    break;
                case '3️⃣':
                    alignments[1] += 1;
                    alignments[4] += 1;
                    alignments[7] += 1;
                    LC[1] += 1;
                    A12();
                    break;
                case '4️⃣':
                    alignments[1] += 2;
                    alignments[4] += 2;
                    alignments[7] += 2;
                    LC[1] += 2;
                    A12();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A12(){
        const alignm_12 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**12. Are you still in touch with childhood friends?**\n\n 1. Yes, we correspond regularly.\n 2. Yes, we try to keep in touch.\n 3. No, I move around too much.\n 4. No, I don't have anything in common with them anymore.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_12);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[1] += 2;
                    alignments[4] += 2;
                    alignments[7] += 2;
                    LC[1] += 2;
                    A13();
                    break;
                case '2️⃣':
                    alignments[1] += 1;
                    alignments[4] += 1;
                    alignments[7] += 1;
                    LC[1] += 1;
                    A13();
                    break;
                case '3️⃣':
                    alignments[2] += 1;
                    alignments[5] += 1;
                    alignments[8] += 1;
                    LC[2] += 1;
                    A13();
                    break;
                case '4️⃣':
                    alignments[2] += 2;
                    alignments[5] += 2;
                    alignments[8] += 2;
                    LC[2] += 2;
                    A13();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A13(){
        const alignm_13 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**13. Do you donate time and money to improve the local community?**\n\n 1. Yes, the needs of the community are my top priority.\n 2. Yes, I donate as much as I can once my own needs are met.\n 3. No, I don't have enough time or money to spare.\n 4. No, my local community would be a waste of time and money.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_13);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[0] += 2;
                    alignments[1] += 2;
                    alignments[2] += 2;
                    GE[0] += 2;
                    A14();
                    break;
                case '2️⃣':
                    alignments[0] += 1;
                    alignments[1] += 1;
                    alignments[2] += 1;
                    GE[0] += 1;
                    A14();
                    break;
                case '3️⃣':
                    alignments[3] += 1;
                    alignments[4] += 1;
                    alignments[5] += 1;
                    GE[1] += 1;
                    A14();
                    break;
                case '4️⃣':
                    alignments[3] += 2;
                    alignments[4] += 2;
                    alignments[5] += 2;
                    GE[1] += 2;
                    A14();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A14(){
        const alignm_14 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**14. Your community is threatened with invasion. Do you:**\n\n 1. Help defend it to your last breath.\n 2. Defend the area with the rest of your community.\n 3. Flee as soon as things look grim.\n 4. Cut a deal with the enemy to act as a spy.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_14);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[0] += 2;
                    alignments[1] += 2;
                    alignments[2] += 2;
                    GE[0] += 2;
                    A15();
                    break;
                case '2️⃣':
                    alignments[0] += 1;
                    alignments[1] += 1;
                    alignments[2] += 1;
                    GE[0] += 1;
                    A15();
                    break;
                case '3️⃣':
                    alignments[6] += 1;
                    alignments[7] += 1;
                    alignments[8] += 1;
                    GE[2] += 1;
                    A15();
                    break;
                case '4️⃣':
                    alignments[6] += 2;
                    alignments[7] += 2;
                    alignments[8] += 2;
                    GE[2] += 2;
                    A15();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A15(){
        const alignm_15 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**15. If you were injured and required immediate assistance, would members of your home town agree to help?**\n\n 1. Yes, because they know I'd do the same for them.\n 2. Yes, because I'm generally well liked in my home town.\n 3. Probably not, because I'm distrusted in my home town.\n 4. Definitely not, I've made some enemies in my home town.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_15);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[3] += 2;
                    alignments[4] += 2;
                    alignments[5] += 2;
                    GE[1] += 2;
                    A16();
                    break;
                case '2️⃣':
                    alignments[3] += 1;
                    alignments[4] += 1;
                    alignments[5] += 1;
                    GE[1] += 1;
                    A16();
                    break;
                case '3️⃣':
                    alignments[6] += 1;
                    alignments[7] += 1;
                    alignments[8] += 1;
                    GE[2] += 1;
                    A16();
                    break;
                case '4️⃣':
                    alignments[6] += 2;
                    alignments[7] += 2;
                    alignments[8] += 2;
                    GE[2] += 2;
                    A16();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A16(){
        const alignm_16 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**16. Do you respect the laws and authorities of the community?**\n\n 1. Yes, without question.\n 2. Yes, they're generally the best way to govern.\n 3. When it suits me--there are some laws I just don't agree with.\n 4. I don't pay attention to the authorities; they've got no hold on me.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_16);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[0] += 2;
                    alignments[3] += 2;
                    alignments[6] += 2;
                    LC[0] += 2;
                    A17();
                    break;
                case '2️⃣':
                    alignments[0] += 1;
                    alignments[3] += 1;
                    alignments[6] += 1;
                    LC[0] += 1;
                    A17();
                    break;
                case '3️⃣':
                    alignments[2] += 1;
                    alignments[5] += 1;
                    alignments[8] += 1;
                    LC[2] += 1;
                    A17();
                    break;
                case '4️⃣':
                    alignments[2] += 2;
                    alignments[5] += 2;
                    alignments[8] += 2;
                    LC[2] += 2;
                    A17();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A17(){
        const alignm_17 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**17. Do members of your home town shun, avoid, or mock you?**\n\n 1. Yes, their small minds can't handle anyone outside the norm.\n 2. Some do, because I don't always fit in.\n 3. No, I'm generally seen as normal.\n 4. No, I set the standard for what is normal in my community.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_17);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[2] += 2;
                    alignments[5] += 2;
                    alignments[8] += 2;
                    LC[2] += 2;
                    A18();
                    break;
                case '2️⃣':
                    alignments[2] += 1;
                    alignments[5] += 1;
                    alignments[8] += 1;
                    LC[2] += 1;                  
                    A18();
                    break;
                case '3️⃣':
                    alignments[1] += 1;
                    alignments[4] += 1;
                    alignments[7] += 1;
                    LC[1] += 1;
                    A18();
                    break;
                case '4️⃣':
                    alignments[1] += 2;
                    alignments[4] += 2;
                    alignments[7] += 2;
                    LC[1] += 2;
                    A18();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A18(){
        const alignm_18 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**18. Would you stand for office or seek to represent the interests of the community in some public manner?**\n\n 1. To do so would be an honor I'd joyously accept.\n 2. Of course. It's everyone's duty to do so.\n 3. Only if no one else could handle the job.\n 4. No, I don't want to be responsible for the community's welfare.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_18);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[0] += 2;
                    alignments[3] += 2;
                    alignments[6] += 2;
                    LC[0] += 2;
                    A19();
                    break;
                case '2️⃣':
                    alignments[0] += 1;
                    alignments[3] += 1;
                    alignments[6] += 1;
                    LC[0] += 1;
                    A19();
                    break;
                case '3️⃣':
                    alignments[1] += 1;
                    alignments[4] += 1;
                    alignments[7] += 1;
                    LC[1] += 1;
                    A19();
                    break;
                case '4️⃣':
                    alignments[1] += 2;
                    alignments[4] += 2;
                    alignments[7] += 2;
                    LC[1] += 2;
                    A19();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A19(){
        const alignm_19 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**19. Your country is wracked with famine. Would you:**\n\n 1. Share what food you had with others.\n 2. Eat as little as possible yourself, and share the rest.\n 3. Steal what food you needed to survive.\n 4. Steal as much food as possible, then sell it back to the community at a high price.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_19);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[0] += 2;
                    alignments[1] += 2;
                    alignments[2] += 2;
                    GE[0] += 2;
                    A20();
                    break;
                case '2️⃣':
                    alignments[0] += 1;
                    alignments[1] += 1;
                    alignments[2] += 1;
                    GE[0] += 1;
                    A20();
                    break;
                case '3️⃣':
                    alignments[6] += 1;
                    alignments[7] += 1;
                    alignments[8] += 1;
                    GE[2] += 1;
                    A20();
                    break;
                case '4️⃣':
                    alignments[6] += 2;
                    alignments[7] += 2;
                    alignments[8] += 2;
                    GE[2] += 2;
                    A20();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A20(){
        const alignm_20 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**20. If offered enough money, would you slip a poison into your king's drink?**\n\n 1. Yes, I've done similar things before.\n 2. Yes, if I thought I could get away with it.\n 3. No, although a vast sum of money would tempt me.\n 4. No, and I'd warn the king of the plot.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_20);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[6] += 2;
                    alignments[7] += 2;
                    alignments[8] += 2;
                    GE[2] += 2;
                    A21();
                    break;
                case '2️⃣':
                    alignments[6] += 1;
                    alignments[7] += 1;
                    alignments[8] += 1;
                    GE[2] += 1;
                    A21();
                    break;
                case '3️⃣':
                    alignments[3] += 1;
                    alignments[4] += 1;
                    alignments[5] += 1;
                    GE[1] += 1;
                    A21();
                    break;
                case '4️⃣':
                    alignments[3] += 2;
                    alignments[4] += 2;
                    alignments[5] += 2;
                    GE[1] += 2;
                    A21();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A21(){
        const alignm_21 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**21. A plague is sweeping across your country. Would you:**\n\n 1. Undertake a dangerous mission to find the cure.\n 2. Heal the sick as best you can.\n 3. Avoid contact with the sick.\n 4. Flee the country.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_21);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[0] += 2;
                    alignments[1] += 2;
                    alignments[2] += 2;
                    GE[0] += 2;
                    A22();
                    break;
                case '2️⃣':
                    alignments[0] += 1;
                    alignments[1] += 1;
                    alignments[2] += 1;
                    GE[0] += 1;
                    A22();
                    break;
                case '3️⃣':
                    alignments[3] += 1;
                    alignments[4] += 1;
                    alignments[5] += 1;
                    GE[1] += 1;
                    A22();
                    break;
                case '4️⃣':
                    alignments[3] += 2;
                    alignments[4] += 2;
                    alignments[5] += 2;
                    GE[1] += 2;
                    A22();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A22(){
        const alignm_22 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**22. Do you respect the lawful authority of the rulers of the land?**\n\n 1. Yes, Long live the king!\n 2. Yes, our rulers are generally fair and just.\n 3. No, a ruler is no better than anyone else.\n 4. No, rulers are invariably corrupted by power.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_22);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[0] += 2;
                    alignments[3] += 2;
                    alignments[6] += 2;
                    LC[0] += 2;
                    A23();
                    break;
                case '2️⃣':
                    alignments[0] += 1;
                    alignments[3] += 1;
                    alignments[6] += 1;
                    LC[0] += 1;
                    A23();
                    break;
                case '3️⃣':
                    alignments[2] += 1;
                    alignments[5] += 1;
                    alignments[8] += 1;
                    LC[2] += 1;
                    A23();
                    break;
                case '4️⃣':
                    alignments[2] += 2;
                    alignments[5] += 2;
                    alignments[8] += 2;
                    LC[2] += 2;
                    A23();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A23(){
        const alignm_23 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**23. If you were offered a reasonably lucrative deal, would you spy for a hostile foreign power?**\n\n 1. Yes, because this nation could stand to be knocked down a peg.\n 2. Yes, because the nation's secrets mean little to me.\n 3. No, because I might get caught.\n 4. No, because I'd never violate the trust my nation puts in me.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_23);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[2] += 2;
                    alignments[5] += 2;
                    alignments[8] += 2;
                    LC[2] += 2;
                    A24();
                    break;
                case '2️⃣':
                    alignments[2] += 1;
                    alignments[5] += 1;
                    alignments[8] += 1;
                    LC[2] += 1;
                    A24();
                    break;
                case '3️⃣':
                    alignments[1] += 1;
                    alignments[4] += 1;
                    alignments[7] += 1;
                    LC[1] += 1;
                    A24();
                    break;
                case '4️⃣':
                    alignments[1] += 2;
                    alignments[4] += 2;
                    alignments[7] += 2;
                    LC[1] += 2;
                    A24();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A24(){
        const alignm_24 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**24. Do you rely on the government to enforce contracts and property rights?**\n\n 1. Yes, because maintaining the rule of law is more important than any individual dispute.\n 2. Yes, because the courts are best equipped to handle such disputes.\n 3. Are you kidding me? The government can't even pave roads.\n 4. Absolutely not. If I can't defend it myself, I don't deserve to have it.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_24);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[0] += 2;
                    alignments[3] += 2;
                    alignments[6] += 2;
                    LC[0] += 2;
                    A25();
                    break;
                case '2️⃣':
                    alignments[0] += 1;
                    alignments[3] += 1;
                    alignments[6] += 1;
                    LC[0] += 1;
                    A25();
                    break;
                case '3️⃣':
                    alignments[1] += 1;
                    alignments[4] += 1;
                    alignments[7] += 1;
                    LC[1] += 1;
                    A25();
                    break;
                case '4️⃣':
                    alignments[1] += 2;
                    alignments[4] += 2;
                    alignments[7] += 2;
                    LC[1] += 2;
                    A25();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A25(){
        const alignm_25 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**25. If imprisoned, would you injure or kill others to escape?**\n\n 1. Yes. Serves 'em right for locking me up.\n 2. Yes. They knew the risks when they took the job.\n 3. No, except for minor wounds that will heal easily.\n 4. No. Those guards are just doing their jobs.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_25);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[6] += 2;
                    alignments[7] += 2;
                    alignments[8] += 2;
                    GE[2] += 2;
                    A26();
                    break;
                case '2️⃣':
                    alignments[6] += 1;
                    alignments[7] += 1;
                    alignments[8] += 1;
                    GE[2] += 1;
                    A26();
                    break;
                case '3️⃣':
                    alignments[3] += 1;
                    alignments[4] += 1;
                    alignments[5] += 1;
                    GE[1] += 1;
                    A26();
                    break;
                case '4️⃣':
                    alignments[3] += 2;
                    alignments[4] += 2;
                    alignments[5] += 2;
                    GE[1] += 2;
                    A26();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A26(){
        const alignm_26 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**26. Do you accept a noble's right to treat badly the serfs who work on his land?**\n\n 1. Yes. They're lucky they're not slaves.\n 2. Yes, because sometimes only fear will motivate them.\n 3. No, nobles should rule as kindly as possible.\n 4. No one has any 'right' to treat another badly. Period.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_26);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[3] += 2;
                    alignments[4] += 2;
                    alignments[5] += 2;
                    GE[1] += 2;
                    A27();
                    break;
                case '2️⃣':
                    alignments[3] += 1;
                    alignments[4] += 1;
                    alignments[5] += 1;
                    GE[1] += 1;
                    A27();
                    break;
                case '3️⃣':
                    alignments[0] += 1;
                    alignments[1] += 1;
                    alignments[2] += 1;
                    GE[0] += 1;
                    A27();
                    break;
                case '4️⃣':
                    alignments[0] += 2;
                    alignments[1] += 2;
                    alignments[2] += 2;
                    GE[0] += 2;
                    A27();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A27(){
        const alignm_27 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**27. You have accidentally committed a crime. Do you:**\n\n 1. Turn yourself in, and attempt to make restitution to the victim.\n 2. Turn yourself in, throwing yourself on the mercy of the court.\n 3. Hide your involvement, lying if you have to.\n 4. Try to pin the crime on another.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_27);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[0] += 2;
                    alignments[1] += 2;
                    alignments[2] += 2;
                    GE[0] += 2;
                    A28();
                    break;
                case '2️⃣':
                    alignments[0] += 1;
                    alignments[1] += 1;
                    alignments[2] += 1;
                    GE[0] += 1;
                    A28();
                    break;
                case '3️⃣':
                    alignments[6] += 1;
                    alignments[7] += 1;
                    alignments[8] += 1;
                    GE[2] += 1;
                    A28();
                    break;
                case '4️⃣':
                    alignments[6] += 2;
                    alignments[7] += 2;
                    alignments[8] += 2;
                    GE[2] += 2;
                    A28();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A28(){
        const alignm_28 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**28. If guilty, would you confess to a crime?**\n\n 1. Yes, because it is my duty to do so.\n 2. Yes, because it might get me a lighter sentence.\n 3. No, I'd make the magistrates prove my guilt.\n 4. No, and I'd try to 'prove' my own innocence.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_28);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[0] += 2;
                    alignments[3] += 2;
                    alignments[6] += 2;
                    LC[0] += 2;
                    A29();
                    break;
                case '2️⃣':
                    alignments[0] += 1;
                    alignments[3] += 1;
                    alignments[6] += 1;
                    LC[0] += 1;
                    A29();
                    break;
                case '3️⃣':
                    alignments[1] += 1;
                    alignments[4] += 1;
                    alignments[7] += 1;
                    LC[1] += 1;
                    A29();
                    break;
                case '4️⃣':
                    alignments[1] += 2;
                    alignments[4] += 2;
                    alignments[7] += 2;
                    LC[1] += 2;
                    A29();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A29(){
        const alignm_29 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**29. Would you express a revolutionary political opinion if threatened with punishment?**\n\n 1. Yes, I'd rather be punished than remain silent.\n 2. Yes. Somebody's got to speak the truth.\n 3. No, although I might privately express my opinion to friends.\n 4. No, politics aren't worth getting worked up about.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_29);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[2] += 2;
                    alignments[5] += 2;
                    alignments[8] += 2;
                    LC[2] += 2;
                    A30();
                    break;
                case '2️⃣':
                    alignments[2] += 1;
                    alignments[5] += 1;
                    alignments[8] += 1;
                    LC[2] += 1;
                    A30();
                    break;
                case '3️⃣':
                    alignments[1] += 1;
                    alignments[4] += 1;
                    alignments[7] += 1;
                    LC[1] += 1;
                    A30();
                    break;
                case '4️⃣':
                    alignments[1] += 2;
                    alignments[4] += 2;
                    alignments[7] += 2;
                    LC[1] += 2;
                    A30();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }
    
    function A30(){
        const alignm_30 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**30. While traveling, you witness an assault. You are ordered to testify, which will delay your travel significantly. Do you:**\n\n 1. Slip out of town at night to avoid testifying.\n 2. Deny you saw anything.\n 3. Remain reluctantly, testify, and leave.\n 4. Remain until the trial's conclusion in case further testimony is needed.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_30);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[2] += 2;
                    alignments[5] += 2;
                    alignments[8] += 2;
                    LC[2] += 2;
                    A31();
                    break;
                case '2️⃣':
                    alignments[2] += 1;
                    alignments[5] += 1;
                    alignments[8] += 1;
                    LC[2] += 1;
                    A31();
                    break;
                case '3️⃣':
                    alignments[0] += 1;
                    alignments[3] += 1;
                    alignments[6] += 1;
                    LC[0] += 1;
                    A31();
                    break;
                case '4️⃣':
                    alignments[0] += 2;
                    alignments[3] += 2;
                    alignments[6] += 2;
                    LC[0] += 2;
                    A31();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    
    function A31(){
        const alignm_31 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**31. What is the best use of wealth?**\n\n 1. To help the destitute and less fortunate.\n 2. Provide for the needs of friends and family.\n 3. To stay on top of the heap yourself.\n 4. To not only stay on top, but keep others from climbing to your level.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_31);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[0] += 2;
                    alignments[1] += 2;
                    alignments[2] += 2;
                    GE[0] += 2;
                    A32();
                    break;
                case '2️⃣':
                    alignments[0] += 1;
                    alignments[1] += 1;
                    alignments[2] += 1;
                    GE[0] += 1;
                    A32();
                    break;
                case '3️⃣':
                    alignments[6] += 1;
                    alignments[7] += 1;
                    alignments[8] += 1;
                    GE[2] += 1;
                    A32();
                    break;
                case '4️⃣':
                    alignments[6] += 2;
                    alignments[7] += 2;
                    alignments[8] += 2;
                    GE[2] += 2;
                    A32();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    
    function A32(){
        const alignm_32 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**32. When confronted by beggars, do you:**\n\n 1. Give generously.\n 2. Give moderately.\n 3. Give only what you wouldn't miss anyway--a dollar or two at the most.\n 4. Ignore them as you walk by.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_32);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[0] += 2;
                    alignments[1] += 2;
                    alignments[2] += 2;
                    GE[0] += 2;
                    A33();
                    break;
                case '2️⃣':
                    alignments[0] += 1;
                    alignments[1] += 1;
                    alignments[2] += 1;
                    GE[0] += 1;
                    A33();
                    break;
                case '3️⃣':
                    alignments[3] += 1;
                    alignments[4] += 1;
                    alignments[5] += 1;
                    GE[1] += 1;
                    A33();
                    break;
                case '4️⃣':
                    alignments[3] += 2;
                    alignments[4] += 2;
                    alignments[5] += 2;
                    GE[1] += 2;
                    A33();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    
    function A33(){
        const alignm_33 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**33. By using magic, you could fool village merchants into thinking your copper pieces were made of gold. Do you?**\n\n 1. Yes, and I'll buy as much as I can.\n 2. Yes, but I'll only cheat the rich merchants.\n 3. No, it's too risky.\n 4. No, those merchants have families to feed.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_33);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[6] += 2;
                    alignments[7] += 2;
                    alignments[8] += 2;
                    GE[2] += 2;
                    A34();
                    break;
                case '2️⃣':
                    alignments[6] += 1;
                    alignments[7] += 1;
                    alignments[8] += 1;
                    GE[2] += 1;
                    A34();
                    break;
                case '3️⃣':
                    alignments[3] += 1;
                    alignments[4] += 1;
                    alignments[5] += 1;
                    GE[1] += 1;
                    A34();
                    break;
                case '4️⃣':
                    alignments[3] += 2;
                    alignments[4] += 2;
                    alignments[5] += 2;
                    GE[1] += 2;
                    A34();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    
    function A34(){
        const alignm_34 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**34. You have two job offers. One pays more, but the other is secure and steady. Which do you choose?**\n\n 1. Definitely the lucrative job; steady work sounds like drudgery.\n 2. Probably the lucrative job, although I'd look into the secure job.\n 3. The secure job, unless the other job was outrageously lucrative.\n 4. Definitely the secure job, because I plan for the long term.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_34);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[1] += 2;
                    alignments[4] += 2;
                    alignments[7] += 2;
                    LC[1] += 2;
                    A35();
                    break;
                case '2️⃣':
                    alignments[1] += 1;
                    alignments[4] += 1;
                    alignments[7] += 1;
                    LC[1] += 1;
                    A35();
                    break;
                case '3️⃣':
                    alignments[0] += 1;
                    alignments[3] += 1;
                    alignments[6] += 1;
                    LC[0] += 1;
                    A35();
                    break;
                case '4️⃣':
                    alignments[0] += 2;
                    alignments[3] += 2;
                    alignments[6] += 2;
                    LC[0] += 2;
                    A35();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    
    function A35(){
        const alignm_35 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**35. What's the best path to wealth?**\n\n 1. It's a matter of luck and being in the right place at the right time.\n 2. Staying flexible so you can take advantage of good opportunities.\n 3. Following a long-term plan that incorporates a comfortable level of risk.\n 4. Hard work and perseverance.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_35);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[2] += 2;
                    alignments[5] += 2;
                    alignments[8] += 2;
                    LC[2] += 2;
                    A36();
                    break;
                case '2️⃣':
                    alignments[2] += 1;
                    alignments[5] += 1;
                    alignments[8] += 1;
                    LC[2] += 1;
                    A36();
                    break;
                case '3️⃣':
                    alignments[0] += 1;
                    alignments[3] += 1;
                    alignments[6] += 1;
                    LC [0] += 1;
                    A36();
                    break;
                case '4️⃣':
                    alignments[0] += 2;
                    alignments[3] += 2;
                    alignments[6] += 2;
                    LC [0] += 2;
                    A36();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    
    function A36(){
        const alignm_36 = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription("**36. If you accepted a job or contract, would you try to finish the task even if it got much more dangerous?**\n\n 1. Yes, my word is my bond.\n 2. Yes, because it's good to have a reputation for dependability.\n 3. You can bet I'd be renegotiating.\n 4. If it's no longer a good deal, then the deal is off.")
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
    
        Embed.edit(alignm_36);
    
        Embed.awaitReactions(filter, { max: 1, time: timeLimit, errors: ['time'] })
        .then(collected =>{ 
            switch(collected.first().emoji.name){
                case '1️⃣':
                    alignments[1] += 2;
                    alignments[4] += 2;
                    alignments[7] += 2;
                    LC [1] += 2;
                    A_FINAL();
                    break;
                case '2️⃣':
                    A_FINAL();
                    alignments[1] += 1;
                    alignments[4] += 1;
                    alignments[7] += 1;
                    LC [1] += 1;
                    break;
                case '3️⃣':
                    alignments[2] += 1;
                    alignments[5] += 1;
                    alignments[8] += 1;
                    LC [2] += 1;
                    A_FINAL();
                    break;
                case '4️⃣':
                    alignments[2] += 2;
                    alignments[5] += 2;
                    alignments[8] += 2;
                    LC [2] += 2;
                    A_FINAL();
                    break;
            }
        })
        .catch(collected => {
            message.reply('time limit exceeded, please restart the test.');
            console.log(`Ending alignment test for ${message.author.tag}`);
        });
    }

    function A_FINAL(){
        Embed.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));

        var max = Math.max(...alignments);

        const alignm_LG = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription(`**Lawful Good** - A lawful good character acts as a good person is expected or required to act. He combines a commitment to oppose evil with the discipline to fight relentlessly. He tells the truth, keeps his word, helps those in need, and speaks out against injustice. A lawful good character hates to see the guilty go unpunished. Lawful good is the best alignment you can be because it combines honor and compassion. However, lawful good can be a dangerous alignment when it restricts freedom and criminalizes self-interest.\n\n**Detailed Results**\n__Alignments__\nLawful Good: ${alignments[0]}\nNeutral Good: ${alignments[1]}\nChaotic Good: ${alignments[2]}\nLawful Neutral: ${alignments[3]}\nTrue Neutral: ${alignments[4]}\nChaotic Neutral: ${alignments[5]}\nLawful Evil: ${alignments[6]}\nNeutral Evil: ${alignments[7]}\nChaotic Evil: ${alignments[8]}\n\n__Law & Chaos__\nLaw: ${LC[0]}\nNeutral: ${LC[1]}\nChaos: ${LC[2]}\n\n__Good & Evil__\nGood: ${GE[0]}\nNeutral: ${GE[1]}\nEvil: ${GE[2]}`)
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));

        const alignm_NG = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription(`**Neutral Good** - A neutral good character does the best that a good person can do. He is devoted to helping others. He works with kings and magistrates but does not feel beholden to them. Neutral good is the best alignment you can be because it means doing what is good without bias for or against order. However, neutral good can be a dangerous alignment when it advances mediocrity by limiting the actions of the truly capable.\n\n**Detailed Results**\n__Alignments__\nLawful Good: ${alignments[0]}\nNeutral Good: ${alignments[1]}\nChaotic Good: ${alignments[2]}\nLawful Neutral: ${alignments[3]}\nTrue Neutral: ${alignments[4]}\nChaotic Neutral: ${alignments[5]}\nLawful Evil: ${alignments[6]}\nNeutral Evil: ${alignments[7]}\nChaotic Evil: ${alignments[8]}\n\n__Law & Chaos__\nLaw: ${LC[0]}\nNeutral: ${LC[1]}\nChaos: ${LC[2]}\n\n__Good & Evil__\nGood: ${GE[0]}\nNeutral: ${GE[1]}\nEvil: ${GE[2]}`)
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));

        const alignm_CG = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription(`**Chaotic Good** - A chaotic good character acts as his conscience directs him with little regard for what others expect of him. He makes his own way, but he's kind and benevolent. He believes in goodness and right but has little use for laws and regulations. He hates it when people try to intimidate others and tell them what to do. He follows his own moral compass, which, although good, may not agree with that of society. Chaotic good is the best alignment you can be because it combines a good heart with a free spirit. However, chaotic good can be a dangerous alignment when it disrupts the order of society and punishes those who do well for themselves.\n\n**Detailed Results**\n__Alignments__\nLawful Good: ${alignments[0]}\nNeutral Good: ${alignments[1]}\nChaotic Good: ${alignments[2]}\nLawful Neutral: ${alignments[3]}\nTrue Neutral: ${alignments[4]}\nChaotic Neutral: ${alignments[5]}\nLawful Evil: ${alignments[6]}\nNeutral Evil: ${alignments[7]}\nChaotic Evil: ${alignments[8]}\n\n__Law & Chaos__\nLaw: ${LC[0]}\nNeutral: ${LC[1]}\nChaos: ${LC[2]}\n\n__Good & Evil__\nGood: ${GE[0]}\nNeutral: ${GE[1]}\nEvil: ${GE[2]}`)
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));

        const alignm_LN = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription(`**Lawful Neutral** - A lawful neutral character acts as law, tradition, or a personal code directs him. Order and organization are paramount to him. He may believe in personal order and live by a code or standard, or he may believe in order for all and favor a strong, organized government. Lawful neutral is the best alignment you can be because it means you are reliable and honorable without being a zealot. However, lawful neutral can be a dangerous alignment when it seeks to eliminate all freedom, choice, and diversity in society.\n\n**Detailed Results**\n__Alignments__\nLawful Good: ${alignments[0]}\nNeutral Good: ${alignments[1]}\nChaotic Good: ${alignments[2]}\nLawful Neutral: ${alignments[3]}\nTrue Neutral: ${alignments[4]}\nChaotic Neutral: ${alignments[5]}\nLawful Evil: ${alignments[6]}\nNeutral Evil: ${alignments[7]}\nChaotic Evil: ${alignments[8]}\n\n__Law & Chaos__\nLaw: ${LC[0]}\nNeutral: ${LC[1]}\nChaos: ${LC[2]}\n\n__Good & Evil__\nGood: ${GE[0]}\nNeutral: ${GE[1]}\nEvil: ${GE[2]}`)
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));

        const alignm_TN = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription(`**True Neutral** - A true neutral character does what seems to be a good idea. He doesn't feel strongly one way or the other when it comes to good vs. evil or law vs. chaos. Most true neutral characters exhibit a lack of conviction or bias rather than a commitment to neutrality. Such a character thinks of good as better than evil after all, he would rather have good neighbors and rulers than evil ones. Still, he's not personally committed to upholding good in any abstract or universal way. Some true neutral characters, on the other hand, commit themselves philosophically to neutrality. They see good, evil, law, and chaos as prejudices and dangerous extremes. They advocate the middle way of neutrality as the best, most balanced road in the long run. True neutral is the best alignment you can be because it means you act naturally, without prejudice or compulsion. However, true neutral can be a dangerous alignment when it represents apathy, indifference, and a lack of conviction.\n\n**Detailed Results**\n__Alignments__\nLawful Good: ${alignments[0]}\nNeutral Good: ${alignments[1]}\nChaotic Good: ${alignments[2]}\nLawful Neutral: ${alignments[3]}\nTrue Neutral: ${alignments[4]}\nChaotic Neutral: ${alignments[5]}\nLawful Evil: ${alignments[6]}\nNeutral Evil: ${alignments[7]}\nChaotic Evil: ${alignments[8]}\n\n__Law & Chaos__\nLaw: ${LC[0]}\nNeutral: ${LC[1]}\nChaos: ${LC[2]}\n\n__Good & Evil__\nGood: ${GE[0]}\nNeutral: ${GE[1]}\nEvil: ${GE[2]}`)
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));

        const alignm_CN = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription(`**Chaotic Neutral** - A chaotic neutral character follows his whims. He is an individualist first and last. He values his own liberty but doesn't strive to protect others' freedom. He avoids authority, resents restrictions, and challenges traditions. A chaotic neutral character does not intentionally disrupt organizations as part of a campaign of anarchy. To do so, he would have to be motivated either by good (and a desire to liberate others) or evil (and a desire to make those different from himself suffer). A chaotic neutral character may be unpredictable, but his behavior is not totally random. He is not as likely to jump off a bridge as to cross it. Chaotic neutral is the best alignment you can be because it represents true freedom from both society's restrictions and a do-gooder's zeal. However, chaotic neutral can be a dangerous alignment when it seeks to eliminate all authority, harmony, and order in society.\n\n**Detailed Results**\n__Alignments__\nLawful Good: ${alignments[0]}\nNeutral Good: ${alignments[1]}\nChaotic Good: ${alignments[2]}\nLawful Neutral: ${alignments[3]}\nTrue Neutral: ${alignments[4]}\nChaotic Neutral: ${alignments[5]}\nLawful Evil: ${alignments[6]}\nNeutral Evil: ${alignments[7]}\nChaotic Evil: ${alignments[8]}\n\n__Law & Chaos__\nLaw: ${LC[0]}\nNeutral: ${LC[1]}\nChaos: ${LC[2]}\n\n__Good & Evil__\nGood: ${GE[0]}\nNeutral: ${GE[1]}\nEvil: ${GE[2]}`)
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));

        const alignm_LE = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription(`**Lawful Evil** - A lawful evil villain methodically takes what he wants within the limits of his code of conduct without regard for whom it hurts. He cares about tradition, loyalty, and order but not about freedom, dignity, or life. He plays by the rules but without mercy or compassion. He is comfortable in a hierarchy and would like to rule, but is willing to serve. He condemns others not according to their actions but according to race, religion, homeland, or social rank. He is loath to break laws or promises. This reluctance comes partly from his nature and partly because he depends on order to protect himself from those who oppose him on moral grounds. Some lawful evil villains have particular taboos, such as not killing in cold blood (but having underlings do it) or not letting children come to harm (if it can be helped). They imagine that these compunctions put them above unprincipled villains. Some lawful evil people and creatures commit themselves to evil with a zeal like that of a crusader committed to good. Beyond being willing to hurt others for their own ends, they take pleasure in spreading evil as an end unto itself. They may also see doing evil as part of a duty to an evil deity or master. Lawful evil is sometimes called diabolical, because devils are the epitome of lawful evil. Lawful evil is the best alignment you can be because it combines honor and dedicated self-interest. However, lawful evil can be a dangerous alignment because it represents methodical, intentional, and frequently successful evil.\n\n**Detailed Results**\n__Alignments__\nLawful Good: ${alignments[0]}\nNeutral Good: ${alignments[1]}\nChaotic Good: ${alignments[2]}\nLawful Neutral: ${alignments[3]}\nTrue Neutral: ${alignments[4]}\nChaotic Neutral: ${alignments[5]}\nLawful Evil: ${alignments[6]}\nNeutral Evil: ${alignments[7]}\nChaotic Evil: ${alignments[8]}\n\n__Law & Chaos__\nLaw: ${LC[0]}\nNeutral: ${LC[1]}\nChaos: ${LC[2]}\n\n__Good & Evil__\nGood: ${GE[0]}\nNeutral: ${GE[1]}\nEvil: ${GE[2]}`)
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));

        const alignm_NE = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription(`**Neutral Evil** - A neutral evil villain does whatever he can get away with. He is out for himself, pure and simple. He sheds no tears for those he kills, whether for profit, sport, or convenience. He has no love of order and holds no illusion that following laws, traditions, or codes would make him any better or more noble. On the other hand, he doesn't have the restless nature or love of conflict that a chaotic evil villain has. Some neutral evil villains hold up evil as an ideal, committing evil for its own sake. Most often, such villains are devoted to evil deities or secret societies. Neutral evil is the best alignment you can be because you can advance yourself without regard for others. However, neutral evil can be a dangerous alignment because it represents pure evil without honor and without variation.\n\n**Detailed Results**\n__Alignments__\nLawful Good: ${alignments[0]}\nNeutral Good: ${alignments[1]}\nChaotic Good: ${alignments[2]}\nLawful Neutral: ${alignments[3]}\nTrue Neutral: ${alignments[4]}\nChaotic Neutral: ${alignments[5]}\nLawful Evil: ${alignments[6]}\nNeutral Evil: ${alignments[7]}\nChaotic Evil: ${alignments[8]}\n\n__Law & Chaos__\nLaw: ${LC[0]}\nNeutral: ${LC[1]}\nChaos: ${LC[2]}\n\n__Good & Evil__\nGood: ${GE[0]}\nNeutral: ${GE[1]}\nEvil: ${GE[2]}`)
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));

        const alignm_CE = new MessageEmbed()
        .setTitle('Alignment Test')
        .setAuthor('Game Master', 'https://i.imgur.com/KHOys7V.jpg')
        .setDescription(`**Chaotic Evil** - A chaotic evil character does whatever his greed, hatred, and lust for destruction drive him to do. He is hot-tempered, vicious, arbitrarily violent, and unpredictable. If he is simply out for whatever he can get, he is ruthless and brutal. If he is committed to the spread of evil and chaos, he is even worse. Thankfully, his plans are haphazard, and any groups he joins or forms are poorly organized. Typically, chaotic evil people can be made to work together only by force, and their leader lasts only as long as he can thwart attempts to topple or assassinate him. Chaotic evil is sometimes called demonic because demons are the epitome of chaotic evil. Chaotic evil is the best alignment you can be because combines self-interest and pure freedom. However, chaotic evil can be a dangerous alignment because it represents the destruction not only of beauty and life but also of the order on which beauty and life depend.\n\n**Detailed Results**\n__Alignments__\nLawful Good: ${alignments[0]}\nNeutral Good: ${alignments[1]}\nChaotic Good: ${alignments[2]}\nLawful Neutral: ${alignments[3]}\nTrue Neutral: ${alignments[4]}\nChaotic Neutral: ${alignments[5]}\nLawful Evil: ${alignments[6]}\nNeutral Evil: ${alignments[7]}\nChaotic Evil: ${alignments[8]}\n\n__Law & Chaos__\nLaw: ${LC[0]}\nNeutral: ${LC[1]}\nChaos: ${LC[2]}\n\n__Good & Evil__\nGood: ${GE[0]}\nNeutral: ${GE[1]}\nEvil: ${GE[2]}`)
        .setFooter(message.author.username,message.author.displayAvatarURL({ format: 'png' }));
        
        switch(max){
            case(alignments[0]):
                Embed.edit(alignm_LG);
                role = guild.roles.cache.find((role) => {
                    return role.name === roleNames[0]
                })
                if(!role){
                    message.reply(`There is no role with the name "${roleNames[0]}"`);
                    return;
                }
                member.roles.add(role);
                console.log(`Ending alignment test for ${message.author.tag}`);
                message.reply(`the role "${roleNames[0]}" has been successfully assigned.`);
                break;

            case(alignments[1]):
                Embed.edit(alignm_NG);
                role = guild.roles.cache.find((role) => {
                    return role.name === roleNames[1]
                })
                if(!role){
                    message.reply(`There is no role with the name "${roleNames[1]}"`);
                    return;
                }
                member.roles.add(role);
                console.log(`Ending alignment test for ${message.author.tag}`);
                message.reply(`the role "${roleNames[1]}" has been successfully assigned.`);
                break;

            case(alignments[2]):
                role = guild.roles.cache.find((role) => {
                    return role.name === roleNames[2]
                })
                if(!role){
                    message.reply(`There is no role with the name "${roleNames[2]}"`);
                    return;
                }
                member.roles.add(role);
                Embed.edit(alignm_CG);
                console.log(`Ending alignment test for ${message.author.tag}`);
                message.reply(`the role "${roleNames[2]}" has been successfully assigned.`);
                break;

            case(alignments[3]):
                role = guild.roles.cache.find((role) => {
                    return role.name === roleNames[3]
                })
                if(!role){
                    message.reply(`There is no role with the name "${roleNames[3]}"`);
                    return;
                }
                member.roles.add(role);
                Embed.edit(alignm_LN);
                console.log(`Ending alignment test for ${message.author.tag}`);
                message.reply(`the role "${roleNames[3]}" has been successfully assigned.`);
                break;

            case(alignments[4]):
                role = guild.roles.cache.find((role) => {
                    return role.name === roleNames[4]
                })
                if(!role){
                    message.reply(`There is no role with the name "${roleNames[4]}"`);
                    return;
                }
                member.roles.add(role);
                Embed.edit(alignm_TN);
                console.log(`Ending alignment test for ${message.author.tag}`);
                message.reply(`the role "${roleNames[4]}" has been successfully assigned.`);
                break;

            case(alignments[5]):
                role = guild.roles.cache.find((role) => {
                    return role.name === roleNames[5]
                })
                if(!role){
                    message.reply(`There is no role with the name "${roleNames[5]}"`);
                    return;
                }
                member.roles.add(role);
                Embed.edit(alignm_CN);
                console.log(`Ending alignment test for ${message.author.tag}`);
                message.reply(`the role "${roleNames[5]}" has been successfully assigned.`);
                break;

            case(alignments[6]):
                role = guild.roles.cache.find((role) => {
                    return role.name === roleNames[6]
                })
                if(!role){
                    message.reply(`There is no role with the name "${roleNames[6]}"`);
                    return;
                }
                member.roles.add(role);
                Embed.edit(alignm_LE);
                console.log(`Ending alignment test for ${message.author.tag}`);
                message.reply(`the role "${roleNames[6]}" has been successfully assigned.`);
                break;

            case(alignments[7]):
                role = guild.roles.cache.find((role) => {
                    return role.name === roleNames[7]
                })
                if(!role){
                    message.reply(`There is no role with the name "${roleNames[7]}"`);
                    return;
                }
                member.roles.add(role);
                Embed.edit(alignm_NE);
                console.log(`Ending alignment test for ${message.author.tag}`);
                message.reply(`the role "${roleNames[7]}" has been successfully assigned.`);
                break;

            case(alignments[8]):
                role = guild.roles.cache.find((role) => {
                    return role.name === roleNames[8]
                })
                if(!role){
                    message.reply(`There is no role with the name "${roleNames[8]}"`);
                    return;
                }
                member.roles.add(role);
                Embed.edit(alignm_CE);
                console.log(`Ending alignment test for ${message.author.tag}`);
                message.reply(`the role "${roleNames[8]}" has been successfully assigned.`);
                break;
            
        }
        
    }
}


