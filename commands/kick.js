const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("User not found!");
  let kReason = args.join(" ").slice(22);

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the permission to run this command!");
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("This user cannot be kicked!");

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("- Kick -")
  .setColor("#fcc80c")
  .addField("Kicked User:", `${kUser}`)
  .addField("Kicked by:", `<@${message.author.id}>`)
  .addField("Punishment Date:", message.createdAt)
  .addField("Reason:", kReason);

  let kickChannel = message.guild.channels.find(`name`, "kicks");
  if(!kickChannel) return message.channel.send("Kicks Channel not found!");

  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);
}

module.exports.help = {
  name: "kick"
}
