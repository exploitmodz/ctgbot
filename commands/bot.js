const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let boticon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("- Current Bot Information -")
  .setColor("#1ed878")
  .setThumbnail(boticon)
  .addField("Bot Name", bot.user.username)
  .addField("Release Date", bot.user.createdAt)
  .addField("Developer:", "- єχρℓσιт_мσ∂z -#0819");

  return message.channel.send(botembed);
}

module.exports.help = {
  name: "bot"
}
