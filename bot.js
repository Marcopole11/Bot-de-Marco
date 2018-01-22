const Discord = require('discord.io');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

//this must be this way
client.login(process.env.BOTTOKEN);
