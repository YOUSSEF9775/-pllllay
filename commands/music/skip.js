module.exports = {
    name: 'تخطي',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - الرجاء الدخول روم صوتي !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - انت لست في روم صوتي لتشغل الموسيقي !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - لا يوجد موسيقي تعمل !`);

        const success = client.player.skip(message);

        if (success) message.channel.send(`${client.emotes.success} -  **تم التخطي** !`);
    },
};
