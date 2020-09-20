const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config.json");

var currentlyMovingPlayers = [];

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

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

	if (command == "goto") {
		let playerID = message.author.id;
		let playerDestinationPosition = [args[0],args[1]];

		currentlyMovingPlayers.push([playerID,playerDestinationPosition])

		//currentlyMoving.push(message.author.id);
		//console.log(currentlyMoving);
	}
})

client.login(config.token);

// !! MAIN LOOP !!
setInterval(() => {
	//movePlayers()
}, 1000)

/*
let playerCurrentPosition = []
function movePlayers() {
	if (currentlyMovingPlayers.length != 0) {
		//console.log(currentlyMoving);
		for (var movingPlayer of currentlyMovingPlayers) {
			//console.log(movingPlayer);
			if (playerCurrentPosition.length == 0) {
				// TEMP: temporary variable
				playerCurrentPosition = [0,0];
			}
			let playerDestinationPosition = movingPlayer[1];

			let journeyLength = Math.round(Math.hypot(playerCurrentPosition[0]-playerDestinationPosition[0],
				 playerCurrentPosition[1]-playerDestinationPosition[1])) //Math.hypot(x2-x1, y2-y1)

			console.log('length: ', journeyLength);

			const velocity = 1;

			let deltaX = playerDestinationPosition[0] - playerCurrentPosition[0]
			let deltaY = playerDestinationPosition[1] - playerCurrentPosition[1]
			let angle = Math.atan(deltaY, deltaX)

			let xVelocity = velocity * Math.cos(angle);
			let yVelocity = velocity * Math.sin(angle);
			//console.log(xVelocity, yVelocity);

			playerCurrentPosition[0] += xVelocity;
			playerCurrentPosition[1] += yVelocity;

			if (journeyLength <= 0) {
				const index = currentlyMovingPlayers.indexOf(movingPlayer);
					if (index > -1) {
						playerCurrentPosition[0] = parseFloat(playerDestinationPosition[0])
						playerCurrentPosition[1] = parseFloat(playerDestinationPosition[1])
  					currentlyMovingPlayers.splice(index, 1);
					}
			}
			console.log(playerCurrentPosition, playerDestinationPosition);
		}
		console.log('moving');

	}
}
*/
