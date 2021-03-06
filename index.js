require('dotenv').config();

const { Client, Intents } = require('discord.js');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

const { commands } = require('./commands');
const {
    getCommandList,
    translateToEng
} = require('./actions');

client.on('ready', () => {
    console.log(`Babel Bot logged in as ${client.user.tag}`)
});

client.on('messageCreate', msg => {
    switch(true) {
        case msg.content === commands.getCommands.command:
            getCommandList(msg);
            break;
        case msg.content === commands.toEnglish.command:
            translateToEng(msg);
            break;
        case msg.content.startsWith(commands.toEnglish.command):
            translateToEng(msg);
            break;
        default:
            return;
    }
})

client.login(process.env.CLIENT_TOKEN);