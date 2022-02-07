module.exports = {
  name: "interactionCreate",
  run: async (bot, interaction) => {
    const { client } = bot

    if (!interaction.isCommand() && !interaction.isButton()) return
    if (!interaction.inGuild())
      return interaction.reply("cannot use this command on this server")

    // Slash Command
    if (interaction.isCommand()) {
      const slashcmd = client.slashcommands.get(interaction.commandName)

      if (!slashcmd) return interaction.reply("Invalid slash command")
      if (slashcmd.perm && !interaction.member.permissions.has(slashcmd.perm))
        return interaction.reply(
          "You dont have permission to use this slash command"
        )
      await slashcmd.run({ ...bot, interaction })
    }

    // Button
    if (interaction.isButton()) {
      const [name, ...params] = interaction.customId.split("-")
      const button = client.buttons.get(name)

      if (!button) return
      button.run({ ...bot, interaction, params })
    }
  },
}
