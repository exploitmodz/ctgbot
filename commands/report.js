const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("User not found!");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("- Reports -")
  .setColor("#e20faa")
  .addField("Reported User:", `${rUser}`)
  .addField("Reported by:", `${message.author}`)
  .addField("Channel:", message.channel)
  .addField("Report Date:", message.createdAt)
  .addField("Reason:", reason);

  let repchannel = message.guild.channels.find(`name`, "reports");
  if(!repchannel) return message.channel.send("Reports Channel not found!");

  message.delete().catch(O_o=>{});
  repchannel.send(reportEmbed);
}

module.exports.help = {
  name: "report"
}
