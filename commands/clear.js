const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  // !clear <nº of mssgs to delete>
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the permission to run this command!");
  if(!args[0]) return message.channel.send("Yo, specify a number between 1 and 100! :wrench:");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });

}

module.exports.help = {
  name: "clear"
}
