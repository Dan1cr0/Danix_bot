module.exports.run = async (bot, message, args, ops) => {
 
    var guildIDData = ops.active.get(message.guild.id);
 
    if (!guildIDData) return message.channel.send("None song is being played at the moment. :unamused:");
 
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(":warning: You need to be in same voice channel! :warning:");
 
    if (!guildIDData.dispatcher.paused) return message.channel.send(":warning: The song is already playing. :warning:");
 
    guildIDData.dispatcher.resume();
 
    message.channel.send(`:arrow_forward: Song started **${guildIDData.queue[0].songTitle}**. :arrow_forward:`);
 
}
 
module.exports.help = {
    name: "resume",
}