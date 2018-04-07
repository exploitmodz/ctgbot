const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("You don't have the permission to run this command!");
  if(!args[0] || args[0 == "help"]) return message.reply("How to use:     !prefix <new prefix>");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if(err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#103be8")
  .setTitle("Prefix Changed!")
  .setDescription(`New prefix is ${args[0]}`);

  message.channel.send(sEmbed);
}

module.exports.help = {
  name: "prefix"
}
