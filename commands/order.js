const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

        let logChannel = client.channels.get("604841888050184192")
        let error2 = new Discord.RichEmbed()
        .setAuthor("ERROR", message.author.displayAvatarURL)
        .setColor("#FF0000")
        .setDescription("Proper Usage: ym!order <order | roblox avatar>")
        .setTimestamp()
        let sugestionlol = args.slice(0).join(" ")
        if(!sugestionlol) return message.author.send('Try ym!order [message]') //can dis be send in dm?
        // Check for input
        if (!args[0]) return message.author.send(error2)
        let embed1 = new Discord.RichEmbed()
        .setDescription("Please type something to suggest next time.")
        let embed2 = new Discord.RichEmbed()
        .setAuthor(`New Order from: ${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("#e74c3c")
        .setDescription(sugestionlol)
        .setFooter(`Command: ym!order [order]`)
        .setTimestamp()

        let msg = await logChannel.send(embed2)
            .then(function (msg) { // You can only add two reacts
                msg.react("✖") 
                msg.react("✔")
                message.delete({timeout: 1000});
                message.author.send("Order Submitted. Thank you for choosing YM Arts!"); //can dis be dmmed too?
                message.delete({timeout: 1000})
                }).catch(function(error) {
                message.channel.send(error);
                });
                }
            

module.exports.help = {
    name: 'order'
}