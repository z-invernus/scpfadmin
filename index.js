const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "."

bot.on('ready', ()=>{
    bot.user.setActivity(`SCP Foundation`, {type: 'WATCHING'})
    console.log('BOT Online.')
})

bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(`${prefix}event`)) {
    if(!arg) return;
    if(message.author.bot) return;
    if(message.channel.name !== "event-announcements") return message.author.send('Please use this command in the training channel.')
    if (!message.member.hasPermission(["MENTION_EVERYONE"])) return;
    let embed = new Discord.MessageEmbed()
        .setTitle("Event Shout")
        .setDescription(arg)
        .setColor("0x8b0000")
        .setFooter(`Shouted by ${message.author.username}.`)
        message.channel.send('@here', embed)
    }
});
bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(`${prefix}globalannounce`)) {
    if(!arg) return;
    if(message.author.bot) return;
    if(message.channel.name !== "announcements") return message.author.send('Please use this command in the raids channel.')
    if (!message.member.hasPermission(["ADMINISTRATOR"])) return;
    const isdchannel = bot.channels.cache.find(channel => channel.id === "822045769762340924");
    const mtfchannel = bot.channels.cache.find(channel => channel.id === "822231897241419846");
    const sdchannel = bot.channels.cache.find(channel => channel.id === "823639828775567420");
    const ecchannel = bot.channels.cache.find(channel => channel.id === "822236570336755733");
    const scdchannel = bot.channels.cache.find(channel => channel.id === "822246114250063912");
    const iachannel = bot.channels.cache.find(channel => channel.id === "822245494637985812");
   
    let embed = new Discord.MessageEmbed()
        .setTitle("Foundation Wide Announcement")
        .setDescription(arg)
        .setColor("0xff4500")
        .setFooter(`Foundation Wide Announcement by ${message.author.username}`)
        message.channel.send('@everyone', embed)
        isdchannel.send('@everyone', embed)
        sdchannel.send('@everyone', embed)
        ecchannel.send('@everyone', embed)
        iachannel.send('@everyone', embed)
        scdchannel.send('@everyone', embed)
        mtfchannel.send('@everyone', embed)
    }
});
bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(`${prefix}tryout`)) {
    if(!arg) return;
    if(message.author.bot) return;
    if(message.channel.name !== "department-recruitment") return message.author.send('Please use this command in the department recruitment channel.')
    if (!message.member.hasPermission(["MENTION_EVERYONE"])) return;
    let embed = new Discord.MessageEmbed()
        .setTitle("Department Recruitment")
        .setDescription(arg)
        .setColor("0x8b0000")
        .setFooter(`Shouted by ${message.author.username}`)
        message.channel.send('@here', embed)
    }
});
bot.on("message", (message) => {
    if(message.content.startsWith(`${prefix}help`)) {
    if(message.author.bot) return;
    const embed = new Discord.MessageEmbed()
        .setTitle('Showing command list.')
        .addField('N/A', 'Public commands are currently not available.')
        .setColor("RANDOM")
        .setFooter(`Command ran by ${message.author.username}`)
        message.channel.send(embed)
    }
});
bot.on("message", (message) => {
    if(message.content.startsWith(`${prefix}status`)) {
    if(message.author.bot) return;
    const embed = new Discord.MessageEmbed()
        .addField('Current status:', 'Up and running.')
        .setColor("RANDOM")
        .setFooter(`Command ran by ${message.author.username}`)
        message.channel.send(embed)
    }
});
bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(`${prefix}o5invites`)) {
    if(!arg) return;
    if(message.author.bot) return;
    if(message.channel.name !== "permanent-discord-invites") return message.author.send('Please use this command in the O5 council channel.')
    if (!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send('Insufficient permission.');
    let embed = new Discord.MessageEmbed()
        .setTitle("Discord Invites")
        .setDescription(arg)
        .setColor("0xffa500")
        .setFooter(`All invites listed above are strictly confidential and any leaking will lead to consequences`)
        message.channel.send(embed)
    }
});
bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(`${prefix}o5docs`)) {
    if(!arg) return;
    if(message.author.bot) return;
    if(message.channel.name !== "o5-documents") return message.author.send('Please use this command in the O5 council channel.')
    if (!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send('Insufficient permission.');
    let embed = new Discord.MessageEmbed()
        .setTitle("O5 Council Documents")
        .setDescription(arg)
        .setColor("0xffa500")
        .setFooter(`All documents listed above are strictly confidential and any leaking will lead to consequences`)
        message.channel.send(embed)
    }
});

bot.login(process.env.token)
