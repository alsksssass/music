const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, GuildMember, ClientUser, User } = require('discord.js');
const { record } = require('../config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent] });
module.exports = {
    name: "테스트",
    async execute(message, args) {
    const content = args.shift(1)
    const msg = await message.channel.send(content)
msg.react('🍎');
}
}