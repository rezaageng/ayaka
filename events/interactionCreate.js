module.exports = {
  name: "interactionCreate",
  run: async (bot, interaction) => {
    const { client } = bot

    if (!interaction.isCommand()) return
    if (!interaction.inGuild())
      return interaction.reply("cannot use this command on this server")

    const slashcmd = client.slashcommands.get(interaction.commandName)

    if (!slashcmd) return interaction.reply("Invalid slash command")
    if (slashcmd.perm && !interaction.member.permissions.has(slashcmd.perm))
      return interaction.reply(
        "You dont have permission to use this slash command"
      )
    await slashcmd.run({ ...bot, interaction })
  },
}
