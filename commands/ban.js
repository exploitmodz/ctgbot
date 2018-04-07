const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("User not found!");
  let bReason = args.join(" ").slice(22);

  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You don't have the permission to run this command!");
  if(bUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("This user cannot be banned!");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("- Ban -")
  .setColor("#cc1c1c")
  .addField("Banned User:", `${bUser}`)
  .addField("Banned by:", `<@${message.author.id}>`)
  .addField("Punishment Date:", message.createdAt)
  .addField("Reason:", bReason);

  let banChannel = message.guild.channels.find(`name`, "bans");
  if(!banChannel) return message.channel.send("Bans Channel not found!");

  message.guild.member(bUser).ban(bReason);
  banChannel.send(banEmbed);
}

module.exports.help = {
  name: "ban"
}
