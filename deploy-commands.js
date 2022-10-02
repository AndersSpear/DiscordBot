#!/home/pi/n/bin/node
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientID, guildID, token } = require('/home/pi/projects/discord_bot/config.json');
const fs = require("node:fs");

const commands = [];

const commandFiles = fs.readdirSync('/home/pi/projects/discord_bot/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`/home/pi/projects/discord_bot/commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientID, 770084669038395452), { body: commands })
	.then(() => console.log('Successfully registered application commands bolo.'))
	.catch(console.error);

rest.put(Routes.applicationGuildCommands(clientID, 957001225382023228), { body: commands })
	.then(() => console.log('Successfully registered application commands orse.'))
	.catch(console.error);
	

