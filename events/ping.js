client.on('messageCreate', (message) => {
	if (message.author.bot) return; //return if the author is a bot
	if (message.content === '!ping') {
	   console.log('Pong!') //execute command code here
	}
 });