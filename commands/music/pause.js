module.exports = {
    name: 'تاجيل',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - الرجاء دخول روم صوتي !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - لايوجد موسيقي لتأجيلها !`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - تم ب الفعل تأجيل هذي الموسيقي من قبل !`);

        const success = client.player.pause(message);

        if (success) message.channel.send(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} تم التأجيل !`);
    },
};
