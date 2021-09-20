const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dad')
		.setDescription('Replies with a dad joke from r/dadjokes'),
	async execute(interaction) {
		const res = await fetch('https://reddit.com/r/dadjokes/.json');
		const data = await res.json();
		const children = data.data.children;
		const randomPost = children[Math.floor(Math.random() * children.length)];
		const intro = randomPost.data.title;
		const punchline = randomPost.data.selftext;
		await interaction.reply(`${intro} \n ... \n ${punchline}`);
	},
};