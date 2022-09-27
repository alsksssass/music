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
    name: "취소준비",
    async execute(message, args, client ) {
      
      ////저장정보 불러오는 부분
      var database = message.guild.ownerId
      var uid = message.author.id
      const cfilePath = `./data/${uid}.json`;
      const dfilePath = `./data/${database}.json`;
      !fs.existsSync(cfilePath) ? fs.writeFileSync(cfilePath, JSON.stringify({})) : null;
      !fs.existsSync(dfilePath) ? fs.writeFileSync(dfilePath, JSON.stringify({})) : null;
    const user = fs.readFileSync(cfilePath, "utf-8");
      const admin = fs.readFileSync(dfilePath, "utf-8");
//////////////////
      try {
        if(message.author.id === message.guild.ownerId) {
          console.log("오너파일 덮어쓰기")
            database = {
                readynum : 0,
                class1 : "미지정",
                player1 : "미지정",
                class2 : "미지정",
                player2 : "미지정",
                class3 : "미지정",
                player3 : "미지정",
                class4 : "미지정",
                player4 : "미지정",
                class5 : "미지정",
                player5 : "미지정",
                class6 : "미지정",
                player6 : "미지정",
                playerid1 : "미지정",
                playerid2 : "미지정",
                playerid3 : "미지정",
                playerid4 : "미지정",
                playerid5 : "미지정",
                playerid6 : "미지정",
                round : 0,
                starttime : 0,
                endtime : 0,
                vpoint : 0
               
             }
         fs.writeFileSync(dfilePath, JSON.stringify(database));
         
        }
        else return;
    
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
  
    }
}
