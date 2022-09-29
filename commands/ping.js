const { Client, GatewayIntentBits, Collection, GuildMember, PermissionFlagsBits, Message, MessageMentions, SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
const { createAudioResource, createAudioPlayer, joinVoiceChannel, NoSubscriberBehavior, AudioPlayerStatus, generateDependencyReport, getVoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const { record } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction, message) {
		connection = joinVoiceChannel({
			channelId: '981144982201171992',
			guildId: interaction.guildId,
			adapterCreator: interaction.channel.guild.voiceAdapterCreator,
		});

console.log(interaction.channelId)
console.log(interaction.guildId)
console.log('노래')
const player = createAudioPlayer()
const resource = createAudioResource('./music/calling.mp3')


player.play(resource, {seek: 0, volume: 1.0})
connection.subscribe(player);

player.on(AudioPlayerStatus.Idle, () => {
  connection.destroy();
});
	},
};

