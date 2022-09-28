const { createAudioResource, createAudioPlayer, joinVoiceChannel, NoSubscriberBehavior, AudioPlayerStatus, generateDependencyReport, getVoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const fs = require('node:fs');
const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, ClientUser, User, time, GuildChannel, GuildManager, MessageManager, GuildMemberManager, GuildBanManager, GuildBan, GuildStickerManager, PermissionsBitField, PermissionOverwriteManager, MessageFlagsBitField, GuildMemberRoleManager, GuildMember, MessageReaction } = require('discord.js');
const { record, playcode, owner, character1, character2, character3, character4, character5, character6, botplay, botstan, guildId, clue1 } = require('../config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildVoiceStates] });
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
const today = new Date();
const date = "" + today.getFullYear() +"년" + today.getMonth() + "월" + today.getDate() + "일" + today.getHours() + "시" + today.getMinutes() + "분";




module.exports = {
  name: "단서",
  async execute(message, args, client ) {
    const arguments = args.shift(1)
    const channel = client.channels.cache.get(chclue1);//윤새롬
    const channel1 = client.channels.cache.get(chclue2);//한호랑
    const channel2 = client.channels.cache.get(chclue3);//유수호
    const channel3 = client.channels.cache.get(chclue4);//오정성
    const channel4 = client.channels.cache.get(chclue5);//곽편집
         ////저장정보 불러오는 부분
         var database = '0011005500'
         var uid = message.author.id
         const cfilePath = `./data/${uid}.json`;
         const dfilePath = `./data/${database}.json`;
         !fs.existsSync(cfilePath) ? fs.writeFileSync(cfilePath, JSON.stringify({})) : null;
         !fs.existsSync(dfilePath) ? fs.writeFileSync(dfilePath, JSON.stringify({})) : null;
       const user = JSON.parse(fs.readFileSync(cfilePath, "utf-8"));
         const clue = JSON.parse(fs.readFileSync(dfilePath, "utf-8"));
    ///////////
     if (isNaN(arguments)) {
      return message.channel.send('숫자만 입력!');
     } else {
      switch(arguments)
         {
            case '010' : 

            {
               console.log(arguments)
               await channel1.send({ files: ['./clue/010.png'] })
               client.channels.cache
               .get(clue1)
               .messages.fetch(clue.dclueid1)
               .then((msg) => msg.edit('~~**010> 다이어리**~~'));
               break;
            }

         }
        }
      
     
//////////////////
//const channel = client.channels.cache.get('1022149255768571994');
// const channel = message.guild.channels.cache.find(ch => ch.name === '단서채널-1');
// channel.messages.fetch('1022151084912955523').then(function (message) { message.react("👍") })

  }}





















    //     ///const arguments = args.shift(1)
//     ////console.log(arguments)
   
//       const connection = joinVoiceChannel({
//           channelId: message.member.voice.channelId,
//           guildId: message.guildId,
//           adapterCreator: message.guild.voiceAdapterCreator
          
//       })


//       const player = createAudioPlayer()
//       const resource = createAudioResource('../music/123.mp3')


//       player.play(resource, {seek: 0, volume: 1.0})
  
// await wait(5000)
// console.log("time")
// connection.destroy();
//   }
// }

         

        //await client.user.setUsername(botplay);
        
    //   ////저장정보 불러오는 부분
    //   var database = owner
    //   var uid = message.author.id
    //   const cfilePath = `./data/${uid}.json`;
    //   const dfilePath = `./data/${database}.json`;
    //   !fs.existsSync(cfilePath) ? fs.writeFileSync(cfilePath, JSON.stringify({})) : null;
    //   !fs.existsSync(dfilePath) ? fs.writeFileSync(dfilePath, JSON.stringify({})) : null;
    //  const user = JSON.parse(fs.readFileSync(cfilePath, "utf-8"));
    //   const admin = JSON.parse(fs.readFileSync(dfilePath, "utf-8"));s

