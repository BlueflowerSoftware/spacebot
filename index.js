const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config.json");

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

// !! MAIN LOOP !!
setInterval(() => {
	//Calculate new position of moving players

}, 1000)

client.on('message', async message => {
  if(message.author.bot) return;
  // This game can only be played in the bot's dms
  if(!(message.channel.type === "dm")) return;

  console.log(message.content);

  let contentArray = message.content.split(/ +/g);
  const command = contentArray[0];
  contentArray.shift()
  const args = contentArray

  console.log(command);
  console.log(args);
})

client.login(config.token);
