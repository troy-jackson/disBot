const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);

module.exports = {

	data: new SlashCommandBuilder()
		.setName('spincycle')
		.setDescription('Clean up someone\'s act')
		.addUserOption(option => option.setName('target').setDescription('The dirty lil\' gamer to clean')),
	async execute(interaction) {
		const washer_channel = await interaction.guild.channels.fetch('649081115784773636');
		const dryer_channel = await interaction.guild.channels.fetch('683514060712837180');
		const target = interaction.options.getUser('target');
		const member = interaction.member.guild.members.cache.find(mem => mem.id === target.id);
		const firstChannel = member.voice.channelId;
		await member.voice.setChannel(washer_channel);
		await wait(5000);
		await member.voice.setChannel(dryer_channel);
		await wait(5000);
		await member.voice.setChannel(firstChannel);
		await interaction.reply(`${member.user.username} is clean.`);
	},
};