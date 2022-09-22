

const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, GuildMember, ClientUser, User, time, GuildChannel, GuildManager, MessageManager, GuildMemberManager, GuildBanManager, GuildBan, GuildStickerManager, PermissionsBitField, PermissionOverwriteManager, MessageFlagsBitField } = require('discord.js');
const { record } = require('../config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans] });
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
module.exports = {
    name: "1롤",
    async execute(message, args, client) {
     const content = args.shift(2)
     user1 = await message.author.tag
     user2 = await message.author.username
     console.log(user1)
     message.channel.send(content+user1+user2)
    const message1 = await client.channels.cache.get(record)
    await message1.send(user1)
    console.log(content)
    if (content == '김지한'){
    /////message.author.send("Welcome to the clan" + "<@" +message.author.id+">")////////////////dm메시지 보내는 코드
    if (!message.member.permissions.has('perm')) return message.channel.send('권한없음')
    if (!message.mentions.users.fist()) return message.channel.send('타겟지정')
    const user = await message.guild.members.cache.get('995601947509927946')
    const name = content
    if (!user.kickable) return message.channel.send('닉네임 바꿀수 없는권한')
    await user.setNickname('dd')
}
}
}
