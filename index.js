const fs = require('node:fs');
const path = require('node:path');
const today = new Date();
const date = "" + today.getFullYear() + today.getMonth() + today.getDate() + today.getHours() + today.getMinutes();

const { Client, GatewayIntentBits, Collection, GuildMember, PermissionFlagsBits, Message, MessageMentions } = require('discord.js');
const { token, prefix, playcode, stanby, owner, character1, character2, character3, character4, character5, totalplayer, character6, botplay, botstan } = require('./config.json');
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
const { RESTJSONErrorCodes } = require('discord.js');
const { createAudioResource, createAudioPlayer, joinVoiceChannel, NoSubscriberBehavior, AudioPlayerStatus, generateDependencyReport, getVoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const message = require('./prefix/message');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildVoiceStates] });

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
/////////레디부분
if(admin.readynum == 1){
if(message.author.bot) return;
const channel = client.channels.cache.get('1022125527118663700');
await channel.send("15초안에 모두 준비를 마쳐주세요")
await channel.send({ content: ">>> "+admin.class1+"역"+"\n"+admin.player1+"님"+"\n"+"\n"+admin.class2+"역"+"\n"+admin.player2+"님"+"\n"+"\n"+admin.class3+"역"+"\n"+admin.player3+"님"+"\n"+"\n"+admin.class4+"역"+"\n"+admin.player4+"님"+"\n"+"\n"+admin.class5+"역"+"\n"+admin.player5+"님"+"\n"+"\n"})
await wait(1000);
await channel.send("14초안에 모두 준비를 마쳐주세요")
await wait(1000);
await channel.send("13초안에 모두 준비를 마쳐주세요")
await wait(1000);
await channel.send("12초안에 모두 준비를 마쳐주세요")
await wait(1000);
await channel.send("11초안에 모두 준비를 마쳐주세요")
await wait(1000);
await channel.send("10초안에 모두 준비를 마쳐주세요")
await wait(1000);
await channel.send("9초안에 모두 준비를 마쳐주세요")
await wait(1000);
await channel.send("8초안에 모두 준비를 마쳐주세요")
await wait(1000);
await channel.send("7초안에 모두 준비를 마쳐주세요")
await wait(1000);
await channel.send("6초안에 모두 준비를 마쳐주세요")
await wait(1000);
await channel.send("5초안에 모두 준비를 마쳐주세요")
await wait(1000);
await channel.send("4초안에 모두 준비를 마쳐주세요")
await wait(1000);
await channel.send("3초안에 모두 준비를 마쳐주세요")
await wait(1000);
await channel.send("2초안에 모두 준비를 마쳐주세요")
await wait(1000);
await channel.send("1초안에 모두 준비를 마쳐주세요")
await wait(1000);


}
if(admin.readynum == 2){
	if(message.author.bot) return;
	const channel = client.channels.cache.get('1022125527118663700');
	await channel.send({ content: ">>> "+admin.class1+"역"+"\n"+admin.player1+"님"+"\n"+"\n"+admin.class2+"역"+"\n"+admin.player2+"님"+"\n"+"\n"+admin.class3+"역"+"\n"+admin.player3+"님"+"\n"+"\n"+admin.class4+"역"+"\n"+admin.player4+"님"+"\n"+"\n"+admin.class5+"역"+"\n"+admin.player5+"님"+"\n"+"\n" })
	}
	if(admin.readynum == 3){
		if(message.author.bot) return;
		const channel = client.channels.cache.get('1022125527118663700');
		await channel.send({ content: ">>> "+admin.class1+"역"+"\n"+admin.player1+"님"+"\n"+"\n"+admin.class2+"역"+"\n"+admin.player2+"님"+"\n"+"\n"+admin.class3+"역"+"\n"+admin.player3+"님"+"\n"+"\n"+admin.class4+"역"+"\n"+admin.player4+"님"+"\n"+"\n"+admin.class5+"역"+"\n"+admin.player5+"님"+"\n"+"\n" })
		}
		if(admin.readynum == 4){
			if(message.author.bot) return;
			const channel = client.channels.cache.get('1022125527118663700');
			await channel.send({ content: ">>> "+admin.class1+"역"+"\n"+admin.player1+"님"+"\n"+"\n"+admin.class2+"역"+"\n"+admin.player2+"님"+"\n"+"\n"+admin.class3+"역"+"\n"+admin.player3+"님"+"\n"+"\n"+admin.class4+"역"+"\n"+admin.player4+"님"+"\n"+"\n"+admin.class5+"역"+"\n"+admin.player5+"님"+"\n"+"\n" })
			}
			if(admin.readynum == 5){
				if(message.author.bot) return;
				const channel = client.channels.cache.get('1022125527118663700');
				await channel.send({ content: ">>> "+admin.class1+"역"+"\n"+admin.player1+"님"+"\n"+"\n"+admin.class2+"역"+"\n"+admin.player2+"님"+"\n"+"\n"+admin.class3+"역"+"\n"+admin.player3+"님"+"\n"+"\n"+admin.class4+"역"+"\n"+admin.player4+"님"+"\n"+"\n"+admin.class5+"역"+"\n"+admin.player5+"님"+"\n"+"\n" })
				}
				if(admin.readynum == 6){
					if(message.author.bot) return;
					const channel = client.channels.cache.get('1022125527118663700');
					await channel.send({ content: ">>> "+admin.class1+"역"+"\n"+admin.player1+"님"+"\n"+"\n"+admin.class2+"역"+"\n"+admin.player2+"님"+"\n"+"\n"+admin.class3+"역"+"\n"+admin.player3+"님"+"\n"+"\n"+admin.class4+"역"+"\n"+admin.player4+"님"+"\n"+"\n"+admin.class5+"역"+"\n"+admin.player5+"님"+"\n"+"\n"+admin.class6+"역"+"\n"+admin.player6+"님"+"\n"+"\n" })
					}
	

	if(admin.readynum != totalplayer && message.channel.id == stanby && totalplayer == 5) {
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
	await message.channel.send("실패!!! 다시 시도해 주세요")
	}


