const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  // !clear <nº of mssgs to delete>
  //let help = fs.readFileSync("./helpcmd.txt", "utf8");
  let helpcs = new Discord.RichEmbed()
  .setImage('https://i.imgur.com/iJLJM6b.png');

message.channel.send("This are my current commands!");
  message.channel.send(helpcs);
}

module.exports.help = {
  name: "help"
}
