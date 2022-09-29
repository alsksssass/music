const { createAudioResource, createAudioPlayer, joinVoiceChannel, NoSubscriberBehavior, AudioPlayerStatus, generateDependencyReport, getVoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const fs = require('node:fs');
const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, ClientUser, User, time, GuildChannel, GuildManager, MessageManager, GuildMemberManager, GuildBanManager, GuildBan, GuildStickerManager, PermissionsBitField, PermissionOverwriteManager, MessageFlagsBitField, GuildMemberRoleManager, GuildMember, MessageReaction } = require('discord.js');
const { record, playcode, owner, character1, character2, character3, character4, character5, character6, botplay, botstan, guildId, chclue1, chclue2, chclue3, chclue4, chclue5, note1 } = require('../config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildVoiceStates] });
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
const today = new Date();
const date = "" + today.getFullYear() +"년" + today.getMonth() + "월" + today.getDate() + "일" + today.getHours() + "시" + today.getMinutes() + "분";




module.exports = {
  name: "올청소",
  async execute(message, args, client ) {
    const arguments = args.shift(1)
    const channel1 = client.channels.cache.get(chclue1);//윤새롬
    const channel2 = client.channels.cache.get(chclue2);//한호랑
    const channel3 = client.channels.cache.get(chclue3);//유수호
    const channel4 = client.channels.cache.get(chclue4);//오정성
    const channel5 = client.channels.cache.get(chclue5);//곽편집
    const channel6 = client.channels.cache.get(note1);//추리노트
         ////저장정보 불러오는 부분
         var cluedata = '0011005500'
         var database = message.guild.ownerId
         var uid = message.author.id
         const cfilePath = `./data/${uid}.json`;
         const dfilePath = `./data/${database}.json`;
         const efilePath = `./data/${cluedata}.json`;
         !fs.existsSync(cfilePath) ? fs.writeFileSync(cfilePath, JSON.stringify({})) : null;
         !fs.existsSync(dfilePath) ? fs.writeFileSync(dfilePath, JSON.stringify({})) : null;
         !fs.existsSync(efilePath) ? fs.writeFileSync(efilePath, JSON.stringify({})) : null;
       const user = JSON.parse(fs.readFileSync(cfilePath, "utf-8"));
         const admin = JSON.parse(fs.readFileSync(dfilePath, "utf-8"));
         const clue = JSON.parse(fs.readFileSync(efilePath, "utf-8"));
    ///////////



///채널내 모든메시지 삭제
let fetched1;
let fetched2;
let fetched3;
let fetched4;
let fetched5;
let fetched6;
console.log('0')


do {
  await wait(1000)
  fetched1 = await channel1.messages.fetch({limit: 99}).catch(console.warn = () => {});
  await channel1.bulkDelete(fetched1).catch(console.warn = () => {});
  console.log('1')
  
  await wait(1000)
  fetched2 = await channel2.messages.fetch({limit: 99}).catch(console.warn = () => {});
  await channel2.bulkDelete(fetched2).catch(console.warn = () => {});
  console.log('2')
  
  await wait(1000)
  fetched3 = await channel3.messages.fetch({limit: 99}).catch(console.warn = () => {});
  await channel3.bulkDelete(fetched3).catch(console.warn = () => {});
  console.log('3')
  
  await wait(1000)
  fetched4 = await channel4.messages.fetch({limit: 99}).catch(console.warn = () => {});
  await channel4.bulkDelete(fetched4).catch(console.warn = () => {});
  console.log('4')
  
  await wait(1000)
  fetched5 = await channel5.messages.fetch({limit: 99}).catch(console.warn = () => {});
  await channel5.bulkDelete(fetched5).catch(console.warn = () => {});
  console.log('5')
  
  await wait(1000)
  fetched6 = await channel6.messages.fetch({limit: 99}).catch(console.warn = () => {});
  await channel6.bulkDelete(fetched6).catch(console.warn = () => {});
  console.log('6')
  
  await wait(1000)
}
while((fetched1.size+fetched2.size+fetched3.size+fetched4.size+fetched5.size+fetched6.size) >= 2);
console.log('끝')
}


}
