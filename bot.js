const Discord = require('discord.js');
const client = new Discord.Client();
const pluralinfo = require("./principalDatabase.json");

client.on('ready', () => {
    console.log('I am ready!');
});
var prefix = 'm!';
var comandchat = "comandos"; var dialogchat = "canal-r37j";
client.on('message', message => { //solo en chat de comandos
    if(message.content.startsWith(prefix) && (message.channel.name == comandchat || message.channel.name == dialogchat)){
        if (message.content.startsWith(prefix + 'ping')) {
            message.channel.sendMessage('Pong! ^-^7');
        } else if (message.content.startsWith(prefix + 'test') && message.author.id != '192007091169263616') {
            message.channel.send("Marcopole no me deja que uses ese comando" +
                message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", "botsad"));
        } else if (message.content.startsWith(prefix + 'adm') && message.author.id != '192007091169263616') {
            message.channel.send("Solo Marcopole puede usar comandos de administrador");
        } else if (message.content.startsWith(prefix + 'emote')) {
            //message.react(message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", "Oland_flag"));
            //message.react(message.guild.emojis.find("name", "wagame"));
            message.channel.send("hola").then(m => {
                    m.react(m.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", "Oland_flag"));
                    m.react(m.guild.emojis.find("name", "wagame"));
            });
        } else if (message.content.startsWith(prefix + 'testcomando')) {
            message.guild.channels.find("name", "canal-r37j").sendMessage('pong');
        } else if (message.content.startsWith(prefix + 'testunique')) {
            message.guild.roles.find("name", "ad").edit({mentionable: false});
        } else if (message.content.startsWith(prefix + 'testcontar')) {
            message.channel.fetchMessages({ limit: 10 }).then(messages => {
                messages.forEach(m=> {
                    if(m.content.startsWith("Pong!")){
                        m.channel.send(m.id);
                    }
                })
             });
            message.channel.send("hola");
        } else if (message.content.startsWith(prefix + 'testjson')) {
             message.channel.send(pluralinfo.textoprueba);
        } else if (message.content.startsWith(prefix + 'testeditar')) {
            message.channel.fetchMessage('420489858990080000').then(message => {
                message.edit('patatua');
            });
        } else if (message.content.startsWith(prefix + 'testlectura')) {
            let enviar = "ERROR";
            message.channel.fetchMessage('420489858990080000').then(message => {
                 //enviar = message.content;
                message.channel.send(enviar);
            });
            
        } else if (message.content.startsWith(prefix + 'testbcomando')) {
            message.client.guilds.find("name", "Server secreto de Marco").channels.find("name", "general").sendMessage('pong');
        } else if (message.content.startsWith(prefix + 'testaviso')) {
            message.guild.channels.find("name", "chat-principal").sendMessage('Ya he aprendido a usar el arco, flecha de amor para todos! \:hearts:');
            message.guild.channels.find("name", "chat-principal").sendMessage('...');
            message.guild.channels.find("name", "chat-principal").sendMessage('Porque nadie se mueve \:cold_sweat:');
        } else if (message.content.startsWith(prefix + 'testsay')) {
            message.channel.sendMessage(message.content.slice(10));
        } else if (message.content.startsWith(prefix + 'testvoice')) {
            if(message.content.startsWith(prefix + 'testvoiceven')){
               message.member.voiceChannel.join();
            } else if(message.content.startsWith(prefix + 'testvoiceve')){
               message.guild.channels.get("383589689296158725").join();
            } else if(message.content.startsWith(prefix + 'testvoicedime')){
                message.channel.sendMessage(message.member.voiceChannelID);
            } else if(message.content.startsWith(prefix + 'testvoicepuedo')){
               message.channel.sendMessage(message.guild.channels.get("383589689296158725").joinable);
            } else {
               message.guild.channels.get("383589689296158725").leave();
           }
        } else if (message.content.startsWith(prefix + 'admNewDB')) {
            message.client.guilds.find("name", "Server secreto de Marco").channels.find("name", "databases").sendMessage('database vacía').then(m => {
                message.channel.send("Se ha creado el lienzo " + m.id + " para el servidor " + message.guild.id);
            });
        }  else if (message.content.startsWith(prefix + 'admReadDB')) {
            let entrada = message.content.split("\n");
            message.client.guilds.find("name", "Server secreto de Marco").channels.find("name", "databases").fetchMessage(pluralinfo.server["d"+message.guild.id][entrada[1]]).then(m => {
                m.edit('This is my new content!')
                message.channel.send(m.content);
            });
        }  else if (message.content.startsWith(prefix + 'admReplaceDB')) {
            let entrada = message.content.split("\n");
            let section = entrada.split(" ");
            message.client.guilds.find("name", "Server secreto de Marco").channels.find("name", "databases").fetchMessage(pluralinfo.server["d"+message.guild.id][section[1]]).then(m => {
                message.channel.send(m.content.slice(entrada[1].lenght);
            });
        }  else if (message.content.startsWith(prefix + 'analiza')) {
            message.channel.sendMessage('Tu id es ' + message.author.id);
        } else if (message.content.startsWith(prefix + 'tierna')) {
            message.channel.sendMessage('>u<', {file: "http://i0.kym-cdn.com/photos/images/newsfeed/001/246/976/007.gif"});
        } else
            if (message.content.startsWith(prefix + 'noticeame')) {
            message.member.addRole(message.guild.roles.find("name", "ad"), "comando");
            message.channel.sendMessage('Vale, te avisaré cuando se haga directo ^-^/');
        } else if (message.content.startsWith(prefix + 'unnoticeame')) {
            message.member.removeRole(message.guild.roles.find("name", "ad"), "comando");
            message.channel.sendMessage('Entiendo... perdoname si fuí muy pesada' +
                message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", "botsad"));
        } else if (message.content.startsWith(prefix + 'comandos') || message.content.startsWith(prefix + 'commands')) {
            message.channel.sendMessage('Para que preguntas eso? \nMis comandos están en los mensajes anclados de este canal.');
        } else if (message.content.startsWith(prefix + 'help') || message.content.startsWith(prefix + 'info')) {
            message.channel.sendMessage('Yo? pues... aún no tengo nombre...');
            message.channel.sendMessage('Soy un Bot creado por ᴍᴀʀᴄᴏᴩᴏʟᴇ mediante javascript y Discord.js\nAhora mismo estoy en la versión 0.0.15, puedes ver mi proceso en '
                + message.guild.channels.find("name", "proceso-del-bot") + "\n _Marcopole, actualizame! >:c_");
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
            if(entrada.length < 3){
                message.channel.sendMessage('Me parece que introduciste mal el comando...');
                message.channel.sendMessage('Despues de "m!hentai" introduce el nombre de la persona y seguido el fetiche que evaluar\nPor ejemplo: ``m!hentai @Marcopole sin camiseta``');
            } else if(entrada.length < 4){
                    message.channel.sendMessage('Me parece que aún te falta imaginación...');
            } else {
                let resguardo = 0;
                let correcto = 0;
                for(i = 0; i < entrada[3].length; i++){
                    if(resguardo != entrada[3].charCodeAt(i) && (
                        (entrada[3].charCodeAt(i) < 91 && entrada[3].charCodeAt(i) > 64) ||
                        (entrada[3].charCodeAt(i) < 123 && entrada[3].charCodeAt(i) > 96) ||
                        (entrada[3].charCodeAt(i) == 225 || entrada[3].charCodeAt(i) == 233 || entrada[3].charCodeAt(i) == 237 ||
                        entrada[3].charCodeAt(i) == 243 || entrada[3].charCodeAt(i) == 250 || entrada[3].charCodeAt(i) == 252))){
                        resguardo = entrada[3].charCodeAt(i);
                    } else {
                        correcto = correcto + 1;
                    }
                }
                if(correcto > 0){
                    message.channel.sendMessage('No puedo entender tu mensaje >n<\nSe encontraron '+ correcto + ' errores.');
                } else if(entrada[3] == "pene" || entrada[3] == "penis" || entrada[3] == "polla" || entrada[3] == "pito" || entrada[3] == "pirula" ||
                         entrada[3] == "péne" || entrada[3] == "pénis" || entrada[3] == "pólla" || entrada[3] == "pené" || entrada[3] == "penes" ||
                         entrada[3] == "péné" || entrada[3] == "penés" || entrada[3] == "pollá"){
                    if(entrada[2] == "mi" || entrada[2] == "un" || entrada[2] == "el"){
                        message.channel.sendMessage('Creo que no lo has escrito bién');
                    } else if(entrada[2] == "gran"){
                        message.channel.sendMessage('Ancha mejor, coso ser largo mucho!');
                    } else if(entrada.length < 5){
                        message.channel.sendMessage('Eso ha sido poco creativo');
                    } else {
                        message.channel.sendMessage(kap[(entrada[4].charCodeAt(0)+ "").slice(-1)]);
                    }
                } else {
                    message.channel.sendMessage(kap[(entrada[3].charCodeAt(0)+ "").slice(-1)]);
                }
            }
        } else if (message.content.startsWith(prefix + 'fastpoll')) {
            let entrada = message.content.split("\n");
            let opciones = 0;
            let emotinames = ["Oland_flag", "Mord_flag", "Gracan_flag", "Fora_flag", "Oland_ico", "Mord_ico", "Gracan_ico", "Fora_ico"];
            let envio = ("**Hey! " + message.author.username + " ha iniciado una votación!**");
            for(lain = 1; lain < entrada.length; lain++){
                if(entrada[lain].startsWith('- ') && opciones < 8){
                    envio = (envio + "\n" +
                             message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", emotinames[opciones])
                             + entrada[lain].slice(1));
                    opciones = opciones + 1;
                } else {
                    envio = (envio + "\n" + entrada[lain]);
                }
            }
            message.guild.channels.find("name", "chat-principal").send(envio).then(m => {
            //message.channel.send(envio).then(m => {
                for(let opt = 0; opt < opciones; opt++){
                    m.react(m.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", emotinames[opt]));
                }
            });
        }
    } else {
        if(message.member.roles.find("name", "Undead")){
            switch(Math.round(Math.random() * 12)) {
            case 1:
                message.member.addRole(message.guild.roles.find("name", "Alive!"), "comando");
                message.member.removeRole(message.guild.roles.find("name", "Undead"), "comando");
            break;
            default:
            
            }
        }
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + 'nuevodirecto') && message.channel.name == dialogchat) {
        message.guild.roles.find("name", "ad").edit({mentionable: true});
        let entrada = message.content.split(" ARTEIKA ");
        let salida = "\n";
        if(entrada[1] == "officiallinzet"){
            salida = salida + message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", "lunalinzet") +
                "``HEY! ATENCIÓN!``" + message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", "lunalinzet") +
                "\n **Que Linzet está en directo!!!**\n";
            if(entrada[2] == "Creative"){
                salida = salida + "Hoy toca dibujar por las risas! Va a estar " + entrada[3];
            } else {
                let weekday = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes","sabado", "domingo"];
                salida = salida + "Como es " + weekday[new Date().getDay()] + " hoy toca " + entrada[2] + "! \n _" + entrada[3] + "_";
            }
            salida = salida + "\n A que estás esperando? \n \n Pulsa aqui para unirte: " + entrada[4];
        } else if (entrada[1] == "binarypie3"){
            salida = salida + message.guild.emojis.find("name", "wagame") +
                "``HEY! ATENCIÓN!``" + message.guild.emojis.find("name", "wagame") +
                "\n **Que Binary está en directo!!!**\n" +
                "Hoy parece que nos trae algo de " + entrada[3] + " en " + entrada[2] +
                "\n A que estás esperando? \n \n Pulsa aqui para unirte: " + entrada[4];
        } else if (entrada[1] == "marcopole"){
            salida = salida + message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", "KappaFace") +
                "``HEY! ATENCIÓN!``" + message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", "KappaFace") +
                "\n **Que Marcopole está en directo!!!**\n" +
                "Hoy se encuentra " + entrada[3] +
                "\n A que estás esperando? \n \n Pulsa aqui para unirte: " + entrada[4];
                salida = salida + "\n Avisando a todos los " + message.guild.roles.find("name", "ad") + " :laughing:";
        } else {
            salida = salida + "streamer no reconocido";
        }
        message.guild.channels.find("name", "aviso⠐directos").sendMessage(salida);
        message.guild.roles.find("name", "ad").edit({mentionable: false});
    }
});
client.on('message', message => {
    if ((message.author.username == "MuxyBot" || message.author.username == "Skuld") && message.channel.name == dialogchat) {
        if(message.content.includes('marcopole just went live')){
            message.channel.sendMessage('tom!endirecto');
        }
    } else if (message.content.startsWith(prefix + 'endirecto') && message.channel.name == dialogchat) {
        message.guild.roles.find("name", "ad").edit({mentionable: true});
        let entrada = message.content.split(" ARTEIKA ");
        let salida = message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", "KappaFace") +
                "``HEY! ATENCIÓN!``" + message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", "KappaFace") +
                "\n **Que Marcopole está en directo!!!**\n" +
                entrada[3] +
                "\n \n A que estás esperando? \n Pulsa aqui para unirte:  https://www.twitch.tv/marcopole";
        salida = salida + "\n \n Avisando a todos los " + message.guild.roles.find("name", "ad") + " :laughing:";
        message.guild.channels.find("name", "aviso⠐directos").sendMessage(salida);
        message.guild.roles.find("name", "ad").edit({mentionable: false});
    }
});
client.on("guildMemberAdd", (member) => {
    member.addRole(member.guild.roles.find("name", "newbye"), "Por seguridad");
    member.addRole(member.guild.roles.find("name", "ad"), "Recien llegado");
});
client.on('messageUpdate', (omsg, nmsg) =>  {
    let rprt = "__Mensaje editado__ por _" + nmsg.author.username + "_ en " + nmsg.channel + " \n**``" + omsg.content + "``**\n\n**``" + nmsg.content + "``**";
    if(nmsg.author.username == "Howl"){
        let entrada = nmsg.content.split(" ");
        if(entrada[1] == ":gun:" && entrada[2] == ":skull:¡Has" && entrada[3] == "muerto!:skull:,"){
              //omsg.guild.channels.find("name", "log").sendMessage(entrada[0].joinedTimestamp);omsg.
              //guild.channels.find("name", "log").sendMessage(omsg.guild.members.get(entrada[0].slice(2, -1)));
            omsg.guild.members.get(entrada[0].slice(2, -1)).addRole(omsg.guild.roles.find("name", "Undead"), "comando");
            omsg.guild.channels.find("name", "log").sendMessage(omsg.guild.members.get(entrada[0].slice(2, -1)).user.username + " ha perdido la vida jugando a la ruleta");
            omsg.guild.members.get(entrada[0].slice(2, -1)).removeRole(omsg.guild.roles.find("name", "Alive!"), "murió jugando a la ruleta");
        } /*else if(entrada[0] == "Felicitaciones," && entrada[2] == "pescaste:"){
            omsg.guild.channels.find("name", "log").sendMessage("ha pescado");
        }*/ else if (Math.random() < 0.11) {
            omsg.guild.channels.find("name", "log").sendMessage("Howl sempai!!!");
        }
    } else {
        omsg.guild.channels.find("name", "log").sendMessage(rprt);
    }
});
client.on("messageDelete", message => {
    let rprt = "__Mensaje eliminado__ de _" + message.author.username + "_ en " + message.channel + " \n**``" + message.content + "``**";
    message.guild.channels.find("name", "log").sendMessage(rprt);
});
client.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel;
    let oldUserChannel = oldMember.voiceChannel;
    if(oldUserChannel === undefined && newUserChannel !== undefined) {
        newMember.addRole(newMember.guild.roles.find("name", "🔊"));
        newMember.guild.channels.find("name", "log").sendMessage(newMember.user.username + "entró en los chats de voz");
    } else if(newUserChannel === undefined){
        newMember.removeRole(newMember.guild.roles.find("name", "🔊"));
        newMember.guild.channels.find("name", "log").sendMessage(newMember.user.username + "salió de los chats de voz");
    }
});
/*

if (command === 'spec'){
        message.author.send("See or Change?");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content == "See") {
                message.channel.send("You Want To See Someones Spec OK!");
            } else if (message.content == "Change") {
                message.channel.send("You Want To Change Your Spec OK!");
            }
        }
    }
if(member.username.includes("a")){
        guild.channels.find("name", "recibimiento").sendMessage("tiene a");
    } else {
        guild.channels.find("name", "recibimientos").sendMessage("no tiene a");
    }
    
        let emotinames = ["Oland_flag", "Mord_flag", "Gracan_flag", "Fora_flag", "Oland_ico", "Mord_ico", "Gracan_ico", "Fora_ico"];
        let entrada = message.content.split(" ");
        let opciones = parseInt(entrada[2]);
        for(lain = 0; lain < opciones; lain++){
            message.client.user.lastMessage.react(message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", emotinames[lain]));
        }

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
    if (message.content.startsWith(prefix + 'fastpoll')) {
        let entrada = message.content.split("\n");
        let opciones = 0;
        let emotinames = ["Oland_flag", "Mord_flag", "Gracan_flag", "Fora_flag", "Oland_ico", "Mord_ico", "Gracan_ico", "Fora_ico"];
        let envio = ("Nueva votación? ** Hey! " + message.author.username + " ha iniciado una votación!**");
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
        //envio = ("Fastoll indefinido " + opciones + "RekTeaQuerry\n" + envio);
        const collector = new Discord.MessageCollector(message.guild.channels.find("name", "chatprincipal"), pl => pl.author.username === message.client.user.username, { time: 10000 });
        collector.on('collect', message => {
            message.react(message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", "Oland_flag"));
        })
        setTimeout(function(){
            message.guild.channels.find("name", "chatprincipal").sendMessage(envio);
        }, 3000);
    } else if (message.content == 'spec'){
        message.channel.sendMessage("See or Change?");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        collector.on('collect', message => {
            if (message.content == "See") {
                message.channel.send("You Want To See Someones Spec OK!");
            } else if (message.content == "Change") {
                message.channel.send("You Want To Change Your Spec OK!");
            }
        })
        message.channel.sendMessage('Soy fuerte!');
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
        envio = ("Fastoll indefinido " + opciones + "RekTeaQuerry\n" + envio);
        message.guild.channels.find("name", "chatprincipal").sendMessage(envio);
    } else if (message.author.username == message.client.user.username
               && message.content.startsWith("Fastoll indefinido")){
        let entrada = message.content.split("RekTeaQuerry");
        message.edit(entrada[1]);
        message.react(message.client.guilds.find("name", "Server secreto de Marco").emojis.find("name", "Oland_flag"));
    } else if (message.content == 'spec'){
        message.channel.sendMessage("See or Change?");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        collector.on('collect', message => {
            if (message.content == "See") {
                message.channel.send("You Want To See Someones Spec OK!");
            } else if (message.content == "Change") {
                message.channel.send("You Want To Change Your Spec OK!");
            }
        })
        message.channel.sendMessage('Soy fuerte!');
    }
});


Hentai original
else if (message.content.startsWith(prefix + 'hentai')) {
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
            }

*/
// THIS  IS  THE  WAE
client.login(process.env.BOT_TOKEN);
