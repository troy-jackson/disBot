const { Client, Intents } = require('discord.js');
const { token } = require('./config');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


client.once('ready', () => {
	console.log('Chiaki is online!');
});


client.login(token);