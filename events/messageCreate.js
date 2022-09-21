const config = require("../config.json");

module.exports = {
    name: "messageCreate", 
    on: true, 
    async execute(msg, client) {
	////if(!message.member.permissions.has('Administrator')) return;
	if(!message.content.startsWith(prefix)) return;
	if(message.author.bot) return;
	/////????????????????? if (message.guild.ownerId) return
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift();
	const coget = client.commands.get(command);
	if(!client.commands.has(command)) return

	try{
		coget.execute(message, args, client);


	}
	catch(error){
		
console.error(error);
	}
}
}