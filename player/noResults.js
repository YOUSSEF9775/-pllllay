module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - عذرا غير متاح ${query} !`);
};
