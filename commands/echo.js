// commands/til.js
module.exports = {
    name: 'echo',
    description: 'Responds with the content of the command',
    execute(message, args) {
        const commandContent = args.join(' ');
        message.channel.send(`echo: ${commandContent}`);
    },
};
