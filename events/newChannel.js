module.exports = {
	name: 'channelCreate',
	execute(channel) {
        console.log(channel);
		// client.channels.get('general').send(`Cool new channel in ${channel.guild}! Go checkout #${channel.name}.`);
	},
};