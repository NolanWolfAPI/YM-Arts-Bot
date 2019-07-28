const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
const { get } = require("snekfetch"); 
const superagent = require("superagent");
const weather = require('weather-js');
const Enmap = require("enmap");
const fs = require("fs");


const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on('ready', () => {
    console.log(`Logged in as YM Arts Bot [BETA]!`);
  client.user.setActivity("YM Arts Bot [BETA] | ym!cmds", {type: "STREAMING", url: "https://twitch.tv/Strandable"})
})


client.on('guildMemberAdd', member => {   
  const members = member.guild.memberCount;
	  const channel = member.guild.channels.find('name', 'new-friends😄');
	  if (!channel) return;
  
  let Embed = new Discord.RichEmbed()
	  .setFooter(`User Joined | ${member.guild.memberCount} Members`)
	  .setColor("PURPLE")    
	  .setAuthor(`${member.displayName} has joined ${member.guild.name}`, member.user.displayAvatarURL)
	  .setTimestamp()
	  channel.send(Embed);
  });
  
client.on('guildMemberRemove', member => {
  const members = member.guild.memeberCount;
	  const channel = member.guild.channels.find(`name`, 'welcome');
	  if(!channel) return; 
    
	  let Embed = new Discord.RichEmbed()
	  .setColor("#e26346")
	  .setAuthor(`${member.displayName}, has left ${member.guild.name}.`, member.user.displayAvatarURL)
	  .setTimestamp()
	  .setFooter(`User Left | ${member.guild.memberCount} Members`)
	  channel.send(Embed);
  });

const config = require("./misc/config.json");
client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command: ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  if (message.content.startsWith(config.prefix + "redeem ZU1U-R3L34S3")) {
    message.delete().catch();
    
  let embed = new Discord.RichEmbed()
  .setTitle("Redeemed")
  .setColor('RANDOM')
  .addField("Code has been redeemed")
  .setFooter(`${message.author.tag}, You have received life time premium. ✅⌨`) 
   message.channel.send(embed)
     
    let redeemed = new Discord.RichEmbed()
    .setTitle("Redeemed")
    .setColor('RANDOM')
    .addField("Your life time premium Zulu: https://discordapp.com/oauth2/authorize?client_id=523440085643952138&scope=bot&permissions=1446509823")
    message.author.send(redeemed)
  }
});	
      
  
client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  if (message.content.startsWith(config.prefix + "redeem KoPU-RGLP41H")) {
    message.delete().catch();
    
  let embed = new Discord.RichEmbed()
  .setTitle("Redeemed")
  .setColor('RANDOM')
  .addField("Code has been redeemed")
  .setFooter(`${message.author.tag}, You have received life time premium. :smiley: :tada:`)
   message.channel.send(embed)
     
    let redeemed = new Discord.RichEmbed()
    .setTitle("Redeemed")
    .setColor('RANDOM')
    .addField("Your life time premium Zulu: https://discordapp.com/oauth2/authorize?client_id=523440085643952138&scope=bot&permissions=1446509823")
    message.author.send(redeemed)
  }
}); 

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  if (message.content.startsWith(config.prefix + "redeem Z9Io-XM4S")) {
    message.delete().catch();
  
  let embed = new Discord.RichEmbed()
  .setTitle("Redeemed")
  .setColor('RANDOM')
  .addField("Code has been redeemed")
  .setFooter(`${message.author.tag}, You have received life time premium. 😃 🎉`)
   message.channel.send(embed)
     
    let redeemed = new Discord.RichEmbed()
    .setTitle("Redeemed")
    .setColor('RANDOM')
    .addField("Your life time premium Zulu: https://discordapp.com/oauth2/authorize?client_id=523440085643952138&scope=bot&permissions=1446509823")
    message.author.send(redeemed)
  }
});


client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  if (message.content.startsWith(config.prefix + "redeem ALIm-PR3M")) {
    message.delete().catch();
    
  let embed = new Discord.RichEmbed()
  .setTitle("Redeemed")
  .setColor('RANDOM')
  .addField("Code has been redeemed")
  .setFooter(`${message.author.tag}, You have received life time premium. 😃 🎉`)
   message.channel.send(embed)
     
    let redeemed = new Discord.RichEmbed()
    .setTitle("Redeemed")
    .setColor('RANDOM')
    .addField("Your life time premium Zulu: https://discordapp.com/oauth2/authorize?client_id=523440085643952138&scope=bot&permissions=1446509823")
    message.author.send(redeemed)
  }
});


client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  if (message.content.startsWith(config.prefix + "redeem PuLI-C3L4")) {
    message.delete().catch();
    
  let embed = new Discord.RichEmbed()
  .setTitle("Redeemed")
  .setColor('RANDOM')
  .addField("Code has been redeemed")
  .setFooter(`${message.author.tag}, You have received life time premium. 😃 🎉`)
   message.channel.send(embed)
     
    let redeemed = new Discord.RichEmbed()
    .setTitle("Redeemed")
    .setColor('RANDOM')
    .addField("Your life time premium Zulu: https://discordapp.com/oauth2/authorize?client_id=523440085643952138&scope=bot&permissions=1446509823")
    message.author.send(redeemed)
  }
});

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  if (message.content.startsWith(config.prefix + "redeem NOLN-ISGY")) {
    message.delete().catch();
    
  let embed = new Discord.RichEmbed()
  .setTitle("Redeemed")
  .setColor('RANDOM')
  .addField("Code has been redeemed")
  .setFooter(`${message.author.tag}, You have received life time premium. 😃 🎉`)
   message.channel.send(embed)
     
    let redeemed = new Discord.RichEmbed()
    .setTitle("Redeemed")
    .setColor('RANDOM')
    .addField("Your life time premium Zulu: https://discordapp.com/oauth2/authorize?client_id=523440085643952138&scope=bot&permissions=1446509823")
    message.author.send(redeemed)
  }
});

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  if (message.content.startsWith(config.prefix + "redeem H1RO-M1LP")) {
    message.delete().catch();
    
  let embed = new Discord.RichEmbed()
  .setTitle("Redeemed")
  .setColor('RANDOM')
  .addField("Code has been redeemed")
  .setFooter(`${message.author.tag}, You have received life time premium. 😃 🎉`)
   message.channel.send(embed)
     
    let redeemed = new Discord.RichEmbed()
    .setTitle("Redeemed")
    .setColor('RANDOM')
    .addField("Your life time premium Zulu: https://discordapp.com/oauth2/authorize?client_id=523440085643952138&scope=bot&permissions=1446509823")
    message.author.send(redeemed)
  }
});

client.on('guildCreate', guild => {
	  let channel = client.channels.get("526825234364629037");
    
    const embed = new Discord.RichEmbed()
    .setColor("#cde246")
    .setAuthor(`Joined ${guild.name}`)
    .setThumbnail(guild.iconURL)
    .addField("Owner", guild.owner.user.tag)
    .addField("ID", guild.id, true)
    .addField("Users", guild.memberCount, true)
    .addField("Channels", guild.channels.size, true)
    channel.send(embed);
	});

client.on('guildDelete', guild => {
	  let channel = client.channels.get("526825234364629037");
    
    const embed = new Discord.RichEmbed()
    .setColor("#cde246")
    .setAuthor(`Left ${guild.name}`)
    .setThumbnail(guild.iconURL)
    .addField("Owner", guild.owner.user.tag)
    .addField("ID", guild.id, true)
    .addField("Users", guild.memberCount, true)
    .addField("Channels", guild.channels.size, true)
    channel.send(embed);
	});

    // 31 commands
          
client.login(config.token);
