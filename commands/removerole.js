const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You don't have the permission to run this command!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("User not found!");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Role not specified! Do you even have fingers?");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Does that role exist?");

  if(!rMember.roles.has(gRole.id)) return message.reply("This user doesn't has that role!");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`Sorry pal! You have been downgraded to ${gRole.name}`)
  }catch(e){
  message.channel.send(`Sorry <@${rMember.id}>! You have been downgraded from ${gRole.name}`)
  }
  }

module.exports.help = {
  name: "removerole"
}