if(admin.readynum == totalplayer && totalplayer == 5 ){
	await wait(1000);
	console.log("성공")
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
		starttime : date,
		endtime : admin.endtime,
		vpoint : admin.vpoint
	 }
	 fs.writeFileSync(dfilePath, JSON.stringify(database));
	 console.log(admin.readynum+"성공")
	 try{
		const channel = client.channels.cache.get('1022125527118663700');
				await channel.send('시작!')
				const channel1 = client.channels.cache.get('1022125527118663700');
				await channel1.send({ content: ">>> "+admin.class1+"역"+"\n"+admin.player1+"님"+"\n"+"\n"+admin.class2+"역"+"\n"+admin.player2+"님"+"\n"+"\n"+admin.class3+"역"+"\n"+admin.player3+"님"+"\n"+"\n"+admin.class4+"역"+"\n"+admin.player4+"님"+"\n"+"\n"+admin.class5+"역"+"\n"+admin.player5+"님"+"\n"+"\n"+admin.starttime+"에 플레이 시작!" })
				client.user.setAvatar(botplay);
		message.guild.members.cache.get(admin.playerid1).roles.add(playcode).catch(console.warn = () => {});/////특정 유저에게 롤주기 성공!!
		message.guild.members.cache.get(admin.playerid1).roles.remove(stanby).catch(console.warn = () => {});
		message.guild.members.cache.get(admin.playerid2).roles.add(playcode).catch(console.warn = () => {});
		message.guild.members.cache.get(admin.playerid2).roles.remove(stanby).catch(console.warn = () => {});
		message.guild.members.cache.get(admin.playerid3).roles.add(playcode).catch(console.warn = () => {});
		message.guild.members.cache.get(admin.playerid3).roles.remove(stanby).catch(console.warn = () => {});
		message.guild.members.cache.get(admin.playerid4).roles.add(playcode).catch(console.warn = () => {});
		message.guild.members.cache.get(admin.playerid4).roles.remove(stanby).catch(console.warn = () => {});
		message.guild.members.cache.get(admin.playerid5).roles.add(playcode).catch(console.warn = () => {});
		message.guild.members.cache.get(admin.playerid5).roles.remove(stanby).catch(console.warn = () => {});
	}
	catch (err) {
		console.error(err);
	}
	 
				

}
if(admin.readynum == totalplayer && totalplayer == 6 ){
	await wait(1000);
	console.log("성공")
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
		starttime : date,
		endtime : admin.endtime,
		vpoint : admin.vpoint
	 }
	 fs.writeFileSync(dfilePath, JSON.stringify(database));
	 console.log(admin.readynum+"성공")
	 try{
		const channel = client.channels.cache.get('1022125527118663700');
				await channel.send('시작!')
				const channel1 = client.channels.cache.get('1022125527118663700');
				await channel1.send({ content: ">>> "+admin.class1+"역"+"\n"+admin.player1+"님"+"\n"+"\n"+admin.class2+"역"+"\n"+admin.player2+"님"+"\n"+"\n"+admin.class3+"역"+"\n"+admin.player3+"님"+"\n"+"\n"+admin.class4+"역"+"\n"+admin.player4+"님"+"\n"+"\n"+admin.class5+"역"+"\n"+admin.player5+"님"+"\n"+"\n"+admin.starttime+"에 플레이 시작!" })
				client.user.setAvatar(botplay);
		message.guild.members.cache.get(admin.playerid1).roles.add(playcode).catch(console.warn = () => {});/////특정 유저에게 롤주기 성공!!
		message.guild.members.cache.get(admin.playerid1).roles.remove(stanby).catch(console.warn = () => {});
		message.guild.members.cache.get(admin.playerid2).roles.add(playcode).catch(console.warn = () => {});
		message.guild.members.cache.get(admin.playerid2).roles.remove(stanby).catch(console.warn = () => {});
		message.guild.members.cache.get(admin.playerid3).roles.add(playcode).catch(console.warn = () => {});
		message.guild.members.cache.get(admin.playerid3).roles.remove(stanby).catch(console.warn = () => {});
		message.guild.members.cache.get(admin.playerid4).roles.add(playcode).catch(console.warn = () => {});
		message.guild.members.cache.get(admin.playerid4).roles.remove(stanby).catch(console.warn = () => {});
		message.guild.members.cache.get(admin.playerid5).roles.add(playcode).catch(console.warn = () => {});
		message.guild.members.cache.get(admin.playerid5).roles.remove(stanby).catch(console.warn = () => {});
		message.guild.members.cache.get(admin.playerid6).roles.add(playcode).catch(console.warn = () => {});
		message.guild.members.cache.get(admin.playerid6).roles.remove(stanby).catch(console.warn = () => {});


	}
	catch (err) {
		console.error(err);
	}
	 
				

}

})



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
member.guild.channels.cache.find(i => i.name === '롤지받기').send('안녕하세요\n캐릭터롤\n수성\n금성\n지구\n화성\n목성\n이 있습니다.\n\n명령어는 ``!롤 역할``입니다.\n\nhttps://crimesss.imweb.me/Reservation')
})


//Welcome & goodbye messages end\\
//////////////
/////////////
client.login(token);
