const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, GuildMember } = require('discord.js');

module.exports = {
    name: "타이머",
    async execute(message, args) {
		if(message.member.hasPermission("ADMINISTRATOR"))////어드민 퍼미션
		////if(!message.member.guild.roles.cache.find(role => role.name === 'admin')) return;
        ggg=args.shift(1)
		let timecc = 10
	  var timer = setInterval(() => {
		  (timecc --)
		  .catch(console.warn = () => {});
		  
		  if (timecc === 0) {
			  clearInterval(timer)
			  .catch(console.warn = () => {});
			  }	
}, 1000)
	}
	
}