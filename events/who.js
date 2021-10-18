module.exports = {
	name: 'messageCreate',
	async execute(message) {
		const responseObject = {
			'who?': 'cares LOL',
			'when?': 'did we ask LOL',
			'why?': 'no why do we care LMAO',
		};
		if (responseObject[message.content.toLowerCase()]) {
			message.channel.send(responseObject[message.content]);
		}
	},
};
