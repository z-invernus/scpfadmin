const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "."

bot.on('ready', ()=>{
    bot.user.setActivity(`SCP Foundation`, {type: 'WATCHING'})
    console.log('BOT Online.')
})
//announcements
bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(`${prefix}event`)) {
    if(!arg) return;
    if(message.author.bot) return;
    if(message.channel.name !== "event-announcements") return message.author.send('Please use this command in the events channel.')
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
    if(message.guild.id !== "821789941708357632") return;
    if(message.channel.name !== "announcements") return message.author.send('Please use this command in the announcements channel.')
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
    if(message.content.startsWith(`${prefix}exeannounce`)) {
    if(!arg) return;
    if(message.author.bot) return;
    if(message.guild.id !== "821789941708357632") return;
    if(message.channel.name !== "executive-announcements") return message.author.send('Please use this command in the executive announcements channel.')
    if (!message.member.hasPermission(["MENTION_EVERYONE"])) return message.channel.send('Insufficient permissions.')
   
    let embed = new Discord.MessageEmbed()
        .setTitle("Executive Announcement")
        .setDescription(arg)
        .setColor("0xff4500")
        .setFooter(`Announcement by ${message.author.username}`)
        message.channel.send('@everyone', embed)
    }
});

bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(`${prefix}announce`)) {
    if(!arg) return;
    if(message.author.bot) return;
    if(message.guild.id !== "821789941708357632") return;
    if (!message.member.hasPermission(["MENTION_EVERYONE"])) return message.channel.send('Insufficient permissions.');
   
    let embed = new Discord.MessageEmbed()
        .setTitle("Announcement")
        .setDescription(arg)
        .setColor("0xff4500")
        .setFooter(`Announcement by ${message.author.username}`)
        message.channel.send('@everyone', embed)
    }
});

//department announcements
bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(`${prefix}isdannounce`)) {
    if(!arg) return;
    if(message.author.bot) return;
    if(message.guild.id !== "821894569922134056") return;
    if(message.channel.name !== "announcements") return message.author.send('Please use this command in the announcements channel.')
    if (!message.member.hasPermission(["MENTION_EVERYONE"])) return message.channel.send('Insufficient permissions.')
   
    let embed = new Discord.MessageEmbed()
        .setTitle("Internal Security Department | Announcement")
        .setDescription(arg)
        .setColor("0x780000")
        .setFooter(`Announcement by ${message.author.username}`)
        message.channel.send('@everyone', embed)
    }
});
bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(`${prefix}sdannounce`)) {
    if(!arg) return;
    if(message.author.bot) return;
    if(message.guild.id !== "821995762920718336") return;
    if(message.channel.name !== "department-announcements") return message.author.send('Please use this command in the announcements channel.')
    if (!message.member.hasPermission(["MENTION_EVERYONE"])) return message.channel.send('Insufficient permissions.')
   
    let embed = new Discord.MessageEmbed()
        .setTitle("Security Department | Announcement")
        .setDescription(arg)
        .setColor("0x4e4d4f")
        .setFooter(`Announcement by ${message.author.username}`)
        message.channel.send('@everyone', embed)
    }
});
bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(`${prefix}ecannounce`)) {
    if(!arg) return;
    if(message.author.bot) return;
    if(message.guild.id !== "821903969894400020") return;
    if(message.channel.name !== "department-announcements") return message.author.send('Please use this command in the announcements channel.')
    if (!message.member.hasPermission(["MENTION_EVERYONE"])) return message.channel.send('Insufficient permissions.')
   
    let embed = new Discord.MessageEmbed()
        .setTitle("Ethics Committee | Announcement")
        .setDescription(arg)
        .setColor("0x179903")
        .setFooter(`Announcement by ${message.author.username}`)
        message.channel.send('@everyone', embed)
    }
});
bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(`${prefix}mtfannounce`)) {
    if(!arg) return;
    if(message.author.bot) return;
    if(message.guild.id !== "821875789359480832") return;
    if(message.channel.name !== "department-announcements") return message.author.send('Please use this command in the announcements channel.')
    if (!message.member.hasPermission(["MENTION_EVERYONE"])) return message.channel.send('Insufficient permissions.')
   
    let embed = new Discord.MessageEmbed()
        .setTitle("Mobile Task Force | Announcement")
        .setDescription(arg)
        .setColor("0xba6b04")
        .setFooter(`Announcement by ${message.author.username}`)
        message.channel.send('@everyone', embed)
    }
});
bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(`${prefix}scdannounce`)) {
    if(!arg) return;
    if(message.author.bot) return;
    if(message.guild.id !== "821996161208156170") return;
    if(message.channel.name !== "department-announcements") return message.author.send('Please use this command in the announcements channel.')
    if (!message.member.hasPermission(["MENTION_EVERYONE"])) return message.channel.send('Insufficient permissions.')
   
    let embed = new Discord.MessageEmbed()
        .setTitle("Scientific Department | Announcement")
        .setDescription(arg)
        .setColor("0x03a2ad")
        .setFooter(`Announcement by ${message.author.username}`)
        message.channel.send('@everyone', embed)
    }
});

bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(2).join(" ");
    var color = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(`${prefix}iaannounce`)) {
    if(!arg) return;
    if(message.author.bot) return;
    if(message.guild.id !== "821825590365519922") return;
    if(message.channel.name !== "announcements") return message.author.send('Please use this command in the announcements channel.')
    if (!message.member.hasPermission(["MENTION_EVERYONE"])) return message.channel.send('Insufficient permissions.')
   
    let embed = new Discord.MessageEmbed()
        .setTitle("Intelligence Agency | Announcement")
        .setDescription(arg)
        .setColor("0x0d0d0d")
        .setFooter(`Announcement by ${message.author.username}`)
        message.channel.send('@everyone', embed)
    }
});

//department commands
bot.on("message", (message) => {
    if(message.content.startsWith(`${prefix}isdcmds`)) {
    if(message.author.bot) return;
    if(message.guild.id !== "821894569922134056") return;
    const embed = new Discord.MessageEmbed()
        .setTitle('Showing ISD exclusive commands list')
        .addField('.isdannounce', 'Announcement commands, available to any rank with **MENTION_EVERYONE** and **SEND_MESSAGE** perms in <#822045769762340924>')
        .addField('.event', 'Global command issued to all department discords. Events channel **must** be named "event-announcements" for proper functioning. Available to anyone with **MENTION_EVERYONE** and **SEND_MESSAGE** perms in the events channel.')
        .addField('.status', 'Basic command to show the bot\'s status, any rank may run this command.')
        .setColor("0x780000")
        .setFooter(`Command ran by ${message.author.username}`)
        message.channel.send(embed)
    }
});

bot.on("message", (message) => {
    if(message.content.startsWith(`${prefix}eccmds`)) {
    if(message.author.bot) return;
    if(message.guild.id !== "821903969894400020") return;
    const embed = new Discord.MessageEmbed()
        .setTitle('Showing EC exclusive commands list')
        .addField('.ecannounce', 'Announcement commands, available to any rank with **MENTION_EVERYONE** and **SEND_MESSAGE** perms in N/A.')
        .addField('.blacklist', 'Adds a user to the blacklisted list.')
        .addField('.event', 'Global command issued to all department discords. Events channel **must** be named "event-announcements" for proper functioning. Available to anyone with **MENTION_EVERYONE** and **SEND_MESSAGE** perms in the events channel.')
        .addField('.status', 'Basic command to show the bot\'s status, any rank may run this command.')
        .setColor("0x179903")
        .setFooter(`Command ran by ${message.author.username}`)
        message.channel.send(embed)
    }
});

bot.on("message", (message) => {
    if(message.content.startsWith(`${prefix}iacmds`)) {
    if(message.author.bot) return;
    if(message.guild.id !== "821825590365519922") return;
    const embed = new Discord.MessageEmbed()
        .setTitle('Showing IA exclusive commands list')
        .addField('.iaannounce', 'Announcement commands, available to any rank with **MENTION_EVERYONE** and **SEND_MESSAGE** perms in <#822245494637985812>')
        .addField('.event', 'Global command issued to all department discords. Events channel **must** be named "event-announcements" for proper functioning. Available to anyone with **MENTION_EVERYONE** and **SEND_MESSAGE** perms in the events channel.')
        .addField('.status', 'Basic command to show the bot\'s status, any rank may run this command.')
        .setColor("0x0d0d0d")
        .setFooter(`Command ran by ${message.author.username}`)
        message.channel.send(embed)
    }
});

