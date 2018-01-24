const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
var prefix = 'm!';
client.on('message', message => {
    if (message.content.startsWith(prefix + 'ping')) {
    	message.channel.sendMessage('Pong! ^-^7');
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
        message.channel.sendMessage('La id del server es ' + message.guild.createdTimestamp + '\n ' + message.content);
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + 'fastpoll')) {
        let entrada = message.content.split("\n");
        let opciones = 0;
        let envio = ("** Hey! " + message.author.username + " ha iniciado una votación!**");
        for(lain = 1; lain < entrada.length; lain++){
            if(entrada[lain].startsWith('- ')){
                opciones = opciones + 1;
                envio = (envio + "\nopt" + entrada[lain].slice(1));
            } else {
                envio = (envio + "\n" + entrada[lain]);
            }
        }
        message.guild.channels.find("name", "chatprincipal").sendMessage(envio);
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + 'emote')) {
        message.channel.sendMessage(message.client.guilds.find("createdTimestamp", "466535373779").available);
    }
});
/*
    if (message.content.startsWith(prefix + 'emote')) {
        message.react(message.guild.emojis.find("name", "wut"));
    }
*/
// THIS  MUST  BE  THE  WAE
client.login(process.env.BOT_TOKEN);
