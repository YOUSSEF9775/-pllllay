module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - تم تشغل ${track.title} في ${message.member.voice.channel.name} ...`);
};
