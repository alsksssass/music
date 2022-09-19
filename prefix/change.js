

const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, GuildMember, ClientUser, User, time, GuildChannel, GuildManager, MessageManager, GuildMemberManager } = require('discord.js');
const { record } = require('../config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
module.exports = {
    name: "롤",
    async execute(message, args, client, nickname, setNickname) {
     const content = args.shift(1)
     user = await message.author.tag
     user2 = await message.author.username
     console.log(user)
     message.channel.send(content+user+user2)
    const message1 = await client.channels.cache.get(record)
    await message1.send(user)
    console.log(content)
if(content == '김지한'){
}
}
}
