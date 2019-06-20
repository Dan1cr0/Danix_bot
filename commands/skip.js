const discord = require("discord.js");
 
module.exports.run = async (bot, message, args, ops) => {
 
    var guildIDData = ops.active.get(message.guild.id);
 
    if (!guildIDData) return message.channel.send("None song is being played at the moment. :unamused:");
 
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(":warning: You need to be in same voice channel! :warning:");
 
    var amountUsers = message.member.voiceChannel.members.size;
 
    var amountSkip = Math.ceil(amountUsers / 2);
 
    if (!guildIDData.queue[0].voteSkips) guildIDData.queue[0].voteSkips = [];
 
    if (guildIDData.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`:no_entry_sign:  **Sorry, you have already voted!** ${guildIDData.queue[0].voteSkips.length}/${amountSkip}`);
 
    guildIDData.queue[0].voteSkips.push(message.member.id);
 
    ops.active.set(message.guild.id, guildIDData);
 
    if (guildIDData.queue[0].voteSkips.length >= amountSkip) {
 
        message.channel.send(":fast_forward: **Skiped!**");
 
        return guildIDData.dispatcher.emit("end");
 
    }
 
    message.channel.send(`:white_check_mark: **Added skip request**. ${guildIDData.queue[0].voteSkips.length}/${amountSkip}`);
 
}
 
module.exports.help = {
    name: "skip",
}