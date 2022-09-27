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
  name: "윤새롬",
  async execute(message, args, client ) {
    if(message.channel.id != '1022149255768571994') {
        message.channel.send('지정된 채널에서 사용해 주세요.')
        await message.channel.bulkDelete(2)
        return}
     ////저장정보 불러오는 부분
     const arguments = args.shift(1)
     var database = owner
     var uid = message.author.id
     const cfilePath = `./data/${uid}.json`;
     const dfilePath = `./data/${database}.json`;
     !fs.existsSync(cfilePath) ? fs.writeFileSync(cfilePath, JSON.stringify({})) : null;
     !fs.existsSync(dfilePath) ? fs.writeFileSync(dfilePath, JSON.stringify({})) : null;
   const user = JSON.parse(fs.readFileSync(cfilePath, "utf-8"));
     const admin = JSON.parse(fs.readFileSync(dfilePath, "utf-8"));
//////////////////
if(message.channel.id == '1022149255768571994'){
switch(arguments)
         {
            case '010' : 
            {
                console.log(arguments)
               message.channel.send('다이어리')
               client.channels.cache
               .get('1022149255768571994')
               .messages.fetch('1024241653218803764')
               .then((msg) => msg.edit('~~**010> 다이어리**~~'));
               break;
            }
            case '지구' : 
            {
                message.channel.send('다이어리')
                client.channels.cache
                .get('1022149255768571994')
                .messages.fetch('1024241653218803764')
                .then((msg) => msg.edit('**010> 다이어리**'));
                break;
            }
            case '수성' : 
            {
               console.log(arguments)
               await message.author.send({ files: ['./roll/수성.txt'] });
               await message.author.send({ content: "일정과 시간을 조율하신후 약속된 시간에\n``!준비``를\n모든 플레이어가 15초내에 치시면 됩니다.\n카운트는 명령어 사용후  15초입니다." })
               break;
            }
            case '화성' : 
            {
               console.log(arguments)
               await message.author.send({ files: ['./roll/화성.txt'] });
               await message.author.send({ content: "일정과 시간을 조율하신후 약속된 시간에\n``!준비``를\n모든 플레이어가 15초내에 치시면 됩니다.\n카운트는 명령어 사용후  15초입니다." })
               break;
            }
            case '목성' : 
            {
               console.log(arguments)
               await message.author.send({ files: ['./roll/목성.txt'] });
               await message.author.send({ content: "일정과 시간을 조율하신후 약속된 시간에\n``!준비``를\n모든 플레이어가 15초내에 치시면 됩니다.\n카운트는 명령어 사용후  15초입니다." })
               break;
            }
         }

        
        }
        }
    }