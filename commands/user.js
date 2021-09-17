const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user information.'),
	async execute(interaction) {
		await interaction.reply(`${interaction.user.tag} was created at ${interaction.user.createdAt}.`);
	},
};