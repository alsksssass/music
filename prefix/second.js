const { createAudioResource, createAudioPlayer, joinVoiceChannel, NoSubscriberBehavior, AudioPlayerStatus, generateDependencyReport, getVoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const fs = require('node:fs');
const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, ClientUser, User, time, GuildChannel, GuildManager, MessageManager, GuildMemberManager, GuildBanManager, GuildBan, GuildStickerManager, PermissionsBitField, PermissionOverwriteManager, MessageFlagsBitField, GuildMemberRoleManager, GuildMember, MessageReaction } = require('discord.js');
const { record, playcode, owner, character1, character2, character3, character4, character5, character6, botplay, botstan, guildId, chclue1, chclue2, chclue3, chclue4, chclue5, note1 } = require('../config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildVoiceStates] });
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
const today = new Date();
const date = "" + today.getFullYear() +"년" + today.getMonth() + "월" + today.getDate() + "일" + today.getHours() + "시" + today.getMinutes() + "분";




module.exports = {
  name: "!2차조사",
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


if(admin.round == 3 && admin.vpoint == 0 && message.author.id == admin.playerid1){
	const channel6 = client.channels.cache.get(note1);//추리노트
	await channel6.send('2차 조사가 시작되었습니다. ```!단서 ???``` 명령어로 남은 단서를 모두 열람 할 수 있습니다!')
  await channel6.send('단서 열람횟수 23개 추가 됨.')
	database = {
    readynum : admin.readynum,
		class1 : admin.class1,
		player1 : admin.player1,
		class2 : admin.class2,
		player2 : admin.player2,
		class3 : admin.class3,
		player3 : admin.player3,
		class4 : admin.class4,
		player4 : admin.player4,
		class5 : admin.class5,
		player5 : admin.player5,
		class6 : admin.class6,
		player6 : admin.player6,
		playerid1 : admin.playerid1,
		playerid2 : admin.playerid2,
		playerid3 : admin.playerid3,
		playerid4 : admin.playerid4,
		playerid5 : admin.playerid5,
		playerid6 : admin.playerid6,
        round : (admin.round *= 0) +4,
		starttime : admin.starttime,
		endtime : admin.endtime,
		vpoint : (admin.vpoint *= 0) +23
	 }
    }
}
}