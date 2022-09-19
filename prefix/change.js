
const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, GuildMember, ClientUser, User, time } = require('discord.js');
const { record } = require('../config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent] });
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
module.exports = {
    name: "롤",
    async execute(message, args) {
     const content = args.shift(1)
     user = await message.author.tag
     user2 = await message.author.username
     console.log(user)
     message.channel.send(content+user+user2)
    await client.channels.users.get('348615330282733578').send("캐릭터 롤"+user+content);
    }
}
