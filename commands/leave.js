module.exports.run = async (bot, message, args) => {

    if (!message.member.voiceChannel) return message.channel.send("You need to be in :microphone:  **voice channel** :microphone:");

    if (!message.guild.me.voiceChannel) return message.channel.send(":warning: Bot isn't connected on any voice channel! :warning: ");

    if (message.guild.me.voiceChannelID != message.member.voiceChannelID) return message.channel.send(":warning: You need to be in same voice channel! :warning:");

    message.guild.me.voiceChannel.leave();

    message.channel.send(":wave::skin-tone-2:  **Bye, im leaving** :wave::skin-tone-2:");

}

module.exports.help = {
    name: "leave"
}