const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
module.exports = {
	data: new SlashCommandBuilder()
		.setName('urban')
		.setDescription('check urban dictionary for a term')
		.addStringOption(option =>
			option.setName('term')
				.setDescription('the term you want to search for')
				.setRequired(true)),
	async execute(interaction) {
		const term = interaction.options.get('term').value;
		const query = new URLSearchParams({ term });
		const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`)
			.then(response => response.json());
		if (!list.length) {
			return interaction.reply(`No results found for **${term}**.`);
		}

		const [answer] = list;

		const embed = new MessageEmbed()
			.setColor('#EFFF00')
			.setTitle(answer.word)
			.setURL(answer.permalink)
			.addFields(
				{ name: 'Definition', value: trim(answer.definition, 1024) },
				{ name: 'Example', value: trim(answer.example, 1024) },
			);

		interaction.reply({ embeds: [embed] });
	},
};