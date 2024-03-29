const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with server information.'),
	async execute(interaction) {
		await interaction.reply(`${interaction.guild.name} has ${interaction.guild.memberCount} members.`);
	},
};