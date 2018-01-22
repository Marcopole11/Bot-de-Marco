const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
var prefix = 'm!';
client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	} else if (message.content.startsWith(prefix + 'ping')) {
    	message.channel.sendMessage('pong');
    } else if (message.content.startsWith(prefix + 'testcomando')) {
        message.guild.channels.find("name", "canal-r37j");
    } else if (message.content.startsWith(prefix + 'noticeame')) {
        message.member.addRole(guild.roles.find("name", "ad");
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
