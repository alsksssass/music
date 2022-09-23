const fs = require('node:fs');
const path = require('node:path');

const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { token} = require('./config.json');
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
const { RESTJSONErrorCodes } = require('discord.js');
const { VoiceConnectionStatus, AudioPlayerStatus } = require('@discordjs/voice');
const message = require('./prefix/message');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
// When the client is ready, run this code (only once)
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}
client.once('ready', () => {
  console.log('준비됨');
});

client.on('messageCreate', async (message) => { // When a message is created
	    if (message.author.bot) return;
		const prefix ="!"
		const args = message.content.split(" ");
	if(message.content.startsWith(`!타이머`)) { // If the message content is "!ping"
		
		
		let timecc = args[1]*60
	  const tic = await message.reply("⏳"+parseInt((timecc / 60)/60)+"시간"+parseInt((timecc / 60)%60)+"분"+(timecc % 60)+"초 타이머 시작")
	  var timer = setInterval(() => {
		  timecc --
		  tic.edit({ content: "⏳"+parseInt((timecc / 60)/60)+"시간"+parseInt((timecc / 60)%60)+"분"+(timecc % 60)+"초남음" })
		  .catch(console.warn = () => {});
		  
		  if (timecc === 0) {
			  clearInterval(timer);
			  tic.edit({ content: "⌛"+"@everyone 시간종료!" })
			  .catch(console.warn = () => {});
			  }	
}, 1000)
	} else if(message.content.startsWith(`!말하기`)) { // Otherwise, if the message is "!pong"
	
		message.channel.send(`args[0]: ${args[0]}, args[1]: ${args[1]}`);
	}
	else if(args[0] === `!비번` && client.users.cache.find(user => user.id === '317655426868969482')) { 
client.user.flags.has(administer)
		if(args[1] == 456)
		{
		message.channel.send((args[1])+"는 정답이다");
		}
		else{
			const message1 = message.channel.send((args[1])+"는 정답이 아니다")
		;(await message1).react('❤️');
		
		const channel = client.channels.cache.get('1011973926559162408');
		channel.send('This is a message');

		}
	}
else{console.log('no')}

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

client.login(token);


console.log(message.author.id)
console.log(message.guild.ownerId)
console.log(message.author.username)
let guild = await client.guilds.fetch('812915040713310250')
let user1 = await guild.members.fetch(user.uid)
message.member.roles.remove('1022087211266617344')
message.member.roles.add(playcode)/////.removeRole(options)


message.guild.members.cache.get(user.id).roles.add(playcode);/////특정 유저에게 롤주기 성공!!
message.guild.members.cache.get(user.id).roles.remove(playcode);/////특정 유저에게 롤제거 
(message.channel.id === 'ChannelID')///특정채널 체크
