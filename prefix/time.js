const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, GuildMember } = require('discord.js');

module.exports = {
    name: "타이머",
    async execute(message, args) {
		if(message.member.hasPermission("ADMINISTRATOR"))////어드민 퍼미션
		////if(!message.member.guild.roles.cache.find(role => role.name === 'admin')) return;
        ggg=args.shift(1)
		let timecc = 10*60
	  const tic = await message.channel.send("⏳"+(timecc % 60)+"초 타이머 시작")
	  var timer = setInterval(() => {
		  timecc --
		  tic.edit({ content: "⏳"+(timecc % 60)+"초남음" })
		  .catch(console.warn = () => {});
		  
		  if (timecc === 0) {
			  clearInterval(timer);
			  tic.edit({ content: "⌛"+"시간종료!" })
			  .catch(console.warn = () => {});
			  }	
}, 1000)
	}
	
}