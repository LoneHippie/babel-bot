const translate = require('@vitalets/google-translate-api');
const { commandList } = require('./commands');

const getCommandList = (message) => {
    message.reply(
        `Hey ${message.author.username}, here's a list of current commands available to you: \n\n${commandList()}`
    )
};

const translateToEng = async(message) => {
    if (message.type === 'REPLY') {
        const replyMessage = await message.channel.messages.fetch(message.reference.messageId);
        const { text } = await translate(replyMessage.content, { to: 'en' });
        message.channel.send(text);
    } else {
        const originMessage = message.content.split(15);
        const { text } = await translate(originMessage, { to: 'en' });
        message.channel.send(text);
    }
};

module.exports = {
    getCommandList,
    translateToEng
}