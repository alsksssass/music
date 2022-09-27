const fs = require('node:fs');
const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, ClientUser, User, time, GuildChannel, GuildManager, MessageManager, GuildMemberManager, GuildBanManager, GuildBan, GuildStickerManager, PermissionsBitField, PermissionOverwriteManager, MessageFlagsBitField, GuildMemberRoleManager, GuildMember } = require('discord.js');
const { record, playcode, owner, character1, character2, character3, character4, character5, character6, botplay, botstan  } = require('../config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans] });
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
const today = new Date();
const date = "" + today.getFullYear() +"년" + today.getMonth() + "월" + today.getDate() + "일" + today.getHours() + "시" + today.getMinutes() + "분";


var timer = 0


module.exports = {
    name: "준비",
    async execute(message, args, client ) {
      arguments = args.shift(2)
      
      
      ///const arguments = args.shift(1)
      ////console.log(arguments)
      try {
        console.log("넘어옴1")
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
//         if (admin.class1 == character1 || admin.class2 == character2 || admin.class3 == character3 || admin.class4 == character4 || admin.class5 == character5 )
// {
//   await message.channel.send('이미 선택된 롤입니다.');
//   console.log(user.name+"실패시")
// }

        if(user.class === character1 && admin.readynum < totalplayer && admin.class1 != character1 && totalplayer == 5)
        {
          console.log("넘어옴1")
          database = {
            readynum : admin.readynum += 1,
                class1 : user.class,
                player1 : user.name,
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
                playerid1 : user.id,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint
             }
            fs.writeFileSync(dfilePath, JSON.stringify(database));
         
         
        }
        else if(user.class === character2 && admin.readynum < totalplayer && admin.class2 != character2 && totalplayer == 5)
        {
          console.log("넘어옴2")
          database = {
            readynum : admin.readynum += 1,
                class1 : admin.class1,
                player1 : admin.player1,
                class2 : user.class,
                player2 : user.name,
                class3 : admin.class3,
                player3 : admin.player3,
                class4 : admin.class4,
                player4 : admin.player4,
                class5 : admin.class5,
                player5 : admin.player5,
                class6 : admin.class6,
                player6 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : user.id,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint
             }
            fs.writeFileSync(dfilePath, JSON.stringify(database));
         
         
        }

        else if(user.class === character3 && admin.readynum < totalplayer && admin.class3 != character3 && totalplayer == 5)
        {
          console.log("넘어옴3")
          database = {
            readynum : admin.readynum += 1,
                class1 : admin.class1,
                player1 : admin.player1,
                class2 : admin.class2,
                player2 : admin.player2,
                class3 : user.class,
                player3 : user.name,
                class4 : admin.class4,
                player4 : admin.player4,
                class5 : admin.class5,
                player5 : admin.player5,
                class6 : admin.class6,
                player6 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : user.id,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint
             }
            fs.writeFileSync(dfilePath, JSON.stringify(database));
         
         
        }

        else if(user.class === character4 && admin.readynum < totalplayer && admin.class4 != character4 && totalplayer == 5)
        {
          console.log("넘어옴4")
          database = {
            readynum : admin.readynum += 1,
                class1 : admin.class1,
                player1 : admin.player1,
                class2 : admin.class2,
                player2 : admin.player2,
                class3 : admin.class3,
                player3 : admin.player3,
                class4 : user.class,
                player4 : user.name,
                class5 : admin.class5,
                player5 : admin.player5,
                class6 : admin.class6,
                player6 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : user.id,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint
             }
            fs.writeFileSync(dfilePath, JSON.stringify(database));
         
         
        }

        else if(user.class === character5 && admin.readynum < totalplayer && admin.class5 != character5 && totalplayer == 5)
        {
          console.log("넘어옴5")
          database = {
            readynum : admin.readynum += 1,
                class1 : admin.class1,
                player1 : admin.player1,
                class2 : admin.class2,
                player2 : admin.player2,
                class3 : admin.class3,
                player3 : admin.player3,
                class4 : admin.class4,
                player4 : admin.player4,
                class5 : user.class,
                player5 : user.name,
                class6 : admin.class6,
                player6 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : user.id,
                playerid6 : admin.playerid6,
                round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint
             }
            fs.writeFileSync(dfilePath, JSON.stringify(database));
         }

         if(user.class === character1 && admin.readynum < totalplayer && admin.class1 != character1 && totalplayer == 6)
        {
          console.log("넘어옴1")
          database = {
            readynum : admin.readynum += 1,
                class1 : user.class,
                player1 : user.name,
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
                playerid1 : user.id,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint
             }
            fs.writeFileSync(dfilePath, JSON.stringify(database));
         
         
        }
        else if(user.class === character2 && admin.readynum < totalplayer && admin.class2 != character2 && totalplayer == 6)
        {
          console.log("넘어옴2")
          database = {
            readynum : admin.readynum += 1,
                class1 : admin.class1,
                player1 : admin.player1,
                class2 : user.class,
                player2 : user.name,
                class3 : admin.class3,
                player3 : admin.player3,
                class4 : admin.class4,
                player4 : admin.player4,
                class5 : admin.class5,
                player5 : admin.player5,
                class6 : admin.class6,
                player6 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : user.id,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint
             }
            fs.writeFileSync(dfilePath, JSON.stringify(database));
         
         
        }

        else if(user.class === character3 && admin.readynum < totalplayer && admin.class3 != character3 && totalplayer == 6)
        {
          console.log("넘어옴3")
          database = {
            readynum : admin.readynum += 1,
                class1 : admin.class1,
                player1 : admin.player1,
                class2 : admin.class2,
                player2 : admin.player2,
                class3 : user.class,
                player3 : user.name,
                class4 : admin.class4,
                player4 : admin.player4,
                class5 : admin.class5,
                player5 : admin.player5,
                class6 : admin.class6,
                player6 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : user.id,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint
             }
            fs.writeFileSync(dfilePath, JSON.stringify(database));
         
         
        }

        else if(user.class === character4 && admin.readynum < totalplayer && admin.class4 != character4 && totalplayer == 6)
        {
          console.log("넘어옴4")
          database = {
            readynum : admin.readynum += 1,
                class1 : admin.class1,
                player1 : admin.player1,
                class2 : admin.class2,
                player2 : admin.player2,
                class3 : admin.class3,
                player3 : admin.player3,
                class4 : user.class,
                player4 : user.name,
                class5 : admin.class5,
                player5 : admin.player5,
                class6 : admin.class6,
                player6 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : user.id,
                playerid5 : admin.playerid5,
                playerid6 : admin.playerid6,
                round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint
             }
            fs.writeFileSync(dfilePath, JSON.stringify(database));
         
         
        }

        else if(user.class === character5 && admin.readynum < totalplayer && admin.class5 != character5 && totalplayer == 6)
        {
          console.log("넘어옴5")
          database = {
            readynum : admin.readynum += 1,
                class1 : admin.class1,
                player1 : admin.player1,
                class2 : admin.class2,
                player2 : admin.player2,
                class3 : admin.class3,
                player3 : admin.player3,
                class4 : admin.class4,
                player4 : admin.player4,
                class5 : user.class,
                player5 : user.name,
                class6 : admin.class6,
                player6 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : user.id,
                playerid6 : admin.playerid6,
                round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint
             }
            fs.writeFileSync(dfilePath, JSON.stringify(database));
         }
         else if(user.class === character6 && admin.readynum < totalplayer && admin.class6 != character6 && totalplayer == 6)
        {
          console.log("넘어옴6")
          database = {
            readynum : admin.readynum += 1,
                class1 : admin.class1,
                player1 : admin.player1,
                class2 : admin.class2,
                player2 : admin.player2,
                class3 : admin.class3,
                player3 : admin.player3,
                class4 : admin.class4,
                player4 : admin.player4,
                class5 : user.class,
                player5 : user.name,
                class6 : admin.class6,
                player6 : admin.player6,
                playerid1 : admin.playerid1,
                playerid2 : admin.playerid2,
                playerid3 : admin.playerid3,
                playerid4 : admin.playerid4,
                playerid5 : admin.playerid5,
                playerid6 : user.id,
                round : admin.round,
                starttime : admin.starttime,
                endtime : admin.endtime,
                vpoint : admin.vpoint
             }
            fs.writeFileSync(dfilePath, JSON.stringify(database));
         }
else{await message.channel.send('이미 선택된 롤입니다.');}
       /// message.member.roles.add('1022144442175590410')/////.removeRole(options)
       /// message.member.roles.remove('1022087211266617344')
      } catch (err) {
  console.error(err);
  
  
}
}
};////////////////롤추가 제거 확인