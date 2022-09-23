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
const { character1, character2, character3, character4, character5 } = require('../config.json');



var timer = 0


module.exports = {
    name: "준비",
    async execute(message, args, client ) {
      arguments = args.shift(2)
      
      
      ///const arguments = args.shift(1)
      ////console.log(arguments)
      try {
      ////저장정보 불러오는 부분
      var database = message.guild.ownerId
      var uid = message.author.id
      const cfilePath = `./data/${uid}.json`;
      const dfilePath = `./data/${database}.json`;
      !fs.existsSync(cfilePath) ? fs.writeFileSync(cfilePath, JSON.stringify({})) : null;
      !fs.existsSync(dfilePath) ? fs.writeFileSync(dfilePath, JSON.stringify({})) : null;
    const user = JSON.parse(fs.readFileSync(cfilePath, "utf-8"));
      const admin = JSON.parse(fs.readFileSync(dfilePath, "utf-8"));
//////////////////
     
        if (admin.class1 != 0 || admin.class2 != 0 || admin.class3 != 0 || admin.class4 != 0 || admin.class5 != 0 )
{
  await message.channel.send('이미 선택된 롤입니다.');
}


        if(user.class1 === character1 && admin.readynum < 5 && admin.class1 == 0)
        {
          database = {
            readynum : + 1,
            class1 : user.name,
            player1 : user.id,
            class2,
            player2,
            class3,
            player3,
            class4,
            player4,
            class5,
            player5,
            starttime,
            endtime,
           
         }
         fs.writeFileSync(dfilePath, JSON.stringify(database));
         
        }

       /// message.member.roles.add('1022144442175590410')/////.removeRole(options)
       /// message.member.roles.remove('1022087211266617344')
      } catch (err) {
  console.error(err);
  
  
}
},
};////////////////롤추가 제거 확인