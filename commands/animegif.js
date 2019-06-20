const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (bot, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekos.life/api/v2/img/pussy')
    .end((err, response) => {
      msg.channel.send({ file: response.body.url });
    });
  } else {
    msg.channel.send(":underage: **This channel isn't NSFW!** :underage: ")
  }
};

module.exports.help = {
  name: "animegif"
}