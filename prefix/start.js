const fs = require('node:fs');
const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, ClientUser, User, time, GuildChannel, GuildManager, MessageManager, GuildMemberManager, GuildBanManager, GuildBan, GuildStickerManager, PermissionsBitField, PermissionOverwriteManager, MessageFlagsBitField, GuildMemberRoleManager, gu, Role } = require('discord.js');
const { record } = require('../config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans] });
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
var player1 = "미지정"
var player2 = "미지정"
var player3 = "미지정"
var player4 = "미지정"
var player5 = "미지정"
const { character1, character2, character3, character4, character5 } = require('../config.json');

var readynum = 0
var class1 = 0
var class2 = 0
var class3 = 0
var class4 = 0
var class5 = 0


module.exports = {
    name: "준비",
    async execute(message, args, client) {
      
      ////저장정보 불러오는 부분
      var uid = message.author.id
      const cfilePath = `./data/${uid}.json`;
      const user = JSON.parse(fs.readFileSync(cfilePath, "utf-8"));
//////////////////저장정보
      ///const arguments = args.shift(1)
      ////console.log(arguments)
      try {
        if (class1 != 0 || class2 != 0 || class3 != 0 || class4 != 0 || class5 != 0) 
{
  await message.channel.send('내가 선택한 롤 자리에 다른 사람이 들어가 있습니다.');
}

        if(user.class === character1 && readynum < 6 && class1 != 1)
        {
          readynum ++
          class1 ++
          player1 = user.name
          await message.channel.send(">>> "+character1+"   역할"+"\n"+player1)
          await message.channel.send(">>> "+character2+"   역할"+"\n"+player2)
          await message.channel.send(">>> "+character3+"   역할"+"\n"+player3)
          await message.channel.send(">>> "+character4+"   역할"+"\n"+player4)
          await message.channel.send(">>> "+character5+"   역할"+"\n"+player5)
          

        }
        if(user.class === character2 && readynum < 6 && class2 != 1)
        {
          readynum ++
          class2 ++
          player1 = user.name
          await message.channel.send(">>> "+character1+"   역할"+"\n"+player1)
          await message.channel.send(">>> "+character2+"   역할"+"\n"+player2)
          await message.channel.send(">>> "+character3+"   역할"+"\n"+player3)
          await message.channel.send(">>> "+character4+"   역할"+"\n"+player4)
          await message.channel.send(">>> "+character5+"   역할"+"\n"+player5)


        }
        if(user.class === character3 && readynum < 6 && class3 != 1)
        {
          readynum ++
          class3 ++
          player1 = user.name
          await message.channel.send(">>> "+character1+"   역할"+"\n"+player1)
          await message.channel.send(">>> "+character2+"   역할"+"\n"+player2)
          await message.channel.send(">>> "+character3+"   역할"+"\n"+player3)
          await message.channel.send(">>> "+character4+"   역할"+"\n"+player4)
          await message.channel.send(">>> "+character5+"   역할"+"\n"+player5)


        }
        if(user.class === character4 && readynum < 6 && class4 != 1)
        {
          readynum ++
          class4 ++
          player1 = user.name
          await message.channel.send(">>> "+character1+"   역할"+"\n"+player1)
          await message.channel.send(">>> "+character2+"   역할"+"\n"+player2)
          await message.channel.send(">>> "+character3+"   역할"+"\n"+player3)
          await message.channel.send(">>> "+character4+"   역할"+"\n"+player4)
          await message.channel.send(">>> "+character5+"   역할"+"\n"+player5)


        }
        if(user.class === character5 && readynum < 6 && class5 != 1)
        {
          readynum ++
          class5 ++
          player1 = user.name
          await message.channel.send(">>> "+character1+"   역할"+"\n"+player1)
          await message.channel.send(">>> "+character2+"   역할"+"\n"+player2)
          await message.channel.send(">>> "+character3+"   역할"+"\n"+player3)
          await message.channel.send(">>> "+character4+"   역할"+"\n"+player4)
          await message.channel.send(">>> "+character5+"   역할"+"\n"+player5)


        }
        if (readynum > 5){
          await message.channel.send('인원이 다 찼습니다.')
        }
 // console.log(class1)
  //console.log(class2)
  //console.log(class3)
  //console.log(class4)
  //console.log(class5)

       /// message.member.roles.add('1022144442175590410')/////.removeRole(options)
       /// message.member.roles.remove('1022087211266617344')
      } catch (err) {
  console.error(err);
  
  
}
},
};////////////////롤추가 제거 확인