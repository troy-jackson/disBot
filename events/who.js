module.exports = {
	name: 'messageCreate',
	async execute(message) {
		const text = message.content.toLowerCase();
		const responseObject = {
			'who?': 'cares LOL',
			'when?': 'did we ask LOL',
			'why?': 'no why do we care LMAO',
		};
		if (responseObject[text]) {
			message.channel.send(responseObject[text]);
		}
	},
};
