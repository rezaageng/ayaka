const Discord = require("discord.js")
const { DisTube } = require("distube")
require("dotenv").config()

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_VOICE_STATES"],
})

let bot = {
  client,
  prefix: "ay.",
  owners: "465403883469012992",
}

client.distube = new DisTube(client, {
  searchSongs: 10,
  searchCooldown: 30,
  leaveOnEmpty: false,
  leaveOnFinish: false,
  leaveOnStop: false,
})

client.commands = new Discord.Collection()
client.events = new Discord.Collection()
client.slashcommands = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) =>
  require("./handlers/commands")(bot, reload)
client.loadSlashCommands = (bot, reload) =>
  require("./handlers/slashcommands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)
client.loadSlashCommands(bot, false)

module.exports = bot

client.login(process.env.TOKEN)
