const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to use this command!")
  
  if (!args) return message.reply("**❌ ERROR:** You must have something to vote for!")
  if (!message.content.includes("?")) return message.reply("**❌ ERROR:** Include a `?` in your vote!")
    message.channel.send("❗ Creating vote... Please wait..")
    message.edit("✅ **Vote Created!** React Below.")
    message.delete(30)
  var admin= new Discord.RichEmbed()
        .setTitle("Vote: " + args.slice(0).join(" "))
        .setDescription("React below with ✅, ❌, or ❓")
        .setFooter("Vote requested by: " + message.author + " at: ")
        .setTimestamp()
    const pollTopic = await message.channel.sendEmbed(admin);
    pollTopic.react(`✅`);
    pollTopic.react(`❌`);
    pollTopic.react(`❓`);
};
