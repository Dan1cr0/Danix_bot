module.exports.run = async (bot, message, args, ops) => {
 
    var guildIDData = ops.active.get(message.guild.id);
 
    if (!guildIDData) return message.channel.send("None song is being played at the moment. :unamused:");
 
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(":warning: You need to be in same voice channel! :warning:");
 
    if (guildIDData.dispatcher.paused) return message.channel.send(":warning: The song is already paused. :warning:");
 
    guildIDData.dispatcher.pause();
 
    message.channel.send(`:pause_button: Song paused **${guildIDData.queue[0].songTitle}**. :pause_button:`);
 
}
 
module.exports.help = {
    name: "pause",
}