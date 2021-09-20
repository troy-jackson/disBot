const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('urban')
		.setDescription('check urban dictionary for a term'),
	async execute(interaction) {
		const term = interaction.options.getString('term');
		const query = new URLSearchParams({ term });

		const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`)
			.then(response => response.json());
		if (!list.length) {
			return interaction.reply(`No results found for **${term}**.`);
		}

		interaction.reply(`**${term}**: ${list[0].definition}`);
	},
};