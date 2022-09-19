const { SlashCommandBuilder } = require('@discordjs/builders');
const { generateDependencyReport, AudioPlayerStatus, joinVoiceChannel, createAudioResource, createAudioPlayer, getVoiceConnection, NoSubscriberBehavior  } = require('discordjs/voice');
const { guildId, musicChannelId } = require('../config.json');

const player = createAudioPlayer();
module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Plays audio in the music VC'),
	async execute(interaction, client) {
		const connection = joinVoiceChannel({
			channelId: channel.id,
			guildId: channel.guild.id,
			adapterCreator: channel.guild.voiceAdapterCreator,
		});
		const resource = createAudioResource('../music/music/123.mp3');
		const player = createAudioPlayer({
			behaviors: {
				noSubscriber: NoSubscriberBehavior.Pause,
			},
		});
	}
};