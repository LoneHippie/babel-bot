const prefix = '!babel';

const commands = {
    getCommands: {
        command: `${prefix} help`,
        description: 'Get list of currently working commands'
    },
    toEnglish: {
        command: `${prefix} english`,
        description: 'Auto detect translate any language to english. If language is already in english, this command can be used for autocorrection'
    }
};

const commandList = () => {
    let str = '';

    for (const command in commands) {
        str += `${commands[command].command}: ${commands[command].description} \n`
    }

    return str;
};

module.exports = { 
    commands, 
    commandList, 
    prefix 
};