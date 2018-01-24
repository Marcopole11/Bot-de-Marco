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
        let emotinames = ["Oland_flag", "Mord_flag", "Gracan_flag", "Fora_flag", "Oland_ico", "Mord_ico", "Gracan_ico", "Fora_ico"];
        let envio = ("** Hey! " + message.author.username + " ha iniciado una votación!**");
        for(lain = 1; lain < entrada.length; lain++){
            if(entrada[lain].startsWith('- ')){
                envio = (envio + "\n" +
                         message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", emotinames[opciones])
                         + entrada[lain].slice(1));
                opciones = opciones + 1;
            } else {
                envio = (envio + "\n" + entrada[lain]);
            }
        }
        message.guild.channels.find("name", "chatprincipal").sendMessage(envio).then(message =>{
            for(lain = 0; lain < opciones; lain++){
                message.react(message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", emotinames[lain]));
            }
        });
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + 'emote')) {
        message.react(message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", "Oland_flag"));
    }
});
/*
client.on('message', message => {
    if (message.content.startsWith(prefix + 'fastpoll')) {
        let entrada = message.content.split("\n");
        let opciones = 0;
        let emotinames = ["Oland_flag", "Mord_flag", "Gracan_flag", "Fora_flag", "Oland_ico", "Mord_ico", "Gracan_ico", "Fora_ico"];
        let envio = ("** Hey! " + message.author.username + " ha iniciado una votación!**");
        for(lain = 1; lain < entrada.length; lain++){
            if(entrada[lain].startsWith('- ')){
                envio = (envio + "\n" +
                         message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", emotinames[opciones])
                         + entrada[lain].slice(1));
                opciones = opciones + 1;
            } else {
                envio = (envio + "\n" + entrada[lain]);
            }
        }
        message.guild.channels.find("name", "chatprincipal").sendMessage(envio);
        for(lain = 0; lain < opciones; lain++){
            message.client.user.lastMessage.react(message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", emotinames[lain]));
        }
    }
});
*/
// THIS  IS  THE  WAE
client.login(process.env.BOT_TOKEN);
