console.log(message.author.id)
console.log(message.guild.ownerId)
console.log(message.author.username)
let guild = await client.guilds.fetch('812915040713310250') ///길드아이디
let user1 = await guild.members.fetch(user.uid) ///유저아이디
message.member.roles.remove('1022087211266617344') ///롤제거 메시지 보낸이에게
message.member.roles.add(playcode)/////.롤추가 메시지 보낸이에게
await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true }); 본인만 보는 메시지
const wait = require('node:timers/promises').setTimeout;///딜레이 구문
message.guild.members.cache.get(user.id).roles.add(playcode);/////특정 유저에게 롤주기 성공!!
message.guild.members.cache.get(user.id).roles.remove(playcode);/////특정 유저에게 롤제거 
(message.channel.id === 'ChannelID')///특정채널 체크
client.users.cache.find(user => user.id === '317655426868969482')//유저증명
.edit({ content: "⌛"+"@everyone 시간종료!" })///메시지 수정
console.log(message.guild.id)
console.log(message.channel.id)
client.user.setAvatar(botplay)////봇이미지 바꾸기
//await client.user.setUsername(botplay)////봇이름바꾸기
await message.author.send()///명령어 사용자에게 dm
const user = await client.users.fetch('id');
user.send('content');///// 특정인에게 디엠
await message.member.setNickname(arguments) ///닉네임변경
await message.author.send({ files: ['./roll/Preview'] });//파일 보내기
await message.author.send({ content: "내용" }) //컨텐츠 메시지
if(message.member.hasPermission("ADMINISTRATOR"))////어드민 퍼미션
const channel = client.channels.cache.get('1022125527118663700');
await channel.send("15초안에 모두 준비를 마쳐주세요")////특정채널 메시지
//////////////// 메시지 아이디 수정
client.channels.cache
    .get('1011973926559162408')
    .messages.fetch('1023880247403356230')
    .then((msg) => msg.edit('~~**010> 다이어리**~~'));

/////////////
/////트라이 캐치
try {
		
} catch (error) {
	console.error(error);
	
}
/////

const channel = message.guild.channels.cache.find(ch => ch.name === '단서채널-1');
channel.messages.fetch('1022151084912955523').then(function (message) { message.react("👍") })///특정채널에 메시지 리액트



음성채널 보이스 음성 틀기
// const connection = joinVoiceChannel({
//     channelId: message.member.voice.channelId,
//     guildId: message.guildId,
//     adapterCreator: message.guild.voiceAdapterCreator
    
// })


// const player = createAudioPlayer()
// const resource = createAudioResource('./music/1234.mp3')


// player.play(resource, {seek: 0, volume: 1.0})
// connection.subscribe(player);

// player.on(AudioPlayerStatus.Idle, () => {
//   connection.destroy();
// });


///////ineraction code
connection = joinVoiceChannel({
	channelId: '981144982201171992',
	guildId: interaction.guildId,
	adapterCreator: interaction.channel.guild.voiceAdapterCreator,
  });

console.log(interaction.channelId)
console.log(interaction.guildId)
console.log('노래')
const player = createAudioPlayer()
const resource = createAudioResource('./music/calling.mp3')


player.play(resource, {seek: 0, volume: 1.0})
connection.subscribe(player);

player.on(AudioPlayerStatus.Idle, () => {
connection.destroy();
});
///////////////////////////////////

/////채널내 모든메시지 삭제
// async () => {
//   let fetched;
//   do {
//     fetched = await channel.fetchMessages({limit: 100});
//     message.channel.bulkDelete(fetched);
//   }
//   while(fetched.size >= 2);
// }

////스위치
switch(arguments)
         {
            case '금성' : 
            {
               console.log(arguments)
               await message.author.send({ files: ['./roll/금성.txt'] });
               await message.author.send({ content: "일정과 시간을 조율하신후 약속된 시간에\n``!준비``를\n모든 플레이어가 15초내에 치시면 됩니다.\n카운트는 명령어 사용후  15초입니다." })
               break;
            }

         }




         /////////
	 const playrecord = new EmbedBuilder()
	 .setColor(0x0099FF)
	 .setTitle('타로마스터')
	 .setURL('https://discord.js.org/')
	 .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	 .setDescription('타로마스터 살인사건')
	 .setThumbnail('https://i.imgur.com/AfFp7pu.png')
	 .addFields(
		 { name: admin.starttime+"시작", value: 'Some value here' },
		 { name: '\u200B', value: '\u200B' },
		 { name: 'Inline field title', value: 'Some value here', inline: true },
		 { name: 'Inline field title', value: 'Some value here', inline: true },
	 )
	 .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	 .setImage('https://i.imgur.com/AfFp7pu.png')
	 .setTimestamp()
	 .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
	 const channel = client.channels.cache.get(record);
await channel.send("15초안에 모두 준비를 마쳐주세요")////특정채널 메시지