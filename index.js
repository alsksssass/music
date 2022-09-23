const fs = require('node:fs');
const path = require('node:path');
/////
var redis = require('redis');
var reclient = redis.createClient(process.env.REDISCLOUD_URL, {no_ready_check: true});

//////
const { Client, GatewayIntentBits, Collection, GuildMember, PermissionFlagsBits, Message, MessageMentions } = require('discord.js');
const { token, prefix } = require('./config.json');
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
const { RESTJSONErrorCodes } = require('discord.js');
const { VoiceConnectionStatus, AudioPlayerStatus } = require('@discordjs/voice');
const message = require('./prefix/message');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
const prefixFiles = fs.readdirSync('./prefix').filter(file => file.endsWith('.js'));

for (const file of prefixFiles) {
	const prefixs = require(`./prefix/${file}`);
	client.commands.set(prefixs.name, prefixs);
}
// When the client is ready, run this code (only once)
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

///시간
var htt = ''
var mtt = ''
//////케릭터 이름
var character1 = "수성" 
var character2 = "지구"
var character3 = "화성"
var character4 = "목성"
var character5 = "금성"

////롤

var player1 = ""
var player2 = ""
var player3 = ""
var player4 = ""
var player5 = ""



//////

client.once('ready', () => {
  console.log('준비됨');
});

client.on('messageCreate', async (message) => { 
				///
	////if(!message.member.permissions.has('Administrator')) return;
	if(!message.content.startsWith(prefix)) return;
	if(message.author.bot) return;
	/////????????????????? if (message.guild.ownerId) return
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift();
	const coget = client.commands.get(command);
	if(!client.commands.has(command)) return

	try{

		coget.execute(message, args, client);


	}
	catch(error){
		
console.error(error);
	}
});


client.on('messageCreate', async (message) => { 

	var uid = message.author.id
	var database = message.guild.ownerId
      const cfilePath = `./data/${uid}.json`;
      const dfilePath = `./data/${database}.json`;
      const user = JSON.parse(fs.readFileSync(dfilePath, "utf-8"));
	///
////if(!message.member.permissions.has('Administrator')) return;
if(!message.content.startsWith(prefix)) return;
if(message.author.bot) return;
/////????????????????? if (message.guild.ownerId) return
const args = message.content.slice(prefix.length).trim().split(/ +/);
const command = args.shift();
const coget = client.commands.get(command);
if(!client.commands.has(command)) return

try{

/////////레디부분
if(user.readynum > 0){
const channel = client.channels.cache.get('1022125527118663700');
await channel.send('10초내에 모두 준비를 마쳐주세요!');
await wait(1000)
await channel.send('9초내에 모두 준비를 마쳐주세요!');
await wait(1000)
await channel.send('8초내에 모두 준비를 마쳐주세요!');
await wait(1000)
await channel.send('7초내에 모두 준비를 마쳐주세요!');
await wait(1000)
await channel.send('6초내에 모두 준비를 마쳐주세요!');
await wait(1000)
await channel.send('5초내에 모두 준비를 마쳐주세요!');
await wait(1000)
await channel.send('4초내에 모두 준비를 마쳐주세요!');
await wait(1000)
await channel.send('3초내에 모두 준비를 마쳐주세요!');
await wait(1000)
await channel.send('2초내에 모두 준비를 마쳐주세요!');
await wait(1000)
await channel.send('1초내에 모두 준비를 마쳐주세요!');
if(user.readynum < 1){
	database = {
		readynum : 0
	 }
	 fs.writeFileSync(dfilePath, JSON.stringify(database));
	const channel = client.channels.cache.get('1022125527118663700');
channel.send('⌛ 시간내에 모두 준비하지 못했습니다. 재 시도 해주세요');


if(user.readynum == 1){
	database = {
		readynum : 0,
		starttime : date
	 }
	 fs.writeFileSync(dfilePath, JSON.stringify(database));
	const channel = client.channels.cache.get('1022125527118663700');
channel.send('시작!');
message.guild.members.cache.get(user.player1).roles.add(playcode);/////특정 유저에게 롤주기 성공!!
message.guild.members.cache.get(user.player1).roles.remove(playcode);
message.guild.members.cache.get(user.player2).roles.add(playcode);/////특정 유저에게 롤주기 성공!!
message.guild.members.cache.get(user.player2).roles.remove(playcode);
message.guild.members.cache.get(user.player3).roles.add(playcode);/////특정 유저에게 롤주기 성공!!
message.guild.members.cache.get(user.player3).roles.remove(playcode);
message.guild.members.cache.get(user.player4).roles.add(playcode);/////특정 유저에게 롤주기 성공!!
message.guild.members.cache.get(user.player4).roles.remove(playcode);
message.guild.members.cache.get(user.player5).roles.add(playcode);/////특정 유저에게 롤주기 성공!!
message.guild.members.cache.get(user.player5).roles.remove(playcode);

}
}
}
}
catch(error){

console.error(error);
}
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;
	const command = interaction.client.commands.get(interaction.commandName);


	if (!command) return;



	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});
//////////////////////////////////초기입장 멘트/
///////////////

client.on('guildMemberAdd', async member => {
await wait(1000);
member.guild.channels.cache.find(i => i.name === '롤지받기').send('안녕')
})


//Welcome & goodbye messages end\\
//////////////
/////////////
client.login(token);
