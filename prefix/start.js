const fs = require('node:fs');
const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, ClientUser, User, time, GuildChannel, GuildManager, MessageManager, GuildMemberManager, GuildBanManager, GuildBan, GuildStickerManager, PermissionsBitField, PermissionOverwriteManager, MessageFlagsBitField, GuildMemberRoleManager, GuildMember } = require('discord.js');
const { record, playcode } = require('../config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans] });
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
const today = new Date();
const date = "" + today.getFullYear() + today.getMonth() + today.getDate();



var player1 = "미지정"
var player2 = "미지정"
var player3 = "미지정"
var player4 = "미지정"
var player5 = "미지정"
var pui1 = ""
var pui2 = ""
var pui3 = ""
var pui4 = ""
var pui5 = ""
const { character1, character2, character3, character4, character5 } = require('../config.json');

var readynum = 0
var class1 = 0
var class2 = 0
var class3 = 0
var class4 = 0
var class5 = 0

var startnum = 0 

var timer = 0


module.exports = {
    name: "준비",
    async execute(message, args, client ) {
      var database = message.guild.ownerId
      arguments = args.shift(2)
      
      ////저장정보 불러오는 부분
      var uid = message.author.id
      const cfilePath = `./data/${uid}.json`;
      const dfilePath = `./data/${database}.json`;
      const user = JSON.parse(fs.readFileSync(cfilePath, "utf-8"));
//////////////////저장정보
      ///const arguments = args.shift(1)
      ////console.log(arguments)
      try {
        if (class1 == 1 || class2 == 1 || class3 == 1 || class4 == 1 || class5 == 1 && arguments !== "끝") 
{
  await message.channel.send('내가 선택한 롤 자리에 다른 사람이 들어가 있습니다.');
}

        if(user.class === character1 && readynum < 5 && class1 == 0)
        {
          readynum ++
          class1 ++
          player1 = user.name
          pui1 = user.uid
          database = {
            readynum : + 1,
            class1 : user.name,
            player1 : user.id
         }
         fs.writeFileSync(dfilePath, JSON.stringify(database));
         
        }
        
        if(user.class === character2 && readynum < 5 && class2 == 0)
        {
          
          readynum ++
          class2 ++
          player2 = user.name
          pui2 = user.uid
          database = {
            readynum : + 1,
            class2 : user.name,
            player2 : user.id
         }
         fs.writeFileSync(dfilePath, JSON.stringify(database));
          await message.channel.send(">>> "+character1+"   역할"+"\n"+player1+"\n"+"\n"+character2+"   역할"+"\n"+player2+"\n"+"\n"+character3+"   역할"+"\n"+player3+"\n"+"\n"+character4+"   역할"+"\n"+player4+"\n"+"\n"+character5+"   역할"+"\n"+player5)

        }
        if(user.class === character3 && readynum < 5 && class3 == 0)
        {
          readynum ++
          class3 ++
          player3 = user.name
          pui3 = user.uid
          database = {
            readynum : + 1,
            class3 : user.name,
            player3 : user.id
         }
         fs.writeFileSync(dfilePath, JSON.stringify(database));
          await message.channel.send(">>> "+character1+"   역할"+"\n"+player1+"\n"+"\n"+character2+"   역할"+"\n"+player2+"\n"+"\n"+character3+"   역할"+"\n"+player3+"\n"+"\n"+character4+"   역할"+"\n"+player4+"\n"+"\n"+character5+"   역할"+"\n"+player5)

        }
        if(user.class === character4 && readynum < 5 && class4 == 0)
        {
          readynum ++
          class4 ++
          player4 = user.name
          pui4 = user.uid
          database = {
            readynum : + 1,
            class4 : user.name,
            player4 : user.id
         }
         fs.writeFileSync(dfilePath, JSON.stringify(database));
          await message.channel.send(">>> "+character1+"   역할"+"\n"+player1+"\n"+"\n"+character2+"   역할"+"\n"+player2+"\n"+"\n"+character3+"   역할"+"\n"+player3+"\n"+"\n"+character4+"   역할"+"\n"+player4+"\n"+"\n"+character5+"   역할"+"\n"+player5)

        }
        if(user.class === character5 && readynum < 5 && class5 == 0)
        {
          readynum ++
          class5 ++
          player5 = user.name
          pui5 = user.uid
          database = {
            readynum : + 1,
            class5 : user.name,
            player5 : user.id
         }
         fs.writeFileSync(dfilePath, JSON.stringify(database));
          await message.channel.send(">>> "+character1+"   역할"+"\n"+player1+"\n"+"\n"+character2+"   역할"+"\n"+player2+"\n"+"\n"+character3+"   역할"+"\n"+player3+"\n"+"\n"+character4+"   역할"+"\n"+player4+"\n"+"\n"+character5+"   역할"+"\n"+player5)

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