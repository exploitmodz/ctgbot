const Discord = require("discord.js");
const fs = require("fs");

let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the permission to run this command!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("User not found!");
  let warnlevel = warns[wUser.id].warns;

  message.channel.send(`<@${wUser.id}> has a total of ${warnlevel} warnings.`);

}

module.exports.help = {
  name: "warnlevel"
}
