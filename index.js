require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const prefix = "fdv ";

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  bot.user.setActivity('flairdive.com', { type: 'WATCHING' });
});

bot.on('message', message => {
  if (message.content === `${prefix}ping`) {
		message.channel.send(`Ping: ${bot.ws.ping}ms`);
	}
});
