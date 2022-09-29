module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`준비 ${client.user.tag}`);
	},
};