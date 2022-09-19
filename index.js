const fs = require('node:fs');
const path = require('node:path');

const { Client, GatewayIntentBits, Collection, GuildMember, PermissionFlagsBits } = require('discord.js');
const { token, prefix } = require('./config.json');
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
const { RESTJSONErrorCodes } = require('discord.js');
const { VoiceConnectionStatus, AudioPlayerStatus } = require('@discordjs/voice');
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


////롤
let roll1 = "null"
let roll2 = "null"
let roll3 = "null"
let roll4 = "null"
let roll5 = "null"

//////

client.once('ready', () => {
  console.log('준비됨');
});

client.on('messageCreate', async (message) => { 
	////if(!message.member.permissions.has('Administrator')) return;
	if(!message.content.startsWith(prefix)) return;
	if(message.author.bot) return;
	/////????????????????? if (message.guild.ownerId) return
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift();
	const coget = client.commands.get(command);
	if(!client.commands.has(command)) return

	try{
		coget.execute(message, args);


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

client.login(token);