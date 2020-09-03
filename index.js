const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "."

bot.on('ready', ()=>{
    bot.user.setActivity(`${bot.guilds.cache.size}`, {type: 'WATCHING'})
    console.log('BOT Online.')
})

bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(1).join(" ");
    if(!arg) return;
    if(message.author.bot) return;
    if (!message.member.hasPermission(["EMBED_LINKS"])) return;
    let embed = new Discord.MessageEmbed()
        .setDescription(arg)
        .setColor("RANDOM")
        .setFooter(`Generated by ${message.author.username}.`)
    if(message.content.includes(`${prefix}normal`)) {
        message.channel.send(embed)
    }
});
bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(1).join(" ");
    if(!arg) return;
    if(message.author.bot) return;
    if (!message.member.hasPermission(["EMBED_LINKS"])) return;
    if (!message.member.hasPermission(["MENTION_EVERYONE"])) return;
    let embed = new Discord.MessageEmbed()
        .setDescription(arg)
        .setColor("RANDOM")
        .setFooter(`Generated by ${message.author.username}.`)
    if(message.content.includes(`${prefix}here`)) {
        message.channel.send('@here', embed)
    }
});
bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(1).join(" ");
    if(!arg) return;
    if(message.author.bot) return;
    if (!message.member.hasPermission(["EMBED_LINKS"])) return;
    if (!message.member.hasPermission(["MENTION_EVERYONE"])) return;
    let embed = new Discord.MessageEmbed()
        .setDescription(arg)
        .setColor("RANDOM")
        .setFooter(`Generated by ${message.author.username}.`)
    if(message.content.includes(`${prefix}everyone`)) {
        message.channel.send('@everyone', embed)
    }
});
bot.on("message", (message) => {
    if(message.author.bot) return;
    const embed = new Discord.MessageEmbed()
        .setTitle('Showing command list.')
        .addField('.normal', '*Description:* Generates a normal embed, without pings. Requires the permission **EMBED_LINKS**.')
        .addField('.here', '*Description:* Generates a normal embed, with the @here ping. Requires the permission **EMBED_LINKS** and **MENTION_EVERYONE**.')
        .addField('.everyone', '*Description:* Generates a normal embed, with the @everyone ping. Requires the permission **EMBED_LINKS** and **MENTION_EVERYONE**.')
        .addField('.help', '*Description:* The command you just ran now to see this embed..')
        .addField('.invite', '*Description:* Gives an invite link to the bot.')
        .addField('.<command>', 'Yep, more commands will be added, and this command line isn\'t an actual command, okay?')
        .setColor("RANDOM")
        .setFooter(`Generated by ${message.author.username}.`)
    if(message.content.includes(`${prefix}help`)) {
        message.channel.send(embed)
    }
});
bot.on("message", (message) => {
    if(message.author.bot) return;
    const embed = new Discord.MessageEmbed()
        .addField('BOT invite link:', 'https://discord.com/api/oauth2/authorize?client_id=750968965613879349&permissions=257024&scope=bot')
        .addField('Official discord server link:', 'https://discord.gg/q8ZjH4V')
        .setColor("RANDOM")
        .setFooter(`Generated by ${message.author.username}.`)
    if(message.content.includes(`${prefix}invite`)) {
        message.channel.send(embed)
    }
});
bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(1).join(" ");
    if(!arg) return;
    if(message.author.bot) return;
    if (!message.member.hasPermission(["EMBED_LINKS"])) return;
    let embed = new Discord.MessageEmbed()
        .setDescription('Found a bug? And don\'t know where to report it? Join our official server to report bugs! You can find the invite link in the command **.invite**!')
        .setColor("RANDOM")
        .setFooter(`Generated by ${message.author.username}.`)
    if(message.content.includes(`${prefix}report`)) {
        message.channel.send(embed)
    }
});
bot.on("message", (message) => {
    if(message.author.bot) return;
    const embed = new Discord.MessageEmbed()
        .setTitle('Frequently asked questions')
        .addField('Can I put markdowns in my embed?', 'Yes, you can.')
        .addField('Can I put how many words I want?', 'Sadly, max words for an embed is 1024. This means, there is a limit per embed. If your embed doesn\'t show up, it\'s more likely that you have reached the max texts.')
        .addField('My embed doesn\'t show up! What do I do?', 'If an embed doesn\'t show up, you probably do not have enough permission to use it, or, you have reached the max words. Otherwise, please run the command **.status**, if no response from the bot, we recommend waiting a few minutes, as there may be a downtime.')
        .addField('If you\'d like to suggest questions, join our discord server!', 'You can find the link in **.invite**.')
        .setColor("RANDOM")
        .setFooter(`Generated by ${message.author.username}.`)
    if(message.content.includes(`${prefix}faq`)) {
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


bot.login(process.env.token)