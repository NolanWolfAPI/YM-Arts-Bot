const Discord = require("discord.js");

 exports.run = (client, message, args) => {

   let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Command List')  
    .setFooter("Desired Nightclub Bot | Developed by CrxiticalNolan@0530")
    .addField("`ym!abous-us`", "Information about YM Arts. :smiley:")
    .addField("`ym!avatar`", "Posts the profile picture of the mention (@) user.")
    .addField("`ym!ban`", "Ban a user from the YM Arts server.")
    .addField("`ym!cmds`", "The command you are in right now. Displays all commands.")
    .addField("`ym!embed`", "Embeds a message.")
    .addField("`ym!flip`", "Flips a message given.")
    .addField("`ym!joke`", "Gives a random generated joke.")
    .addField("`ym!kick`", "Kicks a member from the server.")
    .addField("`ym!mute`", "Mutes a member from the server, certain amount of time.")
    .addField("`ym!unmute`", "Unmutes a member of the server, but that member must be muted first.")
    .addField("`ym!purge`", "Deletes a certain amount of messages, up to 100.")
    .addField("`ym!say`", "Makes the bot say a message.")
    .addField("`ym!serverinfo`", "Gives information on the server.")
    .addField("`ym!order`", "Order your drawing. Please include ONLY links of pictures, they need to be appropriate.")
    .addField("`ym!userinfo`", "Gives information on the mentioned (@) user.")
message.delete().catch();
message.author.send(embed);

 }