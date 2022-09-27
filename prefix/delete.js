
const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, GuildMember, ClientUser, User, PermissionsBitField } = require('discord.js');
const { record } = require('../config.json');
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] });


module.exports = {
    name: "청소",
    async execute(message, args, guild) {
        //if (!client.users.cache.find(user => user.id === '317655426868969482')) return message.channel.send('권한 없음')////유저롤
        //if(!message.member.roles.cache.has('1021443417135382660')) return message.channel.send('권한 없음')///관리자롤 
        
    try{
        if(message.author.id != message.guild.ownerId) {
            message.channel.send('권한 없음')///관리자롤  
            return
            }
        else{
        console.log(message.author.id)
        console.log(message.guild.ownerId)
    const amount = parseInt(args.shift(1)) + 1;
    console.log(amount)
     if (isNaN(amount)) {
         return message.channel.send('숫자만 입력!');
     } else if (amount < 2 || amount > 100) {
         return message.channel.send('2이상 99이하의 숫자만 입력');
     }
     else if (amount>2 || amount < 100){
        await message.channel.bulkDelete(amount, true).then(messages => message.channel.send(`메시지 **${messages.size}** 개 삭제됨`))
        .catch(console.error);
        await wait(1000)
        await message.channel.bulkDelete(1)
     }
    }
    }
    catch (err) {
        console.error(err);
    }
    
    

    }
}

   