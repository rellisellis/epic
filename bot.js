const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login('NTY0MTExOTU3Nzc5ODA4Mjg3.XLDQqQ.371waqHDngBz3z6FA6yxREgjLbg');//where BOT_TOKEN is the token of our bot