bot.on("message", (message) => {
    if(message.content.startsWith(`${prefix}mtfcmds`)) {
    if(message.author.bot) return;
    if(message.guild.id !== "821875789359480832") return;
    const embed = new Discord.MessageEmbed()
        .setTitle('Showing MTF exclusive commands list')
        .addField('.mtfannounce', 'Announcement commands, available to any rank with **MENTION_EVERYONE** and **SEND_MESSAGE** perms in <#822231844791517234>')
        .addField('.event', 'Global command issued to all department discords. Events channel **must** be named "event-announcements" for proper functioning. Available to anyone with **MENTION_EVERYONE** and **SEND_MESSAGE** perms in the events channel.')
        .addField('.status', 'Basic command to show the bot\'s status, any rank may run this command.')
        .setColor("0xba6b04")
        .setFooter(`Command ran by ${message.author.username}`)
        message.channel.send(embed)
    }
});

bot.on("message", (message) => {
    if(message.content.startsWith(`${prefix}scdcmds`)) {
    if(message.author.bot) return;
    if(message.guild.id !== "821996161208156170") return;
    const embed = new Discord.MessageEmbed()
        .setTitle('Showing ScD exclusive commands list')
        .addField('.scdannounce', 'Announcement commands, available to any rank with **MENTION_EVERYONE** and **SEND_MESSAGE** perms in <#822246083635314729>')
        .addField('.event', 'Global command issued to all department discords. Events channel **must** be named "event-announcements" for proper functioning. Available to anyone with **MENTION_EVERYONE** and **SEND_MESSAGE** perms in the events channel.')
        .addField('.status', 'Basic command to show the bot\'s status, any rank may run this command.')
        .setColor("0x03a2ad")
        .setFooter(`Command ran by ${message.author.username}`)
        message.channel.send(embed)
    }
});
bot.on("message", (message) => {
    if(message.content.startsWith(`${prefix}sdcmds`)) {
    if(message.author.bot) return;
    if(message.guild.id !== "821995762920718336") return;
    const embed = new Discord.MessageEmbed()
        .setTitle('Showing SD exclusive commands list')
        .addField('.sdannounce', 'Announcement commands, available to any rank with **MENTION_EVERYONE** and **SEND_MESSAGE** perms in <#823639793333174312>')
        .addField('.event', 'Global command issued to all department discords. Events channel **must** be named "event-announcements" for proper functioning. Available to anyone with **MENTION_EVERYONE** and **SEND_MESSAGE** perms in the events channel.')
        .addField('.status', 'Basic command to show the bot\'s status, any rank may run this command.')
        .setColor("0x4e4d4f")
        .setFooter(`Command ran by ${message.author.username}`)
        message.channel.send(embed)
    }
});

//misc commands
bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(`${prefix}tryout`)) {
    if(!arg) return;
    if(message.author.bot) return;
    if(message.guild.id !== "821789941708357632") return;
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

//o5
bot.on("message", (message) => {
    var arg = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(`${prefix}o5invites`)) {
    if(!arg) return;
    if(message.author.bot) return;
    if(message.guild.id !== "821789941708357632") return;
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
    if(message.guild.id !== "821789941708357632") return;
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

//ethics committee commands
bot.on("message", (message) => {
    var bluser = message.content.split(" ").slice(1).join("/");
    var arg = message.content.split("/").slice(2).join(" ");
    if(message.content.startsWith(`${prefix}blacklist-ec`)) {
    if(message.author.bot) return;
    if(!arg) return;
    if(message.guild.id !== "821903969894400020") return;
    const blchannel = bot.channels.cache.find(channel => channel.id === "833672848206856233");
    const embed = new Discord.MessageEmbed()
        .setTitle('New Blacklisted User')
        .addField(`Blacklisted by`, message.author.username)
        .addField(`Blacklisted user`, bluser)
        .addField(`Reason for blacklist`, arg)
        .setColor("0x000000")
        .setFooter(`If any improper blacklisting is spotted, blacklisting user will be punished.`)
        blchannel.send(embed)
        message.author.send(`Successfully blacklisted **${bluser}**.`)
    }
});

bot.login(process.env.token)
