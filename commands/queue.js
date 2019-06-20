module.exports.run = async (bot, message, args, ops) => {
 
    var guildIDData = ops.active.get(message.guild.id);
 
    if (!guildIDData) return message.channel.send("None song is being played at the moment. :unamused:.");
 
    var queue = guildIDData.queue;
    var nowPlaying = queue[0];
 
    var response = `Now playing: **${nowPlaying.songTitle}** 〢 Requested by **${nowPlaying.requester}\n\nQueue: \n**`;
 
    for (var i = 0; i < queue.length; i++) {
 
        response += `${i} 〢 **${queue[i].songTitle}** Requested by **${queue[i].requester}**\n`;
 
    }
   
    // Zenden van het bericht.
    message.channel.send(response);
 
}
 
module.exports.help = {
    name: "queue",
}