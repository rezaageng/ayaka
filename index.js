const Discord = require("discord.js")
require("dotenv").config()
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]
})

client.on("ready", () => {
    console.log(`${client.user.tag} is here :D`)
})

client.on("messageCreate", (msg) => {
    if (msg.content == "hi") {
        msg.reply("halo sayang <3")
    }
})

// welcome messeges
const welcomeChId = "883715121019486240"

client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(welcomeChId).send(`<@${member.id}> welcome to the server :D`)
})

client.login(process.env.TOKEN)