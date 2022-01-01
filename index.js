const Discord = require("discord.js")
require("dotenv").config()
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

client.login(process.env.TOKEN)