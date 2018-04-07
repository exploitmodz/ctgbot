const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Cheat Engine!", {type: "Reversing"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  let prefix = prefixes[message.guild.id].prefixes;
  //console.log(prefix); // no need

// DON'T DELETE / THIS IS /COMMANDS/
  //let prefix = botconfig.prefix; // no need
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
  // END OF /COMMANDS/




//*  if(cmd === `${prefix}join`){
  //  return message.channel.send(this.joinedTimestamp = new Date(data.joined_at).getTime());
//}
// message.channel.send(guild.membmer.joinedAt())
  // if(cmd === `${prefix}ping`){
  //   return message.channel.send(":ping_pong: Pong!");
  // }
  // // !server Command
  // if(cmd === `${prefix}server`){
  //
  //
  // }
  // //End !server Command
  // // !bot Command
  // if(cmd === `${prefix}bot`){
  //
  //
  // }
  // // End of !bot Command
  //
  // // !Report
  // if(cmd === `${prefix}report`){
  //   // !report @user reason
  //
  //
  //   return;
  // }
  // // End !report
  //
  // //!kick Command
  //
  // if(cmd === `${prefix}kick`){
  //   // !kick @user <reason>
  //
  //
  //   return;
  // }
  //
  // // End !kick
  //
  // // !ban Command
  //
  // if(cmd === `${prefix}ban`){
  //   // !kick @user <reason>
  //
  //
  //   return;
  // }

  // End !ban





});
bot.login(botconfig.token);
