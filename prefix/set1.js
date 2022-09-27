const { createAudioResource, createAudioPlayer, joinVoiceChannel, NoSubscriberBehavior, AudioPlayerStatus, generateDependencyReport, getVoiceConnection, VoiceConnectionStatus, StreamType } = require('@discordjs/voice');
const fs = require('node:fs');
const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, ClientUser, User, time, GuildChannel, GuildManager, MessageManager, GuildMemberManager, GuildBanManager, GuildBan, GuildStickerManager, PermissionsBitField, PermissionOverwriteManager, MessageFlagsBitField, GuildMemberRoleManager, GuildMember, MessageReaction } = require('discord.js');
const { record, playcode, owner, character1, character2, character3, character4, character5, character6, botplay, botstan, guildId, chclue1, chclue2, chclue3, chclue4, chclue5 } = require('../config.json');
const { createReadStream } = require('node:fs');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildVoiceStates] });
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
const today = new Date();
const date = "" + today.getFullYear() +"년" + today.getMonth() + "월" + today.getDate() + "일" + today.getHours() + "시" + today.getMinutes() + "분";

var clueid01 = 0
var clueid02 = 0
var clueid03 = 0
var clueid04 = 0
var clueid05 = 0
var clueid06 = 0
var clueid07 = 0
var clueid08 = 0
var clueid09 = 0
var clueid10 = 0
var clueid11 = 0
var clueid12 = 0
var clueid13 = 0
var clueid14 = 0
var clueid15 = 0
var clueid16 = 0
var clueid17 = 0
var clueid18 = 0
var clueid19 = 0
var clueid20 = 0
var clueid21 = 0
var clueid22 = 0
var clueid23 = 0
var clueid24 = 0
var clueid25 = 0
var clueid26 = 0
var clueid27 = 0
var clueid28 = 0
var clueid29 = 0
var clueid30 = 0
var clueid31 = 0
var clueid32 = 0
var clueid33 = 0
var clueid34 = 0
var clueid35 = 0
var clueid36 = 0
var clueid37 = 0
var clueid38 = 0
var clueid39 = 0
var clueid40 = 0
var clueid41 = 0
var clueid42 = 0
var clueid43 = 0
var clueid44 = 0
var clueid45 = 0
var clueid46 = 0








