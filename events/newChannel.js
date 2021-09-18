module.exports = {
	name: 'channelCreate',
	execute(channel) {
		channel.send(`Cool new channel in ${channel.guild}! Go checkout ${channel.name}.`);
	},
};