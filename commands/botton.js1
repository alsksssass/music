const { Client, GatewayIntentBits, Collection, GuildMember, PermissionFlagsBits, SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });
const { record } = require('../config.json');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await client.channels.cache.get('1020656369021489182').send('dd')

	},
};