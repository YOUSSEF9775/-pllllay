module.exports = {
    name: 'vol',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - الرجاء دخول روم صوتي!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - لا يمكنك استعمال هذا الامر في هذا الروم !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - لايوجد موسيقي لتشغيلها !`);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`${client.emotes.error} - قم بوضع رقم صحيح !`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 1000) return message.channel.send(`${client.emotes.error} - خطي (قم بالاختيار من 1 الي 1000) !`)

        const success = client.player.setVolume(message, parseInt(args[0]));

        if (success) message.channel.send(`${client.emotes.success} - Volume set to **${parseInt(args[0])}%** !`);
    },
};
