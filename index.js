const Discord = require("discord.js")
require("dotenv").config()
const generateImage = require("./generateImage")
let usernamex = "ayase"

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
})

client.on("ready", () => {
    console.log(`${client.user.tag} is here :D`)
})

client.on("messageCreate", (msg) => {
    if (msg.content == "hi") {
        msg.reply("hii <3")
    }
})

// welcome messeges
const welcomeChId = "883715121019486240"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChId).send({
        content: `<@${member.id}> welcome to the server :D`,
        files: [img],
    })
})

client.login(process.env.TOKEN)
