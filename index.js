const { Client, Intents } = require('discord.js');

const client = new Client({intents: [Intents.FLAGS.GUILDS]});

const { token } = require('../disBot/env/config');

client.once('ready', ()=> {
    console.log('Chiaki is online!');
});



client.login(token);