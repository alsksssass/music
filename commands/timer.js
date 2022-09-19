const { SlashCommandBuilder, Message } = require('discord.js');
const { guildId, musicChannelId, prefix } = require('../config.json');
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
module.exports = {
	data: new SlashCommandBuilder()
		.setName('timer')
		.setDescription('???')
		.addNumberOption(option => option.setName('num').setDescription('값')),
	async execute(interaction) {
		
		const number = interaction.options.getNumber('num');

		let timecc = number*60
		await interaction.reply("⏳"+parseInt((timecc / 60)/60)+"시간"+parseInt((timecc / 60)%60)+"분"+(timecc % 60)+"초 타이머 시작")
		var timer = setInterval(() => {
			timecc -= 1
			interaction.editReply({ content: "⏳"+parseInt((timecc / 60)/60)+"시간"+parseInt((timecc / 60)%60)+"분"+(timecc % 60)+"초남음" })
			.catch(console.error);
			if (timecc === 0) {
				clearInterval(timer);
				interaction.editReply({ content: "⌛"+"시간종료!" })
				.catch(console.error);
				
				
			  }	
}, 1000)
}

	
};
