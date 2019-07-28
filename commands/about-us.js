const Discord = require("discord.js")
  
exports.run = (client, message, args) => {
  
let tos = new Discord.RichEmbed()
.setTitle('About YM Arts')
.setDescription('Information')
.addField('🎨Head Artist:', '\nROBLOX: hollowclacam\nDisocrd:_XxTheYoutubeMasterxX_#4589')
.addField('🌅Examples(Few):','\n[Doodle For Google](https://media.discordapp.net/attachments/604808101043896322/604859767097262084/image2.jpg)\n[Microphone Rage](https://media.discordapp.net/attachments/604808101043896322/604860025449611279/image0.jpg)\n[Midnight](https://media.discordapp.net/attachments/604808101043896322/604861681713283075/image0.jpg)')
.addField('☺Drawing Tools:', 'TBN')
.addField(':staff_emoji: Leadership Staff:', '\n🎨Head Artist: _XxTheYoutubeMasterxX_#4589\n🖥Discord Manager: Desirevoids#1836\n📷Order Manager: Vacant\n👥Community Service Manager: Vacant\n👔Staffing Manager: Vacant')
.setFooter('©2019 YM Arts')
 message.channel.send(tos)
  
 }