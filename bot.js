const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
var prefix = 'm!';
client.on('message', message => {
    if (message.content.startsWith(prefix + 'ping')) {
    	message.channel.sendMessage('pong');
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + 'testcomando')) {
        message.guild.channels.find("name", "canal-r37j").sendMessage('pong');
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + 'noticeame')) {
        message.member.addRole(message.guild.roles.find("name", "ad"), "comando");
        message.channel.sendMessage('Ahora serás avisado cuando se haga directo ^-^/');
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + 'unnoticeame')) {
        message.member.removeRole(message.guild.roles.find("name", "ad"), "comando");
        message.channel.sendMessage('Perdona a Mitto-kun, a veces es un poco pesado u_u7');
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + 'analiza')) {
        message.channel.sendMessage('the server id is' + message.guild.createdTimestamp);
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + 'serverping')) {
        message.client.guilds.find('createdTimestamp', '1466535373779').channels.find('name', 'general').message.channel.sendMessage('Pong!');
    }
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
