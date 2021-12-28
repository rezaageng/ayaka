const Discord = require("discord.js")
const {TOKEN} = require("./config.json")
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
})

client.on("ready", () => {
    console.log(`${client.user.tag} is here :D`)
})
client.on("reconnecting", () => {
    console.log(`${client.user.tag} is reconnecting`)
})
client.on("disconnect", () =>{
    console.log(`${client.user.tag} has left you`)
})

client.on("messageCreate", (msg) => {
    if (msg.content == "hi") {
        msg.reply("halo sayang <3")
    }
})

client.login(TOKEN)