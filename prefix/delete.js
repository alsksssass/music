
const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, GuildMember, ClientUser, User } = require('discord.js');
const { record } = require('../config.json');
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent] });
module.exports = {
    name: "청소",
    async execute(message, args) {
     const amount = parseInt(args.shift(1)) + 1;
    console.log(amount)
     await message.channel.bulkDelete(amount, true);
     await message.channel.send(amount-1+"개 삭제됨")
     await wait(1000)
     await message.channel.bulkDelete(1)
     if (isNaN(amount)) {
         return message.reply('숫자만 입력!');
     } else if (amount < 2 || amount > 100) {
         return message.reply('2이상 99이하의 숫자만 입력');
     }
    }
    
    

}