const Discord = require("discord.js");
const fs = require("fs");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    // !warn @user <reason>
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the permission to run this command!");
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.reply("User not found!");
    if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("You cannot warn this user!");
    let reason = args.join(" ").slice(22);

    if(!warns[wUser.id]) warns[wUser.id] = {
      warns: 0
    };

    warns[wUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
      if (err) console.log(err)
    });

    let warnEmbed = new Discord.RichEmbed()
    .setDescription("- Warnings -")
    .setColor("#ff7f00")
    .addField("Warn Author:", `${message.author}`)
    .addField("Warned User:", `<@${wUser.id}>`)
    .addField("Total Warnings:", warns[wUser.id].warns)
    .addField("Warn Reason:", reason);

    let warnch = message.guild.channels.find(`name`, "warnings");
    if(!warnch) return message.reply("Warnings Channel doesn't exist.");

    warnch.send(warnEmbed);

    if(warns[wUser.id].warns == 3){
      message.guild.member(wUser).kick(reason);
      message.channel.send(`${wUser.tag} has been kicked from the server.`);
    }
    if(warns[wUser.id].warns == 5){
      message.guild.member(wUser).ban(reason);
      message.channel.send(`${wUser.tag} has been banned from the server.`);
    }

}

module.exports.help = {
  name: "warn"
}
