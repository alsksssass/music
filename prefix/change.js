
const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, GuildMember, ClientUser, User } = require('discord.js');
const { record } = require('../config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent] });
module.exports = {
    name: "롤",
    async execute(message, args) {
     const content = args.shift(1)
     user = await message.author.tag
     console.log(user)
     const channel = await client.channels.cache.get('1020656369021489182')
     get('1020656369021489182').send('"캐릭터 롤"+user+"content"');
     }
       
    

}