module.exports = {
    name: 'شغل',
    aliases: ['ش'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - الرجاء دخول روم صوتي !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - الرجاء دخول الروم المخصص !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - قم بوضع موسيقي لتشغيلها !`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};
