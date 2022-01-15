const Discord = require("discord.js")
require("dotenv").config()
// const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
})

let bot = {
    client,
    prefix: "ay.",
    owners: "465403883469012992",
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

// client.on("ready", () => {
//     console.log(`${client.user.tag} is here :D`)
//     client.user.setActivity("You ｏ(≧▼≦○〃", { type: "WATCHING" })
//     require("http")
//         .createServer((req, res) => res.end(`${client.user.tag} is here :D`))
//         .listen(3000)
// })

// client.on("messageCreate", (msg) => {
//     if (msg.content == "hi") {
//         msg.reply("hii <3")
//     }
// })

// // welcome messeges
// const welcomeChId = "883715121019486240"

// client.on("guildMemberAdd", async (member) => {
//     const img = await generateImage(member)
//     member.guild.channels.cache.get(welcomeChId).send({
//         content: `<@${member.id}> welcome to the server :D`,
//         files: [img],
//     })
// })

// client.login(process.env.TOKEN)
