

const { Client, GatewayIntentBits, Collection, MembershipScreeningFieldType, GuildMember, ClientUser, User, time, GuildChannel, GuildManager, MessageManager, GuildMemberManager, GuildBanManager, GuildBan, GuildStickerManager, PermissionsBitField, PermissionOverwriteManager, MessageFlagsBitField } = require('discord.js');
const { record } = require('../config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans] });
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
module.exports = {
    name: "날",
    async execute(message, args, client) {
        const content = args.shift(1)
        h = parseInt(content/60)
        m = content%60
const d = new Date
date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();
date2 = (d.getHours()+h) + ":" + (d.getMinutes()
+m) + ", " + d.toDateString();
var hr = d.getHours()
var mr = d.getMinutes()
var ht = hr+h
var mt = mr+m

 message.channel.send(date)
 
 message.channel.send("목표시간"+date2)
}
}