module.exports = {
  name: "세팅",
  async execute(message, args, client ) {
     ////저장정보 불러오는 부분
     const arguments = args.shift(1)
     var database = '0011005500'
     var uid = message.author.id
     const cfilePath = `./data/${uid}.json`;
     const dfilePath = `./data/${database}.json`;
     !fs.existsSync(cfilePath) ? fs.writeFileSync(cfilePath, JSON.stringify({})) : null;
     !fs.existsSync(dfilePath) ? fs.writeFileSync(dfilePath, JSON.stringify({})) : null;
   const user = JSON.parse(fs.readFileSync(cfilePath, "utf-8"));
     const clue = JSON.parse(fs.readFileSync(dfilePath, "utf-8"));
///////////
  try {
    
    await message.channel.bulkDelete(1)
    const channel = client.channels.cache.get(chclue1);
const channel1 = client.channels.cache.get(chclue2);
const channel2 = client.channels.cache.get(chclue3);
const channel3 = client.channels.cache.get(chclue4);
const channel4 = client.channels.cache.get(chclue5);

    //await message.channel.send({ files: ['./roll/Preview.mp4'] });
    
    await channel.send('시체 : 정수리에 깊게 패인 흔적이 있다. 다량의 피가 옷과 바닥에 흘렀다.\n바닥에는 쏟아진 물건들로 엉망이다.\n생방송 라이브영상은 8시에 시작되어서 8시 15분 종료되었다.')
    await channel.send('> **윤새롬**')
    await channel.send('**010> 다이어리**')
    .then(sent => { // 'sent' is that message you just sent
        clueid01 = sent.id;
    })
   await channel.send('**020> 통장**')
   .then(sent => { // 'sent' is that message you just sent
    clueid02 = sent.id;
})
    await channel.send('**030> 흰 봉투**')
    .then(sent => { // 'sent' is that message you just sent
        clueid03 = sent.id;
    })
    await channel.send('**040> 계약서**')
    .then(sent => { // 'sent' is that message you just sent
        clueid04 = sent.id;
    })
    await channel.send('**050> 골든버튼**')
    .then(sent => { // 'sent' is that message you just sent
        clueid05 = sent.id;
    })
    await channel.send('**060> 편지**')
    .then(sent => { // 'sent' is that message you just sent
        clueid06 = sent.id;
    })
    await channel.send('**070> 카메라**')
    .then(sent => { // 'sent' is that message you just sent
        clueid07 = sent.id;
    })
    await channel.send('**080 포스트잇**')
    .then(sent => { // 'sent' is that message you just sent
        clueid08 = sent.id;
    })
    await channel.send('**090 새롬의 휴대폰 문자내역**')
    .then(sent => { // 'sent' is that message you just sent
        clueid09 = sent.id;
    })
    await channel.send('-----------------------------')
  
 
    await channel1.send('> **1. 한호랑**')
    .then(sent => { // 'sent' is that message you just sent
        clueid10 = sent.id;
    })
    await channel1.send('**110> 타로유튜브 댓글**')
    .then(sent => { // 'sent' is that message you just sent
        clueid11 = sent.id;
    })
    await channel1.send('**120> 새롬의 연락**')
    .then(sent => { // 'sent' is that message you just sent
        clueid12 = sent.id;
    })
    await channel1.send('**130> 노트북**')
    .then(sent => { // 'sent' is that message you just sent
        clueid13 = sent.id;
    })
    await channel1.send('**140> 그래프**')
    .then(sent => { // 'sent' is that message you just sent
        clueid14 = sent.id;
    })
    await channel1.send('**150> 신체검사**')
    .then(sent => { // 'sent' is that message you just sent
        clueid15 = sent.id;
    })
    await channel1.send('**160> CCTV**')
    .then(sent => { // 'sent' is that message you just sent
        clueid16 = sent.id;
    })
    await channel1.send('**170> SD카드**')
    .then(sent => { // 'sent' is that message you just sent
        clueid17 = sent.id;
    })
    await channel1.send('**180> 트렁크**')
    .then(sent => { // 'sent' is that message you just sent
        clueid18 = sent.id;
    })
    await channel1.send('**190> 진단서**')
    .then(sent => { // 'sent' is that message you just sent
        clueid19 = sent.id;
    })
    await channel1.send('-----------------------------')

    await channel2.send('> **2. 유수호**')
    .then(sent => { // 'sent' is that message you just sent
        clueid20 = sent.id;
    })
    await channel2.send('**210> 수호의 유튜브 계정**')
    .then(sent => { // 'sent' is that message you just sent
        clueid121 = sent.id;
    })
    await channel2.send('**220> 주머니 **')
    .then(sent => { // 'sent' is that message you just sent
        clueid22 = sent.id;
    })
    await channel2.send('**230> 스크랩집**')
    .then(sent => { // 'sent' is that message you just sent
        clueid23 = sent.id;
    })
    await channel2.send('**240> 영수증**')
    .then(sent => { // 'sent' is that message you just sent
        clueid24 = sent.id;
    })
    await channel2.send('**250> 신체검사**')
    .then(sent => { // 'sent' is that message you just sent
        clueid25 = sent.id;
    })
    await channel2.send('**260> 사진**')
    .then(sent => { // 'sent' is that message you just sent
        clueid26 = sent.id;
    })
    await channel2.send('**270> 배달 내역**')
    .then(sent => { // 'sent' is that message you just sent
        clueid27 = sent.id;
    })
    await channel2.send('**280> 집앞**')
    .then(sent => { // 'sent' is that message you just sent
        clueid28 = sent.id;
    })
    await channel2.send('-----------------------------')

    await channel3.send('> **3. 오정성**')
    .then(sent => { // 'sent' is that message you just sent
        clueid29 = sent.id;
    })
    await channel3.send('**310> 문자**')
    .then(sent => { // 'sent' is that message you just sent
        clueid30 = sent.id;
    })
    await channel3.send('**320> 달력**')
    .then(sent => { // 'sent' is that message you just sent
        clueid31 = sent.id;
    })
    await channel3.send('**330> 도시락**')
    .then(sent => { // 'sent' is that message you just sent
        clueid32 = sent.id;
    })
    await channel3.send('**340> 신체검사**')
    .then(sent => { // 'sent' is that message you just sent
        clueid33 = sent.id;
    })
    await channel3.send('**350> 망치**')
    .then(sent => { // 'sent' is that message you just sent
        clueid34 = sent.id;
    })
    await channel3.send('**360> 증언**')
    .then(sent => { // 'sent' is that message you just sent
        clueid35 = sent.id;
    })
    await channel3.send('**370> 일기**')
    .then(sent => { // 'sent' is that message you just sent
        clueid36 = sent.id;
    })
    await channel3.send('**380> 집안**')
    .then(sent => { // 'sent' is that message you just sent
        clueid37 = sent.id;
    })
    await channel3.send('-----------------------------')

    await channel4.send('> **4. 곽편집**')
    .then(sent => { // 'sent' is that message you just sent
        clueid38 = sent.id;
    })
    await channel4.send('**410> 계약서**')
    .then(sent => { // 'sent' is that message you just sent
        clueid39 = sent.id;
    })
    await channel4.send('**420> 통장**')
    .then(sent => { // 'sent' is that message you just sent
        clueid40 = sent.id;
    })
    await channel4.send('**430> 노트북**')
    .then(sent => { // 'sent' is that message you just sent
        clueid41 = sent.id;
    })
    await channel4.send('**440> 영수증**')
    .then(sent => { // 'sent' is that message you just sent
        clueid42 = sent.id;
    })
    await channel4.send('**450> 신체검사**')
    .then(sent => { // 'sent' is that message you just sent
        clueid43 = sent.id;
    })
    await channel4.send('**460> SD카드**')
    .then(sent => { // 'sent' is that message you just sent
        clueid44 = sent.id;
    })
    await channel4.send('**470> 집**')
    .then(sent => { // 'sent' is that message you just sent
        clueid45 = sent.id;
    })
    await channel4.send('**480> 블로그**')
    .then(sent => { // 'sent' is that message you just sent
        clueid46 = sent.id;
    })
    await channel4.send('-----------------------------')
    
    database = {

        dclueid01 : clueid01,
        dclueid02 : clueid02,
        dclueid03 : clueid03,
        dclueid04 : clueid04,
        dclueid05 : clueid05,
        dclueid06 : clueid06,
        dclueid07 : clueid07,
        dclueid08 : clueid08,
        dclueid09 : clueid09,
        dclueid10 : clueid10,
        dclueid11 : clueid11,
        dclueid12 : clueid12,
        dclueid13 : clueid13,
        dclueid14 : clueid14,
        dclueid15 : clueid15,
        dclueid16 : clueid16,
        dclueid17 : clueid17,
        dclueid18 : clueid18,
        dclueid19 : clueid19,
        dclueid20 : clueid20,
        dclueid21 : clueid21,
        dclueid22 : clueid22,
        dclueid23 : clueid23,
        dclueid24 : clueid24,
        dclueid25 : clueid25,
        dclueid26 : clueid26,
        dclueid27 : clueid27,
        dclueid28 : clueid28,
        dclueid29 : clueid29,
        dclueid30 : clueid30,
        dclueid31 : clueid31,
        dclueid32 : clueid32,
        dclueid33 : clueid33,
        dclueid34 : clueid34,
        dclueid35 : clueid35,
        dclueid36 : clueid36,
        dclueid37 : clueid37,
        dclueid38 : clueid38,
        dclueid39 : clueid39,
        dclueid40 : clueid40,
        dclueid41 : clueid41,
        dclueid42 : clueid42,
        dclueid43 : clueid43,
        dclueid44 : clueid44,
        dclueid45 : clueid45,
        dclueid46 : clueid46
        
        }
 fs.writeFileSync(dfilePath, JSON.stringify(database));
 
} catch (error) {
    console.error(error);
    
  }
  

  }}