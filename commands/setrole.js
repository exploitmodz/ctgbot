const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  // !setrole @user <role name>
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You don't have the permission to run this command!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("User not found!");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Role not specified! Do you even have fingers?");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Does that role exist?");

  if(rMember.roles.has(gRole.id)) return message.reply("This user already has that role!");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Congratulations! You have been promoted to ${gRole.name}`)
  }catch(e){
  message.channel.send(`Congratulations <@${rMember.id}>! You have been promoted to ${gRole.name}`)
  }
}

module.exports.help = {
  name: "setrole"
}
