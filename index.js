const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "."

bot.on('ready', ()=>{
    bot.user.setActivity(`${bot.guilds.cache.size} servers.`, {type: 'WATCHING'})
    console.log('BOT Online.')
})

bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(`${prefix}training`)) {
    if(!arg) return;
    if(message.author.bot) return;
    if(message.channel.name !== "trainings") return message.author.send('Please use this command in the training channel.')
    if (!message.member.hasPermission(["MENTION_EVERYONE"])) return;
    let embed = new Discord.MessageEmbed()
        .setTitle("A Training is being hosted!")
        .setDescription(arg)
        .setColor("0x8b0000")
        .setFooter(`Shouted by ${message.author.username}.`)
        message.channel.send('@everyone', embed)
    }
});
bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(`${prefix}raid`)) {
    if(!arg) return;
    if(message.author.bot) return;
    if(message.channel.name !== "raids") return message.author.send('Please use this command in the raids channel.')
    if (!message.member.hasPermission(["MENTION_EVERYONE"])) return;
    let embed = new Discord.MessageEmbed()
        .setTitle("A Raid is being hosted!")
        .setDescription(arg)
        .setColor("0x8b0000")
        .setFooter(`Shouted by ${message.author.username}.`)
        message.channel.send('@everyone', embed)
    }
});
bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(`${prefix}recruitment`)) {
    if(!arg) return;
    if(message.author.bot) return;
    if(message.channel.name !== "events") return message.author.send('Please use this command in the events channel.')
    if (!message.member.hasPermission(["MENTION_EVERYONE"])) return;
    let embed = new Discord.MessageEmbed()
        .setTitle("A recruitment session is being hosted!")
        .setDescription(`*Come help us recruit more members!*\n \n${arg}`)
        .setColor("0x8b0000")
        .setFooter(`Shouted by ${message.author.username}.`)
        message.channel.send('e', embed)
    }
});
bot.on("message", (message) => {
    if(message.content.startsWith(`${prefix}help`)) {
    if(message.author.bot) return;
    const embed = new Discord.MessageEmbed()
        .setTitle('Showing command list.')
        .addField('.training', '*Description:* Generates an embed used for trainings, include links or any additional notes in the command..')
        .addField('.raid', '*Description:* Generates an embed like the training one, except it\'s used for raids, include links and any additional notes in the command.')
        .addField('.recruitment', '*Description:* Generates an embed used for recruitment sessions, make sure to include your profile link and any information regarding the booth.')
        .addField('.hentaishout', '*Description:* BRO, SO TASTY MMM, I LOVE NEKOS -invernus')
        .setColor("RANDOM")
        .setFooter(`Generated by ${message.author.username}.`)
        message.channel.send(embed)
    }
});
bot.on("message", (message) => {
    if(message.author.bot) return;
    const embed = new Discord.MessageEmbed()
        .addField('Current status:', 'Up and running.')
        .setColor("RANDOM")
        .setFooter(`Generated by ${message.author.username}.`)
    if(message.content.includes(`${prefix}status`)) {
        message.channel.send(embed)
    }
});
bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(`${prefix}raid test`)) {
    if(!arg) return;
    if(message.author.bot) return;
    if(message.channel.name !== "raids") return message.author.send('Please use this command in the raids channel.')
    if (!message.member.hasPermission(["MENTION_EVERYONE"])) return;
    let embed = new Discord.MessageEmbed()
        .setTitle("A Raid is being hosted!")
        .setDescription(arg)
        .setColor("0x8b0000")
        .setFooter(`Shouted by ${message.author.username}.`)
        message.channel.send(embed)
    }
});

bot.login(process.env.token)
