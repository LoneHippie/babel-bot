const translate = require('@vitalets/google-translate-api');
const { commandList } = require('./commands');

const getCommandList = (message) => {
    message.reply(
        `Hey ${message.author.username}, here's a list of current commands available to you: \n\n${commandList()}`
    )
};

const translateToEng = async(message) => {
    if (message.type !== 'REPLY') {
        message.channel.send('Command must be used within a Reply to another message');
        return;
    }

    const replyMessage = await message.channel.messages.fetch(message.reference.messageId);

    const { text } = await translate(replyMessage.content, { to: 'en' });
    
    message.channel.send(text);
};

module.exports = {
    getCommandList,
    translateToEng
}