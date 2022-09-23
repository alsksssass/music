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
      const user = JSON.parse(fs.readFileSync(cfilePath, "utf-8"));
      const admin = JSON.parse(fs.readFileSync(dfilePath, "utf-8"));

      try {
        if(message.author.id === message.guild.ownerId) {
          database = {
            readynum : admin.readynum *= 0,
            class1 : 0,
            player1 : 0,
            class2 : 0,
            player2 : 0,
            class3 : 0,
            player3 : 0,
            class4 : 0,
            player4 : 0,
            class5 : 0,
            player5 : 0,
            starttime : 0,
            endtime : 0
         
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
