const Discord = require("discord.js")
const TOKEN = "ODk2NjI2NjY5NDg0NDAwNjYy.YWJ2qA.uLH-mDg6OAQrTtCvEJdlKCvE2CE"
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
})

client.on("ready", () => {
    console.log(`${client.user.tag} is here :D`)
})

client.on("messageCreate", (msg) => {
    if (msg.content == "hi") {
        msg.reply("halo sayang <3")
    }
})

client.login(TOKEN)