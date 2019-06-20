const discord = require("discord.js");
const botconfig = require("./botconfig.json");

const fs = require("fs");

const active = new Map();

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <= 0) {
      console.log("Could not find any files");
      return;
    }

    jsFiles.forEach((f,i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`${f} is loaded!`);

        bot.commands.set(fileGet.help.name, fileGet);

    })

});


bot.on("ready", async () => {

  console.log(`${bot.user.username} is online!`);

  bot.user.setActivity("YouTube!", {type: "LISTENING"});

});


bot.on("message", async message => {

  if(message.author.bot) return;

  if(message.channel.type === "dm") return;

  var prefix = botconfig.prefix;

  var messageArray = message.content.split(" ");

  var command = messageArray[0];

  var args = messageArray.slice(1);


  var commands = bot.commands.get(command.slice(prefix.length));

  var options = {

    active: active

  }

  if(commands) commands.run(bot, message, args, options);

});


bot.login(botconfig.token);