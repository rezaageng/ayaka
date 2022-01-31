const guildId = "883715120293896213"

module.exports = {
  name: "ready",
  run: async (bot) => {
    const { client } = bot
    const guild = client.guilds.cache.get(guildId)

    if (!guild) {
      return console.error("Guild not found")
    }

    await guild.commands.set([...client.slashcommands.values()])

    console.log(`Loaded ${client.slashcommands.size} slash command`)
    console.log(`${client.user.tag} is here :D`)
    bot.client.user.setActivity("You ｏ(≧▼≦○〃", { type: "WATCHING" })
  },
}
