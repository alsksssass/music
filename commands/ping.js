const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;///딜레이 구문

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!')
		.addNumberOption(option => option.setName('num').setDescription('값')),
	async execute(interaction) {
		const number = interaction.options.getNumber('num');
		let time = number
		await interaction.reply(parseInt(time / 60)+"분"+(time % 60)+"초 타이머 시작")
		//await interaction.reply('바뀜');
		//await wait(2000);
		//await interaction.editReply({ content: "이건어때" });
		var timer = setInterval(() => {
			time --
			interaction.editReply({ content: parseInt(time / 60)+"분"+(time % 60)+"초남음" });
			if (time === 0) {
				clearInterval(timer);
				interaction.editReply({ content: "시간종료" });
			  }	
}, 1000
	)}
	
};