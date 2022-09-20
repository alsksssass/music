

const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, ClientUser, User, time, GuildChannel, GuildManager, MessageManager, GuildMemberManager, GuildBanManager, GuildBan, GuildStickerManager, PermissionsBitField, PermissionOverwriteManager, MessageFlagsBitField, GuildMemberRoleManager} = require('discord.js');
const { record } = require('../config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans] });
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
module.exports = {
    name: "닉",
    async execute(message, args, client) {

const member = message.guild.members.cache.get(message.author.id)
console.log(message.author.id)
if (!member) return message.reply("타겟지정 실패");


if (!arguments) return message.reply("이름지정");

try {
    const arguments = args.shift(1)
  member.setNickname(arguments);
}catch (error) {
		console.error(error);
		
	}
},
};