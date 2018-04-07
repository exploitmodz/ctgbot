const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let servericon = message.guild.displayAvatarURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("- Server Information -")
  .setColor("#ea2d0b")
  .setThumbnail(servericon)
  .addField("Server Name:", message.guild.name)
  .addField("Created on:", message.guild.createdAt)
  .addField("Total Members:", message.guild.memberCount);

  return message.channel.send(serverembed);
}

module.exports.help = {
  name: "server"
}
