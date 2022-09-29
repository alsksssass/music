const { createAudioResource, createAudioPlayer, joinVoiceChannel, NoSubscriberBehavior, AudioPlayerStatus, generateDependencyReport, getVoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const fs = require('node:fs');
const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, ClientUser, User, time, GuildChannel, GuildManager, MessageManager, GuildMemberManager, GuildBanManager, GuildBan, GuildStickerManager, PermissionsBitField, PermissionOverwriteManager, MessageFlagsBitField, GuildMemberRoleManager, GuildMember, MessageReaction } = require('discord.js');
const { record, playcode, owner, character1, character2, character3, character4, character5, character6, botplay, botstan, guildId, chclue1, chclue2, chclue3, chclue4, chclue5, note1, totalplayer } = require('../config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildVoiceStates] });
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
const today = new Date();
const date = "" + today.getFullYear() +"년" + today.getMonth() + "월" + today.getDate() + "일" + today.getHours() + "시" + today.getMinutes() + "분";




module.exports = {
  name: "투표",
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
         var voting = '00'
         var database = message.guild.ownerId
         var uid = message.author.id
         const cfilePath = `./data/${uid}.json`;
         const dfilePath = `./data/${database}.json`;
         const efilePath = `./data/${cluedata}.json`;
         const vfilePath = `./data/${voting}.json`;
         !fs.existsSync(cfilePath) ? fs.writeFileSync(cfilePath, JSON.stringify({})) : null;
         !fs.existsSync(dfilePath) ? fs.writeFileSync(dfilePath, JSON.stringify({})) : null;
         !fs.existsSync(efilePath) ? fs.writeFileSync(efilePath, JSON.stringify({})) : null;
         !fs.existsSync(vfilePath) ? fs.writeFileSync(vfilePath, JSON.stringify({})) : null;
       const user = JSON.parse(fs.readFileSync(cfilePath, "utf-8"));
         const admin = JSON.parse(fs.readFileSync(dfilePath, "utf-8"));
         const clue = JSON.parse(fs.readFileSync(efilePath, "utf-8"));
         const vote = JSON.parse(fs.readFileSync(vfilePath, "utf-8"));
    ///////////

if(admin.round == 5 && vote.vchance1 ==1 && message.author.id == admin.playerid1) {
    let vo1 = 0
    let vo2 = 0
    let vo3 = 0
    let vo4 = 0
    let vo5 = 0
    let vo6 = 0
    switch(arguments)
    {
       case admin.class1 : 
       {
        vo1 == 1
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case admin.class2 : 
        {
         vo1 == 0
         vo2 == 1
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 == 0
           break;
         }
         case admin.class3 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 1
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case admin.class4 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 == 1
        vo5 == 0
        vo6 == 0
          break;
        }
        case admin.class5 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 == 1
        vo6 == 0
          break;
        }
        case admin.class6 : 
        {
         vo1 == 0
         vo2 == 0
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 == 1
           break;
         }
    }

voting = {
    votenum : voting.votenum + 1,
    player1 : voting.player1,
    vote1 : voting.vote1 +vo1,
    vote2 : voting.vote1 +vo2,
    player2 : voting.player2,
    vote3 : voting.vote1 +vo3,
    player3 : voting.player3,
    vote4 : voting.vote1 +vo4,
    player4 : voting.player4,
    vote5 : voting.vote1 +vo5,
    player5 : voting.player5,
    vote6 : voting.vote1 +vo6,
    player6 : voting.player6,
    vchance1 : vote.vchance1*=0,
    vchance2 : vote.vchance2,
    vchance3 : vote.vchance3,
    vchance4 : vote.vchance4,
    vchance5 : vote.vchance5,
    vchance6 : vote.vchance6,

    
   
 }
fs.writeFileSync(vfilePath, JSON.stringify(voting));
  }
  if(admin.round == 5 && vote.vchance2 ==1 && message.author.id == admin.playerid2) {
    let vo1 = 0
    let vo2 = 0
    let vo3 = 0
    let vo4 = 0
    let vo5 = 0
    let vo6 = 0
    switch(arguments)
    {
       case admin.class1 : 
       {
        vo1 == 1
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case admin.class2 : 
        {
         vo1 == 0
         vo2 == 1
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 == 0
           break;
         }
         case admin.class3 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 1
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case admin.class4 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 == 1
        vo5 == 0
        vo6 == 0
          break;
        }
        case admin.class5 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 == 1
        vo6 == 0
          break;
        }
        case admin.class6 : 
        {
         vo1 == 0
         vo2 == 0
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 == 1
           break;
         }
    }

voting = {
    votenum : voting.votenum + 1,
    player1 : voting.player1,
    vote1 : voting.vote1 +vo1,
    vote2 : voting.vote1 +vo2,
    player2 : voting.player2,
    vote3 : voting.vote1 +vo3,
    player3 : voting.player3,
    vote4 : voting.vote1 +vo4,
    player4 : voting.player4,
    vote5 : voting.vote1 +vo5,
    player5 : voting.player5,
    vote6 : voting.vote1 +vo6,
    player6 : voting.player6,
    vchance1 : vote.vchance1,
    vchance2 : vote.vchance2*=0,
    vchance3 : vote.vchance3,
    vchance4 : vote.vchance4,
    vchance5 : vote.vchance5,
    vchance6 : vote.vchance6,

    
   
 }
fs.writeFileSync(vfilePath, JSON.stringify(voting));
  }
  if(admin.round == 5 && vote.vchance3 ==1 && message.author.id == admin.playerid3) {
    let vo1 = 0
    let vo2 = 0
    let vo3 = 0
    let vo4 = 0
    let vo5 = 0
    let vo6 = 0
    switch(arguments)
    {
       case admin.class1 : 
       {
        vo1 == 1
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case admin.class2 : 
        {
         vo1 == 0
         vo2 == 1
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 == 0
           break;
         }
         case admin.class3 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 1
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case admin.class4 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 == 1
        vo5 == 0
        vo6 == 0
          break;
        }
        case admin.class5 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 == 1
        vo6 == 0
          break;
        }
        case admin.class6 : 
        {
         vo1 == 0
         vo2 == 0
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 == 1
           break;
         }
    }

