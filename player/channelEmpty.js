module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} -لا يوجد احد في الروم الصوتي جاري ايقاف الاغاني`);
};
