const { createAudioResource, createAudioPlayer, joinVoiceChannel, NoSubscriberBehavior, AudioPlayerStatus, generateDependencyReport, getVoiceConnection, VoiceConnectionStatus, StreamType } = require('@discordjs/voice');
const fs = require('node:fs');
const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, ClientUser, User, time, GuildChannel, GuildManager, MessageManager, GuildMemberManager, GuildBanManager, GuildBan, GuildStickerManager, PermissionsBitField, PermissionOverwriteManager, MessageFlagsBitField, GuildMemberRoleManager, GuildMember, MessageReaction } = require('discord.js');
const { record, playcode, owner, character1, character2, character3, character4, character5, character6, botplay, botstan, guildId } = require('../config.json');
const { createReadStream } = require('node:fs');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildVoiceStates] });
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
const today = new Date();
const date = "" + today.getFullYear() +"년" + today.getMonth() + "월" + today.getDate() + "일" + today.getHours() + "시" + today.getMinutes() + "분";






module.exports = {
  name: "확인",
  async execute(message, args, client ) {
     ////저장정보 불러오는 부분
     var database = owner
     var uid = message.author.id
     const cfilePath = `./data/${uid}.json`;
     const dfilePath = `./data/${database}.json`;
     !fs.existsSync(cfilePath) ? fs.writeFileSync(cfilePath, JSON.stringify({})) : null;
     !fs.existsSync(dfilePath) ? fs.writeFileSync(dfilePath, JSON.stringify({})) : null;
   const user = JSON.parse(fs.readFileSync(cfilePath, "utf-8"));
     const admin = JSON.parse(fs.readFileSync(dfilePath, "utf-8"));
//////////////////


  arguments = args.shift(2)
  

  //   if(arguments == 221 && admin.vpoint != 0 )
  //   { 
  //     database = {
  //     class1 : admin.class1,
  //     player1 : admin.player1,
  //     class2 : admin.class2,
  //     player2 : admin.player2,
  //     class3 : admin.class3,
  //     player3 : admin.player3,
  //     class4 : admin.class4,
  //     player4 : admin.player4,
  //     class5 : admin.class5,
  //     player5 : admin.player5,
  //     class5 : admin.class6,
  //     player5 : admin.player6,
  //     playerid1 : admin.playerid1,
  //     playerid2 : admin.playerid2,
  //     playerid3 : admin.playerid3,
  //     playerid4 : admin.playerid4,
  //     playerid5 : admin.playerid5,
  //     playerid6 : admin.playerid6,
  //     round : admin.round,
  //     starttime : date,
  //     endtime : admin.endtime,
  //     vpoint : admin.vpoint -1
  //    }
  //    fs.writeFileSync(dfilePath, JSON.stringify(database));
  //     await message.channel.send('221')
  //     await message.channel.send(admin.vpoint+"개 남음")
  //     await console.log(admin.vpoint)
  //   }
  try {
    client.channels.cache
    .get('1011973926559162408')
    .messages.fetch('1023880247403356230')
    .then((msg) => msg.edit('~~**010> 다이어리**~~'));
  } catch (error) {
    console.error(error);
    
  }
  

  }}
//     const arguments = args.shift(1)
//     console.log(arguments)
   
//       const connection = joinVoiceChannel({
//           channelId: message.member.voice.channelId,
//           guildId: message.guildId,
//           adapterCreator: message.guild.voiceAdapterCreator,
//           selfDeaf: false,
//       })


//       const player = createAudioPlayer()
//       const resource = createAudioResource('./music/.mp3', {
//         metadata: {
//           title: 'A good song!',
//         },
//       });
      
//       // Not recommended - listen to errors from the audio player instead for most usecases!
//       resource.playStream.on('error', error => {
//         console.error('Error:', error.message, 'with track', resource.metadata.title);
//       });
      
//       player.play(resource);
//       await wait(5000)
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