voting = {
    votenum : voting.votenum + 1,
    player1 : voting.player1,
    vote1 : voting.vote1 +vo1,
    vote2 : voting.vote1 +vo2,
    player2 : voting.player2,
    vote3 : voting.vote1 +vo3,
    player3 : voting.player3,
    vote4 : voting.vote1 +vo4,
    player4 : voting.player4,
    vote5 : voting.vote1 +vo5,
    player5 : voting.player5,
    vote6 : voting.vote1 +vo6,
    player6 : voting.player6,
    vchance1 : vote.vchance1,
    vchance2 : vote.vchance2,
    vchance3 : vote.vchance3*=0,
    vchance4 : vote.vchance4,
    vchance5 : vote.vchance5,
    vchance6 : vote.vchance6,

    
   
 }
fs.writeFileSync(vfilePath, JSON.stringify(voting));
  }
  if(admin.round == 5 && vote.vchance4 ==1 && message.author.id == admin.playerid4) {
    let vo1 = 0
    let vo2 = 0
    let vo3 = 0
    let vo4 = 0
    let vo5 = 0
    let vo6 = 0
    switch(arguments)
    {
       case admin.class1 : 
       {
        vo1 == 1
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case admin.class2 : 
        {
         vo1 == 0
         vo2 == 1
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 == 0
           break;
         }
         case admin.class3 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 1
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case admin.class4 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 == 1
        vo5 == 0
        vo6 == 0
          break;
        }
        case admin.class5 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 == 1
        vo6 == 0
          break;
        }
        case admin.class6 : 
        {
         vo1 == 0
         vo2 == 0
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 == 1
           break;
         }
    }

