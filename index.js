const fs = require('node:fs');
const path = require('node:path');
const today = new Date();
const date = "" + today.getFullYear() + today.getMonth() + today.getDate();

const { Client, GatewayIntentBits, Collection, GuildMember, PermissionFlagsBits, Message, MessageMentions } = require('discord.js');
const { token, prefix, playcode, stanby, owner, character1, character2, character3, character4, character5, totalplayer } = require('./config.json');
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

	
	///
////if(!message.member.permissions.has('Administrator')) return;
if(!message.content.startsWith(prefix)) return;
if(message.author.bot) return;
/////????????????????? if (message.guild.ownerId) return
const args = message.content.slice(prefix.length).trim().split(/ +/);
const command = args.shift();
if(!client.commands.has(command)) return

try{
	///////////저장소
	var uid = message.author.id
	var database = message.guild.ownerId
      const cfilePath = `./data/${uid}.json`;
      const dfilePath = `./data/${database}.json`;
	  !fs.existsSync(cfilePath) ? fs.writeFileSync(cfilePath, JSON.stringify({})) : null;
      !fs.existsSync(dfilePath) ? fs.writeFileSync(dfilePath, JSON.stringify({})) : null;
      const admin = JSON.parse(fs.readFileSync(dfilePath, "utf-8"));
	  const user = JSON.parse(fs.readFileSync(cfilePath, "utf-8"));

//////////저장소
var countch = 10
/////////레디부분
if(admin.readynum == 1){
if(message.author.bot) return;
const channel = client.channels.cache.get('1022125527118663700');
await channel.send("10초안에 모두 준비를 마쳐주세요")
}


	if(admin.readynum < totalplayer) {
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
			starttime : 0,
			endtime : 0,
		   
		 }
	 fs.writeFileSync(dfilePath, JSON.stringify(database));
	await message.channel.send("실패!!! 다시 시도해 주세요")
	}
	else return;


if(admin.readynum == totalplayer )
{
	console.log("성공")
database = {
		class1 : admin.class,
		player1 : admin.name,
		class2 : admin.class2,
		player2 : admin.player2,
		class3 : admin.class3,
		player3 : admin.player3,
		class4 : admin.class4,
		player4 : admin.player4,
		class5 : admin.class5,
		player5 : admin.player5,
		starttime : date,
		endtime : admin.endtime
	 }
	 fs.writeFileSync(dfilePath, JSON.stringify(database));
	 console.log(admin.readynum+"성공")
	const channel = await client.channels.cache.get('1022125527118663700');
await channel.send('시작!')
await message.guild.members.cache.get(admin.player1).roles.add(playcode);/////특정 유저에게 롤주기 성공!!
await message.guild.members.cache.get(admin.player1).roles.remove(stanby);
await message.guild.members.cache.get(admin.player2).roles.add(playcode);/////특정 유저에게 롤주기 성공!!
await message.guild.members.cache.get(admin.player2).roles.remove(stanby);
await message.guild.members.cache.get(admin.player3).roles.add(playcode);/////특정 유저에게 롤주기 성공!!
await message.guild.members.cache.get(admin.player3).roles.remove(stanby);
await message.guild.members.cache.get(admin.player4).roles.add(playcode);/////특정 유저에게 롤주기 성공!!
await message.guild.members.cache.get(admin.player4).roles.remove(stanby);
await message.guild.members.cache.get(admin.player5).roles.add(playcode);/////특정 유저에게 롤주기 성공!!
await message.guild.members.cache.get(admin.player5).roles.remove(stanby);

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
