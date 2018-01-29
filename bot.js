const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
var prefix = 'm!';
var comandchat = "comandos"; var dialogchat = "canal-r37j";
client.on('message', message => { //solo en chat de comandos
    if(message.content.startsWith(prefix) && (message.channel.name == comandchat || message.channel.name == dialogchat)){
        if (message.content.startsWith(prefix + 'ping')) {
            message.channel.sendMessage('Pong! ^-^7');
        } else if (message.content.startsWith(prefix + 'emote')) {
            message.react(message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", "Oland_flag"))
        } else if (message.content.startsWith(prefix + 'testcomando')) {
            message.guild.channels.find("name", "canal-r37j").sendMessage('pong');
        } else if (message.content.startsWith(prefix + 'analiza')) {
            message.channel.sendMessage('La id del server es ' + message.guild.createdTimestamp + '\n ' + message.content);
        } else if (message.content.startsWith(prefix + 'tierna')) {
            message.channel.sendMessage('>u<', {file: "http://i0.kym-cdn.com/photos/images/newsfeed/001/246/976/007.gif"});
        } else
            if (message.content.startsWith(prefix + 'noticeame')) {
            message.member.addRole(message.guild.roles.find("name", "ad"), "comando");
            message.channel.sendMessage('Ahora serás avisado cuando se haga directo ^-^/');
        } else if (message.content.startsWith(prefix + 'unnoticeame')) {
            message.member.removeRole(message.guild.roles.find("name", "ad"), "comando");
            message.channel.sendMessage('Perdona a Mitto-kun, a veces es un poco pesado u_u7');
        } else if (message.content.startsWith(prefix + 'hentai')) {
            const kap = [
                'Que horror, ni pensarlo!',
                'Buen material para un fanfic, cuéntame mas...',
                'Si! Me encanta! Será mi nueva waifu! :D',
                'Ni hablar! Antes me la corto y me hago monja. O_o',
                'Sweet, I love it!',
                'Eso amigo mio :o es un tesoro de los que se guardan por generaciones',
                'Mejor no respondo',
                'Meh, me esperaba algo mejor.',
                'OMG eso es tan... TAN... MMMMMMMMHHHH...',
                'Te estás ganando un porrazo...'];
            let entrada = message.content.split(" ");
            if(entrada.length < 4){
                message.channel.sendMessage('Me parece que aún te falta imaginación...');
            } else {
                message.channel.sendMessage(kap[(entrada[3].charCodeAt(0)+ "").slice(-1)]);
            }
        }
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
        message.guild.channels.find("name", "chatprincipal").sendMessage(envio).then(function (muss) {
            for(lain = 0; lain < opciones; lain++){
                muss.react(message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", emotinames[lain]));
            }
        }).catch(function() {
          //Something
        });
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + 'nuevodirecto') && message.channel.name == dialogchat) {
        let entrada = message.content.split(" ARTEIKA ");
        let salida = "\n";
        if(entrada[1] == "officiallinzet"){
            salida = salida + message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", "lunalinzet") +
                "``HEY! ATENCIÓN!``" + message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", "lunalinzet") +
                "\n **Que Linzet está en directo!!!**\n";
            if(entrada[2] == "Creative"){
                salida = salida + "Hoy toca dibujar por las risas! Va a estar " + entrada[3];
            } else {
                salida = salida + "Hoy toca " + entrada[2] + "! \n _" + entrada[3] + "_";
            }
            salida = salida + "\n A que estás esperando? \n \n Pulsa aqui para unirte: " + entrada[4];
        } else if (entrada[1] == "binarypie3"){
            salida = salida +
                "``HEY! ATENCIÓN!``" +
                "\n **Que Binary está en directo!!!**\n" +
                "Hoy parece que nos trae algo de " + entrada[3] + " en " + entrada[2] +
                "\n A que estás esperando? \n \n Pulsa aqui para unirte: " + entrada[4];
        } else if (entrada[1] == "marcopole"){
            salida = salida + message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", "KappaFace") +
                "``HEY! ATENCIÓN!``" + message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", "KappaFace") +
                "\n **Que Marcopole está en directo!!!**\n" +
                "Hoy se encuentra " + entrada[3] +
                "\n A que estás esperando? \n \n Pulsa aqui para unirte: " + entrada[4];
        } else {
            salida = salida + "streamer no reconocido";
        }
        salida = salida + "\n Avisando a todos los " + message.guild.roles.find("name", "ad") + " :laughing:";
        message.guild.channels.find("name", "aviso-directos").sendMessage(salida);
    }
});
client.on('message', message => {
    if ((message.author.username == "MuxyBot" || message.author.username == "Skuld") && message.channel.name == dialogchat) {
        if(message.content.contains('marcopole just went live'){
           message.channel.sendMessage('tom!endirecto');
        }
    } else if (message.content.startsWith(prefix + 'endirecto') && message.channel.name == dialogchat) {
        let entrada = message.content.split(" ARTEIKA ");
        let salida = message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", "KappaFace") +
                "``HEY! ATENCIÓN!``" + message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", "KappaFace") +
                "\n **Que Marcopole está en directo!!!**\n" +
                "Hoy se encuentra " + entrada[1] + "\n \n Dibujando que? \n" + entrada[3] +
                "\n \n A que estás esperando? \n Pulsa aqui para unirte: " + entrada[2];
        salida = salida + "\n \n Avisando a todos los " + message.guild.roles.find("name", "ad") + " :laughing:";
        message.guild.channels.find("name", "aviso-directos").sendMessage(salida);
    }
});
/*

kap[("$(3)".charCodeAt(0)+ "").slice(-1)];)
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
