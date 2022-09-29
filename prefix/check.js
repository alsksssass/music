const { createAudioResource, createAudioPlayer, joinVoiceChannel, NoSubscriberBehavior, AudioPlayerStatus, generateDependencyReport, getVoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const fs = require('node:fs');
const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, ClientUser, User, time, GuildChannel, GuildManager, MessageManager, GuildMemberManager, GuildBanManager, GuildBan, GuildStickerManager, PermissionsBitField, PermissionOverwriteManager, MessageFlagsBitField, GuildMemberRoleManager, GuildMember, MessageReaction } = require('discord.js');
const { record, playcode, owner, character1, character2, character3, character4, character5, character6, botplay, botstan, guildId, chclue1, chclue2, chclue3, chclue4, chclue5, note1 } = require('../config.json');

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
    const channel5 = client.channels.cache.get(note1);//추리노트
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
    
     if (isNaN(arguments)) {
        console.log('1')
      return message.channel.send('숫자만 입력!');
     } 
     else if(admin.vpoint > 0 && message.author.id == admin.playerid1) {
        console.log('2')
      message.channel.bulkDelete(1)
      switch(arguments)
         {
            case '010' : 
            {
               console.log(arguments)
               console.log(clue.dclueid01)
               await channel.send('> 010 - 윤새롬의 다이어리')
               await channel.send({ files: ['./clue/010.png'] })
               const ms1 = await channel.send('방송일정과 스케쥴이 빡빡하다.')
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue1)
               .messages.fetch(clue.dclueid01)
               .then((msg) => msg.edit('~~**010> 다이어리**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '020' : 
            {
               console.log(arguments)
               console.log(clue.dclueid02)
               await channel.send('> 020 - 윤새롬의 통장')
               const ms1 = await channel.send({ files: ['./clue/020.png'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               
               
               client.channels.cache
               .get(chclue1)
               .messages.fetch(clue.dclueid02)
               .then((msg) => msg.edit('~~**020> 통장**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '030' : 
            {
              console.log(arguments)
              console.log(clue.dclueid03)
              await channel.send('> 030 - 윤새롬의 흰 봉투')
              const ms1 = await channel.send({ files: ['./clue/030.jpg'] })
              await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")

               client.channels.cache
               .get(chclue1)
               .messages.fetch(clue.dclueid03)
               .then((msg) => msg.edit('~~**030> 흰 봉투**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '040' : 
            {
               console.log(arguments)
               console.log(clue.dclueid04)
               await channel.send('> 040 - 윤새롬의 계약서')
              const ms1 = await channel.send({ files: ['./clue/040.jpg'] })
              await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")

               client.channels.cache
               .get(chclue1)
               .messages.fetch(clue.dclueid04)
               .then((msg) => msg.edit('~~**040> 계약서**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '050' : 
            {
               console.log(arguments)
               console.log(clue.dclueid05)
               await channel.send('> 050 - 새롬의 골든버튼')
              const ms1 = await channel.send({ files: ['./clue/050.png'] })
              await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue1)
               .messages.fetch(clue.dclueid05)
               .then((msg) => msg.edit('~~**050> 골든버튼**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '060' : 
            {
               console.log(arguments)
               console.log(clue.dclueid06)
               await channel.send('> 060 - 윤새롬의 편지')
               await channel.send('정성에게 쓴 편지. \n자신의 생일인 것 아는데 챙겨주는 것도 아는데 너무 못해줘서 미안하다는 편지. \n그리고 앞으로 상황이 변할것이니 조금만 참아달라는 내용의 편지다.')
               const ms1 = await channel.send('```정성오빠에게 \n오빠 내가 자주 데이트도 못하고, 나 바쁘다고 오빠 연락도 잘 못 받아서 미안해.\n나는 지금 자리를 잡아 두지 못 하면 앞으로 더 힘들어질 것 같아서 좀 겁이나나봐. \n그래서 대부분의 시간을 내일에만 할애를 했던 것 같아. \n앞으로는 그러지 않을께 \n자주 같이 하려고 노력할테니까 나 조금만 믿어줘!```')
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue1)
               .messages.fetch(clue.dclueid06)
               .then((msg) => msg.edit('~~**060> 편지**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '070' : 
            {
               console.log(arguments)
               console.log(clue.dclueid07)
               await channel.send('> 070 - 윤새롬의 카메라')
               await channel.send('```sd 카드가 없다. 컴퓨터에 연결이 되어있는 방송 송출용 카메라인 듯 하다```')
               const ms1 = await channel.send({ files: ['./clue/070.png'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue1)
               .messages.fetch(clue.dclueid07)
               .then((msg) => msg.edit('~~**070> 카메라**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '080' : 
            {
               console.log(arguments)
               console.log(clue.dclueid08)
               await channel.send('> 080 - 윤새롬의 포스트잇')
               const ms1 = await channel.send('```백업용으로 리허설 영상을 편집에게 보낼 것.\n오늘 합방 9시부터 진행```')
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue1)
               .messages.fetch(clue.dclueid08)
               .then((msg) => msg.edit('~~**080 포스트잇**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '090' : 
            {
               console.log(arguments)
               console.log(clue.dclueid09)
               await channel.send('> 090 - 윤새롬의 휴대폰 문자내역')
               const ms1 = await channel.send('```1. 새롬의 휴대폰 문자내역곽편집과의 문자\n\n12월 1일새롬 : 내일 호랑이가 올거예요. \n호랑이랑 같이 회의 할거니까 늦어도 9시까지는 오세요. \n편집 : 그때 생방송 중일거잖아요?새롬 : 비번 알잖아요. 그냥 비번치고 들어와 있으면 되져.```')
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue1)
               .messages.fetch(clue.dclueid09)
               .then((msg) => msg.edit('~~**090 새롬의 휴대폰 문자내역**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '110' : 
            {
               console.log(arguments)
               console.log(clue.dclueid11)
               await channel1.send('> 110 - 한호랑의 호랑타로유튜브 댓글, 악성댓글로 가득하다.')
               const ms1 = await channel1.send({ files: ['./clue/110.png'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue2)
               .messages.fetch(clue.dclueid11)
               .then((msg) => msg.edit('~~**110> 타로유튜브 댓글**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '120' : 
            {
               console.log(arguments)
               console.log(clue.dclueid12)
               await channel1.send('> 120 - 한호랑의 새롬의 연락')
               const ms1 = await channel1.send('```새롬 : 안녕? 잘 지냈어 호랑아?\n호랑 ：왠일이야? 네가 연락을 다하고?\n새롬 : 왠일이라니? 우리 친구잖아.\n호랑 : 그냥 용건만 간단히 말해줄래?\n새롬 : 아... 그래 바쁜사람 시간 붙잡았네. 다름이 아니라 이번에 합방하자. 연말이기도 하니까... 어때?\n호랑 : 합방? 글쎄? 생각해볼게.\n새롬 : 그래 연락 줘!\n\n----11월 30일\n\n호랑 : 합방그거 하자.\n새롬 : 아? 그래? 알았어. 자세한 얘기는 디코로 하자. \n12월 2일9시부터 합방하면 될거 같아. 8시 반에서 9시 사이에 와~```')
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue2)
               .messages.fetch(clue.dclueid12)
               .then((msg) => msg.edit('~~**120> 새롬의 연락**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '130' : 
            {
               console.log(arguments)
               console.log(clue.dclueid13)
               await channel1.send('> 130 - 한호랑의 노트북')
               await channel1.send('```다양한 타로 셔플 영상등이 있다.```')
               const ms1 = await channel1.send({ files: ['./clue/130.png'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue2)
               .messages.fetch(clue.dclueid13)
               .then((msg) => msg.edit('~~**130> 노트북**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '140' : 
            {
               console.log(arguments)
               console.log(clue.dclueid14)
               await channel1.send('> 140 - 한호랑의 그래프')
               await channel1.send('```유튜브 스트리밍 그래프 점점 떨어지고 있다```')
               const ms1 = await channel1.send({ files: ['./clue/140.png'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue2)
               .messages.fetch(clue.dclueid14)
               .then((msg) => msg.edit('~~**140> 그래프**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '150' : 
            {
               console.log(arguments)
               console.log(clue.dclueid15)
               await channel1.send('> 150 - 한호랑의 신체검사')
               await channel1.send('```프릴이 잔뜩 달린 공주풍의 옷이다. 옷소매가짧다```')
               const ms1 = await channel1.send({ files: ['./clue/150.png'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue2)
               .messages.fetch(clue.dclueid15)
               .then((msg) => msg.edit('~~**150> 신체검사**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '160' : 
            {
               console.log(arguments)
               console.log(clue.dclueid16)
               await channel1.send('> 160 - 한호랑의 스타벅스 CCTV')
               const ms1 = await channel1.send('```6시 50분~ 8시 20분까지 매장을 이용한 것이 찍혀있다.```')
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue2)
               .messages.fetch(clue.dclueid16)
               .then((msg) => msg.edit('~~**160> CCTV**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '170' : 
            {
               console.log(arguments)
               console.log(clue.dclueid17)
               await channel1.send('> 170 - 한호랑의  SD카드,내용이 없다.')
               const ms1 = await channel1.send({ files: ['./clue/170.png'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue2)
               .messages.fetch(clue.dclueid17)
               .then((msg) => msg.edit('~~**170> SD카드**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '180' : 
            {
               console.log(arguments)
               console.log(clue.dclueid18)
               await channel1.send('> 180 - 한호랑의  캐리어가방 비어있다.')
               const ms1 = await channel1.send({ files: ['./clue/180.png'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue2)
               .messages.fetch(clue.dclueid18)
               .then((msg) => msg.edit('~~**180> 캐리어**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '190' : 
            {
               console.log(arguments)
               console.log(clue.dclueid19)
               await channel1.send('> 190 - 한호랑의  진단서')
               const ms1 = await channel1.send({ files: ['./clue/190.png'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue2)
               .messages.fetch(clue.dclueid19)
               .then((msg) => msg.edit('~~**190> 진단서**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '210' : 
            {
               console.log(arguments)
               console.log(clue.dclueid21)
               await channel2.send('> 210 - 유수호의  유튜브 계정')
               const ms1 = await channel2.send('```댓글 목록을 보면 ‘호랑타로’에 악성 댓글을 쓴 것이 몇 개보인다```')
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue3)
               .messages.fetch(clue.dclueid21)
               .then((msg) => msg.edit('~~**210> 수호의 유튜브 계정**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '220' : 
            {
               console.log(arguments)
               console.log(clue.dclueid22)
               await channel2.send('> 220 - 유수호의  주머니속 서바이벌 칼')
               const ms1 = await channel2.send({ files: ['./clue/210.png'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue3)
               .messages.fetch(clue.dclueid22)
               .then((msg) => msg.edit('~~**220> 주머니**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '230' : 
            {
               console.log(arguments)
               console.log(clue.dclueid23)
               await channel2.send('> 230 - 유수호의  스크랩집의 일기장')
               const ms1 = await channel2.send('```2월 1일\n결국 보육원을 나왔다. 이제 갈 곳은 없는데... \n우선은 아는 형집에 얻혀 살기로 하긴 했다. \n그래도 돈 모으면 독립 해야겠지?\n\n2월 15일\n배달 일을 시작했다. 토바이는 형이 빌려준 돈으로 구입했다.\n중고지만 나름 일 할만했다. 그거면 충분하지...\n그리고 오늘 유튜브를 보는데 타로 유튜브를 처음 봤다. \n제네럴이면 정확하지 않을 거라는데 정확했다. \n내가 지금 의지할 사람도 없고, 돈도 급한 상황이라고... \n그래 그래도 앞으로 희망이보일거라고 했다. \n‘윤선생타로’뭔가 좋은 말을 많이 해줘서 내미래가 희망적일 것 같다.\n\n3월 5일\n나름 횡재를 한다더니 길 가다가 5만원을 주웠다. \n기분이 좋았다.\n이번달은 내내 평안한 한 달을 보낸다고 하니 그 점괘도 믿어봐야지,\n\n4월 15일\n내 생일이다.\n타로대로 풍족한 한달을 보내는 중이다. \n형이 밥도 사주고, 선물로 배달할 때 입으라고 바람막이도 사줬다. \n기분이가 좋다.\n\n8월 30일\n횡재한다며? 순조롭다며? 여친도 만난다고?\n그런데 형이... 내가 그동안 번 돈 가지고 튀었다.\n집세도 이미 5달치 밀려있었다. \n그걸 모르고... 집주인이 내가갚지 않으면 고소한다고 했다. \n우선... 기다려 달라고 사정 했다.\n\n10월 3일\n오토바이 사고를 당했다.\n배달하던 음식과 병원비. \n그리고 오토바이를 다시 사야하는 상황이라서... 너무 힘들다.\n\n11월 29일\n이번에는 직접 타로를 봤다. \n전화로 30분동안 타로를 봐주는데3만원이다.\n좀 비쌌지만 받았다.\n그동안 희망적인 내용이 다 유튜브로 봐서 그런걸 수 있으니까.\n직접 전화로 점괘를 들었는데 희망적이다... \n아... 이번에도 희망고문일까? \n앞으로 큰 횡재가 있어서 팔자가 필거라는데... 과연?\n로또는... 사긴 했는데... \n아무래도 직접 만나서 얘기 해보는건어떨까?```')
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue3)
               .messages.fetch(clue.dclueid23)
               .then((msg) => msg.edit('~~**230> 스크랩집**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '240' : 
            {
               console.log(arguments)
               console.log(clue.dclueid24)
               await channel2.send('> 240 - 유수호의  병원비 영수증')
               const ms1 = await channel2.send({ files: ['./clue/240.png'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue3)
               .messages.fetch(clue.dclueid24)
               .then((msg) => msg.edit('~~**240> 영수증**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '250' : 
            {
               console.log(arguments)
               console.log(clue.dclueid25)
               await channel2.send('> 250 - 유수호의 신체검사')
               const ms1 = await channel2.send({ files: ['./clue/250.png'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue3)
               .messages.fetch(clue.dclueid25)
               .then((msg) => msg.edit('~~**250> 신체검사**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '260' : 
            {
               console.log(arguments)
               console.log(clue.dclueid26)
               await channel2.send('> 260 - 유수호의 사진')
               const ms1 = await channel2.send('```고아원에서 찍은 사진이 있다.```')
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue3)
               .messages.fetch(clue.dclueid26)
               .then((msg) => msg.edit('~~**260> 사진**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '270' : 
            {
               console.log(arguments)
               console.log(clue.dclueid27)
               await channel2.send('> 270 - 유수호의 배달 내역')
               const ms1 = await channel2.send('```오후 7시 20분 마지막 배달완료건이 있음. 교촌치킨 배달 ```')
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue3)
               .messages.fetch(clue.dclueid27)
               .then((msg) => msg.edit('~~**270> 배달 내역**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '280' : 
            {
               console.log(arguments)
               console.log(clue.dclueid28)
               await channel2.send('> 280 - 유수호의 집앞')
               const ms1 = await channel2.send({ files: ['./clue/280.jpg'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue3)
               .messages.fetch(clue.dclueid28)
               .then((msg) => msg.edit('~~**280> 집앞**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '310' : 
            {
               console.log(arguments)
               console.log(clue.dclueid30)
               await channel3.send('> 310 - 오정성의 새롬과의 사과문자')
               const ms1 = await channel3.send('```10월 3일\n\n정성 : 새롬아. 이번주말에는 시간 있어?\n새롬 : 아 미안해 내가 바빠서\n10월 20일\n\n정성 : 새롬아. 시간있어?\n\n-10시간뒤\n\n새롬 : 아 정말 미안해 오빠. 지금 문자 봤어 왜?\n정성 : 아냐... 됐어. 중요한 일 아냐.\n\n11월 11일\n\n정성 : 새롬아.\n새롬 : 웅 왜?\n정성 : 오늘은 시간이 돼?\n새롬 : 음... 오빠 오늘 저녁은 예약스케줄 있어서 새벽에 시간 되는뎅\n정성 : 아... 그럼... 일요일은?\n새롬 : 일요일 오전에 돼.\n\n12월 2일\n정성 : 새롬아. 내일이 무슨 날인지 알아? (11시)\n정성 : 새롬아 대답 좀 해 줘. (11시 30분)\n정성 : 새롬아? 아직 자니?(3시)```')
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue4)
               .messages.fetch(clue.dclueid30)
               .then((msg) => msg.edit('~~**310> 문자**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '320' : 
            {
               console.log(arguments)
               console.log(clue.dclueid31)
               await channel3.send('> 320 - 오정성의 달력 : 곧 새롬의 생일이다.')
               const ms1 = await channel3.send({ files: ['./clue/320.jpg'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue4)
               .messages.fetch(clue.dclueid31)
               .then((msg) => msg.edit('~~**320> 달력**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '330' : 
            {
               console.log(arguments)
               console.log(clue.dclueid32)
               await channel3.send('> 330 - 오정성의 도시락 : 피해자에게 주려고싸온 도시락이다')
               const ms1 = await channel3.send({ files: ['./clue/330.png'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue4)
               .messages.fetch(clue.dclueid32)
               .then((msg) => msg.edit('~~**330> 도시락**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }

            case '340' : 
            {
               console.log(arguments)
               console.log(clue.dclueid33)
               await channel3.send('> 340 - 오정성의 신체검사 : 정성의 옷과 손이 피투성이다')
               const ms1 = await channel3.send({ files: ['./clue/340.png'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue4)
               .messages.fetch(clue.dclueid33)
               .then((msg) => msg.edit('~~**340> 신체검사**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '350' : 
            {
               console.log(arguments)
               console.log(clue.dclueid34)
               await channel3.send('> 350 - 오정성의 망치 : 피가흥건하게 묻어있다.')
               const ms1 = await channel3.send({ files: ['./clue/350.png'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue4)
               .messages.fetch(clue.dclueid34)
               .then((msg) => msg.edit('~~**350> 망치**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '360' : 
            {
               console.log(arguments)
               console.log(clue.dclueid35)
               await channel3.send('> 360 - 오정성에 대한 증언')
               const ms1 = await channel3.send('```얘가 기계치라서 항상 보면 휴대폰도 제대로 못다뤄여~ 이런이런...```')
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue4)
               .messages.fetch(clue.dclueid35)
               .then((msg) => msg.edit('~~**360> 증언**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }

            case '370' : 
            {
               console.log(arguments)
               console.log(clue.dclueid36)
               await channel3.send('> 370 - 오정성의 일기')
               const ms1 = await channel3.send('```2018년 1월\n그녀가 떠났다.\n정말 내가 뭘 잘못했을까? 점점 연락이 뜸해지고,,, 씹히고,\n나만 매달리는 것 같다.\n나만 목매는 연애는 이제 하기 싫다.\n그럴 바에는 죽이는게 낫다. 영원히 내 것으로 할 수 있으니까...```')
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue4)
               .messages.fetch(clue.dclueid36)
               .then((msg) => msg.edit('~~**370> 일기**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '380' : 
            {
               console.log(arguments)
               console.log(clue.dclueid37)
               await channel3.send('> 380 - 오정성의 집 내부 : 포르말린 표본')
               const ms1 = await channel3.send('```포르말린 용액이 담긴 병에는 반지를 낀 손가락이 하나씩 들어있다.\n모두 똑같은 여성용 반지다```')
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue4)
               .messages.fetch(clue.dclueid37)
               .then((msg) => msg.edit('~~**380> 집 내부**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '410' : 
            {
               console.log(arguments)
               console.log(clue.dclueid39)
               await channel4.send('> 410 - 곽편집의 고용계약서. 2년전부터 월 200씩 받아왔다.')
               const ms1 = await channel4.send({ files: ['./clue/410.png'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue5)
               .messages.fetch(clue.dclueid39)
               .then((msg) => msg.edit('~~**410> 계약서**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '420' : 
            {
               console.log(arguments)
               console.log(clue.dclueid40)
               await channel4.send('> 420 - 곽편집의 통장. 입금날짜가 점점 뒤로 미루어진다.')
               const ms1 = await channel4.send({ files: ['./clue/420.png'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue5)
               .messages.fetch(clue.dclueid40)
               .then((msg) => msg.edit('~~**420> 통장**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '430' : 
            {
               console.log(arguments)
               console.log(clue.dclueid41)
               await channel4.send('> 430 - 곽편집의 노트북. 영상편집용이다.')
               const ms1 = await channel4.send({ files: ['./clue/430.png'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue5)
               .messages.fetch(clue.dclueid41)
               .then((msg) => msg.edit('~~**430> 노트북**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
         
            case '440' : 
            {
               console.log(arguments)
               console.log(clue.dclueid42)
               await channel4.send('> 440 - 곽편집의 자동차 주차영수증. 주차장은 새롬의 집과 10분거리. ')
               const ms1 = await channel4.send({ files: ['./clue/440.jpg'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue5)
               .messages.fetch(clue.dclueid42)
               .then((msg) => msg.edit('~~**440> 영수증**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '450' : 
            {
               console.log(arguments)
               console.log(clue.dclueid43)
               await channel4.send('> 450 - 곽편집의 신체검사 : 옷이꽤재재하고 냄새가난다')
               const ms1 = await channel4.send({ files: ['./clue/450.png'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue5)
               .messages.fetch(clue.dclueid43)
               .then((msg) => msg.edit('~~**450> 신체검사**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '460' : 
            {
               console.log(arguments)
               console.log(clue.dclueid44)
               await channel4.send('> 460 - 곽편집의 각종 메모리 카드: 새롬의 영상들로 가득하다')
               const ms1 = await channel4.send({ files: ['./clue/460.png'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue5)
               .messages.fetch(clue.dclueid44)
               .then((msg) => msg.edit('~~**460> SD카드**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '470' : 
            {
               console.log(arguments)
               console.log(clue.dclueid45)
               await channel4.send('> 470 - 곽편집의 집 : 온갖 피규어가 가득하다')
               const ms1 = await channel4.send({ files: ['./clue/470.png'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue5)
               .messages.fetch(clue.dclueid45)
               .then((msg) => msg.edit('~~**470> 집**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '480' : 
            {
               console.log(arguments)
               console.log(clue.dclueid46)
               await channel4.send('> 480 - 곽편집의 블로그 : 음식리뷰가 12월 3일 오후7시 15분에 올라와 있다.')
               const ms1 = await channel4.send({ files: ['./clue/470.png'] })
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue5)
               .messages.fetch(clue.dclueid46)
               .then((msg) => msg.edit('~~**480> 블로그**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
            case '490' : 
            {
               console.log(arguments)
               console.log(clue.dclueid47)
               await channel4.send('> 490 - 곽편집의 메시지')
               const ms1 = await channel4.send('```12월 1일\n편집 : 새롬아. 이번 달 급여는 안 주는 거야?\n새롬 : 아? 미안 편집 오빠. \n내가 급하게 써야하는 돈이 있어서 지금 주기는...\n편집 : 아니,... 돈을 제때에 준 적이 없는 것 같다 새롬아. \n이러면 나도 힘들어. 내 피규어들... 못 산 것들 어떻게 할 건데?\n새롬 : 미안, 미안. 내가 나중에 진짜 다 사줄게. \n우선 지금은내가 일을 좀 확장하느라고... \n조금만 기다려 주면 안 될까?\n편집 : 하... 이번달에는 줘야해. 집세도 밀릴 것 같아.\n새롬 : 응 알았어.근데. 나쁜 뜻이 있는 건 아니고, 정말 걱정되서 그러는건데... \n그 피규어들만 안 사면 집세밀릴 일은 없을 것 같은데... \n오빠도 나이가 있는데 그만 졸업해야지. \n매일 싸고 도는 유미짱. 그 못생긴 것 때문에 오빠가 여친도 없는거지...\n편집 : 너 지금 우리 유미짱 모독했어!!!!\n새롬 : 아, 미안. 여튼 이제 이 일만 잘 되면 내가 돈 쓸어모은다니까. \n아! 오빠. 12월 3일 우리 합방하기로 했어.호랑이 올 거야. \n그날 회의할거니까 9시까지 울 집으로 와.\n편집 : 호랑이? 괜찮겠어? 엄연히 경쟁업체인데...\n새롬 : 웅웅 괜찮아. 꼭 와!\n편집 : ......알았어```')
               await ms1.react('❤️');
               await channel5.send("조사횟수"+(admin.vpoint-1)+"개 남음")
               client.channels.cache
               .get(chclue5)
               .messages.fetch(clue.dclueid47)
               .then((msg) => msg.edit('~~**490> 메시지**~~'));
               database = {
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
                class5 : admin.class6,
                player5 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                    round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint -1
               }
               fs.writeFileSync(dfilePath, JSON.stringify(database));
               break;
            }
         
         
         
         
         
         
         
          }
    }
      else if(admin.vpoint <= 0){
        console.log('3')
        message.channel.send('조사 횟수가 없습니다.')
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

