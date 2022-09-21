const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, ClientUser, User, time, GuildChannel, GuildManager, MessageManager, GuildMemberManager, GuildBanManager, GuildBan, GuildStickerManager, PermissionsBitField, PermissionOverwriteManager, MessageFlagsBitField, GuildMemberRoleManager, gu } = require('discord.js');
const { record } = require('../config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans] });
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
module.exports = {
    name: "롤",
    async execute(message, args, client, roll1) {
      
      try {
        const arguments = args.shift(1)
    if(!arguments == "목성"&&arguments == "화성"&&arguments == "지구"&&arguments == "금성"&&arguments == "수성") return message.channel.send("롤 확인을 다시해 주세요")
    message.member.setNickname(arguments)
    user1 = await message.author.username
    roll1 = arguments
    console.log(roll1)
    const message1 = await client.channels.cache.get(record)
    await message1.send(`>>> ${arguments}  역 \n${user1}  님`);
    await message.author.send(arguments+"역의 롤지입니다.")
    if(arguments == "수성")await message.author.send({ files: ['./roll/수성.txt'] });
    if(arguments == "금성")await message.author.send({ files: ['./roll/금성.txt'] });
    if(arguments == "지구")await message.author.send({ files: ['./roll/지구.txt'] });
    if(arguments == "화성")await message.author.send({ files: ['./roll/화성.txt'] });
    if(arguments == "목성")await message.author.send({ files: ['./roll/목성.txt'] });
    

} catch (err) {
  console.error(err);
  
  
}
},
};