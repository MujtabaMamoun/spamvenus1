const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("527251692949995530")
setInterval(function() {
channel.send(`**Venus best server** , **Venus best server** , **Venus best server** , **Venus best server** ,**Venus best server** ,**Venus best server** ,**Venus best server** ,**Venus best server** ,**Venus best server** ,**Venus best server** ,**Venus best server** ,**Venus best server**`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
