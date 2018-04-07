const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let slappedUser = (message.mentions.users.first())
     if (!slappedUser) return message.channel.send("You must mention someone!");

     let slappedEmbed = new Discord.RichEmbed()
     .setTitle("Someone got slapped!")
     .setColor(0x1D82B6)
     .setDescription(message.author + ' slapped ' + slappedUser + '!')
     .setImage('https://media0.giphy.com/media/j3iGKfXRKlLqw/giphy.gif');

     message.channel.send(slappedEmbed);
}

module.exports.help = {
  name: "slap"
}