voting = {
    votenum : voting.votenum + 1,
    player1 : voting.player1,
    vote1 : voting.vote1 +vo1,
    vote2 : voting.vote1 +vo2,
    player2 : voting.player2,
    vote3 : voting.vote1 +vo3,
    player3 : voting.player3,
    vote4 : voting.vote1 +vo4,
    player4 : voting.player4,
    vote5 : voting.vote1 +vo5,
    player5 : voting.player5,
    vote6 : voting.vote1 +vo6,
    player6 : voting.player6,
    vchance1 : vote.vchance1,
    vchance2 : vote.vchance2,
    vchance3 : vote.vchance3,
    vchance4 : vote.vchance4*=0,
    vchance5 : vote.vchance5,
    vchance6 : vote.vchance6,

    
   
 }
fs.writeFileSync(vfilePath, JSON.stringify(voting));
  }
  if(admin.round == 5 && vote.vchance5 ==1 && message.author.id == admin.playerid5) {
    let vo1 = 0
    let vo2 = 0
    let vo3 = 0
    let vo4 = 0
    let vo5 = 0
    let vo6 = 0
    switch(arguments)
    {
       case admin.class1 : 
       {
        vo1 == 1
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case admin.class2 : 
        {
         vo1 == 0
         vo2 == 1
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 == 0
           break;
         }
         case admin.class3 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 1
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case admin.class4 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 == 1
        vo5 == 0
        vo6 == 0
          break;
        }
        case admin.class5 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 == 1
        vo6 == 0
          break;
        }
        case admin.class6 : 
        {
         vo1 == 0
         vo2 == 0
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 == 1
           break;
         }
    }

voting = {
    votenum : voting.votenum + 1,
    player1 : voting.player1,
    vote1 : voting.vote1 +vo1,
    vote2 : voting.vote1 +vo2,
    player2 : voting.player2,
    vote3 : voting.vote1 +vo3,
    player3 : voting.player3,
    vote4 : voting.vote1 +vo4,
    player4 : voting.player4,
    vote5 : voting.vote1 +vo5,
    player5 : voting.player5,
    vote6 : voting.vote1 +vo6,
    player6 : voting.player6,
    vchance1 : vote.vchance1,
    vchance2 : vote.vchance2,
    vchance3 : vote.vchance3,
    vchance4 : vote.vchance4,
    vchance5 : vote.vchance5*=0,
    vchance6 : vote.vchance6,

    
   
 }
fs.writeFileSync(vfilePath, JSON.stringify(voting));
  }
  if(admin.round == 5 && vote.vchance6 ==1 && message.author.id == admin.playerid6) {
    let vo1 = 0
    let vo2 = 0
    let vo3 = 0
    let vo4 = 0
    let vo5 = 0
    let vo6 = 0
    switch(arguments)
    {
       case admin.class1 : 
       {
        vo1 == 1
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case admin.class2 : 
        {
         vo1 == 0
         vo2 == 1
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 == 0
           break;
         }
         case admin.class3 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 1
        vo4 == 0
        vo5 == 0
        vo6 == 0
          break;
        }
        case admin.class4 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 == 1
        vo5 == 0
        vo6 == 0
          break;
        }
        case admin.class5 : 
       {
        vo1 == 0
        vo2 == 0
        vo3 == 0
        vo4 == 0
        vo5 == 1
        vo6 == 0
          break;
        }
        case admin.class6 : 
        {
         vo1 == 0
         vo2 == 0
         vo3 == 0
         vo4 == 0
         vo5 == 0
         vo6 == 1
           break;
         }
    }

voting = {
    votenum : voting.votenum + 1,
    player1 : voting.player1,
    vote1 : voting.vote1 +vo1,
    vote2 : voting.vote1 +vo2,
    player2 : voting.player2,
    vote3 : voting.vote1 +vo3,
    player3 : voting.player3,
    vote4 : voting.vote1 +vo4,
    player4 : voting.player4,
    vote5 : voting.vote1 +vo5,
    player5 : voting.player5,
    vote6 : voting.vote1 +vo6,
    player6 : voting.player6,
    vchance1 : vote.vchance1,
    vchance2 : vote.vchance2,
    vchance3 : vote.vchance3,
    vchance4 : vote.vchance4,
    vchance5 : vote.vchance5,
    vchance6 : vote.vchance6*=0,

    
   
 }
fs.writeFileSync(vfilePath, JSON.stringify(voting));
  }
  else{message.channel.send('이미 투표 하셧거나 잘못된 이름입니다.')}
}
}
